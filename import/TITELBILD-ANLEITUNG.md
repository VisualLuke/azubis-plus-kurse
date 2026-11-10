# Anleitung: Titelbild je Lektion (titelbild.json → titelbild.png)

Werkzeug: `node werkzeug/titelbild.mjs <ordner>` baut aus `<ordner>/titelbild.json` das Bild `<ordner>/titelbild.png`
(1280×800, 16:10, Stil C). Format der JSON und Koordinaten: Kopf von `werkzeug/titelbild.mjs`. Vorbild-Stil:
`VisualLuke/helperapp_illustrationen` README (Szenen 320×200).

## Einheitlicher Aufbau (alle 49 gleich komponiert)
- **Figur rechts:** Porträt der Kursfigur im Kreis, `"figur": { "name": …, "x": 232, "y": 92, "d": 80 }` (kleine
  Abweichungen ok). Figur = die Person, um die es im Video geht (z. B. Mai, Amir, Kwame, Priya, Yusuf, Ana, Sabine,
  Jonas). Erklär-/Mythos-Videos ohne Figur: eine passende Kursfigur wählen (verschiedene über die Lektionen verteilen).
  Verfügbar: `teile/figur-*.svg` (mai, jonas, sabine, amir, kwame, priya, yusuf, ana, chefin, vermieter, kuechenchef,
  geselle, baeckermeisterin, praxisanleiterin, empfangschefin, kunde, lehrerin, stammgast).
- **Gegenstände links/Mitte:** 1–3 Teile, die das Thema auf einen Blick zeigen (aus `<ordner>/teile/` oder `teile/`).
  Sie **stehen auf der Fläche**: Unterkante sichtbar auf y ≈ 150–158 (Teile haben unten Rand – `y` so wählen, dass es
  im Bild aufsteht, nicht schwebt). Höhe `h` meist 70–110. Nicht überlappen mit der Figur, ≥ 12 Einheiten Rand zur Kante.
- **Kein Text im Bild** (auch keine Schilder mit lesbarer Schrift als Hauptmotiv), kein Alkohol, keine Daumen-Geste,
  Gegenstände höchstens ±3° gedreht, keine Deko-Kreise/Funken.
- Wenn ein nötiger Gegenstand fehlt: in `<ordner>/teile/` einen neuen im Stil C zeichnen (160×160, `@token`-Farben,
  `{defs g0 …}`, `{schatten …}`, Kurzschreibweise wie die vorhandenen Teile; Tokens nur aus `werkzeug/liste.mjs`).

## Ablauf je Lektion
1. `titelbild.json` schreiben, 2. rendern, 3. **PNG mit dem Read-Tool ansehen**, korrigieren (schwebt etwas? zu klein?
   Figur verdeckt?), 4. Datei ≤ 400 KB.
