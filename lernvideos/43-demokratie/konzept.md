# Lernvideo 43 – Erklärvideo: Wie funktioniert die Demokratie?

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 43
- **Zielgruppe:** Azubis, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzählerin), animierte Szenen; Menschen nur als Porträts im Kreis aus vorhandenen Figuren
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** In einer Demokratie geht die Macht vom Volk aus, und die Macht ist geteilt, damit niemand sie missbrauchen kann.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/43-demokratie` (ElevenLabs, Eleven v4)

Streng neutral: keine Parteinamen, keine Logos, keine Parteifarben, keine echten Politiker, keine echten Gebäude mit
Hoheitszeichen. Parlament als stilisiertes Gebäude mit Kuppel, Sitzblöcke in Abstufungen der Markenfarbe, Schilder leer.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Viele Porträts tauchen verstreut auf und ordnen sich zur vereinfachten Form von Deutschland, der Umriss zeichnet sich; daneben teilt sich das Wort „Demokratie“ in „Demo“ → „Volk“ und „kratie“ → „herrscht“ (alle Porträts hüpfen bei „Volk“); dann ein großes Fragezeichen | – (Titel entfällt) |
| 2 | Fünf Menschen unten, Stimmzettel fliegen zu zwei Vertretern auf, die ein Papier mit Haken bekommen; vor der Deutschlandkarte wächst das Parlamentsgebäude mit Kuppel hoch („Bundestag“), ein Kalender zählt 1–4; Wahlkabine mit Kwame, im Stimmzettel wird ein Kreuz gesetzt, der Vorhang zieht sich zu, ein Auge wird durchgestrichen, der gefaltete Zettel fällt in die Urne | Wahl: frei · geheim · alle 4 Jahre |
| 3 | Plenarsaal im Halbkreis, Sitzpunkte ploppen in fünf neutralen Blöcken auf; ein Mehrheitsbalken füllt sich über 50 %; drei Blöcke werden „Regierung“, am Pult erscheint „Bundeskanzler/in“; die anderen werden „Opposition“; Lupe und Sprechblase „?!“ gehen zur Regierung | Regierung & Opposition |
| 4 | Ein Block „Macht“ zerfällt in drei Teile, daraus wachsen drei Säulen; § – Papier schreibt sich, Zahnrad dreht sich, Waage pendelt ein; Pfeile verbinden die Säulen, das Dach setzt auf | Gewaltenteilung: 3 Säulen |
| 5 | Drei Ebenen übereinander: Deutschland (Karte, Stecknadel Berlin, Parlament mit Kuppel) – Bayern (Karte leuchtet, Landtag) – Würzburg (Stecknadel, Rathaus, Stadtrat, Bürgermeister/in) | Bund · Land · Stadt |
| 6 | Zeitung fliegt auf, Überschrift tippt sich, Mikrofon sendet Wellen; „!“ auf der Zeitung; Sprechblase aus einem Porträt, Demonstration mit leeren Schildern zieht durchs Bild, ein Brief fliegt ins Rathaus | Freie Presse · Meinung · Demonstration |
| 7 | Karte „Bundestagswahl“: Zeilen „deutsche Staatsbürger“ (Pass) und „ab 18“ werden aktiv und bekommen Haken; Amir ohne Wahlkarte (gestrichelte Karte wird durchgestrichen); dann Hand hoch, vier Orte ploppen um ihn herum: Verein, Betriebsrat, Integrationsbeirat, Bürgerversammlung | Mitmachen geht auch ohne Wahlrecht |
| 8 | Neun Porträts stehen zusammen im Bogen, dahinter die Waage mit §; alle hüpfen bei „entscheiden gemeinsam“; bei „niemand steht über“ steigt einer auf, das § wackelt, er kehrt in die Reihe zurück und die Waage pendelt ein | Gemeinsam entscheiden |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann ein Schwenk zur nächsten Bühne; Szenenwechsel mit
Kamera-Atmer. Abspann: „Die Macht geht vom Volk aus.“ und „Und sie ist geteilt.“ (Kernbotschaft).

## Abweichungen vom Briefing

- Szene 1: Der Kurstitel „Wie funktioniert die Demokratie?“ wird nicht eingeblendet (Vorgabe 29.09.2026); die erste Bühne steht mittig.
- „Text im Bild“ mit Doppelpunkt als Titel + Unterzeile (z. B. „Wahl“ / „frei · geheim · alle 4 Jahre“, „Gewaltenteilung“ / „3 Säulen“).
- Szene 3: Bundeskanzler/in ohne Person, nur als Schild am Rednerpult (keine echten Politiker).
- Szene 7: „Figur … mit Hand hoch“ = Porträt mit erhobener Hand daneben (Figuren nur als Porträt im Kreis).
- Szene 8: „Alle Figuren“ als Porträts im Bogen.
- Szene 6: „Text im Bild“ in einer Zeile als Titel, die drei Teile erscheinen mit der Stimme.
- Deutschland- und Bayern-Umriss vereinfacht (wie Kurs 37); Würzburg und Berlin als Stecknadeln.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Deutschland ist eine Demokratie. Das Wort kommt aus dem Griechischen und heißt: Das Volk herrscht. Aber was bedeutet das im Alltag?

### Szene 2
Erzählerin: Die Menschen wählen Vertreter, die für sie Entscheidungen treffen. Für ganz Deutschland wählen sie alle vier Jahre den Bundestag. Die Wahl ist frei und geheim. Niemand darf sehen, wen du wählst.

### Szene 3
Erzählerin: Im Bundestag sitzen verschiedene Parteien. Die Parteien mit einer Mehrheit bilden die Regierung. Der Bundestag wählt den Bundeskanzler oder die Bundeskanzlerin. Die anderen Parteien sind die Opposition. Sie kontrollieren und kritisieren die Regierung.

### Szene 4
Erzählerin: Ganz wichtig ist die Gewaltenteilung. Die Macht ist auf drei Teile verteilt. Das Parlament macht die Gesetze. Die Regierung setzt sie um. Und die Gerichte kontrollieren, ob alles rechtmäßig ist. So kann niemand allein alle Macht haben.

### Szene 5
Erzählerin: Demokratie gibt es nicht nur in Berlin. Jedes Bundesland hat ein eigenes Parlament, in Bayern heißt es Landtag. Und jede Stadt hat einen Stadtrat und einen Bürgermeister oder eine Bürgermeisterin.

### Szene 6
Erzählerin: Zur Demokratie gehören auch freie Medien. Zeitungen und Sender dürfen über die Regierung berichten und sie kritisieren. Und jeder darf seine Meinung sagen, friedlich demonstrieren und sich beschweren.

### Szene 7
Erzählerin: Wählen dürfen bei der Bundestagswahl nur deutsche Staatsbürger ab achtzehn. Aber auch ohne Wahlrecht kannst du mitmachen: in Vereinen, im Betriebsrat, in Integrationsbeiräten deiner Stadt oder bei Bürgerversammlungen.

### Szene 8
Erzählerin: Demokratie heißt: Viele Menschen entscheiden gemeinsam, und niemand steht über dem Gesetz.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- ab achtzehn → ab 18
