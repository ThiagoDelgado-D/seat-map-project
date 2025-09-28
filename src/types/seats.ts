export interface Seat {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rowId: string;
  isSelected?: boolean;
}

export interface Row {
  id: string;
  label: string;
  seats: Seat[];
  x: number;
  y: number;
  isSelected?: boolean;
}

export interface SeatMap {
  id: string;
  name: string;
  rows: Row[];
  width: number;
  height: number;
}

export interface SeatMapState {
  currentMap: SeatMap | null;
  selectedRows: string[];
  selectedSeats: string[];
  
  // Actions
  createNewMap: (name: string) => void;
  addRow: (x: number, y: number, seatsCount: number) => void;
  addMultipleRows: (startX: number, startY: number, rowCount: number, seatsPerRow: number) => void;
  selectRow: (rowId: string, multiple?: boolean) => void;
  selectSeat: (seatId: string, multiple?: boolean) => void;
  updateRowLabel: (rowId: string, label: string) => void;
  updateSeatLabel: (seatId: string, label: string) => void;
  batchLabelRows: (pattern: string) => void;
  batchLabelSeats: (rowId: string, pattern: string) => void;
  deleteSelectedRows: () => void;
  clearSelection: () => void;
  exportMap: () => string;
  importMap: (jsonData: string) => boolean;
  clearMap: () => void;
}
