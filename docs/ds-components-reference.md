# DS Components — Rules Reference

**Auto-generated from JSDoc contracts in source files.** Regenerate via `python3 scripts/generate-ds-reference.py` (or similar — this was generated once).

This is the authoritative index of **what each component does, when to use it, when NOT to, and what breaks it**. Read the entry for any component before you modify it or create a similar one.

Components are grouped into:
- **Primitives (`ui/`)** — atoms and small composables (buttons, cards, badges, typography, icons, utilities)
- **Section Frames (`sections/`)** — full-width page sections (Hero, CtaFrame, FeatureFrame, etc.)

Every entry shows its `@purpose` / `@useWhen` / `@dontUse` / `@limits` / `@forbidden` straight from the source — those are the enforceable rules.

---

## Decision: where does my new component live?

1. **Does an existing component fit?** Look at the table below first.
2. **Can an existing component accept a new prop or variant?** Extend it. Cheapest path.
3. **Is the pattern repeated ≥2 times across pages?** Promote to `library-design/`. Otherwise keep inline in the page file.
4. **Is it a small atom (card, badge, pill)?** → `ui/`
   **Is it a full-width section (Hero-style, CtaFrame-style)?** → `sections/`

---

## 📇 Index — all DS components at a glance

### Primitives (`ui/`)

| Component | Purpose (1-line) |
|---|---|
| `<AnimateOnScroll>` | Wraps content in an intersection-observer driven entrance animation that replays on scroll. |
| `<Button>` | Canonical interactive element for all CTAs, links-as-buttons, and actions. Renders `<a>` if `href` is provided, `<but… |
| `<CardCta>` | Minimal card with a short gradient title, a one-line description, and a primary CTA. Usually rendered as children of … |
| `<CheckList>` | Vertical list where each item is prefixed by a green gradient circle-check icon. |
| `<ClientCard>` | Two-section card showcasing a client: avatar + name + role on top, company name + metadata rows on a tinted bottom se… |
| `<EllipseBackground>` | Decorative thick-bordered circle used as a soft halo behind hero illustrations and key sections. |
| `<EmptyState>` | Friendly placeholder rendered when a collection (search results, filter output, list of items) has zero entries. |
| `<ErrorBoundary>` | React class component that catches render-time errors in its subtree and renders a branded fallback instead of a cras… |
| `<FeatureCard>` | Card used to display a big metric / short feature statement with icon, title (often a gradient number or short phrase… |
| `<Float>` | Continuously bobs its child up and down with a subtle looping animation. |
| `<FloatingCard>` | Small rounded white card with soft elevation, used as a decorative satellite around hero illustrations. |
| `<GradientBackground>` | Absolutely positioned blurred gradient layer used as section ambiance. |
| `<GradientText>` | Apply a brand gradient to a text fragment (inline span). Replaces scattered `style={{ backgroundImage, WebkitBackgrou… |
| `<Heading>` | Canonical headline component for all H1 / H2 / H3 / H4 in the product. |
| `<IconBadge>` | Circular badge hosting a large duotone icon — the main visual anchor in icon-led sections. |
| `<IconIllustration>` | Stylised icon with a drop-shadow offset and a solid ellipse "base" underneath — AirSaas's signature illustrated icon … |
| `<IllustrationFrame>` | Rounded, semi-transparent white frame that wraps a hero/section illustration with consistent padding and border. |
| `<ListCard>` | Numbered card with a big gradient number + short description. Used inside <ComparisonFrame> for "avec/sans" lists or … |
| `<ListEmphasized>` | Horizontal row of short text blocks separated by an orange left border — used to highlight 2–4 key points side-by-side. |
| `<ListInline>` | Single inline item (icon + text) — the row primitive behind <CheckList> and FeatureFrame checklists. |
| `<LogosBar>` | Horizontal bar of grayscale customer/partner logos with a leading label and divider. |
| `<Navbar>` | Top-of-page navigation. Logo + links (flat or with dropdown) + optional flag / locale / login / CTA. |
| `<NavbarDropdown>` | Floating menu panel containing a vertical list of icon + title + subtitle links — the reusable body of navbar mega-me… |
| `<Quote>` | Italic citation block in a lavender-bordered card with a decorative quote icon and optional author + avatar. |
| `<SectionHeading>` | Standalone centered H2 + subtitle block used to introduce a section. |
| `<Skeleton>` | Placeholder block that renders while async content is loading. Uses a subtle `secondary-5` bg + pulse animation to si… |
| `<Slider>` | Minimal image carousel with prev/next chevron buttons and a lavender top-framed illustration well. |
| `<Tag>` | Small inline pill/badge used for categories, status indicators, eyebrow labels, and filter chips. |
| `<TestimonialCard>` | Display a short customer testimonial: quote + pill with name/role/avatar, optional LinkedIn link. |
| `<TestimonialCompanyCard>` | Company-facing testimonial: quote + company logo, framed by an asymmetric primary border. |
| `<Text>` | Canonical body/paragraph component. Always use this instead of raw <p>. |

### Section Frames (`sections/`)

| Component | Purpose (1-line) |
|---|---|
| `<ComparisonDualFrame>` | "Avec / sans" dual-column comparison: a row of numbered cards per column, each column led by a colored pill label. |
| `<ComparisonFrame>` | "Avec / sans" style numbered-list section showing pain points OR gains. |
| `<ComparisonTableFrame>` | Feature comparison grid — one card per row, one wide "feature" cell on the left, N narrower value cells on the right … |
| `<CtaFrame>` | End-of-page conversion block: large gradient heading + subtitle + 2 CTA cards. |
| `<CtaHighlightFrame>` | Full-width closing CTA section — large 3-part tri-gradient H2 (dark / primary / dark) + a centered white card contain… |
| `<FaqFrame>` | Expandable FAQ section with a highlighted title and accordion items. |
| `<FeatureFrame>` | Single feature section: title + subtitle + checklist / rich content + optional image (side-by-side or stacked) + opti… |
| `<FeatureSectionStacked>` | Centered title + subtitle + orange-bordered item list, with an illustration image that bleeds from the bottom into th… |
| `<Footer>` | Page footer — 4 columns of navigation links + floating logo + copyright card. |
| `<Hero>` | First section of a page: navbar + title + subtitle + CTAs + illustration. |
| `<HighlightFrame>` | Alternating-zigzag vertically stacked cards, each with a big green gradient number outside the card (left on odd, rig… |
| `<IconRowFrame>` | Horizontal row of icon + label pairs (integrations, tech stack, trusted-by logos rendered as iconography). Icons sit … |
| `<PillarFrame>` | Grid of "pillar" cards — each with a large icon illustration, uppercase primary title, description, and an optional e… |
| `<SliderFrame>` | Centered title + subtitle + interactive screenshot carousel. |
| `<TestimonialsFrame>` | Section wrapper for testimonial cards: gradient heading + 3-col grid. |
| `<ValuePropositionFrame>` | Section with title + subtitle + a 3- or 4-column grid of child cards (usually <FeatureCard> or custom). |

---

## 🧱 Primitives — full rules

### `<AnimateOnScroll>`

📄 [`src/components/library-design/ui/AnimateOnScroll.tsx`](src/components/library-design/ui/AnimateOnScroll.tsx)

**Purpose** — Wraps content in an intersection-observer driven entrance animation that replays on scroll.
**Use when** — Revealing hero headlines, section headings, cards, or any block that should fade/slide in as it enters the viewport.
**Don't use** — For critical above-the-fold content that must render instantly — the element starts hidden (opacity-0). Also skip for continuous loops — use <Float> instead.

**Limits:**
- threshold: 0–1 (fraction of element visible before triggering)
- delay / duration: milliseconds
- stagger: ms between child reveals; children must be wrapped in <AnimateChild>

**Forbidden:**
- Do NOT nest AnimateOnScroll inside another AnimateOnScroll — use `stagger` + <AnimateChild> instead
- Do NOT override opacity/transform via `className` — it will fight the animation state

---

### `<Button>`

📄 [`src/components/library-design/ui/Button.tsx`](src/components/library-design/ui/Button.tsx)
🎨 Figma `node-id 117-12841`

**Purpose** — Canonical interactive element for all CTAs, links-as-buttons, and actions. Renders `<a>` if `href` is provided, `<button>` otherwise.
**Use when** — Any actionable element — primary CTA, secondary CTA, quiet link-button.
**Don't use** — For navigation inside a text paragraph (use an inline `<a>` with text-primary instead). For toggle chips / filters (use `<Tag>` if non-interactive).

**Limits:**
- children label: max 30 chars (longer breaks responsive layouts on mobile)
- icon + label combined: keep under ~24 chars

**Forbidden:**
- Do NOT pass className overriding color / padding / fontSize — use `variant` + `size`
- Do NOT pass `disabled` on an `<a>`-rendered button (use `href={undefined}` instead)

---

### `<CardCta>`

📄 [`src/components/library-design/ui/CardCta.tsx`](src/components/library-design/ui/CardCta.tsx)

**Purpose** — Minimal card with a short gradient title, a one-line description, and a primary CTA. Usually rendered as children of `<CtaFrame>`.
**Use when** — Offering a quick CTA choice (e.g. "Démo" / "Newsletter" / "Contact").
**Don't use** — For a feature/benefit card (use `<FeatureCard>`).

**Limits:**
- title: max 30 chars (Figma H4)
- description: max 100 chars (one-line paragraph)
- ctaLabel: max 18 chars

**Forbidden:**
- Do NOT pass typography className overrides

---

### `<CheckList>`

📄 [`src/components/library-design/ui/CheckList.tsx`](src/components/library-design/ui/CheckList.tsx)

**Purpose** — Vertical list where each item is prefixed by a green gradient circle-check icon.
**Use when** — Standalone bullet lists of benefits/features outside a FeatureFrame. Visually matches the checklist used inside <FeatureFrame>.
**Don't use** — Inside a FeatureFrame — the frame already renders its own checklist from `checklistItems`. For a single inline check item, use <ListInline> directly.

**Limits:**
- items: plain strings or rich ReactNode (bold, links, etc.)

---

### `<ClientCard>`

📄 [`src/components/library-design/ui/ClientCard.tsx`](src/components/library-design/ui/ClientCard.tsx)

**Purpose** — Two-section card showcasing a client: avatar + name + role on top, company name + metadata rows on a tinted bottom section.
**Use when** — Grids of anonymous/public client cards (e.g. "Ils parlent de nous").
**Don't use** — For a testimonial with a quote (use <TestimonialCard>).

**Limits:**
- name: max 30 chars (wraps past that)
- jobTitle: max 45 chars
- companyName: max 30 chars
- infoRows: 2–5 items

**Forbidden:**
- Do NOT pass className with typography / color overrides — use the props

---

### `<EllipseBackground>`

📄 [`src/components/library-design/ui/EllipseBackground.tsx`](src/components/library-design/ui/EllipseBackground.tsx)

**Purpose** — Decorative thick-bordered circle used as a soft halo behind hero illustrations and key sections.
**Use when** — Hero sections or landing blocks that need a large primary-tinted accent ring behind the content.
**Don't use** — As a content container — it's purely decorative (`aria-hidden`) and positioned absolutely. For actual circles around content, use a bordered <div>.

**Limits:**
- size: pixel value (default 1250) — render scales from this

---

### `<EmptyState>`

📄 [`src/components/library-design/ui/EmptyState.tsx`](src/components/library-design/ui/EmptyState.tsx)

**Purpose** — Friendly placeholder rendered when a collection (search results, filter output, list of items) has zero entries.
**Use when** — Client-side filtering returns no results; a blog tag has no posts; a search query finds nothing.
**Don't use** — For loading (use <Skeleton>). For errors (use <ErrorBoundary> or pass your own error UI). For static content where empty shouldn't happen in prod.

**Limits:**
- title: max 60 chars
- description: max 240 chars
- ctaLabel: max 24 chars (when provided, both ctaLabel + ctaHref|onClick required)

**Forbidden:**
- Do NOT use as a generic "page not found" — use a dedicated 404 page
- Do NOT use as a loading placeholder — use <Skeleton>

---

### `<ErrorBoundary>`

📄 [`src/components/library-design/ui/ErrorBoundary.tsx`](src/components/library-design/ui/ErrorBoundary.tsx)

**Purpose** — React class component that catches render-time errors in its subtree and renders a branded fallback instead of a crashed page.
**Use when** — Wrapping dynamic / client-side features (search, forms, widgets) that could throw at render. One per isolated feature, not page-wide (page-wide is Next.js `error.tsx`).
**Don't use** — For async errors (catch them in the handler, not via boundary). For 404s (use Next.js `not-found.tsx`). For form validation (use inline field errors).

**Limits:**
- fallback: optional custom ReactNode; if absent, a default branded error block with a "Rafraîchir" CTA is rendered

**Forbidden:**
- Do NOT use as the root page fallback — Next.js `error.tsx` owns that

---

### `<FeatureCard>`

📄 [`src/components/library-design/ui/FeatureCard.tsx`](src/components/library-design/ui/FeatureCard.tsx)

**Purpose** — Card used to display a big metric / short feature statement with icon, title (often a gradient number or short phrase), optional subtitle, and a description paragraph.
**Use when** — Showing 3–6 metrics / features in a grid (usually inside `<ValuePropositionFrame>`).
**Don't use** — For a testimonial (use `<TestimonialCard>`), or a full feature section with image (use `<FeatureFrame>`).

**Limits:**
- title: max 12 chars (Figma H4, 40px — breaks past ~1 line)
- subtitle: max 20 chars (Text lg, ~28px — optional)
- description: max 220 chars (Text md paragraph)

**Forbidden:**
- Do NOT pass className with typography overrides — use Text / Heading props
- Do NOT mix different `gradient` colors in the same grid (visual noise)

---

### `<Float>`

📄 [`src/components/library-design/ui/Float.tsx`](src/components/library-design/ui/Float.tsx)

**Purpose** — Continuously bobs its child up and down with a subtle looping animation.
**Use when** — Floating decorative cards, icons, or illustrations around a hero (e.g. <FloatingCard> satellites).
**Don't use** — For one-shot entrance animations — use <AnimateOnScroll>. For critical UI that needs a stable position, skip entirely.

**Limits:**
- variant: 1 | 2 | 3 (different keyframes — pick different variants to desync neighbouring floats)
- duration / delay: seconds

---

### `<FloatingCard>`

📄 [`src/components/library-design/ui/FloatingCard.tsx`](src/components/library-design/ui/FloatingCard.tsx)

**Purpose** — Small rounded white card with soft elevation, used as a decorative satellite around hero illustrations.
**Use when** — Floating mini-cards that orbit a hero visual (KPI snippets, status pills, feature teasers) — typically wrapped in <Float>.
**Don't use** — As a real content card — it's `aria-hidden` and decorative. For interactive/readable cards, use <FeatureCard> or a section-level card.

**Limits:**
- children: optional — when omitted, a placeholder (icon + 2 skeleton bars) renders
- icon: only used by the placeholder; ignored when `children` is provided

---

### `<GradientBackground>`

📄 [`src/components/library-design/ui/GradientBackground.tsx`](src/components/library-design/ui/GradientBackground.tsx)

**Purpose** — Absolutely positioned blurred gradient layer used as section ambiance.
**Use when** — Hero backgrounds ("hero" / "hero-dark"), CTA bands ("cta"), or comparison sections ("comparison"). Place inside a `relative` parent.
**Don't use** — As a card or content background — it's `aria-hidden`, blurred, and absolutely positioned. For solid fills, use Tailwind bg-* classes.

**Limits:**
- variant: "hero" | "hero-dark" | "cta" | "comparison" — each has a fixed gradient + positioning

---

### `<GradientText>`

📄 [`src/components/library-design/ui/GradientText.tsx`](src/components/library-design/ui/GradientText.tsx)

**Purpose** — Apply a brand gradient to a text fragment (inline span). Replaces scattered `style={{ backgroundImage, WebkitBackgroundClip }}` blocks.
**Use when** — Emphasizing a word or phrase with a brand gradient inside a `<Heading>`, `<Text>`, or any inline context. NOT a headline by itself.
**Don't use** — As a full headline — use `<Heading gradient="primary">` instead.

**Limits:**
- text: keep short (1–10 words). Long gradient runs hurt readability.

**Forbidden:**
- Do NOT override color / background — use the `gradient` prop
- Do NOT apply to block-level content; this is inline only

---

### `<Heading>`

📄 [`src/components/library-design/ui/Heading.tsx`](src/components/library-design/ui/Heading.tsx)
🎨 Figma `node-id 115-12821`

**Purpose** — Canonical headline component for all H1 / H2 / H3 / H4 in the product.
**Use when** — Any headline on a page. Always prefer this over raw <h1-h4>.
**Don't use** — Inside body copy — use <Text> with `font-bold` if you need emphasis.

**Limits:**
- level 1: max ~40 chars on 1 line (clamp 40 → 95px)
- level 2: max ~60 chars on 1 line (clamp 32 → 72px)
- level 3: max ~60 chars on 1 line (clamp 28 → 70px)
- level 4: max ~80 chars on 1 line (clamp 24 → 40px)

**Forbidden:**
- Do NOT pass fontSize / fontWeight via `className` — use `level`
- Do NOT override font-family — Product Sans only (enforced in globals.css)
- Do NOT use `gradient` on level 4 (by design: body-adjacent headings stay solid)

---

### `<IconBadge>`

📄 [`src/components/library-design/ui/IconBadge.tsx`](src/components/library-design/ui/IconBadge.tsx)

**Purpose** — Circular badge hosting a large duotone icon — the main visual anchor in icon-led sections.
**Use when** — Inside <IconRowFrame>, feature grids, or anywhere a headline is introduced by a prominent circular icon.
**Don't use** — For small inline icons (list bullets, button icons) — use <ListInline> or raw icon components. For sharp-cornered icon tiles, use <IconIllustration>.

**Limits:**
- variant: "light" (primary-10 bg, primary-40 icon) | "solid" (translucent white on dark sections)
- size: "md" (5rem) | "lg" (6.5rem)

---

### `<IconIllustration>`

📄 [`src/components/library-design/ui/IconIllustration.tsx`](src/components/library-design/ui/IconIllustration.tsx)

**Purpose** — Stylised icon with a drop-shadow offset and a solid ellipse "base" underneath — AirSaas's signature illustrated icon treatment.
**Use when** — Section-level iconography that needs more presence than a flat glyph (feature grids, landing hero highlights, <IconRowFrame>).
**Don't use** — For plain circular badges — use <IconBadge>. For small inline icons, use the raw icon component directly.

**Limits:**
- size: "sm" | "md" | "lg" — drives container, font-size, and ellipse proportions
- variant: "dark" (primary icon on light bg) | "light" (white icon with primary glow, for dark sections)

---

### `<IllustrationFrame>`

📄 [`src/components/library-design/ui/IllustrationFrame.tsx`](src/components/library-design/ui/IllustrationFrame.tsx)

**Purpose** — Rounded, semi-transparent white frame that wraps a hero/section illustration with consistent padding and border.
**Use when** — Hero split visuals, feature showcase screenshots, or any product illustration that needs the signature AirSaas "glass" frame.
**Don't use** — For decorative floating cards — use <FloatingCard>. For plain images without the frame chrome, use a raw <img>.

**Limits:**
- shape: "open-bottom" (default — rounded top, bleeds into next section) | "contained" (all 4 corners rounded, standalone)
- alt: empty string marks the image as decorative (`aria-hidden`)

---

### `<ListCard>`

📄 [`src/components/library-design/ui/ListCard.tsx`](src/components/library-design/ui/ListCard.tsx)

**Purpose** — Numbered card with a big gradient number + short description. Used inside <ComparisonFrame> for "avec/sans" lists or similar numbered lists.
**Use when** — Showing 3–7 numbered items where the number is the hero of each row.
**Don't use** — For simple bullet lists (use <ListInline> or <ListEmphasized>).

**Limits:**
- value: max 2 digits (styles go big — 1–2 digits / 4.8rem)
- children text: max 220 chars

**Forbidden:**
- Do NOT pass className with typography overrides

---

### `<ListEmphasized>`

📄 [`src/components/library-design/ui/ListEmphasized.tsx`](src/components/library-design/ui/ListEmphasized.tsx)

**Purpose** — Horizontal row of short text blocks separated by an orange left border — used to highlight 2–4 key points side-by-side.
**Use when** — Section intros that list a few emphasised takeaways (e.g. "3 bénéfices", short pillar statements) under a heading.
**Don't use** — For long bulleted content — use <CheckList>. For vertical stacks with checkmarks, use <CheckList>.

**Limits:**
- items: 2–4 strings recommended (layout wraps column → row at md breakpoint)

---

### `<ListInline>`

📄 [`src/components/library-design/ui/ListInline.tsx`](src/components/library-design/ui/ListInline.tsx)

**Purpose** — Single inline item (icon + text) — the row primitive behind <CheckList> and FeatureFrame checklists.
**Use when** — You need one check-prefixed line inside rich content, or want to render a list with a custom (non-check) icon by passing `icon`.
**Don't use** — For multi-item vertical lists — use <CheckList> which composes this under the hood.

**Limits:**
- icon: optional override; defaults to the green-gradient circle-check

---

### `<LogosBar>`

📄 [`src/components/library-design/ui/LogosBar.tsx`](src/components/library-design/ui/LogosBar.tsx)

**Purpose** — Horizontal bar of grayscale customer/partner logos with a leading label and divider.
**Use when** — Social-proof strip under a hero ("Ils gèrent leur capacité avec AirSaas") or above/below a CTA section.
**Don't use** — As a full case-studies section — use a dedicated logo grid or testimonials section. For a single featured logo, use a plain <img>.

**Limits:**
- logos: array of { src, alt, width?, height? } — rendered grayscale at 70% opacity
- label: defaults to the FR social-proof string; override per locale

---

### `<Navbar>`

📄 [`src/components/library-design/ui/Navbar.tsx`](src/components/library-design/ui/Navbar.tsx)
🎨 Figma `node-id 123-55815`

**Purpose** — Top-of-page navigation. Logo + links (flat or with dropdown) + optional flag / locale / login / CTA.
**Use when** — On every marketing / product page as the first interactive element. Mount inside a `<Hero>` so it picks up the hero background gradient.
**Don't use** — For in-app chrome / admin layouts — build a dedicated component.

**Limits:**
- items: 2–9 top-level items (past that the nav overflows on desktop)
- dropdownItems per menu: 2–10
- ctaLabel: max 24 chars
- loginLabel: max 12 chars

**Forbidden:**
- Do NOT hardcode text inside the Navbar file — all copy comes from props (callers pass translated strings via next-intl / CMS)
- Do NOT override typography / color via className — extend the DS if needed
- Do NOT pass an image `<img>` as `logo` — use an inline SVG so it adopts currentColor and scales cleanly

---

### `<NavbarDropdown>`

📄 [`src/components/library-design/ui/NavbarDropdown.tsx`](src/components/library-design/ui/NavbarDropdown.tsx)

**Purpose** — Floating menu panel containing a vertical list of icon + title + subtitle links — the reusable body of navbar mega-menus.
**Use when** — Desktop navbar dropdown panels (Solutions, Produit, Ressources…) where each entry needs an icon, bold title, and light subtitle.
**Don't use** — For mobile navigation — use a dedicated mobile drawer. For plain anchor lists (footer columns), use simple <a> lists.

**Limits:**
- items: each entry must provide { icon, title, subtitle }; `href` defaults to "#" when omitted

---

### `<Quote>`

📄 [`src/components/library-design/ui/Quote.tsx`](src/components/library-design/ui/Quote.tsx)

**Purpose** — Italic citation block in a lavender-bordered card with a decorative quote icon and optional author + avatar.
**Use when** — Customer/expert citations inside FeatureFrame `richContent`, landing sections, or anywhere a testimonial needs visual weight without a full testimonial section.
**Don't use** — For full testimonial grids with photos + roles + logos — use a dedicated testimonials section. For plain inline italic text, use <Text italic>.

**Limits:**
- align: "center" (default, matches stacked FeatureFrame) | "left" (image-side content)
- children: quote text only — keep under ~3 sentences; body clamps to 1.125–1.375rem

---

### `<SectionHeading>`

📄 [`src/components/library-design/ui/SectionHeading.tsx`](src/components/library-design/ui/SectionHeading.tsx)

**Purpose** — Standalone centered H2 + subtitle block used to introduce a section.
**Use when** — A section needs a highlighted title (with gradient portion) + short paragraph, and no further custom content in the heading area.
**Don't use** — When the section has a more complex heading (custom CTA row, tags, eyebrow) — compose `<Heading>` + `<Text>` directly instead.

**Limits:**
- titleGradient: max ~50 chars
- titleDark: max ~60 chars
- subtitle: max ~260 chars

**Forbidden:**
- Do NOT pass className with typography overrides — use Heading / Text props instead

---

### `<Skeleton>`

📄 [`src/components/library-design/ui/Skeleton.tsx`](src/components/library-design/ui/Skeleton.tsx)

**Purpose** — Placeholder block that renders while async content is loading. Uses a subtle `secondary-5` bg + pulse animation to signal "something is coming here".
**Use when** — Replacing text / cards / images that are fetched client-side and have a measurable target shape (text lines, avatar circle, card rectangle).
**Don't use** — For static content (the site is SSG — most pages don't need this). For errors (use <ErrorBoundary>) or empty collections (use <EmptyState>).

**Limits:**
- variant: "text" | "circle" | "rect"
- label: optional aria-label, max 60 chars

**Forbidden:**
- Do NOT use as a persistent visual element — it's for transient loading states only

---

### `<Slider>`

📄 [`src/components/library-design/ui/Slider.tsx`](src/components/library-design/ui/Slider.tsx)

**Purpose** — Minimal image carousel with prev/next chevron buttons and a lavender top-framed illustration well.
**Use when** — Section-level image showcases that cycle through 2+ product screenshots (feature walkthroughs, before/after, dashboard variants).
**Don't use** — For a single static image — use <IllustrationFrame>. For rich multi-content slides with captions/CTAs, build a dedicated section.

**Limits:**
- slides: array of { imageSrc, imageAlt? } — returns null when empty
- no autoplay, no dots; navigation is prev/next only

---

### `<Tag>`

📄 [`src/components/library-design/ui/Tag.tsx`](src/components/library-design/ui/Tag.tsx)
🎨 Figma `node-id 120-48047`

**Purpose** — Small inline pill/badge used for categories, status indicators, eyebrow labels, and filter chips.
**Use when** — Labeling content with a short category or status. Always inline.
**Don't use** — For CTAs (use <Button>), for long descriptions (use <Text>), or for decorative pills inside complex layouts — extract the specific need first.

**Limits:**
- children (label text): max 30 chars. Past that the pill breaks on 2 lines.
- icon: 1 inline element, rendered before children.

**Forbidden:**
- Do NOT pass className with typography / color overrides — use `variant`.
- Do NOT nest <Tag> inside <Tag>.

---

### `<TestimonialCard>`

📄 [`src/components/library-design/ui/TestimonialCard.tsx`](src/components/library-design/ui/TestimonialCard.tsx)

**Purpose** — Display a short customer testimonial: quote + pill with name/role/avatar, optional LinkedIn link.
**Use when** — Inside `<TestimonialsFrame>` to render individual testimonials.
**Don't use** — For a company-level endorsement with a big logo — use `<TestimonialCompanyCard>`.

**Limits:**
- quote: max 220 chars (keeps card height reasonable)
- name: max 30 chars (pill gets elliptical past that)
- role: max 45 chars

**Forbidden:**
- Do NOT pass className with typography overrides

---

### `<TestimonialCompanyCard>`

📄 [`src/components/library-design/ui/TestimonialCompanyCard.tsx`](src/components/library-design/ui/TestimonialCompanyCard.tsx)

**Purpose** — Company-facing testimonial: quote + company logo, framed by an asymmetric primary border.
**Use when** — Press quotes, company endorsements, partner testimonials.
**Don't use** — For a person-level testimonial — use `<TestimonialCard>` (keeps avatar + name + role + LinkedIn pattern).

**Limits:**
- quote: max 220 chars (matches TestimonialCard quote limit)
- logoSrc: should be an SVG or transparent PNG. Fixed logo box: 2.25 × 6.5 rem.

**Forbidden:**
- Do NOT pass className with typography / color overrides — use props

---

### `<Text>`

📄 [`src/components/library-design/ui/Text.tsx`](src/components/library-design/ui/Text.tsx)

**Purpose** — Canonical body/paragraph component. Always use this instead of raw <p>.
**Use when** — Paragraphs, subtitles, body copy, card descriptions.
**Don't use** — For headings (use <Heading>), inline emphasis (use <GradientText>), or UI labels inside badges/pills (a plain <span> is fine there).

**Limits:**
- size="sm": 16px fixed — short captions, meta info
- size="md": 18–25px clamp — default body paragraph
- size="lg": 20–28px clamp — emphasized paragraph / lead

**Forbidden:**
- Do NOT pass className with fontSize / fontWeight overrides — use `size` + `className="font-bold"` for weight adjustment only. Typography overrides break the type scale.

---


## 🧩 Section Frames — full rules

### `<ComparisonDualFrame>`

📄 [`src/components/library-design/sections/ComparisonDualFrame.tsx`](src/components/library-design/sections/ComparisonDualFrame.tsx)

**Purpose** — "Avec / sans" dual-column comparison: a row of numbered cards per column, each column led by a colored pill label.
**Use when** — Driving contrast between the old way (sans) and new way (avec) with concrete paired points. Typically placed before a CTA.
**Don't use** — For a single-column numbered list (use <ComparisonFrame>). For feature-matrix style comparison (use <ComparisonTableFrame>).

**Limits:**
- titlePrefix: max 70 chars (dark-to-primary gradient portion)
- titleHighlight: max 30 chars (primary gradient portion)
- sansLabel / avecLabel: max 20 chars
- sansItems / avecItems: 3–10 items each, ideally paired
- item.description: max 220 chars

**Forbidden:**
- Do NOT pass asymmetric item counts that break the paired narrative (use <ComparisonFrame> twice instead)

---

### `<ComparisonFrame>`

📄 [`src/components/library-design/sections/ComparisonFrame.tsx`](src/components/library-design/sections/ComparisonFrame.tsx)

**Purpose** — "Avec / sans" style numbered-list section showing pain points OR gains.
**Use when** — Driving contrast between old-way and new-way (before/after) on a single page. Typically used twice on the same page — one red/orange "sans" block + one green "avec" block.
**Don't use** — For side-by-side feature comparison tables (use <ComparisonTableFrame>).

**Limits:**
- title: max 80 chars
- subtitle: max 220 chars
- items: 4–8 (visual rhythm breaks outside this range)
- items[].description: max 220 chars
- emoji: 1–2 chars

---

### `<ComparisonTableFrame>`

📄 [`src/components/library-design/sections/ComparisonTableFrame.tsx`](src/components/library-design/sections/ComparisonTableFrame.tsx)

**Purpose** — Feature comparison grid — one card per row, one wide "feature" cell on the left, N narrower value cells on the right (one per column). Supports boolean (check/X), string, or custom ReactNode cell content.
**Use when** — Competitor comparisons, plan/pricing feature matrices, "Avec vs sans vs autre" tables. The highlighted column (primary tint) is typically AirSaas itself.
**Don't use** — For side-by-side narrative lists (use <ComparisonFrame> or <ComparisonDualFrame>). For 2+ features needing heavy copy, prefer stacked feature sections.

**Limits:**
- title: max 80 chars
- titleHighlight: max 40 chars
- subtitle: max 260 chars
- columns: 2–4 (past 4 the grid overflows on desktop)
- rows: 3–15 (past 15 the page gets heavy — split into multiple tables)
- row.label: max 80 chars
- cell string values: max 40 chars

**Forbidden:**
- Do NOT mix boolean + string cells in the same column (visual inconsistency)
- Do NOT use for "avec / sans" paired narrative — use <ComparisonDualFrame>

---

### `<CtaFrame>`

📄 [`src/components/library-design/sections/CtaFrame.tsx`](src/components/library-design/sections/CtaFrame.tsx)

**Purpose** — End-of-page conversion block: large gradient heading + subtitle + 2 CTA cards.
**Use when** — Closing a page that wants a direct conversion action (demo + newsletter, etc.).
**Don't use** — Mid-page — this is designed to be the last visual beat before the footer.

**Limits:**
- title: max 80 chars (fits Heading level 2 in 2 lines)
- subtitle: max 220 chars
- children: 2 <CardCta> components side by side (1 column on mobile)

**Forbidden:**
- Do NOT pass more than 2 cards — layout is grid-cols-2 at md+
- Do NOT override gradient via className

---

### `<CtaHighlightFrame>`

📄 [`src/components/library-design/sections/CtaHighlightFrame.tsx`](src/components/library-design/sections/CtaHighlightFrame.tsx)

**Purpose** — Full-width closing CTA section — large 3-part tri-gradient H2 (dark / primary / dark) + a centered white card containing a short subtitle and a single primary CTA.
**Use when** — Closing a product page with a strong "book a demo" ask. One per page max.
**Don't use** — For a side-by-side double CTA block (use <CtaFrame> with two CardCta children).

**Limits:**
- titlePrefix: max 30 chars (dark-to-primary gradient, before the highlight)
- titleHighlight: max 50 chars (primary gradient, the emphasized middle)
- titleSuffix: max 20 chars (dark-to-primary gradient, after the highlight)
- subtitle: max 220 chars
- ctaLabel: max 24 chars

**Forbidden:**
- Do NOT override gradient colors via className
- Do NOT stack two CtaHighlightFrame on one page

---

### `<FaqFrame>`

📄 [`src/components/library-design/sections/FaqFrame.tsx`](src/components/library-design/sections/FaqFrame.tsx)

**Purpose** — Expandable FAQ section with a highlighted title and accordion items.
**Use when** — The page needs to surface common objections / pricing questions / setup steps before conversion.
**Don't use** — For a short list of 2–3 hints (use inline <details> or custom block).

**Limits:**
- title: max 40 chars (plain dark-to-primary portion)
- titleHighlight: max 40 chars (gradient portion)
- items: 3–12 (past 12, split into multiple FAQs or a dedicated page)
- items[].question: max 120 chars
- items[].answer: max 500 chars

**Forbidden:**
- Do NOT nest FAQs (no accordion inside an answer)

---

### `<FeatureFrame>`

📄 [`src/components/library-design/sections/FeatureFrame.tsx`](src/components/library-design/sections/FeatureFrame.tsx)

**Purpose** — Single feature section: title + subtitle + checklist / rich content + optional image (side-by-side or stacked) + optional CTA.
**Use when** — Showcasing one feature or concept per section. The workhorse of the marketing page — most body sections below Hero use this.
**Don't use** — For a metrics grid (use <ValuePropositionFrame>), for testimonials (use <TestimonialsFrame>), or for FAQs (use <FaqFrame>).

**Limits:**
- title: max 120 chars (ReactNode allows spans; plain string best < 80)
- titleHighlight: max 40 chars
- subtitle: max 300 chars (ignored when richContent is provided)
- checklist: 2–6 items
- ctaLabel: max 24 chars
- richContent: prefer 1–4 paragraphs; the prose wrapper handles lists/links

**Forbidden:**
- Do NOT mix `subtitle`, `richContent`, and `checklist` — pick one content strategy per instance
- Do NOT use `imageSize="narrow"` with `layout="stacked"` (no effect)

---

### `<FeatureSectionStacked>`

📄 [`src/components/library-design/sections/FeatureSectionStacked.tsx`](src/components/library-design/sections/FeatureSectionStacked.tsx)

**Purpose** — Centered title + subtitle + orange-bordered item list, with an illustration image that bleeds from the bottom into the next section.
**Use when** — Mid-page feature moment where text is stacked on top and the screenshot/illustration anchors below (e.g. "Un capacity planning par équipe simple et actionnable" on HomePage).
**Don't use** — For feature + image side-by-side (use <FeatureFrame>). For a numbered "avec/sans" list (use <ComparisonFrame>).

**Limits:**
- titleGradient: max 40 chars (primary gradient portion)
- titleDark: max 60 chars
- titleDarkPrefix: max 20 chars
- subtitle: max 260 chars
- listItems: 3–6 strings (past 6 the list looks cluttered)

**Forbidden:**
- Do NOT use without an image — the design expects the bleed illustration

---

### `<Footer>`

📄 [`src/components/library-design/sections/Footer.tsx`](src/components/library-design/sections/Footer.tsx)

**Purpose** — Page footer — 4 columns of navigation links + floating logo + copyright card.
**Use when** — Last element on every page. Pass localized copy via `columns` + `copyright`.
**Don't use** — As an in-page card — this is designed as a full-width section.

**Limits:**
- columns: exactly 4 (matches the lg grid; fewer renders unbalanced)
- column.title: max 30 chars
- column.links[]: 3–10 per column
- link.label: max 50 chars
- copyright: max 220 chars

**Forbidden:**
- Do NOT hardcode text inside Footer — all copy comes from `columns` + `copyright` (callers load it from next-intl / CMS)

---

### `<Hero>`

📄 [`src/components/library-design/sections/Hero.tsx`](src/components/library-design/sections/Hero.tsx)
🎨 Figma `node-id 115-12821 (typography scale) + site templates`

**Purpose** — First section of a page: navbar + title + subtitle + CTAs + illustration.
**Use when** — Top of every marketing / product / solution page.
**Don't use** — As a mid-page section — that's what FeatureFrame / ValuePropositionFrame are for. Only one <Hero> per page.

**Limits:**
- title: max 60 chars
- titleHighlight: max 30 chars
- titleSuffix: max 30 chars
- subtitle: max 220 chars
- eyebrow: max 30 chars (uppercase, tracking)
- navItems: 2–7 top-level items
- bottomTags: 0–4

**Forbidden:**
- Do NOT render multiple <Hero> on a single page
- Do NOT pass className that changes the min-h-screen or background

---

### `<HighlightFrame>`

📄 [`src/components/library-design/sections/HighlightFrame.tsx`](src/components/library-design/sections/HighlightFrame.tsx)

**Purpose** — Alternating-zigzag vertically stacked cards, each with a big green gradient number outside the card (left on odd, right on even rows).
**Use when** — Emphasizing key positive metrics or numbered gains (3–7 items) with a success/green visual tone. Typically used after a ComparisonFrame.
**Don't use** — For negative / warning narratives (use <ComparisonFrame>). For metrics grid without the zigzag (use <ValuePropositionFrame> with <FeatureCard> children).

**Limits:**
- titleHighlight: max 40 chars (green gradient)
- title: max 80 chars
- subtitle: max 260 chars
- items: 3–7 (past 7 the zigzag rhythm breaks)
- item.value: 1–3 chars (big 5.5rem number)
- item.description: max 200 chars

**Forbidden:**
- Do NOT mix HighlightFrame with ComparisonFrame on the same page (redundant)

---

### `<IconRowFrame>`

📄 [`src/components/library-design/sections/IconRowFrame.tsx`](src/components/library-design/sections/IconRowFrame.tsx)

**Purpose** — Horizontal row of icon + label pairs (integrations, tech stack, trusted-by logos rendered as iconography). Icons sit above labels.
**Use when** — Displaying 4–8 tools / integrations / ecosystems on a single visual strip (e.g. "Ils s'intègrent à votre stack").
**Don't use** — For brand logos (use <LogosBar>). For a grid with richer content per item (use <ValuePropositionFrame> + <FeatureCard>).

**Limits:**
- titleHighlight / title: max 40 / 80 chars
- singleTitle: max 80 chars (alternative to titleHighlight + title)
- subtitle: max 260 chars
- items: 4–8 (past 8 the row wraps awkwardly on tablet)
- item.label: max 24 chars
- tag: max 24 chars

**Forbidden:**
- Do NOT mix singleTitle with titleHighlight/title — pick one strategy
- Do NOT use emoji as item.icon — use <IconBadge> for consistency

---

### `<PillarFrame>`

📄 [`src/components/library-design/sections/PillarFrame.tsx`](src/components/library-design/sections/PillarFrame.tsx)

**Purpose** — Grid of "pillar" cards — each with a large icon illustration, uppercase primary title, description, and an optional example note with a left-border accent.
**Use when** — Articulating 2–6 core principles / methodology steps / framework pillars (e.g. "DROP / KEEP / ADD" methodology; 4 product pillars).
**Don't use** — For generic feature grids (use <ValuePropositionFrame>). For metric-heavy cards (use <FeatureCard>).

**Limits:**
- titleHighlight: max 40 chars
- title: max 80 chars
- subtitle: max 260 chars
- pillars: 2–6 items (matches columns 2 or 3)
- pillar.title: max 20 chars (uppercase, short — "DROP", "ADD")
- pillar.description: max 220 chars
- pillar.example: max 180 chars (optional)
- tag: max 24 chars

**Forbidden:**
- Do NOT use for sequential steps (use a numbered pattern instead)

---

### `<SliderFrame>`

📄 [`src/components/library-design/sections/SliderFrame.tsx`](src/components/library-design/sections/SliderFrame.tsx)

**Purpose** — Centered title + subtitle + interactive screenshot carousel.
**Use when** — Showcasing a product surface (marketplace, integrations, multi-screen flow) with 2–5 slides that the user navigates through.
**Don't use** — For a static feature/image (use <FeatureFrame>). For a single image, no carousel wrapper needed.

**Limits:**
- titleHighlight: max 40 chars (primary gradient)
- titleRest: max 70 chars (dark foreground)
- subtitle: max 280 chars
- slides: 2–5

**Forbidden:**
- Do NOT nest another <Slider> inside this frame

---

### `<TestimonialsFrame>`

📄 [`src/components/library-design/sections/TestimonialsFrame.tsx`](src/components/library-design/sections/TestimonialsFrame.tsx)

**Purpose** — Section wrapper for testimonial cards: gradient heading + 3-col grid.
**Use when** — Surfacing 3–6 customer quotes on a marketing page.
**Don't use** — For a single hero testimonial — just render a <TestimonialCard> inline. For company-logo-based testimonials, prefer <TestimonialCompanyCard>.

**Limits:**
- title: max 40 chars (gradient dark-to-primary)
- titleHighlight: max 40 chars (gradient primary)
- testimonials: 3–6 items (renders in grid-cols-3 at lg)

**Forbidden:**
- Do NOT mix testimonials prop AND children — children wins, testimonials ignored

---

### `<ValuePropositionFrame>`

📄 [`src/components/library-design/sections/ValuePropositionFrame.tsx`](src/components/library-design/sections/ValuePropositionFrame.tsx)

**Purpose** — Section with title + subtitle + a 3- or 4-column grid of child cards (usually <FeatureCard> or custom).
**Use when** — Presenting 3–4 equal-weight benefits / value props / metrics.
**Don't use** — For a narrative "feature + image" flow (use <FeatureFrame>). For a listing of 6+ items (use <PillarFrame> or <HighlightFrame>).

**Limits:**
- title: max 80 chars
- titleHighlight: max 40 chars
- subtitle: max 250 chars
- children: 3 or 4 cards (matches `columns` prop)
- tag: max 24 chars

**Forbidden:**
- Do NOT mix different card components as children (visual consistency)

---


## ⚠️ Components without @purpose contract

None — all components have contracts.
