# Lernvideo 32 – Erklärvideo: Wer ist wer im Betrieb?

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 32
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Kwame als Figur, dazu Frau Krause (`figur-chefin`),
  Sabine, ein Geselle (`figur-geselle`) und kleine Porträt-Gruppen aus vorhandenen Figuren (Porträts im Kreis)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Für jede Frage gibt es im Betrieb die richtige Person. Wer die kennt, spart Zeit und Stress.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/32-wer-ist-wer` (ElevenLabs, Eleven v4)

Roter Faden: ein Organigramm, das Szene für Szene wächst. Leere Plätze (gestrichelte Kreise mit „?“) füllen sich mit
Porträts; zu jeder Stelle klappt eine Karte aus dem Platz auf und zeigt, was die Person macht, dann schrumpft sie zurück.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Betrieb erscheint, aus der Tür kommen fünf Gesichter und stellen sich im Bogen auf; Kwame davor; über jedem Kopf ploppt ein Fragezeichen; bei „Überblick“ ordnen sich die Gesichter zu einem kleinen Baum, Linien zeichnen sich, Kwame lächelt | – (Titel entfällt) |
| 2 | Frau Krause landet groß am Schreibtisch; schrumpft nach oben an die Spitze, darunter zeichnen sich die Linien des Organigramms, sechs leere Plätze ploppen auf; eine Frage (?) fliegt zu ihr, prallt ab und springt zum Platz der Ausbilderin | Geschäftsführung |
| 3 | Sabine füllt ihren Platz und kommt groß nach vorn (leuchtender Ring), Sprechblase „Frag mich!“; Chips Ausbildungsplan · Berichtsheft (Haken) · Fragen; Kwame mit Warndreieck, Pfeil zu Sabine, „zuerst“ | Ausbilder/in – deine erste Ansprechperson |
| 4 | Geselle füllt seinen Platz; Karte klappt auf: Sicherungskasten, Leitung, Lampe; der Geselle zeigt die Leitung entlang, Kwame verlegt sie, die Lampe geht an; Lernring um Kwame füllt sich | Gesellen & Fachkräfte – lernen im Alltag |
| 5 | Personalbüro (zwei Porträts) füllt seinen Platz; Karte: Regal, Aktenordner „Gehalt“, „Urlaub“, „Krankenkasse“ stellen sich hinein, Zettel fliegen in die Ordner; Gehaltsabrechnung mit rotem Fehler, Kwame fragt das Personalbüro, Haken | Personalbüro – Gehalt & Papiere |
| 6 | Betriebsrat (drei Porträts, Schild) füllt seinen Platz; Karte: Beschäftigte → Betriebsrat ↔ Geschäftsführung; dann daneben die jüngere Gruppe mit Schild „JAV“; Kwame spricht, ein Schloss schnappt über der Sprechblase zu | Betriebsrat & JAV – vertrauliche Hilfe |
| 7 | Ersthelfer füllen ihren Platz; Karte: Aushang „Unsere Ersthelfer“ mit zwei Fotos (Pins fallen), Lupe sucht, Pfeil zum Erste-Hilfe-Kasten (weißes Kreuz auf Grün), der pendelnd am Haken hängt | Ersthelfer – wer & wo? |
| 8 | Organigramm komplett (Welle durch alle Plätze), rückt nach links; Kwame schreibt mit dem Stift eine Namensliste ins Notizbuch, bei jeder Zeile leuchtet die Stelle im Organigramm auf; Haken | Tipp: Namensliste machen |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann ein Schwenk zur Organigramm-Bühne; Szenenwechsel mit
Kamera-Atmer, Karten klappen mit Zoom-Akzent aus ihrem Platz auf. Abspann: „Für jede Frage die richtige Person.“ und
„Wer die kennt, spart Zeit und Stress.“ (Kernbotschaft).

## Abweichungen vom Briefing

- Szene 1: Der Kurstitel „Wer ist wer im Betrieb?“ wird nicht eingeblendet (Vorgabe 29.09.2026); die erste Bühne steht mittig.
- Szenen 2–7: „Text im Bild“ mit Gedankenstrich als Titel + Unterzeile (z. B. „Ausbilder/in“ / „deine erste Ansprechperson“).
- Figuren nur als Porträts im Kreis: Frau Krause „am Schreibtisch“ = Porträt hinter einem Schreibtisch; Kwame „arbeitet an einer
  Leitung“ = Porträt neben Sicherungskasten, Leitung und Lampe; Personalbüro, Betriebsrat, JAV und Ersthelfer als kleine
  Porträt-Gruppen aus vorhandenen Figuren (ohne Namen).
- Namensliste (Szene 8): nur Namen aus dem Briefing (Frau Krause, Sabine), sonst die Stelle – keine erfundenen Namen.
- Erste-Hilfe-Kasten: weißes Kreuz auf Grün (Rettungszeichen), kein Rotes Kreuz.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Neuer Betrieb, viele neue Gesichter. Aber wen fragst du was? Hier ist dein Überblick.

### Szene 2
Erzähler: Ganz oben ist die Geschäftsführung, also der Chef oder die Chefin. Sie leitet den Betrieb. Mit Alltagsfragen gehst du aber meistens nicht zu ihr.

### Szene 3
Erzähler: Deine wichtigste Person ist dein Ausbilder oder deine Ausbilderin. Diese Person plant deine Ausbildung, prüft dein Berichtsheft und ist für deine Fragen da. Wenn es ein Problem gibt, sprichst du zuerst mit ihr.

### Szene 4
Erzähler: Im Alltag arbeitest du oft mit Gesellen oder Fachkräften zusammen. Sie zeigen dir, wie die Arbeit funktioniert. Von ihnen lernst du am meisten.

### Szene 5
Erzähler: Das Personalbüro kümmert sich um Papiere. Also Gehalt, Gehaltsabrechnung, Urlaubsanträge, Steuer-ID und Krankenkasse. Wenn mit deinem Gehalt etwas nicht stimmt, fragst du dort.

### Szene 6
Erzähler: In vielen Betrieben gibt es einen Betriebsrat. Er vertritt die Beschäftigten gegenüber der Geschäftsführung. Für Azubis gibt es manchmal auch eine eigene Vertretung, die JAV. Mit ihnen kannst du vertraulich sprechen.

### Szene 7
Erzähler: Und wichtig für die Sicherheit: die Ersthelfer. Sie helfen bei Unfällen. Finde am ersten Tag heraus, wer das ist und wo der Erste-Hilfe-Kasten hängt.

### Szene 8
Erzähler: Tipp: Mach dir am ersten Tag eine kleine Liste mit Namen und Aufgaben. Dann weißt du immer, wen du fragen kannst.
