import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListInline } from "./ListInline";

const meta = {
  title: "Primitives/ListInline",
  component: ListInline,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Entretien guidé par l'IA",
  },
};

export const MultipleItems: Story = {
  render: () => (
    <div className="flex flex-col gap-[0.625rem] max-w-[33rem]">
      <ListInline>Entretien guidé par l&apos;IA</ListInline>
      <ListInline>Brief structuré automatiquement</ListInline>
      <ListInline>Comparaison objective des demandes</ListInline>
      <ListInline>Intégration native avec vos outils</ListInline>
    </div>
  ),
};
