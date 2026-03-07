export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  mainCategory?: string;
}

// Mapeo de categorías WordPress a categorías principales
const categoryMap: Record<string, string> = {
  // Proveedores
  'Localizar Proveedores en China': 'Proveedores',
  'Proveedores Chinos': 'Proveedores',
  'Proveedores de Confianza': 'Proveedores',
  'Negociación': 'Proveedores',
  
  // Logística
  'Fletes': 'Logística',
  'Transporte': 'Logística',
  'Transporte desde China': 'Logística',
  'Aduanas': 'Logística',
  'Transitarios': 'Logística',
  'Bancos': 'Logística',
  
  // Calidad
  'Calidad': 'Calidad',
  'Controlar la Calidad en China': 'Calidad',
  
  // Productos
  'Ideas de Productos': 'Productos',
  'Productos Chinos': 'Productos',
  'Comprar en China': 'Productos',
  
  // Negocio
  'Ideas de Negocio': 'Negocio',
  'Importación': 'Negocio',
  'Negocio de Importación de China': 'Negocio',
  'Distribución': 'Negocio',
  'Distribución y Venta (Amazon FBA)': 'Negocio',
  'Colaboración': 'Negocio',
  'Project Manager': 'Negocio',
  
  // Cultura y Viajes
  'Shanghai': 'Cultura',
  'Hong Kong': 'Cultura',
  'Cultura': 'Cultura',
  'Viajes': 'Cultura',
  'Life': 'Cultura',
  'Trabajadores Chinos': 'Cultura',
  'Otros Países': 'Cultura',
};

export function getMainCategory(categories: string[]): string {
  for (const cat of categories) {
    if (categoryMap[cat]) {
      return categoryMap[cat];
    }
  }
  return 'Negocio'; // Default
}

export function formatDate(dateString: string): string {
  if (!dateString) return 'Sin fecha';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

export const mainCategories = [
  { id: 'all', name: 'Todo', icon: 'Globe' },
  { id: 'Proveedores', name: 'Proveedores', icon: 'Users' },
  { id: 'Logística', name: 'Logística', icon: 'Ship' },
  { id: 'Calidad', name: 'Calidad', icon: 'CheckCircle2' },
  { id: 'Productos', name: 'Productos', icon: 'Package' },
  { id: 'Negocio', name: 'Negocio', icon: 'DollarSign' },
  { id: 'Cultura', name: 'Cultura', icon: 'MapPin' },
] as const;

export type MainCategoryId = typeof mainCategories[number]['id'];
