/* FUKO — "Мои циклы" screen (Figma node 2698-48139 recreation).
   Self-contained shell + screen. Exposes window.FukoMyCycles. */
const MNS = window.FUKODesignSystem_23dd6b;
const { Logo, NavItem, Avatar, Button, IconButton, Input, Separator } = MNS;
const MIcon = (n, size = 18, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw }}></i>;

/* ---------------- data ---------------- */
const STATUS = {
  action:  { label: "Требует действия", dot: "var(--primary)" },
  waiting: { label: "Ждут ответа",      dot: "var(--warning)" },
  inwork:  { label: "В работе",          dot: "var(--info)" },
  done:    { label: "Завершён",          dot: "var(--success)" },
};

const CYCLES = [
  { id: 1, status: "action",  cycle: 2, title: "Курсовая: анализ поведения пользователей", course: "Методология исследования",  teacher: "Анна Иоанновна С.",     date: "28 мар" },
  { id: 2, status: "action",  cycle: 1, title: "Эссе: этика искусственного интеллекта",   course: "Философия техники",       teacher: "Екатерина Кирилловна К.", date: "30 мар" },
  { id: 3, status: "waiting", cycle: 4, title: "Дипломная — Глава 2: обзор литературы",          course: "Научный семинар",          teacher: "Пётр Сергеевич М.",     date: "2 апр" },
  { id: 4, status: "waiting", cycle: 2, title: "Лабораторная: колебания маятника",          course: "Общая физика",            teacher: "Виталий Сергеевич О.",  date: "3 апр" },
  { id: 5, status: "inwork",  cycle: 3, title: "Исследование аудитории: интервью",               course: "UX-исследования",          teacher: "Елена Викторовна Т.", date: "5 апр" },
  { id: 6, status: "inwork",  cycle: 2, title: "Курсовая: инфляция и безработица",          course: "Макроэкономика",           teacher: "Даниил Олегович П.",   date: "6 апр" },
  { id: 7, status: "done",    cycle: 4, title: "Прототип личного кабинета студента",             course: "Проектный практикум",      teacher: "Игорь Павлович Д.",    date: "20 мар" },
  { id: 8, status: "done",    cycle: 3, title: "Реферат: реформы 1860-х годов",             course: "История России",          teacher: "Роман Игоревич А.",     date: "15 мар" },
];

const FILTERS = [
  { id: "all",     label: "Все" },
  { id: "action",  label: "Требуют действия" },
  { id: "waiting", label: "Ждут ответа" },
  { id: "inwork",  label: "В работе" },
  { id: "done",    label: "Завершённые" },
];

/* ---------------- small primitives ---------------- */
function Segmented({ items, value, onChange }) {
  return (
    <div style={{ display: "inline-flex", gap: 2, padding: 4, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-full)" }}>
      {items.map((it) => {
        const on = it === value;
        return (
          <button key={it} onClick={() => onChange(it)} style={{
            border: "none", cursor: "pointer", padding: "7px 18px", borderRadius: "var(--r-full)",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
            background: on ? "var(--surface)" : "transparent",
            color: on ? "var(--fg)" : "var(--fg-muted)",
            boxShadow: on ? "var(--shadow-xs)" : "none",
            transition: "all var(--dur-fast) var(--ease-standard)",
          }}>{it}</button>
        );
      })}
    </div>
  );
}

function FilterPill({ label, count, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer",
      padding: "8px 14px", borderRadius: "var(--r-full)",
      fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
      background: active ? "var(--primary)" : "var(--surface)",
      color: active ? "var(--primary-fg)" : "var(--fg-muted)",
      border: active ? "1px solid var(--primary)" : "1px solid var(--border)",
      transition: "all var(--dur-fast) var(--ease-standard)",
    }}>
      {label}
      <span style={{
        minWidth: 18, height: 18, padding: "0 5px", boxSizing: "border-box",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--r-full)", fontSize: 12, fontWeight: 600,
        background: active ? "rgba(255,255,255,0.22)" : "var(--surface-2)",
        color: active ? "var(--primary-fg)" : "var(--fg-subtle)",
      }}>{count}</span>
    </button>
  );
}

function CycleTile({ c, onOpen }) {
  const st = STATUS[c.status];
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", gap: 14, cursor: "pointer",
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)", padding: 20,
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      }}>
      {/* top row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 11px 5px 9px", borderRadius: "var(--r-full)", background: "var(--surface-2)", border: "1px solid var(--border)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", border: `2px solid ${st.dot}`, boxSizing: "border-box" }}></span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>{st.label}</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 13 }}>
          {MIcon("refresh-cw", 14)} Цикл {c.cycle}
        </span>
      </div>
      {/* body */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 19, lineHeight: 1.25, color: "var(--fg)" }}>{c.title}</h3>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>{c.course}</span>
      </div>
      {/* footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar name={c.teacher} size="default" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{c.teacher}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--primary)" }}>{c.date}</span>
          </div>
        </div>
        <span style={{
          width: 38, height: 38, flexShrink: 0, borderRadius: "var(--r-full)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          border: "1px solid var(--border)",
          background: hover ? "var(--primary)" : "var(--surface-2)",
          color: hover ? "var(--primary-fg)" : "var(--fg-muted)",
          transition: "all var(--dur-base) var(--ease-standard)",
        }}>{MIcon("arrow-right", 17)}</span>
      </div>
    </div>
  );
}

function CycleRow({ c, onOpen }) {
  const st = STATUS[c.status];
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 16, cursor: "pointer",
        background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)",
        padding: "14px 18px", boxShadow: hover ? "var(--shadow-sm)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard)",
      }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", border: `2px solid ${st.dot}`, boxSizing: "border-box", flexShrink: 0 }}></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: "var(--fg)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.title}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{c.course} · {st.label}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 13, flexShrink: 0 }}>
        {MIcon("refresh-cw", 14)} Цикл {c.cycle}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: 200, flexShrink: 0 }}>
        <Avatar name={c.teacher} size="sm" />
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>{c.teacher}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--primary)" }}>{c.date}</div>
        </div>
      </div>
      <span style={{ color: "var(--fg-muted)", display: "flex", flexShrink: 0 }}>{MIcon("arrow-right", 17)}</span>
    </div>
  );
}

/* ---------------- sidebar ---------------- */
function RecentItem({ title, sub }) {
  return (
    <button style={{
      display: "flex", alignItems: "flex-start", gap: 10, width: "100%", textAlign: "left",
      border: "none", background: "transparent", cursor: "pointer", padding: "7px 8px", borderRadius: "var(--r-lg)",
    }}
      onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface-2)"}
      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
      <span style={{ color: "var(--fg-subtle)", marginTop: 1, display: "flex" }}>{MIcon("refresh-cw", 15)}</span>
      <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-subtle)" }}>{sub}</span>
      </span>
    </button>
  );
}

/* collapsed-rail icon button */
function RailItem({ icon, label, active, badge, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} title={label} aria-label={label}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", width: 44, height: 44, border: "none", cursor: "pointer",
        borderRadius: "var(--r-lg)", display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: active ? "var(--surface-2)" : hover ? "var(--surface-2)" : "transparent",
        color: active ? "var(--fg)" : "var(--fg-muted)",
        transition: "background var(--dur-fast) var(--ease-standard)",
      }}>
      {MIcon(icon, 20)}
      {badge > 0 && (
        <span style={{
          position: "absolute", top: 4, right: 4, minWidth: 8, height: 8, borderRadius: "var(--r-full)",
          background: "var(--primary)", border: "2px solid var(--surface)", boxSizing: "content-box",
        }}></span>
      )}
    </button>
  );
}

function Sidebar({ active, onNavigate }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [logoHover, setLogoHover] = React.useState(false);
  React.useLayoutEffect(() => { window.lucide && window.lucide.createIcons(); }, [collapsed, logoHover, active]);
  const nav = [
    { id: "home", icon: "house", label: "Главная" },
    { id: "cycles", icon: "refresh-cw", label: "Циклы" },
    { id: "chats", icon: "message-circle", label: "Чаты", badge: 12 },
    { id: "people", icon: "users", label: "Персоналии" },
    { id: "artifacts", icon: "file", label: "Артефакты" },
    { id: "analytics", icon: "bar-chart-3", label: "Аналитика" },
    { id: "knowledge", icon: "sparkle", label: "База знаний" },
  ];

  if (collapsed) {
    return (
      <aside style={{
        width: 76, flexShrink: 0, height: "100%", boxSizing: "border-box",
        background: "var(--surface)", borderRight: "1px solid var(--border)",
        display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 8,
      }}>
        {/* logo → expand toggle on hover */}
        <button onClick={() => setCollapsed(false)} aria-label="Развернуть меню"
          onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)}
          style={{
            width: 52, height: 52, border: "none", cursor: "pointer", marginBottom: 12,
            borderRadius: "var(--r-xl)", display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: logoHover ? "var(--surface-2)" : "transparent",
            color: "var(--fg)", transition: "background var(--dur-fast) var(--ease-standard)",
          }}>
          {logoHover
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /></svg>
            : <Logo size={40} showWordmark={false} />}
        </button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          {nav.map((n) => (
            <RailItem key={n.id} icon={n.icon} label={n.label} badge={n.badge}
              active={active === n.id} onClick={() => onNavigate && onNavigate(n.id)} />
          ))}
        </div>
        <div style={{ marginTop: "auto" }}>
          <Avatar src={(window.__resources && window.__resources.avatarAB) || "assets/people/alexey-borisov.png"} name="Алексей Борисов" size="default" status="online" />
        </div>
      </aside>
    );
  }

  return (
    <aside style={{
      width: 280, flexShrink: 0, height: "100%", boxSizing: "border-box",
      background: "var(--surface)", borderRight: "1px solid var(--border)",
      display: "flex", flexDirection: "column", padding: 16, gap: 6,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 44, marginBottom: 10 }}>
        <Logo size={34} />
        <IconButton variant="ghost" ariaLabel="Свернуть" onClick={() => setCollapsed(true)}>{MIcon("panel-left", 18)}</IconButton>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {nav.map((n) => (
          <NavItem key={n.id} icon={MIcon(n.icon)} label={n.label} badge={n.badge}
            active={active === n.id} onClick={() => onNavigate && onNavigate(n.id)} />
        ))}
      </div>
      <Separator style={{ margin: "12px 0" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <RecentItem title="Дипломная — Глава 2" sub="цикл 4/6" />
        <RecentItem title="Исследование аудитории" sub="цикл 2/4" />
        <RecentItem title="Прототип кабинета" sub="цикл 1/3" />
      </div>
      <div style={{ marginTop: "auto", paddingTop: 12 }}>
        <Separator style={{ marginBottom: 12 }} />
        <button style={{
          display: "flex", alignItems: "center", gap: 11, width: "100%", border: "none", cursor: "pointer",
          background: "transparent", padding: "6px 6px", borderRadius: "var(--r-lg)",
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface-2)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
          <Avatar src={(window.__resources && window.__resources.avatarAB) || "assets/people/alexey-borisov.png"} name="Алексей Борисов" size="default" status="online" />
          <span style={{ display: "flex", flexDirection: "column", minWidth: 0, textAlign: "left" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap" }}>Алексей Борисов</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>3 курс · Дизайн</span>
          </span>
          <span style={{ marginLeft: "auto", color: "var(--fg-subtle)", display: "flex" }}>{MIcon("chevron-down", 16)}</span>
        </button>
      </div>
    </aside>
  );
}

/* ---------------- topbar ---------------- */
function ThemeIcon({ dark }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  return dark
    ? <svg {...common}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
    : <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>;
}
function Topbar({ onCreate, onNotifications, dark, onToggleTheme }) {
  return (
    <header style={{
      height: 76, flexShrink: 0, boxSizing: "border-box",
      display: "flex", alignItems: "center", gap: 14, padding: "0 32px",
      background: "var(--bg)",
    }}>
      <div style={{ flex: 1 }}>
        <Input placeholder="Найти цикл, артефакт, ответ или преподавателя…" iconLeft={MIcon("search", 17)} />
      </div>
      <IconButton variant="outline" ariaLabel={dark ? "Светлая тема" : "Тёмная тема"} onClick={onToggleTheme}><ThemeIcon dark={dark} /></IconButton>
      <span style={{ position: "relative", display: "inline-flex" }}>
        <IconButton variant="outline" ariaLabel="Уведомления" onClick={onNotifications}>{MIcon("bell", 18)}</IconButton>
        <span style={{ position: "absolute", top: 6, right: 7, width: 8, height: 8, borderRadius: "var(--r-full)", background: "var(--primary)", border: "2px solid var(--bg)", boxSizing: "content-box", pointerEvents: "none" }}></span>
      </span>
      <Button variant="primary" iconLeft={MIcon("plus", 16)} onClick={onCreate}>Создать цикл</Button>
    </header>
  );
}

/* ---------------- screen ---------------- */
function MyCycles({ onCreate, onOpenCycle }) {
  const [period, setPeriod] = React.useState("Неделя");
  const [filter, setFilter] = React.useState("all");
  const [view, setView] = React.useState("grid");

  const counts = React.useMemo(() => {
    const c = { all: CYCLES.length };
    FILTERS.slice(1).forEach((f) => { c[f.id] = CYCLES.filter((x) => x.status === f.id).length; });
    return c;
  }, []);
  const shown = filter === "all" ? CYCLES : CYCLES.filter((c) => c.status === filter);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 1240, margin: "0 auto" }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 48, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--fg)" }}>Мои циклы</h1>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-muted)" }}>Все циклы обратной связи по учебным работам · 6 циклов в портфеле</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6, flexShrink: 0 }}>
          <Segmented items={["Неделя", "Месяц", "Семестр"]} value={period} onChange={setPeriod} />
          <Button variant="primary" iconLeft={MIcon("plus", 16)} onClick={onCreate}>Создать цикл</Button>
        </div>
      </div>

      {/* search + view controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <Input placeholder="Найти цикл, артефакт, ответ или преподавателя…" iconLeft={MIcon("search", 17)} />
        </div>
        <IconButton variant="outline" ariaLabel="Фильтры">{MIcon("sliders-horizontal", 18)}</IconButton>
        <div style={{ display: "inline-flex", gap: 2, padding: 4, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)" }}>
          {[["grid", "layout-grid"], ["list", "list"]].map(([v, ic]) => (
            <button key={v} onClick={() => setView(v)} aria-label={v} style={{
              width: 36, height: 32, border: "none", cursor: "pointer", borderRadius: "var(--r-md)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: view === v ? "var(--surface)" : "transparent",
              color: view === v ? "var(--fg)" : "var(--fg-muted)",
              boxShadow: view === v ? "var(--shadow-xs)" : "none",
              transition: "all var(--dur-fast) var(--ease-standard)",
            }}>{MIcon(ic, 17)}</button>
          ))}
        </div>
      </div>

      {/* filter pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {FILTERS.map((f) => (
          <FilterPill key={f.id} label={f.label} count={counts[f.id] ?? 0}
            active={filter === f.id} onClick={() => setFilter(f.id)} />
        ))}
      </div>

      {/* results */}
      {view === "grid" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 18 }}>
          {shown.map((c) => <CycleTile key={c.id} c={c} onOpen={() => onOpenCycle && onOpenCycle(c)} />)}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {shown.map((c) => <CycleRow key={c.id} c={c} onOpen={() => onOpenCycle && onOpenCycle(c)} />)}
        </div>
      )}
    </div>
  );
}

function MyCyclesApp() {
  const [nav, setNav] = React.useState("cycles");
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ display: "flex", height: "100%", width: "100%", background: "var(--bg)", overflow: "hidden" }}>
      <Sidebar active={nav} onNavigate={setNav} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", height: "100%" }}>
        <Topbar onCreate={() => {}} />
        <main style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 40px 40px" }}>
          <MyCycles onCreate={() => {}} />
        </main>
      </div>
    </div>
  );
}

window.FukoMyCycles = { MyCyclesApp, MyCycles, Sidebar, Topbar };
