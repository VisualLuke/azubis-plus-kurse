# Lernvideo 14 – Mythos oder Wahrheit: Ausbildung

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 14
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Mythos oder Wahrheit, eine Off-Stimme (Erzähler), keine Figuren – nur Gegenstände
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Du hast in der Ausbildung mehr Rechte, als viele denken, und ein paar klare Pflichten.
- **Aufnahme:** `sprache.mp3` + `sprache.json` (Denkpausen und kurze Pausen vor den Szenen per `(Pause …)`), erzeugt mit `node werkzeug/stimme.mjs lernvideos/14-mythos-ausbildung` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Werkzeugkoffer, Fachbuch, Schraubenschlüssel, Berichtsheft, Stift und Schule kreisen auf Bögen über die Quiz-Bühne; eine Wippe: „Deine Regeln“ kippt nach links, „Regeln vom Chef“ nach rechts, bei „allein“ im Gleichgewicht; alles wirbelt davon, der Titel steigt aus der Maske, die Abdrücke „Mythos“ und „Stimmt“ schlagen auf | Mythos oder Wahrheit: Ausbildung |
| 2 | Behauptung, Countdown, roter Stempel; Schulgebäude, Chip „Pflicht“ schlägt auf; Stempelkarte fährt in die Stechuhr, Zeiger dreht, grüner Haken, Chip „Arbeitszeit“ | MYTHOS – Pflicht und Arbeitszeit |
| 3 | Behauptung, Countdown, roter Stempel; drei Aufgaben-Karten fliegen in die Mappe „Ausbildung“ (Haken); Auto fährt herein, Schwamm schrubbt mit Schaum, rotes X schlägt auf, der Schwamm fällt weg | MYTHOS – nur Aufgaben für die Ausbildung |
| 4 | Behauptung, Countdown, roter Stempel; Werkzeugkoffer und Fachbuch fliegen vom Betrieb herüber, Preisschild schwingt herein und zählt auf „0 €“ | MYTHOS – kostenlos vom Betrieb |
| 5 | Behauptung, Countdown, roter Stempel; Zeitleiste „Arbeitszeit | Freizeit“ (Mond): das Berichtsheft springt aus der Freizeit in die Arbeitszeit, Stift schreibt Zeile für Zeile, die Uhr läuft | MYTHOS – in der Arbeitszeit |
| 6 | Behauptung, Countdown, grüner Stempel; Zeitstrahl „Probezeit“ – Marker läuft durch; Schutzschild legt sich vor den Vertrag, ein Kündigungsbrief prallt ab; nur der Chip „schwerer Grund“ fällt schwer herein | STIMMT – nach der Probezeit gut geschützt |
| 7 | Behauptung, Countdown, grüner Stempel; Weg von Betrieb A zu Betrieb B mit Schranke; drei Bedingungen („Beruf wechseln“, „wichtiger Grund“, „Betrieb stimmt zu“) ploppen nacheinander auf; „Rat holen“: Stationen „Kammer“ und „Azubis Plus“ auf dem Weg, die Schranke öffnet sich | STIMMT – aber nicht einfach so |
| 8 | Die sechs Behauptungen als kleine Karten mit ihrem Stempel reihen sich auf, der Zähler läuft mit | 4 × Mythos · 2 × Stimmt |

Abspann: „Du hast mehr Rechte, als viele denken.“ und „Und ein paar klare Pflichten.“ (Kernbotschaft).

Layout, Karte, Pillen, Countdown-Ring und Stempel (`teile/stempel-rot.svg`, `stempel-gruen.svg`, Kopie) wie Lernvideo 12
(„Layout Mythos oder Wahrheit“ in `../12-mythos-geld/konzept.md`). Jede Animation hängt an einem Wort aus `sprache.json`.

## Abweichungen vom Briefing

- Szene 7: Sprechertext nach `../korrekturen.md` („Stimmt – aber nicht einfach so. …“), Text im Bild
  „STIMMT – aber nicht einfach so“. Im Bild statt der Ausländerbehörde nur die Stationen „Kammer“ und „Azubis Plus“ –
  die Ausländerbehörde gilt nur mit Visum, und das sagt der korrigierte Text nicht mehr.
- Szene 8: Verweis auf den Podcast gestrichen (siehe `../korrekturen.md`); Sprechertext wie in Lernvideo 12 nur
  „Wie viele hattest du richtig?“, Text im Bild die Auflösung „4 × Mythos · 2 × Stimmt“, danach Abspann mit der Kernbotschaft.
  Keine Figuren (Amir und Sabine winken nicht).
- Keine Figur (Format ohne Figuren): Szene 3 Schwamm schrubbt allein am Auto, Szene 4 Koffer und Buch kommen vom Betrieb,
  Szene 5 Heft und Stift, Szene 6 Schild vor dem Vertrag statt um die Figur.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Deine Ausbildung, deine Regeln? Nicht ganz. Aber auch nicht die Regeln vom Chef allein. Was stimmt?

### Szene 2
(Pause 1.5)
Erzähler: „Die Berufsschule ist freiwillig.“
(Pause 3)
Erzähler: Mythos! Die Berufsschule ist Pflicht. Und sie zählt als Arbeitszeit.

### Szene 3
(Pause 1.5)
Erzähler: „Mein Chef darf mich alles machen lassen.“
(Pause 3)
Erzähler: Mythos! Du darfst nur Aufgaben bekommen, die zu deiner Ausbildung gehören. Privat das Auto vom Chef waschen gehört nicht dazu.

### Szene 4
(Pause 1.5)
Erzähler: „Werkzeug und Fachbücher für den Betrieb muss ich selbst kaufen.“
(Pause 3)
Erzähler: Mythos! Was du für die Ausbildung im Betrieb und für die Prüfung brauchst, bekommst du kostenlos.

### Szene 5
(Pause 1.5)
Erzähler: „Das Berichtsheft muss ich in meiner Freizeit schreiben.“
(Pause 3)
Erzähler: Mythos! Dein Betrieb muss dir dafür Zeit während der Arbeit geben.

### Szene 6
(Pause 2.5)
Erzähler: „Nach der Probezeit kann der Betrieb mir nicht einfach kündigen.“
(Pause 3)
Erzähler: Stimmt! Dann ist eine Kündigung durch den Betrieb nur noch aus einem schweren Grund möglich.

### Szene 7
(Pause 1.5)
Erzähler: „Ich kann meinen Ausbildungsbetrieb wechseln.“
(Pause 3)
Erzähler: Stimmt – aber nicht einfach so. Nach der Probezeit geht das nur, wenn du den Beruf wechselst, wenn es einen wichtigen Grund gibt oder wenn dein Betrieb zustimmt. Hol dir vorher Rat.

### Szene 8
(Pause 3)
Erzähler: Wie viele hattest du richtig?
