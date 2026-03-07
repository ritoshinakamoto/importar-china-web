import Link from 'next/link';
import { leccionesMetricas, modulosMetricas } from '@/lib/metricas-data';

export default function CursoMetricasIndexPage() {
  const leccionesPorModulo = modulosMetricas.map(modulo => ({
    ...modulo,
    lecciones: leccionesMetricas.filter(l => l.modulo === modulo.nombre)
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          Métricas de Negocio de Importación
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aprende a <strong>medir, analizar y optimizar</strong> cada aspecto de tu negocio de importación. 
          Domina las métricas que separan negocios rentables de los que fracasan.
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
              💰
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Métricas financieras</h3>
              <p className="text-gray-600 text-sm">ROI, márgenes, cash flow y punto de equilibrio</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              ⏱️
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Productividad</h3>
              <p className="text-gray-600 text-sm">Medir eficiencia, tiempo y valor por hora</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              🛒
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Embudo de ventas</h3>
              <p className="text-gray-600 text-sm">Conversión, CAC, LTV y optimización</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              📱
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Marketing digital</h3>
              <p className="text-gray-600 text-sm">Redes sociales, publicidad y engagement</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">
              📊
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Cuadro de mando</h3>
              <p className="text-gray-600 text-sm">Dashboard con plantilla Excel descargable</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">
              🏪
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Negocios offline</h3>
              <p className="text-gray-600 text-sm">Métricas para tiendas físicas</p>
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
            <span>Tendrás un <strong>cuadro de mando completo</strong> de tu negocio</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Sabrás <strong>qué métricas medir</strong> y cómo interpretarlas</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Podrás <strong>optimizar decisiones</strong> basadas en datos reales</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Identificarás <strong>problemas antes</strong> de que sean críticos</span>
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
                    href={`/curso-metricas-negocio/leccion/${leccion.id}`}
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
                              📥 Plantilla Excel
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
          href="/curso-metricas-negocio/leccion/presentacion"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
