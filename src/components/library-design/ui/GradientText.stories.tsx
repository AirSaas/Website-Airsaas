import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GradientText } from "./GradientText";
import { Heading } from "./Heading";
import { Text } from "./Text";

const meta = {
  title: "UI/GradientText",
  component: GradientText,
  parameters: { layout: "centered" },
  args: {
    gradient: "primary",
    children: "portfolio",
  },
  argTypes: {
    gradient: {
      control: "select",
      options: ["primary", "dark-to-primary", "orange", "green"],
    },
  },
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-[60rem] p-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">gradient="primary"</span>
        <Heading level={2} gradient="none">
          La solution de <GradientText gradient="primary">portfolio</GradientText>
        </Heading>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">gradient="dark-to-primary"</span>
        <Heading level={2} gradient="none">
          <GradientText gradient="dark-to-primary">Les chiffres</GradientText> qui vous feront adopter
        </Heading>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">gradient="orange"</span>
        <Heading level={3} gradient="none">
          Un <GradientText gradient="orange">accent chaud</GradientText> sur une partie du titre
        </Heading>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">gradient="green"</span>
        <Heading level={3} gradient="none">
          Des <GradientText gradient="green">résultats positifs</GradientText> mesurables
        </Heading>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-p">Inside a Text (paragraph)</span>
        <Text size="md">
          AirSaaS vous donne <GradientText gradient="primary">une vue capacitaire claire</GradientText> pour piloter vos projets sereinement.
        </Text>
      </div>
    </div>
  ),
};

export const DoNotUseAsBlockHeadline: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-[60rem] p-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-warning">❌ DON'T — using GradientText as a standalone block headline</span>
        <div className="text-[3rem] font-black">
          <GradientText gradient="primary">La solution de portfolio</GradientText>
        </div>
        <span className="text-xs text-text-p">(Produces inline span at block scale — use &lt;Heading gradient="primary"&gt; instead.)</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-success">✅ DO — use Heading with gradient prop</span>
        <Heading level={2} gradient="primary">
          La solution de portfolio
        </Heading>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-success">✅ DO — inline emphasis inside a Heading</span>
        <Heading level={2} gradient="none">
          La solution de <GradientText gradient="primary">portfolio</GradientText>
        </Heading>
      </div>
    </div>
  ),
};
