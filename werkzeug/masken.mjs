// Prüft Masken-Texte (titelEin): Schaut ein Wort schon vor seinem Aufstieg aus seiner Maske heraus?
// Aufruf: node werkzeug/masken.mjs lernvideos/01-krankenkasse [weitere Ordner …]   (braucht film.html: rendern.mjs --nur-html)
// Je Titelzeile wird das Wort kurz vor seinem Aufstieg einmal mit und einmal ohne Wort fotografiert; weicht das Bild ab, ragt es heraus.
const { chromium } = await import('playwright');
const dirs = process.argv.slice(2);
const b = await chromium.launch();
for (const d of dirs) {
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await p.goto(`file://${new URL('..', import.meta.url).pathname}${d.replace(/\/$/, '')}/film.html?still`);
  await p.evaluate(() => document.fonts.ready);
  const ziele = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll('.w.maske .wi').forEach((wi, i) => {
      const a = AKTEURE.get(wi); if (!a || !a.tw.length) return;
      const t0 = Math.min(...a.tw.map(w => w.t0));
      wi.dataset.pk = i; out.push({ i, t0, text: wi.textContent });
    });
    return out;
  });
  const funde = [];
  for (const z of ziele) {
    if (z.t0 < .1) continue;
    const box = await p.evaluate(({ i, t0 }) => {
      window.render(t0 - .04);
      const wi = document.querySelector(`[data-pk="${i}"]`), m = wi.parentElement;
      let o = 1; for (let x = m; x; x = x.parentElement) { const s = getComputedStyle(x); if (s.visibility === 'hidden' || s.display === 'none') return null; o *= +s.opacity; }
      if (o < .3) return null;
      const r = m.getBoundingClientRect(); if (r.width < 2 || r.right < 0 || r.left > 1920 || r.bottom < 0 || r.top > 1080) return null;
      return { x: Math.max(0, r.left), y: Math.max(0, r.top), width: Math.min(1920, r.right) - Math.max(0, r.left), height: Math.min(1080, r.bottom) - Math.max(0, r.top) };
    }, z);
    if (!box || box.width < 2 || box.height < 2) continue;
    // Referenz: gleiche Stelle mit ausgeblendetem Wort
    const buf1 = await p.screenshot({ clip: box });
    await p.evaluate(({ i }) => { document.querySelector(`[data-pk="${i}"]`).style.visibility = 'hidden'; }, z);
    const buf2 = await p.screenshot({ clip: box });
    await p.evaluate(({ i }) => { document.querySelector(`[data-pk="${i}"]`).style.visibility = ''; }, z);
    if (!buf1.equals(buf2)) funde.push(`${z.t0.toFixed(1)}s „${z.text}“`);
  }
  console.log(`${d}: ${funde.length ? funde.length + ' – ' + funde.slice(0, 6).join(' | ') : 'ok'}`);
  await p.close();
}
await b.close();
