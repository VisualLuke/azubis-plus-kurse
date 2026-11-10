# Lernvideo 19 – Was würdest du tun? „Ihr Konto wurde gesperrt“

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 19
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzähler und Kwame (Porträt im Kreis, Mund nur in seinen Sätzen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Echte Banken fragen nie per SMS oder Telefon nach PIN oder Passwort. Nicht klicken, selbst bei der Bank nachfragen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/19-konto-gesperrt` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne: Kwame (Porträt) hüpft herein, das Handy summt, eine SMS von „Deine Bank“ schiebt sich herein, die Zeilen tippen sich, darunter pocht der rote Link („bank-sicher-xyz…“) mit Warn-Welle; ein Schloss schlägt über dem Kontosymbol zu; Kwame erschrickt (Squash & Stretch, wackelt), Münzen hinter dem Schloss zittern | Konto gesperrt?! |
| 2 | Dunkle Quiz-Bühne, Fragezeichen im Ring; Karten A/B/C fliegen auf „A“, „B“, „C“ auf Bögen herein, ihr Symbol spielt: A Finger tippt auf den Link, Eingabefelder füllen sich mit Punkten; B Hörer klingelt, Wellen, Nummer tippt sich; C Link wird durchgestrichen, Bank-App mit grünem Haken, Hörer mit Schild | A · B · C |
| 3 | Denkpause: Countdown-Ring läuft leer, Karten pulsieren im Wechsel, Ziffern 3 – 2 – 1 ploppen auf den gesprochenen Zahlen | 3 – 2 – 1 |
| 4 | Karte A kommt nach vorn, rote Marke ✕; helle Bühne: gefälschte Bank-Seite (Adresse „bank-sicher-xyz…“ rot, Logo wackelt verdächtig), Kontonummer, Passwort und Code tippen sich in die Felder, Knopf wird gedrückt, die Daten fliegen als Punkte davon; Uhr dreht zwei Stunden weiter; Kontokarte: Balken läuft leer und wird rot, Münzen und Schein fliegen weg, „– €“ | A: Betrug – Geld weg |
| 5 | Karte B kommt nach vorn, rote Marke ✕; Handy klingelt, Kwame hört zu; eine freundliche Maske (Lächeln) schwebt vor einem dunklen Schatten, Chip „Bank?“; auf „Code“ ploppt ein Code-Feld; auf „Betrüger“ fällt die Maske, der Schatten mit Fragezeichen bleibt, Warnschild | B: auch Betrug |
| 6 | Karte C kommt nach vorn, grüne Marke ✓; SMS mit Link – Kwames Finger bleibt weg, der Link wird grau und durchgestrichen; Bank-App öffnet sich, grüner Haken („Alles normal“), Kwame lächelt; Website mit Telefonhörer-Symbol, Nummer fliegt aufs Handy, Anruf zur Bank (Gebäude), Wellen; Bank antwortet mit rotem ✕ auf der SMS; die SMS fliegt in den Papierkorb, Deckel klappt | C: selbst prüfen – sicher |
| 7 | Dunkle Bühne: alle drei Karten, A und B verblassen, C wächst und leuchtet grün; dann hell: SMS, E-Mail, Telefon werden rot durchgestrichen, Schild „PIN = geheim“ mit Schloss schlägt auf, Chips PIN · Passwort · Codes; „schon geklickt?“ – Handy wählt 116 116, Anruf-Wellen | Nie PIN teilen · Notfall: 116 116 |

Abspann: „Nie PIN teilen.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“

Nach dem Layout aus `../16-verschlafen/konzept.md` (Bausteine aus dessen `film.vorlage.html` übernommen): helle Situations-Bühne
rechts, Text im Bild links; dunkel-violette Quiz-Bühne 1680 × 880 mit drei weißen Optionskarten (nur Buchstabe + spielendes
Symbol), Countdown-Ring unter den Karten; beim Durchspielen kommt die Karte nach vorn, wird zur Kachel links oben, die Bühne wird hell
und klein, die Marke schlägt auf (rot ✕ / grün ✓). Auflösung: die beste Karte leuchtet grün, dann Tipps auf der hellen Bühne.

## Abweichungen vom Briefing

- Szene 3: vor „Drei … Zwei … Eins …“ eine stille Denkpause von 2 s (Countdown-Ring läuft schon), wie in Lernvideo 17.
- Absender und Link sind neutrale Platzhalter („Deine Bank“, „bank-sicher-xyz…“) – keine echte Bank, keine echte Adresse.
- Szene 4: kein erfundener Betrag – das Konto zeigt einen leeren, roten Balken und „– €“.
- Szene 5: Die „Person mit Maske“ ist nur eine Maske vor einem Schatten mit Fragezeichen (keine Menschen außer den Figuren).
- Szene 6: Der Satz der Bank („Diese SMS ist nicht von uns.“) wird gesprochen; im Bild nur ein rotes ✕ auf der SMS (keine Untertitel).
- Die Notrufnummer spricht der Erzähler „eins-eins-sechs eins-eins-sechs“ (wie 116 117 in Lernvideo 2), im Bild steht „116 116“.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Kwame: hfqsl1OMbiWsgPpht3el

### Szene 1
Erzähler: Kwame bekommt eine SMS: „Ihr Konto wurde gesperrt. Bestätigen Sie jetzt Ihre Daten.“ Darunter ein Link.
Kwame: Gesperrt? Mein Gehalt ist doch da drauf!

### Szene 2
(Pause 0.4)
Erzähler: Was würdest du tun? A: Schnell auf den Link klicken und die Daten eingeben. B: Die Nummer aus der SMS anrufen und fragen. C: Nichts anklicken, die Bank-App selbst öffnen oder die Bank über die offizielle Nummer anrufen.

### Szene 3
(Pause 2)
Erzähler: Drei …
(Pause 0.3)
Erzähler: Zwei …
(Pause 0.3)
Erzähler: Eins …

### Szene 4
(Pause 0.6)
Erzähler: Option A: Die Seite sieht aus wie die Bank, ist aber gefälscht. Kwame gibt Kontonummer, Passwort und Code ein. Zwei Stunden später ist Geld von seinem Konto weg.

### Szene 5
(Pause 0.8)
Erzähler: Option B: Am Telefon ist eine sehr freundliche Person. Sie sagt, sie ist von der Bank, und fragt nach einem Code. Auch das sind Betrüger.

### Szene 6
(Pause 0.8)
Erzähler: Option C: Kwame klickt nichts an. Er öffnet selbst seine Bank-App: Alles ist normal. Er ruft trotzdem bei der Bank an, mit der Nummer von der Website. Die Bank sagt: „Diese SMS ist nicht von uns.“ Kwame löscht sie.

### Szene 7
(Pause 0.6)
Erzähler: Die beste Wahl ist C. Eine echte Bank fragt nie per SMS, E-Mail oder Telefon nach PIN, Passwort oder Codes. Und wenn du doch schon geklickt hast: Ruf sofort deine Bank an oder den Sperr-Notruf eins-eins-sechs eins-eins-sechs.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- eins-eins-sechs eins-eins-sechs → 116 116
