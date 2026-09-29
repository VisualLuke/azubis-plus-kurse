# Lernvideo 25 – Heimat vs. Deutschland: Sonntag & Hausordnung

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 25
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Heimat vs. Deutschland – eine Off-Stimme (Erzähler), geteilte Bühne links/rechts; Figuren Amir; Mai, Kwame, Jonas, Sabine auf dem Markt; Nachbarin (`figur-chefin`) – alle als Porträts im Kreis
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Sonntag ist in Deutschland Ruhetag, und im Haus gelten Ruhezeiten. Wer das kennt, hat gute Nachbarn.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/25-sonntag-hausordnung` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Uhr dreht auf 11, Tag „Sonntag“; Amir mit Einkaufstasche läuft zum Supermarkt, rüttelt an der Tür, Schild „Sonntag geschlossen“ schwingt; die Bühne teilt sich, der Supermarkt rückt nach rechts, Titelplatte | Heimat vs. Deutschland: Sonntag |
| 2 | Links: Wochenleiste, der Sonntag ist wie jeder Tag; Marktstände füllen sich mit Obst, Laden-Schild dreht auf „Offen“, Musik, Leute (Porträts) laufen vorbei | In vielen Ländern: Sonntag ist Einkaufstag |
| 3 | Rechts: Wochenleiste, der Sonntag wird Ruhetag; Rollläden der Läden gehen herunter; Bäckerei mit offener Tür („Vormittag“), Tankstelle mit Licht, Bahnhof „oft offen“; Tipp: Samstag wird grün, das Brot fliegt in Amirs Tasche | In Deutschland: Sonntag = Ruhetag |
| 4 | Kacheln Bohrmaschine, Hammer, Rasenmäher, Lautsprecher – jedes macht Lärm, bis beim eigenen Wort ein Pausen-Zeichen aufschlägt; Liegestuhl, Tasse, Amir entspannt | Sonntag: kein Lärm |
| 5 | Wochenleiste Mo–Fr; Haus, der Himmel wird dunkel, Mond geht auf, Uhr 22:00, Fenster gehen aus, Zeitleiste 22–6; Sonne „Mittagsruhe“; Aushang „Hausordnung“ im Treppenhaus, Lupe liest | Nachtruhe 22–6 Uhr · Hausordnung lesen |
| 6 | Amir mit Kuchen und Geschenk; Zettel fliegt an die Pinnwand im Treppenhaus und schreibt sich; Klingel, die Nachbarin erscheint und lächelt; Mond am Zettel, die Zeile zur Nachtruhe schreibt sich und hebt sich | Party? Nachbarn vorher informieren |
| 7 | Park mit Sonne und Bäumen; Amir läuft den Weg entlang, Mai und Kwame kommen dazu, alle auf der Bank mit Kaffee to go (dampft) | Sonntag = Ruhe genießen |

Umsetzung: Layout und Bausteine der geteilten Bühne wie Lernvideo 23. Szene 1–3 auf einer geteilten Bühne (Beschriftung neutral
„In vielen Ländern“ / „In Deutschland“, Text im Bild in der jeweiligen Hälfte, die erzählte Seite wird breiter, die andere matt, respektvoll: anders, nicht falsch). Die Supermarkt-Bühne aus Szene 1 wird die rechte Hälfte. Ab Szene 4
Text links, Bühne rechts wie Kurs 1. Jede Animation hängt an einem Wort aus `sprache.json`; Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Sonntag ist Ruhetag.“ und „Wer die Ruhezeiten kennt, hat gute Nachbarn.“ (aus der Kernbotschaft).

Änderungen am Briefing (freigegeben, siehe `../korrekturen.md`): Szene 5 „Meistens ist zwischen 22 und 6 Uhr Nachtruhe.“;
Szene 6 zusätzlich „Aber ab 22 Uhr gilt trotzdem Nachtruhe.“, auf dem Zettel „Ab 22 Uhr gilt Nachtruhe.“
Text im Bild Szene 1 („Heimat vs. Deutschland: Sonntag“) erscheint als Titelplatte, wenn sich die Bühne teilt (wie Lernvideo 23);
Szene 2 und 3: die Seitenbeschriftung trägt „In vielen Ländern“ / „In Deutschland“, darunter „Sonntag ist Einkaufstag“ / „Sonntag = Ruhetag“. Menschen auf dem Markt nur als Porträts im Kreis; Getränke neutral (Kaffee), kein Alkohol. Uhrzeiten im Sprechertext ausgeschrieben („elf“, „zweiundzwanzig“, „sechs“), damit die Stimme sie sicher richtig liest.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Sonntag, elf Uhr. Du willst einkaufen gehen. Aber der Supermarkt ist zu. Willkommen in Deutschland!

### Szene 2
(Pause 1.6)
Erzähler: In vielen Ländern ist der Sonntag ein Tag wie jeder andere. Märkte sind voll, Geschäfte haben offen, auf der Straße ist viel los.

### Szene 3
(Pause 1.0)
Erzähler: In Deutschland ist Sonntag Ruhetag. Die meisten Geschäfte sind geschlossen. Brot bekommst du bei manchen Bäckereien am Vormittag, und Tankstellen und Bahnhöfe haben oft offen. Tipp: Kauf am Samstag ein.

### Szene 4
(Pause 1.0)
Erzähler: Am Sonntag ist auch Lärm tabu. Nicht bohren, nicht hämmern, keinen Rasen mähen und keine lauten Partys. Viele Menschen wollen sich ausruhen.

### Szene 5
(Pause 1.0)
Erzähler: Auch unter der Woche gibt es Ruhezeiten. Meistens ist zwischen zweiundzwanzig und sechs Uhr Nachtruhe. Manche Häuser haben auch eine Mittagsruhe. Das steht in der Hausordnung. Lies sie einmal durch.

### Szene 6
(Pause 1.0)
Erzähler: Du willst trotzdem feiern, zum Beispiel deinen Geburtstag? Dann häng einen Zettel ins Treppenhaus und sag den Nachbarn Bescheid. Die meisten sind dann ganz entspannt. Aber ab zweiundzwanzig Uhr gilt trotzdem Nachtruhe.

### Szene 7
(Pause 1.0)
Erzähler: Und das Schöne am deutschen Sonntag? Spazieren gehen, Freunde treffen, ausruhen. Probier es aus!
