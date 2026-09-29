#!/usr/bin/env python3
"""Baut die Import-Daten der Lektionen für Supabase (JSON, eine Datei je Lektion + Kategorien/Abzeichen).

Quellen: import/plan.json (Werte, Reihenfolge), import/ids.json (Kurs-IDs und Storage-Pfade aus dem Upload),
<ordner>/fragen.json (Fragen), <ordner>/film.vtt (Sprechertext → content_text),
import/abzeichen/liste.json (Abzeichen).

Geschrieben wurde über die temporäre Edge Function kurs-import-upload (Aktionen 'meta' und 'kurs'): je Lektion
eine Transaktion, idempotent – Kurs über die feste ID aus ids.json, Fragen über external_id
'kurse-repo:<ordner>:<n>', Optionen über (question_id, sort), Kategorien und Abzeichen über den Namen.
Wie save-course: sort = (i+1)*10 für Fragen und Optionen. Die Function ist nach dem Import gelöscht.

Aufruf: python3 import/daten.py <ausgabe-ordner>  → meta.json und je Lektion NN.json
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
aus = sys.argv[1]
os.makedirs(aus, exist_ok=True)
plan = json.load(open(os.path.join(ROOT, 'import/plan.json')))
ids = json.load(open(os.path.join(ROOT, 'import/ids.json')))
liste = json.load(open(os.path.join(ROOT, 'import/abzeichen/liste.json')))


def sprechertext(o):
    """Text aus film.vtt (schon in Bild-Schreibweise), Untertitel zu Sätzen zusammengefügt."""
    f = os.path.join(ROOT, o, 'film.vtt')
    if not os.path.exists(f):
        return None
    bloecke = open(f, encoding='utf8').read().split('\n\n')[1:]
    teile = [' '.join(b.strip().split('\n')[2:]) for b in bloecke if '-->' in b]
    return re.sub(r'\s+', ' ', ' '.join(t for t in teile if t)).strip() or None


# Kategorien und Abzeichen
BESCHREIBUNG = {
    'Angekommen': 'Du kennst die ersten Schritte: Anmeldung, Konto, Krankenkasse und Papiere.',
    'Alltagsprofi': 'Du kommst im Alltag gut zurecht: Wohnung, Post, Müll und Hausordnung.',
    'Gut gestartet': 'Du weißt, wie es im Betrieb und in der Berufsschule läuft.',
    'Gut informiert': 'Du kennst deine Rechte und weißt, wie das mit dem Geld funktioniert.',
    'Guter Draht': 'Du sprichst und schreibst im Beruf freundlich und klar.',
    'Fachwort-Profi': 'Du kennst wichtige Fachwörter aus deinem Beruf.',
    'Prüfungsfit': 'Du bist gut vorbereitet: auf die Prüfung und auf die Zeit danach.',
    'Angekommen im Land': 'Du kennst Feste, Vereine und Regeln für das Leben in Deutschland.',
}
abz = {a['abschnitt']: {**a, 'beschreibung': BESCHREIBUNG[a['name']]} for a in liste}
meta = {'abschnitte': [{'name': a['name']} for a in plan['abschnitte']],
        'abzeichen': [{'name': abz[a['name']]['name'], 'beschreibung': abz[a['name']]['beschreibung'],
                       'icon_path': ids['_abzeichen'][abz[a['name']]['name']]} for a in plan['abschnitte']]}
json.dump(meta, open(os.path.join(aus, 'meta.json'), 'w'), ensure_ascii=False, indent=1)

for n, l in enumerate(plan['lektionen'], 1):
    o = l['ordner']
    e = ids[l['schluessel']]
    fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
    assert fr['ordner'] == o and fr['titel'] == l['titel'], o
    assert e.get('video') and e.get('titelbild'), f'{o}: Upload fehlt'
    kurs = {'id': e['kurs_id'], 'schluessel': 'kurse-repo:' + o, 'titel': l['titel'], 'beschreibung': fr['beschreibung'],
            'content_url': e['video'], 'content_text': sprechertext(o), 'titelbild_path': e['titelbild'],
            'abschnitt': l['abschnitt'], 'abzeichen': abz[l['abschnitt']]['name'] if l.get('abzeichen') else None,
            'sort': l['sort'], 'punkte': l['punkte'], 'min_status': l['min_status'], 'retry_tage': l['retry_tage'],
            'max_versuche': l['max_versuche'], 'ki_generiert': l['ki_generiert'], 'offen_fuer_helper': l['offen_fuer_helper']}
    fragen = [{'frage': f['frage'].strip(), 'zeit_sekunden': int(f['zeit_sekunden']),
               'antworten': [a.strip() for a in f['antworten']], 'richtig': f['richtig']} for f in fr['fragen']]
    json.dump({'kurs': kurs, 'achsen': l['achsen'], 'fragen': fragen},
              open(os.path.join(aus, f'{n:02d}.json'), 'w'), ensure_ascii=False, indent=1)
print(f"ok: {len(plan['lektionen'])} Lektionen → {aus}")
