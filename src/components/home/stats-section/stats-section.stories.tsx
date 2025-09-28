import { Meta, StoryObj } from '@storybook/nextjs';
import { SEAT_MAP_STATS, STUDIO_STATS } from '@/constants/stats';
import { StatsSection } from './stats-section';

const meta: Meta<typeof StatsSection> = {
  title: 'Components/Home/StatsSection',
  component: StatsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El StatsSection muestra estadísticas importantes de forma visual y atractiva.
Inspirado en la sección de números de seats.io con efectos de gradiente.

**Características:**
- Grid responsive que se adapta a diferentes tamaños
- Efectos de gradiente en los números (rojo a naranja)
- Animaciones de entrada escalonadas
- Variantes: default, minimal, dark
- Datos configurables mediante constantes
- Descripción opcional para cada estadística
- Soporte para contenido personalizado
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
    onMouseEnter: {
      description: 'Callback cuando el mouse entra a la sección',
      action: 'mouse-enter',
    },
    onMouseLeave: {
      description: 'Callback cuando el mouse sale de la sección',
      action: 'mouse-leave',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'dark'],
      description: 'Estilo visual de la sección',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Centrar el contenido',
    },
    showDescription: {
      control: { type: 'boolean' },
      description: 'Mostrar descripciones de las estadísticas',
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
    stats: SEAT_MAP_STATS,
  },
};

export const SeatsIOInspired: Story = {
  args: {
    stats: SEAT_MAP_STATS,
    title: "Seats.io in numbers",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: 'Recreación exacta de la sección de estadísticas de seats.io.',
      },
    },
  },
};

export const SeatMapStudio: Story = {
  args: {
    stats: STUDIO_STATS,
    title: "SeatMap Studio in numbers",
    subtitle: "Trusted by venues worldwide to create exceptional seating experiences.",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión adaptada para SeatMap Studio con estadísticas propias.',
      },
    },
  },
};

export const WithDescriptions: Story = {
  args: {
    stats: STUDIO_STATS,
    title: "Our Impact",
    showDescription: true,
    variant: "minimal",
  },
  parameters: {
    docs: {
      description: {
        story: 'Estadísticas con descripciones detalladas para mayor contexto.',
      },
    },
  },
};

export const DarkVariant: Story = {
  args: {
    stats: SEAT_MAP_STATS,
    title: "Global Reach",
    subtitle: "Numbers that speak for themselves",
    variant: "dark",
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
        story: 'Versión oscura para temas dark de la aplicación.',
      },
    },
  },
};

export const MinimalVersion: Story = {
  args: {
    stats: STUDIO_STATS.slice(0, 3), // Solo 3 estadísticas
    title: "Key Metrics",
    variant: "minimal",
    centered: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión minimalista con menos estadísticas.',
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <StatsSection
      stats={SEAT_MAP_STATS}
      title="Platform Statistics"
      variant="default"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          These numbers represent the trust our clients place in our platform every day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start Creating
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </StatsSection>
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
    stats: SEAT_MAP_STATS,
    title: "Interactive Stats",
  },
  parameters: {
    docs: {
      description: {
        story: 'Sección interactiva donde puedes probar todos los eventos.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-0">
      <StatsSection
        stats={STUDIO_STATS.slice(0, 2)}
        title="Default Variant"
        variant="default"
      />
      
      <StatsSection
        stats={STUDIO_STATS.slice(2, 4)}
        title="Minimal Variant"
        variant="minimal"
      />
      
      <div className="bg-gray-900">
        <StatsSection
          stats={SEAT_MAP_STATS.slice(0, 2)}
          title="Dark Variant"
          variant="dark"
        />
      </div>
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