'use client';

import { Canvas } from "./canvas";
import { Toolbar } from "./toolbar";

export function SeatMapEditor() {
  return (
    <div className="h-screen flex flex-col">
      <Toolbar />
      <div className="flex-1 p-4">
        <Canvas />
      </div>
    </div>
  );
}