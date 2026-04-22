import { cn } from "@/lib/utils";

/**
 * GradientText
 *
 * @purpose    Apply a brand gradient to a text fragment (inline span).
 *             Replaces scattered `style={{ backgroundImage, WebkitBackgroundClip }}` blocks.
 * @useWhen    Emphasizing a word or phrase with a brand gradient inside a `<Heading>`,
 *             `<Text>`, or any inline context. NOT a headline by itself.
 * @dontUse    As a full headline — use `<Heading gradient="primary">` instead.
 *
 * @limits
 *   - text: keep short (1–10 words). Long gradient runs hurt readability.
 *
 * @forbidden
 *   - Do NOT override color / background — use the `gradient` prop
 *   - Do NOT apply to block-level content; this is inline only
 */

type GradientVariant = "primary" | "dark-to-primary" | "orange" | "green";

interface GradientTextProps {
  gradient?: GradientVariant;
  children: React.ReactNode;
  className?: string;
}

const gradientMap: Record<GradientVariant, string> = {
  primary: "var(--gradient-primary)",
  "dark-to-primary": "var(--gradient-dark-to-primary)",
  orange: "var(--gradient-orange)",
  green: "var(--gradient-green)",
};

export function GradientText({
  gradient = "primary",
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn("bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: gradientMap[gradient],
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
