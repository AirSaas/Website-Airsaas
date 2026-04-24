import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StepsFrame } from "./StepsFrame";
import { IconIllustration } from "@/components/library-design/ui/IconIllustration";
import {
  GearsIcon,
  ArrowsRotateIcon,
  CirclePlusIcon,
  BanIcon,
} from "@/components/library-design/ui/icons/illustration-icons";

function LgIcon({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  return (
    <IconIllustration variant={variant} size="lg">
      {children}
    </IconIllustration>
  );
}

const meta = {
  title: "Sections/Value Proposition Sections/StepsFrame",
  component: StepsFrame,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof StepsFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * How it works — 4 sequential deployment steps, used on LP "Lancez votre PPM en 4 étapes".
 */
export const FourSteps: Story = {
  args: {
    tag: "DÉPLOIEMENT",
    titleHighlight: "Lancez votre PPM",
    title: "en 4 étapes",
    subtitle:
      "Nos équipes vous accompagnent pour que votre outil PPM soit opérationnel en moins d'un mois.",
    steps: [
      {
        number: 1,
        icon: (
          <LgIcon>
            <CirclePlusIcon />
          </LgIcon>
        ),
        title: "Kick-off",
        description:
          "On cadre votre besoin, vos KPIs, vos parties prenantes.",
      },
      {
        number: 2,
        icon: (
          <LgIcon>
            <ArrowsRotateIcon />
          </LgIcon>
        ),
        title: "Import",
        description:
          "Import de vos projets existants depuis Jira, Excel, CSV.",
      },
      {
        number: 3,
        icon: (
          <LgIcon>
            <GearsIcon />
          </LgIcon>
        ),
        title: "Configuration",
        description:
          "Personnalisation des flashs, workflows, rôles et droits.",
      },
      {
        number: 4,
        icon: (
          <LgIcon>
            <BanIcon />
          </LgIcon>
        ),
        title: "Go live",
        description:
          "Formation de vos utilisateurs + passage en production.",
      },
    ],
  },
};

/**
 * 3 steps — minimum allowed. Used for shorter onboarding flows.
 */
export const ThreeSteps: Story = {
  args: {
    tag: "ONBOARDING",
    titleHighlight: "Trois étapes",
    title: "simples pour démarrer",
    steps: [
      {
        number: 1,
        icon: (
          <LgIcon>
            <CirclePlusIcon />
          </LgIcon>
        ),
        title: "Inscription",
        description: "Créez votre compte en moins d'une minute.",
      },
      {
        number: 2,
        icon: (
          <LgIcon>
            <GearsIcon />
          </LgIcon>
        ),
        title: "Paramétrage",
        description: "Configurez votre premier portefeuille.",
      },
      {
        number: 3,
        icon: (
          <LgIcon>
            <ArrowsRotateIcon />
          </LgIcon>
        ),
        title: "Partage",
        description: "Invitez vos équipes et commencez à piloter.",
      },
    ],
  },
};

/**
 * Dark variant — for sections placed inside dark bands of the page.
 */
export const Dark: Story = {
  args: {
    variant: "dark",
    titleHighlight: "Déployez",
    title: "en 4 étapes rapides",
    subtitle:
      "Un process rodé par notre équipe Customer Success pour que vous soyez opérationnels vite.",
    steps: [
      {
        number: 1,
        icon: (
          <LgIcon variant="light">
            <CirclePlusIcon color="white" />
          </LgIcon>
        ),
        title: "Kick-off",
        description: "On cadre votre besoin et vos KPIs.",
      },
      {
        number: 2,
        icon: (
          <LgIcon variant="light">
            <ArrowsRotateIcon color="white" />
          </LgIcon>
        ),
        title: "Import",
        description: "Import depuis Jira, Excel, CSV.",
      },
      {
        number: 3,
        icon: (
          <LgIcon variant="light">
            <GearsIcon color="white" />
          </LgIcon>
        ),
        title: "Configuration",
        description: "Flashs, workflows, rôles.",
      },
      {
        number: 4,
        icon: (
          <LgIcon variant="light">
            <BanIcon color="white" />
          </LgIcon>
        ),
        title: "Go live",
        description: "Formation + passage en production.",
      },
    ],
  },
};
