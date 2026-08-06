# Handoff: Divi Steel Homepage (v2 — Dark Modern)

## Overview
Marketing homepage for Divi Steel, a steel dealer/distributor. Dark, modern aesthetic with animated hero, a floating glass nav, an interactive expanding-panel industries section, a hover-accordion "Why Choose Us" section, an auto-playing/swipeable product gallery that opens a product detail view, quality/certifications, and contact + footer.

## About the Design Files
The bundled HTML file (`Divi Steel Homepage.dc.html`) is a **design reference prototype** built in an internal HTML design tool — not production code to copy directly. It uses a proprietary templating syntax (`{{ }}` holes, `<sc-for>`, `<sc-if>`, a custom `DCLogic` class) that will not run as-is in a normal web app. Treat it as a precise visual/behavioral spec. Recreate it in the target codebase's actual stack (React, Vue, plain HTML/CSS/JS, etc.) using that codebase's existing components, patterns, and libraries — or choose the most sensible stack if this is a fresh project. A pre-bundled, plain, dependency-free `Divi Steel Homepage - Standalone.html` is also included if you just want to open it in a browser to see it run.

## Fidelity
**High-fidelity.** Colors, typography, spacing, layout, and interaction behavior are final. All photos are **placeholders** (striped rectangles with a bracketed monospace label like `[ HERO PHOTO ]`) — swap in real photography. Placeholder company details (address, phone, email) and all body copy marked "placeholder text" need to be replaced with real content.

## Screens / Views
Two states on one page: home and a product detail view. Build the product detail view as its own route (e.g. `/products/:id`) in a real app.

### 1. Home

**Nav** — `position: fixed`, full width, top of viewport, in front of everything (z-index 50).
- At the top of the page (scrollY ≤ 40px): fully transparent background, no blur, no border, no shadow — the hero shows through it completely, so the nav appears to have no chrome, just logo + links floating over the hero image/gradient.
- Once scrolled past 40px: background becomes `oklch(0.17 0.01 30 / 0.5)` (semi-transparent dark) with `backdrop-filter: blur(18px) saturate(160%)`, a subtle 1px bottom border (`oklch(0.96 0.005 60 / 0.1)`), and a soft drop shadow (`0 12px 32px oklch(0 0 0 / 0.28)`) — a "glass" bar that content appears to float up beneath as you scroll.
- All these properties transition smoothly (0.4s) between the two states.
- Content: logo "DIVI.STEEL" (accent-colored dot) on the left, links to each section anchor (About/Products/Industries/Why Us/Quality) plus a solid "Get a Quote" pill button on the right.
- Important layout consequence: because nav is `fixed` (out of document flow), the Hero section starts at `y = 0` and is naturally the first thing behind the nav. Any non-hero page/view that starts at the top (e.g. the Product Detail view) needs top padding (~130px) to clear the fixed nav so its content isn't hidden underneath it.

**Hero** — full-bleed, ~760px min-height, dark background with two large blurred radial-gradient "blobs" (one vermillion, one amber) that slowly float via a looping CSS animation, plus a faint grid-line overlay masked to a radial vignette centered left-of-center. Eyebrow pill ("STEEL SUPPLY, REIMAGINED"), a two-line display headline ("Built different." / "Delivered on time." — second line has a gradient text-fill and must stay on one line, so keep headline font-size ≤ ~60px at this container width, or give it a wide-enough box, to avoid wrapping into the paragraph below), supporting paragraph, and two CTAs (solid light button + outlined button). Headline/eyebrow/paragraph/CTAs fade+slide up on load with staggered delays (0.1s/0.2s/0.3s).

**About** — two-column (image placeholder + copy), 3 stat callouts (25+ years, 1200+ clients, 40K+ tons/year) in large display numbers with amber "+" accents.

**Product gallery** — heading + prev/next arrow buttons. Horizontal card track (flex, 24px gap, cards 290px wide) that auto-advances every 3.5s, pauses on hover, and supports pointer-drag swipe (threshold 50px horizontal). Dot pagination below. Each card: striped image placeholder with category tag chip, product name, short description, "View Details →" link, lifts 6px with an accent border on hover. Clicking a card opens the product detail view. 12 sample products cycle through 6 categories (Bars & Rods, Pipes & Tubes, Sheets & Plates, Structural Beams, Wire Mesh, Angles & Channels).

**Industries we serve** — an interactive expanding-panel row (not a static grid). 4 full-height (520px) columns sit side by side, each `flex: 1` by default. One is "active" at a time (defaults to the first): the active column expands to `flex: 3.2` (with a 0.55s eased transition on the `flex` property), reveals its full background image placeholder, icon, name (horizontal, large 30px type), and description; the collapsed columns shrink to narrow strips of `flex: 1` showing only a small icon-less vertical label (`writing-mode: vertical-rl`, 17px) plus their number tag, with the photo dimmed to invisible. Hovering any column makes it the active one (`onMouseEnter` swaps the active index — no click needed). Categories: Construction, Automotive, Manufacturing, Infrastructure.

**Why choose us** — dark inset section, list of 4 full-width rows (not a card grid) stacked with hairline dividers, each row: a small number, a title, and a description, plus a giant ("ghost") faint number rendered large in the background of the row for decoration.
- Default state (nothing hovered): **all 4 rows show their full title + description simultaneously** — nothing is collapsed.
- Hovering a specific row: that row becomes "solo" (title grows to 30px, description opacity 1, ghost number becomes faintly visible at 5% opacity, number turns accent-colored) while the other three collapse (title shrinks to 22px muted, description opacity 0, ghost hidden). Moving the mouse off the whole list resets to "all visible."
- Scroll-triggered entrance animation: the first time this section scrolls into view (element top < 85% of viewport height), each row animates in with a slide + fade — row 1 slides in from the left, row 2 from the right, rows 3 and 4 from the left — staggered by 0.12s per row, 0.7s ease.

**Quality & commitment** — two-column (image placeholder + copy), plus 4 certification pill badges (ISO 9001:2015, ASTM Certified, CE Marked, Mill Test Reports).

**Contact + footer** — two-column: contact details list (address/phone/email/hours) + a dark inquiry form card (name, email, phone, message, submit button). Footer bar below with logo, copyright, and 3 social links.

### 2. Product Detail
- Back link to gallery (top padding ~130px to clear the fixed nav).
- Two-column: large image placeholder + 4 thumbnail placeholders on the left; category chip, product name (large display type), description, a 4-row spec table (Dimensions, Grade, Standard, Finish), and two CTAs (Request Quote / Download Spec Sheet) on the right.

## Interactions & Behavior
- Nav background/blur/border/shadow transition based on `scrollY > 40`.
- Nav is `position: fixed` and overlays the hero directly (see Nav section above) — this is intentional, not a bug.
- Smooth-scroll anchor links to each section; the "Get a Quote" / hero CTAs scroll to Products/Contact.
- Product slider: autoplay every 3500ms, one card at a time, wraps at the end; paused on `mouseenter`, resumes on `mouseleave`; pointer-down/up delta > 50px triggers prev/next; dot clicks jump to a slide index directly.
- Clicking a product card switches to the detail view for that product and scrolls to top; "Back to Products" returns home and scrolls to top.
- Industries panel: hover swaps which of the 4 columns is expanded (defaults to the first column expanded on load, not all-collapsed).
- Why-Choose-Us rows: hover swaps which row is "solo"; mouse leaving the whole row-list resets to "all visible"; rows also have a one-time scroll-triggered entrance animation (see above) that should only fire once, the first time the section enters the viewport.
- Buttons: 6 CTA buttons across the page (nav "Get a Quote", 2 hero CTAs, form submit, 2 product-detail CTAs) all share one **border-radius setting** driven by a single "Button Shape" toggle: Sharp (0px), Rounded (10px, default), or Pill (999px). Implement this as one shared token/variable so all buttons update together, not per-button values.
- Hover states elsewhere: nav CTA darkens/lightens, hero buttons invert, form submit button inverts color, outlined buttons brighten border.

## State Management
- `view`: `'home' | 'product'`
- `activeProductIndex`: index of the currently viewed product
- `slide`: current gallery slide index (0 to `products.length - visibleCount`)
- `sliderPaused`: whether autoplay is paused (hover)
- `navScrolled`: whether nav should show its glass/solid treatment
- `activeIndustry`: which of the 4 industry columns is expanded (hover-driven)
- `activeWhyRow`: which Why-Choose-Us row is "solo," or `null` for "all visible"
- `whyRevealed`: one-time flag for the scroll-triggered entrance animation (set true once and never reset)
- `buttonShape`: `'sharp' | 'rounded' | 'pill'` — global button radius setting
- Product list: static array of 12 objects for now — `{ id, name, category, short, desc, dimensions, grade, standard, finish, image }`. Replace placeholder text/specs with real data and wire to a CMS or JSON file if products will be managed independently of code.

## Design Tokens

**Colors (OKLCH)**
- Background (page): `oklch(0.17 0.01 30)` — warm charcoal
- Panel/card background: `oklch(0.22 0.012 30)`
- Darker inset section (Why Us): `oklch(0.14 0.008 30)`
- Border/hairline: `oklch(0.32 0.02 30 / 0.6)`
- Text primary: `oklch(0.96 0.005 60)` — warm off-white
- Text muted: `oklch(0.75 0.02 40)` / `oklch(0.65–0.68 0.02 40)` for secondary copy
- Accent 1 (vermillion): `oklch(0.62 0.24 29)`
- Accent 2 (amber/gold): `oklch(0.8 0.17 70)`
- Nav glass tint (scrolled): `oklch(0.17 0.01 30 / 0.5)`

**Typography**
- Display font: Bricolage Grotesque (700 weight for headings, 600 for card/sub-headings)
- Body font: Manrope (400–700)
- Hero H1: 60px / line-height 1.12 / letter-spacing -1.5px (must not wrap past 2 lines at the design's container width)
- Section H2: 44px / letter-spacing -1px
- Body copy: 15–19px / line-height 1.6–1.8
- Eyebrow labels: 12–13px, 700 weight, letter-spacing 1.5–2px, uppercase

**Spacing**
- Section vertical padding: 120–130px
- Section horizontal padding: 80px
- Card/grid gaps: 20–24px

**Radius / Shape**
- All content surfaces (cards, panels, inputs) are fully sharp/square — no rounded corners, intentional modern-industrial look.
- Buttons are the one exception: rounded (10px radius) by default, controlled by the single "Button Shape" setting described above.

**Shadows**
- None on content surfaces; depth comes from borders, translucency, and blur (blob backgrounds, nav backdrop blur) instead of drop shadows.
- The one exception is the scrolled nav's drop shadow (see Nav section), used specifically to sell the "floating glass bar" effect.

**Animation**
- Hero load-in: fade + translateY(36px→0), staggered per element, ease, ~0.9s.
- Blob float: 12–14s ease-in-out infinite, translate + scale.
- Industries panel expand/collapse: `flex` transition, 0.55s cubic-bezier(0.22,1,0.36,1).
- Why-Us row hover: font-size/color/opacity transitions, 0.4s.
- Why-Us entrance: translateX(±60px)→0 + opacity, 0.7s ease, staggered 0.12s per row, fires once on scroll-into-view.
- Product slider: `transform: translateX(...)`, 0.6s cubic-bezier(0.22,1,0.36,1).

## Assets
No real images used yet — every photo area is a placeholder (diagonal striped pattern + monospace bracketed label, e.g. `[ HERO PHOTO — STEEL PLANT / COIL WAREHOUSE ]`, `[ FACILITY / TEAM PHOTO ]`, `[ QUALITY TESTING / LAB PHOTO ]`, `[ PRODUCT NAME PHOTO ]`). Replace with real photography before launch. No icon library used — small geometric shapes (squares/circles/diamonds) stand in for icons in the Industries section; consider a proper icon set in production.

## Files
- `Divi Steel Homepage.dc.html` — current/final design source (dark modern theme, proprietary template format — read as spec, not runnable code)
- `Divi Steel Homepage - Standalone.html` — the same design pre-compiled into plain, dependency-free HTML/CSS/JS; open directly in any browser to see it run
