# Lernvideo 46 – Erklärvideo: Die ersten 14 Tage

- **Quelle:** Briefing „Lernvideos 46–65 (eigene Recherche)“, Video 46 – Sprechertext selbst geschrieben, Stand 03.10.2026
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo (Reise auf einer Landkarte), eine Off-Stimme (Erzähler), animierte Szenen; Mai als Figur (Porträt im Kreis)
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Früh Termine buchen, dann eins nach dem anderen: anmelden, Konto, Krankenkasse – und alles gut ablegen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/46-die-ersten-14-tage` (ElevenLabs, Eleven v4)

Leitidee: **eine Reise auf einer Landkarte.** Ein gewundener Weg mit 14 Tages-Steinen führt von Mais Wohnung als Schleife
durch die Stadt und zurück zu ihrem Briefkasten. Mai ist ein Porträt-Pin und läuft den Weg entlang, die Kamera fährt mit
(nach rechts, nach unten, zurück nach links). An jeder Station ploppt das Gebäude aus dem Boden (Bürgeramt, Bank, Krankenkasse,
Briefkasten, Handyladen), ein Wegweiser trägt den Text im Bild. Ist eine Station erledigt, schlägt ein Haken-Stempel
direkt auf der Karte an der Station auf (keine Box am Bildrand). Überraschung in Szene 7: Der Brief mit der Steuer-ID fliegt von selbst herein.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Mitte: Mais Haus wächst aus dem Boden, Mai (Pin) hüpft mit Koffer zur Tür, der Schlüssel dreht sich; auf „Ausbildung“ ploppt der Betrieb mit Kalenderblatt auf; auf „Aufgaben“ wirbeln fünf Symbole (Haus, Karte, Kreuz-Schild, Brief, Handy) um Mai, ihr Ring zittert, „?“; auf „Keine Panik“ bremsen sie; auf „Plan“ fährt die Kamera weit zurück: die Landkarte, der Weg zeichnet sich als Schleife, 14 Steine ploppen auf, jedes Symbol fliegt an seinen Platz auf der Karte; Mai springt auf Tag 1 | – (Titel entfällt) |
| 2 | Kamera zurück zum Haus, Wegweiser wächst; Ring „14 Tage“ zeichnet sich, die ersten Steine leuchten; Laptop klappt auf, freier Termin leuchtet, Klick auf „Buchen“; Vermieter ploppt auf, unterschreibt die Wohnungsgeberbestätigung und gibt sie Mai | 1 · Wohnung anmelden – innerhalb von 2 Wochen |
| 3 | Mai läuft vier Steine weiter (Kamerafahrt), das Bürgeramt wächst aus dem Boden; Mai geht hinein, die Meldebescheinigung kommt heraus, Stempel „Angemeldet“ schlägt auf; Kopien fächern sich („noch oft“); der Stempel bleibt an der Station | Meldebescheinigung |
| 4 | Weiter zur Bank (wächst aus dem Boden): Bankkarte fährt aus dem Umschlag, Mais Pass klappt auf (Foto blitzt), „?“ und eine Liste klappt aus; „DE…“ tippt sich, der Zettel fliegt zum Betrieb, Münzen fallen auf die Karte („Gehalt“); Stempel „Konto“ | 2 · Konto → IBAN an den Betrieb |
| 5 | Kamera fährt nach unten zur Krankenkasse: Kassenkarten fächern sich, die AOK-Karte kommt nach vorn und dreht sich; Balken „2 Wochen“ ab dem Kalenderblatt „Start Ausbildung“; Mai schickt eine Nachricht „Meine Kasse: AOK“ an den Betrieb, Betrieb und Kasse tauschen sich aus (Pfeile hin und her); Stempel „Kasse“ | 3 · Krankenkasse wählen → Betrieb |
| 6 | Mai läuft die letzten Steine bis Tag 14, der Weg verlängert sich gestrichelt („ein paar Wochen“) zurück zu ihrem Briefkasten; ein Antrag wird durchgestrichen; Mai schaut drei Tage hinein – leer; auf „Name“ schreibt sie „Mai“ aufs Namensschild; Überraschung: der Brief „Steuer-ID“ fliegt von selbst herein und öffnet sich, Ziffern tippen sich (Musterzahl), die Nummer fliegt zum Betrieb; Stempel „Steuer-ID“ | Steuer-ID kommt per Post → Betrieb |
| 7 | Mai springt zurück an den Anfang („Für den Anfang“) zu Tag 2: Handyladen wächst aus dem Boden; Handy ohne Netz, Karte „Prepaid“ gleitet ins Fach, Pass vor dem Prüfgerät (Scan-Linie), Netzbalken füllen sich, das Handy summt; Stempel „Handy“ | Handy: Prepaid + Ausweis |
| 8 | Vier Papiere (Meldebescheinigung, Wohnungsgeberbestätigung, Brief der Krankenkasse, Steuer-ID-Brief) fliegen von ihren Stationen auf der Karte nach vorn, werden fotografiert und fliegen in die Azubis Plus Helper App (Bereich „Dokumente“), Zähler 0 → 4, „✓ Gespeichert“; dann fährt die Kamera weit zurück: die ganze Karte, die Termin-Stationen leuchten auf „früh buchen“, die Steine leuchten auf „eins nach dem anderen“ nacheinander grün, Mai lehnt sich zufrieden zurück | Früh buchen · eins nach dem anderen |

Umsetzung: Text im Bild auf Wegweisern in der Welt (Wörter steigen aus einer Maske), keine feste Ebene am Bildrand;
jede Animation hängt an einem Wort aus `sprache.json`. Übergänge: Kamerafahrt entlang des Wegs (Mai läuft mit), Zoom auf die
ganze Karte (Szene 1 und Schluss), Sprung zurück an den Anfang (Szene 7). Kamera-Akzente auf „zwei Wochen“,
„Meldebescheinigung“ und „früh buchen“. Abspann: „Früh Termine buchen.“ und „Eins nach dem anderen.“ (Kernbotschaft).

## Abweichungen vom Briefing

- Kein Kurstitel im Video; „Die ersten 14 Tage“ wird nicht eingeblendet, die erste Bühne steht mittig.
- Die Tage auf dem Weg (Tag 1, 2, 5, 6, 7, 8) sind ein Beispiel, keine Regel; nur die Zwei-Wochen-Frist für die Anmeldung
  (ab Einzug) und für die Kassenwahl (ab Start der Ausbildung) ist belegt.
- Bankkonto: Das Briefing nennt die Meldebescheinigung nicht ausdrücklich für die Bank; was die Bank verlangt, ist
  unterschiedlich. Deshalb nur „Pass“ und „frag vorher, was deine Bank noch braucht“.
- Steuer-ID im Bild als Musterzahl ohne Bezug zu einer echten Nummer.
- Krankenkasse: nur die AOK als Beispiel; Kassenkarten ohne weitere Namen.
- Szene 2: Der Vermieter erscheint kurz als stummes Porträt (`figur-vermieter`), weil er die Wohnungsgeberbestätigung gibt;
  sonst nur Mai.

- Faktencheck 03.10.2026 (`lernvideos/faktencheck-46-65.md`): keine Papier-Mitgliedsbescheinigung mehr (seit 2021) –
  stattdessen „Sag deinem Betrieb, welche Kasse du gewählt hast“; beim Visum zählt der rechtzeitige **Antrag** auf die
  Aufenthaltserlaubnis; Hinweis „Name am Briefkasten“ ergänzt.
- Nutzerwunsch 03.10.2026: Schritt „Aufenthaltserlaubnis / Visum“ gestrichen (für die ersten 14 Tage zu viel; eigenes Video 48),
  ebenso der Hinweis auf die Ausländerbehörde in Szene 3 und das Reiseheft unten links (Stempel jetzt an den Stationen).
  Abkürzungen ohne Lautschrift (siehe „Schreibweise im Untertitel“).

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Mai ist gerade in ihre neue Wohnung gezogen. Bald beginnt ihre Ausbildung. Und plötzlich gibt es so viele Aufgaben. Keine Panik. Hier ist ihr Plan für die ersten vierzehn Tage.

### Szene 2
Erzähler: Schritt eins: die Wohnung anmelden. Das musst du innerhalb von zwei Wochen nach dem Einzug machen. Buch den Termin beim Bürgeramt am besten gleich am ersten Tag. Von deinem Vermieter brauchst du die Wohnungsgeberbestätigung.

### Szene 3
Erzähler: Beim Termin bekommst du die Meldebescheinigung. Dieses Papier brauchst du später noch oft.

### Szene 4
Erzähler: Schritt zwei: das Bankkonto. Nimm deinen Pass mit, und frag vorher, was deine Bank noch braucht. Deine Ih-Bahn gibst du dann deinem Betrieb. Auf dieses Konto kommt dein Gehalt.

### Szene 5
Erzähler: Schritt drei: die Krankenkasse. Du suchst sie dir selbst aus, zum Beispiel die Ah-Oh-Kah. Dafür hast du zwei Wochen ab dem Start deiner Ausbildung. Sag deinem Betrieb, welche Kasse du gewählt hast. Den Rest machen Betrieb und Kasse.

### Szene 6
Erzähler: Ein paar Wochen nach der Anmeldung kommt deine Steuer-Aidih per Post. Du musst sie nicht beantragen. Schau also jeden Tag in den Briefkasten. Wichtig: Dein Name muss am Briefkasten stehen. Und gib die Nummer gleich deinem Betrieb.

### Szene 7
Erzähler: Und dein Handy? Für den Anfang reicht eine Pri-Peid-Karte. Beim Kauf musst du dich ausweisen, zum Beispiel mit deinem Pass.

### Szene 8
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
4. (gestrichen 03.10.2026 mit der Szene „Visum“)
5. Geldwäschegesetz (GwG) § 12 Identitätsüberprüfung (Pass/Ausweis bei Kontoeröffnung) – https://www.gesetze-im-internet.de/gwg_2017/__12.html
6. Sozialgesetzbuch V § 175 Ausübung des Wahlrechts (Wahl der Kasse, zwei Wochen) – https://www.gesetze-im-internet.de/sgb_5/__175.html ; Kommentierung der Rentenversicherung: https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/05_Normen_und_Vertraege/01_Sozialgesetzbuch/05_SGB_V/0175/0175_2020_04_01.html
7. (gestrichen 03.10.2026 mit der Szene „Visum“)
8. Service Berlin: Steueridentifikationsnummer – Vergabe (automatisch nach Anmeldung, Brief vom BZSt) – https://service.berlin.de/dienstleistung/329123/
9. hamburg.de: Steueridentifikationsnummer erhalten – https://www.hamburg.de/service/info/11440869/n0/
10. Telekommunikationsgesetz (TKG) § 172 (Identitätsprüfung bei Prepaid-Karten) – https://www.gesetze-im-internet.de/tkg_2021/__172.html ; VG Köln, Pressemitteilung 01.12.2020 – https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2020/44_201201/index.php
11. ELSTER: FAQ von Arbeitgebern (ELStAM – Arbeitnehmer teilt dem Arbeitgeber Identifikationsnummer und Geburtsdatum mit) – https://www.elster.de/eportal/helpGlobal?themaGlobal=help_arbeitgeber_eop ; Einkommensteuergesetz § 39e Abs. 4 – https://www.gesetze-im-internet.de/estg/__39e.html

12. dejure.org: § 175 Abs. 3 SGB V (Angaben über die gewählte Krankenkasse an die meldende Stelle) – https://dejure.org/gesetze/SGB_V/175.html ; informationsportal.de: Ab 2021 Mitgliedsbestätigung elektronisch – https://www.informationsportal.de/ab-2021-mitgliedsbestaetigung-elektronisch/
13. BZSt: FAQ Steuerliche Identifikationsnummer (Versand per Brief, bis zu etwa acht Wochen, Name am Briefkasten) – https://www.bzst.de/DE/Privatpersonen/SteuerlicheIdentifikationsnummer/FAQ/faq_node.html

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Quelle |
| --- | --- |
| Wohnung anmelden innerhalb von zwei Wochen nach dem Einzug („1 · Wohnung anmelden – innerhalb von 2 Wochen“) | [1], [3] |
| Termin beim Bürgeramt (Termin buchen) | [3] (Berlin: Termin bzw. online); Ratschlag „gleich am ersten Tag“ ist Tipp, keine Regel |
| Vom Vermieter brauchst du die Wohnungsgeberbestätigung | [2], [3] |
| Beim Termin bekommst du die Meldebescheinigung (Meldebestätigung) | [3] |
| Fürs Konto: Pass mitnehmen, nach weiteren Unterlagen fragen | [5] (Identifizierung mit Pass/Ausweis); weitere Unterlagen je Bank verschieden → allgemein formuliert |
| IBAN dem Betrieb geben, Gehalt kommt aufs Konto | Allgemeinwissen, wie Kurs 3 „Bankkonto“ |
| Krankenkasse selbst aussuchen, zwei Wochen ab Start der Ausbildung | [6]; wie Lernvideo 1 (Korrektur 28.09.2026) |
| Dem Betrieb sagen, welche Kasse; den Rest (Anmeldung, Bestätigung) machen Betrieb und Kasse elektronisch („3 · Krankenkasse wählen → Betrieb“) | [12] (seit 01.01.2021 keine Papier-Mitgliedsbescheinigung) |
| AOK als Beispiel | Vorgabe (nur AOK als Beispiel) |
| Steuer-ID kommt nach der Anmeldung per Post, ohne Antrag („Steuer-ID kommt per Post → Betrieb“) | [8], [9] |
| „Ein paar Wochen“ bis zum Brief | [8], [9] (Stand 03.10.2026: einige Wochen; nach drei Monaten ohne Brief beim BZSt nachfragen) |
| Steuer-ID an den Betrieb | [11] |
| Name muss am Briefkasten stehen, sonst kommt der Brief nicht an | [13] |
| Prepaid-Karte: beim Kauf ausweisen, z. B. mit dem Pass („Handy: Prepaid + Ausweis“) | [10] |
| Foto der Papiere (Meldebescheinigung, Wohnungsgeberbestätigung, Brief der Krankenkasse, Steuer-ID-Brief) in der Azubis Plus Helper App ablegen | Vorgabe „Ablage = Helper App“ (CLAUDE.md) |
