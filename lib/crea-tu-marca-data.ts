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
    titulo: "Fundamentos de Marca",
    lecciones: [
      {
        numero: 1,
        titulo: "Introducción al Curso",
        slug: "introduccion-al-curso",
        videoId: "4ABMhUbkAGw",
        duracion: "04:40",
        descripcion: "Bienvenido al curso de imagen corporativa. Aprenderás a crear una marca memorable desde cero, basándote en la experiencia real de crear múltiples marcas exitosas. No hace falta ser publicista, solo entender los fundamentos y aplicarlos con creatividad.",
        puntosClave: [
          "La importancia de tener una marca que te diferencie",
          "Experiencia creando marcas como Pixemia, Yimatai, Vivelof, New Lifestyle",
          "Logos diseñados personalmente vs estudios profesionales",
          "Errores comunes y lecciones aprendidas",
          "Herramientas modernas para crear marcas sin grandes presupuestos"
        ]
      },
      {
        numero: 2,
        titulo: "Desarrollo de Marca",
        slug: "desarrollo-de-marca",
        videoId: "-WokKlJeaEA",
        duracion: "05:08",
        descripcion: "El desarrollo de ideas para tu marca requiere creatividad, tuya o de alguien que trabaje contigo. Aprende las características básicas que debe tener un buen nombre de marca: brevedad, fácil pronunciación, memorable y registrable.",
        puntosClave: [
          "Brevedad: nombres cortos como Nike, IKEA funcionan mejor",
          "Fácil lectura y pronunciación para tu mercado objetivo",
          "Que resulte agradable al oído y sin connotaciones negativas",
          "Fácil de recordar y memorizar",
          "Asociación con el producto o servicio (ejemplo: Marmota para colchones)",
          "Verificar que sea registrable antes de producir"
        ]
      },
      {
        numero: 3,
        titulo: "Registro de Marca",
        slug: "registro-de-marca",
        videoId: "m9NPGGeDpc8",
        duracion: "06:29",
        descripcion: "Registrar tu marca es fundamental antes de comenzar la producción. Evita problemas futuros registrando tan pronto tengas claro el nombre. El registro protege tu inversión y te da tranquilidad para estampar logos en productos.",
        puntosClave: [
          "Registra ANTES de producir para evitar problemas legales",
          "Ámbito local: oficina de patentes de tu país (~200€)",
          "Ámbito europeo: OMPI para toda Europa",
          "Protección de 10 años renovables",
          "Empresas especializadas facilitan el proceso",
          "No copies marcas conocidas, Google penaliza"
        ]
      }
    ]
  },
  {
    titulo: "Diseño e Identidad Visual",
    lecciones: [
      {
        numero: 4,
        titulo: "Diseña Tu Logo",
        slug: "disena-tu-logo",
        videoId: "YbDNg-kDyZY",
        duracion: "08:57",
        descripcion: "Desde contratar estudios creativos (más caro) hasta diseñar tu propio logo con herramientas online (más económico). Conoce las opciones reales según tu presupuesto y nivel de experiencia en diseño.",
        puntosClave: [
          "Estudio creativo: 500-880€ (naming + logo + imagen web)",
          "Design Crowd: concurso con diseñadores globales, 25-200 propuestas",
          "Herramientas online: BrandCrowd, LogoGenie (más económico)",
          "Amigo/vecino/cuñado diseñador puede ser opción",
          "Logos estandarizados vs creatividad profesional",
          "Muchas marcas famosas empezaron con logos caseros"
        ]
      },
      {
        numero: 5,
        titulo: "Registro de Dominio",
        slug: "registro-dominio",
        videoId: "g0-CBrW1oPo",
        duracion: "04:50",
        descripcion: "El dominio es tan importante como la marca. Por solo 10€/año puedes asegurar tu presencia online. Registra tan pronto tengas el nombre claro, especialmente el .com que es el más prestigioso.",
        puntosClave: [
          "Prioriza .com (más prestigio y mejor posicionamiento)",
          "Cuesta 8-10€/año, no esperes a registrar",
          "Verifica disponibilidad con Namecheap u otros registrars",
          "Registra también .es (España) o dominio de tu país objetivo",
          "Si dominio .com ocupado, verifica que no sea competencia directa",
          "Dominios locales (.pe, .co, .ar) posicionan mejor en cada país"
        ]
      },
      {
        numero: 6,
        titulo: "Diseño Gráfico",
        slug: "diseno-grafico",
        videoId: "9YwxnALPS_o",
        duracion: "04:17",
        descripcion: "El diseño gráfico debe estar orientado a la venta. Tarjetas de visita son útiles, pero sobres y papelería corporativa son excesivos al comenzar. Enfócate en materiales que generen ventas: flyers, catálogos, imágenes para redes.",
        puntosClave: [
          "Prioriza diseño orientado a venta (flyers, catálogos)",
          "Tarjetas de visita útiles, papelería corporativa no urgente",
          "Imagen corporativa debe ser consistente (logo mismo formato)",
          "Impresión online más cómoda que imprentas locales",
          "Moo.com (Europa/USA), opciones locales en cada país",
          "Flyers funcionan bien para productos B2C (colegios, eventos)"
        ]
      },
      {
        numero: 7,
        titulo: "Diseño Web",
        slug: "diseno-web",
        videoId: "wb43qWS6YoQ",
        duracion: "06:37",
        descripcion: "Crear una página web es más sencillo de lo que parece. En menos de una hora puedes tener dominio registrado, hosting y web funcionando con WordPress y plantillas profesionales. No necesitas ser programador.",
        puntosClave: [
          "WordPress: gestor de contenidos más usado, gratuito y potente",
          "Hosting optimizado para WordPress con SSL (seguridad)",
          "Soporte 24/7 imprescindible",
          "Plantillas responsive (se ven bien en móviles)",
          "En 1 hora puedes tener web lista con plantilla",
          "Validar producto antes de fabricar: landing page + Analytics",
          "Plugins básicos: seguridad, e-commerce (WooCommerce), pagos"
        ]
      }
    ]
  }
];

export const objetivosCurso = [
  "Crear una marca memorable y diferenciada desde cero",
  "Diseñar o encargar un logo profesional según tu presupuesto",
  "Registrar tu marca legalmente para proteger tu inversión",
  "Registrar el dominio perfecto (.com) antes que te lo quiten",
  "Desarrollar identidad visual consistente (colores, tipografía)",
  "Crear materiales gráficos orientados a la venta",
  "Lanzar tu página web profesional con WordPress sin programar",
  "Evitar errores costosos aprendiendo de experiencia real"
];

export const descripcionCurso = `
Aprende a crear una marca profesional desde cero, basándote en experiencia real de haber creado más de 10 marcas exitosas en importación de China. 

Este curso no es teoría publicitaria, es **experiencia práctica**: desde el naming hasta el registro legal, pasando por diseño de logo, identidad visual y lanzamiento web.

**Sin ser publicista, sin grandes presupuestos, solo con creatividad y las herramientas correctas.**

Ideal si vas a importar de China y necesitas una marca propia (private label) que te diferencie, aumente tus márgenes y construya valor a largo plazo.
`;
