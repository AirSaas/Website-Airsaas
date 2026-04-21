import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag } from "./Tag";

const meta = {
  title: "UI/Tag",
  component: Tag,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "muted",
        "default",
        "success",
        "warning",
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      ],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Muted: Story = {
  args: { children: "Capacity Planning simplifié", variant: "muted" },
};

export const Default: Story = {
  args: { children: "General", variant: "default" },
};

export const Success: Story = {
  args: { children: "Opérationnel en 1 mois", variant: "success" },
};

export const Warning: Story = {
  args: { children: "En attente", variant: "warning" },
};

/** Figma Tag/Custom 1-12 — each has a deterministic text + bg pair from the palette */
export const CustomPalette: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 max-w-[60rem]">
      {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const).map((n) => (
        <Tag key={n} variant={n}>
          Tag {n}
        </Tag>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">Semantic</span>
        <div className="flex flex-wrap gap-3">
          <Tag variant="muted">Capacity Planning simplifié</Tag>
          <Tag variant="default">General</Tag>
          <Tag variant="success">Opérationnel en 1 mois</Tag>
          <Tag variant="warning">En attente</Tag>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">Custom palette (Figma 1-12)</span>
        <div className="flex flex-wrap gap-3 max-w-[60rem]">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const).map((n) => (
            <Tag key={n} variant={n}>
              Tag {n}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  ),
};
