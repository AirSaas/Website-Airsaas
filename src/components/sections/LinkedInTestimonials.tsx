import { Container } from "@/components/ui/Container";

const TESTIMONIALS = [
  {
    name: "Thomas Sagnimorte",
    role: "DSI chez Millet Mountain Group",
    initials: "TS",
    text: "Super outil qui nous permet de fluidifier le pilotage de notre portefeuille projet. Je recommande!",
    href: "https://www.linkedin.com/posts/thomas-sagnimorte-593b2b1_cest-tellement-agr%C3%A9able-de-co-construire-activity-7084118266675101697-6OuH/",
  },
  {
    name: "Marie-Odile Lhomme",
    role: "Chief Digital & Information Officer",
    initials: "ML",
    text: "Un beau projet et une vraie dynamique d'équipe transverse DSI et Métiers au service du management du portefeuille de projets Audencia. Heureuse de constater au jour le jour la progression... et les premiers résultats! On continue!",
    href: "https://www.linkedin.com/posts/molhomme_mon-top-workshop-de-la-semaine-%C3%A9tait-avec-activity-7080456869751713792-NQT9/",
  },
  {
    name: "Clement Royer",
    role: "DSI - ICT MANAGER chez Chiesi France",
    initials: "CR",
    text: "Avec l'outil AirSaas nous avons pu ritualiser nos réunions de revu projet en supprimant les PowerPoints et les réunions peu efficaces. Cela nous permet d'avoir toute la DSI alignée et informée sur l'ensemble des projets au quotidien. Un outil vraiment TOP !",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7122982646506278912/",
  },
];

export function LinkedInTestimonials() {
  return (
    <section className="bg-bg-alt py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
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
