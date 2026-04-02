import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Heading",
  component: Heading,
  argTypes: {
    level: { control: "select", options: [1, 2, 3] },
    gradient: {
      control: "select",
      options: ["dark-to-primary", "primary", "none"],
    },
    align: { control: "select", options: ["center", "left"] },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1Default: Story = {
  args: {
    level: 1,
    children: "Build better projects",
    gradient: "dark-to-primary",
  },
};

export const H1Gradient: Story = {
  args: {
    level: 1,
    children: "Accelerate delivery",
    gradient: "primary",
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: "Everything you need to succeed",
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: "Real-time dashboards",
  },
};

export const LeftAligned: Story = {
  args: {
    level: 2,
    children: "Trusted by leading teams",
    align: "left",
    gradient: "none",
  },
};
