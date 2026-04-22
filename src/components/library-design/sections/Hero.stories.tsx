import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "./Hero";

const defaultNavItems = [
  { label: "Solutions", hasDropdown: true },
  { label: "Produit", hasDropdown: true },
  { label: "Ressources", hasDropdown: true },
  { label: "Témoignages", href: "#" },
  { label: "Intégrations", href: "#" },
  { label: "Nouveautés", href: "#" },
  { label: "Le Quarter Plan", href: "#" },
  { label: "Intégration teams", href: "#" },
];

const meta = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: defaultNavItems,
    navCtaLabel: "Demander une démo",
    navCtaHref: "#",
    loginLabel: "Login",
    loginHref: "#",
    topTag: {
      label: "Capacity Planning simplifié",
      variant: "muted",
    },
    title: "Vos équipes sont surchargées ? C'est normal :",
    titleHighlight: "personne ne sait ce qu'elles peuvent vraiment faire.",
    subtitle:
      'AirSaas vous donne une vue capacitaire claire et actionnable. Enfin un outil pour dire "non" avec des données, pas au feeling.',
    primaryCta: {
      label: "Réservez une démo",
      href: "#",
    },
    secondaryCta: {
      label: "Découvrir l'outil PPM en vidéo (5 min)",
      href: "#",
    },
    bottomTags: [
      { label: "Opérationnel en 1 mois", variant: "success" },
      { label: "Accompagnement premium inclus", variant: "success" },
    ],
    imageSrc:
      "https://placehold.co/1457x857/e8eafc/3a51e2?text=Product+Screenshot",
    imageAlt: "AirSaas product screenshot",
  },
};

export const Minimal: Story = {
  args: {
    title: "Build better products with",
    titleHighlight: "capacity planning that works.",
    subtitle:
      "Get a clear, actionable view of your team capacity. Finally say no with data, not gut feeling.",
    primaryCta: {
      label: "Get Started",
      href: "#",
    },
  },
};

export const Split: Story = {
  args: {
    variant: "light",
    layout: "split",
    navItems: defaultNavItems,
    navCtaLabel: "Demander une démo",
    navCtaHref: "#",
    loginLabel: "Login",
    loginHref: "#",
    eyebrow: "Solution",
    title: "The project portfolio management tool",
    titleHighlight: "that revolutionizes your governance",
    subtitle:
      "AirSaas a été conçu pour vous aider à transformer votre entreprise de manière efficace, en vous faisant gagner en temps et en visibilité sur votre portfolio. Révolutionnez votre management de portefeuille de projet en gardant une vision précise de vos priorités, des décisions à prendre, et en communiquant mieux au quotidien.",
    primaryCta: {
      label: "Book a demo",
      href: "#",
    },
    imageSrc:
      "https://placehold.co/960x720/e8eafc/3a51e2?text=Product+Screenshot",
    imageAlt: "AirSaas product screenshot",
  },
};

export const SplitDark: Story = {
  args: {
    variant: "dark",
    layout: "split",
    navItems: defaultNavItems,
    navCtaLabel: "Request a demo",
    navCtaHref: "#",
    loginLabel: "Login",
    loginHref: "#",
    eyebrow: "Solution",
    title: "The project portfolio management tool that revolutionizes your governance",
    subtitle:
      "AirSaas a été conçu pour vous aider à transformer votre entreprise de manière efficace, en vous faisant gagner en temps et en visibilité sur votre portfolio. Révolutionnez votre management de portefeuille de projet en gardant une vision précise de vos priorités, des décisions à prendre, et en communiquant mieux au quotidien.",
    primaryCta: {
      label: "Book a demo",
      href: "#",
    },
    imageSrc:
      "https://placehold.co/960x720/e8eafc/3a51e2?text=Product+Screenshot",
    imageAlt: "AirSaas product screenshot",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    navItems: defaultNavItems,
    navCtaLabel: "Demander une démo",
    navCtaHref: "#",
    loginLabel: "Login",
    loginHref: "#",
    topTag: {
      label: "Capacity Planning simplifié",
      variant: "muted",
    },
    title: "Capacity planning:",
    titleHighlight: "can you really carry out these projects?",
    subtitle:
      'AirSaas vous donne une vue capacitaire claire et actionnable. Enfin un outil pour dire "non" avec des données, pas au feeling.',
    primaryCta: {
      label: "Réservez une démo",
      href: "#",
    },
    secondaryCta: {
      label: "Découvrir l'outil PPM en vidéo (5 min)",
      href: "#",
    },
    bottomTags: [
      { label: "Opérationnel en 1 mois", variant: "success" },
      { label: "Accompagnement premium inclus", variant: "success" },
    ],
    imageSrc:
      "https://placehold.co/1457x857/e8eafc/3a51e2?text=Product+Screenshot",
    imageAlt: "AirSaas product screenshot",
  },
};
