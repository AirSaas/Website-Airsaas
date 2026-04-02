import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeatureCard } from "./FeatureCard";
import { IconIllustration } from "@/ds/primitives/IconIllustration";
import { CalendarDayIcon, BullseyeArrowIcon, SuitcaseIcon, StopwatchIcon } from "@/ds/primitives/icons/illustration-icons";

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return <IconIllustration variant="dark" size="md">{children}</IconIllustration>;
}

const meta = {
  title: "Primitives/FeatureCard",
  component: FeatureCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <FeatureIcon><CalendarDayIcon /></FeatureIcon>,
    title: "4 semaines",
    subtitle: "de déploiement",
    description:
      "Un setup guidé, pas un projet IT de 6 mois. Votre équipe est opérationnelle en un mois.",
  },
};

export const TitleOnly: Story = {
  args: {
    icon: <FeatureIcon><BullseyeArrowIcon /></FeatureIcon>,
    title: "+200",
    subtitle: "entreprises",
  },
};

export const WithoutIcon: Story = {
  args: {
    title: "97%",
    subtitle: "de satisfaction",
    description: "Nos clients recommandent AirSaas à leurs pairs.",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-[1.5625rem] max-w-[91rem]">
      <FeatureCard
        icon={<FeatureIcon><CalendarDayIcon /></FeatureIcon>}
        title="4 semaines"
        subtitle="de déploiement"
        description="Un setup guidé, pas un projet IT de 6 mois."
      />
      <FeatureCard
        icon={<FeatureIcon><BullseyeArrowIcon /></FeatureIcon>}
        title="+200"
        subtitle="entreprises"
        description="Nous accompagnent dans leur transformation."
      />
      <FeatureCard
        icon={<FeatureIcon><StopwatchIcon /></FeatureIcon>}
        title="97%"
        subtitle="de satisfaction"
        description="Nos clients recommandent AirSaas à leurs pairs."
      />
      <FeatureCard
        icon={<FeatureIcon><SuitcaseIcon /></FeatureIcon>}
        title="0"
        subtitle="formation requise"
        description="Interface intuitive, prise en main immédiate."
      />
    </div>
  ),
};
