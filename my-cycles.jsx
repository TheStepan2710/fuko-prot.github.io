/* FUKO — "Чаты" screen (Figma nodes 2698-48137 default + 2698-48138 thread open).
   IIFE-wrapped so it can reuse window.FukoMyCycles.{Sidebar,Topbar} without leaking
   top-level identifiers into the shared Babel scope. Exposes window.FukoChats. */
(() => {
const CNS = window.FUKODesignSystem_23dd6b;
const { Avatar, IconButton, Input } = CNS;
const CIcon = (n, size = 18, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw }}></i>;
const plural = (n, one, few, many) => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
};

/* ---------------- data ---------------- */
const PEOPLE = [
  { id: 1, name: "Кристина Юрьевна Н.",        subject: "Астрономия, доц.", preview: "Посмотрела кривую блеска — обсудим подписи осей", when: "10:58", unread: 2 },
  { id: 2, name: "Аркаправо Г.",        subject: "Право",            preview: "Список источников согласован, можно писать",      when: "Вчера", unread: 0 },
  { id: 3, name: "Екатерина Александровна Ш.", subject: "Социология",       preview: "Вопрос 7 в анкете наводящий — переформулируйте",  when: "Вчера", unread: 1 },
  { id: 4, name: "Роман Игоревич А.",          subject: "История",          preview: "Сноски оформите по ГОСТ, остальное хорошо",       when: "Пн",    unread: 0 },
  { id: 5, name: "Даниил Олегович П.",         subject: "Экономика",        preview: "Поясните, почему выбрали именно эту модель",      when: "Пн",    unread: 3 },
  { id: 6, name: "Екатерина Кирилловна К.",    subject: "Философия",        preview: "Сильный тезис, но не хватает контраргумента",     when: "5 апр", unread: 0 },
  { id: 7, name: "Виталий Сергеевич О.",       subject: "Физика",           preview: "Посчитайте погрешность измерений и пришлите",     when: "3 апр", unread: 1 },
  { id: 8, name: "Евгений Витальевич Р.",      subject: "Информатика",      preview: "Логику стоит вынести из контроллера в сервис",    when: "2 апр", unread: 0 },
  { id: 9, name: "Дарья Дмитриевна С.",        subject: "Лингвистика",      preview: "Уточните корпус примеров — сейчас их маловато",   when: "28 мар", unread: 1 },
];

const THREAD_ICON = {
  general: { icon: "hash",       bg: "var(--brand-soft)", fg: "var(--primary)" },
  mail:    { icon: "mail",       bg: "var(--icon-neutral-bg)", fg: "var(--icon-neutral-fg)" },
  check:   { icon: "check",      bg: "var(--icon-neutral-bg)", fg: "var(--icon-neutral-fg)" },
  cycle:   { icon: "refresh-cw", bg: "var(--icon-neutral-bg)", fg: "var(--icon-neutral-fg)" },
};

/* threads per teacher (subject-relevant) */
const THREADS_BY_PERSON = {
  1: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Дедлайн по первому циклу — 5 апреля",          time: "16:31" },
    { id: "exo",     kind: "mail",    title: "Курсовая: экзопланеты",   preview: "Нужно обосновать выбор метода поиска",         time: "14:20" },
    { id: "calc",    kind: "check",   title: "Расчёты и графики",       preview: "Проверьте кривую блеска и подписи осей",       time: "12 мар" },
    { id: "defense", kind: "cycle",   title: "Подготовка к защите",     preview: "Соберём вопросы комиссии заранее",             time: "10 мар" },
  ],
  2: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Список источников согласован",                 time: "15:02" },
    { id: "essay",   kind: "mail",    title: "Эссе: правовые коллизии", preview: "Уточните юрисдикцию в примере 2",              time: "Вчера" },
    { id: "practice",kind: "check",   title: "Судебная практика",       preview: "Добавьте 2–3 свежих постановления",            time: "9 апр" },
  ],
  3: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Жду исправленную анкету к среде",              time: "11:40" },
    { id: "survey",  kind: "mail",    title: "Анкета для опроса",       preview: "Вопрос 7 наводящий — переформулируйте",        time: "Вчера" },
    { id: "sample",  kind: "check",   title: "Выборка и метод",         preview: "Обоснуйте размер выборки",                     time: "7 апр" },
  ],
  4: [
    { id: "general", kind: "general", title: "Общее",                  preview: "В целом готово, правки косметические",         time: "18:10" },
    { id: "essay",   kind: "mail",    title: "Реферат: реформы 1860-х", preview: "Сноски оформите по ГОСТ",                      time: "Пн" },
    { id: "sources", kind: "check",   title: "Работа с источниками",    preview: "Сравните две летописи между собой",            time: "4 апр" },
  ],
  5: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Жду пояснение по модели до пятницы",           time: "09:25" },
    { id: "course",  kind: "mail",    title: "Курсовая: инфляция",      preview: "Поясните выбор именно этой модели",            time: "Пн" },
    { id: "charts",  kind: "check",   title: "Данные и графики",        preview: "Подпишите оси и укажите источник данных",      time: "31 мар" },
  ],
  6: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Хорошая динамика, продолжайте",                time: "5 апр" },
    { id: "essay",   kind: "mail",    title: "Эссе: свобода воли",      preview: "Сильный тезис, но нужен контраргумент",        time: "5 апр" },
  ],
  7: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Отчёт принят, замечаний нет",                  time: "3 апр" },
    { id: "lab",     kind: "mail",    title: "Лабораторная: маятник",   preview: "Посчитайте погрешность измерений",             time: "3 апр" },
    { id: "report",  kind: "check",   title: "Отчёт по проекту",        preview: "Добавьте вывод по графику",                    time: "1 апр" },
  ],
  8: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Спринт закрыли, отличная работа",              time: "2 апр" },
    { id: "api",     kind: "mail",    title: "Проект: API кабинета",    preview: "Опишите модель данных подробнее",              time: "2 апр" },
    { id: "review",  kind: "check",   title: "Код-ревью",               preview: "Вынесите логику из контроллера в сервис",      time: "30 мар" },
  ],
  9: [
    { id: "general", kind: "general", title: "Общее",                  preview: "Жду расширенный список примеров",              time: "28 мар" },
    { id: "course",  kind: "mail",    title: "Курсовая: заимствования", preview: "Уточните корпус примеров",                     time: "28 мар" },
  ],
};

/* one themed conversation per teacher */
const CONVO_BY_PERSON = {
  1: [
    { id: 1, side: "in",  text: "Добрый день, Алексей! Давайте начнём первый цикл. Сформулируйте, пожалуйста, исследовательский вопрос и метод поиска экзопланет, на который опираетесь.", time: "15:31" },
    { id: 2, divider: "Сегодня" },
    { id: 3, side: "out", text: "Здравствуйте! Беру транзитный метод — по кривой блеска звезды. Прикладываю черновик главы и графики, которые успел построить.", time: "09:42",
      files: [
        { name: "Глава 1 — метод.pdf", size: "312 КБ", type: "pdf" },
        { name: "Кривая блеска.png",   size: "196 КБ", type: "doc" },
      ] },
    { id: 4, side: "in",  author: "Кристина Юрьевна", avatar: true, text: "Хороший выбор. Но на графике не подписаны оси и не указан период наблюдения — без этого данные трудно читать. Поправьте и обоснуйте выбор именно транзитного метода.", time: "10:55" },
    { id: 5, side: "in",  text: "И добавьте 1–2 ссылки на свежие исследования по теме — это усилит обзор.", time: "10:58" },
  ],
  2: [
    { id: 1, side: "in",  text: "Добрый день! По эссе: тема интересная, но в примере 2 не ясно, о какой юрисдикции речь. Уточните, пожалуйста.", time: "14:30" },
    { id: 2, side: "out", text: "Здравствуйте! Да, имел в виду российскую практику. Перепишу абзац и сошлюсь на конкретные нормы.", time: "14:48" },
    { id: 3, side: "in",  author: "Аркаправо Г.", avatar: true, text: "Отлично. И список источников согласован — можно переходить к чистовику.", time: "15:02" },
  ],
  3: [
    { id: 1, side: "in",  text: "Посмотрела анкету. Вопрос 7 наводящий — респондент почувствует «правильный» ответ. Переформулируйте нейтрально.", time: "11:20" },
    { id: 2, side: "out", text: "Поняла, спасибо. Сделаю его открытым, без оценочных слов. Заодно проверю формулировки 5 и 9.", time: "11:35" },
    { id: 3, side: "in",  author: "Екатерина Александровна", avatar: true, text: "Да, и обоснуйте размер выборки — почему именно столько человек. Жду исправленную версию к среде.", time: "11:40" },
  ],
  4: [
    { id: 1, side: "in",  text: "Реферат прочитал, содержание сильное. Но сноски оформлены вразнобой — приведите всё к ГОСТ.", time: "17:50" },
    { id: 2, side: "out", text: "Здравствуйте! Исправлю оформление сегодня и пришлю обновлённый файл.", time: "18:05" },
    { id: 3, side: "in",  author: "Роман Игоревич", avatar: true, text: "Хорошо. В целом готово, правки косметические — после них можно сдавать.", time: "18:10" },
  ],
  5: [
    { id: 1, side: "in",  text: "По курсовой: вы взяли модель Филлипса, но не объяснили, почему именно её. Добавьте обоснование выбора.", time: "09:10" },
    { id: 2, side: "out", text: "Здравствуйте! Да, поясню — она лучше описывает связь инфляции и безработицы на наших данных. Допишу абзац.", time: "09:20" },
    { id: 3, side: "in",  author: "Даниил Олегович", avatar: true, text: "Хорошо. И на графиках подпишите оси и укажите источник данных. Жду до пятницы.", time: "09:25" },
  ],
  6: [
    { id: 1, side: "in",  text: "Эссе про свободу воли — сильный тезис. Но вы рассматриваете только детерминизм; добавьте контраргумент со стороны компатибилизма.", time: "16:40" },
    { id: 2, side: "out", text: "Спасибо! Согласен, односторонне получилось. Введу контрпозицию и разберу её.", time: "16:52" },
    { id: 3, side: "in",  author: "Екатерина Кирилловна", avatar: true, text: "Отлично. Хорошая динамика по сравнению с прошлым циклом — продолжайте.", time: "5 апр" },
  ],
  7: [
    { id: 1, side: "in",  text: "По лабораторной: данные собраны верно, но нет оценки погрешности измерений. Посчитайте и добавьте в отчёт.", time: "12:15" },
    { id: 2, side: "out", text: "Здравствуйте! Посчитаю случайную и приборную погрешность, оформлю таблицей.", time: "12:30" },
    { id: 3, side: "in",  author: "Виталий Сергеевич", avatar: true, text: "Верно. После этого отчёт можно принимать — замечаний больше нет.", time: "3 апр" },
  ],
  8: [
    { id: 1, side: "in",  text: "Глянул проект API. Работает, но логика лежит прямо в контроллере — вынесите её в отдельный сервис, так будет чище.", time: "19:05" },
    { id: 2, side: "out", text: "Привет! Понял, отрефакторю — заодно опишу модель данных в README.", time: "19:20" },
    { id: 3, side: "in",  author: "Евгений Витальевич", avatar: true, text: "Супер. Спринт тогда закрываем — отличная работа.", time: "2 апр" },
  ],
  9: [
    { id: 1, side: "in",  text: "По курсовой о заимствованиях: тема хорошая, но корпус примеров маловат — на 12 словах выводы шаткие.", time: "10:05" },
    { id: 2, side: "out", text: "Здравствуйте! Расширю выборку до 40–50 примеров и сгруппирую по источнику заимствования.", time: "10:18" },
    { id: 3, side: "in",  author: "Дарья Дмитриевна", avatar: true, text: "Отлично, так анализ будет убедительнее. Жду расширенный список.", time: "28 мар" },
  ],
};

const PANEL = {
  background: "var(--surface)", border: "1px solid var(--border)",
  borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)",
  display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden",
};

/* ---------------- people list (column 1) ---------------- */
function ChatListItem({ p, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14, width: "100%", textAlign: "left", cursor: "pointer",
        border: "none", borderRadius: "var(--r-xl)", padding: "14px 16px",
        background: active ? "var(--surface-2)" : hover ? "var(--surface-2)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-standard)",
      }}>
      <Avatar name={p.name} size="lg" status="online" />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-subtle)", flexShrink: 0 }}>{p.when}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.preview}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <span style={{ padding: "3px 10px", borderRadius: "var(--r-full)", background: "var(--surface)", border: "1px solid var(--border)", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{p.topics} {plural(p.topics, "тема", "темы", "тем")}</span>
            {p.unread > 0 && <span style={{ minWidth: 20, height: 20, padding: "0 5px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--r-full)", border: "1px solid var(--primary-border)", color: "var(--primary)", background: "var(--primary-subtle)", fontSize: 12, fontWeight: 600 }}>{p.unread}</span>}
          </span>
        </div>
      </div>
    </button>
  );
}

function PeopleList({ activeId, onSelect, onNew }) {
  return (
    <div style={{ ...PANEL, flex: 1, minWidth: 0 }}>
      <div style={{ padding: "24px 24px 14px", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 48, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--fg)" }}>Чаты</h1>
          <button onClick={onNew} aria-label="Новый чат" style={{
            width: 48, height: 48, borderRadius: "var(--r-full)", border: "none", cursor: "pointer",
            background: "var(--primary)", color: "var(--primary-fg)", boxShadow: "var(--shadow-primary)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
          }}>{CIcon("plus", 22)}</button>
        </div>
        <Input placeholder="Поиск по чатам…" iconLeft={CIcon("search", 17)} />
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "0 14px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
        {PEOPLE.map((p) => <ChatListItem key={p.id} p={{ ...p, topics: (THREADS_BY_PERSON[p.id] || []).length }} active={activeId === p.id} onClick={() => onSelect(p.id)} />)}
      </div>
    </div>
  );
}

/* ---------------- thread list (column 2) ---------------- */
function ThreadItem({ t, active, onOpen }) {
  const conf = THREAD_ICON[t.kind];
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14, width: "100%", textAlign: "left", cursor: "pointer",
        border: "none", borderRadius: "var(--r-xl)", padding: "14px 16px",
        background: active ? "var(--surface-2)" : hover ? "var(--surface-2)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-standard)",
      }}>
      <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: "var(--r-xl)", background: conf.bg, color: conf.fg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{CIcon(conf.icon, 20)}</span>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.title}</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.preview}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-subtle)" }}>{t.time}</span>
        <span style={{ color: "var(--fg-subtle)", display: "flex" }}>{CIcon("pin", 15)}</span>
      </div>
    </button>
  );
}

function ThreadPanel({ person, threads, openId, onOpen, onBack, compact }) {
  return (
    <div style={{ ...PANEL, flex: 1, minWidth: 0 }}>
      <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 14 }}>
        {compact && (
          <IconButton variant="ghost" ariaLabel="Назад" onClick={onBack}>{CIcon("arrow-left", 18)}</IconButton>
        )}
        <Avatar name={person.name} size="default" status="online" />
        <div style={{ flex: 1, minWidth: 0, lineHeight: 1.25 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 19, color: "var(--fg)" }}>{person.name}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>{person.subject}</div>
        </div>
        <IconButton variant="ghost" ariaLabel="О чате">{CIcon("info", 18)}</IconButton>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 14px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
        {threads.map((t) => <ThreadItem key={t.id} t={t} active={openId === t.id} onOpen={() => onOpen(t.id)} />)}
      </div>
    </div>
  );
}

/* ---------------- conversation (column 3) ---------------- */
function FileChip({ f }) {
  const pdf = f.type === "pdf";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: "10px 12px", minWidth: 0 }}>
      <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: "var(--r-md)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: pdf ? "var(--primary)" : "#3B6FB0", color: pdf ? "var(--primary-fg)" : "#fff", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.02em" }}>{pdf ? "PDF" : "doc"}</span>
      <div style={{ minWidth: 0, lineHeight: 1.3 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>{f.size} · <span style={{ color: "var(--primary)" }}>скачать</span></div>
      </div>
    </div>
  );
}

function Bubble({ m }) {
  if (m.divider) {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
        <span style={{ padding: "5px 14px", borderRadius: "var(--r-full)", background: "var(--surface-2)", border: "1px solid var(--border)", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--fg-muted)" }}>{m.divider}</span>
      </div>
    );
  }
  const out = m.side === "out";
  const bubble = (
    <div style={{
      maxWidth: 560, padding: "12px 16px", borderRadius: 18,
      borderBottomRightRadius: out ? 6 : 18, borderBottomLeftRadius: out ? 18 : 6,
      background: out ? "var(--bubble-out)" : "var(--bubble-in)", color: "var(--bubble-out-fg)",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      {m.author && !out && <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{m.author}</span>}
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.5 }}>{m.text}</span>
      {m.files && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {m.files.map((f, i) => <FileChip key={i} f={f} />)}
        </div>
      )}
      <span style={{ alignSelf: "flex-end", fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-subtle)" }}>{m.time}</span>
    </div>
  );
  return (
    <div style={{ display: "flex", justifyContent: out ? "flex-end" : "flex-start", gap: 12 }}>
      {!out && m.avatar && <Avatar name={m.author} size="default" />}
      {!out && !m.avatar && <span style={{ width: 40, flexShrink: 0 }}></span>}
      {bubble}
    </div>
  );
}

function Conversation({ thread, convo, onSend }) {
  const conf = THREAD_ICON[thread.kind];
  const scrollRef = React.useRef(null);
  const [draft, setDraft] = React.useState("");
  React.useEffect(() => { const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight; }, [thread.id, convo.length]);
  const send = () => { const t = draft.trim(); if (!t) return; onSend && onSend(t); setDraft(""); };
  return (
    <div style={{ ...PANEL, flex: 1, minWidth: 0 }}>
      <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 44, height: 44, borderRadius: "var(--r-xl)", background: conf.bg, color: conf.fg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{CIcon(conf.icon, 22)}</span>
        <h2 style={{ flex: 1, margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.01em", color: "var(--fg)" }}>{thread.title}</h2>
        <IconButton variant="ghost" ariaLabel="Меню">{CIcon("more-horizontal", 20)}</IconButton>
      </div>
      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "22px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
        {convo.map((m) => <Bubble key={m.id} m={m} />)}
      </div>
      <div style={{ padding: "14px 24px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <IconButton variant="outline" roundness="round" ariaLabel="Прикрепить">{CIcon("plus", 20)}</IconButton>
        <IconButton variant="outline" roundness="round" ariaLabel="Эмодзи">{CIcon("smile", 20)}</IconButton>
        <div style={{ flex: 1 }}>
          <Input size="lg" placeholder="Напишите сообщение…" value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} />
        </div>
        <button aria-label="Отправить" onClick={send} style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "var(--r-full)", border: "none", cursor: "pointer", background: "var(--primary)", color: "var(--primary-fg)", boxShadow: "var(--shadow-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{CIcon("send", 19)}</button>
      </div>
    </div>
  );
}

/* ---------------- screen orchestrator ---------------- */
function ChatsScreen() {
  const [personId, setPersonId] = React.useState(1);
  const [openId, setOpenId] = React.useState(null);
  const [sent, setSent] = React.useState(() => { try { return JSON.parse(localStorage.getItem("fuko-sent") || "{}"); } catch (e) { return {}; } });
  React.useEffect(() => { try { localStorage.setItem("fuko-sent", JSON.stringify(sent)); } catch (e) {} }, [sent]);
  const person = PEOPLE.find((p) => p.id === personId) || PEOPLE[0];
  const threads = THREADS_BY_PERSON[personId] || [];
  const thread = threads.find((t) => t.id === openId);
  const convo = [...(CONVO_BY_PERSON[personId] || []), ...(sent[personId] || [])];
  const handleSend = (text) => {
    const time = new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    setSent((s) => ({ ...s, [personId]: [...(s[personId] || []), { id: "u" + Date.now(), side: "out", text, time }] }));
  };

  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div style={{ flex: 1, minHeight: 0, width: "100%", display: "flex", gap: 18 }}>
      {openId == null ? (
        <>
          <PeopleList activeId={personId} onSelect={(id) => { setPersonId(id); setOpenId(null); }} onNew={() => {}} />
          <ThreadPanel person={person} threads={threads} openId={openId} onOpen={setOpenId} compact={false} />
        </>
      ) : (
        <>
          <ThreadPanel person={person} threads={threads} openId={openId} onOpen={setOpenId} onBack={() => setOpenId(null)} compact={true} />
          <Conversation thread={thread} convo={convo} onSend={handleSend} />
        </>
      )}
    </div>
  );
}

window.FukoChats = { ChatsScreen };
})();
