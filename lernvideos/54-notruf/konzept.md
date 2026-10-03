# Lernvideo 54 – Was würdest du tun? Notruf richtig nutzen

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Video 54
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzählerin und Mai (Porträt im Kreis, Mund nur in ihren Sätzen aus `sprache.json`).
  Die Leitstelle ist keine Figur und spricht nicht: sie ist der Anruf auf Mais Handy (Anzeige „112“, Wellen). Feuerwehrauto
  ohne sichtbare Menschen, keine weiteren Figuren.
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Im Notfall rufst du die 112 oder die 110 an, bleibst ruhig, sagst zuerst, wo es ist, und legst nicht zuerst auf.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/54-notruf` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Treppenhaus am Abend (dunkles Fenster, Lichtschalter); Mai (Porträt) hüpft Stufe für Stufe nach oben; auf „Rauch“ kriechen graue Rauchschwaden unter der Nachbartür hervor und steigen auf; auf „Rauchmelder“ blinkt hinter der Tür ein rotes Licht, Piep-Wellen pulsieren im festen Takt; auf „klingelt“ wackelt die Klingel (Schallwellen), die Tür bleibt zu; Mais Ring wird unruhig, Fragezeichen | Rauch im Treppenhaus |
| 2 | Dunkle Quiz-Bühne: drei Optionskarten A/B/C fliegen auf ihrem Buchstaben herein, jedes Symbol spielt: A eine Wohnungstür schließt sich, Gedankenblase mit Kochtopf und Dampf; B Handy wählt „Vermieter“, Sanduhr läuft; C Handy wählt „112“, Wellen gehen hinaus, ein Notizblock mit Fragezeichen-Zeilen | A · B · C |
| 3 | Denkpause: Countdown-Ring läuft leer (erst „?“), ein Lichtrahmen wandert über A → B → C, 3 – 2 – 1 ploppen auf den gesprochenen Zahlen | 3 – 2 – 1 |
| 4 | Karte A nach vorn, rote Marke ✕, wird zur Kachel; helle Bühne: hinter der Nachbartür wächst ein oranger Schein, der Rauch wird dichter; auf „giftig“ wird der Rauch dunkel und kriecht unter Mais Tür; Warnschild „!“ pocht. Karte B als zweite Kachel, rote Marke ✕: Handy ruft „Vermieter“, es klingelt ins Leere (Wellen verpuffen), die Sanduhr läuft durch, der Rauch wächst weiter | A & B: wertvolle Zeit verloren |
| 5 | Karte C nach vorn, grüne Marke ✓; Mai läuft die Treppe hinunter, die Haustür geht auf, draußen; auf „eins-eins-zwei“ tippen sich die Ziffern 1 – 1 – 2 auf dem Handy, die Verbindung steht (grüne Wellen); während Mai spricht (Mund nur in ihren Sätzen): auf „Musterstraße“ fällt ein Pin auf eine kleine Karte, Chip „2. Stock“; auf „Rauch“ und „Rauchmelder“ ploppen zwei Symbol-Chips; auf „Fragen“ läuft ein Notizblock mit Haken; auf „auf“ bleibt der grüne Hörer-Knopf leuchten (Sanduhr „warten“); auf „Feuerwehr“ fährt ein Feuerwehrauto mit drehendem Blaulicht ein | C: 112 · Wo? · Warten |
| 6 | Notizblock groß: vier Zeilen erscheinen nacheinander auf dem gesprochenen Wort, je mit Symbol – Pin (Wo?), Ausrufezeichen (Was?), Zählstriche (Wie viele?), Sanduhr (Warten) –, jede Zeile bekommt einen Haken; dann Handy mit Guthaben „0,00 €“ wählt trotzdem „112“, grüne Verbindung, Chip „kostenlos“ | Wo? · Was? · Wie viele? · Warten |
| 7 | Drei Kacheln klappen nacheinander auf: Feuerwehrhelm + Rettungswagen mit Blaulicht und „112“; Polizeimütze + Blaulicht und „110“; Mond über einer Arztpraxis und „116 117“; die Ziffern tippen sich groß auf dem gesprochenen Wort, die passende Kachel hüpft | 112 Feuerwehr & Rettung · 110 Polizei · 116 117 Arzt-Bereitschaft |
| 8 | Dunkle Bühne: alle drei Karten, A und B verblassen, C wächst und leuchtet grün, grüne Welle; dann hell: Wohnung im Schnitt; auf „raus“ läuft ein Pfeil zur Tür, auf „Tür zu“ schwingt die Tür zu (Klack, Kamera-Akzent), auf „eins-eins-zwei“ tippt sich 112; auf „Rauchmelder“ blinkt an der Decke über dem Bett ein Rauchmelder, auf „wecken“ schwingen Piep-Wellen zum Bett und ein Wecker-Symbol springt; auf „nie ab“ bleibt der Melder fest an der Decke, Haken | Bei Feuer: raus · Tür zu · 112 |

Abspann: „Ruhig bleiben, Wo sagen, warten.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“

Wie `../39-kunde-beschwert-sich/konzept.md`: helle Situations-Bühne (900 × 720), dunkel-violette Quiz-Bühne 1680 × 880 mit
drei weißen Optionskarten (Buchstabe + spielendes Symbol), Countdown-Ring unter den Karten; beim Durchspielen kommt die Karte
nach vorn, die Marke schlägt auf (rot ✕ / grün ✓), die Karte wird zur Kachel links oben, die Bühne wird hell und klein,
darunter steigt der Text im Bild. Ohne Kurstitel steht die erste Bühne in der Bildmitte (`kamera.basis.x = -360`).

## Hinweise zum Briefing

- Kein Kurstitel im Video; „Rauch im Treppenhaus“ ist Situation, kein Titel.
- Situation statt Unfall mit Verletzten gewählt, damit keine weiteren Menschen im Bild nötig sind; Feuer, Rauchmelder und
  Notruf aus dem Briefing passen in eine Geschichte.
- Die Leitstelle spricht nicht (sonst bräuchte sie eine dritte Stimme); Mai beantwortet die Fragen, die Erzählerin sagt,
  dass Mai auf Rückfragen wartet.
- Adresse als neutraler Platzhalter („Musterstraße zwölf“). Mai nennt zuerst den Ort (Wo), dann ihren Namen.
- Rauchmelder: Pflicht in allen 16 Bundesländern (Landesbauordnungen), wer wartet, ist je Land verschieden – deshalb nur
  „Pflicht“ und „nie abbauen“, keine Zuständigkeiten.
- „Lieber einmal zu viel“ ist auf echten Verdacht (Rauch, Brandgeruch, Dauerton) bezogen. Bewusst weggelassen: Strafbarkeit
  bei Missbrauch (§ 145 StGB, betrifft nur absichtlichen Missbrauch) – würde ängstliche Anrufer eher abschrecken.
- Bewusst weggelassen: Notruf ohne SIM-Karte (in Deutschland seit 2009 nicht möglich – „ohne Guthaben“ geht aber),
  Notruf-Apps (keine App-Namen), Giftnotruf (regionale Nummern).
- Zahlen so gesprochen, wie man sie wählt („eins-eins-zwei“), wie in Lernvideo 2.
- Aussprache: Die Buchstaben der Optionen stehen deutsch ausgeschrieben („Ah“, „Beh“, „Zeh“). Im Bild und im Untertitel
  bleiben A, B, C.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Mai: Mac2FKpSgaGIsaNRXt8A

### Szene 1
Erzählerin: Es ist Abend. Mai kommt nach Hause. Im Treppenhaus riecht es nach Rauch. In der Wohnung nebenan piept laut ein Rauchmelder. Mai klingelt, aber niemand macht auf.

### Szene 2
Erzählerin: Was würdest du tun? Ah: In die eigene Wohnung gehen. Vielleicht ist nur das Essen angebrannt. Beh: Den Vermieter anrufen und warten, bis er kommt. Zeh: Sofort die eins-eins-zwei anrufen und ruhig die Fragen beantworten.

### Szene 3
(Pause 2)
Erzählerin: Drei …
(Pause 0.3)
Erzählerin: Zwei …
(Pause 0.3)
Erzählerin: Eins …

### Szene 4
Erzählerin: Option Ah ist gefährlich: Niemand ruft die Feuerwehr. Das Feuer wird größer, und Rauch ist giftig. Schon wenige Atemzüge können lebensgefährlich sein.
(Pause 0.4)
Erzählerin: Option Beh: Der Vermieter kann nicht löschen. Und bis er kommt, vergeht wertvolle Zeit.

### Szene 5
Erzählerin: Und Option Zeh: Mai geht nach draußen und ruft die eins-eins-zwei an.
Mai: In der Musterstraße zwölf, im zweiten Stock, kommt Rauch aus einer Wohnung. Ein Rauchmelder piept, und niemand macht auf. Mein Name ist Mai Nguyen.
Erzählerin: Dann beantwortet Mai alle Fragen. Sie legt nicht zuerst auf. Kurz danach ist die Feuerwehr da.

### Szene 6
Erzählerin: Beim Notruf zählt: Wo ist es passiert? Was ist passiert? Wie viele Menschen sind verletzt? Und dann wartest du auf Rückfragen. Der Anruf ist kostenlos, auch vom Handy ohne Guthaben.

### Szene 7
Erzählerin: Die eins-eins-zwei ist für Feuerwehr und Rettungsdienst. Die eins-eins-null ist für die Polizei. Du bist krank, aber es ist kein Notfall? Dann hilft die eins-eins-sechs eins-eins-sieben, der ärztliche Bereitschaftsdienst, zum Beispiel nachts, am Wochenende und an Feiertagen.

### Szene 8
Erzählerin: Die beste Wahl ist Zeh. Bei Rauch und Brandgeruch rufst du lieber einmal zu viel an als einmal zu wenig. Brennt es bei dir, gilt: raus, Tür zu, eins-eins-zwei. Rauchmelder sind in Wohnungen Pflicht. Sie wecken dich, wenn es brennt. Bau sie also nie ab.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- eins-eins-sechs eins-eins-sieben → 116 117
- eins-eins-zwei → 112
- eins-eins-null → 110
- Musterstraße zwölf → Musterstraße 12
- Option Ah → Option A
- Option Beh → Option B
- Option Zeh → Option C
- Ah: → A:
- Beh: → B:
- Zeh: → C:
- ist Zeh → ist C

## Quellen

1. Your Europe (EU): Einheitliche Notrufnummer 112 – https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/index_de.htm
2. ADAC: Notruf 112 – die Nummer hilft im Notfall immer – https://www.adac.de/news/gesund-notruf-112/
3. Verivox: Notruf vom Handy auch ohne Guthaben absenden – https://www.verivox.de/handy/nachrichten/notruf-vom-handy-auch-ohne-guthaben-absenden-92226/
4. Verordnung über Notrufverbindungen (NotrufV) – https://www.gesetze-im-internet.de/notrufv/
5. teltarif: Ab 1. Juli (2009) sind Notrufe nur noch mit aktiver SIM-Karte möglich – https://www.teltarif.de/notruf-sim-karte/news/33518.html
6. Deutscher Feuerwehrverband / vfdb: Fachempfehlung Notruf (Brandschutzerziehung) – https://www.feuerwehrverband.de/app/uploads/2020/06/DFV_vfdb_Fachempfehlung_Notruf_endg%C3%BCltig.pdf
7. Deutscher Feuerwehrverband / vfdb: Fachempfehlung „Verhalten im Brandfall“ – https://www.feuerwehrverband.de/app/uploads/2020/05/DFV_vfdb_Fachempfehlung_Verhalten_Brandfall_2019b.pdf
8. Rauchmelder retten Leben: Kostenrisiko, wenn ein Nachbar wegen eines Rauchmelders die Feuerwehr alarmiert – https://www.rauchmelder-lebensretter.de/tragen-sie-ein-kostenrisiko-wenn-ihr-rauchmelder-einen-fehlalarm-ausloest-und-ein-nachbar-die-feuerwehr-alarmiert/
9. Rauchmelder retten Leben: Rauchmelder in Wohnungen (Pflicht in allen Bundesländern) – https://www.rauchmelder-lebensretter.de/rauchmelder-anbringen-in-wohnungen/
10. Freiwillige Feuerwehr Eschenau: Was tun, wenn der Rauchmelder piepst? – https://eschenau.feuerwehren.bayern/nachricht/10249/
11. 116117.de – Der Patientenservice (ärztlicher Bereitschaftsdienst) – https://www.116117.de/de/index.php
12. Bundesgesundheitsministerium: Medizinische Hilfe rund um die Uhr (116 117) – https://www.bundesgesundheitsministerium.de/ministerium/meldungen/2019/bereitschaftsdienst
13. StGB § 145 Missbrauch von Notrufen – https://www.gesetze-im-internet.de/stgb/__145.html

## Faktencheck

Stand: 03.10.2026

| Aussage (Sprechertext / Text im Bild) | Beleg |
| --- | --- |
| Rauch + Dauerton des Rauchmelders + niemand öffnet → 112 anrufen; lieber einmal zu viel | Feuerwehr: bei Dauerton und wenn niemand öffnet, 112 wählen; bei Brandgeruch/Rauch auf jeden Fall [10][8]; wer bei echtem Verdacht alarmiert, zahlt nicht, auch wenn es ein Fehlalarm war [8]. Strafbar ist nur absichtlicher Missbrauch [13] |
| Rauch ist giftig, schon wenige Atemzüge können lebensgefährlich sein | DFV/vfdb „Verhalten im Brandfall“ [7] |
| Option B: Vermieter kann nicht löschen, Zeit vergeht | Schlussfolgerung; Feuerwehr: im Brandfall sofort 112 [7] |
| Mai geht nach draußen und ruft an | DFV/vfdb: sich selbst in Sicherheit bringen, Gebäude verlassen, wenn das Treppenhaus rauchfrei ist; dann Notruf [7] |
| Zuerst den Ort sagen; Name; Fragen beantworten; nicht zuerst auflegen / „Wo?“ „Warten“ | DFV/vfdb Fachempfehlung Notruf: „Wo“ ist die erste Frage; Warten auf Rückfragen ist das Wichtigste, die Leitstelle beendet das Gespräch [6] |
| Wo? Was? Wie viele Verletzte? Warten auf Rückfragen / Text im Bild Szene 6 | DFV/vfdb [6] |
| Notruf kostenlos, auch vom Handy ohne Guthaben | EU [1], ADAC [2], Verivox [3]; Voraussetzung ist eine betriebsbereite SIM-Karte (NotrufV, seit 01.07.2009) [4][5] – „ohne Guthaben“ stimmt, „ohne SIM“ nicht, deshalb nicht gesagt |
| 112 = Feuerwehr und Rettungsdienst; 110 = Polizei | ADAC [2], EU [1] |
| 116 117 = ärztlicher Bereitschaftsdienst bei Krankheit ohne Lebensgefahr, nachts und am Wochenende | 116117.de [11], BMG [12]: außerhalb der Sprechzeiten, kostenlos, nicht für lebensbedrohliche Notfälle |
| Brennt es bei dir: raus, Tür zu, 112 / „Bei Feuer: raus · Tür zu · 112“ | DFV/vfdb: Wohnung verlassen, Tür schließen (nicht abschließen), Aufzug nicht benutzen, 112 [7] |
| Rauchmelder sind in Wohnungen Pflicht | Pflicht in allen 16 Bundesländern über die Landesbauordnungen (mindestens Schlafräume, Kinderzimmer, Flure als Rettungswege) [9] |
| Sie wecken dich, wenn es brennt; nie abbauen | Rauchmelder warnen im Schlaf vor Brandrauch [9][7]; „nie abbauen“ als Rat |
