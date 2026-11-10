# Lernvideo 28 – Fachvokabeln: Pflege

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 28
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Fachvokabeln – Erzähler, Mai (Azubi, Pflegefachfrau) und die Praxisanleiterin (Porträts im Kreis, Mund nur in den eigenen Sätzen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** In der Pflege müssen die Wörter sitzen, denn es geht um Menschen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/28-vokabeln-pflege` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Flur im Pflegeheim am Morgen (breite Bühne): Sonne geht im Fenster auf, zwei Türen und Handlauf bauen sich auf; Mai (Porträt) springt herein und lächelt, Chip „Pflegefachfrau“; bei „Wörter“ die Farb-Legende der · die · das | – (siehe Abweichungen) |
| 2 | Wortkarte „die Übergabe · die Übergaben“; Dienstzimmer: Uhr springt auf sechs, Klemmbrett wandert von der Nachtschicht (Mond) zur Frühschicht (Sonne), Notizzeilen schreiben sich | die Übergabe – die Übergaben |
| 3 | Wortkarte „der Bewohner – die Bewohner · die Bewohnerin – die Bewohnerinnen“; Tür mit Türschild „12“ öffnet sich, Licht fällt in den Flur, ein Namensschild „neu“ ploppt an die Tür | der Bewohner – die Bewohner · die Bewohnerin – die Bewohnerinnen |
| 4 | Wortkarte „das Vitalzeichen · die Vitalzeichen“; drei Kacheln: Blutdruckgerät (Anzeige zählt), Herz schlägt mit Pulslinie, Thermometer steigt | das Vitalzeichen – die Vitalzeichen |
| 5 | Wortkarte „der Blutdruck“; Blutdruckgerät mit Manschette: Pumpball drückt, Manschette füllt sich, der Zeiger läuft in den oberen Bereich, Hinweis „etwas hoch“ | der Blutdruck |
| 6 | Wortkarte „die Grundpflege“; vier Symbole ploppen im Takt der Stimme: Waschlappen (wischt), Kleidung (auf dem Bügel), Zahnbürste (putzt), Löffel (schöpft) | die Grundpflege |
| 7 | Wortkarte „lagern“ (Verb); Pflegebett von der Seite: das Kissen wird im Bogen neu gelegt, die Decke hebt sich zur Seite, Uhr mit Zwei-Stunden-Bogen läuft | lagern |
| 8 | Wortkarte „klingeln · die Klingel“; Flur mit Zimmertür „7“, Klingelknopf wird gedrückt, das rote Licht über der Tür leuchtet und pulsiert | klingeln – die Klingel |
| 9 | Wortkarte „die Dokumentation“; Tablet mit Pflegesoftware, der Eintrag „Blutdruck“ tippt sich, Speichern, grüner Haken | die Dokumentation |
| 10 | Dialog: Praxisanleiterin (links) und Mai (rechts) als Porträts, Mund und Rahmen nur in den eigenen Sätzen (Sprecher aus `sprache.json`); in der Mitte wechseln die Bilder schnell (Klemmbrett, Blutdruckgerät, Waschlappen, Bett, Tablet, Klingel); jedes Lernwort ploppt beim Sprechen als Wort-Chip in seiner Artikelfarbe auf und blinkt, danach reiht es sich unten ein | die jeweiligen Wörter |

Abspann: „Die Wörter müssen sitzen.“ und die Kernbotschaft.

## Layout „Fachvokabeln“

Wie in `../26-vokabeln-gastronomie/konzept.md` beschrieben (Wortkarte links mit Farbband, Artikel-Chip, Wort aus der Maske,
Plural-Zeile; darunter die Satzleiste mit Porträt des Sprechers, der Beispielsatz tippt sich Wort für Wort im Takt der Stimme;
rechts die Bühne mit dem Gegenstand, der etwas tut; links oben die Fortschrittspunkte).
**Artikel-Farben:** der = b500 (violett) · die = success (grün) · das = warning (gelb); Verben neutral (b100/b600).

## Abweichungen vom Briefing

- Korrekturen aus `../korrekturen.md`: Szene 3 „der Bewohner – die Bewohner · die Bewohnerin – die Bewohnerinnen“ (Sprecher und Bild),
  Szene 4 „das Vitalzeichen – die Vitalzeichen“.
- Die Beispielsätze in Anführungszeichen sprechen die Figuren selbst (Praxisanleiterin: Übergabe, Bewohnerin, Vitalzeichen,
  gelagert, Dokumentation; Mai: Blutdruck, Grundpflege, geklingelt) statt des Erzählers – Wortlaut unverändert.
- Szene 1: Der „Text im Bild“ „Fachvokabeln: Pflege“ ist der Kurstitel und entfällt (Videos neutral – die App-Seite trägt ihn).
  Mai ist das Standard-Porträt (keine eigene Pflegekleidung als Figur).
- Pflege würdevoll und ohne zusätzliche Menschen: Bewohnerinnen und Bewohner erscheinen nur über Gegenstände (Türschild, Bett,
  Klingel, Blutdruckgerät). Szene 2 zeigt die Übergabe als Klemmbrett von der Nacht- zur Frühschicht statt eines Teams;
  Szene 3 statt der winkenden Dame die Tür „12“ mit neuem Namensschild (ohne Namen); Szene 7 das Bett mit Kissen statt zweier
  Pflegekräfte; Szene 5 und 9 zeigen Gerät und Tablet ohne Hände.
- Szene 5: Das Gerät zeigt keinen Zahlenwert (keiner im Briefing), sondern einen Zeiger im oberen Bereich und „etwas hoch“.
- Sprechpausen (`(Pause …)`) vor jedem neuen Wort und zwischen Einzahl und Mehrzahl (Text unverändert).
- Szene 10: Die Wort-Chips zeigen die Grundform mit Artikel („das Vitalzeichen“, „lagern“, „klingeln“), auch wenn im Satz
  Mehrzahl oder Partizip fällt; sie blinken auf das gesprochene Wort. Bewohner und Blutdruck kommen im Dialog nicht vor
  (Dialog wörtlich aus dem Briefing).
- Kleine Beschriftungen auf der Bühne nur aus dem Sprechertext („Pflegefachfrau“, „neu“, „etwas hoch“, „keine Druckstellen“,
  „alle 2 Stunden“, Einträge im Tablet).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Mai: Mac2FKpSgaGIsaNRXt8A
@stimme Praxisanleiterin: PcHppp9ymY0Wa5ee6hOQ

### Szene 1
Erzähler: Frühschicht im Pflegeheim. Mai macht ihre Ausbildung als Pflegefachfrau. Hier sind die Wörter, die sie jeden Tag braucht.

### Szene 2
(Pause 0.8)
Erzähler: Die Übergabe.
(Pause 0.4)
Erzähler: Die Übergaben. Am Anfang der Schicht erzählt die vorige Schicht, was passiert ist.
Praxisanleiterin: Um sechs Uhr ist Übergabe.

### Szene 3
(Pause 0.8)
Erzähler: Der Bewohner. Die Bewohner.
(Pause 0.4)
Erzähler: Die Bewohnerin. Die Bewohnerinnen. So heißen die Menschen, die im Pflegeheim leben.
Praxisanleiterin: Frau Schneider ist neue Bewohnerin auf Zimmer zwölf.

### Szene 4
(Pause 0.8)
Erzähler: Das Vitalzeichen.
(Pause 0.4)
Erzähler: Die Vitalzeichen. Das sind zum Beispiel Blutdruck, Puls und Temperatur.
Praxisanleiterin: Bitte miss bei Herrn Weber die Vitalzeichen.

### Szene 5
(Pause 0.8)
Erzähler: Der Blutdruck.
Mai: Der Blutdruck ist heute etwas hoch.

### Szene 6
(Pause 0.8)
Erzähler: Die Grundpflege. Dazu gehören Waschen, Anziehen, Zähneputzen und Hilfe beim Essen.
Mai: Ich mache jetzt die Grundpflege bei Frau Schneider.

### Szene 7
(Pause 0.8)
Erzähler: Lagern. Das heißt: jemanden im Bett in eine neue Position bringen, damit keine Druckstellen entstehen.
Praxisanleiterin: Herr Weber muss alle zwei Stunden gelagert werden.

### Szene 8
(Pause 0.8)
Erzähler: Klingeln. Wenn ein Bewohner Hilfe braucht, drückt er die Klingel.
Mai: Zimmer sieben hat geklingelt.

### Szene 9
(Pause 0.8)
Erzähler: Die Dokumentation. Alles, was du machst, schreibst du auf.
Praxisanleiterin: Hast du den Blutdruck schon in der Dokumentation eingetragen?

### Szene 10
(Pause 1)
Praxisanleiterin: Mai, nach der Übergabe misst du bitte bei Herrn Weber die Vitalzeichen.
Mai: Mache ich. Und danach die Grundpflege bei Frau Schneider?
Praxisanleiterin: Genau. Herr Weber muss auch gelagert werden. Und vergiss die Dokumentation nicht.
Mai: Ah, Zimmer sieben hat geklingelt. Ich gehe schnell hin!
