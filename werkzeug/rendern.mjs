// Rendert ein Kursvideo: <ordner>/film.vorlage.html → film.html → film.mp4 (+ film-poster.png).
// Aufruf: node werkzeug/rendern.mjs kurse/01-brutto-netto [--nur-html] [--fps 30] [--standbilder 7,20.5,…]
//
// {{teil}} setzt <ordner>/teile/<teil>.svg oder teile/<teil>.svg ein (gebaut mit bauen.mjs);
// {{teil~2}} dasselbe Teil mit eigenen Verlaufs-ids (zweite Kopie in anderem Farbkontext).
// window.SPRACHE = { datei, versatz } in der Vorlage legt die Sprachaufnahme unter den Film;
// ihre Lautstärke je Frame steht der Seite als window.PEGEL zur Verfügung (Sprecher-Pegel).
// Liegt sprache.json (werkzeug/stimme.mjs) im Ordner, stehen Satz- und Wortzeiten als window.SPRACHDATEN bereit.
// Braucht playwright (Chromium), python3 mit numpy und ein ffmpeg mit libx264 (FFMPEG=/pfad/zu/ffmpeg).
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, relative } from 'node:path';
import { bauen, aufBrandCss } from './bauen.mjs';

const WURZEL = new URL('..', import.meta.url).pathname;
const args = process.argv.slice(2);
const opt = n => (args.includes(n) ? args[args.indexOf(n) + 1] : undefined);
const ORDNER = resolve(args.find(a => !a.startsWith('--') && !/^[\d.,]+$/.test(a)) || '') + '/';
const FPS = +(opt('--fps') || 30);
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
if (!existsSync(ORDNER + 'film.vorlage.html')) throw new Error('Keine film.vorlage.html in ' + ORDNER);

let html = readFileSync(ORDNER + 'film.vorlage.html', 'utf8');
html = html.replace(/\{\{([a-z0-9-]+)(?:~(\w+))?\}\}/g, (_, n, kopie) => {
  const datei = [`${ORDNER}teile/${n}.svg`, `${WURZEL}teile/${n}.svg`].find(existsSync);
  if (!datei) throw new Error('Teil fehlt: ' + n);
  const svg = bauen(n, 'spot', datei);
  return kopie ? svg.replaceAll(`il-${n}-g`, `il-${n}-${kopie}-g`) : svg;
});
html = html.replace('.auf-brand{/*AUF_BRAND*/}', aufBrandCss('.auf-brand'));
// sprache.json (von stimme.mjs) steht der Seite als window.SPRACHDATEN zur Verfügung – vor motor.js
if (existsSync(ORDNER + 'sprache.json'))
  html = html.replace(/<script src="[^"]*motor\.js"><\/script>/, m => `<script>window.SPRACHDATEN = ${readFileSync(ORDNER + 'sprache.json', 'utf8')};</script>\n${m}`);
html = schriftLokal(html);
writeFileSync(ORDNER + 'film.html', html);
console.log('ok ' + relative(WURZEL, ORDNER + 'film.html'));
if (args.includes('--nur-html')) process.exit(0);

// Inter einmal nach .schrift/ (Repo-Wurzel) holen – per curl, damit ein Proxy greift – und lokal einbinden.
function schriftLokal(html) {
  const LINK = /<link rel="stylesheet" href="(https:\/\/fonts\.googleapis\.com[^"]+)">/;
  const url = html.match(LINK)?.[1];
  if (!url) return html;
  const SCHRIFT = WURZEL + '.schrift/';
  try {
    mkdirSync(SCHRIFT, { recursive: true });
    const curl = (...a) => execFileSync('curl', ['-sSfL', '-A', 'Mozilla/5.0 Chrome/120', ...a]);
    let css = curl(url.replace(/&amp;/g, '&')).toString();
    css = css.replace(/url\((https:[^)]+\/([^/)]+))\)/g, (_, u, datei) => {
      if (!existsSync(SCHRIFT + datei)) curl('-o', SCHRIFT + datei, u);
      return `url(${relative(ORDNER, SCHRIFT)}/${datei})`;
    });
    return html.replace(LINK, `<style>${css}</style>`);
  } catch (e) {
    console.log('!! Inter nicht geladen, Fallback-Schrift: ' + e.message);
    return html;
  }
}

const FRAMES = ORDNER + '.frames/';
rmSync(FRAMES, { recursive: true, force: true }); mkdirSync(FRAMES);
const { chromium } = await import('playwright');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const fehler = [];
page.on('pageerror', e => fehler.push(String(e)));
await page.goto(`file://${ORDNER}film.html?still`);
await page.evaluate(() => document.fonts.ready);
if (fehler.length) throw new Error(fehler.join('\n'));
const { dauer, cues, musikEnde, sprache } = await page.evaluate(() =>
  ({ dauer: window.DAUER, cues: window.CUES, musikEnde: window.MUSIKENDE, sprache: window.SPRACHE }));

// Sprache: 48 kHz mono dekodieren, Pegel je Frame für die Sprecher-Anzeige
let spracheWav;
if (sprache) {
  spracheWav = FRAMES + 'sprache.wav';
  execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', ORDNER + sprache.datei, '-ac', '1', '-ar', '48000', spracheWav]);
  const pcm = new Int16Array(readFileSync(spracheWav).buffer.slice(44));
  const proFrame = 48000 / FPS, pegel = [];
  for (let i = 0; i * proFrame < pcm.length; i++) {
    let s = 0; const a = Math.floor(i * proFrame), b = Math.min(pcm.length, Math.floor((i + 1) * proFrame));
    for (let k = a; k < b; k++) s += (pcm[k] / 32768) ** 2;
    pegel.push(Math.sqrt(s / Math.max(1, b - a)));
  }
  const ref = [...pegel].sort((x, y) => x - y)[Math.floor(pegel.length * .95)] || 1;
  const glatt = pegel.map((v, i) => Math.min(1, ((pegel[i - 1] ?? v) + 2 * v + (pegel[i + 1] ?? v)) / 4 / ref));
  await page.evaluate(p => { window.PEGEL = p; }, glatt);
}

const standbilder = opt('--standbilder');
const zeiten = standbilder ? standbilder.split(',').map(Number) : Array.from({ length: Math.round(dauer * FPS) }, (_, i) => i / FPS);
for (let i = 0; i < zeiten.length; i++) {
  await page.evaluate(t => window.render(t), zeiten[i]);
  await page.screenshot({ path: standbilder ? `${ORDNER}standbild-${zeiten[i]}.png` : `${FRAMES}${String(i).padStart(5, '0')}.png` });
  if (!standbilder && i % 300 === 0) console.log(`   Frame ${i}/${zeiten.length}`);
}
await browser.close();
if (fehler.length) throw new Error(fehler.join('\n'));
if (standbilder) { rmSync(FRAMES, { recursive: true, force: true }); console.log('ok Standbilder'); process.exit(0); }

writeFileSync(FRAMES + 'cues.json', JSON.stringify(cues));
execFileSync('python3', [WURZEL + 'werkzeug/ton.py', FRAMES + 'cues.json', String(dauer), String(musikEnde), FRAMES + 'ton.wav',
  ...(sprache ? [spracheWav, String(sprache.versatz)] : [])], { stdio: 'inherit' });
execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', FRAMES + '%05d.png', '-i', FRAMES + 'ton.wav',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'slow', '-c:a', 'aac', '-b:a', '160k', '-shortest',
  '-movflags', '+faststart', ORDNER + 'film.mp4']);
execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-ss', String(dauer * .3), '-i', ORDNER + 'film.mp4', '-frames:v', '1', ORDNER + 'film-poster.png']);
rmSync(FRAMES, { recursive: true, force: true });
console.log(`ok film.mp4 (${zeiten.length} Frames, ${FPS} fps, ${cues.length} Klänge${sprache ? ', mit Sprache' : ''})`);
