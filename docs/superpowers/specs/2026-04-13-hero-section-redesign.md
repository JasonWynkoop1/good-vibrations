# Hero Section Redesign — Minimal & Confident

## Problem

The hero section feels AI-generated due to: two identical stacked pills, orphaned headshot (duplicated in About section), glow shadows on buttons, hover:scale-105 effects, animation on every element, double-stacked padding, oversized buttons, and a generic template layout.

## Goal

Strip the hero back to a warm, confident, minimal design that feels like a real small business — not a template. Lead with the value proposition, one clear CTA.

## Design

### Layout
- Single centered column, `max-w-2xl mx-auto` (tighter than current `max-w-3xl`)
- Fix double-padding: the hero section should use its own padding (`py-16 md:py-24`) and not stack with the base `section` style. Override base section padding on the hero.
- Remove `overflow-hidden` from section element

### Content (top to bottom)
1. **Contracting banner** — single pill: "Now contracting for 2026–2027 school year" with `bg-primary/10 text-primary rounded-full`
2. **Heading** — "Good Vibrations Speech and Language" using the base h1 styles (no extra size overrides)
3. **Subtitle** — "Helping students find their voice through school-based speech therapy services." in `text-muted-foreground`
4. **CTA button** — "Get in Touch" linking to #contact. Default `size="lg"`, no glow, no scale hover, no rounded-xl override.

### Removed
- "School-Based Speech Therapy" pill (redundant with subtitle)
- Headshot (lives in About section only)
- "View Services" outline button
- Glow shadows (`shadow-[0_0_12px...]`)
- `hover:scale-105` on button
- `rounded-xl` override on button
- Individual element animations — use one `animate-fade-in` on the content wrapper instead of separate animations per element
- `headshot.jpg` import (no longer used here)

### Kept
- Gradient background (`bg-gradient-to-br from-surface-lavender via-surface-blue to-surface-gold`)
- Contracting banner pill

## Files Modified
- `src/components/sections/HeroSection.tsx` — rewrite content and strip effects
