import Link from "next/link";
import { Container } from "@/components/ui/Container";

const STORIES = [
  {
    name: "Laurent Citton",
    role: "Directeur des Systèmes d'Information Groupe chez Picoty",
    company: "Groupe Picoty",
    sector: "Énergie et combustibles",
    employees: "1300",
    initials: "LC",
    href: "/fr/testimonials/cas-client-picoty-gamac-quarter-plan-roadmap-dsi",
  },
  {
    name: "Émilie Lecart",
    role: "CIO Office",
    company: "",
    sector: "Hôtellerie & loisirs",
    employees: "40000",
    initials: "EL",
    href: "/fr/testimonials/donner-du-rythme-a-la-roadmap-projet-grace-au-quarter-plan",
  },
  {
    name: "Sébastien Louyot",
    role: "Group CIO",
    company: "Altavia",
    sector: "Communication et marketing",
    employees: "2800",
    initials: "SL",
    href: "/fr/testimonials/aligner-capacite-a-faire-et-demandes-entrantes-grace-a-quarter-plan",
  },
  {
    name: "David Langlade",
    role: "Conseil / DSI de transition CTO/ - CIO",
    company: "Dynamical",
    sector: "Conseil",
    employees: "2",
    initials: "DL",
    href: "/fr/testimonials/ameliorer-son-suivi-de-mission-en-tant-quindependant",
  },
  {
    name: "Clément Royer",
    role: "DSI - ICT MANAGER chez Chiesi France",
    company: "Chiesi France",
    sector: "Santé-Pharma",
    employees: "6500",
    initials: "CR",
    href: "/fr/testimonials/rationaliser-les-rituels-autour-du-portfolio-projet",
  },
  {
    name: "Aurore Butrot",
    role: "DSI Intuis (Ex Groupe Muller)",
    company: "Groupe Intuis (Ex Muller)",
    sector: "Industrie",
    employees: "1000",
    initials: "AB",
    href: "/fr/testimonials/copiloter-la-strategie-et-les-operations-grace-a-airsaas-asana-groupe-intuis",
  },
  {
    name: "Stephan Boisson",
    role: "Group Chief Digital & Information Officer Comexposium",
    company: "Comexposium",
    sector: "Événementiel",
    employees: "900",
    initials: "SB",
    href: "/fr/testimonials/transformer-la-relation-entre-lit-et-les-metiers-et-se-focaliser-sur-la-valeur-les-infos-pertinentes-et-decisions-a-prendre-avec-airsaas-comexposium",
  },
  {
    name: "Sylvain Bourdette",
    role: "DSI/CTO/Pro de la transfo",
    company: "Indexia Groupe",
    sector: "Assurance et Distribution",
    employees: "3000",
    initials: "SB",
    href: "/fr/testimonials/renforcer-les-liens-de-confiance-avec-les-directions-metiers-grace-a-airsaas-indexia-group",
  },
  {
    name: "Vincent Potel",
    role: "Directeur Général de transition",
    company: "Caduciel",
    sector: "Santé - Editeur de logiciel",
    employees: "50",
    initials: "VP",
    href: "/fr/testimonials/management-transition-caduciel",
  },
];

export function CustomerStories() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-[2.5rem] font-semibold leading-[3rem]">
            Laissez{" "}
            <strong className="font-extrabold">nos clients</strong> vous parler
            d&apos;AirSaas
          </h2>
          <p className="mt-4 text-[17px] leading-[23px] text-text-secondary">
            Qui de mieux pour vous parler de la plateforme que ceux qui
            l&apos;utilisent au quotidien pour améliorer la gestion de leurs
            projets de transformation ?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story) => (
            <Link
              key={story.name}
              href={story.href}
              className="group flex flex-col rounded-[10px] border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-20 text-sm font-semibold text-primary">
                  {story.initials}
                </div>
                <div>
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-text-muted">{story.role}</p>
                </div>
              </div>

              {story.company && (
                <p className="mb-3 text-sm font-semibold">{story.company}</p>
              )}

              <div className="mt-auto flex flex-col gap-2 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-text-secondary">Secteur</span>
                  <span>{story.sector}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-text-secondary">
                    Nombre d&apos;employés
                  </span>
                  <span>{story.employees}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/fr/temoignages"
            className="text-primary underline hover:no-underline"
          >
            Consultez les témoignages de nos clients
          </Link>
        </div>
      </Container>
    </section>
  );
}
