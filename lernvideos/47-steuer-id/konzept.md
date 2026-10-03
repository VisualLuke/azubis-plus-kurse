# Lernvideo 47 – Erklärvideo: Steuer-ID und Sozialversicherungsnummer

- **Quelle:** Briefing „Lernvideos 46–65 (eigene Recherche)“, Video 47 – Sprechertext selbst geschrieben, Stand 03.10.2026
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzählerin), animierte Szenen; Kwame als Figur (Porträt im Kreis)
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Zwei Nummern, zwei Briefe: Steuer-ID und Sozialversicherungsnummer kommen per Post. Gib sie deinem Betrieb – und sonst nur, wer sie wirklich braucht.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/47-steuer-id` (ElevenLabs, Eleven v4)

Roter Faden: zwei farbige Nummern-Karten, die Szene für Szene „gebaut“ werden – links die Steuer-ID (violett, 11 Kästchen),
rechts die Sozialversicherungsnummer (blau, 12 Kästchen, eines davon ein Buchstabe). Im Personalbüro stehen zwei leere,
gestrichelte Felder auf einem Formular; am Ende füllen sich beide.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Personalbüro (Tür mit Schild „Personal“, Schreibtisch, Formular „Neue Mitarbeiter“); Kwame (Porträt) hüpft herein; auf „zwei Nummern“ ploppen auf dem Formular zwei leere, gestrichelte Felder, die rot pochen; auf „Steuer-Aidih“ und „Sozialversicherungsnummer“ bekommen sie je ein Fragezeichen; Kwame legt den Kopf schief, „?“ über ihm | Steuer-ID? Sozialversicherungsnummer? |
| 2 | Schwenk zur linken Bühne: elf leere Kästchen fahren nacheinander herein (Zähler „11“ läuft mit); auf „nicht beantragen“ wird ein Antragsformular durchgestrichen und fliegt weg; Bürgeramt mit Stempel „Angemeldet“, von dort fliegt ein Datenpfeil zu einem Amtsgebäude „Bundeszentralamt für Steuern“, das einen Brief ausspuckt; der Brief fliegt in Kwames Briefkasten (Klappe klappert); auf „kostet nichts“ Münze mit rotem ✕ | Steuer-ID: 11 Ziffern · kommt per Post · kostenlos |
| 3 | Kalender: Blätter fliegen ab („einige Wochen“), Kwame schaut in den Briefkasten, leer; auf „drei Monaten“ drei Monatsblätter, das dritte pocht; Handy mit einem Formular, Haken auf „anfordern“, ein neuer Brief fliegt los | Nach 3 Monaten kein Brief? → beim BZSt anfordern |
| 4 | Der Brief öffnet sich, die elf Kästchen füllen sich mit einer Musterzahl (tippt sich); auf „ganzes Leben“ zieht ein Umzugskarton von Haus A zu Haus B, die Karte geht mit und bleibt gleich (grüner Rahmen); auf „Lohnsteuer“ Gehaltszettel; auf „mehr Steuern“ wird der Steuer-Balken auf dem Zettel länger und rot, wackelt; auf „Personalbüro“ fliegt die Karte ins linke Feld des Formulars, Haken | Gleich ans Personalbüro |
| 5 | Schwenk zur rechten Bühne: zwölf blaue Kästchen, das neunte trägt einen Buchstaben; auf „Deutschen Rentenversicherung“ ploppt ein Amtsgebäude mit Schild „Rentenversicherung“; auf „zum ersten Mal“ Kalenderblatt „Start Ausbildung“, Kwame mit Werkzeugkoffer, ein Funke springt vom Kalender zur Karte und die Kästchen leuchten nacheinander auf | Sozialversicherungsnummer: von der Rentenversicherung |
| 6 | Betrieb schickt eine Meldung (Pfeil) zur Krankenkasse (Schild mit Kreuz), Haken; auf „noch keine“ graues Feld, auf „kümmert sich“ Zahnräder drehen im Betrieb; Brief „Versicherungsnummernachweis“ fliegt in den Briefkasten, faltet sich auf; auf „Früher“ blendet eine alte Karte „Sozialversicherungsausweis“ ein und dreht sich zur Seite, Pfeil „→ heute: Brief“ | Heute: Versicherungsnummernachweis |
| 7 | Beide Karten nebeneinander wie auf einer Waage: links 11 Ziffern pulsieren, Symbol Steuer (Münze mit Prozentzeichen); rechts 12 Zeichen, der Buchstabe wackelt kurz, Symbole Rente (Sparschwein) und Krankenkasse (Kreuz-Schild) ploppen auf „Rente“ und „Krankenkasse“; auf „Zwei Nummern“ schlagen beide mit Wackler auf | Steuer-ID = Steuer · SV-Nummer = Sozialversicherung |
| 8 | Azubis Plus Helper App (Bereich „Dokumente“): beide Briefe fliegen als Fotos hinein, Schloss schnappt zu, „✓ Gespeichert“; Formular im Personalbüro: beide Felder grün; auf „Fremde“ E-Mail-Umschlag und Telefon mit Haken-Angel fliegen auf Kwame zu und prallen an einem Schild ab (rotes ✕), Kwame nickt | Nur an Stellen, die sie brauchen |

Umsetzung (Leitidee „zwei Briefe, zwei Schlüssel“, Stand 03.10.2026): Die Bühne ist ein Papierstapel in der Bildmitte,
der Text im Bild steht als Kopfzeile darüber (Wörter steigen aus einer Maske) mit einem Farbstreifen je Kapitel – violett für die
Steuer-ID, blau für die Sozialversicherungsnummer. Die Ziffern rasten wie ein Zahlenschloss ein (11 Stellen / 12 Zeichen), jeder Brief
öffnet sich wie ein Umschlag (Klappe auf, Blatt gleitet heraus). Szene 1 steht ohne Titel; „Steuer-ID? Sozialversicherungsnummer?“
erscheint als Beschriftung der beiden Formularfelder. Übergänge: Zoom aus dem Formularfeld, das zur Karte wird (1 → 2 und 4 → 5),
Kamera kippt nach unten (2 → 3) und nach oben (7 → 8), Zoom durch den Briefkasten in den Umschlag (3 → 4), Schwenk (5 → 6),
Wischblende in Violett und Blau (6 → 7). Szene 7: Statt der Waage werden die beiden Karten zu zwei Schlüsseln an einem Schlüsselbund;
jeder schließt seine Tür auf („Steuer“ → Münze mit %, „Sozialversicherung“ → Sparschwein und Kreuz-Schild). Überraschung in Szene 8:
Als E-Mail und Anruf kommen, springt der Schlüsselbund in den Tresor (Azubis Plus Helper App), Mail und Anruf gehen leer aus (rotes ✕).
Abspann: „Zwei Nummern – gut aufheben.“ und „Gib sie deinem Betrieb – und sonst nur Stellen, die sie wirklich brauchen.“

## Abweichungen vom Briefing

- Kein Kurstitel im Video; die erste Bühne steht mittig.
- **Sozialversicherungsausweis → Versicherungsnummernachweis:** Seit 1. Januar 2023 bekommt man statt des
  Sozialversicherungsausweises einen Versicherungsnummernachweis (Brief) von der Deutschen Rentenversicherung. Das Briefing
  („steht auf dem Sozialversicherungsausweis“) ist damit überholt; der alte Name wird nur noch erwähnt („früher“).
- Briefing „oft über die Krankenkasse beantragt“: Die Nummer vergibt die Rentenversicherung; fehlt sie, kümmert sich der Betrieb
  bei der Anmeldung (über die Krankenkasse) darum. So vereinfacht gesagt, ohne das Meldeverfahren zu erklären.
- Briefing „teuerste Steuerklasse“: gesprochen nur „vielleicht mehr Steuern abziehen“, weil der Betrieb bei unverschuldeter
  Verspätung bis zu drei Monate die normalen Merkmale nehmen darf (§ 39c EStG). Keine Steuerklassen-Nummer im Video.
- Steuer-ID und Versicherungsnummer im Bild nur als Muster (keine echten Nummern).
- „Nur an Betrieb/Behörden“ ist erweitert zu „Stellen, die sie wirklich brauchen“, weil z. B. auch Banken die Steuer-ID erfragen müssen.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Kwames erster Tag im Betrieb. Im Personalbüro fragt man ihn nach zwei Nummern: nach seiner Steuer-Aidih und nach seiner Sozialversicherungsnummer. Kwame denkt: Woher bekomme ich die denn?

### Szene 2
Erzählerin: Zuerst die Steuer-Aidih. Sie hat elf Ziffern. Du musst sie nicht beantragen. Nach deiner ersten Anmeldung beim Bürgeramt schickt dir das Bundeszentralamt für Steuern einen Brief. Das kostet nichts.

### Szene 3
Erzählerin: Das dauert oft ein paar Wochen. Kommt nach drei Monaten immer noch kein Brief? Dann kannst du die Nummer beim Bundeszentralamt anfordern.

### Szene 4
Erzählerin: Deine Steuer-Aidih bleibt dein ganzes Leben gleich, auch wenn du umziehst. Dein Betrieb braucht sie für die Lohnsteuer. Fehlt sie, muss er vielleicht mehr Steuern abziehen. Also: Brief da, Nummer gleich ans Personalbüro.

### Szene 5
Erzählerin: Die zweite Nummer ist die Sozialversicherungsnummer. Sie kommt von der Deutschen Rentenversicherung. Du bekommst sie, wenn du in Deutschland zum ersten Mal arbeitest, zum Beispiel in deiner Ausbildung.

### Szene 6
Erzählerin: Dein Betrieb braucht sie, um dich bei der Krankenkasse anzumelden. Hast du noch keine, kümmert sich dein Betrieb darum. Dann kommt ein Brief, der Versicherungsnummernachweis. Früher hieß er Sozialversicherungsausweis.

### Szene 7
Erzählerin: Zwei Nummern, zwei Aufgaben. Die Steuer-Aidih hat elf Ziffern und ist für die Steuer. Die Sozialversicherungsnummer hat zwölf Zeichen, auch einen Buchstaben. Sie ist für die Sozialversicherung, also zum Beispiel für Rente und Krankenkasse.

### Szene 8
Erzählerin: Beide Nummern sind persönlich. Leg die Briefe sicher ab, zum Beispiel als Foto in der Azubis Plus Helper-App unter Dokumente. Gib die Nummern nur an Stellen, die sie wirklich brauchen, wie deinen Betrieb. Und nie an Fremde, die per E-Mail oder Telefon danach fragen.

## Schreibweise im Untertitel

- Steuer-Aidih → Steuer-ID
- elf Ziffern → 11 Ziffern
- zwölf Zeichen → 12 Zeichen
- drei Monaten → 3 Monaten
- Helper-App unter Dokumente → Helper App unter „Dokumente“

## Quellen

1. Service Berlin: Steueridentifikationsnummer – Vergabe (automatische Zuteilung nach Anmeldung, Mitteilung per Brief, gebührenfrei) – https://service.berlin.de/dienstleistung/329123/
2. hamburg.de: Steueridentifikationsnummer erhalten (Brief an die Meldeadresse; nach drei Monaten ohne Brief beim BZSt nachfragen) – https://www.hamburg.de/service/info/11440869/n0/
3. BZSt online.portal: Steueridentifikationsnummer erhalten (erneute Mitteilung per Eingabeformular) – https://online.portal.bzst.de/SharedDocs/Leistungsbeschreibung/DE/erneute_mitteilung_der_ID-Nr.html
4. Finanzverwaltung NRW: Steuerliche Identifikationsnummer (elfstellig, bleibt lebenslang gleich, auch bei Umzug) – https://www.finanzamt.nrw.de/steuerinfos/weitere-themen/steuernummer-und-aktenzeichen/steuerliche-identifikationsnummer
5. Abgabenordnung § 139b (Identifikationsnummer) – https://www.gesetze-im-internet.de/ao_1977/__139b.html
6. Einkommensteuergesetz § 39e Abs. 4 (Arbeitnehmer teilt dem Arbeitgeber die IdNr. mit) und § 39c (Steuerklasse VI ohne IdNr., Ausnahme bis zu drei Monate) – https://www.gesetze-im-internet.de/estg/__39e.html , https://www.gesetze-im-internet.de/estg/__39c.html
7. ELSTER: FAQ von Arbeitgebern (ELStAM, Lohnsteuerabzug) – https://www.elster.de/eportal/helpGlobal?themaGlobal=help_arbeitgeber_eop
8. Deutsche Rentenversicherung, Rentenlexikon: Versicherungsnummer (12 Stellen, mit Anfangsbuchstabe des Geburtsnamens) – https://www.deutsche-rentenversicherung.de/SharedDocs/Glossareintraege/DE/V/versicherungsnummer.html
9. Deutsche Rentenversicherung, Rentenlexikon: Versicherungsnummernachweis (ersetzt seit 01.01.2023 den Sozialversicherungsausweis) – https://www.deutsche-rentenversicherung.de/SharedDocs/Glossareintraege/DE/V/versicherungsnummernachweis.html
10. AOK: Versicherungsnummernachweis (Sozialversicherungsausweis) – Vergabe durch die Rentenversicherung bei der ersten Beschäftigung, auch Ausbildung; Arbeitgeber meldet bei der Krankenkasse mit Versicherungsnummer an – https://www.aok.de/pk/versichertenservice/sozialversicherungsausweis/
11. AOK: FAQ zu Versicherungsnummern (fehlt die Nummer, beantragt sie der Arbeitgeber) – https://www.aok.de/pk/faq/versicherungsnummern/
12. Haufe: Versicherungsnummernachweis ersetzt Sozialversicherungsausweis – https://www.haufe.de/sozialwesen/versicherungen-beitraege/versicherungsnummernachweis-ersetzt-sozialversicherungsausweis_240_588102.html
13. BZSt, Pressemitteilung 30.06.2026: Warnung vor erneuter Welle von Täuschungsversuchen (keine Daten preisgeben) – https://www.bzst.de/SharedDocs/Pressemitteilungen/DE/20260630_warnung_taeuschungsversuchen.html
14. Abgabenordnung § 154 Abs. 2a (Banken erheben die Steuer-ID) – https://www.gesetze-im-internet.de/ao_1977/__154.html

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Quelle |
| --- | --- |
| Steuer-ID hat elf Ziffern („11 Ziffern“) | [4], [5] |
| Muss nicht beantragt werden; nach der ersten Anmeldung schickt das Bundeszentralamt für Steuern einen Brief („kommt per Post“) | [1], [2], [5] |
| Kostet nichts („kostenlos“) | [1] |
| Dauert oft ein paar Wochen | [1], [2] (Stand 03.10.2026: einige Wochen) |
| Nach drei Monaten ohne Brief beim Bundeszentralamt anfordern („Nach 3 Monaten kein Brief? → beim BZSt anfordern“) | [2], [3] |
| Bleibt das ganze Leben gleich, auch bei Umzug | [4], [5] |
| Betrieb braucht sie für die Lohnsteuer; gleich ans Personalbüro („Gleich ans Personalbüro“) | [6], [7] |
| Fehlt sie, muss der Betrieb vielleicht mehr Steuern abziehen | [6] (§ 39c: Steuerklasse VI; bei unverschuldeter Verspätung bis zu drei Monate Ausnahme → „vielleicht“) |
| Sozialversicherungsnummer kommt von der Deutschen Rentenversicherung („von der Rentenversicherung“) | [8], [10], [11] |
| Man bekommt sie bei der ersten Arbeit in Deutschland, z. B. Ausbildung | [10] |
| Betrieb braucht sie, um dich bei der Krankenkasse anzumelden | [10] |
| Fehlt sie, kümmert sich der Betrieb darum | [11] |
| Brief „Versicherungsnummernachweis“, früher Sozialversicherungsausweis („Heute: Versicherungsnummernachweis“) | [9], [10], [12] (seit 01.01.2023) |
| Zwölf Zeichen, auch ein Buchstabe | [8] |
| SV-Nummer gehört zur Sozialversicherung (Rente, Krankenkasse) („SV-Nummer = Sozialversicherung“) | [8], [10] |
| Nummern nur an Stellen, die sie brauchen; nie an Fremde per E-Mail oder Telefon („Nur an Stellen, die sie brauchen“) | [13] (Behörde warnt vor Täuschungsversuchen); [14] (z. B. Banken brauchen die Steuer-ID) |
| Ablage in der Azubis Plus Helper App | Vorgabe „Ablage = Helper App“ (CLAUDE.md) |

Aussprache 03.10.2026 (Hörprobe, Nutzer): Abkürzungen und Anglizismen in normaler Schreibweise (AOK, IBAN, Prepaid, SIM, WG, WLAN, PSA, Scanner, Helper, DB Navigator); nur „Steuer-Aidih“ bleibt Lautschrift.
