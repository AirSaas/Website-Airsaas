import { Container } from "@/components/ui/Container";

const STATS = [
  {
    value: "80%",
    description:
      "C'est la réduction moyenne du nombre de réunions projets constatée après 4 mois d'utilisation d'AirSaas. Pourquoi faire un meeting quand l'information est claire, centralisée et accessible à tous ?",
  },
  {
    value: "100%",
    description:
      "C'est le taux de réduction du nombre de projets lancés sans capacité à faire ou sans objectif clair.",
  },
  {
    value: "30K\u20AC",
    description:
      "C'est le montant annuel moyen que vous dépensez en temps-homme pour faire du PowerPoint projet (si vous avez plus de 20 projets).",
  },
];

export function Stats() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-[2.5rem] font-semibold leading-[3rem]">
          <strong className="font-extrabold">Les chiffres</strong> qui vous
          feront adopter AirSaas
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-[3.5rem] font-bold leading-tight text-primary">
                {stat.value}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
