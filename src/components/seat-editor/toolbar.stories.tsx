// components/toolbar/toolbar.stories.tsx
import { Meta, StoryObj } from "@storybook/nextjs";
import { Toolbar } from "./toolbar";
import { useSeatMapStore } from "@/store/seat-map-store";
import { useEffect } from "react";

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Features/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
El Toolbar es la barra de herramientas principal de SeatMap Studio.
Proporciona controles para crear, importar, exportar y gestionar mapas de asientos.

**Características:**
- Creación de nuevos mapas
- Importación y exportación de mapas JSON
- Adición múltiple de filas y asientos
- Eliminación de filas seleccionadas
- Limpieza del mapa actual
- Interfaz intuitiva y responsive

**Estados:**
- Sin mapa: Muestra solo opciones de nuevo mapa e importar
- Con mapa: Muestra opciones de edición, exportación y limpieza
- Con selección: Muestra opción de eliminar filas seleccionadas
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper para el estado sin mapa
const ToolbarWithoutMap = () => {
  const { clearMap } = useSeatMapStore();

  useEffect(() => {
    clearMap();
  }, [clearMap]);

  return <Toolbar />;
};

// Wrapper para el estado con mapa
const ToolbarWithMap = () => {
  const { createNewMap, addMultipleRows } = useSeatMapStore();

  useEffect(() => {
    createNewMap("Demo Theater");
    addMultipleRows(100, 100, 3, 8);
  }, [createNewMap, addMultipleRows]);

  return <Toolbar />;
};

// Wrapper para el estado con filas seleccionadas
const ToolbarWithSelectedRows = () => {
  const { createNewMap, addMultipleRows, selectRow } = useSeatMapStore();

  useEffect(() => {
    createNewMap("Theater with Selection");
    addMultipleRows(100, 100, 4, 6);
    // Seleccionar algunas filas para demostración
    setTimeout(() => {
      selectRow("row-1", false);
      selectRow("row-2", true); // Selección múltiple
    }, 100);
  }, [createNewMap, addMultipleRows, selectRow]);

  return <Toolbar />;
};

// Wrapper para el estado con modal de nuevo mapa abierto
const ToolbarWithNewMapModal = () => {
  const { clearMap } = useSeatMapStore();

  useEffect(() => {
    clearMap();
  }, [clearMap]);

  return <Toolbar />;
};

// Wrapper para mapa grande con muchas opciones
const ToolbarWithLargeMap = () => {
  const { createNewMap, addMultipleRows } = useSeatMapStore();

  useEffect(() => {
    createNewMap("Large Concert Venue");
    addMultipleRows(100, 100, 8, 12);
    addMultipleRows(100, 300, 6, 10);
    addMultipleRows(100, 500, 4, 8);
  }, [createNewMap, addMultipleRows]);

  return <Toolbar />;
};

export const Default: Story = {
  render: () => <ToolbarWithoutMap />,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar en estado inicial, sin mapa cargado. Solo muestra opciones de nuevo mapa e importar.',
      },
    },
  },
};

export const WithMap: Story = {
  render: () => <ToolbarWithMap />,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar con un mapa cargado. Muestra opciones de edición, exportación y limpieza.',
      },
    },
  },
};

export const WithSelectedRows: Story = {
  render: () => <ToolbarWithSelectedRows />,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar con filas seleccionadas. Muestra la opción de eliminar las filas seleccionadas.',
      },
    },
  },
};

export const LargeMap: Story = {
  render: () => <ToolbarWithLargeMap />,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar con un mapa grande y complejo cargado.',
      },
    },
  },
};

export const NewMapModal: Story = {
  render: () => <ToolbarWithNewMapModal />,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar con el modal de nuevo mapa abierto. Haz clic en "Nuevo Mapa" para verlo.',
      },
    },
  },
};

export const ResponsiveToolbar: Story = {
  render: () => <ToolbarWithMap />,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Toolbar adaptado para tablets y pantallas medianas.',
      },
    },
  },
};

export const MobileToolbar: Story = {
  render: () => <ToolbarWithMap />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Toolbar optimizado para dispositivos móviles.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => <ToolbarWithoutMap />,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar interactivo donde puedes probar todas las funcionalidades: crear mapas, importar, exportar, etc.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Sin Mapa</h3>
        <div className="border rounded-lg overflow-hidden">
          <ToolbarWithoutMap />
        </div>
        <p className="text-sm text-gray-600 mt-2">Estado inicial con solo opciones de crear e importar</p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Con Mapa Cargado</h3>
        <div className="border rounded-lg overflow-hidden">
          <ToolbarWithMap />
        </div>
        <p className="text-sm text-gray-600 mt-2">Con opciones de edición, exportación y limpieza</p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Con Filas Seleccionadas</h3>
        <div className="border rounded-lg overflow-hidden">
          <ToolbarWithSelectedRows />
        </div>
        <p className="text-sm text-gray-600 mt-2">Muestra opción de eliminar filas seleccionadas</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todos los estados principales del Toolbar.',
      },
    },
  },
};

export const WorkflowExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Flujo de Trabajo Típico</h3>
        <ol className="list-decimal list-inside space-y-1 text-blue-800 text-sm">
          <li>Crear un nuevo mapa con &#34;Nuevo Mapa&quot;</li>
          <li>Configurar filas y asientos con los controles numéricos</li>
          <li>Agregar filas al canvas con &quot;Agregar Filas&quot;</li>
          <li>Seleccionar elementos para editarlos o eliminarlos</li>
          <li>Exportar el trabajo finalizado con &quot;Exportar JSON&quot;</li>
        </ol>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <ToolbarWithMap />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo de flujo de trabajo completo con el Toolbar.',
      },
    },
  },
};

export const IntegrationWithEditor: Story = {
  render: () => (
    <div className="border rounded-lg overflow-hidden">
      <ToolbarWithMap />
      <div className="h-64 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center border-t">
        <div className="text-center text-gray-500">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-sm">Canvas del editor aparecería aquí</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Toolbar integrado con el área del editor, mostrando cómo se vería en la aplicación completa.',
      },
    },
  },
};