# Lernvideo 62 – Erklärvideo: Geld nach Hause schicken

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Video 62
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Amir als Figur (Porträt im Kreis)
- **Länge:** geplant ca. 2:00 Min.
- **Kernbotschaft:** Erst die eigenen Kosten, dann Gesamtkosten vergleichen und nur über Anbieter mit Erlaubnis schicken.
  Nie Geld für Fremde weiterleiten.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/62-geld-nach-hause` (ElevenLabs, Eleven v4)

Roter Faden: ein Briefumschlag mit Münzen reist auf einer gestrichelten Bahn von Amir zu einem kleinen Haus mit Herz
(Familie, ohne Menschen, ohne Land oder Flagge). Unterwegs verliert er Münzen, wird geprüft, gestempelt – am Ende kommt er
voll an.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Amir (Porträt) hüpft herein, das Handy in seiner Nähe leuchtet; weit rechts ein kleines Haus mit Herz am Ende einer gestrichelten Bahn, die sich über eine schlichte Weltkugel (ohne Länder) zeichnet; auf „schicken“ fliegt ein Umschlag mit Münzen los; auf „verlieren“ fallen unterwegs Münzen heraus und klimpern nach unten, auf „Ärger“ ploppt ein Warndreieck mit Wackler, Amir zuckt, Kamera-Akzent | – |
| 2 | Amirs Geld-Balken; Kacheln Haus „Miete“, Teller „Essen“, Fahrkarte „Ticket“, Sparglas „Notgroschen“ ploppen auf ihre Wörter und schneiden je ein Stück ab; nur der leuchtende Rest springt in den Umschlag; auf „Sonst“ spielt kurz die Gegenprobe: der Umschlag schnappt sich zu viel, Amirs Teller wird leer und blinkt rot, dann rollt alles zurück (Rückspul-Bewegung) | Zuerst deine eigenen Kosten |
| 3 | Der Umschlag fliegt auf der Bahn durch zwei Schranken: an der ersten („Gebühr“) springt sichtbar eine Münze in eine Kasse; an der zweiten hängt eine Kurs-Anzeige mit rollenden Ziffern („Wechselkurs“), ein gestrichelter, fast unsichtbarer Keil schneidet leise ein Stück mehr ab; auf „nicht sofort“ fährt eine Lupe darüber, der Keil wird farbig und sichtbar, Kamera-Zoom auf den Keil | Kosten = Gebühr + Aufschlag im Wechselkurs |
| 4 | Drei neutrale Anbieter-Karten ohne Namen (Schalter-Symbol, Laptop, Handy) stellen sich nebeneinander, aus jeder fliegt derselbe Umschlag los; am Haus wachsen drei Balken „kommt an“ unterschiedlich hoch (einer deutlich kleiner); auf „am Ende“ leuchtet der höchste Balken auf, eine Waage neigt sich zu ihm, Amir nickt | Vergleichen: Was kommt an? |
| 5 | Ein Siegel „Erlaubnis“ schlägt mit Wackler auf eine der Anbieter-Karten; auf „Bafin“ erscheint ein Behörden-Gebäude mit Schild „BaFin“; auf „Datenbank“ öffnet sich eine Liste, die Zeilen scrollen, eine Lupe sucht, eine Zeile leuchtet grün mit Haken; Chip „darf in Deutschland arbeiten“ ploppt auf | Nur Anbieter mit Erlaubnis |
| 6 | Amir hält ein Bündel Scheine (Porträt mit Bündel daneben); rechts eine dunkle Tür mit Fragezeichen statt Namensschild (keine Person); das Bündel will auf einem Bogen zur Tür fliegen, auf „verboten“ schlägt ein rotes ✕-Schild „ohne Erlaubnis verboten“ davor auf (Wackler), das Bündel prallt ab und fliegt zurück zu Amir, die Tür schlägt zu | Nie Bargeld an Unbekannte |
| 7 | Auf Amirs Handy tippt sich eine Nachricht „Job: Geld weiterleiten – hohe Provision!“; ein Münzstrom fließt in Amirs Konto und sofort wieder hinaus über eine Kette von Konten; auf „Geldwäsche“ färbt sich die Kette rot, ein Stempel „Geldwäsche“ schlägt auf; auf „Sag nein“ schüttelt Amirs Porträt den Kopf (Wackeln), Blase „Nein!“, die Kette reißt; Pfeile zu zwei Kacheln „Bank“ (Gebäude ohne Logo) und „Polizei“ (Schild ohne Wappen) | Geld für Fremde weiterleiten? Nein! |
| 8 | Ein Formular mit den Zeilen „Name“, „Kontodaten“: eine Lupe fährt Zeile für Zeile, je ein grüner Haken; dann druckt sich ein Beleg (Papier rollt heraus) und fliegt in das Handy mit der Azubis Plus Helper App, Bereich „Dokumente“ – der Beleg landet in der Liste, Haken | Daten prüfen · Belege aufheben |
| 9 | Vier Plaketten ploppen auf ihre Wörter (Balken „Kosten“, Waage „vergleichen“, Siegel „Erlaubnis“, gerissene Kette „nie für Fremde“); der Umschlag fliegt die ganze Bahn ohne Münzverlust, kommt voll am Haus an, das Herz am Haus leuchtet und pulsiert, Amir lächelt, Welle | Kosten · Vergleichen · Erlaubnis · Nie für Fremde |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann Schwenk entlang der Bahn; Kamera-Akzente auf „Gebühr“,
„Wechselkurs“, „Erlaubnis“, „Geldwäsche“. Abspann: „Sicher schicken.“ und die Kernbotschaft.

## Abweichungen vom Briefing

- Kein Kurstitel im Video; die erste Bühne steht mittig, Szene 1 ohne Text im Bild.
- Die Familie wird nicht als Menschen gezeigt, nur als Haus mit Herz; keine Länder, Flaggen, Währungszeichen fremder
  Länder, keine Anbieter-, Banken- oder App-Namen (nur die Azubis Plus Helper App für die Ablage).
- Weggelassen: „besser seltener größere Beträge schicken“ – stimmt nur bei festen Gebühren und war nicht allgemein zu
  belegen; stattdessen „vergleichen, was am Ende ankommt“.
- Weggelassen: Zahlen zu durchschnittlichen Kosten (Weltbank) – ändern sich jedes Quartal; im Faktencheck als Hintergrund.
- „Finanzagent“ wird nicht als Fachwort gesprochen, sondern als Angebot beschrieben (B1); im Bild „Geldwäsche“.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Amir möchte seiner Familie jeden Monat etwas Geld schicken. Das ist eine gute Sache. Aber Vorsicht: Dabei kann man viel Geld verlieren oder sogar Ärger bekommen.

### Szene 2
Erzähler: Plane zuerst deine eigenen Kosten: Miete, Essen, Ticket und Notgroschen. Schick nur das Geld, das danach übrig bleibt. Sonst fehlt es dir selbst am Monatsende.

### Szene 3
Erzähler: Geld ins Ausland zu schicken kostet etwas. Da ist zuerst die Gebühr. Und oft gibt es noch einen Aufschlag im Wechselkurs. Den siehst du nicht sofort, aber er macht den Betrag kleiner.

### Szene 4
Erzähler: Vergleich deshalb mehrere Anbieter. Wichtig ist nicht nur die Gebühr. Wichtig ist, wie viel Geld am Ende bei deiner Familie ankommt. Die Kosten sind sehr unterschiedlich.

### Szene 5
Erzähler: Nutze nur Anbieter mit Erlaubnis. In Deutschland kontrolliert das die Finanzaufsicht Bafin. In ihrer Datenbank im Internet siehst du, ob ein Anbieter in Deutschland arbeiten darf.

### Szene 6
Erzähler: Gib dein Geld nie an Unbekannte, die es gegen eine Gebühr privat weiterschicken wollen. Ohne Erlaubnis ist so ein Geldtransfer in Deutschland verboten.

### Szene 7
Erzähler: Vorsicht auch bei solchen Angeboten: „Wir überweisen Geld auf dein Konto. Du schickst es weiter und bekommst eine Provision.“ Das ist Geldwäsche. Wer mitmacht, kann sich strafbar machen, auch ohne böse Absicht. Sag nein, und sprich bei Fragen mit deiner Bank oder der Polizei.

### Szene 8
Erzähler: Prüf vor dem Senden den Namen und die Kontodaten genau. Und heb jeden Beleg auf, auf Papier oder im Handy. So kannst du später zeigen, was du geschickt hast.

### Szene 9
Erzähler: Also: erst deine eigenen Kosten, dann vergleichen, nur Anbieter mit Erlaubnis. Und leite nie Geld für Fremde weiter. So kommt mehr bei deiner Familie an, und du bleibst auf der sicheren Seite.

## Schreibweise im Untertitel

- Finanzaufsicht Bafin → Finanzaufsicht BaFin

## Quellen

Recherche am 03.10.2026. Die Seiten waren aus der Arbeitsumgebung nicht direkt abrufbar; geprüft wurden die Aussagen über
die Suchmaschinen-Auszüge der jeweiligen Seite.

1. Weltbank: Remittance Prices Worldwide (Startseite, Datenbank) – https://remittanceprices.worldbank.org
2. Weltbank: Remittance Prices Worldwide, Main Report and Annex (Q3 2025) – https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf
3. Weltbank, DataBank Metadata Glossary: Average transaction cost of sending remittances (Definition Gebühr + Wechselkursaufschlag) – https://databank.worldbank.org/metadataglossary/world-development-indicators/series/SI.RMT.COST.IB.ZS
4. BaFin: Merkblatt – Hinweise zum Zahlungsdiensteaufsichtsgesetz (ZAG) – https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Merkblatt/mb_111222_zag.html
5. BaFin: BaFin warnt vor einer Tätigkeit als „Finanzagent“ – https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Verbrauchermitteilung/weitere/vor_2007/vm_050517_finanzagent.html
6. BaFin: Unternehmensdatenbank (zugelassene Institute) – https://portal.mvp.bafin.de/database/InstInfo/
7. Polizeiliche Kriminalprävention der Länder und des Bundes: Finanzagenten – https://www.polizei-beratung.de/themen-und-tipps/betrug/finanzagenten/
8. Polizeiliche Kriminalprävention der Länder und des Bundes: Geldwäsche – https://www.polizei-beratung.de/themen-und-tipps/betrug/geldwaesche/
9. Polizei Berlin: Geldwäsche! Vorsicht vor dubiosen Jobangeboten als „Finanzagent“ – https://www.berlin.de/polizei/aufgaben/praevention/betrug/artikel.400441.php
10. Gabler Banklexikon: Finanztransfergeschäft – https://www.gabler-banklexikon.de/definition/finanztransfergeschaeft-57939

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Quelle |
| --- | --- |
| Erst eigene Kosten planen, nur den Rest schicken | Ratschlag; Budget-Grundsatz wie in Lernvideo 61 (Verbraucherzentrale, „Effektiv sparen – auch mit kleinem Budget“) – im Video ohne Verweis |
| Geld ins Ausland zu schicken kostet: Gebühr plus Aufschlag im Wechselkurs (Differenz zum Referenzkurs) | 1, 3 (Gesamtkosten = transfer fee + foreign exchange margin) |
| Wichtig ist, wie viel am Ende ankommt; die Kosten sind je nach Anbieter sehr unterschiedlich | 1, 2: z. B. Banken im Schnitt deutlich teurer als digitale Anbieter; weltweiter Durchschnitt für 200 US-Dollar rund 6,4 % (Q1 2025: 6,49 %) – Zahl nur Hintergrund, nicht im Video |
| Geldtransfer-Dienste brauchen in Deutschland eine Erlaubnis der BaFin (Finanztransfergeschäft nach ZAG) | 4, 10 |
| Anbieter mit Erlaubnis aus anderen EU-Staaten dürfen ebenfalls tätig sein (EU-Pass) | 4 (Merkblatt ZAG, grenzüberschreitende Tätigkeit; offen: Wortlaut in der Recherche nicht abrufbar, siehe Bericht) |
| In der Datenbank der BaFin kann man nachsehen, ob ein Anbieter eine Erlaubnis hat | 6 (offen: Seite in der Recherche nicht abrufbar, siehe Bericht) |
| Privat und gegen Gebühr Geld weiterschicken ohne Erlaubnis ist verboten | 4, 5 (unerlaubtes Finanztransfergeschäft ist strafbar), 10 |
| Angebot „Geld auf dein Konto, du schickst es weiter, bekommst Provision“ = Geldwäsche (Finanzagent) | 5, 7, 9 |
| Strafbar auch ohne Absicht (leichtfertige Geldwäsche, § 261 StGB) | 7, 8 |
| Ablehnen; bei unerwarteten Gutschriften Bank oder Polizei ansprechen | 7 |
| Empfängerdaten prüfen, Belege aufheben | Ratschlag, keine Sachaussage |
| Text im Bild Szene 2–9 | wie die zugehörigen Sätze oben |
