# Good Vibrations Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Good Vibrations website with a Lumerion-inspired pastel palette, new content for all 8 sections, and migrate deployment from GitHub Pages to Vercel.

**Architecture:** Single-page React app with section-based scrolling. Retheme via Tailwind CSS variables + config. Replace all section content per the design spec. Add Vercel deployment config, remove GitHub Pages artifacts.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS 3, EmailJS, Vercel

---

## File Structure

### Config files (modify)
- `index.html` — Update fonts (Outfit + Lora), meta tags, title
- `tailwind.config.cjs` — New color palette, font families, animation config
- `src/index.css` — New CSS variables for Lavender Dream palette, remove dark mode
- `vite.config.ts` — Remove `outDir: 'docs'`
- `package.json` — Remove GitHub Pages scripts

### New files
- `vercel.json` — SPA rewrites + security headers

### Layout components (modify)
- `src/components/layout.tsx` — Remove TopBar, update nav items
- `src/components/layout/Header.tsx` — Logo image, glass-morphism nav
- `src/components/layout/MobileMenu.tsx` — Updated nav links + styling
- `src/components/layout/Footer.tsx` — Dark purple footer with new content

### Section components (rewrite)
- `src/components/home.tsx` — New section refs for all 8+ sections
- `src/components/sections/HeroSection.tsx` — New hero with logo, tagline, photo
- `src/components/sections/AboutSection.tsx` — Kayla's bio section
- `src/components/sections/ServicesSection.tsx` — Bullet-point service grid
- `src/components/sections/TestimonialsSection.tsx` — Placeholder "Coming Soon"
- `src/components/sections/ContactSection.tsx` — Restyle with new palette (keep EmailJS logic)

### New section components
- `src/components/sections/WhyChooseSection.tsx` — Glass-morphism value cards
- `src/components/sections/JoinTeamSection.tsx` — SLP recruitment
- `src/components/sections/ResourcesSection.tsx` — Placeholder

### Delete
- `src/components/layout/TopBar.tsx`
- `src/components/sections/TeamSection.tsx` — Content merged into AboutSection
- `src/components/sections/ContactSectionNew.tsx`
- `src/components/sections/ContactSectionNew2.tsx`
- `CNAME`
- `docs/` directory
- `public/404.html`

---

### Task 1: Theme Foundation — CSS Variables & Tailwind Config

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.cjs`
- Modify: `index.html`

- [ ] **Step 1: Update `index.html` with new fonts and meta**

Replace the entire `<head>` content in `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Good Vibrations Speech and Language — School-based speech therapy services supporting student communication, confidence, and independence." />
    <meta name="keywords" content="speech therapy, school-based SLP, speech language pathologist, IEP, AAC, speech services" />
    <meta property="og:title" content="Good Vibrations Speech and Language" />
    <meta property="og:description" content="School-based speech therapy services supporting student communication, confidence, and independence." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.goodvibrationsspeech.net/" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <title>Good Vibrations Speech and Language</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Replace CSS variables in `src/index.css`**

Replace the entire `:root` block and remove the `.dark` block. Keep everything else below `@layer base` the same for now (we'll update base styles in a later step). Replace lines 5-86 with:

```css
@layer base {
  :root {
    --background: 260 30% 98%;
    --foreground: 263 40% 20%;

    --card: 0 0% 100%;
    --card-foreground: 263 40% 20%;

    --popover: 0 0% 100%;
    --popover-foreground: 263 40% 20%;

    --primary: 260 40% 59%;
    --primary-foreground: 0 0% 100%;

    --secondary: 170 40% 55%;
    --secondary-foreground: 0 0% 100%;

    --muted: 260 30% 96%;
    --muted-foreground: 260 20% 46%;

    --accent: 48 75% 65%;
    --accent-foreground: 263 40% 20%;

    --highlight: 260 40% 59%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 260 20% 90%;
    --input: 260 20% 90%;
    --ring: 260 40% 59%;

    --radius: 0.75rem;

    --surface-lavender: 260 30% 97%;
    --surface-blue: 210 40% 97%;
    --surface-gold: 48 80% 96%;
  }
}
```

- [ ] **Step 3: Update `tailwind.config.cjs` with new fonts and colors**

Replace the entire file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ['Lora', 'Georgia', 'serif'],
      heading: ['Outfit', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          lavender: "hsl(var(--surface-lavender))",
          blue: "hsl(var(--surface-blue))",
          gold: "hsl(var(--surface-gold))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

- [ ] **Step 4: Verify dev server starts without errors**

Run: `cd C:/Users/jason/WebstormProjects/good-vibrations && npm run dev`

Expected: Vite dev server starts. Page loads (may look broken since components still use old classes — that's fine at this stage).

- [ ] **Step 5: Commit**

```bash
git add index.html src/index.css tailwind.config.cjs
git commit -m "feat: update theme to Lavender Dream palette with Outfit + Lora fonts"
```

---

### Task 2: Build Config & Vercel Migration

**Files:**
- Modify: `vite.config.ts`
- Modify: `package.json`
- Create: `vercel.json`
- Delete: `CNAME`, `docs/`, `public/404.html`

- [ ] **Step 1: Update `vite.config.ts`**

Replace the entire file:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

- [ ] **Step 2: Update `package.json` scripts**

Replace the `"scripts"` block:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
},
```

- [ ] **Step 3: Create `vercel.json`**

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

- [ ] **Step 4: Delete GitHub Pages artifacts**

```bash
rm -f CNAME public/404.html
rm -rf docs/
```

- [ ] **Step 5: Verify build succeeds**

Run: `npm run build`

Expected: Build completes, output in `dist/` directory.

- [ ] **Step 6: Commit**

```bash
git add vite.config.ts package.json vercel.json
git add -u CNAME public/404.html
git rm -r --cached docs/ 2>/dev/null; true
git commit -m "feat: migrate deployment from GitHub Pages to Vercel"
```

---

### Task 3: Layout Shell — Header, Footer, Layout

**Files:**
- Modify: `src/components/layout.tsx`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/MobileMenu.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Delete: `src/components/layout/TopBar.tsx`

- [ ] **Step 1: Delete TopBar**

```bash
rm src/components/layout/TopBar.tsx
```

- [ ] **Step 2: Rewrite `src/components/layout.tsx`**

Replace the entire file:

```tsx
import React, { useState } from 'react';
import { Header } from './layout/Header';
import { MobileMenu } from './layout/MobileMenu';
import { Footer } from './layout/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#join", label: "Join Our Team" },
    { href: "#contact", label: "Contact" },
    { href: "#resources", label: "Resources" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Header
        mainNavItems={mainNavItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        mainNavItems={mainNavItems}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Rewrite `src/components/layout/Header.tsx`**

Replace the entire file. Uses the logo image and glass-morphism styling:

```tsx
import { Button } from '../ui/button';
import logoImg from '../../assets/logo-0.png';

interface HeaderProps {
  mainNavItems: Array<{ href: string; label: string }>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ mainNavItems, isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logoImg} alt="Good Vibrations Speech and Language" className="h-10 md:h-14 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-heading font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 p-0"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Rewrite `src/components/layout/MobileMenu.tsx`**

Replace the entire file:

```tsx
interface MobileMenuProps {
  isMenuOpen: boolean;
  mainNavItems: Array<{ href: string; label: string }>;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isMenuOpen, mainNavItems, setIsMenuOpen }: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden border-t border-border/40 bg-white/95 backdrop-blur-lg fixed top-16 left-0 right-0 z-40 shadow-lg">
      <nav className="container py-4">
        <ul className="flex flex-col space-y-1">
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors text-base font-heading font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="border-t border-border/40 pt-4 mt-2 px-4">
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+15742651847" className="hover:text-primary transition-colors">(574) 265-1847</a>
              <a href="mailto:goodvibrations.speech@gmail.com" className="hover:text-primary transition-colors">goodvibrations.speech@gmail.com</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```

- [ ] **Step 5: Rewrite `src/components/layout/Footer.tsx`**

Replace the entire file:

```tsx
import logoImg from '../../assets/logo-0.png';

export function Footer() {
  return (
    <footer className="bg-[#2d2248] text-white/80">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <img src={logoImg} alt="Good Vibrations" className="h-12 w-auto mb-4 brightness-0 invert opacity-80" />
            <p className="text-sm text-white/60 mb-4">
              School-based speech therapy services supporting student communication, confidence, and independence.
            </p>
            <div className="flex space-x-3">
              <a href="javascript:void(0)" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="javascript:void(0)" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-sm text-white/60 hover:text-white transition-colors">Why Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-3">More</h3>
            <ul className="space-y-2">
              <li><a href="#join" className="text-sm text-white/60 hover:text-white transition-colors">Join Our Team</a></li>
              <li><a href="#resources" className="text-sm text-white/60 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-3">Contact</h3>
            <ul className="space-y-2">
              <li><a href="tel:+15742651847" className="text-sm text-white/60 hover:text-white transition-colors">(574) 265-1847</a></li>
              <li><a href="mailto:goodvibrations.speech@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">goodvibrations.speech@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Good Vibrations Speech and Language. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 6: Verify dev server loads without import errors**

Run: `npm run dev`

Expected: No import errors for TopBar. Page loads with new header/footer.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: redesign layout shell with glass-morphism nav, logo, and dark footer"
```

---

### Task 4: Hero Section

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Rewrite `src/components/sections/HeroSection.tsx`**

Replace the entire file:

```tsx
import React from 'react';
import { Button } from '../ui/button';
import headshotImg from '../../assets/headshot.jpg';

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function HeroSection({ sectionRef }: HeroSectionProps) {
  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-lavender))] via-[hsl(var(--surface-blue))] to-[hsl(var(--surface-gold))] -z-10"></div>

      <div className="container py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-xs font-heading font-medium text-primary">School-Based Speech Therapy</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 animate-fade-in-up">
            Good Vibrations Speech and Language
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200 max-w-2xl">
            School-based speech therapy services supporting student communication, confidence, and independence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <Button asChild size="lg" className="shadow-[0_0_12px_rgba(124,107,196,0.2)] hover:shadow-[0_0_20px_rgba(124,107,196,0.3)] transition-all duration-300 px-8 py-6 rounded-xl hover:scale-105">
              <a href="#contact">Contact Us</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-all duration-300 px-8 py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/5 hover:scale-105">
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="animate-scale-in delay-400">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-primary/10">
              <img src={headshotImg} alt="Kayla Wynkoop, M.A., CCC-SLP" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify hero renders correctly**

Run dev server, check the hero section shows the gradient background, heading, tagline, buttons, and headshot photo.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: redesign hero section with new content and pastel gradient"
```

---

### Task 5: Mission, Values & About Me Section

**Files:**
- Modify: `src/components/sections/AboutSection.tsx`
- Delete: `src/components/sections/TeamSection.tsx`

- [ ] **Step 1: Delete TeamSection**

```bash
rm src/components/sections/TeamSection.tsx
```

- [ ] **Step 2: Rewrite `src/components/sections/AboutSection.tsx`**

Replace the entire file. This combines Mission + Values + About Me:

```tsx
import React from 'react';
import headshotImg from '../../assets/headshot.jpg';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden">
      {/* Mission & Values */}
      <div className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Our Mission</span>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed animate-fade-in">
              Good Vibrations Speech and Language is committed to delivering high quality, evidence-based speech and language services that support student success in the educational setting. Through collaboration, data driven practices, and engaging therapy approaches, we help students build the communication skills necessary for academic and social growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[hsl(var(--surface-lavender))] rounded-2xl p-6 text-center border border-primary/8 animate-fade-in-up delay-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Student-Centered Care</h3>
              <p className="text-sm text-muted-foreground">We prioritize each student's individual strengths, needs, and communication goals.</p>
            </div>

            <div className="bg-[hsl(var(--surface-blue))] rounded-2xl p-6 text-center border border-secondary/8 animate-fade-in-up delay-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Engagement & Motivation</h3>
              <p className="text-sm text-muted-foreground">We believe students learn best when therapy is meaningful, interactive, and enjoyable.</p>
            </div>

            <div className="bg-[hsl(var(--surface-gold))] rounded-2xl p-6 text-center border border-accent/15 animate-fade-in-up delay-300 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Data-Driven Practice</h3>
              <p className="text-sm text-muted-foreground">We use clear data and progress monitoring to guide instruction and demonstrate growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-gradient-to-br from-[hsl(var(--surface-lavender))] to-[hsl(var(--surface-blue))] py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-shrink-0 animate-scale-in">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-primary/10">
                <img src={headshotImg} alt="Kayla Wynkoop" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 mb-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Kayla Wynkoop, M.A., CCC-SLP</h2>
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-xs font-heading font-medium text-primary">12 Years of Experience</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Kayla, a school-based speech-language pathologist and the owner of Good Vibrations Speech and Language. I'm passionate about helping students find their voice and build confidence in their communication skills. I've worked with a wide range of learners, including students in essential skills classrooms and those using AAC, and I love creating therapy sessions that are both engaging and meaningful. My goal is always to make students feel successful, supported, and excited to learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify about section renders**

Check dev server — mission, values cards, and about me with photo should all display.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: redesign about section with mission, values, and Kayla bio"
```

---

### Task 6: Services Section

**Files:**
- Modify: `src/components/sections/ServicesSection.tsx`

- [ ] **Step 1: Rewrite `src/components/sections/ServicesSection.tsx`**

Replace the entire file:

```tsx
import React from 'react';

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const services = [
  { label: "School-based contract services", color: "primary" },
  { label: "IEP development & progress monitoring", color: "secondary" },
  { label: "Medicaid Billing", color: "accent" },
  { label: "Evaluations & re-evaluations", color: "primary" },
  { label: "AAC support", color: "secondary" },
  { label: "Push-in & pull-out therapy", color: "accent" },
  { label: "Collaboration with staff & families", color: "primary" },
] as const;

const colorMap = {
  primary: { bg: "bg-[hsl(var(--surface-lavender))]", dot: "bg-primary" },
  secondary: { bg: "bg-[hsl(var(--surface-blue))]", dot: "bg-secondary" },
  accent: { bg: "bg-[hsl(var(--surface-gold))]", dot: "bg-accent" },
} as const;

export function ServicesSection({ sectionRef }: ServicesSectionProps) {
  return (
    <section ref={sectionRef} id="services" className="bg-white py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.label}
                className={`${colors.bg} rounded-xl px-5 py-4 flex items-center gap-3 border border-border/30 animate-fade-in-up hover:shadow-md transition-shadow`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${colors.dot} flex-shrink-0`}></div>
                <span className="text-sm font-heading font-medium text-foreground">{service.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify services grid renders**

Check dev server — 7 service items in a 2-column grid with alternating pastel backgrounds.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ServicesSection.tsx
git commit -m "feat: redesign services section with clean bullet-point grid"
```

---

### Task 7: Why Choose Us + Testimonials Placeholder

**Files:**
- Create: `src/components/sections/WhyChooseSection.tsx`
- Modify: `src/components/sections/TestimonialsSection.tsx`

- [ ] **Step 1: Create `src/components/sections/WhyChooseSection.tsx`**

```tsx
import React from 'react';

interface WhyChooseSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const reasons = [
  {
    title: "Engaging, student-centered therapy",
    description: "Every session is designed around the student's interests and goals to maximize motivation and progress.",
  },
  {
    title: "Strong data collection + documentation",
    description: "Clear, consistent data tracking ensures measurable outcomes and transparent reporting.",
  },
  {
    title: "Experience with diverse learners",
    description: "From essential skills classrooms to AAC users, we support students across the full spectrum of needs.",
  },
  {
    title: "Creative, motivating therapy approaches",
    description: "We use innovative tools and techniques to make therapy sessions meaningful and fun.",
  },
];

export function WhyChooseSection({ sectionRef }: WhyChooseSectionProps) {
  return (
    <section ref={sectionRef} id="why-us" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-lavender))] to-[hsl(var(--surface-gold))] -z-10"></div>

      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            The Good Vibrations Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-primary/8 animate-fade-in-up hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/sections/TestimonialsSection.tsx` as placeholder**

Replace the entire file:

```tsx
import React from 'react';

interface TestimonialsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function TestimonialsSection({ sectionRef }: TestimonialsSectionProps) {
  return (
    <section ref={sectionRef} id="testimonials" className="bg-white py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center">
        <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Testimonials</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
          What People Are Saying
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Testimonials from teachers, administrators, and parents coming soon.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/WhyChooseSection.tsx src/components/sections/TestimonialsSection.tsx
git commit -m "feat: add Why Choose Us section and testimonials placeholder"
```

---

### Task 8: Contact Section Restyle

**Files:**
- Modify: `src/components/sections/ContactSection.tsx`

- [ ] **Step 1: Restyle `src/components/sections/ContactSection.tsx`**

Keep all the EmailJS logic (state, handlers, config). Only change the JSX return and className values. Replace the return statement (lines 108-271) with:

```tsx
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-gradient-to-br from-[hsl(var(--surface-lavender))] to-[hsl(var(--surface-blue))] py-16 md:py-24"
    >
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Contact</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Contact Info</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="mailto:goodvibrations.speech@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  goodvibrations.speech@gmail.com
                </a>
                <a href="tel:+15742651847" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  (574) 265-1847
                </a>
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 text-center">
              <p className="font-heading font-semibold text-primary text-sm">Now contracting for 2026–2027 school year</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/30">
              {submissionStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Message Sent</h3>
                  <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll be in touch with you shortly.</p>
                  <button onClick={() => setSubmissionStatus('idle')} className="text-sm text-primary hover:text-primary/80 underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submissionStatus === 'error' && (
                    <div className="p-3 border-l-4 border-destructive bg-destructive/5 text-destructive text-sm rounded-r-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm text-foreground mb-1.5 block font-heading">
                        First Name <span className="text-destructive">*</span>
                      </Label>
                      <Input type="text" id="firstName" placeholder="First name" className="w-full" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm text-foreground mb-1.5 block font-heading">
                        Last Name <span className="text-destructive">*</span>
                      </Label>
                      <Input type="text" id="lastName" placeholder="Last name" className="w-full" required value={formData.lastName} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm text-foreground mb-1.5 block font-heading">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input type="email" id="email" placeholder="your@email.com" className="w-full" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm text-foreground mb-1.5 block font-heading">
                        Phone <span className="text-xs text-muted-foreground">(Optional)</span>
                      </Label>
                      <Input type="tel" id="phone" placeholder="(123) 456-7890" className="w-full" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm text-foreground mb-1.5 block font-heading">
                      Message <span className="text-xs text-muted-foreground">(Optional)</span>
                    </Label>
                    <Textarea id="message" rows={4} placeholder="How can we help you?" className="w-full resize-y" value={formData.message} onChange={handleChange} />
                  </div>

                  <Button type="submit" className="w-full py-3 rounded-xl shadow-[0_0_12px_rgba(124,107,196,0.15)]" disabled={submissionStatus === 'submitting'}>
                    {submissionStatus === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
```

- [ ] **Step 2: Verify contact form still works**

Check dev server — form renders, email/phone links display, "Now contracting" badge shows.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ContactSection.tsx
git commit -m "feat: restyle contact section with Lavender Dream palette"
```

---

### Task 9: Join Our Team + Resources Sections

**Files:**
- Create: `src/components/sections/JoinTeamSection.tsx`
- Create: `src/components/sections/ResourcesSection.tsx`

- [ ] **Step 1: Create `src/components/sections/JoinTeamSection.tsx`**

```tsx
import React from 'react';

interface JoinTeamSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function JoinTeamSection({ sectionRef }: JoinTeamSectionProps) {
  return (
    <section ref={sectionRef} id="join" className="bg-[hsl(var(--surface-lavender))] py-16 md:py-24">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Careers</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            Join Our Team
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border/30 animate-fade-in-up">
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Good Vibrations Speech and Language, we believe SLPs deserve to feel supported, valued, and excited about their work. Our goal is to create flexible, fulfilling opportunities where clinicians can focus on what they do best: helping students communicate and succeed — without unnecessary stress or burnout.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Why Work With Us</h3>
              <ul className="space-y-3">
                {[
                  "Competitive hourly pay",
                  "Flexible scheduling — 1099",
                  "Support with IEPs, documentation, and caseload management",
                  "Opportunities to use engaging, innovative therapy approaches",
                  "Less micromanagement, more trust",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Who We're Looking For</h3>
              <ul className="space-y-3">
                {[
                  "Licensed SLP",
                  "Passion for working with students",
                  "Strong communication and organization skills",
                  "Team-oriented mindset",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 text-center mb-8">
            <h3 className="font-heading font-semibold text-foreground mb-2">Interested in joining our team?</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Email your resume to: <a href="mailto:goodvibrations.speech@gmail.com" className="text-primary font-medium hover:underline">goodvibrations.speech@gmail.com</a>
            </p>
          </div>

          <div className="border-t border-border/30 pt-6">
            <p className="text-sm text-muted-foreground italic text-center">
              As a school-based SLP myself, I understand the demands of the job. I created Good Vibrations Speech and Language to offer a more supportive and flexible experience for clinicians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/ResourcesSection.tsx`**

```tsx
import React from 'react';

interface ResourcesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function ResourcesSection({ sectionRef }: ResourcesSectionProps) {
  return (
    <section ref={sectionRef} id="resources" className="bg-white py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center">
        <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Resources</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
          Resources
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Resources for parents and teachers coming soon. Check back for tips, tools, and helpful links.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/JoinTeamSection.tsx src/components/sections/ResourcesSection.tsx
git commit -m "feat: add Join Our Team and Resources placeholder sections"
```

---

### Task 10: Wire Everything Together — Home Component

**Files:**
- Modify: `src/components/home.tsx`
- Delete: `src/components/sections/ContactSectionNew.tsx`
- Delete: `src/components/sections/ContactSectionNew2.tsx`

- [ ] **Step 1: Delete unused contact section variants**

```bash
rm -f src/components/sections/ContactSectionNew.tsx src/components/sections/ContactSectionNew2.tsx
```

- [ ] **Step 2: Rewrite `src/components/home.tsx`**

Replace the entire file:

```tsx
import { useRef, useEffect } from 'react';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { JoinTeamSection } from './sections/JoinTeamSection';
import { ResourcesSection } from './sections/ResourcesSection';

export function Home() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    whyUs: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    join: useRef<HTMLElement>(null),
    resources: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-visible');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection sectionRef={sectionRefs.hero} />
      <AboutSection sectionRef={sectionRefs.about} />
      <ServicesSection sectionRef={sectionRefs.services} />
      <WhyChooseSection sectionRef={sectionRefs.whyUs} />
      <TestimonialsSection sectionRef={sectionRefs.testimonials} />
      <ContactSection sectionRef={sectionRefs.contact} />
      <JoinTeamSection sectionRef={sectionRefs.join} />
      <ResourcesSection sectionRef={sectionRefs.resources} />
    </div>
  );
}
```

- [ ] **Step 3: Update `src/index.css` — clean up animation classes**

Replace the animation section at the bottom of the file (lines 182-272) with cleaner versions that work with the new theme:

```css
/* Animation classes for scroll reveal */
.animate-fade-in,
.animate-fade-in-up,
.animate-scale-in {
  opacity: 0;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Play animations when section is visible */
.animate-section-visible .animate-fade-in,
.animate-section-visible .animate-fade-in-up,
.animate-section-visible .animate-scale-in {
  animation-play-state: running;
}

/* Pause animations before section is visible */
section:not(.animate-section-visible) .animate-fade-in,
section:not(.animate-section-visible) .animate-fade-in-up,
section:not(.animate-section-visible) .animate-scale-in {
  animation-play-state: paused;
  opacity: 0;
}

/* Ensure sections are always visible */
section {
  opacity: 1;
}

/* Animation delay utilities */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
```

- [ ] **Step 4: Verify full site renders end-to-end**

Run: `npm run dev`

Expected: All 8 sections render in order — Hero, About (mission + values + bio), Services, Why Choose Us, Testimonials placeholder, Contact with form, Join Our Team, Resources placeholder. Navigation links scroll to correct sections. No console errors.

- [ ] **Step 5: Verify build succeeds**

Run: `npm run build`

Expected: Build completes without TypeScript or bundling errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: wire all sections together and complete site redesign"
```

---

### Task 11: Deploy to Vercel

**Files:** None (deployment step)

- [ ] **Step 1: Deploy using Vercel MCP tool**

Use the `mcp__a53a3ae1-fe0f-4966-9968-3e1251ce8a62__deploy_to_vercel` tool to deploy the project.

- [ ] **Step 2: Verify deployment**

Check that the deployment succeeds and the site is accessible at the Vercel URL.

- [ ] **Step 3: Commit any deployment artifacts if needed**

If `.vercel/project.json` is created, add it to `.gitignore`.
