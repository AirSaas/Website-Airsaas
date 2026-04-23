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
  StopwatchIcon,
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";
import { SHARED_PRESS_ITEMS, SHARED_TESTIMONIALS } from "@/data/shared-content";

const IMG = "/assets/pages/solution/outil-ppm";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <IconIllustration variant="dark" size="md">
      {children}
    </IconIllustration>
  );
}

export default function SolutionOutilPpmPage() {
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
        topTag={{ label: "Outil PPM", variant: "muted" }}
        title="Un outil PPM"
        titleHighlight="nouvelle génération"
        subtitle="Souvent complexes et coûteux à implémenter, AirSaas propose un outil PPM moderne, à l'expérience utilisateur simplissime. Finissez-en avec votre Excel à 1200 colonnes."
        primaryCta={{ label: "Réservez une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/65d707b3e6ce3f9970b2d505_Portfolio-project-list-view.webp`}
        imageAlt="Outil PPM AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Enfin l'outil PPM"
          title="que toutes les Directions attendaient"
          subtitle="Quatre piliers qui font la différence au quotidien."
          columns={4}
        >
          <FeatureCard
            icon={<Icon><AtomIcon /></Icon>}
            title="Simplissime"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="Orienté valeur"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="Connecté à vos outils"
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="Décisions avisées en Copil"
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Prenez des décisions avisées"
          title="en Copil"
          subtitle="Pour prendre les bonnes décisions il faut les bonnes informations en entrée, à jour et consolidées. AirSaas vous fournit un tableau de bord filtrable selon les indicateurs essentiels."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Tableau de bord Copil AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Gagnez du temps"
          title="en reporting"
          subtitle="En un clic, une présentation (.ppt, .pdf, url) est générée, contenant les slides projet avec toutes les données à jour. Tenez au courant la direction et les métiers."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Rapport flash automatisé"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Améliorez votre gestion"
          title="des ressources"
          subtitle="La vue timeline vous permet d'avoir une vision d'ensemble des projets en cours et leurs jalons associés. Déplacez les éléments grâce au cliquer-glisser."
          imageSrc={`${IMG}/65d705feadffd7e3d62baec2_Project-page-effort-and-budget-consumed.webp`}
          imageAlt="Gestion des ressources AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Suivez la consommation"
          title="des budgets et des ressources"
          subtitle="AirSaas se connecte à vos outils de développement et financiers pour récupérer les jours-homme et les budgets consommés. Vue consolidée et exportable."
          imageSrc={`${IMG}/65d5a7778369803dea86381b_Project-page.webp`}
          imageAlt="Suivi budget et ressources"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Adoptez une solution efficace de PPM moderne"
          subtitle="Réservez une démo pour découvrir AirSaas."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Réservez une démo"
              description="30 minutes pour voir comment AirSaas simplifie votre PPM."
              ctaLabel="Réservez une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Faites avancer les projets"
          title="sereinement"
          subtitle="Un workflow commun et une vue consolidée permettent de mettre en avant les jeux de contrainte de chacun. AirSaas est collaboratif by design."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Fluidifiez les relations"
          title="entre l'IT et les métiers"
          subtitle="AirSaas apporte un workflow commun et une vue consolidée. Reporting régulier, remontée des problèmes et des succès pour engager les équipes et avancer sereinement."
          imageSrc={`${IMG}/65d706b1f7b6d596a3ed07bc_Project-page-feed.webp`}
          imageAlt="Collaboration IT et métiers"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="Améliorez la phase"
          title="de cadrage"
          subtitle="Cadrage guidé où les utilisateurs sont accompagnés pour remplir les informations essentielles (gains, critères, effort). Validation collaborative en comité."
          imageSrc={`${IMG}/65d473f144eace1121240b18_Modal---create-project.webp`}
          imageAlt="Phase de cadrage AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Augmentez l'engagement"
          title="des équipes"
          subtitle="Envoyez un sondage régulier et anonyme pour sonder le degré de confiance dans le succès du projet. Créez un lien de coopération entre l'IT et les métiers."
          imageSrc={`${IMG}/65d70979f3aaee0cbfd859cc_Feed-search-solution.webp`}
          imageAlt="Engagement des équipes AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Passez à un outil PPM moderne et collaboratif"
          subtitle="Fluidifiez vos prises de décision et boostez votre reporting."
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
