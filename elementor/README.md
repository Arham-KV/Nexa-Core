# Elementor Implementation Guide: NexaCore Solutions

This guide provides technical instructions for recreating the **NexaCore Solutions** website in **WordPress 6.x** using **Elementor Pro (Flexbox Containers)**.

---

## 1. WordPress Environment Prerequisites
- **Core:** WordPress 6.4+
- **Theme:** Hello Elementor (recommended blank canvas for optimal speed)
- **Plugins Required:**
  - Elementor (Free)
  - Elementor Pro (Theme Builder, Form Widget, Popup Builder)
- **Settings:**
  - Settings > Permalinks: Set to `Post name` (`/%postname%/`)
  - Elementor > Settings > Features: Enable **Flexbox Container** (Active), **Nested Elements** (Active)

---

## 2. Global Site Settings (Elementor Theme Style)

### Global Colors
- **NC Primary:** `#0F172A`
- **NC Secondary:** `#2563EB`
- **NC Accent:** `#38BDF8`
- **NC Background:** `#F8FAFC`
- **NC Text:** `#334155`
- **NC White:** `#FFFFFF`

### Global Fonts
- **Primary:** `Plus Jakarta Sans` (Weight: 700 / 800 for Headings)
- **Secondary / Body:** `Inter` (Weight: 400 / 500 / 600)
- **Font Sizes:**
  - H1: Desktop `52px` / Tablet `40px` / Mobile `32px` (Line height: 1.15)
  - H2: Desktop `38px` / Tablet `32px` / Mobile `26px` (Line height: 1.25)
  - H3: Desktop `22px` / Tablet `20px` / Mobile `18px` (Line height: 1.35)
  - Body: Desktop `16px` / Mobile `15px` (Line height: 1.65)

---

## 3. Global Header & Footer (Elementor Theme Builder)

### A. Sticky Header (`Header` Template)
1. **Parent Container:**
   - Content Width: Full Width (100%), Inner Max Width: `1240px`
   - Direction: Row (Horizontal)
   - Justify Content: Space Between
   - Align Items: Center
   - Padding: Desktop `18px 24px` | Mobile `14px 16px`
   - Advanced > Motion Effects: **Sticky: Top**, Effects Offset: `20px`
   - CSS Classes: `nc-sticky-header`
2. **Left Column:**
   - Heading or Site Logo: Text "NexaCore" (bold `#0F172A`) + "Solutions" (`#2563EB`)
3. **Center Column (Desktop Only):**
   - WordPress Menu Widget (Nav Menu)
   - Layout: Horizontal, Pointer: Underline (Animated), Text Color: `#334155`, Hover: `#2563EB`
4. **Right Column:**
   - Button Widget: "Free Consultation"
   - Link: `/contact` (or opens Elementor Popup `#consultation-popup`)
   - Style: Background `#2563EB`, Border Radius `10px`, Padding `12px 22px`

### B. Global Footer (`Footer` Template)
1. **Parent Container:**
   - Background: `#0F172A`
   - Padding: Desktop `80px 24px 32px` | Mobile `48px 16px 24px`
   - Layout: 4-Column Grid or Flexbox Wrap (4 Child Containers)
     - **Col 1 (35%):** Logo, Mission summary, Social Icons (LinkedIn, X, GitHub)
     - **Col 2 (20%):** Quick Links (Home, About, Services, Case Studies, Contact)
     - **Col 3 (25%):** Core Services (Cloud Architecture, Managed IT, Cyber Security, Automation)
     - **Col 4 (20%):** Contact Hotline, Austin HQ Address, Business Hours
2. **Bottom Sub-Footer:**
   - Border Top: 1px solid rgba(255,255,255,0.08)
   - Padding Top: `24px`
   - Copyright notice & Legal policy links (Privacy Policy, Terms of Service)

---

## 4. Page 1: Homepage Section-by-Section

### Section 1: Hero Container
- **Container Structure:**
  - 2-Column Flexbox (Direction: Row on Desktop, Column on Mobile)
  - Height: Min-Height `680px`
  - Padding: `80px 24px 60px`
- **Left Column (Content):**
  - **Badge Widget:** Text "New 2026 Enterprise Standards", Class `nc-pill-badge`
  - **Heading (H1):** "Intelligent Technology Solutions Built to Accelerate Business Growth"
  - **Text Editor:** High-conversion value proposition paragraph (16px, `#475569`)
  - **Child Container (Buttons):** Direction Row, Gap `14px`
    - Button A (Primary): "Get a Free Consultation" (`/contact`)
    - Button B (Secondary): "Explore Services" (`/services`)
- **Right Column (Visual Card & Metric Showcase):**
  - High-fidelity visual showcase card with floating metric badges ("99.98% Uptime SLA", "2.4x ROI Average")

### Section 2: Trust & Stats Bar
- **Container Structure:**
  - 4-Column Flexbox Container, Background `#FFFFFF`, Border: 1px solid `#E2E8F0`, Radius `16px`
  - Box Shadow: `0 10px 25px -5px rgba(15, 23, 42, 0.05)`
  - Padding: `32px 40px`
  - Widgets: Counter Widgets with classes `nc-stat-counter`
    - Stat 1: `150+` Completed Projects
    - Stat 2: `99.4%` Client Retention Rate
    - Stat 3: `12+` Enterprise Industry Awards
    - Stat 4: `24/7/365` Dedicated Local Support

### Section 3: Services Overview Grid
- **Container Structure:**
  - Grid Container: 3 Columns Desktop, 1 Column Mobile
  - Gap: `28px`
- **Card Widget (Icon Box / Custom Container):**
  - Background `#FFFFFF`, Border 1px solid `#E2E8F0`, Radius `16px`, Padding `32px`
  - Class: `nc-card-hover`
  - Icon in `nc-service-icon-wrap`
  - Title (H3), Description (Paragraph), Text Link "Learn More →"

### Section 4: "Why Choose Us" Interactive Feature Split
- **Container Structure:**
  - 2-Column Flexbox (50% / 50%)
  - Left: Accordion / Feature List (Enterprise Security, Dedicated Account Manager, Rapid SLA)
  - Right: Visual proof dashboard / workflow diagram

### Section 5: Proven 4-Step Process
- **Container Structure:**
  - 4-Column Horizontal Step Flow (Direction: Row Desktop, Column Mobile)
  - Step 1: Initial Discovery & IT Audit
  - Step 2: Tailored Architecture Design
  - Step 3: Seamless Cloud & System Deployment
  - Step 4: 24/7 Monitoring & Optimization

### Section 6: Client Testimonials
- **Container Structure:**
  - Testimonial Carousel Widget or 3-Column Testimonial Cards
  - Class: `nc-quote-card`
  - Star rating icons (5/5), Client Quote, Author photo avatar, Name, Position, Company

### Section 7: Conversion Banner
- **Container Structure:**
  - Background: Gradient `#0F172A` to `#1E293B`
  - Padding: `72px 40px`, Border Radius `20px`
  - Heading (H2, White): "Ready to Elevate Your Company’s IT Infrastructure?"
  - Subheading: "Schedule a complimentary 30-minute discovery session with our senior architects."
  - CTA Button: "Claim Your Free Consultation"

---

## 5. Elementor Pro Custom Form Integration (Contact Page)

1. Add **Elementor Pro Form Widget**
2. Configure Form Fields:
   - Field 1: `Full Name` (Text, Required, Width 50%)
   - Field 2: `Business Email` (Email, Required, Width 50%)
   - Field 3: `Phone Number` (Tel, Required, Width 50%)
   - Field 4: `Service Required` (Select Dropdown, Width 50%):
     - Options: Managed IT Support, Cloud Migration & Architecture, Workflow Automation & APIs, Cybersecurity & Threat Defense, Strategic Tech Consulting
   - Field 5: `Estimated Timeline` (Select Dropdown, Width 50%)
   - Field 6: `Project Details & Scope` (Textarea, Required, Width 100%)
3. **Actions After Submit:**
   - Email: Send notification to `admin@nexacore-solutions.com`
   - Email 2: Send confirmation auto-responder to client email
   - Webhook: Connect to CRM (HubSpot / Make.com / Zapier)
   - Redirect: `/thank-you/` (optional conversion tracking)
4. Form Styling:
   - Add class `nc-form-styled` to Form widget.
