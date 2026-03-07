import Link from 'next/link';
import { lecciones, modulos } from '@/lib/curso-data';

export default function CursoIndexPage() {
  const leccionesPorModulo = modulos.map(modulo => ({
    ...modulo,
    lecciones: lecciones.filter(l => l.modulo === modulo.nombre)
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          El Nicho Perfecto
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aprende a encontrar productos con <strong>rentabilidades superiores al 50%</strong> mediante 
          segmentación de mercado y localización de productos nicho basados en tus gustos y experiencia personal.
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
              💡
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Localizar productos con sentido</h3>
              <p className="text-gray-600 text-sm">Encuentra productos que encajen con tu manera de vivir, gustos y habilidades</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              💰
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Rentabilidades {'>'}50%</h3>
              <p className="text-gray-600 text-sm">Identifica oportunidades de negocio con márgenes superiores al 50%</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              🎯
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Segmentación efectiva</h3>
              <p className="text-gray-600 text-sm">Aprende a segmentar el mercado y localizar productos nicho rentables</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              👥
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Cliente ideal + Influencers</h3>
              <p className="text-gray-600 text-sm">Identifica tu cliente objetivo y consigue influencers para asesoría y promoción</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">
              🚀
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Financiación pre-producción</h3>
              <p className="text-gray-600 text-sm">Consigue financiación antes de fabricar tu producto (crowdfunding, etc.)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">
              ⚡
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Minimiza riesgos</h3>
              <p className="text-gray-600 text-sm">Conviértete en experto de tu nicho y maximiza posibilidades de éxito</p>
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
            <span>Serás un <strong>experto dentro de tu mercado nicho</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Habrás localizado un <strong>producto nicho rentable</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Tendrás un plan para <strong>minimizar riesgos y maximizar éxito</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Sabrás cómo <strong>conseguir financiación antes de fabricar</strong></span>
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
                    href={`/curso-nicho-perfecto/leccion/${leccion.id}`}
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
          href="/curso-nicho-perfecto/leccion/intro-curso"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
