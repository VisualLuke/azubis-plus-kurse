# Lernvideo 11 – Podcast: Nach der Ausbildung

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 11
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Amir (Azubi, Kfz-Mechatroniker) und Sabine (Ausbilderin) im Gespräch in der Werkstatt, Feierabend;
  Porträts links (Sabine) und rechts (Amir), in der Mitte die Bühne mit den animierten Einblendungen
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Plane früh, was nach der Ausbildung kommt: Job, Aufenthalt und Weiterbildung.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/11-nach-der-ausbildung` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Werkstatt, Feierabend: Werkbank mit Reifen und Schraubenschlüssel, die Lampe schwingt; Kalender-Streifen mit zwölf Monaten, ein Marker läuft bis zur Ziel-Flagge, dort ploppt ein „?“ auf; „jetzt“ leuchtet am Anfang | Nach der Ausbildung – und dann? |
| 2 | Betrieb landet; Zeitstrahl bis zum Ende der Ausbildung, der Abschnitt „6 Monate vorher“ zieht sich auf, der Marker springt hinein; Amir und Sabine (kleine Porträts) rücken zusammen, dazwischen erscheint ein neuer Vertrag, der Stift unterschreibt; über beiden ein Haken | Übernahme: früh ansprechen |
| 3 | Aufenthaltstitel-Karte fliegt herein, Feld „Zweck: Ausbildung“; der Arbeitsvertrag „Fachkraft“ gleitet dazu, die Karte dreht sich um und zeigt „Fachkraft“; Antrag fliegt zur Ausländerbehörde, bevor die Uhr „Ablauf“ abgelaufen ist | Mit Job: Aufenthalt als Fachkraft |
| 4 | Zeugnis mit Haken; Handy mit Jobanzeigen, die Lupe fährt darüber; Ring zählt „bis zu 18 Monate“ hoch; Ausländerbehörde mit „?“ → Haken | Ohne Job: Zeit zur Jobsuche möglich |
| 5 | Kalender: Prüfungstag mit Haken, am Tag danach arbeitet Amir weiter (Schraubenschlüssel dreht sich); Vertrag „unbefristet“ erscheint, dann wird ein schriftlicher Vertrag unterschrieben (grüner Haken); zuletzt die Karte „Fachkraft“ vor dem Weiterarbeiten | Besser: schriftlicher Vertrag |
| 6 | Treppe mit drei Stufen „Geselle – Meister/Techniker – eigener Betrieb?“, Amir steigt Stufe für Stufe; Chips Meister · Techniker · Fachwirt; Münzen fallen auf einen Stapel „Aufstiegs-BAföG“; Jahreszähler | Weiterbildung: Meister · Techniker · Fachwirt |
| 7 | Werkstatt: Zettel mit drei Punkten (Übernahme · Aufenthalt · Zukunft), der Stift hakt ab; Heft „Prüfung“ mit Haken; beide lachen, die Lampe geht aus – Feierabend | Früh planen. Dann läuft's. |

Umsetzung: Gesprächsformat wie `kurse/04-rechte-pflichten` (Porträts links/rechts, Mund mit dem Pegel der Aufnahme,
der Sprecher wird größer und bekommt einen Rand, der Zuhörer nickt). Wer spricht, kommt exakt aus `sprache.json`
(`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer Maske; jede Animation hängt an
einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf Schlüsselwörtern.
Szene 7: Das Licht geht aus, dann Abspann „Früh planen. Dann läuft's.“ mit der Kernbotschaft.

Abweichungen vom Briefing (nach `../korrekturen.md`):
- Szene 4: Aufenthaltserlaubnis zur Jobsuche „bis zu achtzehn Monate“ statt zwölf, im Bild „bis zu 18 Monate“.
- Szene 5: Ergänzt „Mit Visum brauchst du aber vorher den neuen Titel.“ (als letzter Satz, nach dem schriftlichen Vertrag).
- Szene 2: Statt eines Handschlags (keine Hände/Menschen außer den Porträts) rücken die Porträts von Amir und Sabine zusammen, dazwischen wird der neue Vertrag unterschrieben.
- Szene 7: „(lacht)“ ist keine gesprochene Zeile; Amir und Sabine lachen im Bild (froher Mund, Hüpfer). „Früh planen. Dann läuft's.“ steht im Abspann, nachdem das Licht ausgeht.

## Sprechertext

@modell eleven_v4
@stimme Amir: hfqsl1OMbiWsgPpht3el
@stimme Sabine: PcHppp9ymY0Wa5ee6hOQ

### Szene 1
Amir: Sabine, in einem Jahr bin ich fertig. Was passiert dann eigentlich mit mir?
Sabine: Gute Frage, und gut, dass du sie jetzt schon stellst.

### Szene 2
Sabine: Viele Betriebe übernehmen ihre Azubis. Sprich früh mit uns darüber, ungefähr sechs Monate vor dem Ende. Dann können beide Seiten planen.

### Szene 3
Amir: Und mein Visum? Das gilt doch für die Ausbildung.
Sabine: Genau. Wenn du einen Job als Fachkraft hast, kannst du eine neue Aufenthaltserlaubnis zum Arbeiten beantragen. Stell den Antrag, bevor dein jetziger Titel abläuft.

### Szene 4
Amir: Und wenn ich nicht übernommen werde?
Sabine: Dann kannst du nach dem erfolgreichen Abschluss meistens eine Aufenthaltserlaubnis bekommen, um in Deutschland einen Job zu suchen. Die gilt bis zu achtzehn Monate. Frag rechtzeitig bei der Ausländerbehörde nach.

### Szene 5
Sabine: Übrigens: Wenn du nach der Ausbildung einfach weiterarbeitest, ohne dass etwas vereinbart ist, hast du automatisch einen unbefristeten Arbeitsvertrag. Aber sauberer ist ein schriftlicher Vertrag. Mit Visum brauchst du aber vorher den neuen Titel.

### Szene 6
Amir: Und kann ich später noch mehr lernen?
Sabine: Auf jeden Fall. Meister, Techniker, Fachwirt. Dafür gibt es sogar staatliche Förderung, das Aufstiegs-BAföG. Viele fangen nach ein paar Jahren Berufserfahrung damit an.

### Szene 7
Amir: Also: früh über Übernahme reden, Aufenthalt rechtzeitig klären und an die Zukunft denken.
Sabine: Ganz genau. Aber zuerst die Prüfung bestehen!
Amir: Versprochen.
