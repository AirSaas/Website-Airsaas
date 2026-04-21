/**
 * DS runtime validators — dev-only guardrails for component contracts.
 *
 * These helpers emit `console.warn` during development when a component is
 * used outside its contract (character limit overflow, array bounds, forbidden
 * className overrides). They are tree-shakable in production:
 *
 *   if (process.env.NODE_ENV === "development") {
 *     assertMaxLength(...);
 *   }
 *
 * Use them in components to enforce `@limits` and `@forbidden` clauses from
 * the JSDoc contracts. They NEVER throw — they warn and let the render proceed
 * so the UI still works; the goal is rapid feedback during development.
 *
 * Rules (docs/ds-rules.md):
 *   - Character limits keep the aesthetic solid across breakpoints.
 *   - Forbidden className tokens prevent consumers from breaking the contract.
 *   - Array bounds protect layouts from overflowing.
 */

const IS_DEV = typeof process !== "undefined" && process.env.NODE_ENV === "development";

/** Stable warn set to avoid spamming the same message on every re-render */
const warned = new Set<string>();

function devWarn(key: string, message: string): void {
  if (!IS_DEV) return;
  if (warned.has(key)) return;
  warned.add(key);
  // eslint-disable-next-line no-console
  console.warn(`[DS] ${message}`);
}

/**
 * Warn if a string prop exceeds its contractual character limit.
 * No-op in production.
 */
export function assertMaxLength(
  componentName: string,
  propName: string,
  value: string | undefined | null,
  max: number,
): void {
  if (!IS_DEV || value == null) return;
  if (value.length <= max) return;
  const key = `${componentName}.${propName}.maxLength`;
  devWarn(
    key,
    `${componentName}.${propName} is ${value.length} chars — contract says max ${max}. ` +
      `Longer values may break the intended layout. ` +
      `First 60 chars: "${value.slice(0, 60)}${value.length > 60 ? "…" : ""}"`,
  );
}

/**
 * Warn if an array prop is outside contractual min/max bounds.
 * No-op in production.
 */
export function assertArrayBounds<T>(
  componentName: string,
  propName: string,
  array: readonly T[] | undefined | null,
  min: number,
  max: number,
): void {
  if (!IS_DEV || array == null) return;
  if (array.length >= min && array.length <= max) return;
  const key = `${componentName}.${propName}.bounds`;
  devWarn(
    key,
    `${componentName}.${propName} has ${array.length} item(s) — contract says ${min}–${max}. ` +
      `Outside this range the layout may overflow or look empty.`,
  );
}

/**
 * Warn if `className` contains forbidden Tailwind prefixes (typography, color,
 * spacing, etc.) that would break a component's visual contract.
 * No-op in production.
 *
 * Example:
 *   assertNoClassNameOverride("Button", className, ["bg-", "text-", "font-"]);
 */
export function assertNoClassNameOverride(
  componentName: string,
  className: string | undefined,
  forbiddenPrefixes: readonly string[],
): void {
  if (!IS_DEV || !className) return;
  const classes = className.split(/\s+/).filter(Boolean);
  const hits: string[] = [];
  for (const cls of classes) {
    for (const prefix of forbiddenPrefixes) {
      if (cls.startsWith(prefix)) hits.push(cls);
    }
  }
  if (hits.length === 0) return;
  const key = `${componentName}.className.forbidden.${hits.join(",")}`;
  devWarn(
    key,
    `${componentName} received className with forbidden override(s): ${hits.join(", ")}. ` +
      `These classes break the component's visual contract — use the component's props instead ` +
      `or request a new variant if the need is genuine.`,
  );
}

/**
 * Warn if a prop value is outside an allowed enum.
 * No-op in production.
 */
export function assertOneOf<T extends string>(
  componentName: string,
  propName: string,
  value: T,
  allowed: readonly T[],
): void {
  if (!IS_DEV) return;
  if (allowed.includes(value)) return;
  const key = `${componentName}.${propName}.oneOf.${value}`;
  devWarn(
    key,
    `${componentName}.${propName}="${value}" is not one of: ${allowed.join(", ")}.`,
  );
}
