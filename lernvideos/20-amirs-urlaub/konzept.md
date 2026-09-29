# Lernvideo 20 – Der schlechte Tag: Amirs Urlaub

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 20
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Der schlechte Tag – Erzählerin, Amir und Sabine (Porträts im Kreis, Mund nur in den eigenen Sätzen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Erst Urlaub beantragen und genehmigen lassen, dann Flug buchen, und zwar in den Schulferien.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/20-amirs-urlaub` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Trübe Bühne: Amir (Porträt) hüpft herein, ein Bild von Zuhause (Haus mit Herz) schwebt dazu; das Handy fährt herein und summt, „Nur heute!“ ploppt, ein Flugzeug fliegt auf einem Bogen in die Anzeige, „Marokko“ tippt sich, das %-Zeichen wackelt, Amir freut sich; auf „sofort“ Klick auf „Buchen“ (Welle), das Ticket springt heraus | Amirs Urlaub |
| 2 | Werkstatt: Urlaubsplan an der Wand, Werkbank; Amir hüpft herein, Sabine ploppt auf „Ausbilderin“. „In drei Wochen“: ein Flugzeug-Zeiger hüpft über die Wochen, „zwei Wochen“: Amirs gestrichelter Balken wächst; Sabine: die Balken der zwei Kollegen pochen, rote Wellen, Amirs Balken wird rot und wackelt; die Schule fällt in die zweite Woche, „!“ | Urlaub nicht abgesprochen |
| 3 | Karte „Urlaub“, roter Stempel „Nicht genehmigt“ schlägt auf; Ticket fährt zum Zurück-Knopf, prallt ab (✕), wird zerknüllt; Geldschein flattert davon; Schule mit Warnzeichen; Amir sitzt geknickt auf einer Kiste | Geld weg · Stress · Ärger |
| 4 | „Stopp!“: Standbild (Blitz, Tönung, Band-Zittern, Rauschen), roter Stopp-Knopf. „Zurückspulen!“: Knopf wird zum Rückspul-Zeichen, große Uhr dreht rückwärts, Streifen und Bänder aus Token-Farben, Kamera-Zoom; die ganze Welt läuft schnell rückwärts (Szene 3 → 2 → 1) bis zu Amir vor dem Angebot; Wetter-Plakette dreht sich von Wolke zu Sonne | ⏪ Nochmal – aber richtig |
| 5 | Dieselbe Bühne, jetzt hell: das Angebot pocht, auf „bucht“ ploppt ein Pause-Zeichen auf „Buchen“; Ferienkalender der Berufsschule, die Lupe fährt die Reihen ab, „Sommerferien“ leuchtet grün, Haken; Werkstatt: Amir geht zu Sabine, Sommerferien-Streifen im Urlaubsplan, gestrichelte Anfrage für zwei Wochen, „?“ | 1. Schulferien checken · 2. Fragen |
| 6 | Sabine gibt Amir ein kleines Formular, „August“ pocht, die Anfrage wird grün; Formular „Urlaubsantrag“ füllt sich (Stift, Unterschrift), zwei Kalenderblätter fliegen ab (+1, +2), grüner Stempel „Genehmigt“, großer Haken, Welle | 3. Antrag · 4. Genehmigung |
| 7 | Stress-Wolke und „!“ hängen über Amir; Klick auf „Buchen“ (Knopf wird grün), Ticket „Marokko · August“ springt heraus; Wolke und „!“ lösen sich auf; Anruf „Mama“ auf dem Handy, Wellen, Amir strahlt | 5. Jetzt buchen |
| 8 | Fünf Kacheln (Schule, Frage, Antrag, Stempel, Flugzeug) mit Nummern, je ein grüner Haken auf dem Wort; das Flugzeug rollt über die Piste und hebt auf „buchen“ ab, gestrichelte Flugbahn | Erst genehmigt, dann gebucht |

Abspann: „Erst genehmigt, dann gebucht.“ und die Kernbotschaft.

## Layout „Der schlechte Tag“ (auch für Kurs 21–22)

Stil und Helfer liegen in `film.vorlage.html` (Abschnitte „Format ‚Der schlechte Tag‘“ und „Zurückspulen“) und können übernommen werden.

1. **Tagesleiste** oben links (ohne Text): Wetter-Plakette (Wolke = schlechter Tag, Sonne = richtig), kleine Uhr, Spur mit
   Abspielkopf. Im schlechten Tag läuft der Kopf mit (Spur violett, Kopf rot), bei jedem Fehler ploppt eine rote ✕-Marke.
   Im richtigen Tag stehen leere Schritt-Marken auf der Spur, jede wird auf ihrem Wort grün (✓), der Kopf springt mit.
2. **Schlechter Tag:** Bühnen trüb (Verlauf b100 → b200), Text im Bild mit roten Schlüsselwörtern. Jede Szene zeigt Fehler
   und Folge als Handlung (rote Marken, Stempel, Wackeln).
3. **Stopp und Zurückspulen:** Die Welt läuft in einer eigenen „Welt-Zeit“ `ZT(t)`. Auf „Stopp!“ steht sie (Standbild: Blitz,
   Tönung b700, leichtes Band-Zittern und Rauschen), ein roter Stopp-Knopf ploppt. Auf „Zurückspulen!“ wird der Knopf zum
   ⏪-Zeichen (violett), eine große Uhr dreht rückwärts, Streifen und Bänder aus Token-Farben laufen über das Bild, die Kamera
   zoomt, und `ZT` läuft beschleunigt rückwärts bis zum Anfang (`TS`) – dadurch laufen **alle** Elemente, Kamerafahrten und
   Texte der schlechten Szenen sichtbar rückwärts in ihre Ausgangsposition. Die Tagesleiste spult mit (rote Marken
   verschwinden), die Wetter-Plakette dreht sich zur Sonne. Ab `R1` steht jede Figur im Zustand von `TS` (automatisch
   zurückgesetzt), und derselbe Tag beginnt auf derselben Bühne – jetzt hell.
4. **Richtiger Tag:** helle Bühnen (b50 → b100), nummerierte Schritte als Text im Bild (Nummer grün), jeder Schritt ein
   grüner Haken in der Tagesleiste. Zum Schluss alle Schritte als Kacheln mit Haken.

## Abweichungen vom Briefing

- Szene 4: Die Pause vor Szene 5 ist verlängert (2 s), damit das Zurückspulen Zeit hat; das Rückspul-Zeichen „⏪“ im Text im Bild
  ist als Grafik gesetzt (die Schrift hat kein Zeichen dafür).
- Szene 3: „Amir sitzt geknickt auf einer Kiste“ als Porträt auf einem Karton.
- Szene 7: „Telefoniert mit seiner Mutter“ als Anruf-Bildschirm „Mama“ auf dem Handy (keine weitere Figur).
- Urlaubsplan: Monatsnamen „Juli“ und „August“ als neutrale Beschriftung der Wochen, damit „die erste Augustwoche“ sichtbar wird;
  keine Daten, keine Beträge.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Amir: hfqsl1OMbiWsgPpht3el
@stimme Sabine: PcHppp9ymY0Wa5ee6hOQ

### Szene 1
Erzählerin: Das ist Amir. Er vermisst seine Familie. Da sieht er ein Angebot: Flug nach Marokko, super günstig!
Amir: Den buche ich sofort!

### Szene 2
Erzählerin: Am nächsten Tag sagt er es seiner Ausbilderin.
Amir: Sabine, ich fliege in drei Wochen für zwei Wochen nach Hause!
Sabine: Amir … da haben schon zwei Kollegen Urlaub. Und in der zweiten Woche hast du Berufsschule.

### Szene 3
Erzählerin: Der Urlaub wird nicht genehmigt. Amir kann den Flug nicht zurückgeben. Das Geld ist weg. Und fast hätte er auch noch die Berufsschule verpasst.

### Szene 4
(Pause 0.4)
Erzählerin: Stopp! Das geht besser. Zurückspulen!

### Szene 5
(Pause 2)
Erzählerin: Amir sieht das Angebot. Aber bevor er bucht, schaut er zuerst in den Ferienkalender der Berufsschule. Dann geht er zu Sabine.
Amir: Sabine, ich möchte in den Sommerferien zwei Wochen nach Hause. Geht das?

### Szene 6
Sabine: Stell einen Urlaubsantrag. Die erste Augustwoche ist noch frei.
Erzählerin: Amir stellt den Antrag. Zwei Tage später: genehmigt.

### Szene 7
Erzählerin: Jetzt bucht Amir den Flug. Ohne Stress, ohne Ärger.
Amir: Mama, ich komme im August!

### Szene 8
Erzählerin: Also: Schulferien checken, fragen, Antrag stellen, auf die Genehmigung warten, dann buchen.
