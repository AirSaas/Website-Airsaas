import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Primitives/Text",
  component: Text,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    align: { control: "select", options: ["center", "left"] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children:
      "AirSaaS helps teams deliver projects on time with real-time visibility and smart automation.",
  },
};

export const Small: Story = {
  args: {
    children: "Last updated 3 days ago",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children:
      "The all-in-one platform for project portfolio management and strategic alignment.",
    size: "lg",
  },
};

export const Centered: Story = {
  args: {
    children:
      "Join hundreds of organizations that trust AirSaaS to manage their most critical projects.",
    align: "center",
  },
};

export const WithMaxWidth: Story = {
  args: {
    children:
      "Our platform provides complete visibility across your entire project portfolio, enabling data-driven decisions at every level of your organization.",
    align: "center",
    maxWidth: "847px",
  },
};
