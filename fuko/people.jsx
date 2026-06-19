/* FUKO — "Персоналии" screen (reference: myITMO people directory).
   Content area only — shell/topbar untouched. Exposes window.FukoPeople. */
(() => {
const PNS = window.FUKODesignSystem_23dd6b;
const { Input, Button, Avatar } = PNS;
const PIcon = (n, size = 16, sw = 2) => <i data-lucide={n} style={{ width: size, height: size, strokeWidth: sw, flexShrink: 0 }}></i>;

const PEOPLE = [
  { id: "205826", name: "Новиков Сергей Павлович", meta: null, phone: null, email: "novikov.s@fuko.ru" },
  { id: "365310", name: "Смирнов Дмитрий Алексеевич", meta: null, phone: "+7 (969) 735-52-06", email: "smirnov.d@fuko.ru" },
  { id: "407315", name: "Козлов Антон Игоревич", meta: "Студент, 2-й курс, R4237c, ФСУ и Р", phone: null, email: null },
  { id: "521033", name: "Морозов Кирилл Сергеевич", meta: "Студент, 1-й курс, G4150c, ФЭТ", phone: null, email: null },
  { id: "175742", name: "Волков Максим Юрьевич", meta: null, phone: null, email: null },
  { id: "506432", name: "Соколова Анна Дмитриевна", meta: "Студент, 1-й курс, A4130, ПИШ ФУКО", phone: null, email: null, avatar: true },
  { id: "198184", name: "Лебедева Мария Андреевна", meta: null, phone: "+7 (921) 899-50-23", email: "lebedeva.m@fuko.ru", avatar: true },
  { id: "160177", name: "Ковалёв Иван Степанович", meta: null, phone: null, email: null },
  { id: "199592", name: "Попов Артём Васильевич", meta: null, phone: "+7 (953) 375-97-26", email: "popov.a@fuko.ru" },
  { id: "311416", name: "Морозова Елена Викторовна", meta: "Студент, 4-й курс, U3475, ФТМИ", phone: "+7 (916) 325-65-30", email: null, avatar: true },
  { id: "169958", name: "Васильева Ольга Николаевна", meta: null, phone: null, email: null, avatar: true },
  { id: "142770", name: "Степанов Павел Григорьевич", meta: null, phone: null, email: null },
];

const TOTAL = 71435;

function PlaceholderAvatar({ filled }) {
  return (
    <span style={{
      width: 116, height: 116, flexShrink: 0, borderRadius: "var(--r-xl)",
      background: filled ? "var(--brand-soft)" : "var(--surface-2)",
      border: "1px solid var(--border)", color: "var(--fg-subtle)",
      display: "inline-flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
    }}>
      {filled
        ? <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 34, color: "var(--primary)" }}>{filled}</span>
        : PIcon("user", 52, 1.5)}
    </span>
  );
}

function ContactRow({ icon, value, link }) {
  const has = !!value;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
      <span style={{ color: has ? "var(--primary)" : "var(--fg-subtle)", display: "flex" }}>{PIcon(icon, 16)}</span>
      <span style={{
        fontFamily: "var(--font-sans)", fontSize: 14, minWidth: 0,
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        color: has ? (link ? "var(--primary)" : "var(--fg)") : "var(--fg-subtle)",
      }}>{has ? value : "не указан"}</span>
    </div>
  );
}

function PersonCard({ p }) {
  const [hover, setHover] = React.useState(false);
  const initials = p.avatar ? p.name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase() : null;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", gap: 18, padding: 18, cursor: "pointer",
        background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2xl)",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transition: "box-shadow var(--dur-base) var(--ease-standard)",
      }}>
      <PlaceholderAvatar filled={initials} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{
          alignSelf: "flex-start", padding: "3px 12px", borderRadius: "var(--r-full)",
          background: "var(--brand-soft)", color: "var(--primary)", border: "1px solid var(--primary-border)",
          fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.01em",
        }}>{p.id}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17, lineHeight: 1.25, color: "var(--fg)" }}>{p.name}</span>
          {p.meta && <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" }}>{p.meta}</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 2 }}>
          <ContactRow icon="phone" value={p.phone} />
          <ContactRow icon="mail" value={p.email} link />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  const pages = ["1", "2", "3", "…", "5953"];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 14, paddingTop: 4 }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-muted)" }}>
        <b style={{ color: "var(--fg)" }}>1–12</b> из {TOTAL.toLocaleString("ru-RU")}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <button aria-label="Назад" style={pageBtn(false)}>{PIcon("chevron-left", 16)}</button>
        {pages.map((pg, i) => {
          const active = pg === "1";
          const dots = pg === "…";
          return (
            <button key={i} disabled={dots} style={pageBtn(active, dots)}>{pg}</button>
          );
        })}
        <button aria-label="Вперёд" style={pageBtn(false)}>{PIcon("chevron-right", 16)}</button>
      </div>
    </div>
  );
}
function pageBtn(active, dots) {
  return {
    minWidth: 34, height: 34, padding: "0 8px", border: "none", cursor: dots ? "default" : "pointer",
    borderRadius: "var(--r-md)", display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: active ? 600 : 500,
    background: active ? "var(--primary)" : "transparent",
    color: active ? "var(--primary-fg)" : dots ? "var(--fg-subtle)" : "var(--fg-muted)",
    boxShadow: active ? "var(--shadow-primary)" : "none",
  };
}

function PeopleScreen() {
  const [q, setQ] = React.useState("");
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 1320, margin: "0 auto", width: "100%" }}>
      <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 48, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--fg)" }}>Персоналии</h1>

      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Поиск по Ф.И.О., номеру, подразделению…" iconLeft={PIcon("search", 17)} />
        </div>
        <Button variant="primary">Поиск</Button>
      </div>

      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: "var(--fg)" }}>
        {TOTAL.toLocaleString("ru-RU")} персон найдено
      </span>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 16 }}>
        {PEOPLE.map((p) => <PersonCard key={p.id} p={p} />)}
      </div>

      <Pagination />
    </div>
  );
}

window.FukoPeople = { PeopleScreen };
})();
