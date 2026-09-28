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
function wert(a, p, t) {
  let v = a.basis[p];
  for (const w of a.tw) {
    if (!(p in w.to) || w.t0 > t) continue;
    v = w.from[p] + (w.to[p] - w.from[p]) * w.e(clamp((t - w.t0) / w.d));
  }
  return v;
}
// tw(ids, Start, Dauer, Ziel, Easing) – ids als String oder Liste; Start des Tweens = Zustand zum Zeitpunkt t0
function tw(ids, t0, d, to, e = 'out') {
  for (const id of [].concat(ids)) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    const a = AKTEURE.get(el);
    const from = {};
    for (const p in to) from[p] = wert(a, p, t0);
    a.tw.push({ t0, d: Math.max(d, 1e-4), to, from, e: E[e] });
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

/* ---------- Kamera: Szenen liegen nebeneinander, die Welt fährt ---------- */
const kamera = akteur('welt', {}, true);
const S = i => i * 1920;            // Szenen-Versatz
const BX = 1320, BY = 560;           // Bühnenmitte jeder Szene
function pan(t0, i) { tw('welt', t0, .9, { x: -S(i) }, 'inout'); cue(t0, 'whoosh'); }


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
