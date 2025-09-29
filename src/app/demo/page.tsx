"use client";

import { useState } from 'react';
import { SeatMapEditor } from "@/components/seat-editor/seat-map-editor";
import { WorkflowGuide } from "@/components/demo/workflow-guide";
import { clx } from '@/utils/styles';
import { Button } from '@/components/ui/button/button';

export default function DemoPage() {
  const [showGuide, setShowGuide] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SeatMap Studio Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Prueba todas las funcionalidades del editor de mapas de asientos.
            Crea, edita, importa y exporta tus diseños.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button
              onClick={() => setShowGuide(!showGuide)}
              size='md'
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showGuide ? 'Ocultar Guía' : 'Mostrar Guía'}
            </Button>
            <Button size='md'
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Nueva Plantilla
            </Button>
            <Button size='md'
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Ver Ejemplos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {showGuide && (
            <div className="xl:col-span-1">
              <WorkflowGuide />
            </div>
          )}

          <div className={clx(
            "bg-white rounded-lg shadow-lg overflow-hidden",
            showGuide ? "xl:col-span-3" : "xl:col-span-4"
          )}>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-800">
                Editor de Mapas de Asientos
              </h2>
              <p className="text-sm text-gray-600">
                Arrastra y suelta elementos, configura propiedades y visualiza en tiempo real
              </p>
            </div>
            <SeatMapEditor />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Editor Visual Intuitivo</h3>
              <p className="text-sm text-gray-600">
                Interfaz drag & drop con herramientas profesionales para diseño preciso
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💾</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Importar & Exportar</h3>
              <p className="text-sm text-gray-600">
                Soporte para múltiples formatos: JSON, PNG, SVG y integración con APIs
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Totalmente Responsive</h3>
              <p className="text-sm text-gray-600">
                Funciona perfectamente en desktop, tablet y móvil con interfaz adaptativa
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rendimiento Optimizado</h3>
              <p className="text-sm text-gray-600">
                Motor de renderizado rápido incluso con miles de asientos y elementos
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            ¿Primera vez usando el editor?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comienza Rápido</h3>
              <p className="text-sm text-gray-600">
                Usa una plantilla predefinida y modifícala según tus necesidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Experimenta</h3>
              <p className="text-sm text-gray-600">
                Prueba todas las herramientas - no hay riesgo de romper nada
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Aprende</h3>
              <p className="text-sm text-gray-600">
                Sigue la guía paso a paso para dominar todas las funcionalidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}