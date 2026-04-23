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
  BoltLightningIcon,
  StopwatchIcon,
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

const IMG = "/assets/pages/solution/flash-report";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionFlashReportPage() {
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
        topTag={{ label: "Flash report", variant: "muted" }}
        title="Le flash report automatisé"
        titleHighlight="préféré des DSI et PMO"
        subtitle="Parce que vous avez plus à apporter à la transformation de votre entreprise que des PowerPoints chronophages, AirSaas automatise vos reportings projets et fluidifie la prise de décision en Copil."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
        imageAlt="Flash report PPT automatisé AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Une solution de reporting"
          title="à votre image"
          subtitle="Efficace et moderne : toutes vos données consolidées, au format PPT ou PDF, aux couleurs de votre entreprise."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Données consolidées en un clic"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="1 journée gagnée par semaine"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Prise de décision facilitée"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Toutes vos données"
          title="consolidées en un seul clic"
          subtitle="Dites adieu aux heures passées sur PowerPoint. Votre data est ici, homogénéisée, et reportée automatiquement dans votre flash report — le tout en un seul clic."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Consolidation des données AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Des rapports"
          title="qui facilitent la prise de décision"
          subtitle="Jalons, statuts, risques et météos des projets, métriques d'avancée, gains attendus, ressources humaines et budgets impliqués : tout ce dont votre Copil a besoin."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash report PPT AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Une structure fixe"
          title="mais personnalisable"
          subtitle="AirSaas crée automatiquement votre flash report au format .ppt ou .pdf, selon une structure ultra-lisible, aux couleurs de votre entreprise."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez une solution efficace de flash report projet"
          subtitle="Automatisez votre reporting en quelques clics."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="Découvrez le flash report automatisé d'AirSaas en 30 minutes."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Plus qu'une solution de reporting"
          title="une gouvernance projet complète"
          subtitle="Outre le flash report automatisé, d'autres fonctionnalités AirSaas vous font changer votre manière de gouverner votre portefeuille projet."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Roadmap collaborative"
          title="de vos projets"
          subtitle="Créez des vues filtrées pour visualiser les éléments-clés : points d'attention, retards, météos. Assurez un pilotage macro, focalisé sur ce qui requiert votre attention immédiate."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Roadmap collaborative AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Vision Kanban"
          title="qui simplifie votre gouvernance"
          subtitle="Centralisez toutes les décisions prises et à prendre sur vos projets, sous un format aisément lisible par toutes vos parties prenantes."
          imageSrc={`${IMG}/65d72da0c3898a0380300909_Portfolio-project-filter-open.webp`}
          imageAlt="Vision Kanban AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Fiches de cadrage"
          title="de projet collaboratives"
          subtitle="Remplissez vos fiches de cadrage de manière collaborative, et développez une culture projet homogène dans toute l'entreprise."
          imageSrc={`${IMG}/65d35d6a6c51a9712103f44c_Presentation-scope-slide.webp`}
          imageAlt="Fiches de cadrage collaboratives"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Intégrations natives"
          title="pour faciliter la remontée d'informations"
          subtitle="Toutes les informations cruciales provenant des outils de gestion de tâches (Jira, Asana…) sont centralisées sur AirSaas, pour éviter la déperdition d'informations."
          imageSrc={`${IMG}/65c4fa645ae196734feb2eca_integrations-screen-home.webp`}
          imageAlt="Intégrations natives AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Faites passer votre gouvernance projet à la vitesse supérieure"
          subtitle="Choisissez une solution PPM collaborative et moderne."
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
