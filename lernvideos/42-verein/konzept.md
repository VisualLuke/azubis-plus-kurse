# Lernvideo 42 – Erklärvideo: Was ist ein Verein?

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 42
- **Zielgruppe:** Azubis, auch international; Stufe 4 (B1–B2)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Yusuf als Figur („du“), dazu kleine Porträt-Gruppen
  aus vorhandenen Figuren (Porträts im Kreis, ohne Namen)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Vereine sind in Deutschland einer der besten Wege, Menschen kennenzulernen, und jeder darf mitmachen.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/42-verein` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Drei Porträts fliegen von drei Seiten herein und treffen sich; ein Schild „Verein e.V.“ schlägt mit Wackler auf; alle schmunzeln, weitere Gesichter kommen dazu | – (Titel entfällt) |
| 2 | Vereinfachte Deutschlandkarte, viele kleine Punkte breiten sich über das Land aus; Symbole ploppen auf: Fußball, Trompete, Theatermaske, Gießkanne, Hundepfote, Herz, Narrenkappe (Glöckchen wackeln) | Über 600.000 Vereine |
| 3 | Vier Porträts, Linien laufen zu einer gemeinsamen Zielflagge; Vereinskasse fällt herein, Münzen fliegen hinein (die Münze mit dem Etikett „Azubi“ wird kleiner); Schild „e.V.“, im Vereinsregister wird die Zeile „Verein e.V.“ geschrieben, Haken | Gemeinsames Ziel · kleiner Beitrag · e.V. |
| 4 | Raum mit Stuhlreihen und Pult „Vorstand“, Mitglieder setzen sich; Kalender blättert, „1×“; Stimmkarten gehen hoch, der Vorstand wird gewählt (Balken füllt sich, Haken); jede Karte bekommt eine „1“, Yusufs Karte leuchtet | Mitgliederversammlung – jede Stimme zählt |
| 5 | Yusuf mit Fragezeichen; Fußballtraining: Wochenstreifen, Ball wird gepasst, Sprechblasen, Tor; dann Grillen nach dem Spiel mit Würstchen und Limo, Herz zwischen den Porträts | Freunde · Deutsch · Spaß |
| 6 | Handy: Suche „Sportverein Würzburg“ tippt sich, Treffer ploppen auf; Einladung „Probetraining“ mit „kostenlos“; Yusuf beim Probetraining (Ball, Pfiff); Herz; Formular „Mitgliedsantrag“ füllt sich, Unterschrift, Haken | Suchen · Ausprobieren · Mitglied werden |
| 7 | Gemeinschaftsraum mit neutralen bunten Wimpeln, Tisch mit Tassen; Porträts verschiedener Herkunft kommen dazu, Weltkugel; Brief mit Fragezeichen, Hilfe, Haken | Auch internationale Vereine |
| 8 | Blatt „Gründung“, sieben Porträts kommen nacheinander (Zähler 1–7) und unterschreiben; dann schwenkt die Kamera, Yusuf mit Mitgliedskarte „Mitglied“, zwinkert | Mach mit! |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, dann Schwenks von Bühne zu Bühne mit Bewegungsunschärfe und Tiefe,
Kamera-Akzente auf Schlüsselwörtern. Abspann (Kernbotschaft): „Vereine verbinden Menschen.“ und
„Und jeder darf mitmachen.“

## Abweichungen vom Briefing

- Szene 1: Der Kurstitel „Was ist ein Verein?“ wird nicht eingeblendet (Vorgabe 29.09.2026); die erste Bühne steht mittig.
- Szene 4: Sprechertext nach `../korrekturen.md` („Meistens einmal im Jahr …“).
- Figuren nur als Porträts im Kreis (vorhandene Figuren, ohne Namen); „Hände gehen hoch“ = Stimmkarten gehen hoch.
- Szene 2: Deutschlandkarte vereinfacht (Umriss aus Kurs 37); Karneval als Narrenkappe.
- Szene 5: Grillen nach dem Spiel mit Würstchen und Limo – kein Alkohol.
- Szene 6: Suche ohne Suchmaschinen-Marke; Trefferzeilen ohne erfundene Vereinsnamen (Platzhalter-Balken).
- Szene 7: „Flaggen an der Wand“ als neutrale bunte Wimpel ohne echte Länderflaggen.
- Stimme: „e.V.“ als „E-Vau“ (Szene 3), „600.000“ als „sechshunderttausend“ (Szene 2) – im Untertitel zurückgeführt (siehe unten).
- Kleine Beschriftungen als Bildteile, ohne neue Fakten: „Azubi“, „Vereinsregister“, „Vorstand“, „1×“, Wochentage, „Einladung“,
  „Gründung“, Mitgliedskarte „Verein e.V. – Mitglied“.
- Szenen 3, 5, 6: Die mit „·“ getrennten Stichworte stehen als Zeilen untereinander und erscheinen, wenn sie gesagt werden.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Es gibt einen Witz in Deutschland: Wenn sich drei Deutsche treffen, gründen sie einen Verein. Ganz falsch ist das nicht.

### Szene 2
Erzähler: In Deutschland gibt es über sechshunderttausend Vereine. Für Sport, Musik, Kultur, Garten, Tiere, Hilfe für andere, und sogar Karneval.

### Szene 3
Erzähler: Ein Verein ist eine Gruppe von Menschen mit einem gemeinsamen Ziel. Die Mitglieder zahlen meistens einen kleinen Beitrag, für Azubis oft weniger. Viele Vereine heißen E-Vau, das bedeutet eingetragener Verein.

### Szene 4
Erzähler: Ein Verein ist demokratisch. Meistens einmal im Jahr gibt es die Mitgliederversammlung. Dort wählen alle Mitglieder den Vorstand und entscheiden gemeinsam. Jede Stimme zählt gleich, auch deine.

### Szene 5
Erzähler: Warum solltest du in einen Verein gehen? Du triffst jede Woche dieselben Menschen. Du sprichst mehr Deutsch. Du machst etwas, das dir Spaß macht. Und oft entstehen so echte Freundschaften.

### Szene 6
Erzähler: Wie geht das? Such online nach Vereinen in deiner Stadt. Die meisten laden dich zu einem kostenlosen Probetraining oder Schnuppertag ein. Wenn es dir gefällt, füllst du einen Mitgliedsantrag aus.

### Szene 7
Erzähler: Es gibt auch Vereine von Menschen aus deinem Land oder internationale Vereine. Die sind gut für den Anfang und helfen oft bei Fragen zum Leben in Deutschland.

### Szene 8
Erzähler: Und übrigens: Du kannst sogar selbst einen Verein gründen. Dafür braucht man sieben Mitglieder. Aber fang lieber erst mal als Mitglied an.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- sechshunderttausend → 600.000
- E-Vau → e.V.
