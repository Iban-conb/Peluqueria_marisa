(async () => {
  const bin = atob(window.__pdfB64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const doc = await window.pdfjsLib.getDocument({ data: bytes }).promise;
  const page = await doc.getPage(1);
  const viewport = page.getViewport({ scale: 2 });
  const canvas = document.createElement("canvas");
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext("2d");
  await page.render({ canvasContext: ctx, viewport }).promise;
  const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  const tc = await page.getTextContent();
  const items = tc.items.map((it) => ({
    str: it.str.trim(),
    x: it.transform[4],
    y: it.transform[5],
    w: it.width || 0,
    h: it.height || 8,
  })).filter((it) => it.str);

  let year = null;
  for (const it of items) {
    const m = it.str.match(/(19|20)\d{2}/);
    if (m) { year = parseInt(m[0], 10); break; }
  }

  const MONTHS = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
  const monthItems = items.filter((it) => MONTHS.includes(it.str.toUpperCase()));

  // --- clustering por huecos (gap) ---
  function cluster(sorted, gap) {
    const out = [];
    let cur = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] - sorted[i - 1] > gap) { out.push(cur); cur = []; }
      cur.push(sorted[i]);
    }
    out.push(cur);
    return out;
  }
  const colClusters = cluster(monthItems.map((m) => m.x).sort((a, b) => a - b), 90);
  const rowClusters = cluster(monthItems.map((m) => m.y).sort((a, b) => a - b), 60);
  const colCenters = colClusters.map((c) => c.reduce((s, v) => s + v, 0) / c.length);
  const rowTops = rowClusters.map((c) => Math.max(...c)); // mayor y de cada fila (cabecera)

  function colOf(x) {
    let best = 0, bd = Infinity;
    colCenters.forEach((cx, i) => { const d = Math.abs(cx - x); if (d < bd) { bd = d; best = i; } });
    return best;
  }
  // fila = cabecera con mayor y que siga estando POR ENCIMA del numero (y >= dayY)
  function rowOf(y) {
    let best = -1;
    rowTops.forEach((ry, i) => { if (ry >= y - 6 && (best === -1 || ry < rowTops[best])) best = i; });
    return best;
  }

  const scale = 2;
  const pageH = viewport.height / scale;
  function sampleColor(x, y) {
    const px = Math.round(x * scale);
    const py = Math.round((pageH - y) * scale);
    if (px < 0 || py < 0 || px >= canvas.width || py >= canvas.height) return null;
    const i = (py * canvas.width + px) * 4;
    return [img[i], img[i + 1], img[i + 2]];
  }
  function isColored(c) {
    if (!c) return false;
    const [r, g, b] = c;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    return (mx - mn) >= 45 && mx >= 90;
  }

  const holidays = [];
  const numbers = items.filter((it) => /^\d{1,2}$/.test(it.str) && +it.str >= 1 && +it.str <= 31 && it.w < 30);
  for (const n of numbers) {
    const day = +n.str;
    const cx = n.x + n.w / 2;
    const cy = n.y + n.h / 2;
    const offs = [[-8,-5],[8,-5],[-8,4],[8,4],[0,-7],[0,6],[-5,0],[5,0],[9,0],[-9,0]];
    let colored = 0;
    for (const [dx, dy] of offs) {
      if (isColored(sampleColor(cx + dx, cy + dy))) colored++;
    }
    if (colored >= 2) {
      const col = colOf(n.x);
      const row = rowOf(n.y);
      if (row >= 0) {
        const mi = monthItems.find((m) => colOf(m.x) === col && rowOf(m.y) === row);
        if (mi) {
          const mIdx = MONTHS.indexOf(mi.str.toUpperCase());
          holidays.push({ day, month: mIdx + 1 });
        }
      }
    }
  }

  const byMonth = {};
  holidays.forEach((h) => {
    const k = `${h.month}-${MONTHS[h.month - 1]}`;
    (byMonth[k] = byMonth[k] || []).push(h.day);
  });
  Object.keys(byMonth).forEach((k) => byMonth[k].sort((a, b) => a - b));

  return JSON.stringify({ year, monthsFound: monthItems.length, cols: colCenters.length, rows: rowTops.length, holidays: holidays.length, byMonth });
})()
