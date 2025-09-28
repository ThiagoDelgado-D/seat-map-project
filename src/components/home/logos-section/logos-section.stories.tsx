import { Meta, StoryObj } from "@storybook/nextjs";
import { LogosSection } from "./logos-section";
import { TRUSTED_COMPANIES } from "@/constants/logos";


const meta: Meta<typeof LogosSection> = {
  title: 'Components/Home/LogosSection',
  component: LogosSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El LogosSection muestra las empresas que confían en el servicio mediante un carousel animado.
Inspirado en la sección "They trust us" de seats.io.

**Características:**
- Carousel infinito con animación suave
- Múltiples velocidades de animación: slow, normal, fast
- Pausa al hacer hover (configurable)
- Soporte para múltiples filas con direcciones alternadas
- Variantes: default, minimal, dark
- Logos optimizados con lazy loading
- Click handler para redirección a sitios web
- Efectos de hover y escala
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
    onLogoClick: {
      description: 'Callback cuando se hace clic en un logo',
      action: 'logo-clicked',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'dark'],
      description: 'Estilo visual de la sección',
    },
    animationSpeed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
      description: 'Velocidad de la animación del carousel',
    },
    pauseOnHover: {
      control: { type: 'boolean' },
      description: 'Pausa la animación al hacer hover',
    },
    showMultipleRows: {
      control: { type: 'boolean' },
      description: 'Mostrar múltiples filas de logos',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Centrar el contenido',
    },
    title: {
      control: { type: 'text' },
      description: 'Título principal de la sección',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtítulo descriptivo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logos: TRUSTED_COMPANIES.slice(0, 12),
  },
};

export const SeatsIOInspired: Story = {
  args: {
    logos: TRUSTED_COMPANIES,
    title: "They trust us.",
    variant: "default",
    animationSpeed: "normal",
    pauseOnHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Recreación exacta de la sección de logos de seats.io.',
      },
    },
  },
};

export const SeatMapStudio: Story = {
  args: {
    logos: TRUSTED_COMPANIES,
    title: "Trusted by industry leaders",
    subtitle: "Join thousands of venues worldwide using SeatMap Studio",
    variant: "default",
    animationSpeed: "normal",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión adaptada para SeatMap Studio con título personalizado.',
      },
    },
  },
};

export const MultipleRows: Story = {
  args: {
    logos: TRUSTED_COMPANIES,
    title: "Our Partners",
    showMultipleRows: true,
    animationSpeed: "slow",
    variant: "minimal",
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel con múltiples filas, cada una girando en dirección opuesta.',
      },
    },
  },
};

export const FastAnimation: Story = {
  args: {
    logos: TRUSTED_COMPANIES.slice(0, 15),
    title: "Fast Moving Logos",
    animationSpeed: "fast",
    pauseOnHover: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel con animación rápida sin pausa al hacer hover.',
      },
    },
  },
};

export const DarkVariant: Story = {
  args: {
    logos: TRUSTED_COMPANIES,
    title: "Global Trust",
    subtitle: "Companies worldwide choose our platform",
    variant: "dark",
    animationSpeed: "normal",
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1f2937' },
      ],
    },
    docs: {
      description: {
        story: 'Versión oscura con logos invertidos para mejor contraste.',
      },
    },
  },
};

export const MinimalDesign: Story = {
  args: {
    logos: TRUSTED_COMPANIES.slice(0, 10),
    title: "Partners",
    variant: "minimal",
    animationSpeed: "slow",
    centered: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Diseño minimalista con pocos logos y animación lenta.',
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <LogosSection
      logos={TRUSTED_COMPANIES}
      title="Industry Leaders Choose Us"
      variant="default"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          From startups to Fortune 500 companies, our platform scales with your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Join Them
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
    </LogosSection>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sección con contenido personalizado usando children.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    logos: TRUSTED_COMPANIES.slice(0, 8),
    title: "Click on any logo",
    animationSpeed: "normal",
    pauseOnHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel interactivo donde puedes hacer clic en los logos.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-0">
      <LogosSection
        logos={TRUSTED_COMPANIES.slice(0, 8)}
        title="Default Variant"
        variant="default"
        animationSpeed="fast"
      />
      
      <LogosSection
        logos={TRUSTED_COMPANIES.slice(8, 16)}
        title="Minimal Variant"
        variant="minimal"
        animationSpeed="normal"
      />
      
      <div className="bg-gray-900">
        <LogosSection
          logos={TRUSTED_COMPANIES.slice(16, 24)}
          title="Dark Variant"
          variant="dark"
          animationSpeed="slow"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comparación de todas las variantes con diferentes velocidades.',
      },
    },
  },
};

export const RealWorldExample: Story = {
  args: {
    logos: [
      { id: 'flowte', name: 'Flowte', imageUrl: '/logos/flowte.png', alt: 'Flowte logo' },
      { id: 'flicket', name: 'Flicket', imageUrl: '/logos/flicket.png', alt: 'Flicket logo' },
      { id: 'billetto', name: 'Billetto', imageUrl: '/logos/billetto.png', alt: 'Billetto logo' },
      { id: 'fever', name: 'Fever', imageUrl: '/logos/fever.png', alt: 'Fever logo' },
      { id: 'oscars', name: 'The Oscars', imageUrl: '/logos/oscars.png', alt: 'The Oscars logo' },
      { id: 'ticketpark', name: 'TicketPark', imageUrl: '/logos/ticketpark.png', alt: 'TicketPark logo' },
    ],
    title: "They trust us.",
    animationSpeed: "normal",
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con logos reales (requiere imágenes en /public/logos/).',
      },
    },
  },
};