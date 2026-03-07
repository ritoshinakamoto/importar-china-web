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
    titulo: "Módulo 1: Introducción",
    lecciones: [
      {
        numero: 1,
        titulo: "Introducción al Curso de Distribución",
        slug: "introduccion-curso",
        videoId: "VKlkvlj9FVM",
        duracion: "03:01",
        descripcion: "Descubre los diferentes canales de distribución que existen para importadores desde China. Aprende por qué Amazon FBA representa solo el 5% del retail total (aunque es el 50% del e-commerce USA), y por qué es crucial tener una estrategia de distribución más amplia. Experiencia real distribuyendo a mayoristas, tiendas físicas y Amazon desde 2012.",
        puntosClave: [
          "Amazon = 50% del e-commerce USA, pero solo 5% del retail total",
          "Canales utilizados: mayoristas, tiendas físicas propias, Amazon",
          "Experiencia vendiendo en Amazon desde 2012 (pionero en España)",
          "Estrategia multi-canal: no depender solo de Amazon (perderías 95% clientes potenciales)",
          "Curso cubre todos los canales de distribución tradicionales + online"
        ]
      }
    ]
  },
  {
    titulo: "Módulo 2: Panorama General",
    lecciones: [
      {
        numero: 2,
        titulo: "Diferentes Canales de Distribución",
        slug: "diferentes-canales",
        videoId: "4NsBTJVRUks",
        duracion: "07:33",
        descripcion: "Explora los 3 canales principales que puedes usar como importador: canal tradicional (fabricante → importador → mayorista → minorista → cliente), canal corto (importador → minorista → cliente), y canal directo (importador → cliente final). Aprende cuándo usar cada uno según tu producto, capital disponible y objetivo de negocio.",
        puntosClave: [
          "Canal largo tradicional: fabricante → importador → mayorista → minorista → cliente",
          "Canal corto: importador → minorista → cliente (ideal para productos industriales)",
          "Canal directo: importador → cliente final (e-commerce, tienda propia, Amazon FBA)",
          "Canal largo = más intermediarios pero menos riesgo y capital inicial",
          "Canal directo = máximo margen pero requiere marketing y logística propia",
          "Mayoría importadores siguen canal tradicional (más estable, menos capital)"
        ]
      },
      {
        numero: 3,
        titulo: "Diferencias Entre los Diferentes Canales",
        slug: "diferencias-canales",
        videoId: "RQrMbEAD5YA",
        duracion: "07:50",
        descripcion: "Comparativa detallada entre canales de distribución: ventajas, desventajas, costos, márgenes y complejidad. Aprende cuándo tiene sentido vender a mayoristas (menos margen pero volumen alto y sin marketing), cuándo ir directo a minoristas, y cuándo montar e-commerce propio o usar Amazon FBA. Incluye análisis de márgenes reales por canal.",
        puntosClave: [
          "Canal tradicional: margen 20-30% pero volumen alto, sin marketing necesario",
          "Venta mayoristas: menos margen pero pedidos grandes, flujo cash predecible",
          "Minoristas (retail): margen 40-50%, requiere fuerza ventas y distribución",
          "E-commerce propio: margen 60-70% pero requiere inversión marketing (SEO, SEM, redes)",
          "Amazon FBA: margen 30-40% (comisiones 15-25%), logística automática",
          "Tienda física: experiencia cliente pero costes fijos altos (alquiler, empleados)",
          "Regla: a más intermediarios menos margen, a menos intermediarios más trabajo/riesgo"
        ]
      }
    ]
  },
  {
    titulo: "Módulo 3: Amazon FBA en Detalle",
    lecciones: [
      {
        numero: 4,
        titulo: "Crear una Cuenta en Amazon",
        slug: "crear-cuenta-amazon",
        videoId: "YJwaoyhTrXo",
        duracion: "03:16",
        descripcion: "Guía paso a paso para crear tu cuenta de vendedor en Amazon Seller Central. Aprende las diferencias entre cuenta Individual (0€/mes, $0.99/venta) vs Professional ($39.99/mes, 0€/venta), documentación necesaria (DNI, cuenta bancaria, tarjeta crédito), y proceso de verificación. Incluye consejos para aprobar cuenta rápidamente.",
        puntosClave: [
          "Seller Central: plataforma para gestionar ventas Amazon",
          "Cuenta Individual: gratis, $0.99 por venta (ideal <40 ventas/mes)",
          "Cuenta Professional: $39.99/mes, ventas ilimitadas (ideal >40 ventas/mes)",
          "Documentación: DNI/pasaporte, extracto bancario, tarjeta crédito válida",
          "Verificación: Amazon puede tardar 1-3 días en aprobar cuenta",
          "Importante: usar datos reales (Amazon verifica identidad vía videollamada)"
        ]
      },
      {
        numero: 5,
        titulo: "Diseñar el Packing para Amazon FBA",
        slug: "diseno-packing-fba",
        videoId: "2BaETJZ62yI",
        duracion: "03:53",
        descripcion: "Requisitos obligatorios de empaquetado para Amazon FBA: etiquetado FNSKU, especificaciones de cajas (max 25kg, 63.5cm), paletización para envíos >150 unidades, y productos prohibidos (alimentos, cosméticos sin FDA, baterías litio). Aprende a etiquetar correctamente para evitar rechazos y retrasos en recepción.",
        puntosClave: [
          "FNSKU obligatorio: etiqueta única Amazon por cada unidad",
          "Opciones etiquetado: Amazon etiqueta ($0.30/unidad) o tú etiquetas (gratis)",
          "Especificaciones caja: max 25kg, max 63.5cm cualquier lado, cartón nuevo",
          "Paletización: >150 unidades requiere pallet estándar 40x48, max 50' alto",
          "Productos prohibidos sin permisos: alimentos/bebidas, cosméticos (FDA), juguetes <3 años",
          "Importante: proveedor debe conocer requisitos FBA o usar prep center"
        ]
      },
      {
        numero: 6,
        titulo: "Enviar Mercancía de China a Amazon",
        slug: "enviar-mercancia-china-amazon",
        videoId: "we2Akyd8oRM",
        duracion: "03:40",
        descripcion: "Proceso logístico completo China → Amazon FBA: opciones de envío (marítimo 30-45 días vs aéreo 7-15 días), uso de prep centers para inspección/etiquetado, customs clearance, y recepción por Amazon (2-5 días). Aprende a elegir entre envío directo, prep center o almacén propio según tu presupuesto y nivel de control deseado.",
        puntosClave: [
          "Ruta completa: Proveedor → Envío internacional → Aduanas → Transporte local → Amazon FBA",
          "Marítimo: 30-45 días, $3-5/kg (económico, volumen alto)",
          "Aéreo: 7-15 días, $5-8/kg (rápido, volumen bajo/urgencias)",
          "Opción A: Proveedor → Amazon directo (más rápido, menos control)",
          "Opción B: Proveedor → Prep center → Amazon ($0.50-2/unidad, calidad asegurada)",
          "Opción C: Proveedor → Tu almacén → Amazon (control total, más caro)",
          "Recomendado primeros pedidos: Prep center (evita errores empaquetado)"
        ]
      },
      {
        numero: 7,
        titulo: "Amazon EU vs Amazon USA",
        slug: "amazon-eu-vs-usa",
        videoId: "hLMRx7zBCiU",
        duracion: "04:43",
        descripcion: "Comparativa completa entre vender en Amazon Estados Unidos vs Amazon Europa. Aprende sobre tamaño de mercado (300M vs 450M clientes), competencia, regulaciones (menos estrictas USA vs CE/REACH Europa), costos de envío, idiomas requeridos, y Pan-European FBA (1 stock cubre 5 países). Incluye matriz de decisión según tu producto y ubicación.",
        puntosClave: [
          "Amazon USA: 300M clientes, competencia muy alta, inglés (simple)",
          "Amazon EU: 450M clientes, competencia media-alta, 5 idiomas (complejo)",
          "Comisiones similares: 8-15% referral + $2-5 FBA fee en ambos",
          "Regulaciones USA: menos estrictas (más fácil lanzar productos)",
          "Regulaciones EU: más estrictas (CE, REACH, ROHS obligatorios)",
          "Pan-European FBA: 1 stock → Amazon distribuye a Alemania, UK, Francia, Italia, España",
          "Envío China: $3-5/kg USA, $4-6/kg Europa (similar)"
        ]
      }
    ]
  },
  {
    titulo: "Módulo 4: Cierre y Próximos Pasos",
    lecciones: [
      {
        numero: 8,
        titulo: "Conclusiones Finales",
        slug: "conclusiones-finales",
        videoId: "qWDG9tvYL6g",
        duracion: "02:11",
        descripcion: "Recapitulación de canales de distribución y recomendaciones finales. Estrategia sugerida: empezar con canal tradicional (mayoristas) para generar flujo de caja estable con bajo capital, luego diversificar a Amazon FBA o e-commerce propio cuando tengas capital y experiencia. Evita depender de un solo canal: la diversificación es clave para un negocio sostenible.",
        puntosClave: [
          "No dependas de un solo canal: diversifica para reducir riesgo",
          "Estrategia inicio: canal tradicional (mayoristas) → cash flow estable, bajo capital",
          "Segundo paso: añadir Amazon FBA (volumen moderado, logística automática)",
          "Tercer paso: e-commerce propio (margen máximo, control total)",
          "Amazon FBA es complemento, no estrategia única (solo 5% del retail)",
          "Canales tradicionales (mayoristas/minoristas) siguen siendo 95% del mercado",
          "Objetivo final: multi-canal (mayoristas + Amazon + tienda online + retail físico)"
        ]
      }
    ]
  }
];
