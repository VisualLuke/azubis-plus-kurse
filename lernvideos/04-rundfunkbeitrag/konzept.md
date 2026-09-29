# Lernvideo 4 – Erklärvideo: Rundfunkbeitrag

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 4
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Priya als Figur, in der WG mit Kwame und Yusuf
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Der Rundfunkbeitrag ist Pflicht, pro Wohnung einmal. Den Brief nie ignorieren.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/04-rundfunkbeitrag` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Umzugskarton plumpst herunter, Briefkasten ruckelt; Brief „Beitragsservice“ springt heraus, fliegt zu Priya, Fragezeichen | Rundfunkbeitrag – was ist das? |
| 2 | Haus zahlt eine Münze an den Sendemast (Funkwellen); aus dem Sender kommen Fernseher (Bild flimmert), Radio (Klangwellen), Laptop (spielt ab); Pfeile zeichnen sich zum Haus; Stempel „Pflicht“ auf das Haus | Pflicht für jede Wohnung |
| 3 | Hausumriss zeichnet sich, Wohnzimmer mit Sofa, Pflanze, Lampe, leere Wand; Fernseher nur als Umriss, rotes Kreuz, verschwindet; trotzdem Haken am Haus; Münze fällt, dreht sich, Chip „rund 18 € im Monat“ | Auch ohne Fernseher |
| 4 | WG-Haus mit drei Porträts (Priya, Kwame, Yusuf); einer zahlt (Münze fliegt zum Beitragsservice), die anderen halten Zettel „Nr. 123 456 789“ hoch; Schein teilt sich in drei Teile | WG: nur einer zahlt – ihr teilt |
| 5 | Geldschein (BAB) kommt bei Priya an, Chips „BAB“ und „nicht bei den Eltern“; Laptop mit Formular „Befreiung“, die Chips fliegen hinein und werden angekreuzt, Finger tippt „Antrag senden“; Stempel „genehmigt“ | Mit BAB: Befreiung möglich |
| 6 | Brief landet und meldet sich, Kalenderblätter fallen; Briefe „Anmeldung“, „Mahnung“, „Mahnung + Gebühr“ fallen auf den Stapel, das €-Zeichen darauf wird größer, Anzeige steigt bis Rot, Stapel wackelt | Nicht ignorieren – sonst wird es teurer |
| 7 | Handy: „Anmelden“, Name und Nummer des Mitbewohners tippen sich, Schalter „Lastschrift“ springt um, „Fertig“; Konto: Abbuchungen laufen nacheinander mit Haken ein; Priya lehnt sich zurück | Anmelden · Lastschrift · fertig |
| 8 | Karton hüpft vom alten zum neuen Haus, Flugzeug fliegt davon; Formular „Ummelden / Abmelden“ wird angekreuzt; sonst: Beitrag an beiden Häusern, „2×“ | Umzug? Ummelden! |

Umsetzung wie Lernvideo 1: Text im Bild links (Wörter steigen aus einer Maske, kein Marker), Bühne rechts; jede Animation hängt
an einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe und Tiefe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Pro Wohnung einmal.“ und die Kernbotschaft.

Änderungen am Briefing: keine (in `../korrekturen.md` steht für Kurs 4 nichts). Sprechertext wörtlich. Beispiel-Beitragsnummer
im Bild ist ein neutraler Platzhalter („123 456 789“).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Du bist gerade eingezogen, und schon kommt ein Brief: „Rundfunkbeitrag“. Was ist das denn?

### Szene 2
Erzähler: Mit dem Rundfunkbeitrag werden öffentliche Sender in Deutschland bezahlt, also Fernsehen, Radio und ihre Internetangebote. Jede Wohnung in Deutschland muss ihn bezahlen.

### Szene 3
Erzähler: Auch wenn du keinen Fernseher hast. Es geht nicht um das Gerät, sondern um die Wohnung. Der Beitrag liegt bei rund 18 Euro im Monat.

### Szene 4
Erzähler: Gute Nachricht für WGs: Pro Wohnung zahlt nur eine Person. Wohnst du mit anderen zusammen, zahlt einer. Die anderen melden nur dessen Beitragsnummer. Das Geld könnt ihr euch dann teilen.

### Szene 5
Erzähler: Bekommst du Berufsausbildungsbeihilfe, also BAB, und wohnst nicht bei deinen Eltern? Dann kannst du dich befreien lassen. Den Antrag stellst du online beim Beitragsservice.

### Szene 6
Erzähler: Ganz wichtig: Ignoriere den Brief nicht. Wenn du nicht antwortest, meldet dich der Beitragsservice selbst an. Dann kommen Mahnungen und Gebühren dazu, und es wird immer teurer.

### Szene 7
Erzähler: Am einfachsten: Anmelden oder die Beitragsnummer deines Mitbewohners angeben, und dann per Lastschrift zahlen. Dann musst du nie wieder daran denken.

### Szene 8
Erzähler: Und wenn du umziehst oder Deutschland verlässt, melde dich um oder ab. Sonst zahlst du vielleicht doppelt.
