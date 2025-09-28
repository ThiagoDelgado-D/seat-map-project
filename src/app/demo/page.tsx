import { SeatMapEditor } from "@/components/seat-editor/seat-map-editor";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SeatMap Studio Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prueba todas las funcionalidades del editor de mapas de asientos.
            Crea, edita, importa y exporta tus diseños.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <SeatMapEditor />
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">🎨 Editor Visual</h3>
            <p className="text-sm text-gray-600">Interfaz intuitiva para diseñar mapas con herramientas drag & drop</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">💾 Import/Export</h3>
            <p className="text-sm text-gray-600">Guarda y carga tus diseños en formato JSON</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">📱 Responsive</h3>
            <p className="text-sm text-gray-600">Funciona perfectamente en todos los dispositivos</p>
          </div>
        </div>
      </div>
    </div>
  );
}