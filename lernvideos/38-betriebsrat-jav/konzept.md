# Lernvideo 38 – Podcast: Betriebsrat, JAV & Gewerkschaft

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 38
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Mai (Azubi in der Pflege) und Jonas (Coach) im Gespräch; Porträts links (Jonas) und rechts (Mai),
  in der Mitte die Bühne mit den animierten Einblendungen
- **Setting:** Café nach der Schicht, Mai hat einen Flyer „Wähl deine JAV!“ dabei
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Du musst Probleme im Betrieb nicht allein lösen. Betriebsrat, JAV und Gewerkschaft sind für dich da.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/38-betriebsrat-jav` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Café nach der Schicht: Fenster mit Markise, Wanduhr kurz nach fünf, Tisch, zwei Kaffeetassen mit Dampf, Mai und Jonas (Porträts) am Tisch; bei „Pflegeheim“ steigt bei Mai eine Gedankenblase mit dem Pflegeheim und einem Aushangbrett auf, bei „Zettel“ hängt der Flyer daran und wackelt; bei „Wähl deine JAV!“ fliegt der bunte Flyer aus der Blase auf den Tisch und schlägt auf, die Tassen hüpfen; „Was ist das?“ Fragezeichen; „Gute Frage“ Jonas nickt und lächelt; bei „ausholen“ hebt sich der Flyer zur Kamera | – (Titel entfällt; der Flyer trägt „Wähl deine JAV!“) |
| 2 | Fünf Kolleginnen und Kollegen (Porträts) in einer Reihe; Wahlurne springt auf, Stimmzettel fliegen hinein; drei Gewählte steigen auf, Chip „Betriebsrat“; Verhandlungstisch: links der Betriebsrat, rechts die Geschäftsführung (Chefin); „Arbeitszeiten“, „Dienstpläne“, „Urlaubsplanung“ ploppen als Karten auf den Tisch; Sprechblasen hin und her, Haken | Betriebsrat = gewählte Vertretung |
| 3 | Großer und kleiner Betrieb schieben sich herein, Fragezeichen; „Nein“: Fragezeichen wackelt; fünf Porträts zählen sich ab, Zähler „5“; Stimmzettel fliegen in die Urne, Schild „Betriebsrat“ schwingt an den großen Betrieb; kleine Betriebe mit leerem, gestricheltem Schild | Nicht jeder Betrieb hat einen |
| 4 | Buchstaben J · A · V fallen herein, darunter tippen sich „Jugend-“, „Auszubildenden-“, „vertretung“; die Buchstaben werden zum Schild über dem Raum der JAV, darin junge Leute (Porträts); Mai mit Gewitterwolke („Probleme“) hüpft in den Raum, die Wolke verschwindet, das Schloss fällt an die Wand und rastet ein, der Rand wird durchgehend („vertraulich“); Mais Stimmzettel fliegt in die Urne („mitwählen“); draußen die Chefin mit Fragezeichen, das Schloss wackelt; bei „Genau“ Haken am Schloss, bei „du“ liegt der Schlüssel bei Mai | JAV = Vertretung für Azubis · vertraulich |
| 5 | Fragezeichen; großes Gebäude „Gewerkschaft“ wächst außerhalb des gestrichelten Betriebsrahmens; Verhandlungstisch: links Gewerkschaft, rechts Arbeitgeber (Chefin), Sprechblasen, „Gehalt“ (Münze) und „Arbeitsbedingungen“ (Uhr) ploppen auf; Dokument „Tarifvertrag“ steigt auf, Unterschrift zeichnet sich, Stempel; drei neutrale Text-Chips „Pflege: ver.di“, „Metall: IG Metall“, „Gastronomie: NGG“ | Gewerkschaft → Tarifvertrag |
| 6 | Mitgliedskarte (ohne Logo) fliegt herein, Haken „freiwillig“; Münze fällt und schrumpft bei „kleinen“ und „Azubis“ (Chip „Azubis“ mit Pfeil nach unten); Beratungsgespräch (Mai und Berater als Porträts, Sprechblasen); Paragraphenzeichen mit Schutzschild steigt auf, Welle bei „Gericht“; ein roter Nachteil-Pfeil vom Betrieb prallt am Schild ab, Haken | Freiwillig · kleine Kosten · Beratung |
| 7 | Zurück im Café: Flyer auf dem Tisch, bei „JAV-Wahl“ Haken im Kästchen, bei „frage“ Sprechblase mit Fragezeichen; bei „Sehr gute Idee“ faltet Mai den Flyer und steckt ihn in ihre Tasche, beide lächeln, die Tassen hüpfen | Du bist nicht allein im Betrieb |

Umsetzung: Gesprächsformat wie `lernvideos/33-erste-woche-berufsschule` und `kurse/04-rechte-pflichten` (Porträts links/rechts,
Mund mit dem Pegel der Aufnahme, der Sprecher wird größer und bekommt einen Rand, der Zuhörer nickt). Wer spricht, kommt exakt
aus `sprache.json` (`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer Maske; jede
Animation hängt an einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Du musst Probleme nicht allein lösen.“ und „Betriebsrat, JAV und Gewerkschaft sind für dich da.“

Änderungen am Briefing: Szene 1 – „Text im Bild“ „Betriebsrat, JAV & Gewerkschaft“ ist der Kurstitel und entfällt
(Vorgabe 29.09.2026, kein Kurstitel im Video); die erste Bühne steht in der Bildmitte. Anführungszeichen ‚…‘ als „…“.
Im Sprechertext „ver.di“ als „Verdi“ geschrieben, damit die Stimme es nicht als „ver Punkt di“ liest; im Bild steht „ver.di“.
Ebenso „IG Metall“ als „Ih-Geh-Metall“ und „NGG“ als „N-G-G“, damit buchstabiert wird („IG“ wurde als Wort gelesen, 0,24 s;
„I-G-Metall“ und „I G Metall“ blieben unter 0,5 s); im Bild steht „IG Metall“ / „NGG“.
Gewerkschaften nur als neutrale Text-Chips (keine Logos, keine Farben der Organisationen). Menschen nur als Porträts im Kreis
aus den vorhandenen Figuren (Kolleginnen und Kollegen: Kwame, Priya, Amir, Ana, Yusuf; Geschäftsführung/Arbeitgeber und
Mais Chefin: `figur-chefin`; Berater der Gewerkschaft: `figur-kunde`; junge Leute der JAV: Kwame, Priya, Yusuf; am
Tarif-Verhandlungstisch für die Gewerkschaft: Sabine, Amir). Mitgliedskarte ohne Logo (mit Mais Porträt). Wanduhr im Café
(kurz nach fünf) bebildert „nach der Schicht“.

## Sprechertext

@modell eleven_v4
@stimme Mai: Mac2FKpSgaGIsaNRXt8A
@stimme Jonas: K8bIZwDsGMHreGKTIVHN

### Szene 1
Mai: Jonas, in unserem Pflegeheim hängt dieser Zettel: „Wähl deine JAV!“ Was ist das?
Jonas: Gute Frage. Da muss ich kurz ausholen.

### Szene 2
Jonas: Zuerst der Betriebsrat. Das sind Beschäftigte, die von ihren Kollegen gewählt werden. Sie vertreten alle gegenüber der Geschäftsführung, zum Beispiel bei Arbeitszeiten, Dienstplänen oder Urlaubsplanung. Da reden sie mit.

### Szene 3
Mai: Hat jeder Betrieb einen?
Jonas: Nein. Einen Betriebsrat kann es ab fünf Beschäftigten geben, aber nur, wenn die Beschäftigten ihn wählen. Viele kleine Betriebe haben keinen.

### Szene 4
Jonas: Die JAV ist die Jugend- und Auszubildendenvertretung. Sie ist speziell für junge Leute und Azubis da. Wenn es Probleme in der Ausbildung gibt, kannst du dort vertraulich hingehen. Und du darfst sie mitwählen.
Mai: Vertraulich heißt, meine Chefin erfährt es nicht?
Jonas: Genau, nur wenn du das willst.

### Szene 5
Mai: Und was ist eine Gewerkschaft?
Jonas: Eine Gewerkschaft ist eine große Organisation außerhalb des Betriebs. Sie verhandelt mit den Arbeitgebern über Gehalt und Arbeitsbedingungen. Das Ergebnis ist ein Tarifvertrag. Für die Pflege ist das zum Beispiel Verdi, für Metall die Ih-Geh-Metall, für die Gastronomie die N-G-G.

### Szene 6
Jonas: Mitglied zu sein ist freiwillig und kostet einen kleinen Beitrag, für Azubis oft weniger. Dafür bekommst du Beratung und, wenn nötig, Hilfe vor Gericht. Und dein Betrieb darf dich deshalb nicht schlechter behandeln.

### Szene 7
Mai: Dann gehe ich zur JAV-Wahl. Und frage mal, was die so machen.
Jonas: Sehr gute Idee!

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- Verdi → ver.di
- Ih-Geh-Metall → IG Metall
- N-G-G → NGG
