# Anleitung: Quizfragen je Lektion (fragen.json)

Für jede zugeteilte Lektion (Ordner laut `import/plan.json`) eine Datei `<ordner>/fragen.json` schreiben.

## Quelle – nichts erfinden
- Inhalt nur aus dem, was im Video gesagt/gezeigt wird: `<ordner>/film.vtt` (Untertitel = gesprochener Text, maßgeblich),
  `<ordner>/konzept.md` (Abschnitt „## Sprechertext“ und Szenentabelle „Text im Bild“), bei Lernvideos
  `lernvideos/korrekturen.md` (Korrekturen sind im Video umgesetzt). Keine Fakten von außen, keine Beträge/Fristen,
  die nicht im Video vorkommen.
- `kurse/04-rechte-pflichten` hat weder Untertitel noch Sprechertext als Datei: dort nur aus der Szenentabelle in
  `konzept.md` (Spalten „Bild“ und „Text im Bild“) und `film.vorlage.html` (sichtbare Texte) – im Feld `hinweis` vermerken.

## Regeln
- Anzahl: `fragen_ziel` aus plan.json als Richtwert, erlaubt 6–14 je nach Inhalt (lieber weniger gute als viele schwache).
- Nur Multiple Choice: genau 4 Antworten, genau eine richtig. Plausible Distraktoren aus demselben Themenfeld
  (z. B. andere Frist/andere Stelle aus dem Video), nicht albern, ungefähr gleich lang wie die richtige Antwort.
- Deutsch, B1, „du“, kurze Sätze. Frage max. ~110 Zeichen, Antwort max. ~60 Zeichen.
- Keine „laut Video“/„im Video“-Formulierungen, keine Fangfragen, keine Negationsfragen („Was ist NICHT …“),
  keine „Alle Antworten sind richtig“. Keine Namen der Figuren als Wissensfrage („Wie heißt die Ausbilderin?“) –
  Figuren nur als Situation („Amir ist krank. Was muss er zuerst tun?“) ist gut.
- Fragen sollen das Wichtige prüfen (Kernbotschaft, Fristen, Zuständigkeiten, richtiges Verhalten, bei Fachvokabeln:
  Artikel, Plural, Bedeutung, Wort im Satz). Mischung aus Wissen und Situation.
- Position der richtigen Antwort gleichmäßig verteilt (0–3), nicht immer gleich.
- `zeit_sekunden`: 20, bei langen Fragen/Antworten 25–30.
- `quelle`: der Satz (oder Text im Bild), aus dem die Frage stammt, wörtlich kurz.

## Außerdem je Lektion
- `beschreibung`: 1–2 Sätze für Azubis (B1, du), max. 160 Zeichen, sagt, was man lernt. Titel aus plan.json nicht ändern.

## Format
```json
{
  "ordner": "lernvideos/01-krankenkasse",
  "titel": "Krankenkasse und Versichertenkarte",
  "beschreibung": "…",
  "hinweis": null,
  "fragen": [
    { "frage": "…?", "antworten": ["…", "…", "…", "…"], "richtig": 2, "zeit_sekunden": 20, "quelle": "…" }
  ]
}
```
Danach selbst prüfen: gültiges JSON, je Frage 4 verschiedene Antworten, `richtig` 0–3, Verteilung der richtigen
Positionen gemischt, jede Frage durch `quelle` gedeckt.
