# Lernvideo 21 – Der schlechte Tag: Mais Post

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 21
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Der schlechte Tag – Erzähler und Mai (Porträt im Kreis, Mund nur in den eigenen Sätzen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Name an den Briefkasten, Post regelmäßig öffnen und wichtige Briefe sofort bearbeiten.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/21-mais-post` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Abend (Bühne dunkel-violett): Mai kommt mit kleinen Schritten herein, die Wanduhr läuft von morgens bis abends, das Fenster wird Nacht (Mond), Mai wird müde (Augen halb zu, sinkt ein); der Briefkasten ohne Namen quillt über, Briefe purzeln heraus; „Werbung, Werbung“ – zwei Prospekte fliegen aus dem Kasten, Mai rafft alles zusammen und wirft es ungeöffnet auf den Stuhl | Mais Post |
| 2 | Kalender: drei Wochenreihen füllen sich Tag für Tag; Brief um Brief fällt auf den Stuhl, der Stapel wird riesig; der oberste Brief fliegt nach vorn, der Umschlag geht auf, „Mahnung“ schlägt rot auf, „+ Gebühr“ fällt aufs Blatt; Mai schreckt hoch („Was?“) und schüttelt sich | Mahnung + Gebühr |
| 3 | Terminbrief (Ausländerbehörde, Platzhalter-Datum): der rote Strich zieht durch das Datum, rotes Kreuz; Briefkasten ohne Namen, ein Brief kommt angeflogen, prallt vor dem Schlitz zurück, das leere Namensschild blinkt rot, Fragezeichen, der Brief fliegt wieder weg | Termin verpasst · Brief verloren |
| 4 | „Stopp!“: Pause-Zeichen schlägt auf, das Bild friert ein (entsättigt, Schleier), Kamera-Akzent; „Zurückspulen!“: Rückspul-Zeichen, die Uhr dreht rückwärts, Streifen in Token-Farben rauschen, die Kamera zieht auf und fährt im Zeitraffer über die Szenen zurück an den Anfang (Briefberg schrumpft, der Haufen fliegt zurück in den Kasten, Mai geht rückwärts hinaus); breite Bänder wischen zum neuen Tag | ⏪ Nochmal – aber richtig |
| 5 | Helle Bühne, Kalenderblatt „Tag 1“, Umzugskarton landet; Mai klebt ihr Namensschild „Mai“ auf den Briefkasten und an die Klingel, lächelt | 1. Name an Briefkasten & Klingel |
| 6 | Wochenleiste Mo–Fr, Tag für Tag ein Haken; Mai schaut in den Kasten, Prospekt und Brief kommen heraus; die Werbung fliegt in die blaue Altpapier-Tonne (Deckel auf und zu); der wichtige Brief geht auf, drei Rahmen mit „Wer?“, „Bis wann?“, „Was tun?“ | 2. Täglich schauen · 3. Wichtiges sofort öffnen |
| 7 | Handy: der Terminbrief fliegt hinein, der Termin steht im Kalender (✓); Azubis Plus Helper App, Bereich „Dokumente“: der Brief fliegt in den Ordner „Wichtig“ (2 → 3, „✓ Gespeichert“); Mai versteht etwas nicht (Fragezeichen fliegt ins Handy), Chat mit Jonas: Nachricht tippt sich, während Mai spricht, Foto vom Brief, ✓✓ | 4. Termine eintragen · 5. Ordner · 6. Fragen |
| 8 | Aufgeräumt: Briefkasten mit Namen, Ordner „Wichtig“ im Regal, Mai entspannt am Tisch mit dampfendem Tee, offener Brief; drei grüne Haken auf „Name dran“, „reinschauen“, „öffnen“ | Name dran · Reinschauen · Öffnen |

Abspann: „Keine bösen Überraschungen.“ und die Kernbotschaft.

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske, Nummern grün, Folgen rot), Bühne rechts; jede Animation hängt
an einem Wort aus `sprache.json`. Mai als Porträt im Kreis, Mund nur in ihren Sätzen (Sprecher aus `sprache.json`).
Kursspezifische Teile in `teile/`: `briefkasten-wand`, `stuhl`, `tonne-blau`, `tonne-deckel`, `klingel`, `ordner`, `flyer`,
`umschlag-*` (Kopie aus Kurs 1).

## Layout „Der schlechte Tag“

1. **Schlechter Tag:** Bühne rechts (900 × 720) in Abend-Violett (Verlauf b600 → b700), Gegenstände darauf mit `auf-brand`
   aufgehellt, Text im Bild links (Wörter zu den Folgen rot). Folgen sind sichtbar (Mahnung, durchgestrichener Termin).
2. **Zurückspulen:** Ebene `#spul` über der Kamera. „Stopp“: Pause-Zeichen, Welt entsättigt (Filter auf `#kamera`) unter
   einem Schleier (b700, 58 %), Kamera-Akzent. „Zurückspulen“: Rückspul-Zeichen (Dreiecke laufen nach links), Uhr dreht
   rückwärts, waagrechte Streifen (b200–b500, weiß) rauschen, die Kamera zieht auf und wackelt, die Welt fährt in 1,9 s
   zurück zum Anfang, Dinge laufen rückwärts; dann schieben sich drei schräge Bänder (b300/b500/b700) über das Bild, darunter
   springt die Welt zum neuen Tag. Titel „⏪ Nochmal – aber richtig“ (Symbol als SVG, kein Emoji) mittig unten.
3. **Derselbe Tag richtig:** helle Bühne (b50 → b100) mit denselben Gegenständen, Text im Bild nummeriert (Nummer grün).
4. **Schluss:** Drei grüne Haken, Abspann mit der Kernbotschaft.

## Abweichungen vom Briefing

- „Briefträger vor dem Briefkasten“ (Szene 3): Der Briefträger ist keine unserer Figuren – er zeigt sich über den Brief,
  der vor dem namenlosen Briefkasten zurückprallt, das rot blinkende leere Namensschild, ein Fragezeichen und den Rückflug.
- „Mai kommt müde nach Hause“ (Szene 1): Mai kommt als Porträt herein; „müde“ über halb geschlossene Augen und Einsinken.
- Jonas (Szene 7) erscheint nur als Chat auf dem Handy, nicht als Figur; die Nachricht zeigt Platzhalter-Zeilen (kein Untertitel).
- „Ordner mit Aufschrift Wichtig“ (Szene 7): als Ordner „Wichtig“ in der Azubis Plus Helper App (Bereich „Dokumente“),
  wie für Ablage vorgegeben; in Szene 8 steht zusätzlich ein Ordner „Wichtig“ im Regal.
- „Drei Wochen später“ (Szene 2) als Kalender mit drei Wochenreihen statt abfliegender Kalenderblätter.
- Datum auf dem Terminbrief ist ein neutraler Platzhalter („Mo · 9:00 Uhr“; kein konkretes Datum im Briefing).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Mai: Mac2FKpSgaGIsaNRXt8A

### Szene 1
Erzähler: Das ist Mai. Sie arbeitet viel und ist abends müde. Ihr Briefkasten? Den öffnet sie nur selten.
Mai: Werbung, Werbung … das mache ich später.

### Szene 2
Erzähler: Drei Wochen später. Der Stapel ist riesig. Mai öffnet endlich einen Brief. Eine Mahnung vom Rundfunkbeitrag, mit Gebühr.
Mai: Was? Davon wusste ich nichts!

### Szene 3
Erzähler: Darunter: ein Termin bei der Ausländerbehörde. Der war gestern. Und ein Brief ist gar nicht angekommen, weil auf ihrem Briefkasten kein Name steht.

### Szene 4
(Pause 0.4)
Erzähler: Stopp! Das geht besser. Zurückspulen!

### Szene 5
(Pause 2)
Erzähler: Tag eins in der neuen Wohnung: Mai klebt ihren Namen auf den Briefkasten und an die Klingel.

### Szene 6
Erzähler: Jeden Abend schaut sie kurz in den Briefkasten. Werbung kommt direkt ins Altpapier. Wichtige Briefe öffnet sie sofort und sucht: Wer schreibt? Bis wann? Was soll ich tun?

### Szene 7
Erzähler: Termine trägt sie gleich ins Handy ein. Wichtige Briefe kommen in einen Ordner. Und wenn sie etwas nicht versteht, fragt sie nach.
Mai: Jonas, kannst du dir diesen Brief mal anschauen?

### Szene 8
Erzähler: Also: Name dran, täglich reinschauen, wichtige Briefe sofort öffnen. Dann gibt es keine bösen Überraschungen.
