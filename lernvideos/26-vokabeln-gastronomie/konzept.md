# Lernvideo 26 – Fachvokabeln: Gastronomie

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 26
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Fachvokabeln – Erzählerin, Priya und Küchenchef (Porträts), animierte Szenen
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Wer die wichtigsten Wörter in Küche und Service kennt, arbeitet schneller und sicherer.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/26-vokabeln-gastronomie` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Küche: Priya im Porträt hüpft herein und nickt, Topf dampft, Teller und Schneidebrett kommen dazu; links unter dem Titel die Farb-Legende der · die · das | Fachvokabeln: Gastronomie |
| 2 | Bon-Drucker: das Papier läuft heraus, „2× Schnitzel“ und „1× Salat“ drucken sich im Takt, der Bon reißt ab und fliegt an die Bonschiene | der Bon – die Bons |
| 3 | Brett, Messer schneidet (Schnitte im Takt), fünf kleine Schalen ploppen nacheinander in eine ordentliche Reihe, Haken auf „fertig“ | die Mise en place – alles vorbereitet |
| 4 | Pass (Wärmebrücke mit Lampen): Küche schiebt zwei Teller von links auf den Pass, Glocke, Service zieht sie nach rechts auf ein Tablett, das Tablett fährt weg | der Pass – die Pässe |
| 5 | Topf mit Soße dampft, der Löffel taucht ein und fliegt im Bogen zu Priya, sie probiert und lächelt; Salzstreuer schüttelt | abschmecken |
| 6 | Speisekarte mit Buchstaben-Markierungen, Lupe fährt die Zeilen ab; Nuss- und Milch-Symbol ploppen auf, die Nuss wird markiert | das Allergen – die Allergene |
| 7 | Priya trägt den heißen Topf hinter dem Küchenchef vorbei, der Küchenchef macht einen Schritt nach vorn; Warnzeichen „heiß“ | „Hinter dir!“ |
| 8 | Tisch wird eingedeckt: Teller landet, Messer und Gabel fliegen dazu, Glas ploppt; Tischschild „5“, zweites Gedeck | das Gedeck – die Gedecke |
| 9 | Tisch mit drei Gedecken, Priya mit Kartenterminal; „zusammen“: ein Beleg verbindet alle drei; „getrennt“: der Beleg teilt sich in drei | „Zusammen oder getrennt?“ |
| 10 | Küche, Küchenchef links, Priya rechts; in der Mitte wechseln die Bilder schnell (Schalen, Bon, Löffel, Nuss, Topf, Pass); jedes gelernte Wort ploppt als Wort-Chip auf und blinkt, wenn es gesagt wird | die jeweiligen Wörter |

Abspann: „Schneller und sicherer.“ und die Kernbotschaft.

## Layout „Fachvokabeln“ (auch für Kurs 27–30)

Stil und Helfer liegen in `film.vorlage.html` (Abschnitt „Format Fachvokabeln“) und können übernommen werden.

1. **Intro:** Titel links (Wörter aus der Maske), darunter die Farb-Legende; rechts die Bühne des Berufs mit der Azubi-Figur.
2. **Je Wort eine Szene**, Schwenk mit Unschärfe dazwischen. Links oben die **Wortkarte** (weiß, 640 × 340, oben ein
   Farbband in der Artikelfarbe): Kopfzeile mit Artikel-Chip und Fortschrittspunkten (ein Punkt je Wort, der aktuelle
   wächst zum Strich in der Artikelfarbe) → Wort (groß, steigt aus der Maske) → Zeile „PLURAL“ + Pluralform bzw.
   „BEDEUTUNG“ + Erklärung. Jedes Teil erscheint auf das gesprochene Wort. Darunter die **Satzleiste** (640 breit):
   Porträt des Sprechers (Mund nur in seinem Satz) und der Beispielsatz, der sich Buchstabe für Buchstabe im Takt der
   Wortzeiten aus `sprache.json` tippt; das Lernwort darin fett in der Artikelfarbe. Ist das Lernwort selbst ein Ruf
   oder eine Frage, entfällt die Satzleiste und die Karte steht mittig. Rechts die Bühne (900 × 720): der Gegenstand
   tut, was das Wort bedeutet – jede Bewegung an einem Wort, Kamera-Akzent auf dem Lernwort.
   Helfer: `wortkarte(i, {art, chip, wort, zeile, nr, gr, mitte})` mit `.ein/.chip/.wort/.zeile`, `satzleiste(i, satzNr, art, lernwoerter)`.
3. **Artikel-Farben** (nur Token-Farben, konsequent auf Chip, Farbband, Fortschritt, Lernwort im Satz und Wort-Chips):
   **der = b500 (violett) · die = success (grün) · das = warning (gelb)**; Verb, Ruf und Frage neutral (b100/b600).
   Der Plural-Artikel („die“) bleibt neutral, er zeigt kein Genus.
4. **Schlussdialog:** große Bühne (1680 × 880), die beiden Figuren links und rechts (Mund und Rahmen nur in den eigenen
   Sätzen, Sprecher exakt aus `sprache.json`, der Zuhörer nickt). Im Bildfenster dazwischen wechseln die Bilder schnell;
   jedes Lernwort ploppt beim Sprechen als Wort-Chip in seiner Artikelfarbe darunter auf, blinkt (Lichtring) und reiht
   sich dann unten in die Wortleiste ein.
5. **Abspann** mit der Kernbotschaft.

## Abweichungen vom Briefing

- Die Beispielsätze in Anführungszeichen sprechen die Figuren selbst (Küchenchef: Bon, Mise en place, abschmecken;
  Priya: Pass, Allergene, „Hinter dir!“, Gedecke, „Zusammen oder getrennt?“) statt der Erzählerin – Wortlaut unverändert.
- Keine Kellnerin und keine Gäste als Figuren (nur Priya und Küchenchef): Szene 4 zeigt den Service als Tablett, das die
  Teller abholt; in Szene 9 fragt Priya, die drei Gäste zeigen sich als drei Gedecke. In Szene 7 ist der Küchenchef der Kollege.
- Szene 1: Priya „winkt“ als Hüpfer mit Nicken und Lächeln (Porträt im Kreis, keine Hand-Geste).
- Im Schlussdialog kommen Gedeck und „Zusammen oder getrennt?“ nicht vor (Dialog wörtlich aus dem Briefing);
  die Wortleiste zeigt nur die gesprochenen Wörter.
- Das Glas im Gedeck ist ein Wasserglas (kein Alkohol).
- Szene 10: Das „…“ nach „Hinter dir!“ ist eine kurze Pause in der Aufnahme.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Priya: Mac2FKpSgaGIsaNRXt8A
@stimme Küchenchef: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzählerin: Du machst eine Ausbildung in der Gastronomie? Dann lern mit Priya die wichtigsten Wörter aus Küche und Service.

### Szene 2
(Pause 0.8)
Erzählerin: Der Bon. Die Bons.
Küchenchef: Neuer Bon: zweimal Schnitzel, einmal Salat!

### Szene 3
(Pause 0.8)
Erzählerin: Die Mise en place. Das heißt: alles vorbereiten, bevor die Gäste kommen.
Küchenchef: Ist deine Mise en place fertig?

### Szene 4
(Pause 0.8)
Erzählerin: Der Pass. Hier stellt die Küche die fertigen Teller hin, der Service holt sie ab.
Priya: Zwei Teller auf den Pass!

### Szene 5
(Pause 0.8)
Erzählerin: Abschmecken.
Küchenchef: Schmeck die Soße bitte nochmal ab.

### Szene 6
(Pause 0.8)
Erzählerin: Das Allergen. Die Allergene.
Priya: Der Gast fragt: Sind in dem Gericht Allergene, zum Beispiel Nüsse?

### Szene 7
(Pause 0.8)
Priya: Hinter dir!
Erzählerin: Das rufst du, wenn du hinter jemandem vorbeigehst. Mit heißen Töpfen ist das sehr wichtig.

### Szene 8
(Pause 0.8)
Erzählerin: Das Gedeck. Die Gedecke. Also Teller, Besteck und Glas für einen Gast.
Priya: Tisch fünf braucht noch zwei Gedecke.

### Szene 9
(Pause 0.8)
Priya: Zusammen oder getrennt?
Erzählerin: Das fragst du beim Bezahlen. Zahlt einer für alle, oder jeder für sich?

### Szene 10
(Pause 0.8)
Küchenchef: Priya, ist deine Mise en place fertig?
Priya: Ja, Chef!
Küchenchef: Gut. Neuer Bon: zweimal Risotto. Schmeck es bitte ab, und denk an die Allergene, der Gast verträgt keine Nüsse.
Priya: Verstanden. Hinter dir!
(Pause 0.6)
Priya: Zwei Risotto auf dem Pass!
