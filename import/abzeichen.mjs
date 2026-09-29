// Rendert die Abzeichen (Stil C, 160×160) → import/abzeichen/<slug>.png (512×512, transparenter Hintergrund).
// Quellen: import/abzeichen/<slug>.svg (Kurzschreibweise mit @token-Farben), Zuordnung: import/abzeichen/liste.json.
// Farben: Hell-Fallbacks der Token (PNG, kein Dark Mode).
//
// Aufruf: node import/abzeichen.mjs [slug …]   (ohne Angabe: alle aus liste.json)
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { bauen } from '../werkzeug/bauen.mjs';

const DIR = new URL('./abzeichen/', import.meta.url).pathname;
const liste = JSON.parse(readFileSync(join(DIR, 'liste.json'), 'utf8'));
const wahl = process.argv.slice(2);
const eintraege = wahl.length ? liste.filter(e => wahl.includes(e.slug)) : liste;

const { chromium } = await import('playwright');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 512, height: 512 } });

for (const e of eintraege) {
  const svg = bauen('abz-' + e.slug, 'spot', join(DIR, e.slug + '.svg'));
  await page.setContent(`<!doctype html><html><body style="margin:0;background:transparent">
    <div style="width:512px;height:512px">${svg}</div>
    <style>svg{width:100%;height:100%;display:block}</style></body></html>`);
  await page.screenshot({ path: join(DIR, e.slug + '.png'), omitBackground: true });
  console.log(`ok import/abzeichen/${e.slug}.png  (${e.name})`);
}
await browser.close();
