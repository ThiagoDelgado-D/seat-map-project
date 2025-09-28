// src/components/ui/Input/Input.stories.tsx
import { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
El Input es el componente base para la captura de datos en SeatMap Studio.
Usado para etiquetado de asientos, nombres de mapas, y configuración general.

**Características:**
- Múltiples variantes: default, filled, underline
- Tamaños responsivos: sm, md, lg
- Estados: error, disabled, readOnly
- Tipos: text, email, password, number, search
- Eventos completos: onChange, onFocus, onBlur, onKeyDown
- Arquitectura modular y extensible
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: 'Callback cuando el valor cambia',
      action: 'input-changed',
    },
    onFocus: {
      description: 'Callback cuando el input recibe foco',
      action: 'input-focused',
    },
    onBlur: {
      description: 'Callback cuando el input pierde foco',
      action: 'input-blurred',
    },
    onKeyDown: {
      description: 'Callback cuando se presiona una tecla',
      action: 'key-pressed',
    },
    onClick: {
      description: 'Callback cuando se hace clic en el input',
      action: 'input-clicked',
    },
    onMouseEnter: {
      description: 'Callback cuando el mouse entra al input',
      action: 'mouse-enter',
    },
    onMouseLeave: {
      description: 'Callback cuando el mouse sale del input',
      action: 'mouse-leave',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'underline'],
      description: 'Estilo visual del input',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search'],
      description: 'Tipo de input HTML',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Muestra estado de error',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el input',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Input de solo lectura',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter seat label...',
  },
};

export const Primary: Story = {
  args: {
    placeholder: 'Map name',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input primario para captura de datos principal.',
      },
    },
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Row label',
    variant: 'filled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con fondo gris para contraste visual.',
      },
    },
  },
};

export const Underline: Story = {
  args: {
    placeholder: 'Search seats...',
    variant: 'underline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input minimalista con solo línea inferior.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Seat number',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input pequeño para espacios reducidos.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input grande para formularios principales.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid input',
    error: true,
    value: 'Invalid value',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input en estado de error con borde rojo.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input deshabilitado.',
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'Read only value',
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de solo lectura.',
      },
    },
  },
};

export const NumberType: Story = {
  args: {
    placeholder: '42',
    type: 'number',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input numérico para cantidades y números.',
      },
    },
  },
};

export const SearchType: Story = {
  args: {
    placeholder: 'Search...',
    type: 'search',
    variant: 'underline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de búsqueda con funcionalidad especial.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    placeholder: 'Focus me and type...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input interactivo donde puedes probar todos los eventos.',
      },
    },
  },
};

export const SeatMapUseCases: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Map Name</label>
        <Input
          placeholder="Theater Main Hall"
          variant="default"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Row Label</label>
        <Input
          placeholder="A, B, C..."
          variant="filled"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Seat Number</label>
        <Input
          type="number"
          placeholder="1"
          size="sm"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Search Seats</label>
        <Input
          type="search"
          placeholder="Search by label or number..."
          variant="underline"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Casos de uso típicos en SeatMap Studio: nombres de mapas, etiquetas, números y búsqueda.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 p-4">
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Variants</h3>
        <div className="space-y-2">
          <Input variant="default" placeholder="Default variant" />
          <Input variant="filled" placeholder="Filled variant" />
          <Input variant="underline" placeholder="Underline variant" />
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Sizes</h3>
        <div className="space-y-2">
          <Input size="sm" placeholder="Small size" />
          <Input size="md" placeholder="Medium size" />
          <Input size="lg" placeholder="Large size" />
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">States</h3>
        <div className="space-y-2">
          <Input placeholder="Normal state" />
          <Input error placeholder="Error state" />
          <Input disabled placeholder="Disabled state" />
          <Input readOnly value="Read only state" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes de inputs organizadas por categoría.',
      },
    },
  },
};