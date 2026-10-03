#!/usr/bin/env python3
"""SQL für neue Lektionen aus einem Plan (direkt per Supabase-MCP ausführen, ersetzt die alte Function-Aktion 'kurs').

  python3 import/sql-neu.py import/plan-66-78.json meta              Abschnitt (quiz_kategorien) + Abzeichen anlegen
  python3 import/sql-neu.py import/plan-66-78.json kurs <ordner> ...  Lektion anlegen/aktualisieren (+ Fähigkeiten)
  python3 import/sql-neu.py import/plan-66-78.json fragen <ordner> ... Quizfragen anlegen/abgleichen (ein DO-Block);
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

if art == 'fragen':   # kompakter Fragen-Abgleich für mehrere Lektionen in einem DO-Block
    alle = []
    for o in sys.argv[3:]:
        l = next(x for x in plan['lektionen'] if x['ordner'] == o)
        fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
        alle.append({'o': o, 'k': ids[l['schluessel']]['kurs_id'], 'q': [{'f': f['frage'].strip(), 'z': int(f['zeit_sekunden']),
                     'a': [x.strip() for x in f['antworten']], 'r': f['richtig']} for f in fr['fragen']]})
    j = json.dumps(alle, ensure_ascii=False); assert '$j$' not in j
    print(f"""do $do$ declare l jsonb; q jsonb; i int; qid uuid; a int; kat int;
begin
 for l in select * from jsonb_array_elements($j${j}$j$::jsonb) loop
  select kategorie_id into kat from kurse where id = (l->>'k')::uuid; i := 0;
  for q in select * from jsonb_array_elements(l->'q') loop
   i := i + 1; qid := null;
   select id into qid from quiz_questions where external_id = 'kurse-repo:' || (l->>'o') || ':' || i;
   if qid is null then
    insert into quiz_questions (kategorie_id, kurs_id, frage, aktiv, external_id, cefr_level, zeit_sekunden, sort)
    values (kat, (l->>'k')::uuid, q->>'f', true, 'kurse-repo:' || (l->>'o') || ':' || i, 'B1', (q->>'z')::int, i * 10) returning id into qid;
   else
    update quiz_questions set frage = q->>'f', zeit_sekunden = (q->>'z')::int, sort = i * 10, aktiv = true, kurs_id = (l->>'k')::uuid, kategorie_id = kat where id = qid;
   end if;
   for a in 0 .. jsonb_array_length(q->'a') - 1 loop
    update quiz_options set text = q->'a'->>a, ist_richtig = (a = (q->>'r')::int), aktiv = true where question_id = qid and sort = (a + 1) * 10;
    if not found then insert into quiz_options (question_id, text, ist_richtig, sort, aktiv) values (qid, q->'a'->>a, a = (q->>'r')::int, (a + 1) * 10, true); end if;
   end loop;
  end loop;
  update quiz_questions set aktiv = false where kurs_id = (l->>'k')::uuid and external_id like 'kurse-repo:' || (l->>'o') || ':%' and split_part(external_id, ':', 3)::int > i;
 end loop;
end $do$;""")
