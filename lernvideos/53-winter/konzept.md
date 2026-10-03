# Lernvideo 53 – Erklärvideo: Sicher im Winter

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Video 53
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Amir als Figur (Porträt im Kreis). Bus und Autos ohne
  sichtbare Fahrer, keine weiteren Menschen; Kleidung im Bild auf dem Bügel bzw. an Amirs Porträt (Mütze, Schal), keine Puppe.
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Im Winter brauchst du mehr Zeit und mehr Vorsicht: gut sichtbar, rutschfest, warm angezogen und früh losfahren.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/53-winter` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Straße mit Häusern; auf „dunkel“ sinkt die Sonne im Zeitraffer, die Laternen gehen nacheinander an; auf „kalt“ fällt das Thermometer unter null; auf „glatt“ glänzt eine Eisfläche auf dem Gehweg; Schneeflocken beginnen zu fallen; Amir (Porträt, mit Mütze) hüpft herein, wackelt kurz vor Kälte, Atemwölkchen; auf „Rad“ und „Bus“ stehen ein Fahrrad und eine Haltestelle bereit | – (Titel entfällt) |
| 2 | Die Bühne wird Nacht; der Scheinwerferkegel eines Autos tastet die Straße ab; eine dunkle Jacke auf dem Bügel verschwindet fast im Dunkeln, dann die helle Jacke mit Reflektorstreifen – die Streifen blitzen im Licht auf; auf „Rucksack“ klickt ein Reflektor an den Rucksack; auf „Licht“ geht am Fahrrad der Scheinwerfer an (weißer Kegel), das Rücklicht glimmt rot, ein Stempel „Pflicht“ schlägt mit Wackler auf | Hell + Reflektoren · am Rad: Licht an |
| 3 | Eisfläche auf dem Gehweg; ein Schuh mit glatter Sohle rutscht weg (Rutsch-Bogen, Kamera wackelt kurz), dann stampft ein Schuh mit grobem Profil auf (Profil-Abdruck im Schnee); auf „kleine Schritte“ setzen sich kurze Fußspuren nacheinander; auf „Hände“ kommen zwei Hand-Symbole aus den Jackentaschen und gehen zur Seite, Amir gerät ins Schwanken und fängt sich (Balance-Bögen), lächelt | Feste Schuhe mit Profil · kleine Schritte |
| 4 | Haus mit Gehweg, Schnee häuft sich; auf „Gemeinde“ schickt das Rathaus einen Brief zum Haus; auf „Eigentümer“ leuchtet das Haus mit Schlüssel-Symbol auf; ein Schneeschieber schiebt eine Bahn frei, Splitt rieselt (kein Salz); auf „Mietvertrag“ und „Hausordnung“ blättern beide auf, eine Lupe sucht und findet „Winterdienst“; auf „Vermieter“ fliegt ein Fragezeichen zum Haus, ein Haken kommt zurück | Wer räumt? Mietvertrag & Hausordnung |
| 5 | Kleiderbügel mit einer dicken Jacke; auf „Zwiebellook“ fliegen nacheinander Shirt, Pulli und Jacke als Schichten übereinander auf einen zweiten Bügel; auf „Luft“ leuchten zwischen den Schichten warme Wellen; auf „drinnen“ steigt ein Thermometer, eine Schicht fliegt wieder ab und hängt sich an den Haken; Mütze, Schal und Handschuhe ploppen auf | Zwiebellook: mehrere dünne Schichten |
| 6 | Haltestelle im Schnee; die Anzeige blinkt „+10 min“; der Bus rollt langsam ein, Schnee rutscht vom Dach; auf „früher“ klingelt Amirs Wecker, der Zeiger springt eine Viertelstunde zurück; Amir läuft los und kommt am Betrieb an, die Uhr zeigt Puffer, grüner Haken; auf „trotzdem“ pocht die Uhr kurz | Im Winter: früher losfahren |
| 7 | Thermometer steigt (Fieber), eine Taschentuchbox schießt ein Taschentuch heraus, Nies-Wellen; Amir-Porträt wird blass; auf „vor Arbeitsbeginn“ klingelt das Telefon im Betrieb, die Uhr steht vor Arbeitsbeginn, Haken; Kalender Tag 1 – 2 – 3 läuft durch, auf „länger als drei Tage“ leuchtet Tag 4 mit einer Krankschreibung, die von der Arztpraxis wegfliegt; auf „früher“ schiebt sich die Krankschreibung auf Tag 1 vor (gestrichelt) | Krank? Vor Arbeitsbeginn melden |
| 8 | Vier Kacheln ploppen auf (Reflektor, Schuh mit Profil, Zwiebel-Schichten, Uhr früher); Amir springt von Kachel zu Kachel, jede bekommt einen Haken; Schneeflocken fallen, am Ende geht die Sonne auf | Sichtbar · Rutschfest · Warm · Früh los |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann Schwenk zur Erklär-Bühne; Szenenwechsel mit Kamera-Atmer,
Schneefall als durchgehende Ebene. Abspann: „Gut durch den Winter.“ und die Kernbotschaft.

## Hinweise zum Briefing

- Kein Kurstitel im Video; die erste Bühne steht mittig.
- Räum- und Streupflicht nur allgemein: Uhrzeiten, Salz-Verbote und Zuständigkeit sind je Gemeinde verschieden.
  Im Bild deshalb Splitt statt Salz.
- Krankmeldung ohne Verweis auf andere Kurse; nur die Grundregel aus § 5 Entgeltfortzahlungsgesetz.
- Bewusst weggelassen: Wegeunfall bei Glatteis (gesetzlich unfallversichert – wichtig, aber eigenes Thema), Winterreifen
  (Azubis fahren meist kein eigenes Auto), Spikes/Schuh-Krallen (Produktwerbung vermeiden), „bei Glatteis Rad stehen lassen“
  (nicht belegt als allgemeine Regel).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Im Winter wird es früh dunkel, es ist kalt, und oft ist es glatt. Amir fährt mit dem Rad oder mit dem Bus zur Arbeit. So kommt er sicher durch den Winter.

### Szene 2
Erzähler: Morgens und abends ist es dunkel. Trag helle Kleidung und Reflektoren, zum Beispiel an der Jacke oder am Rucksack. Am Fahrrad machst du das Licht an. Das ist Pflicht.

### Szene 3
Erzähler: Bei Schnee und Eis wird es glatt. Trag feste Schuhe mit gutem Profil. Mach kleine Schritte und tritt mit dem ganzen Fuß auf. Und nimm die Hände aus den Taschen. Dann kannst du dich besser abfangen.

### Szene 4
Erzähler: Wer räumt und streut den Gehweg vor dem Haus? Das regelt die Gemeinde. Oft gibt sie die Pflicht an die Eigentümer weiter. Manchmal steht im Mietvertrag, dass die Mieter dran sind. Oft auch in der Hausordnung, die zum Mietvertrag gehört. Lies nach und frag im Zweifel deinen Vermieter.

### Szene 5
Erzähler: Zieh dich im Zwiebellook an. Also lieber mehrere dünne Schichten statt einer dicken Jacke. Die Luft dazwischen hält warm. Und drinnen ziehst du einfach eine Schicht aus.

### Szene 6
Erzähler: Bei Schnee können Bus und Bahn Verspätung haben. Auch zu Fuß brauchst du länger. Fahr deshalb früher los. Denn pünktlich sein musst du trotzdem.

### Szene 7
Erzähler: Und wenn du dich erkältet hast? Dann melde dich vor Arbeitsbeginn im Betrieb krank. Dauert es länger als drei Tage, brauchst du eine Krankschreibung vom Arzt. Manche Betriebe wollen sie schon früher.

### Szene 8
Erzähler: Also: sichtbar sein, rutschfeste Schuhe, warme Schichten und früher losfahren. Dann kommst du gut durch den Winter.

## Schreibweise im Untertitel

Keine Ersetzungen nötig (keine Zahlen in Ziffern, keine Abkürzungen im Sprechertext).

## Quellen

1. DVR (Presseportal): Die im Dunkeln leben gefährlich – Tipps für mehr Sicherheit in Herbst und Winter – https://www.presseportal.de/pm/17147/3762890
2. DVR: Mit #SichtbarIstSicher durch die dunklere Jahreshälfte – https://www.dvr.de/presse/pressemitteilungen/mit-sichtbaristsicher-durch-die-dunklere-jahreshaelfte
3. StVO § 17 Beleuchtung – https://www.gesetze-im-internet.de/stvo_2013/__17.html
4. StVZO § 67 Lichttechnische Einrichtungen an Fahrrädern – https://www.gesetze-im-internet.de/stvzo_2012/__67.html
5. Berufsgenossenschaft (Pressemitteilung): Sicher zur Arbeit bei Eis und Glätte – https://www.berufsgenossenschaft.de/de/mediencenter/pm/arbeitsweg-im-winter.jsp
6. Unfallkasse Berlin: Was hilft bei Glätte? Tipps für einen unfallfreien Arbeitsweg – https://www.unfallkasse-berlin.de/presse/weitere-presseinformationen/detail/was-hilft-bei-glaette-tipps-fuer-einen-unfallfreien-arbeitsweg
7. BGW: Auch im Winter sicher unterwegs – https://www.bgw-online.de/bgw-online-de/themen/gesund-im-betrieb/sichere-mobilitaet/winter-sicher-unterwegs-24428
8. SoVD: Pinguin-Gang mindert das Sturzrisiko – https://www.sovd.de/medienservice/sovd-zeitung/ausgabe/artikel/pinguin-gang-mindert-das-sturzrisiko
9. Verbraucherzentrale: Schnee, Eis, Glätte – Ihre Pflichten und sinnvolle Versicherungen – https://www.verbraucherzentrale.de/wissen/geld-versicherungen/weitere-versicherungen/schnee-eis-glaette-ohne-passende-versicherung-drohen-teure-folgen-10922
10. ADAC: Winterdienst – wer muss räumen und streuen? – https://www.adac.de/rund-ums-haus/wohnen/recht/winterdienst/
11. Wikipedia: Zwiebelschalenprinzip (Kleidung) – https://de.wikipedia.org/wiki/Zwiebelschalenprinzip_(Kleidung)
12. IHK München: Streik, Hochwasser, Schneechaos – Arbeitsrecht (Wegerisiko) – https://www.ihk-muenchen.de/ratgeber/recht/arbeitsrecht/bestehende-arbeitsverhaeltnisse-kuendigung-sozialversicherung/streik-hochwasser-schneechaos/
13. Entgeltfortzahlungsgesetz (EntgFG) § 5 Anzeige- und Nachweispflichten – https://www.gesetze-im-internet.de/entgfg/__5.html

## Faktencheck

Stand: 03.10.2026

| Aussage (Sprechertext / Text im Bild) | Beleg |
| --- | --- |
| Im Winter früh dunkel; helle Kleidung und Reflektoren tragen / „Hell + Reflektoren“ | DVR: Dunkelheit als unterschätztes Unfallrisiko, helle Kleidung und reflektierende Materialien (Jacke, Tasche) [1][2] |
| Am Fahrrad Licht an, das ist Pflicht / „am Rad: Licht an“ | § 17 Abs. 1 StVO (Dämmerung, Dunkelheit) [3]; § 67 StVZO [4] |
| Feste Schuhe mit gutem Profil, kleine Schritte, mit dem ganzen Fuß auftreten / Text im Bild Szene 3 | Unfallversicherungsträger: rutschhemmende, profilierte Sohle, langsamer gehen, kleinere Schritte, mit dem ganzen Fuß auftreten [5][6][7] |
| Hände aus den Taschen, dann kannst du dich abfangen | SoVD („Pinguin-Gang“): Hände nicht in den Taschen, um sich bei einem Sturz abfangen zu können [8] |
| Räum- und Streupflicht regelt die Gemeinde, oft an Eigentümer weitergegeben; Mieter nur über Mietvertrag/Hausordnung; Vermieter fragen / „Wer räumt?“ | Verbraucherzentrale: Gemeinden können Eigentümer per Satzung/Verordnung verpflichten; Übertragung auf Mieter über Mietvertrag oder Hausordnung [9]; ADAC [10] – regional verschieden, daher allgemein |
| Zwiebellook: mehrere dünne Schichten statt einer dicken Jacke, Luft dazwischen hält warm | Zwiebelschalenprinzip: Luft zwischen den Schichten isoliert, Schichten lassen sich an- und ausziehen [11] (allgemeine Kleidungsregel, keine Behördenquelle gefunden) |
| Bei Schnee können Bus und Bahn Verspätung haben; früher losfahren; pünktlich sein musst du trotzdem / „früher losfahren“ | IHK München: Arbeitnehmer tragen das Wegerisiko und müssen Schnee und Glätte bei der Anfahrt einplanen [12]; Unfallversicherungsträger: bei Glätte mehr Zeit einplanen [5][6] |
| Krank: vor Arbeitsbeginn im Betrieb melden | § 5 Abs. 1 Satz 1 EntgFG: Arbeitsunfähigkeit unverzüglich mitteilen [13] (freigegebene Formulierung „vor Arbeitsbeginn“ wie Lernvideo 13, siehe `../korrekturen.md`) |
| Länger als drei Tage → Krankschreibung vom Arzt; manche Betriebe wollen sie früher | § 5 Abs. 1 Satz 2–3 EntgFG: Nachweis bei mehr als drei Kalendertagen, Arbeitgeber darf ihn früher verlangen; bei gesetzlich Versicherten elektronisch (eAU), Feststellung durch den Arzt bleibt Pflicht [13] |
