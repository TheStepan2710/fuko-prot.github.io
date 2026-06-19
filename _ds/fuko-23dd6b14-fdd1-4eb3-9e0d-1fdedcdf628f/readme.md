# FUKO Design System

A complete design system for **FUKO (ФУКО)** — a structured peer-feedback / critique product. Teams run *cycles*: upload an artifact (a design, doc, or deck), invite reviewers, collect structured answers, and let an AI summarize the feedback. The product UI is **Russian-language**.

> **Brand in one line:** warm, editorial, calm. Sand-paper neutrals, a deep **ruby/wine** accent, **Bitter** serif headings over **Onest** sans body, generous radii, soft shadows.

## Sources
- **Figma:** "FUKO - UI (Copy).fig" (mounted virtual file). A large shadcn-based UI kit ("Obra shadcn/ui") with a custom FUKO product layer on the `Custom` page and full product mockups on `Screen-examples`. 327 component families, 1095 Figma Variables, an icon set of ~3700 Lucide glyphs.
- **Fonts:** `uploads/Bitter.zip` and `uploads/Onest.zip` were referenced but **not reachable** in this project. Both families are loaded from **Google Fonts** instead (identical families) — see Caveats.
- **Icons:** the kit uses **Lucide** (the Obra shadcn icon set). We load Lucide from CDN rather than copying ~3700 SVGs.

---

## How this system is organized

| Path | What |
|---|---|
| `styles.css` | Root entry — `@import` manifest only. Consumers link this. |
| `tokens/fig-tokens.css` | Every Figma Variable (colors, shadows, type, spacing, radii) incl. **dark** theme (`:root[data-theme="dark"]`). |
| `tokens/fonts.css` | Onest + Bitter webfonts + `--font-sans/serif/mono` stacks. |
| `tokens/aliases.css` | Friendly semantic roles (`--bg`, `--primary`, `--success`…) + px-resolved radii / spacing / shadows / type scale. **Author against these.** |
| `tokens/base.css` | Document resets, heading defaults, keyframes. |
| `components/<group>/` | React primitives — `core`, `forms`, `display`, `feedback`, `navigation`, `brand`, `fuko`. |
| `ui_kits/fuko-app/` | Interactive recreation of the FUKO product. |
| `guidelines/*.card.html` | Foundation specimen cards (Design System tab). |
| `assets/illustrations/` | Brand imagery (empty-state mascot). |

Components compile to `window.FUKODesignSystem_23dd6b`. The bundle (`_ds_bundle.js`), manifest, and adherence config are **generated** — never edit them.

---

## CONTENT FUNDAMENTALS

**Language & voice.** The product speaks **Russian**, addressing the user informally-but-respectfully ("вы"). Copy is **plain, calm, and task-focused** — it tells you what will happen, not how to feel.

- **Casing:** Sentence case everywhere — buttons, labels, headers. No Title Case, no ALL CAPS (except tiny overline labels in docs).
- **Buttons = verbs:** «Создать цикл», «Оставить отзыв», «Отправить запрос», «Поделиться». Short imperative.
- **Status = adjectives/short nouns:** «Активный», «На проверке», «Требует действия», «Завершён».
- **Empty states are warm, lightly playful:** e.g. «Здесь скоро будет удивительный контент» ("Amazing content coming soon") paired with the hand-drawn mascot. This is the one place personality shows.
- **Numbers are concrete:** «14 комментариев», «2 дня до дедлайна», «89% участие».
- **No emoji** in product UI. No exclamation-mark hype. No marketing fluff.
- **AI copy** is humble and transparent: «ИИ-сводка формируется», «Анализируем 14 комментариев…».

When writing English for this system, mirror the tone: sentence case, verb-first actions, concrete nouns, no hype.

---

## VISUAL FOUNDATIONS

**Color.** The signature pairing is **ruby `#8B3A4A`** (`--primary`, a muted wine red — NOT bright red) on a **warm sand** canvas (`--bg` = `#F5F3F0`). Cards are pure white. Text is **graphite** (cool near-black `#2A2A2E`), muted text is a warm mauve-grey `#6F6970`. The ruby appears as: filled primary buttons, active nav highlight (10% ruby tint), focus rings (20% ruby), the logo tile (ruby-950 `#2B0F18`), and AI surfaces (ruby border). Status colors are desaturated and earthy: success `#2F7D4F`, warning amber `#B76A12`, danger `#C84A4A`, info dusty-blue. Charts use a warm categorical set (ruby, dusty blue, warm grey, gold, mauve).

**Type.** Headings/display = **Bitter** (a slab-ish serif), Semibold, slightly tight tracking — this carries the editorial character. Body/UI = **Onest** (a clean geometric-humanist sans), 400–700. Scale: H1 48 / H2 30 / H3 24 / H4 20 / body 16 / small 14 / mini 12. Line-height tight (1.1) on headings, 1.5 on body.

**Spacing & layout.** 4-pt grid (`--space-*`). App shell = 248px sidebar + 64px topbar + scrollable workspace; content max-width ~1100px, centered. Generous padding inside cards (16–20px). 

**Radii.** Soft and rounded: default `--radius` = **12px** (`--r-xl`). Buttons/inputs 8px, badges/menus 6px, cards 12–16px, dialogs 16px, pills/avatars full. The FUKO product cards lean larger (16–18px).

**Elevation.** Subtle, layered black shadows (5–10% alpha) — `xs`→`2xl`. Primary buttons get a **ruby-tinted glow** (`--shadow-primary`, `rgba(139,58,74,0.2)`). Cards rest on `xs`, lift to `md` on hover.

**Borders.** Hairline 1px in warm sand (`--border` `#E2DDD4`). Inputs/cards always bordered. Dividers are the same hairline.

**Backgrounds.** Flat warm color — **no gradients**, no noise, no patterns. The only imagery is hand-drawn illustration (the mascot) used sparingly in empty states. Dark chrome surfaces (`--surface-dark` `#24201F`) appear in tooltips and the logo tile.

**Motion.** Quick and understated. Durations 120–260ms, easing `cubic-bezier(0.2,0,0,1)` (standard) / `(0.16,1,0.3,1)` (out). Fades + small translateY for popovers/dialogs/toasts; switches/checks animate position; buttons scale to 0.98 on press. No bounces, no infinite decorative loops. Respect reduced-motion.

**Hover / press states.** Hover = a step-darker fill (primary→ruby-700) or a sand `--accent` wash for ghost/outline. Press = scale 0.98 + a further-darker fill. Focus = 3px ruby ring. Disabled = 50–60% opacity, no pointer.

**Cards.** White surface, 1px sand border, 12–16px radius, `xs` shadow, 16–20px padding. Optional hover lift. The "needs your action" cycle card swaps to a soft-ruby (`--brand-soft` `#F4E6EB`) background with a ruby border.

**Transparency / blur.** Used lightly: dialog backdrop is a dim overlay with a 2px blur; alpha tints (ruby 10/15/20%) drive subtle/hover/ring states.

---

## ICONOGRAPHY

- **System:** **Lucide** (the Obra shadcn icon set) — 1.5–2px stroke, rounded joins, 16–20px in UI. Loaded from CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`, then `lucide.createIcons()`; author with `<i data-lucide="name"></i>`.
- **Usage:** outline (stroke) icons only, colored `currentColor` so they inherit text color. Common glyphs in this product: `house, layers, messages-square, users, file-text, chart-no-axes-column, book-open, search, bell, plus, sparkles, rotate-cw, circle-check, clock, message-circle, share-2, pen-line`.
- **No emoji**, no unicode-as-icon, no PNG icons. The brand **logo mark** is a 3×3 dot grid ("pulse") with a brighter center dot — recreated faithfully in `<Logo>` (not an icon font).
- When a needed glyph isn't in Lucide, pick the closest Lucide match rather than hand-drawing.

---

## Index / manifest

**Tokens:** `tokens/fig-tokens.css`, `fonts.css`, `aliases.css`, `base.css` (all via `styles.css`).

**Components** (`window.FUKODesignSystem_23dd6b`):
- **core/** — `Button`, `IconButton`, `Badge`, `Avatar` + `AvatarStack`, `Spinner`, `Separator`, `Kbd`, `Skeleton`
- **forms/** — `Input`, `Textarea`, `Label`, `Field`, `Checkbox`, `Switch`, `RadioGroup`, `Select`
- **display/** — `Card` (+ `CardHeader`, `CardFooter`), `Progress`, `Tooltip`, `Table`
- **feedback/** — `Alert`, `Dialog`, `Toast`, `EmptyState`
- **navigation/** — `Tabs`, `Breadcrumb`, `NavItem`
- **brand/** — `Logo`
- **fuko/** (product-specific) — `CycleStatusBadge`, `CycleCard`, `AISummaryBlock`, `CommentItem`

**UI kit:** `ui_kits/fuko-app/` — interactive app shell (dashboard + cycle detail + create dialog).

**Foundation cards:** `guidelines/*.card.html` (Colors, Type, Spacing, Brand) + per-component cards.

---

## Caveats / to make perfect
- **Fonts:** Onest & Bitter load from Google Fonts because the uploaded `.zip` files weren't reachable. If you have the licensed binaries, drop them in and swap `tokens/fonts.css` `@import` for local `@font-face`.
- **Components are clean re-authorings**, not 1:1 ports of all 327 Figma families — they cover the system's real surface (the shadcn primitives + the FUKO product layer) against the exact token values. The long tail (charts, calendar, OTP, resizable, carousel, command palette, etc.) is not yet built.
- **Icons** are linked from the Lucide CDN, not vendored locally.
