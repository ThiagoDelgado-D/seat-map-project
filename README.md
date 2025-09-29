# SeatMapBuilder — Fanz

Editor Visual de Mapas de Asientos

---

## 📋 Requisitos Completados (MVP)

- ✅ **Visualización de mapa**: Canvas interactivo que muestra filas y asientos
- ✅ **Creación de filas**: Soporte para crear filas individuales o múltiples simultáneamente
- ✅ **Gestión de asientos**: Agregar/eliminar asientos por fila con validación
- ✅ **Selección múltiple**: Seleccionar filas individuales o múltiples para operaciones en batch
- ✅ **Etiquetado obligatorio**: Cada fila y asiento requiere etiqueta única
- ✅ **Etiquetado rápido**: Sistema de patrones para etiquetar múltiples elementos (ej: A1-A10, Platea 1-5)
- ✅ **Exportación JSON**: Descarga del mapa con nombre personalizado
- ✅ **Importación JSON**: Carga y validación de archivos previamente exportados
- ✅ **Sesión vacía**: Funcionalidad "Nuevo mapa" que resetea el estado
- ✅ **Persistencia**: Flujo completo de importar → editar → exportar sin pérdida de datos

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── app/                    # Páginas de Next.js (routing)
│   └── home/              # Página principal del editor
├── components/            # Componentes React organizados por sección
│   ├── home/             # Componentes específicos del home
│   │   ├── cta-section/      # Call-to-actions y controles principales
│   │   ├── features-section/ # Panel de características/herramientas
│   │   ├── hero/            # Canvas del mapa de asientos
│   │   ├── logos-section/   # Información y ayuda
│   │   └── stats-section/   # Estadísticas del mapa
│   ├── shared/           # Componentes reutilizables
│   └── ui/               # Componentes base (shadcn/ui)
├── constants/            # Constantes y mocks
├── services/             # Servicios e interfaces
│   └── implementations/  # Implementaciones concretas
├── store/               # Estado global (Zustand)
└── types/               # Definiciones de TypeScript

```

### Patrón de Componentes

Cada sección sigue una estructura consistente:

```
component-section/
├── component-section.tsx         # Componente principal
├── component-section.stories.tsx # Tests visuales con Storybook
├── index.ts                     # Barrel export
└── [sub-components]/           # Componentes auxiliares si aplica
```

#### Ventajas de este patrón:

- Colocation: lógica, tests y exports juntos
- Fácil navegación y descubrimiento
- Testing visual integrado con Storybook
- Reutilización mediante barrel exports

---

## Decisiones Técnicas

### Estado Global — Zustand

**_¿Por qué Zustand sobre Context API?_**
**Razones de elección:**

- ✅ Simplicidad sobre Context API para estado complejo.
- ✅ Integración fluida con Next.js y React Server Components.
- ✅ Performance óptima (evita re-renders innecesarios).
- ✅ DevTools integradas para debugging.
- ✅ API minimalista, fácil de testear y extender.

---

### Gestión de Servicios

Los servicios siguen el **Principio de Inversión de Dependencias**:

- Se definen **interfaces agnósticas** en `/services`.
- Las implementaciones concretas viven en `/services/implementations`.

Ejemplo:

```typescript
// Interface agnóstica (contract)
export interface CryptoService {
  generateId(): string;
}

// Implementación concreta (details)
export class WebCryptoService implements CryptoService {
  generateId(): string {
    return crypto.randomUUID();
  }
}
```

---

### Testing con Storybook

Cada componente incluye su archivo .stories.tsx para:

- ✅ Verificar responsabilidades y comportamiento
- ✅ Testear diferentes estados y props
- ✅ Validar UX y flujos de interacción
- ✅ Documentación viva y actualizada
- ✅ Desarrollo aislado (sin dependencias externas)

---

### Separación de Responsabilidades

Las páginas en /app actúan como orquestadores minimalistas:

```typescript
// ❌ NO: Lógica en la página
export default function HomePage() {
  const [rows, setRows] = useState([]);
  const handleAddRow = () => {
    /* lógica compleja */
  };
  return <div>...</div>;
}

// ✅ SÍ: Orquestación limpia
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </>
  );
}
```

#### Principios:

- No contienen lógica de negocio
- Solo componen secciones y pasan props
- Delegan toda la lógica a componentes y stores

---

### Supuestos y Consideraciones

**1. Estado en Memoria**
No hay persistencia en DB/localStorage por diseño del MVP. El estado vive solo durante la sesión.
**2. IDs Únicos con Web Crypto API**
Se usa crypto.randomUUID() para garantizar unicidad sin colisiones (RFC 4122 v4).
**3. Validación de Etiquetas**
Las etiquetas deben ser únicas dentro de su scope: - Filas: únicas globalmente en el mapa - Asientos: únicos dentro de cada fila
**4. Confirmación de Borrado**
Modal de confirmación para prevenir pérdidas accidentales de datos.
**5. Importación Destructiva**
Al importar un JSON, se reemplaza completamente el estado actual (no merge).
**6. Formato JSON Cerrado**
El esquema es estricto para garantizar compatibilidad entre exportaciones/importaciones.

---

### Setup del Proyecto

#### Clonar repo

```bash
git clone https://github.com/ThiagoDelgado-D/seat-map-project
cd seat-map-project
```

#### Instalar dependencias

```bash
npm install
```

#### Levantar en dev

```bash
npm run dev
```

#### Ejecutar Storybook

```bash
npm run storybook
```
