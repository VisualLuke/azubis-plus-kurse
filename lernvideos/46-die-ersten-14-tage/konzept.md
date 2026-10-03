# Lernvideo 46 – Erklärvideo: Die ersten 14 Tage

- **Quelle:** Briefing „Lernvideos 46–65 (eigene Recherche)“, Video 46 – Sprechertext selbst geschrieben, Stand 03.10.2026
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo (Zeitstrahl/Checkliste), eine Off-Stimme (Erzähler), animierte Szenen; Mai als Figur (Porträt im Kreis)
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Früh Termine buchen, dann eins nach dem anderen: anmelden, Konto, Krankenkasse – und alles gut ablegen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/46-die-ersten-14-tage` (ElevenLabs, Eleven v4)

Roter Faden: ein Zeitstrahl mit 14 Tageskacheln, der oben über die Bühne läuft. Mai ist der Marker und hüpft von Kachel zu
Kachel; jeder Schritt ist eine Checklisten-Karte, die unter ihrem Tag einrastet und am Ende einen grünen Haken bekommt.
Die Steuer-ID liegt hinter Tag 14 („in ein paar Wochen“) – der Zeitstrahl verlängert sich dafür gestrichelt.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Wohnungstür, Mai (Porträt) hüpft mit Koffer herein, der Schlüssel dreht sich im Schloss; auf „Ausbildung“ ploppt ein kleiner Betrieb mit Kalenderblatt auf; auf „Aufgaben“ fliegen sechs Symbole (Haus, Karte, Kreuz-Schild, Pass, Brief, Handy) wild durcheinander um Mai, ihr Ring zittert, „?“; auf „Keine Panik“ bremsen alle Symbole, auf „Plan“ ordnen sie sich in eine Reihe, der Zeitstrahl mit 14 Kacheln zeichnet sich von links nach rechts, Mai lächelt und springt auf Tag 1 | – (Titel entfällt) |
| 2 | Kamera fährt auf Tag 1: Laptop klappt auf, Kalender mit grauen Tagen, ein freier Termin leuchtet, Klick auf „Buchen“ (Welle), Haken; auf „innerhalb von zwei Wochen“ läuft ein violetter Balken über 14 Kacheln, Tag 14 pocht; auf „Vermieter“ ploppt die Vermieter-Figur (Porträt) und schiebt das Formular „Wohnungsgeberbestätigung“ zu Mai, der Stift unterschreibt | 1 · Wohnung anmelden – innerhalb von 2 Wochen |
| 3 | Mai hüpft zu Tag 5: Bürgeramt (Gebäude mit Schild), Tür geht auf, Mai geht hinein; Stempel „Angemeldet“ schlägt mit Wackler auf, die Meldebescheinigung gleitet heraus und dreht sich zu Mai; auf „Ausländerbehörde“ fliegt eine Kopie als Pfeil zu einem kleinen Behördengebäude | Meldebescheinigung |
| 4 | Tag 6: Bankkarte fährt aus einem Umschlag, Pass klappt auf (Foto blitzt); auf „frag vorher“ ploppt ein „?“ über einer Bank, eine Checkliste klappt aus; auf „Ih-Bahn“ tippt sich „DE…“ auf einem Zettel, der Zettel fliegt in einem Bogen zum Betrieb, Münzen fallen auf die Karte („Gehalt“) | 2 · Konto → IBAN an den Betrieb |
| 5 | Tag 7: Kassen-Karten fächern sich auf, die AOK-Karte kommt nach vorn und dreht sich; auf „zwei Wochen“ läuft ein zweiter Balken ab dem Kalenderblatt „Start Ausbildung“; die Mitgliedsbescheinigung wird in einen Umschlag gesteckt, fliegt zum Betrieb, grüner Haken | 3 · Krankenkasse wählen → Betrieb |
| 6 | Pass mit Visum-Seite, auf „abläuft“ tickt eine Sanduhr, der Sand rieselt; Behördengebäude „Ausländerbehörde“; Kalenderblätter fliegen ab (viele Wochen), dann klickt Mai früh auf „Termin buchen“, die Sanduhr hält an, Haken | Mit Visum? Termin bei der Ausländerbehörde – früh buchen |
| 7 | Zeitstrahl verlängert sich gestrichelt über Tag 14 hinaus („in ein paar Wochen“); Briefkasten an der Wand, Klappe klappert, Mai schaut jeden Tag hinein (drei kurze Sprünge über drei Tage); dann fällt ein Brief „Steuer-ID“ heraus, Ziffern tippen sich „12 345 678 901“ (Musterzahl), der Brief fliegt zum Betrieb | Steuer-ID kommt per Post → Betrieb |
| 8 | Handy fährt herein (Display grau, kein Netz-Symbol); Karte „Prepaid“ gleitet ins Fach, Pass wird kurz vor die Kamera eines Prüf-Terminals gehalten (Scan-Linie läuft), Netzbalken füllen sich, das Handy summt | Handy: Prepaid + Ausweis |
| 9 | Azubis Plus Helper App (Bereich „Dokumente“): Meldebescheinigung, Bestätigung, Mitgliedsbescheinigung, Steuer-ID-Brief fliegen als Fotos nacheinander hinein, Zähler 1 → 4, „✓ Gespeichert“; Zeitstrahl: alle Karten bekommen auf ihren Wörtern einen grünen Haken (Welle), Mai lehnt sich zufrieden zurück | Früh buchen · eins nach dem anderen |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann Schwenk zum Zeitstrahl; Kamera-Akzent auf „zwei Wochen“,
„Meldebescheinigung“ und „früh buchen“. Abspann: „Früh Termine buchen.“ und „Eins nach dem anderen.“ (Kernbotschaft).

## Abweichungen vom Briefing

- Kein Kurstitel im Video; „Die ersten 14 Tage“ wird nicht eingeblendet, die erste Bühne steht mittig.
- Die Tage im Zeitstrahl (Tag 1, 5, 6, 7) sind ein Beispiel, keine Regel; nur die Zwei-Wochen-Frist für die Anmeldung
  (ab Einzug) und für die Kassenwahl (ab Start der Ausbildung) ist belegt.
- Bankkonto: Das Briefing nennt die Meldebescheinigung nicht ausdrücklich für die Bank; was die Bank verlangt, ist
  unterschiedlich. Deshalb nur „Pass“ und „frag vorher, was deine Bank noch braucht“.
- Steuer-ID im Bild als Musterzahl ohne Bezug zu einer echten Nummer.
- Krankenkasse: nur die AOK als Beispiel; Kassenkarten ohne weitere Namen.
- Szene 2: Der Vermieter erscheint kurz als stummes Porträt (`figur-vermieter`), weil er die Wohnungsgeberbestätigung gibt;
  sonst nur Mai.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Mai ist gerade in ihre neue Wohnung gezogen. Bald beginnt ihre Ausbildung. Und plötzlich gibt es so viele Aufgaben. Keine Panik. Hier ist ihr Plan für die ersten vierzehn Tage.

### Szene 2
Erzähler: Schritt eins: die Wohnung anmelden. Das musst du innerhalb von zwei Wochen nach dem Einzug machen. Buch den Termin beim Bürgeramt am besten gleich am ersten Tag. Von deinem Vermieter brauchst du die Wohnungsgeberbestätigung.

### Szene 3
Erzähler: Beim Termin bekommst du die Meldebescheinigung. Dieses Papier brauchst du noch oft, zum Beispiel bei der Ausländerbehörde.

### Szene 4
Erzähler: Schritt zwei: das Bankkonto. Nimm deinen Pass mit, und frag vorher, was deine Bank noch braucht. Deine Ih-Bahn gibst du dann deinem Betrieb. Auf dieses Konto kommt dein Gehalt.

### Szene 5
Erzähler: Schritt drei: die Krankenkasse. Du suchst sie dir selbst aus, zum Beispiel die Ah-Oh-Kah. Dafür hast du zwei Wochen ab dem Start deiner Ausbildung. Die Mitgliedsbescheinigung gibst du deinem Betrieb.

### Szene 6
Erzähler: Bist du mit einem Visum gekommen? Dann brauchst du einen Termin bei der Ausländerbehörde, bevor dein Visum abläuft. Auf so einen Termin wartest du oft viele Wochen. Also früh buchen!

### Szene 7
Erzähler: Ein paar Wochen nach der Anmeldung kommt deine Steuer-Aidih per Post. Du musst sie nicht beantragen. Schau also jeden Tag in den Briefkasten. Und gib die Nummer gleich deinem Betrieb.

### Szene 8
Erzähler: Und dein Handy? Für den Anfang reicht eine Pri-Peid-Karte. Beim Kauf musst du dich ausweisen, zum Beispiel mit deinem Pass.

### Szene 9
Erzähler: Mach von jedem wichtigen Papier ein Foto und leg es in der Azubis Plus Hälper-App unter Dokumente ab. Und denk dran: Termine früh buchen, dann eins nach dem anderen.

## Schreibweise im Untertitel

- vierzehn Tage → 14 Tage
- Ih-Bahn → IBAN
- Ah-Oh-Kah → AOK
- Steuer-Aidih → Steuer-ID
- Pri-Peid-Karte → Prepaid-Karte
- Hälper-App unter Dokumente → Helper App unter „Dokumente“

## Quellen

1. Bundesmeldegesetz (BMG) § 17 Anmeldung, Abmeldung – https://www.gesetze-im-internet.de/bmg/__17.html
2. Bundesmeldegesetz (BMG) § 19 Mitwirkung des Wohnungsgebers – https://www.gesetze-im-internet.de/bmg/__19.html
3. Service Berlin: Wohnsitz – Wohnung anmelden (14 Tage, Einzugsbestätigung des Wohnungsgebers, Meldebestätigung) – https://service.berlin.de/dienstleistung/120686/
4. Stadt Mainz: Aufenthaltserlaubnis für eine betriebliche Ausbildung beantragen (Unterlagen u. a. Meldebescheinigung, nur mit Termin) – https://www.mainz.de/vv/produkte/buergeramt/aufenthaltstitel/aufenthaltserlaubnis-fuer-eine-betriebliche-ausbildung-oder-weiterbildung-beantragen.php
5. Geldwäschegesetz (GwG) § 12 Identitätsüberprüfung (Pass/Ausweis bei Kontoeröffnung) – https://www.gesetze-im-internet.de/gwg_2017/__12.html
6. Sozialgesetzbuch V § 175 Ausübung des Wahlrechts (Mitgliedsbescheinigung, zwei Wochen) – https://www.gesetze-im-internet.de/sgb_5/__175.html ; Kommentierung der Rentenversicherung: https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/05_Normen_und_Vertraege/01_Sozialgesetzbuch/05_SGB_V/0175/0175_2020_04_01.html
7. Make it in Germany: „Auf einen Blick: Visum zur Absolvierung einer Berufsausbildung“ (nach der Einreise Aufenthaltserlaubnis bei der Ausländerbehörde beantragen, früh Termin, Wartezeiten) – https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/a_Fachkraefte/PDF-Dateien/3_Visum_u_Aufenthalt/Visagrafik_DE/Visum_Absolvierung_Berufsausbildung_DE.pdf
8. Service Berlin: Steueridentifikationsnummer – Vergabe (automatisch nach Anmeldung, Brief vom BZSt) – https://service.berlin.de/dienstleistung/329123/
9. hamburg.de: Steueridentifikationsnummer erhalten – https://www.hamburg.de/service/info/11440869/n0/
10. Telekommunikationsgesetz (TKG) § 172 (Identitätsprüfung bei Prepaid-Karten) – https://www.gesetze-im-internet.de/tkg_2021/__172.html ; VG Köln, Pressemitteilung 01.12.2020 – https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2020/44_201201/index.php
11. ELSTER: FAQ von Arbeitgebern (ELStAM – Arbeitnehmer teilt dem Arbeitgeber Identifikationsnummer und Geburtsdatum mit) – https://www.elster.de/eportal/helpGlobal?themaGlobal=help_arbeitgeber_eop ; Einkommensteuergesetz § 39e Abs. 4 – https://www.gesetze-im-internet.de/estg/__39e.html

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Quelle |
| --- | --- |
| Wohnung anmelden innerhalb von zwei Wochen nach dem Einzug („1 · Wohnung anmelden – innerhalb von 2 Wochen“) | [1], [3] |
| Termin beim Bürgeramt (Termin buchen) | [3] (Berlin: Termin bzw. online); Ratschlag „gleich am ersten Tag“ ist Tipp, keine Regel |
| Vom Vermieter brauchst du die Wohnungsgeberbestätigung | [2], [3] |
| Beim Termin bekommst du die Meldebescheinigung (Meldebestätigung) | [3] |
| Meldebescheinigung brauchst du z. B. bei der Ausländerbehörde | [4] |
| Fürs Konto: Pass mitnehmen, nach weiteren Unterlagen fragen | [5] (Identifizierung mit Pass/Ausweis); weitere Unterlagen je Bank verschieden → allgemein formuliert |
| IBAN dem Betrieb geben, Gehalt kommt aufs Konto | Allgemeinwissen, wie Kurs 3 „Bankkonto“ |
| Krankenkasse selbst aussuchen, zwei Wochen ab Start der Ausbildung, Mitgliedsbescheinigung an den Betrieb („3 · Krankenkasse wählen → Betrieb“) | [6]; wie Lernvideo 1 (Korrektur 28.09.2026) |
| AOK als Beispiel | Vorgabe (nur AOK als Beispiel) |
| Mit Visum: Termin bei der Ausländerbehörde, bevor das Visum abläuft; oft lange Wartezeit („Mit Visum? Termin bei der Ausländerbehörde – früh buchen“) | [7]; Wartezeit auch [4] (nur Online-Termine) |
| Steuer-ID kommt nach der Anmeldung per Post, ohne Antrag („Steuer-ID kommt per Post → Betrieb“) | [8], [9] |
| „Ein paar Wochen“ bis zum Brief | [8], [9] (Stand 03.10.2026: einige Wochen; nach drei Monaten ohne Brief beim BZSt nachfragen) |
| Steuer-ID an den Betrieb | [11] |
| Prepaid-Karte: beim Kauf ausweisen, z. B. mit dem Pass („Handy: Prepaid + Ausweis“) | [10] |
| Foto der Papiere in der Azubis Plus Helper App ablegen | Vorgabe „Ablage = Helper App“ (CLAUDE.md) |
