import { SeatMapEditor } from '@/components/seat-editor/seat-map-editor';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seat Map Editor - SeatMap Studio',
  description: 'Create and edit professional seat maps with our visual editor',
};

export default function EditorPage() {
  return (
    <main className="h-screen overflow-hidden">
      <SeatMapEditor />
    </main>
  );
}