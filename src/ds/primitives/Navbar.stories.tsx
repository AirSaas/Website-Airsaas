import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navbar } from "./Navbar";

const meta = {
  title: "Primitives/Navbar",
  component: Navbar,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const frenchItems = [
  { label: "Portfolios", hasDropdown: true },
  { label: "Stratégie", hasDropdown: true },
  { label: "Priorisation", hasDropdown: true },
  { label: "Roadmap", hasDropdown: true },
  { label: "Automatisation", href: "#automatisation" },
];

export const Default: Story = {
  args: {
    items: frenchItems,
    ctaLabel: "Demander une démo",
    ctaHref: "#demo",
  },
};

export const Minimal: Story = {
  args: {
    items: [
      { label: "Product", href: "#product" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Get started",
    ctaHref: "#start",
  },
};

export const WithLogo: Story = {
  args: {
    items: frenchItems,
    logoSrc: "https://placehold.co/55x47/1B2B5E/white?text=AS",
    logoAlt: "AirSaas",
    ctaLabel: "Demander une démo",
    ctaHref: "#demo",
  },
};
