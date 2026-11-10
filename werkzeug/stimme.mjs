// Erzeugt die Sprachaufnahme eines Kurses mit ElevenLabs: jeden Satz einzeln (with-timestamps),
// zusammengesetzt zu <ordner>/sprache.mp3, Satz- und Wortzeiten in <ordner>/sprache.json.
// Aufruf: node werkzeug/stimme.mjs lernvideos/01-krankenkasse [--probe] [--neu]
//   --probe  nur zeigen, welche Sätze neu erzeugt würden (kostet nichts)
//   --neu    alle Sätze neu erzeugen (sonst nur geänderte)
//
// Quelle ist der Abschnitt „## Sprechertext“ in <ordner>/konzept.md:
//   @modell eleven_v4                       (optional, Standard eleven_v4)
//   @stimme Erzählerin: oClOrzqamOXmtcB8iqTj (Voice-ID oder Name aus /v1/voices; ohne Angabe: STIMMEN unten)
//   ### Szene 1
//   Erzählerin: Satz. Noch ein Satz?        (ohne „Name:“ spricht die einzige/letzte Stimme weiter)
//   (Pause 3)                               zusätzliche Stille vor dem nächsten Satz, z. B. Denkpause (Sekunden)
// Absätze werden in Sätze geteilt; jeder Satz ist ein eigener API-Aufruf. Ein Satz, dessen Text, Stimme
// und Modell gleich bleiben, wird nicht neu erzeugt: aus dem Zwischenspeicher .stimme/ (nicht im Repo)
// oder, wenn der fehlt, aus der vorhandenen sprache.mp3 geschnitten.
// Schlüssel in ELEVENLABS_API_KEY – wird nie ausgegeben. Braucht ffmpeg mit libmp3lame (FFMPEG=/pfad).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { resolve, relative } from 'node:path';

const WURZEL = new URL('..', import.meta.url).pathname;
const args = process.argv.slice(2);
const ORDNER = resolve(args.find(a => !a.startsWith('--')) || '') + '/';
const PROBE = args.includes('--probe'), ALLE_NEU = args.includes('--neu');
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const SR = 44100;
const PAUSE = { satz: .4, sprecher: .5, szene: .6 };      // Sekunden zwischen den Sätzen
const MODELL = 'eleven_v4';
// Stimmen für die wiederkehrenden Rollen (Namen im Briefing). Die Voice-IDs gelten auch, wenn der
// Schlüssel keine Stimmen auflisten darf (voices_read).
const STIMMEN = {
  'Erzähler': 'K8bIZwDsGMHreGKTIVHN', 'Erzählerin': 'oClOrzqamOXmtcB8iqTj',
  'Jonas': 'K8bIZwDsGMHreGKTIVHN', 'Sabine': 'PcHppp9ymY0Wa5ee6hOQ',
  'Amir': 'hfqsl1OMbiWsgPpht3el', 'Kwame': 'hfqsl1OMbiWsgPpht3el', 'Yusuf': 'hfqsl1OMbiWsgPpht3el',
  'Mai': 'Mac2FKpSgaGIsaNRXt8A', 'Priya': 'Mac2FKpSgaGIsaNRXt8A', 'Ana': 'Mac2FKpSgaGIsaNRXt8A',
  // Nebenrollen – treffen sie im selben Video auf dieselbe Stimme, in konzept.md per @stimme umlegen
  'Küchenchef': 'K8bIZwDsGMHreGKTIVHN', 'Geselle': 'K8bIZwDsGMHreGKTIVHN',
  'Frau Krause': 'oClOrzqamOXmtcB8iqTj', 'Frau Wolf': 'oClOrzqamOXmtcB8iqTj', 'Herr Braun': 'K8bIZwDsGMHreGKTIVHN',
  'Empfangschefin': 'PcHppp9ymY0Wa5ee6hOQ', 'Bäckermeisterin': 'PcHppp9ymY0Wa5ee6hOQ', 'Praxisanleiterin': 'PcHppp9ymY0Wa5ee6hOQ',
};

/* ---------- Sprechertext lesen ---------- */
const konzept = readFileSync(ORDNER + 'konzept.md', 'utf8');
const abschnitt = konzept.split(/^## Sprechertext\s*$/m)[1]?.split(/^## /m)[0];
if (!abschnitt) throw new Error('konzept.md: Abschnitt „## Sprechertext“ fehlt');
let modell = MODELL, szene = 0, sprecher = null, extraPause = 0;
const stimmen = {}, absaetze = [];
for (const zeile of abschnitt.split('\n').map(z => z.trim())) {
  let m;
  if (!zeile || zeile.startsWith('>')) continue;
  if ((m = zeile.match(/^@modell\s+(\S+)/))) modell = m[1];
  else if ((m = zeile.match(/^@stimme\s+([^:]+):\s*(.+)$/))) stimmen[m[1].trim()] = m[2].trim();
  else if ((m = zeile.match(/^###\s*Szene\s+(\d+)/i))) szene = +m[1];
  else if ((m = zeile.match(/^\(Pause\s+([\d.,]+)\s*s?\)$/i))) extraPause += +m[1].replace(',', '.');
  else if ((m = zeile.match(/^([A-ZÄÖÜ][\wäöüß]*(?: [A-ZÄÖÜ][\wäöüß]*)?):\s+(.+)$/))) { sprecher = m[1]; absaetze.push({ szene, sprecher, text: m[2], pause: extraPause }); extraPause = 0; }
  else if (absaetze.length) absaetze.at(-1).text += ' ' + zeile;
}
if (!absaetze.length) throw new Error('konzept.md: kein Satz im Sprechertext');

// Absatz → Sätze (Abkürzungen wie „z. B.“ trennen nicht)
const ABK = /\b(z|B|u|a|d|h|ca|Nr|bzw|usw|ggf|evtl|inkl|Dr|Str)\.$/;
function saetzeAus(text) {
  const teile = text.replace(/\s+/g, ' ').trim().split(/(?<=[.?!…]["“”‘’»«]?)\s+(?=["„‚»]?[A-ZÄÖÜ0-9])/);
  const aus = [];
  for (const t of teile) (aus.length && ABK.test(aus.at(-1)) ? aus[aus.length - 1] += ' ' + t : aus.push(t));
  return aus;
}
const SAETZE = absaetze.flatMap(a => saetzeAus(a.text).map((text, i) => ({ szene: a.szene, sprecher: a.sprecher, text, pause: i ? 0 : a.pause })));

/* ---------- Stimmen auflösen ---------- */
const KEY = process.env.ELEVENLABS_API_KEY;
async function api(pfad, body) {
  if (!KEY) throw new Error('ELEVENLABS_API_KEY ist nicht gesetzt');
  for (let versuch = 0; ; versuch++) {
    const r = await fetch('https://api.elevenlabs.io' + pfad, {
      method: body ? 'POST' : 'GET',
      headers: { 'xi-api-key': KEY, 'content-type': 'application/json' },
      body: body && JSON.stringify(body),
    });
    if (r.ok) return r.json();
    const text = (await r.text()).slice(0, 400);
    if ((r.status === 429 || r.status >= 500) && versuch < 4) { await new Promise(f => setTimeout(f, 2000 * 2 ** versuch)); continue; }
    const fehler = new Error(`ElevenLabs ${r.status} ${pfad.split('?')[0]}: ${text}`); fehler.status = r.status; throw fehler;
  }
}
let stimmListe;
async function stimmeId(name) {
  const angabe = stimmen[name] || STIMMEN[name];
  if (angabe && /^[A-Za-z0-9]{20}$/.test(angabe)) return angabe;
  const gesucht = (angabe || name).toLowerCase();
  try { stimmListe ??= (await api('/v1/voices')).voices; }
  catch (e) { throw new Error(`Stimme „${name}“: keine Voice-ID angegeben und /v1/voices nicht lesbar (${e.status}). @stimme ${name}: <voice_id> in konzept.md setzen.`); }
  const v = stimmListe.find(v => v.name.toLowerCase() === gesucht) || stimmListe.find(v => v.name.toLowerCase().startsWith(gesucht));
  if (!v) throw new Error(`Stimme „${angabe || name}“ nicht gefunden. Vorhanden: ${stimmListe.map(v => v.name).join(', ')}`);
  return v.voice_id;
}
for (const s of SAETZE) {
  s.stimme = await stimmeId(s.sprecher).catch(e => { if (PROBE) return '?'; throw e; });
  s.hash = createHash('sha1').update(JSON.stringify([modell, s.stimme, s.text])).digest('hex').slice(0, 12);
}

/* ---------- Audio-Hilfen (PCM 16 bit mono 44,1 kHz) ---------- */
const dekodieren = (eingabe, extra = []) => {
  const buf = execFileSync(FFMPEG, ['-loglevel', 'error', ...extra, '-i', eingabe, '-f', 's16le', '-ac', '1', '-ar', String(SR), '-'], { maxBuffer: 1 << 30 });
  return new Int16Array(buf.buffer, buf.byteOffset, buf.length / 2);
};
// Stille vorn/hinten abschneiden: erstes/letztes 10-ms-Fenster über −42 dBFS, dazu etwas Luft
function zuschnitt(pcm) {
  const fenster = SR / 100, schwelle = 32768 * 10 ** (-42 / 20), n = Math.floor(pcm.length / fenster);
  const laut = i => { let s = 0; for (let k = i * fenster; k < (i + 1) * fenster; k++) s += pcm[k] * pcm[k]; return Math.sqrt(s / fenster) > schwelle; };
  let a = 0, b = n - 1;
  while (a < n && !laut(a)) a++;
  while (b > a && !laut(b)) b--;
  return [Math.max(0, (a - 3) * fenster), Math.min(pcm.length, (b + 9) * fenster)];     // 30 ms davor, 90 ms danach
}
function woerterAus(al, versatz) {
  const W = []; let cur = null;
  // Satzzeichen zählen nicht zur Wortzeit – ElevenLabs dehnt das letzte Zeichen bis ans Klipende
  al.characters.forEach((c, i) => {
    if (/\s/.test(c)) { cur = null; return; }
    if (!cur) W.push(cur = { text: '' });
    cur.text += c;
    if (/[\p{L}\p{N}]/u.test(c)) { cur.start ??= al.character_start_times_seconds[i]; cur.ende = al.character_end_times_seconds[i]; }
  });
  return W.filter(w => w.start != null).map(w => ({ w: w.text.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''), text: w.text,
    start: +(w.start - versatz).toFixed(3), ende: +(w.ende - versatz).toFixed(3) })).filter(w => w.w);
}

/* ---------- Sätze erzeugen oder wiederverwenden ---------- */
const SPEICHER = ORDNER + '.stimme/';
mkdirSync(SPEICHER, { recursive: true });
const alt = existsSync(ORDNER + 'sprache.json') ? JSON.parse(readFileSync(ORDNER + 'sprache.json', 'utf8')) : null;
const altNach = new Map((alt?.saetze || []).map(s => [s.hash, s]));
let altPcm = null;
const neu = SAETZE.filter(s => ALLE_NEU || !(existsSync(SPEICHER + s.hash + '.json') || (altNach.has(s.hash) && existsSync(ORDNER + 'sprache.mp3'))));
console.log(`${SAETZE.length} Sätze, ${neu.length} neu zu erzeugen (${neu.reduce((n, s) => n + s.text.length, 0)} Zeichen), Modell ${modell}`);
for (const s of SAETZE) console.log(`${neu.includes(s) ? '+' : '='} [${s.szene}] ${s.sprecher}: ${s.text}`);
if (PROBE) process.exit(0);

const klips = [];
for (const [i, s] of SAETZE.entries()) {
  let pcm, woerter;
  if (neu.includes(s)) {
    const antwort = await api(`/v1/text-to-speech/${s.stimme}/with-timestamps?output_format=mp3_44100_128`, {
      text: s.text, model_id: modell, language_code: 'de', seed: 7,
      previous_text: SAETZE[i - 1]?.sprecher === s.sprecher ? SAETZE[i - 1].text : undefined,
      next_text: SAETZE[i + 1]?.sprecher === s.sprecher ? SAETZE[i + 1].text : undefined,
    });
    writeFileSync(SPEICHER + s.hash + '.json', JSON.stringify({ text: s.text, audio_base64: antwort.audio_base64, alignment: antwort.alignment }));
    console.log(`   erzeugt ${i + 1}/${SAETZE.length}`);
  }
  if (existsSync(SPEICHER + s.hash + '.json')) {
    const d = JSON.parse(readFileSync(SPEICHER + s.hash + '.json', 'utf8'));
    const mp3 = SPEICHER + s.hash + '.mp3';
    writeFileSync(mp3, Buffer.from(d.audio_base64, 'base64'));
    const roh = dekodieren(mp3);
    const [a, b] = zuschnitt(roh);
    pcm = roh.slice(a, b);
    woerter = woerterAus(d.alignment, a / SR);
  } else {                                     // aus der alten Aufnahme schneiden
    const o = altNach.get(s.hash);
    altPcm ??= dekodieren(ORDNER + 'sprache.mp3');
    pcm = altPcm.slice(Math.round((o.start - .03) * SR), Math.round((o.ende + .09) * SR));
    woerter = o.woerter.map(w => ({ ...w, start: +(w.start - o.start + .03).toFixed(3), ende: +(w.ende - o.start + .03).toFixed(3) }));
  }
  klips.push({ s, pcm, woerter });
}

/* ---------- Zusammensetzen ---------- */
const teile = [], saetze = [];
let pos = 0;
klips.forEach(({ s, pcm, woerter }, i) => {
  if (i) {
    const v = klips[i - 1].s;
    const p = (v.szene !== s.szene ? PAUSE.szene : v.sprecher !== s.sprecher ? PAUSE.sprecher : PAUSE.satz) + (s.pause || 0);
    teile.push(new Int16Array(Math.round(p * SR))); pos += Math.round(p * SR);
  }
  const t0 = pos / SR;
  teile.push(pcm); pos += pcm.length;
  const r = x => +x.toFixed(3);
  // Satzgrenzen aus dem Pegel (Klip ist auf 30 ms davor / 90 ms danach zugeschnitten), Wörter darin
  const a = t0 + .03, b = t0 + pcm.length / SR - .09, k = x => r(Math.min(b, Math.max(a, x)));
  saetze.push({ nr: i + 1, szene: s.szene, sprecher: s.sprecher, stimme: s.stimme, text: s.text, hash: s.hash,
    start: r(a), ende: r(b), woerter: woerter.map(w => ({ w: w.w, start: k(t0 + w.start), ende: k(t0 + w.ende) })) });
});
const gesamt = new Int16Array(pos); let o = 0;
for (const t of teile) { gesamt.set(t, o); o += t.length; }
const roh = SPEICHER + 'gesamt.pcm';
writeFileSync(roh, Buffer.from(gesamt.buffer));
execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-f', 's16le', '-ar', String(SR), '-ac', '1', '-i', roh,
  '-c:a', 'libmp3lame', '-b:a', '160k', ORDNER + 'sprache.mp3']);
const daten = { modell, erzeugt: new Date().toISOString().slice(0, 10), dauer: +(pos / SR).toFixed(3), pausen: PAUSE, saetze };
writeFileSync(ORDNER + 'sprache.json', JSON.stringify(daten, null, 1).replace(/\{\n\s+"w": ([^\n]+)\n\s+"start": ([^\n]+)\n\s+"ende": ([^\n]+)\n\s+\}/g, '{"w": $1 "start": $2 "ende": $3}'));
console.log(`ok ${relative(WURZEL, ORDNER)}/sprache.mp3 (${daten.dauer.toFixed(1)} s) + sprache.json`);
