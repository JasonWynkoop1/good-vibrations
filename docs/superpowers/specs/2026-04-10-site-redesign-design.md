# Good Vibrations Website Redesign — Design Spec

## Overview

Complete redesign of the Good Vibrations Speech and Language website with Lumerion-inspired pastel aesthetics, updated content across 8 sections, and migration from GitHub Pages to Vercel deployment.

## Architecture

**Stack (unchanged):** React 18 + TypeScript + Vite  
**Styling:** Tailwind CSS (keep v3, update config for new palette)  
**Layout:** Single-page scrolling with smooth anchor navigation  
**Deployment:** Vercel (replacing GitHub Pages)  
**Contact form:** EmailJS (existing integration, keep as-is)

## Color Palette — "Lavender Dream"

Inspired by Lumerion's pastel purple palette, adapted to the Good Vibrations logo colors.

### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#faf8ff` | Page background (pale lavender) |
| `foreground` | `#2d2248` | Primary text (dark purple) |
| `card` | `#ffffff` | Card backgrounds |
| `primary` | `#7c6bc4` | Buttons, links, headings accent (purple) |
| `secondary` | `#5bbfb5` | Secondary accents (teal, from logo) |
| `accent` | `#f0d060` | Warm accent (soft gold, from logo) |
| `muted` | `#f3f0ff` | Muted backgrounds (pale lavender) |
| `muted-foreground` | `#6b5f8a` | Secondary text (muted purple) |
| `border` | `rgba(124,107,196,0.12)` | Subtle purple borders |
| `surface-lavender` | `#f5f0ff` | Section backgrounds |
| `surface-blue` | `#f0f8ff` | Alternate section tint |
| `surface-gold` | `#fefce8` | Warm section tint |

### No Dark Mode
This is a public-facing service business site. Dark mode is not needed.

## Typography

Adopt Lumerion's font stack:
- **Headings:** `'Outfit', system-ui, sans-serif` — weights 400, 500, 600, 700
- **Body:** `'Lora', Georgia, serif` — weights 400, 500, 600 (including italic)
- **Buttons/Labels:** Outfit (same as headings)

Import from Google Fonts in `index.html`.

## Logo

File: `src/assets/logo-0.png` (1536x1024, extracted from PDF)  
Usage: Header nav (scaled to ~180px wide), footer, and hero section.  
The logo contains its own text ("GOOD VIBRATIONS / SPEECH AND LANGUAGE") so no separate text rendering is needed next to it when using the full logo.

## Sections (Top to Bottom)

### 1. Sticky Navigation
- Glass-morphism: `bg-white/80 backdrop-blur-lg`
- Logo image (left), nav links (right)
- Mobile: hamburger menu (keep existing Sheet component)
- Links: Home, About, Services, Why Us, Join Our Team, Contact, Resources
- Smooth scroll to section anchors on click

### 2. Hero Section (`#home`)
- Full-width gradient background: `linear-gradient(135deg, #f5f0ff, #f0f8ff, #fefce8)`
- Pill badge: "School-Based Speech Therapy"
- H1: "Good Vibrations Speech and Language"
- Tagline: "School-based speech therapy services supporting student communication, confidence, and independence."
- Two CTA buttons: "Contact Us" (primary), "View Services" (outline)
- Kayla's headshot photo (`src/assets/headshot.jpg`) in a circular frame with soft shadow
- Fade-in + scale animation on load

### 3. Mission & Core Values (part of `#home`)
- Mission statement paragraph (centered)
- Three value cards side by side:
  - **Student-Centered Care** — lavender background
  - **Engagement & Motivation** — blue tint background
  - **Data-Driven Practice** — gold tint background
- Each card has an icon, title, and one-line description
- Cards animate in on scroll (intersection observer)

### 4. About Me (`#about`)
- Gradient section background
- Layout: photo on left, text on right (stacks on mobile)
- Name: Kayla Wynkoop, M.A., CCC-SLP
- "12 Years of Experience" badge
- Bio paragraph from user brief
- Subtle card with rounded corners and shadow

### 5. Services (`#services`)
- Section title: "What We Offer"
- Clean grid layout (2 columns desktop, 1 mobile)
- 7 service items as pastel-tinted cards with colored bullet dots:
  - School-based contract services
  - IEP development & progress monitoring
  - Medicaid Billing
  - Evaluations & re-evaluations
  - AAC support
  - Push-in & pull-out therapy
  - Collaboration with staff & families
- Alternating pastel backgrounds (lavender, blue, gold)
- Staggered fade-in animation

### 6. Why Choose Us (`#why-us`)
- Gradient background section
- 4 glass-morphism cards:
  - Engaging, student-centered therapy
  - Strong data collection + documentation
  - Experience with diverse learners
  - Creative, motivating therapy approaches
- Glass effect: `bg-white/70 backdrop-blur-md` with subtle border

### 7. Testimonials (`#testimonials`) — Placeholder
- Section exists in nav but shows a minimal "Coming Soon" state
- Placeholder for future teacher/admin/parent testimonials
- Can be hidden from nav initially if preferred

### 8. Contact (`#contact`)
- Two-column layout (info left, form right; stacks on mobile)
- Left: email, phone, "Now contracting for 2026–2027 school year" badge
- Right: existing EmailJS form (first name, last name, email, phone, message)
- Keep existing EmailJS service/template IDs
- Success/error feedback states (already implemented)

### 9. Join Our Team (`#join`)
- Intro paragraph about SLP work culture
- "Why Work With Us" list:
  - Competitive hourly pay
  - Flexible scheduling — 1099
  - Support with IEPs, documentation, caseload management
  - Opportunities for innovative therapy approaches
  - Less micromanagement, more trust
- "Who We're Looking For" list:
  - Licensed SLP
  - Passion for working with students
  - Strong communication and organization skills
  - Team-oriented mindset
- CTA: "Email your resume to: goodvibrations.speech@gmail.com"
- Personal note from Kayla at the bottom
- Future: add simple application form

### 10. Resources (`#resources`) — Placeholder
- Minimal section with "Coming Soon" or brief intro
- Future content: resources for parents/teachers, link to Lumerion, blog/tips

### 11. Footer
- Dark purple background (`#2d2248`)
- Logo, company info
- Nav links grouped by category
- Social media links (Facebook, LinkedIn — keep existing)
- Copyright with dynamic year
- Email and phone

## Animations

Adopt Lumerion-style motion patterns:
- **Scroll reveals:** Elements fade + slide up when entering viewport (intersection observer, already in place)
- **Spring physics:** Use CSS `transition-timing-function` with custom easing for bouncy feel
- **Hover effects:** Subtle scale (1.02-1.05) and shadow increase on cards/buttons
- **Button hover:** Slight scale + rotation (keep existing playful style)
- **Glass shimmer:** Subtle background opacity shift on hover for glass cards
- **No Framer Motion dependency** — keep using CSS animations and intersection observer (already working)

## Deployment — Vercel Migration

### Add
- `vercel.json` — SPA rewrites + security headers (matching Lumerion config):
  - Asset caching: 1 year immutable for `/assets/*`
  - Security headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
  - SPA rewrite: `/(.*) → /index.html`
  - CSP adapted for EmailJS (allow `connect-src` to emailjs.com)

### Modify
- `vite.config.ts` — Remove `outDir: 'docs'`, use default `dist/`
- `package.json` — Remove `deploy:github` and `build:squarespace` scripts, simplify to just `build: "vite build"`

### Remove
- `CNAME` file (root)
- `docs/` directory (GitHub Pages output)
- `docs/CNAME`
- `public/404.html` (Vercel handles SPA routing)

### DNS
- User will need to update `www.goodvibrationsspeech.net` DNS to point to Vercel instead of GitHub Pages (manual step, not automated)

## Files Changed Summary

### New Files
- `vercel.json` — Vercel deployment config
- `src/assets/logo-0.png` — Logo image (already extracted)

### Major Rewrites
- `src/index.css` — New color palette CSS variables, updated animations
- `tailwind.config.cjs` — New color tokens, fonts, animation config
- `index.html` — Updated meta tags, Google Fonts (Outfit + Lora), title
- `src/components/layout/Header.tsx` — Glass-morphism nav with logo image
- `src/components/layout/TopBar.tsx` — Remove (contact info moves to footer and contact section)
- `src/components/layout/Footer.tsx` — Dark purple footer with new content
- `src/components/layout/MobileMenu.tsx` — Updated nav links and styling
- `src/components/home.tsx` — Updated section refs for new sections
- `src/components/sections/HeroSection.tsx` — Complete rewrite with new content
- `src/components/sections/AboutSection.tsx` — Rewrite as Kayla's about section
- `src/components/sections/ServicesSection.tsx` — Rewrite with bullet-point service grid
- `src/components/sections/TestimonialsSection.tsx` — Placeholder state
- `src/components/sections/ContactSection.tsx` — Keep EmailJS form, restyle

### New Section Components
- `src/components/sections/WhyChooseSection.tsx` — Glass-morphism value cards
- `src/components/sections/JoinTeamSection.tsx` — SLP recruitment section
- `src/components/sections/ResourcesSection.tsx` — Placeholder section

### Removed
- `src/components/sections/TeamSection.tsx` — Content merged into AboutSection
- `src/components/sections/ContactSectionNew.tsx` — Unused alternate
- `src/components/sections/ContactSectionNew2.tsx` — Unused alternate
- `CNAME` — GitHub Pages config
- `docs/` — GitHub Pages build output
- `public/404.html` — Not needed with Vercel SPA routing

### Config Changes
- `vite.config.ts` — Remove docs output dir
- `package.json` — Clean up scripts
