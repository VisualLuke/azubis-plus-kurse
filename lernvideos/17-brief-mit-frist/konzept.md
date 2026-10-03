# Lernvideo 17 – Was würdest du tun? Ein Brief mit „Frist“

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 17
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzähler und Amir (Porträt im Kreis, Mund nur in seinem Satz)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Behördenbriefe nie liegen lassen. Absender, Frist und Aufgabe finden, dann Hilfe holen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/17-brief-mit-frist` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Amir (Porträt) hüpft herein, der Briefkasten klappert, der Umschlag schiebt sich heraus, fliegt auf einem Bogen nach vorn und faltet sich zum Brief auf; die Zeilen wachsen, schwierige Wörter („Bescheid“, „Rechtsbehelfsbelehrung“, „fristgerecht“) springen als Chips heraus und wackeln; das fett gedruckte „Frist“ pocht, wächst groß heraus und leuchtet (pulsierender Schein); Amir fragt (Mund nur in seinem Satz), Fragezeichen wackelt | Ein Brief mit Frist |
| 2 | Dunkle Quiz-Bühne mit schwebendem Fragezeichen-Knopf; drei Optionskarten A/B/C fliegen auf „A“, „B“, „C“ auf Bögen herein, ihr Symbol spielt: A Umschlag sinkt in die Ablage, Papier fällt darauf; B Stift kritzelt Zeile für Zeile, Fragezeichen; C Brief wird gescannt, drei Rahmen (Absender, Frist, Aufgabe) ploppen, Hilfe-Sprechblase | A · B · C |
| 3 | Denkpause: Countdown-Ring läuft leer (erst „?“), ein Lichtrahmen wandert über A → B → C, die Ziffern 3 – 2 – 1 ploppen auf den gesprochenen Zahlen | 3 – 2 – 1 |
| 4 | Karte A kommt nach vorn, rote Marke ✕; Bühne hell, Karte als Kachel: Brief fällt auf den Tisch, Papierstapel wächst darauf, Kalenderblätter fliegen ab (1 … 21), „3 Wochen“; Chip „Frist“ wird rot und wackelt; zweiter Brief mit Warnschild fliegt herein, „€ Gebühren?“; Stempel schlägt „Entscheidung“ auf; Amirs Sprechblase bleibt leer und wird gestrichen | A: Frist verpasst |
| 5 | Karte B nach vorn, gelbe Marke !; Amir schreibt schnell (Stift kritzelt Zeile für Zeile), der Zettel fliegt zur Behörde; Fragezeichen über Amir; der Brief kommt mit Fragezeichen zurück; Warnschild „Problem“ bleibt, Welle | B: Antwort passt nicht |
| 6 | Karte C nach vorn, grüne Marke ✓; Handy mit Übersetzungs-App („Deutsch“ → „Deine Sprache“), Scan über den Brief; der Brief kommt groß nach vorn, auf „Wer?“, „Bis wann?“, „Was soll ich tun?“ ploppen die Rahmen 1–3 (Absender, Frist, Aufgabe), auf „markiert“ pochen sie; Amir und Sabine (Ausbilderin, Porträt, lächelt); Azubis Plus Helper App: Brief landet in „Dokumente“, „✓ Gesendet“; Antwort fliegt in den Briefkasten, Chip „rechtzeitig“ | Wer? · Bis wann? · Was tun? |
| 6b | Breite helle Bühne, Chip „Wichtig!“: Weg bis zur Frist-Fahne, Amir läuft als Marker; „mehr Zeit?“ fliegt vor der Frist zur Behörde, Haken, die Fahne rückt nach hinten (grünes Stück). Zweite Reihe „Widerspruch“: die Fahne ruckt und springt zurück, Schloss; kurze Antwort geht vor der Frist los (Chip „kurz“, Fahne grün), dann „später mehr“ | – (nur Beschriftungen auf der Bühne) |
| 7 | Dunkle Bühne: alle drei Karten, A und B verblassen, C kommt nach vorn, grüne Marke, grün pulsierender Rahmen, Welle; dann hell: Umschlag hüpft, der Brief steigt heraus, Rahmen 1–3; rechts drei Häkchen (Umschlag, Lupe, Sprechblase) auf „sofort“, „Aufgabe“, „Hilfe“, am Ende hüpfen alle drei | Beste Lösung: C · Öffnen · Verstehen · Hilfe holen |

Abspann: „Briefe nie liegen lassen.“ und „Absender, Frist und Aufgabe finden, dann Hilfe holen.“ (Kernbotschaft).

## Layout „Was würdest du tun?“

Nach dem Layout aus `../16-verschlafen/konzept.md`, aufgebaut wie das Mythos-Layout aus Lernvideo 12 (dunkle Quiz-Bühne 1680 × 880, Verlauf b500 → b700, Countdown-Ring,
Stempel), damit das Format wiedererkennbar bleibt:

1. **Situation:** helle Bühne rechts (900 × 720), Text im Bild links; die Figur als Porträt im Kreis.
2. **Optionen:** dunkle Quiz-Bühne; oben der Chip „Was würdest du tun?“, darunter drei weiße Optionskarten mit Buchstaben-Plakette
   (keine Beschriftung außer dem Buchstaben, wie in Kurs 16). Jede Karte fliegt auf ihrem Buchstaben herein, ihr Symbol spielt,
   solange die Option vorgelesen wird. Bewertung als runde Marke rechts oben samt Rahmen: A rot ✕, B gelb !, C grün ✓.
3. **Denkpause:** `(Pause 2)`, dann zählt der Erzähler „Drei … Zwei … Eins …“. Unter den Karten läuft der Countdown-Ring leer, ein
   Lichtrahmen wandert über die Karten; die Ziffern ploppen auf den gesprochenen Zahlen.
4. **Durchspielen:** Die Karte der Option wandert als Kachel nach links oben (Rahmen in ihrer Farbe), die Bühne wird hell und klein
   (wie Lernvideo 12), darunter steigt der Text im Bild (erstes Wort in der Farbe der Option). Rechts spielt die Folge.
   Vorher: alle drei Karten auf der dunklen Bühne, die gewählte kommt nach vorn, die Marke schlägt auf „A/B/C“ auf.
5. **Auflösung:** Die drei Karten wieder nebeneinander; A und B werden blass, C wächst und leuchtet grün, Stempel „Beste Lösung“.

## Abweichungen vom Briefing

- Szene 6 (siehe `../korrekturen.md`): nach „fragt er vorher nach mehr Zeit“ ergänzt: „Aber manche Fristen kann man nicht
  verlängern, zum Beispiel beim Widerspruch. Dann antwortet er rechtzeitig kurz und erklärt später mehr.“
- Szene 3: vor „Drei … Zwei … Eins …“ eine stille Denkpause von 2 s (Countdown-Ring läuft schon).
- Szene 6: Die Nachricht an Azubis Plus läuft über die Azubis Plus Helper App (Bereich „Dokumente“, Brief wird dort abgelegt).
- Kein Titel-Vorspann (Videos bleiben neutral); „Ein Brief mit Frist“ steht als Text im Bild in der Situation.
- Szene 6b („Wichtig …“, Korrektur) hat keinen eigenen Text im Bild – das Briefing sieht keinen vor; die Bühne zeigt nur Beschriftungen
  aus dem Sprechertext („Wichtig!“, „mehr Zeit?“, „Widerspruch“, „kurz“, „später mehr“).
- Sabine (Ausbilderin) erscheint in Szene 6 als stummes Porträt (Briefing: „Amir mit Sabine“); sie spricht nicht.
- Aussprache 03.10.2026 (Hörprobe, Nutzer): Die Antworten heißen gesprochen „Antwort A/B/C“ (statt „Ah“ bzw. „Option A“,
  das klang wie „Ahh“); im Bild steht ebenfalls „Antwort A/B/C“ bzw. der Buchstabe auf der Karte.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Amir: hfqsl1OMbiWsgPpht3el

### Szene 1
Erzähler: Amir kommt nach Hause. Im Briefkasten liegt ein offizieller Brief. Viele schwierige Wörter. Und ein Wort ist fett gedruckt: „Frist“.
Amir: Was wollen die von mir?

### Szene 2
Erzähler: Was würdest du tun? Antwort A: Den Brief erst mal weglegen, das ist bestimmt nicht so wichtig. Antwort B: Irgendwie antworten, auch wenn du nicht genau verstehst, worum es geht. Antwort C: Den Brief übersetzen, Absender, Frist und Aufgabe suchen und dir Hilfe holen.

### Szene 3
(Pause 2)
Erzähler: Drei …
(Pause 0.3)
Erzähler: Zwei …
(Pause 0.3)
Erzähler: Eins …

### Szene 4
Erzähler: Antwort A: Der Brief liegt drei Wochen auf dem Tisch. Die Frist ist vorbei. Jetzt kommt ein zweiter Brief, vielleicht mit Gebühren, oder eine Entscheidung ist gefallen, ohne dass Amir etwas sagen konnte.

### Szene 5
Erzähler: Antwort B: Amir schickt irgendeine Antwort. Aber er hat nicht verstanden, was gefragt war. Die Behörde kann nichts damit anfangen, und das Problem bleibt.

### Szene 6
Erzähler: Antwort C: Amir übersetzt den Brief mit einer App. Dann sucht er drei Dinge: Wer schreibt? Bis wann? Was soll ich tun? Das markiert er. Er zeigt den Brief seiner Ausbilderin und schreibt Azubis Plus. Zusammen antworten sie rechtzeitig. Wichtig: Wenn Amir die Frist nicht schaffen kann, fragt er vorher nach mehr Zeit. Aber manche Fristen kann man nicht verlängern, zum Beispiel beim Widerspruch. Dann antwortet er rechtzeitig kurz und erklärt später mehr.

### Szene 7
Erzähler: Die beste Wahl ist Antwort C. Merke dir: Öffne jeden Brief sofort. Such Absender, Frist und Aufgabe. Und hol dir Hilfe, bevor die Frist vorbei ist.
