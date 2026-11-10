// Baut das Titelbild einer Lektion (Stil C, Szene 16:10) aus Teilen und der Kursfigur → <ordner>/titelbild.png (1280×800).
//
// Quelle: <ordner>/titelbild.json
//   {
//     "teile": [ { "datei": "teile/koffer.svg", "x": 120, "y": 160, "h": 90 } ],   // x = Mitte, y = Standlinie (unten), h = Höhe
//     "figur": { "name": "mai", "x": 240, "y": 88, "d": 76 }                      // Porträt im Kreis: Mitte x/y, Durchmesser d
//   }
// Koordinaten in der Szene 320×200 (Wand bis y = 150, darunter die Fläche). „datei“ relativ zum Kursordner oder zum Repo.
// Teile sind Stil-C-Quellen (160×160, @token-Farben, {defs …}, {schatten …}); ein Teil mit anderem Format:
// "viewBox": "0 0 240 160". Farben: Hell-Fallbacks der Token (PNG, kein Dark Mode).
//
// Aufruf: node werkzeug/titelbild.mjs lernvideos/01-krankenkasse [weitere …]   |   --alle
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdtempSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { bauen } from './bauen.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const args = process.argv.slice(2);
const ordner = args.includes('--alle')
  ? ['kurse', 'lernvideos'].flatMap(b => readdirSync(join(ROOT, b)).map(d => join(ROOT, b, d))).filter(o => existsSync(join(o, 'titelbild.json')))
  : args.map(a => resolve(a));
const tmp = mkdtempSync(join(tmpdir(), 'tb-'));

function svgAus(quelle, format = 'spot', viewBox) {
  const pfad = join(tmp, 'q.svg');
  writeFileSync(pfad, quelle);
  let s = bauen('tb' + Math.random().toString(36).slice(2, 7), format, pfad);
  if (viewBox) s = s.replace(/viewBox="[^"]*"/, `viewBox="${viewBox}"`);
  return s;
}
const teil = (o, datei) => [join(o, datei), join(ROOT, datei)].find(existsSync)
  ?? (() => { throw new Error(`${o}: Teil nicht gefunden: ${datei}`); })();

const { chromium } = await import('playwright');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const K = 4;   // 320 → 1280

for (const o of ordner) {
  const def = JSON.parse(readFileSync(join(o, 'titelbild.json'), 'utf8'));
  const grund = svgAus('{defs g8 g9}{szene}', 'szene');
  const lagen = (def.teile || []).map(t => {
    const s = svgAus(readFileSync(teil(o, t.datei), 'utf8'), 'spot', t.viewBox);
    const [, , vw, vh] = (t.viewBox || '0 0 160 160').split(/\s+/).map(Number);
    const h = t.h * K, w = h * vw / vh;
    return `<div style="position:absolute;left:${t.x * K - w / 2}px;top:${t.y * K - h}px;width:${w}px;height:${h}px;transform:rotate(${t.r || 0}deg)">${s}</div>`;
  });
  let figur = '';
  if (def.figur) {
    const f = def.figur, d = f.d * K;
    const ebenen = [`teile/figur-${f.name}.svg`, 'teile/figur-augen.svg', 'teile/figur-mund-froh.svg']
      .map(p => `<div style="position:absolute;inset:0">${svgAus(readFileSync(join(ROOT, p), 'utf8'))}</div>`).join('');
    figur = `<div style="position:absolute;left:${f.x * K - d / 2}px;top:${f.y * K - d / 2}px;width:${d}px;height:${d}px;border-radius:50%;
      overflow:hidden;background:linear-gradient(160deg,#C9BAFA,#A48BF4);box-shadow:0 0 0 ${2.5 * K}px #FFFFFF,0 ${3 * K}px ${9 * K}px rgba(58,37,153,.22)">${ebenen}</div>`;
  }
  await page.setContent(`<!doctype html><html><body style="margin:0;width:1280px;height:800px;overflow:hidden">
    <div style="position:relative;width:1280px;height:800px">
      <div style="position:absolute;inset:0">${grund.replace('<svg ', '<svg width="1280" height="800" ')}</div>
      ${lagen.join('')}${figur}
    </div><style>svg{width:100%;height:100%;display:block}</style></body></html>`);
  await page.screenshot({ path: join(o, 'titelbild.png') });
  console.log(`ok ${o.replace(ROOT, '')}/titelbild.png`);
}
await browser.close();
