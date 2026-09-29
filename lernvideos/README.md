# Lernvideos – 30 Kurse für internationale Azubis

Quelle: Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“. Nummern und Themen aus dem Briefing,
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
