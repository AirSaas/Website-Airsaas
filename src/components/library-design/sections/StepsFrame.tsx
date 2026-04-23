import { cn } from "@/lib/utils";
import { Tag } from "@/components/library-design/ui/Tag";
import { Heading } from "@/components/library-design/ui/Heading";
import { Text } from "@/components/library-design/ui/Text";
import { GradientText } from "@/components/library-design/ui/GradientText";
import { assertMaxLength, assertArrayBounds } from "@/lib/ds-validators";

/**
 * StepsFrame
 *
 * @purpose    Sequential numbered steps — a horizontal row of 3–5 cards, each
 *             with a large gradient number, an icon illustration, a title,
 *             and a short description. Steps are visually chained with a
 *             dashed connector line on lg.
 * @useWhen    "How it works" / "Onboarding" / "Deployment steps" sections on
 *             landing pages and marketing pages where the order matters.
 *             Example: "Lancez votre PPM en 4 étapes".
 * @dontUse    For non-sequential principles (use <PillarFrame>). For generic
 *             feature grids (use <ValuePropositionFrame>). For zig-zag
 *             alternating highlights (use <HighlightFrame>).
 *
 * @limits
 *   - tag: max 24 chars
 *   - titleHighlight: max 40 chars
 *   - title: max 80 chars
 *   - subtitle: max 260 chars
 *   - steps: 3–5 items (below 3 looks sparse; above 5 breaks the grid rhythm)
 *   - step.title: max 24 chars (wraps past that)
 *   - step.description: max 180 chars
 *
 * @forbidden
 *   - Do NOT pass className with bg / color / padding overrides — the white
 *     section + primary-gradient numbers + dashed connector are part of the
 *     contract
 *   - Do NOT use for non-sequential content — the numbered affordance implies
 *     order
 */

export interface Step {
  /** Pre-rendered icon node — typically an <IconIllustration size="lg"> */
  icon?: React.ReactNode;
  /** Step number (1-based) — rendered large with primary gradient */
  number: number;
  /** Short step label (e.g. "Kick-off", "Go live") */
  title: string;
  /** One-line description of what happens in this step */
  description: string;
}

interface StepsFrameProps {
  variant?: "light" | "dark";
  tag?: string;
  /** First part of the title — rendered in primary gradient */
  titleHighlight?: string;
  /** Second part of the title — rendered in dark-to-primary gradient */
  title: string;
  subtitle?: string;
  steps: Step[];
  className?: string;
}

export function StepsFrame({
  variant = "light",
  tag,
  titleHighlight,
  title,
  subtitle,
  steps,
  className,
}: StepsFrameProps) {
  assertMaxLength("StepsFrame", "tag", tag, 24);
  assertMaxLength("StepsFrame", "titleHighlight", titleHighlight, 40);
  assertMaxLength("StepsFrame", "title", title, 80);
  assertMaxLength("StepsFrame", "subtitle", subtitle, 260);
  assertArrayBounds("StepsFrame", "steps", steps, 3, 5);
  steps.forEach((step, i) => {
    assertMaxLength(`StepsFrame.steps[${i}]`, "title", step.title, 24);
    assertMaxLength(`StepsFrame.steps[${i}]`, "description", step.description, 180);
  });

  const isDark = variant === "dark";

  const gridColsMap: Record<number, string> = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };
  const gridCols = gridColsMap[steps.length] ?? "lg:grid-cols-4";

  return (
    <section
      className={cn(
        "flex flex-col items-center gap-[2rem] px-[1.5rem] py-[3rem] md:gap-[2.5rem] md:px-[3rem] md:py-[4rem] lg:gap-[3.75rem] lg:px-[10rem] lg:py-[6.25rem]",
        isDark ? "bg-primary-70" : "bg-white",
        className,
      )}
    >
      {tag && <Tag variant="muted">{tag}</Tag>}

      <div className="flex flex-col items-center gap-[1rem] md:gap-[1.25rem] text-center">
        {isDark ? (
          <Heading level={2} gradient="none" align="center" className="text-white">
            {titleHighlight && <>{titleHighlight} </>}
            {title}
          </Heading>
        ) : (
          <Heading level={2} gradient="none" align="center">
            {titleHighlight && <GradientText gradient="primary">{titleHighlight}</GradientText>}
            {titleHighlight && " "}
            <GradientText gradient="dark-to-primary">{title}</GradientText>
          </Heading>
        )}

        {subtitle && (
          <Text
            size="md"
            align="center"
            maxWidth="60rem"
            className={isDark ? "text-white" : undefined}
          >
            {subtitle}
          </Text>
        )}
      </div>

      {/* Steps grid */}
      <div
        className={cn(
          "relative grid w-full max-w-[91rem] grid-cols-1 gap-[2rem] md:grid-cols-2 md:gap-[2.5rem] lg:gap-[2rem]",
          gridCols,
        )}
      >
        {/* Dashed connector — hidden on mobile/tablet, visible on lg */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-[8%] right-[8%] top-[3rem] hidden border-t-2 border-dashed lg:block",
            isDark ? "border-white/30" : "border-primary-20",
          )}
        />

        {steps.map((step, i) => (
          <StepItem key={i} step={step} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}

function StepItem({ step, isDark }: { step: Step; isDark: boolean }) {
  const bodyColor = isDark ? "text-white" : "text-foreground";

  return (
    <div className="relative flex flex-col items-center gap-[1rem] md:gap-[1.25rem] text-center">
      {/* Number badge — white circle with gradient number */}
      <div
        className={cn(
          "relative z-10 flex h-[5rem] w-[5rem] md:h-[6rem] md:w-[6rem] items-center justify-center rounded-full border-2",
          isDark ? "bg-primary-70 border-white/40" : "bg-white border-primary-20",
        )}
      >
        {isDark ? (
          <Heading level={3} gradient="none" align="center" className="text-white">
            {step.number}
          </Heading>
        ) : (
          <Heading level={3} gradient="primary" align="center">
            {step.number}
          </Heading>
        )}
      </div>

      {step.icon && (
        <div className="shrink-0">{step.icon}</div>
      )}

      <Text size="lg" align="center" className={cn("font-bold", bodyColor)}>
        {step.title}
      </Text>

      <Text size="sm" align="center" className={bodyColor}>
        {step.description}
      </Text>
    </div>
  );
}
