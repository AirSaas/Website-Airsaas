import type { Meta, StoryObj } from "@storybook/react";
import { GradientBackground } from "./GradientBackground";

const meta: Meta<typeof GradientBackground> = {
  title: "Primitives/GradientBackground",
  component: GradientBackground,
  argTypes: {
    variant: {
      control: "select",
      options: ["hero", "cta", "comparison"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GradientBackground>;

export const Hero: Story = {
  args: {
    variant: "hero",
  },
  decorators: [
    (Story) => (
      <div className="relative w-full h-[600px] overflow-hidden bg-white">
        <Story />
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="text-2xl font-semibold text-gray-900">Hero content</p>
        </div>
      </div>
    ),
  ],
};

export const Cta: Story = {
  args: {
    variant: "cta",
  },
  decorators: [
    (Story) => (
      <div className="relative w-full h-[400px] overflow-hidden bg-white rounded-2xl">
        <Story />
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="text-2xl font-semibold text-gray-900">CTA content</p>
        </div>
      </div>
    ),
  ],
};

export const Comparison: Story = {
  args: {
    variant: "comparison",
  },
  decorators: [
    (Story) => (
      <div className="relative w-full h-[400px] overflow-hidden bg-white">
        <Story />
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="text-2xl font-semibold text-gray-900">Comparison section</p>
        </div>
      </div>
    ),
  ],
};
