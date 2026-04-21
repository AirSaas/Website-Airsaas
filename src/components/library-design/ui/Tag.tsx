import { cn } from "@/lib/utils";

/**
 * Tag
 *
 * @purpose    Small inline pill/badge used for categories, status indicators,
 *             eyebrow labels, and filter chips.
 * @useWhen    Labeling content with a short category or status. Always inline.
 * @dontUse    For CTAs (use <Button>), for long descriptions (use <Text>),
 *             or for decorative pills inside complex layouts — extract the
 *             specific need first.
 *
 * @limits
 *   - children (label text): max 30 chars. Past that the pill breaks on 2 lines.
 *   - icon: 1 inline element, rendered before children.
 *
 * @forbidden
 *   - Do NOT pass className with typography / color overrides — use `variant`.
 *   - Do NOT nest <Tag> inside <Tag>.
 *
 * @figma node-id 120-48047
 */

// Semantic variants (status-flavored) and Figma custom 1-12.
export type TagVariant =
  | "muted"       // brand blue — eyebrow / default
  | "default"     // Figma Tag/Default — secondary text on light neutral bg
  | "success"     // success state, auto-renders CheckCircleIcon if no icon passed
  | "warning"     // warning / prevention state
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  icon?: React.ReactNode;
  /** @forbidden typography / color overrides — use `variant`. */
  className?: string;
}

/** Style map — keeps each variant declaration isolated. */
const variantClass: Record<Exclude<TagVariant, number>, string> = {
  muted: "bg-primary-5 text-primary rounded-[1.5625rem]",
  default: "bg-tag-default-bg text-tag-default-text rounded-full",
  success: "bg-success-10 text-foreground rounded-full",
  warning: "bg-bg-warning text-warning-text rounded-full",
};

/** Figma Tag/Custom 1-12: each has a text color token + bg color token. */
function customTagClass(n: number): string {
  return `bg-tag-${n}-bg text-tag-${n}-text rounded-full`;
}

function variantToClass(variant: TagVariant): string {
  return typeof variant === "number" ? customTagClass(variant) : variantClass[variant];
}

const BASE_PADDING_STYLE: React.CSSProperties = {
  padding: "0.125rem 0.9rem",
  fontSize: "1.2rem",
  width: "fit-content",
};

const MUTED_PADDING_STYLE: React.CSSProperties = {
  padding: "0.1875rem 0.9rem",
  fontSize: "1.2rem",
  width: "fit-content",
};

function CheckCircleIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12.6068 17.6401C12.0361 18.2108 11.1541 18.2108 10.5834 17.6401L7.26287 14.3196C6.69216 13.7489 6.69216 12.8669 7.26287 12.2962C7.83358 11.7255 8.71558 11.7255 9.28629 12.2962L11.621 14.579L17.2243 8.9757C17.795 8.40499 18.677 8.40499 19.2477 8.9757C19.8185 9.54641 19.8185 10.4284 19.2477 10.9991L12.6068 17.6401ZM26.5632 13.282C26.5632 20.6493 20.5967 26.5639 13.2812 26.5639C5.91393 26.5639 -0.000687599 20.6493 -0.000687599 13.282C-0.000687599 5.96651 5.91393 1.74046e-05 13.2812 1.74046e-05C20.5967 1.74046e-05 26.5632 5.96651 26.5632 13.282ZM13.2812 2.49038C7.31475 2.49038 2.48968 7.36734 2.48968 13.282C2.48968 19.2485 7.31475 24.0735 13.2812 24.0735C19.1959 24.0735 24.0728 19.2485 24.0728 13.282C24.0728 7.36734 19.1959 2.49038 13.2812 2.49038Z"
        fill="url(#paint0_linear_tag)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_tag"
          x1="13.8328"
          y1="11.2207"
          x2="25.8225"
          y2="11.2219"
          gradientUnits="userSpaceOnUse"
        >
          <stop style={{ stopColor: "var(--color-success)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-success-40)" }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Tag({
  children,
  variant = "muted",
  icon,
  className,
}: TagProps) {
  const showDefaultIcon = variant === "success" && icon === undefined;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.5rem] font-normal",
        variantToClass(variant),
        className,
      )}
      style={variant === "muted" ? MUTED_PADDING_STYLE : BASE_PADDING_STYLE}
    >
      {showDefaultIcon && <CheckCircleIcon />}
      {icon}
      {children}
    </span>
  );
}
