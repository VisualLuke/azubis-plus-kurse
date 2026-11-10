# Lernvideo 16 – Was würdest du tun? Verschlafen am Berufsschultag

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 16
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzähler und Mai (Porträt), animierte Szenen
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Wer zu spät kommt, sagt sofort Bescheid, ehrlich und schnell.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/16-verschlafen` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Schlafzimmer: Mai schläft im Bett, das Handy auf dem Nachttisch leuchtet auf („Dienstag 8:15“) und summt, der Wecker steht ausgeschaltet daneben (Zeichen „stumm“); Schule und Uhr: 8:00, der Zeiger läuft auf 8:15 (roter Zeitkeil); Mai springt hoch (Squash & Stretch), Wecker wackelt | Verschlafen! |
| 2 | Dunkle Entscheidungs-Bühne: Karten A, B, C fliegen nacheinander herein, jedes Symbol spielt kurz (A: Tipp-Punkte verschwinden, Strich durch die Sprechblase, Uhr dreht; B: zwei Nachrichten, Häkchen, Pfeil; C: Dach wippt, Thermometer steigt); darunter ein Ring mit Fragezeichen | A · B · C |
| 3 | Das Fragezeichen im Ring wird zum Countdown-Ring mit 3 – 2 – 1 im Takt der Stimme, die Karten pulsieren nacheinander | 3 – 2 – 1 |
| 4 | Karte A kommt nach vorn, am Ende gelbe Marke; Bühne wird hell: Uhr springt eine Stunde weiter, leeres Handy (keine Nachricht, rotes Kreuz), Mai kommt durch die Klassentür; Klassenbuch, der Stift schreibt „unentschuldigt“; Brief fliegt von der Schule zum Betrieb; nachmittags klingelt das Handy („Ausbilderin“), Fragezeichen | A: unentschuldigt – schlechter Eindruck |
| 5 | Karte C kommt nach vorn, am Ende rote Marke; Mai auf dem Sofa, Nachricht „Bin krank“ tippt sich und wird gesendet; Thermometer bleibt normal; Schatten mit Fragezeichen wächst, das Band zwischen Mai und Betrieb reißt; Papiere „Abmahnung“ und „Kündigung“ fallen herein | C: Lüge – großes Risiko |
| 6 | Karte B kommt nach vorn, am Ende grüne Marke; Handy: zwei Chats (Betrieb, Schule), Mais Nachricht tippt sich, während sie spricht, „30 Min.“, Häkchen; Mai steigt in die Bahn, die Bahn fährt zur Schule; Mai an der Schule, grüner Haken (Lehrerin nickt); Zeichen für „ehrlich“ und „schnell“, grüne Welle | B: ehrlich + schnell = richtig |
| 7 | Alle drei Karten, B leuchtet grün und wächst; Zimmer: zwei Wecker ploppen auf den Nachttisch und klingeln, das Handy fliegt vom Bett in großem Bogen aufs Regal (weit weg), das Fenster wird Nacht (Mond), Rucksack an der Tür, Heft und Stift fliegen hinein | Beste Lösung: B · Tipp: zwei Wecker |

Abspann: „Ehrlich und schnell.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“ (auch für Kurs 17–19)

Wiedererkennbares Layout; Stil und Helfer liegen in `film.vorlage.html` (Abschnitt „Format Was würdest du tun?“) und
können für Kurs 17–19 übernommen werden. Verwandt mit dem Mythos-Layout (Kurs 12), aber mit drei Karten.

1. **Situation:** helle Bühne rechts (900 × 720), Text im Bild links; die Figur erlebt die Situation (Porträt im Kreis,
   Mund nur in den eigenen Sätzen, Sprecher exakt aus `sprache.json`).
2. **Optionen:** Schwenk auf die große, dunkel-violette Entscheidungs-Bühne (1680 × 880, Verlauf b500 → b700). Auf „A:“,
   „B:“, „C:“ fliegt je eine weiße Karte (380 × 470) auf einem Bogen herein: runder Buchstaben-Knopf oben, darunter ein
   Symbol, das spielt, solange die Option vorgelesen wird. Keine Karten-Beschriftung außer dem Buchstaben.
3. **Denkpause:** Unter den Karten der Countdown-Ring (weißer Bogen läuft leer, Ziffer 3 – 2 – 1 ploppt auf das
   gesprochene Wort, Klick), die Karten pulsieren im Wechsel, ein Fragezeichen-Knopf schwebt darüber.
4. **Durchspielen:** Für jede Option startet die Szene auf der dunklen Bühne mit allen drei Karten (bereits besprochene
   tragen ihre Marke). Die gewählte Karte kommt nach vorn (größer, die anderen treten zurück), auf „Option X“ schlägt die
   Marke auf (rund, rechts oben: gelb „!“, rot „✕“, grün „✓“) samt farbigem Rahmen, Kamera-Akzent. Dann wird die Bühne
   hell und klein (rechts), die Karte wandert als Kachel nach links oben, darunter steigt der Text im Bild aus der
   Maske (erstes Wort in der Markenfarbe der Bewertung). Rechts spielt die Folge – jede Bewegung an einem Wort.
5. **Auflösung:** Dunkle Bühne mit allen drei Karten, die schlechteren werden blass, die beste leuchtet grün
   (pulsierender Rahmen, wächst), danach helle Bühne mit den Tipps; Abspann mit der Kernbotschaft.

Farben der Bewertung: grün = richtig, gelb = schlechter Eindruck / geht besser, rot = großes Risiko.

## Abweichungen vom Briefing

- Szene 5 nach `../korrekturen.md`: „Das kann eine Abmahnung oder sogar die Kündigung bedeuten.“
- Szene 6: Die Nachricht („Ich habe verschlafen, es tut mir leid. Ich bin in dreißig Minuten da.“) spricht Mai selbst
  statt des Erzählers – es ist ihre Nachricht. Im Handy stehen nur Platzhalter-Zeilen und „30 Min.“ (keine Untertitel).
- Szene 3: Der Countdown wird wie im Briefing gesprochen („Drei … zwei … eins …“), mit kurzen Pausen zwischen den
  Zahlen, damit die Denkpause rund drei Sekunden dauert; der Ring läuft im Bild mit.
- Uhrzeiten und Zahlen im Sprechertext ausgeschrieben („acht Uhr fünfzehn“, „dreißig Minuten“), damit die Stimme sie
  sicher richtig liest; im Bild stehen Ziffern.
- Keine Lehrerin und keine Ausbilderin als Figur (Kurs 16 hat nur Mai): Die Lehrerin zeigt sich über Klassenbuch und
  Stift, die Ausbilderin als Anruf auf dem Handy; „Lehrerin nickt“ als grüner Haken an der Schule.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Mai: Mac2FKpSgaGIsaNRXt8A

### Szene 1
Erzähler: Dienstag, acht Uhr fünfzehn. Die Berufsschule hat um acht Uhr angefangen. Mai wacht gerade erst auf.
Mai: Oh nein! Mein Wecker!

### Szene 2
(Pause 0.4)
Erzähler: Was würdest du tun? A: Nichts sagen und einfach später hingehen. B: Sofort Schule und Betrieb Bescheid geben und so schnell wie möglich hinfahren. C: Heute ganz zu Hause bleiben und sagen, dass du krank bist.

### Szene 3
Erzähler: Was denkst du? Drei …
(Pause 0.3)
Erzähler: Zwei …
(Pause 0.3)
Erzähler: Eins …

### Szene 4
(Pause 0.6)
Erzähler: Option A: Mai kommt eine Stunde zu spät, ohne Nachricht. Die Lehrerin trägt sie als unentschuldigt ein. Das kann die Schule dem Betrieb melden. Und am Nachmittag fragt die Ausbilderin: „Warum hast du nichts gesagt?“

### Szene 5
(Pause 0.8)
Erzähler: Option C: Mai bleibt zu Hause und sagt, sie ist krank. Aber sie ist nicht krank. Wenn das herauskommt, ist das ein großer Vertrauensbruch. Das kann eine Abmahnung oder sogar die Kündigung bedeuten.

### Szene 6
(Pause 0.8)
Erzähler: Option B: Mai schreibt sofort ihrem Betrieb und meldet sich bei der Schule:
Mai: Ich habe verschlafen, es tut mir leid. Ich bin in dreißig Minuten da.
Erzähler: Sie fährt los und entschuldigt sich kurz bei der Lehrerin. Unangenehm? Ja. Aber ehrlich und schnell. Das zeigt Verantwortung.

### Szene 7
(Pause 0.6)
Erzähler: Die beste Wahl ist B. Und damit es nicht wieder passiert: zwei Wecker stellen, das Handy weit weg vom Bett legen und am Abend vorher die Tasche packen.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- acht Uhr fünfzehn → 8:15 Uhr
- um acht Uhr → um 8 Uhr
- dreißig Minuten → 30 Minuten
