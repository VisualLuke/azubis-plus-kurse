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
| 4 | [Rundfunkbeitrag](04-rundfunkbeitrag/) | Erklärvideo | Erzähler | 1:29 | fertig |
