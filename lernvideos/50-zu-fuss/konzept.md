# Lernvideo 50 – Erklärvideo: Zu Fuß im Straßenverkehr

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Video 50
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzählerin), animierte Szenen; Ana als Figur (Porträt im Kreis, läuft als Marker
  über die Straßen-Bühne). Autos, Busse und Fahrräder ohne sichtbare Fahrer, keine weiteren Menschen.
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Zu Fuß bist du sicher unterwegs, wenn du die Regeln kennst: Gehweg, bei Rot warten, richtig schauen und gut sichtbar sein.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/50-zu-fuss` (ElevenLabs, Eleven v4)

Roter Faden: eine Straßen-Bühne (Häuserzeile, Gehweg, Radweg, Fahrbahn mit Zebrastreifen und Fußgängerampel), die Szene für
Szene aus einem anderen Blickwinkel gezeigt wird; Ana läuft als Marker darüber.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: die Straße baut sich auf (Häuser wachsen aus dem Boden, Fahrbahn rollt sich aus); Ana (Porträt) hüpft mit Squash & Stretch auf den Gehweg; auf „Autos“ rauscht ein Auto durch (Bewegungsunschärfe), auf „Fahrräder“ klingelt ein Fahrrad vorbei (Klingel-Wellen), auf „Ampeln“ springt das Ampelmännchen von Grün auf Rot; Ana schaut nach links und rechts (Augen), ein Fragezeichen ploppt; auf „schützen“ legt sich ein Schutzring um Ana | – (Titel entfällt) |
| 2 | Kamera zoomt auf den Querschnitt Gehweg – Radweg – Fahrbahn; auf „Gehweg“ leuchtet der Gehweg grün und Ana läuft darauf los; auf „Bürgersteig“ klappt ein Wort-Chip „= Bürgersteig“ auf; auf „Radweg“ malt sich ein Fahrrad-Symbol auf den Radweg, ein blaues rundes Radweg-Schild klappt hoch; Ana macht einen Schritt auf den Radweg – ein Fahrrad klingelt heran, Ana hüpft zurück auf den Gehweg, grüner Haken | Gehweg für dich · Radweg für Räder |
| 3 | Fußgängerampel groß, das Ampelmännchen steht auf Rot; Ana bremst mit Stauchung an der Bordsteinkante; die Fahrbahn ist leer, ein Blatt weht vorbei, die Uhr tickt; auf „Bußgeld“ fällt ein Strafzettel mit „€“ auf die Fahrbahn und wackelt, dann weht er davon; auf „Kinder“ ploppt neben Ana ein kleiner Schulranzen auf und wartet mit; auf „Grün“ springt das Männchen auf Grün, Ana geht zügig hinüber (Schrittspuren) | Bei Rot: stehen bleiben |
| 4 | Der Zebrastreifen zeichnet sich Streifen für Streifen; ein Auto fährt heran, Ana wartet am Rand; auf „müssen“ bremst das Auto (nickt nach vorn, Bremslichter leuchten rot) und steht vor dem Streifen; auf „Blickkontakt“ läuft eine gestrichelte Blicklinie von Ana zur Windschutzscheibe, ein Augen-Symbol ploppt, die Scheinwerfer blinken kurz; auf „wirklich steht“ Haken, erst dann läuft Ana hinüber | Zebrastreifen: Autos halten – trotzdem schauen |
| 5 | Draufsicht: zwei Fahrspuren, Richtungspfeile zeigen den Rechtsverkehr; Ana am Rand; auf „links“ schwenkt ein großer Blickpfeil nach links (auf der nahen Spur kommt ein Auto, fährt vorbei), auf „rechts“ nach rechts (auf der fernen Spur fährt ein Bus vorbei), auf „noch einmal nach links“ wieder links – frei, grüner Haken, Ana geht los; auf „Linksverkehr“ klappt ein Chip mit gespiegelten Pfeilen auf und dreht sich zurück | Links – rechts – links |
| 6 | Ana mit Handy, auf dem Display ploppen Nachrichten, Kopfhörer mit Noten-Wellen; ein Auto hupt (Schallwellen), die Wellen prallen an der Notenwolke ab; auf „Handy weg“ fliegt das Handy in die Tasche, auf „Kopfhörer raus“ fallen die Kopfhörer auf den Hals, die Noten verschwinden; die Hupen-Wellen erreichen Ana, Ohr- und Augen-Symbol leuchten auf | Beim Überqueren: Handy weg |
| 7 | Die Bühne wird Nacht (Mond geht auf, Laternen gehen an); der Scheinwerferkegel eines Autos tastet die Straße ab, eine Entfernungslinie zeichnet sich; Ana in dunkler Jacke wird erst bei „25 m“ sichtbar; dann trägt Ana eine helle Jacke mit Reflektorstreifen und einen Reflektor an der Tasche – die Streifen blitzen schon bei „140 m“ auf, die Linie wächst mit; Kamera-Akzent auf „Reflektoren“ | Dunkel: ab 25 m · Reflektoren: bis 140 m |
| 8 | Fünf Kacheln ploppen nacheinander auf (Gehweg, rote Ampel, Blickpfeile links-rechts-links, Handy in der Tasche, Reflektor); Ana springt von Kachel zu Kachel, jede bekommt einen Haken; am Ende legt sich der Schutzring um Ana, sie lächelt | Gehweg · Rot = warten · Links-rechts-links · Handy weg · Sichtbar sein |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann Schwenk zur Erklär-Bühne; Szenenwechsel mit Kamera-Atmer.
Abspann: „Schauen und gesehen werden.“ und die Kernbotschaft.

## Hinweise zum Briefing

- Kein Kurstitel im Video; die erste Bühne steht mittig.
- Bußgeld bei Rot nur allgemein („kann ein Bußgeld geben“), ohne Betrag – der Betrag ist klein und nicht nötig.
- „Blickkontakt“: im Bild nur eine Blicklinie zur Windschutzscheibe, kein sichtbarer Fahrer.
- „Vorbild für Kinder“: im Bild ein Schulranzen, kein Kind.
- Sichtweiten 25 m / 140 m sind Richtwerte des DVR (Scheinwerferlicht); gesprochen mit „etwa“ bzw. „bis zu“.
- Bewusst weggelassen: Regeln für Kinder, Gehen am Fahrbahnrand ohne Gehweg (zu speziell für 2 Minuten),
  Straßenbahnen am Zebrastreifen (sie müssen dort nicht halten – deshalb sagt der Text genau „Autos“).

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Ana ist neu in der Stadt. Zur Arbeit geht sie zu Fuß. Überall sind Autos, Fahrräder und Ampeln. Diese Regeln schützen dich.

### Szene 2
Erzählerin: Zu Fuß gehst du auf dem Gehweg. Man sagt auch Bürgersteig. Der Radweg daneben ist für Fahrräder. Dort gehst du nicht.

### Szene 3
Erzählerin: An der Ampel gilt: Bei Rot bleibst du stehen. Auch dann, wenn die Straße leer ist. Sonst kann es ein Bußgeld geben. Und Kinder lernen von dir. Bei Grün gehst du zügig hinüber.

### Szene 4
Erzählerin: Am Zebrastreifen müssen Autos dich über die Straße lassen. Aber verlass dich nicht blind darauf. Such Blickkontakt und warte, bis das Auto wirklich steht.

### Szene 5
Erzählerin: In Deutschland fahren die Autos rechts. Darum schaust du zuerst nach links, dann nach rechts und dann noch einmal nach links. Das ist besonders wichtig, wenn du Linksverkehr gewohnt bist.

### Szene 6
Erzählerin: Wenn du über die Straße gehst, mach es so: Handy weg und Kopfhörer raus. Du musst Autos und Fahrräder sehen und hören.

### Szene 7
Erzählerin: Im Dunkeln sieht man dich schlecht. In dunkler Kleidung erst aus etwa fünfundzwanzig Metern. Mit Reflektoren schon aus bis zu hundertvierzig Metern. Trag also helle Kleidung oder Reflektoren, zum Beispiel an der Jacke oder an der Tasche.

### Szene 8
Erzählerin: Also: Gehweg benutzen, bei Rot warten, links, rechts, links schauen, Handy weg und gut sichtbar sein. So kommst du sicher an.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- fünfundzwanzig Metern → 25 Metern
- hundertvierzig Metern → 140 Metern

## Quellen

1. Straßenverkehrs-Ordnung (StVO) § 25 Fußgänger – https://www.gesetze-im-internet.de/stvo_2013/__25.html
2. StVO § 26 Fußgängerüberwege – https://www.gesetze-im-internet.de/stvo_2013/__26.html
3. StVO § 37 Wechsellichtzeichen – https://www.gesetze-im-internet.de/stvo_2013/__37.html
4. StVO § 2 Straßenbenutzung durch Fahrzeuge (Rechtsfahrgebot) – https://www.gesetze-im-internet.de/stvo_2013/__2.html
5. StVO Anlage 2, Zeichen 237 Radweg („Andere Verkehrsteilnehmer dürfen ihn nicht benutzen“) – https://www.gesetze-im-internet.de/stvo_2013/anlage_2.html
6. Bußgeldkatalog-Verordnung (BKatV), Abschnitt Wechsellichtzeichen – https://www.gesetze-im-internet.de/bkatv_2013/BKatV.pdf
7. ADAC: Fußgänger im Straßenverkehr – Diese Regeln gelten – https://www.adac.de/verkehr/recht/verkehrsvorschriften-deutschland/verkehrsverstoesse-fussgaenger/
8. ADAC Hessen-Thüringen: Zebrastreifen-1×1 – Wachsamkeit bei Fußgängerüberwegen – https://presse.adac.de/regionalclubs/hessen-thueringen/zebrastreifen-1x1.html
9. Verkehrswacht Medien & Service: Eine Straße überqueren – links, rechts, links schauen – https://www.verkehrswacht-medien-service.de/mobil-teilhaben/unterwegs-zu-fuss-und-im-rollstuhl/ii-grundtechniken-des-gehens-und-rollstuhlfahrens/eine-strasse-ueberqueren-links-rechts-links-schauen/
10. DVR: Kopfhörer – Unfallrisiko im Straßenverkehr – https://www.dvr.de/aktuelle-infos/kopfhoerer-unfallrisiko-im-strassenverkehr
11. ADAC Stiftung: Ablenkung durch Smartphones und Kopfhörer – https://stiftung.adac.de/ablenkung-durch-smartphones-und-kopfhoerer/
12. DVR (Presseportal): Die im Dunkeln leben gefährlich – Tipps für mehr Sicherheit in Herbst und Winter – https://www.presseportal.de/pm/17147/3762890
13. DVR: Mit #SichtbarIstSicher durch die dunklere Jahreshälfte – https://www.dvr.de/presse/pressemitteilungen/mit-sichtbaristsicher-durch-die-dunklere-jahreshaelfte
14. BGHW eMagazin: Bei Dunkelheit – Sehen und gesehen werden – https://www.bghw.de/e-magazin/im-dunkeln-funkeln
15. Duden: Bürgersteig – https://www.duden.de/rechtschreibung/Buergersteig

## Faktencheck

Stand: 03.10.2026

| Aussage (Sprechertext / Text im Bild) | Beleg |
| --- | --- |
| Zu Fuß gehst du auf dem Gehweg. | § 25 Abs. 1 StVO: zu Fuß Gehende müssen die Gehwege benutzen [1]; ADAC [7] |
| Bürgersteig = Gehweg | Duden [15] (Synonym) |
| Der Radweg ist für Fahrräder, dort gehst du nicht. / „Radweg für Räder“ | Zeichen 237: Radweg, andere Verkehrsteilnehmer dürfen ihn nicht benutzen [5] |
| Bei Rot bleibst du stehen, auch wenn die Straße leer ist. / „Bei Rot: stehen bleiben“ | § 37 Abs. 2 StVO, Lichtzeichen gelten auch für Fußgänger [3]; ADAC: „Niemals bei Rot gehen“ [7] |
| Sonst kann es ein Bußgeld geben. | BKatV, Wechsellichtzeichen nicht befolgt (Fußgänger): Verwarnungsgeld, laut ADAC 5 € (Stand 2026) [6][7] – Betrag im Video bewusst nicht genannt |
| Kinder lernen von dir. | ADAC: Kinder lernen durch Nachahmung, Erwachsene sind Vorbild [7] |
| Bei Grün gehst du zügig hinüber. | § 25 Abs. 3 StVO: Fahrbahn zügig auf kürzestem Weg quer überschreiten [1] |
| Am Zebrastreifen müssen Autos dich über die Straße lassen. | § 26 Abs. 1 StVO: Fahrzeuge (außer Schienenfahrzeugen) müssen Fußgängern das Überqueren ermöglichen, wenn nötig warten [2] |
| Nicht blind darauf verlassen, Blickkontakt suchen, warten, bis das Auto steht. | ADAC Zebrastreifen-1×1 [8] |
| In Deutschland fahren die Autos rechts. | Rechtsfahrgebot § 2 Abs. 2 StVO [4] |
| Links – rechts – links schauen | Verkehrswacht: zuerst links (nahe Fahrspur), dann rechts, dann noch einmal links [9] |
| Beim Überqueren Handy weg, Kopfhörer raus | Empfehlung DVR [10] und ADAC Stiftung [11]; keine gesetzliche Pflicht für Fußgänger, daher als Rat formuliert |
| Dunkle Kleidung: erst aus etwa 25 m sichtbar; Reflektoren: bis zu 140 m | DVR [12][13], BGHW [14] (Richtwerte im Scheinwerferlicht) |
| Helle Kleidung oder Reflektoren tragen | DVR [12][13] |
