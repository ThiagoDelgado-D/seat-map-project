import { MainLayout } from "@/components/layouts/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">SeatMap Studio</h1>
        <p className="text-gray-600">
          Bienvenido al editor de mapas de asientos. Creá, importá y exportá tus
          diseños fácilmente.
        </p>
      </div>
    </MainLayout>
  );
}
