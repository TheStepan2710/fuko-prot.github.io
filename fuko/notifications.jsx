/* FUKO — Notifications drawer (slides in from right). Exposes window.FukoNotifications. */
(() => {
const NNS = window.FUKODesignSystem_23dd6b;
const { IconButton } = NNS;
const NIcon = (n, size = 18, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw, flexShrink: 0 }}></i>;

const TYPE_ICON = {
  mail:    { icon: "mail",        bg: "var(--icon-neutral-bg)", fg: "var(--icon-neutral-fg)" },
  comment: { icon: "message-circle", bg: "var(--brand-soft)", fg: "var(--primary)" },
  cycle:   { icon: "refresh-cw",  bg: "var(--success-subtle)", fg: "var(--success)" },
  mention: { icon: "at-sign",     bg: "var(--info-subtle)", fg: "var(--info)" },
};

const NOTES = [
  { id: 1, type: "mail",    title: "Курсовая: экзопланеты", text: "Предварительно — нужно обосновать метод поиска", time: "14:20", unread: true,  tab: "unread" },
  { id: 2, type: "comment", title: "Дипломная — Глава 2",   text: "Кристина Юрьевна оставила 3 комментария к черновику", time: "14:20", unread: true,  tab: "unread" },
  { id: 3, type: "mention", title: "Научный семинар",        text: "Пётр Сергеевич упомянул вас в обсуждении главы 2", time: "13:05", unread: false, tab: "mention" },
  { id: 4, type: "cycle",   title: "Расчёты и графики",       text: "Цикл 3 завершён — готовность выросла до 84%",       time: "12:40", unread: false, tab: "all" },
  { id: 5, type: "mail",    title: "Эссе: правовые коллизии", text: "Аркаправо Г. согласовал список источников",        time: "11:18", unread: false, tab: "all" },
  { id: 6, type: "mention", title: "Анкета для опроса",        text: "Екатерина Александровна упомянула вас в правках",   time: "Вчера", unread: false, tab: "mention" },
  { id: 7, type: "comment", title: "Прототип кабинета",        text: "Игорь Павлович отметил готовность к защите",       time: "Вчера", unread: false, tab: "all" },
  { id: 8, type: "cycle",   title: "Лабораторная: маятник",    text: "Отчёт принят — замечаний больше нет",               time: "2 апр", unread: false, tab: "all" },
];

const TABS = [
  { id: "all", label: "Все" },
  { id: "unread", label: "Непрочитанные" },
  { id: "mention", label: "Упоминания" },
  { id: "archive", label: "Архивные" },
];

function NoteRow({ n, last }) {
  const conf = TYPE_ICON[n.type];
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 24px", cursor: "pointer",
        background: hover ? "var(--surface-2)" : "transparent",
        borderBottom: last ? "none" : "1px solid var(--border)",
        transition: "background var(--dur-fast) var(--ease-standard)",
      }}>
      <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: "var(--r-lg)", background: conf.bg, color: conf.fg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{NIcon(conf.icon, 20)}</span>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{n.title}</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.4, color: "var(--fg-muted)" }}>{n.text}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-subtle)" }}>{n.time}</span>
        {n.unread && <span style={{ width: 8, height: 8, borderRadius: "var(--r-full)", background: "var(--primary)" }}></span>}
      </div>
    </div>
  );
}

function NotificationsDrawer({ open, onClose }) {
  const [tab, setTab] = React.useState("all");
  React.useEffect(() => { if (open) window.lucide && window.lucide.createIcons(); });
  const unreadCount = NOTES.filter((n) => n.unread).length;
  const shown = NOTES.filter((n) => {
    if (tab === "all") return true;
    if (tab === "unread") return n.unread;
    if (tab === "mention") return n.type === "mention";
    if (tab === "archive") return false;
    return true;
  });

  return (
    <div aria-hidden={!open} style={{ position: "fixed", inset: 0, zIndex: 60, pointerEvents: open ? "auto" : "none" }}>
      {/* scrim */}
      <div onClick={onClose} style={{
        position: "absolute", inset: 0, background: "rgba(20,16,16,0.32)",
        opacity: open ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-standard)",
      }}></div>
      {/* panel */}
      <aside style={{
        position: "absolute", top: 0, right: 0, height: "100%", width: 480, maxWidth: "92vw",
        background: "var(--surface)", borderLeft: "1px solid var(--border)", boxShadow: "var(--shadow-2xl)",
        display: "flex", flexDirection: "column", boxSizing: "border-box",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-slow) var(--ease-out)",
      }}>
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "22px 24px 16px" }}>
          <span style={{ width: 40, height: 40, borderRadius: "var(--r-lg)", background: "var(--brand-soft)", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{NIcon("bell", 20)}</span>
          <h2 style={{ flex: 1, margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.01em", color: "var(--fg)" }}>Уведомления</h2>
          <IconButton variant="ghost" ariaLabel="Настройки">{NIcon("settings", 18)}</IconButton>
          <IconButton variant="ghost" ariaLabel="Закрыть" onClick={onClose}>{NIcon("x", 18)}</IconButton>
        </div>
        {/* tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 24px 16px" }}>
          <div style={{ flex: 1, display: "flex", gap: 2, padding: 4, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-full)", overflow: "hidden" }}>
            {TABS.map((t) => {
              const on = tab === t.id;
              return (
                <button key={t.id} onClick={() => setTab(t.id)} style={{
                  flex: 1, border: "none", cursor: "pointer", padding: "8px 10px", borderRadius: "var(--r-full)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, whiteSpace: "nowrap",
                  fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
                  background: on ? "var(--surface)" : "transparent",
                  color: on ? "var(--fg)" : "var(--fg-muted)",
                  boxShadow: on ? "var(--shadow-xs)" : "none",
                  transition: "all var(--dur-fast) var(--ease-standard)",
                }}>
                  {t.label}
                  {t.id === "unread" && unreadCount > 0 && (
                    <span style={{ minWidth: 18, height: 18, padding: "0 5px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--r-full)", background: on ? "var(--primary)" : "var(--border)", color: on ? "var(--primary-fg)" : "var(--fg-muted)", fontSize: 12, fontWeight: 600 }}>{unreadCount}</span>
                  )}
                </button>
              );
            })}
          </div>
          <IconButton variant="outline" ariaLabel="Ещё">{NIcon("more-horizontal", 18)}</IconButton>
        </div>
        {/* list */}
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          {shown.length === 0 ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "var(--fg-subtle)", padding: 40 }}>
              {NIcon("inbox", 40, 1.5)}
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 15 }}>Здесь пока пусто</span>
            </div>
          ) : shown.map((n, i) => <NoteRow key={n.id} n={n} last={i === shown.length - 1} />)}
        </div>
        {/* footer */}
        <div style={{ padding: "14px 24px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--primary)" }}>Отметить все прочитанными</button>
          <button style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>Настройки</button>
        </div>
      </aside>
    </div>
  );
}

window.FukoNotifications = { NotificationsDrawer };
})();
