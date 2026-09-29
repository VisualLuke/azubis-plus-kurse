# Lernvideo 9 – Podcast: Zwischen- und Abschlussprüfung

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 9
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Priya (Azubi, Köchin) und Sabine (Ausbilderin) im Gespräch; Porträts links (Sabine) und rechts (Priya),
  in der Mitte die Bühne mit den animierten Einblendungen
- **Setting:** Büro der Ausbilderin, Priya hat einen Brief der Kammer dabei
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Prüfungen sind planbar. Wer früh anfängt und das Berichtsheft vollständig hat, ist gut vorbereitet.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/09-pruefungen` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Schreibtisch im Büro; Brief „IHK“ steigt auf und zittert, klappt auf: „Zwischenprüfung“; Schweißtropfen fallen an Priyas Seite; bei „Ganz ruhig“ beruhigen Wellen den Brief, er legt sich auf den Tisch | – (der Brief trägt „Zwischenprüfung“) |
| 2 | Zeitstrahl „Ausbildung“ von Start bis Ende, ein Marker läuft; in der Mitte steckt eine Flagge „Zwischenprüfung“, darunter „oder: Teil 1 der Abschlussprüfung“, eine Note fliegt ans Ende; am Ende steckt die Flagge „Abschlussprüfung“ | Mitte: Zwischenprüfung · Ende: Abschlussprüfung |
| 3 | Betrieb links, Kammer „IHK“ rechts, Pfeil zeichnet sich, Formular „Anmeldung“ fliegt vom Betrieb zur Kammer; Brief fliegt von der Kammer in Priyas Briefkasten, die Fahne klappt hoch; Fragezeichen „nachfragen“ | Anmeldung meist über den Betrieb |
| 4 | Schranke „Zulassung“ bleibt zu; Berichtsheft mit leeren Seiten (Lücken gelb); Kalenderblatt „heute“, Stift schreibt, Zeilen füllen sich, Fortschritt läuft auf 100 %; Schranke öffnet sich | Berichtsheft vollständig = Zulassung |
| 5 | Stapel alter Prüfungsbögen wird aufgefächert, Haken setzen sich; Karteikarten mit Fachwörtern drehen sich um; Frage-Karte: das schwere Wort wird erklärt, Glühbirne; drei Azubis (Porträts) am Tisch | Alte Prüfungen · Fachbegriffe · Lerngruppe |
| 6 | Wochenkalender, der Prüfungstag wird grün („Prüfung“), dann der Arbeitstag davor („frei“), dazu Buch und Tasse (Lernen und Ausruhen) | Abschlussprüfung: Prüfungstag + Tag davor frei |
| 7 | Pfeil im Kreis „nochmal“ dreht sich, zwei Versuche; Zeitstrahl verlängert sich „bis zur nächsten Prüfung · höchstens 1 Jahr“; Ausländerbehörde; zurück im Büro: Brief liegt ruhig, Priya atmet aus und lächelt | Durchgefallen? Wiederholen möglich |

Umsetzung: Gesprächsformat wie `kurse/04-rechte-pflichten` (Porträts links/rechts, Mund mit dem Pegel der Aufnahme,
der Sprecher wird größer und bekommt einen Rand, der Zuhörer nickt). Wer spricht, kommt exakt aus `sprache.json`
(`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer Maske; jede Animation hängt an
einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Prüfungen sind planbar.“ und die Kernbotschaft.

Änderungen am Briefing (freigegeben, siehe `../korrekturen.md`): Szene 6 – Text im Bild „Abschlussprüfung: Prüfungstag + Tag davor frei“;
Szene 7 – „bis zur nächsten Prüfung, höchstens ein Jahr“. Szene 1: „Text im Bild“ „Prüfungen in der Ausbildung“ wirkt als Titel und
entfällt (Videos neutral, kein Titel); der Brief selbst trägt „Zwischenprüfung“. „Teil 1“ im Sprechertext als „Teil eins“ ausgeschrieben, damit die Stimme es sicher richtig liest. Die Fachwörter auf den Karteikarten (Szene 5) sind
Beispiele aus Priyas Beruf (Köchin).

## Sprechertext

@modell eleven_v4
@stimme Priya: Mac2FKpSgaGIsaNRXt8A
@stimme Sabine: PcHppp9ymY0Wa5ee6hOQ

### Szene 1
Priya: Sabine, ich habe einen Brief von der IHK bekommen. Da steht „Zwischenprüfung“. Ich bin jetzt schon nervös.
Sabine: Ganz ruhig. Ich erkläre dir, wie das funktioniert.

### Szene 2
Sabine: Ungefähr in der Mitte der Ausbildung gibt es die Zwischenprüfung. In manchen Berufen heißt sie „Teil eins der Abschlussprüfung“, dann zählt die Note schon für den Abschluss. Am Ende kommt die Abschlussprüfung.

### Szene 3
Priya: Muss ich mich selbst anmelden?
Sabine: Meistens meldet dich der Betrieb bei der Kammer an. Aber prüf, ob der Brief kommt, und frag nach, wenn nicht.

### Szene 4
Sabine: Für die Abschlussprüfung brauchst du ein vollständiges Berichtsheft. Ohne das wirst du nicht zugelassen.
Priya: Meins ist ein bisschen hinterher …
Sabine: Dann fang heute an, es nachzutragen.

### Szene 5
Priya: Wie lerne ich am besten?
Sabine: Nimm alte Prüfungen und übe damit. Lern die Fachbegriffe, denn viele Fragen scheitern an der Sprache, nicht am Wissen. Und such dir eine Lerngruppe.

### Szene 6
Sabine: Am Prüfungstag hast du frei. Und vor der schriftlichen Abschlussprüfung bekommst du den Arbeitstag davor auch frei, zum Lernen und Ausruhen.

### Szene 7
Priya: Und wenn ich durchfalle?
Sabine: Dann kannst du die Prüfung wiederholen, bis zu zweimal. Auf deinen Wunsch wird die Ausbildung verlängert, bis zur nächsten Prüfung, höchstens ein Jahr. Sprich dann auch früh mit der Ausländerbehörde, damit dein Aufenthalt passt.
Priya: Okay. Das beruhigt mich.
