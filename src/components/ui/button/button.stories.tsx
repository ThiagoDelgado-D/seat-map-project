import { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
El Button es un componente reutilizable que proporciona diferentes estilos y tamaños
para botones en la aplicación.

**Características:**
- Múltiples variantes de estilo (raised, outline, clear)
- Diferentes colores (primary, secondary, success, danger, warning, orange, none)
- Varios tamaños (sm, md, lg, icon)
- Estados de carga y deshabilitado
- Soporte para ancho completo
- Navegación consistente con el resto de la aplicación
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: 'Callback cuando se hace clic en el botón',
      action: 'clicked',
    },
    onMouseEnter: {
      description: 'Callback cuando el mouse entra al botón',
      action: 'mouseEnter',
    },
    onMouseLeave: {
      description: 'Callback cuando el mouse sale del botón',
      action: 'mouseLeave',
    },
    flavor: {
      control: { type: 'select' },
      options: ['raised', 'outline', 'clear'],
      description: 'Estilo visual del botón',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'orange', 'none'],
      description: 'Color del botón',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Tamaño del botón',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado del botón',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Estado de carga del botón',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ancho completo del botón',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo de botón HTML',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón primario con estilo raised y color azul.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    flavor: 'raised',
    color: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón secundario con estilo raised y color gris.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    flavor: 'outline',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con estilo outline y borde.',
      },
    },
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear Button',
    flavor: 'clear',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con estilo clear sin fondo ni borde.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    flavor: 'raised',
    color: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de éxito con color verde.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    flavor: 'raised',
    color: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de peligro con color rojo.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    flavor: 'raised',
    color: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de advertencia con color amarillo.',
      },
    },
  },
};

export const Orange: Story = {
  args: {
    children: 'Orange Button',
    flavor: 'raised',
    color: 'orange',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con color naranja.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón pequeño.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón grande.',
      },
    },
  },
};

export const Icon: Story = {
  args: {
    children: '🚀',
    size: 'icon',
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de icono cuadrado.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón en estado de carga con spinner.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón deshabilitado.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    flavor: 'raised',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de ancho completo.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón interactivo donde puedes hacer clic y ver las acciones de mouse.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Raised</h3>
        <div className="space-y-2">
          <Button flavor="raised" color="primary">Primary</Button>
          <Button flavor="raised" color="secondary">Secondary</Button>
          <Button flavor="raised" color="success">Success</Button>
          <Button flavor="raised" color="danger">Danger</Button>
          <Button flavor="raised" color="warning">Warning</Button>
          <Button flavor="raised" color="orange">Orange</Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Outline</h3>
        <div className="space-y-2">
          <Button flavor="outline" color="primary">Primary</Button>
          <Button flavor="outline" color="secondary">Secondary</Button>
          <Button flavor="outline" color="success">Success</Button>
          <Button flavor="outline" color="danger">Danger</Button>
          <Button flavor="outline" color="warning">Warning</Button>
          <Button flavor="outline" color="orange">Orange</Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Clear</h3>
        <div className="space-y-2">
          <Button flavor="clear" color="primary">Primary</Button>
          <Button flavor="clear" color="secondary">Secondary</Button>
          <Button flavor="clear" color="success">Success</Button>
          <Button flavor="clear" color="danger">Danger</Button>
          <Button flavor="clear" color="warning">Warning</Button>
          <Button flavor="clear" color="orange">Orange</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes de botones organizadas por estilo.',
      },
    },
  },
};
