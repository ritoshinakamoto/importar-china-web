import Link from 'next/link';
import { modulos } from '@/lib/crea-tu-marca-data';

export default function CursoIndexPage() {
  const todasLecciones = modulos.flatMap(m => m.lecciones);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          Crea Tu Propia Marca
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aprende a crear una marca profesional desde cero: <strong>naming, registro legal, diseño de logo, identidad visual y lanzamiento web</strong>. 
          Basado en experiencia real creando más de 10 marcas exitosas para importación de China.
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
              ✍️
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Crear nombre memorable</h3>
              <p className="text-gray-600 text-sm">Aprende las características de un buen nombre: breve, fácil pronunciación y registrable</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              📋
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Registrar legalmente</h3>
              <p className="text-gray-600 text-sm">Protege tu marca con registro oficial OEPM/EUIPO antes de producir</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              🎨
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Diseñar logo profesional</h3>
              <p className="text-gray-600 text-sm">Desde contratar estudios creativos hasta herramientas online según tu presupuesto</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              🌐
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Registrar dominio .com</h3>
              <p className="text-gray-600 text-sm">Asegura tu presencia online con el dominio perfecto por solo 10€/año</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">
              🖼️
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Identidad visual completa</h3>
              <p className="text-gray-600 text-sm">Paleta de colores, tipografía y materiales gráficos orientados a venta</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">
              💻
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Lanzar web con WordPress</h3>
              <p className="text-gray-600 text-sm">Crea página web profesional en menos de 1 hora sin ser programador</p>
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
            <span>Tendrás una <strong>marca profesional registrada y protegida</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Habrás diseñado o contratado un <strong>logo memorable y escalable</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Tu web estará <strong>live con WordPress y dominio .com</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Evitarás <strong>errores costosos aprendiendo de experiencia real</strong></span>
          </li>
        </ul>
      </div>

      {/* Módulos y Lecciones */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          📚 Contenido del Curso
        </h2>
        <div className="space-y-6">
          {modulos.map((modulo, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  Módulo {idx + 1}: {modulo.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{modulo.lecciones.length} lecciones</p>
              </div>
              <div className="divide-y divide-gray-100">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.slug}
                    href={`/curso-crea-tu-marca/leccion/${leccion.slug}`}
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
          href={`/curso-crea-tu-marca/leccion/${todasLecciones[0].slug}`}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
