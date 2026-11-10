# Lernvideo 8 – Podcast: Nebenjob während der Ausbildung

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 8
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Kwame (Azubi) und Jonas (Coach) im Gespräch; Porträts links (Jonas) und rechts (Kwame),
  in der Mitte die Bühne mit den animierten Einblendungen
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Ein Nebenjob ist oft möglich, aber nur mit Erlaubnis und ohne dass die Ausbildung leidet.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/08-nebenjob` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Pausenecke: Tisch mit zwei Tassen (Dampf); Handy steigt auf, Jobanzeigen scrollen durch, die Karte „Aushilfe gesucht“ bleibt stehen und leuchtet; das Handy dreht sich zu Jonas; Münzen fliegen zu einem Umschlag „Familie“ | Nebenjob in der Ausbildung? |
| 2 | Betrieb landet; Kwame und Sabine (kleine Porträts) nebeneinander, Sprechblase „Darf ich…?“ ploppt auf; Vertrag mit Zeile „Nebenjob: fragen“, Lupe; Schranke „Nein“ bei zwei Gründen (Ausbildung leidet, Konkurrenz) | 1. Betrieb fragen |
| 3 | Aufenthaltstitel-Karte fliegt herein, Zusatzblatt schiebt sich heraus, Lupe fährt auf „Beschäftigung: … Std./Woche“; Stunden-Balken füllt sich über die Grenze → rotes Warnsymbol schlägt auf; Ausländerbehörde, Fragezeichen → Haken | 2. Aufenthaltstitel prüfen – was ist erlaubt? |
| 4 | Zwei Uhren „Ausbildung“ und „Nebenjob“ gleiten zusammen zu einer Uhr „zusammen“ (Plus, Gleich); Bett mit Mond, Ruhe-Ring läuft, „11 h“ zählt hoch | 3. Stunden zählen zusammen · Ruhezeit |
| 5 | Tisch von vorn, Geldschein wird darunter durchgeschoben; großes rotes X schlägt mit Wackler auf, Chip „Visum“ in Gefahr | Schwarzarbeit = verboten |
| 6 | Waage: „Ausbildung“ (schwer) sinkt, „Nebenjob“ (leicht) steigt; Müdigkeit (Z-Blasen) und fallende Note; Heft mit Haken „Prüfung“ | Ausbildung geht vor |
| 7 | Pausenecke: Zettel mit vier Punkten, Stift hakt sie nacheinander ab; die Tassen stoßen an | Fragen · Prüfen · Pausen · Vertrag |

Umsetzung: Gesprächsformat wie `kurse/04-rechte-pflichten` (Porträts links/rechts, Mund mit dem Pegel der Aufnahme,
der Sprecher wird größer und bekommt einen Rand, der Zuhörer nickt). Wer spricht, kommt exakt aus `sprache.json`
(`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer Maske; jede Animation hängt an
einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Erst fragen, dann jobben.“ und die Kernbotschaft.

Abweichungen vom Briefing: keine im Sprechertext. Die Ruhezeit bleibt bei elf Stunden (keine Regeln für unter 18,
siehe `../korrekturen.md`). Die Stundenzahl auf dem Zusatzblatt ist ein Platzhalter („… Std./Woche“) – das Briefing nennt keine Zahl.

## Sprechertext

@modell eleven_v4
@stimme Kwame: hfqsl1OMbiWsgPpht3el
@stimme Jonas: K8bIZwDsGMHreGKTIVHN

### Szene 1
Kwame: Jonas, ich will meiner Familie mehr Geld schicken. Kann ich am Wochenende noch einen Nebenjob machen?
Jonas: Das ist oft möglich. Aber es gibt ein paar Regeln.

### Szene 2
Jonas: Erstens: Sag es deinem Ausbildungsbetrieb. Oft steht im Vertrag, dass du fragen musst. Der Betrieb darf Nein sagen, wenn der Job der Ausbildung schadet oder bei der Konkurrenz ist.

### Szene 3
Jonas: Zweitens, und das ist für dich besonders wichtig: dein Aufenthaltstitel. Dort oder im Zusatzblatt steht, ob und wie viele Stunden du neben der Ausbildung arbeiten darfst.
Kwame: Und wenn ich einfach mehr arbeite?
Jonas: Dann riskierst du deinen Aufenthalt. Im Zweifel frag die Ausländerbehörde, bevor du anfängst.

### Szene 4
Jonas: Drittens: die Arbeitszeit. Die Stunden aus beiden Jobs werden zusammengezählt. Du brauchst genug Ruhe. Zwischen zwei Arbeitstagen müssen mindestens elf Stunden Pause sein.

### Szene 5
Kwame: Ein Freund hat gesagt, ich kann auch ohne Vertrag arbeiten, bar auf die Hand.
Jonas: Finger weg. Das ist Schwarzarbeit. Das ist verboten und kann für dich richtig gefährlich werden, gerade mit Visum.

### Szene 6
Jonas: Und denk dran: Die Ausbildung ist das Wichtigste. Wenn du müde bist oder deine Noten schlechter werden, bringt dir das Extra-Geld nichts.
Kwame: Stimmt. Ich will ja die Prüfung schaffen.

### Szene 7
Kwame: Also: Betrieb fragen, Aufenthaltstitel prüfen, nicht zu viele Stunden und nur mit Vertrag.
Jonas: Perfekt. Und wenn du unsicher bist, frag uns.
