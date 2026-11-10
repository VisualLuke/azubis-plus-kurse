# Lernvideo 13 – Mythos oder Wahrheit: Krank sein

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 13
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Mythos oder Wahrheit, eine Off-Stimme (Erzählerin), keine Figuren – nur Gegenstände
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Krank sein ist erlaubt. Wichtig ist nur, dass du dich richtig meldest.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/13-mythos-krank` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Thermometer steigt, Taschentuch zieht sich aus der Box; Fragezeichen; zwei Abdrücke „Mythos“ und „Stimmt“ wechseln sich ab | Mythos oder Wahrheit? |
| 2 | Behauptungskarte, Countdown-Ring 3-2-1, roter Stempel „Mythos“. Bett mit Thermometer, Handy leuchtet auf, Nachricht fliegt zum Betrieb, Haken; Regeln werden abgehakt | MYTHOS – krank sein ist erlaubt |
| 3 | Karte, Countdown, Stempel „Mythos“. Münzen fliegen vom Betrieb aufs Konto, neue „Gehalt“-Eingänge; sechs Wochen füllen sich; „erste 4 Wochen im Betrieb“: Krankenkasse zahlt Krankengeld | MYTHOS – Gehalt läuft weiter |
| 4 | Karte, Countdown, Stempel „Mythos“. Sprechblase „Diagnose“, Schloss schlägt zu; zwei Chips „krank“ und „wie lange?“ bekommen Haken | MYTHOS – die Krankheit ist privat |
| 5 | Karte, Countdown, Stempel „Mythos“. Haus, Weg-Punkt läuft zur Apotheke und zum Supermarkt (grüne Haken); Disco-Kugel schwingt herein, rotes X | MYTHOS – was der Heilung hilft, ist okay |
| 6 | Karte, Countdown, Stempel „Mythos“. Liegestuhl und Sonne, Thermometer steigt; Urlaubstage werden grau und fallen heraus; Attest kommt, die Tage fliegen zurück ins Urlaubskonto | MYTHOS – mit Attest bekommst du sie zurück |
| 7 | Karte, Countdown, grüner Stempel „Stimmt“. Uhr läuft auf 7:00, Handy sendet an Betrieb, am Schultag auch an die Berufsschule | STIMMT – sofort melden |
| 8 | Punktestand: sechs Karten drehen sich um – fünfmal „Mythos“, einmal „Stimmt“; Thermometer sinkt | Krank sein ist erlaubt |

Umsetzung wie Lernvideo 1: Text im Bild links (Wörter steigen aus einer Maske, kein Marker), Bühne rechts; jede Animation hängt
an einem Wort aus `sprache.json`. Mythos-Format: die Behauptung steht als Karte auf der Bühne, in der Denkpause (3 s) läuft ein
Countdown-Ring 3-2-1, dann schlägt der Stempel mit Wackler, Tinte und Kamera-Akzent auf; die Bühne wird hell und schrumpft nach rechts, die Karte
wandert nach links oben, darunter steigt der Text im Bild, rechts spielt die Erklärung. Layout, Karte, Pillen und Stempel (`teile/stempel-rot.svg`, `stempel-gruen.svg`, Kopie) wie Lernvideo 12
(„Layout Mythos oder Wahrheit“). Abspann: „Gute Besserung!“ und die Kernbotschaft.

Abweichungen vom Briefing (freigegeben, siehe `../korrekturen.md`):
- Szene 3: Lohnfortzahlung bis zu sechs Wochen; in den ersten vier Wochen im Betrieb zahlt die Krankenkasse Krankengeld.
- Szene 7: Behauptung jetzt „sofort krankmelden, noch vor Arbeitsbeginn“ (nicht „vor dem Arzt“); am Schultag auch in der
  Berufsschule melden. Text im Bild „STIMMT – sofort melden“.
- Szene 8: Verweis auf den anderen Kurs gestrichen; stattdessen die Kernbotschaft. Text im Bild „Krank sein ist erlaubt“.
- Szene 1: Text im Bild nur „Mythos oder Wahrheit?“ (ohne Kurstitel – Videos bleiben neutral).
- Keine Figur (Format ohne Figuren): statt „Figur im Bett“ usw. zeigen Gegenstände die Handlung (Bett mit Thermometer,
  Weg-Punkt statt Figur mit Schal).

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Krank in der Ausbildung. Da gibt es viele Ängste. Welche sind echt? Lass uns testen!

### Szene 2
Erzählerin: „In der Probezeit darf ich nicht krank werden.“
(Pause 3)
Erzählerin: Mythos! Jeder wird mal krank, auch in der Probezeit. Wichtig ist, dass du dich sofort meldest und dich an die Regeln hältst.

### Szene 3
Erzählerin: „Wenn ich krank bin, bekomme ich kein Gehalt.“
(Pause 3)
Erzählerin: Mythos! In der Regel läuft dein Gehalt bis zu sechs Wochen weiter. Nur in den ersten vier Wochen im Betrieb zahlt dir die Krankenkasse Krankengeld.

### Szene 4
Erzählerin: „Ich muss meinem Chef sagen, welche Krankheit ich habe.“
(Pause 3)
Erzählerin: Mythos! Du musst nur sagen, dass du krank bist und wie lange ungefähr.

### Szene 5
(Pause 0.8)
Erzählerin: „Mit Krankschreibung darf ich nicht aus dem Haus.“
(Pause 3)
Erzählerin: Mythos! Du darfst alles tun, was deiner Heilung nicht schadet. Zur Apotheke gehen oder einkaufen ist okay. Party machen eher nicht.

### Szene 6
Erzählerin: „Wenn ich im Urlaub krank werde, sind die Urlaubstage weg.“
(Pause 3)
Erzählerin: Mythos! Mit einer Krankschreibung vom Arzt bekommst du diese Tage zurück.

### Szene 7
(Pause 1.2)
Erzählerin: „Wenn ich krank bin, muss ich mich sofort melden.“
(Pause 3)
Erzählerin: Stimmt! Sag deinem Betrieb sofort Bescheid, am besten vor Arbeitsbeginn. An einem Schultag meldest du dich auch in der Berufsschule.

### Szene 8
(Pause 0.6)
Erzählerin: Krank sein ist erlaubt. Wichtig ist nur, dass du dich richtig meldest. Gute Besserung!
