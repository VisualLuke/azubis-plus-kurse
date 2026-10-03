# Lernvideo 51 – Was würdest du tun? Bus und Bahn

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Video 51
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzähler und Kwame (Porträt im Kreis, Mund nur in seinen Sätzen aus `sprache.json`).
  Bahn und Bus ohne sichtbare Fahrer, keine weiteren Menschen (Mitfahrende nur als Symbole, z. B. Sitz mit Gehstock-Symbol).
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Kauf dein Ticket vor der Fahrt, nimm Rücksicht und plan genug Zeit ein. Dann kommst du entspannt und pünktlich an.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/51-bus-und-bahn` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Haltestelle mit Wartehäuschen, Fahrplan, Ticketautomat; die Uhr am Mast springt auf „kurz vor sieben“; Kwame (Porträt) läuft herein; auf „zwei Minuten“ blinkt die Anzeige „2 min“, die Schienen summen (Vibrations-Linien); auf „kein Ticket“ öffnet Kwame die Ticket-App – das Ticket-Fach ist leer; auf „kaputt“ flackert das Display des Automaten und zeigt „Außer Betrieb“, Kwame zuckt, Schweißtropfen | Bahn kommt – kein Ticket |
| 2 | Dunkle Quiz-Bühne: drei Optionskarten A/B/C fliegen auf ihrem Buchstaben herein, jedes Symbol spielt: A offene Bahntür, ein durchgestrichenes Ticket hüpft hinein; B Bahn fährt, eine Lupe „Kontrolle“ nähert sich, ein Ticket wird hektisch herausgezogen; C Handy, ein Ticket mit Code tippt sich, daneben eine Uhr mit „nächste Bahn“ | A · B · C |
| 3 | Denkpause: Countdown-Ring läuft leer (erst „?“), ein Lichtrahmen wandert über A → B → C, 3 – 2 – 1 ploppen auf den gesprochenen Zahlen | 3 – 2 – 1 |
| 4 | Karte A nach vorn, rote Marke ✕, wird zur Kachel; helle Bühne: Innenraum der Bahn, die Lupe „Kontrolle“ wandert durch den Wagen und bleibt bei Kwame stehen; auf „Beförderungsentgelt“ rollt ein langer Zettel aus, auf „sechzig Euro“ purzeln Münzen aus dem Portemonnaie, Kamera-Akzent. Karte B als zweite Kachel, rote Marke ✕: Zeitstrahl „Einsteigen → Kontrolle“, eine Ticket-Marke soll bei „Einsteigen“ sitzen; auf „zu spät“ landet sie erst bei „Kontrolle“ und färbt sich rot | A & B: ohne Ticket – oft 60 € |
| 5 | Karte C nach vorn, grüne Marke ✓; Kwame tippt auf dem Handy, das Ticket mit Code baut sich auf, grüner Haken, Kwame lächelt (Mund nur in seinem Satz); die Bahn fährt ein (bremst, Türen gleiten auf); auf „aussteigen“ zeigen Pfeile aus der Tür nach außen, erst dann springt Kwame hinein; drinnen leuchtet ein Sitz mit Gehstock-Symbol, Kwame rutscht vom Sitz, ein Herz ploppt; auf „leise“ sinkt ein Lautstärke-Balken am Handy | C: Ticket vor der Fahrt |
| 6 | Deutschlandkarte: eine Ticket-Karte mit Monats-Kalender landet in der Mitte; auf „ganz Deutschland“ laufen Linien von Bus, Straßenbahn und Regionalzug über die Karte (Fernzug bleibt grau); auf „Jobticket“ schiebt das Betriebs-Gebäude einen Münzanteil zum Ticket; auf „entwerten“ fährt ein Papierticket in den Entwerter, der Stempel klackt, ein Datum erscheint | Monatsabo · Jobticket · Papier: entwerten |
| 7 | Dunkle Bühne: alle drei Karten, A und B verblassen, C wächst und leuchtet grün, grüne Welle; dann hell: Handy mit Abfahrts-Anzeige, „+5 min“ blinkt gelb; auf „früher“ springt Kwames Wecker eine Bahn zurück, Kwame kommt am Betrieb an, die Uhr dort zeigt Puffer, grüner Haken | Ticket vorher · eine Bahn früher |

Abspann: „Ticket zuerst.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“

Wie `../39-kunde-beschwert-sich/konzept.md`: helle Situations-Bühne (900 × 720), dunkel-violette Quiz-Bühne 1680 × 880 mit
drei weißen Optionskarten (Buchstabe + spielendes Symbol), Countdown-Ring unter den Karten; beim Durchspielen kommt die Karte
nach vorn, die Marke schlägt auf (rot ✕ / grün ✓), die Karte wird zur Kachel links oben, die Bühne wird hell und klein,
darunter steigt der Text im Bild. Ohne Kurstitel steht die erste Bühne in der Bildmitte (`kamera.basis.x = -360`).

## Hinweise zum Briefing

- Kein Kurstitel im Video; „Bahn kommt – kein Ticket“ ist Situation, kein Titel.
- **Kein Preis für das Deutschlandticket:** Es kostet seit 01.01.2026 63 € im Monat, ab 01.01.2027 aber 66,80 € (Beschluss
  vom 30.09.2026). Ein Preis im Video wäre in drei Monaten falsch, daher nur „Monatsabo“.
- **Erhöhtes Beförderungsentgelt** mit Betrag („oft sechzig Euro“): seit 2015 unverändert, im Nahverkehr „bis zu 60 €“, bei der
  Bahn das Doppelte des Fahrpreises, mindestens 60 € (Stand 03.10.2026). Gesprochen deshalb „oft“.
- „Platz anbieten“ und „aussteigen lassen“ ohne Menschen im Bild: Pfeile aus der Tür, Sitz mit Gehstock-Symbol.
- Ticket „im Bus beim Fahrer“ nicht erwähnt: das ist regional verschieden; „entwerten“ mit „manchmal“.
- Bewusst weggelassen: Strafbarkeit des Fahrens ohne Ticket (§ 265a StGB – zu schwer für B1 und politisch umstritten), Handy-Ticket bei
  leerem Akku, Fahrgastrechte bei Verspätung.
- Aussprache: Die Buchstaben der Optionen stehen deutsch ausgeschrieben („Ah“, „Beh“, „Zeh“), „Option C“ heißt gesprochen
  „Und Option Zeh:“ (kein Ein-Wort-Satz). Im Bild und im Untertitel bleiben A, B, C.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN
@stimme Kwame: hfqsl1OMbiWsgPpht3el

### Szene 1
Erzähler: Montag, kurz vor sieben. Kwame steht an der Haltestelle. Die Straßenbahn kommt in zwei Minuten. Aber Kwame hat noch kein Ticket.
Kwame: Oh nein, der Automat ist kaputt!

### Szene 2
Erzähler: Was würdest du tun? Ah: Einfach einsteigen. Es ist ja nur eine kurze Fahrt. Beh: Einsteigen und erst ein Ticket kaufen, wenn eine Kontrolle kommt. Zeh: Schnell ein Ticket in der App kaufen und dann einsteigen. Oder die nächste Bahn nehmen.

### Szene 3
(Pause 2)
Erzähler: Drei …
(Pause 0.3)
Erzähler: Zwei …
(Pause 0.3)
Erzähler: Eins …

### Szene 4
Erzähler: Option Ah: Ohne gültiges Ticket fahren kann teuer werden. Bei einer Kontrolle zahlst du ein erhöhtes Beförderungsentgelt, oft sechzig Euro.
(Pause 0.4)
Erzähler: Option Beh: Das klappt auch nicht. Du brauchst das Ticket schon beim Einsteigen. Wenn die Kontrolle kommt, ist es zu spät.

### Szene 5
Erzähler: Und Option Zeh: Kwame kauft das Ticket in der App.
Kwame: Das Ticket ist da, geschafft!
Erzähler: Die Bahn kommt. Kwame lässt zuerst die anderen aussteigen. Drinnen bietet er einer älteren Frau seinen Platz an. Und am Telefon spricht er leise.

### Szene 6
Erzähler: Du fährst jeden Tag? Dann ist ein Monatsabo praktisch, zum Beispiel das Deutschlandticket. Damit fährst du mit Bus und Bahn im Nahverkehr in ganz Deutschland. Frag in deinem Betrieb nach einem Jobticket. Oft zahlt der Betrieb dann einen Teil dazu. Und Papiertickets musst du manchmal vor der Fahrt entwerten, also stempeln.

### Szene 7
Erzähler: Die beste Wahl ist Zeh. Kauf dein Ticket immer vor der Fahrt. Schau morgens in der App, ob deine Bahn Verspätung hat. Und wenn du pünktlich sein musst, fahr lieber eine Bahn früher.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- Option Ah → Option A
- Option Beh → Option B
- Option Zeh → Option C
- Ah: → A:
- Beh: → B:
- Zeh: → C:
- ist Zeh → ist C
- sechzig Euro → 60 Euro

## Quellen

1. Verordnung über die Allgemeinen Beförderungsbedingungen für den Straßenbahn- und Obusverkehr sowie den Linienverkehr mit
   Kraftfahrzeugen (BefBedV), § 4 Verhalten der Fahrgäste, § 6 Beförderungsentgelte/Fahrausweise, § 9 Erhöhtes Beförderungsentgelt – https://www.gesetze-im-internet.de/befbedv/BefBedV.pdf
2. Correctiv-Faktencheck (24.09.2026): Schwarzfahren – angebliche Erhöhung auf 220 Euro ist erfunden – https://correctiv.org/faktencheck/2026/09/24/schwarzfahren-angebliche-erhoehung-auf-220-euro-ist-erfunden/
3. VGN Gemeinschaftstarif, Kapitel 1.6: Beförderungsentgelte, Fahrausweise, deren Verkauf und Stempelung – https://www.vgn.de/produkte/gemeinschaftstarif/kapitel/01/01.06
4. Bundesregierung: Deutschlandticket – Fragen und Antworten – https://www.bundesregierung.de/breg-de/aktuelles/deutschlandticket-2134074
5. Deutschlandticket (offizielle Seite) – https://deutschlandticket.de/
6. VGN: Deutschlandticket – https://www.vgn.de/tickets/deutschlandticket
7. ZDFheute: Deutschlandticket kostet ab Januar 66,80 Euro (30.09.2026) – https://www.zdfheute.de/politik/deutschland/deutschlandticket-preis-2027-regionalverkehr-nahverkehr-100.html
8. Deutsche Bahn: Deutschlandticket als Jobticket – Preis – https://www.bahn.de/bahnbusiness/faq/dt-jobticket-preis
9. Nahverkehr Schwerin: Öffi-Knigge – https://www.nahverkehr-schwerin.de/de/service/oe-ffi-knigge.html
10. IHK München: Streik, Hochwasser, Schneechaos – Arbeitsrecht (Wegerisiko) – https://www.ihk-muenchen.de/ratgeber/recht/arbeitsrecht/bestehende-arbeitsverhaeltnisse-kuendigung-sozialversicherung/streik-hochwasser-schneechaos/

## Faktencheck

Stand: 03.10.2026

| Aussage (Sprechertext / Text im Bild) | Beleg |
| --- | --- |
| Ohne gültiges Ticket fahren kann teuer werden; erhöhtes Beförderungsentgelt, oft 60 € / „ohne Ticket – oft 60 €“ | § 9 BefBedV: bis zu 60 € im Nahverkehr (Bus, Straßenbahn, U-Bahn) [1]; Bahn: doppelter Fahrpreis, mindestens 60 €; seit 2015 unverändert, keine Erhöhung beschlossen (Correctiv, 24.09.2026) [2] |
| Du brauchst das Ticket schon beim Einsteigen; bei der Kontrolle ist es zu spät. | BefBedV/Tarifbestimmungen: Fahrgast muss beim Betreten des Fahrzeugs mit gültigem Fahrausweis versehen sein; Kauf im Fahrzeug nur, wo dort verkauft wird, und dann sofort und unaufgefordert [1][3] |
| Ticket in der App kaufen | Handy-Tickets sind in Verbünden und beim Deutschlandticket üblich [3][5]; keine App genannt |
| Erst aussteigen lassen; leise telefonieren | Öffi-Knigge eines Verkehrsbetriebs [9]; § 4 BefBedV: Rücksicht auf andere Personen [1] |
| Platz für ältere Menschen anbieten | § 4 BefBedV: Sitzplätze für Schwerbehinderte, Ältere, Gebrechliche, werdende Mütter und Fahrgäste mit kleinen Kindern freigeben [1] |
| Deutschlandticket = Monatsabo, Nahverkehr in ganz Deutschland mit Bus und Bahn | Bundesregierung [4], deutschlandticket.de [5], VGN [6]: Abo, monatlich kündbar, bundesweit im Nahverkehr, nicht im Fernverkehr |
| Jobticket: der Betrieb zahlt einen Teil dazu | Deutschlandticket Job: Arbeitgeber zahlt mindestens 25 % Zuschuss, dafür 5 % Rabatt [8] |
| Papiertickets manchmal entwerten (stempeln) | VGN Tarif: Fahrausweise ohne Gültigkeitsaufdruck sind vor Fahrtantritt zu entwerten [3]; regional verschieden, daher „manchmal“ |
| Morgens Verspätung prüfen, lieber eine Bahn früher fahren | Wegerisiko trägt der Arbeitnehmer; pünktlich sein ist deine Pflicht [10] – Rat, keine Regel |
| (nicht im Video) Preis Deutschlandticket | 63 €/Monat seit 01.01.2026, 66,80 € ab 01.01.2027 [4][7] – deshalb weggelassen |
