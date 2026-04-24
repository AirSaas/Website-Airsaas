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

const IMG = "/assets/pages/solution/tableau-de-bord-dsi";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionTableauBordDsiPage() {
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
        topTag={{ label: "Tableau de bord DSI", variant: "muted" }}
        title="Le tableau de bord DSI"
        titleHighlight="nouvelle génération"
        subtitle="Pilotez votre portefeuille de projets par la valeur, accélérez la transformation de votre entreprise et fluidifiez la prise de décision en Copil."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/667c312ec05d161e0bc770b6_Programmes-analytics-en.webp`}
        imageAlt="Tableau de bord DSI AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Pilotage par la valeur"
          title="consolidation et intelligence"
          subtitle="Un tableau de bord DSI nouvelle génération pour piloter vos projets avec la bonne information, au bon moment."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Pilotage par la valeur"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><AtomIcon /></Icon>}
            title="Données consolidées"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Indicateurs d'aide à la décision"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Pilotez votre DSI"
          title="par la valeur apportée"
          subtitle="La clé de la réussite est de prioriser les investissements qui apportent le plus de valeur. Rassemblez la direction autour d'un tableau de bord présentant les données essentielles pour décider efficacement."
          imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
          imageAlt="Tableau de bord DSI vue liste"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Trois vues différentes"
          title="pour la planification de vos projets"
          subtitle="Vue liste pour passer en revue les projets avec tous les indicateurs. Vue Kanban pour observer la répartition des états d'avancement et sentir les tendances. Vue timeline pour la répartition dans le temps."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Vue Kanban AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Embarquez vos équipes"
          title="par une bonne communication"
          subtitle="Un projet réussi est un projet livré dans les temps, au bon prix, avec une adhésion forte du client. Dressez le tableau de l'avancée, des indicateurs clés, et sondez l'adhésion des équipes."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Timeline projets AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Générez un rapport flash"
          title="automatisé en un clic"
          subtitle="Le reporting est essentiel mais chronophage. Générez des rapports flash en un clic, exportables en PDF ou PowerPoint. Deux slides par projet : cadrage + exécution, aux couleurs de votre entreprise."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Rapport flash DSI"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Suivez l'adhésion"
          title="des parties prenantes"
          subtitle="Un outil de sondage anonyme pour mesurer la confiance des parties prenantes dans le succès du projet. Envoyez le sondage en un clic, à intervalle régulier, pour éviter les mauvaises surprises."
          imageSrc={`${IMG}/65d5a7778369803dea86381b_Project-page.webp`}
          imageAlt="Sondage confiance projet"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez un tableau de bord DSI moderne"
          subtitle="Réservez une démo pour découvrir AirSaas."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="30 minutes pour voir comment AirSaas transforme votre tableau de bord DSI."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Devenez un centre de profit"
          title="plutôt qu'un centre de coût"
          subtitle="Historiquement vue comme un centre de coûts, la DSI est aujourd'hui valorisée. AirSaas vous permet de suivre la valeur générée par la DSI pour l'entreprise — gains apportés et contribution aux objectifs annuels."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Des données consolidées"
          title="connectées à vos outils"
          subtitle="AirSaas se connecte à vos outils de gestion de projet et propose une abstraction. La donnée est consolidée autour des projets, des équipes, des solutions, pour suivre les indicateurs indispensables au pilotage."
          imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
          imageAlt="Données consolidées AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Des indicateurs intelligents"
          title="d'aide à la décision"
          subtitle="Objectif : apporter des éléments d'attention aux DSI pour simplifier la prise de décision. Exemple : un projet stratégique bloqué en attente de décision depuis plusieurs semaines est automatiquement mis en avant."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Indicateurs d'aide à la décision"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Simple et collaboratif"
          title="by design"
          subtitle="Impliquer les équipes exige un outil simple, sans formation, permettant de travailler ensemble avec des droits d'accès adaptés. AirSaas est conçu comme point de rencontre entre DSI et directions métiers."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Passez à un tableau de bord DSI orienté valeur"
          subtitle="Fluidifiez vos prises de décision et boostez votre reporting."
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
