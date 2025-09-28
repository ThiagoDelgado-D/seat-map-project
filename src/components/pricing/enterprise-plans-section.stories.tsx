import { Meta, StoryObj } from "@storybook/nextjs";
import { EnterprisePlansSection } from "./enterprise-plans-section";
import { ENTERPRISE_PLANS } from "@/constants/pricing";

const meta: Meta<typeof EnterprisePlansSection> = {
  title: 'Components/Pricing/EnterprisePlansSection',
  component: EnterprisePlansSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sección de planes Enterprise para volúmenes más altos con toggle mensual/anual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal de la sección',
    },
    subtitle: {
      control: 'text', 
      description: 'Subtítulo descriptivo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: {
    title: "Custom Enterprise Solutions",
    subtitle: "Tailored plans for enterprise needs with dedicated support",
  },
};

export const CustomPlans: Story = {
  args: {
    plans: ENTERPRISE_PLANS.slice(0, 3), 
  },
};