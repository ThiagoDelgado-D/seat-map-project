import { Meta, StoryObj } from "@storybook/nextjs";
import { WorkflowGuide } from "./workflow-guide";

const meta: Meta<typeof WorkflowGuide> = {
  title: 'Components/Demo/WorkflowGuide',
  component: WorkflowGuide,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Guía interactiva paso a paso para el flujo de trabajo del editor de mapas de asientos.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Compact: Story = {
  args: {
    className: "max-w-md",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión compacta de la guía de workflow.',
      },
    },
  },
};