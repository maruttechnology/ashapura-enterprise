# Project Implementation Plan: Ashapura Enterprise Website

This document outlines the step-by-step technical plan to implement the website for **Ashapura Enterprise** using Astro, Tailwind CSS, Astro Content Collections, Astro Icon, and Astro View Transitions.

---

## 1. Architectural Answer: Do we need React here?

**No, React is not needed for this website. Astro can handle all interactive features natively and with superior performance.**

### Why Astro + Vanilla JS is the optimal choice:
1.  **Zero-JS by Default Performance:** Astro pre-renders everything to static HTML. For a marketing site, loading the React runtime (~40KB) and executing hydration overhead is unnecessary and hurts performance metrics like **LCP** (Largest Contentful Paint) and **INP** (Interaction to Next Paint) — especially on mobile devices on cellular networks.
2.  **Built-in View Transitions:** Astro has first-class support for the browser's native View Transitions API (via the `<ClientRouter />` component). This allows seamless, animated, SPA-like page routing between the Home page and Product Detail pages without needing React Router or any SPA frameworks.
3.  **Lightweight Interactivity:** The interactive components in this design spec can be implemented with clean, vanilla client-side JavaScript in standard Astro `<script>` tags:
    *   **Glassmorphism Navbar:** Toggled via a scroll listener adding/removing Tailwind classes.
    *   **Interactive Slider (Carousel):** Implemented using lightweight CSS grid/flex transforms, standard touch/mouse events for drag-to-swipe, and simple timer controls.
    *   **Expanding Industry Cards:** Triggered by standard mouse-enter/mouse-leave listeners or hover CSS classes that animate Tailwind flex-grow properties.
    *   **Why Choose Us Accordion:** Controlled by toggling Tailwind height/opacity classes based on hover.
4.  **Future-Proof Hybrid Architecture:** If the client decides to add a complex interactive tool in the future (e.g., an interactive weight-to-price calculator or a live order portal), Astro's **island architecture** allows us to drop in a single React, Svelte, or Vue component *only* where needed, keeping the rest of the site static and fast.

---

## 2. Recommended Tech Stack & Dependencies

*   **Framework:** Astro 5.x (latest stable)
*   **Styling:** Tailwind CSS v4.x (native to Astro via modern integrations)
*   **Asset Management (Icons):** `astro-icon` (efficient SVG-based icon package)
*   **Fonts:** Google Fonts (`Bricolage Grotesque` and `Manrope`) loaded via pre-connect and custom `@font-face` links for speed.
*   **Data Modeling:** Astro Content Collections (for managing products as Markdown/YAML files).
*   **Page Transitions:** Astro `<ClientRouter />` component.

---

## 3. Directory Structure

```text
/
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collection schemas
│   │   └── products/          # Markdown/YAML data for each steel product
│   │       ├── ms-angles.md
│   │       ├── ms-pipes.md
│   │       └── ...
│   ├── components/            # Reusable Astro elements (static + script)
│   │   ├── Navbar.astro       # Floating glass nav with scroll script
│   │   ├── Hero.astro         # Hero with radial gradients
│   │   ├── About.astro        # About Us & stats
│   │   ├── Carousel.astro     # Product carousel slider (vanilla JS)
│   │   ├── Industries.astro   # Expanding panels section (vanilla JS)
│   │   ├── WhyChooseUs.astro  # Accordion rows (vanilla JS)
│   │   ├── Infrastructure.astro
│   │   ├── Certifications.astro
│   │   ├── ContactForm.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro       # Global page layout (HTML headers, fonts, ViewTransitions)
│   └── pages/
│       ├── index.astro        # Home page compiling all components
│       └── products/
│           └── [id].astro     # Dynamic product detail pages
├── public/
│   ├── images/                # Optimized client product and facility assets
│   └── favicon.svg
├── docs/
│   ├── README.md              # Original design spec
│   ├── project_details.md     # Client assets & content copy
│   └── plan.md                # This implementation plan
├── astro.config.mjs           # Astro configurations
├── tailwind.config.mjs       # Tailwind settings
└── package.json
```

---

## 4. Phase-by-Phase Implementation Plan

### Phase 1: Project Setup & Dependency Configuration
1.  Initialize a new empty Astro project:
    ```bash
    npm create astro@latest ./ -- --template empty --install --git
    ```
2.  Install Tailwind CSS:
    ```bash
    npx astro add tailwind
    ```
3.  Install Astro Icon:
    ```bash
    npx astro add icon
    ```
4.  Configure `astro.config.mjs` and styles in `src/styles/global.css` to define the design tokens (OKLCH color variables, Bricolage Grotesque display font, Manrope body font).

### Phase 2: Content Collections Configuration
1.  Define the `products` schema in `src/content/config.ts`:
    ```typescript
    import { defineCollection, z } from 'astro:content';
    const productsCollection = defineCollection({
      schema: z.object({
        name: z.string(),
        category: z.string(),
        shortDescription: z.string(),
        description: z.string(),
        dimensions: z.string(),
        grade: z.string(),
        standard: z.string(),
        finish: z.string(),
        image: z.string(), // path to image
      })
    });
    export const collections = {
      'products': productsCollection,
    };
    ```
2.  Create MD/YAML files in `src/content/products/` matching the 8 client products with real specifications.

### Phase 3: Global Layout & Theme Setup
1.  Create `src/layouts/Layout.astro`.
2.  Include google font links for Bricolage Grotesque and Manrope.
3.  Include `<ClientRouter />` inside `<head>` to activate native view transitions.
4.  Create the `Navbar` component with fixed positioning. Write a lightweight `<script>` that listens to `window.scrollY` and toggles Tailwind utility classes for glass background blur and border when `scrollY > 40`.

### Phase 4: Homepage Sections Building
1.  **Hero:** Create radial blurred animating divs (`animate-pulse` or custom float keyframe) and responsive copy with staggered loading effects.
2.  **About Us:** Implement grid layout showing three stats cards.
3.  **Carousel:** Render product slides from Astro Content Collection. Attach a script block implementing touch-swipe thresholds, auto-slide setInterval, hover-pause, and manual dot selectors.
4.  **Industries:** Implement side-by-side divs with flex width transitions. Write script listening to mouse enters on elements to adjust `flex-grow` styling.
5.  **Why Choose Us:** Accordion lists with expanding descriptions based on active mouse coordinates.
6.  **Infrastructure, Quality & Contact:** Create addresses columns, certifications pill badges, and fully styled HTML contact form.

### Phase 5: Product Details Page & Routing
1.  Create `src/pages/products/[id].astro`.
2.  Query Content Collection dynamic entries:
    ```astro
    ---
    import { getCollection, getEntry } from 'astro:content';
    export async function getStaticPaths() {
      const products = await getCollection('products');
      return products.map(p => ({ params: { id: p.slug }, props: { product: p } }));
    }
    const { product } = Astro.props;
    const { data, body } = product;
    ---
    ```
3.  Layout specifications table (Dimensions, Grade, Standard, Finish) and back button using view transitions matching design layout.

### Phase 6: Image Optimization & Polish
1.  Replace visual placeholder elements with actual catalog photography.
2.  Utilize Astro's built-in `<Image />` component for automatic WebP conversion, resizing, and responsive srcset generation to hit perfect Google Lighthouse metrics.
3.  Add micro-animations to elements like buttons and cards on hover.
