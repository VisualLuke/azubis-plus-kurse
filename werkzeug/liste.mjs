// Motivliste: Name, Format (spot 160×160 | szene 320×200), Modul, Verwendung.
// Quelle je Motiv: ../motive/<name>.svg (mit @token-Kurzschreibweise), Ausgabe: ../src/<name>.js
export const MOTIVE = [
  // ankommen
  ['hero-ankommen', 'spot', 'ankommen', 'Hero der Übersicht: Koffer'],
  ['erledigt-feier', 'spot', 'ankommen', 'Erfolg: Aufgabe erledigt (Klemmbrett + Haken)'],
  ['leer-ankommen', 'spot', 'ankommen', 'Leerer Zustand: keine offenen Aufgaben (Notizblock + Tasse)'],
  // hilfe
  ['hero-ki-helper', 'spot', 'hilfe', 'Hero „Frag den KI-Helper“ (zwei Sprechblasen, KI-Zeichen)'],
  ['hero-faq', 'spot', 'hilfe', 'Hero Häufige Fragen (aufgeschlagenes Buch + Fragezeichen)'],
  ['notfall-hero', 'spot', 'hilfe', 'Hero Notfall & Beratung (Erste-Hilfe-Tasche)'],
  ['leer-suche', 'spot', 'hilfe', 'Leerer Zustand: keine Treffer (Blatt + Lupe)'],
  // events
  ['szene-stammtisch', 'szene', 'events', 'Eventbild Stammtisch (zwei Kaffeetassen)'],
  ['szene-workshop', 'szene', 'events', 'Eventbild Workshop (Flipchart)'],
  ['szene-stadtfuehrung', 'szene', 'events', 'Eventbild Stadtführung (Stadtplan + Kamera)'],
  ['szene-grillabend', 'szene', 'events', 'Eventbild Grillabend (Kugelgrill + Limo)'],
  ['szene-kochabend', 'szene', 'events', 'Eventbild Kochabend (Topf + Schneidebrett)'],
  ['szene-bewerbung', 'szene', 'events', 'Eventbild Bewerbungstraining (Lebenslauf + Stift)'],
  ['szene-pruefung', 'szene', 'events', 'Eventbild Prüfungsvorbereitung (Bücher + Wecker)'],
  ['szene-herbstfest', 'szene', 'events', 'Eventbild Herbstfest (Kürbis + Windlicht)'],
  ['szene-sprechstunde', 'szene', 'events', 'Eventbild Behörden-Sprechstunde (Formular + Stempel)'],
  ['szene-online', 'szene', 'events', 'Eventbild Online-Event (Laptop + Kopfhörer)'],
  ['leer-events', 'spot', 'events', 'Leerer Zustand: keine Events (Tischkalender)'],
  ['ticket', 'spot', 'events', 'Angemeldet / Meine Events (Ticket)'],
  // community
  ['hero-community', 'spot', 'community', 'Hero Community (Pinnwand mit Zetteln)'],
  ['hero-naehe', 'spot', 'community', 'Hero „In deiner Nähe“ (Karte mit Stecknadeln)'],
  ['szene-wohnung', 'szene', 'community', 'Beitragsbild Wohnung (Umzugskarton + Pflanze)'],
  ['szene-berufsschule', 'szene', 'community', 'Beitragsbild Berufsschule (Rucksack + Stiftebecher)'],
  ['szene-heimweh', 'szene', 'community', 'Beitragsbild Heimweh (Brief + Tasse)'],
  ['szene-zug', 'szene', 'community', 'Beitragsbild Zugfahrt (Regionalzug)'],
  ['szene-steuer', 'szene', 'community', 'Beitragsbild Steuer (Taschenrechner + Beleg + Münzen)'],
  ['leer-feed', 'spot', 'community', 'Leerer Zustand: noch keine Beiträge (Sprechblase + Stift)'],
  ['beitritt', 'spot', 'community', 'Community beitreten (Mitgliedskarte)'],
  // dokumente
  ['hero-safe', 'spot', 'dokumente', 'Hero Dokumenten-Safe (Mappe + Schild)'],
  ['sperre', 'spot', 'dokumente', 'Gesperrt (Fingerabdruck + Schloss)'],
  ['leer-ordner', 'spot', 'dokumente', 'Leerer Zustand: Ordner ohne Dateien'],
  ['upload-feier', 'spot', 'dokumente', 'Erfolg: Dokument hochgeladen'],
];

// Alias → [Token-UID, Fallback]. Kurzschreibweise in den Quellen: @b500, @surface, @success-bg …
export const TOKENS = {
  'brand-50': ['501e3d36-91d2-459b-b47a-542fe7cba2c2', '#F4F1FE'],
  'brand-100': ['5868ba43-035c-411f-bf20-248b5161e8eb', '#E7E0FD'],
  'brand-200': ['b996f314-8917-44d2-ba16-b7f2110dea05', '#C9BAFA'],
  'brand-300': ['d6a19fd8-9905-4600-a5b7-36521db0d421', '#A48BF4'],
  'brand-400': ['f0297ed8-06f5-4ffd-83fc-e6cd5dbaa2cd', '#8163EE'],
  'brand-500': ['75c22b58-87ff-4db8-8246-cd9ce71db4a2', '#5A3FE6'],
  'brand-600': ['f8b5f987-dc18-4291-b11a-0bdc6e301853', '#4A30CC'],
  'brand-700': ['b8e21e3d-ff71-4469-8219-ef4d3bca96a4', '#3A2599'],
  'ink': ['8f8de623-2a6c-4723-afb3-b3122520bb3c', '#161325'],
  'surface': ['5dc4a674-d9a9-4078-a24a-e441d268a60f', '#FFFFFF'],
  'n200': ['a2273fd3-5899-46bc-985c-b3c33e3c0780', '#E6E3EE'],
  'n300': ['ec8a344a-7779-4ed4-874e-f517f59350fa', '#C9C4D6'],
  'success': ['3d567a11-18f7-4e8e-b203-4592f46da5a2', '#1FA971'],
  'success-bg': ['ef643d4c-a340-4c89-b690-612ae1fe6472', '#E2F6ED'],
  'warning': ['c19df991-9894-4419-88fb-b2b58e36f9f7', '#E0992B'],
  'warning-bg': ['c7c18918-fab3-46fc-af57-2ec14b380cb2', '#FCF1DD'],
  'info': ['3f081c40-af4e-4425-a97f-c7528bc5ad4d', '#3B82F6'],
  'info-bg': ['f939ccd9-6c46-4062-bfe6-c36c169ccafb', '#E6EFFE'],
  'error': ['f694e88e-bdd3-4eb1-bf33-26a20f247ed4', '#E2556A'],
  'error-bg': ['fb93d1a9-9399-4624-95d4-83b61d28209b', '#FCE7EA'],
};
// Kurzformen für die Quellen
export const KURZ = { b50: 'brand-50', b100: 'brand-100', b200: 'brand-200', b300: 'brand-300', b400: 'brand-400', b500: 'brand-500', b600: 'brand-600', b700: 'brand-700', sf: 'surface' };
