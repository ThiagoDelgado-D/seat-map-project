import { Meta, StoryObj } from "@storybook/nextjs";
import { Canvas } from "./canvas";
import { useSeatMapStore } from "@/store/seat-map-store";
import { useEffect } from "react";

const meta: Meta<typeof Canvas> = {
  title: 'Components/Features/Canvas',
  component: Canvas,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El Canvas es el componente central de edición visual en SeatMap Studio.
Proporciona una interfaz interactiva para crear, seleccionar y editar mapas de asientos.

**Características:**
- Canvas interactivo con Konva.js
- Creación de filas y asientos con clics
- Selección múltiple (Ctrl/Cmd + clic)
- Visualización de estados de selección
- Responsive y optimizado para rendimiento
- Soporte para eventos táctiles
- Integración completa con el store de Zustand

**Interacciones:**
- Clic en área vacía: Crear nueva fila
- Clic en fila: Seleccionar fila
- Clic en asiento: Seleccionar asiento
- Ctrl/Cmd + clic: Selección múltiple
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const CanvasWithData = () => {
  const { createNewMap, addMultipleRows } = useSeatMapStore();

  useEffect(() => {
    createNewMap("Demo Theater");
    
    setTimeout(() => {
      addMultipleRows(100, 100, 3, 8);
    }, 100);
  }, [createNewMap, addMultipleRows]);

  return <Canvas />;
};

const CanvasWithSelectedItems = () => {
  const { createNewMap, addMultipleRows, selectRow, selectSeat } = useSeatMapStore();

  useEffect(() => {
    createNewMap("Theater with Selection");
    
    setTimeout(() => {
      addMultipleRows(100, 100, 4, 6);
      
      setTimeout(() => {
        selectRow("row-1", false);
        selectSeat("seat-3", false);
      }, 200);
    }, 100);
  }, [createNewMap, addMultipleRows, selectRow, selectSeat]);

  return <Canvas />;
};

const EmptyCanvas = () => {
  const { clearMap } = useSeatMapStore();

  useEffect(() => {
    clearMap();
  }, [clearMap]);

  return <Canvas />;
};

const LargeVenueCanvas = () => {
  const { createNewMap, addMultipleRows } = useSeatMapStore();

  useEffect(() => {
    createNewMap("Large Concert Venue");
    
    setTimeout(() => {
      addMultipleRows(50, 50, 8, 12);
      addMultipleRows(50, 250, 6, 10);
      addMultipleRows(50, 400, 4, 8);
    }, 100);
  }, [createNewMap, addMultipleRows]);

  return <Canvas />;
};

export const Default: Story = {
  render: () => <CanvasWithData />,
  parameters: {
    docs: {
      description: {
        story: 'Canvas con datos de ejemplo: teatro básico con 3 filas de 8 asientos cada una.',
      },
    },
  },
};

export const Empty: Story = {
  render: () => <EmptyCanvas />,
  parameters: {
    docs: {
      description: {
        story: 'Canvas vacío listo para comenzar a crear un nuevo mapa desde cero.',
      },
    },
  },
};

export const WithSelection: Story = {
  render: () => <CanvasWithSelectedItems />,
  parameters: {
    docs: {
      description: {
        story: 'Canvas que muestra elementos seleccionados (fila y asiento) con estados visuales diferenciados.',
      },
    },
  },
};

export const LargeVenue: Story = {
  render: () => <LargeVenueCanvas />,
  parameters: {
    docs: {
      description: {
        story: 'Canvas con un diseño de venue más complejo y realista para conciertos o teatros grandes.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => <CanvasWithData />,
  parameters: {
    docs: {
      description: {
        story: 'Canvas interactivo donde puedes probar todas las funcionalidades: crear filas, seleccionar elementos, etc.',
      },
    },
  },
};

export const ResponsiveCanvas: Story = {
  render: () => <CanvasWithData />,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Canvas adaptado para tablets y dispositivos de tamaño medio.',
      },
    },
  },
};

export const MobileCanvas: Story = {
  render: () => <CanvasWithData />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Canvas optimizado para dispositivos móviles con soporte táctil.',
      },
    },
  },
};

export const DifferentMapSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Venue (800x600)</h3>
        <div className="border rounded-lg overflow-hidden" style={{ width: '800px', height: '600px' }}>
          <CanvasWithData />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Venue (1200x800)</h3>
        <div className="border rounded-lg overflow-hidden" style={{ width: '1200px', height: '800px' }}>
          <CanvasWithData />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Venue (1600x1000)</h3>
        <div className="border rounded-lg overflow-hidden" style={{ width: '1600px', height: '1000px' }}>
          <LargeVenueCanvas />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación del canvas en diferentes tamaños de venue.',
      },
    },
  },
};

export const IntegrationExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Theater Layout</h3>
        <p className="text-sm text-gray-600 mb-4">Diseño tradicional de teatro con filas curvas</p>
        <div className="border rounded-lg overflow-hidden h-96">
          <CanvasWithData />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Conference Setup</h3>
        <p className="text-sm text-gray-600 mb-4">Configuración para conferencias con múltiples secciones</p>
        <div className="border rounded-lg overflow-hidden h-96">
          <LargeVenueCanvas />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Classroom Style</h3>
        <p className="text-sm text-gray-600 mb-4">Distribución estilo aula para workshops</p>
        <div className="border rounded-lg overflow-hidden h-96">
          <CanvasWithData />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Diferentes tipos de layouts y configuraciones comunes en SeatMap Studio.',
      },
    },
  },
};

export const PerformanceDemo: Story = {
  render: () => <LargeVenueCanvas />,
  parameters: {
    docs: {
      description: {
        story: 'Canvas con un número considerable de elementos para demostrar el rendimiento y optimización.',
      },
    },
  },
};