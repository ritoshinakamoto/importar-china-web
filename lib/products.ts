// Product catalog for ImportarDeChina.com

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in EUR cents (900 = €9)
  originalPrice: number; // in EUR cents
  features: string[];
  successUrl: string;
  cancelUrl: string;
}

export const PRODUCTS: Record<string, Product> = {
  'email-templates': {
    id: 'email-templates',
    name: '15 Email Templates para Importación desde China',
    description: 'Plantillas profesionales de email + Bonus Checklist',
    price: 900, // €9
    originalPrice: 2700, // €27
    features: [
      '15 plantillas de email listas para usar',
      'Guía detallada (cuándo usar cada una)',
      'Ejemplos de negociaciones reales',
      'Bonus: Checklist Proveedores (€15 valor)',
    ],
    successUrl: '/productos/email-templates/success',
    cancelUrl: '/productos/email-templates',
  },
  'calculadora-costos': {
    id: 'calculadora-costos',
    name: 'Calculadora de Costos de Importación',
    description: 'Excel completo con análisis de margen + Base TARIC',
    price: 1200, // €12
    originalPrice: 3700, // €37
    features: [
      'Calculadora Excel completa',
      'Análisis automático de margen y ROI',
      'Base de datos con 50+ códigos TARIC',
      'Compatible Excel y Google Sheets',
    ],
    successUrl: '/productos/calculadora-costos/success',
    cancelUrl: '/productos/calculadora-costos',
  },
  'checklist-control-calidad': {
    id: 'checklist-control-calidad',
    name: 'Checklist de Control de Calidad',
    description: '80+ puntos de inspección profesional',
    price: 900, // €9
    originalPrice: 2700, // €27
    features: [
      '80+ puntos de inspección QC',
      '4 tipos de inspección cubiertos',
      'PDF + Excel editable',
      'Usado en +200 inspecciones reales',
    ],
    successUrl: '/productos/checklist-control-calidad/success',
    cancelUrl: '/productos/checklist-control-calidad',
  },
  'due-diligence-proveedor': {
    id: 'due-diligence-proveedor',
    name: 'Template Due Diligence de Proveedores',
    description: 'Sistema de evaluación con 60+ criterios',
    price: 900, // €9
    originalPrice: 2700, // €27
    features: [
      'Template de evaluación con 60+ criterios',
      'Sistema de puntuación automático',
      'Detecta red flags antes de pagar',
      'Excel + PDF + Guías',
    ],
    successUrl: '/productos/due-diligence-proveedor/success',
    cancelUrl: '/productos/due-diligence-proveedor',
  },
  'bundle-starter-kit': {
    id: 'bundle-starter-kit',
    name: 'Import Starter Kit - Bundle Completo',
    description: '4 herramientas digitales: Email Templates + Calculadora + Checklist QC + Due Diligence',
    price: 2900, // €29
    originalPrice: 3900, // €39
    features: [
      '15 Email Templates profesionales',
      'Calculadora Costos completa (Excel + Sheets)',
      'Checklist QC con 80+ puntos',
      'Template Due Diligence 60+ criterios',
      'Ahorra €10 vs compra individual',
    ],
    successUrl: '/compra/bundle-starter-kit',
    cancelUrl: '/#productos',
  },
};

export function getProduct(id: string): Product | null {
  return PRODUCTS[id] || null;
}

export function formatPrice(cents: number): string {
  return `€${(cents / 100).toFixed(0)}`;
}
