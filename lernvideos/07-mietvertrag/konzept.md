# Lernvideo 7 – Podcast: Mietvertrag verstehen

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 7
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Mai (Azubi) und Jonas (Coach) im Gespräch; Porträts links (Jonas) und rechts (Mai),
  in der Mitte die Bühne mit den animierten Einblendungen
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Lies den Mietvertrag genau, bevor du unterschreibst: Miete, Nebenkosten, Kaution und Kündigungsfrist.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/07-mietvertrag` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Café-Tisch mit zwei Tassen (Dampf); Haus springt auf („Wohnung gefunden“), Mai schiebt den Mietvertrag über den Tisch, untere Hälfte hinter einem Schleier, Fragezeichen; Lupe liest mit, Stift wartet an der Unterschrift | – (Vertrag trägt die Aufschrift „Mietvertrag“) |
| 2 | Vertrag mit Zeilen „Kaltmiete 400 €“ / „Warmmiete 520 €“, Lupe; Baustein „Kaltmiete“ (Haus) + Baustein „Nebenkosten“ (Heizung, Wasser, Müll fallen hinein) rasten zusammen = großer Baustein „Warmmiete“ | Kaltmiete + Nebenkosten = Warmmiete |
| 3 | Waage „bezahlt“ / „verbraucht“: Münzen fallen in die Schalen, die Waage kippt (nachzahlen) und zurück (Geld zurück); daneben Steckdose, Kabel zieht sich zum eigenen Vertrag „Stromanbieter“ | Jährliche Abrechnung · Strom meist extra |
| 4 | Tresor, Chip „Sicherheit“; drei Münzstapel (Raten 1–3) wandern nacheinander hinein, Tür schließt; Umzugskarton, „alles in Ordnung“, Tür öffnet sich, die Stapel kommen zurück | Kaution: max. 3 Kaltmieten · kommt zurück |
| 5 | Karton zieht ein; Formular „Übergabeprotokoll“, Häkchen-Zeilen füllen sich; Kratzer zeichnet sich in die Wand, Zeile „Kratzer an der Wand“; Handy fotografiert (Blitz), Foto fliegt ins Protokoll; „kein Streit“ | Übergabeprotokoll + Fotos |
| 6 | Karton hüpft; Brief „Kündigung“ schreibt sich, drei Monatsblätter werden markiert, Stift unterschreibt; E-Mail wird rot durchgestrichen; Vertrag mit Klausel „am Anfang keine Kündigung“ (tippt sich, Schloss), Lupe liest mit | Kündigung: schriftlich · meist 3 Monate |
| 7 | Geldschein fliegt zur unbekannten Wohnung, rotes Stoppschild schlägt auf, Schein prallt zurück; „Wohnung gesehen“, „Vertrag in der Hand“; Wohnung färbt sich rot, „oft Betrug“. Zurück am Café-Tisch: Schleier weg, Haken an allen Zeilen, Stift bereit, Mai lächelt | Erst ansehen, dann zahlen |

Umsetzung: Gesprächsformat wie `kurse/04-rechte-pflichten` (Porträts links/rechts, Mund mit dem Pegel der Aufnahme,
der Sprecher wird größer und bekommt einen Rand, der Zuhörer nickt). Wer spricht, kommt exakt aus `sprache.json`
(`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer Maske; jede Animation hängt an
einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Erst lesen, dann unterschreiben.“ und die Kernbotschaft.

Änderungen am Briefing (freigegeben, siehe `../korrekturen.md`): Szene 6 – „Schriftlich heißt: ein Brief mit Unterschrift.
Eine E-Mail reicht nicht.“ Beträge im Sprechertext als Wörter ausgeschrieben (400 → vierhundert, 520 → fünfhundertzwanzig),
damit die Stimme sie sicher richtig liest. Szene 1: „Text im Bild“ „Mietvertrag verstehen“ ist der Kurstitel und entfällt
(Videos neutral, kein Titel); der Vertrag selbst trägt die Aufschrift „Mietvertrag“.

## Sprechertext

@modell eleven_v4
@stimme Mai: Mac2FKpSgaGIsaNRXt8A
@stimme Jonas: K8bIZwDsGMHreGKTIVHN

### Szene 1
Mai: Jonas, ich habe eine Wohnung gefunden! Hier ist der Mietvertrag. Aber ich verstehe nur die Hälfte.
Jonas: Super! Dann schauen wir ihn zusammen an, bevor du unterschreibst.

### Szene 2
Mai: Hier steht „Kaltmiete vierhundert Euro“ und „Warmmiete fünfhundertzwanzig Euro“. Was muss ich bezahlen?
Jonas: Die Warmmiete. Die Kaltmiete ist nur für die Wohnung. Dazu kommen die Nebenkosten, zum Beispiel Heizung, Wasser und Müll. Beides zusammen ist die Warmmiete.

### Szene 3
Jonas: Die Nebenkosten sind eine Vorauszahlung. Einmal im Jahr kommt eine Abrechnung. Wenn du mehr verbraucht hast, musst du nachzahlen. Wenn du weniger verbraucht hast, bekommst du Geld zurück.
Mai: Und Strom?
Jonas: Strom ist meistens nicht dabei. Dafür machst du einen eigenen Vertrag mit einem Stromanbieter.

### Szene 4
Mai: Und was ist die Kaution?
Jonas: Das ist eine Sicherheit für den Vermieter. Höchstens drei Kaltmieten. Du darfst sie in drei Raten zahlen. Wenn du ausziehst und alles in Ordnung ist, bekommst du sie zurück.

### Szene 5
Jonas: Beim Einzug macht ihr ein Übergabeprotokoll. Darin steht, was schon kaputt ist. Mach am besten auch Fotos. Dann gibt es beim Auszug keinen Streit.

### Szene 6
Mai: Und wenn ich wieder ausziehen will?
Jonas: Dann kündigst du schriftlich, meistens mit drei Monaten Frist. Schriftlich heißt: ein Brief mit Unterschrift. Eine E-Mail reicht nicht. Aber schau, ob im Vertrag steht, dass du am Anfang eine Zeit lang nicht kündigen darfst.

### Szene 7
Jonas: Und noch ein Tipp: Überweise nie Geld, bevor du die Wohnung gesehen und den Vertrag hast. Das ist oft Betrug.
Mai: Gut zu wissen. Jetzt verstehe ich meinen Vertrag!
