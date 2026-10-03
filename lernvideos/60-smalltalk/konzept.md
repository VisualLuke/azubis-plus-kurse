# Lernvideo 60 – Was würdest du tun? Smalltalk in der Pause

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Video 60
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzählerin, Kwame und ein Geselle (`figur-geselle`, Erzähler-Stimme), beide als Porträts
  im Kreis, Mund nur in den eigenen Sätzen
- **Länge:** geplant ca. 1:40 Min.
- **Kernbotschaft:** Smalltalk muss nicht perfekt sein: kurz antworten, eine Gegenfrage stellen, zuhören – und private Themen
  wie Gehalt lieber weglassen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/60-smalltalk` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne, Pausenraum: Wanduhr springt auf 12:00, eine Brotdose klappt auf; Kwame (Porträt) sitzt allein am Tisch, das Handy leuchtet vor ihm, er scrollt (Bildschirm-Zeilen laufen); auf „Geselle“ kommt der Geselle auf einem Bogen herein, ein Stuhl rutscht heran, er setzt sich (Squash), seine Kaffeetasse dampft; bei „Mahlzeit“ pulsieren Schallbögen, bei „Wochenende“ ploppt neben ihm ein Kalenderblatt „Sa · So“, über Kwame ein kleines Fragezeichen | Mittagspause |
| 2 | Dunkle Quiz-Bühne, drei Optionskarten A/B/C auf „Ah“, „Beh“, „Zeh“, ihr Symbol spielt: A – Sprechblase mit einem Punkt, daneben ein Handy, das hell aufleuchtet und die Blase verdrängt; B – Münzstapel mit Fragezeichen, der Stapel wackelt; C – zwei Sprechblasen, die abwechselnd hin- und herspringen (Ping-Pong) | A · B · C |
| 3 | Denkpause (3 s Stille): Countdown-Ring läuft leer, Ziffern 3 – 2 – 1 ploppen je Sekunde, ein Lichtrahmen wandert über A → B → C. Dann Karte A nach vorn, rote Marke ✕ schlägt auf, wird zur Kachel; helle Bühne: Kwame sagt kurz etwas (kleine Blase), sein Blick geht zum Handy, das Handy leuchtet auf; die Blase des Gesellen schrumpft und verpufft, der Geselle trinkt seinen Kaffee, eine dünne Wand aus Stille (gestrichelte Linie) zieht sich zwischen beide. Karte B als zweite Kachel, rote Marke ✕: eine Blase mit Münzstapel fliegt zum Gesellen, prallt an einem Schild „privat“ ab, der Geselle rückt mit dem Stuhl ein Stück weg, über beiden zieht eine kleine graue Wolke auf | A: Gespräch vorbei · B: zu privat |
| 4 | Karte C nach vorn, grüne Marke ✓; helle Bühne: auf „Fußball“ hüpft ein Ball über den Tisch und landet bei Kwame, auf „Und wie war dein Wochenende?“ fliegt eine Gegenfrage-Blase (Pfeil zurück) zum Gesellen; der Geselle lächelt, auf „wandern“ zeichnet sich ein Bergpfad mit Schuhabdrücken, auf „Wetter“ geht eine Sonne auf; auf „Verein“ ploppt ein Vereinsschild mit Ball; Kwame nickt, beide Porträts rücken näher, die Blasen springen immer schneller hin und her (Ping-Pong), die Wanduhr dreht sich schnell bis zum Pausenende, Herz zwischen beiden | C: kurz antworten + Gegenfrage |
| 5 | Helle Bühne, Themen-Tafel: sechs Kärtchen ploppen auf ihre Wörter (Kalender „Wochenende“, Sonne/Wolke „Wetter“, Teller „Essen“, Ball „Sport“, Gitarre „Hobbys“, Koffer „Urlaub“) und bekommen je einen grünen Haken; dann vier graue Kärtchen (Münzen „Gehalt“, Buch mit Lesezeichen „Religion“, Rednerpult „Politik“, Pflaster „Krankheiten“) fallen auf ihre Wörter herab und rutschen in eine Schublade „lieber nicht“, die zuklappt; auf „Gegenfrage“ fliegt ein Bumerang-Pfeil zurück, auf „hör gut zu“ wachsen Schallbögen zu Kwames Ohr, Kwame nickt | Gut: Wochenende · Wetter · Essen · Sport · Hobbys · Urlaub / Lieber nicht: Gehalt · Religion · Politik · Krankheiten |
| 6 | Dunkle Bühne: alle drei Karten, A und B verblassen, C wächst und leuchtet grün, grüne Welle; dann hell: Pausenraum am nächsten Tag, Wanduhr springt auf 12:00, Kwame kommt herein, ein Schild „Mahlzeit!“ schwingt an der Tür wie ein Gruß-Schild, der Geselle und Kwame lächeln, Schallbögen gehen in beide Richtungen; zwei kurze Blasen (je drei Zeilen) springen hin und her, grüner Haken | „Mahlzeit!“ = Gruß zur Mittagszeit |

Abspann: „Kurz antworten, zurückfragen.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“

Wie `../39-kunde-beschwert-sich/konzept.md`: helle Situations-Bühne (900 × 720), dunkel-violette Quiz-Bühne 1680 × 880 mit
drei weißen Optionskarten (Buchstabe + spielendes Symbol), Countdown-Ring unter den Karten; beim Durchspielen kommt die Karte
nach vorn, die Marke schlägt auf (rot ✕ / grün ✓), die Karte wird zur Kachel links oben, die Bühne wird hell und klein,
darunter steigt der Text im Bild. Ohne Kurstitel steht die erste Bühne in der Bildmitte (`kamera.basis.x = -360`).

## Abweichungen vom Briefing

- Kein Kurstitel im Video. „Mittagspause“ bleibt als Situation (Text im Bild der Szene 1).
- Denkpause: `(Pause 3)` als stille Denkpause am Anfang von Szene 3 (Countdown-Ring zählt 3 – 2 – 1 im Bild) statt eines
  gesprochenen „Drei … Zwei … Eins …“ – so gibt es keine Ein-Wort-Sätze.
- Die Optionen A und B spielen in einer Szene (ein Text im Bild „A: Gespräch vorbei · B: zu privat“), beide mit roter Marke ✕.
- Der Geselle duzt Kwame zuerst, Kwame duzt zurück – unter Kollegen üblich, keine eigene Regel im Video.
- „Aussehen“ aus der Briefing-Liste der heiklen Themen weggelassen: in den erreichbaren seriösen Quellen (Goethe-Institut)
  nicht genannt; die Liste bleibt bei Gehalt, Religion, Politik, Krankheiten.
- Kein Alkohol: Der Geselle trinkt Kaffee.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Kwame: hfqsl1OMbiWsgPpht3el
@stimme Geselle: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzählerin: Mittagspause im Betrieb. Kwame sitzt allein am Tisch und schaut auf sein Handy. Ein Geselle setzt sich zu ihm.
Geselle: Mahlzeit, Kwame! Na, wie war dein Wochenende?

### Szene 2
Erzählerin: Was würdest du tun? Ah: „Gut“ sagen und weiter aufs Handy schauen. Beh: Zurückfragen, wie viel er eigentlich verdient. Zeh: Kurz erzählen und eine Gegenfrage stellen.

### Szene 3
(Pause 3)
Erzählerin: Option Ah: Kwame sagt nur „Gut“ und schaut wieder aufs Handy. Der Geselle denkt: Er will nicht reden. Das Gespräch ist schnell vorbei.
(Pause 0.4)
Erzählerin: Option Beh: Das Gehalt ist in Deutschland ein sehr privates Thema. Der Geselle fühlt sich unwohl, und die Stimmung wird komisch.

### Szene 4
Erzählerin: Und Option Zeh:
Kwame: Danke, gut! Ich habe am Samstag mit Freunden Fußball gespielt. Und wie war dein Wochenende?
Geselle: Ich war mit meiner Familie wandern. Das Wetter war super. Spielst du in einem Verein?
Kwame: Noch nicht. Kennst du hier einen guten Verein?
Geselle: Klar, mein Bruder spielt in einem. Ich frag ihn mal.

### Szene 5
Erzählerin: Gute Themen für die Pause sind das Wochenende, das Wetter, Essen, Sport, Hobbys und Urlaub. Lieber nicht: Gehalt, Religion, Politik und Krankheiten. Und das Wichtigste: Stell eine Gegenfrage und hör gut zu.

### Szene 6
Erzählerin: Die beste Wahl ist Zeh. Smalltalk muss nicht lang oder perfekt sein. Kurze Antworten reichen. Und wenn jemand zur Mittagszeit „Mahlzeit“ sagt, ist das einfach ein Gruß. Du kannst ihn genauso zurückgeben.

## Schreibweise im Untertitel

- Option Ah → Option A
- Option Beh → Option B
- Option Zeh → Option C
- Ah: → A:
- Beh: → B:
- Zeh: → C:
- ist Zeh → ist C

## Quellen

Recherche am 03.10.2026. Die Seiten waren aus der Arbeitsumgebung nicht direkt abrufbar; geprüft wurden die Aussagen über
die Suchmaschinen-Auszüge der jeweiligen Seite.

1. Goethe-Institut, Mein Weg nach Deutschland – Training für den Beruf: Im Arbeitsalltag kommunizieren – https://www.goethe.de/prj/mwd/de/deutschueben/kommunikation/muendlich/ima.html
2. Goethe-Institut, Mein Weg nach Deutschland: Mein Arbeitsplatz – https://www.goethe.de/prj/mwd/de/indeutschlandleben/abe/arbeitsplatz.html
3. Goethe-Institut: Deutsch am Arbeitsplatz – https://www.goethe.de/de/spr/ueb/daa.html
4. Deutsche Handwerks Zeitung: Tipps für den perfekten Smalltalk – https://deutsche-handwerks-zeitung.de/tipps-fuer-den-perfekten-smalltalk/150/3099/294661
5. e-fellows.net: Diese Themen sind beim Small Talk tabu – https://www.e-fellows.net/Karriere/Beruf-und-Karriere/Business-Knigge-und-Skills/Small-Talk-und-Schlagfertigkeit/Fettnaepfchen
6. Indeed Karriere-Guide: Smalltalk mit Kollegen – https://de.indeed.com/karriere-guide/karriereplanung/smalltalk
7. DWDS – Digitales Wörterbuch der deutschen Sprache: Mahlzeit – https://www.dwds.de/wb/Mahlzeit
8. CIO (dpa): Arbeitsleben – Stirbt der Mittagszeitgruß „Mahlzeit!“? – https://www.cio.de/article/3700064/stirbt-der-mittagszeitgruss-mahlzeit.html

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Quelle |
| --- | --- |
| Pausen sind ein typischer Anlass für Smalltalk mit Kollegen | 1, 2 |
| Gehalt ist ein privates Thema, das man im Smalltalk vermeiden sollte (Option B) | 1 („Themen wie schwere Krankheiten, Gehalt, politische oder religiöse Überzeugungen sollte man vermeiden“), 4, 5 |
| Nur „Gut“ und weg aufs Handy beendet das Gespräch (Option A) | Folge aus 6 (Smalltalk lebt von Fragen und Zuhören); Szenenhandlung, keine Sachaussage |
| Gute Themen: Wochenende, Wetter, Essen, Sport, Hobbys, Urlaub | 1 (Wetter, Familie, Freizeit, Hobbys), 3 (Wochenende, Urlaub), 4 (Wetter, Sport, Hobbys, Urlaub); Essen: 2/4 (gemeinsame Mittagspause, Themen der Anwesenden) |
| Lieber nicht: Gehalt, Religion, Politik, Krankheiten | 1, 4, 5 |
| Gegenfrage stellen und zuhören | 6 (offene Fragen, auf das Gesagte eingehen, aufmerksam zuhören) |
| Smalltalk muss nicht lang oder perfekt sein, kurze Antworten reichen | 4 (Smalltalk ist kein Wettbewerb, soll verbinden); Ratschlag |
| „Mahlzeit“ ist ein Gruß zur Mittagszeit, in vielen Regionen üblich; man grüßt genauso zurück | 7, 8 |
| Text im Bild „Mittagspause“, „A · B · C“, „C: kurz antworten + Gegenfrage“ | Situation bzw. Format; Inhalt wie oben |
