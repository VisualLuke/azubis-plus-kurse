# Lernvideo 45 – Erklärvideo: Prüfungssprache: Was will die Aufgabe von mir?

- **Quelle:** Briefing „Azubis Plus – Lernvideos 31–45“, Video 45
- **Zielgruppe:** Azubis, auch international; einfaches Deutsch (B1), Stufe 3
- **Format:** Erklärvideo, eine Off-Stimme (Erzählerin), animierte Szenen; Kwame als Figur (Porträt im Kreis)
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Das erste Wort einer Prüfungsaufgabe sagt dir, was du tun sollst. Wer es versteht, holt mehr Punkte.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/45-pruefungssprache` (ElevenLabs, Eleven v4)

Roter Faden: eine Aufgabenkarte. In jeder Szene legt sich beim Operator eine gelbe Fläche hinter das erste Wort
(die Markierung auf dem Prüfungsblatt ist Inhalt), der Rest der Aufgabe tippt sich, wenn die Stimme das Beispiel liest.
Das Prüfungsblatt vom Anfang kommt am Ende wieder, und die Punkteanzeige springt von 3 auf 6 von 6.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Prüfungsblatt mit Aufgabe „Erläutern Sie, warum …“; ein Stift schreibt die Antwort (Zeilen wachsen), Kwame nickt froh; Punkteanzeige füllt sich nur bis „3 von 6“; Kwame wackelt ratlos mit dem Kopf, Fragezeichen; Lupe fährt auf das erste Wort, das Wort wächst, Kamera-Akzent | – (Titel entfällt) |
| 2 | Große Aufgabenkarte „Erläutern Sie, warum man vor der Arbeit freischalten muss.“; gelbe Fläche wächst hinter „Erläutern“; der Rest der Aufgabe tritt zurück, das Wort springt; Pfeil zu einer Checkliste, Haken setzen sich; sieben Operator-Chips springen auf | Operatoren = Arbeitsanweisungen |
| 3 | Aufgabenkarte „Nennen“ (gelb); Liste mit drei Punkten; eine Erklär-Karte fliegt herein und wird durchgestrichen; Aufgabe tippt sich; Zollstock, Wasserwaage, Akkuschrauber springen in die Liste, Wörter tippen sich; großer grüner Haken | Nennen = aufzählen |
| 4 | Aufgabenkarte „Beschreiben“ (gelb); Ölkanister, Lupe fährt darüber; vier Schrittkarten fliegen durcheinander herein, ordnen sich, Nummern 1–4 springen auf, Pfeile zeichnen sich; Aufgabe tippt sich | Beschreiben = wie ist es? wie läuft es ab? |
| 5 | Aufgabenkarte „Erklären“, wechselt zu „Erläutern“ (gelb); großes „Warum?“ wackelt; darunter Kästchen „Grund“ (Warndreieck) + „Beispiel“ (Sicherungskasten, bei „freischalten“ springt der Schalter von grün auf aus) | Erklären/Erläutern = warum? + Beispiel |
| 6 | Aufgabenkarte „Begründen“ (gelb); drei Materialproben (Holz, Metall, Kunststoff), Holz wird gewählt (Haken); Antwort „Holz“ allein bekommt ein rotes „!“ und wackelt (zu wenig), wächst zu „Holz, weil …“, Pfeile zeichnen sich zu zwei Chips „weil …“ mit Haken | Begründen = weil … |
| 7 | Drei Kästchen springen nacheinander auf: Waage mit zwei Seiten (pendelt, „gleich“/„anders“), Taschenrechner (Tasten drücken, Rechenweg tippt sich), Sprechblase „Argument“ mit Haken | Vergleichen · Berechnen · Beurteilen |
| 8 | Prüfungsblatt mit „Nennen Sie drei Werkzeuge. (6 Punkte)“; Textmarker fährt über „Nennen“, gelbe Fläche wächst mit; Kreis zeichnet sich um „drei“, drei Antwortzeilen 1–2–3; Pfeil auf „6 Punkte“; die Antwortfläche wird länger; Punkteanzeige springt auf „6 von 6“, Kwame freut sich | Operator markieren · Anzahl · Punkte |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske), Bühne rechts; jede Animation hängt an einem Wort aus
`sprache.json`. Szene 1 steht ohne Titel in der Bildmitte, danach je Szene ein Schwenk zur nächsten Bühne (Bewegungsunschärfe,
Tiefe), Kamera-Akzente auf den Operatoren. Abspann: „Das erste Wort sagt dir, was du tun sollst.“ und „Wer es versteht, holt
mehr Punkte.“ (Kernbotschaft).

## Abweichungen vom Briefing

- Szene 1: Der Kurstitel „Was will die Aufgabe von mir?“ wird nicht eingeblendet (Vorgabe 29.09.2026); die erste Bühne steht mittig.
- Szene 1: Kwame nur als Porträt im Kreis – „kratzt sich am Kopf“ = Kopf wackelt ratlos, Fragezeichen über ihm.
- Szene 7: „Daumen mit Argument-Sprechblase“ → Sprechblase „Argument“ mit grünem Haken (keine Daumen-Geste).
- Szenen 2–8: Die gelbe Markierung des Operators ist eine gelbe Fläche hinter dem Wort auf dem Blatt, kein Strich
  unter Überschriften. Die Überschriften links bleiben ohne Markierung.
- Szenen 3–6: „Text im Bild“ mit „=“ als Titel + Unterzeile (z. B. „Nennen“ / „= aufzählen“).
- Szene 4: Die Schritte des Ölwechsels als Bildkarten mit kurzen Stichworten (Öl ablassen, Filter wechseln, Öl einfüllen,
  Ölstand prüfen); Szene 7: Taschenrechner mit neutralem Beispiel „2 · 3 = 6“, Rechenweg als Zeilen,
  Waage mit „=“ und „≠“ (Gemeinsamkeiten/Unterschiede) – keine weiteren Inhalte erfunden.
- Sprechertext für die Stimme: „Warum?“ und „Fertig.“ stehen nicht als Ein-Wort-Satz (die Stimme liest kurze Einzelwörter
  manchmal englisch): „… nur die Hälfte der Punkte – warum?“, „… Akkuschrauber‘ – fertig.“ Im Untertitel steht wieder
  die Schreibweise des Briefings (siehe unten).
- Vor Szene 7 liegt eine zusätzliche Pause von 1,2 s, damit „Holz, weil …“ mit den Argumenten stehen bleibt, bevor die
  Kamera weiterfährt.

## Sprechertext

@modell eleven_v4
@stimme Erzählerin: oClOrzqamOXmtcB8iqTj

### Szene 1
Erzählerin: Du weißt die Antwort. Aber du bekommst trotzdem nur die Hälfte der Punkte – warum? Oft liegt es an einem einzigen Wort in der Aufgabe.

### Szene 2
Erzählerin: Diese Wörter heißen Operatoren. Sie stehen meistens am Anfang der Aufgabe und sagen dir genau, was du tun sollst. Hier sind die wichtigsten.

### Szene 3
Erzählerin: Nennen: Du zählst nur auf. Kurz, ohne Erklärung. ‚Nennen Sie drei Werkzeuge.‘ Antwort: ‚Zollstock, Wasserwaage, Akkuschrauber‘ – fertig.

### Szene 4
Erzählerin: Beschreiben: Du sagst, wie etwas ist oder wie etwas abläuft. In ganzen Sätzen, in der richtigen Reihenfolge. ‚Beschreiben Sie den Ablauf eines Ölwechsels.‘

### Szene 5
Erzählerin: Erklären oder erläutern: Du sagst, warum etwas so ist. Mit Gründen, bei ‚erläutern‘ auch mit einem Beispiel. ‚Erläutern Sie, warum man vor der Arbeit freischalten muss.‘

### Szene 6
Erzählerin: Begründen: Du gibst Argumente für eine Entscheidung. ‚Begründen Sie, welches Material Sie wählen.‘ Also nicht nur ‚Holz‘, sondern: ‚Holz, weil …‘

### Szene 7
(Pause 1.2)
Erzählerin: Vergleichen: Du zeigst Gemeinsamkeiten und Unterschiede. Berechnen: Du rechnest, und zwar mit Rechenweg. Beurteilen oder bewerten: Du gibst deine eigene Meinung ab, aber mit Argumenten.

### Szene 8
Erzählerin: Dein Trick für jede Prüfung: Markiere zuerst den Operator. Dann schau, wie viele Dinge gefragt sind. ‚Nennen Sie drei …‘ heißt: genau drei. Und schau auf die Punkte: Viele Punkte bedeuten meistens eine längere Antwort.

## Schreibweise im Untertitel

Für die Stimme anders geschrieben als im Briefing; `werkzeug/untertitel.mjs` setzt im Untertitel die rechte Seite.

- Punkte – warum? → Punkte. Warum?
- Akkuschrauber‘ – fertig. → Akkuschrauber.‘ Fertig.
