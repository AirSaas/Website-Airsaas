# AirSaaS — Webflow to Next.js Migration

Migration of [airsaas.io](https://www.airsaas.io) from Webflow to **Next.js 15** (App Router) + **Strapi 5** (headless CMS).

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 |
| CMS | Strapi 5 (REST API, Dynamic Zones) |
| i18n | next-intl — 7 locales: `fr` (default), `en`, `es`, `de`, `pt`, `it` |
| Images | next/image (optimized) |
| Fonts | next/font/google |
| Deployment | Vercel |

## Project Structure

```
├── src/
│   ├── app/                          ← Next.js App Router (pages & layouts)
│   │   └── [locale]/                 ← Dynamic locale segment
│   │       ├── (main)/               ← Main site (navbar + footer)
│   │       │   ├── page.tsx          ← Homepage
│   │       │   ├── solution/[slug]/  ← 12 solution pages
│   │       │   ├── produit/[slug]/   ← 6 product pages
│   │       │   ├── equipes/[slug]/   ← 4 team pages
│   │       │   └── compare/[slug]/   ← 3 comparison pages
│   │       └── (lp)/                 ← Landing pages (minimal layout)
│   │           └── lp/[slug]/        ← 4 landing pages
│   │
│   ├── components/
│   │   ├── library-design/           ← 🎨 NEW COMPONENTS GO HERE
│   │   │   ├── ui/                   ← Base components (buttons, cards, inputs…)
│   │   │   ├── sections/             ← Assembled sections (hero, features, CTA…)
│   │   │   └── README.md             ← Contribution guide & conventions
│   │   │
│   │   └── _legacy/                  ← Old components (DO NOT USE — reference only)
│   │       ├── ui/                   ← Old Button, Container, FadeIn
│   │       ├── sections/             ← Old 23 sections
│   │       ├── layout/               ← Old Navbar, Footer
│   │       └── ...
│   │
│   ├── data/                         ← Hardcoded page data (will be replaced by Strapi)
│   ├── lib/
│   │   ├── utils.ts                  ← cn() utility (clsx + tailwind-merge)
│   │   ├── fonts.ts                  ← Font configuration (Raleway + Fraunces)
│   │   ├── strapi.ts                 ← Strapi API client
│   │   └── metadata.ts              ← SEO helpers
│   └── i18n/                         ← next-intl routing config
│
├── messages/                         ← i18n translations (fr.json, en.json…)
├── public/assets/                    ← Static images from Webflow
├── backend/                          ← Strapi 5 instance
├── docs/                             ← Project documentation
│   ├── sections-catalog.md           ← Inventory of all pages & sections
│   ├── decisions.md                  ← Architectural decisions log
│   ├── _legacy-design-system.md      ← Old design system (reference only)
│   └── ...
├── tailwind.config.ts                ← Tailwind theme — TO BE REBUILT
└── package.json
```

## Current Status

### Pages Built (with legacy components)

| Page type | Count | Route | Status |
|-----------|-------|-------|--------|
| Homepage | 1 | `/[locale]` | Done |
| Solution pages | 12 | `/[locale]/solution/[slug]` | Done |
| Product pages | 6 | `/[locale]/produit/[slug]` | Done |
| Team pages | 4 | `/[locale]/equipes/[slug]` | Done |
| Comparison pages | 3 | `/[locale]/compare/[slug]` | Done |
| Landing pages | 4 | `/[locale]/lp/[slug]` | Done |

All pages currently use **legacy components** from `_legacy/`. These will be progressively replaced by new components from `library-design/`.

### What's Left

- CMS content types + Strapi migration (14 content types)
- Event pages (CEO Dinner, Bootcamp)
- Utility pages
- 301 redirects (~1,730 URLs)
- SEO, i18n finalization

## Contributing Components — `library-design/`

**Read `src/components/library-design/README.md`** for the full contribution guide.

### Quick Summary

1. **UI components** go in `library-design/ui/` — atomic building blocks
2. **Sections** go in `library-design/sections/` — assembled blocks that compose UI components into page-ready sections (hero, feature rows, CTAs, testimonials…)
3. **All components must use typed props** — no hardcoded content. Content will come from Strapi later.
4. **You own the design** — rebuild the Tailwind theme with your own colors, fonts, spacing

### Props Pattern

Every component receives its content through props, making it CMS-ready:

```tsx
interface HeroSplitProps {
  badge?: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  image: { src: string; alt: string }
}

export function HeroSplit({ badge, title, description, ctaLabel, ctaHref, image }: HeroSplitProps) {
  // render UI — no hardcoded text
}
```

### Tailwind Config

The current `tailwind.config.ts` contains the old AirSaaS brand tokens. **Rebuild it** with your own design tokens (colors, fonts, spacing, border-radius, shadows, etc.). The config uses Tailwind CSS 4 with inline `@theme`.

### Available Utilities

| Import | From | Purpose |
|--------|------|---------|
| `cn()` | `@/lib/utils` | Merge Tailwind classes (clsx + tailwind-merge) |
| `Image` | `next/image` | Optimized image component |
| `Link` | `next/link` | Client-side navigation |

## How Content Works

### Strapi 5 (CMS)

All visible page content will come from Strapi via REST API. Strapi uses **Dynamic Zones** — each page is a list of section blocks, and each block maps to a React section component.

```
Strapi Dynamic Zone → API response → Page component → Section components (your library-design/sections/)
```

Your sections just need to accept the right props. We handle the Strapi fetching and data mapping separately.

### next-intl (i18n)

The site supports 7 locales. Content translations are handled by Strapi (per-locale API responses). Only layout micro-text (nav labels, button labels, footer text) uses next-intl JSON files in `messages/`.

Your components don't need to worry about i18n — just render whatever string props you receive.

### Routing

- Pages live in `src/app/[locale]/` — the `[locale]` segment is handled automatically
- Main site pages use the `(main)` route group (full navbar + footer)
- Landing pages use the `(lp)` route group (minimal navbar + footer)
- Dynamic pages use `[slug]` segments

## `_legacy/` — Old Components

The `_legacy/` folder contains the previous component library. It's kept for reference but **should not be used or modified**. Current pages still import from it to keep the site functional during the transition.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000/fr

# Start Strapi (separate terminal)
cd backend && npm run develop
# → http://localhost:1337/admin
```

## Documentation

| File | Content |
|------|---------|
| `docs/sections-catalog.md` | Full inventory of all pages and their sections |
| `docs/decisions.md` | Architectural decisions log (41 entries) |
| `docs/_legacy-design-system.md` | Old design system reference (fonts, colors, buttons) |
| `CLAUDE.md` | AI assistant project rules |
