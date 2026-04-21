import { cn } from "@/lib/utils";
import { assertMaxLength, assertNoClassNameOverride } from "@/lib/ds-validators";

/**
 * Text
 *
 * @purpose    Canonical body/paragraph component. Always use this instead of raw <p>.
 * @useWhen    Paragraphs, subtitles, body copy, card descriptions.
 * @dontUse    For headings (use <Heading>), inline emphasis (use <GradientText>),
 *             or UI labels inside badges/pills (a plain <span> is fine there).
 *
 * @limits
 *   - size="sm": 16px fixed — short captions, meta info
 *   - size="md": 18–25px clamp — default body paragraph
 *   - size="lg": 20–28px clamp — emphasized paragraph / lead
 *
 * @forbidden
 *   - Do NOT pass className with fontSize / fontWeight overrides — use `size` + `className="font-bold"`
 *     for weight adjustment only. Typography overrides break the type scale.
 */

interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  align?: "center" | "left";
  maxWidth?: string;
  className?: string;
}

const sizeClasses: Record<NonNullable<TextProps["size"]>, string> = {
  sm: "leading-relaxed",
  md: "leading-[1.4] font-light",
  lg: "leading-[1.4] font-light",
};

const sizeFontSize: Record<NonNullable<TextProps["size"]>, string> = {
  sm: "var(--text-small)",
  md: "var(--text-paragraph)",
  lg: "clamp(1.25rem, 2vw, 1.75rem)",
};

export function Text({
  children,
  size = "md",
  align = "left",
  maxWidth,
  className,
}: TextProps) {
  if (typeof children === "string") {
    // Paragraphs tolerate long text; we only warn on egregious overflow.
    assertMaxLength("Text", "children", children, 600);
  }
  assertNoClassNameOverride("Text", className, [
    "text-[",
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "leading-",
  ]);

  return (
    <p
      className={cn(
        "text-foreground",
        sizeClasses[size],
        align === "center" && "text-center",
        className
      )}
      style={{
        fontSize: sizeFontSize[size],
        ...(maxWidth ? { maxWidth } : {}),
      }}
    >
      {children}
    </p>
  );
}
