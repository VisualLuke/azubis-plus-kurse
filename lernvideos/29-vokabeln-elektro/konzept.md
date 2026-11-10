# Lernvideo 29 – Fachvokabeln: Handwerk & Elektro

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 29
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Fachvokabeln – Erzählerin, Kwame (Azubi Elektroniker) und der Geselle (Porträts im Kreis, Mund nur in den eigenen Sätzen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Auf der Baustelle musst du Werkzeuge und Sicherheitsbegriffe sofort verstehen, vor allem beim Strom.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/29-vokabeln-elektro` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Rohbau (Mauerwerk, Boden, Kran, Absperrgitter): die Uhr springt auf 7, Kwame (Porträt mit weißem Helm) kommt herein und nickt, die Werkzeugtasche landet neben ihm, bei „Elektroniker“ geht die Glühbirne an; unten die Farb-Legende der · die · das | – (siehe Abweichungen) |
| 2 | Wortkarte „die Baustelle · die Baustellen“; Absperrgitter gleiten herein, der Kran schwenkt seinen Haken, das Schild „Baustelle“ klappt auf; bei „Baustellen“ ploppen zwei kleine Baustellen dahinter auf; beim Beispielsatz fährt ein Transporter nach rechts los | die Baustelle – die Baustellen |
| 3 | Wortkarte „der Zollstock · die Zollstöcke“; der gelbe Zollstock klappt Glied für Glied aus, bei „misst“ läuft die Länge mit, beim Beispielsatz fliegt er im Bogen zum Gesellen | der Zollstock – die Zollstöcke |
| 4 | Wortkarte „die Wasserwaage · die Wasserwaagen“; Steckdose an der Wand, leicht schief; die Wasserwaage legt sich auf den Rahmen, die Luftblase steht außen; die Dose dreht sich gerade und die Blase wandert in die Mitte, grüner Haken | die Wasserwaage – die Wasserwaagen |
| 5 | Wortkarte „der Akkuschrauber · die Akkuschrauber“; der Akkuschrauber dreht eine Schraube ins Brett (Bit dreht, Schraube sinkt ein); bei „Akku“ leuchtet die Ladeanzeige Balken für Balken auf | der Akkuschrauber – die Akkuschrauber |
| 6 | Wortkarte „die Schutzbrille · die Schutzbrillen“; Kwame im Porträt, die Schutzbrille fliegt herein und setzt sich auf; die Bohrmaschine bohrt in die Wand, Staub fliegt, prallt an der Brille ab | die Schutzbrille – die Schutzbrillen |
| 7 | Wortkarte „die Leitung · die Leitungen“; offene Wand mit Schlitzen, die Leitungen legen sich hinein und zeichnen sich bis zu Dose und Schalter, bei „Strom“ laufen Stromimpulse durch; die Lampe geht an | die Leitung – die Leitungen |
| 8 | Wortkarte „der Sicherungskasten“; die Tür des Kastens schwingt auf, die Reihen der Sicherungen ploppen nacheinander auf, Beschriftungen der Stromkreise; beim Beispielsatz ein Etikett „Keller“ | der Sicherungskasten |
| 9 | Karte „freischalten · spannungsfrei prüfen“, darunter drei Kacheln (Hebel aus · Schloss · Prüfer), die nacheinander grün werden; großer Sicherungsautomat, Leitung mit Stromimpulsen zur offenen Abzweigdose: der Hebel geht auf AUS, die Sperre mit Schloss setzt sich darauf, das Warnschild „Nicht einschalten!“ hängt daran; der zweipolige Spannungsprüfer tippt an die Adern in der Dose und zeigt „0 V“, grüner Haken; bei „Nie ohne Prüfung“ Warnplakette | freischalten · spannungsfrei prüfen |
| 9b | Links „5 Regeln:“, fünf nummerierte Zeilen ploppen im Takt auf, die ersten drei (freischalten, sichern, prüfen) werden grün und bekommen einen Rahmen; rechts erscheinen dazu die Symbole Hebel aus · Schloss · Prüfer; dann Kwame (Etikett „Azubi“) und der Geselle (Etikett „Fachkraft“) nebeneinander, grüner Haken | 5 Regeln: freischalten · sichern · prüfen · erden · abdecken |
| 10 | Dialog im Rohbau: Geselle links, Kwame rechts (Mund und Rahmen nur in den eigenen Sätzen, der Zuhörer nickt); in der Mitte wechseln die Bilder schnell (Leitung im Flur, Sicherung aus mit Sperre, Prüfer „0 V“, Schutzbrille, Akkuschrauber, Zollstock an der Dose, Wasserwaage); jedes Wort ploppt als Chip in seiner Artikelfarbe auf, blinkt und reiht sich unten ein | die jeweiligen Wörter |

Abspann: „Verstehen. Sicher arbeiten.“ und die Kernbotschaft.

## Layout

Übernommen aus Lernvideo 26 (Layout „Fachvokabeln“, Abschnitt in `../26-vokabeln-gastronomie/konzept.md`): Wortkarte links
(Artikel-Chip, Fortschrittspunkte, Wort aus der Maske, Plural-Zeile), darunter die Satzleiste mit Porträt des Sprechers und
dem Beispielsatz, der sich im Takt der Stimme tippt; rechts die Bühne. Artikel-Farben **der = b500 · die = success ·
das = warning**, neutral (Verb, Sicherheit) b100/b600. Bühne hier ein Rohbau (Mauerwerk, Estrichboden) statt der Küche.

## Abweichungen vom Briefing

- Szene 1: Der „Text im Bild“ „Fachvokabeln: Handwerk & Elektro“ ist der Kurstitel und entfällt (Videos neutral, die
  App-Seite trägt den Titel). Stattdessen links die Farb-Legende der · die · das und eine Uhr, die auf 7 springt.
- Szene 9–10 nach `../korrekturen.md`: Szene 9 endet mit „Freischalten, sichern, prüfen – das sind die ersten drei der
  fünf Sicherheitsregeln. Als Azubi machst du das nur mit einer Fachkraft.“ und zeigt „5 Regeln: freischalten · sichern ·
  prüfen · erden · abdecken“. Im Dialog (Szene 10) arbeitet Kwame mit dem Gesellen als Fachkraft.
- Die Beispielsätze in Anführungszeichen sprechen die Figuren selbst (Geselle: Baustelle, Zollstock, Wasserwaage,
  Schutzbrille, Sicherungskasten; Kwame: Akkuschrauber, Leitung) statt der Erzählerin – Wortlaut unverändert.
- Sprechpause zwischen Einzahl und Mehrzahl (`(Pause …)`), damit man mitsprechen kann (Text unverändert).
- Szene 6: Kwame „setzt die Schutzbrille auf“ als Ebene, die sich im Porträt auf die Augen legt (Porträt im Kreis, keine Hände).
- Szene 8: Das Briefing nennt für „der Sicherungskasten“ keinen Plural – die Karte zeigt nur das Wort.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Kwame: hfqsl1OMbiWsgPpht3el
@stimme Geselle: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzählerin: Baustelle, 7 Uhr. Kwame ist Azubi zum Elektroniker. Hier sind die Wörter, die er jeden Tag hört.

### Szene 2
(Pause 0.8)
Erzählerin: Die Baustelle.
(Pause 0.5)
Erzählerin: Die Baustellen.
Geselle: Morgen fahren wir auf eine neue Baustelle.

### Szene 3
(Pause 0.8)
Erzählerin: Der Zollstock.
(Pause 0.5)
Erzählerin: Die Zollstöcke. Damit misst du Längen.
Geselle: Gib mir mal den Zollstock.

### Szene 4
(Pause 0.8)
Erzählerin: Die Wasserwaage.
(Pause 0.5)
Erzählerin: Die Wasserwaagen. Damit prüfst du, ob etwas gerade ist.
Geselle: Ist die Steckdose gerade? Nimm die Wasserwaage.

### Szene 5
(Pause 0.8)
Erzählerin: Der Akkuschrauber.
(Pause 0.5)
Erzählerin: Die Akkuschrauber.
Kwame: Ist der Akku vom Akkuschrauber geladen?

### Szene 6
(Pause 0.8)
Erzählerin: Die Schutzbrille.
(Pause 0.5)
Erzählerin: Die Schutzbrillen.
Geselle: Beim Bohren immer die Schutzbrille aufsetzen!

### Szene 7
(Pause 0.8)
Erzählerin: Die Leitung.
(Pause 0.5)
Erzählerin: Die Leitungen. Durch sie fließt der Strom.
Kwame: Die Leitung läuft hier in der Wand.

### Szene 8
(Pause 0.8)
Erzählerin: Der Sicherungskasten. Hier sind die Sicherungen für alle Stromkreise.
Geselle: Die Sicherung ist im Sicherungskasten im Keller.

### Szene 9
(Pause 0.8)
Erzählerin: Freischalten und spannungsfrei. Bevor du an einer Leitung arbeitest, wird der Strom abgeschaltet und gesichert, damit ihn keiner wieder einschaltet. Dann wird geprüft: Ist die Leitung wirklich spannungsfrei? Nie ohne Prüfung arbeiten!
(Pause 0.6)
Erzählerin: Freischalten, sichern, prüfen – das sind die ersten drei der fünf Sicherheitsregeln. Als Azubi machst du das nur mit einer Fachkraft.

### Szene 10
(Pause 0.8)
Geselle: Kwame, wir arbeiten heute an der Leitung im Flur. Was machst du zuerst?
Kwame: Freischalten im Sicherungskasten, sichern und prüfen, ob alles spannungsfrei ist.
Geselle: Sehr gut. Dann Schutzbrille auf, und gib mir den Akkuschrauber. Und miss mit dem Zollstock, wo die Dose hinkommt.
Kwame: Und danach mit der Wasserwaage prüfen!
