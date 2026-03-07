export interface LeccionMetricas {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  videoId: string;
  modulo: string;
  puntosClave: string[];
  archivosDescarga?: { nombre: string; url: string; descripcion: string }[];
}

export interface ModuloMetricas {
  id: number;
  nombre: string;
  descripcion: string;
}

export const modulosMetricas: ModuloMetricas[] = [
  { id: 1, nombre: "Introducción", descripcion: "Presentación y cuadro de mando" },
  { id: 2, nombre: "Métricas Financieras", descripcion: "ROI, márgenes y cash flow" },
  { id: 3, nombre: "Productividad", descripcion: "Gestión del tiempo y eficiencia" },
  { id: 4, nombre: "Embudo de Ventas", descripcion: "Conversión, CAC y LTV" },
  { id: 5, nombre: "Redes Sociales", descripcion: "Engagement y marketing digital" },
  { id: 6, nombre: "Publicidad", descripcion: "CPC, CPM y ROAS" },
  { id: 7, nombre: "Negocios Offline", descripcion: "Tráfico y ticket medio" },
  { id: 8, nombre: "Métricas Web", descripcion: "Google Analytics y tráfico web" }
];

export const leccionesMetricas: LeccionMetricas[] = [
  {
    id: "presentacion",
    numero: 1,
    titulo: "Presentación del Curso de Métricas",
    descripcion: "Bienvenida al curso de métricas de negocio para importadores. Aprende a medir, analizar y optimizar cada aspecto de tu negocio de importación desde China.",
    duracion: "5:00",
    videoId: "9LRnAIK7ZI8",
    modulo: "Introducción",
    puntosClave: [
      "Importancia de medir tu negocio",
      "Qué métricas aprenderás",
      "Cómo aplicarlas a importación",
      "Estructura del curso"
    ]
  },
  {
    id: "cuadro-mando",
    numero: 2,
    titulo: "Entendiendo el Cuadro de Mando",
    descripcion: "Cómo crear y usar un dashboard de métricas para tener visibilidad completa de tu negocio en tiempo real.",
    duracion: "12:00",
    videoId: "RGfe7pMrd4k",
    modulo: "Introducción",
    puntosClave: [
      "Qué es un cuadro de mando",
      "Métricas esenciales a incluir",
      "Herramientas (Excel, Google Sheets)",
      "Frecuencia de actualización",
      "Plantilla descargable incluida"
    ],
    archivosDescarga: [
      {
        nombre: "Plantilla Cuadro de Mando - Métricas.xls",
        url: "/downloads/metricas-negocio/metricas.xls",
        descripcion: "Excel con todas las métricas del curso y fórmulas pre-configuradas"
      }
    ]
  },
  {
    id: "metricas-financieras",
    numero: 3,
    titulo: "Métricas Financieras",
    descripcion: "Las métricas más importantes para la salud financiera de tu negocio: margen bruto, margen neto, ROI y cash flow.",
    duracion: "15:00",
    videoId: "YrTcc0uAxUg",
    modulo: "Métricas Financieras",
    puntosClave: [
      "Margen Bruto (>50% objetivo)",
      "Margen Neto (>20% objetivo)",
      "ROI (Return on Investment)",
      "Cash Flow mensual",
      "Punto de equilibrio",
      "Cómo mejorar cada métrica"
    ]
  },
  {
    id: "metricas-productividad",
    numero: 4,
    titulo: "Métricas de Productividad",
    descripcion: "Cómo medir y optimizar tu productividad y la de tu equipo: tiempo facturado, valor por hora y eficiencia operativa.",
    duracion: "11:00",
    videoId: "fdy_nEJyGOY",
    modulo: "Productividad",
    puntosClave: [
      "Tiempo productivo vs desperdiciado",
      "Valor por hora trabajada",
      "Tareas completadas / día",
      "Lead time (pedido → entrega)",
      "Rotación de inventario",
      "Herramientas de tracking"
    ]
  },
  {
    id: "embudo-ventas",
    numero: 5,
    titulo: "Métricas del Embudo de Ventas",
    descripcion: "Análisis completo del embudo de conversión: desde visitantes hasta clientes recurrentes. CAC, LTV y optimización.",
    duracion: "18:00",
    videoId: "Jd_AcgFKT2s",
    modulo: "Embudo de Ventas",
    puntosClave: [
      "Tasa de conversión (2-5% benchmark)",
      "CAC (Coste Adquisición Cliente)",
      "LTV (Lifetime Value)",
      "Ratio LTV:CAC (objetivo >3:1)",
      "Tasa de abandono carrito",
      "Velocidad de ventas",
      "Optimización del embudo"
    ]
  },
  {
    id: "redes-sociales-marketing",
    numero: 6,
    titulo: "Métricas de Redes Sociales y Marketing",
    descripcion: "Cómo medir el impacto de tu presencia en redes sociales: engagement, alcance, CTR y métricas de contenido.",
    duracion: "13:00",
    videoId: "S6x_1b1JYPo",
    modulo: "Redes Sociales",
    puntosClave: [
      "Engagement Rate (>3% objetivo)",
      "Alcance orgánico vs pagado",
      "Crecimiento de seguidores",
      "CTR (Click-Through Rate)",
      "Menciones y shares",
      "Métricas por plataforma",
      "Herramientas analytics"
    ]
  },
  {
    id: "metricas-publicidad",
    numero: 7,
    titulo: "Métricas de Publicidad Online",
    descripcion: "Métricas clave para publicidad digital: CPC, CPM, ROAS y cómo optimizar tus campañas de Google Ads y Facebook Ads.",
    duracion: "16:00",
    videoId: "6L_5G4Npd6U",
    modulo: "Publicidad",
    puntosClave: [
      "CPC (Coste Por Clic)",
      "CPM (Coste Por Mil Impresiones)",
      "CTR de anuncios",
      "ROAS (Return on Ad Spend)",
      "Quality Score (Google)",
      "Relevance Score (Facebook)",
      "Optimización de campañas",
      "A/B testing"
    ]
  },
  {
    id: "negocios-offline",
    numero: 8,
    titulo: "Métricas para Negocios Offline",
    descripcion: "Métricas específicas si vendes en tienda física: tráfico, tasa de conversión en tienda, ticket medio y rotación.",
    duracion: "10:00",
    videoId: "v_3YZFRibQQ",
    modulo: "Negocios Offline",
    puntosClave: [
      "Tráfico de tienda (peatones, entradas)",
      "Tasa conversión en tienda",
      "Ticket medio",
      "Ventas por m²",
      "Rotación de stock",
      "Horarios pico",
      "Cross-selling ratio",
      "Combinar online + offline"
    ]
  },
  {
    id: "metricas-trafico-web",
    numero: 9,
    titulo: "Métricas de Tráfico Web",
    descripcion: "Aprende a usar Google Analytics para medir y optimizar el tráfico de tu tienda online: sesiones, visitantes únicos, tasa de rebote y fuentes de tráfico.",
    duracion: "8:25",
    videoId: "8iOKstesksw",
    modulo: "Métricas Web",
    puntosClave: [
      "Configurar Google Analytics (plugin)",
      "Sesiones vs Visitantes únicos",
      "Páginas vistas totales",
      "Tasa de rebote (objetivo: reducir)",
      "Suscriptores newsletter (conversión)",
      "Fuentes de tráfico: orgánico, directo, referencia, redes sociales, email",
      "Páginas más visitadas",
      "Tomar decisiones estratégicas basadas en datos"
    ]
  }
];

export function getLeccionMetricasBySlug(slug: string): LeccionMetricas | undefined {
  return leccionesMetricas.find(l => l.id === slug);
}

export function getLeccionesMetricasByModulo(modulo: string): LeccionMetricas[] {
  return leccionesMetricas.filter(l => l.modulo === modulo);
}

export function getNextLeccionMetricas(currentId: string): LeccionMetricas | null {
  const currentIndex = leccionesMetricas.findIndex(l => l.id === currentId);
  if (currentIndex === -1 || currentIndex === leccionesMetricas.length - 1) return null;
  return leccionesMetricas[currentIndex + 1];
}

export function getPrevLeccionMetricas(currentId: string): LeccionMetricas | null {
  const currentIndex = leccionesMetricas.findIndex(l => l.id === currentId);
  if (currentIndex <= 0) return null;
  return leccionesMetricas[currentIndex - 1];
}
