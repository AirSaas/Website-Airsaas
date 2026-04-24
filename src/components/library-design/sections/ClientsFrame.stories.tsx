import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ClientsFrame } from "./ClientsFrame";
import { SuitcaseIcon, IndustryIcon } from "@/components/library-design/ui/icons/illustration-icons";

const meta = {
  title: "Sections/Social Proof Sections/ClientsFrame",
  component: ClientsFrame,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ClientsFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleClients = Array.from({ length: 9 }).map((_, i) => ({
  avatarSrc: `https://i.pravatar.cc/150?img=${i + 10}`,
  avatarAlt: `Avatar client ${i + 1}`,
  name: `Prénom Nom ${i + 1}`,
  jobTitle: "Directeur de la Transformation",
  companyName: `Groupe Client ${i + 1}`,
  infoRows: [
    { icon: <SuitcaseIcon />, label: "Employés", value: "5k+" },
    { icon: <IndustryIcon />, label: "Secteur", value: "Banque" },
  ],
}));

/**
 * 9 clients in a 3-col grid — the common Équipes page pattern.
 */
export const NineClients: Story = {
  args: {
    tag: "ILS NOUS FONT CONFIANCE",
    titleHighlight: "Les AirSaasiens",
    title: "pilotent leur transformation avec nous",
    subtitle: "Une communauté de DSI, PMO et directions de la transformation qui s'appuient sur AirSaas au quotidien.",
    columns: 3,
    clients: sampleClients,
  },
};

/**
 * 8 clients in a 4-col grid — alternate layout for wider visual impact.
 */
export const EightClientsFourCols: Story = {
  args: {
    titleHighlight: "Ils parlent",
    title: "de nous",
    columns: 4,
    clients: sampleClients.slice(0, 8),
  },
};

/**
 * 6 clients — minimum. Below 6 items, prefer <TestimonialsFrame>.
 */
export const SixClients: Story = {
  args: {
    titleHighlight: "Nos clients",
    title: "témoignent",
    clients: sampleClients.slice(0, 6),
  },
};
