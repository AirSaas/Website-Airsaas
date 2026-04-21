import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TraductionOneClickPage from "./TraductionOneClickPage";

const meta = {
  title: "Pages/Products/TraductionOneClickPage",
  component: TraductionOneClickPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TraductionOneClickPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
