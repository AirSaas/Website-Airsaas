import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TestimonialCard } from "./TestimonialCard";

const meta = {
  title: "Primitives/TestimonialCard",
  component: TestimonialCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote:
      "Depuis qu'on utilise AirSaas, nos comités de pilotage sont enfin productifs. On a une vue claire sur tous nos projets stratégiques.",
    name: "Sophie Lefèvre",
    role: "DSI @Kiabi",
  },
};

export const WithAvatar: Story = {
  args: {
    quote:
      "AirSaas s'adapte à nos processus, pas l'inverse. Mise en place rapide et adoption immédiate par les équipes.",
    name: "Marc Durand",
    role: "DG @Valrhona",
    avatarSrc: "https://placehold.co/28x28/10b981/fff?text=MD",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-[1.5625rem] max-w-[91rem]">
      <TestimonialCard
        quote="Depuis qu'on utilise AirSaas, nos comités de pilotage sont enfin productifs. On a une vue claire sur tous nos projets stratégiques."
        name="Sophie Lefèvre"
        role="DSI @Kiabi"
      />
      <TestimonialCard
        quote="AirSaas s'adapte à nos processus, pas l'inverse. Mise en place rapide et adoption immédiate par les équipes."
        name="Marc Durand"
        role="DG @Valrhona"
      />
      <TestimonialCard
        quote="AirSaas est le rouage qui fait tourner notre gouvernance de projets. Visibilité totale pour le COMEX."
        name="Claire Martin"
        role="PMO @Decathlon"
      />
    </div>
  ),
};
