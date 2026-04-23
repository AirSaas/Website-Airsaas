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
  BullseyeArrowIcon,
  BoltLightningIcon,
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";
import { SHARED_PRESS_ITEMS, SHARED_TESTIMONIALS } from "@/data/shared-content";

const IMG = "/assets/pages/solution/tableau-de-bord-portefeuille-de-projet";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionTableauBordPortefeuillePage() {
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
        topTag={{ label: "Tableau de bord", variant: "muted" }}
        title="Le tableau de bord"
        titleHighlight="de portefeuille de projet"
        subtitle="Simplifiez votre gouvernance projet avec un tableau de bord consolidé, personnalisable et mis à jour en temps réel, conçu pour les Pro. de la Transfo."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65d70552a7607dc102dcc930_Portfolio-header-menu.webp`}
        imageAlt="Tableau de bord du portefeuille AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Un dashboard consolidé"
          title="pour piloter votre portfolio"
          subtitle="Toutes vos informations-clés rassemblées, à jour en temps réel, avec des vues filtrables selon vos besoins opérationnels."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><AtomIcon /></Icon>}
            title="Vue macro multi-projets"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Filtres personnalisables"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Mise à jour automatique"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Un tableau de bord"
          title="consolidé et simple à lire"
          subtitle="Profitez d'une vue exhaustive multi-projets de tout ce qui compte pour assurer la gouvernance de votre portefeuille, en temps réel."
          imageSrc={`${IMG}/65d70552a7607dc102dcc930_Portfolio-header-menu.webp`}
          imageAlt="Tableau de bord consolidé AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Vue liste"
          title="pour suivre les indicateurs-clés"
          subtitle="Passez en revue les différents projets de votre portefeuille aisément, avec leurs indicateurs-clés d'avancement et de statut."
          imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
          imageAlt="Vue liste du portefeuille"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Vue timeline"
          title="pour anticiper les dépendances"
          subtitle="Sous forme de diagramme de Gantt, optimisez votre gestion des ressources et repérez les dépendances inter-projets."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Vue timeline du portefeuille"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="La météo des projets"
          title="en un coup d'œil"
          subtitle="Filtrez votre tableau de bord selon la météo, les risques ou l'avancement. Identifiez immédiatement les projets qui demandent votre attention."
          imageSrc={`${IMG}/65d73abfdd38dac29b4e219c_Project-page-zoom-weather.webp`}
          imageAlt="Météo des projets AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez le tableau de bord préféré des PMO et DSI"
          subtitle="Une vue macro consolidée, simple et puissante."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="30 minutes pour découvrir le dashboard AirSaas."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Le flash report"
          title="directement depuis votre dashboard"
          subtitle="Générez votre flash report .ppt ou .pdf en un clic depuis votre tableau de bord consolidé. Toutes vos données y sont, automatiquement."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash report généré depuis le dashboard"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Des intégrations natives"
          title="pour nourrir votre dashboard"
          subtitle="Synchronisez vos outils préférés (Jira, ClickUp, Asana, Monday, Teams, Zendesk) pour mettre à jour votre tableau de bord automatiquement."
          imageSrc={`${IMG}/65c4fa645ae196734feb2eca_integrations-screen-home.webp`}
          imageAlt="Intégrations natives AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Les prises de décision"
          title="au cœur de votre tableau de bord"
          subtitle="Visualisez aisément les décisions qui doivent être prises à l'instant T. Décisionnaires, chefs d'équipe, sponsors : tout le monde est aligné."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Simplifiez votre gouvernance projet"
          subtitle="Adoptez un tableau de bord moderne, collaboratif et simplissime."
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
