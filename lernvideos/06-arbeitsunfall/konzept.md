# Lernvideo 6 – Erklärvideo: Arbeitsunfall & Wegeunfall

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 6
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Amir (Kfz-Mechatroniker) als Figur, dazu ein Kollege (Geselle) in Szene 5 und Sabine (Ausbilderin) in Szene 6 – beide sprechen nicht
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Bei der Arbeit und auf dem direkten Weg zur Arbeit bist du versichert. Melde jeden Unfall sofort.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/06-arbeitsunfall` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Werkstatt: Werkbank, Reifen; Amir schraubt, der Schraubenschlüssel rutscht ab und fällt auf seine Hand, Amir erschrickt und hält sich die Hand; Fragezeichen | Unfall bei der Arbeit – was jetzt? |
| 2 | Betrieb landet, Schutzschild „Berufsgenossenschaft“ (gesetzliche Unfallversicherung) legt sich über den Betrieb; Münze vom Betrieb fliegt in den Schild, Preisschild „0 €“ für Amir | Unfallversichert – kostenlos für dich |
| 3 | Karte mit Straßen: Wohnung – Betrieb – Berufsschule, Amir fährt als Marker die Linie, sie leuchtet; Schild wandert mit; Weg zurück | Arbeit · Berufsschule · direkter Weg |
| 4 | Dieselbe Karte: Linie macht einen Abzweig zum Supermarkt und zu Freunden, dieser Teil wird grau, Schild mit Fragezeichen | Umweg = meistens nicht versichert |
| 5 | Kollege holt den Erste-Hilfe-Kasten (neutrales Kreuz in Markenfarbe), Pflaster auf Amirs Hand; Handy, 112 wird getippt, Anruf pulsiert | 1. Erste Hilfe · schwer verletzt: 112 |
| 6 | Amir zeigt Sabine (Ausbilderin) die Hand, sie nickt; Buch „Verbandbuch“ klappt auf, Stift schreibt einen Eintrag, Haken „bei der Arbeit“ | 2. Bescheid geben · Verbandbuch |
| 7 | Arztpraxis mit Schild „Durchgangsarzt“, Amir mit Sprechblase „Das war ein Arbeitsunfall“; Betrieb zeigt mit Ortsmarke auf die Praxis | 3. Beim Arzt sagen: Arbeitsunfall |
| 8 | Amir mit Schutzbrille, Hand im Handschuh dreht sicher eine Schraube fest; Schritte 1–3 laufen ein, Schutzring | Helfen · Melden · Arzt informieren |

Umsetzung wie Lernvideo 1: Text im Bild links (Wörter steigen aus einer Maske, kein Marker), Bühne rechts; jede Animation hängt
an einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe und Tiefe, Kamera-Akzente auf Schlüsselwörtern.
Die drei Schritte tragen in Szene 5–7 eine Nummer (1, 2, 3), in Szene 8 laufen sie als Liste ein.
Verletzung nur angedeutet (Hand wird gehalten, Pflaster), kein Blut. Erste Hilfe mit neutralem Kreuz in Markenfarbe, kein Rotes Kreuz.
Abspann: „Melde jeden Unfall sofort.“ und die Kernbotschaft.

Änderungen am Briefing (freigegeben, siehe `../korrekturen.md`): Szene 2 – „Diese Versicherung ist die gesetzliche Unfallversicherung,
meistens die Berufsgenossenschaft.“ statt „Diese Versicherung heißt Berufsgenossenschaft.“ Der Schild trägt deshalb über „Berufsgenossenschaft“
klein „gesetzliche Unfallversicherung“. Szene 4: Supermarkt und Freunde als zwei Abzweige (beide Beispiele aus dem Sprechertext).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Ein Moment nicht aufgepasst, und schon ist es passiert: Du hast dich bei der Arbeit verletzt. Was jetzt?

### Szene 2
Erzähler: Keine Sorge: In Deutschland bist du bei der Arbeit automatisch unfallversichert. Diese Versicherung ist die gesetzliche Unfallversicherung, meistens die Berufsgenossenschaft. Dein Betrieb bezahlt sie, für dich ist sie kostenlos.

### Szene 3
Erzähler: Versichert bist du bei der Arbeit, in der Berufsschule und auf dem direkten Weg dorthin und zurück. Das heißt Wegeunfall.

### Szene 4
Erzähler: Achtung: Machst du einen Umweg, zum Beispiel zum Einkaufen oder zu Freunden, bist du auf diesem Umweg meistens nicht versichert.

### Szene 5
Erzähler: Nach einem Unfall gilt: Zuerst Erste Hilfe. Bei schweren Verletzungen sofort die 112 rufen.

### Szene 6
Erzähler: Dann sag sofort deinem Ausbilder oder Vorgesetzten Bescheid. Auch bei kleinen Verletzungen wird der Unfall ins Verbandbuch eingetragen. So ist später klar, dass er bei der Arbeit passiert ist.

### Szene 7
Erzähler: Musst du zum Arzt, sag sofort, dass es ein Arbeitsunfall oder Wegeunfall war. Oft musst du dann zu einem besonderen Arzt, dem Durchgangsarzt. Dein Betrieb sagt dir, wo einer ist.

### Szene 8
Erzähler: Also: Erste Hilfe, sofort Bescheid geben, beim Arzt sagen, dass es ein Arbeitsunfall war. Und am besten: gut aufpassen und Schutzkleidung tragen.
