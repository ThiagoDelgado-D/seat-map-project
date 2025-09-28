import { Meta, StoryObj } from "@storybook/nextjs";
import { Modal, ModalProps } from "./modal";
import { useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/Input";

const meta: Meta<typeof Modal> = {
    title: 'Components/UI/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
El Modal es un componente overlay que muestra contenido sobre la página principal.
Usado para formularios, confirmaciones, y contenido que requiere atención del usuario.

**Características:**
- Control de apertura/cierre con estado
- Múltiples tamaños: sm, md, lg, xl
- Variantes: default, dark
- Cierre con Escape, overlay click, o botón X
- Previene scroll del body cuando está abierto
- Animaciones suaves de entrada/salida
- Backdrop personalizable
        `,
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: { type: 'boolean' },
            description: 'Estado de apertura del modal',
        },
        onClose: {
            description: 'Callback para cerrar el modal',
            action: 'modal-closed',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'Tamaño del modal',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'dark'],
            description: 'Estilo visual del modal',
        },
        title: {
            control: { type: 'text' },
            description: 'Título del modal',
        },
        showCloseButton: {
            control: { type: 'boolean' },
            description: 'Mostrar botón X para cerrar',
        },
        closeOnOverlayClick: {
            control: { type: 'boolean' },
            description: 'Cerrar al hacer clic en el overlay',
        },
        closeOnEscape: {
            control: { type: 'boolean' },
            description: 'Cerrar al presionar Escape',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

type ModalWrapperProps = Omit<ModalProps, 'isOpen' | 'onClose' | 'children'> & {
    children: React.ReactNode;
};

const ModalWrapper = ({ children, ...args }: ModalWrapperProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button flavor="raised" color="primary" onClick={() => setIsOpen(true)} size="md">
                Open Modal
            </Button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {children}
            </Modal>
        </>
    );
};

export const Default: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <p>This is the default modal content. You can close it by clicking the X button, pressing Escape, or clicking outside.</p>
        </ModalWrapper>
    ),
    args: {
        title: "Default Modal",
    },
};

export const NewMapModal: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Map Name
                    </label>
                    <Input
                        placeholder="Enter map name..."
                        onChange={() => { }}
                    />
                </div>
                <div className="flex gap-3 justify-end">
                    <Button flavor="clear" color="secondary">
                        Cancel
                    </Button>
                    <Button flavor="raised" color="primary">
                        Create Map
                    </Button>
                </div>
            </div>
        </ModalWrapper>
    ),
    args: {
        title: "Create New Map",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal usado para crear un nuevo mapa en SeatMap Studio.',
            },
        },
    },
};

export const ImportModal: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        JSON File
                    </label>
                    <input
                        type="file"
                        accept=".json"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Or paste JSON here
                    </label>
                    <textarea
                        placeholder="Paste JSON content..."
                        className="w-full h-32 p-3 border border-gray-300 rounded-md text-sm"
                    />
                </div>

                <div className="flex gap-3 justify-end">
                    <Button flavor="clear" color="secondary">
                        Cancel
                    </Button>
                    <Button flavor="raised" color="primary">
                        Import
                    </Button>
                </div>
            </div>
        </ModalWrapper>
    ),
    args: {
        title: "Import Map",
        size: "lg",
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal para importar mapas existentes desde archivos JSON.',
            },
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-x-4">
            <ModalWrapper size="sm" title="Small Modal">
                <p>This is a small modal.</p>
            </ModalWrapper>
            <ModalWrapper size="md" title="Medium Modal">
                <p>This is a medium modal.</p>
            </ModalWrapper>
            <ModalWrapper size="lg" title="Large Modal">
                <p>This is a large modal with more content space.</p>
            </ModalWrapper>
            <ModalWrapper size="xl" title="Extra Large Modal">
                <p>This is an extra large modal for complex forms or detailed content.</p>
            </ModalWrapper>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes tamaños de modal disponibles.',
            },
        },
    },
};

export const DarkVariant: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <p>This is a dark themed modal perfect for applications with dark mode.</p>
            <div className="mt-4">
                <Button flavor="raised" color="primary" size="lg">
                    Action Button
                </Button>
            </div>
        </ModalWrapper>
    ),
    args: {
        title: "Dark Modal",
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
                story: 'Modal con tema oscuro para aplicaciones dark mode.',
            },
        },
    },
};

export const NoCloseButton: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <p>This modal doesn&apos;t have a close button. You can only close it by clicking outside or pressing Escape.</p>
        </ModalWrapper>
    ),
    args: {
        title: "No Close Button",
        showCloseButton: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal sin botón de cierre, útil para flujos que requieren acción del usuario.',
            },
        },
    },
};

export const ConfirmationModal: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <div className="text-center space-y-4">
                <div className="text-red-500 text-4xl">⚠️</div>
                <p className="text-lg font-medium">Are you sure?</p>
                <p className="text-gray-600">This action cannot be undone. This will permanently delete the selected rows.</p>
                <div className="flex gap-3 justify-center">
                    <Button flavor="clear" color="secondary">
                        Cancel
                    </Button>
                    <Button flavor="raised" color="danger" size="md">
                        Delete
                    </Button>
                </div>
            </div>
        </ModalWrapper>
    ),
    args: {
        title: "Confirm Deletion",
        size: "sm",
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal de confirmación para acciones destructivas.',
            },
        },
    },
};