import { Meta, StoryObj } from "@storybook/nextjs";
import { FeatureSection } from "./features-section";

const meta: Meta<typeof FeatureSection> = {
  title: 'Components/Home/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El FeatureSection presenta características principales con imagen destacada.
Inspirado en la sección "Floor plan designer" de seats.io.

**Características:**
- Fondo con gradiente oscuro personalizable
- Imagen con efecto hover y glow
- Lista de características destacadas
- Botón CTA con animación de flecha
- Variantes: default, dark, gradient
- Posiciones de imagen: left, right, center
- Efectos visuales y transiciones suaves
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
    onImageClick: {
      description: 'Callback cuando se hace clic en la imagen',
      action: 'image-clicked',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dark', 'gradient'],
      description: 'Estilo visual de la sección',
    },
    imagePosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'center'],
      description: 'Posición de la imagen',
    },
    title: {
      control: { type: 'text' },
      description: 'Título pequeño superior',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Título principal grande',
    },
    ctaText: {
      control: { type: 'text' },
      description: 'Texto del botón CTA',
    },
    imageUrl: {
      control: { type: 'text' },
      description: 'URL de la imagen',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SeatsIOInspired: Story = {
  args: {
    title: "Floor plan designer",
    subtitle: "Design beautiful charts.",
    features: [
      { id: "fast", text: "Draw large venues in a few hours." },
      { id: "flexible", text: "Adjust them on the fly." },
      { id: "simple", text: "No coding required." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "dark",
    imagePosition: "center",
    ctaText: "Learn more",
  },
  parameters: {
    docs: {
      description: {
        story: 'Recreación exacta de la sección Floor plan designer de seats.io.',
      },
    },
  },
};

export const SeatMapStudio: Story = {
  args: {
    title: "SeatMap Studio",
    subtitle: "Create stunning venue layouts.",
    features: [
      { id: "intuitive", text: "Intuitive drag-and-drop interface." },
      { id: "powerful", text: "Professional tools for any venue size." },
      { id: "export", text: "Export to multiple formats." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "dark",
    ctaText: "Start Creating",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión adaptada para SeatMap Studio con mensaje personalizado.',
      },
    },
  },
};

export const LeftImage: Story = {
  args: {
    title: "Powerful Editor",
    subtitle: "Build venues your way.",
    features: [
      { id: "templates", text: "Start with professional templates." },
      { id: "customize", text: "Customize every detail to your needs." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "dark",
    imagePosition: "left",
    ctaText: "Explore Features",
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout con imagen a la izquierda y contenido a la derecha.',
      },
    },
  },
};

export const RightImage: Story = {
  args: {
    title: "Advanced Tools",
    subtitle: "Professional results made easy.",
    features: [
      { id: "precision", text: "Pixel-perfect positioning tools." },
      { id: "collaboration", text: "Share and collaborate with your team." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "dark",
    imagePosition: "right",
    ctaText: "Get Started",
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout con contenido a la izquierda e imagen a la derecha.',
      },
    },
  },
};

export const LightVariant: Story = {
  args: {
    title: "Floor plan designer",
    subtitle: "Design beautiful charts.",
    features: [
      { id: "fast", text: "Draw large venues in a few hours." },
      { id: "flexible", text: "Adjust them on the fly." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "default",
    ctaText: "Learn more",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión clara para temas light de la aplicación.',
      },
    },
  },
};

export const GradientVariant: Story = {
  args: {
    title: "Creative Tools",
    subtitle: "Design with style.",
    features: [
      { id: "modern", text: "Modern interface with smooth animations." },
      { id: "responsive", text: "Works perfectly on any device." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "gradient",
    ctaText: "Try Now",
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con gradiente colorido azul-púrpura-índigo.',
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <FeatureSection
      title="Advanced Editor"
      subtitle="Everything you need."
      features={[
        { id: "feature1", text: "Professional-grade tools." },
        { id: "feature2", text: "Real-time collaboration." }
      ]}
      imageUrl="/sit-manager.png"
      variant="dark"
      ctaText={undefined} 
    >
      <div className="pt-6 space-y-4">
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
            Real-time
          </span>
          <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
            Collaborative
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
            Professional
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
            Watch Demo
          </button>
        </div>
      </div>
    </FeatureSection>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sección con contenido personalizado usando children: tags y múltiples botones.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    title: "Interactive Demo",
    subtitle: "Click anywhere to interact.",
    features: [
      { id: "click", text: "Click the image to see it in action." },
      { id: "hover", text: "Hover effects on all elements." }
    ],
    imageUrl: "/sit-manager.png",
    variant: "dark",
    ctaText: "Try Interactive Demo",
  },
  parameters: {
    docs: {
      description: {
        story: 'Sección interactiva donde puedes probar todos los eventos y efectos.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-0">
      <FeatureSection
        title="Light Theme"
        subtitle="Default variant"
        features={[{ id: "feature", text: "Clean and professional appearance." }]}
        imageUrl="/sit-manager.png"
        variant="default"
        ctaText="Explore"
      />
      
      <FeatureSection
        title="Dark Theme"
        subtitle="Dark variant"
        features={[{ id: "feature", text: "Perfect for focused work sessions." }]}
        imageUrl="/sit-manager.png"
        variant="dark"
        ctaText="Learn More"
      />
      
      <FeatureSection
        title="Gradient Theme"
        subtitle="Gradient variant"
        features={[{ id: "feature", text: "Eye-catching and modern design." }]}
        imageUrl="/sit-manager.png"
        variant="gradient"
        ctaText="Get Started"
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comparación de todas las variantes disponibles.',
      },
    },
  },
};