# Lernvideo 39 – Was würdest du tun? Ein Kunde beschwert sich

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 39
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzählerin, Amir (Porträt im Kreis hinter dem Tresen der Werkstatt-Annahme) und
  Herr Braun (Kunde, `figur-kunde`, Porträt im Kreis; „roter Kopf“ = rötlich getönter, pulsierender Porträtring).
  Mund nur in den eigenen Sätzen aus `sprache.json`.
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Bei Beschwerden: zuhören, Verständnis zeigen, eine Lösung anbieten oder Hilfe holen. Nie streiten.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/39-kunde-beschwert-sich` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Werkstatt-Annahme (Rolltor, Tür, Wanduhr), Amir (Porträt) hinter dem Tresen mit Bildschirm; die Tür geht auf, Herr Braun (Porträt) stürmt herein, sein Ring färbt sich rot und pulsiert, Ärger-Zacken; auf „Auto“ und „Mittag“ ploppt eine Gedankenblase mit Auto und Uhr auf 12; auf „drei Uhr“ drehen die Zeiger der Wanduhr auf 3, die Uhr wird rot; auf „angerufen“ bleibt ein Handy stumm (graues Display, rotes ✕); auf „brauche“ hüpft er, das Auto pocht, Kamera-Akzent | – (Titel „Ein Kunde beschwert sich“ entfällt) |
| 2 | Dunkle Quiz-Bühne: Fragezeichen, drei Optionskarten A/B/C fliegen auf ihrem Buchstaben herein, jedes Symbol spielt: A Schutzschild-Blase, die rote Blase prallt ab und wird größer; B graue Blase „…“, Uhr tickt, Tür bleibt zu; C Ohr, Herz, Schraubenschlüssel ploppen auf „zuhören“, „Verständnis“, „Lösung“ | A · B · C |
| 3 | Denkpause: Countdown-Ring läuft leer (erst „?“), ein Lichtrahmen wandert über A → B → C, 3 – 2 – 1 ploppen auf den gesprochenen Zahlen | 3 – 2 – 1 |
| 4 | Karte A nach vorn, rote Marke ✕, wird zur Kachel; helle Bühne: Amirs Blase mit Schutzschild fliegt zu Herrn Braun und kippt auf „egal“ in eine graue Blase mit gleichgültigem Gesicht; Herr Braun schlägt auf den Tresen (Porträt stößt herab, Tresen bebt, Bildschirm hüpft, Stoßlinien); ein roter Beschwerde-Zettel fliegt zur Chef-Tür, an Amir erscheint ein rotes „!“. Karte B als zweite Kachel, rote Marke ✕: Amir schaut weg (Kopf dreht ab), graue „…“-Blase verblasst; Herr Braun verschränkt die Arme (Arme-Balken über dem Ring), die Wanduhr tickt, die Stimmungs-Anzeige kippt Schritt für Schritt ins Rote | A: Streit · B: ignoriert |
| 5 | Karte C nach vorn, grüne Marke ✓; Amir ruhig und freundlich: Herz auf „leid“, Amir nickt auf „verstehe“, auf „Auto“ Auto-Blase bei Herrn Braun (auf „fertig“ grüner Haken); auf „sofort“ hüpft Amir los; zu „Amir fragt in der Werkstatt nach …“ rollt das Werkstatt-Tor hoch (Hebebühne mit Auto, Schraubenschlüssel), Amir geht hinein, Fragezeichen-Blase, er kommt zurück, das Tor schließt; auf „einer Stunde“ läuft ein grüner Bogen auf der Wanduhr von 3 bis 4; „anrufen“: ein Handy summt (Wellen), auf „leid“ wieder das Herz; „warten“: Stuhl ploppt auf; „Kaffee“: Tasse rutscht über den Tresen, Dampf; Herr Braun: Ring wird wieder hell, er lächelt, setzt sich mit dem Kaffee auf den Stuhl | C: zuhören · verstehen · lösen |
| 6 | Helle Bühne: Tresen-Klingel läutet, dann vier Sprechblasen nacheinander mit Symbol (Herz, Ohr, Schraubenschlüssel, Sanduhr), das Stichwort pocht auf dem gesprochenen Wort; vor der vierten ploppt ein Fragezeichen („nicht weiterweißt“) | ‚Das tut mir leid‘ · ‚Ich kümmere mich darum‘ |
| 7 | Dunkle Bühne: alle drei Karten, A und B verblassen, C wächst und leuchtet grün, grüne Welle; dann hell: Werkstatt-Hof, das fertige Auto (ohne Logo) mit Herrn Braun (Porträt, froh) fährt vom Hof und „winkt“ (Porträt wippt, Winke-Bögen); „nicht wütend auf dich persönlich“: rote Ärger-Zacke fliegt auf die Uhr, nicht auf Amir, Amir bekommt ein Herz und lächelt; „Sie“: Sprechblase „Sie“ mit grünem Haken | Ruhig bleiben · Lösung finden |

Abspann: „Nie streiten.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“

Wie `../34-telefonieren/konzept.md`: helle Situations-Bühne (900 × 720), dunkel-violette Quiz-Bühne 1680 × 880 mit drei
weißen Optionskarten (Buchstabe + spielendes Symbol), Countdown-Ring unter den Karten; beim Durchspielen kommt die Karte nach
vorn, die Marke schlägt auf (rot ✕ / grün ✓), die Karte wird zur Kachel links oben, die Bühne wird hell und klein, darunter
steigt der Text im Bild. Ohne Kurstitel steht die erste Bühne in der Bildmitte (`kamera.basis.x = -360`).

## Abweichungen vom Briefing

- Kein Kurstitel im Video (Vorgabe 29.09.2026): „Ein Kunde beschwert sich“ (Text im Bild der Szene 1) entfällt, die erste
  Bühne steht mittig.
- Herr Braun und Amir nur als Porträts im Kreis: „roter Kopf“ = rötlicher, pulsierender Porträtring; „schlägt auf den Tresen“
  = das Porträt stößt auf den Tresen herab (Tresen bebt, Stoßlinien); „verschränkt die Arme“ = zwei gekreuzte Arm-Balken
  vor dem Porträt; „winkt“ = das Porträt wippt, Winke-Bögen (keine Hand, keine Daumen-Geste).
- Der Chef erscheint nicht als Figur, nur als Bürotür („beschwert sich beim Chef“) – das Briefing sieht keine Chef-Figur vor.
- Szene 3: vor „Drei … Zwei … Eins …“ eine stille Denkpause von 2 s (Countdown-Ring läuft schon), wie in Lernvideo 34.
- Szene 4: A und B spielen auf einer Bühne (ein Text im Bild „A: Streit · B: ignoriert“), beide mit roter Marke ✕.
- Szene 5: Die Kaffeetasse ist Kaffee (kein anderes Getränk). Herr Braun setzt sich auf einen Stuhl in der Annahme.
- Szene 6: Die vier Sätze stehen in den Sprechblasen (Bild laut Briefing: „Vier Sprechblasen nacheinander“); links steht der
  Text im Bild aus dem Briefing.
- Szene 7: „nicht wütend auf dich persönlich“ bekommt ein eigenes Bild (Ärger-Zacke fliegt auf die Uhr statt auf Amir),
  „mit ‚Sie‘ an“ eine Sprechblase „Sie“ mit Haken.
- Szene 5: Das Zögern „… Na gut.“ ist eine Pause von knapp einer Sekunde vor Herrn Brauns Satz (ein einzelnes „…“ lässt sich
  nicht sprechen); Wortlaut sonst unverändert.
- Auto ohne Markenlogo.

- Aussprache: Die Buchstaben der Optionen stehen im Sprechertext deutsch ausgeschrieben („Ah“, „Beh“, „Zeh“), sonst liest
  das Modell sie englisch; „Option C:“ heißt gesprochen „Und Option Zeh:“ (kein Ein-Wort-Satz). Im Bild und im Untertitel
  bleiben A, B, C (siehe „Schreibweise im Untertitel“).

## Schreibweise im Untertitel

- Option Ah → Option A
- Option Beh → Option B
- Option Zeh → Option C
- Ah: → A:
- Beh: → B:
- Zeh: → C:
- ist Zeh → ist C

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Amir: hfqsl1OMbiWsgPpht3el
@stimme Herr Braun: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzählerin: Amir steht an der Annahme der Werkstatt. Ein Kunde kommt herein. Er ist wütend.
Herr Braun: Mein Auto sollte heute Mittag fertig sein! Jetzt ist es drei Uhr, und keiner hat mich angerufen. Ich brauche das Auto!

### Szene 2
Erzählerin: Was würdest du tun? Ah: „Das ist nicht meine Schuld. Ich bin nur Azubi.“ Beh: Nichts sagen und hoffen, dass der Chef bald kommt. Zeh: Ruhig zuhören, Verständnis zeigen und eine Lösung suchen.

### Szene 3
(Pause 2)
Erzählerin: Drei …
(Pause 0.3)
Erzählerin: Zwei …
(Pause 0.3)
Erzählerin: Eins …

### Szene 4
Erzählerin: Option Ah: Amir hat recht, es ist nicht seine Schuld. Aber der Kunde hört nur: „Mir ist das egal.“ Er wird noch wütender und beschwert sich beim Chef über Amir.
(Pause 0.4)
Erzählerin: Option Beh: Amir schweigt. Der Kunde fühlt sich ignoriert. Die Stimmung wird immer schlechter.

### Szene 5
Erzählerin: Und Option Zeh:
Amir: Das tut mir leid, Herr Braun. Ich verstehe, dass Sie das Auto brauchen. Ich schaue sofort nach, wie weit wir sind.
Erzählerin: Amir fragt in der Werkstatt nach und kommt zurück.
Amir: Ihr Auto ist in einer Stunde fertig. Wir hätten Sie anrufen müssen, das tut mir leid. Möchten Sie hier warten? Wir haben Kaffee.
(Pause 0.9)
Herr Braun: Na gut. Danke.

### Szene 6
Erzählerin: Diese Sätze helfen bei Beschwerden: „Das tut mir leid.“ „Ich verstehe, dass Sie verärgert sind.“ „Ich kümmere mich sofort darum.“ Und wenn du nicht weiterweißt: „Einen Moment bitte, ich hole eine Kollegin.“

### Szene 7
Erzählerin: Die beste Wahl ist Zeh. Der Kunde ist nicht wütend auf dich persönlich. Und Kunden sprichst du immer mit „Sie“ an.
