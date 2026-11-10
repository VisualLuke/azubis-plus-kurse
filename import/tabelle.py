#!/usr/bin/env python3
"""Schrieb import/lektionen.md für den ersten Import (29.09.2026). Seit 03.10.2026 wird lektionen.md aus Supabase erzeugt (Reihenfolge des Teams + Lernvideos 46–65) – dieses Skript nicht mehr laufen lassen, es würde den Stand überschreiben."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
plan = json.load(open(os.path.join(ROOT, 'import/plan.json')))
ids = json.load(open(os.path.join(ROOT, 'import/ids.json')))
z = ['# Lektionen in der App', '',
     'Stand 29.09.2026. Importiert nach Supabase (`kurse`, Projekt Azubis Plus); Reihenfolge in „Lernen“ = `kurse.sort`,',
     'Abschnitt = Kategorie (`quiz_kategorien`). Erzeugt von `import/tabelle.py`. Nach dem Import werden die Lektionen',
     'im Kurs-Editor gepflegt – `fragen.json` im Ordner ist der Stand beim Import.', '',
     '| Pos. | Kategorie (Abschnitt) | Lektion | Ordner | Fragen | Untertitel | Abzeichen | Kurs-ID |',
     '| --- | --- | --- | --- | --- | --- | --- | --- |']
for l in plan['lektionen']:
    n = len(json.load(open(os.path.join(ROOT, l['ordner'], 'fragen.json')))['fragen'])
    abz = next(a['abzeichen'] for a in plan['abschnitte'] if a['name'] == l['abschnitt']) if l.get('abzeichen') else ''
    z.append(f"| {l['sort']} | {l['abschnitt']} | {l['titel']} | [`{l['ordner']}`](../{l['ordner']}/) | {n} | "
             f"{'ja' if l['vtt'] else 'nein'} | {abz} | `{ids[l['schluessel']]['kurs_id']}` |")
open(os.path.join(ROOT, 'import/lektionen.md'), 'w').write('\n'.join(z) + '\n')
print('ok import/lektionen.md')
