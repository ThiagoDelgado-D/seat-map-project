import { Meta, StoryObj } from "@storybook/nextjs";
import { CTASection } from "./cta-section";

const meta: Meta<typeof CTASection> = {
  title: 'Components/Home/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El CTASection presenta una llamada a la acción final con título, subtítulo, badge de plan de precios y botón de registro.

**Características:**
- Diseño centrado y limpio
- Título y subtítulo destacados
- Badge de plan de precios
- Botón CTA con efecto hover
- Variantes: default, dark, gradient
- Totalmente responsive
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: 'Callback cuando se hace clic en la sección',
      action: 'section-clicked',
    },
    onCtaClick: {
      description: 'Callback del botón call-to-action',
      action: 'cta-clicked',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dark', 'gradient'],
      description: 'Estilo visual de la sección',
    },
    title: {
      control: { type: 'text' },
      description: 'Título principal',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtítulo descriptivo',
    },
    planName: {
      control: { type: 'text' },
      description: 'Nombre del plan de precios (badge)',
    },
    ctaText: {
      control: { type: 'text' },
      description: 'Texto del botón CTA',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Start integrating today.",
    subtitle: "Free testing account with technical support for integration.",
    planName: "Pricing plan 3",
    ctaText: "Sign up",
    variant: "default",
  },
};

export const Dark: Story = {
  args: {
    title: "Start integrating today.",
    subtitle: "Free testing account with technical support for integration.",
    planName: "Pricing plan 3",
    ctaText: "Sign up",
    variant: "dark",
  },
};

export const Gradient: Story = {
  args: {
    title: "Start integrating today.",
    subtitle: "Free testing account with technical support for integration.",
    planName: "Pricing plan 3",
    ctaText: "Sign up",
    variant: "gradient",
  },
};

export const HomePageFinal: Story = {
  args: {
    title: "Start integrating today.",
    subtitle: "Free testing account with technical support for integration.",
    planName: "Pricing plan 3",
    ctaText: "Sign up",
    variant: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión exacta utilizada en la sección final de la página principal.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    title: "Ready to get started?",
    subtitle: "Join thousands of venues worldwide using our platform.",
    planName: "Pro Plan",
    ctaText: "Get started",
    variant: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión personalizada con contenido alternativo.',
      },
    },
  },
};

export const WithoutPlan: Story = {
  args: {
    title: "Start your free trial.",
    subtitle: "No credit card required. Get started in minutes.",
    planName: "", // Sin badge de plan
    ctaText: "Start free trial",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión sin badge de plan de precios.',
      },
    },
  },
};

export const WithCustomButton: Story = {
  args: {
    title: "Custom CTA Section",
    subtitle: "This is a custom CTA section with a different button style.",
    planName: "Enterprise Plan",
    ctaText: "Contact sales",
    variant: "gradient",
  },
  parameters: {
    docs: {
      description: {
        story: 'CTA personalizado con texto de botón alternativo.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-0">
      <CTASection
        title="Default Variant"
        subtitle="Clean white background for light themes."
        planName="Starter Plan"
        ctaText="Get Started"
        variant="default"
      />
      
      <CTASection
        title="Dark Variant"
        subtitle="Perfect for dark themed sections."
        planName="Pro Plan"
        ctaText="Upgrade Now"
        variant="dark"
      />
      
      <CTASection
        title="Gradient Variant"
        subtitle="Eye-catching gradient background."
        planName="Enterprise Plan"
        ctaText="Contact Sales"
        variant="gradient"
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comparación de todas las variantes disponibles en contexto real.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    title: "Interactive CTA Section",
    subtitle: "Click the button to see the interaction.",
    planName: "Interactive Plan",
    ctaText: "Click me!",
    variant: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: 'Sección interactiva para probar los callbacks y efectos hover.',
      },
    },
  },
};