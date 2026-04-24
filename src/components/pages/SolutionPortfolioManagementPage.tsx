"use client";

import { Hero } from "@/components/library-design/sections/Hero";
import { ValuePropositionFrame } from "@/components/library-design/sections/ValuePropositionFrame";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
import { ComparisonTableFrame } from "@/components/library-design/sections/ComparisonTableFrame";
import { ClientsFrame } from "@/components/library-design/sections/ClientsFrame";
import { TestimonialsFrame } from "@/components/library-design/sections/TestimonialsFrame";
import { CtaFrame } from "@/components/library-design/sections/CtaFrame";
import { Footer } from "@/components/library-design/sections/Footer";
import { CardCta } from "@/components/library-design/ui/CardCta";
import { FeatureCard } from "@/components/library-design/ui/FeatureCard";
import { TestimonialCard } from "@/components/library-design/ui/TestimonialCard";
import { TestimonialCompanyCard } from "@/components/library-design/ui/TestimonialCompanyCard";
import { IconIllustration } from "@/components/library-design/ui/IconIllustration";
import { AnimateOnScroll } from "@/components/library-design/ui/AnimateOnScroll";
import {
  AtomIcon,
  BoltLightningIcon,
  BullseyeArrowIcon,
  StopwatchIcon,
  CalendarDayIcon,
  IndustryIcon,
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";
import { SHARED_PRESS_ITEMS, SHARED_TESTIMONIALS } from "@/data/shared-content";

const IMG = "/assets/pages/solution/portfolio-management";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

const clientProfiles = [
  { name: "Laurent Citton", jobTitle: "DSI Groupe", companyName: "Groupe Picoty", sector: "Énergie et combustibles", employees: "1 300" },
  { name: "Émilie Lecart", jobTitle: "CIO Office", companyName: "Groupe Pierre & Vacances", sector: "Hôtellerie & loisirs", employees: "40 000" },
  { name: "Sébastien Louyot", jobTitle: "Group CIO", companyName: "Altavia", sector: "Communication et marketing", employees: "2 800" },
  { name: "David Langlade", jobTitle: "DSI de transition", companyName: "Dynamical", sector: "Conseil", employees: "2" },
  { name: "Clément Royer", jobTitle: "DSI - ICT Manager", companyName: "Chiesi France", sector: "Santé - Pharma", employees: "6 500" },
  { name: "Aurore Butrot", jobTitle: "DSI", companyName: "Groupe Intuis", sector: "Industrie", employees: "1 000" },
  { name: "Stephan Boisson", jobTitle: "Group CDIO", companyName: "Comexposium", sector: "Événementiel", employees: "900" },
  { name: "Sylvain Bourdette", jobTitle: "DSI / CTO", companyName: "Indexia Groupe", sector: "Assurance", employees: "3 000" },
  { name: "Vincent Potel", jobTitle: "DG de transition", companyName: "Caduciel", sector: "Santé – Éditeur de logiciel", employees: "50" },
];

export default function SolutionPortfolioManagementPage() {
  return (
    <div className="w-full">
      <Hero
        variant="light"
        layout="split"
        navItems={SITE_NAV_ITEMS}
        navCtaLabel={SITE_NAV_CTA.label}
        navCtaHref={SITE_NAV_CTA.href}
        loginLabel={SITE_NAV_LOGIN.label}
        loginHref={SITE_NAV_LOGIN.href}
        topTag={{ label: "Portfolio management", variant: "muted" }}
        title="La solution de portfolio management"
        titleHighlight="qui accélère votre transformation"
        subtitle="Un outil PPM qui vous aide à dépasser les problèmes les plus fréquents en gestion de portefeuille. Accélérez la prise de décision, gardez une transparence totale."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
        imageAlt="Vue timeline du portefeuille AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Les chiffres"
          title="qui vous feront adopter AirSaas"
          subtitle="Nos clients constatent ces gains après seulement 4 mois d'utilisation."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="- 30% de réunions projet"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="- 50% de projets sans capacité"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="1 journée gagnée par semaine"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Une plateforme de gouvernance"
          title="à la hauteur de vos ambitions"
          subtitle="Devenez le pivot de la transformation de l'entreprise en structurant la gouvernance de tous les projets, grâce à une plateforme simple que le top management va adorer."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Partagez simplement"
          title="les roadmaps à toute l'organisation"
          subtitle="Une roadmap, ça bouge, ça vit, c'est un élément clé pour aligner le top management en continu. L'information est centralisée, partageable et sympa à visualiser."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Roadmap AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Un capacity planning"
          title="simple et actionnable"
          subtitle="Visualisez en un clin d'œil si vous êtes dans les clous. Grâce à cette vue vous avez les bases d'une discussion pragmatique pour prendre les décisions."
          imageSrc={`${IMG}/65d473f144eace1121240b18_Modal---create-project.webp`}
          imageAlt="Capacity planning AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Diffusez un cadrage"
          title="de projet standardisé"
          subtitle="Remplissez les fiches cadrage de projet de manière collaborative et guidez vos collaborateurs vers un véritable niveau d'excellence en gestion de projet."
          imageSrc={`${IMG}/65d35d6a6c51a9712103f44c_Presentation-scope-slide.webp`}
          imageAlt="Cadrage projet collaboratif"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Votre reporting projet"
          title="en un clic"
          subtitle="Générez votre reporting flash en un seul clic, et homogénéisez vos présentations pour faciliter la prise de décision. Autant de temps gagné pour le coaching."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Reporting projet automatisé"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Fluidifiez votre prise de décision"
          title="importantes et urgentes"
          subtitle="Centralisez vos décisions sous forme de Kanban et partagez-les aisément avec toutes les parties prenantes. Finies les informations perdues dans les mails."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Décisions centralisées en Kanban"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Et si vous repreniez le contrôle de votre portefeuille ?"
          subtitle="Adoptez une solution de gestion de gouvernance moderne, qui fait gagner vos projets en temps et en efficacité."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="30 minutes pour découvrir AirSaas."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ComparisonTableFrame
          titleHighlight="Nos clients"
          title="ne peuvent plus imaginer leur vie sans AirSaas"
          featuresLabel="Quotidien PMO / DSI"
          columns={[
            { label: "Sans AirSaas" },
            { label: "Avec AirSaas", highlight: true },
          ]}
          rows={[
            {
              feature: "Cadrage projet",
              values: [
                "PowerPoint ou Excel, sans collaboration",
                "Cadrage collaboratif et uniformisé",
              ],
            },
            {
              feature: "Reporting Copil",
              values: [
                "Temps significatif manuel",
                "Généré automatiquement aux couleurs de l'entreprise",
              ],
            },
            {
              feature: "Micro-information",
              values: [
                "Dispersée entre outils de tâches et ticketing",
                "Focus sur les décisions et points d'attention",
              ],
            },
            {
              feature: "Transparence",
              values: [
                "Décisions difficiles à suivre",
                "Transparence pour toutes les parties prenantes",
              ],
            },
            {
              feature: "Pilotage",
              values: [
                "À la tâche, complexe",
                "Agile par les jalons",
              ],
            },
            {
              feature: "Culture projet",
              values: [
                "Hétérogène, voire inexistante",
                "Standardisée, pousse vers l'excellence",
              ],
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ClientsFrame
          title="Ils pilotent leurs projets"
          titleHighlight="avec AirSaas"
          subtitle="Des DSI et PMO de tous secteurs adoptent AirSaas pour transformer leur gouvernance."
          clients={clientProfiles.map((c) => ({
            avatarSrc: `${IMG}/66154e9586f923137ec7a754_linkedin-embed-logo.png`,
            avatarAlt: c.name,
            name: c.name,
            jobTitle: c.jobTitle,
            companyName: c.companyName,
            infoRows: [
              { icon: <IndustryIcon />, label: "Secteur", value: c.sector },
              { icon: <CalendarDayIcon />, label: "Effectif", value: c.employees },
            ],
          }))}
          columns={3}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Faites passer votre portfolio management à la vitesse supérieure"
          subtitle="Une solution qui fluidifie votre prise de décision et automatise votre reporting."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="Accélérez vos prises de décisions avec AirSaas."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <TestimonialsFrame title="Ils parlent de" titleHighlight="nous">
          <div className="grid grid-cols-1 gap-[1rem] items-stretch w-full md:grid-cols-2 lg:grid-cols-4">
            {SHARED_PRESS_ITEMS.map((p, i) => (
              <TestimonialCompanyCard
                key={i}
                quote={p.quote}
                logoSrc={p.logo}
                logoAlt={p.logoAlt}
                className="!w-auto flex-1"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-[1rem] items-stretch w-full md:grid-cols-3">
            {SHARED_TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.text}
                name={t.name}
                role={t.role}
                linkedinHref={t.href}
                className="flex-1"
              />
            ))}
          </div>
        </TestimonialsFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={600}>
        <Footer
          columns={SITE_FOOTER_COLUMNS}
          copyright={SITE_FOOTER_COPYRIGHT}
          copyrightIcon={<span aria-label="Français">🇫🇷</span>}
        />
      </AnimateOnScroll>
    </div>
  );
}
