import Link from "next/link";
import { notFound } from "next/navigation";
import { modulos } from "@/lib/planificacion-data";
import CursoPlanificacionSidebar from "@/components/CursoPlanificacionSidebar";

export default async function LeccionPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  const todasLecciones = modulos.flatMap(m => m.lecciones);
  const leccion = todasLecciones.find(l => l.slug === slug);

  if (!leccion) {
    notFound();
  }

  const leccionIndex = todasLecciones.findIndex(l => l.slug === slug);
  const anterior = leccionIndex > 0 ? todasLecciones[leccionIndex - 1] : null;
  const siguiente = leccionIndex < todasLecciones.length - 1 ? todasLecciones[leccionIndex + 1] : null;

  const moduloActual = modulos.find(m => m.lecciones.some(l => l.slug === slug));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <Link href="/curso-planificacion-financiera" className="hover:text-gray-900 transition-colors">
                Planificación Financiera
              </Link>
              <span>/</span>
              <span className="text-gray-900">Lección {leccion.numero}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              {leccion.titulo}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="text-lg">📚</span>
                {moduloActual?.titulo}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">⏱️</span>
                {leccion.duracion}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">🎯</span>
                Lección {leccion.numero} de {todasLecciones.length}
              </span>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">📝</span>
              Descripción de la Lección
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {leccion.descripcion}
            </p>
          </div>

          {/* Puntos Clave */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🎯</span>
              Puntos Clave
            </h2>
            <ul className="space-y-3">
              {leccion.puntosClave.map((punto, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{punto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video YouTube */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🎬</span>
              Video de la Lección
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src={`https://www.youtube.com/embed/${leccion.videoId}`}
                title={leccion.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <a
                href={`https://www.youtube.com/watch?v=${leccion.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                Ver en YouTube ↗
              </a>
              <span>Duración: {leccion.duracion}</span>
            </div>
          </div>

          {/* Archivos Descargables (solo Lección 2) */}
          {slug === "proyeccion-ventas" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📥</span>
                Archivos Descargables
              </h2>
              <div className="space-y-3">
                <a
                  href="/downloads/planificacion-financiera/Planificacion-Financiera.xls"
                  download
                  className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">
                      📊
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        Plantilla Excel Planificación Financiera
                      </div>
                      <div className="text-sm text-gray-600">
                        Hoja de cálculo completa con fórmulas automáticas para ventas, compras, stock, liquidez y cuenta de resultados
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-green-600 text-xl">
                    ↓
                  </div>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                💡 <strong>Tip:</strong> Este archivo Excel te permitirá practicar todas las lecciones del curso. Incluye tabs para tesorería, cuenta de resultados, IVA trimestral y proyección de cash flow.
              </p>
            </div>
          )}

          {/* Archivos Descargables (solo Lección 10) */}
          {slug === "asiento-contable-importacion" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📥</span>
                Archivos Descargables
              </h2>
              <div className="space-y-3">
                <a
                  href="/downloads/planificacion-financiera/Asientos-Contables-Importacion.xls"
                  download
                  className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      📋
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        Plantilla Asientos Contables Importación
                      </div>
                      <div className="text-sm text-gray-600">
                        Ejemplos de asientos contables para registrar importaciones: DUA, transitario, pagos al proveedor y diferencias de tipo de cambio
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-blue-600 text-xl">
                    ↓
                  </div>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                💡 <strong>Tip:</strong> Comparte este archivo con tu asesor contable si no sabe cómo contabilizar importaciones de China. Incluye todos los asientos necesarios explicados paso a paso.
              </p>
            </div>
          )}

          {/* Navegación Prev/Next */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div>
              {anterior ? (
                <Link
                  href={`/curso-planificacion-financiera/leccion/${anterior.slug}`}
                  className="group flex items-center gap-3 text-left hover:text-blue-600 transition-colors"
                >
                  <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                  <div>
                    <div className="text-xs text-gray-500">Anterior</div>
                    <div className="font-semibold">{anterior.titulo}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            <div>
              {siguiente ? (
                <Link
                  href={`/curso-planificacion-financiera/leccion/${siguiente.slug}`}
                  className="group flex items-center gap-3 text-right hover:text-blue-600 transition-colors"
                >
                  <div>
                    <div className="text-xs text-gray-500">Siguiente</div>
                    <div className="font-semibold">{siguiente.titulo}</div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : (
                <Link
                  href="/curso-planificacion-financiera"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  <span>✓</span>
                  Curso Completado
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:block hidden">
          <CursoPlanificacionSidebar slug={slug} />
        </div>
      </div>
    </div>
  );
}
