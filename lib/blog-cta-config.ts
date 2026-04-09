/**
 * Configuración centralizada para CTAs del blog
 * Modificar aquí para cambiar texto/enlaces en todos los componentes
 */

export const blogCTAConfig = {
  // Banner sticky (bottom, mobile + desktop)
  stickyBanner: {
    enabled: true,
    title: "Calcula exactamente cuánto te cuesta importar de China",
    description: "Evalúa proveedores chinos en 5 minutos",
    buttonText: "Descargar Gratis",
    buttonUrl: "/checklist",
    bgColor: "bg-teal-600",
    textColor: "text-white",
    buttonBg: "bg-white",
    buttonTextColor: "text-teal-600",
  },

  // Sidebar (desktop only)
  sidebar: {
    enabled: true,
    title: "Calcula exactamente cuánto te cuesta importar de China",
    description: "Descarga nuestro checklist completo para evaluar proveedores chinos y evitar errores costosos.",
    bullets: [
      "✓ Verificación de calidad",
      "✓ Evaluación financiera",
      "✓ Capacidad de producción",
    ],
    buttonText: "Descargar Checklist",
    buttonUrl: "/checklist",
    bgColor: "bg-gradient-to-br from-teal-50 to-blue-50",
    buttonBg: "bg-teal-600",
    buttonTextColor: "text-white",
  },

  // Related posts ya existe como componente, config adicional si necesaria
  relatedPosts: {
    enabled: true,
    maxPosts: 3,
    title: "Calcula exactamente cuánto te cuesta importar de China",
  },
} as const;
