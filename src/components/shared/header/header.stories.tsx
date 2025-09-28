import { Meta, StoryObj } from "@storybook/nextjs";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
El Header es el componente superior de SeatMap Studio que proporciona navegación,
acciones rápidas y personalización de estilo.

**Características:**
- Logo con texto configurable y acción al hacer clic
- Barra de navegación con enlaces predefinidos (Editor, Templates, Help)
- Botones de acción (New Map, Import, Save)
- Variantes: default, minimal, dark
- Opción de sticky para mantenerse fijo en la parte superior
- Soporte completo para eventos personalizados (click, mouseEnter, mouseLeave, etc.)
- Compatible con contenido adicional mediante children
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logoText: {
      control: "text",
      description: "Texto del logo en el header",
    },
    showNavigation: {
      control: "boolean",
      description: "Muestra u oculta la navegación principal",
    },
    showActions: {
      control: "boolean",
      description: "Muestra u oculta los botones de acción",
    },
    sticky: {
      control: "boolean",
      description: "Mantiene el header fijo en la parte superior",
    },
    variant: {
      control: "select",
      options: ["default", "minimal", "dark"],
      description: "Estilo visual del header",
    },
    onLogoClick: {
      description: "Callback cuando se hace clic en el logo",
      action: "logo clicked",
    },
    onNewMap: {
      description: "Callback cuando se hace clic en 'New Map'",
      action: "new map",
    },
    onSaveMap: {
      description: "Callback cuando se hace clic en 'Save'",
      action: "save map",
    },
    onImportMap: {
      description: "Callback cuando se hace clic en 'Import'",
      action: "import map",
    },
    onExportMap: {
      description: "Callback para exportar mapa (no renderizado por defecto)",
      action: "export map",
    },
    onClick: {
      description: "Callback cuando se hace clic en el header",
      action: "clicked",
    },
    onMouseEnter: {
      description: "Callback cuando el mouse entra al header",
      action: "mouseEnter",
    },
    onMouseLeave: {
      description: "Callback cuando el mouse sale del header",
      action: "mouseLeave",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SeatMapStudio: Story = {
  args: {
    logoText: "SeatMap Studio",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "Header configurado con el logo de SeatMap Studio en estilo default.",
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Default</h3>
        <Header variant="default" logoText="SeatMap Studio" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Minimal</h3>
        <Header variant="minimal" logoText="Studio" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Dark</h3>
        <Header variant="dark" logoText="SeatMap Studio" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tres variantes de estilo disponibles para diferentes temas.",
      },
    },
  },
};

export const WithoutNavigation: Story = {
  args: {
    showNavigation: false,
    logoText: "SeatMap Studio",
  },
  parameters: {
    docs: {
      description: {
        story: "Header sin la barra de navegación, solo con logo y acciones.",
      },
    },
  },
};

export const WithoutActions: Story = {
  args: {
    showActions: false,
    logoText: "SeatMap Studio",
  },
  parameters: {
    docs: {
      description: {
        story: "Header sin botones de acción, solo con logo y navegación.",
      },
    },
  },
};

export const StickyHeader: Story = {
  args: {
    sticky: true,
    logoText: "Sticky Header",
  },
  parameters: {
    docs: {
      description: {
        story: "Header fijo en la parte superior al hacer scroll.",
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <Header logoText="SeatMap Studio">
      <div className="ml-4 flex items-center">
        <span className="text-sm text-gray-500">Custom Content</span>
      </div>
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story: "Header con contenido personalizado agregado mediante children.",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    logoText: "Interactive Header",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Header interactivo donde puedes hacer clic en el logo o botones y ver las acciones en el panel de Storybook.",
      },
    },
  },
};
