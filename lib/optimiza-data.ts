export interface LeccionOptimiza {
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

export interface ModuloOptimiza {
  id: number;
  nombre: string;
  descripcion: string;
}

export const modulosOptimiza: ModuloOptimiza[] = [
  { id: 1, nombre: "Introducción", descripcion: "Presentación y guía del curso" },
  { id: 2, nombre: "Incoterms & Conceptos", descripcion: "Fundamentos de comercio internacional" },
  { id: 3, nombre: "Paso 1: Precio FOB", descripcion: "Obtener cotizaciones correctas" },
  { id: 4, nombre: "Paso 2: Cubicaje", descripcion: "Calcular volumen y peso" },
  { id: 5, nombre: "Paso 3: Transporte", descripcion: "Transitarios y métodos de envío" },
  { id: 6, nombre: "Paso 4: Aranceles", descripcion: "Aduanas, aranceles e IVA" },
  { id: 7, nombre: "Paso 5: Coste Final", descripcion: "Cálculo completo del coste unitario" }
];

export const leccionesOptimiza: LeccionOptimiza[] = [
  {
    id: "presentacion",
    numero: 1,
    titulo: "Presentación del Curso",
    descripcion: "Bienvenida al curso completo de optimización de compras en China. Aprende a calcular el coste real de tus importaciones y optimizar cada paso del proceso.",
    duracion: "4:00",
    videoId: "DVFd6d89wtA",
    modulo: "Introducción",
    puntosClave: [
      "Objetivos del curso",
      "Metodología paso a paso",
      "Herramientas que aprenderás"
    ]
  },
  {
    id: "indice",
    numero: 2,
    titulo: "Índice del Curso",
    descripcion: "Recorrido completo por todos los módulos: desde Incoterms hasta el cálculo final del coste unitario.",
    duracion: "5:00",
    videoId: "tjUiI7YqR4U",
    modulo: "Introducción",
    puntosClave: [
      "Estructura del curso",
      "5 pasos principales",
      "Casos prácticos incluidos"
    ]
  },
  {
    id: "como-seguir",
    numero: 3,
    titulo: "Cómo Seguir el Curso",
    descripcion: "Recomendaciones para aprovechar al máximo el curso: orden de lecciones, ejercicios y recursos.",
    duracion: "3:00",
    videoId: "DAyOFVFxx1Y",
    modulo: "Introducción",
    puntosClave: [
      "Orden recomendado",
      "Materiales necesarios",
      "Ejercicios prácticos"
    ]
  },
  {
    id: "incoterms-explicacion",
    numero: 4,
    titulo: "Explicación de los Incoterms",
    descripcion: "Introducción completa a los Incoterms: qué son, para qué sirven y por qué son fundamentales en importación.",
    duracion: "12:00",
    videoId: "hWk1qz6jP4k",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "Qué son los Incoterms",
      "Responsabilidades vendedor/comprador",
      "Versión Incoterms 2020",
      "Importancia en costes"
    ]
  },
  {
    id: "dap-vs-ddp",
    numero: 5,
    titulo: "DAP vs DDP",
    descripcion: "Diferencias entre DAP (Delivered at Place) y DDP (Delivered Duty Paid): cuándo usar cada uno.",
    duracion: "8:00",
    videoId: "78K_esdeYLs",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "DAP: hasta dirección (sin aduanas)",
      "DDP: todo incluido",
      "Ventajas e inconvenientes",
      "Cuándo usar cada uno"
    ]
  },
  {
    id: "fob-vs-cif",
    numero: 6,
    titulo: "FOB vs CIF",
    descripcion: "Diferencias entre FOB (Free on Board) y CIF (Cost, Insurance & Freight): el más importante para importadores.",
    duracion: "10:00",
    videoId: "TPmKz_OoubQ",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "FOB: hasta puerto origen",
      "CIF: incluye flete + seguro",
      "Por qué FOB es mejor",
      "Transparencia de costes"
    ]
  },
  {
    id: "proceso-importacion",
    numero: 7,
    titulo: "Proceso de Importación Completo",
    descripcion: "Flujo completo desde el pedido en China hasta la recepción en tu almacén: todos los pasos y actores involucrados.",
    duracion: "15:00",
    videoId: "UIIrhvfz67U",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "Pedido a proveedor",
      "Producción y QC",
      "Carga y transporte",
      "Aduana destino",
      "Entrega final"
    ]
  },
  {
    id: "formas-pago",
    numero: 8,
    titulo: "Formas de Pago a Proveedores",
    descripcion: "Métodos de pago más comunes: T/T, L/C, Western Union, Alipay. Ventajas, costes y riesgos de cada uno.",
    duracion: "11:00",
    videoId: "f37VNr61G6g",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "T/T (transferencia bancaria)",
      "L/C (carta de crédito)",
      "Trade Assurance",
      "Western Union / Alipay",
      "Costes de comisiones"
    ]
  },
  {
    id: "seguros-transporte",
    numero: 9,
    titulo: "Seguros de Transporte",
    descripcion: "Tipos de seguros para mercancía: cuándo son obligatorios, qué cubren y cómo contratarlos.",
    duracion: "9:00",
    videoId: "OONDqOHsYQA",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "Seguro obligatorio vs opcional",
      "CoberturaAll Risks",
      "Coste típico (0.3-0.5%)",
      "Cómo reclamar siniestros"
    ]
  },
  {
    id: "4-incoterms-principales",
    numero: 10,
    titulo: "Los 4 Incoterms Más Utilizados",
    descripcion: "Análisis detallado de FOB, CIF, DAP y DDP: los 4 Incoterms que cubren el 95% de las importaciones.",
    duracion: "13:00",
    videoId: "AIxm2MGVfMs",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "FOB (recomendado)",
      "CIF (cuidado con sobrecostes)",
      "DAP (conveniente pero caro)",
      "DDP (máxima comodidad, máximo precio)"
    ]
  },
  {
    id: "problemas-cif",
    numero: 11,
    titulo: "Los Problemas de Trabajar CIF",
    descripcion: "Por qué CIF puede costarte mucho más dinero: sobrecostes ocultos y falta de control del transitario.",
    duracion: "10:00",
    videoId: "GJaC1IYVkIA",
    modulo: "Incoterms & Conceptos",
    puntosClave: [
      "Proveedor elige transitario",
      "Sobrecostes de flete (+30-50%)",
      "Falta de control",
      "Siempre pedir FOB primero"
    ]
  },
  {
    id: "obtener-precio-fob",
    numero: 12,
    titulo: "Paso 1: Obtener el Precio FOB",
    descripcion: "Cómo solicitar correctamente cotizaciones FOB a tus proveedores y qué información debe incluir.",
    duracion: "8:00",
    videoId: "cMGI-X4Xfh4",
    modulo: "Paso 1: Precio FOB",
    puntosClave: [
      "Solicitar siempre FOB puerto China",
      "Especificar puerto destino",
      "Solicitar desglose de costes",
      "Comparar múltiples proveedores"
    ],
    archivosDescarga: [
      {
        nombre: "Plantillas de Email para Proveedores",
        url: "/downloads/optimiza-compras/plantillas-email-proveedores.pdf",
        descripcion: "Plantillas listas para solicitar información, MOQ, precios FOB y condiciones de pago"
      }
    ]
  },
  {
    id: "calculo-volumen",
    numero: 13,
    titulo: "Paso 2: Cálculo del Volumen",
    descripcion: "Cómo calcular el cubicaje (volumen), peso volumétrico y cuántas unidades caben en un contenedor.",
    duracion: "12:00",
    videoId: "kUhuqDimWeA",
    modulo: "Paso 2: Cubicaje",
    puntosClave: [
      "Medidas de caja (largo × ancho × alto)",
      "Peso real vs peso volumétrico",
      "Unidades por contenedor 20'/40'",
      "Factor de estiba",
      "Calculadora online"
    ],
    archivosDescarga: [
      {
        nombre: "Plantillas de Cálculo de Cubicaje",
        url: "/downloads/optimiza-compras/plantillas-cubicaje.tar.gz",
        descripcion: "Excel de cálculo, medidas de contenedores y ejemplos de hojas de producto"
      }
    ]
  },
  {
    id: "transitarios",
    numero: 14,
    titulo: "Paso 3.1: Los Transitarios",
    descripcion: "Qué hacen los transitarios (freight forwarders), cómo elegir uno bueno y qué servicios ofrecen.",
    duracion: "10:00",
    videoId: "0Kvr_y5jOLg",
    modulo: "Paso 3: Transporte",
    puntosClave: [
      "Qué es un transitario",
      "Servicios que ofrecen",
      "Cómo elegir uno confiable",
      "Diferencia con agente de aduanas"
    ],
    archivosDescarga: [
      {
        nombre: "Plantillas de Cálculo de Transporte",
        url: "/downloads/optimiza-compras/plantillas-transitarios.tar.gz",
        descripcion: "Excel de cálculo y ejemplos reales de ofertas de transitarios (aéreo, marítimo, grupaje)"
      }
    ]
  },
  {
    id: "aereo",
    numero: 15,
    titulo: "Paso 3.2: Transporte Aéreo",
    descripcion: "Cuándo usar transporte aéreo: ventajas, desventajas, costes y tiempos de tránsito.",
    duracion: "9:00",
    videoId: "dKQ9n7NEQlA",
    modulo: "Paso 3: Transporte",
    puntosClave: [
      "Velocidad: 7-15 días",
      "Coste: $3-5/kg",
      "Ideal para urgencias",
      "Límites de peso/volumen",
      "Restricciones de mercancías"
    ]
  },
  {
    id: "grupaje",
    numero: 16,
    titulo: "Paso 3.3: Grupaje (LCL)",
    descripcion: "Grupaje marítimo (Less than Container Load): cómo funciona, costes y cuándo es la mejor opción.",
    duracion: "11:00",
    videoId: "6dIYnk_BUhg",
    modulo: "Paso 3: Transporte",
    puntosClave: [
      "Qué es LCL",
      "Precio por m³ o kg",
      "Tiempo: 30-45 días",
      "Ideal para 1-15 m³",
      "Consolidación en origen"
    ]
  },
  {
    id: "maritimo",
    numero: 17,
    titulo: "Paso 3.4: Marítimo FCL",
    descripcion: "Contenedor completo (Full Container Load): tipos de contenedores, costes y cuándo compensa.",
    duracion: "13:00",
    videoId: "vitObTxN4aI",
    modulo: "Paso 3: Transporte",
    puntosClave: [
      "Contenedor 20' (33m³)",
      "Contenedor 40' (67m³)",
      "Contenedor 40' HC (76m³)",
      "Coste fijo por contenedor",
      "Cuándo compensa vs LCL"
    ]
  },
  {
    id: "courier",
    numero: 18,
    titulo: "Paso 3.5: Courier Express",
    descripcion: "Envíos express (DHL, FedEx, UPS): para muestras y pedidos pequeños urgentes.",
    duracion: "7:00",
    videoId: "bnl11kAcBGA",
    modulo: "Paso 3: Transporte",
    puntosClave: [
      "Velocidad: 3-7 días",
      "Coste: $5-8/kg",
      "Incluye aduanas",
      "Límite: ~300kg",
      "Ideal para muestras"
    ],
    archivosDescarga: [
      {
        nombre: "Plantillas Courier Express",
        url: "/downloads/optimiza-compras/plantillas-courier.tar.gz",
        descripcion: "Factura para envíos sin valor comercial y tarifas de courier desde China"
      }
    ]
  },
  {
    id: "transitarios-online",
    numero: 19,
    titulo: "Paso 3.6: Transitarios Online",
    descripcion: "Plataformas online para cotizar transporte: Freightos, Flexport, Shapiro y otras.",
    duracion: "8:00",
    videoId: "OJ2GnLI-Ic0",
    modulo: "Paso 3: Transporte",
    puntosClave: [
      "Freightos (comparador)",
      "Flexport (todo incluido)",
      "Shippo / Easyship",
      "Ventajas e inconvenientes",
      "Comparar 3+ cotizaciones"
    ]
  },
  {
    id: "partida-arancelaria",
    numero: 20,
    titulo: "Paso 4.1: Partida Arancelaria",
    descripcion: "Cómo encontrar el código HS/TARIC de tu producto: fundamental para calcular aranceles.",
    duracion: "14:00",
    videoId: "LgNHzkV8wI0",
    modulo: "Paso 4: Aranceles",
    puntosClave: [
      "Sistema armonizado (HS)",
      "Código TARIC (UE)",
      "10 dígitos en España",
      "Cómo buscar tu código",
      "Verificar con aduana"
    ]
  },
  {
    id: "access2markets",
    numero: 21,
    titulo: "Paso 4.2: Access2Markets",
    descripcion: "Herramienta oficial de la Unión Europea para consultar aranceles, restricciones y normativas.",
    duracion: "10:00",
    videoId: "xtoLBAeiQio",
    modulo: "Paso 4: Aranceles",
    puntosClave: [
      "Web oficial UE",
      "Consulta de aranceles",
      "Restricciones",
      "Normativa específica",
      "Acuerdos comerciales"
    ]
  },
  {
    id: "simply-duty",
    numero: 22,
    titulo: "Paso 4.3: SimplyDuty",
    descripcion: "Calculadora de aranceles e impuestos: herramienta rápida para estimar costes aduaneros.",
    duracion: "6:00",
    videoId: "73I4DQjhF7E",
    modulo: "Paso 4: Aranceles",
    puntosClave: [
      "Calculadora online",
      "País origen y destino",
      "Estimación aranceles + IVA",
      "Solo orientativa"
    ]
  },
  {
    id: "iva",
    numero: 23,
    titulo: "Paso 4.4: IVA en Importaciones",
    descripcion: "Cómo se aplica el IVA en importaciones: base imponible, tipos y cuándo se paga.",
    duracion: "9:00",
    videoId: "C47znE7TJDk",
    modulo: "Paso 4: Aranceles",
    puntosClave: [
      "Base imponible (CIF + aranceles)",
      "21% IVA general (España)",
      "Pagadero en aduana",
      "Deducible si eres empresa"
    ]
  },
  {
    id: "sancion-aduana",
    numero: 24,
    titulo: "Paso 4.5: Sanciones Aduaneras",
    descripcion: "Qué puede salir mal en aduana: infracciones comunes y cómo evitar sanciones.",
    duracion: "11:00",
    videoId: "m2pZIEdLcjE",
    modulo: "Paso 4: Aranceles",
    puntosClave: [
      "Declaración incorrecta de valor",
      "Código arancelario erróneo",
      "Documentación incompleta",
      "Productos restringidos",
      "Multas y recargos"
    ]
  },
  {
    id: "inspeccion-hacienda",
    numero: 25,
    titulo: "Paso 4.6: Inspección de Hacienda",
    descripcion: "Cómo funcionan las inspecciones aduaneras: qué revisan, criterios de selección y cómo prepararte.",
    duracion: "8:00",
    videoId: "Ua16152zcjo",
    modulo: "Paso 4: Aranceles",
    puntosClave: [
      "Inspección aleatoria o dirigida",
      "Verificación de mercancía",
      "Documentación requerida",
      "Tiempos de espera",
      "Costes adicionales"
    ]
  },
  {
    id: "calculo-coste-unitario",
    numero: 26,
    titulo: "Paso 5.1: Cálculo del Coste Unitario",
    descripcion: "Fórmula completa para calcular el coste real de cada unidad importada: todos los componentes.",
    duracion: "12:00",
    videoId: "DF8kGvsk_HM",
    modulo: "Paso 5: Coste Final",
    puntosClave: [
      "Precio FOB",
      "+ Flete internacional",
      "+ Seguro",
      "+ Aranceles",
      "+ IVA",
      "+ Gastos locales",
      "= Coste unitario landed"
    ]
  },
  {
    id: "ejemplos-practicos",
    numero: 27,
    titulo: "Paso 5.2: Ejemplos Prácticos",
    descripcion: "Casos prácticos completos: cálculo real del coste de importación con diferentes escenarios.",
    duracion: "18:00",
    videoId: "-YhmwDqu5M8",
    modulo: "Paso 5: Coste Final",
    puntosClave: [
      "Ejemplo 1: Envío courier pequeño",
      "Ejemplo 2: Grupaje LCL",
      "Ejemplo 3: Contenedor FCL",
      "Comparativa de costes",
      "Punto de equilibrio FCL vs LCL"
    ]
  }
];

export function getLeccionOptimizaBySlug(slug: string): LeccionOptimiza | undefined {
  return leccionesOptimiza.find(l => l.id === slug);
}

export function getLeccionesOptimizaByModulo(modulo: string): LeccionOptimiza[] {
  return leccionesOptimiza.filter(l => l.modulo === modulo);
}

export function getNextLeccionOptimiza(currentId: string): LeccionOptimiza | null {
  const currentIndex = leccionesOptimiza.findIndex(l => l.id === currentId);
  if (currentIndex === -1 || currentIndex === leccionesOptimiza.length - 1) return null;
  return leccionesOptimiza[currentIndex + 1];
}

export function getPrevLeccionOptimiza(currentId: string): LeccionOptimiza | null {
  const currentIndex = leccionesOptimiza.findIndex(l => l.id === currentId);
  if (currentIndex <= 0) return null;
  return leccionesOptimiza[currentIndex - 1];
}
