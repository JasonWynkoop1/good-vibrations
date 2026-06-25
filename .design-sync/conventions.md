## Good Vibrations UI — building with this design system

React primitives from the Good Vibrations speech-therapy site (shadcn/ui style: Radix + Tailwind). Build real UI by **composing these components** and styling layout with the Tailwind utility classes and CSS-variable tokens below. Never hand-roll a lookalike — compose the real parts.

### Setup
- **No provider/wrapper needed.** Theme colors are CSS custom properties on `:root` and the brand fonts (Outfit for headings, Lora for body) load from the stylesheet — as long as `styles.css` is applied, components are styled. There is no theme-context to mount.
- Every component forwards `className` and merges it with its own classes via `tailwind-merge`, so your utility classes win on conflict.
- `Sheet` is a Radix Dialog and renders its panel in a portal — compose it, don't reimplement the overlay.

### Styling idiom — Tailwind utilities + HSL token classes
Style with utility classes. Colors come from brand token families (each is `hsl(var(--token))`); use them as `bg-…`, `text-…`, `border-…`, `ring-…`:

| Family | Use | `-foreground` pair |
|---|---|---|
| `primary` | brand purple — primary buttons, links | yes |
| `secondary` | teal — secondary actions | yes |
| `accent` | warm gold — highlights | yes |
| `muted` | subtle fills + secondary text (`text-muted-foreground`) | yes |
| `destructive` | errors / destructive actions | yes |
| `card`, `popover` | raised surfaces | yes |
| `background`, `foreground` | page base | — |
| `border`, `input`, `ring` | hairlines, field borders, focus rings | — |

Soft section tints: `bg-surface-lavender`, `bg-surface-blue`, `bg-surface-gold`.
Type: `font-heading` (Outfit) for headings, `font-sans` (Lora) for body. Radii: `rounded-md` / `rounded-lg` / `rounded-xl` (base `--radius` is `0.75rem`). On-brand motion: `animate-fade-in`, `animate-fade-in-up`, `animate-scale-in`.

### Composition
- **Button** — `variant`: default | secondary | outline | ghost | link | destructive; `size`: default | sm | lg | icon; `asChild` to render a link as a button.
- **Card** — compose `Card` › `CardHeader` › { `CardTitle`, `CardDescription` } + `CardContent` + `CardFooter` (each imported separately).
- **Sheet** — `Sheet` › `SheetTrigger` + `SheetContent` (`side`: top | bottom | left | right, default right) › `SheetHeader` › { `SheetTitle`, `SheetDescription` } … `SheetFooter`, `SheetClose`.
- **Input / Textarea** — pair with a `Label` (`Label htmlFor` ↔ control `id`).

### Where the real styling lives
Read `styles.css` (it `@import`s `_ds_bundle.css`, which holds the compiled tokens + utilities) and each component's `.prompt.md` / `.d.ts` before styling.

### Idiomatic example
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "goodvibrations";

<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Book a consultation</CardTitle>
    <CardDescription>School-based speech therapy for your student.</CardDescription>
  </CardHeader>
  <CardContent className="text-muted-foreground">
    Sessions aligned with each student's IEP goals.
  </CardContent>
  <CardFooter className="gap-3">
    <Button>Get started</Button>
    <Button variant="outline">Learn more</Button>
  </CardFooter>
</Card>
```
