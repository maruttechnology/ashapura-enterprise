# Handoff: Divi Steel Homepage (v3 — Light Industrial)

## Overview
Marketing homepage for Divi Steel, a steel dealer/distributor. Light, clean, industrial aesthetic (white/steel/charcoal-navy base with an orange-red CTA accent and a teal secondary accent) with an animated hero, a floating glass nav, an interactive expanding-panel industries section, a hover-accordion "Why Choose Us" section, an auto-playing/swipeable product gallery that opens a product detail view, a colored CTA banner, quality/certifications, and contact + footer with a gradient bar.

**This supersedes the earlier dark-theme (v2) handoff.** The overall structure/interactions are unchanged from v2; only the color system and the hero's visual treatment changed. If a v2 handoff or build exists, re-theme it rather than rebuilding from scratch.

## About the Design Files
The bundled HTML file (`Divi Steel Homepage.dc.html`) is a **design reference prototype** built in an internal HTML design tool — not production code to copy directly. It uses a proprietary templating syntax (`{{ }}` holes, `<sc-for>`, `<sc-if>`, a custom `DCLogic` class) that will not run as-is in a normal web app. Treat it as a precise visual/behavioral spec. Recreate it in the target codebase's actual stack (React, Vue, plain HTML/CSS/JS, etc.) using that codebase's existing components, patterns, and libraries — or choose the most sensible stack if this is a fresh project.

## Fidelity
**High-fidelity.** Colors, typography, spacing, layout, and interaction behavior are final. The hero includes a decorative line-art illustration (see Hero section) built from inline SVG shapes — recreate it as SVG/vector, not a raster image. All other photo areas are **placeholders** (striped rectangles with a bracketed monospace label like `[ FACILITY / TEAM PHOTO ]`) — swap in real photography. Placeholder company details (address, phone, email) and all body copy marked "placeholder text" need to be replaced with real content.

## Screens / Views
Two states on one page: home and a product detail view. Build the product detail view as its own route (e.g. `/products/:id`) in a real app.

### 1. Home

**Nav** — `position: fixed`, full width, top of viewport, in front of everything (z-index 50).
- At the top of the page (scrollY ≤ 40px): fully transparent background, no blur, no border, no shadow — the hero shows through it completely.
- Once scrolled past 40px: background becomes `oklch(0.99 0.003 95 / 0.75)` (semi-transparent white) with `backdrop-filter: blur(18px) saturate(160%)`, a subtle 1px bottom border (`oklch(0.85 0.012 240)`), and a soft, very light drop shadow (`0 12px 32px oklch(0 0 0 / 0.06)`) — a "glass" bar effect. All these properties transition smoothly (0.4s) between the two states.
- Content: logo "DIVI.STEEL" (orange-accented dot) on the left, teal-colored nav links to each section anchor (About/Products/Industries/Why Us/Quality) plus a solid orange "Get a Quote" pill button on the right.
- Because nav is `fixed` (out of document flow), the Hero section starts at `y = 0` behind it. Any non-hero view that starts at the top (e.g. Product Detail) needs top padding (~130px) to clear the fixed nav.

**Hero** — ~760px min-height, background is a soft diagonal wash (`linear-gradient(120deg, near-white → light teal tint)`), no dark background and no photo. Decorative elements:
- A soft, low-opacity radial glow in the bottom-right corner (orange, very subtle — `oklch(0.62 0.19 35 / 0.08)`).
- A floating line-art illustration on the right: three outlined circles arranged in a pyramid, representing stacked steel-pipe cross-sections (two navy/teal outlined pipes on the bottom row, one solid-orange-filled pipe with a cut-out center on top as the accent piece), plus a soft blurred ellipse "shadow" beneath to ground it. Recreate as SVG positioned absolute, vertically centered, ~400×360px, right-aligned with ~60px margin from the edge.
- Foreground content (z-index above the decorative layers): eyebrow pill ("STEEL SUPPLY, REIMAGINED", `white-space: nowrap` — must not wrap), a two-line display headline ("Strength of steel." / "Delivered on time." — second line has a gradient text-fill from orange to teal and must stay on one line), supporting paragraph, and two CTAs (solid orange button + outlined dark button).

**About** — two-column (image placeholder + copy). Stats are NOT plain text — they're presented as a single dark charcoal-navy card split into 3 equal cells with a 1px teal gap between them (so the teal shows through as thin dividers), each cell: large white number with an orange "+" accent, small teal label underneath (25+ Years in Business / 1200+ Clients Served / 40K+ Tons Shipped per Year).

**Product gallery** — heading + prev/next arrow buttons (outlined, invert to solid dark-navy-bg/white-icon on hover). Horizontal card track (flex, 24px gap, cards 290px wide) that auto-advances every 3.5s, pauses on hover, and supports pointer-drag swipe (threshold 50px horizontal). Dot pagination below (active dot orange, inactive light steel-grey). Each card: striped image placeholder with a solid-teal category tag chip, product name, short description, orange "View Details →" link; card lifts 6px with an orange border + soft shadow on hover. Clicking a card opens the product detail view. 12 sample products cycle through 6 categories (Bars & Rods, Pipes & Tubes, Sheets & Plates, Structural Beams, Wire Mesh, Angles & Channels).

**Industries we serve** — an interactive expanding-panel row (not a static grid). 4 full-height (520px) columns sit side by side, each `flex: 1` by default. One is "active" at a time (defaults to the first): the active column expands to `flex: 3.2` (0.55s eased `flex` transition), reveals its full background image placeholder, icon, name (horizontal, large 30px type), and description; collapsed columns shrink to narrow strips showing only a vertical label (`writing-mode: vertical-rl`, 17px) plus a number tag, photo dimmed to invisible. Hovering any column makes it active (no click needed). These cards keep a **dark charcoal-navy background** (`oklch(0.2 0.025 250)`) with light/white text regardless of the light page theme — an intentional dark contrast block, like a photo card. The corner number/icon accent alternates orange and teal per card (card 1 & 3 orange, card 2 & 4 teal). Categories: Construction, Automotive, Manufacturing, Infrastructure.

**Why choose us** — light teal-tinted inset section (`oklch(0.95 0.025 195)`), list of 4 full-width rows stacked with teal-tinted hairline dividers, each row: a small number, a title, and a description, plus a giant faint "ghost" number in the row background (charcoal at ~4% opacity when active).
- Default state (nothing hovered): **all 4 rows show full title + description simultaneously.**
- Hovering a row: that row becomes "solo" (title grows to 30px dark charcoal, description opacity 1, ghost number visible, number turns orange) while the other three collapse (title shrinks to 22px muted grey, description opacity 0). Moving the mouse off the whole list resets to "all visible."
- Scroll-triggered entrance animation: first time the section scrolls into view (element top < 85% of viewport height), each row animates in with a slide + fade — row 1 from the left, row 2 from the right, rows 3 & 4 from the left — staggered 0.12s per row, 0.7s ease.

**Quality & commitment** — two-column (image placeholder + copy), plus 4 certification pill badges (ISO 9001:2015, ASTM Certified, CE Marked, Mill Test Reports) styled as light-teal-tinted chips with a teal border and dark navy text.

**CTA banner** — full-width dark charcoal-navy band between Quality and Contact, with two soft blurred glow blobs (orange bottom-left, teal top-right) for depth. White heading ("Ready to build with Divi Steel?"), light grey supporting line, and a solid orange "Request a Quote →" button on the right that scrolls to Contact.

**Contact + footer** — two-column: contact details list (address/phone/email/hours) + a light-teal-tinted inquiry form card (name, email, phone, message, white inputs, solid orange submit button). Below that, a full-bleed **gradient footer bar**: `linear-gradient(100deg, orange-red → soft cream)`, left-to-right, with dark charcoal-navy text/logo/links throughout (readable against both the orange and cream ends of the gradient) — logo, copyright, and 3 social links.

### 2. Product Detail
- Back link (orange text) to gallery; top padding ~130px to clear the fixed nav.
- Two-column: large image placeholder + 4 thumbnail placeholders on the left; solid-orange category chip, product name (large display type), description, a 4-row spec table (Dimensions, Grade, Standard, Finish) with light-teal-tinted zebra striping, and two CTAs (solid orange "Request Quote" / outlined dark "Download Spec Sheet") on the right.

## Interactions & Behavior
- Nav background/blur/border/shadow transition based on `scrollY > 40`.
- Nav is `position: fixed` and overlays the hero directly — intentional, not a bug.
- Smooth-scroll anchor links to each section; hero/nav/CTA-banner CTAs scroll to Products or Contact.
- Product slider: autoplay every 3500ms, one card at a time, wraps at the end; paused on `mouseenter`, resumes on `mouseleave`; pointer-down/up delta > 50px triggers prev/next; dot clicks jump to a slide index directly.
- Clicking a product card switches to the detail view for that product and scrolls to top; "Back to Products" returns home and scrolls to top.
- Industries panel: hover swaps which of the 4 columns is expanded (defaults to the first column expanded on load).
- Why-Choose-Us rows: hover swaps which row is "solo"; mouse leaving the row-list resets to "all visible"; rows also have a one-time scroll-triggered entrance animation that fires only the first time the section enters the viewport.
- Buttons: all CTA buttons across the page (nav "Get a Quote", 2 hero CTAs, CTA-banner button, form submit, 2 product-detail CTAs) share one **border-radius setting** driven by a single "Button Shape" toggle: Sharp (0px), Rounded (10px, default), or Pill (999px). Implement as one shared token/variable so all buttons update together.
- Hover states: nav arrow buttons invert to solid dark navy/white icon; hero/CTA-banner/form buttons darken slightly; outlined buttons darken their border to full charcoal.

## State Management
- `view`: `'home' | 'product'`
- `activeProductIndex`: index of the currently viewed product
- `slide`: current gallery slide index (0 to `products.length - visibleCount`)
- `sliderPaused`: whether autoplay is paused (hover)
- `navScrolled`: whether nav should show its glass/solid treatment
- `activeIndustry`: which of the 4 industry columns is expanded (hover-driven)
- `activeWhyRow`: which Why-Choose-Us row is "solo," or `null` for "all visible"
- `whyRevealed`: one-time flag for the scroll-triggered entrance animation (set true once, never reset)
- `buttonShape`: `'sharp' | 'rounded' | 'pill'` — global button radius setting
- Product list: static array of 12 objects for now — `{ id, name, category, short, desc, dimensions, grade, standard, finish, image }`. Replace placeholder text/specs with real data and wire to a CMS or JSON file if products will be managed independently of code.

## Design Tokens

**Colors (OKLCH — hex approximations included for convenience)**

| Role | OKLCH | Approx. Hex | Usage |
|---|---|---|---|
| Page background | `oklch(0.99 0.003 95)` | `#FDFCFB` | Base page/section background |
| Panel/card tint (steel-white) | `oklch(0.965 0.008 240)` | `#F5F5F6` | About/Quality image placeholders |
| Teal tint (light panel) | `oklch(0.95 0.025 195)` | `#EAF4F4` | Why-Us section band, cert badges, form panel |
| Text primary (charcoal-navy) | `oklch(0.22 0.03 250)` | `#2B2E38` | Headings, primary text, dark cards/bands |
| Text body | `oklch(0.42 0.02 250)` | `#5C5F68` | Paragraph copy |
| Text muted | `oklch(0.5–0.55 0.02 250)` | `#71747C`–`#7C7F86` | Labels, secondary captions |
| Border (light) | `oklch(0.87 0.012 240)` | `#D9DBDD` | Card/section borders |
| Border (medium) | `oklch(0.72 0.015 240)` | `#AEB1B6` | Outline button borders |
| **Accent — orange-red (primary)** | `oklch(0.62 0.19 35)` | `#D9531E` | CTAs, buttons, links, hover states, "View Details" |
| Accent hover (darker orange) | `oklch(0.54 0.19 33)` | `#B8451A` | Button hover states |
| **Accent — teal (secondary)** | `oklch(0.55 0.09 195)` | `#4C8B8C` | Eyebrow labels, nav links, category chips, alternating industry accents |
| Dark charcoal-navy band | `oklch(0.2 0.025 250)` / `oklch(0.22 0.03 250)` | `#282B34`–`#2B2E38` | Industries cards, CTA banner, About stat card |

**Typography**
- Display font: Bricolage Grotesque (700 weight for headings, 600 for card/sub-headings)
- Body font: Manrope (400–700)
- Hero H1: 60px / line-height 1.12 / letter-spacing -1.5px, second line gradient-filled orange→teal, must not wrap past 2 lines
- Section H2: 44px / letter-spacing -1px
- Body copy: 15–19px / line-height 1.6–1.8
- Eyebrow labels: 12–13px, 700 weight, letter-spacing 1.5–2px, uppercase, teal

**Spacing**
- Section vertical padding: 120–130px (CTA banner: 72px)
- Section horizontal padding: 80px
- Card/grid gaps: 20–24px

**Radius / Shape**
- Content surfaces (cards, panels, inputs) are sharp/square by default — no rounded corners, intentional modern-industrial look.
- Buttons are the one exception: rounded (10px) by default, controlled by the shared "Button Shape" setting described above.

**Shadows**
- Minimal — mostly borders + flat color for depth. Product cards get a soft shadow on hover (`0 16px 32px oklch(0 0 0 / 0.08)`). Scrolled nav gets a very light shadow (`0 12px 32px oklch(0 0 0 / 0.06)`) to sell the "floating glass bar" effect.

**Animation**
- Hero: static (no load-in fade animation — content renders at full opacity immediately).
- Industries panel expand/collapse: `flex` transition, 0.55s cubic-bezier(0.22,1,0.36,1).
- Why-Us row hover: font-size/color/opacity transitions, 0.4s.
- Why-Us entrance: translateX(±60px)→0 + opacity, 0.7s ease, staggered 0.12s per row, fires once on scroll-into-view.
- Product slider: `transform: translateX(...)`, 0.6s cubic-bezier(0.22,1,0.36,1).

## Assets
No real images used yet except the hero's decorative SVG illustration (recreate as vector). Every other photo area is a placeholder (diagonal striped pattern + monospace bracketed label, e.g. `[ FACILITY / TEAM PHOTO ]`, `[ QUALITY TESTING / LAB PHOTO ]`, `[ PRODUCT NAME PHOTO ]`). Replace with real photography before launch. No icon library used — small geometric shapes (squares/circles/diamonds) stand in for icons in the Industries section; consider a proper icon set in production.

## Files
- `Divi Steel Homepage.dc.html` — current/final design source (light industrial theme, proprietary template format — read as spec, not runnable code). This is the single source of truth alongside this README.
