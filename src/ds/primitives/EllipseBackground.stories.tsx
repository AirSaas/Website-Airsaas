import type { Meta, StoryObj } from "@storybook/react";
import { EllipseBackground } from "./EllipseBackground";

const meta: Meta<typeof EllipseBackground> = {
  title: "Primitives/EllipseBackground",
  component: EllipseBackground,
  decorators: [
    (Story) => (
      <div className="relative w-full h-[600px] overflow-hidden bg-white">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EllipseBackground>;

export const Default: Story = {
  args: {
    className: "left-1/2 -translate-x-1/2 -top-[400px]",
  },
};

export const Small: Story = {
  args: {
    size: 600,
    className: "left-1/2 -translate-x-1/2 -top-[100px]",
  },
};
