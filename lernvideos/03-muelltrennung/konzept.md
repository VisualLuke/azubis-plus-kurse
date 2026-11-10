# Lernvideo 3 – Erklärvideo: Mülltrennung

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 3
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzählerin), animierte Szenen; Priya als Figur, der Nachbar (Vermieter-Figur) im Fenster
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** In Deutschland kommt nicht alles in eine Tonne. Wer richtig trennt, hat keinen Ärger.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/03-muelltrennung` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Eine graue Tonne für alles wackelt und teilt sich in vier Tonnen; Priya mit vollem Müllbeutel, Fragezeichen; Vorhang im Fenster geht auf, der Nachbar schaut | Welche Tonne? |
| 2 | Gelbe Tonne, gelber Sack kommt dazu; Joghurtbecher, Chipstüte und Dose erscheinen und fliegen hinein; Becher wird ausgekippt („leer“), Wassertropfen wird durchgestrichen („nicht spülen“) | Gelb: Plastik & Metall |
| 3 | Blaue Tonne, Zeitung fliegt hinein; Karton wird flach gedrückt, flache Kartons gleiten durch den Schlitz, Füllstand steigt kaum | Blau: Papier & Karton |
| 4 | Braune Tonne, Gemüsereste, Bananenschale und Kaffeesatz fliegen hinein; Tüte mit „Bio“ prallt ab, rotes Kreuz; Müllkalender klappt auf | Braun: Bioabfall |
| 5 | Graue Tonne; Staubsaugerbeutel springt über gelb, blau, braun (jede Tonne wackelt „nein“) und landet in Grau; Teller fällt, zerbricht, Scherben fliegen hinein | Grau/Schwarz: Restmüll |
| 6 | Tonne mit Glas wird durchgestrichen; drei Glascontainer Weiß/Grün/Braun, Priya wirft Flaschen ein; Woche Mo–Sa leuchtet, Sonntag wird durchgestrichen, Schallwellen „zu laut“ | Glas: Container – nicht sonntags |
| 7 | Wasserflasche und Dose, Pfand-Zeichen wird herangezoomt; Pfandautomat, Flasche und Dose laufen hinein, Bon kommt heraus, Münze | Pfand = Geld zurück |
| 8 | Batterie, altes Handy, Wasserkocher prallen an der Hausmüll-Tonne ab; drei Orte (Supermarkt, Elektrohandel, Wertstoffhof), Sammelbox, alles fliegt hinein | Batterien & Elektro: extra |
| 9 | Tonnen tauschen ihre Farben („je nach Stadt“), Stadtschilder; Müllkalender wird an die Kühlschranktür geheftet, Termine erscheinen | Müllkalender checken |
| 10 | Priya sortiert zum Schluss richtig: Becher, Zeitung, Schale, Beutel, Flasche fliegen nacheinander in ihre Tonne; der Nachbar im Fenster lächelt und nickt, grüner Haken | Gelb · Blau · Braun · Grau · Glas |

Umsetzung wie Lernvideo 1: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts, jede Animation hängt an einem
Wort aus `sprache.json`, Schwenk mit Bewegungsunschärfe und Tiefe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Richtig trennen ist einfach.“ und die Kernbotschaft.

Farben: Tonnen- und Glasfarben sind Inhalt. Gelb = `warning`, Blau = `info`, Braun = `warning-text` (dunkles Ocker),
Grau/Schwarz = `n700`, Weißglas = `surface`/`n200`, Grünglas = `success`. Jede Tonne und jeder Container trägt zusätzlich
ein Schild (Verpackungen, Papier, Bio, Restmüll, Weiß, Grün, Braun), weil Braun und Grau nicht als eigene Token existieren.

Änderungen am Briefing (freigegeben, siehe `../korrekturen.md`):
- Szene 4: „Aber meistens keine Plastiktüten, auch keine ‚Bio‘-Tüten. Was bei dir gilt, steht im Müllkalender.“
- Szene 8: Abgabe „in großen Supermärkten, im Elektrohandel oder am Wertstoffhof“.
- Szene 8 des Briefings ist auf zwei Bühnen geteilt (8: Batterien & Elektro, 9: Müllkalender); Text im Bild entsprechend geteilt.
- Schlussbild: der Nachbar lächelt und nickt statt „Daumen hoch“ (Daumen-Geste wird nicht verwendet), dazu ein grüner Haken.
- Pfand-Zeichen neutral gezeichnet (Pfeilkreis mit „Pfand“), kein echtes Markenlogo; der Bon zeigt keinen Betrag (keiner im Briefing).
- Flaschen neutral (Wasser, Saft), kein Alkohol.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Eine Tonne für alles? Nicht in Deutschland. Hier wird der Müll getrennt. Und die Nachbarn achten darauf.

### Szene 2
Erzählerin: Die gelbe Tonne oder der gelbe Sack ist für Verpackungen aus Plastik und Metall. Zum Beispiel Joghurtbecher, Chipstüten und Konservendosen. Die Verpackungen sollen leer sein, aber nicht gespült.

### Szene 3
Erzählerin: Die blaue Tonne ist für Papier und Karton. Kartons bitte klein machen, damit mehr hineinpasst.

### Szene 4
Erzählerin: Die braune Tonne ist für Bioabfall: Gemüsereste, Obstschalen, Kaffeesatz. Aber meistens keine Plastiktüten, auch keine ‚Bio‘-Tüten. Was bei dir gilt, steht im Müllkalender.

### Szene 5
Erzählerin: In die graue oder schwarze Tonne kommt der Restmüll. Also alles, was nirgendwo anders hinpasst, zum Beispiel Staubsaugerbeutel oder kaputtes Geschirr.

### Szene 6
Erzählerin: Glas kommt nicht in die Tonne, sondern in den Glascontainer. Weißes, grünes und braunes Glas getrennt. Und bitte nur werktags tagsüber einwerfen, nicht sonntags, sonst ist es zu laut.

### Szene 7
Erzählerin: Viele Flaschen und Dosen haben Pfand. Das erkennst du an diesem Zeichen. Bring sie in den Supermarkt zurück und du bekommst Geld.

### Szene 8
Erzählerin: Batterien, alte Handys und Elektrogeräte gehören nicht in den Hausmüll. Die kannst du in großen Supermärkten, im Elektrohandel oder am Wertstoffhof abgeben.

### Szene 9
Erzählerin: Welche Farbe welche Tonne hat, kann je nach Stadt etwas anders sein. Schau am besten in den Müllkalender deiner Stadt.

### Szene 10
Erzählerin: Richtig trennen ist einfach, wenn man es einmal weiß. Und die Nachbarn freuen sich.
