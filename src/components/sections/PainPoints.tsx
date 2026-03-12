import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type PainPointsProps = {
  badge?: string;
  heading: string;
  items: React.ReactNode[];
};

export function PainPoints({
  badge,
  heading,
  items,
}: PainPointsProps) {
  return (
    <section className="py-16">
      <Container>
        <FadeIn>
        <div className="mb-10 text-center">
          {badge && (
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              {badge}
            </span>
          )}
          <h3 className="text-[1.875rem] font-bold leading-[2.375rem]">
            {heading}
          </h3>
        </div>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="text-[15px] leading-relaxed text-foreground">
                {item}
              </div>
            </div>
          ))}
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}
