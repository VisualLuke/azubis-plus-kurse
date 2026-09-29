# Lernvideo 33 – Podcast: Deine erste Woche in der Berufsschule

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 33
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Priya (Azubi, Köchin) und Jonas (Coach) im Gespräch; Porträts links (Jonas) und rechts (Priya),
  in der Mitte die Bühne mit den animierten Einblendungen
- **Setting:** Bushaltestelle vor der Berufsschule, Priya mit Rucksack und Stundenplan
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Die Berufsschule ist die Hälfte deiner Ausbildung. Wer früh Hilfe holt, kommt gut mit.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/33-erste-woche-berufsschule` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Bushaltestelle vor der Berufsschule: Schulgebäude schiebt sich herein, Haltestellenschild „H“ schlägt auf, Bank mit Priyas Rucksack; Jonas (Porträt) kommt über den Gehweg dazu, Schild „Berufsschule“ springt aufs Gebäude; bei „Spannend“ hält Priya den Stundenplan hoch, bei „viel“ füllt er sich Block für Block, bei „andere Fächer“ Fragezeichen | – (Titel entfällt) |
| 2 | Stundenplan Mo–Fr: Blöcke „Lernfeld 1“, „Lernfeld 2“ fliegen ins Raster und pulsieren; Themen „Arbeiten in der Küche“ / „Gäste beraten“ kommen aus den Blöcken und tippen sich; „Deutsch“, „Sozialkunde“, „Religion“ fallen hinein, „Religion“ dreht sich bei „oder“ zu „Ethik“; bei „gehören auch dazu“ Welle über alle Blöcke, Haken | Lernfelder + allgemeine Fächer |
| 3 | Fragezeichen, bei „Ja“ Haken; Skala 1 (grün) bis 6 (rot) springt auf, „sehr gut“ bei der 1, „ungenügend“ bei der 6; Skala rückt nach oben, Priya läuft den Zeitstrahl „Schuljahr“ ab, Zeugnis fliegt ein, Noten springen auf, Stempel schlägt auf; Kopie fliegt zum Betrieb, Haken | Note 1 = sehr gut · Note 6 = ungenügend |
| 4 | Klassenzimmer: Tafel füllt sich immer schneller, Sprechblase rast (Tempo-Linien); Fachwörter „blanchieren“, „die Garstufe“ kommen aus der Blase und fallen schwer herunter; Fragezeichen über den Plätzen (Priya, Kwame, Mai als Porträts); Priya springt in die erste Reihe; Vokabelheft öffnet sich, die Wörter fliegen hinein, Zeilen schreiben sich; Fragezeichen fliegt zur Tafel, Haken erscheint | Vorne sitzen · Vokabelheft · nachfragen |
| 5 | Chip „kostenlos“; Gebäude „Agentur für Arbeit“ schiebt sich herein; Schild „Nachhilfe für Azubis“ schwingt herein, „kostenlos“ fliegt hinein und rastet ein; „Assistierte Ausbildung“ tippt sich; Berufsschule mit Chip „Deutschkurs“; Frage fliegt zur Schule (Klassenlehrer), Haken; bei „Kostenlos?“ schwingt das Schild, „kostenlos“ leuchtet | Kostenlose Nachhilfe: Assistierte Ausbildung |
| 6 | Berufsschule, Stempel „Pflicht“ schlägt auf; Thermometer zittert, Handy schickt zwei Nachrichten zu Schule und Betrieb (Haken); Priya und zwei Mitschüler (Kwame, Mai als Porträts) mit Handys tauschen Nummern (Karten fliegen über Kreuz); Handy mit Gruppenchat „Klasse K1“, die drei ziehen als Absender ein, Nachrichten poppen auf | Pflicht · Kontakte in der Klasse |
| 7 | Zurück an der Haltestelle: Vokabelheft, Fragezeichen, Agentur (Nachhilfe), Freunde springen bei jedem Wort auf; bei „Perfekt“ wandern sie in Priyas Rucksack; der Bus kommt und hält mit Federn, Türen auf, Jonas und Priya steigen ein, Anzeige springt von „Woche 1“ auf „Woche 2“, Priya lacht, der Bus fährt mit beiden ab | Fragen · Lernen · Hilfe holen |

Umsetzung: Gesprächsformat wie `lernvideos/09-pruefungen` und `kurse/04-rechte-pflichten` (Porträts links/rechts, Mund mit
dem Pegel der Aufnahme, der Sprecher wird größer und bekommt einen Rand, der Zuhörer nickt). Wer spricht, kommt exakt aus
`sprache.json` (`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer Maske; jede
Animation hängt an einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Wer früh Hilfe holt, kommt gut mit.“ und „Die Berufsschule ist ein fester Teil deiner Ausbildung.“

Änderungen am Briefing: Szene 1 – „Text im Bild“ „Die erste Woche in der Berufsschule“ ist der Kurstitel und entfällt
(Vorgabe 29.09.2026, kein Kurstitel im Video); die erste Bühne steht in der Bildmitte. Im Sprechertext „die 1“ / „die 6“ als
Notennamen „die Eins“ / „die Sechs“ ausgeschrieben, damit die Stimme sie sicher richtig liest. Anführungszeichen ‚…‘ als „…“.
„Religion oder Ethik“: der Block zeigt erst „Religion“ und dreht sich bei „oder“ zu „Ethik“ (Bild laut Briefing: „Ethik“).
Beispiel-Fachwörter an der Tafel („blanchieren“, „die Garstufe“) aus Priyas Beruf (Köchin), wie in Lernvideo 9. Mitschüler (Szenen 4 und 6) als Porträts von Kwame und Mai (Figuren sonst nur Priya und Jonas). Bus-Anzeige „Woche 1“ → „Woche 2“ bebildert „die zweite Woche“. Zeugnisnoten sind Beispiele.
Abspann: „Hälfte“ aus der Kernbotschaft nicht als Zahl gezeigt (Berufsschule meist ein bis zwei Tage pro Woche),
stattdessen „ein fester Teil deiner Ausbildung“.

## Sprechertext

@modell eleven_v4
@stimme Priya: Mac2FKpSgaGIsaNRXt8A
@stimme Jonas: K8bIZwDsGMHreGKTIVHN

### Szene 1
Jonas: Priya! Wie war deine erste Woche in der Berufsschule?
Priya: Spannend. Aber auch viel. Ich habe ganz andere Fächer, als ich dachte.

### Szene 2
Jonas: Die Fächer heißen oft Lernfelder. In jedem Lernfeld lernst du ein Thema aus deinem Beruf, zum Beispiel „Arbeiten in der Küche“ oder „Gäste beraten“.
Priya: Und dann habe ich noch Deutsch, Sozialkunde und Religion oder Ethik.
Jonas: Genau, die gehören auch dazu.

### Szene 3
Priya: Bekomme ich auch Noten?
Jonas: Ja. In Deutschland ist die Eins die beste Note und die Sechs die schlechteste. Am Ende des Schuljahres bekommst du ein Zeugnis. Das sieht auch dein Betrieb.

### Szene 4
Priya: Die Lehrer sprechen manchmal sehr schnell. Und die Fachwörter sind schwer.
Jonas: Das geht vielen so. Setz dich nach vorne, schreib neue Wörter in ein eigenes Heft und frag nach, wenn du etwas nicht verstehst.

### Szene 5
Jonas: Und es gibt kostenlose Hilfe. Die Agentur für Arbeit bietet Nachhilfe für Azubis an, das heißt „Assistierte Ausbildung“. Und manche Berufsschulen haben extra Deutschkurse. Frag deinen Klassenlehrer danach.
Priya: Kostenlos? Das wusste ich nicht.

### Szene 6
Jonas: Und denk dran: Die Berufsschule ist Pflicht. Wenn du krank bist, informierst du Schule und Betrieb. Und such dir zwei, drei Leute aus der Klasse, mit denen du Nummern tauschst. Dann verpasst du nichts.

### Szene 7
Priya: Also: Vokabelheft, nachfragen, Nachhilfe nutzen und Freunde in der Klasse finden.
Jonas: Perfekt. Dann wird die zweite Woche schon leichter!
