# azubis-plus-kurse

Kursvideos für **Azubis Plus**, gerendert aus HTML (Chromium → ffmpeg). Keine WeWeb-Component.

**Die Projektübersicht liegt in [`VisualLuke/azubis-plus-overview`](https://github.com/VisualLuke/azubis-plus-overview)**
(Design-Tokens in `design.md`). Wenn das Overview-Repo nicht in der Session ist:
`add_repo(owner="VisualLuke", repo="azubis-plus-overview", access="read")`.

## Regeln

- Alles Wichtige steht in `README.md` – vor jeder Änderung lesen.
- **Nur Token-Farben** als `var(--uid,#fallback)` bzw. in SVG-Teilen als `@token`; `bauen.mjs` bricht bei nacktem Hex ab.
- Gegenstände im Stil C der Illustrations-Bibliothek (`VisualLuke/helperapp_illustrationen`), höchstens ±3° gedreht,
  kein Alkohol. Figuren nur für Gesprächspartner eines Kurses, in Markenfarben.
- Zeiten der Animationen hängen an der Sprachaufnahme (`A(s)`); nach einer neuen Aufnahme `SAETZE` neu vermessen
  (Pausen: `ffmpeg -af silencedetect=noise=-38dB:d=0.35`).
- Vor dem vollen Render mit `--standbilder` prüfen; `film.mp4` und `film-poster.png` werden mit eingecheckt.
- Inhalte (Beträge, Fristen, Zuständigkeiten) kommen aus dem Konzept – nicht selbst erfinden.
- Sprache: Deutsch, B1, „du“.
