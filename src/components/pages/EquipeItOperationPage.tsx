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
  SuitcaseIcon,
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";

const IMG = "/assets/pages/equipes/it-et-operation";

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
  { quote: "Un beau projet et une vraie dynamique d'équipe transverse DSI et Métiers au service du management du portefeuille de projets.", name: "Marie-Odile Lhomme", role: "Chief Digital & Information Officer" },
  { quote: "Avec AirSaas nous avons pu ritualiser nos réunions de revue projet en supprimant les PowerPoints. Un outil vraiment TOP !", name: "Clément Royer", role: "DSI - ICT Manager chez Chiesi France" },
];

const podcastsRelated = [
  {
    imageSrc: `${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`,
    imageAlt: "Lean Management",
    title: "Lean Management : éloge de la transfo. en profondeur",
    description: "Quarter plan, SAFe, Mode produit, Lean Management — Mélanie Drucy (Peaksys, filiale tech de Cdiscount).",
    href: "/fr/blog-3/cio-revolution",
  },
  {
    imageSrc: `${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`,
    imageAlt: "Quarter plan",
    title: "Le quarter plan pour le DSI de transition",
    description: "Pourquoi la maille du trimestre fait-elle sens dans une DSI ? REX de Florian Simonet.",
    href: "/fr/blog-3/cio-revolution",
  },
  {
    imageSrc: `${IMG}/66865ccd6319bebdceb619e4_Presentation-review-slide.png`,
    imageAlt: "Maître du temps",
    title: "Devenir maître du temps avec le quarter plan",
    description: "Didier Fleury parle des différences entre SAFe et le quarter plan, avec pragmatisme et passion.",
    href: "/fr/blog-3/cio-revolution",
  },
];

export default function EquipeItOperationPage() {
  return (
    <div className="w-full">
      <Hero
        navItems={SITE_NAV_ITEMS}
        navCtaLabel={SITE_NAV_CTA.label}
        navCtaHref={SITE_NAV_CTA.href}
        loginLabel={SITE_NAV_LOGIN.label}
        loginHref={SITE_NAV_LOGIN.href}
        topTag={{ label: "Projets IT × Métier", variant: "muted" }}
        title="La gouvernance projet"
        titleHighlight="IT × Métier"
        subtitle="AirSaas accompagne les DSI dans le pilotage de leur portfolio de projets IT en collaboration avec les métiers. Embarquez toute l'entreprise dans sa transformation et devenez un véritable partenaire business."
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
          title="Et si vous étiez vraiment au centre de la transformation ?"
          subtitle="Notre mission : faire de vous, DSI, le pivot de la transformation en structurant la gouvernance de tous les projets, grâce à une plateforme unique, simple et collaborative. La vôtre : faire passer votre entreprise à l'étape supérieure en gouvernance de projet."
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
            title="2j"
            description="Temps économisé en moyenne par projet et par mois vs reportings manuels."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><SuitcaseIcon /></Icon>}
            title="0€"
            description="Le prix d'un utilisateur non-contributeur d'AirSaas, pour donner la visibilité à tous."
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          title="La plateforme qui fluidifie votre gouvernance projet"
          subtitle="90% des projets ont une composante IT : AirSaas a été pensé pour aligner l'IT, les métiers et la direction générale autour d'une plateforme unique qui simplifie la collaboration."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Centralisez l'information pour mieux piloter"
          subtitle="Grâce à une roadmap collaborative et des vues filtrées, vous visualisez aisément l'avancement des projets et les points d'attention. Plus besoin de vous éparpiller."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Roadmap collaborative"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Collaborez pour impliquer les métiers de A à Z"
          subtitle="Offrez à vos métiers une expérience collaborative de cadrage projet, et permettez-leur de suivre aisément les décisions et points d'attention qui méritent leur engagement."
          imageSrc={`${IMG}/66865ccd6319bebdceb619e4_Presentation-review-slide.png`}
          imageAlt="Review projet"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Uniformisez votre reporting projet"
          subtitle="Générez votre flash report en un clic, sous un format lisible et homogène, et envoyez-le régulièrement aux sponsors métiers. Ils ne pourront plus dire « je ne savais pas ! »."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash Report"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Poussez vos chefs de projet vers l'excellence"
          subtitle="En 5 minutes par semaine par projet, ils font remonter les informations cruciales : jalons, décisions, points d'attention. Évitez-leur les réunions informationnelles."
          imageSrc={`${IMG}/65d5a7778369803dea86381b_Project-page.webp`}
          imageAlt="Fiche projet"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Animez clairement et simplement votre comité de pilotage"
          subtitle="Pendant votre comité de pilotage, visualisez toutes les décisions à prendre et historiques-clés. Vous ne serez plus pris de court et pourrez enfin piloter par la décision."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Portfolio décisions"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ComparisonTableFrame
          titleHighlight="Les DSI"
          title="ne peuvent plus imaginer leur vie sans AirSaas"
          featuresLabel="Quotidien DSI"
          columns={[
            { label: "Sans AirSaas" },
            { label: "Avec AirSaas", highlight: true },
          ]}
          rows={[
            {
              feature: "Cadrage projet",
              values: [
                "Cadrage sur PowerPoint ou Excel, sans collaboration",
                "Cadrage collaboratif et uniformisé, bonnes pratiques transmises",
              ],
            },
            {
              feature: "Reporting",
              values: [
                "Reporting projet / CoPil à la main, temps significatif",
                "Reporting décisionnel en quelques clics, aux couleurs de l'entreprise",
              ],
            },
            {
              feature: "Information",
              values: [
                "Micro-informations dispersées entre différents outils",
                "Focus sur les décisions et points d'attention, gouvernance structurée",
              ],
            },
            {
              feature: "Transparence",
              values: [
                "Chefs de projet peinent à comprendre les décisions",
                "Transparence pour toutes les parties prenantes",
              ],
            },
            {
              feature: "Pilotage",
              values: [
                "Pilotage à la tâche, complexe",
                "Pilotage agile par les jalons de vos projets",
              ],
            },
            {
              feature: "Culture projet",
              values: [
                "Culture projet hétérogène, voire inexistante",
                "Culture standardisée qui pousse chacun vers l'excellence",
              ],
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          imagePosition="right"
          title="La marketplace AirSaas : intégrez nativement vos outils"
          subtitle="Centralisez toutes vos informations cruciales (tickets, jalons…) depuis vos outils de gestion de tâches, et diffusez-les via vos canaux de communication interne."
          imageSrc={`${IMG}/65d48497b08e93531f3ba49b_Graphic-Integrations.webp`}
          imageAlt="Intégrations AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          title="Injectez de la méthodologie dans votre gestion de portefeuille"
          subtitle="AirSaas a été conçu à partir des retours d'expérience de plus de 60 DSI. En ressort une méthodologie simple et claire. Pour vous aider à déployer ces bonnes pratiques, nous avons fait de ces échanges un podcast : CIO Révolution."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <RelatedSolutionsFrame
          tag="Podcast CIO Révolution"
          titleHighlight="Le replay"
          title="à ne pas manquer"
          columns={3}
          solutions={podcastsRelated}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Gagnez en temps et en contrôle sur votre portefeuille projets"
          subtitle="Adoptez dès maintenant une solution moderne de gestion de gouvernance, et devenez un véritable pivot de la transformation de votre entreprise."
        >
          <CardCta
            title="Réserver une démo"
            description="30 minutes pour voir AirSaas en action sur vos cas d'usage."
            ctaLabel="Réservez une démo"
            ctaHref="/fr/meetings-pages"
            className="flex-1"
          />
          <CardCta
            title="Écouter le podcast"
            description="CIO Révolution : les bonnes pratiques de 60 DSI, en épisodes."
            ctaLabel="Écouter"
            ctaHref="/fr/blog-3/cio-revolution"
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
