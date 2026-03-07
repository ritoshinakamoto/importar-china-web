export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">ImportarDeChina</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-gray-600 hover:text-gray-900">Productos</a>
            <a href="#servicios" className="text-gray-600 hover:text-gray-900">Servicios</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Importa de China como un Profesional
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
          15 años de experiencia, más de 200 contenedores importados. 
          Aprende el método probado para importar productos rentables sin cometer los errores que cuestan miles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Descarga tu Checklist GRATIS
          </button>
          <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
            Ver Cursos
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-teal-600 text-2xl font-bold mb-2">Experiencia Real</h3>
          <p className="text-gray-600">15 años importando desde China, más de 200 contenedores gestionados</p>
        </div>
        <div>
          <h3 className="text-teal-600 text-2xl font-bold mb-2">Método Probado</h3>
          <p className="text-gray-600">Sistema paso a paso validado con cientos de importadores exitosos</p>
        </div>
        <div>
          <h3 className="text-teal-600 text-2xl font-bold mb-2">Soporte Continuo</h3>
          <p className="text-gray-600">Acceso a guías, plantillas y asesoría cuando lo necesites</p>
        </div>
      </section>

      {/* Productos Populares */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Productos Más Populares</h2>
            <p className="text-gray-600">Herramientas digitales para empezar hoy mismo</p>
          </div>
          <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold hidden md:block">
            Ver todos →
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Templates */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              📧
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900">Email Templates</h3>
              <span className="text-teal-600 font-bold">$29</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Pack de plantillas para comunicación profesional con proveedores chinos</p>
          </div>

          {/* Calculadora Bundle */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              🧮
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900">Calculadora Bundle</h3>
              <span className="text-teal-600 font-bold">$49</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Herramienta completa para calcular costos, márgenes y ROI de tus importaciones</p>
          </div>

          {/* Guía 2026 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              📖
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900">Guía 2026</h3>
              <span className="text-teal-600 font-bold">$79</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Manual actualizado con estrategias y métodos probados para importar exitosamente</p>
          </div>

          {/* Curso Alibaba */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              🎓
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900">Curso Alibaba</h3>
              <span className="text-teal-600 font-bold">$149</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Curso completo para dominar Alibaba como un profesional</p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Servicios Profesionales</h2>
            <p className="text-gray-600">Delega y enfócate en tu negocio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sourcing Asistido */}
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sourcing Asistido</h3>
              <p className="text-gray-600 mb-6">Te ayudamos a encontrar y negociar con los mejores proveedores para tu producto</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Búsqueda proveedores
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Análisis calidad
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Negociación precios
                </li>
              </ul>
              <button className="w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Solicitar información
              </button>
            </div>

            {/* Control Calidad */}
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Control Calidad Remoto</h3>
              <p className="text-gray-600 mb-6">Inspección profesional de tus productos antes del envío desde China</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Inspección pre-envío
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Reporte fotográfico
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Verificación specs
                </li>
              </ul>
              <button className="w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Solicitar información
              </button>
            </div>

            {/* Gestión Completa */}
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Completa</h3>
              <p className="text-gray-600 mb-6">Nos encargamos de todo el proceso de importación de principio a fin</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Sourcing completo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Logística integral
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span> Seguimiento 24/7
                </li>
              </ul>
              <button className="w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Solicitar información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Últimas Guías</h2>
          <p className="text-gray-600">Aprende con nuestros artículos y tutoriales</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="group cursor-pointer">
            <div className="bg-gray-200 rounded-xl h-48 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-5xl">
                🇨🇳
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
              Cómo encontrar proveedores confiables en Alibaba
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Guía paso a paso para identificar proveedores de calidad y evitar estafas en la plataforma.
            </p>
            <span className="text-sm text-gray-500">5 min de lectura</span>
          </article>

          {/* Blog Post 2 */}
          <article className="group cursor-pointer">
            <div className="bg-gray-200 rounded-xl h-48 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-5xl">
                💰
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
              Calculadora de costos: incluye TODOS los gastos
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Los costos ocultos que debes considerar al calcular el precio final de tu producto importado.
            </p>
            <span className="text-sm text-gray-500">8 min de lectura</span>
          </article>

          {/* Blog Post 3 */}
          <article className="group cursor-pointer">
            <div className="bg-gray-200 rounded-xl h-48 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-5xl">
                📦
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
              Tu primer contenedor: errores comunes a evitar
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Lecciones aprendidas de 200+ contenedores importados: qué hacer (y qué no hacer).
            </p>
            <span className="text-sm text-gray-500">12 min de lectura</span>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-white font-bold text-xl mb-4">ImportarDeChina</div>
              <p className="text-sm text-gray-400">
                Tu guía experta para importar productos desde China de forma profesional y rentable.
              </p>
            </div>
            
            {/* Productos */}
            <div>
              <h4 className="text-white font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Email Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Calculadora Bundle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guía 2026</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curso Alibaba</a></li>
              </ul>
            </div>
            
            {/* Servicios */}
            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sourcing Asistido</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Control Calidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestión Completa</a></li>
              </ul>
            </div>
            
            {/* Recursos */}
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guías Gratis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2026 ImportarDeChina.com - Todos los derechos reservados</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
