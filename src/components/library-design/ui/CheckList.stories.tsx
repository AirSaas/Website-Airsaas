import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckList } from "./CheckList";

const meta = {
  title: "UI/CheckList",
  component: CheckList,
  parameters: { layout: "padded" },
} satisfies Meta<typeof CheckList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      "Entretien guidé par l'IA",
      "Brief structuré automatiquement",
      "Comparaison objective des demandes",
      "Intégration native avec vos outils",
    ],
  },
};

export const RichContent: Story = {
  args: {
    items: [
      <>
        Aligner toute une audience sur le sujet dont <strong>nous parlons</strong>.
      </>,
      "Rappeler les ordres de grandeur d'un projet et les équipes à bord.",
      "Donner du contexte temporel grâce aux jalons clés.",
      <>
        Engager la conversation sur l'<em>essentiel</em> : la santé, les
        décisions à prendre ou les points d'attention à partager.
      </>,
    ],
  },
};
