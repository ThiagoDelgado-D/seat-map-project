"use client";

import { useState } from 'react';
import { clx } from '@/utils/styles';
import { Button } from '../ui/button/button';

interface Template {
    id: string;
    name: string;
    description: string;
    category: 'theater' | 'stadium' | 'conference' | 'custom';
    seats: number;
    image: string;
}

interface TemplateSelectorProps {
    isOpen: boolean;
    onClose: () => void;
    onTemplateSelect: (template: Template) => void;
}

const TEMPLATES: Template[] = [
    {
        id: 'theater-standard',
        name: 'Teatro Estándar',
        description: 'Distribución clásica de teatro con asientos en abanico',
        category: 'theater',
        seats: 500,
        image: '/templates/theater-standard.png'
    },
    {
        id: 'stadium-arena',
        name: 'Estadio Arena',
        description: 'Distribución circular para eventos deportivos y conciertos',
        category: 'stadium',
        seats: 2000,
        image: '/templates/stadium-arena.png'
    },
    {
        id: 'conference-theater',
        name: 'Sala de Conferencias',
        description: 'Configuración profesional para presentaciones y charlas',
        category: 'conference',
        seats: 300,
        image: '/templates/conference-theater.png'
    },
    {
        id: 'theater-in-the-round',
        name: 'Teatro Circular',
        description: 'Escenario central con asientos alrededor',
        category: 'theater',
        seats: 800,
        image: '/templates/theater-round.png'
    },
    {
        id: 'stadium-grandstand',
        name: 'Gradas Deportivas',
        description: 'Gradas escalonadas para máxima visibilidad',
        category: 'stadium',
        seats: 1500,
        image: '/templates/stadium-grandstand.png'
    },
    {
        id: 'conference-classroom',
        name: 'Aula de Formación',
        description: 'Distribución educativa con mesas individuales',
        category: 'conference',
        seats: 100,
        image: '/templates/classroom.png'
    }
];

export function TemplateSelector({ isOpen, onClose, onTemplateSelect }: TemplateSelectorProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', name: 'Todas', count: TEMPLATES.length },
        { id: 'theater', name: 'Teatros', count: TEMPLATES.filter(t => t.category === 'theater').length },
        { id: 'stadium', name: 'Estadios', count: TEMPLATES.filter(t => t.category === 'stadium').length },
        { id: 'conference', name: 'Conferencias', count: TEMPLATES.filter(t => t.category === 'conference').length }
    ];

    const filteredTemplates = selectedCategory === 'all'
        ? TEMPLATES
        : TEMPLATES.filter(template => template.category === selectedCategory);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-900">Seleccionar Plantilla</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Elige una plantilla para comenzar rápidamente con tu diseño
                    </p>
                </div>

                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <Button
                                size='md'
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={clx(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    selectedCategory === category.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                )}
                            >
                                {category.name} ({category.count})
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map(template => (
                            <div
                                key={template.id}
                                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                                onClick={() => onTemplateSelect(template)}
                            >
                                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">🎭</div>
                                        <div className="text-sm text-gray-500">Vista previa</div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {template.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>{template.seats} asientos</span>
                                        <span className="capitalize">{template.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center">
                        <Button
                            size='md'
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Cancelar
                        </Button>
                        <div className="text-sm text-gray-500">
                            {filteredTemplates.length} plantillas disponibles
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}