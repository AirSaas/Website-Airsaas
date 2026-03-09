import Image from "next/image";
import { Container } from "@/components/ui/Container";

const PRESS_ITEMS = [
  {
    quote:
      "Hub de pilotage [...] donnant le bon niveau de visibilité aux métiers, aux Codir et Comex",
    logo: "/assets/images/logo-alliancy-monotone.png",
    logoAlt: "Alliancy",
    href: "https://www.alliancy.fr/comexposium-dsi-dialogue-metiers-evenementiel",
  },
  {
    quote:
      "AirSaas vise à rendre réel l'alignement entre les directions métiers, la DSI et la direction générale",
    logo: "/assets/images/JDN-monotone.png",
    logoAlt: "JDN Journal du NET",
    href: "https://www.journaldunet.com/solutions/dsi/1514525-airsaas-la-solution-pour-piloter-les-plans-de-transformation-des-entreprises/",
  },
  {
    quote: "Une nouvelle manière d'embarquer les équipes",
    logo: "/assets/images/LePoint-monotone.png",
    logoAlt: "Le Point",
    href: "https://www.lepoint.fr/services/gouvernance-projet-comment-airsaas-aide-les-entreprises-a-reussir-leurs-programmes-de-transformation-05-12-2022-2500422_4345.php",
  },
  {
    quote:
      "la DSI a choisi de mettre en place deux solutions complémentaires : AirSaas pour le pilotage stratégique et Asana pour la gestion opérationnelle des projets",
    logo: "/assets/images/LMI.png",
    logoAlt: "lemondeinformatique.fr",
    href: "https://www.lemondeinformatique.fr/actualites/lire-aurore-butrot-dsi-d-intuis-revient-sur-le-pilotage-des-projets-it-89605.html",
  },
];

export function PressLogos() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-center text-[2.5rem] font-semibold leading-[3rem]">
          Ils parlent de <strong className="font-extrabold">nous</strong>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRESS_ITEMS.map((item) => (
            <a
              key={item.logoAlt}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-[10px] border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="relative mb-6">
                <span className="text-5xl font-bold text-primary/20">
                  &ldquo;
                </span>
                <p className="mt-[-12px] text-sm leading-relaxed text-text-secondary">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="relative h-8">
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
