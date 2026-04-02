import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardCta } from "./CardCta";

const meta = {
  title: "Primitives/CardCta",
  component: CardCta,
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Réserver une démo",
    description:
      'AirSaas vous donne une vue capacitaire claire et actionnable. Enfin un outil pour dire "non" avec des données, pas au feeling.',
    ctaLabel: "Réservez une démo",
    ctaHref: "#",
  },
};

export const AlternateContent: Story = {
  args: {
    title: "Essayer gratuitement",
    description:
      "Découvrez comment AirSaas simplifie votre capacity planning. Déploiement en 4 semaines, sans compétence technique requise.",
    ctaLabel: "Commencer l'essai gratuit",
    ctaHref: "#",
  },
};

export const SplitLayout: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-[0.875rem] max-w-[91.5rem]">
      <CardCta
        title="Réserver une démo"
        description='AirSaas vous donne une vue capacitaire claire et actionnable. Enfin un outil pour dire "non" avec des données, pas au feeling.'
        ctaLabel="Réservez une démo"
      />
      <CardCta
        title="Essayer gratuitement"
        description="Découvrez comment AirSaas simplifie votre capacity planning. Déploiement en 4 semaines."
        ctaLabel="Commencer l'essai"
      />
    </div>
  ),
};
