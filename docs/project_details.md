# Project Details: Ashapura Enterprise Website

This document serves as the central source of truth for all project data, client information, and structural requirements for the Ashapura Enterprise website.

---

## 1. Client Profile

*   **Company Name:** Ashapura Enterprise
*   **Business Type:** Stockiest & Dealer (Mild Steel and Re-rolling products)
*   **Tagline:** Your Trusted Partner in Quality Steel Solutions
*   **Core Pillars:** Quality Products, Competitive Pricing, Reliable Service

---

## 2. Branding & Visual Identity (Inspired by Divi Steel Spec)

*   **Style:** Dark, modern, premium, industrial.
*   **Color Palette (OKLCH):**
    *   **Background (Page):** `oklch(0.17 0.01 30)` — Warm charcoal
    *   **Panel / Card Background:** `oklch(0.22 0.012 30)` — Sleek dark grey
    *   **Darker Inset Background (e.g., Why Choose Us):** `oklch(0.14 0.008 30)`
    *   **Borders & Dividers:** `oklch(0.32 0.02 30 / 0.6)`
    *   **Text (Primary):** `oklch(0.96 0.005 60)` — Warm off-white
    *   **Text (Muted/Secondary):** `oklch(0.75 0.02 40)` / `oklch(0.65 0.02 40)`
    *   **Accent 1 (Vermillion):** `oklch(0.62 0.24 29)` — Bold branding color
    *   **Accent 2 (Amber/Gold):** `oklch(0.8 0.17 70)` — Subtler highlights
    *   **Nav Glass Tint:** `oklch(0.17 0.01 30 / 0.5)` with `backdrop-filter: blur(18px) saturate(160%)`
*   **Typography:**
    *   **Display Font:** `Bricolage Grotesque` (700 weight for major headings, 600 for cards/sub-headings)
    *   **Body Font:** `Manrope` (400 to 700 weights)
*   **Global Radius Control (Button Shape Toggle):**
    *   Shared dynamic setting: `sharp` (0px), `rounded` (10px, default), or `pill` (999px) for all primary call-to-actions.
    *   Content containers (cards, grids, inputs) remain sharp (0px) to project an industrial, raw-steel feeling.

---

## 3. Actual Client Content (from Catalogue)

### 3.1 About Us
> Ashapura Enterprise is a trusted stockiest and dealer of premium-quality mild steel and re-rolling products. We are committed to supplying quality materials, competitive prices and reliable service to meet the diverse requirements of construction, engineering, fabrication, infrastructure and industrial projects.
> 
> With our strong industry experience and customer-focused approach, we have built a solid reputation for quality, integrity and timely delivery.

**Core Values/Focus Icons:**
1.  **Quality Assurance**
2.  **Trust & Reliability**
3.  **Timely Delivery**
4.  **Customer Satisfaction**

### 3.2 Mission & Vision
*   **Mission:** To deliver high-quality steel products with exceptional customer service, competitive pricing and timely delivery while building long-term partnerships with our customers.
*   **Vision:** To become one of Gujarat's most trusted and preferred suppliers of mild steel and structural steel products by maintaining excellence in quality, service and customer satisfaction.

### 3.3 Our Products (Portfolio)
We supply a wide range of Mild Steel and Re-rolling products to meet the needs of various industries:
1.  **M.S. Angles**
2.  **M.S. Pipes**
3.  **Bright Bars**
4.  **Square Bars**
5.  **Channels**
6.  **Round Bars**
7.  **Pata-Patti**
8.  **All Kinds of Re-rolling Products** (Custom sections, customized re-rolled flats, etc.)

*Note: For the website, these 8 items will form our dynamic product catalog and individual product detail pages.*

### 3.4 Industries We Serve
Our products are widely used in multiple industries and applications:
*   **Construction:** High-rise buildings, residential & commercial projects.
*   **Infrastructure:** Bridges, flyovers, metro projects, roads & highways.
*   **Engineering:** Machinery, equipment & industrial structures.
*   **Fabrication:** Steel fabrication, fabrication workshops & job works.
*   **Manufacturing:** Industrial manufacturing units & OEM industries.

### 3.5 Why Choose Us
*   **Premium Quality:** We deal in high-grade steel from reputed manufacturers and mills.
*   **Competitive Pricing:** Best quality at the most reasonable prices.
*   **Ready Stock Availability:** Large inventory to meet urgent requirements.
*   **Timely Delivery:** Prompt and safe delivery at your doorstep.
*   **Experienced Team:** Skilled and experienced professionals to serve you better.
*   **Customer Focused:** We believe in long-term relationships and customer satisfaction.

### 3.6 Infrastructure & Facilities
*   **Our Office:** Our well-equipped office helps us manage operations efficiently and provide quick response to customer requirements.
*   **Our Godown:** Spacious godown with proper storage facilities ensures safe handling of materials and timely supply to our customers.
*   **Key Operations Highlights:** Large Inventory, Well Organized Storage, Safe Handling & Quick Dispatch.

### 3.7 Quality & Commitment
*   **Quality Assurance:** We ensure that all our products meet industry standards and specifications.
*   **Reliable Service:** We are committed to delivering quality products with honesty and transparency.
*   **Customer Satisfaction:** Customer satisfaction is our top priority and the key to our success.
*   **Strong Relationships:** We believe in building long-term relationships with our customers.

### 3.8 Contact Information
*   **Contact Persons:**
    *   **N.C. Chauhan:** +91 96382 55045
    *   **Narendrasinh Chauhan:** +91 98250 31940
*   **Email:** [ashapuraenterprise02@gmail.com](mailto:ashapuraenterprise02@gmail.com)
*   **Office Address:** 
    32, Shyam Industrial Estate, 
    Nr. Soni Ni Chali Cross Road, NH8, 
    Odhav, Ahmedabad - 382415
*   **Godown Address:** 
    51/1, GIDC Estate, 
    B/h. Balaji Hotel, Nr. Fire Station, 
    Odhav, Ahmedabad - 382415

---

## 4. Website Sitemap & Views

### View 1: Marketing Homepage (`/`)
*   **Fixed Floating Glass Navigation:** Translates into a blurred glass pane once scrolled past 40px.
*   **Hero Section:** High-impact bold typography with radial blob gradients animating in the background. Animated grid line overlay. Staggered load-in animation.
*   **About Us Section:** Text + statistics + facility layout/photo slot.
*   **Interactive Product Carousel:** Horizontal sliding gallery with drag/swipe support, dots navigation, prev/next buttons, and auto-play pausing on hover. Lifts on hover and links to the product detail page.
*   **Interactive Expanding Industries Section:** Side-by-side columns expanding flex size from `flex: 1` to `flex: 3.2` on hover, revealing specific icons and descriptions.
*   **Why Choose Us Hover-Accordion Section:** Highlighted full rows with ghost numbers that collapse down to titles when another row is hovered, showing description only on hover (or all visible when unhovered).
*   **Infrastructure Section:** Showcasing Office and Godown cards with actual images and operational pillars.
*   **Quality Commitment / Certifications:** ASTM, ISO 9001:2015, CE Marked, Mill Test Reports badges.
*   **Contact Us & Inquiry Form:** Simple, styled input form with fields (Name, Email, Phone, Message) + Company Map and Addresses.

### View 2: Product Detail Pages (`/products/[id]`)
*   Individual pages powered by Astro Content Collections.
*   Shows product name, high-resolution photo gallery with thumbnail select, rich markdown description, technical specifications table (Dimensions, Grade, Standard, Finish), and dual call-to-actions: "Request Quote" and "Download Spec Sheet".
*   Maintains the global header and footer, utilizing Astro View Transitions for high-fidelity native navigation animations.
