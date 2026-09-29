// Erzeugt film.vtt (WebVTT-Untertitel) zu film.mp4 – ohne neuen Render, ohne Credits.
// Die Untertitel sind eine eigene Spur, die der Player ein- und ausschaltet; ins Bild kommt nichts.
//
// Zeiten: sprache.json (Satz- und Wortzeiten aus stimme.mjs) bzw. untertitel-quelle.json (gleiches Format,
// per Forced Alignment für ältere Aufnahmen), verschoben um VERSATZ aus film.vorlage.html
// (dort beginnt die Sprache im Film). Lange Sätze werden an Wortgrenzen geteilt, höchstens zwei Zeilen.
//
// Aufruf: node werkzeug/untertitel.mjs lernvideos/01-krankenkasse [weitere Ordner …]
//         node werkzeug/untertitel.mjs --alle
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const ZEILE = 42, ZEILEN = 2;                 // Zeichen pro Zeile, Zeilen pro Untertitel
const MIN = 1.2, NACHLAUF = .6, LUECKE = .05; // Sekunden: Mindestdauer, Stehenlassen nach dem Satz, Abstand

const args = process.argv.slice(2);
const ordner = args.includes('--alle')
  ? ['lernvideos', 'kurse'].flatMap(b => readdirSync(join(ROOT, b), { withFileTypes: true })
      .filter(d => d.isDirectory() && /^\d\d-/.test(d.name)).map(d => join(ROOT, b, d.name)))
  : args.filter(a => !a.startsWith('--')).map(a => resolve(a));
if (!ordner.length) throw new Error('Aufruf: node werkzeug/untertitel.mjs <ordner> … | --alle');

const zeit = s => {
  const ms = Math.max(0, Math.round(s * 1000));
  const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, sek = Math.floor(ms / 1000) % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sek).padStart(2, '0')}.${String(ms % 1000).padStart(3, '0')}`;
};

// Text eines Untertitels auf höchstens zwei ausgewogene Zeilen umbrechen
function umbrechen(text) {
  if (text.length <= ZEILE) return text;
  const w = text.split(' ');
  let best = null;
  for (let i = 1; i < w.length; i++) {
    const a = w.slice(0, i).join(' '), b = w.slice(i).join(' ');
    const d = Math.max(a.length, b.length) + (/[,.:;!?–]$/.test(w[i - 1]) ? -6 : 0);
    if (!best || d < best.d) best = { d, t: a + '\n' + b };
  }
  return best.t;
}

// Einen Satz in Stücke teilen, die in zwei Zeilen passen; Zeiten aus den Wortzeiten
function teilen(satz) {
  const text = satz.text.replace(/\s+/g, ' ').trim();
  if (text.length <= ZEILE * ZEILEN) return [{ start: satz.start, ende: satz.ende, text }];
  if (!satz.woerter?.length) {             // ohne Wortzeiten: Dauer anteilig nach Buchstaben verteilen
    const w = text.split(' '), n = w.map(x => x.replace(/[^\p{L}\p{N}]/gu, '').length || 1), sum = n.reduce((a, b) => a + b, 0);
    let t = satz.start;
    satz = { ...satz, woerter: w.map((x, i) => { const d = (satz.ende - satz.start) * n[i] / sum; t += d; return { w: x, start: t - d, ende: t }; }) };
  }
  // Wörter des Textes (mit Satzzeichen) den Wortzeiten zuordnen – gleiche Reihenfolge, Zeichen ohne Buchstaben zählen nicht
  const token = text.split(' ');
  const norm = s => s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  const zeiten = []; let k = 0;
  for (const t of token) {
    const n = norm(t);
    if (!n) { zeiten.push(null); continue; }
    while (k < satz.woerter.length && !norm(satz.woerter[k].w)) k++;
    const w = satz.woerter[k];
    zeiten.push(w && (norm(w.w) === n || n.startsWith(norm(w.w)) || norm(w.w).startsWith(n)) ? (k++, w) : null);
  }
  const anzahl = Math.ceil(text.length / (ZEILE * ZEILEN));
  const ziel = text.length / anzahl;
  const stuecke = []; let von = 0, laenge = 0;
  for (let i = 0; i < token.length; i++) {
    laenge += token[i].length + 1;
    const rest = token.slice(i + 1).join(' ').length;
    const satzzeichen = /[,.:;!?–]$/.test(token[i]);
    const voll = laenge + (token[i + 1]?.length ?? 0) > ZEILE * ZEILEN;
    if (i < token.length - 1 && rest > 12 && (voll || (satzzeichen && laenge > ziel * .6) || laenge >= ziel * 1.15)) {
      stuecke.push([von, i]); von = i + 1; laenge = 0;
    }
  }
  stuecke.push([von, token.length - 1]);
  const erste = (a, b) => { for (let i = a; i <= b; i++) if (zeiten[i]) return zeiten[i].start; return null; };
  const letzte = (a, b) => { for (let i = b; i >= a; i--) if (zeiten[i]) return zeiten[i].ende; return null; };
  return stuecke.map(([a, b], j) => ({
    start: j === 0 ? satz.start : erste(a, b) ?? satz.start,
    ende: j === stuecke.length - 1 ? satz.ende : letzte(a, b) ?? satz.ende,
    text: token.slice(a, b + 1).join(' '),
  }));
}

for (const o of ordner) {
  const vorlage = readFileSync(join(o, 'film.vorlage.html'), 'utf8');
  const versatz = +(vorlage.match(/VERSATZ\s*=\s*([\d.]+)/)?.[1] ?? NaN);
  if (!Number.isFinite(versatz)) throw new Error(`${o}: VERSATZ nicht gefunden`);
  const quelle = ['sprache.json', 'untertitel-quelle.json'].map(f => join(o, f)).find(existsSync);
  if (!quelle) { console.log(`– ${o.replace(ROOT, '')}: keine Satzzeiten (sprache.json / untertitel-quelle.json)`); continue; }
  const saetze = JSON.parse(readFileSync(quelle, 'utf8')).saetze;

  const cues = saetze.flatMap(teilen).map(c => ({ ...c, start: c.start + versatz, ende: c.ende + versatz }));
  // Stehenlassen, damit man zu Ende lesen kann – aber nie in den nächsten Untertitel hinein
  cues.forEach((c, i) => {
    const naechster = cues[i + 1]?.start ?? Infinity;
    c.ende = Math.min(Math.max(c.ende + NACHLAUF, c.start + MIN), naechster - LUECKE);
  });
  const vtt = 'WEBVTT\n\n' + cues.map((c, i) => `${i + 1}\n${zeit(c.start)} --> ${zeit(c.ende)}\n${umbrechen(c.text)}\n`).join('\n');
  writeFileSync(join(o, 'film.vtt'), vtt);
  console.log(`ok ${o.replace(ROOT, '')}/film.vtt (${cues.length} Untertitel, Versatz ${versatz} s)`);
}
