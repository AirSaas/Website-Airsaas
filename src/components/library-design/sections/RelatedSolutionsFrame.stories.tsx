import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RelatedSolutionsFrame } from "./RelatedSolutionsFrame";

const meta = {
  title: "Sections/Cross-sell Sections/RelatedSolutionsFrame",
  component: RelatedSolutionsFrame,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof RelatedSolutionsFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Bottom of Produit page — 4 cross-sell cards showcasing other AirSaas features.
 */
export const FourSolutionsBottomCrossSell: Story = {
  args: {
    tag: "EXPLORER",
    titleHighlight: "Découvrez",
    title: "toute la plateforme AirSaas",
    subtitle: "Une suite complète pour piloter vos projets, vos équipes et votre portefeuille.",
    columns: 4,
    solutions: [
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Priorisation",
        imageAlt: "Capture d'écran de la priorisation par équipes",
        title: "Priorisation par équipes",
        description: "Laissez chaque équipe prioriser ses projets.",
        href: "/produit/priorisation-par-equipes",
      },
      {
        imageSrc: "https://placehold.co/640x400/f59e0b/fff?text=Reporting",
        imageAlt: "Capture d'écran du reporting projet",
        title: "Reporting projet",
        description: "Des flash reports auto-générés pour vos projets.",
        href: "/produit/reporting-projet",
      },
      {
        imageSrc: "https://placehold.co/640x400/10b981/fff?text=Capacity",
        imageAlt: "Capture d'écran du capacity planning",
        title: "Capacity planning",
        description: "Anticipez la charge de vos équipes projet.",
        href: "/produit/capacity-planning",
      },
      {
        imageSrc: "https://placehold.co/640x400/8b5cf6/fff?text=Budget",
        imageAlt: "Capture d'écran du module budget",
        title: "Budget",
        description: "Suivez vos coûts projet en temps réel.",
        href: "/produit/budget",
      },
    ],
  },
};

/**
 * 3 solutions — minimum allowed. Used when only 3 cross-sells make sense.
 */
export const ThreeSolutions: Story = {
  args: {
    titleHighlight: "Nos autres",
    title: "fonctionnalités",
    columns: 3,
    solutions: [
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+1",
        imageAlt: "Solution 1",
        title: "Solution 1",
        description: "Une première description concise pour ce cross-sell.",
        href: "/solution/1",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+2",
        imageAlt: "Solution 2",
        title: "Solution 2",
        description: "Une seconde description concise.",
        href: "/solution/2",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+3",
        imageAlt: "Solution 3",
        title: "Solution 3",
        description: "Une troisième description concise.",
        href: "/solution/3",
      },
    ],
  },
};

/**
 * 5 solutions — upper bound. Used on Solution type C pages that show 5 sub-solutions at the top.
 */
export const FiveSolutionsTopGrid: Story = {
  args: {
    tag: "VUE D'ENSEMBLE",
    titleHighlight: "Tout sur",
    title: "le pilotage projet",
    subtitle: "Les 5 piliers du pilotage projet avec AirSaas.",
    columns: 5,
    solutions: [
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Pilier+1",
        imageAlt: "Pilier 1",
        title: "Reporting",
        description: "Flash reports + tableaux de bord.",
        href: "/solution/reporting",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Pilier+2",
        imageAlt: "Pilier 2",
        title: "Priorisation",
        description: "Scoring + revue de portefeuille.",
        href: "/solution/priorisation",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Pilier+3",
        imageAlt: "Pilier 3",
        title: "Capacity",
        description: "Charge des équipes + projection.",
        href: "/solution/capacity",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Pilier+4",
        imageAlt: "Pilier 4",
        title: "Budget",
        description: "Suivi financier en temps réel.",
        href: "/solution/budget",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Pilier+5",
        imageAlt: "Pilier 5",
        title: "Collaboration",
        description: "Workflows + communication projet.",
        href: "/solution/collab",
      },
    ],
  },
};

/**
 * Dark variant — for placement inside dark bands of the page.
 */
export const Dark: Story = {
  args: {
    variant: "dark",
    titleHighlight: "Découvrez",
    title: "nos solutions",
    columns: 4,
    solutions: [
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+A",
        imageAlt: "Solution A",
        title: "Solution A",
        description: "Description concise pour la solution A.",
        href: "/solution/a",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+B",
        imageAlt: "Solution B",
        title: "Solution B",
        description: "Description concise pour la solution B.",
        href: "/solution/b",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+C",
        imageAlt: "Solution C",
        title: "Solution C",
        description: "Description concise pour la solution C.",
        href: "/solution/c",
      },
      {
        imageSrc: "https://placehold.co/640x400/3a51e2/fff?text=Solution+D",
        imageAlt: "Solution D",
        title: "Solution D",
        description: "Description concise pour la solution D.",
        href: "/solution/d",
      },
    ],
  },
};
