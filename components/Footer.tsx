import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-white text-xl font-bold mb-4 font-display">ImportarDeChina</div>
            <p className="text-sm">
              15 años de experiencia importando desde China. Herramientas y conocimiento para tu éxito.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/productos/email-templates" className="hover:text-white transition-colors">Email Templates</Link></li>
              <li><Link href="/productos/calculadora-costos" className="hover:text-white transition-colors">Calculadora Costos</Link></li>
              <li><Link href="/productos/checklist-control-calidad" className="hover:text-white transition-colors">Checklist QC</Link></li>
              <li><Link href="/productos/due-diligence-proveedor" className="hover:text-white transition-colors">Due Diligence</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicios/sourcing-asistido" className="hover:text-white transition-colors">Sourcing Asistido</Link></li>
              <li><Link href="/servicios/control-calidad" className="hover:text-white transition-colors">Control Calidad</Link></li>
              <li><Link href="/servicios/gestion-completa" className="hover:text-white transition-colors">Gestión Completa</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              <li>
                <a 
                  href="https://t.me/jane_importardechina_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-4 h-4"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  Chat con Jane
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2026 ImportarDeChina.com - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
