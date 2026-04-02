import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconIllustration } from "./IconIllustration";
import {
  ChevronCircleIcon,
  CalendarDayIcon,
  BullseyeArrowIcon,
  SuitcaseIcon,
  StopwatchIcon,
} from "@/ds/primitives/icons/illustration-icons";

const meta = {
  title: "Primitives/IconIllustration",
  component: IconIllustration,
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconIllustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMedium: Story = {
  args: {
    variant: "dark",
    size: "md",
    children: <CalendarDayIcon />,
  },
};

export const DarkSmall: Story = {
  args: {
    variant: "dark",
    size: "sm",
    children: <SuitcaseIcon />,
  },
};

export const LightMedium: Story = {
  render: () => (
    <div className="bg-primary-70 p-12 rounded-xl">
      <IconIllustration variant="light" size="md">
        <ChevronCircleIcon color="white" />
      </IconIllustration>
    </div>
  ),
};

export const LightSmall: Story = {
  render: () => (
    <div className="bg-primary-70 p-8 rounded-xl">
      <IconIllustration variant="light" size="sm">
        <ChevronCircleIcon color="white" />
      </IconIllustration>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-12 items-end">
      <div className="flex flex-col items-center gap-3">
        <IconIllustration variant="dark" size="md">
          <CalendarDayIcon />
        </IconIllustration>
        <span className="text-xs text-text-muted">dark / md</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <IconIllustration variant="dark" size="md">
          <BullseyeArrowIcon />
        </IconIllustration>
        <span className="text-xs text-text-muted">dark / md</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <IconIllustration variant="dark" size="md">
          <SuitcaseIcon />
        </IconIllustration>
        <span className="text-xs text-text-muted">dark / md</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <IconIllustration variant="dark" size="md">
          <StopwatchIcon />
        </IconIllustration>
        <span className="text-xs text-text-muted">dark / md</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <IconIllustration variant="dark" size="sm">
          <CalendarDayIcon />
        </IconIllustration>
        <span className="text-xs text-text-muted">dark / sm</span>
      </div>
      <div className="flex flex-col items-center gap-3 bg-primary-70 p-4 rounded-xl">
        <IconIllustration variant="light" size="md">
          <ChevronCircleIcon color="white" />
        </IconIllustration>
        <span className="text-xs text-white">light / md</span>
      </div>
      <div className="flex flex-col items-center gap-3 bg-primary-70 p-4 rounded-xl">
        <IconIllustration variant="light" size="sm">
          <ChevronCircleIcon color="white" />
        </IconIllustration>
        <span className="text-xs text-white">light / sm</span>
      </div>
    </div>
  ),
};
