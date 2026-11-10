# Lernvideo 1 – Erklärvideo: Krankenkasse & Versichertenkarte

- **Quelle:** Briefing „Azubis Plus – 30 Lernvideos für internationale Azubis“, Video 1
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Erklärvideo, eine Off-Stimme (Erzähler), animierte Szenen; Mai als Figur
- **Länge:** geplant ca. 2 Min.
- **Kernbotschaft:** Du bist in Deutschland krankenversichert. Such dir eine Krankenkasse aus und sag sie deinem Betrieb.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/01-krankenkasse` (ElevenLabs, Eleven v4)

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Mai mit Schal, Zahnbürste, Pflaster; alles fliegt in ein Schild mit Kreuz | Wer bezahlt den Arzt? |
| 2 | Gehaltszettel, Beitrag reißt ab und fliegt zur Krankenkasse; vom Betrieb fliegt ein zweites Stück dazu; Stempel „Pflicht“ | Gesetzliche Krankenversicherung = Pflicht |
| 3 | Kalender mit 14 Tagen füllt sich, Mai läuft als Marker mit; Tag 1 „Start Ausbildung“, Tag 14 → „sonst wählt dein Betrieb“ | Du wählst deine Krankenkasse – innerhalb von 2 Wochen |
| 4 | Kassen-Karten werden ausgeteilt, die AOK-Karte kommt nach vorn; Leistungen gleich; Lupe prüft Service, App, Sprache | Du wählst deine Krankenkasse |
| 5 | Mai gibt die Mitgliedsbescheinigung an das Personalbüro | Krankenkasse → an deinen Betrieb |
| 6 | Kalenderblätter; Umschlag fliegt herein, Karte kommt heraus, Foto blitzt ein, Karte ins Portemonnaie | Versichertenkarte immer dabei |
| 7 | Kacheln Arzt, Krankenhaus, Zahnarzt, Medikamente, je ein grüner Haken von der Kasse; Rezept, Münze, „Zuzahlung: 5 – 10 €“ | Arzt · Krankenhaus · Zahnarzt · Medikamente |
| 8 | Alte Karte, Uhr läuft („erst warten“), neue Karte leuchtet („gilt“), dann wird die alte durchgestrichen | Alte Versicherung erst kündigen, wenn die neue gilt |
| 9 | Handy mit Kassen-App, Adresse wird neu getippt, Senden, Brief fliegt zur Kasse | Änderungen melden |
| 10 | Mai mit Karte, Schritte 1–3, Schutzring | Wählen. Melden. Karte dabei. |

Umsetzung: Text im Bild links (Wörter steigen aus einer Maske, Schlüsselwörter mit Marker), Bühne rechts; jede Animation hängt
an einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe und Tiefe, Kamera-Akzente auf Schlüsselwörtern.
Abspann: „Du bist gut geschützt.“ und die Kernbotschaft.

Änderungen am Briefing (freigegeben, siehe `../korrekturen.md`): nur die AOK als Beispiel (Partnerschaft); neu die Zwei-Wochen-Frist
für die Kassenwahl (Szene 3); Zuzahlung konkret 5–10 €.

## Sprechertext

@modell eleven_v4
@stimme Erzähler: K8bIZwDsGMHreGKTIVHN

### Szene 1
Erzähler: Halsschmerzen, Zahnarzt, ein Unfall. Wer bezahlt das eigentlich? In Deutschland: deine Krankenkasse.

### Szene 2
Erzähler: Als Azubi bist du automatisch in der gesetzlichen Krankenversicherung. Das ist Pflicht. Der Beitrag wird direkt von deinem Gehalt abgezogen, und dein Betrieb zahlt auch einen Teil.

### Szene 3
Erzähler: Du darfst dir deine Krankenkasse selbst aussuchen. Dafür hast du zwei Wochen Zeit, ab dem Start deiner Ausbildung. Sonst wählt dein Betrieb für dich.

### Szene 4
Erzähler: Es gibt viele Krankenkassen, zum Beispiel die AOK. Die Leistungen sind sehr ähnlich. Achte auf Service, App und Sprache.

### Szene 5
Erzähler: Wichtig: Sag deinem Betrieb gleich am Anfang, bei welcher Krankenkasse du bist. Am besten mit einer Mitgliedsbescheinigung der Kasse.

### Szene 6
Erzähler: Nach ein paar Wochen kommt deine Versichertenkarte per Post. Dafür braucht die Kasse meistens ein Foto von dir. Diese Karte nimmst du zu jedem Arztbesuch mit.

### Szene 7
Erzähler: Was bezahlt die Krankenkasse? Den Hausarzt, Fachärzte, das Krankenhaus, die Kontrolle beim Zahnarzt und viele Medikamente. Für Medikamente vom Rezept zahlst du meistens eine kleine Zuzahlung: fünf bis zehn Euro.

### Szene 8
Erzähler: Hattest du vor der Ausbildung eine Reise- oder Incoming-Versicherung? Die brauchst du danach meistens nicht mehr. Aber kündige sie erst, wenn deine neue Krankenkasse wirklich gilt.

### Szene 9
Erzähler: Deine Adresse oder dein Name ändert sich? Sag es deiner Krankenkasse. Das geht meistens einfach in der App.

### Szene 10
Erzähler: Also: Krankenkasse wählen, dem Betrieb Bescheid geben, Karte immer dabeihaben. Dann bist du gut geschützt.
