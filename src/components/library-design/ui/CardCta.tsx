import { cn } from "@/lib/utils";
import { Button, type ButtonVariant, type ButtonSize } from "@/components/library-design/ui/Button";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { GradientText } from "./GradientText";

/**
 * CardCta
 *
 * @purpose    Minimal card with a short gradient title, a one-line description,
 *             and a primary CTA. Usually rendered as children of `<CtaFrame>`.
 * @useWhen    Offering a quick CTA choice (e.g. "Démo" / "Newsletter" / "Contact").
 * @dontUse    For a feature/benefit card (use `<FeatureCard>`).
 *
 * @limits
 *   - title: max 30 chars (Figma H4)
 *   - description: max 100 chars (one-line paragraph)
 *   - ctaLabel: max 18 chars
 *
 * @forbidden
 *   - Do NOT pass typography className overrides
 */

type CardCtaGradient = "primary" | "orange" | "green" | "dark-to-primary" | "none";

interface CardCtaProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  /** Gradient applied to the title. Defaults to "primary". Use "none" for solid title. */
  gradient?: CardCtaGradient;
  /** CTA button variant. Defaults to "primary". */
  ctaVariant?: ButtonVariant;
  /** CTA button size. Defaults to "sm". */
  ctaSize?: ButtonSize;
  className?: string;
}

export function CardCta({
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  gradient = "primary",
  ctaVariant = "primary",
  ctaSize = "sm",
  className,
}: CardCtaProps) {
  const useGradient = gradient !== "none";

  return (
    <article
      className={cn(
        "flex flex-col gap-[0.75rem] md:gap-[0.9375rem] items-center justify-center rounded-[1.25rem] md:rounded-[1.5625rem] border border-primary-40 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <Heading level={4} gradient="none" align="center">
        {useGradient ? <GradientText gradient={gradient}>{title}</GradientText> : title}
      </Heading>

      <Text size="md" align="center">
        {description}
      </Text>

      <Button variant={ctaVariant} size={ctaSize} href={ctaHref}>
        {ctaLabel}
      </Button>
    </article>
  );
}
