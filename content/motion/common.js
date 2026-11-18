// Kit commun des motion designs (1080x1920, fond noir, accent jaune).
// Chaque page appelle MF.* puis MF.run([...fonctions(t)]).
(function () {
  const W = 1080;
  const css = `
  @font-face { font-family: "Anton"; src: url("../fonts/anton-latin-400-normal.woff2") format("woff2"); }
  @font-face { font-family: "InterM"; src: url("../fonts/inter-latin-500-normal.woff2") format("woff2"); }
  @font-face { font-family: "InterB"; src: url("../fonts/inter-latin-700-normal.woff2") format("woff2"); }
  :root { --bg:#0D0D0D; --y:#FFDE32; --c:#FAF4E6; --g:#8A8A8A; --d:#5C5C5C; }
  html, body { margin:0; padding:0; background:var(--bg); }
  #stage { position:relative; width:1080px; height:1920px; overflow:hidden; background:var(--bg); }
  .abs { position:absolute; }
  .lbl { left:80px; top:140px; font:40px InterB; color:var(--y); letter-spacing:6px; }
  .ttl { left:80px; top:195px; font:150px/1 Anton; color:var(--c); transform-origin:0 0; letter-spacing:2px; white-space:nowrap; }
  .wk { font:40px InterB; color:var(--c); text-align:center; width:220px; }
  .sch { font:32px InterM; color:var(--g); text-align:center; width:220px; white-space:nowrap; }
  .tag { font:28px InterB; color:var(--y); letter-spacing:2px; white-space:nowrap; }
  .val { font:28px InterB; color:var(--c); text-align:center; width:80px; }
  .big { font:200px/1 Anton; color:var(--c); white-space:nowrap; }
  .txt { font:40px InterB; color:var(--c); white-space:nowrap; }
  `;
  document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
  const stage = document.getElementById("stage");
  stage.insertAdjacentHTML("beforeend",
    `<svg class="abs" style="left:0;top:0;opacity:.05" width="1080" height="1920"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/></filter><rect width="1080" height="1920" filter="url(#n)"/></svg>`);

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const prog = (t, a, d) => clamp((t - a) / d);
  const easeOut = p => 1 - Math.pow(1 - p, 3);
  const easeInOut = p => p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
  const el = (cls, text, style) => {
    const e = document.createElement("div"); e.className = "abs " + cls; if (text != null) e.innerHTML = text;
    Object.assign(e.style, style || {}); stage.appendChild(e); return e;
  };

  // En-tête : étiquette jaune + gros titre, réduit à shrinkAt.
  function header(label, title, shrinkAt = 1.2) {
    const l = el("lbl", label), h = el("ttl", title);
    return t => {
      const pl = easeOut(prog(t, 0, .35));
      l.style.opacity = pl; l.style.transform = `translateX(${(1 - pl) * -60}px)`;
      const pt = easeOut(prog(t, .1, .4)), s = easeInOut(prog(t, shrinkAt, .35));
      h.style.opacity = pt; h.style.transform = `translateY(${(1 - pt) * 40}px) scale(${1 - .4 * s})`;
    };
  }

  // Texte qui apparaît à t0 (fondu + montée), disparaît à t1 si fourni.
  function text(html, cls, style, t0, t1, align) {
    const e = el(cls, html, style);
    if (align === "right") { e.style.left = "auto"; e.style.right = (W - parseFloat(style.left)) + "px"; }
    if (align === "center") { e.style.transform = "translateX(-50%)"; }
    const base = align === "center" ? "translateX(-50%) " : "";
    return t => {
      const p = easeOut(prog(t, t0, .3)) * (t1 ? 1 - prog(t, t1, .3) : 1);
      e.style.opacity = p; e.style.transform = base + `translateY(${(1 - p) * 16}px)`;
    };
  }

  // Graphique semaine par semaine. weeks: [{k, s, t, groups:[[{h, hot, grey, v}...], ...], note}]
  function chart(cfg) {
    const BASE = cfg.base || 1130, HMAX = cfg.hmax || 420, xs = cfg.xs || [270, 470, 670, 870];
    const BW = cfg.bw || 22, GAP = 10, SPLIT = 24;
    const holder = el("", "", { left: 0, top: 0, width: "1080px", height: "1920px", transformOrigin: "560px 950px" });
    const add = (cls, html, style) => { const e = el(cls, html, style); holder.appendChild(e); return e; };
    const axis = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    axis.setAttribute("class", "abs"); axis.setAttribute("width", 1080); axis.setAttribute("height", 1920);
    axis.style.left = 0; axis.style.top = 0;
    axis.innerHTML = `<line x1="120" y1="${BASE}" x2="120" y2="${BASE - HMAX - 40}" stroke="#8A8A8A" stroke-width="3"/>
      <polygon points="120,${BASE - HMAX - 60} 108,${BASE - HMAX - 36} 132,${BASE - HMAX - 36}" fill="#8A8A8A"/>
      <line x1="120" y1="${BASE}" x2="990" y2="${BASE}" stroke="#2E2E2E" stroke-width="3"/>
      <text transform="translate(98 ${BASE - 120}) rotate(-90)" font-family="InterB" font-size="28" fill="#8A8A8A" letter-spacing="4">INTENSITÉ</text>`;
    holder.appendChild(axis);
    const anims = [];
    cfg.weeks.forEach((w, wi) => {
      const cx = xs[wi];
      const bars = w.groups.flat();
      const n = bars.length;
      const total = n * BW + (n - 1) * GAP + (w.groups.length - 1) * (SPLIT - GAP);
      let x = cx - total / 2, i = 0;
      w.groups.forEach((g, gi) => {
        if (gi > 0) x += SPLIT - GAP;
        g.forEach(b => {
          const color = b.hot ? "var(--y)" : b.grey ? "var(--d)" : "var(--c)";
          const e = add("", "", { left: x + "px", width: BW + "px", top: (BASE - b.h * HMAX) + "px", height: (b.h * HMAX) + "px",
            background: color, borderRadius: "4px 4px 0 0", transformOrigin: "50% 100%" });
          let v = null;
          if (b.v) v = add("val", b.v, { left: (x + BW / 2 - 40) + "px", top: (BASE - b.h * HMAX - 40) + "px", color: b.hot ? "var(--y)" : "var(--c)" });
          const d = w.t + .1 + i * .06;
          anims.push(t => { const g2 = easeOut(prog(t, d, .35)); e.style.transform = `scaleY(${g2})`; e.style.opacity = g2 > 0 ? 1 : 0;
            if (v) v.style.opacity = easeOut(prog(t, d + .3, .25)); });
          x += BW + GAP; i++;
        });
      });
      if (w.empty) {
        const e = add("tag", w.empty, { left: (cx - 110) + "px", width: "220px", textAlign: "center", top: (BASE - 80) + "px", fontSize: (w.emptySize || 30) + "px" });
        anims.push(t => { e.style.opacity = easeOut(prog(t, w.t + .1, .3)); });
      }
      const k = add("wk", w.k, { left: (cx - 110) + "px", top: (BASE + 18) + "px" });
      const s = add("sch", w.s || "", { left: (cx - 110) + "px", top: (BASE + 70) + "px" });
      anims.push(t => { const p = easeOut(prog(t, w.t, .3)); k.style.opacity = s.style.opacity = p;
        k.style.transform = s.style.transform = `translateY(${(1 - p) * 16}px)`; });
    });
    const a0 = cfg.axisAt != null ? cfg.axisAt : cfg.weeks[0].t - .2;
    return t => {
      const show = easeOut(prog(t, a0, .35)) * (cfg.outAt ? 1 - prog(t, cfg.outAt, .3) : 1);
      holder.style.opacity = show;
      anims.forEach(f => f(t));
      if (cfg.zoomAt) holder.style.transform = `scale(${1 + .03 * easeInOut(prog(t, cfg.zoomAt, 1))})`;
    };
  }

  // Légende : pastilles de couleur + libellé.
  function legend(items, left, top, t0) {
    const fns = items.map((it, i) => {
      const e = el("txt", `<span style="display:inline-block;width:26px;height:26px;border-radius:4px;background:${it.color};margin-right:14px;vertical-align:-3px"></span>${it.text}`,
        { left: left + "px", top: (top + i * 54) + "px", fontSize: "32px" });
      return t => { const p = easeOut(prog(t, t0 + i * .15, .3)); e.style.opacity = p; e.style.transform = `translateX(${(1 - p) * -30}px)`; };
    });
    return t => fns.forEach(f => f(t));
  }

  window.MF = { el, header, text, chart, legend, prog, easeOut, easeInOut, clamp, stage };
  window.MF.run = fns => { window.render = t => fns.forEach(f => f(t)); window.render(0); };
})();
