import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LogosBar } from "./LogosBar";

const sampleLogos = [
  { src: "/assets/logos/kiabi.svg", alt: "Kiabi", width: 96, height: 40 },
  { src: "/assets/logos/valrhona.svg", alt: "Valrhona", width: 130, height: 40 },
  { src: "/assets/logos/intuis.svg", alt: "Intuis", width: 70, height: 40 },
  { src: "/assets/logos/altavia.svg", alt: "Altavia", width: 110, height: 40 },
  { src: "/assets/logos/sncf.svg", alt: "SNCF", width: 80, height: 40 },
];

const meta = {
  title: "Primitives/LogosBar",
  component: LogosBar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof LogosBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logos: sampleLogos,
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Ils nous font confiance",
    logos: sampleLogos.slice(0, 3),
  },
};
