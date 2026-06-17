# INHAUS

A premium, conversion-focused storefront for **INHAUS** — café-style specialty
coffee concentrate. The brief: help a first-time visitor understand the product
in under 10 seconds and complete a purchase in 30–60 seconds, with an aesthetic
that blends Apple's simplicity, Araku's authenticity, and Liquid Death's clarity.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theming via `@theme`)
- **motion** (Framer Motion) for subtle, reduced-motion-aware transitions
- **lucide-react** for minimal line icons
- Fonts: **Instrument Serif** (editorial display) + **Plus Jakarta Sans** (body) + **Space Mono** (labels/meta) via `next/font`
- Aesthetic: **warm editorial × Gen-Z** — paper grain, earthy palette, marquee ticker, rotating seal stamps, mono captions, big serif type (reference DNA: Araku coffee)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks + prerenders)
npm run start    # serve the production build
npm run lint
```

## How it's built

The page is a single, scroll-friendly conversion funnel composed in
`app/page.tsx`:

`Hero → Trust strip → Choose Your Fuel → Product showcase → How it works → Origin → Reviews → Final CTA`

### Dynamic persona theming ("Choose Your Fuel")

Three personas — **Student / Creator / Professional** — each own an accent color
(orange / pink / teal). Selecting one re-themes the **entire site**:

- `PersonaProvider` (`components/providers/PersonaProvider.tsx`) writes the active
  accent to CSS variables on `<html>` (`--accent-rgb`, `--accent`,
  `--accent-contrast`).
- Tailwind maps an `accent` color to those variables in `app/globals.css`, so
  utilities like `bg-accent`, `text-accent`, and `bg-accent/10` recolor live and
  animate via `transition-colors`.
- The product showcase swaps its pouch art, headline, copy, and CTA with smooth
  crossfades when the persona changes.

### Functional cart (mock checkout)

`CartProvider` (`components/providers/CartProvider.tsx`) is a self-contained cart:
add/qty/remove, the `WELCOME10` coupon (10% off), live totals, `localStorage`
persistence, and a slide-over drawer with a demo checkout (no real payment).
Mobile gets a sticky Add-to-Cart bar.

## Customization

| What | Where |
| --- | --- |
| Hero video (drop-in slot) | `public/media/README.md` + `components/sections/HeroBackground.tsx` |
| Price / coupon / cups | `lib/product.ts` |
| Persona copy, colors, CTAs | `lib/personas.ts` |
| Reviews | `lib/reviews.ts` |
| Brand neutrals, fonts, accent mapping | `app/globals.css` |

### Hero video

The hero ships with a premium, asset-free animated scene and a clearly-marked
video swap slot. Add a 5–7s muted loop to `public/media`, list the sources in
`HeroBackground.tsx`, and it autoplays (muted, looping, inline, lazy) with the
readability overlay already in place. See `public/media/README.md`.

## Notes on performance & accessibility

- Static prerendered page, code-split by Next, self-hosted/preloaded fonts.
- Honors `prefers-reduced-motion` (via `MotionConfig reducedMotion="user"` and a
  global CSS fallback).
- Semantic landmarks, labelled controls, visible focus rings, per-persona
  on-accent contrast colors, Product JSON-LD for SEO.

## Visual QA

`npm run shoot` drives Chromium (Playwright) to capture desktop + mobile
screenshots of the key states into `screenshots/` (git-ignored).
