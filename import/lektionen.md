# Lektionen in der App

Stand 29.09.2026. Importiert nach Supabase (`kurse`, Projekt Azubis Plus); Reihenfolge in „Lernen“ = `kurse.sort`,
Abschnitt = Kategorie (`quiz_kategorien`). Erzeugt von `import/tabelle.py`. Nach dem Import werden die Lektionen
im Kurs-Editor gepflegt – `fragen.json` im Ordner ist der Stand beim Import.

| Pos. | Kategorie (Abschnitt) | Lektion | Ordner | Fragen | Untertitel | Abzeichen | Kurs-ID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | Ankommen & Papiere | Wohnsitz anmelden | [`kurse/02-wohnsitz-anmelden`](../kurse/02-wohnsitz-anmelden/) | 9 | ja |  | `00bb0c3a-7538-4945-bc63-d1281645f8fb` |
| 20 | Ankommen & Papiere | Ein Bankkonto eröffnen | [`kurse/03-bankkonto`](../kurse/03-bankkonto/) | 8 | ja |  | `a29e4007-8904-4389-a021-aa8301be9138` |
| 30 | Ankommen & Papiere | Krankenkasse und Versichertenkarte | [`lernvideos/01-krankenkasse`](../lernvideos/01-krankenkasse/) | 11 | ja |  | `4d1181fc-394b-4e8e-9c71-73b0211e2cb9` |
| 40 | Ankommen & Papiere | Zum Arzt gehen | [`lernvideos/02-zum-arzt`](../lernvideos/02-zum-arzt/) | 10 | ja |  | `028ea7b0-7897-4783-9f45-66a11555d50f` |
| 50 | Ankommen & Papiere | Aufenthaltstitel verlängern | [`lernvideos/05-aufenthaltstitel`](../lernvideos/05-aufenthaltstitel/) | 10 | ja |  | `ecb6a6e9-744a-4913-9fe2-bf5c2d9ca362` |
| 60 | Ankommen & Papiere | Der Rundfunkbeitrag | [`lernvideos/04-rundfunkbeitrag`](../lernvideos/04-rundfunkbeitrag/) | 9 | ja | Angekommen | `c448a1b6-7eec-4f84-88d1-c82a95500aab` |
| 70 | Wohnen & Alltag | Den Mietvertrag verstehen | [`lernvideos/07-mietvertrag`](../lernvideos/07-mietvertrag/) | 12 | ja |  | `3021e342-b1b9-442c-a88d-c413e6a31714` |
| 80 | Wohnen & Alltag | Mülltrennung | [`lernvideos/03-muelltrennung`](../lernvideos/03-muelltrennung/) | 11 | ja |  | `70de62e9-1298-4838-8b89-20d1a9ad43fe` |
| 90 | Wohnen & Alltag | Sonntag und Hausordnung | [`lernvideos/25-sonntag-hausordnung`](../lernvideos/25-sonntag-hausordnung/) | 9 | ja |  | `460c7321-b14c-496c-883a-010b6a14812a` |
| 100 | Wohnen & Alltag | Mythos oder Wahrheit: Wohnen | [`lernvideos/15-mythos-wohnen`](../lernvideos/15-mythos-wohnen/) | 11 | ja |  | `34bf029c-7898-46a8-b8e9-acf85987889b` |
| 110 | Wohnen & Alltag | Wichtige Post öffnen | [`lernvideos/21-mais-post`](../lernvideos/21-mais-post/) | 9 | ja |  | `f959db6c-a09e-4b4e-8c15-edcd4e36f1f2` |
| 120 | Wohnen & Alltag | Ein Brief mit Frist | [`lernvideos/17-brief-mit-frist`](../lernvideos/17-brief-mit-frist/) | 10 | ja |  | `8d3365e8-c782-4fd2-9318-46fc49523a69` |
| 130 | Wohnen & Alltag | „Ihr Konto wurde gesperrt“ | [`lernvideos/19-konto-gesperrt`](../lernvideos/19-konto-gesperrt/) | 9 | ja | Alltagsprofi | `61163db4-1c15-4337-9ac5-dc79ce243e83` |
| 140 | Start im Betrieb | Wer ist wer im Betrieb? | [`lernvideos/32-wer-ist-wer`](../lernvideos/32-wer-ist-wer/) | 9 | ja |  | `d3cbb048-d017-4799-a0c3-eb91eabfe1c7` |
| 150 | Start im Betrieb | Wörter für jede Ausbildung | [`lernvideos/31-vokabeln-ausbildung`](../lernvideos/31-vokabeln-ausbildung/) | 11 | ja |  | `4c195db5-85a8-4db8-a089-b396382d6dc1` |
| 160 | Start im Betrieb | Der erste Arbeitstag | [`lernvideos/22-kwames-erster-tag`](../lernvideos/22-kwames-erster-tag/) | 9 | ja |  | `06437a1b-39c0-4fbb-aa14-0817fa415fcd` |
| 170 | Start im Betrieb | Pünktlichkeit | [`lernvideos/23-puenktlichkeit`](../lernvideos/23-puenktlichkeit/) | 7 | ja |  | `3006e0ae-ecf0-43ca-b3aa-9151786b7864` |
| 180 | Start im Betrieb | Verschlafen am Berufsschultag | [`lernvideos/16-verschlafen`](../lernvideos/16-verschlafen/) | 9 | ja |  | `7b572634-8569-4697-b06f-79dab89c5f58` |
| 190 | Start im Betrieb | Die erste Woche in der Berufsschule | [`lernvideos/33-erste-woche-berufsschule`](../lernvideos/33-erste-woche-berufsschule/) | 9 | ja |  | `6fc21455-ff98-44d9-a731-53357c3504e2` |
| 200 | Start im Betrieb | Arbeitsunfall und Wegeunfall | [`lernvideos/06-arbeitsunfall`](../lernvideos/06-arbeitsunfall/) | 9 | ja | Gut gestartet | `affd4ddf-c856-4237-b560-2c46cc35a915` |
| 210 | Rechte & Geld | Brutto, Netto und Gehaltsabrechnung | [`kurse/01-brutto-netto`](../kurse/01-brutto-netto/) | 12 | ja |  | `8e717cac-f80a-40f2-b405-ec387041f2b7` |
| 220 | Rechte & Geld | Rechte und Pflichten in der Ausbildung | [`kurse/04-rechte-pflichten`](../kurse/04-rechte-pflichten/) | 14 | nein |  | `2980db4a-4b0b-47db-8c5d-77aa2bae966c` |
| 230 | Rechte & Geld | Mythos oder Wahrheit: Geld | [`lernvideos/12-mythos-geld`](../lernvideos/12-mythos-geld/) | 9 | ja |  | `78ca2d1b-4314-4bea-bfc1-e46e780f7247` |
| 240 | Rechte & Geld | Mythos oder Wahrheit: Krank sein | [`lernvideos/13-mythos-krank`](../lernvideos/13-mythos-krank/) | 9 | ja |  | `762f272d-ab93-4cfd-b7d6-d46cd3cbeacd` |
| 250 | Rechte & Geld | Mythos oder Wahrheit: Ausbildung | [`lernvideos/14-mythos-ausbildung`](../lernvideos/14-mythos-ausbildung/) | 9 | ja |  | `ab034596-4020-41fd-9439-f4967a9040f7` |
| 260 | Rechte & Geld | Urlaub richtig beantragen | [`lernvideos/20-amirs-urlaub`](../lernvideos/20-amirs-urlaub/) | 7 | ja |  | `3c253e5f-f4ab-4f9b-8add-c76406fec031` |
| 270 | Rechte & Geld | Nebenjob in der Ausbildung | [`lernvideos/08-nebenjob`](../lernvideos/08-nebenjob/) | 9 | ja |  | `c8d47970-bcba-435e-b80b-657617d7519b` |
| 280 | Rechte & Geld | Betriebsrat, JAV und Gewerkschaft | [`lernvideos/38-betriebsrat-jav`](../lernvideos/38-betriebsrat-jav/) | 10 | ja | Gut informiert | `1a59db5e-7281-4670-9e2b-0f72012aedbd` |
| 290 | Gut kommunizieren | Telefonieren auf Deutsch | [`lernvideos/34-telefonieren`](../lernvideos/34-telefonieren/) | 10 | ja |  | `2cd2ffa1-4a1e-41f9-a861-198dc02cec41` |
| 300 | Gut kommunizieren | Nachrichten richtig schreiben | [`lernvideos/35-kwames-nachrichten`](../lernvideos/35-kwames-nachrichten/) | 10 | ja |  | `73111ee2-5d42-4a98-abb2-2bfde65943a3` |
| 310 | Gut kommunizieren | Kritik vom Chef | [`lernvideos/18-kritik-vom-chef`](../lernvideos/18-kritik-vom-chef/) | 9 | ja |  | `36a24065-71ce-4e64-8526-694eebf0a05b` |
| 320 | Gut kommunizieren | Direkte Kritik und Hierarchie | [`lernvideos/24-kritik-und-hierarchie`](../lernvideos/24-kritik-und-hierarchie/) | 8 | ja |  | `de54e7ae-17e6-4f3a-ad66-01879835f4f3` |
| 330 | Gut kommunizieren | Was der Chef wirklich meint | [`lernvideos/30-was-der-chef-meint`](../lernvideos/30-was-der-chef-meint/) | 11 | ja |  | `dd8f1f08-5e40-499d-b5e2-2ca439f5d354` |
| 340 | Gut kommunizieren | Ein Kunde beschwert sich | [`lernvideos/39-kunde-beschwert-sich`](../lernvideos/39-kunde-beschwert-sich/) | 10 | ja | Guter Draht | `0ad59b1d-a4b1-4a34-b542-e4aeea9221ae` |
| 350 | Wortschatz für deinen Beruf | Wortschatz Gastronomie | [`lernvideos/26-vokabeln-gastronomie`](../lernvideos/26-vokabeln-gastronomie/) | 10 | ja |  | `219a2030-b5db-4cfd-a154-ce4e5e75023b` |
| 360 | Wortschatz für deinen Beruf | Wortschatz Bäckerei | [`lernvideos/27-vokabeln-baeckerei`](../lernvideos/27-vokabeln-baeckerei/) | 9 | ja |  | `915861a5-b7d0-493b-b56d-04c480d42d4b` |
| 370 | Wortschatz für deinen Beruf | Wortschatz Pflege | [`lernvideos/28-vokabeln-pflege`](../lernvideos/28-vokabeln-pflege/) | 10 | ja |  | `c2a97263-abf0-4f4f-9ca3-fb7bae666da3` |
| 380 | Wortschatz für deinen Beruf | Wortschatz Handwerk und Elektro | [`lernvideos/29-vokabeln-elektro`](../lernvideos/29-vokabeln-elektro/) | 12 | ja |  | `607a34ff-8551-401c-b89c-915b4789c52f` |
| 390 | Wortschatz für deinen Beruf | Wortschatz Kfz-Werkstatt | [`lernvideos/40-vokabeln-kfz`](../lernvideos/40-vokabeln-kfz/) | 11 | ja |  | `27edd68a-ae1c-4095-a006-105a84d04131` |
| 400 | Wortschatz für deinen Beruf | Wortschatz Hotel | [`lernvideos/41-vokabeln-hotel`](../lernvideos/41-vokabeln-hotel/) | 11 | ja | Fachwort-Profi | `3ebb9f0c-fb80-4463-b7dc-be4dfc1aab50` |
| 410 | Prüfung & Zukunft | Zwischen- und Abschlussprüfung | [`lernvideos/09-pruefungen`](../lernvideos/09-pruefungen/) | 11 | ja |  | `d7fdc6f5-16cc-4b1a-8c9b-591747e3f9fd` |
| 420 | Prüfung & Zukunft | Prüfungssprache verstehen | [`lernvideos/45-pruefungssprache`](../lernvideos/45-pruefungssprache/) | 13 | ja |  | `a039f75c-8b60-4948-b150-d81ea681c62e` |
| 430 | Prüfung & Zukunft | Nach der Ausbildung | [`lernvideos/11-nach-der-ausbildung`](../lernvideos/11-nach-der-ausbildung/) | 11 | ja | Prüfungsfit | `c7a8f6e9-1f46-44a6-8a76-5a618a7a7323` |
| 440 | Leben in Deutschland | Heimweh und die ersten Monate | [`lernvideos/10-heimweh`](../lernvideos/10-heimweh/) | 11 | ja |  | `4976d225-5949-4750-a502-cfe65c3e6b8d` |
| 450 | Leben in Deutschland | Freundschaften in Deutschland | [`lernvideos/36-freundschaften`](../lernvideos/36-freundschaften/) | 10 | ja |  | `2dec9cf9-6e6c-420d-9109-aa1f84a5228f` |
| 460 | Leben in Deutschland | Feiertage und Traditionen | [`lernvideos/37-mythos-feiertage`](../lernvideos/37-mythos-feiertage/) | 11 | ja |  | `0498c40a-5c17-4487-bd82-55b2138e10fd` |
| 470 | Leben in Deutschland | Was ist ein Verein? | [`lernvideos/42-verein`](../lernvideos/42-verein/) | 11 | ja |  | `1ccdce5e-8e9c-4300-b18c-618e01685f00` |
| 480 | Leben in Deutschland | Wie funktioniert die Demokratie? | [`lernvideos/43-demokratie`](../lernvideos/43-demokratie/) | 13 | ja |  | `f2e4d1df-a095-4ec7-a511-e719820f0981` |
| 490 | Leben in Deutschland | Das Grundgesetz | [`lernvideos/44-grundgesetz`](../lernvideos/44-grundgesetz/) | 12 | ja | Angekommen im Land | `fc6f7f77-d818-4c78-a9cc-30f9da6719a5` |
