#!/usr/bin/env python3
"""SQL für die Aktualisierung bestehender Lektionen (direkt per Supabase-MCP ausführen).

  python3 import/sql-aktualisieren.py text   <ordner> ...   content_text aus film.vtt (+ version+1)
  python3 import/sql-aktualisieren.py fragen <ordner> ...   Quizfragen aus fragen.json abgleichen (DO-Block)

Fragen werden über external_id `kurse-repo:<ordner>:<n>` abgeglichen: vorhandene aktualisiert (Text, Zeit, Optionen
nach sort (j+1)*10), neue angelegt, überzählige auf aktiv=false gesetzt – nichts wird gelöscht (Versuche verweisen
auf Fragen und Optionen). Kurs-ID aus import/ids.json.
"""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ids = json.load(open(os.path.join(ROOT, 'import/ids.json')))
def kurs_id(o):
    return next(v['kurs_id'] for k, v in ids.items() if not k.startswith('_') and v.get('ordner') == o)
def sprechertext(o):
    bl = open(os.path.join(ROOT, o, 'film.vtt'), encoding='utf8').read().split('\n\n')[1:]
    t = ' '.join(' '.join(b.strip().split('\n')[2:]) for b in bl if '-->' in b)
    return re.sub(r'\s+', ' ', t).strip()
art, ordner = sys.argv[1], sys.argv[2:]
for o in ordner:
    if art == 'text':
        t = sprechertext(o); assert '$t$' not in t
        print(f"update kurse set content_text=$t${t}$t$, version=version+1 where id='{kurs_id(o)}';")
    elif art == 'fragen':
        fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
        daten = [{'f': f['frage'].strip(), 'z': int(f['zeit_sekunden']), 'a': [x.strip() for x in f['antworten']], 'r': f['richtig']} for f in fr['fragen']]
        j = json.dumps(daten, ensure_ascii=False); assert '$j$' not in j
        print(f"""do $do$ declare k uuid := '{kurs_id(o)}'; kat int; d jsonb := $j${j}$j$; q jsonb; i int := 0; qid uuid; a int;
begin
  select kategorie_id into kat from kurse where id = k;
  for q in select * from jsonb_array_elements(d) loop
    i := i + 1;
    select id into qid from quiz_questions where external_id = 'kurse-repo:{o}:' || i;
    if qid is null then
      insert into quiz_questions (kategorie_id, kurs_id, frage, aktiv, external_id, cefr_level, zeit_sekunden, sort)
      values (kat, k, q->>'f', true, 'kurse-repo:{o}:' || i, 'B1', (q->>'z')::int, i * 10) returning id into qid;
    else
      update quiz_questions set frage = q->>'f', zeit_sekunden = (q->>'z')::int, sort = i * 10, aktiv = true, kurs_id = k where id = qid;
    end if;
    for a in 0 .. jsonb_array_length(q->'a') - 1 loop
      update quiz_options set text = q->'a'->>a, ist_richtig = (a = (q->>'r')::int), aktiv = true
        where question_id = qid and sort = (a + 1) * 10;
      if not found then
        insert into quiz_options (question_id, text, ist_richtig, sort, aktiv) values (qid, q->'a'->>a, a = (q->>'r')::int, (a + 1) * 10, true);
      end if;
    end loop;
    update quiz_options set aktiv = false where question_id = qid and sort > jsonb_array_length(q->'a') * 10;
  end loop;
  update quiz_questions set aktiv = false where kurs_id = k and external_id like 'kurse-repo:{o}:%'
    and split_part(external_id, ':', 3)::int > i;
end $do$;""")
