import Link from 'next/link';
import { leccionesProveedor, modulosProveedor } from '@/lib/proveedor-data';

export default function CursoProveedorIndexPage() {
  const leccionesPorModulo = modulosProveedor.map(modulo => ({
    ...modulo,
    lecciones: leccionesProveedor.filter(l => l.modulo === modulo.nombre)
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          El Proveedor Perfecto
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Domina el proceso completo de <strong>búsqueda, evaluación y negociación</strong> con 
          proveedores chinos en Alibaba. De cero a experto en importación.
        </p>
      </div>

      {/* Objetivos del Curso */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
          🎯 Objetivos del Curso
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
              🔍
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Dominar Alibaba</h3>
              <p className="text-gray-600 text-sm">Navegar la plataforma como un profesional y usar todas sus herramientas</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              ✅
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Evaluar proveedores</h3>
              <p className="text-gray-600 text-sm">Identificar proveedores confiables y evitar estafas y problemas</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              💬
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Negociar efectivamente</h3>
              <p className="text-gray-600 text-sm">Conseguir mejores precios, condiciones y términos de pago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              🛡️
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Proteger tus pagos</h3>
              <p className="text-gray-600 text-sm">Usar Trade Assurance y otros sistemas de protección correctamente</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">
              📦
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Control de calidad</h3>
              <p className="text-gray-600 text-sm">Inspeccionar productos antes del envío y gestionar incidencias</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">
              🇨🇳
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Cultura china</h3>
              <p className="text-gray-600 text-sm">Entender la cultura de negocios china para negociaciones exitosas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resultado Final */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 mb-16 text-white">
        <h2 className="text-2xl font-bold mb-4">🏆 Al Terminar el Curso</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Sabrás <strong>encontrar proveedores confiables</strong> en Alibaba</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Podrás <strong>negociar como un profesional</strong> con fábricas chinas</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Tendrás un <strong>proceso completo de selección</strong> y evaluación</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Conocerás <strong>todos los sistemas de protección</strong> disponibles</span>
          </li>
        </ul>
      </div>

      {/* Módulos y Lecciones */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          📚 Contenido del Curso
        </h2>
        <div className="space-y-6">
          {leccionesPorModulo.map((modulo, idx) => (
            <div key={modulo.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  Módulo {idx + 1}: {modulo.nombre}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{modulo.descripcion}</p>
              </div>
              <div className="divide-y divide-gray-100">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.id}
                    href={`/curso-proveedor-perfecto/leccion/${leccion.id}`}
                    className="block px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-600 group-hover:bg-blue-200 transition-colors">
                        {leccion.numero}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {leccion.titulo}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {leccion.descripcion}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            ⏱️ {leccion.duracion}
                          </span>
                          <span className="flex items-center gap-1">
                            📹 Video
                          </span>
                          {leccion.archivosDescarga && (
                            <span className="flex items-center gap-1 text-green-600 font-semibold">
                              📥 Archivos descargables
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link 
          href="/curso-proveedor-perfecto/leccion/presentacion"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
