/* FUKO — "Создать запрос обратной связи" wizard (4 steps + success modal).
   Full-screen takeover overlay. Exposes window.FukoCreateCycle. */
(() => {
const WNS = window.FUKODesignSystem_23dd6b;
const { Logo, IconButton, Avatar } = WNS;
const WIcon = (n, size = 16, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw, flexShrink: 0 }}></i>;
const AVATAR = (window.__resources && window.__resources.avatarAB) || "assets/people/alexey-borisov.png";

const STEPS = [
  { id: 1, label: "Работа и материал", sub: "выберите работу и материал" },
  { id: 2, label: "Цель и вопросы", sub: "сформулируйте цель и вопросы" },
  { id: 3, label: "Респондент и срок", sub: "выберите респондента и срок" },
  { id: 4, label: "Проверка", sub: "проверьте и отправьте запрос" },
];

/* ---------- shared bits ---------- */
function Field({ label, hint, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{label}</span>
      {children}
      {hint && <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{hint}</span>}
    </div>
  );
}
function Select({ value }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", height: 56, padding: "0 18px", boxSizing: "border-box", background: "var(--surface)", border: "1px solid var(--border-strong)", borderRadius: "var(--r-xl)", fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg)", cursor: "pointer" }}>{value}</div>
      <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "var(--fg-muted)", pointerEvents: "none", display: "flex" }}>{WIcon("chevron-down", 18)}</span>
    </div>
  );
}
function GhostBtn({ icon, children, onClick }) {
  return (
    <button onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", border: "1px solid var(--border)", background: "var(--surface-2)", borderRadius: "var(--r-lg)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{WIcon(icon, 15)}{children}</button>
  );
}
function SectionCard({ title, children }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 32, display: "flex", flexDirection: "column", gap: 22 }}>
      {title && <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, color: "var(--fg)" }}>{title}</h2>}
      {children}
    </div>
  );
}

/* ---------- stepper ---------- */
function Stepper({ current }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 24, alignSelf: "flex-start", width: 260, boxSizing: "border-box" }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg-muted)" }}>Этапы</span>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
        {STEPS.map((s, i) => {
          const done = s.id < current, active = s.id === current;
          return (
            <div key={s.id} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{
                  width: 30, height: 30, flexShrink: 0, borderRadius: "var(--r-full)", boxSizing: "border-box",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
                  background: done ? "var(--primary)" : active ? "transparent" : "transparent",
                  color: done ? "var(--primary-fg)" : active ? "var(--primary)" : "var(--fg-subtle)",
                  border: active ? "2px solid var(--primary)" : done ? "none" : "2px solid var(--border-strong)",
                }}>{done ? WIcon("check", 15) : s.id}</span>
                {i < STEPS.length - 1 && <span style={{ width: 2, height: 30, background: done ? "var(--primary)" : "var(--border)" }}></span>}
              </div>
              <span style={{ marginTop: 4, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: active ? 700 : 500, color: active ? "var(--primary)" : done ? "var(--fg)" : "var(--fg-subtle)" }}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- step 1 ---------- */
function Step1({ data }) {
  return (
    <SectionCard title="Работа и материал">
      <Field label="Работа" hint="Учебная работа, по которой нужна обратная связь"><Select value={data.work} /></Field>
      <Field label="Версия" hint="Версия, которую увидит респондент"><Select value={data.version} /></Field>
      <Field label="Материал">
        <div style={{ display: "flex", alignItems: "center", gap: 16, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: 16 }}>
          <span style={{ width: 52, height: 52, flexShrink: 0, borderRadius: "var(--r-md)", background: "var(--primary)", color: "var(--primary-fg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700 }}>PDF</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--fg)" }}>{data.file}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>PDF · 12 страниц · 2.4 МБ · загружено сегодня в 12:48</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", borderRadius: "var(--r-full)", background: "var(--success-subtle)", color: "var(--success)", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--success)" }}></span>Материал готов</span>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <GhostBtn icon="refresh-cw">Заменить файл</GhostBtn>
          <GhostBtn icon="link">Добавить ссылку</GhostBtn>
        </div>
      </Field>
    </SectionCard>
  );
}

/* ---------- step 2 ---------- */
const AI_ACTIONS = ["Сформулировать вопросы по материалу", "Предложить критерии проверки", "Сделать формулировку короче", "Усилить акцент на методологии"];
const AI_SUGGEST = ["Что было самым сложным при анализе данных?", "Достаточно ли обоснован выбор выборки?", "Какие выводы стоит усилить?"];
function TextArea({ value }) {
  return <div style={{ minHeight: 88, padding: "14px 18px", boxSizing: "border-box", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.5, color: "var(--fg)" }}>{value}</div>;
}
function Step2({ data, setData }) {
  const [sugIdx, setSugIdx] = React.useState(0);
  const addQuestion = (text) => setData((d) => ({ ...d, questions: [...d.questions, text] }));
  const removeQuestion = (i) => setData((d) => ({ ...d, questions: d.questions.filter((_, j) => j !== i) }));
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 22, alignItems: "start" }}>
      <SectionCard title="Цель и вопросы">
        <Field label="Что нужно проверить?"><TextArea value={data.goal} /></Field>
        <Field label="Почему это важно сейчас?"><TextArea value={data.why} /></Field>
        <Field label="Какой результат будет полезным?"><TextArea value={data.result} /></Field>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>Вопросы к респонденту</span>
          {data.questions.map((q, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: "14px 16px" }}>
              <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "var(--r-full)", background: "var(--fg)", color: "var(--bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600 }}>{i + 1}</span>
              <span style={{ flex: 1, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg)" }}>{q}</span>
              <button onClick={() => removeQuestion(i)} aria-label="Удалить" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--fg-subtle)", display: "flex" }}>{WIcon("x", 18)}</button>
            </div>
          ))}
          <button onClick={() => addQuestion("Новый вопрос")} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", border: "1px dashed var(--border-strong)", background: "transparent", borderRadius: "var(--r-lg)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg-muted)" }}>+ Добавить вопрос</button>
        </div>
      </SectionCard>

      {/* AI assistant */}
      <div style={{ background: "var(--surface-dark)", borderRadius: "var(--r-3xl)", padding: 22, display: "flex", flexDirection: "column", gap: 16, color: "#fff", alignSelf: "stretch" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 40, height: 40, borderRadius: "var(--r-md)", background: "rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{WIcon("sparkle", 20)}</span>
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19 }}>ИИ-помощник</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>Подскажет, что спросить</div>
          </div>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: "var(--r-lg)", background: "rgba(255,255,255,0.06)", fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{WIcon("link", 14)} Применяется к: Вопросы к респонденту</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {AI_ACTIONS.map((a) => (
            <button key={a} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, width: "100%", textAlign: "left", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", borderRadius: "var(--r-lg)", padding: "12px 14px", cursor: "pointer", color: "#fff", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>{WIcon("sparkle", 14)}{a}</span>{WIcon("arrow-right", 15)}
            </button>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-xl)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Предложение</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.45 }}>Уточните, какие именно выводы вызывают сомнение и&nbsp;почему.</span>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => addQuestion("Какие выводы вызывают сомнение и почему?")} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 16px", border: "none", background: "#fff", color: "var(--surface-dark)", borderRadius: "var(--r-md)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>{WIcon("check", 15)} Принять</button>
            <button style={{ padding: "9px 16px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", borderRadius: "var(--r-md)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>Отклонить</button>
          </div>
        </div>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>Предложенные вопросы — добавьте в список</span>
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-lg)", padding: "12px 14px" }}>
          <span style={{ flex: 1, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.4 }}>{AI_SUGGEST[sugIdx]}</span>
          <button onClick={() => { addQuestion(AI_SUGGEST[sugIdx]); setSugIdx((i) => (i + 1) % AI_SUGGEST.length); }} style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 5, border: "none", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>+ Добавить</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- step 3 ---------- */
function ParamRow({ icon, label, value }) {
  return (
    <button style={{ display: "flex", alignItems: "center", gap: 14, width: "100%", textAlign: "left", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: "14px 18px", cursor: "pointer" }}>
      <span style={{ color: "var(--fg-muted)", display: "flex" }}>{WIcon(icon, 18)}</span>
      <div style={{ flex: 1, lineHeight: 1.3 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{label}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{value}</div>
      </div>
      <span style={{ color: "var(--fg-subtle)", display: "flex" }}>{WIcon("chevron-right", 16)}</span>
    </button>
  );
}
function Step3({ data }) {
  const [audience, setAudience] = React.useState("Один респондент");
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 22, alignItems: "start" }}>
      <SectionCard title="Респондент и срок">
        <div style={{ display: "flex", gap: 2, padding: 4, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)" }}>
          {["Один респондент", "Несколько", "Группа"].map((t) => {
            const on = audience === t;
            return <button key={t} onClick={() => setAudience(t)} style={{ flex: 1, border: "none", cursor: "pointer", padding: "9px 12px", borderRadius: "var(--r-md)", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, background: on ? "var(--surface)" : "transparent", color: on ? "var(--fg)" : "var(--fg-muted)", boxShadow: on ? "var(--shadow-xs)" : "none" }}>{t}</button>;
          })}
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--fg-subtle)", display: "flex" }}>{WIcon("search", 17)}</span>
          <div style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px 0 44px", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-subtle)" }}>Найти преподавателя, студента или группу…</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--primary-subtle)", border: "1.5px solid var(--primary)", borderRadius: "var(--r-xl)", padding: 16 }}>
          <Avatar name="Проф. Иванова" size="xl" status="online" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--fg)" }}>{data.respondent}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>Методология исследования · научный руководитель</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--success)", marginTop: 2 }}>● Обычно отвечает за 1–2 дня</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: "var(--r-full)", background: "var(--primary)", color: "var(--primary-fg)", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>{WIcon("check", 15)} Выбран</span>
        </div>
        <h3 style={{ margin: "6px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--fg)" }}>Параметры запроса</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <ParamRow icon="calendar" label="Дедлайн" value="22 мая · 23:59" />
          <ParamRow icon="lock" label="Видимость" value="Только участники цикла" />
          <ParamRow icon="sparkle" label="ИИ-сводка ответа" value="Включена" />
          <ParamRow icon="bell" label="Уведомления" value="Email и в приложении" />
        </div>
      </SectionCard>

      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>Что произойдёт после отправки</span>
        {[["Запрос получит 1 респондент", "Проф. Иванова"], ["Ответ ожидается до 22 мая", "5 рабочих дней"], ["ИИ-сводка будет создана", "после получения ответа"], ["Вы получите уведомление", "email и в приложении"]].map(([t, s], i) => (
          <div key={i} style={{ display: "flex", gap: 14 }}>
            <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: "var(--r-full)", background: "var(--fg)", color: "var(--bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600 }}>{i + 1}</span>
            <div style={{ lineHeight: 1.35 }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{t}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- step 4 ---------- */
function EditLink({ onClick }) {
  return <button onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "none", background: "transparent", cursor: "pointer", color: "var(--primary)", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>{WIcon("pencil", 15)} Изменить</button>;
}
function Step4({ data, goTo }) {
  return (
    <SectionCard>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 26, color: "var(--fg)", lineHeight: 1.2 }}>Запрос обратной связи · {data.work}</h2>
        <EditLink onClick={() => goTo(1)} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, borderBottom: "1px solid var(--border)", paddingBottom: 22 }}>
        {[["Автор", "Алексей Миронов", "Студент · 3 курс"], ["Респондент", data.respondent, "Научный руководитель"], ["Дедлайн", "22 мая · 23:59", "5 рабочих дней"], ["Версия", "v3 · 12 страниц", "PDF · 2.4 МБ"]].map(([l, a, b]) => (
          <div key={l} style={{ lineHeight: 1.35 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{l}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--fg)" }}>{a}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{b}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>Цель запроса</span><EditLink onClick={() => goTo(2)} />
      </div>
      <p style={{ margin: "-8px 0 0", fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5, color: "var(--fg)" }}>{data.goal}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>Вопросы для ответа</span><EditLink onClick={() => goTo(2)} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.questions.map((q, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: "14px 16px" }}>
            <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "var(--r-full)", background: "var(--fg)", color: "var(--bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600 }}>{i + 1}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--fg)" }}>{q}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>Материал</span><EditLink onClick={() => goTo(1)} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", padding: 16 }}>
        <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: "var(--r-md)", background: "var(--primary)", color: "var(--primary-fg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700 }}>PDF</span>
        <div><div style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{data.file}</div><div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>PDF · 12 страниц · 2.4 МБ</div></div>
      </div>
    </SectionCard>
  );
}

/* ---------- success modal ---------- */
function SuccessModal({ data, onCard, onHome }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(20,16,16,0.5)" }}>
      <div style={{ width: 560, maxWidth: "100%", background: "var(--surface)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-2xl)", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 18, boxSizing: "border-box" }}>
        <span style={{ width: 72, height: 72, borderRadius: "var(--r-full)", background: "var(--success)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{WIcon("check", 36)}</span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 32, color: "var(--fg)" }}>Запрос отправлен</h2>
        <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.5, color: "var(--fg-muted)", maxWidth: 420 }}>{data.respondent} получит уведомление и&nbsp;сможет ответить до&nbsp;22&nbsp;мая · 23:59</p>
        <div style={{ width: "100%", background: "var(--surface-2)", borderRadius: "var(--r-xl)", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          {[["Работа", data.work], ["Версия", "v3 · " + data.file], ["Респондент", data.respondent], ["Дедлайн", "22 мая · 23:59"]].map(([l, v]) => (
            <div key={l} style={{ display: "flex", gap: 16 }}>
              <span style={{ width: 96, flexShrink: 0, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>{l}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{v}</span>
            </div>
          ))}
          <div style={{ display: "flex", gap: 16 }}>
            <span style={{ width: 96, flexShrink: 0, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>Статус</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--fg)" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--warning)" }}></span>Ожидает ответа</span>
          </div>
        </div>
        <div style={{ width: "100%", background: "var(--surface-2)", borderRadius: "var(--r-xl)", padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>Что дальше</span>
          {["Мы покажем уведомление, когда появится ответ", "ИИ-сводка будет создана автоматически", "Вы можете напомнить респонденту, если ответ задерживается"].map((t) => (
            <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--fg-subtle)", marginTop: 7, flexShrink: 0 }}></span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg)" }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ width: "100%", display: "flex", gap: 12, marginTop: 4 }}>
          <button onClick={onCard} style={{ flex: 1, border: "none", cursor: "pointer", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-lg)", padding: "14px", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Открыть карточку цикла</button>
          <button onClick={onHome} style={{ flex: 1, border: "1px solid var(--border)", cursor: "pointer", background: "var(--surface-2)", color: "var(--fg)", borderRadius: "var(--r-lg)", padding: "14px", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>На главную</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- wizard shell ---------- */
function CreateCycleWizard({ onClose, onComplete, onOpenCard }) {
  const [step, setStep] = React.useState(1);
  const [sent, setSent] = React.useState(false);
  const [data, setData] = React.useState({
    work: "Курсовая работа: анализ данных пользователей",
    version: "v3 · текущая",
    file: "Курсовая_Миронов_v3.pdf",
    goal: "Проверьте логику изложения, методологию исследования и корректность выводов.",
    why: "Я готовлю следующую версию курсовой и хочу понять, какие правки стоит внести в первую очередь.",
    result: "Список конкретных замечаний и рекомендаций перед доработкой v4.",
    questions: ["Насколько понятна логика изложения?", "Какие места требуют доработки в первую очередь?", "Что стоит улучшить перед следующей версией?"],
    respondent: "Проф. Иванова",
  });
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const last = step === 4;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 70, background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      {/* top bar */}
      <header style={{ height: 72, flexShrink: 0, boxSizing: "border-box", display: "flex", alignItems: "center", gap: 20, padding: "0 28px", borderBottom: "1px solid var(--border)" }}>
        <Logo size={34} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-muted)" }}>
          <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 16 }}>Циклы</button>
          {WIcon("chevron-right", 16)}
          <span style={{ color: "var(--fg)", fontWeight: 600 }}>Создать запрос обратной связи</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <IconButton variant="ghost" ariaLabel="Помощь">{WIcon("circle-help", 18)}</IconButton>
          <IconButton variant="ghost" ariaLabel="Уведомления">{WIcon("bell", 18)}</IconButton>
          <Avatar src={AVATAR} name="Алексей Борисов" size="default" />
        </div>
      </header>

      {/* scroll area */}
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 40px 120px", display: "flex", gap: 36, alignItems: "flex-start" }}>
          <div style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 0 }}>
            <button onClick={onClose} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, border: "none", background: "transparent", cursor: "pointer", color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500 }}>{WIcon("arrow-left", 18)} Назад</button>
            <Stepper current={step} />
          </div>
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.02em", color: "var(--fg)" }}>Создать запрос обратной связи</h1>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-muted)" }}>Шаг {step} из 4 · {STEPS[step - 1].sub}</span>
            </div>
            {step === 1 && <Step1 data={data} />}
            {step === 2 && <Step2 data={data} setData={setData} />}
            {step === 3 && <Step3 data={data} />}
            {step === 4 && <Step4 data={data} goTo={setStep} />}
          </div>
        </div>
      </div>

      {/* sticky footer */}
      <div style={{ flexShrink: 0, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "16px 40px", borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>Шаг {step} из 4</span>
          <div style={{ display: "flex", gap: 6 }}>
            {STEPS.map((s) => <span key={s.id} style={{ width: 44, height: 4, borderRadius: "var(--r-full)", background: s.id <= step ? "var(--primary)" : "var(--border-strong)" }}></span>)}
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{WIcon("circle-check", 14)} Черновик сохранён в 14:32</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--fg)", borderRadius: "var(--r-lg)", padding: "13px 22px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Сохранить черновик {WIcon("save", 16)}</button>
          {step > 1 && !last && <button onClick={() => setStep((s) => s - 1)} style={{ border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--fg)", borderRadius: "var(--r-lg)", padding: "13px 22px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Назад</button>}
          {!last
            ? <button onClick={() => setStep((s) => s + 1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "none", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-lg)", padding: "13px 26px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Далее {WIcon("arrow-right", 16)}</button>
            : <button onClick={() => setSent(true)} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "none", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-lg)", padding: "13px 26px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600 }}>Отправить запрос {WIcon("arrow-right", 16)}</button>}
        </div>
      </div>

      {sent && <SuccessModal data={data} onCard={() => { setSent(false); onOpenCard ? onOpenCard() : (onComplete && onComplete()); }} onHome={() => { setSent(false); onComplete && onComplete(); }} />}
    </div>
  );
}

window.FukoCreateCycle = { CreateCycleWizard };
})();
