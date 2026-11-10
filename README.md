# azubis-plus-kurse

Kursvideos für **Azubis Plus**: kurze, animierte Erklärvideos im App-Design, gerendert aus HTML.
Keine Component – die fertigen `film.mp4` werden in der App eingebunden.

## Kurse

| Nr. | Thema | Länge | Format |
| --- | --- | --- | --- |
| 1 | [Brutto, Netto & deine Gehaltsabrechnung](kurse/01-brutto-netto/) | 1:51 | Podcast: Mai (Azubi) und Jonas (Coach) im Gespräch |
| 2 | [Wohnsitz anmelden beim Bürgeramt](kurse/02-wohnsitz-anmelden/) | 1:35 | Animationsvideo mit Sprecher, Mai als Figur |
| 3 | [Bankkonto eröffnen](kurse/03-bankkonto/) | 1:20 | Animationsvideo mit Sprecher, Mai als Figur |
| 4 | [Rechte & Pflichten in der Ausbildung](kurse/04-rechte-pflichten/) | 2:59 | Gespräch: Sabine (Ausbilderin) und Amir (Azubi) |

### Geplant (Konzept als Entwurf, noch keine Aufnahme)

| Nr. | Thema | Format | Einsatz in der App |
| --- | --- | --- | --- |
| 5 | [SIM-Karte holen und freischalten](kurse/05-sim-karte/konzept.md) | Animation, Mai | Ankommen-Aufgabe `ak-handy` |
| 6 | [Deine Gesundheitskarte](kurse/06-gesundheitskarte/konzept.md) | Animation, Mai | Ankommen-Aufgabe `ak-gesundheitskarte` |
| 7 | [Wäsche waschen](kurse/07-waesche-waschen/konzept.md) | Animation, Mai | Lernen – Reihe „Alleine wohnen“ |
| 8 | [Müll trennen](kurse/08-muell-trennen/konzept.md) | Animation, Mai | Lernen – Reihe „Alleine wohnen“ |
| 9 | [Pfand zurückbringen](kurse/09-pfand/konzept.md) | Animation, Mai | Lernen – Reihe „Alleine wohnen“ |
| 10 | [Richtig lüften und heizen](kurse/10-lueften-heizen/konzept.md) | Animation, Mai | Lernen – Reihe „Alleine wohnen“ |
| 11 | [Miete, Nebenkosten und Strom](kurse/11-nebenkosten-strom/konzept.md) | Podcast: Mai und Jonas | Lernen – Reihe „Alleine wohnen“ |
| 12 | [Hausordnung und Nachbarn](kurse/12-hausordnung-nachbarn/konzept.md) | Gespräch: Mai und Vermieter | Lernen – Reihe „Alleine wohnen“ |
| 13 | [Einkaufen mit wenig Geld](kurse/13-einkaufen-budget/konzept.md) | Animation, Mai | Lernen – Reihe „Alleine wohnen“ |

**Videos an Ankommen-Aufgaben:** Die Aufgaben nach der Ankunft in der Helper-App (`helperapp_backend`, Modul
Ankommen) nehmen ein Video als Medium. Hochladen im Team-Formular der Aufgabe (Medien → Video, ≤ 200 MB).
Schon fertig und passend: Kurs 2 → „Wohnsitz anmelden“ (`ak-wohnsitz`), Kurs 3 → „Bankkonto eröffnen“ (`ak-bankkonto`).

Die Videos sind **neutral**: kein Kopftext, kein Titel-Vorspann, keine Untertitel – die Kursseite in der
App trägt Titel und Kontext. Wer spricht, zeigen im Podcast-Format die Figuren selbst (größer, Mund bewegt sich).

## Ein Kurs entsteht so

1. **Konzept** (`kurse/NN-thema/konzept.md`): Zielgruppe, Länge, Kernbotschaft, Sprechertext – pro Szene
   eine Aussage, Bilder als Gegenstände beschrieben. Deutsch B1, ~2–2,5 Wörter pro Sekunde.
2. **Sprachaufnahme** (`sprache.mp3`), z. B. aus ElevenLabs. Erst aufnehmen, dann animieren.
3. **Zeitleiste** (`film.vorlage.html`): Sätze mit Zeiten aus der Aufnahme (`SAETZE`), dazu die Szenen.
   Alles wird aus `render(t)` berechnet; Animationen hängen an `A(sekunde_in_der_aufnahme)`.
4. **Rendern:**
   ```sh
   npm i playwright            # oder global vorhanden
   FFMPEG=/pfad/zu/ffmpeg node werkzeug/rendern.mjs kurse/01-brutto-netto                    # → film.mp4 + film-poster.png
   node werkzeug/rendern.mjs kurse/01-brutto-netto --standbilder 12,30.5                     # nur Standbilder zum Prüfen
   node werkzeug/rendern.mjs kurse/01-brutto-netto --nur-html                                # film.html, läuft im Browser
   ```
   ffmpeg braucht libx264; `ton.py` braucht numpy.

## Aufbau

```
werkzeug/motor.js      Tween-Engine: Akteure, Easings, Kamera (pan), Cues für Soundeffekte
werkzeug/stil.css      gemeinsamer Stil – nur Token-Farben mit Fallback, Schrift Inter
werkzeug/rendern.mjs   baut film.html, fotografiert jedes Frame mit Chromium, mischt Ton, kodiert H.264
werkzeug/ton.py        Tonspur: Sprache + leise Musik (unter der Stimme abgesenkt) + Effekte
werkzeug/bauen.mjs     SVG-Kurzschreibweise → SVG (Kopie aus helperapp_illustrationen, samt liste.mjs)
teile/*.svg            Bildteile im Stil C der Illustrations-Bibliothek, in Ebenen zum Animieren
kurse/NN-thema/        konzept.md, sprache.mp3, film.vorlage.html, teile/ (kursspezifisch), film.mp4
```

## Figuren

Die Figuren (`teile/figur-*.svg`: Mai, Jonas, Chefin, Vermieter, Sabine, Amir) sind in Markenfarben gezeichnet – Haut in hellem Lavendel,
keine realen Hauttöne. Das hält die Token-Regel ein und stellt Herkunft nicht über Aussehen dar.
Augen und Mund liegen auf eigenen Ebenen (`figur-augen`, `figur-mund-zu`, `figur-mund-auf`);
der Mund öffnet sich mit dem Pegel der Sprachaufnahme. Dazu `figur-mund-froh` (lachen) und `figur-daumen`
(Daumen hoch, fährt von unten in den Kreis). Die Helper-Illustrationen bleiben ohne Menschen –
Figuren gibt es nur in Kursvideos.
