# Lernvideo 2 – Erklärvideo: Zum Arzt gehen

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 2
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Kwame als Figur
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Dein erster Weg ist der Hausarzt. Nachts und am Wochenende hilft die 116 117, bei Lebensgefahr die 112.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/02-zum-arzt` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Kwame mit Schal steht an einer Weggabelung; Wegweiser „Krankenhaus“, „Arzt“, „???“ klappen auf; „Krankenhaus“ wird rot durchgestrichen | Krank – wohin? |
| 2 | Freundliche Praxis mit Schild „Allgemeinmedizin“, Karteikarte „kennt dich“, Stethoskop pulst; Pfeile zeichnen sich zu Facharzt-Symbolen (Auge, Ohr, Haut), eine Überweisung fliegt mit | 1. Hausarzt |
| 3 | Kwame gesund und froh; Kollege Amir mit Sprechblase; Handy mit Karte, Praxis-Nadeln fallen, Sprechblasen „EN“, „FR“, „AR“ | Hausarzt suchen, bevor du krank bist |
| 4 | Kwame telefoniert (Wellen), Chips Telefon / online; Wochenkalender, Markierung läuft zu „Heute“, Termin fällt hinein | Termin: Telefon oder online |
| 5 | Anmeldung mit Kartenleser, Versichertenkarte wird eingesteckt, Lämpchen grün; danach Handy mit Termin, Finger tippt „Termin absagen“ | Karte mitbringen · Termin absagen, wenn nötig |
| 6 | Bühne wird Nacht, Mond geht auf, Rollladen der Praxis fährt herunter („Geschlossen“); Handy, 116 117 tippt sich groß, Anruf-Wellen; Weg zeichnet sich zu einer Nadel | Nachts & Wochenende: 116 117 |
| 7 | Rotes Blinklicht, Notfälle als Kacheln (Brust, Unfall, Bewusstlosigkeit); Handy wählt 112, Rettungswagen fährt herein | Lebensgefahr: 112 |
| 8 | Apotheke mit rotem „A“, Medikamente kommen über den Tresen; Nacht, die Notdienst-Apotheke bleibt hell; Aushang „Notdienst“ an der Tür, Kamera fährt heran | Apotheke – immer eine hat Notdienst |
| 9 | Drei Stufen nebeneinander mit Praxis, Mond, Blinklicht; Kwame springt von Stufe zu Stufe | Hausarzt · 116 117 · 112 |

Umsetzung wie Lernvideo 1: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort
aus `sprache.json`. Schwenk mit Bewegungsunschärfe und Tiefe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Erst zum Hausarzt.“ und die Kernbotschaft.

Abweichungen vom Briefing: keine inhaltlichen. Die Nummern werden im Sprechertext Ziffer für Ziffer ausgeschrieben
(„eins-eins-sechs eins-eins-sieben“, „eins-eins-zwei“), damit die Stimme sie so spricht, wie man sie wählt; im Bild stehen
die Ziffern. Amir tritt in Szene 3 kurz als Kollege auf (Bild zu „Frag Kollegen“).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Du fühlst dich krank. Aber wohin gehst du in Deutschland zuerst? Ins Krankenhaus? Nein, meistens nicht.

### Szene 2
Erzähler: Dein erster Weg ist der Hausarzt. Der Hausarzt kennt dich, behandelt die meisten Krankheiten und schickt dich, wenn nötig, zu einem Facharzt.

### Szene 3
Erzähler: Tipp: Such dir einen Hausarzt, wenn du gesund bist. Dann musst du nicht suchen, wenn es dir schlecht geht. Frag Kollegen oder such online. Manche Ärzte sprechen auch Englisch oder andere Sprachen.

### Szene 4
Erzähler: Einen Termin machst du per Telefon oder online. Wenn du akut krank bist, sag das am Telefon. Dann bekommst du oft noch am selben Tag einen Termin.

### Szene 5
Erzähler: Zum Termin bringst du deine Versichertenkarte mit. Und wenn du einen Termin nicht schaffst, sag ihn bitte rechtzeitig ab.

### Szene 6
Erzähler: Es ist Nacht oder Wochenende, und die Praxis ist zu? Dann ruf die eins-eins-sechs eins-eins-sieben an. Das ist der ärztliche Bereitschaftsdienst. Dort sagt man dir, wohin du gehen kannst.

### Szene 7
Erzähler: Bei Lebensgefahr, zum Beispiel starken Schmerzen in der Brust, schwerem Unfall oder Bewusstlosigkeit: sofort die eins-eins-zwei. Das ist der Notruf.

### Szene 8
Erzähler: Medikamente bekommst du in der Apotheke. Auch nachts hat immer eine Apotheke in deiner Nähe Notdienst. Das steht an jeder Apothekentür.

### Szene 9
Erzähler: Also: normal krank – Hausarzt. Nachts oder am Wochenende – eins-eins-sechs eins-eins-sieben. Lebensgefahr – eins-eins-zwei.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- eins-eins-sechs eins-eins-sieben → 116 117
- eins-eins-zwei → 112
