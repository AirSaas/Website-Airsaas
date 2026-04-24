"use client";

import { Hero } from "@/components/library-design/sections/Hero";
import { ValuePropositionFrame } from "@/components/library-design/sections/ValuePropositionFrame";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
import { ComparisonTableFrame } from "@/components/library-design/sections/ComparisonTableFrame";
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

const IMG = "/assets/pages/solution/gestion-portefeuille-projet";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionGestionPortefeuilleProjetPage() {
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
        topTag={{ label: "Gestion de portefeuille", variant: "muted" }}
        title="L'outil de gestion de portefeuille projet"
        titleHighlight="nouvelle génération"
        subtitle="Un outil PPM simple et orienté valeur, conçu pour les DSI et les directions générales. Accélérez la prise de décision et dites adieu au micro-management."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
        imageAlt="Gestion de portefeuille projet AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Simple, collaboratif, orienté valeur"
          title="AirSaas se différencie"
          subtitle="Conçu pour être utilisé aussi bien par les équipes IT que par les responsables métiers, sans aucune formation."
          columns={3}
        >
          <FeatureCard
            icon={<Icon><AtomIcon /></Icon>}
            title="Simplissime à prendre en main"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Orienté prise de décision"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Connecté à vos outils"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Décidez de manière avisée"
          title="en Copil grâce au tableau de bord"
          subtitle="La performance de votre Copil dépend de votre capacité à prendre les bonnes décisions dans les bons délais. AirSaas vous donne accès à un tableau de bord filtrable."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Tableau de bord en Copil AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Améliorez l'efficacité"
          title="du reporting sur les projets en cours"
          subtitle="Générez une présentation (.ppt, .pdf, url) en un clic, avec l'ensemble des données à jour mises en forme dans des slides aux couleurs de votre entreprise."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Reporting projet automatisé"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Optimisez"
          title="les ressources humaines disponibles"
          subtitle="La timeline donne une vision d'ensemble des projets avec leurs jalons. Envisagez différents scénarios en déplaçant les projets dans le temps."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Timeline multi-projets AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Observez la consommation"
          title="de vos ressources et de votre budget"
          subtitle="AirSaas récupère les temps et budgets consommés grâce à ses connecteurs avec vos outils financiers et de gestion de projets. Informations à jour, consolidées, exportables."
          imageSrc={`${IMG}/65c4fa645ae196734feb2eca_integrations-screen-home.webp`}
          imageAlt="Intégrations natives AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez une solution efficace de gestion de portefeuille projet"
          subtitle="Un PPM moderne, simple et orienté valeur."
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
          titleHighlight="AirSaas vs"
          title="les outils PPM traditionnels"
          featuresLabel="Critère"
          columns={[
            { label: "PPM traditionnel" },
            { label: "AirSaas", highlight: true },
          ]}
          rows={[
            {
              feature: "Prise en main",
              values: [
                "5+ jours de formation",
                "Dès le premier jour",
              ],
            },
            {
              feature: "Interface",
              values: [
                "Complexe, peu lisible",
                "Épurée, orientée UX",
              ],
            },
            {
              feature: "Collaboration métiers × IT",
              values: [
                "Deux outils séparés",
                "Un seul outil partagé",
              ],
            },
            {
              feature: "Reporting Copil",
              values: [
                "Manuel, chronophage",
                "Automatique en un clic",
              ],
            },
            {
              feature: "Intégrations",
              values: [
                "Limitées ou payantes",
                "Natives et gratuites",
              ],
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Une marketplace d'intégrations"
          title="pour connecter tous vos outils"
          subtitle="Jira, Azure DevOps, Asana, Monday, Microsoft Teams, Zendesk : AirSaas fait remonter automatiquement les informations essentielles à un pilotage macro."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Reprenez le contrôle de votre portefeuille de projets"
          subtitle="Un PPM simple et orienté valeur, préféré des DSI et directions générales."
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
