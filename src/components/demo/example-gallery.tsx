"use client";

import { clx } from '@/utils/styles';
import { Button } from '../ui/button/button';
import { useState } from 'react';
import { complexityFilters, Example, EXAMPLES } from '@/constants/demo';


interface ExamplesGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    onExampleSelect: (example: Example) => void;
}

export function ExamplesGallery({ isOpen, onClose, onExampleSelect }: ExamplesGalleryProps) {
    const [selectedComplexity, setSelectedComplexity] = useState<string>('all');

    const filteredExamples = selectedComplexity === 'all'
        ? EXAMPLES
        : EXAMPLES.filter(example => example.complexity === selectedComplexity);

    if (!isOpen) return null;

    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'simple': return 'bg-green-100 text-green-800';
            case 'medium': return 'bg-yellow-100 text-yellow-800';
            case 'complex': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-900">Galería de Ejemplos</h2>
                        <Button
                            size='md'
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Explora ejemplos reales para inspirar tus diseños
                    </p>
                </div>

                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-wrap gap-2">
                        {complexityFilters.map(filter => (
                            <Button
                                size='md'
                                key={filter.id}
                                onClick={() => setSelectedComplexity(filter.id)}
                                className={clx(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    selectedComplexity === filter.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                )}
                            >
                                {filter.name}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredExamples.map(example => (
                            <div
                                key={example.id}
                                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                                onClick={() => onExampleSelect(example)}
                            >
                                <div className="aspect-video bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center relative">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">🏛️</div>
                                        <div className="text-sm text-gray-500">Vista previa</div>
                                    </div>
                                    <div className={clx(
                                        "absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium",
                                        getComplexityColor(example.complexity)
                                    )}>
                                        {example.complexity === 'simple' && 'Simple'}
                                        {example.complexity === 'medium' && 'Media'}
                                        {example.complexity === 'complex' && 'Compleja'}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {example.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">{example.description}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>{example.useCase}</span>
                                        <span className="capitalize">{example.complexity}</span>
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
                            {filteredExamples.length} ejemplos disponibles
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}