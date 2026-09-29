# Lernvideo 44 – Erklärvideo: Das Grundgesetz – deine Grundrechte

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 44
- **Zielgruppe:** Azubis, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Menschen nur als Porträts im Kreis aus vorhandenen Figuren
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Das Grundgesetz schützt die Würde und Freiheit jedes Menschen in Deutschland, auch deine.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/44-grundgesetz` (ElevenLabs, Eleven v4)

Respektvoll und neutral: keine Hoheitszeichen, kein Bundesadler, keine echten Gebäude. Gotteshäuser als vereinfachte,
gleich große Silhouetten nebeneinander (keine Hierarchie), Beleidigungen nie ausgeschrieben (nur Zeichen wie „#!@%“).
Roter Faden: das kleine violette Buch „Grundgesetz“, das in Szene 1 ins Licht schwebt und in Szene 8 über allen schwebt.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Drei Regel-Karten (§) ploppen auf und wackeln; der Umriss von Deutschland erscheint, die Karten fliegen darauf; das kleine Buch „Grundgesetz“ fällt herein, die Karten fliegen hinein, Licht fällt von oben darauf, das Buch schwebt | – (Titel entfällt) |
| 2 | Das Buch landet in der Mitte und leuchtet bei „Verfassung“, bei „von Deutschland“ ein kleiner Umriss; die Jahreszahl rollt wie ein Zählwerk auf 1949, das Buch rückt nach links oben; kleine Gesetzbücher fliegen schief herein, eine Linie zeichnet sich vom Grundgesetz herab und sie richten sich daran aus (je ein Haken); ein Amtsgebäude (Staat) kommt dazu, wird angebunden, verbeugt sich, Haken | Verfassung · seit 1949 |
| 3 | Das Buch klappt auf, „Artikel 1“ leuchtet auf der Seite; sieben verschiedene Porträts ploppen darunter auf, über jedem ein Herz (Wert); ein Schutzbogen spannt sich über sie; zwei rote Blitze prallen ab, ein Preisschild will sich an ein Porträt hängen, wird rot durchgestrichen und fällt weg | Artikel 1: Die Würde des Menschen ist unantastbar. |
| 4 | Waage mit § kommt schief herein, fünf kleine Porträts („alle Menschen“), bei „gleich“ pendelt sie ein und alle hüpfen; ein Mann fällt in die linke Schale (Waage kippt), eine Frau in die rechte (Waage steht gerade), „=“ ploppt; vier Chips Herkunft · Sprache · Religion · Hautfarbe; ein roter Nachteil-Pfeil will eine Schale herunterdrücken, wird durchgestrichen, die Waage pendelt zurück, Haken | Gleichheit · Gleichberechtigung |
| 5 | Vier gleich große, vereinfachte Gotteshäuser wachsen nebeneinander aus dem Boden, in der Mitte ein Porträt ohne Symbol; ein Lichtfleck auf dem Boden wandert frei von Haus zu Haus (das Haus hüpft) und bei „gar nichts“ zurück zur Figur; bei „ausüben“ gehen die Fenster warm an, Herzen über allen | Religionsfreiheit |
| 6 | Drei Porträts, Sprechblasen ploppen auf und tippen sich; eine Kritik-Blase fliegt zum Regierungsgebäude und landet dort (Haken); eine rote Grenzlinie zeichnet sich; eine Blase „#!@%“ will zu einem Porträt, wird rot durchgestrichen und fällt | Meinungsfreiheit – mit Grenzen |
| 7 | Viele kleine Porträts im Bogen, ein Schutzschild „Grundrechte“ legt sich über alle und landet vor der Figur; ein roter Blitz trifft das Schild (Wackler); Gerichtsgebäude mit Waage erscheint, die Figur geht den Weg dorthin; das Amtsgebäude (Staat) kommt auf die andere Seite, die Waage des Gerichts pendelt gerade | Grundrechte gelten auch für dich |
| 8 | Porträts in einer Reihe, das Buch schwebt über ihnen im Licht; Schutzbogen; von der Figur in der Mitte aus verbinden sich die Hände (Linien zeichnen sich nach außen), Welle durch alle | Deine Rechte · die Rechte der anderen |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann Schwenks von Bühne zu Bühne mit Bewegungsunschärfe und Tiefe;
Kamera-Akzente auf Schlüsselwörtern. Abspann: „Würde und Freiheit für jeden Menschen.“ und
„Das Grundgesetz schützt alle in Deutschland – auch dich.“ (Kernbotschaft).

## Abweichungen vom Briefing

- Szene 1: „Das Grundgesetz“ ist der Kurstitel und wird nicht als Überschrift eingeblendet (Vorgabe 29.09.2026); das Buch
  trägt die Aufschrift „Grundgesetz“ (Gegenstand). Die erste Bühne steht mittig.
- Szene 3: Sprechertext nach `korrekturen.md` („Der erste Artikel beginnt mit dem wichtigsten Satz: …“, vor Artikel 1 steht die Präambel).
- Szene 3: Artikel 1 als Titel + Unterzeile, die Wörter des Satzes steigen im Takt der Stimme auf.
- „Viele verschiedene Menschen“, „Mann und Frau“, „Figur“, „viele Figuren halten sich an den Händen“: Porträts im Kreis aus
  vorhandenen Figuren; „an den Händen“ = verbindende Linien zwischen den Porträts.
- Szene 5: Gotteshäuser vereinfacht (Kirche, Moschee, Synagoge, Tempel), gleich groß auf einer Grundlinie, je ein kleines
  gleich großes Zeichen; die Figur in der Mitte ohne Symbol.
- Szene 6: Die Beleidigung wird nicht ausgeschrieben, die durchgestrichene Blase zeigt nur „#!@%“. Regierung als neutrales Gebäude ohne Hoheitszeichen.
- Szene 7: Staat und Gericht als neutrale Gebäude, keine Hoheitszeichen oder Bundesadler.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Jedes Land hat Regeln. Die wichtigsten Regeln in Deutschland stehen in einem kleinen Buch: dem Grundgesetz.

### Szene 2
(Pause 0.9)
Erzähler: Das Grundgesetz ist die Verfassung von Deutschland. Es gilt seit neunzehnhundertneunundvierzig. Alle Gesetze müssen dazu passen, und auch der Staat selbst muss sich daran halten.

### Szene 3
(Pause 0.9)
Erzähler: Der erste Artikel beginnt mit dem wichtigsten Satz: „Die Würde des Menschen ist unantastbar.“ Das heißt: Jeder Mensch hat einen Wert. Niemand darf gequält, gedemütigt oder wie ein Gegenstand behandelt werden.

### Szene 4
(Pause 0.9)
Erzähler: Alle Menschen sind vor dem Gesetz gleich. Männer und Frauen haben die gleichen Rechte. Niemand darf wegen Herkunft, Sprache, Religion oder Hautfarbe benachteiligt werden.

### Szene 5
(Pause 0.9)
Erzähler: Es gibt Religionsfreiheit. Du darfst glauben, was du willst, oder auch gar nichts. Und du darfst deine Religion ausüben.

### Szene 6
(Pause 0.9)
Erzähler: Es gibt Meinungsfreiheit. Du darfst sagen, was du denkst, auch Kritik an der Regierung. Aber die Freiheit hat Grenzen: Beleidigungen und Hetze gegen andere Menschen sind verboten.

### Szene 7
(Pause 0.9)
Erzähler: Die meisten Grundrechte gelten für alle Menschen in Deutschland, auch für dich. Und wenn du glaubst, dass deine Rechte verletzt werden, kannst du vor Gericht gehen. Auch gegen den Staat.

### Szene 8
(Pause 0.9)
Erzähler: Das Grundgesetz schützt dich. Und es erwartet, dass du die Rechte der anderen genauso respektierst.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- neunzehnhundertneunundvierzig → 1949
