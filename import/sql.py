#!/usr/bin/env python3
"""Erzeugt das SQL für den Import der Lektionen nach Supabase (ein DO-Block je Lektion = eine Transaktion).

Quellen: import/plan.json (Werte, Reihenfolge), import/ids.json (Kurs-IDs und Storage-Pfade aus dem Upload),
<ordner>/fragen.json (Fragen), <ordner>/film.vtt (Sprechertext → content_text),
import/abzeichen/liste.json (Abzeichen).

Idempotent: Kurse über die feste ID aus ids.json, Fragen über external_id 'kurse-repo:<ordner>:<n>',
Optionen über (question_id, sort), Kategorien und Abzeichen über ihren Namen. Ein zweiter Lauf
aktualisiert, statt doppelt anzulegen. Schreibt wie save-course: sort = (i+1)*10 für Fragen und Optionen.

Aufruf: python3 import/sql.py <ausgabe-ordner>
  → 00-kategorien-abzeichen.sql und je Lektion NN-<ordner>.sql
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
aus = sys.argv[1]
os.makedirs(aus, exist_ok=True)
plan = json.load(open(os.path.join(ROOT, 'import/plan.json')))
ids = json.load(open(os.path.join(ROOT, 'import/ids.json')))
liste = json.load(open(os.path.join(ROOT, 'import/abzeichen/liste.json')))


def q(s):
    return 'null' if s is None else "'" + str(s).replace("'", "''") + "'"


def sprechertext(o):
    """Text aus film.vtt (schon in Bild-Schreibweise), Untertitel zu Sätzen zusammengefügt."""
    f = os.path.join(ROOT, o, 'film.vtt')
    if not os.path.exists(f):
        return None
    bloecke = open(f, encoding='utf8').read().split('\n\n')[1:]
    teile = [' '.join(b.strip().split('\n')[2:]) for b in bloecke if '-->' in b]
    text = ' '.join(t for t in teile if t)
    return re.sub(r'\s+', ' ', text).strip() or None


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
sql = ['-- Abschnitts-Kategorien und Abzeichen (idempotent)']
for a in plan['abschnitte']:
    sql.append(f"insert into public.quiz_kategorien (name, aktiv) values ({q(a['name'])}, true) on conflict (name) do nothing;")
for a in plan['abschnitte']:
    b = abz[a['name']]
    pfad = ids['_abzeichen'][b['name']]
    sql.append(
        f"insert into public.badges (name, beschreibung, icon_path, nur_team, aktiv) values "
        f"({q(b['name'])}, {q(b.get('beschreibung'))}, {q(pfad)}, false, true) "
        f"on conflict (name) do update set beschreibung = excluded.beschreibung, icon_path = excluded.icon_path;")
open(os.path.join(aus, '00-kategorien-abzeichen.sql'), 'w').write('\n'.join(sql) + '\n')

for n, l in enumerate(plan['lektionen'], 1):
    o = l['ordner']
    e = ids[l['schluessel']]
    fr = json.load(open(os.path.join(ROOT, o, 'fragen.json')))
    assert fr['ordner'] == o and fr['titel'] == l['titel'], o
    assert e.get('video') and e.get('titelbild'), f'{o}: Upload fehlt'
    abzeichen = abz[l['abschnitt']]['name'] if l.get('abzeichen') else None
    s = [f"-- {o}", 'do $$', 'declare k uuid := ' + q(e['kurs_id']) + '; kat int; bid uuid; qid uuid;', 'begin',
         f"  select id into strict kat from public.quiz_kategorien where name = {q(l['abschnitt'])};"]
    if abzeichen:
        s.append(f"  select id into strict bid from public.badges where name = {q(abzeichen)};")
    s.append(
        "  insert into public.kurse (id, titel, beschreibung, intro_typ, content_url, content_text, titelbild_path, kategorie_id, sort,"
        " punkte, badge_id, min_status, retry_tage, max_versuche, ki_generiert, offen_fuer_helper, aktiv)\n"
        f"  values (k, {q(l['titel'])}, {q(fr['beschreibung'])}, 'video', {q(e['video'])}, {q(sprechertext(o))}, {q(e['titelbild'])}, kat, {l['sort']},"
        f" {l['punkte']}, bid, {q(l['min_status'])}, {l['retry_tage']}, {l['max_versuche']}, {str(l['ki_generiert']).lower()}, {str(l['offen_fuer_helper']).lower()}, false)\n"
        "  on conflict (id) do update set titel = excluded.titel, beschreibung = excluded.beschreibung, intro_typ = excluded.intro_typ,"
        " content_url = excluded.content_url, content_text = excluded.content_text, titelbild_path = excluded.titelbild_path,"
        " kategorie_id = excluded.kategorie_id, sort = excluded.sort, punkte = excluded.punkte, badge_id = excluded.badge_id,"
        " min_status = excluded.min_status, retry_tage = excluded.retry_tage, max_versuche = excluded.max_versuche,"
        " ki_generiert = excluded.ki_generiert, offen_fuer_helper = excluded.offen_fuer_helper, version = public.kurse.version + 1;")
    s.append('  delete from public.kurs_faehigkeiten where kurs_id = k;')
    for a in l['achsen']:
        s.append(f"  insert into public.kurs_faehigkeiten (kurs_id, achse) values (k, {q(a)});")
    for i, f in enumerate(fr['fragen']):
        ext = f"kurse-repo:{o}:{i + 1}"
        s.append(
            "  insert into public.quiz_questions (kategorie_id, kurs_id, frage, zeit_sekunden, sort, aktiv, external_id, cefr_level)\n"
            f"  values (kat, k, {q(f['frage'].strip())}, {int(f['zeit_sekunden'])}, {(i + 1) * 10}, true, {q(ext)}, 'B1')\n"
            "  on conflict (external_id) do update set kategorie_id = excluded.kategorie_id, kurs_id = excluded.kurs_id,"
            " frage = excluded.frage, zeit_sekunden = excluded.zeit_sekunden, sort = excluded.sort, aktiv = true, cefr_level = 'B1'\n"
            "  returning id into qid;")
        for j, a in enumerate(f['antworten']):
            richtig = 'true' if j == f['richtig'] else 'false'
            s.append(
                f"  update public.quiz_options set text = {q(a.strip())}, ist_richtig = {richtig}, aktiv = true where question_id = qid and sort = {(j + 1) * 10};\n"
                f"  if not found then insert into public.quiz_options (question_id, text, ist_richtig, sort, aktiv) values (qid, {q(a.strip())}, {richtig}, {(j + 1) * 10}, true); end if;")
    # Fragen, die es in fragen.json nicht mehr gibt, soft-löschen (wie save-course)
    s.append(f"  update public.quiz_questions set aktiv = false where kurs_id = k and aktiv and external_id like {q('kurse-repo:' + o + ':%')}"
             f" and (split_part(external_id, ':', 3))::int > {len(fr['fragen'])};")
    s += ['end $$;', '']
    name = f"{n:02d}-{o.replace('/', '_')}.sql"
    open(os.path.join(aus, name), 'w').write('\n'.join(s))
print(f"ok: {len(plan['lektionen'])} Lektionen → {aus}")
