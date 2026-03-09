import { Container } from "@/components/ui/Container";

type Badge = {
  title: string;
  description: string;
};

type TrustBadgesProps = {
  heading?: string;
  description?: string;
  badges: Badge[];
};

export function TrustBadges({
  heading = "Sécurité et conformité",
  description = "Nous prenons la sécurité de vos données très au sérieux.",
  badges,
}: TrustBadgesProps) {
  return (
    <section className="bg-foreground py-16 text-white">
      <Container className="text-center">
        <h2 className="text-[2rem] font-bold leading-[2.5rem]">{heading}</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-white/70">
          {description}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-[10px] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg font-bold">{badge.title}</p>
              <p className="mt-2 text-sm text-white/60">{badge.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
