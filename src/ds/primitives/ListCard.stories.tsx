import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListCard } from "./ListCard";

const meta = {
  title: "Primitives/ListCard",
  component: ListCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
    children: (
      <>
        Les outils existants sont <strong>trop complexes</strong> → personne ne les maintient
      </>
    ),
  },
};

export const SecondItem: Story = {
  args: {
    value: 2,
    children: (
      <>
        Les <strong>ressources partagées</strong> créent des conflits entre équipes
      </>
    ),
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-[0.875rem] max-w-[91.5rem]">
      <ListCard value={1}>
        Les outils existants sont <strong>trop complexes</strong> → personne ne les maintient
      </ListCard>
      <ListCard value={2}>
        Les <strong>ressources partagées</strong> créent des conflits entre équipes
      </ListCard>
      <ListCard value={3}>
        Les décisions se prennent <strong>au feeling</strong>, pas sur des données fiables
      </ListCard>
      <ListCard value={4}>
        <strong>Aucune visibilité</strong> sur la capacité réelle des équipes
      </ListCard>
      <ListCard value={5}>
        Les <strong>projets en retard</strong> s&apos;accumulent sans que personne ne sache pourquoi
      </ListCard>
      <ListCard value={6}>
        Le <strong>PMO passe son temps</strong> à collecter des données au lieu de piloter
      </ListCard>
    </div>
  ),
};
