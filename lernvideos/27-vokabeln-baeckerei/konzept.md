# Lernvideo 27 – Fachvokabeln: Bäckerei

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 27
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Fachvokabeln – Erzähler, Yusuf (Azubi, Bäcker) und die Bäckermeisterin (Porträts im Kreis, Mund nur in den eigenen Sätzen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** In der Backstube hat jeder Schritt einen eigenen Namen. Wer ihn kennt, versteht die Anweisungen sofort.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/27-vokabeln-baeckerei` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Nacht: dunkle Straße, Mond, Laterne, die Bäckerei mit Schild „Bäckerei“; die Uhr an der Fassade springt auf drei Uhr; bei „Ofen“ geht das Licht im Fenster an (Lichtkegel auf die Straße), Wärme steigt aus dem Kamin; Yusuf (Porträt mit Bäckermütze) springt ins Fenster, lächelt und nickt; bei „Wörter“ fliegen die Artikel der · die · das aus dem Fenster auf die Straße | – (siehe Abweichungen) |
| 2 | Backstube baut sich auf: Ofen fällt herein, Arbeitstisch gleitet herein, Mehlsäcke plumpsen; bei „Backstuben“ hüpft alles; bei „gebacken“ glimmt die Glut, ein Brot springt aus dem Ofen auf den Tisch (Mehl stäubt); bei „drei“ dreht die Wanduhr auf drei | die Backstube – die Backstuben |
| 3 | Knetmaschine: der Teig plumpst in die Schüssel, der Knethaken dreht sich, der Teig walkt; bei „Teige“ ploppen drei Teigkugeln, bei „Brötchen“ werden daraus Brötchen; bei „fertig“ stoppt die Maschine, grüner Haken | der Teig – die Teige |
| 4 | Bemehlter Tisch von oben: Yusufs Hände (Markenfarben) drücken den Teig im Takt nach vorn, er wird lang und faltet sich zurück, Mehl stäubt; bei „fünf Minuten“ Zeitschaltuhr „5 Min.“, ihr Ring läuft | kneten |
| 5 | Drei Teiglinge auf dem Brett; bei „Zeit … größer“ läuft die Uhr im Zeitraffer, die Teiglinge wachsen; bei „die Gare“ füllt sich der Ring um die Uhr grün; bei „zwanzig Minuten“ Chip „20 Min.“, Uhr und Teiglinge laufen weiter | gehen lassen · die Gare |
| 6 | Glas mit Sauerteig, Blasen steigen und platzen; bei „Brot“ kommt ein Brot, Chips „sauer“ und „länger frisch“; beim Beispielsatz hebt das Tuch ab, die Mehlschaufel kippt, Mehl rieselt, der Sauerteig steigt und blubbert stärker | der Sauerteig |
| 7 | Blechwagen rollt herein, ein Blech schiebt sich ein; bei „Bleche“ zwei weitere; bei „Croissants“ landen drei Croissants auf Bögen auf dem oberen Blech | das Blech – die Bleche |
| 8 | Ofen, die Tür klappt auf, Glut; der Brotschieber gleitet mit zwei Laiben heran und schiebt sie bei „schieben“ ins Ofenloch; bei „ein“ klappt die Tür zu, die Glut leuchtet im Türfenster, Wärme steigt | einschießen |
| 9 | Brot auf dem Brett, die Kruste leuchtet; bei „Krusten“ zwei kleine Brote; bei „harte“ sägt ein Brotmesser, eine Scheibe dreht sich nach vorn: helle Krume, braune Kruste als Rand, der Rand leuchtet, Zeiger „Kruste“; bei „knusprig“ knackt die Scheibe, Krümel springen | die Kruste – die Krusten |
| 10 | Backstube: Bäckermeisterin (links) und Yusuf (rechts) als Porträts, Mund und Rahmen nur in den eigenen Sätzen (Sprecher aus `sprache.json`), der Zuhörer nickt; in der Mitte wechseln die Bilder (Teig, Teiglinge, Uhr, Blech mit Brötchen, Ofen, Brot); jedes Lernwort ploppt beim Sprechen als Chip in seiner Artikelfarbe auf, blinkt zweimal und reiht sich unten in die Wortleiste ein; am Ende Theke voller Brot, Sonnenaufgang, beide lächeln | die jeweiligen Wörter |

Abspann: „Jeder Schritt hat einen Namen.“ und „Wer ihn kennt, versteht die Anweisungen sofort.“

## Layout „Fachvokabeln“ (wie Lernvideo 26, `../26-vokabeln-gastronomie/konzept.md`)

- Links oben die Fortschrittspunkte (ein Punkt je Wort, das aktuelle wird zum Strich in der Artikelfarbe).
- Darunter die **Wortkarte** (weiß, 640 px, Farbband oben): Artikel-Chip → Wort (steigt aus der Maske) → Plural-Zeile
  („Plural“ + Pluralform), bei „gehen lassen“ „auch: die Gare“, bei Sauerteig und einschießen die gesprochene Erklärung.
- Darunter die **Satzleiste** („Beispiel“): der Beispielsatz tippt sich Zeichen für Zeichen im Takt der Wortzeiten aus
  `sprache.json`, das Lernwort in der Artikelfarbe. Den Satz spricht der Erzähler, darum kein Porträt in der Leiste.
- Rechts die Bühne (900 × 720): der Gegenstand tut, was das Wort bedeutet.
- **Artikelfarben** wie Lernvideo 26: der = b500 (violett) · die = success (grün) · das = warning (gelb) · Verben neutral (b100/b600).

## Abweichungen vom Briefing

- Sprechpausen (`(Pause …)`): vor jedem neuen Wort, zwischen Einzahl und Mehrzahl und vor dem Beispielsatz, damit man
  mitsprechen kann und das Bild Zeit hat (Text unverändert).
- Szene 1: Der „Text im Bild“ „Fachvokabeln: Bäckerei“ ist der Kurstitel und entfällt (Videos neutral, kein Titel – die
  App-Seite trägt ihn). Das Schild an der Bäckerei trägt „Bäckerei“.
- Die Uhrzeit „drei Uhr“ bleibt (keine Azubis unter 18, siehe `../korrekturen.md`).
- Szene 4: Die Hände beim Kneten sind Yusufs Hände in Markenfarben (wie die Hand in Lernvideo 6), keine weiteren Menschen.
- Szene 7: Croissants als einfache Gebäckform (Stil C); das Blech steht in einem Blechwagen.
- Szene 6 und 8: Wortkarte mit der gesprochenen Erklärung („macht Brot sauer und länger frisch“, „= das Brot in den Ofen schieben“);
  Szene 6 zusätzlich die Chips „sauer“ und „länger frisch“ – gesprochener Text, kein neuer Inhalt.
- Szene 10: Die Wortleiste zeigt die acht im Dialog gesprochenen Lernwörter (Backstube kommt im Dialog nicht vor).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Yusuf: hfqsl1OMbiWsgPpht3el
@stimme Bäckermeisterin: PcHppp9ymY0Wa5ee6hOQ

### Szene 1
Erzähler: Drei Uhr morgens, der Ofen ist schon heiß. Willkommen in der Backstube! Heute lernst du mit Yusuf die wichtigsten Wörter.

### Szene 2
(Pause 1)
Erzähler: Die Backstube.
(Pause 0.6)
Erzähler: Die Backstuben. So heißt der Raum, in dem gebacken wird.
(Pause 1)
Erzähler: „Wir treffen uns um drei in der Backstube.“

### Szene 3
(Pause 1)
Erzähler: Der Teig.
(Pause 0.6)
Erzähler: Die Teige.
(Pause 1)
Erzähler: „Der Teig für die Brötchen ist fertig.“

### Szene 4
(Pause 1)
Erzähler: Kneten.
(Pause 1)
Erzähler: „Knete den Teig noch fünf Minuten.“

### Szene 5
(Pause 1)
Erzähler: Gehen lassen.
(Pause 0.6)
Erzähler: Der Teig braucht Zeit und wird größer. Diese Zeit heißt auch „die Gare“.
(Pause 1)
Erzähler: „Lass die Brötchen noch zwanzig Minuten gehen.“

### Szene 6
(Pause 1)
Erzähler: Der Sauerteig.
(Pause 0.6)
Erzähler: Mit ihm wird Brot sauer und länger frisch.
(Pause 1)
Erzähler: „Hast du den Sauerteig gefüttert?“

### Szene 7
(Pause 1)
Erzähler: Das Blech.
(Pause 0.6)
Erzähler: Die Bleche.
(Pause 1)
Erzähler: „Leg die Croissants aufs Blech.“

### Szene 8
(Pause 1)
Erzähler: Einschießen.
(Pause 0.6)
Erzähler: Das heißt: das Brot in den Ofen schieben.
(Pause 1)
Erzähler: „Wir schießen jetzt die Brote ein.“

### Szene 9
(Pause 1)
Erzähler: Die Kruste.
(Pause 0.6)
Erzähler: Die Krusten. Die harte, braune Außenseite vom Brot.
(Pause 1)
Erzähler: „Die Kruste muss schön knusprig sein.“

### Szene 10
(Pause 1.5)
Bäckermeisterin: Yusuf, ist der Teig fertig geknetet?
Yusuf: Ja! Er muss jetzt gehen.
Bäckermeisterin: Gut. Wenn die Gare passt, leg die Brötchen aufs Blech. Und dann schießen wir die Sauerteigbrote ein.
Yusuf: Mit schöner Kruste!
