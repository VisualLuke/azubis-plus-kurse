// Prüft einen Film Frame für Frame, bevor gerendert wird:
//   Ruckler   – ein Element springt oder ändert die Geschwindigkeit schlagartig (Beschleunigung je Frame zu groß)
//   Kante     – ein ruhendes, sichtbares Element liegt näher als 50 px an der Kante seiner Bühne
//   Überlappung – zwei ruhende, sichtbare Elemente überdecken sich (Ausnahme: gleiche data-gruppe oder data-frei)
// data-dreht: Element dreht/flippt absichtlich (Münze) – keine Ruckler-Prüfung. Grafiken zählen mit ihrem gezeichneten Umriss.
// Aufruf: node werkzeug/pruefen.mjs lernvideos/01-krankenkasse [--fps 30] [--rand 50]
// Braucht film.html (node werkzeug/rendern.mjs <ordner> --nur-html).
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const opt = (n, d) => (args.includes(n) ? +args[args.indexOf(n) + 1] : d);
const ORDNER = resolve(args.find(a => !a.startsWith('--') && !/^\d+$/.test(a)) || '') + '/';
const FPS = opt('--fps', 30), RAND = opt('--rand', 50);
if (!existsSync(ORDNER + 'film.html')) throw new Error('Erst film.html bauen: node werkzeug/rendern.mjs <ordner> --nur-html');

const { chromium } = await import('playwright');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const fehler = [];
page.on('pageerror', e => fehler.push(String(e)));
await page.goto(`file://${ORDNER}film.html?still`);
await page.evaluate(() => document.fonts.ready);
if (fehler.length) throw new Error(fehler.join('\n'));

const daten = await page.evaluate(FPS => {
  const welt = document.getElementById('welt');
  const els = [...welt.querySelectorAll('.a')].filter(e => !e.classList.contains('buehne') && e.id);
  const buehnen = [...welt.querySelectorAll('.a.buehne')];
  const frames = [];
  const n = Math.round(window.DAUER * FPS);
  for (let i = 0; i <= n; i++) {
    const t = i / FPS; window.render(t);
    const w = welt.getBoundingClientRect(), k = w.width / 1920 || 1;          // Kamera-Zoom herausrechnen
    // Umriss: bei Grafiken der gezeichnete Inhalt (ohne leeren SVG-Rand), sonst der Kasten
    const umriss = e => {
      const svg = e.tagName === 'svg' ? e : (e.children.length === 1 && e.firstElementChild.tagName === 'svg' ? e.firstElementChild : null);
      if (!svg) return e.getBoundingClientRect();
      let l = 1e9, o = 1e9, r = -1e9, u = -1e9;
      for (const c of svg.querySelectorAll('path,rect,circle,ellipse,line,polygon,text')) {
        if (c.closest('defs,marker') || /-g0\)$/.test(c.getAttribute('fill') || '')) continue;     // Kontaktschatten zählt nicht
        const q = c.getBoundingClientRect(); if (!q.width && !q.height) continue;
        l = Math.min(l, q.left); o = Math.min(o, q.top); r = Math.max(r, q.right); u = Math.max(u, q.bottom);
      }
      return l < 1e9 ? { left: l, top: o, width: r - l, height: u - o, right: r, bottom: u } : e.getBoundingClientRect();
    };
    const box = e => { const r = umriss(e); return r.right < 0 || r.left > 1920 || r.bottom < 0 || r.top > 1080 ? null : [(r.left - w.left) / k, (r.top - w.top) / k, r.width / k, r.height / k]; };
    const sicht = e => { let o = 1; for (let x = e; x && x !== welt; x = x.parentElement) { const s = getComputedStyle(x); if (s.visibility === 'hidden' || s.display === 'none') return 0; o *= +s.opacity; } return o; };
    frames.push({ t, b: buehnen.map(e => { const r = e.getBoundingClientRect(); return [(r.left - w.left) / k, (r.top - w.top) / k, r.width / k, r.height / k]; }),
      e: els.map(e => { const o = sicht(e); if (o <= .02) return null; const b = box(e); return b ? [...b, o] : null; }) });
  }
  return { frames, ids: els.map(e => e.id), gruppe: els.map(e => e.dataset.gruppe || null), frei: els.map(e => 'frei' in e.dataset), dreht: els.map(e => 'dreht' in e.dataset) };
}, FPS);
await browser.close();

const { frames, ids, gruppe, frei, dreht } = daten;
const mitte = b => [b[0] + b[2] / 2, b[1] + b[3] / 2];
const befunde = { Ruckler: [], Kante: [], 'Überlappung': [] };
const melde = (art, key, t, text) => {
  const l = befunde[art], alt = l.find(x => x.key === key && t - x.bis <= 2 / FPS + 1e-6);
  if (alt) alt.bis = t; else l.push({ key, von: t, bis: t, text });
};
// Ruhe: Mittelpunkt und Größe bewegen sich über ±2 Frames kaum
const ruhig = (j, i) => [-2, -1, 1, 2].every(d => {
  const a = frames[i]?.e[j], b = frames[i + d]?.e[j];
  return a && b && Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) < 1.5 && Math.abs(a[4] - b[4]) < .02;
});

for (let j = 0; j < ids.length; j++) {
  for (let i = 2; i < frames.length; i++) {
    const [a, b, c] = [frames[i - 2].e[j], frames[i - 1].e[j], frames[i].e[j]];
    if (!a || !b || !c || c[4] < .3 || dreht[j]) continue;
    if (a[2] * a[3] < .5 * c[2] * c[3]) continue;          // Auftritt aus dem Nichts (pop) ist gewollt
    const [p0, p1, p2] = [a, b, c].map(mitte);
    const acc = Math.hypot(p2[0] - 2 * p1[0] + p0[0], p2[1] - 2 * p1[1] + p0[1]);
    const gr = Math.abs(c[2] - 2 * b[2] + a[2]) + Math.abs(c[3] - 2 * b[3] + a[3]);
    // Kameraschwenk: alle Elemente gleich schnell – nur der Welt-Anteil zählt, der ist oben schon herausgerechnet
    if (acc > 22 || gr > 30) melde('Ruckler', ids[j], frames[i].t, `${ids[j]}: Sprung ${acc.toFixed(0)} px/Frame²${gr > 30 ? `, Größe ${gr.toFixed(0)}` : ''}`);
  }
}
for (let i = 2; i < frames.length - 2; i++) {
  const f = frames[i], ruhende = [];
  for (let j = 0; j < ids.length; j++) {
    const e = f.e[j];
    if (!e || e[4] < .9 || !ruhig(j, i)) continue;
    ruhende.push(j);
    // Bühne: die, mit der sich das Element am meisten überdeckt
    let best = null, fl = 0;
    for (const b of f.b) { const w = Math.max(0, Math.min(e[0] + e[2], b[0] + b[2]) - Math.max(e[0], b[0])), h = Math.max(0, Math.min(e[1] + e[3], b[1] + b[3]) - Math.max(e[1], b[1])); if (w * h > fl) { fl = w * h; best = b; } }
    if (!best || e[2] > best[2] * .95) continue;           // Vollbild-Ebenen (Pfeil-SVGs) nicht prüfen
    const bi = f.b.indexOf(best), vor = frames[i - 1].b[bi];
    if (Math.abs(vor[0] - best[0]) + Math.abs(vor[2] - best[2]) > 1) continue;     // Bühne bewegt sich (Schwenk, Zoom-Atmer)
    const d = Math.min(e[0] - best[0], e[1] - best[1], best[0] + best[2] - e[0] - e[2], best[1] + best[3] - e[1] - e[3]);
    if (d < RAND) melde('Kante', ids[j], f.t, `${ids[j]}: ${d.toFixed(0)} px zur Bühnenkante`);
  }
  for (let x = 0; x < ruhende.length; x++) for (let y = x + 1; y < ruhende.length; y++) {
    const [p, q] = [ruhende[x], ruhende[y]];
    if (frei[p] || frei[q] || (gruppe[p] && gruppe[p] === gruppe[q])) continue;
    const a = f.e[p], b = f.e[q];
    if (a[2] > 1500 || b[2] > 1500) continue;
    const w = Math.min(a[0] + a[2], b[0] + b[2]) - Math.max(a[0], b[0]), h = Math.min(a[1] + a[3], b[1] + b[3]) - Math.max(a[1], b[1]);
    if (w > 6 && h > 6) melde('Überlappung', ids[p] + '|' + ids[q], f.t, `${ids[p]} ↔ ${ids[q]}: ${w.toFixed(0)}×${h.toFixed(0)} px`);
  }
}
let summe = 0;
for (const [art, l] of Object.entries(befunde)) {
  const echt = l.filter(x => art !== 'Ruckler' || x.bis - x.von < 1);   // Dauerwackeln (gewollt) nicht als Ruckler
  console.log(`\n${art}: ${echt.length}`);
  for (const x of echt) console.log(`  ${x.von.toFixed(2)}–${x.bis.toFixed(2)} s  ${x.text}`);
  summe += echt.length;
}
console.log(`\n${summe ? '!!' : 'ok'} ${summe} Befunde (${frames.length} Frames)`);
