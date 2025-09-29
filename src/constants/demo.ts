export interface Template {
  id: string;
  name: string;
  description: string;
  category: "theater" | "stadium" | "conference" | "custom";
  seats: number;
  image: string;
}

export interface Example {
  id: string;
  name: string;
  description: string;
  complexity: "simple" | "medium" | "complex";
  useCase: string;
  image: string;
}

export const TEMPLATES: Template[] = [
  {
    id: "theater-standard",
    name: "Teatro Estándar",
    description: "Distribución clásica de teatro con asientos en abanico",
    category: "theater",
    seats: 500,
    image: "/templates/theater-standard.png",
  },
  {
    id: "stadium-arena",
    name: "Estadio Arena",
    description: "Distribución circular para eventos deportivos y conciertos",
    category: "stadium",
    seats: 2000,
    image: "/templates/stadium-arena.png",
  },
  {
    id: "conference-theater",
    name: "Sala de Conferencias",
    description: "Configuración profesional para presentaciones y charlas",
    category: "conference",
    seats: 300,
    image: "/templates/conference-theater.png",
  },
  {
    id: "theater-in-the-round",
    name: "Teatro Circular",
    description: "Escenario central con asientos alrededor",
    category: "theater",
    seats: 800,
    image: "/templates/theater-round.png",
  },
  {
    id: "stadium-grandstand",
    name: "Gradas Deportivas",
    description: "Gradas escalonadas para máxima visibilidad",
    category: "stadium",
    seats: 1500,
    image: "/templates/stadium-grandstand.png",
  },
  {
    id: "conference-classroom",
    name: "Aula de Formación",
    description: "Distribución educativa con mesas individuales",
    category: "conference",
    seats: 100,
    image: "/templates/classroom.png",
  },
];

export const categories = [
  { id: "all", name: "Todas", count: TEMPLATES.length },
  {
    id: "theater",
    name: "Teatros",
    count: TEMPLATES.filter((t) => t.category === "theater").length,
  },
  {
    id: "stadium",
    name: "Estadios",
    count: TEMPLATES.filter((t) => t.category === "stadium").length,
  },
  {
    id: "conference",
    name: "Conferencias",
    count: TEMPLATES.filter((t) => t.category === "conference").length,
  },
];
