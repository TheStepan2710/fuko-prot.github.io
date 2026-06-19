/* FUKO — "Карточка цикла" (cycle detail / incoming feedback request).
   Full-screen takeover. Exposes window.FukoCycleDetail. */
(() => {
const DNS = window.FUKODesignSystem_23dd6b;
const { Logo, IconButton, Avatar } = DNS;
const DIcon = (n, size = 16, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw, flexShrink: 0 }}></i>;
const AVATAR = (window.__resources && window.__resources.avatarAB) || "assets/people/alexey-borisov.png";

const MAP = [
  { id: "context", label: "Контекст", icon: "check", done: true },
  { id: "material", label: "Материал", icon: "check", active: true },
  { id: "score", label: "Оценка", icon: "circle", todo: true },
  { id: "improve", label: "Улучшения", icon: "circle", todo: true },
];

const SECTIONS = [
  { h: "1. Введение", comment: 1, lead: "Настоящая работа посвящена анализу данных пользователей образовательных платформ. Целью исследования является выявление паттернов взаимодействия студентов с учебными материалами в цифровой среде. Актуальность темы обусловлена стремительным ростом онлайн-образования и необходимостью оптимизации учебных процессов на основе данных.",
    body: "В качестве объекта исследования выбрана платформа LMS университета, содержащая записи активности 1 247 студентов за два учебных семестра (2024–2025). Предметом исследования являются количественные и качественные характеристики взаимодействия пользователей с контентом: время на платформе, частота обращений к материалам, последовательность действий." },
  { h: "2. Методология", comment: 1, lead: "Исследование основано на смешанном методологическом подходе, сочетающем количественный анализ лог-данных и качественные интервью с выборкой из 30 студентов. Для обработки лог-данных использовался Python (библиотеки pandas, scikit-learn). Кластерный анализ проведён методом k-means с предварительной нормализацией признаков.",
    body: "В качестве объекта исследования выбрана платформа LMS университета, содержащая записи активности 1 247 студентов за два учебных семестра (2024–2025). Предметом исследования являются количественные и качественные характеристики взаимодействия пользователей с контентом: время на платформе, частота обращений к материалам, последовательность действий." },
  { h: "3. Результаты", body: "Кластерный анализ выявил четыре устойчивые модели поведения пользователей: (1) «линейные» — последовательно проходят все материалы, (2) «селективные» — выбирают только ключевые темы, (3) «интенсивные» — повторно обращаются к материалам перед дедлайнами, (4) «нерегулярные» — эпизодически взаимодействуют с платформой.",
    body2: "Наиболее высокую академическую успеваемость демонстрируют студенты из кластеров «линейных» и «интенсивных» (средний балл 4.2 и 4.0 соответственно). «Селективные» студенты показывают средний балл 3.6, а «нерегулярные» — 2.9. Различия статистически значимы (p < 0.01)." },
  { h: "4. Выводы", body: "Результаты исследования подтверждают гипотезу о связи паттернов взаимодействия с платформой и академической успеваемостью. Полученные данные могут быть использованы для ранней диагностики студентов из группы риска и персонализации учебного опыта. Рекомендуется внедрение адаптивных уведомлений для «нерегулярных» пользователей." },
];

const COMMENTS = [
  { author: "Проф. Иванова", time: "Вчера", text: "Стоит добавить ссылку на конкретные исследования по росту онлайн-образования." },
  { author: "Проф. Иванова", time: "Вчера", text: "Уточните размер выборки в разделе методологии — сейчас цифра появляется только во введении." },
];
const RESOLVED = [{ author: "Проф. Иванова", text: "Хорошо, что указали ограничения. Можно ещё добавить про размер выборки." }];

const QUESTIONS = [
  "Насколько понятна логика изложения?",
  "Какие места требуют доработки в первую очередь?",
  "Что стоит улучшить перед следующей версией?",
];

/* ---------- left sidebar ---------- */
function MapTile({ t }) {
  const on = t.done || t.active;
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "18px 10px",
      borderRadius: "var(--r-xl)", boxSizing: "border-box",
      background: t.active ? "var(--primary-subtle)" : "var(--surface-2)",
      border: on ? "1.5px solid var(--primary)" : "1px solid var(--border)",
    }}>
      <span style={{ width: 30, height: 30, borderRadius: "var(--r-full)", display: "inline-flex", alignItems: "center", justifyContent: "center", border: on ? "2px solid var(--primary)" : "2px solid var(--border-strong)", color: on ? "var(--primary)" : "var(--fg-subtle)" }}>{DIcon(t.done || t.active ? "check" : "circle", 15)}</span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: on ? "var(--primary)" : "var(--fg-muted)" }}>{t.label}</span>
    </div>
  );
}
function NavRow({ icon, label, onClick }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", border: "none", background: "transparent", cursor: "pointer", padding: "11px 12px", borderRadius: "var(--r-lg)", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: "var(--fg)" }}
      onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface-2)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
      <span style={{ color: "var(--fg-muted)", display: "flex" }}>{DIcon(icon, 18)}</span>{label}
    </button>
  );
}
function Sidebar({ onClose, onOpenChat, onOpenAnalytics, onOpenHistory, respondent }) {
  return (
    <div style={{ width: 300, flexShrink: 0, display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 0 }}>
      <button onClick={onClose} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, border: "none", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-xl)", padding: "13px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, boxShadow: "var(--shadow-primary)" }}>{DIcon("arrow-left", 17)} Назад</button>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg-muted)" }}>Карта цикла</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {MAP.map((t) => <MapTile key={t.id} t={t} />)}
        </div>
      </div>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar name={respondent} size="lg" status="online" />
        <div style={{ flex: 1, minWidth: 0, lineHeight: 1.3 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{respondent}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Добрый день! Можно обс…</div>
        </div>
        <IconButton variant="ghost" ariaLabel="Чат" onClick={onOpenChat}>{DIcon("message-circle", 18)}</IconButton>
      </div>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 8, display: "flex", flexDirection: "column" }}>
        <NavRow icon="bar-chart-3" label="Аналитика" onClick={onOpenAnalytics} />
        <NavRow icon="file" label="Артефакты" />
        <NavRow icon="history" label="История цикла" onClick={onOpenHistory} />
      </div>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg-muted)" }}>Комментарии</span>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-sans)", fontSize: 15 }}><span style={{ color: "var(--fg)" }}>Открытые</span><span style={{ fontWeight: 700, color: "var(--primary)" }}>2</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-sans)", fontSize: 15 }}><span style={{ color: "var(--fg)" }}>Завершённые</span><span style={{ fontWeight: 700, color: "var(--fg-muted)" }}>1</span></div>
      </div>
    </div>
  );
}

/* ---------- main ---------- */
function StatusPill({ text, tone }) {
  const m = { info: ["var(--info-subtle)", "var(--info)"], success: ["var(--success-subtle)", "var(--success)"] }[tone] || ["var(--surface-2)", "var(--fg-muted)"];
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: "var(--r-full)", background: m[0], color: m[1], fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: m[1] }}></span>{text}</span>;
}
function HeaderCard({ respondent, title, course, cycleNum }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 28, display: "flex", gap: 24, justifyContent: "space-between", alignItems: "flex-start" }}>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--fg)" }}></span>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)" }}></span>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-strong)" }}></span>
            <span style={{ marginLeft: 6, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg-muted)" }}>Цикл {cycleNum} из 4</span>
          </span>
          <StatusPill text="Курсовая работа" tone="info" />
          <StatusPill text="Актуально" tone="success" />
        </div>
        <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 38, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1.15 }}>{title}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 28px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>
          <span>Респондент: <b style={{ color: "var(--fg)" }}>{respondent}</b></span>
          <span>Тема: <b style={{ color: "var(--fg)" }}>{course}</b></span>
          <span>Дедлайн: <b style={{ color: "var(--primary)" }}>до 22 мая · через 2 дня</b></span>
        </div>
      </div>
      <div style={{ width: 230, flexShrink: 0, background: "var(--surface-dark)", border: "1px solid var(--surface-dark)", borderRadius: "var(--r-2xl)", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.6)" }}>AI-ОЦЕНКА ГОТОВНОСТИ</span>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "#fff" }}>84%</span>
        </div>
        <div style={{ height: 6, borderRadius: "var(--r-full)", background: "rgba(255,255,255,0.14)", overflow: "hidden" }}><div style={{ width: "84%", height: "100%", background: "var(--primary)", borderRadius: "var(--r-full)" }}></div></div>
        <button style={{ border: "none", background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: "var(--r-md)", padding: "9px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>Подробнее</button>
      </div>
    </div>
  );
}

function CommentBadge({ n }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 13 }}>{DIcon("message-circle", 14)} {n}</span>;
}
function Para({ children }) {
  return <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "var(--fg)" }}>{children}</p>;
}
function MaterialCard() {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 32, display: "flex", flexDirection: "column", gap: 26 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--fg)" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)" }}></span>Материал</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 14 }}>{DIcon("file-text", 16)} Курсовая_работа_v2.pdf · 2.4 МБ</span>
      </div>
      {SECTIONS.map((s, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 18, color: "var(--fg)" }}>{s.h}</h3>
          {s.lead ? (
            <div style={{ position: "relative", background: "var(--surface-2)", borderLeft: "3px solid var(--primary)", borderRadius: "0 var(--r-lg) var(--r-lg) 0", padding: "14px 16px" }}>
              <Para>{s.lead}</Para>
              {s.comment && <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}><CommentBadge n={s.comment} /></div>}
            </div>
          ) : null}
          {s.body && <Para>{s.body}</Para>}
          {s.body2 && <Para>{s.body2}</Para>}
        </div>
      ))}
    </div>
  );
}

function CommentCard({ c, resolved }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: 16, display: "flex", flexDirection: "column", gap: 10, opacity: resolved ? 0.6 : 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{c.author}</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-subtle)" }}>{c.time || (resolved ? "Открыть" : "")}</span>
      </div>
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.45, color: resolved ? "var(--fg-muted)" : "var(--fg)" }}>{c.text}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 2 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--success)" }}>{DIcon("check", 14)} Решено</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{DIcon("corner-down-left", 14)} Ответить</span>
      </div>
    </div>
  );
}
function CommentsRail() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 0 }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>Комментарии</span>
      {COMMENTS.map((c, i) => <CommentCard key={i} c={c} />)}
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)", marginTop: 4 }}>Решённые (1)</span>
      {RESOLVED.map((c, i) => <CommentCard key={i} c={{ ...c, time: "Открыть" }} resolved />)}
    </div>
  );
}

function FormTextarea({ ph }) {
  return <div style={{ minHeight: 52, padding: "14px 16px", boxSizing: "border-box", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-subtle)" }}>{ph}</div>;
}
function ScoreCard() {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--fg)" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)" }}></span>Оценка и замечания</span>
      {QUESTIONS.map((q, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>Вопрос {i + 1}: {q}</span>
          <FormTextarea ph="Ваша оценка и замечания…" />
        </div>
      ))}
    </div>
  );
}
function ImproveCard() {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--fg)" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)" }}></span>Что улучшить дальше</span>
      <div style={{ minHeight: 80, padding: "14px 16px", boxSizing: "border-box", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-subtle)" }}>Ваши рекомендации по улучшению…</div>
    </div>
  );
}

function CycleDetail({ cycle, onClose }) {
  const respondent = (cycle && cycle.teacher) || "Николаева К.Ю.";
  const title = (cycle && cycle.title) || "Курсовая работа: анализ данных пользователей";
  const course = (cycle && cycle.course) || "Методология исследования";
  const cycleNum = (cycle && cycle.cycle) || 2;
  const [chatOpen, setChatOpen] = React.useState(false);
  const [analyticsOpen, setAnalyticsOpen] = React.useState(false);
  const [historyOpen, setHistoryOpen] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 70, background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <header style={{ height: 64, flexShrink: 0, boxSizing: "border-box", display: "flex", alignItems: "center", gap: 16, padding: "0 24px", borderBottom: "1px solid var(--border)" }}>
        <Logo size={30} />
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-muted)" }}>
          <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 15 }}>Циклы</button>
          {DIcon("chevron-right", 15)}<span>Входящие запросы</span>{DIcon("chevron-right", 15)}
          <span style={{ color: "var(--fg)", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <IconButton variant="ghost" ariaLabel="Помощь">{DIcon("circle-help", 18)}</IconButton>
          <IconButton variant="ghost" ariaLabel="Уведомления">{DIcon("bell", 18)}</IconButton>
          <Avatar src={AVATAR} name="Алексей Борисов" size="default" />
        </div>
      </header>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "24px 32px 120px", display: "flex", gap: 28, alignItems: "flex-start" }}>
          <Sidebar onClose={onClose} respondent={respondent} onOpenChat={() => setChatOpen(true)} onOpenAnalytics={() => setAnalyticsOpen(true)} onOpenHistory={() => setHistoryOpen(true)} />
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            <HeaderCard respondent={respondent} title={title} course={course} cycleNum={cycleNum} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
                <MaterialCard />
                <ScoreCard />
                <ImproveCard />
              </div>
              <CommentsRail />
            </div>
          </div>
        </div>
      </div>

      <div style={{ flexShrink: 0, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "16px 40px", borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>Ответ ещё не готов · заполните «Оценку» и «Улучшения»</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>Можно вернуться и отредактировать до дедлайна — 3 апр 2026, 23:59</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--fg)", borderRadius: "var(--r-lg)", padding: "13px 22px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Сохранить черновик {DIcon("save", 16)}</button>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "none", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-lg)", padding: "13px 26px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Отправить ответ {DIcon("arrow-right", 16)}</button>
        </div>
      </div>

      <DiscussionDrawer open={chatOpen} onClose={() => setChatOpen(false)} respondent={respondent} />
      <AnalyticsDrawer open={analyticsOpen} onClose={() => setAnalyticsOpen(false)} />
      <HistoryDrawer open={historyOpen} onClose={() => setHistoryOpen(false)} />
    </div>
  );
}

/* ---------- discussion drawer (slides from right) ---------- */
const DISCUSSION = [
  { divider: "Сегодня · 17 мая" },
  { side: "in", author: "Кристина Юрьевна", avatar: true, text: "Добрый день! Начнём обсуждение проекта. Сначала разберём цель, потом посмотрим файл и решим, что доработать.", time: "23:58" },
  { side: "in", text: "Предлагаю действовать как Artemis II: сначала аккуратный облёт темы, проверка всех систем, а потом уже посадка в финальную версию.", time: "23:58" },
  { divider: "Сегодня · 17 мая" },
  { side: "out", text: "Отлично. Я прикрепил черновик. Пока это скорее Orion на старте: всё собрано, но страшно нажимать «запуск».", time: "00:23" },
  { side: "in", author: "Кристина Юрьевна", avatar: true, text: "Не переживайте. Главное — проверить траекторию аргументации. Если где-то уводит от темы, скорректируем курс до следующего цикла.", time: "10:58" },
  { side: "out", text: "Тогда отправляю файл. Надеюсь, миссия пройдёт без аварийного отделения введения от основной части.", time: "11:08",
    files: [
      { name: "Бриф цикла 1.pdf", size: "248 КБ", type: "pdf" },
      { name: "Бриф цикла 1.doc", size: "248 КБ", type: "doc" },
      { name: "Бриф цикла 1.pdf", size: "248 КБ", type: "pdf" },
      { name: "Бриф цикла 1.pdf", size: "248 КБ", type: "pdf" },
    ] },
];
function DFile({ f }) {
  const pdf = f.type === "pdf";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: "10px 12px", minWidth: 0 }}>
      <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: "var(--r-md)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: pdf ? "var(--primary)" : "#3B6FB0", color: pdf ? "var(--primary-fg)" : "#fff", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700 }}>{pdf ? "PDF" : "doc"}</span>
      <div style={{ minWidth: 0, lineHeight: 1.3 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>{f.size} · <span style={{ color: "var(--primary)" }}>скачать</span></div>
      </div>
    </div>
  );
}
function DBubble({ m, respondent }) {
  if (m.divider) return (
    <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
      <span style={{ padding: "5px 14px", borderRadius: "var(--r-full)", background: "var(--surface-2)", border: "1px solid var(--border)", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--fg-muted)" }}>{m.divider}</span>
    </div>
  );
  const out = m.side === "out";
  const authorName = m.author ? respondent : null;
  return (
    <div style={{ display: "flex", justifyContent: out ? "flex-end" : "flex-start", gap: 12 }}>
      {!out && (m.avatar ? <Avatar name={authorName} size="default" /> : <span style={{ width: 32, flexShrink: 0 }}></span>)}
      <div style={{ maxWidth: 460, padding: "12px 16px", borderRadius: 18, borderBottomRightRadius: out ? 6 : 18, borderBottomLeftRadius: out ? 18 : 6, background: out ? "var(--bubble-out)" : "var(--bubble-in)", color: "var(--bubble-out-fg)", display: "flex", flexDirection: "column", gap: 10 }}>
        {authorName && !out && <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{authorName}</span>}
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.5 }}>{m.text}</span>
        {m.files && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>{m.files.map((f, i) => <DFile key={i} f={f} />)}</div>}
        <span style={{ alignSelf: "flex-end", fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-subtle)" }}>{m.time}</span>
      </div>
    </div>
  );
}
function DiscussionDrawer({ open, onClose, respondent }) {
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (open) { window.lucide && window.lucide.createIcons(); const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight; } }, [open]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div aria-hidden={!open} style={{ position: "fixed", inset: 0, zIndex: 75, pointerEvents: open ? "auto" : "none" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(20,16,16,0.32)", opacity: open ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-standard)" }}></div>
      <aside style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 540, maxWidth: "94vw", background: "var(--surface)", borderLeft: "1px solid var(--border)", boxShadow: "var(--shadow-2xl)", display: "flex", flexDirection: "column", boxSizing: "border-box", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform var(--dur-slow) var(--ease-out)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
          <span style={{ width: 44, height: 44, borderRadius: "var(--r-xl)", background: "var(--brand-soft)", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{DIcon("hash", 22)}</span>
          <h2 style={{ flex: 1, margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.01em", color: "var(--fg)" }}>Обсуждение</h2>
          <IconButton variant="ghost" ariaLabel="Ещё">{DIcon("more-horizontal", 20)}</IconButton>
          <IconButton variant="ghost" ariaLabel="Закрыть" onClick={onClose}>{DIcon("x", 18)}</IconButton>
        </div>
        <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {DISCUSSION.map((m, i) => <DBubble key={i} m={m} respondent={respondent} />)}
        </div>
        <div style={{ padding: "14px 20px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
          <IconButton variant="outline" roundness="round" ariaLabel="Прикрепить">{DIcon("plus", 20)}</IconButton>
          <IconButton variant="outline" roundness="round" ariaLabel="Эмодзи">{DIcon("smile", 20)}</IconButton>
          <div style={{ flex: 1, display: "flex", alignItems: "center", height: 48, padding: "0 16px", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-full)", fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-subtle)" }}>Как думаете, есть ли жизнь на других планетах?</div>
          <button aria-label="Отправить" style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "var(--r-full)", border: "none", cursor: "pointer", background: "var(--primary)", color: "var(--primary-fg)", boxShadow: "var(--shadow-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{DIcon("send", 19)}</button>
        </div>
      </aside>
    </div>
  );
}

/* ---------- generic right drawer ---------- */
function RightDrawer({ open, onClose, title, width = 600, children }) {
  React.useEffect(() => { if (open) window.lucide && window.lucide.createIcons(); }, [open]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div aria-hidden={!open} style={{ position: "fixed", inset: 0, zIndex: 76, pointerEvents: open ? "auto" : "none" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(20,16,16,0.32)", opacity: open ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-standard)" }}></div>
      <aside style={{ position: "absolute", top: 0, right: 0, height: "100%", width, maxWidth: "96vw", background: "var(--bg)", borderLeft: "1px solid var(--border)", boxShadow: "var(--shadow-2xl)", display: "flex", flexDirection: "column", boxSizing: "border-box", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform var(--dur-slow) var(--ease-out)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "22px 28px 12px" }}>
          <h2 style={{ flex: 1, margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", color: "var(--fg)" }}>{title}</h2>
          <IconButton variant="ghost" ariaLabel="Закрыть" onClick={onClose}>{DIcon("x", 20)}</IconButton>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 28px 28px", display: "flex", flexDirection: "column", gap: 22 }}>
          {children}
        </div>
      </aside>
    </div>
  );
}

/* ---------- analytics drawer ---------- */
const NEXT_ACTIONS = [
  { n: 1, title: "Добавить визуализацию распределения признаков", tag: "критично", tone: "danger", src: "источник: комм. №2, Проф. Иванова" },
  { n: 2, title: "Расширить обоснование выбора DBSCAN", tag: "критично", tone: "danger", src: "источник: комм. №2, Проф. Иванова" },
  { n: 3, title: "Усилить связку методологии с теоретической рамкой курса", tag: "важно", tone: "warning", src: "источник: вывод AI · паттерн 2 цикла подряд" },
  { n: 4, title: "Подписать оси на графиках стр. 8", tag: "мелкая правка", tone: "neutral", src: "источник: комм. №5, Проф. Иванова" },
];
const GROWTH = [
  { label: "Структура текста", pct: 76, delta: "+18", up: true },
  { label: "Аргументация", pct: 72, delta: "+18", up: true },
  { label: "Визуальные доказательства", pct: 41, delta: "−12", up: false },
  { label: "Связь с теорией", pct: 68, delta: "+18", up: true },
];
const DYN = [62, 84, 70, 58, 66, 72];
function TagPill({ tag, tone }) {
  const m = { danger: ["var(--danger-subtle)", "var(--danger)"], warning: ["var(--warning-subtle)", "var(--warning)"], neutral: ["var(--surface-2)", "var(--fg-muted)"] }[tone];
  return <span style={{ padding: "2px 9px", borderRadius: "var(--r-full)", background: m[0], color: m[1], fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600 }}>{tag}</span>;
}
function AnalyticsDrawer({ open, onClose }) {
  return (
    <RightDrawer open={open} onClose={onClose} title="Аналитика" width={620}>
      {/* request summary (dark) */}
      <div style={{ background: "var(--surface-dark)", borderRadius: "var(--r-3xl)", padding: 26, display: "flex", flexDirection: "column", gap: 18, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 40, height: 40, borderRadius: "var(--r-md)", background: "rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{DIcon("sparkle", 20)}</span>
          <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 26 }}>Сводка запроса</h3>
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-xl)", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}>Переработана методология: добавлены новые источники данных, расширена выборка. Просят проверить, насколько убедительна аргументация и&nbsp;корректен анализ.</p>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", color: "rgba(255,255,255,0.6)" }}>ЧТО ПРОВЕРИТЬ</span>
          {["Структуру аргументации и логику переходов между разделами", "Корректность выводов и связь их с выборкой данных", "Обоснование выбора алгоритма кластеризации (DBSCAN)"].map((t) => (
            <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--primary)", marginTop: 8, flexShrink: 0 }}></span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.45, color: "#fff" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* next actions */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--fg)" }}>Что делать дальше</h3>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>4 действия, рекомендованных ИИ по итогам цикла</span>
        </div>
        {NEXT_ACTIONS.map((a) => (
          <div key={a.n} style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: "14px 16px", boxShadow: "var(--shadow-xs)" }}>
            <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: "var(--r-full)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, background: a.tone === "danger" ? "var(--primary)" : "var(--surface-2)", color: a.tone === "danger" ? "var(--primary-fg)" : "var(--fg-muted)", border: a.tone === "danger" ? "none" : "1px solid var(--border-strong)" }}>{a.n}</span>
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--fg)" }}>{a.title}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><TagPill tag={a.tag} tone={a.tone} /><span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{a.src}</span></span>
            </div>
            <span style={{ color: "var(--fg-subtle)", display: "flex", flexShrink: 0 }}>{DIcon("message-circle", 17)}</span>
          </div>
        ))}
      </div>

      {/* growth + dynamics */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <h4 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, color: "var(--fg)" }}>Зоны роста</h4>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>по AI-анализу 24 комментариев 2 циклов</span>
          </div>
          {GROWTH.map((g) => (
            <div key={g.label} style={{ display: "flex", flexDirection: "column", gap: 8, padding: g.up ? 0 : "10px 12px", background: g.up ? "transparent" : "var(--danger-subtle)", borderRadius: g.up ? 0 : "var(--r-lg)", border: g.up ? "none" : "1px solid var(--danger-border)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{g.label}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: g.up ? "var(--success)" : "var(--danger)" }}><span style={{ fontSize: 9 }}>{g.up ? "▲" : "▼"}</span>{g.delta.replace(/[+−-]/, "")}</span>
              </div>
              <div style={{ height: 6, borderRadius: "var(--r-full)", background: "var(--input)" }}><div style={{ width: g.pct + "%", height: "100%", borderRadius: "var(--r-full)", background: "var(--primary)" }}></div></div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-xs)", padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <h4 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, color: "var(--fg)" }}>Динамика между циклами</h4>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>Готовность по AI-оценке</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8, height: 130 }}>
            {DYN.map((v, i) => (
              <div key={i} style={{ flex: 1, height: v + "%", borderRadius: "var(--r-sm)", background: "var(--primary)", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
                <div style={{ height: "45%", background: "var(--brand-soft)" }}></div>
              </div>
            ))}
          </div>
          <span style={{ display: "flex", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.4 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", marginTop: 6, flexShrink: 0 }}></span>За цикл 2 готовность выросла на +12 п.п. Прогноз — закрыть работу к&nbsp;циклу 4.</span>
        </div>
      </div>
    </RightDrawer>
  );
}

/* ---------- history drawer ---------- */
const HISTORY = [
  { group: "Сегодня · 20 мая", items: [
    { time: "14:32", who: "AI", actor: "AI", dot: "var(--primary)", title: "Сгенерирован новый разбор итерации", text: "Сводка обновлена с учётом 6 комментариев Проф. Ивановой по разделу «Методология».", action: "Открыть в Аналитике", aicon: "sparkle" },
    { time: "12:48", who: "АМ", actor: "Вы", dot: "var(--fg-subtle)", title: "Загружена новая версия артефакта", text: "Курсовая_Миронов_v3.pdf · 12 страниц · 4,2 МБ. Предыдущая версия v2 сохранена.", action: "Открыть артефакт", aicon: "file" },
    { time: "11:42", who: "ИИ", actor: "Проф. Иванова", dot: "var(--primary)", title: "Оставлен комментарий в разделе «Методология»", text: "«Нужна визуализация распределения признаков — сейчас этого не хватает».", action: "Перейти к фрагменту", aicon: "file-text", highlight: true },
  ] },
  { group: "Вчера · 19 мая", items: [
    { time: "18:12", who: "АМ", actor: "Вы", dot: "var(--fg-subtle)", title: "Ответ в треде «Срок отправки v4»", text: "«Думаю, к четвергу подготовлю. Подойдёт?»", action: "Открыть тред", aicon: "message-circle" },
    { time: "10:05", who: "ФУКО", actor: "Система", dot: "var(--border-strong)", title: "Дедлайн ответа продлён до 22 мая", text: "По запросу Проф. Ивановой. Старый дедлайн — 20 мая." },
  ] },
  { group: "17 мая", items: [
    { time: "09:30", who: "ИИ", actor: "Проф. Иванова", dot: "var(--warning)", title: "Начата вторая итерация ревью", text: "Цикл 2 из 4 запущен. Респондент: Проф. Иванова. Дедлайн: 22 мая.", action: "К запросу", aicon: "sparkle" },
  ] },
  { group: "12 апр · цикл 1 завершён", items: [
    { time: "16:20", who: "AI", actor: "AI", dot: "var(--fg)", title: "Цикл 1 закрыт · +12 п.п. готовности", text: "Принято 6 правок из 8 предложенных. Главное улучшение: структура методологии.", action: "Скопировать контекст", aicon: "copy" },
  ] },
];
function HistoryDrawer({ open, onClose }) {
  return (
    <RightDrawer open={open} onClose={onClose} title="История цикла" width={620}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
        {HISTORY.map((grp, gi) => (
          <div key={gi} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--fg-muted)", margin: "10px 0 4px" }}>{grp.group}</span>
            {grp.items.map((it, ii) => (
              <div key={ii} style={{ display: "flex", gap: 14 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 44, flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-subtle)" }}>{it.time}</span>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: it.dot, marginTop: 6, border: it.dot === "var(--border-strong)" ? "2px solid var(--border-strong)" : "none", boxSizing: "border-box" }}></span>
                  <span style={{ flex: 1, width: 2, background: "var(--border)", marginTop: 4 }}></span>
                </div>
                <div style={{ flex: 1, minWidth: 0, background: it.highlight ? "var(--danger-subtle)" : "transparent", border: it.highlight ? "1px solid var(--danger-border)" : "none", borderRadius: "var(--r-lg)", padding: it.highlight ? 14 : "0 0 18px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
                    <span style={{ width: 24, height: 24, flexShrink: 0, borderRadius: "var(--r-full)", background: "var(--surface-2)", border: "1px solid var(--border)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 700, color: "var(--fg-muted)" }}>{it.who}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>{it.actor}</span>
                    <span style={{ color: "var(--fg-subtle)" }}>·</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{it.title}</span>
                  </div>
                  <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.45, color: "var(--fg-muted)" }}>{it.text}</p>
                  {it.action && (
                    <button style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 7, marginTop: 2, border: "1px solid var(--border)", background: "var(--surface-2)", borderRadius: "var(--r-md)", padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: it.highlight ? "var(--primary)" : "var(--fg)" }}>{DIcon(it.aicon || "arrow-right", 14)} {it.action} {DIcon("arrow-right", 13)}</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </RightDrawer>
  );
}

window.FukoCycleDetail = { CycleDetail };
})();
