"use client";

import { Hero } from "@/components/library-design/sections/Hero";
import { ValuePropositionFrame } from "@/components/library-design/sections/ValuePropositionFrame";
import { ComparisonTableFrame } from "@/components/library-design/sections/ComparisonTableFrame";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
import { TestimonialsFrame } from "@/components/library-design/sections/TestimonialsFrame";
import { CtaFrame } from "@/components/library-design/sections/CtaFrame";
import { RelatedSolutionsFrame } from "@/components/library-design/sections/RelatedSolutionsFrame";
import { ClientsFrame } from "@/components/library-design/sections/ClientsFrame";
import { Footer } from "@/components/library-design/sections/Footer";
import { FeatureCard } from "@/components/library-design/ui/FeatureCard";
import { CardCta } from "@/components/library-design/ui/CardCta";
import { IconIllustration } from "@/components/library-design/ui/IconIllustration";
import { AnimateOnScroll } from "@/components/library-design/ui/AnimateOnScroll";
import {
  CalendarDayIcon,
  BullseyeArrowIcon,
  StopwatchIcon,
  IndustryIcon,
} from "@/components/library-design/ui/icons/illustration-icons";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";

const IMG = "/assets/pages/equipes/outil-pmo";

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
  { quote: "Avec AirSaas nous avons pu ritualiser nos réunions de revue projet en supprimant les PowerPoints. Toute la DSI est alignée. Un outil vraiment TOP !", name: "Clément Royer", role: "DSI - ICT Manager chez Chiesi France" },
];

const clientProfiles = [
  { name: "Laurent Citton", jobTitle: "DSI Groupe", companyName: "Groupe Picoty", sector: "Énergie et combustibles", employees: "1 300" },
  { name: "Émilie Lecart", jobTitle: "CIO Office", companyName: "Groupe Pierre & Vacances", sector: "Hôtellerie & loisirs", employees: "40 000" },
  { name: "Sébastien Louyot", jobTitle: "Group CIO", companyName: "Altavia", sector: "Communication et marketing", employees: "2 800" },
  { name: "David Langlade", jobTitle: "DSI de transition", companyName: "Dynamical", sector: "Conseil", employees: "2" },
  { name: "Clément Royer", jobTitle: "DSI - ICT Manager", companyName: "Chiesi France", sector: "Santé - Pharma", employees: "6 500" },
  { name: "Aurore Butrot", jobTitle: "DSI", companyName: "Groupe Intuis", sector: "Industrie", employees: "1 000" },
  { name: "Stephan Boisson", jobTitle: "Group CDIO", companyName: "Comexposium", sector: "Événementiel", employees: "900" },
  { name: "Sylvain Bourdette", jobTitle: "DSI / CTO", companyName: "Indexia Groupe", sector: "Assurance", employees: "3 000" },
  { name: "Vincent Potel", jobTitle: "DG de transition", companyName: "Caduciel", sector: "Santé – Éditeur de logiciel", employees: "50" },
];

const relatedSolutions = [
  {
    imageSrc: `${IMG}/66334ee7bcfcb0aa45802537_Capacity-screen.webp`,
    imageAlt: "Capacity planning",
    title: "Capacity planning : pouvons-nous faire ces projets ?",
    description: "La vue capacitaire pour savoir ce qu'il est possible de faire, trimestre par trimestre.",
    href: "/fr/produit/capacity-planning",
  },
  {
    imageSrc: `${IMG}/65d35d6a6c51a9712103f44c_Presentation-scope-slide.webp`,
    imageAlt: "Reporting projet",
    title: "Découvrez enfin le plaisir du reporting projet",
    description: "Le reporting essentiel pour créer de l'adhésion et éviter les dérapages.",
    href: "/fr/produit/reporting-projet",
  },
  {
    imageSrc: `${IMG}/66543b6b307a64952dc9c936_Control-tower-email-FR-1.png`,
    imageAlt: "Email bilan de santé",
    title: "Email bilan de santé : automatisez la com projet",
    description: "50% du succès c'est bien communiquer. Le bon niveau d'info, automatiquement.",
    href: "/fr/produit/automatiser-la-com-projet",
  },
];

export default function EquipeOutilPmoPage() {
  return (
    <div className="w-full">
      <Hero
        navItems={SITE_NAV_ITEMS}
        navCtaLabel={SITE_NAV_CTA.label}
        navCtaHref={SITE_NAV_CTA.href}
        loginLabel={SITE_NAV_LOGIN.label}
        loginHref={SITE_NAV_LOGIN.href}
        topTag={{ label: "PMO moderne", variant: "muted" }}
        title="L'outil PPM pour"
        titleHighlight="un PMO moderne"
        subtitle="AirSaas c'est la solution la plus simple pour avoir une vue macro consolidée du portefeuille projet. Plus besoin de faire des PowerPoints et de courir après les chefs de projets. Un PPM qui a enfin une UX au top."
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
        <ValuePropositionFrame
          variant="light"
          titleHighlight="Les chiffres"
          title="qui vous feront adopter AirSaas"
          columns={3}
        >
          <FeatureCard
            icon={<Icon><StopwatchIcon /></Icon>}
            title="80%"
            description="Réduction moyenne du nombre de réunions projets après 4 mois d'utilisation."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><BullseyeArrowIcon /></Icon>}
            title="100%"
            description="Taux de réduction du nombre de projet lancé sans capacité à faire ou sans objectif clair."
            className="flex-1"
          />
          <FeatureCard
            icon={<Icon><CalendarDayIcon /></Icon>}
            title="30K€"
            description="Montant annuel moyen économisé en temps-homme pour faire du PowerPoint projet."
            className="flex-1"
          />
        </ValuePropositionFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          title="Une plateforme de gouvernance projet à la hauteur de vos ambitions"
          subtitle="Devenez le pivot de la transformation de l'entreprise en structurant la gouvernance de tous les projets, grâce à une plateforme simple que le top management va adorer."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Partagez les roadmaps à toute l'organisation"
          subtitle="Une roadmap, ça bouge, ça vit, c'est un élément clé pour aligner le top management en continu. Avec AirSaas, plus besoin de PowerPoints à rallonge : l'information est centralisée et partageable."
          imageSrc={`${IMG}/65ce3c00c0a4886fc8e9f671_Portfolio-project-timeline-view.webp`}
          imageAlt="Roadmap projet AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Un capacity planning par équipe simple et actionnable"
          subtitle="Visualisez en un clin d'œil si vous êtes dans les clous… ou dans les choux. La base d'une discussion pragmatique pour prendre les décisions."
          checklist={[
            "Peut-on faire plus de projets ?",
            "Quels jalons nous plombent ?",
            "Doit-on recruter ou mettre l'équipe en tension ?",
          ]}
          imageSrc={`${IMG}/66334ee7bcfcb0aa45802537_Capacity-screen.webp`}
          imageAlt="Vue capacitaire"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Chaque directeur définit ses prios"
          subtitle="Demandez aux directeurs de prioriser parmi les projets dont son équipe est à l'origine. Deux projets ne peuvent pas avoir la même priorité. Simple, transparent et puissant."
          imageSrc={`${IMG}/663d07a346b12e77e37ddd72_Prioritization-per-team-ppt-d-d.webp`}
          imageAlt="Priorisation par équipe"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Diffusez un cadrage projet standardisé"
          subtitle="Remplissez les fiches cadrage de projet de manière collaborative. Guidez vos collaborateurs vers un véritable niveau d'excellence en gestion de projet."
          imageSrc={`${IMG}/65d35d6a6c51a9712103f44c_Presentation-scope-slide.webp`}
          imageAlt="Cadrage projet"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Une newsletter sponsor que votre direction va adorer"
          subtitle="Tous les lundi matin, vos directeurs reçoivent l'email « Bilan de santé » : tendance des projets vitaux, leurs projets à eux, les projets en retard d'actualisation. En un clic, accès à la fiche projet."
          imageSrc={`${IMG}/66543b6b307a64952dc9c936_Control-tower-email-FR-1.png`}
          imageAlt="Email bilan de santé"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Votre reporting projet en un clic"
          subtitle="Générez votre reporting flash en un clic, homogénéisez vos présentations pour faciliter la prise de décision. Autant de temps gagné pour coacher vos chefs de projet."
          imageSrc={`${IMG}/65d35ce9e34fd87ad7612c9d_Flash-report-ppt.webp`}
          imageAlt="Flash Report AirSaas"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          title="Fluidifiez votre prise de décisions importantes et urgentes"
          subtitle="Centralisez vos décisions sous forme de Kanban, et partagez-les aisément avec toutes les parties prenantes. Finies les informations perdues dans vos mails."
          imageSrc={`${IMG}/65d35c96ec9fbf11d78e4b44_Portfolio-decisions--show-projects-title-.webp`}
          imageAlt="Portfolio décisions"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          title="Impliquez simplement les chefs de projet"
          subtitle="En 5 minutes par semaine par projet, les chefs de projets remontent les informations cruciales pour le suivi : jalon, décision à prendre, point d'attention. Évitez les réunions « informationnelles »."
          imageSrc={`${IMG}/65d5a7778369803dea86381b_Project-page.webp`}
          imageAlt="Fiche projet"
          imageBgColor="var(--color-prevention-10)"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ComparisonTableFrame
          titleHighlight="Nos clients"
          title="ne peuvent plus imaginer leurs vies sans AirSaas"
          featuresLabel="Quotidien PMO"
          columns={[
            { label: "Sans AirSaas" },
            { label: "Avec AirSaas", highlight: true },
          ]}
          rows={[
            {
              feature: "Cadrage projet",
              values: [
                "Projets cadrés sur PowerPoint ou Excel, sans collaboration",
                "Cadrage collaboratif et uniformisé, guidé par des bonnes pratiques",
              ],
            },
            {
              feature: "Reporting",
              values: [
                "Reporting à la main, qui vous prend un temps significatif",
                "Reporting décisionnel automatique aux couleurs de votre entreprise",
              ],
            },
            {
              feature: "Information projet",
              values: [
                "Micro-information dispersée entre vos outils de gestion de tâches",
                "Focus sur les décisions et points d'attention, gouvernance structurée",
              ],
            },
            {
              feature: "Transparence",
              values: [
                "Difficulté à comprendre les décisions prises et à prendre",
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
                "Culture standardisée, qui pousse vers l'excellence",
              ],
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <ClientsFrame
          title="vous parler d'AirSaas"
          titleHighlight="Laissez nos clients"
          subtitle="Qui de mieux pour vous parler de la plateforme que ceux qui l'utilisent au quotidien ?"
          columns={3}
          clients={clientProfiles.map((c) => ({
            avatarSrc: `${IMG}/66154e9586f923137ec7a754_linkedin-embed-logo.png`,
            avatarAlt: c.name,
            name: c.name,
            jobTitle: c.jobTitle,
            companyName: c.companyName,
            infoRows: [
              { icon: <IndustryIcon />, label: "Secteur", value: c.sector },
              { icon: <CalendarDayIcon />, label: "Effectif", value: c.employees },
            ],
          }))}
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
          title="Et si vous repreniez le contrôle de votre portefeuille de projets ?"
          subtitle="Adoptez dès maintenant une solution de gouvernance moderne qui fait gagner vos projets en temps et en efficacité."
        >
          <CardCta
            title="Réserver une démo"
            description="30 minutes pour voir AirSaas en action sur vos cas d'usage."
            ctaLabel="Réservez une démo"
            ctaHref="/fr/meetings-pages"
            className="flex-1"
          />
          <CardCta
            title="Voir le replay"
            description="Intuis × Asana — Gouvernance et exécution des projets."
            ctaLabel="Voir le replay"
            ctaHref="/fr/meetings-pages"
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
