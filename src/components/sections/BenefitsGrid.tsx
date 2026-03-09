import { Container } from "@/components/ui/Container";

type BenefitsGridProps = {
  heading: string;
  description?: string;
  items: {
    title: string;
    description: string;
  }[];
};

export function BenefitsGrid({
  heading,
  description,
  items,
}: BenefitsGridProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-[2rem] font-bold leading-[2.5rem]">{heading}</h2>
          {description && (
            <p className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[27px] text-text-secondary">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] border border-border bg-white p-6"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
