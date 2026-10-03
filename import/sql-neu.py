#!/usr/bin/env python3
"""SQL für neue Lektionen aus einem Plan (direkt per Supabase-MCP ausführen, ersetzt die alte Function-Aktion 'kurs').

  python3 import/sql-neu.py import/plan-66-78.json meta              Abschnitt (quiz_kategorien) + Abzeichen anlegen
  python3 import/sql-neu.py import/plan-66-78.json kurs <ordner> ...  Lektion anlegen/aktualisieren (+ Fähigkeiten);
                                                                     danach sql-aktualisieren.py fragen <ordner> ausführen

Voraussetzung: Video, Untertitel und Titelbild sind hochgeladen (import/ids.json hat video, vtt, titelbild).
"""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
plan = json.load(open(os.path.join(ROOT, sys.argv[1]))); art = sys.argv[2]
ids = json.load(open(os.path.join(ROOT, 'import/ids.json')))
q = lambda s: "'" + str(s).replace("'", "''") + "'"
def sprechertext(o):
    bl = open(os.path.join(ROOT, o, 'film.vtt'), encoding='utf8').read().split('\n\n')[1:]
    t = ' '.join(' '.join(b.strip().split('\n')[2:]) for b in bl if '-->' in b)
    return re.sub(r'\s+', ' ', t).strip()
if art == 'meta':
    for a in plan['neue_abschnitte']:
        print(f"insert into quiz_kategorien (name, aktiv) select {q(a['name'])}, true where not exists (select 1 from quiz_kategorien where name = {q(a['name'])});")
        print(f"insert into badges (name, beschreibung, icon_path, nur_team, aktiv) select {q(a['abzeichen'])}, {q(a['abzeichen_beschreibung'])}, {q(ids['_abzeichen'][a['abzeichen']])}, false, true where not exists (select 1 from badges where name = {q(a['abzeichen'])});")
elif art == 'kurs':
    for o in sys.argv[3:]:
        l = next(x for x in plan['lektionen'] if x['ordner'] == o); e = ids[l['schluessel']]
        fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
        assert e.get('video') and e.get('vtt') and e.get('titelbild'), o
        t = sprechertext(o); assert '$t$' not in t
        badge = f"(select id from badges where name = {q(l['abzeichen'])})" if l['abzeichen'] else 'null'
        kat = f"(select id from quiz_kategorien where name = {q(l['abschnitt'])})"
        print(f"""insert into kurse (id, titel, beschreibung, intro_typ, content_url, content_text, punkte, badge_id, min_status, retry_tage, aktiv, sort, kategorie_id, titelbild_path, version, max_versuche, bestehensgrenze_pct, offen_fuer_helper, ki_generiert)
values ({q(e['kurs_id'])}, {q(l['titel'])}, {q(fr['beschreibung'])}, 'video', {q(e['video'])}, $t${t}$t$, {l['punkte']}, {badge}, {q(l['min_status'])}, {l['retry_tage']}, true, {l['sort']}, {kat}, {q(e['titelbild'])}, 1, {l['max_versuche']}, 70, {str(l['offen_fuer_helper']).lower()}, {str(l['ki_generiert']).lower()})
on conflict (id) do update set titel = excluded.titel, beschreibung = excluded.beschreibung, content_url = excluded.content_url, content_text = excluded.content_text,
  badge_id = excluded.badge_id, sort = excluded.sort, kategorie_id = excluded.kategorie_id, titelbild_path = excluded.titelbild_path, version = kurse.version + 1;""")
        for a in l['achsen']:
            print(f"insert into kurs_faehigkeiten (kurs_id, achse) select {q(e['kurs_id'])}, {q(a)} where not exists (select 1 from kurs_faehigkeiten where kurs_id = {q(e['kurs_id'])} and achse = {q(a)});")
