"use client";

import { Hero } from "@/components/library-design/sections/Hero";
import { ValuePropositionFrame } from "@/components/library-design/sections/ValuePropositionFrame";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
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
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";
import { SHARED_PRESS_ITEMS, SHARED_TESTIMONIALS } from "@/data/shared-content";

const IMG = "/assets/pages/solution/management-de-portefeuille-projet";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionManagementPortefeuillePage() {
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
        title="Management de portefeuille projet"
        titleHighlight="nouvelle génération"
        subtitle="AirSaas a été conçu pour vous aider à transformer votre entreprise efficacement. Révolutionnez votre management de portefeuille en gardant une vision précise des priorités, des décisions à prendre."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
        imageAlt="Vue timeline du portefeuille projet AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="La solution PPM préférée"
          title="des PMO et DSI"
          subtitle="Visualisez aisément vos projets, personnalisez vos tableaux de bord, et automatisez votre reporting en quelques clics seulement."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><AtomIcon /></Icon>}
            title="Vue macro exhaustive du portfolio"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Flash report automatisé"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Collaboration transverse métier × IT"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Visualisez votre portfolio"
          title="en vue macro"
          subtitle="Accédez à un tableau de bord de portefeuille projet simple à lire, où toutes vos informations-clés sont rassemblées, consolidées et à jour en temps réel."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Vue décisions du portefeuille AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Des intégrations natives"
          title="pour limiter le report de données manuel"
          subtitle="Synchronisez AirSaas à vos outils préférés : gestion de tâches (Jira, ClickUp, Asana, Monday), communication interne (Teams) et logiciel de service client (Zendesk)."
          imageSrc={`${IMG}/65c4fa645ae196734feb2eca_integrations-screen-home.webp`}
          imageAlt="Intégrations natives AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Concevez des vues personnalisées"
          title="de votre tableau de bord"
          subtitle="Profitez des filtres personnalisables d'AirSaas, qui vous aide à visualiser votre portefeuille en fonction de la météo, des risques ou de l'avancement de vos projets."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Vue liste"
          title="pour suivre l'avancée de vos projets"
          subtitle="Rendez-vous sur la vue liste, et passez en revue les différents projets de votre portefeuille aisément, avec leurs indicateurs-clés."
          imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
          imageAlt="Vue liste du portefeuille AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Vue Kanban"
          title="pour observer les tendances générales"
          subtitle="Choisissez la vue Kanban pour analyser les états d'avancement de vos projets. Rien de tel pour optimiser votre stratégie de pilotage."
          imageSrc={`${IMG}/65d7381a68b84adf7cb36003_Portfolio-projects-kanban-status.webp`}
          imageAlt="Vue Kanban du portefeuille AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Vue timeline"
          title="pour anticiper les retards"
          subtitle="Sous forme de diagramme de Gantt, cette vue est idéale pour optimiser votre gestion des ressources, anticiper les retards et repérer les dépendances inter-projets."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Vue timeline du portefeuille AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Optez pour un outil PPM moderne et simple"
          subtitle="Le collaboratif mène vos portefeuilles de projets plus loin, plus rapidement."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="Découvrez comment AirSaas révolutionne votre management de portefeuille."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Automatisez votre flash report"
          title="et gagnez une journée par semaine"
          subtitle="Avec le flash report automatisé d'AirSaas, chaque décisionnaire visualise aisément les décisions à prendre à l'instant T. Alignement garanti."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Votre reporting"
          title="véritable outil d'aide à la décision"
          subtitle="Transmettez les grandes lignes de vos projets (planning, timeline, KPI...), puis rentrez dans le détail des projets urgents. Jalons, risques, météos : tout y est."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash report PPT exporté depuis AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Collaborez"
          title="pour mieux transformer votre entreprise"
          subtitle="La gestion de votre portefeuille de projets nécessite une véritable collaboration entre vous, les métiers et les chefs de projet. Sur AirSaas, tous apportent leur pierre à l'édifice."
          imageSrc={`${IMG}/65d47452aa2dd357ad578e4d_Modal---people-involved.webp`}
          imageAlt="Personnes impliquées dans un projet AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Fiches de cadrage"
          title="co-créées"
          subtitle="Impliquez chaque chef de projet dans le cadrage de vos projets depuis la structure fixe AirSaas. Démarrez chaque projet sur le bon pied."
          imageSrc={`${IMG}/65d35d6a6c51a9712103f44c_Presentation-scope-slide.webp`}
          imageAlt="Fiche de cadrage collaborative AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Bilans de projet"
          title="bien huilés"
          subtitle="Créez l'engagement de chacun en générant des bilans de projets complets : coûts, délais, retours DAKI et engagement des équipes — tout le monde en tire les bonnes conclusions."
          imageSrc={`${IMG}/65d4872337663b8b88c2c66a_Presentation-review-slide.webp`}
          imageAlt="Slide bilan de projet AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez une solution de management de portefeuille efficace"
          subtitle="Une expérience utilisateur vraiment fluide, pour des décisions plus rapides."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="30 minutes pour découvrir comment AirSaas transforme votre gouvernance."
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
