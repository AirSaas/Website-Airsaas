"use client";

import { Hero } from "@/components/library-design/sections/Hero";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
import { SliderFrame } from "@/components/library-design/sections/SliderFrame";
import { TestimonialsFrame } from "@/components/library-design/sections/TestimonialsFrame";
import { CtaFrame } from "@/components/library-design/sections/CtaFrame";
import { Footer } from "@/components/library-design/sections/Footer";
import { CardCta } from "@/components/library-design/ui/CardCta";
import { TestimonialCard } from "@/components/library-design/ui/TestimonialCard";
import { TestimonialCompanyCard } from "@/components/library-design/ui/TestimonialCompanyCard";
import { AnimateOnScroll } from "@/components/library-design/ui/AnimateOnScroll";
import {
  SITE_NAV_ITEMS,
  SITE_NAV_CTA,
  SITE_NAV_LOGIN,
  SITE_FOOTER_COLUMNS,
  SITE_FOOTER_COPYRIGHT,
} from "@/data/site-chrome";
import { SHARED_PRESS_ITEMS } from "@/data/shared-content";

const IMG = "/assets/pages/solution/airsaas-et-les-experts-de-la-transfo";

const EXPERT_TESTIMONIALS = [
  {
    quote:
      "Une belle aventure humaine qui commence, suite à une histoire de hasard et de confiance, et aussi de convictions et de valeurs partagées.",
    name: "Joanne Deval",
    role: "CIO, conseil, board member",
    avatar: `${IMG}/672b7ea76145ce12e1a414fc_Joanne-Deval.jpeg`,
  },
  {
    quote:
      "Travailler avec une équipe aussi engagée est un vrai plaisir, et contribuer avec des solutions claires et impactantes pour nos clients communs fait toute la différence !",
    name: "Roland Bouchut",
    role: "CIO | CEO | ExCom Member",
    avatar: `${IMG}/67a5cd9d94ea875970d1c35e_Roland-Bouchut.jpg`,
  },
  {
    quote:
      "Un beau projet et une vraie dynamique d'équipe transverse DSI et Métiers au service du management du portefeuille de projets. Heureuse de constater la progression et les premiers résultats !",
    name: "Marie-Odile Lhomme",
    role: "Chief Digital & Information Officer",
    avatar: `${IMG}/66154d91a69420f9a97694fe_marie-odile-lhomme.webp`,
  },
  {
    quote:
      "Le PPT a disparu depuis longtemps chez nous pour les rapports CODIR. Avec AirSaas c'est encore un niveau de performance supplémentaire. Bien outillés, on délivre sec.",
    name: "Michaël Sanchez",
    role: "Directeur Projets & Programmes IT, PMP",
    avatar: `${IMG}/672909a238949f7e2f5fb208_Michae-l-Sanchez.jpeg`,
  },
  {
    quote:
      "AirSaas ne construit pas seulement un outil, mais y adjoint une philosophie, une approche et une communauté dynamique Les Pro. de la Transfo. Bref une vraie SOLUTION.",
    name: "Benoît Rosaz",
    role: "CIO / CTO | Manager de transition",
    avatar: `${IMG}/6728f6f1b9e8b28a424f1970_Benoi-t-Rosaz.jpeg`,
  },
  {
    quote:
      "La prise de conscience commence à se faire dans les CODIR. Ce qui leur manque, c'est d'avoir une vision concrète du portefeuille de projets, et c'est là qu'entre en jeu Airsaas.",
    name: "Thibault Baheux",
    role: "Direction de projet & PMO",
    avatar: `${IMG}/66154da4d1602634d196ad78_tihibault-baheux.webp`,
  },
];

const BOOTCAMP_SLIDES = [
  { imageSrc: `${IMG}/65f8389fb184b54765f33b8d_1.webp`, imageAlt: "BootCamp AirSaas" },
  { imageSrc: `${IMG}/65f838874a91bc68afa89603_2.webp`, imageAlt: "BootCamp AirSaas" },
  { imageSrc: `${IMG}/65f838df5204999f80ba57be_3.webp`, imageAlt: "BootCamp AirSaas" },
  { imageSrc: `${IMG}/65f838fb960d05b29ca41c09_4.webp`, imageAlt: "BootCamp AirSaas" },
  { imageSrc: `${IMG}/65f838bf7a199a77d2f764d8_5.webp`, imageAlt: "BootCamp AirSaas" },
  { imageSrc: `${IMG}/65f8386a4e26082bfd28ba13_6.webp`, imageAlt: "BootCamp AirSaas" },
];

const LPDT_SLIDES = [
  { imageSrc: `${IMG}/65f85859a1bf7bf2aba81598_1-min-min.webp`, imageAlt: "Les Pro. de la Transfo." },
  { imageSrc: `${IMG}/65f858894c75e0adf6cb8cdb_2-min-min.webp`, imageAlt: "Les Pro. de la Transfo." },
  { imageSrc: `${IMG}/65f85cca98b4c748841efd5c_3-min-min.webp`, imageAlt: "Les Pro. de la Transfo." },
  { imageSrc: `${IMG}/65f855fbf7413a09dd567fc1_4-min.webp`, imageAlt: "Les Pro. de la Transfo." },
  { imageSrc: `${IMG}/65f8586f009c668ce5972c56_5-min-min.webp`, imageAlt: "Les Pro. de la Transfo." },
  { imageSrc: `${IMG}/65f8585b6653ddac349d27be_6-min-min.webp`, imageAlt: "Les Pro. de la Transfo." },
];

export default function SolutionAirsaasExpertsTransfoPage() {
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
        topTag={{ label: "Experts de la Transfo.", variant: "muted" }}
        title="Surdélivrez vos missions"
        titleHighlight="avec AirSaas"
        subtitle="La solution la plus simple pour partager une vue macro d'un projet transverse, d'un programme ou d'un portefeuille. Alignez vos donneurs d'ordres et dépassez les attentes de vos clients."
        primaryCta={{ label: "Je book une démo", href: SITE_NAV_CTA.href }}
        imageSrc={`${IMG}/668566e02bd789b8eb53e8fd_Register-illustration.webp`}
        imageAlt="AirSaas Experts de la Transfo"
      />

      <AnimateOnScroll animation="fade-up" duration={700}>
        <FeatureFrame
          layout="stacked"
          titleHighlight="Engagez-vous"
          title="pour la transformation"
          subtitle="Expert transfo, ESN, cabinet de conseil, manager de transition, consultant, PMO : outillez votre mission pour démontrer qu'une bonne gouvernance structure le pilotage et fait grandir la culture projet de votre client."
        />
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
          <div className="grid grid-cols-1 gap-[1rem] items-stretch w-full md:grid-cols-2 lg:grid-cols-3">
            {EXPERT_TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                name={t.name}
                role={t.role}
                avatarSrc={t.avatar}
                className="flex-1"
              />
            ))}
          </div>
        </TestimonialsFrame>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="Se former entre experts"
          title="par des pairs"
          subtitle="Dans un format bootcamp hybride de 4 semaines, participez à 6 masterclass et obtenez les postures et tactiques pour faire d'AirSaas un catalyseur de transformation. Bal de Promo à Paris inclus."
          imageSrc={`${IMG}/65f83da75ca3d601a12ea714_Bootcamp-logo-diapo.svg`}
          imageAlt="Bootcamp AirSaas"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <SliderFrame
          titleHighlight="Le BootCamp"
          titleRest="en images"
          subtitle="Retour en images sur les masterclass du BootCamp AirSaas : échanges entre experts, mise en pratique et Bal de Promo."
          slides={BOOTCAMP_SLIDES}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={800}>
        <FeatureFrame
          imagePosition="left"
          titleHighlight="AirSaas"
          title="dans le tooling de vos missions"
          subtitle="Utilisez AirSaas pour vos clients grâce au mode multi-workspace. Structurez la gouvernance, simplifiez le reporting et concentrez-vous sur l'essentiel : la qualité du delivery."
          imageSrc={`${IMG}/65f84d82c72005c3ac0b0ef7_AirSaas-Tools.webp`}
          imageAlt="AirSaas Tools — people + process + tool"
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right" duration={800}>
        <FeatureFrame
          imagePosition="right"
          titleHighlight="You never walk alone"
          title="rejoignez la communauté"
          subtitle="AirSaas est une entreprise étendue. Avec la Communauté des Pro. de la Transfo., partagez un fit culturel, du Co-Business et des events toute l'année. 200+ experts cooptés."
          imageSrc={`${IMG}/65eecd3466cd11301a067e06_logotype-LPDT_white-horizontal.svg`}
          imageAlt="Les Pro. de la Transfo."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={700}>
        <SliderFrame
          titleHighlight="Les Pro. de la Transfo."
          titleRest="une communauté active"
          subtitle="Events, meetups, échanges de pratiques : retour en images sur la communauté des experts de la transformation."
          slides={LPDT_SLIDES}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={800}>
        <CtaFrame
          title="Prêt à surdélivrer vos missions ?"
          subtitle="Découvrez AirSaas et rejoignez la communauté des experts."
        >
          <div style={{ gridColumn: "1 / -1", width: "70%", margin: "0 auto" }}>
            <CardCta
              title="Je book une démo"
              description="30 minutes pour voir comment AirSaas outille vos missions."
              ctaLabel="Je book une démo"
              className="w-full"
            />
          </div>
        </CtaFrame>
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
