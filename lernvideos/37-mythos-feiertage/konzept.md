# Lernvideo 37 – Mythos oder Wahrheit: Feiertage & Traditionen

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 37
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Mythos oder Wahrheit, eine Off-Stimme (Erzähler); Gegenstände, dazu Figuren nur als Porträts im Kreis
  (Kollegen bei der Weihnachtsfeier, Gäste auf der Kerwa)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Feiertage sind in Deutschland unterschiedlich, und du darfst mitfeiern, musst aber nicht.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/37-mythos-feiertage` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Dunkle Quiz-Bühne; auf „Weihnachten“ fällt der Tannenbaum herein (Lichter funkeln), auf „Ostern“ ploppt das Osterei auf und wackelt, auf „Silvester“ steigt eine Rakete auf und zerplatzt zum Feuerwerk, auf „Kerwa“ wächst das Festzelt aus dem Boden; bei der Frage hüpfen die vier nacheinander, darunter schlagen die Abdrücke „Mythos“ und „Stimmt“ auf | – (Titel entfällt) |
| 2 | Behauptung, Countdown, roter Stempel; Deutschlandkarte: ein Kalender landet mitten im Land, eine Welle läuft über die Karte („überall“); in jedem Land ploppt ein kleiner Kalender auf; Bayern leuchtet auf, viele Kalender drängen sich dort; Chips „Bayern“, „Heilige Drei Könige“, „Fronleichnam“ fliegen aus Bayern heraus | MYTHOS – jedes Bundesland ist anders |
| 3 | Behauptung (Karte zeigt „24. Dezember“), Countdown, grüner Stempel; Wohnzimmer: Fenster mit Mond, Tannenbaum, Geschenke, Kalenderblätter 24/25/26 Dez.; der 24. leuchtet („Heiligabend“), ein Herz ploppt („Familie“), die Geschenkdeckel springen auf; 25. und 26. werden grün, Chip „Feiertage“ | STIMMT – Heiligabend am 24. |
| 4 | Behauptung, Countdown, roter Stempel; eine Lichterkette spannt sich über die Bühne; Einladung „Weihnachtsfeier“ mit „Ja“ / „Nein“ – bei „freiwillig“ sind beide grün, Chip „freiwillig“; „Ja“ wird gedrückt, die Einladung fliegt davon, vier Kollegen (Porträts) ploppen auf, Tassen auf dem Tisch; bei „kennenzulernen“ lachen alle und hüpfen | MYTHOS – freiwillig, aber schön |
| 5 | Behauptung, Countdown, grüner Stempel; Discokugel dreht sich mit bunten Lichtstrahlen, der Lautsprecher pumpt Noten, stille Straße mit zwei Häusern, Chip „Karfreitag“; bei „stiller Feiertag“ hält die Kugel an (Pause-Zeichen), es wird Nacht, der Mond geht auf; bei „verboten“ Ton aus am Lautsprecher | STIMMT – stiller Feiertag |
| 6 | Behauptung, Countdown, grüner Stempel und „fast!“; Nachthimmel, Raketen steigen auf und zerplatzen; Chips „Silvester“ und „Neujahr“ werden bei „erlaubt“ grün; Altstadt fährt herein, das Verbotsschild fällt davor, eine gestrichelte Zone zeichnet sich um die Altstadt, Chip „Feuerwerksverbot“; außerhalb knallt es weiter | STIMMT – aber nicht überall |
| 7 | Behauptung, Countdown, grüner Stempel; zuerst nur die Karte mit dem Tannenbaum, bei „Religionsfreiheit“ rückt sie zur Seite und Halbmond mit Laternen und Diyas stellen sich gleich groß daneben; bei „Eid“ leuchten die Laternen, bei „Diwali“ flackern die Flammen auf; Urlaubsantrag kommt, der Stift füllt ihn aus, Haken | STIMMT – Religionsfreiheit |
| 8 | Helle Bühne: fränkisches Dorf mit Kirchturm, der Kerwabaum wird aufgestellt, das Festzelt geht auf, drei Gäste (Porträts) feiern im Takt, die Trompete spielt (Noten), Bratwurst und Limo kommen dazu; Kalender mit einem leuchtenden Tag („einmal im Jahr“); bei „Geh mal hin!“ fällt ein Pin auf das Fest, alle jubeln | Tipp: die Kerwa besuchen |

Abspann: „Du darfst mitfeiern.“ und „Aber du musst nicht. Feiertage sind in Deutschland unterschiedlich.“ (Kernbotschaft).

Layout „Mythos oder Wahrheit“ wie in Lernvideo 12 (`../12-mythos-geld/konzept.md`): Quiz-Bühne, Behauptungskarte,
Countdown-Ring 3-2-1 mit den Pillen „Mythos?“ / „Stimmt?“, Stempel mit Tinte und Kamera-Akzent, dann helle Erklär-Bühne rechts.
Jede Animation hängt an einem Wort aus `sprache.json`.

## Abweichungen vom Briefing

- Szene 1: Der Titel „Mythos oder Wahrheit: Feiertage“ wird nicht eingeblendet und fliegt nicht ein (Vorgabe 29.09.2026);
  die erste Bühne steht mittig.
- Szene 2: Sprechertext nach `korrekturen.md` („Manche Feiertage gelten überall, aber jedes Bundesland hat auch eigene.“).
  Die Karte ist eine vereinfachte Umrisskarte (ohne Ländergrenzen); jedes Land zeigt einen kleinen Kalender an seiner Hauptstadt.
- Szene 3: Im Sprechertext stehen die Daten ausgeschrieben („vierundzwanzigste“, „fünfundzwanzigste und sechsundzwanzigste“),
  damit die Satztrennung nicht nach „24.“ bricht; gesprochen ist es derselbe Text. Die Behauptungskarte zeigt „24. Dezember“.
  „mit der Familie“ als Herz, keine Menschen im Wohnzimmer.
- Szene 4: „Kollegen lachen zusammen“ als vier Porträts im Kreis (Kwame, Priya, Geselle, Sabine), Tassen statt Getränken.
- Szene 6: „Stimmt, fast!“ – grüner Stempel „Stimmt“ plus gelber Zusatz „fast!“.
- Szene 7: Die drei Feste stehen gleich groß nebeneinander (Weihnachten, Eid, Diwali), keine Menschen.
  Im Sprechertext steht „Iid“ statt „Eid“, damit die Stimme das Fest [iːd] ausspricht und nicht „Eid“ (Schwur); im Bild steht „Eid“.
- Szene 8: Kein Alkohol im Bild – „Bier“ nur gesprochen, gezeigt werden Blasmusik (Trompete), Festzelt, Bratwurst und Limo.
  „Figuren feiern mit“ als drei Porträts im Kreis (Mai, Amir, Yusuf). Dazu der Kerwabaum als typisches Zeichen der Kerwa.
- Kurze Atempausen `(Pause 1)` / `(Pause 1.5)` vor den Behauptungen und vor Szene 8; der Sprechertext bleibt unverändert.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Weihnachten, Ostern, Silvester, Kerwa. Was stimmt wirklich über Feiertage in Deutschland?

### Szene 2
(Pause 1)
Erzähler: „Die Feiertage sind in ganz Deutschland gleich.“
(Pause 3)
Erzähler: Mythos! Manche Feiertage gelten überall, aber jedes Bundesland hat auch eigene. Bayern hat besonders viele, zum Beispiel Heilige Drei Könige oder Fronleichnam.

### Szene 3
(Pause 1)
Erzähler: „An Weihnachten ist der vierundzwanzigste Dezember der wichtigste Abend.“
(Pause 3)
Erzähler: Stimmt! Am Heiligabend feiern viele mit der Familie und packen Geschenke aus. Der fünfundzwanzigste und sechsundzwanzigste Dezember sind Feiertage.

### Szene 4
(Pause 1)
Erzähler: „Zur Weihnachtsfeier im Betrieb muss ich gehen.“
(Pause 3)
Erzähler: Mythos! Sie ist freiwillig. Aber sie ist eine gute Chance, Kollegen besser kennenzulernen.

### Szene 5
(Pause 1)
Erzähler: „Am Karfreitag darf man in Bayern nicht tanzen gehen.“
(Pause 3)
Erzähler: Stimmt! Karfreitag ist ein stiller Feiertag. Laute Partys und Tanzveranstaltungen sind dann verboten.

### Szene 6
(Pause 1)
Erzähler: „An Silvester gibt es überall Feuerwerk.“
(Pause 3)
Erzähler: Stimmt, fast! Privates Feuerwerk ist nur an Silvester und Neujahr erlaubt. Manche Städte verbieten es aber in bestimmten Zonen.

### Szene 7
(Pause 1)
Erzähler: „Wer nicht christlich ist, muss nicht mitfeiern.“
(Pause 3)
Erzähler: Stimmt! In Deutschland gibt es Religionsfreiheit. Und für deine eigenen Feste, zum Beispiel Iid oder Diwali, kannst du rechtzeitig Urlaub beantragen.

### Szene 8
(Pause 1.5)
Erzähler: Und in Franken gibt es noch die Kerwa: ein Dorffest mit Musik, Bier und Bratwurst. Fast jeder Ort feiert sie einmal im Jahr. Geh mal hin!

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Bild; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- Iid → Eid
- vierundzwanzigste Dezember → 24. Dezember
- fünfundzwanzigste und sechsundzwanzigste Dezember → 25. und 26. Dezember
