<!-- @dsCard group="FUKO App" viewport="1440x900" name="FUKO — Циклы + Чаты" subtitle="Единый шелл: переключение Циклы / Чаты, ветки и переписка (interactive)" -->
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>FUKO — App</title>
<meta name="ext-resource-dependency" content="assets/people/alexey-borisov.png" data-resource-id="avatarAB" />
<meta name="ext-resource-dependency" content="assets/illustrations/empty-state-monkey.png" data-resource-id="emptyMonkey" />
<link rel="stylesheet" href="styles.css" />
<style>
  html, body { margin: 0; height: 100%; background: var(--bg); }
  #root { height: 100vh; }
  [data-lucide] { stroke-width: 2; }
  @keyframes fukoDotWave { 0%, 100% { opacity: 1; } 55% { opacity: 0.2; } }
  @keyframes fukoOverlayIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fukoCardIn { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: none; } }
</style>
</head>
<body>
<div id="root"></div>
<template id="__bundler_thumbnail" data-bg-color="#F5F3F0">
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="800" fill="#F5F3F0" />
    <rect x="470" y="300" width="260" height="260" rx="56" fill="#2B0F18" />
    <g fill="#F5F3F0">
      <circle cx="540" cy="370" r="15" /><circle cx="600" cy="370" r="15" /><circle cx="660" cy="370" r="15" />
      <circle cx="540" cy="430" r="15" /><circle cx="600" cy="430" r="22" fill="#8B3A4A" /><circle cx="660" cy="430" r="15" />
      <circle cx="540" cy="490" r="15" /><circle cx="600" cy="490" r="15" /><circle cx="660" cy="490" r="15" />
    </g>
    <text x="600" y="640" font-family="Georgia, serif" font-size="64" font-weight="700" fill="#2A2A2E" text-anchor="middle">ФУКО</text>
  </svg>
</template>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.min.js"></script>
<script src="_ds_bundle.js"></script>
<script type="text/babel" src="my-cycles.jsx" data-presets="react"></script>
<script type="text/babel" src="chats.jsx" data-presets="react"></script>
<script type="text/babel" src="people.jsx" data-presets="react"></script>
<script type="text/babel" src="home.jsx" data-presets="react"></script>
<script type="text/babel" src="notifications.jsx" data-presets="react"></script>
<script type="text/babel" src="create-cycle.jsx" data-presets="react"></script>
<script type="text/babel" src="cycle-detail.jsx" data-presets="react"></script>
<script type="text/babel" data-presets="react">

const NS = window.FUKODesignSystem_23dd6b;
const { EmptyState } = NS;
const FIcon = (n, size = 18) => <i data-lucide={n} style={{ width: size, height: size }}></i>;

/* Animated preloader shown while a new cycle is being formed.
   5×5 ruby dot grid — opacity sweeps 100%→20% diagonally, left-to-right. */
function CreatingOverlay() {
  const N = 5;
  const dots = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const diag = r + c; // 0..8 — drives the diagonal wave
      dots.push(<span key={r + "-" + c} style={{
        width: 3.5, height: 3.5, borderRadius: "50%", background: "var(--primary)",
        animation: "fukoDotWave 1.4s cubic-bezier(0.4,0,0.2,1) infinite",
        animationDelay: (diag * 0.22).toFixed(2) + "s",
      }}></span>);
    }
  }
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.18)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", animation: "fukoOverlayIn 200ms ease" }}>
      <div style={{ background: "var(--surface)", borderRadius: 24, boxShadow: "var(--shadow-2xl)", padding: "48px 72px", display: "flex", flexDirection: "column", alignItems: "center", gap: 26, animation: "fukoCardIn 260ms cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 3.5px)", gridAutoRows: "3.5px", gap: 11 }}>{dots}</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--fg)", letterSpacing: "-0.01em" }}>Цикл формируется</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-muted)" }}>Скоро всё будет</span>
        </div>
      </div>
    </div>
  );
}

function FukoApp() {
  const [nav, setNav] = React.useState(() => { try { return localStorage.getItem("fuko-nav") || "chats"; } catch (e) { return "chats"; } });
  React.useEffect(() => { try { localStorage.setItem("fuko-nav", nav); } catch (e) {} }, [nav]);
  const [notifOpen, setNotifOpen] = React.useState(false);
  const [dark, setDark] = React.useState(() => { try { return localStorage.getItem("fuko-theme") === "dark"; } catch (e) { return false; } });
  const [wizardOpen, setWizardOpen] = React.useState(false);
  const [creating, setCreating] = React.useState(false);
  const createTimer = React.useRef(null);
  React.useEffect(() => () => clearTimeout(createTimer.current), []);
  const startCreate = () => {
    setCreating(true);
    clearTimeout(createTimer.current);
    createTimer.current = setTimeout(() => { setCreating(false); setWizardOpen(true); }, 6000);
  };
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [activeCycle, setActiveCycle] = React.useState(null);
  const Sidebar = window.FukoMyCycles.Sidebar;
  const Topbar = window.FukoMyCycles.Topbar;
  const MyCycles = window.FukoMyCycles.MyCycles;
  const ChatsScreen = window.FukoChats.ChatsScreen;
  const NotificationsDrawer = window.FukoNotifications.NotificationsDrawer;
  const CreateCycleWizard = window.FukoCreateCycle.CreateCycleWizard;
  const CycleDetail = window.FukoCycleDetail.CycleDetail;

  React.useEffect(() => {window.lucide && window.lucide.createIcons();});
  React.useEffect(() => {
    try { localStorage.setItem("fuko-theme", dark ? "dark" : "light"); } catch (e) {}
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setNotifOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  let main;
  if (nav === "home") {
    const HomeScreen = window.FukoHome.HomeScreen;
    main =
    <main style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 40px 40px" }}>
          <HomeScreen onNavigate={setNav} />
        </main>;

  } else if (nav === "cycles") {
    main =
    <main style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 40px 40px" }}>
          <MyCycles onCreate={startCreate} onOpenCycle={(c) => { setActiveCycle(c); setDetailOpen(true); }} />
        </main>;

  } else if (nav === "chats") {
    main =
    <main style={{ flex: 1, minHeight: 0, display: "flex", padding: "4px 32px 28px" }}>
          <ChatsScreen />
        </main>;

  } else if (nav === "people") {
    const PeopleScreen = window.FukoPeople.PeopleScreen;
    main =
    <main style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 40px 40px" }}>
          <PeopleScreen />
        </main>;

  } else {
    main =
    <main style={{ flex: 1, minHeight: 0, display: "flex", padding: "4px 32px 28px" }}>
          <div style={{
        flex: 1, minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-3xl)", boxShadow: "var(--shadow-xs)", padding: 48, gap: "20px"
      }}>
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)", textAlign: "center", textWrap: "balance", fontSize: "26px" }}>
              Здесь скоро будет удивительный контент
            </h1>
            <img src={(window.__resources && window.__resources.emptyMonkey) || "assets/illustrations/empty-state-monkey.png"} alt="" style={{ maxWidth: "60%", height: "auto", objectFit: "contain", width: "300px" }} />
          </div>
        </main>;

  }

  return (
    <div className={dark ? "dark" : ""} style={{ display: "flex", height: "100%", width: "100%", background: "var(--bg)", overflow: "hidden" }}>
        <Sidebar active={nav} onNavigate={setNav} />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", height: "100%" }}>
          <Topbar onCreate={startCreate} onNotifications={() => setNotifOpen(true)} dark={dark} onToggleTheme={() => setDark((d) => !d)} />
          {main}
        </div>
        <NotificationsDrawer open={notifOpen} onClose={() => setNotifOpen(false)} />
        {creating && <CreatingOverlay />}
        {wizardOpen && <CreateCycleWizard onClose={() => setWizardOpen(false)} onComplete={() => { setWizardOpen(false); setNav("cycles"); }} onOpenCard={() => { setWizardOpen(false); setDetailOpen(true); }} />}
        {detailOpen && <CycleDetail cycle={activeCycle} onClose={() => setDetailOpen(false)} />}
      </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<FukoApp />);
setTimeout(() => window.lucide && window.lucide.createIcons(), 150);
</script>
</body>
</html>
