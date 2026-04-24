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

const IMG = "/assets/pages/solution/tableau-de-bord-gestion-de-projet";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionTableauBordGestionProjetPage() {
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
        title="Le tableau de bord de gestion de projet"
        titleHighlight="moderne"
        subtitle="Une solution PPM qui vous donne accès à un tableau de bord compréhensif et intuitif, pour faciliter le suivi et le reporting projet."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
        imageAlt="Tableau de bord gestion de projet AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Un tableau de bord"
          title="conçu pour les DSI modernes"
          subtitle="Mesurez vos performances pour calibrer les changements à implémenter, augmenter votre productivité et piloter des projets ambitieux."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Pilotage par la valeur"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><AtomIcon /></Icon>}
            title="Vues adaptées aux besoins"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Intégrations natives"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Pilotez par la valeur"
          title="pour prioriser vos projets IT"
          subtitle="Une des clés pour assurer la pérennité est de hiérarchiser les projets afin de prioriser ceux qui créeront le plus de valeur. AirSaas crée les indicateurs qui permettent aux directions de prendre les meilleures décisions."
          imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
          imageAlt="Pilotage par la valeur AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Trois vues"
          title="pour une visibilité totale sur vos projets"
          subtitle="Vue liste pour un suivi avec les indicateurs clés. Vue Kanban pour repérer des tendances. Vue timeline pour anticiper les surcharges et retards. Filtrables selon les indicateurs qui vous importent."
          imageSrc={`${IMG}/65d70552a7607dc102dcc930_Portfolio-header-menu.webp`}
          imageAlt="Vue Kanban AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Optimisez"
          title="la gestion de vos ressources"
          subtitle="Créez différents scénarios, projetez l'exécution de plusieurs projets, observez leur impact sur votre performance. Répartissez votre force de travail de manière optimale grâce à la vue timeline."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Timeline ressources AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Impliquez"
          title="toutes les parties prenantes"
          subtitle="Livrer un projet qui satisfait le client tout en respectant les délais nécessite d'impliquer toutes les parties dès le cadrage. Informez la direction en continu pour lui permettre de piloter au mieux l'entreprise."
          imageSrc={`${IMG}/65d47452aa2dd357ad578e4d_Modal---people-involved.webp`}
          imageAlt="Parties prenantes impliquées"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Le rapport flash"
          title="automatisé en un clic"
          subtitle="Le reporting est chronophage et souvent délaissé. Générez automatiquement des rapports flash, exportables en PDF ou PowerPoint. Deux slides par projet : cadrage + exécution, aux couleurs de votre entreprise."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Rapport flash automatisé"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez une solution efficace de gestion de projet"
          subtitle="Un tableau de bord moderne pour les DSI."
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
        <FeatureFrame
          layout="stacked"
          titleHighlight="Sondez l'indicateur"
          title="d'adhésion anonymement"
          subtitle="Les chances de succès augmentent lorsque les parties prenantes ont confiance. Envoyez un sondage anonyme régulier pour mesurer la confiance, et réagissez à temps pour éviter de livrer un produit trop éloigné des attentes."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Construisez"
          title="des indicateurs pertinents"
          subtitle="Tous les indicateurs doivent être nommés, définis, assortis d'un objectif. Ils prennent en compte passé, présent et futur. Personnalisez-les en fonction de votre entreprise en impliquant les directions métiers."
          imageSrc={`${IMG}/66867e827c10da64f5ea6d52_Graphic-IT.svg`}
          imageAlt="Indicateurs pertinents AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Engagez les métiers"
          title="dans la construction des indicateurs"
          subtitle="Les métiers sont les destinataires des solutions. Les engager dans la construction des indicateurs permet de juger de l'avancée selon les critères qui importent au client final — la meilleure manière de contrôler la satisfaction."
          imageSrc={`${IMG}/65d70552a7607dc102dcc930_Portfolio-header-menu.webp`}
          imageAlt="Engagement métiers AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Pilotez votre gestion de projet avec AirSaas"
          subtitle="Un tableau de bord moderne pour fluidifier vos décisions."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="Découvrez comment AirSaas peut vous aider."
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
