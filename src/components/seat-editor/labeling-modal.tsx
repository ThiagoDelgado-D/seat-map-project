'use client';

import { useState } from 'react';
import { Modal } from '../ui/modal/modal';
import { Input } from '../ui/input/Input';
import { Button } from '../ui/button/button';
import { useSeatMapStore } from '@/store/seat-map-store';

interface LabelingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'rows' | 'seats';
  selectedIds: string[];
}

export function LabelingModal({ isOpen, onClose, type, selectedIds }: LabelingModalProps) {
  const [pattern, setPattern] = useState('');
  const [preview, setPreview] = useState<string[]>([]);
  const { batchLabelRows, batchLabelSeats, currentMap } = useSeatMapStore();

  const generatePreview = (inputPattern: string) => {
    if (!inputPattern.includes('{n}')) {
      return selectedIds.map(() => inputPattern);
    }

    return selectedIds.map((_, index) => 
      inputPattern.replace(/\{n\}/g, (index + 1).toString())
    );
  };

  const handlePatternChange = (value: string) => {
    setPattern(value);
    setPreview(generatePreview(value));
  };

  const handleApply = () => {
    if (type === 'rows' && selectedIds.length > 0) {
      batchLabelRows(pattern);
    } else if (type === 'seats' && selectedIds.length > 0 && currentMap) {
      const firstSeat = currentMap.rows
        .flatMap(row => row.seats)
        .find(seat => selectedIds.includes(seat.id));
      
      if (firstSeat) {
        batchLabelSeats(firstSeat.rowId, pattern);
      }
    }
    
    setPattern('');
    setPreview([]);
    onClose();
  };

  const patternExamples = type === 'rows' 
    ? ['Row {n}', 'Fila {n}', 'A', 'B', 'C']
    : ['Asiento {n}', '{n}', 'A{n}', 'B{n}'];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Etiquetado Rápido - ${type === 'rows' ? 'Filas' : 'Asientos'}`}
      size="lg"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Patrón de Etiquetado
          </label>
          <Input
            value={pattern}
            onChange={handlePatternChange}
            placeholder="Ej: Row {n} o Fila {n}"
          />
          <p className="text-xs text-gray-500 mt-1">
            Usa {'{n}'} para números secuenciales (1, 2, 3...) o escribe un texto fijo
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Ejemplos Rápidos</h4>
          <div className="flex flex-wrap gap-2">
            {patternExamples.map((example) => (
              <button
                key={example}
                onClick={() => handlePatternChange(example)}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {preview.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Vista Previa</h4>
            <div className="bg-gray-50 rounded-lg p-3 max-h-32 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {preview.slice(0, 10).map((label, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-white border border-gray-200 rounded"
                  >
                    {label}
                  </span>
                ))}
                {preview.length > 10 && (
                  <span className="px-2 py-1 text-xs text-gray-500">
                    +{preview.length - 10} más...
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {selectedIds.length} {type === 'rows' ? 'filas' : 'asientos'} seleccionados
          </div>
          
          <div className="flex gap-3">
            <Button flavor="clear" color="secondary" onClick={onClose} size='md'>
              Cancelar
            </Button>
            <Button 
              flavor="raised" 
              color="primary" 
              size='md'
              onClick={handleApply}
              disabled={!pattern.trim()}
            >
              Aplicar Etiquetas
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}