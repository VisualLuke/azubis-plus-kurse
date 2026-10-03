# Lernvideo 66 – Erklärvideo: Nützliche Apps für den Start

- **Quelle:** Wunsch des Nutzers vom 03.10.2026 („Video zu nützlichen Apps, relativ am Anfang“), Sprechertext selbst geschrieben
- **Zielgruppe:** Azubis am Anfang in Deutschland, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzählerin), Ana als Figur (Porträt im Kreis, ohne Stimme)
- **Länge:** geplant ca. 1:45–2:00
- **Kernbotschaft:** Ein paar gute Apps machen den Start leichter: für den Weg zur Arbeit, die Wohnung, die Krankenkasse und
  deine Papiere. Lade sie nur aus dem offiziellen App-Store und erlaube nur, was sie wirklich brauchen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/66-nuetzliche-apps` (ElevenLabs, Eleven v4)

**Leitidee: Anas Startbildschirm.** Das ganze Video spielt auf einem großen Handy-Startbildschirm. Am Anfang ist er leer, Szene
für Szene ploppt eine App-Kachel auf (eigene, neutrale Kacheln im Stil C, der App-Name steht als Text darunter – **keine
Original-Logos**). Tippt Ana auf eine Kachel, zoomt die Kamera hinein und die Kachel öffnet sich zu einer kleinen Szene; danach
schrumpft sie zurück auf den Startbildschirm. Am Ende sind alle Kacheln in Ordnern sortiert („Unterwegs“, „Wohnen“, „Papiere“).

Vorgaben des Nutzers: App-Namen nennen (gesprochen und als Text auf eigenen Kacheln), keine Original-Logos. Die eigene App heißt
in diesem Video **„Azubis Plus App“** (ohne „Helper“).

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Leerer Startbildschirm auf einem großen Handy, Ana (Porträt) daneben mit Koffer; Uhr und Akku in der Statusleiste; bei „ein paar Apps“ ploppen sechs leere, gestrichelte Kachel-Plätze auf, bei „leichter“ füllt sich der Akku-Balken | – |
| 2 | Kachel „DB Navigator“ (Zug-Symbol) ploppt, Ana tippt; Zoom hinein: Suchmaske „von – nach“ tippt sich, Verbindungen rollen, eine Zeile zeigt „+5“ in Rot, ein Ticket mit QR-Code baut sich auf; bei „Deutschlandticket“ dreht sich eine Monatskarte; Zoom zurück | DB Navigator: Verbindung · Ticket · Verspätung |
| 3 | Kachel „Bus & Bahn“ (Bus-Symbol) mit Schild „deine Stadt“ ploppt; ein Stadtplan mit Linien zieht sich, ein Bus fährt eine Linie entlang, Haltestelle blinkt | App deines Verkehrsverbunds |
| 4 | Kachel „WG-Gesucht“ (Haus mit Schlüssel); Zoom hinein: Liste mit Zimmerkarten scrollt, Lupe; eine Nachricht „Hallo, ich bin Ana …“ tippt sich und fliegt ab | WG-Gesucht: Zimmer & kleine Wohnungen |
| 5 | Kachel „Kleinanzeigen“ (Preisschild); Zoom hinein: Kacheln mit Stuhl, Fahrrad, Lampe; ein Fahrrad bekommt ein Herz; bei „nie Geld vorab“ springt ein rotes Warnschild vor eine Überweisung, die zerreißt; bei „zuerst ansehen“ grünes Auge mit Haken | Kleinanzeigen: gebraucht kaufen – nie vorab zahlen |
| 6 | Kachel „AOK“ (Schild mit Kreuz, Beispiel); Zoom hinein: eine Bescheinigung kommt aus dem Handy (Download-Pfeil), ein Foto von einem Brief wird hochgeladen (Upload-Pfeil, Haken) | App deiner Krankenkasse, z. B. AOK |
| 7 | Kachel „Azubis Plus“ (Marken-Violett, Stern) ploppt größer als die anderen und federt; Zoom hinein: drei Bereiche gleiten nacheinander herein: Lektionen (Weg mit Stationen), Dokumente (Ordner mit Schloss, ein Brief fällt hinein), Aufgaben (Liste mit Fristen, eine Glocke wackelt) | Azubis Plus App: lernen · Dokumente · Fristen |
| 8 | Ein App-Store-Fenster ohne Marke (Einkaufstüten-Symbol) schiebt sich hoch; bei „offiziell“ grüner Haken; bei „wer die App anbietet“ fährt eine Lupe über die Zeile „Anbieter“; bei „erlauben“ erscheint ein Dialog „Zugriff auf Kontakte?“ → Ana tippt „Nicht erlauben“, Dialog „Zugriff auf Kamera?“ → „Erlauben“, Kamera-Symbol mit Brief | Nur aus dem offiziellen Store · nur nötige Rechte |
| 9 | Zurück zum Startbildschirm: die Kacheln fliegen in drei Ordner „Unterwegs“, „Wohnen“, „Papiere“, die Azubis Plus App bleibt groß unten im Dock; Ana lächelt, das Handy zoomt heraus | – |

Abspann: „Die richtigen Apps machen vieles leichter.“

## Abweichungen und Hinweise

- **Marken:** Die App-Namen sind Inhalt (Wunsch des Nutzers). Im Bild nur eigene Kacheln im Stil C mit Namen als Text –
  keine Original-Logos, Farben oder Screenshots der Apps.
- **Krankenkasse:** nur die AOK als Beispiel (Vorgabe), Funktionen allgemein formuliert („zum Beispiel“), weil sie je Kasse
  verschieden sind.
- **Azubis Plus App:** nur Bereiche, die es als Components gibt (Lernen, Dokumente, Ankommen mit Aufgaben und Fristen);
  vor dem Freischalten prüfen, ob sie für Azubis schon live sind.
- **Umsetzung im Bild (03.10.2026):** Kachel der Krankenkasse als Schild mit Herz statt Kreuz (kein Rotkreuz-ähnliches Zeichen);
  Kachelfarben neutral (Token), nicht die Markenfarben der Apps. Bei „Lektionen wie dieser“ zeigt die Lektionskarte dieses Video im Kleinen.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Das ist Ana. Sie ist neu in Deutschland, und ihr Handy ist noch fast leer. Ein paar gute Apps machen den Start viel leichter. Hier sind die wichtigsten.

### Szene 2
Erzählerin: Für Bahnfahrten gibt es den DB Navigator. Dort suchst du deine Verbindung, kaufst dein Ticket und siehst, ob dein Zug Verspätung hat. Auch das Deutschlandticket bekommst du dort.

### Szene 3
Erzählerin: Für Bus und Bahn in deiner Stadt hat dein Verkehrsverbund oft eine eigene App. Dort findest du den Fahrplan und die Tickets für deine Region.

### Szene 4
Erzählerin: Du suchst ein Zimmer? Bei WG-Gesucht findest du WG-Zimmer und kleine Wohnungen. Schreib eine kurze, freundliche Nachricht über dich. Dann bekommst du eher eine Antwort.

### Szene 5
Erzählerin: Bei Kleinanzeigen verkaufen Leute gebrauchte Sachen, zum Beispiel Möbel, Fahrräder oder Lampen. Das spart viel Geld. Aber Achtung: Überweise nie Geld vorab. Schau dir alles zuerst an.

### Szene 6
Erzählerin: Auch deine Krankenkasse hat eine App, zum Beispiel die AOK. Damit bekommst du Bescheinigungen und schickst Unterlagen einfach als Foto.

### Szene 7
Erzählerin: Und dann die Azubis Plus App. Hier lernst du mit Lektionen wie dieser. Du legst deine Dokumente sicher ab. Und du behältst deine Aufgaben und Fristen im Blick.

### Szene 8
Erzählerin: Ganz wichtig: Lade Apps nur aus dem offiziellen App-Store auf deinem Handy. Schau, wer die App anbietet. Und erlaube nur, was die App wirklich braucht, zum Beispiel die Kamera für Fotos von Briefen.

### Szene 9
Erzählerin: So hat Ana alles dabei: für den Weg zur Arbeit, für die Wohnung und für ihre Papiere.

## Schreibweise im Untertitel


## Quellen

Eigene Kenntnis der Apps (Stand 10/2026); nur allgemeine Funktionen, keine Preise. Gegenprüfung offen (siehe Faktencheck).
1. Deutsche Bahn: DB Navigator (Verbindungen, Tickets, Echtzeit-Infos, Deutschlandticket als Abo) – https://www.bahn.de/service/mobile/db-navigator
2. WG-Gesucht (WG-Zimmer, 1-Zimmer-Wohnungen, Wohnungen) – https://www.wg-gesucht.de
3. Kleinanzeigen (Kleinanzeigen-Portal, früher eBay Kleinanzeigen) und Sicherheitshinweise – https://www.kleinanzeigen.de
4. AOK: App „AOK Mein Leben“ / Online-Service (Bescheinigungen, Unterlagen einreichen) – https://www.aok.de
5. Verbraucherzentrale: App-Berechtigungen und sichere App-Quellen – https://www.verbraucherzentrale.de
6. Bundesamt für Sicherheit in der Informationstechnik (BSI): Apps nur aus offiziellen Stores – https://www.bsi.bund.de
7. Lernvideo 56 / Faktencheck 46–65: nie Geld vorab bei Anzeigen (Polizei, Verbraucherzentrale)

## Faktencheck

| Aussage | Quelle |
| --- | --- |
| DB Navigator: Verbindung suchen, Ticket kaufen, Verspätung sehen; Deutschlandticket dort erhältlich | 1 |
| Verkehrsverbünde haben oft eigene Apps mit Fahrplan und Tickets („oft“, regional verschieden) | allgemeine Kenntnis, regional |
| WG-Gesucht: WG-Zimmer und kleine Wohnungen | 2 |
| Kleinanzeigen: gebrauchte Sachen; nie Geld vorab überweisen, zuerst ansehen | 3, 7 |
| Krankenkassen-Apps (z. B. AOK): Bescheinigungen bekommen, Unterlagen als Foto einreichen | 4 – Funktionsumfang je Kasse verschieden, darum „zum Beispiel“ |
| Azubis Plus App: Lektionen, Dokumente, Aufgaben und Fristen | WeWeb-Components `lektionen_game_overview`, `helperapp_dokumente`, `helperapp_arrival` |
| Apps nur aus dem offiziellen Store, Anbieter prüfen, nur nötige Berechtigungen | 5, 6 |

Aussprache 03.10.2026 (Hörprobe, Nutzer): Abkürzungen und Anglizismen in normaler Schreibweise (AOK, IBAN, Prepaid, SIM, WG, WLAN, PSA, Scanner, Helper, DB Navigator); nur „Steuer-Aidih“ bleibt Lautschrift.
