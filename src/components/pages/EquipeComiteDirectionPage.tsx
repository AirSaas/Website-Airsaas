"use client";

import { Hero } from "@/components/library-design/sections/Hero";
import { ValuePropositionFrame } from "@/components/library-design/sections/ValuePropositionFrame";
import { ComparisonTableFrame } from "@/components/library-design/sections/ComparisonTableFrame";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
import { TestimonialsFrame } from "@/components/library-design/sections/TestimonialsFrame";
import { CtaFrame } from "@/components/library-design/sections/CtaFrame";
import { RelatedSolutionsFrame } from "@/components/library-design/sections/RelatedSolutionsFrame";
import { Footer } from "@/components/library-design/sections/Footer";
import { FeatureCard } from "@/components/library-design/ui/FeatureCard";
import { CardCta } from "@/components/library-design/ui/CardCta";
import { IconIllustration } from "@/components/library-design/ui/IconIllustration";
import { AnimateOnScroll } from "@/components/library-design/ui/AnimateOnScroll";
import {
  CalendarDayIcon,
  BullseyeArrowIcon,
  StopwatchIcon,
  BoltLightningIcon,
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";

const IMG = "/assets/pages/equipes/comite-direction";

function Icon({ children }: { children: React.ReactNode }) {
  return <IconIllustration variant="dark" size="md">{children}</IconIllustration>;
}

const pressTestimonials = [
  { quote: "Hub de pilotage […] donnant le bon niveau de visibilité aux métiers, aux Codir et Comex.", name: "Alliancy", role: "Média" },
  { quote: "AirSaas vise à rendre réel l'alignement entre les directions métiers, la DSI et la direction générale.", name: "JDN", role: "Journal du Net" },
  { quote: "Une nouvelle manière d'embarquer les équipes.", name: "Le Point", role: "Presse" },
];

const linkedinTestimonials = [
  { quote: "Super outil qui nous permet de fluidifier le pilotage de notre portefeuille projet. Je recommande !", name: "Thomas Sagnimorte", role: "DSI chez Millet Mountain Group" },
  { quote: "Un beau projet et une vraie dynamique d'équipe transverse DSI et Métiers au service du management du portefeuille de projets. On continue !", name: "Marie-Odile Lhomme", role: "Chief Digital & Information Officer" },
  { quote: "Avec AirSaas nous avons pu ritualiser nos réunions de revue projet en supprimant les PowerPoints. Toute la DSI est alignée.", name: "Clément Royer", role: "DSI - ICT Manager chez Chiesi France" },
];

const relatedSolutions = [
  {
    imageSrc: `${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`,
    imageAlt: "Flash report",
    title: "Flash report projet en un clic",
    description: "Reporting décisionnel automatique aux couleurs de votre entreprise.",
    href: "/fr/produit/reporting-projet",
  },
  {
    imageSrc: `${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`,
    imageAlt: "Roadmap partagée",
    title: "Roadmap projet macro partagée",
    description: "Priorisez les décisions à prendre grâce à des vues filtrées par programme et équipes.",
    href: "/fr/produit/priorisation-par-equipes",
  },
  {
    imageSrc: `${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`,
    imageAlt: "Portfolio décisions",
    title: "Pilotez par la décision",
    description: "Pendant votre comité de pilotage, accès à toutes les décisions à prendre.",
    href: "/fr/produit/automatiser-la-com-projet",
  },
];

export default function EquipeComiteDirectionPage() {
  return (
    <div className="w-full">
      <Hero
        navItems={SITE_NAV_ITEMS}
        navCtaLabel={SITE_NAV_CTA.label}
        navCtaHref={SITE_NAV_CTA.href}
        loginLabel={SITE_NAV_LOGIN.label}
        loginHref={SITE_NAV_LOGIN.href}
        topTag={{ label: "Gouvernance CODIR", variant: "muted" }}
        title="Votre CODIR prend"
        titleHighlight="4× plus vite les bonnes décisions"
        subtitle="AirSaas accompagne les comités de direction dans un pilotage de tous les projets stratégiques et programmes de transformation de l'entreprise."
        primaryCta={{ label: "Réservez une démo", href: "/fr/meetings-pages" }}
        imageSrc={`${IMG}/65ce3b2244fc905908e85593_Portfolio-integrated.webp`}
        imageAlt="Portfolio AirSaas"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <TestimonialsFrame
          title="Ils parlent"
          titleHighlight="de nous"
          testimonials={pressTestimonials}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <TestimonialsFrame
          title="Nos utilisateurs"
          titleHighlight="témoignent"
          testimonials={linkedinTestimonials}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          title="L'outil-clé pour piloter avec flexibilité et clarté"
          subtitle="Sans transparence, il ne peut y avoir d'engagement. Avec AirSaas, entamez un profond changement dans la culture de votre entreprise, et accompagnez mieux vos équipes en collaborant autour de vos projets de manière efficace et transparente."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Les chiffres"
          title="qui vous feront adopter AirSaas"
          columns={4}
        >
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="70%"
            description="Le pourcentage de projets qui échouent à cause du retard pris sur les décisions cruciales."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="1h"
            description="Le temps qu'il vous faudra pour prendre en main votre plateforme de gouvernance."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><CalendarDayIcon /></Icon>}
            title="120j"
            description="Nombre de jours économisés par vos équipes à faire du PowerPoint."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BoltLightningIcon /></Icon>}
            title="4×"
            description="La rapidité à laquelle votre comité de direction prendra des décisions."
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Animez clairement et simplement vos comités de pilotage"
          subtitle="En quelques clics, AirSaas vous donne accès aux décisions et points d'attention de chacun de vos projets lors de vos comités de pilotage. Finie, la perte d'information."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Portfolio décisions"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Une roadmap projet macro partagée"
          subtitle="Votre roadmap collaborative AirSaas vous permet de prioriser les décisions à prendre, grâce à des vues filtrées par programme, objectifs d'entreprise et équipes."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Roadmap macro"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Uniformisez les reportings projets"
          subtitle="Générez en un clic des reportings projets homogènes, qui vous aident à prendre des décisions plus rapidement. Finies les présentations PowerPoint hétérogènes reçues la veille du comité."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash Report"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Obtenez la bonne information, au bon moment"
          subtitle="En 5 minutes par semaine et par projet, les chefs de projets font remonter les informations cruciales : jalons, décisions à prendre, points d'attention."
          imageSrc={`${IMG}/65d5a7778369803dea86381b_Project-page.webp`}
          imageAlt="Fiche projet"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Suivez l'avancée de vos programmes"
          subtitle="Toutes les données de vos projets sont consolidées sur vos pages programmes, pour en suivre l'avancée et les principaux indicateurs, en temps réel."
          imageSrc={`${IMG}/65ce3b2244fc905908e85593_Portfolio-integrated.webp`}
          imageAlt="Portfolio intégré"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ComparisonTableFrame
          titleHighlight="7 raisons"
          title="pour lesquelles les directions générales adorent AirSaas"
          featuresLabel="Quotidien CODIR"
          columns={[
            { label: "Sans AirSaas" },
            { label: "Avec AirSaas", highlight: true },
          ]}
          rows={[
            {
              feature: "Reporting projet / CoPil",
              values: [
                "Reporting à la main, trop hétérogène et chronophage",
                "Reporting décisionnel uniforme, généré automatiquement",
              ],
            },
            {
              feature: "Pilotage",
              values: [
                "Pilotage à la tâche, complexe à suivre",
                "Pilotage agile par les jalons, vue macro parfaite",
              ],
            },
            {
              feature: "Culture projet",
              values: [
                "Culture projet interne hétérogène, voire inexistante",
                "Culture standardisée qui pousse vers l'excellence",
              ],
            },
            {
              feature: "Management",
              values: [
                "Micro-management pour gérer vos collaborateurs",
                "Responsabilisation de chacun grâce à une vision simplifiée",
              ],
            },
            {
              feature: "Intégrations",
              values: [
                "Micro-information dispersée entre différents outils",
                "Synchronisation native avec vos outils",
              ],
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          imagePosition="left"
          title="Vos équipes vont adorer nos intégrations natives"
          subtitle="Avec AirSaas aucune re-saisie d'information. Synchronisez vos outils de gestion de projet et profitez d'une vue macro des informations cruciales dont vous avez besoin."
          imageSrc={`${IMG}/65d48497b08e93531f3ba49b_Graphic-Integrations.webp`}
          imageAlt="Intégrations AirSaas"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <RelatedSolutionsFrame
          tag="Nos solutions"
          titleHighlight="Allez plus loin"
          title="avec les autres fonctionnalités AirSaas"
          columns={3}
          solutions={relatedSolutions}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Rendez vos comités de direction plus efficaces et moins chronophages"
          subtitle="Adoptez dès maintenant une solution efficace de reporting pour vos comités de direction qui fait avancer la transformation de votre entreprise plus vite."
        >
          <CardCta
            title="Réserver une démo"
            description="30 minutes pour voir AirSaas en action sur vos cas d'usage."
            ctaLabel="Réservez une démo"
            ctaHref="/fr/meetings-pages"
            className="flex-1"
          />
          <CardCta
            title="Consulter les témoignages"
            description="Découvrez comment nos clients utilisent AirSaas au quotidien."
            ctaLabel="Voir les témoignages"
            ctaHref="/fr/temoignages"
            className="flex-1"
          />
        </CtaFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={600}>
        <Footer
          columns={SITE_FOOTER_COLUMNS}
          copyright={SITE_FOOTER_COPYRIGHT}
          copyrightIcon={<span aria-label="Français">FR</span>}
        />
      </AnimateOnScroll>
    </div>
  );
}
