// Sprachaufnahme mit ElevenLabs: <ordner>/sprechtext.json → sprache.mp3, sprache.json, sprache.js
// Aufruf: node werkzeug/sprechen.mjs kurse/05-sim-karte          (echte Aufnahme, braucht ELEVENLABS_API_KEY)
//         node werkzeug/sprechen.mjs kurse/05-sim-karte --probe  (nur geschätzte Zeiten in sprache.js, ohne Ton)
//
// sprechtext.json:
//   { "modell": "eleven_multilingual_v2",
//     "stimmen": { "Erzähler": "Jonas Berger" },          ← Name aus werkzeug/stimmen.json (oder direkt eine voice_id)
//     "saetze": [ { "s": "Erzähler", "t": "Ein Satz." }, { "s": "Erzähler", "t": "…", "pause": 0.8 } ] }
// Jeder Satz wird einzeln erzeugt (POST /v1/text-to-speech/{voice}/with-timestamps) und in
// <ordner>/sprache-saetze/<hash>.mp3 + .json abgelegt. Ein neuer Lauf erzeugt nur geänderte Sätze neu.
// Pausen zwischen Sätzen: 0,4 s, beim Sprecherwechsel 0,5 s (oder "pause" am Satz davor).
// sprache.js setzt window.SPRACHDATEN; werkzeug/sprache.js macht daraus SAETZE, Z(i), ZE(i), W(i, 'wort').
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const WURZEL = new URL('..', import.meta.url).pathname;
const args = process.argv.slice(2);
const ORDNER = resolve(args.find(a => !a.startsWith('--')) || '') + '/';
const PROBE = args.includes('--probe');
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const SR = 48000;

const text = JSON.parse(readFileSync(ORDNER + 'sprechtext.json', 'utf8'));
const STIMMEN = existsSync(WURZEL + 'werkzeug/stimmen.json') ? JSON.parse(readFileSync(WURZEL + 'werkzeug/stimmen.json', 'utf8')) : {};
const modell = text.modell || 'eleven_multilingual_v2';
const einstellungen = text.einstellungen || { stability: 0.5, similarity_boost: 0.75, style: 0.15, use_speaker_boost: true };
const stimmeVon = s => {
  const n = text.stimmen[s];
  if (!n) throw new Error('Keine Stimme für Sprecher ' + s);
  const id = STIMMEN[n] || n;
  if (!/^[A-Za-z0-9]{16,}$/.test(id)) throw new Error(`Stimme „${n}“ hat keine voice_id (werkzeug/stimmen.json)`);
  return id;
};

const woerterAus = (al, versatz) => {
  const ws = []; let cur = null;
  al.characters.forEach((c, i) => {
    if (/\s/.test(c)) { if (cur) ws.push(cur); cur = null; return; }
    const a = al.character_start_times_seconds[i] + versatz, e = al.character_end_times_seconds[i] + versatz;
    if (!cur) cur = [c, a, e]; else { cur[0] += c; cur[2] = e; }
  });
  if (cur) ws.push(cur);
  return ws.map(([w, a, e]) => [w, +a.toFixed(3), +e.toFixed(3)]);
};

const saetze = [];
let t = 0;
if (PROBE) {
  for (const [i, z] of text.saetze.entries()) {
    if (i) t += z.s !== text.saetze[i - 1].s ? .5 : (text.saetze[i - 1].pause ?? .4);
    const wl = z.t.split(/\s+/), al = { characters: [], character_start_times_seconds: [], character_end_times_seconds: [] };
    let u = 0;
    for (const w of wl) { for (const c of w + ' ') { al.characters.push(c); al.character_start_times_seconds.push(u); u += .068; al.character_end_times_seconds.push(u); } u += .03; }
    const woerter = woerterAus(al, t);
    saetze.push({ sprecher: z.s, text: z.t, start: +t.toFixed(3), ende: woerter.at(-1)[2], woerter });
    t = woerter.at(-1)[2];
  }
} else {
  const KEY = process.env.ELEVENLABS_API_KEY;
  if (!KEY) throw new Error('ELEVENLABS_API_KEY fehlt');
  const CACHE = ORDNER + 'sprache-saetze/';
  mkdirSync(CACHE, { recursive: true });
  const stuecke = [];
  for (const [i, z] of text.saetze.entries()) {
    const voice = stimmeVon(z.s);
    const hash = createHash('sha1').update(JSON.stringify([voice, modell, einstellungen, z.t])).digest('hex').slice(0, 12);
    if (!existsSync(CACHE + hash + '.json')) {
      const nachbar = (k) => text.saetze[k] && text.saetze[k].s === z.s ? text.saetze[k].t : undefined;
      const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}/with-timestamps?output_format=mp3_44100_128`, {
        method: 'POST', headers: { 'xi-api-key': KEY, 'content-type': 'application/json' },
        body: JSON.stringify({ text: z.t, model_id: modell, voice_settings: einstellungen, seed: 7,
          previous_text: nachbar(i - 1), next_text: nachbar(i + 1) }),
      });
      if (!r.ok) throw new Error(`ElevenLabs ${r.status} bei Satz ${i + 1}: ${(await r.text()).slice(0, 300)}`);
      const d = await r.json();
      writeFileSync(CACHE + hash + '.mp3', Buffer.from(d.audio_base64, 'base64'));
      writeFileSync(CACHE + hash + '.json', JSON.stringify(d.alignment));
      console.log(`   neu: Satz ${i + 1} (${z.t.length} Zeichen)`);
    }
    const al = JSON.parse(readFileSync(CACHE + hash + '.json', 'utf8'));
    const roh = execFileSync(FFMPEG, ['-loglevel', 'error', '-i', CACHE + hash + '.mp3', '-ac', '1', '-ar', String(SR), '-f', 'f32le', '-'], { maxBuffer: 1 << 28 });
    let pcm = new Float32Array(roh.buffer, roh.byteOffset, roh.byteLength / 4);
    // Stille am Rand kürzen: ab erstem Zeichen − 0,05 s bis letztem Zeichen + 0,12 s
    const a0 = Math.max(0, al.character_start_times_seconds.find((_, k) => !/\s/.test(al.characters[k])) - .05);
    const e0 = Math.min(pcm.length / SR, Math.max(...al.character_end_times_seconds) + .12);
    pcm = pcm.slice(Math.floor(a0 * SR), Math.ceil(e0 * SR));
    if (i) t += z.s !== text.saetze[i - 1].s ? .5 : (text.saetze[i - 1].pause ?? .4);
    const woerter = woerterAus(al, t - a0);
    stuecke.push([Math.round(t * SR), pcm]);
    saetze.push({ sprecher: z.s, text: z.t, hash, start: +t.toFixed(3), ende: +(t + pcm.length / SR - .12).toFixed(3), woerter });
    t += pcm.length / SR;
  }
  const gesamt = new Float32Array(Math.ceil(t * SR) + SR / 2);
  for (const [o, p] of stuecke) gesamt.set(p, o);
  const wav = ORDNER + '.sprache.f32';
  writeFileSync(wav, Buffer.from(gesamt.buffer));
  execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-f', 'f32le', '-ar', String(SR), '-ac', '1', '-i', wav, '-c:a', 'libmp3lame', '-b:a', '128k', ORDNER + 'sprache.mp3']);
  execFileSync('rm', ['-f', wav]);
}

const daten = { modell, stimmen: text.stimmen, probe: PROBE || undefined, dauer: +saetze.at(-1).ende.toFixed(3), saetze };
if (!PROBE) writeFileSync(ORDNER + 'sprache.json', JSON.stringify(daten, null, 1));
writeFileSync(ORDNER + 'sprache.js', '// erzeugt von werkzeug/sprechen.mjs' + (PROBE ? ' (Probe: geschätzte Zeiten, kein Ton)' : '') +
  '\nwindow.SPRACHDATEN = ' + JSON.stringify(daten) + ';\n');
console.log(`ok ${PROBE ? 'Probe-' : ''}Aufnahme: ${saetze.length} Sätze, ${daten.dauer.toFixed(1)} s`);
