import { Meta, StoryObj } from "@storybook/nextjs";
import { Footer } from "./footer";


const meta: Meta<typeof Footer> = {
    title: 'Components/Layout/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
El Footer es el componente final de SeatMap Studio que contiene información de la empresa,
enlaces de navegación organizados por secciones, redes sociales y copyright.

**Características:**
- Logo y descripción de la empresa
- Enlaces organizados por categorías (Product, Support, Company)
- Redes sociales con iconos SVG
- Variantes: default, minimal, dark
- Grid responsive que se adapta a diferentes tamaños
- Arquitectura modular con secciones configurables
- Soporte completo para eventos personalizados
        `,
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'minimal', 'dark'],
            description: 'Estilo visual del footer',
        },
        companyName: {
            control: 'text',
            description: 'Nombre de la empresa',
        },
        description: {
            control: 'text',
            description: 'Descripción de la empresa',
        },
        showSocial: {
            control: 'boolean',
            description: 'Mostrar enlaces de redes sociales',
        },
        year: {
            control: 'number',
            description: 'Año para el copyright',
        },
        onLinkClick: {
            description: 'Callback cuando se hace clic en cualquier enlace',
        },
        onSocialClick: {
            description: 'Callback cuando se hace clic en redes sociales',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
};

export const SeatMapStudio: Story = {
    args: {
        companyName: "SeatMap Studio",
        description: "Professional seat map editor for theaters, stadiums, and event venues. Create, edit, and export seat maps with ease.",
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer configurado para SeatMap Studio con descripción completa',
            },
        },
    },
};

export const Variants: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium mb-4">Default</h3>
                <Footer
                    variant="default"
                    companyName="SeatMap Studio"
                />
            </div>

            <div>
                <h3 className="text-lg font-medium mb-4">Minimal</h3>
                <Footer
                    variant="minimal"
                    companyName="Studio"
                    description="Minimal footer design"
                />
            </div>

            <div>
                <h3 className="text-lg font-medium mb-4">Dark</h3>
                <Footer
                    variant="dark"
                    companyName="SeatMap Studio"
                />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Tres variantes de estilo disponibles para diferentes temas',
            },
        },
    },
};

export const CustomSections: Story = {
    args: {
        companyName: "Custom Studio",
        sections: [
            {
                title: "Editor",
                links: [
                    { label: "Create Map", href: "/create" },
                    { label: "Import JSON", href: "/import" },
                    { label: "Export Map", href: "/export" },
                ],
            },
            {
                title: "Resources",
                links: [
                    { label: "Documentation", href: "/docs" },
                    { label: "Examples", href: "/examples" },
                    { label: "API Reference", href: "/api" },
                ],
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer con secciones personalizadas específicas para SeatMap Studio',
            },
        },
    },
};

export const MinimalFooter: Story = {
    args: {
        variant: "minimal",
        companyName: "Studio",
        description: "Simple and clean.",
        showSocial: false,
        sections: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer minimalista sin navegación ni redes sociales',
            },
        },
    },
};

export const DarkMode: Story = {
    args: {
        variant: "dark",
        companyName: "SeatMap Studio",
        description: "Professional seat map editor designed for dark interfaces.",
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
                story: 'Footer en modo oscuro para temas dark de la aplicación',
            },
        },
    },
};

export const WithCustomContent: Story = {
    render: () => (
        <Footer
            companyName="SeatMap Studio"
        >
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Made with ❤️</span>
                <button
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                    Send Feedback
                </button>
            </div>
        </Footer>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Footer con contenido personalizado en el área de copyright usando children',
            },
        },
    },
};

export const InteractiveLinks: Story = {
    args: {
        companyName: "Interactive Studio",
        sections: [
            {
                title: "Navigation",
                links: [
                    {
                        label: "Custom Action",
                        href: "/custom",
                    },
                    {
                        label: "Regular Link",
                        href: "/regular"
                    },
                ],
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer interactivo con acciones personalizadas y eventos de mouse',
            },
        },
    },
};