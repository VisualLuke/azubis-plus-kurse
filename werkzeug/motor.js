// Gemeinsamer Motor der Erklärvideos: Akteure, Tweens, Cues, Text-Animation, Kamera.
// Jede Szene ruft am Ende start(dauer) auf.
/* ---------- Mini-Engine: Akteure mit Tweens, alles aus t berechnet (deterministisch) ---------- */
const E = {
  out: x => 1 - Math.pow(1 - x, 3),
  in: x => x * x * x,
  inout: x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  back: x => { const c = 1.6; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); },
  bounce: x => { const n = 7.5625, d = 2.75;
    if (x < 1 / d) return n * x * x; if (x < 2 / d) return n * (x -= 1.5 / d) * x + .75;
    if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + .9375; return n * (x -= 2.625 / d) * x + .984375; },
  lin: x => x,
  // sanfter Überschwung (für große Elemente), weiches Auslaufen, weiche Kurve
  sanft: x => { const c = 1.1; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); },
  weich: x => x >= 1 ? 1 : 1 - Math.pow(2, -10 * x),
  sinus: x => -(Math.cos(Math.PI * x) - 1) / 2,
};
const clamp = x => Math.max(0, Math.min(1, x));
const STANDARD = { x: 0, y: 0, s: 1, sx: 1, sy: 1, r: 0, o: 1, draw: 0 };
const AKTEURE = new Map();
const HOOKS = [];
const CUES = [];            // [t, klang] – für die Tonspur
const $ = s => document.querySelector(s);

function akteur(id, basis, rel = false) {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  const a = { el, basis: { ...STANDARD, ...basis }, tw: [], rel };
  AKTEURE.set(el, a);
  return a;
}
// Tweens eines Akteurs laufen in zeitlicher Reihenfolge; jeder startet dort, wo der Akteur zu seinem Startzeitpunkt steht –
// egal, in welcher Reihenfolge sie im Skript stehen. So entstehen keine Sprünge durch später eingefügte, früher startende Tweens.
function wert(a, p, t, bis = Infinity) {
  if (a.unsortiert) { a.tw.sort((x, y) => x.t0 - y.t0 || x.nr - y.nr); a.unsortiert = false; }
  let v = a.basis[p];
  for (let i = 0; i < a.tw.length && i < bis; i++) {
    const w = a.tw[i];
    if (w.t0 > t) break;
    if (!(p in w.to)) continue;
    const von = w.from[p] ??= wert(a, p, w.t0, i);
    const u = w.e(clamp((t - w.t0) / w.d));
    v = von + (w.to[p] - von) * u;
    if (p === 'y' && w.bogen) v -= w.bogen * 4 * u * (1 - u);      // Flugbahn: Bogen nach oben
  }
  return v;
}
// tw(ids, Start, Dauer, Ziel, Easing, { bogen }) – ids als String oder Liste; Start = Zustand des Akteurs zum Zeitpunkt t0
let TW_NR = 0;
function tw(ids, t0, d, to, e = 'out', opt = {}) {
  for (const id of [].concat(ids)) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    const a = AKTEURE.get(el);
    if (!a) throw new Error('Kein Akteur: ' + (el?.id || id));
    a.tw.push({ t0, d: Math.max(d, 1e-4), to, from: {}, e: E[e], nr: TW_NR++, bogen: opt.bogen || 0 });
    a.unsortiert = true;
  }
}
const set = (ids, t, to) => tw(ids, t, 0, to, 'lin');
const cue = (t, k) => CUES.push([+t.toFixed(3), k]);

// Text: Wörter einzeln einblenden
function textAkteure(blockId) {
  const block = document.getElementById(blockId);
  block.querySelectorAll('.titel,.unter').forEach(z => {
    z.innerHTML = z.textContent.split(' ').map(w => `<span class="w">${w} </span>`).join('');
  });
  const teile = [...block.querySelectorAll('.eyebrow,.w,.punkt')];
  teile.forEach(el => akteur(el, { o: 0, y: 40 }, true));
  akteur(block, { o: 1 }, true);
  return teile;
}
function textEin(blockId, t0, pause = {}) {
  const block = document.getElementById(blockId);
  let t = t0;
  for (const el of block.querySelectorAll('.eyebrow,.w,.punkt')) {
    if (el.classList.contains('w') && el.closest('.unter') && pause.unter) { if (t < pause.unter) t = pause.unter; }
    if (el.classList.contains('punkt') && pause.liste) { t = pause.liste.shift(); }
    tw(el, t, .6, { o: 1, y: 0 }, 'back');
    t += el.classList.contains('w') ? .07 : .12;
  }
}
// Text im Bild, Motion-Graphics-Variante: jedes Wort steigt aus einer Maske (kein Marker – nicht CI-konform).
// zeiten: optional eine Liste von Startzeiten je Wort (für Wörter im Takt der Stimme)
function titelAkteure(blockId) {
  const block = document.getElementById(blockId);
  block.querySelectorAll('.titel,.unter').forEach(z => {
    const teile = [];
    z.childNodes.forEach(n => {
      n.textContent.split(/(\s+)/).filter(w => w.trim()).forEach(w => teile.push(
        `<span class="w maske"><span class="m"><span class="wi">${w}</span></span></span> `));
    });
    z.innerHTML = teile.join('');
  });
  const woerter = [...block.querySelectorAll('.w')];
  // Startversatz aus der Maskenhöhe: bei großer Schrift reichen feste 90 px nicht, sonst schauen Buchstaben oben heraus
  woerter.forEach(w => {
    const m = w.querySelector('.m'), fs = parseFloat(getComputedStyle(m).fontSize) || 60;
    akteur(w.querySelector('.wi'), { y: Math.max(90, Math.ceil(m.offsetHeight + fs * .35)) }, true);
  });
  akteur(block, { o: 1 }, true);
  return woerter;
}
function titelEin(blockId, t0, zeiten) {
  const woerter = titelAkteure(blockId);
  let t = t0;
  woerter.forEach((w, i) => {
    if (zeiten && zeiten[i] != null) t = zeiten[i];
    else if (w.closest('.unter') && zeiten?.unter && t < zeiten.unter) t = zeiten.unter;
    tw(w.querySelector('.wi'), t, .7, { y: 0 }, 'weich');
    t += .08;
  });
}
function textAus(blockId, t0) { tw(blockId, t0, .3, { o: 0, y: -40 }, 'in'); }

function render(t) {
  for (const a of AKTEURE.values()) {
    const g = p => wert(a, p, t);
    const o = g('o');
    a.el.style.opacity = o;
    a.el.style.visibility = o <= 0.001 ? 'hidden' : 'visible';
    // schweben: sanftes Auf und Ab (Amplitude in px), Phase je Akteur fest -> deterministisch
    const sw = a.basis.schweben ? a.basis.schweben * Math.sin(t * 1.9 + (a.phase ??= [...(a.el.id || 'x')].reduce((h, c) => h + c.charCodeAt(0), 0) % 7)) : 0;
    const tr = `translate(${g('x')}px,${g('y') + sw}px)` + (a.rel ? '' : ' translate(-50%,-50%)') +
      ` rotate(${g('r')}deg) scale(${g('s') * g('sx')},${g('s') * g('sy')})`;
    a.el.style.transform = tr;
    if (a.tw.some(w => 'draw' in w.to))
      a.el.querySelectorAll('.zeichnen').forEach(p => { p.style.strokeDasharray = '1 1'; p.style.strokeDashoffset = 1 - g('draw'); });
  }
  for (const h of HOOKS) h(t);
}

/* ---------- Sprachdaten: Satz- und Wortzeiten aus sprache.json (werkzeug/stimme.mjs) ---------- */
// Zeiten sind Sekunden in der Aufnahme – im Film noch A(…) drumherum.
const SPRACHDATEN = window.SPRACHDATEN || { saetze: [] };
const satz = nr => SPRACHDATEN.saetze[nr - 1] || (() => { throw new Error('Satz fehlt: ' + nr); })();
const _norm = w => w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
// wortZeit('Krankenkasse', ab) → { start, ende } des ersten Worts (oder der Wortfolge „116 117“) ab Sekunde `ab`,
// das mit dem Muster beginnt. Wirft, wenn es keins gibt – so fällt ein geänderter Text sofort auf.
function wortZeit(muster, ab = 0) {
  const teile = muster.split(/\s+/).map(_norm), W = SPRACHDATEN.saetze.flatMap(s => s.woerter);
  for (let i = 0; i < W.length; i++) {
    if (W[i].start < ab - 1e-3) continue;
    if (teile.every((m, k) => W[i + k] && (k === teile.length - 1 ? _norm(W[i + k].w).startsWith(m) : _norm(W[i + k].w) === m)))
      return { start: W[i].start, ende: W[i + teile.length - 1].ende };
  }
  throw new Error(`Wort „${muster}“ ab ${ab} s nicht in sprache.json`);
}
const wort = (muster, ab) => wortZeit(muster, ab).start;
const wortEnde = (muster, ab) => wortZeit(muster, ab).ende;

/* ---------- Kamera: Szenen liegen nebeneinander, die Welt fährt ---------- */
const kamera = akteur('welt', {}, true);
const S = i => i * 1920;            // Szenen-Versatz
const BX = 1320, BY = 560;           // Bühnenmitte jeder Szene
function pan(t0, i) { tw('welt', t0, .9, { x: -S(i) }, 'inout'); cue(t0, 'whoosh'); }
// Bewegungsunschärfe beim Schwenk (waagrecht, je nach Geschwindigkeit der Welt)
function bewegungsunschaerfe(staerke = .12) {
  document.body.insertAdjacentHTML('beforeend', '<svg width="0" height="0" style="position:absolute"><filter id="wischer" x="-5%" y="0" width="110%" height="100%"><feGaussianBlur id="wischerBlur" stdDeviation="0 0"/></filter></svg>');
  const welt = document.getElementById('welt'), blur = document.getElementById('wischerBlur');
  HOOKS.push(t => {
    const v = Math.abs(wert(kamera, 'x', t) - wert(kamera, 'x', t - 1 / 30));
    const b = Math.min(22, v * staerke);
    blur.setAttribute('stdDeviation', `${b.toFixed(2)} 0`);
    welt.style.filter = b > .3 ? 'url(#wischer)' : '';
  });
}


function start(dauer, musikEnde) {
  window.DAUER = dauer;
  window.MUSIKENDE = musikEnde ?? dauer - 1.5;
  window.render = render;
  window.CUES = CUES.sort((a, b) => a[0] - b[0]);
  if (!location.search.includes('still')) {
    document.fonts.ready.then(() => { const t0 = performance.now();
      const loop = () => { render(((performance.now() - t0) / 1000) % dauer); requestAnimationFrame(loop); }; loop(); });
  } else render(0);
}
