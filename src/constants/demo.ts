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

export const EXAMPLES: Example[] = [
  {
    id: "broadway-theater",
    name: "Teatro Broadway",
    description: "Teatro clásico con múltiples niveles y palcos",
    complexity: "complex",
    useCase: "Eventos teatrales y musicales",
    image: "/examples/broadway.png",
  },
  {
    id: "sports-arena",
    name: "Arena Deportiva",
    description: "Estadio moderno con gradas retráctiles",
    complexity: "complex",
    useCase: "Deportes y conciertos",
    image: "/examples/sports-arena.png",
  },
  {
    id: "conference-center",
    name: "Centro de Convenciones",
    description: "Múltiples salas configurables",
    complexity: "medium",
    useCase: "Conferencias y convenciones",
    image: "/examples/conference-center.png",
  },
  {
    id: "university-auditorium",
    name: "Auditorio Universitario",
    description: "Diseño académico con buena acústica",
    complexity: "medium",
    useCase: "Charlas y presentaciones",
    image: "/examples/auditorium.png",
  },
  {
    id: "small-theater",
    name: "Teatro Íntimo",
    description: "Espacio pequeño con distribución cercana",
    complexity: "simple",
    useCase: "Obras pequeñas y lecturas",
    image: "/examples/small-theater.png",
  },
  {
    id: "outdoor-stage",
    name: "Escenario al Aire Libre",
    description: "Configuración para eventos exteriores",
    complexity: "simple",
    useCase: "Festivales y eventos al aire libre",
    image: "/examples/outdoor.png",
  },
];

export const complexityFilters = [
  { id: "all", name: "Todas", color: "gray" },
  { id: "simple", name: "Simple", color: "green" },
  { id: "medium", name: "Media", color: "yellow" },
  { id: "complex", name: "Compleja", color: "red" },
];
