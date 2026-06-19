/* FUKO — "Главная" dashboard screen. IIFE-wrapped. Exposes window.FukoHome. */
(() => {
const HNS = window.FUKODesignSystem_23dd6b;
const HIcon = (n, size = 16, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw, flexShrink: 0 }}></i>;

/* ============================ per-period data ============================ */
const DATA = {
  "Неделя": {
    sub: "Сегодня, 17 мая. За неделю — 12 активных циклов, 7 ждут ответа",
    iterLabel: "ТРАЕКТОРИЯ НЕДЕЛИ · 7 ИТЕРАЦИЙ",
    stats: [
      { label: "Активные циклы", value: 12, suffix: "", delta: "3 за неделю", up: true, points: [7, 8, 8, 9, 10, 11, 12] },
      { label: "Комментарии", value: 24, suffix: "", delta: "8 за неделю", up: true, points: [10, 12, 14, 13, 18, 21, 24] },
      { label: "Готовность", value: 84, suffix: "%", delta: "12 п.п.", up: true, points: [58, 60, 65, 68, 72, 79, 84] },
      { label: "Ждут ответа", value: 7, suffix: "", delta: "2 за сегодня", up: false, down: true, points: [12, 11, 12, 10, 9, 9, 7] },
    ],
    series: [
      { name: "Дипломная — Глава 2", active: true, pts: [30, 46, 58, 72, 84], proj: 100 },
      { name: "Исследование аудитории", pts: [22, 34, 48, 56, 64] },
      { name: "Прототип кабинета", pts: [18, 26, 33, 40, 44] },
    ],
    readiness: 84, readinessDelta: "+12 п.п.", remaining: 16,
    growth: [
      { label: "Аргументация", pct: 72, delta: "+8" },
      { label: "Структура текста", pct: 58, delta: "+12" },
      { label: "Визуальные доказательства", pct: 41, delta: "+4", priority: true },
      { label: "Цитирование", pct: 85, delta: "+2" },
    ],
    ai: { title: "ИИ-сводка недели", time: "12 мин назад",
      text: "Преподаватели отмечают рост качества аргументации и\u00a0структуры. Главная просьба — усилить визуальные доказательства и\u00a0связку между главами. Один цикл ждёт вашего ответа сегодня.",
      rows: [["Структура текста", 4], ["Доказательность", 3], ["Визуальные данные", 2], ["Следующий шаг", 3]] },
  },
  "Месяц": {
    sub: "Май. За месяц — 18 активных циклов, 9 ждут ответа",
    iterLabel: "ТРАЕКТОРИЯ МЕСЯЦА · 18 ИТЕРАЦИЙ",
    stats: [
      { label: "Активные циклы", value: 18, suffix: "", delta: "6 за месяц", up: true, points: [9, 11, 12, 14, 15, 17, 18] },
      { label: "Комментарии", value: 96, suffix: "", delta: "31 за месяц", up: true, points: [40, 52, 61, 70, 78, 88, 96] },
      { label: "Готовность", value: 79, suffix: "%", delta: "18 п.п.", up: true, points: [52, 58, 63, 68, 72, 76, 79] },
      { label: "Ждут ответа", value: 9, suffix: "", delta: "5 за месяц", up: false, down: true, points: [18, 16, 15, 13, 11, 10, 9] },
    ],
    series: [
      { name: "Дипломная — Глава 2", active: true, pts: [20, 38, 52, 66, 79], proj: 92 },
      { name: "Исследование аудитории", pts: [16, 28, 40, 50, 58] },
      { name: "Прототип кабинета", pts: [12, 20, 28, 36, 42] },
    ],
    readiness: 79, readinessDelta: "+18 п.п.", remaining: 21,
    growth: [
      { label: "Аргументация", pct: 68, delta: "+14" },
      { label: "Структура текста", pct: 62, delta: "+20" },
      { label: "Визуальные доказательства", pct: 38, delta: "+9", priority: true },
      { label: "Цитирование", pct: 81, delta: "+6" },
    ],
    ai: { title: "ИИ-сводка месяца", time: "2 ч назад",
      text: "За\u00a0месяц заметно выросла структура и\u00a0доказательность работ. Визуальные данные остаются слабым местом — добавьте графики и\u00a0схемы. Темп ответов на\u00a0циклы стабильный.",
      rows: [["Структура текста", 4], ["Доказательность", 4], ["Визуальные данные", 2], ["Следующий шаг", 3]] },
  },
  "Семестр": {
    sub: "Весенний семестр. Всего — 34 активных цикла, 4 ждут ответа",
    iterLabel: "ТРАЕКТОРИЯ СЕМЕСТРА · 42 ИТЕРАЦИИ",
    stats: [
      { label: "Активные циклы", value: 34, suffix: "", delta: "14 за семестр", up: true, points: [12, 16, 20, 24, 28, 31, 34] },
      { label: "Комментарии", value: 312, suffix: "", delta: "новый максимум", up: true, points: [90, 130, 170, 210, 250, 285, 312] },
      { label: "Готовность", value: 88, suffix: "%", delta: "34 п.п.", up: true, points: [42, 52, 61, 70, 78, 84, 88] },
      { label: "Ждут ответа", value: 4, suffix: "", delta: "16 за семестр", up: false, down: true, points: [20, 17, 14, 11, 8, 6, 4] },
    ],
    series: [
      { name: "Дипломная — Глава 2", active: true, pts: [12, 34, 55, 74, 88], proj: 96 },
      { name: "Исследование аудитории", pts: [10, 24, 40, 54, 66] },
      { name: "Прототип кабинета", pts: [8, 18, 30, 42, 52] },
    ],
    readiness: 88, readinessDelta: "+34 п.п.", remaining: 12,
    growth: [
      { label: "Аргументация", pct: 84, delta: "+20" },
      { label: "Структура текста", pct: 76, delta: "+30" },
      { label: "Визуальные доказательства", pct: 52, delta: "+18", priority: true },
      { label: "Цитирование", pct: 90, delta: "+12" },
    ],
    ai: { title: "ИИ-сводка семестра", time: "вчера",
      text: "За\u00a0семестр готовность выросла на\u00a034 п.п. — сильнейший прогресс в\u00a0структуре и\u00a0аргументации. Визуальные доказательства подтянулись, но\u00a0остаются зоной роста. Отличная динамика ответов на\u00a0циклы.",
      rows: [["Структура текста", 5], ["Доказательность", 4], ["Визуальные данные", 3], ["Следующий шаг", 4]] },
  },
};

/* ============================ animation helpers ============================ */
/* tween a number toward `target` whenever it changes — gives the ticking / typewriter feel */
function useCountUp(target, duration = 850) {
  const [val, setVal] = React.useState(target);
  const fromRef = React.useRef(target);
  React.useEffect(() => {
    const from = fromRef.current, to = target;
    if (from === to) { setVal(to); return; }
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = from + (to - from) * eased;
      setVal(cur);
      if (p < 1) raf = requestAnimationFrame(step);
      else { fromRef.current = to; setVal(to); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}
function CountNumber({ value, suffix, style }) {
  const v = useCountUp(value);
  return <span style={style}>{Math.round(v)}{suffix || ""}</span>;
}

/* draws a stroke path from start to end on mount via stroke-dashoffset */
function DrawPath({ d, dur = 950, delay = 0, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let len;
    try { len = el.getTotalLength(); } catch (e) { return; }
    el.style.strokeDasharray = len + " " + len;
    el.style.strokeDashoffset = String(len);
    el.getBoundingClientRect(); // force reflow
    el.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    requestAnimationFrame(() => { if (ref.current) ref.current.style.strokeDashoffset = "0"; });
  }, []);
  return <path ref={ref} d={d} {...rest} />;
}

/* delta pill — small caret + value, green up / ruby down */
function Delta({ value, up, onDark }) {
  const pos = up;
  const bg = onDark ? "rgba(255,255,255,0.1)" : pos ? "var(--success-subtle)" : "var(--danger-subtle)";
  const fg = onDark ? "#fff" : pos ? "var(--success)" : "var(--danger)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: "var(--r-full)", background: bg, color: fg, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
      <span style={{ fontSize: 9, lineHeight: 1 }}>{pos ? "▲" : "▼"}</span>{value}
    </span>
  );
}

/* clean sparkline — straight polyline + end node + subtle area. Remounted per period so the line redraws. */
function Sparkline({ points, color }) {
  const W = 132, H = 46, pad = 4;
  const min = Math.min(...points), max = Math.max(...points), r = (max - min) || 1;
  const pts = points.map((y, i) => [pad + (i / (points.length - 1)) * (W - pad * 2), pad + (1 - (y - min) / r) * (H - pad * 2)]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const fill = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${H} L${pts[0][0].toFixed(1)} ${H} Z`;
  const end = pts[pts.length - 1];
  const id = "sg" + color.replace(/\W/g, "");
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShown(true), 520); return () => clearTimeout(t); }, []);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="xMaxYMid meet" style={{ display: "block", overflow: "hidden", maxWidth: W }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.18" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#${id})`} style={{ opacity: shown ? 1 : 0, transition: "opacity 450ms ease" }} />
      <DrawPath d={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" dur={850} />
      <circle cx={end[0]} cy={end[1]} r="3.5" fill={color} stroke="var(--surface)" strokeWidth="1.5" style={{ opacity: shown ? 1 : 0, transition: "opacity 350ms ease" }} />
    </svg>
  );
}

function StatCard({ animKey, label, value, suffix, delta, up, points, down }) {
  const color = down ? "var(--primary)" : "var(--info)";
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 20, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--fg-muted)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
        <CountNumber value={value} suffix={suffix} style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, lineHeight: 1, color: "var(--fg)", letterSpacing: "-0.02em", flexShrink: 0, fontVariantNumeric: "tabular-nums" }} />
        <div style={{ flex: "1 1 auto", minWidth: 0, maxWidth: 132, display: "flex", justifyContent: "flex-end" }}><Sparkline key={animKey} points={points} color={color} /></div>
      </div>
      <Delta value={delta} up={up} />
    </div>
  );
}

/* ---- progress map chart (right side) ---- */
function ProgressChart({ series, proj }) {
  const W = 640, H = 360, L = 44, R = 52, T = 44, B = 44;
  const ix = (i) => L + (i / 5) * (W - L - R);
  const iy = (p) => T + (1 - p / 100) * (H - T - B);
  const toPath = (pts) => pts.map((p, i) => (i ? "L" : "M") + ix(i) + " " + iy(p)).join(" ");
  const active = series.find((s) => s.active);
  const muted = series.filter((s) => !s.active);
  const mutedColors = ["rgba(255,255,255,0.45)", "rgba(255,255,255,0.28)"];
  const last = active.pts.length - 1;
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShown(true), 520); return () => clearTimeout(t); }, []);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", overflow: "visible", fontFamily: "var(--font-sans)" }}>
      {/* gridlines */}
      {[0, 25, 50, 75, 100].map((g) => (
        <g key={g}>
          <line x1={L} y1={iy(g)} x2={W - R} y2={iy(g)} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x={W - R + 10} y={iy(g) + 4} fill="rgba(255,255,255,0.4)" fontSize="12">{g}</text>
        </g>
      ))}
      {/* iteration axis */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <text key={i} x={ix(i)} y={H - 16} fill="rgba(255,255,255,0.45)" fontSize="13" textAnchor="middle">{i + 1}</text>
      ))}
      {/* muted comparison lines (dashed) — fade in */}
      {muted.map((s, si) => (
        <g key={si} style={{ opacity: shown ? 1 : 0, transition: "opacity 500ms ease" }}>
          <path d={toPath(s.pts)} fill="none" stroke={mutedColors[si] || mutedColors[1]} strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" strokeLinejoin="round" />
          {s.pts.map((p, i) => <circle key={i} cx={ix(i)} cy={iy(p)} r="2.5" fill={mutedColors[si] || mutedColors[1]} />)}
        </g>
      ))}
      {/* active ruby line — draws from start to end */}
      <g>
        <path d={`M${ix(last)} ${iy(active.pts[last])} L${ix(5)} ${iy(proj)}`} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeDasharray="2 6" strokeLinecap="round" style={{ opacity: shown ? 0.7 : 0, transition: "opacity 500ms ease" }} />
        <DrawPath d={toPath(active.pts)} fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" dur={1100} />
        {active.pts.map((p, i) => (
          <g key={i} style={{ opacity: shown ? 1 : 0, transition: "opacity 400ms ease" }}>
            <circle cx={ix(i)} cy={iy(p)} r={i === last ? 6 : 4} fill={i === last ? "var(--primary)" : "var(--surface-dark)"} stroke="var(--primary)" strokeWidth="2.5" />
            <text x={ix(i)} y={iy(p) - 14} fill="#fff" fontSize="13" fontWeight="600" textAnchor="middle">{p}%</text>
          </g>
        ))}
        {/* projection node */}
        <g style={{ opacity: shown ? 1 : 0, transition: "opacity 500ms ease" }}>
          <circle cx={ix(5)} cy={iy(proj)} r="5" fill="none" stroke="var(--primary)" strokeWidth="2.5" opacity="0.8" />
          <text x={ix(5)} y={iy(proj) - 14} fill="rgba(255,255,255,0.8)" fontSize="13" fontWeight="600" textAnchor="middle">{proj}%</text>
        </g>
        {/* tooltip on active node */}
        <g style={{ opacity: shown ? 1 : 0, transition: "opacity 500ms ease" }}>
          <rect x={ix(last) - 50} y={iy(active.pts[last]) - 50} width="100" height="24" rx="12" fill="var(--primary)" />
          <text x={ix(last)} y={iy(active.pts[last]) - 33} fill="#fff" fontSize="12.5" fontWeight="600" textAnchor="middle">ждёт ответа</text>
        </g>
      </g>
    </svg>
  );
}

function Legend({ series }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 4 }}>
      {series.map((s, i) => {
        const c = s.active ? "var(--primary)" : i === 1 ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.28)";
        return (
          <span key={s.name} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-sans)", fontSize: 13, color: s.active ? "#fff" : "rgba(255,255,255,0.6)" }}>
            <span style={{ width: 14, height: 3, borderRadius: 2, background: c }}></span>{s.name}
          </span>
        );
      })}
    </div>
  );
}

function ProgressMap({ data, animKey, onAnswer }) {
  return (
    <div style={{ background: "var(--surface-dark)", borderRadius: "var(--r-3xl)", padding: 32, display: "grid", gridTemplateColumns: "320px 1fr", gap: 32, color: "#fff" }}>
      {/* left rail */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
        <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: "var(--r-full)", background: "rgba(255,255,255,0.08)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }}></span>{data.iterLabel}
        </span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em" }}><span style={{ color: "#fff" }}>Карта прогресса</span></h2>
        <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.65)" }}>
          Узлы — артефакты и&nbsp;версии. Линии — итерации обратной связи. Красный — активный цикл, ждёт вашего ответа.
        </p>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-xl)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Готовность по&nbsp;AI-оценке</span>
            <Delta value={data.readinessDelta} up onDark />
          </div>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 40, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}><CountNumber value={data.readiness} />
            <span style={{ fontSize: 22, color: "rgba(255,255,255,0.6)" }}>%</span></span>
          <div style={{ height: 6, borderRadius: "var(--r-full)", background: "rgba(255,255,255,0.15)", overflow: "hidden" }}>
            <div style={{ width: data.readiness + "%", height: "100%", background: "#fff", borderRadius: "var(--r-full)", transition: "width 900ms cubic-bezier(0.16,1,0.3,1)" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
            <span>Дипломная — Глава 2</span><span>осталось {data.remaining}%</span>
          </div>
        </div>
        <button onClick={onAnswer} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, border: "none", cursor: "pointer", textAlign: "left", background: "var(--primary)", color: "#fff", borderRadius: "var(--r-xl)", padding: "14px 18px", boxShadow: "var(--shadow-primary)" }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.75)" }}>СЛЕДУЮЩИЙ ШАГ · СЕГОДНЯ</span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17 }}>Ответить на&nbsp;цикл — Глава 2</span>
          </span>
          {HIcon("arrow-right", 20)}
        </button>
      </div>
      {/* chart */}
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
        <ProgressChart key={animKey} series={data.series} proj={data.series.find((s) => s.active).proj} />
        <Legend series={data.series} />
      </div>
    </div>
  );
}

/* ---- growth zones — consistent rows ---- */
function GrowthRow({ label, pct, delta, priority, last }) {
  const color = priority ? "var(--primary)" : "var(--fg)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "16px 0", borderBottom: last ? "none" : "1px solid var(--border)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ flex: 1, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--fg)" }}>{label}</span>
        {priority && <span style={{ padding: "2px 10px", borderRadius: "var(--r-full)", background: "var(--primary-subtle)", color: "var(--primary)", border: "1px solid var(--primary-border)", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600 }}>приоритет</span>}
        <Delta value={delta} up />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ position: "relative", flex: 1, height: 6, borderRadius: "var(--r-full)", background: "var(--input)" }}>
          <div style={{ width: pct + "%", height: "100%", borderRadius: "var(--r-full)", background: color, transition: "width 900ms cubic-bezier(0.16,1,0.3,1)" }}></div>
        </div>
        <CountNumber value={pct} suffix="%" style={{ minWidth: 46, textAlign: "right", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "var(--fg)", fontVariantNumeric: "tabular-nums" }} />
      </div>
    </div>
  );
}

function GrowthZones({ rows }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 28, display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", paddingBottom: 8 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--fg)" }}>Зоны роста</h3>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>по&nbsp;AI-анализу комментариев · обновлено сегодня</span>
        </div>
        <button style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--primary)" }}>Подробнее {HIcon("arrow-right", 15)}</button>
      </div>
      {rows.map((r, i) => <GrowthRow key={r.label} {...r} last={i === rows.length - 1} />)}
    </div>
  );
}

/* ---- AI summary ---- */
function Dots({ filled }) {
  return (
    <span style={{ display: "inline-flex", gap: 4 }}>
      {[0,1,2,3,4].map((i) => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i < filled ? "#fff" : "rgba(255,255,255,0.22)", transition: "background 400ms ease" }}></span>)}
    </span>
  );
}
function AiSummary({ ai, animKey, onOpen }) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => { setShown(false); const r = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true))); return () => cancelAnimationFrame(r); }, [animKey]);
  return (
    <div style={{ background: "var(--surface-dark)", borderRadius: "var(--r-3xl)", padding: 28, display: "flex", flexDirection: "column", gap: 18, color: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 40, height: 40, borderRadius: "var(--r-lg)", background: "rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{HIcon("sparkle", 20)}</span>
        <div style={{ lineHeight: 1.2 }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24 }}><span style={{ color: "#fff" }}>{ai.title}</span></h3>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{ai.time}</span>
        </div>
      </div>
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.82)", opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(6px)", transition: "opacity 500ms ease, transform 500ms ease" }}>
        {ai.text}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {ai.rows.map(([l, f], i) => (
          <div key={l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: i === ai.rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.85)" }}>{l}</span>
            <Dots filled={f} />
          </div>
        ))}
      </div>
      <button onClick={onOpen} style={{ marginTop: 4, width: "100%", border: "none", cursor: "pointer", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "var(--r-full)", padding: "13px 18px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Открыть разбор {HIcon("arrow-right", 16)}</button>
    </div>
  );
}

function Segmented({ items, value, onChange }) {
  return (
    <div style={{ display: "inline-flex", gap: 2, padding: 4, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-full)" }}>
      {items.map((it) => {
        const on = it === value;
        return <button key={it} onClick={() => onChange(it)} style={{ border: "none", cursor: "pointer", padding: "7px 18px", borderRadius: "var(--r-full)", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, background: on ? "var(--surface)" : "transparent", color: on ? "var(--fg)" : "var(--fg-muted)", boxShadow: on ? "var(--shadow-xs)" : "none", transition: "all var(--dur-fast) var(--ease-standard)" }}>{it}</button>;
      })}
    </div>
  );
}

function HomeScreen({ onNavigate }) {
  const [period, setPeriod] = React.useState("Неделя");
  const data = DATA[period];
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1280, margin: "0 auto", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 48, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--fg)" }}>Главная</h1>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-muted)" }}>{data.sub}</span>
        </div>
        <div style={{ marginTop: 6, flexShrink: 0 }}><Segmented items={["Неделя", "Месяц", "Семестр"]} value={period} onChange={setPeriod} /></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {data.stats.map((s) => <StatCard key={s.label} animKey={period} {...s} />)}
      </div>

      <ProgressMap data={data} animKey={period} onAnswer={() => onNavigate && onNavigate("cycles")} />

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 22, alignItems: "start" }}>
        <GrowthZones rows={data.growth} />
        <AiSummary ai={data.ai} animKey={period} onOpen={() => {}} />
      </div>
    </div>
  );
}

window.FukoHome = { HomeScreen };
})();
