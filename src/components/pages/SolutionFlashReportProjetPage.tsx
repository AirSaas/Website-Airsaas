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

const IMG = "/assets/pages/solution/flash-report-projet";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionFlashReportProjetPage() {
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
        topTag={{ label: "Flash report projet", variant: "muted" }}
        title="L'outil de flash report projet automatisé"
        titleHighlight="favori des PMO et DSI"
        subtitle="Automatisez vos flash reports projets, gagnez une journée de travail par semaine, et rendez plus fluides vos prises de décision en Copil."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65d742defe0bf46502743b11_Flash-report-export-modal.webp`}
        imageAlt="Flash report export modal AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Simplissime, orienté expérience utilisateur"
          title="pour les Pro. de la Transfo."
          subtitle="Un process bien huilé pour vous focaliser sur l'essentiel : la gouvernance de votre portefeuille de projets."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Consolidation automatique"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="1 jour gagné par semaine"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Aligné avec vos décisionnaires"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Consolidez"
          title="toutes vos données en un seul clic"
          subtitle="Toute votre data est ici, homogénéisée, et automatiquement reportée dans votre flash report projet en un simple clic, au format .ppt ou .pdf."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash report PPT AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Des intégrations natives"
          title="pour éviter le report manuel"
          subtitle="Synchronisez vos outils favoris : Jira, ClickUp, Asana, Monday, Microsoft Teams, Zendesk. Vos tableaux de bord se mettent à jour automatiquement."
          imageSrc={`${IMG}/65c4fa645ae196734feb2eca_integrations-screen-home.webp`}
          imageAlt="Intégrations natives AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Personnalisez"
          title="votre reporting projet"
          subtitle="Customisez les livrables donnés à voir à vos différentes parties prenantes grâce à des fonctionnalités de personnalisation complètes."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Une structure fixe"
          title="hyper-lisible"
          subtitle="La structure automatique de votre flash report simplifie la lecture pour les membres de votre Copil. Grandes lignes de vos projets, puis détail des urgents."
          imageSrc={`${IMG}/65d4872337663b8b88c2c66a_Presentation-review-slide.webp`}
          imageAlt="Structure fixe du flash report"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Personnalisation"
          title="pour coller à vos objectifs stratégiques"
          subtitle="Ajoutez à votre flash report d'autres données : métriques-clés supplémentaires, précisions sur plannings, récapitulatif des décisions à prendre."
          imageSrc={`${IMG}/65d7437ca9f8f8d31e9a639b_Programmes-analytics.webp`}
          imageAlt="Personnalisation du flash report"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez une solution efficace de flash report projet"
          subtitle="Réservez une démo pour découvrir AirSaas."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="30 minutes pour voir comment AirSaas automatise votre reporting."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Fluidifiez la prise de décision"
          title="en Copil"
          subtitle="Faites de votre flash report un véritable outil d'aide à la décision qui aligne toutes vos parties prenantes autour de la transformation."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Une vue macro"
          title="pour simplifier votre planification stratégique"
          subtitle="Visualisez en mode macro l'intégralité de votre portefeuille projet : retards, météos, points d'attention, jalons. Tout est à jour en temps réel."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Vue macro du portefeuille projet"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Des vues personnalisables"
          title="sur votre portefeuille"
          subtitle="Vue liste pour les indicateurs. Vue Kanban pour les tendances. Vue timeline pour la gestion des ressources et les inter-dépendances."
          imageSrc={`${IMG}/65d7381a68b84adf7cb36003_Portfolio-projects-kanban-status.webp`}
          imageAlt="Vues personnalisables AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="L'outil collaboratif"
          title="pour mieux communiquer"
          subtitle="Paramétrez sur votre plateforme les notifications à envoyer à vos équipes opérationnelles. Projet à risque, bilan de période : en quelques clics."
          imageSrc={`${IMG}/65d47452aa2dd357ad578e4d_Modal---people-involved.webp`}
          imageAlt="Personnes impliquées dans un projet"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Choisissez une solution PPM collaborative et moderne"
          subtitle="Qui simplifie votre flash report et accélère vos prises de décisions."
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
