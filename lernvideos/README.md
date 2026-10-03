# Lernvideos – 68 Kurse für internationale Azubis

Quelle: Briefings „Azubis Plus – 30 Lernvideos für internationale Azubis“ und „Azubis Plus – Lernvideos 31–45“; 46–65 aus eigener Recherche, 66–68 auf Wunsch des Nutzers ([`BRIEFING-46-65.md`](BRIEFING-46-65.md), Faktencheck in [`faktencheck-46-65.md`](faktencheck-46-65.md)). Nummern und Themen aus dem Briefing,
Sprechertext je Kurs in `NN-thema/konzept.md` (Abschnitt `## Sprechertext`), Korrekturen am Briefing in `korrekturen.md`.

Ablauf je Kurs:

```sh
node werkzeug/stimme.mjs lernvideos/01-krankenkasse            # Stimme (ElevenLabs, Satz für Satz)
node werkzeug/rendern.mjs lernvideos/01-krankenkasse --nur-html
node werkzeug/pruefen.mjs lernvideos/01-krankenkasse            # Ruckler, Kanten, Überlappungen – muss sauber sein
node werkzeug/rendern.mjs lernvideos/01-krankenkasse --standbilder 12,30.5
node werkzeug/rendern.mjs lernvideos/01-krankenkasse            # film.mp4 + film-poster.png
```

Stimmen: Erklärvideos meist Erzähler (`K8bIZwDsGMHreGKTIVHN`), einzelne Erzählerin (`oClOrzqamOXmtcB8iqTj`);
Rollen siehe `werkzeug/stimme.mjs`. Modell Eleven v4.

**Stand 03.10.2026:** 1–45 fertig (29.09.), 46–65 neu (03.10.). Die aktuelle Fassung jedes Videos ist `film.mp4` im Kursordner (mit `film-poster.png`
und Untertiteln `film.vtt`); ältere Fassungen gibt es nur in der Git-Historie.

| Nr. | Thema | Format | Stimme | Länge | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | [Krankenkasse & Versichertenkarte](01-krankenkasse/) | Erklärvideo | Erzähler | 1:48 | fertig |
| 2 | [Zum Arzt gehen](02-zum-arzt/) | Erklärvideo | Erzähler | 1:42 | fertig |
| 3 | [Mülltrennung](03-muelltrennung/) | Erklärvideo | Erzählerin | 1:52 | fertig |
| 4 | [Rundfunkbeitrag](04-rundfunkbeitrag/) | Erklärvideo | Erzähler | 1:29 | fertig |
| 5 | [Aufenthaltstitel verlängern](05-aufenthaltstitel/) | Erklärvideo | Erzählerin | 1:38 | fertig |
| 6 | [Arbeitsunfall & Wegeunfall](06-arbeitsunfall/) | Erklärvideo | Erzähler | 1:31 | fertig |
| 7 | [Mietvertrag verstehen](07-mietvertrag/) | Podcast | Mai, Jonas | 1:55 | fertig |
| 8 | [Nebenjob während der Ausbildung](08-nebenjob/) | Podcast | Kwame, Jonas | 1:39 | fertig |
| 9 | [Zwischen- und Abschlussprüfung](09-pruefungen/) | Podcast | Priya, Sabine | 1:33 | fertig |
| 10 | [Heimweh & die ersten Monate](10-heimweh/) | Podcast | Mai, Jonas | 1:48 | fertig |
| 11 | [Nach der Ausbildung](11-nach-der-ausbildung/) | Podcast | Amir, Sabine | 1:39 | fertig |
| 12 | [Mythos oder Wahrheit: Rund ums Geld](12-mythos-geld/) | Mythos oder Wahrheit | Erzähler | 1:42 | fertig |
| 13 | [Mythos oder Wahrheit: Krank sein](13-mythos-krank/) | Mythos oder Wahrheit | Erzählerin | 1:54 | fertig |
| 14 | [Mythos oder Wahrheit: Ausbildung](14-mythos-ausbildung/) | Mythos oder Wahrheit | Erzähler | 1:54 | fertig |
| 15 | [Mythos oder Wahrheit: Wohnen & Versicherungen](15-mythos-wohnen/) | Mythos oder Wahrheit | Erzählerin | 2:02 | fertig |
| 16 | [Was würdest du tun? Verschlafen am Berufsschultag](16-verschlafen/) | Was würdest du tun? | Erzähler, Mai | 1:44 | fertig |
| 17 | [Was würdest du tun? Ein Brief mit „Frist“](17-brief-mit-frist/) | Was würdest du tun? | Erzähler, Amir | 1:56 | fertig |
| 18 | [Was würdest du tun? Kritik vom Chef](18-kritik-vom-chef/) | Was würdest du tun? | Erzählerin, Priya, Küchenchef | 1:53 | fertig |
| 19 | [Was würdest du tun? „Ihr Konto wurde gesperrt“](19-konto-gesperrt/) | Was würdest du tun? | Erzähler, Kwame | 1:43 | fertig |
| 20 | [Der schlechte Tag: Amirs Urlaub](20-amirs-urlaub/) | Der schlechte Tag | Erzählerin, Amir, Sabine | 1:29 | fertig |
| 21 | [Der schlechte Tag: Mais Post](21-mais-post/) | Der schlechte Tag | Erzähler, Mai | 1:29 | fertig |
| 22 | [Der schlechte Tag: Kwames erster Arbeitstag](22-kwames-erster-tag/) | Der schlechte Tag | Erzähler, Kwame, Frau Krause, Sabine | 1:36 | fertig |
| 23 | [Heimat vs. Deutschland: Pünktlichkeit](23-puenktlichkeit/) | Heimat vs. Deutschland | Erzähler | 1:30 | fertig |
| 24 | [Heimat vs. Deutschland: Direkte Kritik & Hierarchie](24-kritik-und-hierarchie/) | Heimat vs. Deutschland | Erzählerin | 1:30 | fertig |
| 25 | [Heimat vs. Deutschland: Sonntag & Hausordnung](25-sonntag-hausordnung/) | Heimat vs. Deutschland | Erzähler | 1:32 | fertig |
| 26 | [Fachvokabeln: Gastronomie](26-vokabeln-gastronomie/) | Fachvokabeln | Erzählerin, Priya, Küchenchef | 1:41 | fertig |
| 27 | [Fachvokabeln: Bäckerei](27-vokabeln-baeckerei/) | Fachvokabeln | Erzähler, Yusuf, Bäckermeisterin | 1:48 | fertig |
| 28 | [Fachvokabeln: Pflege](28-vokabeln-pflege/) | Fachvokabeln | Erzähler, Mai, Praxisanleiterin | 1:58 | fertig |
| 29 | [Fachvokabeln: Handwerk & Elektro](29-vokabeln-elektro/) | Fachvokabeln | Erzählerin, Kwame, Geselle | 2:09 | fertig |
| 30 | [Fachvokabeln: Was der Chef wirklich meint](30-was-der-chef-meint/) | Fachvokabeln | Erzähler, Sabine, Amir | 2:04 | fertig |
| 31 | [Fachvokabeln: Allgemeine Wörter in der Ausbildung](31-vokabeln-ausbildung/) | Fachvokabeln | Erzählerin, Sabine, Kwame | 2:17 | fertig |
| 32 | [Wer ist wer im Betrieb?](32-wer-ist-wer/) | Erklärvideo | Erzähler | 1:35 | fertig |
| 33 | [Deine erste Woche in der Berufsschule](33-erste-woche-berufsschule/) | Podcast | Priya, Jonas | 1:46 | fertig |
| 34 | [Was würdest du tun? Telefonieren auf Deutsch](34-telefonieren/) | Was würdest du tun? | Erzähler, Mai, Frau Wolf | 1:58 | fertig |
| 35 | [Der schlechte Tag: Kwames Nachrichten](35-kwames-nachrichten/) | Der schlechte Tag | Erzähler, Kwame | 1:48 | fertig |
| 36 | [Heimat vs. Deutschland: Freundschaften](36-freundschaften/) | Heimat vs. Deutschland | Erzählerin | 1:48 | fertig |
| 37 | [Mythos oder Wahrheit: Feiertage & Traditionen](37-mythos-feiertage/) | Mythos oder Wahrheit | Erzähler | 2:10 | fertig |
| 38 | [Betriebsrat, JAV & Gewerkschaft](38-betriebsrat-jav/) | Podcast | Mai, Jonas | 1:53 | fertig |
| 39 | [Was würdest du tun? Ein Kunde beschwert sich](39-kunde-beschwert-sich/) | Was würdest du tun? | Erzählerin, Amir, Herr Braun | 1:55 | fertig |
| 40 | [Fachvokabeln: Kfz-Werkstatt](40-vokabeln-kfz/) | Fachvokabeln | Erzähler, Amir, Sabine | 1:54 | fertig |
| 41 | [Fachvokabeln: Hotel](41-vokabeln-hotel/) | Fachvokabeln | Erzähler, Ana, Empfangschefin | 1:58 | fertig |
| 42 | [Was ist ein Verein?](42-verein/) | Erklärvideo | Erzähler | 1:41 | fertig |
| 43 | [Wie funktioniert die Demokratie?](43-demokratie/) | Erklärvideo | Erzählerin | 2:02 | fertig |
| 44 | [Das Grundgesetz – deine Grundrechte](44-grundgesetz/) | Erklärvideo | Erzähler | 1:39 | fertig |
| 45 | [Prüfungssprache: Was will die Aufgabe von mir?](45-pruefungssprache/) | Erklärvideo | Erzählerin | 1:55 | fertig |
| 46 | [Die ersten 14 Tage](46-die-ersten-14-tage/) | Erklärvideo | Erzähler | 1:45 | fertig |
| 47 | [Steuer-ID und Sozialversicherungsnummer](47-steuer-id/) | Erklärvideo | Erzählerin | 2:07 | fertig |
| 48 | [Der erste Termin bei der Ausländerbehörde](48-auslaenderbehoerde/) | Der schlechte Tag | Erzähler, Priya | 1:52 | fertig |
| 49 | [Handy und SIM-Karte](49-handy-sim/) | Was würdest du tun? | Erzählerin, Yusuf | 2:01 | fertig |
| 50 | [Zu Fuß im Straßenverkehr](50-zu-fuss/) | Erklärvideo | Erzählerin | 1:45 | fertig |
| 51 | [Bus und Bahn](51-bus-und-bahn/) | Was würdest du tun? | Erzähler, Kwame | 2:00 | fertig |
| 52 | [Fahrrad fahren](52-fahrrad/) | Mythos oder Wahrheit | Erzähler | 2:16 | fertig |
| 53 | [Sicher im Winter](53-winter/) | Erklärvideo | Erzähler | 1:46 | fertig |
| 54 | [Notruf richtig nutzen](54-notruf/) | Was würdest du tun? | Erzählerin, Mai | 2:25 | fertig |
| 55 | [Heizen und Lüften](55-heizen-lueften/) | Der schlechte Tag | Erzählerin, Priya | 2:12 | fertig |
| 56 | [Ein WG-Zimmer finden](56-wg-zimmer/) | Was würdest du tun? | Erzähler, Yusuf | 2:11 | fertig |
| 57 | [Das Berichtsheft führen](57-berichtsheft/) | Podcast | Kwame, Sabine | 1:39 | fertig |
| 58 | [Arbeitsschutz und Schutzkleidung](58-arbeitsschutz/) | Erklärvideo | Erzähler | 1:52 | fertig |
| 59 | [Du oder Sie?](59-du-oder-sie/) | Heimat vs. Deutschland | Erzählerin | 2:02 | fertig |
| 60 | [Smalltalk in der Pause](60-smalltalk/) | Was würdest du tun? | Erzählerin, Kwame, Geselle | 1:55 | fertig |
| 61 | [Dein Geld im Monat planen](61-geld-planen/) | Erklärvideo | Erzählerin | 2:14 | fertig |
| 62 | [Geld nach Hause schicken](62-geld-nach-hause/) | Erklärvideo | Erzähler | 2:03 | fertig |
| 63 | [Wortschatz Einzelhandel](63-vokabeln-einzelhandel/) | Fachvokabeln | Erzähler, Priya, Filialleiterin | 2:22 | fertig |
| 64 | [Wortschatz Lager und Logistik](64-vokabeln-lager/) | Fachvokabeln | Erzählerin, Yusuf, Kollege | 2:37 | fertig |
| 65 | [Wortschatz Sanitär, Heizung, Klima](65-vokabeln-shk/) | Fachvokabeln | Erzählerin, Kwame, Geselle | 2:38 | fertig |
| 66 | [Nützliche Apps für den Start](66-nuetzliche-apps/) | Erklärvideo | Erzählerin (Ana als Figur) | 1:53 | fertig |
| 67 | [Wortschatz Naturwerkstein](67-vokabeln-naturstein/) | Fachvokabeln | Erzähler, Kwame, Sabine | 2:47 | fertig |
| 68 | [Wortschatz Straßenbau](68-vokabeln-strassenbau/) | Fachvokabeln | Erzählerin, Amir, Geselle | – | in Arbeit |
