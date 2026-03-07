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
    titulo: "Módulo 1: Fundamentos Legales",
    lecciones: [
      {
        numero: 1,
        titulo: "Introducción al Bonus de Legaliza Tu Empresa",
        slug: "introduccion-bonus",
        videoId: "QGME1YJc_5M",
        duracion: "05:10",
        descripcion: "Descubre por qué necesitas legalizar tu negocio de importación desde el primer día. Aprende las limitaciones de importar como persona física, las consecuencias de operar sin empresa (multas, destrucción de mercancía), y conoce las alternativas temporales mientras constituyes. Explora opciones internacionales: Europa (e-Residency) y Estados Unidos (Stripe Atlas), todo de forma remota.",
        puntosClave: [
          "Uso personal vs actividad comercial: límite 1 unidad por producto",
          "Consecuencias de importar sin empresa: multas y destrucción de mercancía",
          "Transporte marítimo requiere empresa obligatoriamente",
          "Alternativa temporal: usar empresa familiar/conocido (cuidado con epígrafe)",
          "Opciones remotas: constituir en Europa o USA 100% online sin desplazarse"
        ]
      }
    ]
  },
  {
    titulo: "Módulo 2: Opciones de Constitución",
    lecciones: [
      {
        numero: 2,
        titulo: "Crear una Empresa en Tu Propio País",
        slug: "crear-empresa-pais",
        videoId: "j4wgnj7xc0s",
        duracion: "04:13",
        descripcion: "Explora el proceso de constituir empresa en tu país de residencia. Aprende sobre registro mercantil, número de identificación fiscal, y por qué contratar un asesor mercantil ahorra tiempo y dolores de cabeza. Descubre costos aproximados (España: ~€900) y requisitos específicos como el registro de importadores en países sudamericanos.",
        puntosClave: [
          "Registro mercantil + número identificación fiscal (obligatorio en todos los países)",
          "Contratar asesor mercantil vs hacerlo solo: valora tu tiempo y expertise",
          "Costos España: ~€900 (gastos notariales + trámites)",
          "Sudamérica requiere alta en registro de importadores",
          "Ideal si tu mercado objetivo es local/nacional"
        ]
      },
      {
        numero: 3,
        titulo: "Constituir una Empresa en Europa - e-Residency",
        slug: "eresidency-europa",
        videoId: "_6DFxxgbsrw",
        duracion: "06:46",
        descripcion: "Descubre e-Residency de Estonia: el programa que permite a emprendedores de cualquier país crear empresa europea 100% online. Ideal para vender en Amazon Europa sin tocar mercancía (FBA). Aprende sobre ventajas fiscales (no pagas impuestos hasta retirar beneficios), gestión remota con tarjeta digital, y acceso a banca europea. Costo inicial: €300-500.",
        puntosClave: [
          "e-Residency: programa de Estonia para nómadas digitales y emprendedores remotos",
          "Proceso: solicitar online, recoger ID en embajada, constituir empresa desde casa",
          "Ventaja fiscal: NO pagas impuesto sociedades hasta retirar dividendos",
          "Gestión 100% online con tarjeta ID + lector USB (firmas, bancos, contabilidad)",
          "Perfecto para Amazon FBA Europa sin empleados ni almacén físico",
          "Costo: ~€300-500 inicial, sin cuota de autónomos"
        ]
      },
      {
        numero: 4,
        titulo: "Stripe Atlas - Empresa en Estados Unidos",
        slug: "stripe-atlas",
        videoId: "tvC1BTmmwfU",
        duracion: "04:12",
        descripcion: "Conoce Stripe Atlas: constituir LLC en Delaware, USA desde cualquier país en días. Perfecto para vender en Amazon USA (el mercado más grande del mundo). Incluye EIN (Tax ID), cuenta bancaria USA, y Stripe Payments integrado. Costo: $500 inicial. Importante: pagas 21% impuesto sociedades USA sobre beneficios. Considera bien antes de constituir, cerrar es costoso (€3,000+).",
        puntosClave: [
          "Stripe Atlas: LLC en Delaware, USA 100% remota ($500)",
          "Incluye: constitución, EIN (Tax ID), cuenta bancaria, Stripe Payments",
          "Ideal para Amazon USA (mercado más amplio del mundo)",
          "Impuesto sociedades USA: 21% sobre beneficios (desde 2019)",
          "Costo anual mantenimiento: $300-500",
          "Advertencia: cerrar empresa cuesta €3,000+ (auditorías, trámites). Solo si vas en serio."
        ]
      }
    ]
  },
  {
    titulo: "Módulo 3: Toma de Decisiones",
    lecciones: [
      {
        numero: 5,
        titulo: "Conclusiones Finales",
        slug: "conclusiones-finales",
        videoId: "seQ3DvOm2LI",
        duracion: "02:21",
        descripcion: "Recomendaciones finales para elegir la mejor opción según tu situación. Si estás empezando, prioriza mercado local/nacional: la venta presencial sigue siendo la principal. Amazon y venta online son complementarias. Crea empresa en tu país primero, prueba con pequeñas cantidades en Amazon FBA, y cuando domines el mercado local, considera expansión internacional (e-Residency o Stripe Atlas).",
        puntosClave: [
          "Empezar local: constituir empresa en tu país, distribuir a tiendas/mercados nacionales",
          "Venta online es futuro, pero venta tradicional sigue siendo principal",
          "Probar Amazon FBA con stock pequeño antes de invertir fuerte",
          "e-Residency/Stripe Atlas: solo cuando domines mercado local y tengas capital",
          "No descapitalizar empresa: crecer paso a paso, no apostarlo todo a un canal"
        ]
      }
    ]
  }
];
