// src/components/seat-editor/toolbar-updated.tsx
'use client';

import { useSeatMapStore } from '@/store/seat-map-store';
import { useState } from 'react';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/Input';
import { Modal } from '../ui/modal/modal';
import { LabelingModal } from './labeling-modal';

export function Toolbar() {
  const [mapName, setMapName] = useState('');
  const [isNewMapOpen, setIsNewMapOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isLabelingOpen, setIsLabelingOpen] = useState(false);
  const [labelingType, setLabelingType] = useState<'rows' | 'seats'>('rows');
  const [exportMapName, setExportMapName] = useState('');
  const [rowCount, setRowCount] = useState(5);
  const [seatsPerRow, setSeatsPerRow] = useState(10);
  const [importData, setImportData] = useState('');

  const {
    currentMap,
    selectedRows,
    selectedSeats,
    createNewMap,
    addMultipleRows,
    deleteSelectedRows,
    exportMap,
    importMap,
    clearMap,
  } = useSeatMapStore();

  const handleCreateMap = () => {
    if (mapName.trim()) {
      createNewMap(mapName.trim());
      setMapName('');
      setIsNewMapOpen(false);
    }
  };

  const handleAddMultipleRows = () => {
    if (currentMap) {
      const startX = 100;
      const startY = 100 + (currentMap.rows.length * 60);
      addMultipleRows(startX, startY, rowCount, seatsPerRow);
    }
  };

  // REQUERIMIENTO FALTANTE: Pedir nombre antes de exportar
  const handleRequestExport = () => {
    if (currentMap) {
      setExportMapName(currentMap.name);
      setIsExportOpen(true);
    }
  };

  const handleConfirmExport = () => {
    if (!currentMap || !exportMapName.trim()) return;

    const jsonData = exportMap();
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exportMapName.trim()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setIsExportOpen(false);
    setExportMapName('');
  };

  const handleImport = () => {
    if (importData.trim()) {
      const success = importMap(importData.trim());
      if (success) {
        setImportData('');
        setIsImportOpen(false);
      } else {
        alert('Error: Invalid JSON format');
      }
    }
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setImportData(content);
      };
      reader.readAsText(file);
    }
  };

  const handleDeleteRows = () => {
    if (selectedRows.length > 0) {
      const confirmed = window.confirm(
        `¿Estás seguro de que quieres eliminar ${selectedRows.length} fila(s)?`
      );
      if (confirmed) {
        deleteSelectedRows();
      }
    }
  };

  const handleLabelRows = () => {
    setLabelingType('rows');
    setIsLabelingOpen(true);
  };

  const handleLabelSeats = () => {
    setLabelingType('seats');
    setIsLabelingOpen(true);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white border-b">
      <Button
        flavor="outline"
        color="primary"
        size='md'
        onClick={() => setIsNewMapOpen(true)}
      >
        📄 Nuevo Mapa
      </Button>

      <Button
        flavor="outline"
        color="secondary"
        size='md'
        onClick={() => setIsImportOpen(true)}
      >
        📁 Importar
      </Button>

      {currentMap && (
        <>
          <div className="text-sm font-medium text-gray-700">
            Mapa: {currentMap.name}
          </div>

          <div className="flex items-center gap-2 border-l pl-4">
            <label className="text-sm text-gray-600">Filas:</label>
            <Input
              type="number"
              value={rowCount.toString()}
              onChange={(value) => setRowCount(Number(value))}
              size="sm"
              className="w-16"
            />
            <label className="text-sm text-gray-600">Asientos:</label>
            <Input
              type="number"
              value={seatsPerRow.toString()}
              onChange={(value) => setSeatsPerRow(Number(value))}
              size="sm"
              className="w-16"
            />
            <Button
              flavor="raised"
              color="primary"
              size="sm"
              onClick={handleAddMultipleRows}
            >
              ➕ Agregar Filas
            </Button>
          </div>

          <div className="flex items-center gap-2 border-l pl-4">
            {selectedRows.length > 0 && (
              <>
                <Button
                  onClick={handleLabelRows}
                  flavor="outline"
                  color="primary"
                  size="sm"
                >
                  🏷️ Etiquetar Filas ({selectedRows.length})
                </Button>
                <Button
                  onClick={handleDeleteRows}
                  flavor="raised"
                  color="danger"
                  size="sm"
                >
                  🗑️ Eliminar ({selectedRows.length})
                </Button>
              </>
            )}

            {selectedSeats.length > 0 && (
              <Button
                onClick={handleLabelSeats}
                flavor="outline"
                color="primary"
                size="sm"
              >
                🏷️ Etiquetar Asientos ({selectedSeats.length})
              </Button>
            )}
          </div>

          <div className="flex gap-2 border-l pl-4">
            <Button
              onClick={handleRequestExport}
              flavor="outline"
              color="success"
              size="sm"
            >
              💾 Exportar JSON
            </Button>

            <Button
              onClick={() => {
                const confirmed = window.confirm('¿Estás seguro de que quieres limpiar el mapa?');
                if (confirmed) clearMap();
              }}
              flavor="clear"
              color="danger"
              size="sm"
            >
              🧹 Limpiar
            </Button>
          </div>
        </>
      )}

      <Modal
        isOpen={isNewMapOpen}
        onClose={() => setIsNewMapOpen(false)}
        title="Crear Nuevo Mapa"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Mapa
            </label>
            <Input
              value={mapName}
              onChange={(value) => setMapName(value)}
              placeholder="Ej: Teatro Principal"
              onKeyDown={(e) => e.key === 'Enter' && handleCreateMap()}
            />
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              flavor="clear"
              size='md'
              color="secondary"
              onClick={() => setIsNewMapOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              flavor="raised"
              color="primary"
              size='md'
              onClick={handleCreateMap}
              disabled={!mapName.trim()}
            >
              Crear Mapa
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        title="Importar Mapa"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Archivo JSON
            </label>
            <input
              type="file"
              accept=".json"
              onChange={handleFileImport}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              O pega el JSON aquí
            </label>
            <textarea
              value={importData}
              onChange={(e) => setImportData(e.target.value)}
              placeholder="Pega el contenido JSON aquí..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              flavor="clear"
              color="secondary"
              onClick={() => setIsImportOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              flavor="raised"
              color="primary"
              onClick={handleImport}
              disabled={!importData.trim()}
            >
              Importar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        title="Exportar Mapa"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del archivo
            </label>
            <Input
              value={exportMapName}
              onChange={(value) => setExportMapName(value)}
              placeholder="Nombre del mapa"
            />
            <p className="text-xs text-gray-500 mt-1">
              Se agregará la extensión .json automáticamente
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              flavor="clear"
              color="secondary"
              size='md'
              onClick={() => setIsExportOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              flavor="raised"
              color="success"
              size='md'
              onClick={handleConfirmExport}
              disabled={!exportMapName.trim()}
            >
              💾 Descargar JSON
            </Button>
          </div>
        </div>
      </Modal>

      <LabelingModal
        isOpen={isLabelingOpen}
        onClose={() => setIsLabelingOpen(false)}
        type={labelingType}
        selectedIds={labelingType === 'rows' ? selectedRows : selectedSeats}
      />
    </div>
  );
}