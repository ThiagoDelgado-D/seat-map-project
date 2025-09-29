'use client';

import { useRef, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import type { KonvaEventObject } from 'konva/lib/Node';
import { useSeatMapStore } from '@/store/seat-map-store';
import { Row, Seat } from '@/types';

export function Canvas() {
  const stageRef = useRef(null);
  const {
    currentMap,
    selectedRows,
    selectedSeats,
    selectRow,
    selectSeat,
    addRow,
    setSelectedRows,
    setSelectedSeats,
  } = useSeatMapStore();

  useEffect(() => {
    if (currentMap?.workState) {
      setSelectedRows(currentMap.workState.selectedRows || []);
      setSelectedSeats(currentMap.workState.selectedSeats || []);
    }
  }, [currentMap, setSelectedRows, setSelectedSeats]);

  const handleStageClick = (e: KonvaEventObject<MouseEvent>) => {
    if (e.target === e.target.getStage()) {
      const pos = e.target.getStage()?.getPointerPosition();
      if (pos) {
        addRow(pos.x, pos.y, 5);
      }
    }
  };

  const handleRowClick = (rowId: string, e: KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true;
    selectRow(rowId, e.evt.ctrlKey || e.evt.metaKey);
  };

  const handleSeatClick = (seatId: string, e: KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true;
    selectSeat(seatId, e.evt.ctrlKey || e.evt.metaKey);
  };

  const handleGenericEvent = (callback: (e: KonvaEventObject<MouseEvent>) => void) => {
    return (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
      const normalizedEvent: KonvaEventObject<MouseEvent> = {
        ...e,
        evt: {
          ...e.evt,
          ctrlKey: (e.evt as MouseEvent).ctrlKey || false,
          metaKey: (e.evt as MouseEvent).metaKey || false,
          altKey: (e.evt as MouseEvent).altKey || false,
          shiftKey: (e.evt as MouseEvent).shiftKey || false,
        } as MouseEvent
      };
      callback(normalizedEvent);
    };
  };

  if (!currentMap) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg font-medium mb-2">No map loaded</p>
          <p className="text-sm text-gray-500 max-w-xs">Create a new map or import an existing one to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {(selectedRows.length > 0 || selectedSeats.length > 0) && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-64 z-10">
          <h3 className="font-semibold text-gray-900 mb-3">Selección Actual</h3>
          
          {selectedRows.length > 0 && (
            <div className="mb-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Filas Seleccionadas ({selectedRows.length})
              </h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {currentMap.rows
                  .filter((row: Row) => selectedRows.includes(row.id))
                  .map((row: Row) => (
                    <div key={row.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="text-gray-400 text-xs">
                        {row.seats.length} asientos
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          )}

          {selectedSeats.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Asientos Seleccionados ({selectedSeats.length})
              </h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {currentMap.rows.flatMap((row: Row) => 
                  row.seats.filter((seat: Seat) => selectedSeats.includes(seat.id))
                    .map((seat: Seat) => (
                      <div key={seat.id} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                          {row.label}-{seat.label}
                        </span>
                        <span className="text-gray-400 text-xs">
                          Fila {row.label}
                        </span>
                      </div>
                    ))
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <Stage
        ref={stageRef}
        width={currentMap.width}
        height={currentMap.height}
        onClick={handleStageClick}
        className="cursor-crosshair bg-gradient-to-br from-white to-gray-50"
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={currentMap.width}
            height={currentMap.height}
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={1}
            dash={[5, 5]}
          />

          {currentMap.rows.map((row: Row) => (
            <Group key={row.id}>
              <Text
                x={row.x - 90}
                y={row.y + 12}
                text={row.label}
                fontSize={14}
                fontFamily="Inter, system-ui, sans-serif"
                fill={selectedRows.includes(row.id) ? '#dc2626' : '#475569'}
                fontStyle={selectedRows.includes(row.id) ? 'bold' : 'normal'}
                padding={5}
                background={selectedRows.includes(row.id) ? '#fef2f2' : '#f8fafc'}
                cornerRadius={6}
              />

              <Rect
                x={row.x - 100}
                y={row.y}
                width={row.seats.length * 50 + 120}
                height={40}
                fill={selectedRows.includes(row.id) ? '#fef2f2' : 'transparent'}
                stroke={selectedRows.includes(row.id) ? '#dc2626' : 'transparent'}
                strokeWidth={2}
                cornerRadius={8}
                onClick={(e) => handleRowClick(row.id, e)}
                onTap={handleGenericEvent((e) => handleRowClick(row.id, e))}
              />

              {row.seats.map((seat: Seat) => (
                <Group key={seat.id}>
                  <Rect
                    x={seat.x}
                    y={seat.y}
                    width={seat.width}
                    height={seat.height}
                    fill={selectedSeats.includes(seat.id) ? '#3b82f6' : '#ffffff'}
                    stroke={selectedSeats.includes(seat.id) ? '#1d4ed8' : '#cbd5e1'}
                    strokeWidth={selectedSeats.includes(seat.id) ? 2 : 1}
                    cornerRadius={6}
                    shadowColor="rgba(0, 0, 0, 0.1)"
                    shadowBlur={4}
                    shadowOffset={{ x: 0, y: 2 }}
                    shadowOpacity={0.8}
                    onClick={(e) => handleSeatClick(seat.id, e)}
                    onTap={handleGenericEvent((e) => handleSeatClick(seat.id, e))}
                    onMouseEnter={(e) => {
                      const stage = e.target.getStage();
                      if (stage) stage.container().style.cursor = 'pointer';
                      e.target.to({
                        scaleX: 1.1,
                        scaleY: 1.1,
                        duration: 0.1,
                      });
                    }}
                    onMouseLeave={(e) => {
                      const stage = e.target.getStage();
                      if (stage) stage.container().style.cursor = 'crosshair';
                      e.target.to({
                        scaleX: 1,
                        scaleY: 1,
                        duration: 0.1,
                      });
                    }}
                  />

                  <Text
                    x={seat.x + seat.width / 2}
                    y={seat.y + seat.height / 2 - 7}
                    text={seat.label}
                    fontSize={11}
                    fontFamily="Inter, system-ui, sans-serif"
                    fontStyle="500"
                    fill={selectedSeats.includes(seat.id) ? '#ffffff' : '#374151'}
                    align="center"
                    width={seat.width}
                    onClick={(e) => handleSeatClick(seat.id, e)}
                    onTap={handleGenericEvent((e) => handleSeatClick(seat.id, e))}
                  />
                </Group>
              ))}
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
}