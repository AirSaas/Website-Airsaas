import type { Meta, StoryObj } from "@storybook/react";
import { IllustrationFrame } from "./IllustrationFrame";

const meta: Meta<typeof IllustrationFrame> = {
  title: "Primitives/IllustrationFrame",
  component: IllustrationFrame,
};

export default meta;
type Story = StoryObj<typeof IllustrationFrame>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/800x500/e2e8f0/64748b?text=Product+Screenshot",
    alt: "Product screenshot",
    className: "max-w-[600px]",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8">
        <Story />
      </div>
    ),
  ],
};

export const CustomSize: Story = {
  args: {
    src: "https://placehold.co/400x300/e2e8f0/64748b?text=Dashboard",
    alt: "Dashboard view",
    className: "max-w-[400px]",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8">
        <Story />
      </div>
    ),
  ],
};
