import { Meta, StoryObj } from "@storybook/nextjs";
import { SeatMapEditor } from "./seat-map-editor";


const meta: Meta<typeof SeatMapEditor> = {
  title: 'Components/Features/SeatMapEditor',
  component: SeatMapEditor,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El SeatMapEditor es el componente principal que combina Toolbar y Canvas
para proporcionar una experiencia completa de edición de mapas de asientos.

**Características:**
- Editor visual completo con herramientas
- Canvas interactivo para crear y editar asientos
- Gestión de estado global con Zustand
- Importación y exportación de mapas
- Interfaz responsive y profesional

**Componentes incluidos:**
- Toolbar: Controles principales
- Canvas: Área de edición visual
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Editor completo listo para crear y editar mapas de asientos.',
      },
    },
  },
};

export const FullScreenEditor: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
    docs: {
      description: {
        story: 'Editor en pantalla completa para una experiencia inmersiva.',
      },
    },
  },
};

export const ResponsiveEditor: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Editor adaptado para tablets y pantallas medianas.',
      },
    },
  },
};