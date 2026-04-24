import { cn } from "@/lib/utils";
import { Tag } from "@/components/library-design/ui/Tag";
import { Heading } from "@/components/library-design/ui/Heading";
import { Text } from "@/components/library-design/ui/Text";
import { GradientText } from "@/components/library-design/ui/GradientText";
import {
  ClientCard,
  type ClientCardProps,
} from "@/components/library-design/ui/ClientCard";
import { assertMaxLength, assertArrayBounds } from "@/lib/ds-validators";

/**
 * ClientsFrame
 *
 * @purpose    Large grid of anonymous client cards — each card shows an
 *             avatar + name + role on a white section, and the company name
 *             + metadata rows on a primary-tinted bottom section. Typically
 *             placed at the bottom of Équipes / Solution pages to showcase
 *             "who trusts us".
 * @useWhen    "Ils nous font confiance" / "Les AirSaasiens" / "Nos clients"
 *             sections with 6–12 <ClientCard>. Replaces the old limit of
 *             <TestimonialsFrame> (max 6), which remains focused on quoted
 *             testimonials.
 * @dontUse    For testimonials with quotes (use <TestimonialsFrame> +
 *             <TestimonialCard>). For press citations (use
 *             <TestimonialsFrame> + <TestimonialCompanyCard>). For a simple
 *             row of logos (use <LogosBar>).
 *
 * @limits
 *   - tag: max 24 chars
 *   - titleHighlight: max 40 chars
 *   - title: max 80 chars
 *   - subtitle: max 260 chars
 *   - clients: 6–12 items
 *   - columns: 3 | 4 (default 3)
 *
 * @forbidden
 *   - Do NOT pass className that changes bg / border / padding
 *   - Do NOT mix <ClientCard> with other card types in the same grid
 */

export interface ClientsFrameClient extends Omit<ClientCardProps, "className" | "width" | "maxWidth"> {}

interface ClientsFrameProps {
  variant?: "light" | "dark";
  tag?: string;
  /** First part of the title — rendered in primary gradient (light) or white (dark) */
  titleHighlight?: string;
  /** Second part of the title — rendered in dark-to-primary gradient (light) or white (dark) */
  title: string;
  subtitle?: string;
  /** Number of columns at lg breakpoint */
  columns?: 3 | 4;
  clients: ClientsFrameClient[];
  className?: string;
}

export function ClientsFrame({
  variant = "light",
  tag,
  titleHighlight,
  title,
  subtitle,
  columns = 3,
  clients,
  className,
}: ClientsFrameProps) {
  assertMaxLength("ClientsFrame", "tag", tag, 24);
  assertMaxLength("ClientsFrame", "titleHighlight", titleHighlight, 40);
  assertMaxLength("ClientsFrame", "title", title, 80);
  assertMaxLength("ClientsFrame", "subtitle", subtitle, 260);
  assertArrayBounds("ClientsFrame", "clients", clients, 6, 12);

  const isDark = variant === "dark";

  const gridColsMap: Record<number, string> = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };
  const gridCols = gridColsMap[columns] ?? "lg:grid-cols-3";

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

      {/* Clients grid */}
      <div
        className={cn(
          "grid w-full max-w-[91rem] grid-cols-1 gap-[1.5rem] items-stretch sm:grid-cols-2 md:gap-[1.75rem]",
          gridCols,
        )}
      >
        {clients.map((client, i) => (
          <ClientCard
            key={i}
            {...client}
            width="100%"
            maxWidth="100%"
          />
        ))}
      </div>
    </section>
  );
}
