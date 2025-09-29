"use client";

import { useState } from 'react';
import { clx } from '@/utils/styles';

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'current' | 'completed';
}

interface WorkflowGuideProps {
  className?: string;
}

export function WorkflowGuide({ className }: WorkflowGuideProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: "Crear nuevo mapa",
      description: "Inicia un nuevo diseño de asientos desde cero o usando una plantilla",
      status: currentStep === 1 ? 'current' : currentStep > 1 ? 'completed' : 'pending'
    },
    {
      id: 2,
      title: "Diseñar el layout",
      description: "Usa las herramientas de dibujo para crear secciones y asientos",
      status: currentStep === 2 ? 'current' : currentStep > 2 ? 'completed' : 'pending'
    },
    {
      id: 3,
      title: "Configurar categorías",
      description: "Define tipos de asientos, precios y restricciones",
      status: currentStep === 3 ? 'current' : currentStep > 3 ? 'completed' : 'pending'
    },
    {
      id: 4,
      title: "Validar y revisar",
      description: "Revisa el diseño final y realiza ajustes si es necesario",
      status: currentStep === 4 ? 'current' : currentStep > 4 ? 'completed' : 'pending'
    },
    {
      id: 5,
      title: "Exportar e integrar",
      description: "Exporta tu diseño para integrarlo con tu sistema de tickets",
      status: currentStep === 5 ? 'current' : currentStep > 5 ? 'completed' : 'pending'
    }
  ];

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={clx("bg-white rounded-lg shadow-lg p-6", className)}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Flujo de Trabajo
        </h2>
        <p className="text-gray-600">
          Sigue estos pasos para crear tu mapa de asientos perfecto
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => handleStepClick(step.id)}
            className={clx(
              "p-4 rounded-lg border-2 cursor-pointer transition-all duration-200",
              step.status === 'completed' && "border-green-200 bg-green-50",
              step.status === 'current' && "border-blue-500 bg-blue-50",
              step.status === 'pending' && "border-gray-200 bg-gray-50 opacity-60"
            )}
          >
            <div className="flex items-center mb-2">
              <div className={clx(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3",
                step.status === 'completed' && "bg-green-500 text-white",
                step.status === 'current' && "bg-blue-500 text-white",
                step.status === 'pending' && "bg-gray-300 text-gray-600"
              )}>
                {step.status === 'completed' ? '✓' : step.id}
              </div>
              <h3 className={clx(
                "font-semibold",
                step.status === 'current' && "text-blue-900",
                step.status === 'completed' && "text-green-900",
                step.status === 'pending' && "text-gray-500"
              )}>
                {step.title}
              </h3>
            </div>
            <p className={clx(
              "text-sm ml-11",
              step.status === 'current' && "text-blue-700",
              step.status === 'completed' && "text-green-700",
              step.status === 'pending' && "text-gray-500"
            )}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={clx(
            "px-4 py-2 rounded-lg font-medium transition-colors",
            currentStep === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          Anterior
        </button>
        
        <div className="text-sm text-gray-500">
          Paso {currentStep} de {steps.length}
        </div>
        
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className={clx(
            "px-4 py-2 rounded-lg font-medium transition-colors",
            currentStep === steps.length
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          Siguiente
        </button>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">
          💡 Consejo del paso {currentStep}
        </h4>
        <p className="text-sm text-yellow-700">
          {currentStep === 1 && "Empieza con una plantilla para ahorrar tiempo, o crea desde cero para máximo control."}
          {currentStep === 2 && "Usa las herramientas de snap y grid para alinear perfectamente tus asientos."}
          {currentStep === 3 && "Organiza las categorías por color para una identificación visual rápida."}
          {currentStep === 4 && "Usa la vista de validación para detectar posibles problemas en tu diseño."}
          {currentStep === 5 && "Exporta en formato JSON para integración o como imagen para presentaciones."}
        </p>
      </div>
    </div>
  );
}