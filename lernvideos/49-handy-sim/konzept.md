# Lernvideo 49 – Was würdest du tun? Handy und SIM-Karte

- **Quelle:** Briefing „Lernvideos 46–65 (eigene Recherche)“, Video 49 – Sprechertext selbst geschrieben, Stand 03.10.2026
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Was würdest du tun? – Erzählerin und Yusuf (Porträt im Kreis, Mund nur in seinen Sätzen); der Verkäufer ist
  keine Figur und spricht nicht selbst: ein Ladentisch mit Aufsteller, die Erzählerin gibt wieder, was er sagt
- **Länge:** geplant ca. 1:30–2:00
- **Kernbotschaft:** Lass dich im Laden nicht drängen. Nimm die Vertragszusammenfassung mit, vergleiche in Ruhe – für den Anfang reicht oft Prepaid.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/49-handy-sim` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Helle Bühne in der Bildmitte: Handyladen (Ladentisch, Regal mit Handys ohne Logo, Aufsteller); Yusuf (Porträt) hüpft herein, neben ihm schwebt eine leere SIM-Karten-Form mit „?“; auf „neueste Handy“ fährt ein Handy auf einem Drehteller aus dem Tisch und dreht sich, Glanzlicht; Yusuf spricht, seine Augen werden groß, dann „?“ bei „teuer“; auf „Nur heute“ klappt ein rotes Schild herunter und wackelt, auf „vierundzwanzig Monate“ entrollt sich ein langer Vertrag über den Tisch, ein Stift rollt auf „unterschreib“ zu Yusuf | Nur heute! · 24 Monate |
| 2 | Schaufenster des Ladens (dunkle Bühne mit Fensterrahmen und Stange): drei Tarif-Preisschilder A/B/C schwingen an Fäden herunter (Pendel), jedes Symbol spielt: A Stift unterschreibt schnell (Zickzack); B Stift unterschreibt, dann Pfeil zurück zu einem Briefkasten („zurückgeben?“); C Blatt „Vertragszusammenfassung“ wandert in eine Tasche, daneben eine Waage, die zwei Angebote wiegt | A · B · C |
| 3 | Denkpause: Countdown-Ring läuft leer (erst „?“), ein Lichtrahmen wandert über die Schilder A → B → C, 3 – 2 – 1 ploppen auf den gesprochenen Zahlen | 3 – 2 – 1 |
| 4 | Schild A nach vorn, rote Marke ✕, wird zur Kachel; helle Bühne als Zeitraffer über 24 Monate: ein Abreißkalender rauscht von Monat 1 bis 24, für jeden Monat fliegt eine Münze aus Yusufs Geldbörse auf eine Rechnung, die immer länger wird; auf „Zusatzoptionen“ hängen sich zwei Zusatz-Kärtchen mit Büroklammern an den Vertrag, in jeder Zeile der Rechnung kommt eine zweite Münze dazu. Schild B als zweite Kachel, rote Marke ✕: der Vertrag fliegt zum Briefkasten, prallt an einem Schild „Laden: kein Widerruf“ ab und fällt zurück, Stempel „unterschrieben“ schlägt mit Wackler auf, danach rauscht ein Abreißkalender durch die 24 Monate | A: zu teuer · B: kein Widerruf im Laden |
| 5 | Karte C nach vorn, grüne Marke ✓; Laden hell: Yusuf spricht ruhig, das rote Schild „Nur heute!“ verblasst; das Blatt „Vertragszusammenfassung“ gleitet zusammengefaltet hinter dem Tresen hervor und entfaltet sich auf „Anbieter“ wie eine Ziehharmonika; auf „Preis“, „Laufzeit“, „Kündigung“ leuchten die drei Falten auf; das Blatt fliegt in Yusufs Tasche, Yusuf freut sich | C: Zusammenfassung mitnehmen · vergleichen |
| 6 | Zuhause: Waage mit zwei Karten „Prepaid“ und „Vertrag“; auf „Guthaben“ füllt sich ein Balken auf der Prepaid-Karte, auf „im Griff“ legt sich ein Schloss auf die Geldbörse; auf „ausweisen“ wird ein Pass vor die Kamera eines Handys gehalten, Scan-Linie, Haken; auf „Vertrag“ kippt die Waage: Zeitstrahl mit 24 Feldern läuft voll, danach erscheinen einzelne Monatsfelder, auf „jeden Monat“ springt ein kleiner Kündigen-Knopf auf | Prepaid: Kosten im Griff · Vertrag: max. 24 Monate |
| 7 | Globus (neutral, ohne Grenzen), vom Handy startet ein Anruf-Bogen in die Ferne, ein Münzstapel wächst schnell, rotes „!“; auf „Tarif“ Lupe über einer Tarif-Karte, Zeile „Ausland“ leuchtet; auf „Internet“ und „Weh-Lahn“ Router mit Wellen, der Bogen wird grün, der Zähler steht still, Yusuf lächelt; Schluss: die drei Preisschilder im Schaufenster, A und B verblassen, C kommt nach vorn und leuchtet grün, grüne Welle, die Waage auf C wiegt noch einmal | Anrufe ins Ausland: Tarif prüfen · WLAN |

Abspann: „Lass dich nicht drängen.“ und die Kernbotschaft.

## Layout „Was würdest du tun?“ – Schaufenster mit Preisschildern

Technik wie `../39-kunde-beschwert-sich/` (Bühnen, Kamera, Marke, Countdown), aber eigenes Bild: Die Quiz-Bühne ist das
Schaufenster des Handyladens (dunkel-violett, Fensterrahmen, Stange oben). Die Optionen sind keine Karten, sondern drei
Tarif-Preisschilder mit Loch und Faden, die von der Stange herunterschwingen (Pendel um den Aufhängepunkt). Beim Durchspielen
kommt das Schild nach vorn, die Marke schlägt auf (rot ✕ / grün ✓), der Faden löst sich und das Schild wird zur Kachel links oben,
die Bühne wird hell und klein, darunter steigt der Text im Bild. Option A und B laufen als Zeitraffer über 24 Monate
(Abreißkalender, wachsende Rechnung); die Vertragszusammenfassung entfaltet sich als Ziehharmonika. Ohne Kurstitel steht die
erste Bühne in der Bildmitte (`kamera.basis.x = -360`).

## Abweichungen vom Briefing

- Kein Kurstitel im Video; die erste Bühne steht mittig.
- Der Verkäufer ist keine Figur und hat keine Stimme (das Briefing nennt nur Erzählerin und Yusuf); „Nur heute!“ und
  „24 Monate“ stehen als Schild bzw. Vertrag im Bild.
- Keine Marken, keine Anbieter- oder App-Namen; Handys ohne Logo. „Messenger“ wird gesprochen als „übers Internet im WLAN“.
- Option B (Vertrag später widerrufen) ist neu: Sie zeigt den häufigen Irrtum, dass man einen Ladenvertrag zurückgeben kann.
  „Meistens“, weil es Ausnahmen gibt (z. B. bei einer Finanzierung des Handys).
- Zusatz-Abos/Drittanbieter: nur als „Zusatzoptionen, die er nicht braucht“ in Option A; die Drittanbietersperre wird aus
  Zeitgründen nicht erklärt.
- Kündigung online (Kündigungsbutton) nicht gesprochen, nur der Kündigen-Knopf im Bild – er gilt nur, wo man auch online
  abschließen kann.
- Aussprache: Buchstaben der Optionen deutsch („Ah“, „Beh“, „Zeh“), „Simm-Karte“, „Pri-Peid“, „Weh-Lahn“; Rückführung
  unter „Schreibweise im Untertitel“.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj
@stimme Yusuf: hfqsl1OMbiWsgPpht3el

### Szene 1
Erzählerin: Yusuf braucht eine Simm-Karte. Im Laden zeigt ihm ein Verkäufer das neueste Handy.
Yusuf: Wow, das ist schön. Aber ist das nicht sehr teuer?
Erzählerin: Der Verkäufer sagt: Nur heute! Mit Vertrag über vierundzwanzig Monate. Unterschreib einfach hier.

### Szene 2
Erzählerin: Was würdest du tun? Ah: Sofort unterschreiben, das Angebot gilt ja nur heute. Beh: Unterschreiben und den Vertrag zu Hause einfach zurückgeben. Zeh: Nichts unterschreiben, die Vertragszusammenfassung mitnehmen und in Ruhe vergleichen.

### Szene 3
(Pause 2)
Erzählerin: Drei …
(Pause 0.3)
Erzählerin: Zwei …
(Pause 0.3)
Erzählerin: Eins …

### Szene 4
Erzählerin: Option Ah: Yusuf zahlt jetzt zwei Jahre lang jeden Monat. Und im Vertrag stecken Zusatzoptionen, die er gar nicht braucht.
(Pause 0.4)
Erzählerin: Option Beh: Das klappt meistens nicht. Für Verträge im Laden gibt es in der Regel kein Widerrufsrecht. Unterschrieben ist unterschrieben.

### Szene 5
Erzählerin: Und Option Zeh:
Yusuf: Danke, ich überlege noch. Kann ich die Vertragszusammenfassung mitnehmen?
Erzählerin: Die muss der Anbieter dir vor dem Vertrag geben. Darauf stehen Preis, Laufzeit und Kündigung.

### Szene 6
Erzählerin: Für den Anfang reicht oft eine Pri-Peid-Karte. Du lädst Guthaben auf und hast die Kosten im Griff. Beim Kauf musst du dich ausweisen, zum Beispiel mit deinem Pass. Ein Vertrag läuft höchstens vierundzwanzig Monate. Danach kannst du jeden Monat kündigen.

### Szene 7
Erzählerin: Und Anrufe nach Hause? Die sind in vielen Tarifen nicht drin und können teuer sein. Prüf deinen Tarif, oder telefonier übers Internet im Weh-Lahn. Die beste Wahl ist Zeh. Lass dich nicht drängen.

## Schreibweise im Untertitel

- Simm-Karte → SIM-Karte
- vierundzwanzig Monate → 24 Monate
- Option Ah → Option A
- Option Beh → Option B
- Option Zeh → Option C
- Ah: → A:
- Beh: → B:
- Zeh: → C:
- ist Zeh → ist C
- Pri-Peid-Karte → Prepaid-Karte
- Weh-Lahn → WLAN

## Quellen

1. Telekommunikationsgesetz (TKG) § 56 Vertragslaufzeit, Kündigung nach stillschweigender Vertragsverlängerung (höchstens 24 Monate; danach mit einem Monat Frist kündbar; Pflicht, auch 12 Monate anzubieten) – https://www.gesetze-im-internet.de/tkg_2021/__56.html ; dejure: https://dejure.org/gesetze/TKG/56.html
2. Telekommunikationsgesetz (TKG) § 54 Vertragsschluss und Vertragszusammenfassung – https://www.gesetze-im-internet.de/tkg_2021/__54.html
3. Verbraucherzentrale: Vor dem Abschluss – Telefon-Anbieter müssen Vertragsdetails bereitstellen (Vertragszusammenfassung mit Preisen, Laufzeit, Kündigung) – https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/vertragszusammenfassung-neues-gesetz-gegen-untergeschobene-vertraege-65491
4. Verbraucherzentrale Niedersachsen: Telefonvertrag – Vertragsschluss im Laden (kein Widerrufsrecht im Laden) – https://www.verbraucherzentrale-niedersachsen.de/themen/internet-telefon/mobilfunk/telefonvertrag-vertragsschluss-im-laden-darauf-sollten-sie-achten
5. Verbraucherzentrale Hessen: Unterschrieben im Laden – kein Recht auf Widerruf – https://www.verbraucherzentrale-hessen.de/vertraege-reklamation/unterschrieben-im-laden-kein-recht-auf-widerruf-39006
6. Verbraucherzentrale Hamburg: Vertragsfalle Handy-Shop (Druck im Laden, zusätzliche Verträge/Optionen untergeschoben, 24 Monate gebunden) – https://www.vzhh.de/themen/telefon-internet/probleme-festnetz-handy-internet/vertragsfalle-handy-shop-so-schuetzen-sie-sich-vor-teuren-mobilfunkvertraegen
7. Verbraucherzentrale: Handy-Tarife – Prepaid oder Laufzeitvertrag? (Prepaid: Guthaben, keine Grundgebühr, Kostenkontrolle) – https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/handytarife-prepaid-oder-laufzeitvertrag-59732
8. Telekommunikationsgesetz (TKG) § 172 (Identitätsprüfung bei Prepaid-Karten) – https://www.gesetze-im-internet.de/tkg_2021/__172.html ; VG Köln, Pressemitteilung 01.12.2020 – https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2020/44_201201/index.php
9. Verbraucherzentrale: Mobilfunk – Worauf Flüchtlinge bei Verträgen und Tarifen achten sollten (Auslandsgespräche meist nicht in der Flatrate, Auslandsoptionen; WLAN oft am günstigsten) – https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/mobilfunk-worauf-fluechtlinge-bei-vertraegen-und-tarifen-achten-sollten-12241
10. Verbraucherzentrale Niedersachsen: Unveränderte Gebühren für Telefonate ins EU-Ausland (Anrufe in Nicht-EU-Länder können teuer sein; Messenger-Anrufe übers Internet) – https://www.verbraucherzentrale-niedersachsen.de/wissen/digitale-welt/mobilfunk-und-festnetz/unveraenderte-gebuehren-fuer-telefonate-ins-euausland-120021

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Quelle |
| --- | --- |
| Vertrag über 24 Monate („Nur heute! · 24 Monate“ = Situation im Laden) | [1], [6] (übliche Laufzeit) |
| Option A: zwei Jahre lang jeden Monat zahlen | [1], [9] |
| Zusatzoptionen im Vertrag, die man nicht braucht („A: zu teuer“) | [6] (Beschwerden über untergeschobene Zusatzverträge/-optionen); als Geschichte erzählt |
| Für Verträge im Laden gibt es in der Regel kein Widerrufsrecht („B: kein Widerruf im Laden“) | [4], [5], [6] („meistens/in der Regel“, Ausnahmen z. B. bei Finanzierung) |
| Vertragszusammenfassung muss vor dem Vertrag gegeben werden; darauf Preis, Laufzeit, Kündigung („C: Zusammenfassung mitnehmen · vergleichen“) | [2], [3] |
| Prepaid: Guthaben aufladen, Kosten im Griff („Prepaid: Kosten im Griff“) | [7] |
| Beim Kauf ausweisen, z. B. mit dem Pass | [8] |
| Vertrag höchstens 24 Monate („Vertrag: max. 24 Monate“) | [1] (Stand 03.10.2026, TKG seit 01.12.2021) |
| Danach jeden Monat kündbar | [1] (nach Ablauf der Mindestlaufzeit jederzeit mit einem Monat Frist) |
| Anrufe nach Hause sind in vielen Tarifen nicht drin und können teuer sein; Tarif prüfen („Anrufe ins Ausland: Tarif prüfen“) | [9], [10] |
| Übers Internet im WLAN telefonieren („WLAN“) | [9], [10] |
