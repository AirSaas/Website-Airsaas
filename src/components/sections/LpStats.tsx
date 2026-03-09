import { Container } from "@/components/ui/Container";

type LpStat = {
  value: string;
  label: string;
};

type LpStatsProps = {
  heading?: string;
  stats: LpStat[];
};

export function LpStats({ heading, stats }: LpStatsProps) {
  return (
    <section className="py-16">
      <Container>
        {heading && (
          <h3 className="mb-10 text-center text-lg font-semibold text-text-secondary">
            {heading}
          </h3>
        )}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[200px] flex-1 text-center">
              <div className="text-[2.5rem] font-bold leading-tight text-primary">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
