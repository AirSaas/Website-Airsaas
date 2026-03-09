# Lessons Learned

## 2026-03-09 — CSS fidelity skipped during component development

**Mistake**: Built sections from design-system.md tokens without verifying actual CSS against Webflow source. Result: wrong font sizes, weights, gaps, paddings across multiple components. User had to flag it.

**Rule**: For EVERY section component:
1. Extract exact Webflow CSS via `style_tool > get_styles(query='ClassName')` BEFORE coding
2. After coding, take Playwright screenshot of Webflow original at 1440px and compare
3. Never mark a step complete without a visual QA pass

**Pattern to watch**: "Close enough" typography/spacing is never close enough. Always verify `font-size`, `font-weight`, `line-height`, `padding`, `gap`, `max-width` against source.

## 2026-03-09 — Vercel SSG fails with JSX in data files

**Mistake**: Used `generateStaticParams` + SSG for pages whose data files contain JSX (React.ReactNode). Worked locally but 500'd on Vercel.

**Rule**: Any page whose data contains JSX must use `export const dynamic = "force-dynamic"`. Test on Vercel, not just local build.
