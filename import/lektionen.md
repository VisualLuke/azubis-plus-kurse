# Lektionen in der App

Stand 03.10.2026, aus Supabase gelesen (`kurse`, Projekt Azubis Plus): 84 Lektionen in 11 Abschnitten, alle aktiv, sichtbar ab
`09_bewerbungsphase`. Reihenfolge in „Lernen“ = `kurse.sort`, Abschnitt = Kategorie (`quiz_kategorien`); das Abzeichen hängt an der
letzten Lektion seines Abschnitts. Abschnitte, Abzeichen-Namen und einige Positionen hat das Team nach dem ersten Import (29.09.)
im Kurs-Editor angepasst; die Lernvideos 46–65 (03.10.) sind davor eingeordnet. Am 03.10. kamen 66–80 dazu, mit dem neuen Abschnitt
„Kultur & Miteinander“ (Abzeichen „Offen für Neues“) nach „Leben in Deutschland“; alle Lektionen ab Position 280 sind dafür um 100
nach hinten gerückt. Ab jetzt werden die Lektionen im Kurs-Editor gepflegt – `fragen.json` im Ordner ist der Stand beim Import.

| Pos. | Abschnitt | Lektion | Ordner | Fragen | Abzeichen | Kurs-ID |
| --- | --- | --- | --- | --- | --- | --- |
| 10 | Ankommen & Papiere | Die ersten 14 Tage | [`lernvideos/46-die-ersten-14-tage`](../lernvideos/46-die-ersten-14-tage/) | 12 |  | `24c07127-0dd6-4476-8f4b-529a4201aa5c` |
| 15 | Ankommen & Papiere | Nützliche Apps für den Start | [`lernvideos/66-nuetzliche-apps`](../lernvideos/66-nuetzliche-apps/) | 12 |  | `eeefdc8a-5cc1-489d-b61b-75b3cba09b06` |
| 20 | Ankommen & Papiere | Beim Bürgeramt anmelden | [`kurse/02-wohnsitz-anmelden`](../kurse/02-wohnsitz-anmelden/) | 9 |  | `00bb0c3a-7538-4945-bc63-d1281645f8fb` |
| 30 | Ankommen & Papiere | Ein Bankkonto eröffnen | [`kurse/03-bankkonto`](../kurse/03-bankkonto/) | 8 |  | `a29e4007-8904-4389-a021-aa8301be9138` |
| 40 | Ankommen & Papiere | Steuer-ID und Sozialversicherungsnummer | [`lernvideos/47-steuer-id`](../lernvideos/47-steuer-id/) | 12 |  | `dce8e832-78d1-4f82-a91e-eb43c133dbe9` |
| 50 | Ankommen & Papiere | Krankenkasse und Versichertenkarte | [`lernvideos/01-krankenkasse`](../lernvideos/01-krankenkasse/) | 11 |  | `4d1181fc-394b-4e8e-9c71-73b0211e2cb9` |
| 60 | Ankommen & Papiere | Handy und SIM-Karte | [`lernvideos/49-handy-sim`](../lernvideos/49-handy-sim/) | 11 |  | `bc79b017-1753-4dc0-896d-e500fe72886e` |
| 70 | Ankommen & Papiere | Der erste Termin bei der Ausländerbehörde | [`lernvideos/48-auslaenderbehoerde`](../lernvideos/48-auslaenderbehoerde/) | 11 |  | `692a070b-9de0-47a8-9e5a-5bfb23276a4c` |
| 80 | Ankommen & Papiere | Zum Arzt gehen | [`lernvideos/02-zum-arzt`](../lernvideos/02-zum-arzt/) | 10 | Papierkram erledigt | `028ea7b0-7897-4783-9f45-66a11555d50f` |
| 90 | Unterwegs & sicher | Zu Fuß im Straßenverkehr | [`lernvideos/50-zu-fuss`](../lernvideos/50-zu-fuss/) | 11 |  | `e5e31c7f-5f61-425d-a15e-838e9eee2e22` |
| 100 | Unterwegs & sicher | Bus und Bahn | [`lernvideos/51-bus-und-bahn`](../lernvideos/51-bus-und-bahn/) | 11 |  | `353510bb-9b1f-45ed-896e-7ea5988ad143` |
| 110 | Unterwegs & sicher | Fahrrad fahren | [`lernvideos/52-fahrrad`](../lernvideos/52-fahrrad/) | 11 |  | `7509651f-348b-479a-bcb8-83cfcf4bcba9` |
| 120 | Unterwegs & sicher | Sicher im Winter | [`lernvideos/53-winter`](../lernvideos/53-winter/) | 11 |  | `264a57df-ae38-4d6a-9f7d-05c612cd275e` |
| 130 | Unterwegs & sicher | Notruf richtig nutzen | [`lernvideos/54-notruf`](../lernvideos/54-notruf/) | 12 | Sicher unterwegs | `61e39cea-b55b-45fd-ae67-339aba267cc2` |
| 140 | Start im Betrieb | Der erste Arbeitstag | [`lernvideos/22-kwames-erster-tag`](../lernvideos/22-kwames-erster-tag/) | 9 |  | `06437a1b-39c0-4fbb-aa14-0817fa415fcd` |
| 150 | Start im Betrieb | Wer ist wer im Betrieb? | [`lernvideos/32-wer-ist-wer`](../lernvideos/32-wer-ist-wer/) | 9 |  | `d3cbb048-d017-4799-a0c3-eb91eabfe1c7` |
| 160 | Start im Betrieb | Arbeitsschutz und Schutzkleidung | [`lernvideos/58-arbeitsschutz`](../lernvideos/58-arbeitsschutz/) | 12 |  | `5c2471e0-1555-4262-8b8d-8ae9f2e83807` |
| 170 | Start im Betrieb | Pünktlichkeit | [`lernvideos/23-puenktlichkeit`](../lernvideos/23-puenktlichkeit/) | 7 |  | `3006e0ae-ecf0-43ca-b3aa-9151786b7864` |
| 180 | Start im Betrieb | Wörter für jede Ausbildung | [`lernvideos/31-vokabeln-ausbildung`](../lernvideos/31-vokabeln-ausbildung/) | 11 |  | `4c195db5-85a8-4db8-a089-b396382d6dc1` |
| 190 | Start im Betrieb | Mythos oder Wahrheit: Krank sein | [`lernvideos/13-mythos-krank`](../lernvideos/13-mythos-krank/) | 9 |  | `762f272d-ab93-4cfd-b7d6-d46cd3cbeacd` |
| 200 | Start im Betrieb | Die erste Woche in der Berufsschule | [`lernvideos/33-erste-woche-berufsschule`](../lernvideos/33-erste-woche-berufsschule/) | 9 |  | `6fc21455-ff98-44d9-a731-53357c3504e2` |
| 210 | Start im Betrieb | Das Berichtsheft führen | [`lernvideos/57-berichtsheft`](../lernvideos/57-berichtsheft/) | 12 |  | `1a63fbb4-2132-4de4-9ef4-14c2590fe3a8` |
| 220 | Start im Betrieb | Verschlafen am Berufsschultag | [`lernvideos/16-verschlafen`](../lernvideos/16-verschlafen/) | 9 |  | `7b572634-8569-4697-b06f-79dab89c5f58` |
| 230 | Start im Betrieb | Arbeitsunfall und Wegeunfall | [`lernvideos/06-arbeitsunfall`](../lernvideos/06-arbeitsunfall/) | 9 | Startklar im Betrieb | `affd4ddf-c856-4237-b560-2c46cc35a915` |
| 240 | Leben in Deutschland | Heimweh und die ersten Monate | [`lernvideos/10-heimweh`](../lernvideos/10-heimweh/) | 11 |  | `4976d225-5949-4750-a502-cfe65c3e6b8d` |
| 250 | Leben in Deutschland | Freundschaften in Deutschland | [`lernvideos/36-freundschaften`](../lernvideos/36-freundschaften/) | 10 |  | `2dec9cf9-6e6c-420d-9109-aa1f84a5228f` |
| 260 | Leben in Deutschland | Was ist ein Verein? | [`lernvideos/42-verein`](../lernvideos/42-verein/) | 11 |  | `1ccdce5e-8e9c-4300-b18c-618e01685f00` |
| 270 | Leben in Deutschland | Feiertage und Traditionen | [`lernvideos/37-mythos-feiertage`](../lernvideos/37-mythos-feiertage/) | 11 | Anschluss gefunden | `0498c40a-5c17-4487-bd82-55b2138e10fd` |
| 280 | Kultur & Miteinander | Begrüßen und Abstand | [`lernvideos/69-begruessen-abstand`](../lernvideos/69-begruessen-abstand/) | 12 |  | `e3afbc61-3be7-4205-b7d8-828a851c3645` |
| 290 | Kultur & Miteinander | Termine und Verabredungen | [`lernvideos/70-termine-verabredungen`](../lernvideos/70-termine-verabredungen/) | 12 |  | `76b94942-6395-4667-9a29-024c004ee98f` |
| 300 | Kultur & Miteinander | Eingeladen sein | [`lernvideos/71-eingeladen-sein`](../lernvideos/71-eingeladen-sein/) | 12 |  | `a3e9bdc6-de8b-4091-8b66-010aeeb22860` |
| 310 | Kultur & Miteinander | Arbeit und Freizeit trennen | [`lernvideos/72-arbeit-und-freizeit`](../lernvideos/72-arbeit-und-freizeit/) | 12 |  | `37fc1ff0-3522-40cc-a1b3-a6eadd74b8b9` |
| 320 | Kultur & Miteinander | Lob und Feedback | [`lernvideos/73-lob-und-feedback`](../lernvideos/73-lob-und-feedback/) | 12 |  | `74aafa8a-5342-456d-9b3a-91970172b83b` |
| 330 | Kultur & Miteinander | Gleichberechtigung im Alltag | [`lernvideos/74-gleichberechtigung`](../lernvideos/74-gleichberechtigung/) | 12 |  | `8e445be9-653e-4687-beb4-fa9be15cc753` |
| 332 | Kultur & Miteinander | Rassismus – alle sind gleich viel wert | [`lernvideos/79-rassismus`](../lernvideos/79-rassismus/) | 12 |  | `9ee928e4-af96-4cbf-a377-ef5fe61ee413` |
| 334 | Kultur & Miteinander | Liebe ist frei | [`lernvideos/80-liebe-ist-frei`](../lernvideos/80-liebe-ist-frei/) | 12 |  | `d25b4fa4-1680-4ec5-9e3b-d5e0c3083efe` |
| 340 | Kultur & Miteinander | Religion und Vielfalt | [`lernvideos/75-religion-vielfalt`](../lernvideos/75-religion-vielfalt/) | 12 |  | `9f13379a-62cc-43e1-82dc-7465e713ebf9` |
| 350 | Kultur & Miteinander | Regeln und Vertrauen | [`lernvideos/76-regeln-vertrauen`](../lernvideos/76-regeln-vertrauen/) | 12 |  | `b43526bd-ba29-4984-8a5a-8ebefe8ef579` |
| 360 | Kultur & Miteinander | Pfand und Umwelt | [`lernvideos/77-pfand-umwelt`](../lernvideos/77-pfand-umwelt/) | 12 |  | `ad7edcf0-b03d-419b-97ad-bc402161144c` |
| 370 | Kultur & Miteinander | Familie und Selbstständigkeit | [`lernvideos/78-familie-selbststaendigkeit`](../lernvideos/78-familie-selbststaendigkeit/) | 12 | Offen für Neues | `86ebae75-948d-463f-8a54-12086b39a129` |
| 380 | Wohnen & Alltag | Mülltrennung | [`lernvideos/03-muelltrennung`](../lernvideos/03-muelltrennung/) | 11 |  | `70de62e9-1298-4838-8b89-20d1a9ad43fe` |
| 390 | Wohnen & Alltag | Heizen und Lüften | [`lernvideos/55-heizen-lueften`](../lernvideos/55-heizen-lueften/) | 12 |  | `56e1cb54-83de-431e-91ad-678b8a3eeb73` |
| 400 | Wohnen & Alltag | Sonntag und Hausordnung | [`lernvideos/25-sonntag-hausordnung`](../lernvideos/25-sonntag-hausordnung/) | 9 |  | `460c7321-b14c-496c-883a-010b6a14812a` |
| 410 | Wohnen & Alltag | Wichtige Post öffnen | [`lernvideos/21-mais-post`](../lernvideos/21-mais-post/) | 9 |  | `f959db6c-a09e-4b4e-8c15-edcd4e36f1f2` |
| 420 | Wohnen & Alltag | Ein Brief mit Frist | [`lernvideos/17-brief-mit-frist`](../lernvideos/17-brief-mit-frist/) | 10 |  | `8d3365e8-c782-4fd2-9318-46fc49523a69` |
| 430 | Wohnen & Alltag | Der Rundfunkbeitrag | [`lernvideos/04-rundfunkbeitrag`](../lernvideos/04-rundfunkbeitrag/) | 9 |  | `c448a1b6-7eec-4f84-88d1-c82a95500aab` |
| 440 | Wohnen & Alltag | „Ihr Konto wurde gesperrt“ | [`lernvideos/19-konto-gesperrt`](../lernvideos/19-konto-gesperrt/) | 9 | Post & Wohnung im Griff | `61163db4-1c15-4337-9ac5-dc79ce243e83` |
| 450 | Wohnen & Alltag | Ein WG-Zimmer finden | [`lernvideos/56-wg-zimmer`](../lernvideos/56-wg-zimmer/) | 11 |  | `2d6ac45e-eded-447c-811c-41b5d546ed34` |
| 460 | Wohnen & Alltag | Den Mietvertrag verstehen | [`lernvideos/07-mietvertrag`](../lernvideos/07-mietvertrag/) | 12 |  | `3021e342-b1b9-442c-a88d-c413e6a31714` |
| 470 | Wohnen & Alltag | Mythos oder Wahrheit: Wohnen | [`lernvideos/15-mythos-wohnen`](../lernvideos/15-mythos-wohnen/) | 11 |  | `34bf029c-7898-46a8-b8e9-acf85987889b` |
| 480 | Rechte & Geld | Brutto, Netto und Gehaltsabrechnung | [`kurse/01-brutto-netto`](../kurse/01-brutto-netto/) | 12 |  | `8e717cac-f80a-40f2-b405-ec387041f2b7` |
| 490 | Rechte & Geld | Dein Geld im Monat planen | [`lernvideos/61-geld-planen`](../lernvideos/61-geld-planen/) | 12 |  | `5d8fbc30-98a0-4d86-8d40-b9e3cc0a7134` |
| 500 | Rechte & Geld | Geld nach Hause schicken | [`lernvideos/62-geld-nach-hause`](../lernvideos/62-geld-nach-hause/) | 11 |  | `82e59fb8-076f-436a-a263-7bddfdf0d8fa` |
| 510 | Rechte & Geld | Rechte und Pflichten in der Ausbildung | [`kurse/04-rechte-pflichten`](../kurse/04-rechte-pflichten/) | 14 |  | `2980db4a-4b0b-47db-8c5d-77aa2bae966c` |
| 520 | Rechte & Geld | Mythos oder Wahrheit: Ausbildung | [`lernvideos/14-mythos-ausbildung`](../lernvideos/14-mythos-ausbildung/) | 9 |  | `ab034596-4020-41fd-9439-f4967a9040f7` |
| 530 | Rechte & Geld | Mythos oder Wahrheit: Geld | [`lernvideos/12-mythos-geld`](../lernvideos/12-mythos-geld/) | 9 |  | `78ca2d1b-4314-4bea-bfc1-e46e780f7247` |
| 540 | Rechte & Geld | Urlaub richtig beantragen | [`lernvideos/20-amirs-urlaub`](../lernvideos/20-amirs-urlaub/) | 7 |  | `3c253e5f-f4ab-4f9b-8add-c76406fec031` |
| 550 | Rechte & Geld | Nebenjob in der Ausbildung | [`lernvideos/08-nebenjob`](../lernvideos/08-nebenjob/) | 9 |  | `c8d47970-bcba-435e-b80b-657617d7519b` |
| 560 | Rechte & Geld | Betriebsrat, JAV und Gewerkschaft | [`lernvideos/38-betriebsrat-jav`](../lernvideos/38-betriebsrat-jav/) | 10 | Lohn & Rechte im Blick | `1a59db5e-7281-4670-9e2b-0f72012aedbd` |
| 570 | Gut kommunizieren | Du oder Sie? | [`lernvideos/59-du-oder-sie`](../lernvideos/59-du-oder-sie/) | 11 |  | `c87b1f0a-90f0-4489-840f-ae3b8966806e` |
| 580 | Gut kommunizieren | Smalltalk in der Pause | [`lernvideos/60-smalltalk`](../lernvideos/60-smalltalk/) | 10 |  | `3cba65ea-88ef-430a-bc7f-6f0edc4a8f7c` |
| 590 | Gut kommunizieren | Telefonieren auf Deutsch | [`lernvideos/34-telefonieren`](../lernvideos/34-telefonieren/) | 10 |  | `2cd2ffa1-4a1e-41f9-a861-198dc02cec41` |
| 600 | Gut kommunizieren | Nachrichten richtig schreiben | [`lernvideos/35-kwames-nachrichten`](../lernvideos/35-kwames-nachrichten/) | 10 |  | `73111ee2-5d42-4a98-abb2-2bfde65943a3` |
| 610 | Gut kommunizieren | Was der Chef wirklich meint | [`lernvideos/30-was-der-chef-meint`](../lernvideos/30-was-der-chef-meint/) | 11 |  | `dd8f1f08-5e40-499d-b5e2-2ca439f5d354` |
| 620 | Gut kommunizieren | Direkte Kritik und Hierarchie | [`lernvideos/24-kritik-und-hierarchie`](../lernvideos/24-kritik-und-hierarchie/) | 8 |  | `de54e7ae-17e6-4f3a-ad66-01879835f4f3` |
| 630 | Gut kommunizieren | Kritik vom Chef | [`lernvideos/18-kritik-vom-chef`](../lernvideos/18-kritik-vom-chef/) | 9 |  | `36a24065-71ce-4e64-8526-694eebf0a05b` |
| 640 | Gut kommunizieren | Ein Kunde beschwert sich | [`lernvideos/39-kunde-beschwert-sich`](../lernvideos/39-kunde-beschwert-sich/) | 10 | Sicher im Gespräch | `0ad59b1d-a4b1-4a34-b542-e4aeea9221ae` |
| 650 | Wortschatz für deinen Beruf | Wortschatz Gastronomie | [`lernvideos/26-vokabeln-gastronomie`](../lernvideos/26-vokabeln-gastronomie/) | 10 |  | `219a2030-b5db-4cfd-a154-ce4e5e75023b` |
| 660 | Wortschatz für deinen Beruf | Wortschatz Bäckerei | [`lernvideos/27-vokabeln-baeckerei`](../lernvideos/27-vokabeln-baeckerei/) | 9 |  | `915861a5-b7d0-493b-b56d-04c480d42d4b` |
| 670 | Wortschatz für deinen Beruf | Wortschatz Pflege | [`lernvideos/28-vokabeln-pflege`](../lernvideos/28-vokabeln-pflege/) | 10 |  | `c2a97263-abf0-4f4f-9ca3-fb7bae666da3` |
| 680 | Wortschatz für deinen Beruf | Wortschatz Handwerk und Elektro | [`lernvideos/29-vokabeln-elektro`](../lernvideos/29-vokabeln-elektro/) | 12 |  | `607a34ff-8551-401c-b89c-915b4789c52f` |
| 690 | Wortschatz für deinen Beruf | Wortschatz Kfz-Werkstatt | [`lernvideos/40-vokabeln-kfz`](../lernvideos/40-vokabeln-kfz/) | 11 |  | `27edd68a-ae1c-4095-a006-105a84d04131` |
| 700 | Wortschatz für deinen Beruf | Wortschatz Einzelhandel | [`lernvideos/63-vokabeln-einzelhandel`](../lernvideos/63-vokabeln-einzelhandel/) | 12 |  | `015417ab-c21c-4a7a-90f3-dbddb4fcca24` |
| 710 | Wortschatz für deinen Beruf | Wortschatz Lager und Logistik | [`lernvideos/64-vokabeln-lager`](../lernvideos/64-vokabeln-lager/) | 12 |  | `9c3074cd-a2ed-46bc-9533-c737b1f07d03` |
| 720 | Wortschatz für deinen Beruf | Wortschatz Sanitär, Heizung, Klima | [`lernvideos/65-vokabeln-shk`](../lernvideos/65-vokabeln-shk/) | 12 |  | `43196aa7-a5b4-4443-aa59-1054385096af` |
| 724 | Wortschatz für deinen Beruf | Wortschatz Naturwerkstein | [`lernvideos/67-vokabeln-naturstein`](../lernvideos/67-vokabeln-naturstein/) | 12 |  | `85a5ae67-fdea-43da-8c53-9673f4f4d8d4` |
| 726 | Wortschatz für deinen Beruf | Wortschatz Straßenbau | [`lernvideos/68-vokabeln-strassenbau`](../lernvideos/68-vokabeln-strassenbau/) | 12 |  | `aeb037cf-df59-4083-8d75-835076823c62` |
| 730 | Wortschatz für deinen Beruf | Wortschatz Hotel | [`lernvideos/41-vokabeln-hotel`](../lernvideos/41-vokabeln-hotel/) | 11 | Fachwort-Ass | `3ebb9f0c-fb80-4463-b7dc-be4dfc1aab50` |
| 740 | Demokratie & Grundgesetz | Wie funktioniert die Demokratie? | [`lernvideos/43-demokratie`](../lernvideos/43-demokratie/) | 13 |  | `f2e4d1df-a095-4ec7-a511-e719820f0981` |
| 750 | Demokratie & Grundgesetz | Das Grundgesetz | [`lernvideos/44-grundgesetz`](../lernvideos/44-grundgesetz/) | 12 | Grundgesetz-Durchblick | `fc6f7f77-d818-4c78-a9cc-30f9da6719a5` |
| 760 | Prüfung & Zukunft | Zwischen- und Abschlussprüfung | [`lernvideos/09-pruefungen`](../lernvideos/09-pruefungen/) | 11 |  | `d7fdc6f5-16cc-4b1a-8c9b-591747e3f9fd` |
| 770 | Prüfung & Zukunft | Prüfungssprache verstehen | [`lernvideos/45-pruefungssprache`](../lernvideos/45-pruefungssprache/) | 13 |  | `a039f75c-8b60-4948-b150-d81ea681c62e` |
| 780 | Prüfung & Zukunft | Aufenthaltstitel verlängern | [`lernvideos/05-aufenthaltstitel`](../lernvideos/05-aufenthaltstitel/) | 10 |  | `ecb6a6e9-744a-4913-9fe2-bf5c2d9ca362` |
| 790 | Prüfung & Zukunft | Nach der Ausbildung | [`lernvideos/11-nach-der-ausbildung`](../lernvideos/11-nach-der-ausbildung/) | 11 | Prüfungsfit | `c7a8f6e9-1f46-44a6-8a76-5a618a7a7323` |
