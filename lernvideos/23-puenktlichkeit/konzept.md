# Lernvideo 23 – Heimat vs. Deutschland: Pünktlichkeit

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 23
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Heimat vs. Deutschland – eine Off-Stimme (Erzähler), geteilte Bühne; Figuren Mai, Kwame, Jonas, Amir (Porträts)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** In Deutschland heißt pünktlich: ein paar Minuten vorher da sein.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/23-puenktlichkeit` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Zwei gleiche Uhren laufen im Gleichtakt; auf „Aber“ zeichnet sich eine weich geschwungene Trennlinie, die Bühne teilt sich (links warm, rechts kühl), die Uhren weichen auseinander: links wird der Ring warm und die Zeiger laufen langsam und weich (Uhr wiegt sich), rechts tickt ein Sekundenzeiger im Takt; Seiten-Chips „In vielen Ländern“ / „In Deutschland“ ploppen auf; Titelplatte steigt auf | Heimat vs. Deutschland: Pünktlichkeit |
| 2 | Linie wandert nach rechts, die rechte Seite wird matt (die genaue Uhr tickt leise weiter). Links: die ruhige Uhr wird bei „flexibel“ weich wie Gelee, zeigt 10:00 und gleitet auf halb elf, während Mai, Kwame und Jonas nacheinander auf Bögen am Café-Tisch ankommen, Tassen ploppen; bei „Wichtiger“ tritt die Uhr blass zurück (niemand schaut hin), alle lachen, Bögen verbinden sie, Tassen stoßen an | In vielen Ländern: Zeit ist flexibel |
| 3 | Linie wandert nach links, die linke Seite wird matt. Rechts: genaue Uhr tickt auf 10:00:00 genau beim ersten „Uhr“; auf „Abmachung“ schlägt das Schild „Treffen 10:00“ auf die Schiebetür, auf „heißt“ fährt die Tür auf – Mai und Kwame sind schon da; Uhr springt auf 10:05 (roter Keil), Jonas kommt an, die beiden schauen zu ihm, Chip „+5 Min.“; Zeitstrahl 9:50–10:05: grüne Zone wächst von 10:00 nach vorn, Mai und Kwame rücken auf 9:55 und 9:50, Haken | In Deutschland: 10 Uhr = 10 Uhr |
| 4 | Beide Seiten gleich groß, der Knauf wird zum „?“; Herz links, genaue Uhr rechts; auf „Respekt“ fliegen beide zur Mitte, die Linie löst sich auf, die Seiten verschmelzen zu einer Fläche; Mai und Jonas kommen dazu, „Ich“ – Mai hüpft, „dich“ – Jonas lächelt, „Zeit“ – Zeiger dreht eine Runde, „ernst“ – beide nicken, Welle | Pünktlich = Respekt |
| 5 | Kleine Uhr in der Mitte, vier Orte ploppen auf ihr Wort (Werkbank, Schule, Praxis, Amt) mit Uhr-Plakette; nur das Amt bleibt und wird groß, Amir hüpft heran, die Tür fällt vor ihm zu; Kalender: ein neuer Termin, die Wochen füllen sich Reihe für Reihe, der Punkt läuft bis zum Termin | Arbeit · Schule · Arzt · Behörde |
| 6 | Amir im Bus, Uhr 10:00 → 10:10 (roter Keil); „Kein Weltuntergang“: Amir lächelt, Keil wird blass; Handy: „Bin 10 Minuten später, sorry!“ tippt sich, ✓✓, Anruf-Knopf klingelt; Antwort „Danke für die Info!“, grüner Haken | Zu spät? Vorher Bescheid geben |
| 7 | Anzeigetafel, die Bahn rollt langsam ein, Anzeige springt auf „+15 Min.“, Amir zuckt lächelnd mit den Schultern; Balken „Fahrt“ + „Puffer“ (wächst auf „mehr Zeit“), die Verspätung „+15“ fällt in den Puffer, grüner Haken am Termin | Tipp: immer etwas Puffer einplanen |

Abspann: „Ein paar Minuten vorher.“ und die Kernbotschaft.

## Layout „Heimat vs. Deutschland“ (auch für Kurs 24–25)

Wiedererkennbares Split-Screen-Layout; Stil und Helfer liegen in `film.vorlage.html` (Abschnitt „Format Heimat vs.
Deutschland“: `geteilt()`, `wandern()`, `kopf()`, Uhr mit `takt()`) und können für Kurs 24–25 übernommen werden.

1. **Geteilte Bühne** 1680 × 880 (Mitte x 960): links warm (warning-bg → b50), rechts kühl (b100 → b50). Dazwischen eine
   weiße, weich geschwungene Linie (zeichnet sich von oben nach unten) mit rundem Knauf (⇄, bei einer Frage „?“).
   Oben die Seiten-Chips **„In vielen Ländern“** (Punkt warm) und **„In Deutschland“** (Punkt violett) – neutral,
   keine Flaggen, keine Länder, keine Wertung (nicht richtig/falsch, sondern anders).
2. **Öffnen:** Die Bühne beginnt als eine Fläche mit einem Motiv doppelt (z. B. zwei gleiche Uhren); auf das
   Kontrastwort zeichnet sich die Linie, die Seiten färben sich, die Motive weichen auseinander und verhalten sich
   gespiegelt anders (ruhig/weich links, präzise/getaktet rechts).
3. **Erzählen:** Die Linie wandert zu der Seite, über die nicht gesprochen wird (erzählte Seite 1160 px breit), die
   andere Seite wird matt und zeigt ihr Motiv klein weiter. Unter dem Chip steigt der Text im Bild als Überschrift
   (64 px) aus der Maske – Chip + Überschrift ergeben den Text im Bild. Dieselben Figuren auf beiden Seiten
   (Porträts), damit keine Herkunft zugeschrieben wird.
4. **Zusammenführen:** Für das Warum/Fazit wandert die Linie zurück in die Mitte, dann fliegen die Motive beider Seiten
   zusammen, die Linie löst sich auf, die Seiten verschmelzen; eine weiße Titelplatte trägt die Kernaussage.
5. **Praxis-Tipps:** danach das bekannte Layout (Text im Bild links, helle Bühne 900 × 720 rechts).

## Abweichungen vom Briefing

- Länge 1:30 statt ca. 2 Min.: der Sprechertext aus dem Briefing ergibt diese Länge (Pausen zwischen den Szenen verlängert).
- Szene 2/3: Die Beschriftung der Seiten ist neutral („In vielen Ländern“ / „In Deutschland“, wie im Briefing-Text);
  dieselben Figuren (Mai, Kwame, Jonas) erscheinen auf beiden Seiten; der, der um 10:05 kommt, ist Jonas.
  „Bekommt Blicke“ ist nur ein kurzer Blick der beiden anderen zu ihm.
- Szene 5–7: Figur Amir (Porträt). Szene 5: der Kalender zeigt die Wartezeit ohne Zahl (keine erfundene Dauer).
- Szene 7: Anzeigetafel mit Platzhalter-Abfahrtszeiten (9:40, 9:55); „+15 Min.“ aus dem Briefing.
- Zahlen im Sprechertext ausgeschrieben („zehn Uhr“, „halb elf“), im Bild Ziffern.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Zeit ist überall gleich lang. Aber nicht überall gleich wichtig. Heute: Pünktlichkeit.

### Szene 2
(Pause 1.4)
Erzähler: In vielen Ländern ist Zeit flexibel. Ein Treffen um zehn Uhr kann auch um halb elf beginnen. Wichtiger ist, dass man sich Zeit füreinander nimmt.

### Szene 3
(Pause 1.4)
Erzähler: In Deutschland ist Zeit meistens eine Abmachung. Zehn Uhr heißt zehn Uhr. Wer fünf Minuten zu spät kommt, ist schon zu spät. Viele kommen sogar fünf bis zehn Minuten früher.

### Szene 4
(Pause 1.4)
Erzähler: Warum ist das so wichtig? Pünktlichkeit bedeutet in Deutschland Respekt. Wer pünktlich ist, zeigt: Ich nehme dich und deine Zeit ernst.

### Szene 5
(Pause 1.6)
Erzähler: Besonders wichtig ist das bei der Arbeit, in der Berufsschule, bei Arztterminen und bei Behörden. Wer bei einem Behördentermin zu spät kommt, muss oft einen neuen machen, und das kann Wochen dauern.

### Szene 6
(Pause 1.4)
Erzähler: Und wenn du doch zu spät bist? Kein Weltuntergang. Aber sag vorher Bescheid, mit einer kurzen Nachricht oder einem Anruf. Das ist viel besser, als einfach später aufzutauchen.

### Szene 7
(Pause 1.4)
Erzähler: Übrigens: Nur die Bahn nimmt es in Deutschland mit der Zeit nicht immer so genau. Plan deshalb lieber etwas mehr Zeit ein.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- um zehn Uhr → um 10 Uhr
- Zehn Uhr heißt zehn Uhr → 10 Uhr heißt 10 Uhr
