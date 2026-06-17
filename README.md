# INHAUS

A premium, conversion-focused storefront for **INHAUS** — cold-extracted
specialty coffee concentrate. Dark, gold, editorial: "Café logic, re-engineered."

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theming via `@theme`)
- **motion** (Framer Motion) for subtle, reduced-motion-aware transitions
- **lucide-react** icons
- Fonts: **Playfair Display** (serif display) + **Inter** (body) + **DM Mono** (labels) via `next/font`
- Aesthetic: near-black `#0D0B0A` + gold `#D4AF37`, editorial manifesto, product "chapters"

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks + prerenders)
npm run start    # serve the production build
npm run lint
```

## Structure

`Hero → Manifesto (story) → Shop (3 product chapters) → Gold marquee → Footer`

Plus a fixed **FOMO/urgency bar**, a functional **cart drawer** with toast
feedback (add/qty/coupon `WELCOME10`/totals/`localStorage`/demo checkout), and a
scroll-aware header.

## Images

The hero/manifesto backgrounds and product shots reference **real remote URLs**
(your store CDN + Unsplash) directly via `<img>`/CSS, so they render on your
machine and on deploy with no config. Each product image has a graceful
on-brand fallback if a URL is unavailable.

| What | Where |
| --- | --- |
| Product photos (per chapter) | `image` field in `lib/products.ts` (currently your `inhauscoffee.com` CDN) |
| Hero background | `HERO_IMG` in `components/sections/Hero.tsx` |
| Manifesto break image | `BREAKOUT_IMG` in `components/sections/Manifesto.tsx` |
| Price / coupon | `lib/product.ts` |
| Chapter copy, specs, stock status, theme colours | `lib/products.ts` |

> Note: this sandbox blocks outbound network, so preview screenshots taken here
> show the dark layout without the remote photos. They load normally in a real
> browser / deployment.

## Notes

- Static prerendered page, code-split by Next, self-hosted/preloaded fonts.
- Honors `prefers-reduced-motion`; semantic landmarks, labelled controls, focus rings, Product JSON-LD.
- `npm run shoot` drives Chromium (Playwright) to capture screenshots into `screenshots/` (git-ignored).
