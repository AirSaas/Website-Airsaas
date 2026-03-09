import { Container } from "@/components/ui/Container";

type Testimonial = {
  name: string;
  role: string;
  initials: string;
  text: string;
  href: string;
};

type TestimonialCardsProps = {
  testimonials: Testimonial[];
};

export function TestimonialCards({ testimonials }: TestimonialCardsProps) {
  return (
    <section className="bg-bg-alt py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-[10px] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-20 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-text-muted">{t.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                {t.text}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
