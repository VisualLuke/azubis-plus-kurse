# Lernvideo 12 – Mythos oder Wahrheit: Rund ums Geld

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 12
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Mythos oder Wahrheit, eine Off-Stimme (Erzähler), keine Figuren
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Beim Geld in der Ausbildung gibt es viele Gerüchte. Die meisten sind falsch.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/12-mythos-geld` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Geldscheine und Münzen wirbeln auf Bögen über die Quiz-Bühne, Gerüchte-Blasen („…“) ploppen auf; das Geld wirbelt davon, der Titel steigt aus der Maske, darunter schlagen die Abdrücke „Mythos“ und „Stimmt“ auf | Mythos oder Wahrheit: Geld |
| 2 | Behauptung, Countdown, roter Stempel; Gehaltszettel: der Block „Steuer“ schrumpft auf einen Strich, der Block „Versicherungen“ wächst, Münzen wandern ins Schild | MYTHOS – Abzüge sind vor allem Versicherungen |
| 3 | Behauptung, Countdown, roter Stempel; Monatskalender, Münze auf dem 1. – der 1. wird durchgestrichen, die Münze hüpft Tag für Tag bis zum letzten Arbeitstag (Freitag, 29.), der grün leuchtet; Vertrag mit Lupe | MYTHOS – spätestens am letzten Arbeitstag |
| 4 | Behauptung, Countdown, grüner Stempel; „Du“ (Gehaltszettel ohne Betrag) und „Betrieb“ stapeln abwechselnd Münzen – zwei gleich hohe Stapel, „≈“; beide wandern in das Schild „Sozialversicherung“ | STIMMT – der Betrieb zahlt mit |
| 5 | Behauptung, Countdown, roter Stempel; drei gleich hohe Balken (1., 2., 3. Jahr) – Balken 2 und 3 wachsen zur Treppe, eine Münze springt die Treppe hinauf, Bogenpfeil nach oben | MYTHOS – sie steigt jedes Jahr |
| 6 | Behauptung, Countdown, roter Stempel; Uhr, der Zeiger dreht eine Extra-Runde, „+1 Std.“; zwei Bögen: Münze dreht sich („bezahlt“) oder Liegestuhl klappt auf („Freizeit“) | MYTHOS – bezahlt oder Freizeit |
| 7 | Behauptung, Countdown, roter Stempel; Formular „Steuererklärung“, Häkchen bei „Lohnsteuer“, „Fahrten“ (Bus) und „Arbeitskleidung“ (Jacke); Formular fliegt zum Finanzamt, Geldscheine fliegen zurück ins Portemonnaie | MYTHOS – manchmal gibt es Geld zurück |
| 8 | Die sechs Behauptungen als kleine Karten mit ihrem Stempel reihen sich auf, der Zähler läuft mit | 5 × Mythos · 1 × Stimmt |

Abspann: „Die meisten Gerüchte sind falsch.“ und „Beim Geld in der Ausbildung gibt es viele Gerüchte.“ (Kernbotschaft).

## Layout „Mythos oder Wahrheit“ (auch für Kurs 13–15)

Wiedererkennbares Motion-Graphics-Layout; Stil und Helfer liegen in `film.vorlage.html` (Abschnitt „Mythos-Format“)
und können für Kurs 13–15 übernommen werden.

1. **Behauptung:** Die Szene beginnt auf einer großen, dunkel-violetten Quiz-Bühne (1680 × 880, Verlauf b500 → b700).
   Die weiße Behauptungskarte fliegt auf einem Bogen herein (Chip „Behauptung“ mit Anführungszeichen, Text 60 px,
   Wörter steigen aus der Maske im Takt der Stimme).
2. **Denkpause:** `(Pause 3)` im Sprechertext. Unter der Karte der Countdown-Ring (weißer Bogen läuft leer, Ziffer
   3 – 2 – 1 ploppt je Sekunde, Klick), links und rechts davon die Pillen „Mythos?“ (rot) und „Stimmt?“ (grün),
   die im Wechsel pulsieren.
3. **Urteil:** Auf „Mythos!“ / „Stimmt!“ fällt der Stempel, schlägt auf die Karte (Stauchung), der Abdruck
   („MYTHOS“ rot / „STIMMT“ grün, −3°) erscheint mit Tinten-Welle, Karte wackelt, Kamera-Akzent; die richtige Pille
   hüpft, die andere und der Ring verschwinden.
4. **Erklärung:** Die Bühne wird hell und schrumpft nach rechts (900 × 720, wie in den Erklärvideos), die Karte
   wandert verkleinert nach links oben, darunter steigt der Text im Bild aus der Maske (erstes Wort in Stempelfarbe).
   Rechts spielen die Gegenstände die Erklärung – jede Bewegung an einem Wort aus `sprache.json`.
5. **Schwenk** zur nächsten Behauptung (Bewegungsunschärfe, Zoom-Atmer); die Bühne wird wieder groß und dunkel.
6. **Schluss:** Alle Behauptungen als Mini-Karten mit Stempel in einer Reihe, Zähler; Abspann mit der Kernbotschaft.

## Abweichungen vom Briefing

- Szene 8: Verweis auf den Kurs „Brutto, Netto & deine Gehaltsabrechnung“ gestrichen (siehe `../korrekturen.md`);
  Sprechertext nur noch „Wie viele hattest du richtig?“, Text im Bild statt „Mehr: Kurs …“ die Auflösung
  „5 × Mythos · 1 × Stimmt“, danach Abspann mit der Kernbotschaft.
- Szene 4: keine Figur (Kurs 12 hat keine Figuren) – der Münzstapel „Du“ kommt aus einem Gehaltszettel.
- Szene 3: Der Kalender ist ein Beispielmonat ohne Monatsnamen (der 1. ist ein Freitag, der 30./31. Wochenende).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Geld in der Ausbildung. Du hast viel gehört. Aber was stimmt wirklich? Lass uns testen!

### Szene 2
Erzähler: „Azubis zahlen in Deutschland hohe Steuern.“
(Pause 3)
Erzähler: Mythos! Bei vielen Azubis ist die Lohnsteuer null oder sehr klein. Der Abzug vom Gehalt ist vor allem für deine Versicherungen.

### Szene 3
Erzähler: „Mein Gehalt kommt immer am Ersten des Monats.“
(Pause 3)
Erzähler: Mythos! Dein Betrieb muss spätestens am letzten Arbeitstag des Monats zahlen. Wann genau, steht in deinem Vertrag.

### Szene 4
Erzähler: „Mein Betrieb zahlt auch in meine Versicherungen ein.“
(Pause 3)
Erzähler: Stimmt! Dein Betrieb zahlt ungefähr noch einmal so viel in die Sozialversicherung wie du.

### Szene 5
Erzähler: „Meine Ausbildungsvergütung bleibt die ganze Ausbildung gleich.“
(Pause 3)
Erzähler: Mythos! Die Vergütung muss jedes Ausbildungsjahr steigen.

### Szene 6
Erzähler: „Überstunden gehören zur Ausbildung, dafür gibt's kein Extra.“
(Pause 3)
Erzähler: Mythos! Überstunden müssen bezahlt oder mit Freizeit ausgeglichen werden.

### Szene 7
Erzähler: „Eine Steuererklärung lohnt sich für Azubis nie.“
(Pause 3)
Erzähler: Mythos! Wenn du Lohnsteuer bezahlt oder Kosten für Arbeit hattest, zum Beispiel für Fahrten oder Arbeitskleidung, bekommst du vielleicht Geld zurück.

### Szene 8
Erzähler: Wie viele hattest du richtig?
