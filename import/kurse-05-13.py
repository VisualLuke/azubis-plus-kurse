#!/usr/bin/env python3
"""SQL für die Lektionen der Kurse 5–13 (10.11.2026): kurse, quiz_questions, quiz_options.

Quellen: import/ids-05-13.json (Kurs-IDs und Storage-Pfade aus dem Upload), <ordner>/fragen.json, <ordner>/film.vtt
(Sprechertext → content_text). Idempotent: Kurs über die feste ID, Fragen über external_id 'kurse-repo:<ordner>:<n>'.
Die neuen Lektionen kommen zusätzlich zu den bestehenden (Entscheidung 10.11.2026), direkt hinter das passende Thema.
Aufruf: python3 import/kurse-05-13.py > /tmp/kurse-05-13.sql
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ids = json.load(open(os.path.join(ROOT, 'import/ids-05-13.json')))
# Ordner → (Abschnitt = quiz_kategorien.id, Position kurse.sort)
PLATZ = {
    '05-sim-karte': (27, 65),            # nach „Handy und SIM-Karte“ (60)
    '06-gesundheitskarte': (27, 55),     # nach „Krankenkasse und Versichertenkarte“ (50)
    '07-waesche-waschen': (28, 405),     # Wohnen & Alltag
    '08-muell-trennen': (28, 385),       # nach „Mülltrennung“ (380)
    '09-pfand': (37, 365),               # nach „Pfand und Umwelt“ (360)
    '10-lueften-heizen': (28, 395),      # nach „Heizen und Lüften“ (390)
    '11-nebenkosten-strom': (28, 465),   # nach „Den Mietvertrag verstehen“ (460)
    '12-hausordnung-nachbarn': (28, 402),  # nach „Sonntag und Hausordnung“ (400)
    '13-einkaufen-budget': (30, 495),    # nach „Dein Geld im Monat planen“ (490)
}
q = lambda s: "'" + s.replace("'", "''") + "'" if s is not None else 'null'

def sprechertext(o):
    bloecke = open(os.path.join(ROOT, o, 'film.vtt'), encoding='utf8').read().split('\n\n')[1:]
    teile = [' '.join(b.strip().split('\n')[2:]) if re.match(r'^\d+$', b.strip().split('\n')[0]) else ' '.join(b.strip().split('\n')[1:]) for b in bloecke if '-->' in b]
    return re.sub(r'\s+', ' ', ' '.join(t for t in teile if t)).strip()

print('begin;')
for name, (kat, sort) in PLATZ.items():
    o = 'kurse/' + name
    e = ids[name]
    fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
    kid = e['kurs_id']
    print(f"""insert into public.kurse (id, titel, beschreibung, intro_typ, content_url, content_text, punkte, min_status, retry_tage,
  max_versuche, aktiv, sort, kategorie_id, titelbild_path, version, bestehensgrenze_pct, offen_fuer_helper, ki_generiert)
values ({q(kid)}, {q(fr['titel'])}, {q(fr['beschreibung'])}, 'video', {q(e['video'])}, {q(sprechertext(o))}, 10, '09_bewerbungsphase', 7,
  3, true, {sort}, {kat}, {q(e['titelbild'])}, 1, 70, false, true)
on conflict (id) do update set titel = excluded.titel, beschreibung = excluded.beschreibung, content_url = excluded.content_url,
  content_text = excluded.content_text, titelbild_path = excluded.titelbild_path;""")
    for n, f in enumerate(fr['fragen'], 1):
        ext = f'kurse-repo:{o}:{n}'
        assert len(f['antworten']) == 4 and 0 <= f['richtig'] <= 3, ext
        print(f"""with f as (insert into public.quiz_questions (kategorie_id, kurs_id, frage, aktiv, external_id, cefr_level, zeit_sekunden, sort)
  select {kat}, {q(kid)}, {q(f['frage'].strip())}, true, {q(ext)}, 'B1', {int(f['zeit_sekunden'])}, {n * 10}
  where not exists (select 1 from public.quiz_questions where external_id = {q(ext)}) returning id)
insert into public.quiz_options (question_id, text, ist_richtig, sort, aktiv)
select f.id, a.text, a.i = {f['richtig']}, (a.i + 1) * 10, true from f,
  (values {', '.join(f"({i}, {q(t.strip())})" for i, t in enumerate(f['antworten']))}) as a(i, text);""")
print('commit;')
