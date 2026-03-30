# Library Design — Component Contribution Guide

Welcome! This is your workspace for building the AirSaaS design system from scratch.

## Folder Structure

```
library-design/
├── ui/          ← Base components (buttons, cards, badges, inputs, modals…)
├── sections/    ← Assembled sections (hero, feature row, CTA, testimonials…)
└── README.md    ← You are here
```

- **`ui/`** — Atomic components. One file per component, PascalCase naming (e.g., `Button.tsx`, `Card.tsx`).
- **`sections/`** — Full page sections that compose `ui/` components into reusable blocks. These will be used to assemble landing pages and site pages later.

## Conventions

### File Naming

- One component per file, PascalCase: `HeroSplit.tsx`, `FeatureRow.tsx`
- Co-locate types in the same file (no separate `.types.ts` unless it's shared)
- Export the component as a **named export** (not default)

### Component Structure

```tsx
// src/components/library-design/sections/HeroSplit.tsx

import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

interface HeroSplitProps {
  badge?: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  image: {
    src: string
    alt: string
  }
  reversed?: boolean
}

export function HeroSplit({ badge, title, description, ctaLabel, ctaHref, image, reversed }: HeroSplitProps) {
  return (
    <section>
      {/* Your implementation */}
    </section>
  )
}
```

### Props Design (Important!)

Design all components with **typed props** — not hardcoded content. This is critical because later, content will come from **Strapi CMS** (headless CMS) via API. Your components must be "data-agnostic": they receive data through props and render it.

**Do:**
```tsx
interface FeatureRowProps {
  title: string
  description: string
  image: { src: string; alt: string }
  items?: { icon?: string; label: string }[]
  reversed?: boolean
  bgColor?: 'white' | 'light' | 'lavender'
}
```

**Don't:**
```tsx
// ❌ No hardcoded content inside the component
function FeatureRow() {
  return <h2>Our Amazing Feature</h2>
}
```

### Styling

- **Tailwind CSS 4** — use utility classes
- **You own the design system** — rebuild `tailwind.config.ts` with your own colors, fonts, spacing tokens
- Utility function `cn()` is available at `@/lib/utils` (combines clsx + tailwind-merge)
- Responsive breakpoints: Mobile (375px), Tablet (768px), Desktop (1440px)

### Utilities Available

| Import | From | Purpose |
|--------|------|---------|
| `cn()` | `@/lib/utils` | Merge Tailwind classes conditionally |
| `Image` | `next/image` | Optimized images |
| `Link` | `next/link` | Client-side navigation |

## What NOT to Touch

- **`src/components/_legacy/`** — Old components, kept for reference. Don't modify or import from here.
- **`src/app/`** — Page routing. We'll wire your components into pages later.
- **`src/data/`** — Hardcoded page data (will be replaced by Strapi).
- **`messages/`** — i18n translation files.

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000/fr
```

Create a test page if you need to preview your components in isolation — or use Storybook if you prefer.
