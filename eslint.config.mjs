// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// ─── Strict DS rules ──────────────────────────────────────────────────────
// Catches violations of docs/ds-rules.md at lint time. Paired with the deeper
// scanner at `npm run lint:ds` (scripts/ds-audit.mjs). Warnings, not errors,
// so failing lint doesn't block builds during migration — but they surface
// in the editor immediately.
const dsStrictRules = {
  files: [
    "src/components/library-design/**/*.{ts,tsx}",
    "src/components/pages/**/*.{ts,tsx}",
  ],
  ignores: [
    "**/*.stories.tsx",
    // Canonical typography components own the forbidden patterns by design.
    "src/components/library-design/ui/Heading.tsx",
    "src/components/library-design/ui/Text.tsx",
    "src/components/library-design/ui/GradientText.tsx",
    "src/components/library-design/ui/SectionHeading.tsx",
    "src/components/library-design/foundation/**",
    "src/components/_legacy/**",
  ],
  rules: {
    "no-restricted-syntax": [
      "warn",
      {
        // Raw <h1-h6> tags are forbidden — use <Heading level={N}>.
        selector: "JSXOpeningElement[name.name=/^h[1-6]$/]",
        message:
          "[DS] Raw <h1-h6> is forbidden. Use <Heading level={1|2|3|4}> from library-design/ui/Heading.",
      },
      {
        // Inline style={{ fontSize }} — use <Heading> / <Text> or a CSS var token.
        selector: "JSXAttribute[name.name='style'] Property[key.name='fontSize']",
        message:
          "[DS] Inline style={{ fontSize }} is forbidden. Use <Heading>, <Text>, <GradientText>, or a CSS variable.",
      },
      {
        // Inline WebkitBackgroundClip — use <GradientText>.
        selector: "JSXAttribute[name.name='style'] Property[key.name='WebkitBackgroundClip']",
        message: "[DS] Inline WebkitBackgroundClip is forbidden. Use <GradientText gradient=\"…\">.",
      },
      {
        // Hardcoded hex color literal inside an inline style value.
        selector: "JSXAttribute[name.name='style'] Property Literal[value=/^#[0-9a-fA-F]{3,8}$/]",
        message:
          "[DS] Hardcoded hex color in inline style is forbidden. Use var(--color-*) tokens.",
      },
    ],
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  ...storybook.configs["flat/recommended"],
  dsStrictRules,
]);

export default eslintConfig;
