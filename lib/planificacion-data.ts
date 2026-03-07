export interface Leccion {
  numero: number;
  titulo: string;
  slug: string;
  videoId: string;
  duracion: string;
  descripcion: string;
  puntosClave: string[];
}

export interface Modulo {
  titulo: string;
  lecciones: Leccion[];
}

export const modulos: Modulo[] = [
  {
    titulo: "Introducción y Fundamentos",
    lecciones: [
      {
        numero: 1,
        titulo: "Introducción al Curso",
        slug: "introduccion",
        videoId: "7CaQpo_OsPQ",
        duracion: "02:22",
        descripcion: "Bienvenida al curso de planificación financiera para importaciones de China. Aprende para qué sirve una planificación financiera, cómo analizar la viabilidad económica de tu proyecto, y qué variables necesitas controlar (gastos fijos, variables, tesorería, cash flow).",
        puntosClave: [
          "Planificación financiera vs margen: son conceptos diferentes",
          "Objetivo: analizar viabilidad económica del proyecto",
          "Identificar necesidad de financiación externa",
          "Calcular margen real (después de gastos fijos + importación)",
          "Conocer cuándo necesitas mayor tesorería",
          "Crear cuadro de mando para seguimiento diario"
        ]
      },
      {
        numero: 2,
        titulo: "Proyección de Ventas",
        slug: "proyeccion-ventas",
        videoId: "FiVBjX-69Dc",
        duracion: "11:57",
        descripcion: "Cómo crear una proyección de ventas realista en Excel desde cero. Aprende a estimar ventas mensuales, calcular IVA, y crear fórmulas que crecen exponencialmente pero de forma controlada para evitar proyecciones irreales.",
        puntosClave: [
          "Empezar con hoja en blanco (meses como columnas)",
          "Definir precios de venta sin IVA (precio con IVA / 1.21)",
          "Estimar ventas primer mes según análisis de mercado",
          "Fórmula de crecimiento: (mes_anterior + anterior) / 3",
          "Añadir IVA (21%) para cálculos de tesorería",
          "Proyección mensual vs anual (12-24 meses)"
        ]
      },
      {
        numero: 3,
        titulo: "Planificación de Compras",
        slug: "planificacion-compras",
        videoId: "rnywpiDFXTg",
        duracion: "08:15",
        descripcion: "Cómo planificar compras al proveedor considerando MOQ (pedido mínimo), términos de pago 30/70, timing de producción y envío, y variaciones de tipo de cambio USD/EUR. Aprende a calcular liquidez necesaria mes a mes.",
        puntosClave: [
          "MOQ proveedores (ejemplo: 500 unidades mínimo)",
          "Términos de pago: 30% adelanto + 70% antes envío",
          "Timeline: Mes 1 pedido → Mes 2 (30%) → Mes 3 (70%) → Mes 4 stock",
          "Precio varía mes a mes (tipo de cambio fluctúa)",
          "Calcular liquidez necesaria por mes",
          "Negociar MOQ y precios según volumen"
        ]
      }
    ]
  },
  {
    titulo: "Gastos Fijos y Cuenta de Resultados",
    lecciones: [
      {
        numero: 4,
        titulo: "Gastos Fijos",
        slug: "gastos-fijos",
        videoId: "o-qiXhN_nB8",
        duracion: "08:30",
        descripcion: "Identificar y calcular todos los gastos fijos mensuales y anuales de tu negocio de importación. Incluye alquileres, asesorías, seguros, marketing, nóminas, y cómo calcular IVA trimestral. Aprende la diferencia entre inversión y gastos fijos.",
        puntosClave: [
          "Categorías: Alquileres, asesorías, seguros, servicios bancarios, marketing, suministros, nóminas, seguridad social",
          "Cálculo de IVA trimestral (gastos fijos + compras)",
          "Inversión vs gastos: Equipos se amortizan (5 años)",
          "Liquidez: Incluir gastos fijos en cálculo de tesorería",
          "Pico de tesorería: Junio €11,099 (recomendado €12,000)",
          "Recomendación: No poner sueldo el primer mes"
        ]
      },
      {
        numero: 5,
        titulo: "Cuenta de Resultados",
        slug: "cuenta-resultados",
        videoId: "o-qiXhN_nB8",
        duracion: "12:16",
        descripcion: "Crear tu cuenta de resultados para saber qué beneficio mensual y anual generarás. Aprende la diferencia entre tesorería (cash flow) y cuenta de resultados, y por qué IVA NO es un gasto. Incluye fórmulas para obtener datos automáticamente de la hoja de tesorería.",
        puntosClave: [
          "Estructura: Ventas - Compras = Margen bruto - Gastos fijos = Resultado",
          "Ventas sin IVA (dividir entre 1.21)",
          "Compras se contabilizan cuando mercancía llega a España",
          "Incluir gastos de importación (flete, aranceles, transporte)",
          "Resultado acumulado: Ver evolución mes a mes",
          "Diferencia tesorería vs cuenta de resultados"
        ]
      }
    ]
  },
  {
    titulo: "Liquidez y Tesorería",
    lecciones: [
      {
        numero: 6,
        titulo: "Liquidez y Tesorería",
        slug: "liquidez-tesoreria",
        videoId: "o-qiXhN_nB8",
        duracion: "14:20",
        descripcion: "Calcular la liquidez y tesorería necesaria para tu proyecto de importación. Incluye gastos de importación (flete, aranceles, IVA 21%), gestión de pagos al proveedor, cálculo acumulado de liquidez, y regularización trimestral de IVA.",
        puntosClave: [
          "Gastos de importación: Flete FOB, aranceles (6.5%-12%), gastos destino, transporte",
          "IVA importación: 21% sobre todo (mercancía + flete + aranceles)",
          "Fórmula liquidez: Liquidez_anterior + Gastos_mes - Ingresos_mes_anterior",
          "Formato visual: Liquidez negativa en rojo",
          "Pico de liquidez: Junio €11,099 (recomendado €12,000)",
          "IVA se paga cuando mercancía entra a España"
        ]
      }
    ]
  },
  {
    titulo: "Gestión de Stock e Inventario",
    lecciones: [
      {
        numero: 7,
        titulo: "Gestión de Stock",
        slug: "gestion-stock",
        videoId: "o-qiXhN_nB8",
        duracion: "09:45",
        descripcion: "Sistema de control de stock e inventario para evitar quedarte sin stock o inmovilizar demasiado capital. Aprende la fórmula Stock_mes = Stock_anterior + Llegadas - Ventas, timing de pedidos al proveedor (lead time 2 meses), y ajustes por producto.",
        puntosClave: [
          "Fórmula: Stock_mes = Stock_anterior + Llegadas - Ventas",
          "Timing crítico: Pedir con 1-2 meses de antelación",
          "Lead time: 2 meses (pedido → llegada)",
          "Producto complementario se vende menos (ratio 1:3)",
          "Precio varía: Tipo de cambio USD/EUR fluctúa",
          "Equilibrio: No quedarse sin stock ni inmovilizar cash"
        ]
      }
    ]
  },
  {
    titulo: "Seguimiento y Control",
    lecciones: [
      {
        numero: 8,
        titulo: "Presupuesto vs Real",
        slug: "presupuesto-vs-real",
        videoId: "ABx-_ievdl0",
        duracion: "04:47",
        descripcion: "Cómo crear una hoja de seguimiento real para comparar con tu presupuesto. Aprende a copiar la estructura de tesorería, eliminar datos estimados, y rellenar mes a mes con datos reales. Vincular automáticamente con cuenta de resultados real.",
        puntosClave: [
          "Crear hoja 'Real' duplicando 'Presupuesto'",
          "Eliminar ventas estimadas y rellenar con reales",
          "Eliminar compras y añadir según pedidos reales",
          "Actualizar gastos fijos según facturas reales",
          "Vincular cuenta de resultados real con tesorería real",
          "Comparar presupuesto vs real mensualmente"
        ]
      },
      {
        numero: 9,
        titulo: "Conclusiones Finales",
        slug: "conclusiones-finales",
        videoId: "WlVVN_KnB5E",
        duracion: "06:27",
        descripcion: "Ajustes finales para hacer tu planificación más realista. Aprende a corregir proyecciones exponenciales irreales, negociar mejores precios con proveedores, añadir nuevos productos al catálogo, y escalar gastos fijos según crecimiento.",
        puntosClave: [
          "Evitar proyecciones exponenciales irreales (ajustar fórmulas)",
          "Ventas se estancan: Llegar a un punto de 400-600 unidades/mes",
          "Producto complementario: 20-30% del producto principal",
          "Negociar con proveedor: 1,500 unidades = mejor precio",
          "Añadir nuevos productos (no crecer infinito con uno solo)",
          "Gastos fijos varían: Marketing estacional, contratar gente"
        ]
      },
      {
        numero: 10,
        titulo: "Asiento Contable Importación",
        slug: "asiento-contable-importacion",
        videoId: "Hjw95Jy5x6g",
        duracion: "05:38",
        descripcion: "Conceptos contables básicos de importación para que puedas explicar a tu asesor cómo contabilizar correctamente. Incluye asientos del DUA, factura transitario, pagos al proveedor, diferencias de tipo de cambio, y cómo evitar duplicar gastos.",
        puntosClave: [
          "Muchas asesorías NO saben contabilizar importaciones",
          "Datos de compra mercancía se obtienen del DUA (documento verde)",
          "Factura transitario: Parte sujeta a IVA + parte no sujeta",
          "Diferencias tipo de cambio: DUA vs pago real al proveedor",
          "Evitar duplicar gastos en cuenta 6001",
          "Asiento crítico: Restar diferencia de cuenta proveedor"
        ]
      }
    ]
  }
];
