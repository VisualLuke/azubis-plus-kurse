# azubis-plus-kurse

Kursvideos für **Azubis Plus**, gerendert aus HTML (Chromium → ffmpeg). Keine WeWeb-Component.

**Die Projektübersicht liegt in [`VisualLuke/azubis-plus-overview`](https://github.com/VisualLuke/azubis-plus-overview)**
(Design-Tokens in `design.md`). Wenn das Overview-Repo nicht in der Session ist:
`add_repo(owner="VisualLuke", repo="azubis-plus-overview", access="read")`.

## Regeln

- Alles Wichtige steht in `README.md` – vor jeder Änderung lesen.
- **Nur Token-Farben** als `var(--uid,#fallback)` bzw. in SVG-Teilen als `@token`; `bauen.mjs` bricht bei nacktem Hex ab.
- Gegenstände im Stil C der Illustrations-Bibliothek (`VisualLuke/helperapp_illustrationen`), höchstens ±3° gedreht,
  kein Alkohol. Figuren (Mai, Jonas, Chefin, Vermieter, Sabine, Amir) nur in Kursvideos, in Markenfarben – nie in den Helper-Illustrationen.
- Zeiten der Animationen hängen an der Sprachaufnahme (`A(s)`); nach einer neuen Aufnahme `SAETZE` neu vermessen
  (Pausen: `ffmpeg -af silencedetect=noise=-38dB:d=0.35`).
- Vor dem vollen Render mit `--standbilder` prüfen; `film.mp4` und `film-poster.png` werden mit eingecheckt.
- Inhalte (Beträge, Fristen, Zuständigkeiten) kommen aus dem Konzept – nicht selbst erfinden.
- **Videos neutral halten:** kein Kopftext (Kursname, Titel, Kapitel, „Podcast“), kein Vorspann mit Titel,
  keine Untertitel oder Sprechblasen, im Abspann kein „Kurs N geschafft“. Die Seite in der App trägt den Titel.
  „Text im Bild“ aus dem Konzept ist Inhalt und bleibt.
- Wo es um Ablage oder Dokumente geht, die **Azubis Plus Helper App** zeigen (Handy mit Bereich „Dokumente“).
- Sprache: Deutsch, B1, „du“.

## Qualität – Fallen, die schon einmal passiert sind

- **Kanten:** Nichts näher als ~50 px an die Bühnenkante (Welt-Bühne 1040×710 bzw. 900×660). Chips, Labels,
  Figuren und Pfeilspitzen eingeschlossen. Nach dem Aufbau jeder Szene das Standbild am Szenenende prüfen.
- **Überlappungen:** Beschriftungen, Chips und Gegenstände dürfen sich nicht überdecken – auch nicht im Endzustand
  einer Bewegung (Zettel, der am Ziel auf einem Label landet). Text muss in seine Karte passen (keine feste Breite
  bei variablem Text).
- **Pfeile** im DOM **nach** den Symbolen, zwischen denen sie stehen, und mit Abstand davor enden – sonst sind die
  Spitzen verdeckt.
- **`.a`-Elemente** sind `position:absolute`. Keine Klasse darf das mit `position:relative` überschreiben, sonst
  springen Elemente in den Fluss und landen irgendwo.
- **Sprecher im Gespräch:** Mund und Hervorhebung nur in den tatsächlichen Sprechabschnitten des Sprechers
  (kein Nachlauf nach Satzende). Sprecher nicht nur über die Tonhöhe trennen – die überlappt; besser
  ElevenLabs-Zeitstempel je Satz oder MFCC-Gruppierung.
- **Figuren:** Flächen voll deckend (kein halbtransparenter Bart o. Ä.).
- **Animationen nicht „basic“:** jede Szene braucht eine Handlung, nicht nur Einblenden. Vorbild ist Kurs 4:
  Kamera-Zoom beim Szenenwechsel, Auftritt mit Squash & Stretch, Gegenstände tun etwas (Schwamm schrubbt, Besen fegt,
  Münze dreht sich, Text wird getippt, Stempel schlägt mit Wackler auf, Flugzeug fliegt eine Bahn, Figur klettert
  eine Treppe, Marker läuft durch einen Zeitstrahl), Figuren reagieren (lächeln, nicken beim Zuhören).

## Stimme mit ElevenLabs

- API-Schlüssel steht in der Umgebungsvariable `ELEVENLABS_API_KEY` (nie ins Repo, nie ausgeben).
  Host `api.elevenlabs.io` muss in der Umgebung erlaubt sein.
- Jeden Satz einzeln erzeugen mit `POST /v1/text-to-speech/{voice_id}/with-timestamps`
  (Modell wie in den bisherigen Aufnahmen, `eleven_multilingual_v2` oder neuer), Stimmen per `GET /v1/voices`
  über den Namen finden. Sätze mit kurzen Pausen (0,35–0,5 s, Sprecherwechsel 0,5 s) zu `sprache.mp3` zusammensetzen.
- Die Zeitstempel ergeben `SAETZE` (Start, Ende, Sprecher, Text) und Wortzeiten – Animationen an Wörter hängen,
  nicht schätzen. Ergebnis als `kurse/NN-thema/sprache.json` speichern, damit ein neuer Render keine Credits kostet.
- Credits sparen: nur geänderte Sätze neu erzeugen.

