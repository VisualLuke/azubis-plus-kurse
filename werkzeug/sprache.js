// Zeiten aus der Sprachaufnahme (sprache.js von werkzeug/sprechen.mjs). Nach motor.js einbinden:
//   <script src="sprache.js"></script><script src="../../werkzeug/motor.js"></script><script src="../../werkzeug/sprache.js"></script>
// A(s)      Sekunde der Aufnahme → Filmzeit
// Z(i)      Beginn von Satz i (0-basiert, Reihenfolge wie in sprechtext.json), ZE(i) sein Ende
// W(i, w)   Beginn des Wortes w in Satz i (Groß/Klein und Satzzeichen egal, Anfang genügt: 'Postfil' trifft „Postfiliale“),
//           W(i, w, 2) das zweite Vorkommen; WE(i, w) Ende des Wortes
// SAETZE    [[start, ende, text, sprecher], …] in Filmzeit; ABSCHNITTE [[start, ende, sprecher], …] für Gespräche
// ENDE_SPRACHE  Ende der Aufnahme in Filmzeit
const SD = window.SPRACHDATEN;
if (!SD) throw new Error('sprache.js fehlt – erst node werkzeug/sprechen.mjs <ordner> [--probe]');
const VERSATZ = 0.6;
if (!SD.probe) window.SPRACHE = { datei: 'sprache.mp3', versatz: VERSATZ };
const A = s => s + VERSATZ;
const SAETZE = SD.saetze.map(s => [A(s.start), A(s.ende), s.text, s.sprecher]);
const ABSCHNITTE = SAETZE.map(([a, b, , w]) => [a, b, w]);
const ENDE_SPRACHE = A(SD.dauer);
const _norm = w => w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
const _satz = i => { const s = SD.saetze[i]; if (!s) throw new Error('Satz ' + i + ' gibt es nicht'); return s; };
const Z = i => A(_satz(i).start), ZE = i => A(_satz(i).ende);
function _wort(i, wort, n) {
  const z = _norm(wort); let k = 0;
  for (const w of _satz(i).woerter) if (_norm(w[0]).startsWith(z) && ++k === n) return w;
  throw new Error(`Wort „${wort}“ (${n}.) nicht in Satz ${i}: ${_satz(i).text}`);
}
const W = (i, wort, n = 1) => A(_wort(i, wort, n)[1]);
const WE = (i, wort, n = 1) => A(_wort(i, wort, n)[2]);
// Mundöffnung eines Sprechers zur Zeit t (0…1): nur in seinen eigenen Sätzen, aus dem Pegel der Aufnahme
function mund(t, wer, phase = 0) {
  const ab = ABSCHNITTE.find(([a, b, w]) => w === wer && t >= a - .03 && t <= b + .05);
  if (!ab) return 0;
  const p = window.PEGEL ? (window.PEGEL[Math.round((t - VERSATZ) * 30)] || 0) : .6 + .4 * Math.sin(t * 9);
  return Math.max(0, Math.min(1, p * (.55 + .45 * Math.abs(Math.sin(t * 13 + phase * 7)))));
}
