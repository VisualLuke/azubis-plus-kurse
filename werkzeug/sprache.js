// Satz-Zugriff auf die Aufnahme für Vorlagen, die Animationen an Satz und Wort hängen.
// Nach motor.js einbinden: <script src="../../werkzeug/motor.js"></script><script src="../../werkzeug/sprache.js"></script>
// Quelle: sprache.json von werkzeug/stimme.mjs (rendern.mjs legt sie als window.SPRACHDATEN vor motor.js in die Seite).
// A(s)      Sekunde der Aufnahme → Filmzeit (Sprache beginnt bei VERSATZ)
// Z(i)      Beginn von Satz i (0-basiert, Reihenfolge wie im Sprechertext), ZE(i) sein Ende
// W(i, w)   Beginn des Wortes w in Satz i (Groß/Klein und Satzzeichen egal, Anfang genügt: 'Postfil' trifft „Postfiliale“),
//           W(i, w, 2) das zweite Vorkommen; WE(i, w) Ende des Wortes
// SAETZE    [[start, ende, text, sprecher], …] in Filmzeit; ABSCHNITTE [[start, ende, sprecher], …] für Gespräche
// ENDE_SPRACHE  Ende der Aufnahme in Filmzeit; mund(t, sprecher) Mundöffnung 0…1 nur in eigenen Sätzen
if (!SPRACHDATEN.saetze.length) throw new Error('sprache.json fehlt – erst node werkzeug/stimme.mjs <ordner>');
const VERSATZ = 0.6;
window.SPRACHE = { datei: 'sprache.mp3', versatz: VERSATZ };
const A = s => s + VERSATZ;
const SAETZE = SPRACHDATEN.saetze.map(s => [A(s.start), A(s.ende), s.text, s.sprecher]);
const ABSCHNITTE = SAETZE.map(([a, b, , w]) => [a, b, w]);
const ENDE_SPRACHE = A(SPRACHDATEN.dauer);
const _satzI = i => SPRACHDATEN.saetze[i] || (() => { throw new Error('Satz ' + i + ' gibt es nicht'); })();
const Z = i => A(_satzI(i).start), ZE = i => A(_satzI(i).ende);
function _wortI(i, wort, n) {
  const z = _norm(wort); let k = 0;
  for (const w of _satzI(i).woerter) if (_norm(w.w).startsWith(z) && ++k === n) return w;
  throw new Error(`Wort „${wort}“ (${n}.) nicht in Satz ${i}: ${_satzI(i).text}`);
}
const W = (i, wort, n = 1) => A(_wortI(i, wort, n).start);
const WE = (i, wort, n = 1) => A(_wortI(i, wort, n).ende);
function mund(t, wer, phase = 0) {
  const ab = ABSCHNITTE.find(([a, b, w]) => w === wer && t >= a - .03 && t <= b + .05);
  if (!ab) return 0;
  const p = window.PEGEL ? (window.PEGEL[Math.round((t - VERSATZ) * 30)] || 0) : .6 + .4 * Math.sin(t * 9);
  return Math.max(0, Math.min(1, p * (.55 + .45 * Math.abs(Math.sin(t * 13 + phase * 7)))));
}
