#!/usr/bin/env python3
"""Import-Daten für die Lernvideos 46–65 (Nachtrag 03.10.2026), Gegenstück zu daten.py.

Quelle: import/plan-46-65.json (Lektionen, Abschnitt, Reihenfolge), import/ids.json (Kurs-IDs und Storage-Pfade),
<ordner>/fragen.json, <ordner>/film.vtt. Schreibt meta.json (nur der neue Abschnitt „Unterwegs & sicher“ und sein
Abzeichen – die vom Team umbenannten Abzeichen und Kategorien bleiben unberührt) und je Lektion NN.json für die
Aktion 'kurs' der temporären Function kurs-import-upload (eine Transaktion je Lektion, idempotent).

Aufruf: python3 import/daten-46-65.py <ausgabe-ordner>
"""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
aus = sys.argv[1]; os.makedirs(aus, exist_ok=True)
plan = json.load(open(os.path.join(ROOT, 'import/plan-46-65.json')))
ids = json.load(open(os.path.join(ROOT, 'import/ids.json')))

def sprechertext(o):
    f = os.path.join(ROOT, o, 'film.vtt')
    bl = open(f, encoding='utf8').read().split('\n\n')[1:]
    t = ' '.join(' '.join(b.strip().split('\n')[2:]) for b in bl if '-->' in b)
    return re.sub(r'\s+', ' ', t).strip() or None

a = plan['neue_abschnitte'][0]
meta = {'abschnitte': [{'name': a['name']}],
        'abzeichen': [{'name': a['abzeichen'], 'beschreibung': a['abzeichen_beschreibung'],
                       'icon_path': ids['_abzeichen'][a['abzeichen']]}]}
json.dump(meta, open(os.path.join(aus, 'meta.json'), 'w'), ensure_ascii=False, indent=1)
for n, l in enumerate(plan['lektionen'], 1):
    o, e = l['ordner'], ids.get(l['schluessel'], {})
    fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
    assert fr['ordner'] == o and fr['titel'] == l['titel'], o
    if not (e.get('video') and e.get('vtt') and e.get('titelbild')):
        print(f'– {o}: Upload fehlt noch, übersprungen'); continue
    kurs = {'id': e['kurs_id'], 'schluessel': l['schluessel'], 'titel': l['titel'], 'beschreibung': fr['beschreibung'],
            'content_url': e['video'], 'content_text': sprechertext(o), 'titelbild_path': e['titelbild'],
            'abschnitt': l['abschnitt'], 'abzeichen': l['abzeichen'], 'sort': l['sort'], 'punkte': l['punkte'],
            'min_status': l['min_status'], 'retry_tage': l['retry_tage'], 'max_versuche': l['max_versuche'],
            'ki_generiert': l['ki_generiert'], 'offen_fuer_helper': l['offen_fuer_helper']}
    fragen = [{'frage': f['frage'].strip(), 'zeit_sekunden': int(f['zeit_sekunden']),
               'antworten': [x.strip() for x in f['antworten']], 'richtig': f['richtig']} for f in fr['fragen']]
    json.dump({'kurs': kurs, 'achsen': l['achsen'], 'fragen': fragen},
              open(os.path.join(aus, f'{n:02d}.json'), 'w'), ensure_ascii=False, indent=1)
print(f"ok: {len(plan['lektionen'])} Lektionen → {aus}")
