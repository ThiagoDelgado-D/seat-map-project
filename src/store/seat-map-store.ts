import { Row, Seat, SeatMap, SeatMapState } from "@/types";
import { create } from "zustand";
import { SEAT_HEIGHT, SEAT_SPACING, SEAT_WIDTH } from "@/constants/seats";
import { CryptoServiceImp } from "@/services/implementations/crypto-service-impl";

const cryptoService = new CryptoServiceImp();

export const useSeatMapStore = create<SeatMapState>((set, get) => ({
  currentMap: null,
  selectedRows: [],
  selectedSeats: [],

  createNewMap: async (name: string) => {
    const newMap: SeatMap = {
      id: await cryptoService.generateUUID(),
      name,
      rows: [],
      width: 1200,
      height: 800,
    };
    set({ currentMap: newMap, selectedRows: [], selectedSeats: [] });
  },

  addRow: async (x: number, y: number, seatsCount: number) => {
    const state = get();
    if (!state.currentMap) return;

    const rowId = await cryptoService.generateUUID();
    const seats: Seat[] = [];

    for (let i = 0; i < seatsCount; i++) {
      seats.push({
        id: await cryptoService.generateUUID(),
        label: `${i + 1}`,
        x: x + i * (SEAT_WIDTH + SEAT_SPACING),
        y,
        width: SEAT_WIDTH,
        height: SEAT_HEIGHT,
        rowId,
      });
    }

    const newRow: Row = {
      id: rowId,
      label: `Row ${state.currentMap.rows.length + 1}`,
      seats,
      x,
      y,
    };

    set({
      currentMap: {
        ...state.currentMap,
        rows: [...state.currentMap.rows, newRow],
      },
    });
  },

  addMultipleRows: (
    startX: number,
    startY: number,
    rowCount: number,
    seatsPerRow: number
  ) => {
    const rowSpacing = SEAT_HEIGHT + 20;
    for (let i = 0; i < rowCount; i++) {
      get().addRow(startX, startY + i * rowSpacing, seatsPerRow);
    }
  },

  selectRow: (rowId: string, multiple = false) => {
    const state = get();
    let newSelectedRows: string[];

    if (multiple) {
      newSelectedRows = state.selectedRows.includes(rowId)
        ? state.selectedRows.filter((id) => id !== rowId)
        : [...state.selectedRows, rowId];
    } else {
      newSelectedRows = state.selectedRows.includes(rowId) ? [] : [rowId];
    }

    set({ selectedRows: newSelectedRows, selectedSeats: [] });
  },

  selectSeat: (seatId: string, multiple = false) => {
    const state = get();
    let newSelectedSeats: string[];

    if (multiple) {
      newSelectedSeats = state.selectedSeats.includes(seatId)
        ? state.selectedSeats.filter((id) => id !== seatId)
        : [...state.selectedSeats, seatId];
    } else {
      newSelectedSeats = state.selectedSeats.includes(seatId) ? [] : [seatId];
    }

    set({ selectedSeats: newSelectedSeats, selectedRows: [] });
  },

  updateRowLabel: (rowId: string, label: string) => {
    const state = get();
    if (!state.currentMap) return;

    const updatedRows = state.currentMap.rows.map((row) =>
      row.id === rowId ? { ...row, label } : row
    );

    set({
      currentMap: { ...state.currentMap, rows: updatedRows },
    });
  },

  updateSeatLabel: (seatId: string, label: string) => {
    const state = get();
    if (!state.currentMap) return;

    const updatedRows = state.currentMap.rows.map((row) => ({
      ...row,
      seats: row.seats.map((seat) =>
        seat.id === seatId ? { ...seat, label } : seat
      ),
    }));

    set({
      currentMap: { ...state.currentMap, rows: updatedRows },
    });
  },

  batchLabelRows: (pattern: string) => {
    const state = get();
    if (!state.currentMap || state.selectedRows.length === 0) return;

    const updatedRows = state.currentMap.rows.map((row, index) => {
      if (state.selectedRows.includes(row.id)) {
        const rowIndex = state.selectedRows.indexOf(row.id);
        const label = pattern.replace(/\{n\}/g, (rowIndex + 1).toString());
        return { ...row, label };
      }
      return row;
    });

    set({
      currentMap: { ...state.currentMap, rows: updatedRows },
    });
  },

  batchLabelSeats: (rowId: string, pattern: string) => {
    const state = get();
    if (!state.currentMap) return;

    const updatedRows = state.currentMap.rows.map((row) => {
      if (row.id === rowId) {
        const updatedSeats = row.seats.map((seat, index) => ({
          ...seat,
          label: pattern.replace(/\{n\}/g, (index + 1).toString()),
        }));
        return { ...row, seats: updatedSeats };
      }
      return row;
    });

    set({
      currentMap: { ...state.currentMap, rows: updatedRows },
    });
  },

  deleteSelectedRows: () => {
    const state = get();
    if (!state.currentMap || state.selectedRows.length === 0) return;

    const updatedRows = state.currentMap.rows.filter(
      (row) => !state.selectedRows.includes(row.id)
    );

    set({
      currentMap: { ...state.currentMap, rows: updatedRows },
      selectedRows: [],
    });
  },

  clearSelection: () => {
    set({ selectedRows: [], selectedSeats: [] });
  },

  exportMap: () => {
    const state = get();
    if (!state.currentMap) return "";
    return JSON.stringify(state.currentMap, null, 2);
  },

  importMap: (jsonData: string) => {
    try {
      const mapData = JSON.parse(jsonData) as SeatMap;
      // Basic validation
      if (!mapData.id || !mapData.name || !Array.isArray(mapData.rows)) {
        return false;
      }
      set({
        currentMap: mapData,
        selectedRows: [],
        selectedSeats: [],
      });
      return true;
    } catch {
      return false;
    }
  },

  clearMap: () => {
    set({ currentMap: null, selectedRows: [], selectedSeats: [] });
  },
}));
