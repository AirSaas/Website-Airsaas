import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    title: "Entreprise",
    links: [
      { label: "Pourquoi AirSaas ?", href: "/fr/pourquoi-airsaas" },
      { label: "Cookies", href: "/fr/legal/cookies" },
      { label: "Conditions d'utilisation", href: "/fr/legal/cgu" },
      { label: "Mentions légales", href: "/fr/mentions-legales" },
      {
        label: "Charte de confidentialité",
        href: "/fr/legal/charte-de-confidentialite",
      },
      { label: "Kit média", href: "/fr/kit-media" },
      { label: "API AirSaas", href: "https://developers.airsaas.io/" },
      { label: "Plan du site", href: "/fr/plan-du-site" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Les Pro. de la Transfo.", href: "/fr/lesprodelatransfo" },
      { label: "Le blog d'AirSaas", href: "/fr/blog" },
      {
        label: "La conduite de projet",
        href: "/fr/gestion-de-projet/le-grand-guide-de-la-conduite-de-projet",
      },
      {
        label: "Portfolio project Management",
        href: "/fr/gestion-de-projet/portfolio-project-management-le-top-10-des-bonnes-pratiques",
      },
      { label: "Témoignages clients", href: "/fr/temoignages" },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Management de portefeuille projet",
        href: "/fr/solution/management-de-portefeuille-projet",
      },
      {
        label: "Flash report automatisé",
        href: "/fr/solution/flash-report",
      },
      {
        label: "Flash report projet",
        href: "/fr/solution/flash-report-projet",
      },
      { label: "Outil PPM", href: "/fr/solution/outil-ppm" },
      {
        label: "Outil de pilotage projet",
        href: "/fr/solution/outils-de-pilotage-projet",
      },
      {
        label: "Outil de gestion de portefeuille projet",
        href: "/fr/solution/gestion-portefeuille-projet",
      },
      { label: "Plan stratégique", href: "/fr/strategic" },
      {
        label: "Portfolio management",
        href: "/fr/solution/portfolio-management",
      },
      {
        label: "Revue de portefeuille",
        href: "/fr/solution/revue-de-portefeuille",
      },
      {
        label: "Tableau de bord portefeuille de projet",
        href: "/fr/solution/tableau-de-bord-portefeuille-de-projet",
      },
      {
        label: "Tableau de bord DSI",
        href: "/fr/solution/tableau-de-bord-dsi",
      },
      {
        label: "Tableau de bord de gestion de projet",
        href: "/fr/solution/tableau-de-bord-gestion-de-projet",
      },
    ],
  },
  {
    title: "Alternative à",
    links: [
      { label: "Sciforma", href: "/fr/compare/alternative-sciforma" },
      {
        label: "Planview Portfolio",
        href: "/fr/compare/alternative-planview-portfolio",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide opacity-80">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6">
          <Link href="/fr">
            <Image
              src="/assets/icons/AirSaas-logo-white.svg"
              alt="AirSaaS"
              width={32}
              height={32}
            />
          </Link>
          <p className="text-sm opacity-70">Made with love in France</p>
        </div>
      </div>
    </footer>
  );
}
