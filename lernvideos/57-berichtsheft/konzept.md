# Lernvideo 57 – Podcast: Das Berichtsheft führen

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Lektion 57
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Kwame (Azubi, Elektro) und Sabine (Ausbilderin) im Gespräch; Porträts links (Sabine) und rechts (Kwame),
  in der Mitte die Bühne mit den animierten Einblendungen
- **Setting:** Werkstatt am Freitagnachmittag, Werkbank mit Laptop und einem Ordner; Wanduhr kurz nach zwei
- **Länge:** geplant ca. 1:45–2:00 Min.
- **Kernbotschaft:** Das Berichtsheft ist Pflicht und deine Eintrittskarte zur Prüfung. Schreib jede Woche, während der Arbeitszeit.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/57-berichtsheft` (ElevenLabs, Eleven v4)

Roter Faden: ein **Berichtsheft**, das mit dem Gespräch wächst – Woche für Woche kommt eine Seite dazu; am Ende wird der Stapel
zur Eintrittskarte vor der Tür „Prüfung“.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Werkstatt in der Bildmitte: Werkbank schiebt sich herein, Wanduhr springt auf kurz nach zwei, Sicherungskasten an der Wand; Kwame und Sabine (Porträts) ploppen links und rechts auf; auf „Berichtsheft“ fliegt ein Heft auf die Werkbank, schlägt auf und klappt auf, leere Zeilen; Fragezeichen über Kwame; auf „Ausbildungsnachweis“ dreht sich das Heft wie eine Münze und zeigt hinten das Etikett „Ausbildungsnachweis“, auf „Gesetz“ fällt ein Paragrafenzeichen daneben und rastet mit Wackler ein | Berichtsheft = Ausbildungsnachweis |
| 2 | Das Heft wird zur Eintrittskarte: Tür „Abschlussprüfung“ mit Schloss neben dem Heft; ohne Heft (gestrichelter Umriss) prallt der Weg an der Tür ab (rotes ✕); auf „Anmeldung“ heftet sich ein Anmeldeblatt an, das Heft verwandelt sich in eine Eintrittskarte und fliegt zur Kammer (Gebäude ohne Logo); auf „zu sehen“ fährt eine Lupe darüber, Haken, die Tür geht einen Spalt auf | Ohne Berichtsheft keine Prüfung |
| 3 | Zwei Wege teilen sich: links ein Heft mit Stift (Papier), rechts Laptop/Tablet (digital), beide bekommen einen Haken; Ausbildungsvertrag fliegt herein, eine Zeile leuchtet und eine Lupe fährt darüber; Kalenderleiste Mo–Fr: auf „jede Woche“ springt am Freitag ein großer Stempel „Woche“, auf „jeden Tag“ ploppen fünf kleine Haken an allen Tagen | Papier oder digital · jede Woche |
| 4 | Laptop klappt auf, ein Wochenblatt mit drei farbigen Feldern: „Betrieb“ (Steckdose wird montiert, Leitung zieht sich von der Rolle durch ein Rohr, Lampe geht an), „Berufsschule“ (Schule, Tafel mit Stichwort, Buch klappt auf), „Unterweisung“ (Helm und Schild mit Haken); jedes Feld tippt sich voll, sobald es genannt wird; auf „Stichworte“ schrumpfen lange Sätze zu kurzen Stichpunkten (Wörter springen weg, Punkte bleiben) | Betrieb · Schule · Unterweisungen |
| 5 | Abend-Fenster mit Mond und Sofa erscheinen, das Heft fliegt hin – auf „Nein“ wackelt die Szene, das Heft fliegt zurück in die Werkstatt; die Wanduhr leuchtet (Arbeitszeit, Uhrzeiger laufen durch den Nachmittag); auf „kostenlos“ rutschen Heft und Laptop über die Werkbank zu Kwame, Chip „kostenlos“ mit Haken | Während der Arbeitszeit · kostenlos |
| 6 | Kalender: vier Wochen-Seiten flattern ab und stapeln sich; Sabine bekommt das Heft, eine Lupe fährt über die Seiten, ihr Stift unterschreibt mit Schwung, Haken; zwei Sprechblasen zwischen beiden (grüner Haken „gut“, Fragezeichen „fehlt“); auf „vergesse“ fliegen leere Seiten herein, auf „nicht mehr“ verblassen die Bilder darauf zu grauen Nebeln, Kwame kratzt sich am Kopf (Porträt wackelt), eine kleine Uhr läuft rot bis zur Prüfungstür, die Schranke bleibt unten | Jeden Monat: ansehen & unterschreiben |
| 7 | Zurück in der Werkstatt: das Heft wächst Seite für Seite zu einem dicken Ordner, auf jedes Stichwort aus Kwames Satz springt ein Symbol hinein (Kalender, Werkzeug, Schule, Helm, Stift); auf „gelernt“ fächert sich der Ordner auf, bunte Seiten schweben wie ein Fächer, ein Fortschrittsbalken „1. Lehrjahr“ füllt sich; Kwame lacht, Sabine nickt, die Prüfungstür im Hintergrund leuchtet grün | Jede Woche · unterschreiben lassen |

Umsetzung: Gesprächsformat wie `../33-erste-woche-berufsschule` und `../38-betriebsrat-jav` (Porträts links/rechts, Mund mit
dem Pegel der Aufnahme, der Sprecher wird größer und bekommt einen Rand, die Zuhörerin bzw. der Zuhörer nickt). Wer spricht,
kommt exakt aus `sprache.json` (`satz(n).sprecher`, `start`, `ende`). Text im Bild oben auf der Bühne, Wörter steigen aus einer
Maske; jede Animation hängt an einem Wort aus `sprache.json`. Schwenk mit Bewegungsunschärfe, Kamera-Akzente auf „Gesetz“,
„Prüfung“, „jede Woche“, „Arbeitszeit“, „unterschreibe“. Abspann: „Jede Woche ein Eintrag.“ und die Kernbotschaft.

Kursspezifische Teile (neu, Stil C): `berichtsheft`, `paragraf`, `schranke-tuer`, `steckdose`, `kabelrolle`, `fortschritt`;
vorhanden: `heft`, `laptop`, `vertrag`, `kalender`, `stempel`, `stift`, `lupe`, `schule`, `buch`, `helm`, `kammer-ihk`,
`kammer-hwk`, `uhr`, `mond`, `sofa-*` (Kopie aus Kurs 35).

## Abweichungen vom Briefing

- Kein Kurstitel im Video; „Berichtsheft = Ausbildungsnachweis“ ist Inhalt.
- Kwames Beispiele aus dem Elektro-Handwerk („Steckdosen montiert, Leitungen verlegt“), passend zu Kurs 29/32.
- „Täglich/wöchentlich, wie im Vertrag“ wird als „Bei uns jede Woche, in manchen Betrieben jeden Tag; was gilt, steht im
  Ausbildungsvertrag“ gesagt (§ 11 BBiG: die Form steht in der Vertragsniederschrift).
- „Ausbilder sieht regelmäßig durch“ wird konkret: „einmal im Monat“ (BIBB-Empfehlung und Kammern: mindestens monatlich).
- Die Prüfung wird nur als „Abschlussprüfung“ genannt (im Handwerk heißt sie Gesellenprüfung; Regel gleich, § 36 HwO).
- Szene 2 nach dem Faktencheck (03.10.2026, `../faktencheck-46-65.md`): Seit dem BVaDiG (01.08.2024) sind Unterschriften keine
  Zulassungsbedingung mehr, der Betrieb legt den Nachweis bei der Kammer vor. Statt „Die Kammer will es sehen, bevor du zur Prüfung
  darfst. Unterschrieben von dir und von mir.“ jetzt „Bei der Anmeldung zur Prüfung bekommt die Kammer es zu sehen.“ Keine
  Unterschriften in Szene 2; Sabines monatliche Kontrolle (Szene 6) bleibt, das ist ihre Praxis (BIBB-Empfehlung 156).
- Kein Format-Detail wie „eine DIN-A4-Seite pro Woche“ (von Kammer zu Kammer verschieden, für die Botschaft nicht nötig).

## Sprechertext

@modell eleven_v4
@stimme Kwame: hfqsl1OMbiWsgPpht3el
@stimme Sabine: PcHppp9ymY0Wa5ee6hOQ

### Szene 1
Kwame: Sabine, die anderen Azubis reden immer vom Berichtsheft. Muss ich das wirklich schreiben?
Sabine: Ja, das musst du. Offiziell heißt es Ausbildungsnachweis. Das steht so im Gesetz.

### Szene 2
Kwame: Und warum ist das so wichtig?
Sabine: Ohne Berichtsheft kommst du nicht zur Abschlussprüfung. Bei der Anmeldung zur Prüfung bekommt die Kammer es zu sehen.

### Szene 3
Kwame: Muss ich das mit der Hand schreiben?
Sabine: Nein, es geht auf Papier oder digital. Bei uns schreibst du jede Woche einen Bericht, in manchen Betrieben jeden Tag. Was gilt, steht in deinem Ausbildungsvertrag.

### Szene 4
Kwame: Und was schreibe ich da rein?
Sabine: Was du im Betrieb gemacht hast, zum Beispiel: Steckdosen montiert, Leitungen verlegt. Dazu die Themen aus der Berufsschule. Und Unterweisungen, zum Beispiel zur Sicherheit. Stichworte reichen.

### Szene 5
Kwame: Schreibe ich das abends zu Hause?
Sabine: Nein, du darfst es während der Arbeitszeit schreiben. Und das Heft oder das Programm bekommst du kostenlos vom Betrieb.

### Szene 6
Sabine: Einmal im Monat schaue ich mir alles an und unterschreibe. Dann sprechen wir kurz darüber: Was lief gut, was fehlt noch?
Kwame: Und wenn ich ein paar Wochen vergesse?
Sabine: Dann wird es schwer. Nach ein paar Monaten weißt du nicht mehr, was du gemacht hast. Und vor der Prüfung fehlen dir dann Seiten.

### Szene 7
Kwame: Also: jede Woche schreiben, Betrieb, Schule und Unterweisungen rein, dann unterschreiben lassen.
Sabine: Genau, und am Ende siehst du, wie viel du schon gelernt hast.

## Schreibweise im Untertitel

Keine Abweichungen: Der Sprechertext enthält keine Zahlen, Abkürzungen oder englischen Wörter, die im Untertitel anders
geschrieben werden.

## Quellen

Geprüft am 03.10.2026. Die Seiten waren in dieser Umgebung nicht direkt abrufbar (Netzsperre); die Aussagen sind über die
Suchergebnisse dieser Seiten belegt und beim Produzieren noch einmal im Browser gegenzulesen.

1. § 13 BBiG (Verhalten während der Berufsausbildung, Satz 2 Nr. 7: Ausbildungsnachweis führen) –
   https://www.gesetze-im-internet.de/bbig_2005/__13.html
2. § 14 BBiG (Berufsausbildung; Abs. 2: zum Führen anhalten, regelmäßig durchsehen, Gelegenheit während der Ausbildungszeit) –
   https://www.gesetze-im-internet.de/bbig_2005/__14.html
3. § 43 BBiG (Zulassung zur Abschlussprüfung, Abs. 1 Nr. 2) – https://www.gesetze-im-internet.de/bbig_2005/__43.html
4. § 11 BBiG (Vertragsniederschrift, Nr. 12: Form des Ausbildungsnachweises) – https://www.gesetze-im-internet.de/bbig_2005/__11.html
5. § 36 HwO (Zulassung zur Gesellenprüfung) – https://www.gesetze-im-internet.de/hwo/__36.html
6. BIBB: Empfehlung des Hauptausschusses Nr. 156 zum Führen von Ausbildungsnachweisen (Stand 01.09.2020) –
   https://www.bibb.de/dokumente/pdf/HA156.pdf und https://www.bibb.de/de/34111.php
7. IHK / DIHK: „Regelungen zum Führen von Ausbildungsnachweisen“ –
   https://www.ihk.de/blueprint/servlet/resource/blob/5629936/952f9d7a42e75c8f0076ff1cf0c9628c/ausbildungsnachweis-data.pdf
8. IHK Köln: „Berichtsheft (Ausbildungsnachweis)“ – https://www.ihk.de/koeln/hauptnavigation/ausbildung/auszubildende/das-berichtsheft-5015052
9. Handwerkskammer Reutlingen: „Ausbildungsnachweis: das Berichtsheft“ – https://www.hwk-reutlingen.de/ausbildung/berichtsheft.html
10. Handwerkskammer Köln: „Ausbildungsnachweis (Berichtsheft)“ – https://www.hwk-koeln.de/artikel/ausbildungsnachweis-berichtsheft-32,0,350.html
11. IHK Karlsruhe: „Infos zum Berufsbildungsvalidierungs- und -digitalisierungsgesetz“ (Streichung „vom Ausbilder und Auszubildenden unterzeichneten“, Vorlage durch den Ausbildenden mit der Anmeldung) –
    https://www.ihk.de/karlsruhe/fachthemen/ausbildung/aktuelles/infos-zum-berufsbildungsvalidierungs-und-digitalisierungsgesetz-6319612

## Faktencheck

| Aussage (Sprechertext / Text im Bild) | Beleg |
| --- | --- |
| Berichtsheft ist Pflicht, heißt offiziell Ausbildungsnachweis, steht im Gesetz / „Berichtsheft = Ausbildungsnachweis“ | § 13 Satz 2 Nr. 7 BBiG (1): Auszubildende sind verpflichtet, einen schriftlichen oder elektronischen Ausbildungsnachweis zu führen |
| Ohne Berichtsheft keine Abschlussprüfung; bei der Anmeldung zur Prüfung bekommt die Kammer es zu sehen / „Ohne Berichtsheft keine Prüfung“ | § 43 Abs. 1 Nr. 2 BBiG (3) in der Fassung des BVaDiG (seit 01.08.2024): zugelassen ist, wer einen Ausbildungsnachweis „über den Ausbildenden oder die Ausbildende schriftlich oder elektronisch vorgelegt hat“ – der Betrieb legt ihn mit der Anmeldung zur Prüfung vor (11); § 36 Abs. 1 Nr. 2 HwO (5) für die Gesellenprüfung |
| Auf Papier oder digital / „Papier oder digital“ | § 13 Satz 2 Nr. 7 BBiG (1): schriftlich oder elektronisch |
| Jede Woche, in manchen Betrieben jeden Tag; was gilt, steht im Ausbildungsvertrag / „jede Woche“ | BIBB-Empfehlung 156 (6), IHK (7): täglich oder wöchentlich; § 11 Abs. 1 Nr. 12 BBiG (4): Form des Ausbildungsnachweises in der Vertragsniederschrift; HWK (9): mindestens wöchentlich |
| Inhalte: Tätigkeiten im Betrieb, Themen der Berufsschule, Unterweisungen; Stichworte reichen / „Betrieb · Schule · Unterweisungen“ | IHK (7): betriebliche Tätigkeiten sowie Unterweisungen, betrieblicher Unterricht, Schulungen, mindestens stichwortartig; BIBB 156 (6): Themen des Berufsschulunterrichts aufführen |
| Während der Arbeitszeit schreiben / „Während der Arbeitszeit“ | § 14 Abs. 2 Satz 2 BBiG (2): Gelegenheit geben, den Ausbildungsnachweis am Arbeitsplatz zu führen; „während der Ausbildungszeit“ nennt die BIBB-Empfehlung 156 (6) |
| Heft oder Programm kostenlos vom Betrieb / „kostenlos“ | IHK (7): Nachweishefte, Formblätter oder elektronische Führung stellen die Ausbildenden kostenlos zur Verfügung (vgl. § 14 Abs. 1 Nr. 3 BBiG, Ausbildungsmittel kostenlos) |
| Einmal im Monat ansehen und unterschreiben, kurz darüber sprechen / „Jeden Monat: ansehen & unterschreiben“ | § 14 Abs. 2 Satz 1 BBiG (2): regelmäßig durchsehen; BIBB 156 (6), IHK (7): mindestens monatlich prüfen, mit Datum und Unterschrift bestätigen; BIBB 156: in der Praxis bewährt, monatlich gemeinsam zu besprechen. Ein Gesetz schreibt die Unterschrift nicht mehr vor (BVaDiG, siehe oben) – das ist Sabines Praxis |
| Wochen vergessen → vor der Prüfung fehlen Seiten | HWK (9, 10): regelmäßig und vollständig führen; Lücken können die Zulassung gefährden; IHK (7): bis zum Ende der Ausbildung weiterführen |
