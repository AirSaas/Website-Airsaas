import { cn } from "@/lib/utils";
import { Tag } from "@/components/library-design/ui/Tag";
import { Heading } from "@/components/library-design/ui/Heading";
import { Text } from "@/components/library-design/ui/Text";
import { GradientText } from "@/components/library-design/ui/GradientText";
import {
  assertMaxLength,
  assertArrayBounds,
  assertNoClassNameOverride,
} from "@/lib/ds-validators";

/**
 * RelatedSolutionsFrame
 *
 * @purpose    Image-first cross-sell block — grid of 3–5 solution cards, each
 *             with a landscape screenshot/illustration, an H4 title, a short
 *             one-line description, and a "learn more" link. Typically sits at
 *             the bottom of a Landing / Produit / Solution page.
 * @useWhen    "Découvrez toute la plateforme AirSaas" / "Nos autres
 *             fonctionnalités" / "Solutions associées" sections where we
 *             showcase 3–5 adjacent products or solutions. Also works at the
 *             top of long-form Solution pages ("Tout sur le pilotage projet").
 * @dontUse    For blog articles (use <BlogCard> inside <BlogIndexGrid>). For
 *             icon-first benefit grids (use <FeatureCard> inside
 *             <ValuePropositionFrame>). For CTAs with a button (use
 *             <CtaFrame> + <CardCta>).
 *
 * @limits
 *   - tag: max 24 chars
 *   - titleHighlight: max 40 chars
 *   - title: max 80 chars
 *   - subtitle: max 260 chars
 *   - solutions: 3–5 items (below 3 looks sparse; above 5 breaks the grid)
 *   - solution.title: max 40 chars (2 lines of H4)
 *   - solution.description: max 120 chars (1–2 lines)
 *   - solution.linkLabel: max 24 chars (defaults to "Voir plus")
 *   - solution.imageAlt: required (pass "" only if image is purely decorative)
 *
 * @forbidden
 *   - Do NOT pass className that changes bg / border / padding / rounded —
 *     the chrome is part of the contract
 *   - Do NOT use for anchor/TOC navigation (use <TableOfContentsFrame>)
 *   - Do NOT render more than one <RelatedSolutionsFrame> per page (cross-sell
 *     clutter)
 */

export interface RelatedSolution {
  /** Landscape image URL — typically a product screenshot or illustration */
  imageSrc: string;
  /** Required alt text. Empty string `""` only if purely decorative. */
  imageAlt: string;
  /** Solution title (H4, up to 2 lines) */
  title: string;
  /** Short one-line description */
  description: string;
  /** Destination URL (internal route or external) */
  href: string;
  /** Optional custom link label (defaults to "Voir plus") */
  linkLabel?: string;
}

interface RelatedSolutionsFrameProps {
  variant?: "light" | "dark";
  tag?: string;
  /** First part of the title — rendered in primary gradient (light) or white (dark) */
  titleHighlight?: string;
  /** Second part of the title — rendered in dark-to-primary gradient (light) or white (dark) */
  title: string;
  subtitle?: string;
  /** Number of columns at lg breakpoint */
  columns?: 3 | 4 | 5;
  solutions: RelatedSolution[];
  /** Default link label if `solution.linkLabel` is not set. Locale-driven. */
  defaultLinkLabel?: string;
  className?: string;
}

export function RelatedSolutionsFrame({
  variant = "light",
  tag,
  titleHighlight,
  title,
  subtitle,
  columns = 4,
  solutions,
  defaultLinkLabel = "Voir plus",
  className,
}: RelatedSolutionsFrameProps) {
  assertMaxLength("RelatedSolutionsFrame", "tag", tag, 24);
  assertMaxLength("RelatedSolutionsFrame", "titleHighlight", titleHighlight, 40);
  assertMaxLength("RelatedSolutionsFrame", "title", title, 80);
  assertMaxLength("RelatedSolutionsFrame", "subtitle", subtitle, 260);
  assertArrayBounds("RelatedSolutionsFrame", "solutions", solutions, 3, 5);
  solutions.forEach((s, i) => {
    assertMaxLength(`RelatedSolutionsFrame.solutions[${i}]`, "title", s.title, 40);
    assertMaxLength(
      `RelatedSolutionsFrame.solutions[${i}]`,
      "description",
      s.description,
      120,
    );
    if (s.linkLabel)
      assertMaxLength(
        `RelatedSolutionsFrame.solutions[${i}]`,
        "linkLabel",
        s.linkLabel,
        24,
      );
  });
  assertNoClassNameOverride("RelatedSolutionsFrame", className, [
    "bg-",
    "border-",
    "p-",
    "px-",
    "py-",
  ]);

  const isDark = variant === "dark";

  const gridColsMap: Record<number, string> = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };
  const gridCols = gridColsMap[columns] ?? "lg:grid-cols-4";

  return (
    <section
      className={cn(
        "flex flex-col items-center gap-[2rem] px-[1.5rem] py-[3rem] md:gap-[2.5rem] md:px-[3rem] md:py-[4rem] lg:gap-[3.125rem] lg:px-[5rem] lg:py-[6.25rem]",
        isDark ? "bg-primary-70" : "bg-primary-2",
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

      {/* Solutions grid */}
      <div
        className={cn(
          "grid w-full max-w-[91rem] grid-cols-1 gap-[1.5rem] sm:grid-cols-2 md:gap-[1.75rem]",
          gridCols,
        )}
      >
        {solutions.map((solution, i) => (
          <SolutionCard
            key={i}
            solution={solution}
            defaultLinkLabel={defaultLinkLabel}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
  defaultLinkLabel,
  isDark,
}: {
  solution: RelatedSolution;
  defaultLinkLabel: string;
  isDark: boolean;
}) {
  const { imageSrc, imageAlt, title, description, href, linkLabel } = solution;
  const isDecorative = imageAlt === "";

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-clip rounded-[1.25rem] border transition-shadow duration-300 hover:shadow-card-hover",
        isDark
          ? "border-white/20 bg-primary-70"
          : "border-primary-20 bg-white",
      )}
    >
      {/* Image */}
      <a href={href} className="block w-full focus-visible:outline-none">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-5">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            {...(isDecorative ? { "aria-hidden": true as const } : {})}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-[0.625rem] p-[1.25rem] md:gap-[0.75rem] md:p-[1.5rem]">
        <Heading level={4} gradient="none" align="left">
          <a
            href={href}
            className={cn(
              "transition-colors focus-visible:outline-none",
              isDark
                ? "text-white hover:text-white/80 focus-visible:text-white/80"
                : "text-foreground hover:text-primary focus-visible:text-primary",
            )}
          >
            {title}
          </a>
        </Heading>

        <Text size="md" align="left" className={isDark ? "text-white/90" : undefined}>
          {description}
        </Text>

        <div className="mt-auto pt-[0.5rem]">
          <a
            href={href}
            className={cn(
              "inline-flex items-center gap-[0.375rem] font-bold transition-colors focus-visible:outline-none",
              isDark
                ? "text-white hover:text-white/80 focus-visible:text-white/80"
                : "text-primary hover:text-primary-dark focus-visible:text-primary-dark",
            )}
          >
            {linkLabel ?? defaultLinkLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
