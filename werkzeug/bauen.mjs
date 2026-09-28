// Baut aus motive/*.svg die Strings in src/*.js, src/index.js und vorschau.html.
// Aufruf: node werkzeug/bauen.mjs
//
// Kurzschreibweise in den Quellen (wird hier aufgelöst):
//   @b500, @sf, @warning-bg …        → var(--il-<alias>,#Fallback)
//   {defs g0 g1 g2 …}                → <defs> mit den Standard-Verläufen (Tabelle VERLAEUFE)
//   {schatten cx cy rx ry}           → weicher Kontaktschatten (braucht g0)
//   {szene}                          → Wand + Tischfläche einer Szene (braucht g8 g9)
//   id="gN" / url(#gN)               → id="il-<name>-gN" (eindeutig pro Motiv)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { MOTIVE, TOKENS, KURZ } from './liste.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const GRENZE = { spot: 3072, szene: 6144 };
const BOX = { spot: '0 0 160 160', szene: '0 0 320 200' };

const lin = (id, a, b, diag) => `<linearGradient id="${id}" x2="${diag ? 1 : 0}" y2="1"><stop offset="0" stop-color="@${a}"/><stop offset="1" stop-color="@${b}"/></linearGradient>`;
export const VERLAEUFE = {
  g0: '<radialGradient id="g0"><stop offset="0" stop-color="@b700" stop-opacity=".28"/><stop offset="1" stop-color="@b700" stop-opacity="0"/></radialGradient>',
  g1: lin('g1', 'sf', 'n200'),          // Weiß (Papier, Kunststoff)
  g2: lin('g2', 'b400', 'b600', 1),     // Violett (Material)
  g3: lin('g3', 'b600', 'b700', 1),     // Violett dunkel (Griffe, Einband)
  g4: lin('g4', 'b100', 'b200'),        // Violett hell (Nebenobjekte)
  g5: lin('g5', 'n200', 'n300'),        // Metall / Schattenseite
  g8: lin('g8', 'b50', 'b100'),         // Szene: Wand
  g9: lin('g9', 'b100', 'b200'),        // Szene: Fläche
};

// {stern cx cy r} → vierzackiges KI-Symbol (nur als Zeichen auf einem Gegenstand, nicht als Deko-Funke)
const r1 = n => Math.round(n * 10) / 10;
function stern(cx, cy, r) {
  const k = r * 0.22, P = (x, y) => `${r1(x)} ${r1(y)}`;
  return `M${P(cx, cy - r)}C${P(cx + k, cy - k)} ${P(cx + k, cy - k)} ${P(cx + r, cy)}C${P(cx + k, cy + k)} ${P(cx + k, cy + k)} ${P(cx, cy + r)}C${P(cx - k, cy + k)} ${P(cx - k, cy + k)} ${P(cx - r, cy)}C${P(cx - k, cy - k)} ${P(cx - k, cy - k)} ${P(cx, cy - r)}Z`;
}

function farbe(kurz) {
  const alias = KURZ[kurz] || kurz;
  if (!TOKENS[alias]) throw new Error('Unbekannter Token: @' + kurz);
  return `var(--il-${alias},${TOKENS[alias][1]})`;
}

export function bauen(name, format, datei = `${ROOT}motive/${name}.svg`) {
  let q = readFileSync(datei, 'utf8');
  q = q.replace(/<!--[\s\S]*?-->/g, '');
  if (/#[0-9a-f]{3,6}\b/i.test(q)) throw new Error(`${name}: nackter Hex in der Quelle`);
  q = q.replace(/\{defs ([^}]*)\}/g, (_, l) => '<defs>' + l.trim().split(/\s+/).map(g => { if (!VERLAEUFE[g]) throw new Error(name + ': Verlauf? ' + g); return VERLAEUFE[g]; }).join('') + '</defs>');
  q = q.replace(/\{schatten ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)\}/g, (_, x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#g0)"/>`);
  q = q.replace(/\{stern ([\d.]+) ([\d.]+) ([\d.]+)\}/g, (_, a, b, c) => stern(+a, +b, +c));
  q = q.replace(/\{szene\}/g, '<rect width="320" height="200" fill="url(#g8)"/><rect y="150" width="320" height="50" fill="url(#g9)"/><rect y="150" width="320" height="2" fill="@b200"/>');
  q = q.replace(/@([a-z0-9-]+)/g, (_, k) => farbe(k));
  q = q.replace(/id="(g\d+)"/g, `id="il-${name}-$1"`).replace(/url\(#(g\d+)\)/g, `url(#il-${name}-$1)`);
  q = q.replace(/\s*\n\s*/g, '').replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').trim();
  const extra = format === 'szene' ? ' preserveAspectRatio="xMidYMid slice"' : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${BOX[format]}"${extra} aria-hidden="true" focusable="false">${q}</svg>`;
}

// Farbumschaltung für Motive auf brand-Flächen (Hero-Verlauf): violettes Material zwei Stufen heller.
const T = a => `var(--${TOKENS[a][0]},${TOKENS[a][1]})`;
export const AUF_BRAND = { 'brand-400': 'brand-200', 'brand-500': 'brand-300', 'brand-600': 'brand-400' };
export const aufBrandCss = sel => `${sel}{${Object.entries(AUF_BRAND).map(([a, z]) => `--il-${a}:${T(z)};`).join('')}}`;

if (import.meta.url === `file://${process.argv[1]}`) {
  const camel = n => n.replace(/-(\w)/g, (_, c) => c.toUpperCase());
  const gebaut = [];
  let fehler = 0;
  for (const [name, format, modul, zweck] of MOTIVE) {
    if (!existsSync(`${ROOT}motive/${name}.svg`)) { console.log(`-- ${name} fehlt`); continue; }
    const svg = bauen(name, format);
    if (svg.includes("'")) throw new Error(name + ': Apostroph im SVG');
    writeFileSync(`${ROOT}src/${name}.js`, `export default '${svg}';\n`);
    const bytes = Buffer.byteLength(svg);
    const zuGross = bytes > GRENZE[format];
    if (zuGross) fehler++;
    console.log(`${zuGross ? '!!' : 'ok'} ${name.padEnd(22)} ${format.padEnd(5)} ${(bytes / 1024).toFixed(2)} KB`);
    gebaut.push({ name, format, modul, zweck, svg, bytes });
  }

  writeFileSync(`${ROOT}src/index.js`,
    '// Automatisch erzeugt (werkzeug/bauen.mjs) – alle Motive als SVG-Strings.\n' +
    gebaut.map(m => `import ${camel(m.name)} from './${m.name}.js';`).join('\n') +
    '\n\nexport const illustrationen = {\n' +
    gebaut.map(m => `  '${m.name}': ${camel(m.name)},`).join('\n') +
    '\n};\n\nexport const formate = {\n' +
    gebaut.map(m => `  '${m.name}': '${m.format}',`).join('\n') +
    '\n};\n\nexport default illustrationen;\n');

  const css = `
*{box-sizing:border-box}body{margin:0;font:13px/1.4 Inter,system-ui,sans-serif;color:#161325;background:#fff}
h2{font-size:20px;margin:0 0 12px;text-transform:capitalize}.modul{padding:24px 28px 8px}
.bahn{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.feld{padding:20px;border-radius:16px;display:flex;flex-wrap:wrap;gap:22px 18px;align-content:flex-start}
.hell{background:#F8F7FB}.verlauf{background:linear-gradient(135deg,#5A3FE6,#3A2599);color:#fff}
.m{display:flex;flex-direction:column;gap:6px}.m span{font:600 11px/1.2 ui-monospace,monospace;opacity:.75}
.m.spot svg{width:var(--sp,132px);height:var(--sp,132px);display:block}
.m.szene svg{width:var(--sz,272px);height:auto;display:block;border-radius:16px}
.il-schweben{animation:il-schweben 3.2s cubic-bezier(.45,0,.55,1) infinite alternate;transform-box:fill-box;transform-origin:center}
@keyframes il-schweben{from{transform:translateY(0)}to{transform:translateY(-4px)}}
body.still .il-schweben{animation:none}
@media (prefers-reduced-motion:reduce){.il-schweben{animation:none}}
${aufBrandCss('.verlauf .spot')}`;
  const js = `
const p=new URLSearchParams(location.search);const nur=p.get('namen')?p.get('namen').split(','):null;const modul=p.get('modul');
if(p.has('still'))document.body.classList.add('still');
if(p.get('sp'))document.documentElement.style.setProperty('--sp',p.get('sp')+'px');
if(p.get('sz'))document.documentElement.style.setProperty('--sz',p.get('sz')+'px');
document.querySelectorAll('.m').forEach(m=>{if((nur&&!nur.includes(m.dataset.name))||(modul&&m.dataset.modul!==modul))m.remove()});
document.querySelectorAll('.modul').forEach(s=>{if(!s.querySelector('.m'))s.remove()});`;
  const module = [...new Set(gebaut.map(m => m.modul))];
  // zweite Kopie (auf Verlauf) mit eigenem id-Präfix, sonst lösen die Verläufe gegen die erste Kopie auf
  const karte = (m, v) => `<div class="m ${m.format}" data-name="${m.name}" data-modul="${m.modul}">${v ? m.svg.replaceAll(`il-${m.name}-g`, `il-${m.name}-v-g`) : m.svg}<span>${m.name}</span></div>`;
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Illustrationen – Kontaktbogen</title><style>${css}</style></head><body>
${module.map(mod => {
    const ms = gebaut.filter(m => m.modul === mod);
    return `<section class="modul"><h2>${mod}</h2><div class="bahn"><div class="feld hell">${ms.map(m => karte(m, 0)).join('')}</div><div class="feld verlauf">${ms.map(m => karte(m, 1)).join('')}</div></div></section>`;
  }).join('\n')}
<script>${js}</script></body></html>`;
  writeFileSync(`${ROOT}vorschau.html`, html);
  const sp = gebaut.filter(m => m.format === 'spot'), sz = gebaut.filter(m => m.format === 'szene');
  const max = a => a.length ? (Math.max(...a.map(m => m.bytes)) / 1024).toFixed(2) : '-';
  console.log(`${gebaut.length} Motive gebaut (${sp.length} Spots, max ${max(sp)} KB; ${sz.length} Szenen, max ${max(sz)} KB)${fehler ? `, ${fehler} ZU GROSS` : ''}.`);
}
