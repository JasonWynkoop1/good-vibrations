// Dedicated Tailwind build for the Claude Design sync (/design-sync).
//
// Reuses the app's theme (tokens, fonts, radii, animations) but drives its own
// content scan + safelist so the SHIPPED stylesheet gives the Claude Design
// agent a rich, on-brand utility vocabulary to compose new designs with — not
// just the handful of classes the 6 primitives happen to use.
//
//   content  — the whole app (real, on-brand utility usage) plus the authored
//              preview sources, so every class the cards reference is present.
//   safelist — the brand color families across bg/text/border (+ hover/focus)
//              and the surface tints, guaranteeing the full palette is available
//              even where the marketing pages never used a given combination.
const base = require("../tailwind.config.cjs");

module.exports = {
  ...base,
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./.design-sync/previews/**/*.{ts,tsx}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring)-(primary|secondary|accent|muted|destructive|card|popover|background|foreground|border|input|ring)(-foreground)?$/,
      variants: ["hover", "focus", "focus-visible"],
    },
    { pattern: /^bg-surface-(lavender|blue|gold)$/ },
    { pattern: /^rounded-(sm|md|lg|xl|2xl|full)$/ },
    { pattern: /^font-(sans|heading)$/ },
  ],
};
