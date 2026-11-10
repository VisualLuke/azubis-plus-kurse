# Lernvideo 57 – Podcast: Das Berichtsheft führen

- **Quelle:** Briefing Lernvideos 46–65 (eigene Recherche), Lektion 57
- **Zielgruppe:** Azubis im 1. Lehrjahr, auch international; einfaches Deutsch (B1)
- **Format:** Podcast, Kwame (Azubi, Elektro) und Sabine (Ausbilderin) im Gespräch. Leitidee: Draufsicht auf einen Schreibtisch,
  die Porträts sitzen oben (Sabine links, Kwame rechts), in der Mitte liegt das Berichtsheft und blättert Woche für Woche um
- **Setting:** Schreibtisch von oben: Spiralheft, Kugelschreiber, Klebezettel, Lupe; die Prüfungstür als Karte auf dem Tisch
- **Länge:** geplant ca. 1:45–2:00 Min.
- **Kernbotschaft:** Das Berichtsheft ist Pflicht und deine Eintrittskarte zur Prüfung. Schreib jede Woche, während der Arbeitszeit.
- **Aufnahme:** `sprache.mp3` + `sprache.json`, erzeugt mit `node werkzeug/stimme.mjs lernvideos/57-berichtsheft` (ElevenLabs, Eleven v4)

Roter Faden: das **Berichtsheft** liegt aufgeschlagen auf dem Tisch. Szenenwechsel = Umblättern (die Seite hebt sich in 3D
und fällt nach links), Einträge schreibt ein Kugelschreiber, Stichpunkte kommen als Klebezettel, Unterschriften werden live
gezogen; bei „Prüfung“ wird das Heft zur Eintrittskarte vor der Prüfungstür. Überraschende Momente: das Etikett dreht sich wie
eine Münze, auf „abends“ geht das Licht am Tisch aus, vier Wochen flattern auf „Einmal im Monat“ in einem Zug um, am Ende ist
das zugeklappte Heft dick geworden und öffnet die Tür.

| Szene | Bild | Text im Bild |
| --- | --- | --- |
| 1 | Leerer Tisch, die Porträts ploppen auf; auf „Azubis“ / „reden“ tauchen Sprechblasen auf, auf „Berichtsheft“ rutscht das zugeklappte Heft von unten herein und schiebt sie weg; „Muss ich …?“: Fragezeichen bei Kwame, der Stift rollt herein; „musst“: Haken auf dem Umschlag; „Ausbildungsnachweis“: das Etikett dreht sich wie eine Münze; „Gesetz“: ein Stempel schlägt ein Paragrafenzeichen auf den Umschlag | Berichtsheft = Ausbildungsnachweis |
| 2 | Das Heft rückt nach links, rechts kommt die Tür „Abschlussprüfung“; „Ohne Berichtsheft“: ein leerer, gestrichelter Umriss läuft zur Tür und prallt ab (rotes ✕); „Anmeldung“: ein Anmeldeblatt kommt von Sabines Seite aufs Heft; „Prüfung“: das Heft dreht sich zur Eintrittskarte; „Kammer“: Kammer-Gebäude (ohne Logo), die Karte fliegt hin, „sehen“: Lupe, Haken; dann öffnet die Karte die Tür (grünes Licht) | Ohne Berichtsheft keine Prüfung |
| 3 | Das Heft kommt zurück und schlägt auf; „Papier“: der Kugelschreiber schreibt drei Zeilen auf die linke Seite, Haken; „digital“: ein Tablet auf der rechten Seite, Zeilen tippen sich, Haken; Woche Mo–Fr, „jede Woche“: Klammer und Klebezettel „1 × pro Woche“, „jeden Tag“: an jedem Tag ein kleiner Haken; „Ausbildungsvertrag“: Vertrag rutscht auf den Tisch, die Lupe liest | Papier oder digital · jede Woche |
| 4 | Umblättern; „Betrieb“: gelber Zettel mit Steckdose, der Stift schreibt „Steckdosen montiert“, „Leitungen verlegt“ im Takt der Wörter; „Berufsschule“: blauer Zettel mit Schule, zwei Zeilen; „Unterweisungen“: grüner Zettel mit Schutzhelm, „Sicherheit“; „Stichworte reichen“: lange Zeilen schrumpfen zu Stichpunkten | Betrieb · Schule · Unterweisungen |
| 5 | Umblättern; „abends zu Hause“: das Licht am Tisch geht aus, Mond und Sofa auf den Seiten; „Nein“: Wackler, Licht an, beides verschwindet; „Arbeitszeit“: Uhr, die Zeiger laufen von acht bis vier, ein Bogen zeichnet sich; „schreiben“: der Stift schreibt; „Heft“ / „Programm“: Heft und Laptop fliegen vom Betrieb zu Kwames Seite, Chip „kostenlos“ | Während der Arbeitszeit · kostenlos |
| 6 | „Einmal im Monat“: vier gefüllte Wochen flattern um; „schaue … an“: Lupe über beide Seiten; „unterschreibe“: die Unterschrift wird gezogen, Haken; „sprechen“: Sprechblasen auf beiden Seiten, Zettel „✓ gut“ und „? fehlt noch“; „vergesse“: leere Seiten flattern um, Kwame wiegt den Kopf; „schwer“: Lücken auf den Seiten, das Heft sackt; „nicht mehr“: die Erinnerung bei Kwame (Steckdose, Schule, Helm) verschwimmt grau; „Prüfung“ / „Seiten“: kleine Prüfungstür mit rotem ✕, die Lücken werden rot | Jeden Monat: ansehen & unterschreiben |
| 7 | Umblättern; im Takt von Kwames Satz kleben Zettel „Jede Woche“, „Betrieb“, „Schule“, „Unterweisung“, dann wird unterschrieben; „Genau“: das Heft klappt zu und ist dick geworden; die Prüfungstür kommt, auf „gelernt“ geht sie auf (grün), das Heft hüpft davor, Haken | Jede Woche · unterschreiben lassen |

Umsetzung: Gesprächsformat mit Technik wie `../38-betriebsrat-jav` (Mund mit dem Pegel der Aufnahme, der Sprecher wird größer
und bekommt einen Rand, der Zuhörer nickt), aber eigener Bildaufbau (Tisch von oben, Porträts oben in den Ecken, Text im Bild
oben zwischen beiden). Wer spricht, kommt exakt aus `sprache.json` (`satz(n).sprecher`, `start`, `ende`). Wörter des Texts im
Bild steigen aus einer Maske; jede Animation hängt an einem Wort aus `sprache.json`. Kamera: Einfahrt, leichtes Zurückweichen
beim Umblättern, Akzente auf „musst“, „Gesetz“, „Prüfung“, „Woche“, „Arbeitszeit“, „unterschreibe“, „schwer“, „Seiten“.
Abspann: „Jede Woche ein Eintrag.“ – „Dein Berichtsheft ist deine Eintrittskarte zur Prüfung.“

Teile in `teile/`: neu `kammer` (Kammer-Gebäude ohne Schriftzug), `schutzhelm`; Kopien `steckdose` (29), `schule` (06),
`laptop` (04), `lupe` (01), `kalender` (10), `mond-gelb` (10), `sofa` (04); aus `teile/`: `heft`, `vertrag`, `stempel`, `stift`,
`uhr`, `betrieb`, Figuren. Heft, Seiten, Zettel, Tür, Eintrittskarte und Tablet sind in der Vorlage gezeichnet (Token-Farben).

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
