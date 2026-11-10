# Erzeugt import/plan.json und import/plan.md: Abschnitte, Reihenfolge, Titel, Werte je Lektion.
import json, re, subprocess
ABSCHNITTE = [
 ("Ankommen & Papiere", "Anmelden, Konto, Krankenkasse – das Wichtigste am Anfang", "Angekommen", [
   ("kurse/02-wohnsitz-anmelden", "Wohnsitz anmelden", ["sprache"]),
   ("kurse/03-bankkonto", "Ein Bankkonto eröffnen", ["sprache"]),
   ("lernvideos/01-krankenkasse", "Krankenkasse und Versichertenkarte", ["sprache"]),
   ("lernvideos/02-zum-arzt", "Zum Arzt gehen", ["sprache"]),
   ("lernvideos/05-aufenthaltstitel", "Aufenthaltstitel verlängern", ["sprache"]),
   ("lernvideos/04-rundfunkbeitrag", "Der Rundfunkbeitrag", ["sprache"])]),
 ("Wohnen & Alltag", "Wohnung, Post und Regeln im Haus", "Alltagsprofi", [
   ("lernvideos/07-mietvertrag", "Den Mietvertrag verstehen", ["sprache"]),
   ("lernvideos/03-muelltrennung", "Mülltrennung", ["sprache"]),
   ("lernvideos/25-sonntag-hausordnung", "Sonntag und Hausordnung", ["sprache", "sozial"]),
   ("lernvideos/15-mythos-wohnen", "Mythos oder Wahrheit: Wohnen", ["sprache"]),
   ("lernvideos/21-mais-post", "Wichtige Post öffnen", ["sprache"]),
   ("lernvideos/17-brief-mit-frist", "Ein Brief mit Frist", ["sprache"]),
   ("lernvideos/19-konto-gesperrt", "„Ihr Konto wurde gesperrt“", ["sprache"])]),
 ("Start im Betrieb", "Die ersten Tage in Betrieb und Berufsschule", "Gut gestartet", [
   ("lernvideos/32-wer-ist-wer", "Wer ist wer im Betrieb?", ["sozial"]),
   ("lernvideos/31-vokabeln-ausbildung", "Wörter für jede Ausbildung", ["sprache"]),
   ("lernvideos/22-kwames-erster-tag", "Der erste Arbeitstag", ["sozial"]),
   ("lernvideos/23-puenktlichkeit", "Pünktlichkeit", ["sozial"]),
   ("lernvideos/16-verschlafen", "Verschlafen am Berufsschultag", ["sozial"]),
   ("lernvideos/33-erste-woche-berufsschule", "Die erste Woche in der Berufsschule", ["sprache"]),
   ("lernvideos/06-arbeitsunfall", "Arbeitsunfall und Wegeunfall", ["koerper"])]),
 ("Rechte & Geld", "Gehalt, Urlaub, krank sein – deine Rechte in der Ausbildung", "Gut informiert", [
   ("kurse/01-brutto-netto", "Brutto, Netto und Gehaltsabrechnung", ["mathe"]),
   ("kurse/04-rechte-pflichten", "Rechte und Pflichten in der Ausbildung", ["sozial"]),
   ("lernvideos/12-mythos-geld", "Mythos oder Wahrheit: Geld", ["mathe"]),
   ("lernvideos/13-mythos-krank", "Mythos oder Wahrheit: Krank sein", ["sprache"]),
   ("lernvideos/14-mythos-ausbildung", "Mythos oder Wahrheit: Ausbildung", ["sprache"]),
   ("lernvideos/20-amirs-urlaub", "Urlaub richtig beantragen", ["sozial"]),
   ("lernvideos/08-nebenjob", "Nebenjob in der Ausbildung", ["mathe"]),
   ("lernvideos/38-betriebsrat-jav", "Betriebsrat, JAV und Gewerkschaft", ["sozial"])]),
 ("Gut kommunizieren", "Telefonieren, schreiben, mit Kritik umgehen", "Guter Draht", [
   ("lernvideos/34-telefonieren", "Telefonieren auf Deutsch", ["sprache"]),
   ("lernvideos/35-kwames-nachrichten", "Nachrichten richtig schreiben", ["sprache"]),
   ("lernvideos/18-kritik-vom-chef", "Kritik vom Chef", ["sozial"]),
   ("lernvideos/24-kritik-und-hierarchie", "Direkte Kritik und Hierarchie", ["sozial"]),
   ("lernvideos/30-was-der-chef-meint", "Was der Chef wirklich meint", ["sprache"]),
   ("lernvideos/39-kunde-beschwert-sich", "Ein Kunde beschwert sich", ["sozial"])]),
 ("Wortschatz für deinen Beruf", "Die wichtigsten Wörter für deinen Beruf", "Fachwort-Profi", [
   ("lernvideos/26-vokabeln-gastronomie", "Wortschatz Gastronomie", ["sprache"]),
   ("lernvideos/27-vokabeln-baeckerei", "Wortschatz Bäckerei", ["sprache", "handwerk"]),
   ("lernvideos/28-vokabeln-pflege", "Wortschatz Pflege", ["sprache"]),
   ("lernvideos/29-vokabeln-elektro", "Wortschatz Handwerk und Elektro", ["sprache", "handwerk"]),
   ("lernvideos/40-vokabeln-kfz", "Wortschatz Kfz-Werkstatt", ["sprache", "handwerk"]),
   ("lernvideos/41-vokabeln-hotel", "Wortschatz Hotel", ["sprache"])]),
 ("Prüfung & Zukunft", "Gut durch die Prüfung – und was danach kommt", "Prüfungsfit", [
   ("lernvideos/09-pruefungen", "Zwischen- und Abschlussprüfung", ["sprache"]),
   ("lernvideos/45-pruefungssprache", "Prüfungssprache verstehen", ["sprache"]),
   ("lernvideos/11-nach-der-ausbildung", "Nach der Ausbildung", ["sprache"])]),
 ("Leben in Deutschland", "Freunde, Feste, Vereine und unsere Demokratie", "Angekommen im Land", [
   ("lernvideos/10-heimweh", "Heimweh und die ersten Monate", ["sozial"]),
   ("lernvideos/36-freundschaften", "Freundschaften in Deutschland", ["sozial"]),
   ("lernvideos/37-mythos-feiertage", "Feiertage und Traditionen", ["sprache"]),
   ("lernvideos/42-verein", "Was ist ein Verein?", ["sozial"]),
   ("lernvideos/43-demokratie", "Wie funktioniert die Demokratie?", ["sprache"]),
   ("lernvideos/44-grundgesetz", "Das Grundgesetz", ["sprache"])]),
]
def dauer(o):
    out = subprocess.run(['ffmpeg', '-i', f'{o}/film.mp4'], capture_output=True, text=True).stderr
    _, m, s = re.search(r'Duration: (\d+):(\d+):([\d.]+)', out).groups(); return int(m) * 60 + float(s)
lektionen, sort = [], 0
for ai, (name, unter, badge, ls) in enumerate(ABSCHNITTE, 1):
    for li, (o, titel, achsen) in enumerate(ls):
        sort += 10; d = dauer(o)
        assert len(titel) <= 40, titel
        lektionen.append(dict(ordner=o, schluessel=o.replace('/', ':'), titel=titel, abschnitt=name, abschnitt_nr=ai,
            sort=sort, dauer_s=round(d), fragen_ziel=max(6, min(14, round(d / 12))), achsen=achsen,
            abzeichen=badge if li == len(ls) - 1 else None, min_status='09_bewerbungsphase', punkte=10,
            max_versuche=3, retry_tage=7, ki_generiert=True, offen_fuer_helper=False,
            vtt=__import__('os').path.exists(f'{o}/film.vtt'), mb=round(__import__('os').path.getsize(f'{o}/film.mp4') / 1e6, 1)))
json.dump(dict(abschnitte=[dict(nr=i, name=a[0], untertitel=a[1], abzeichen=a[2]) for i, a in enumerate(ABSCHNITTE, 1)], lektionen=lektionen),
          open('import/plan.json', 'w'), ensure_ascii=False, indent=1)
z = ['# Import-Plan: Lektionen in Azubis Plus', '', 'Erzeugt von `import/plan.py`. Entscheidungen des Nutzers (29.09.2026): alle 49 Videos, Abschnitte = neue',
     'Kategorien, Start bei „Ankommen“, 10 Punkte / 3 Versuche / 7 Tage, ein Abzeichen je Abschnitt (an der letzten Lektion),',
     'keine Lektion für Helper-Nutzer offen (sichtbar ab `09_bewerbungsphase`), Fachvokabeln für alle, `ki_generiert = true`,',
     '6–14 Fragen je nach Inhalt, Titelbilder als Illustration im Stil C (Gegenstände + Kursfigur).', '',
     'Dubletten: keine. Die älteren Kurse 1–4 überschneiden sich nur teilweise mit Lernvideos (z. B. Bankkonto ↔ „Konto gesperrt“,',
     'Rechte & Pflichten ↔ „Mythos Ausbildung“) und bleiben beide drin. Kurs 4 hat noch keine Untertitel.', '',
     '| Pos. | Abschnitt | Lektion | Ordner | Dauer | Fragen (Ziel) | Achsen | Abzeichen |', '| --- | --- | --- | --- | --- | --- | --- | --- |']
for l in lektionen:
    z.append(f"| {l['sort']} | {l['abschnitt']} | {l['titel']} | `{l['ordner']}` | {l['dauer_s']//60}:{l['dauer_s']%60:02d} | {l['fragen_ziel']} | {', '.join(l['achsen'])} | {l['abzeichen'] or ''} |")
open('import/plan.md', 'w').write('\n'.join(z) + '\n')
print(len(lektionen), 'Lektionen,', sum(l['fragen_ziel'] for l in lektionen), 'Fragen (Ziel), max', max(l['mb'] for l in lektionen), 'MB, ohne vtt:', [l['ordner'] for l in lektionen if not l['vtt']])
