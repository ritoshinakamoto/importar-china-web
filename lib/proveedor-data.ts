export interface LeccionProveedor {
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

export interface ModuloProveedor {
  id: number;
  nombre: string;
  descripcion: string;
}

export const modulosProveedor: ModuloProveedor[] = [
  { id: 1, nombre: "Introducción", descripcion: "Presentación del curso" },
  { id: 2, nombre: "Alibaba Básico", descripcion: "Registro y configuración inicial" },
  { id: 3, nombre: "Servicios Alibaba", descripcion: "Trade Assurance y gestión de pedidos" },
  { id: 4, nombre: "Selección de Producto", descripcion: "Cómo elegir productos rentables" },
  { id: 5, nombre: "Búsqueda de Proveedores", descripcion: "Contacto y evaluación de proveedores" },
  { id: 6, nombre: "Cultura & Negociación", descripcion: "Cultura china y cierre de negociaciones" },
  { id: 7, nombre: "Pedido & Control", descripcion: "Confirmación y control de calidad" }
];

export const leccionesProveedor: LeccionProveedor[] = [
  {
    id: "presentacion",
    numero: 1,
    titulo: "Presentación - El Proveedor Perfecto",
    descripcion: "Bienvenida al curso completo sobre cómo encontrar, evaluar y negociar con proveedores chinos en Alibaba. Aprende el proceso paso a paso desde cero.",
    duracion: "3:00",
    videoId: "_vJCjaelsDo",
    modulo: "Introducción",
    puntosClave: [
      "Objetivos del curso",
      "Metodología de trabajo",
      "Qué aprenderás al finalizar"
    ]
  },
  {
    id: "indice-contenidos",
    numero: 2,
    titulo: "Índice de Contenidos",
    descripcion: "Recorrido completo por todos los módulos del curso y estructura de aprendizaje.",
    duracion: "5:00",
    videoId: "UhbSwkK_J_E",
    modulo: "Introducción",
    puntosClave: [
      "Estructura del curso",
      "Módulos principales",
      "Plan de aprendizaje"
    ]
  },
  {
    id: "conociendo-alibaba",
    numero: 3,
    titulo: "Conociendo Alibaba",
    descripcion: "Introducción a la plataforma Alibaba.com: qué es, cómo funciona y por qué es la mejor opción para importar desde China.",
    duracion: "8:00",
    videoId: "a-M1BEUraek",
    modulo: "Alibaba Básico",
    puntosClave: [
      "Qué es Alibaba.com",
      "Diferencia vs AliExpress",
      "Ventajas B2B wholesale",
      "Tipos de proveedores"
    ]
  },
  {
    id: "alta-alibaba",
    numero: 4,
    titulo: "Alta en Alibaba",
    descripcion: "Proceso paso a paso para crear tu cuenta de comprador en Alibaba y configuración inicial necesaria.",
    duracion: "7:00",
    videoId: "vrU_Ki23uS4",
    modulo: "Alibaba Básico",
    puntosClave: [
      "Registro gratuito",
      "Verificación de cuenta",
      "Configuración básica",
      "Información de empresa"
    ]
  },
  {
    id: "my-account-alibaba",
    numero: 5,
    titulo: "My Account - Gestión de Cuenta",
    descripcion: "Configuración completa de tu cuenta Alibaba: perfil, preferencias, datos de empresa y herramientas disponibles.",
    duracion: "13:27",
    videoId: "lsWYr1xXIUI",
    modulo: "Alibaba Básico",
    puntosClave: [
      "Panel de control",
      "Configurar perfil empresa",
      "Preferencias de búsqueda",
      "Gestión de contactos"
    ],
    archivosDescarga: [
      {
        nombre: "Ficha Producto - Gafas de Sol",
        url: "/downloads/proveedor-perfecto/ficha-producto-gafas-sol.pdf",
        descripcion: "Ejemplo de ficha técnica para producto (gafas de sol)"
      },
      {
        nombre: "Ficha Producto - Slackline",
        url: "/downloads/proveedor-perfecto/ficha-producto-slackline.pdf",
        descripcion: "Ejemplo de ficha técnica para producto (slackline)"
      },
      {
        nombre: "Plantilla Lista de Productos",
        url: "/downloads/proveedor-perfecto/productos.xls",
        descripcion: "Excel para organizar tus productos y proveedores"
      }
    ]
  },
  {
    id: "trade-assurance",
    numero: 6,
    titulo: "Trade Assurance - Protección de Pago",
    descripcion: "Sistema de protección de Alibaba que garantiza tu pago y calidad del producto. Cómo usarlo y cuándo.",
    duracion: "10:00",
    videoId: "TtweQzzQpUg",
    modulo: "Servicios Alibaba",
    puntosClave: [
      "Qué es Trade Assurance",
      "Protección de pago",
      "Protección de calidad",
      "Proceso de disputa",
      "Cuándo utilizarlo"
    ]
  },
  {
    id: "manage-orders",
    numero: 7,
    titulo: "Manage Orders - Gestión de Pedidos",
    descripcion: "Cómo gestionar tus pedidos en Alibaba: tracking, comunicación con proveedores y resolución de incidencias.",
    duracion: "9:00",
    videoId: "E7z-LJ4bvWk",
    modulo: "Servicios Alibaba",
    puntosClave: [
      "Panel de pedidos",
      "Estados del pedido",
      "Tracking de envío",
      "Comunicación con proveedor",
      "Reclamaciones"
    ]
  },
  {
    id: "otros-servicios",
    numero: 8,
    titulo: "Otros Servicios de Alibaba",
    descripcion: "Servicios adicionales que ofrece Alibaba: inspección de calidad, logística, financiación y más.",
    duracion: "8:00",
    videoId: "e7G-mX90Ov0",
    modulo: "Servicios Alibaba",
    puntosClave: [
      "Inspección de calidad",
      "Logística integrada",
      "Financiación",
      "Seguro de carga"
    ]
  },
  {
    id: "recomendaciones",
    numero: 9,
    titulo: "Recomendaciones Generales",
    descripcion: "Best practices al usar Alibaba: seguridad, comunicación efectiva y errores comunes a evitar.",
    duracion: "11:00",
    videoId: "xRcgkOzAtzU",
    modulo: "Servicios Alibaba",
    puntosClave: [
      "Verificar proveedores",
      "Comunicación profesional",
      "Negociar condiciones",
      "Errores comunes",
      "Red flags a evitar"
    ]
  },
  {
    id: "productos-importar",
    numero: 10,
    titulo: "Qué Productos Importar",
    descripcion: "Criterios para seleccionar productos rentables: análisis de mercado, márgenes y viabilidad logística.",
    duracion: "12:00",
    videoId: "KYExNI_Rdbs",
    modulo: "Selección de Producto",
    puntosClave: [
      "Criterios de selección",
      "Análisis de demanda",
      "Márgenes objetivo",
      "Restricciones legales",
      "Viabilidad logística"
    ]
  },
  {
    id: "consideraciones-previas",
    numero: 11,
    titulo: "Consideraciones Previas",
    descripcion: "Factores a considerar antes de decidir qué producto importar: certificaciones, regulaciones y costes ocultos.",
    duracion: "10:00",
    videoId: "U7cv-YkHhd0",
    modulo: "Selección de Producto",
    puntosClave: [
      "Certificaciones necesarias",
      "Regulaciones por país",
      "Costes ocultos",
      "Tamaño y peso",
      "Fragilidad del producto"
    ]
  },
  {
    id: "producto-01",
    numero: 12,
    titulo: "Caso Práctico - Producto 1",
    descripcion: "Análisis completo de un producto real: desde la investigación hasta la selección de proveedor.",
    duracion: "15:00",
    videoId: "ZTY7Q-z8UpA",
    modulo: "Selección de Producto",
    puntosClave: [
      "Investigación de mercado",
      "Análisis de competencia",
      "Búsqueda en Alibaba",
      "Evaluación de viabilidad"
    ]
  },
  {
    id: "producto-02",
    numero: 13,
    titulo: "Caso Práctico - Producto 2",
    descripcion: "Segundo caso práctico con un producto diferente para ver distintos enfoques y consideraciones.",
    duracion: "14:00",
    videoId: "GH0MxWHW1e8",
    modulo: "Selección de Producto",
    puntosClave: [
      "Producto de nicho",
      "Diferenciación",
      "Análisis de proveedores",
      "Cálculo de rentabilidad"
    ]
  },
  {
    id: "producto-03",
    numero: 14,
    titulo: "Caso Práctico - Producto 3",
    descripcion: "Tercer caso práctico enfocado en productos con mayor complejidad técnica o logística.",
    duracion: "13:00",
    videoId: "ioi57MZh0B0",
    modulo: "Selección de Producto",
    puntosClave: [
      "Productos complejos",
      "Especificaciones técnicas",
      "Control de calidad crítico",
      "Riesgos específicos"
    ]
  },
  {
    id: "consideraciones-previas-busqueda",
    numero: 15,
    titulo: "Consideraciones Previas a la Búsqueda",
    descripcion: "Preparación necesaria antes de contactar proveedores: definir especificaciones, MOQ y presupuesto.",
    duracion: "9:00",
    videoId: "P_l5qzFXOrQ",
    modulo: "Búsqueda de Proveedores",
    puntosClave: [
      "Definir especificaciones",
      "MOQ realista",
      "Presupuesto total",
      "Timeline del proyecto",
      "Requisitos de personalización"
    ]
  },
  {
    id: "solicitud-informacion",
    numero: 16,
    titulo: "Solicitud de Información (RFQ)",
    descripcion: "Cómo redactar una solicitud de información profesional que obtenga respuestas de calidad de los proveedores.",
    duracion: "11:00",
    videoId: "yYjjZLSNRA4",
    modulo: "Búsqueda de Proveedores",
    puntosClave: [
      "Template de RFQ",
      "Información a solicitar",
      "Tono profesional",
      "Qué NO preguntar inicialmente",
      "Mejores horarios de contacto"
    ]
  },
  {
    id: "quien-es-buen-proveedor",
    numero: 17,
    titulo: "¿Quién es un Buen Proveedor?",
    descripcion: "Criterios para evaluar la calidad de un proveedor: certificaciones, capacidad productiva y reputación.",
    duracion: "13:00",
    videoId: "4Lx_AC8CxYc",
    modulo: "Búsqueda de Proveedores",
    puntosClave: [
      "Gold Supplier status",
      "Años en Alibaba",
      "Certificaciones (ISO, etc.)",
      "Capacidad productiva",
      "Trade Assurance activo",
      "Respuestas verificadas"
    ]
  },
  {
    id: "respuesta-proveedor",
    numero: 18,
    titulo: "Analizar Respuesta del Proveedor",
    descripcion: "Qué información buscar en las respuestas de proveedores y red flags que indican problemas futuros.",
    duracion: "10:00",
    videoId: "Au4hYrATUus",
    modulo: "Búsqueda de Proveedores",
    puntosClave: [
      "Precio FOB vs EXW",
      "Lead time realista",
      "Payment terms",
      "MOQ negociable",
      "Red flags en respuestas"
    ]
  },
  {
    id: "recopilando-informacion",
    numero: 19,
    titulo: "Recopilando la Información",
    descripcion: "Cómo organizar toda la información recibida de múltiples proveedores para facilitar la comparación.",
    duracion: "8:00",
    videoId: "FoRLIWAErW8",
    modulo: "Búsqueda de Proveedores",
    puntosClave: [
      "Hoja de comparación",
      "Criterios de evaluación",
      "Scoring system",
      "Documentación organizada"
    ]
  },
  {
    id: "solicitando-muestras",
    numero: 20,
    titulo: "Solicitando Muestras",
    descripcion: "Proceso completo para solicitar y recibir muestras: qué pedir, cómo pagar y qué evaluar al recibirlas.",
    duracion: "12:00",
    videoId: "C4OZDSSVS5I",
    modulo: "Búsqueda de Proveedores",
    puntosClave: [
      "Cuándo solicitar muestras",
      "Coste de muestras",
      "Envío express (DHL, FedEx)",
      "Qué evaluar en muestras",
      "Testing de calidad"
    ]
  },
  {
    id: "cultura-china",
    numero: 21,
    titulo: "Entender la Cultura China",
    descripcion: "Aspectos culturales que afectan las negociaciones: guanxi, concepto de tiempo y comunicación indirecta.",
    duracion: "14:00",
    videoId: "KSwbCcsNzHI",
    modulo: "Cultura & Negociación",
    puntosClave: [
      "Concepto de Guanxi (relaciones)",
      "Face (reputación)",
      "Comunicación indirecta",
      "Festividades chinas",
      "Diferencias horarias",
      "Negociación estilo chino"
    ]
  },
  {
    id: "utiliza-tu-marca-oem",
    numero: 22,
    titulo: "Utiliza Tu Marca (OEM/ODM)",
    descripcion: "Cómo trabajar con tu propia marca: diferencia entre OEM y ODM, costes adicionales y proceso de personalización.",
    duracion: "11:00",
    videoId: "PveOHYaT4IY",
    modulo: "Cultura & Negociación",
    puntosClave: [
      "OEM vs ODM",
      "Private label",
      "Diseño personalizado",
      "Propiedad intelectual",
      "Costes de moldes/tooling",
      "MOQ para customización"
    ]
  },
  {
    id: "seleccion-final-proveedor",
    numero: 23,
    titulo: "Selección Final del Proveedor",
    descripcion: "Tomar la decisión final: cómo ponderar todos los factores y elegir el proveedor más adecuado.",
    duracion: "10:00",
    videoId: "TZrhyiCiuws",
    modulo: "Cultura & Negociación",
    puntosClave: [
      "Matriz de decisión",
      "Precio vs calidad vs servicio",
      "Referencias de otros clientes",
      "Visita a fábrica (opcional)",
      "Decisión final documentada"
    ]
  },
  {
    id: "negociaciones-finales",
    numero: 24,
    titulo: "Negociaciones Finales",
    descripcion: "Estrategias de negociación para conseguir mejores condiciones: precio, MOQ, payment terms y extras.",
    duracion: "13:00",
    videoId: "--wv0GW28D4",
    modulo: "Cultura & Negociación",
    puntosClave: [
      "Negociar precio (realista)",
      "Reducir MOQ",
      "Payment terms favorables",
      "Extras incluidos",
      "Compromiso a largo plazo",
      "Win-win mindset"
    ]
  },
  {
    id: "confirmacion-pedido",
    numero: 25,
    titulo: "Confirmación del Pedido",
    descripcion: "Proceso de confirmación: PI (Proforma Invoice), pago de depósito y timeline de producción.",
    duracion: "9:00",
    videoId: "ECw9E2OUUeQ",
    modulo: "Pedido & Control",
    puntosClave: [
      "Proforma Invoice (PI)",
      "Depósito (30% típico)",
      "Confirmación especificaciones",
      "Timeline producción",
      "Hitos de pago",
      "Documentación necesaria"
    ]
  },
  {
    id: "control-calidad",
    numero: 26,
    titulo: "Control de Calidad",
    descripcion: "Inspección de calidad antes del envío: qué inspeccionar, cuándo hacerlo y cómo gestionar problemas.",
    duracion: "15:00",
    videoId: "bpciIIwOXEc",
    modulo: "Pedido & Control",
    puntosClave: [
      "Pre-shipment inspection",
      "Empresas de inspección",
      "Checklist de QC",
      "Qué hacer si hay problemas",
      "Documentación fotográfica",
      "Reporte de inspección"
    ]
  },
  {
    id: "conclusion-final",
    numero: 27,
    titulo: "Conclusión Final",
    descripcion: "Resumen del curso, siguientes pasos y recursos adicionales para continuar tu camino como importador profesional.",
    duracion: "7:00",
    videoId: "X1OTF6bz9RI",
    modulo: "Pedido & Control",
    puntosClave: [
      "Resumen del proceso completo",
      "Errores comunes a evitar",
      "Recursos recomendados",
      "Comunidad y soporte",
      "Próximos pasos",
      "Escalado del negocio"
    ]
  }
];

export function getLeccionProveedorBySlug(slug: string): LeccionProveedor | undefined {
  return leccionesProveedor.find(l => l.id === slug);
}

export function getLeccionesProveedorByModulo(modulo: string): LeccionProveedor[] {
  return leccionesProveedor.filter(l => l.modulo === modulo);
}

export function getNextLeccionProveedor(currentId: string): LeccionProveedor | null {
  const currentIndex = leccionesProveedor.findIndex(l => l.id === currentId);
  if (currentIndex === -1 || currentIndex === leccionesProveedor.length - 1) return null;
  return leccionesProveedor[currentIndex + 1];
}

export function getPrevLeccionProveedor(currentId: string): LeccionProveedor | null {
  const currentIndex = leccionesProveedor.findIndex(l => l.id === currentId);
  if (currentIndex <= 0) return null;
  return leccionesProveedor[currentIndex - 1];
}
