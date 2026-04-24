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

const IMG = "/assets/pages/equipes/direction-de-la-transformation";

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

const dakiFeatures = [
  { title: "DROP", description: "Ce que vous souhaitez arrêter.", icon: <Icon><SuitcaseIcon /></Icon> },
  { title: "ADD", description: "Ce que vous aimeriez essayer.", icon: <Icon><BullseyeArrowIcon /></Icon> },
  { title: "KEEP", description: "Ce qu'il faut garder.", icon: <Icon><CalendarDayIcon /></Icon> },
  { title: "IMPROVE", description: "Ce que vous souhaitez améliorer.", icon: <Icon><StopwatchIcon /></Icon> },
];

const relatedSolutions = [
  {
    imageSrc: `${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`,
    imageAlt: "Flash report",
    title: "Reporting projet en un clic",
    description: "Reporting décisionnel automatique qui accélère la prise de décision.",
    href: "/fr/produit/reporting-projet",
  },
  {
    imageSrc: `${IMG}/65d6fd5da1f291f6011dee8d_Portfolio-share-decision.webp`,
    imageAlt: "Partage décisions",
    title: "Priorisation par équipes",
    description: "Chaque directeur priorise en continu, roadmap collaborative.",
    href: "/fr/produit/priorisation-par-equipes",
  },
  {
    imageSrc: `${IMG}/66865ccd6319bebdceb619e4_Presentation-review-slide.png`,
    imageAlt: "Bilan projet",
    title: "Bilan projet DAKI",
    description: "Métriques et retours d'équipe pour s'améliorer en continu.",
    href: "/fr/produit/automatiser-la-com-projet",
  },
];

export default function EquipeDirectionTransfoPage() {
  return (
    <div className="w-full">
      <Hero
        navItems={SITE_NAV_ITEMS}
        navCtaLabel={SITE_NAV_CTA.label}
        navCtaHref={SITE_NAV_CTA.href}
        loginLabel={SITE_NAV_LOGIN.label}
        loginHref={SITE_NAV_LOGIN.href}
        topTag={{ label: "Direction de la transformation", variant: "muted" }}
        title="Piloter vos grands programmes"
        titleHighlight="de transformation"
        subtitle="Découvrez la solution qui accompagne les directions de la transformation à piloter l'ensemble des projets de l'entreprise en collaboration avec les métiers et l'IT. Positionnez-vous au centre de cette transformation."
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
          title="La direction de la transformation au centre du changement culturel"
          subtitle="La transformation nécessite un profond changement dans la culture de l'entreprise. Sans transparence, il ne peut y avoir d'engagement. AirSaas permet aux équipes de comprendre et collaborer autour des projets de transformation de manière simple et compréhensible par tous."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Pourquoi"
          title="adopter AirSaas"
          columns={4}
        >
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="1h"
            description="Le temps qu'il vous faudra pour prendre en main l'outil."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="100%"
            description="de visibilité sur l'état de santé des projets."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><CalendarDayIcon /></Icon>}
            title="2j"
            description="Temps économisé par projet par mois à faire votre reporting manuel."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><SuitcaseIcon /></Icon>}
            title="Merci !"
            description="C'est ce que vous dira le CoDir après avoir mis en place AirSaas."
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Animez clairement et simplement le comité de pilotage"
          subtitle="Pilotez par la décision : pendant votre comité de pilotage vous aurez accès à toutes les décisions à prendre et historiques clés. Vous ne serez plus pris de court."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Portfolio décisions"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Pilotez les projets de manière macro"
          subtitle="Priorisez en continu et soyez agile grâce à votre roadmap collaborative. Les décisions à prendre s'alignent sur les objectifs d'entreprise."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Roadmap macro"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Uniformisez le reporting projet"
          subtitle="Générez votre flash report en un clic et envoyez-le régulièrement aux sponsors métiers. Ils ne pourront plus dire « je ne savais pas ! »."
          imageSrc={`${IMG}/65d6fd5da1f291f6011dee8d_Portfolio-share-decision.webp`}
          imageAlt="Partage décisions"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Faites gagner 1 jour par semaine à vos chefs de projet"
          subtitle="En 5 minutes par semaine et par projet, ils remontent les informations cruciales : jalon, décision à prendre, point d'attention. Évitez les réunions informationnelles."
          imageSrc={`${IMG}/66865ccd6319bebdceb619e4_Presentation-review-slide.png`}
          imageAlt="Review projet"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Améliorer en continu"
          title="votre manière de faire des projets"
          subtitle="Générez en un clic le bilan d'un projet contenant les métriques (délai, coût, engagement) mais aussi les retours DAKI de l'équipe projet. Parfait pour s'améliorer ensemble."
          columns={4}
        >
          {dakiFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="flex-1"
            />
          ))}
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ComparisonTableFrame
          titleHighlight="Nos clients Directeurs"
          title="ne peuvent plus imaginer leurs vies sans AirSaas"
          featuresLabel="Quotidien directeur transfo."
          columns={[
            { label: "Sans AirSaas" },
            { label: "Avec AirSaas", highlight: true },
          ]}
          rows={[
            {
              feature: "Cadrage projet",
              values: [
                "Projets sur PowerPoint ou Excel",
                "Cadrage projet collaboratif et uniforme",
              ],
            },
            {
              feature: "Reporting",
              values: [
                "Reporting projet / CoPil à la main",
                "Reporting décisionnel automatique",
              ],
            },
            {
              feature: "Information",
              values: [
                "Être noyé par l'information",
                "Se focaliser sur les décisions, les points d'attention",
              ],
            },
            {
              feature: "Pilotage",
              values: [
                "Lutter en interne pour piloter à la tâche",
                "Piloter par les jalons",
              ],
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          imagePosition="right"
          title="AirSaas s'intègre à vos outils"
          subtitle="Synchronisez vos outils de gestion de projets et profitez d'une vue macro sur AirSaas. Connectez votre MS Teams et tenez informés vos collaborateurs."
          imageSrc={`${IMG}/65d48497b08e93531f3ba49b_Graphic-Integrations.webp`}
          imageAlt="Intégrations AirSaas"
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
          title="Choisissez de gagner du temps et du contrôle"
          subtitle="Adoptez dès maintenant une solution efficace de reporting projet."
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
