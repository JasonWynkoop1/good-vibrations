# design-sync notes — Good Vibrations UI

Repo-specific gotchas for the Claude Design sync. Read this before re-syncing.

## Shape & wiring
- **Shape: `package`, synth-entry mode.** This repo is the marketing *app*, not a
  published component library — there is no built library `dist/` with `.d.ts`,
  so the converter synthesizes its entry from `src/components/ui` (the 6 shadcn
  primitives). `srcDir` scopes discovery to that folder.
- **Junction is required for every build.** The converter sets
  `PKG_DIR = node_modules/<cfg.pkg>` (`node_modules/goodvibrations`), which does
  not exist for an app. `.design-sync/with-junction.mjs` creates a temporary
  directory junction `node_modules/goodvibrations -> repo root` for the duration
  of a command and always removes it afterward (link-only; the repo is never
  touched). **Always run the converter / driver through it:**
  `node .design-sync/with-junction.mjs node .ds-sync/package-build.mjs …`
  ⚠️ Never run `npm ci` / `rimraf node_modules` while the junction exists. If a
  build is interrupted, remove a stray junction with PowerShell:
  `[System.IO.Directory]::Delete((Resolve-Path 'node_modules\goodvibrations').Path)`.
- **Comment-free tsconfig for the converter** (`cfg.tsconfig =
  .design-sync/tsconfig.ds.json`). The app's `tsconfig.app.json` breaks the
  converter's naive `/* */` comment stripper: the `/*` inside the `"@/*"` path
  glob pairs with a later comment's `*/` and the whole `paths` block gets eaten,
  so `@/lib/utils` won't resolve. The dedicated tsconfig has no comments and sets
  `baseUrl: ".."` (so `@/*` -> repo `src/*`).
- **Hand-written `.d.ts` (`cfg.dtsPropsFor`).** Synth mode can't extract props
  (no shipped types), so prop contracts for all 6 components are written by hand
  in the config, mirrored from the source interfaces. **If a component's props
  change in `src/components/ui`, update `dtsPropsFor` to match.**
  - `Input` and `Textarea` carry a leading JSDoc note that they forward **all**
    standard element HTML attributes (they spread `...props`) plus the common
    extras (autoComplete, inputMode, maxLength, pattern, min/max/step, etc.).
    Added after a static audit flagged the original subset as under-representing
    the API — **don't narrow them back.**

## Sync state
- **Target project:** `Good Vibrations UI`
  (`projectId` pinned in `config.json` → `33fd91ee-72a7-406f-8323-3b66c83857c8`).
  Re-syncs fetch its `_ds_sync.json` anchor from there automatically.
- **First sync (2026-06-24):** 38 files uploaded — 6 components (Button, Card,
  Input, Label, Sheet, Textarea), all authored (no floor cards), conventions
  header validated (all names exist in the build). **Renders were NOT
  machine-checked** (user skipped the Playwright install); verification was a
  static adversarial audit + the user's eyeball of `.review.html`. A future
  re-sync that installs Playwright should screenshot-grade the previews.

## Styling & fonts
- **CSS is generated** by `.design-sync/gen-css.mjs` into
  `.design-sync/.cache/ds-styles.css` (gitignored), which `cfg.cssEntry` points
  at. It compiles `src/index.css` with `.design-sync/tailwind.ds.cjs` (a
  **wide** content scan over the whole app + the authored previews, plus a
  safelist of the brand color families) so the shipped stylesheet gives the
  design agent a rich, on-brand utility vocabulary — not just the classes the 6
  primitives use. **Run `node .design-sync/gen-css.mjs` before every build.**
- **Brand fonts load remotely** (`[FONT_REMOTE]`, non-blocking): the gen-css
  step prepends a Google Fonts `@import` for **Outfit** (headings) + **Lora**
  (body), exactly as the app's `index.html` does. The render/design environment
  needs network for the fonts to load; offline they fall back to
  Georgia/serif + system-ui. Not self-hosted (a future robustness improvement).
- **Sheet is an overlay** → `cfg.overrides.Sheet = {cardMode:"single",
  viewport:"480x360", primaryStory:"Open"}` so its open state renders inside the
  card instead of escaping.

## Build sequence
```sh
node .design-sync/gen-css.mjs
node .design-sync/with-junction.mjs node .ds-sync/package-build.mjs \
  --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle
node .ds-sync/package-validate.mjs ./ds-bundle --no-render-check   # see render note
```

## Known render warns (triaged — not new on re-sync)
- `[RENDER_SKIPPED]` — the render check was skipped this run (no Playwright
  installed; the user reviewed the cards in their own browser via `.review.html`).
- `[FONT_REMOTE]` "Lora", "Outfit" — expected; fonts load at runtime (above).
- `tokens: … (1 missing, below threshold)` — a Radix/tailwindcss-animate runtime
  variable (e.g. `--radix-*`) set in JS, not a real missing token. Benign.

## Pending re-sync (2026-07-01 improvement batch)
The app changed in ways the uploaded design-system project doesn't reflect yet
— next `/design-sync` run picks these up automatically:
- **Tokens darkened for WCAG AA**: `--muted-foreground` 249 18% 56% → **52%**,
  `--accent-ink` 42 70% 47% → **33%** (in `src/index.css`; gen-css derives the
  shipped stylesheet from it).
- `Input`/`Textarea` props changed from empty `interface extends` to `type`
  aliases (eslint `no-empty-object-type`) — no `.d.ts` impact
  (`dtsPropsFor` overrides both).
- `sheet.tsx` close button `focus:` → `focus-visible:` (cosmetic).
- Unused `X` icon export removed from `ui/icons.tsx` (never synced).

## Re-sync risks (what can silently go stale)
- **`dtsPropsFor` is hand-maintained** — drifts if the component APIs change.
- **`ds-styles.css` is derived** from `src/index.css` + `tailwind.ds.cjs` —
  regenerate (`gen-css.mjs`) whenever either changes, or new utility classes the
  agent needs may be missing.
- **No machine render verification this run** — previews were eyeballed, not
  screenshot-graded. A re-sync that installs Playwright should grade them.
- **Re-sync runs need the junction too** — wrap `resync.mjs` in
  `with-junction.mjs`, and (without Playwright) the driver's render check will
  warn `[RENDER_SKIPPED]`.
- **`conventions.md` names** must be re-validated against the fresh build (every
  class/token/component name was verified present at first sync).
