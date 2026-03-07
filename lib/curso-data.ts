export interface Leccion {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  videoId: string;
  modulo: string;
  puntosClave: string[];
}

export interface Modulo {
  id: number;
  nombre: string;
  descripcion: string;
}

export const modulos: Modulo[] = [
  { id: 1, nombre: "Introducción", descripcion: "Presentación del curso y casos reales" },
  { id: 2, nombre: "Conceptos Nicho", descripcion: "Fundamentos de mercados nicho" },
  { id: 3, nombre: "Identificación Personal", descripcion: "Alineación gustos-producto" },
  { id: 4, nombre: "Amazon & Plataformas", descripcion: "Adaptación a marketplaces" },
  { id: 5, nombre: "Análisis de Mercado", descripcion: "Competencia y cliente ideal" },
  { id: 6, nombre: "Rentabilidad", descripcion: "Validación económica" },
  { id: 7, nombre: "Experto & Promoción", descripcion: "Posicionamiento e influencers" },
  { id: 8, nombre: "Ejemplos Prácticos", descripcion: "Casos reales de éxito" },
  { id: 9, nombre: "Herramientas & Metodología", descripcion: "Técnicas y herramientas" }
];

export const lecciones: Leccion[] = [
  {
    id: "intro-curso",
    numero: 1,
    titulo: "Introducción al Curso El Nicho Perfecto",
    descripcion: "Aprende a encontrar productos con rentabilidades >50% mediante segmentación de mercado y localización de productos nicho basados en tus gustos y experiencia personal.",
    duracion: "2:00",
    videoId: "4mDvHnwmRdk",
    modulo: "Introducción",
    puntosClave: [
      "Encontrar oportunidades con rentabilidades >50%",
      "Segmentar mercado efectivamente",
      "Localizar productos nicho basados en gustos personales",
      "Identificar cliente ideal",
      "Conseguir influencers para asesoría y promoción",
      "Obtener financiación antes de fabricar"
    ]
  },
  {
    id: "sobre-mi",
    numero: 2,
    titulo: "Sobre Mí - Jorge Mora",
    descripcion: "Conoce la experiencia y trayectoria de Jorge Mora en importación desde China y comercio internacional.",
    duracion: "3:00",
    videoId: "4QCvD8KSkvw",
    modulo: "Introducción",
    puntosClave: [
      "Experiencia en importación desde China",
      "Trayectoria profesional",
      "Casos de éxito personales"
    ]
  },
  {
    id: "exitos-y-fracaso",
    numero: 3,
    titulo: "Mis Dos Éxitos y Un Fracaso",
    descripcion: "Casos reales de negocios exitosos y un fracaso. Aprende de la experiencia práctica lo que funciona y lo que no.",
    duracion: "5:00",
    videoId: "BESdJmIXgKE",
    modulo: "Introducción",
    puntosClave: [
      "Caso de éxito #1",
      "Caso de éxito #2",
      "Análisis del fracaso",
      "Lecciones aprendidas"
    ]
  },
  {
    id: "que-es-mercado-nicho",
    numero: 4,
    titulo: "¿Qué es un Mercado Nicho?",
    descripcion: "Definición completa de mercado nicho, sus características y por qué son fundamentales para tu estrategia de negocio.",
    duracion: "4:00",
    videoId: "LynQ3NuTOW8",
    modulo: "Conceptos Nicho",
    puntosClave: [
      "Definición de mercado nicho",
      "Características principales",
      "Diferencia vs mercado masivo",
      "Ventajas competitivas"
    ]
  },
  {
    id: "beneficios-mercados-nicho",
    numero: 5,
    titulo: "Beneficios de Localizar Mercados Nicho",
    descripcion: "Descubre las ventajas competitivas y económicas de enfocarte en mercados nicho específicos.",
    duracion: "4:30",
    videoId: "vYXcnDtQwQk",
    modulo: "Conceptos Nicho",
    puntosClave: [
      "Menor competencia",
      "Mayor margen de beneficio",
      "Clientes más leales",
      "Posicionamiento como experto"
    ]
  },
  {
    id: "importancia-gustos",
    numero: 6,
    titulo: "Por Qué Son Importantes Tus Gustos",
    descripcion: "La alineación entre tus gustos personales y tu producto es clave para el éxito y la sostenibilidad del negocio.",
    duracion: "3:30",
    videoId: "U51T2GbgZPs",
    modulo: "Identificación Personal",
    puntosClave: [
      "Pasión = persistencia",
      "Conocimiento natural del mercado",
      "Credibilidad con clientes",
      "Sostenibilidad a largo plazo"
    ]
  },
  {
    id: "cuales-son-tus-gustos",
    numero: 7,
    titulo: "Cuáles Son Tus Gustos",
    descripcion: "Ejercicio práctico para identificar tus intereses, hobbies y experiencias que pueden convertirse en oportunidades de negocio.",
    duracion: "5:00",
    videoId: "bWuJ7xYT2d8",
    modulo: "Identificación Personal",
    puntosClave: [
      "Ejercicio de introspección",
      "Identificar hobbies",
      "Analizar experiencia profesional",
      "Conectar gustos con oportunidades"
    ]
  },
  {
    id: "entendiendo-nichos",
    numero: 8,
    titulo: "Entendiendo Los Nichos",
    descripcion: "Profundización en cómo funcionan los nichos, su estructura y cómo identificar oportunidades dentro de ellos.",
    duracion: "6:00",
    videoId: "rSGp5pj-TWs",
    modulo: "Identificación Personal",
    puntosClave: [
      "Estructura de nichos",
      "Micro-nichos vs nichos",
      "Señales de oportunidad",
      "Análisis de demanda"
    ]
  },
  {
    id: "ejemplo-mercado-nicho",
    numero: 9,
    titulo: "Ejemplo de Mercado Nicho",
    descripcion: "Caso práctico completo analizando un mercado nicho real desde la identificación hasta la validación.",
    duracion: "7:00",
    videoId: "r2gNGDUK56E",
    modulo: "Identificación Personal",
    puntosClave: [
      "Identificación del nicho",
      "Análisis de tamaño",
      "Evaluación de competencia",
      "Potencial de rentabilidad"
    ]
  },
  {
    id: "amazon-mercado",
    numero: 10,
    titulo: "A la Medida del Mercado Amazon",
    descripcion: "Estrategias específicas para adaptar tu producto nicho al marketplace de Amazon FBA.",
    duracion: "8:00",
    videoId: "nyK8W6AJ1gQ",
    modulo: "Amazon & Plataformas",
    puntosClave: [
      "Amazon FBA vs FBM",
      "Requisitos de producto",
      "Optimización de listings",
      "Estrategias de ranking"
    ]
  },
  {
    id: "aliexpress-mercado",
    numero: 11,
    titulo: "A la Medida del Mercado AliExpress",
    descripcion: "Cómo usar AliExpress para sourcing de productos y validación de mercado antes de importar grandes cantidades.",
    duracion: "6:00",
    videoId: "qvk05nQ3hr8",
    modulo: "Amazon & Plataformas",
    puntosClave: [
      "Sourcing en AliExpress",
      "Validación de proveedores",
      "Muestras y testing",
      "Dropshipping vs importación"
    ]
  },
  {
    id: "competencia",
    numero: 12,
    titulo: "Análisis de Competencia",
    descripcion: "Metodología completa para analizar tu competencia y encontrar oportunidades de diferenciación.",
    duracion: "9:00",
    videoId: "n0DnAEEYr5Y",
    modulo: "Análisis de Mercado",
    puntosClave: [
      "Identificar competidores principales",
      "Análisis FODA",
      "Puntos débiles de competencia",
      "Oportunidades de diferenciación"
    ]
  },
  {
    id: "cliente-ideal",
    numero: 13,
    titulo: "Cliente Ideal",
    descripcion: "Define con precisión quién es tu cliente objetivo y qué necesidades específicas tiene.",
    duracion: "7:00",
    videoId: "GCAJ5BPQU6U",
    modulo: "Análisis de Mercado",
    puntosClave: [
      "Demografía del cliente",
      "Psicografía y motivaciones",
      "Pain points específicos",
      "Canales de comunicación"
    ]
  },
  {
    id: "buyer-persona",
    numero: 14,
    titulo: "Crear Tu Buyer Persona",
    descripcion: "Ejercicio práctico para crear un perfil detallado de tu cliente ideal que guíe todas tus decisiones de marketing.",
    duracion: "8:00",
    videoId: "cH3fWTH88U0",
    modulo: "Análisis de Mercado",
    puntosClave: [
      "Plantilla buyer persona",
      "Datos demográficos",
      "Comportamiento de compra",
      "Objeciones comunes"
    ]
  },
  {
    id: "nicho-rentable",
    numero: 15,
    titulo: "Mercado Nicho Rentable",
    descripcion: "Criterios y metodología para validar que tu nicho tiene potencial de rentabilidad real.",
    duracion: "10:00",
    videoId: "eFNDq2BYPkE",
    modulo: "Rentabilidad",
    puntosClave: [
      "Criterios de rentabilidad",
      "Tamaño mínimo de mercado",
      "Precio objetivo",
      "Margen mínimo viable"
    ]
  },
  {
    id: "ventas-potenciales",
    numero: 16,
    titulo: "Estimación de Ventas Potenciales",
    descripcion: "Herramientas y técnicas para estimar cuántas unidades puedes vender mensualmente en tu nicho.",
    duracion: "9:00",
    videoId: "9GlK71TapDc",
    modulo: "Rentabilidad",
    puntosClave: [
      "Herramientas de estimación",
      "Análisis de competencia",
      "Tendencias de búsqueda",
      "Proyecciones realistas"
    ]
  },
  {
    id: "margenes-beneficio",
    numero: 17,
    titulo: "Márgenes de Beneficio",
    descripcion: "Cálculo detallado de todos los costes y cómo alcanzar márgenes superiores al 50%.",
    duracion: "11:00",
    videoId: "VwTg6besqD8",
    modulo: "Rentabilidad",
    puntosClave: [
      "Coste de producto",
      "Envío internacional",
      "Aranceles y tasas",
      "Costes Amazon FBA",
      "Cálculo de PVP óptimo"
    ]
  },
  {
    id: "experto-nicho",
    numero: 18,
    titulo: "Ser un Experto en Tu Nicho",
    descripcion: "Estrategias para posicionarte como autoridad en tu nicho y ganar credibilidad ante clientes e influencers.",
    duracion: "8:00",
    videoId: "AkLyALvPUmo",
    modulo: "Experto & Promoción",
    puntosClave: [
      "Crear contenido de valor",
      "Participar en comunidades",
      "Personal branding",
      "Certificaciones y formación"
    ]
  },
  {
    id: "influencers",
    numero: 19,
    titulo: "Conseguir Influencers",
    descripcion: "Metodología para identificar, contactar y trabajar con influencers de tu nicho para asesoría y promoción.",
    duracion: "12:00",
    videoId: "Yg65akocO0s",
    modulo: "Experto & Promoción",
    puntosClave: [
      "Identificar influencers relevantes",
      "Estrategia de contacto",
      "Propuesta de valor",
      "Acuerdos win-win"
    ]
  },
  {
    id: "crowdfunding",
    numero: 20,
    titulo: "Financiación Pre-producción: Crowdfunding",
    descripcion: "Cómo usar plataformas de crowdfunding para validar tu producto y obtener financiación antes de fabricar.",
    duracion: "10:00",
    videoId: "7b-YH56xHFI",
    modulo: "Experto & Promoción",
    puntosClave: [
      "Plataformas: Kickstarter, Indiegogo",
      "Preparar campaña exitosa",
      "Video y contenido",
      "Pre-ventas y validación"
    ]
  },
  {
    id: "ejemplos-producto-nicho",
    numero: 21,
    titulo: "Ejemplos de Productos Nicho Exitosos",
    descripcion: "Análisis de casos reales de productos nicho que han tenido éxito y las estrategias que usaron.",
    duracion: "15:00",
    videoId: "R4YAniAi8_Y",
    modulo: "Ejemplos Prácticos",
    puntosClave: [
      "Caso 1: Análisis completo",
      "Caso 2: Análisis completo",
      "Caso 3: Análisis completo",
      "Patrones de éxito comunes"
    ]
  },
  {
    id: "caracteristicas-nicho-perfecto",
    numero: 22,
    titulo: "Características del Nicho Perfecto",
    descripcion: "Checklist completo de las características que debe cumplir tu nicho ideal para maximizar probabilidades de éxito.",
    duracion: "8:00",
    videoId: "4ro--il3Iqc",
    modulo: "Herramientas & Metodología",
    puntosClave: [
      "Checklist de validación",
      "Señales de alerta",
      "Criterios de descarte",
      "Score de viabilidad"
    ]
  },
  {
    id: "jungle-scout",
    numero: 23,
    titulo: "Jungle Scout: Herramienta de Análisis Amazon",
    descripcion: "Tutorial completo de Jungle Scout para investigar productos, competencia y estimar ventas en Amazon.",
    duracion: "14:00",
    videoId: "fMN0WcN5Qzg",
    modulo: "Herramientas & Metodología",
    puntosClave: [
      "Instalación y setup",
      "Product Database",
      "Opportunity Finder",
      "Keyword Scout",
      "Análisis de competidores"
    ]
  },
  {
    id: "brainstorming",
    numero: 24,
    titulo: "Técnicas de Brainstorming",
    descripcion: "Metodologías y ejercicios para generar ideas de productos nicho de manera sistemática y creativa.",
    duracion: "10:00",
    videoId: "Ab-7XUeRUkM",
    modulo: "Herramientas & Metodología",
    puntosClave: [
      "Mind mapping",
      "Análisis de tendencias",
      "Problemas personales",
      "Combinación de nichos"
    ]
  },
  {
    id: "bonus-final",
    numero: 25,
    titulo: "Bonus Final y Próximos Pasos",
    descripcion: "Resumen del curso, recursos adicionales y plan de acción para implementar todo lo aprendido.",
    duracion: "6:00",
    videoId: "YwOV_wHIZ9g",
    modulo: "Herramientas & Metodología",
    puntosClave: [
      "Resumen ejecutivo del curso",
      "Plantilla de análisis",
      "Recursos recomendados",
      "Plan de acción 30 días"
    ]
  }
];

export function getLeccionBySlug(slug: string): Leccion | undefined {
  return lecciones.find(l => l.id === slug);
}

export function getLeccionesByModulo(modulo: string): Leccion[] {
  return lecciones.filter(l => l.modulo === modulo);
}

export function getNextLeccion(currentId: string): Leccion | null {
  const currentIndex = lecciones.findIndex(l => l.id === currentId);
  if (currentIndex === -1 || currentIndex === lecciones.length - 1) return null;
  return lecciones[currentIndex + 1];
}

export function getPrevLeccion(currentId: string): Leccion | null {
  const currentIndex = lecciones.findIndex(l => l.id === currentId);
  if (currentIndex <= 0) return null;
  return lecciones[currentIndex - 1];
}
