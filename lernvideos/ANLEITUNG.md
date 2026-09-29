# Anleitung: ein Lernvideo produzieren

Für jeden, der (Mensch oder Agent) ein Lernvideo aus dem Briefing baut. Vorher lesen: `CLAUDE.md`, `README.md`,
`lernvideos/README.md`, `lernvideos/korrekturen.md`. Vorbild für Aufbau und Animationsniveau:
`lernvideos/01-krankenkasse/` (Vorlage, Konzept, Teile). Für Gespräche mit zwei Figuren zusätzlich
`kurse/04-rechte-pflichten/film.vorlage.html` (Porträts links/rechts, Mund, Hervorhebung des Sprechers).

## Ordner, Stimmen, Figuren

| Nr. | Ordner | Stimmen (`@stimme` in konzept.md) | Figuren |
| --- | --- | --- | --- |
| 2 | `02-zum-arzt` | Erzähler | Figur nach Wahl (z. B. Kwame) |
| 3 | `03-muelltrennung` | Erzählerin | Figur, Nachbar (Vermieter-Figur) |
| 4 | `04-rundfunkbeitrag` | Erzähler | Figur, WG (drei Figuren) |
| 5 | `05-aufenthaltstitel` | Erzählerin | Figur, Coach (Jonas) |
| 6 | `06-arbeitsunfall` | Erzähler | Figur (Amir) |
| 7 | `07-mietvertrag` | Mai, Jonas | Mai, Jonas |
| 8 | `08-nebenjob` | Kwame, Jonas | Kwame, Jonas |
| 9 | `09-pruefungen` | Priya, Sabine | Priya, Sabine |
| 10 | `10-heimweh` | Mai, Jonas | Mai, Jonas |
| 11 | `11-nach-der-ausbildung` | Amir, Sabine | Amir, Sabine |
| 12 | `12-mythos-geld` | Erzähler | – |
| 13 | `13-mythos-krank` | Erzählerin | – |
| 14 | `14-mythos-ausbildung` | Erzähler | – |
| 15 | `15-mythos-wohnen` | Erzählerin | – |
| 16 | `16-verschlafen` | Erzähler, Mai | Mai |
| 17 | `17-brief-mit-frist` | Erzähler, Amir | Amir |
| 18 | `18-kritik-vom-chef` | Erzählerin, Priya, Küchenchef (K8bIZ…) | Priya, Küchenchef |
| 19 | `19-konto-gesperrt` | Erzähler, Kwame | Kwame |
| 20 | `20-amirs-urlaub` | Erzählerin, Amir, Sabine | Amir, Sabine |
| 21 | `21-mais-post` | Erzähler, Mai | Mai |
| 22 | `22-kwames-erster-tag` | Erzähler, Kwame, Frau Krause (oClOr…), Sabine | Kwame, Frau Krause = `figur-chefin`, Sabine |
| 23 | `23-puenktlichkeit` | Erzähler | Figuren nach Wahl |
| 24 | `24-kritik-und-hierarchie` | Erzählerin | Figuren nach Wahl |
| 25 | `25-sonntag-hausordnung` | Erzähler | Figuren nach Wahl |
| 26 | `26-vokabeln-gastronomie` | Erzählerin, Priya, Küchenchef (K8bIZ…) | Priya, Küchenchef |
| 27 | `27-vokabeln-baeckerei` | Erzähler, Yusuf, Bäckermeisterin (PcHpp…) | Yusuf, Bäckermeisterin |
| 28 | `28-vokabeln-pflege` | Erzähler, Mai, Praxisanleiterin (PcHpp…) | Mai, Praxisanleiterin |
| 29 | `29-vokabeln-elektro` | Erzählerin, Kwame, Geselle (K8bIZ…) | Kwame, Geselle |
| 30 | `30-was-der-chef-meint` | Erzähler, Sabine, Amir | Sabine, Amir |
| 31 | `31-vokabeln-ausbildung` | Erzählerin, Sabine, Kwame | Sabine, Kwame, `figur-geselle` (Gesellin) |
| 32 | `32-wer-ist-wer` | Erzähler | Kwame, Frau Krause = `figur-chefin`, Sabine, `figur-geselle` |
| 33 | `33-erste-woche-berufsschule` | Priya, Jonas | Priya, Jonas |
| 34 | `34-telefonieren` | Erzähler, Mai, Frau Wolf (oClOr…) | Mai, Frau Wolf = `figur-empfangschefin` nur als Anruferin (Handy) |
| 35 | `35-kwames-nachrichten` | Erzähler, Kwame | Kwame, Frau Berger = `figur-lehrerin`, Sabine, Herr Schmitt = `figur-vermieter` |
| 36 | `36-freundschaften` | Erzählerin | Figuren nach Wahl |
| 37 | `37-mythos-feiertage` | Erzähler | Figuren nach Wahl |
| 38 | `38-betriebsrat-jav` | Mai, Jonas | Mai, Jonas |
| 39 | `39-kunde-beschwert-sich` | Erzählerin, Amir, Herr Braun (K8bIZ…) | Amir, Herr Braun = `figur-kunde` |
| 40 | `40-vokabeln-kfz` | Erzähler, Amir, Sabine | Amir, Sabine |
| 41 | `41-vokabeln-hotel` | Erzähler, Ana (Mac2F…), Empfangschefin (PcHpp…) | Ana, `figur-empfangschefin`, Herr Klein = `figur-stammgast` |
| 42 | `42-verein` | Erzähler | Figuren nach Wahl |
| 43 | `43-demokratie` | Erzählerin | Figuren nach Wahl |
| 44 | `44-grundgesetz` | Erzähler | Figuren nach Wahl |
| 45 | `45-pruefungssprache` | Erzählerin | Figur nach Wahl |

Voice-IDs: Erzähler/Jonas `K8bIZwDsGMHreGKTIVHN`, Erzählerin `oClOrzqamOXmtcB8iqTj`, Sabine `PcHppp9ymY0Wa5ee6hOQ`,
Amir/Kwame/Yusuf `hfqsl1OMbiWsgPpht3el`, Mai/Priya/Ana `Mac2FKpSgaGIsaNRXt8A` (Standard in `werkzeug/stimme.mjs`).
In `konzept.md` alle Sprecher des Kurses mit `@stimme Name: <id>` festlegen. Keine zwei Rollen eines Videos mit derselben Stimme.

Figuren in `teile/`: `figur-mai`, `-jonas`, `-sabine`, `-amir`, `-kwame`, `-priya`, `-yusuf`, `-ana`, `-chefin`, `-vermieter`,
`-kuechenchef`, `-geselle`, `-baeckermeisterin`, `-praxisanleiterin`, `-empfangschefin`, `-kunde`, `-lehrerin`, `-stammgast`; Ebenen `figur-augen`, `figur-mund-zu`, `-auf`, `-froh`.
Alle in Markenfarben, nur als Porträt im Kreis (wie Kurs 1 und 4). Keine Daumen-Geste (`figur-daumen` nicht verwenden).

## Inhalt

- Sprechertext und „Text im Bild“ **wörtlich aus dem Briefing**, geändert nur nach `korrekturen.md`. Nichts erfinden –
  keine Beträge, Fristen, Namen, die nicht dort stehen. Beispieladressen o. Ä. als neutrale Platzhalter.
- **Keine Regeln für unter 18**, **keine Verweise auf andere Kurse** (streichen), Sprache einfach (B1, „du“).
- Krankenkassen: nur die AOK als Beispiel nennen.
- **Kein Kurstitel im Video** – auch nicht, wenn das Briefing ihn als „Text im Bild“ vorgibt (Vorgabe 29.09.2026).
  Die erste Bühne steht dann in der Bildmitte (bei `x: 1320` mit `kamera.basis.x = -360`), und nichts darf vor dem
  Auftritt oben/unten ins Bild ragen (Startpositionen außerhalb der Bühne weit genug weg, z. B. `y: -420`).
- Neutral: kein Kurstitel, kein Vorspann, keine Untertitel/Sprechblasen mit dem gesprochenen Text, kein „Kurs geschafft“.
  Kurze Einblendungen, die das Briefing als „Text im Bild“ oder „Bild“ vorgibt (auch Sprechblasen wie „Mach mal hin!“
  in Kurs 30), sind Inhalt und bleiben.
- Dokumente/Ablage: die Azubis Plus Helper App zeigen (Handy mit Bereich „Dokumente“), siehe `kurse/02-wohnsitz-anmelden`.
- Denkpausen (Mythos, Was würdest du tun?): im Sprechertext `(Pause 3)` vor den nächsten Satz – `stimme.mjs` legt Stille ein;
  im Bild läuft dann eine Countdown-Uhr bzw. ein Ring.

## Ablauf

1. `lernvideos/NN-ordner/konzept.md` wie Kurs 1: Kopf, Szenentabelle (Bild, Text im Bild), Abweichungen, `## Sprechertext`
   mit `@modell eleven_v4`, `@stimme …`, `### Szene N`, `Name: Text`. Dialogzeilen je Sprecher eine Zeile.
2. `node werkzeug/stimme.mjs lernvideos/NN-ordner --probe`, dann ohne `--probe` (kostet Credits – nur einmal, bei
   Textänderungen werden nur geänderte Sätze neu erzeugt). Wortzeiten ansehen (`sprache.json`).
3. Kursspezifische Gegenstände als SVG in `lernvideos/NN-ordner/teile/` (Stil C, 160×160, `@token`-Farben, Kurzschreibweise
   wie `teile/*.svg`; Tokens nur aus `werkzeug/liste.mjs` – z. B. gibt es kein `@n500`). Keine Menschen außer den Figuren,
   kein Alkohol, Gegenstände in Ruhe höchstens ±3° gedreht, keine Deko-Kreise/Funken.
4. `film.vorlage.html`: Kopf, Stil und Helfer aus Kurs 1 übernehmen (pop, ein, flug mit Bogen, huepfen, bump, welle,
   wackeln, schweben, figur/mund/froh, Kamera mit `pan2`, `akzent`, `bewegungsunschaerfe`, Bühnen-Tiefe). Text im Bild mit
   `titelEin` (Wörter aus Maske; **kein Marker/Highlight-Strich – nicht CI-konform**). Jede Animation an ein Wort hängen:
   `W('Wort', satzNr)`. Jede Szene braucht eine Handlung (siehe CLAUDE.md „nicht basic“), Kamera-Akzente auf Schlüsselwörtern.
   - Gespräch/Podcast und Rollen: Sprecher kommt exakt aus `sprache.json` (`satz(n).sprecher`, `start`, `ende`) – Mund
     (Pegel `window.PEGEL`) und Hervorhebung nur in den eigenen Sätzen, Zuhörer nickt/lächelt.
   - Format-Ideen: Mythos → Behauptungskarte, Countdown-Ring, Stempel „Mythos“ (rot) / „Stimmt“ (grün) schlägt mit Wackler auf.
     Was würdest du tun? → drei Optionskarten A/B/C, Countdown, jede Option spielt kurz, beste Option leuchtet grün.
     Schlechter Tag → Tag läuft schief, dann Zurückspulen (Uhrzeiger rückwärts, Elemente laufen schnell zurück, „⏪“),
     derselbe Tag richtig. Heimat vs. Deutschland → geteilte Bühne links/rechts, respektvoll („anders“, nicht falsch),
     neutrale Beschriftung. Fachvokabeln → Wortkarte (Artikel · Wort · Plural), Bild, Beispielsatz tippt sich; Schlussdialog
     mit den Figuren, jedes Wort blinkt beim Sprechen auf.
5. `node werkzeug/rendern.mjs lernvideos/NN-ordner --nur-html` und `node werkzeug/pruefen.mjs lernvideos/NN-ordner`:
   dazu `node werkzeug/masken.mjs lernvideos/NN-ordner` (kein Wort darf vor dem Aufstieg aus seiner Maske schauen).
   Kante und Überlappung müssen 0 sein (gewollte Überdeckungen mit `data-gruppe`/`data-frei` markieren), Ruckler nur
   gewollte Aufschläge. Dann `--standbilder` am Ende jeder Szene und bei jeder Handlung – **Bilder ansehen** (Read) und
   prüfen: Text passt in Karten, nichts verdeckt, Pfeilspitzen frei, richtiger Sprecher, Titel nicht zu lang.
6. `node werkzeug/rendern.mjs lernvideos/NN-ordner` → `film.mp4`, `film-poster.png`; dann
   `node werkzeug/untertitel.mjs lernvideos/NN-ordner` → `film.vtt` (Untertitel als eigene Spur, nie ins Bild). Aufräumen: `film.html`,
   `standbild-*.png`, `.frames/` löschen (`.stimme/` bleibt, ist ignoriert).

Fallen aus früheren Kursen:
- `werkzeug/stil.css` hat allgemeine Klassen (`.schild`, `.unter`, `.ende` …) – eigene Klassen kursspezifisch benennen
  (z. B. `.aushang`), sonst erben sie fremde Stile.
- Wer `pop()` aus Kurs 1/9 kopiert und ein eigenes `s` mitgibt, muss `{ ...basis, s: 0 }` setzen – sonst ist das Element
  schon vor seinem Auftritt sichtbar.

Geteilte Dateien (`werkzeug/`, `teile/`, `README.md`, andere Kursordner) nicht ändern – Bedarf im Bericht nennen.
