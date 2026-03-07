import Link from "next/link";
import { notFound } from "next/navigation";
import { modulos } from "@/lib/legaliza-data";
import CursoLegalizaSidebar from "@/components/CursoLegalizaSidebar";

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Buscar lección
  let leccionActual = null;
  let moduloActual = null;
  let leccionIndex = 0;

  for (const modulo of modulos) {
    for (const leccion of modulo.lecciones) {
      if (leccion.slug === slug) {
        leccionActual = leccion;
        moduloActual = modulo.titulo;
        break;
      }
      leccionIndex++;
    }
    if (leccionActual) break;
  }

  if (!leccionActual) {
    notFound();
  }

  // Calcular anterior y siguiente
  const todasLecciones = modulos.flatMap((m) => m.lecciones);
  const currentIndex = todasLecciones.findIndex((l) => l.slug === slug);
  const anterior = currentIndex > 0 ? todasLecciones[currentIndex - 1] : null;
  const siguiente =
    currentIndex < todasLecciones.length - 1
      ? todasLecciones[currentIndex + 1]
      : null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Breadcrumb + Header */}
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <Link
                href="/curso-legaliza-empresa"
                className="hover:text-gray-900 transition-colors"
              >
                Legaliza Tu Empresa
              </Link>
              <span>/</span>
              <span className="text-gray-900">Lección {leccionActual.numero}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              {leccionActual.titulo}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="text-lg">📚</span>
                {moduloActual}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">⏱️</span>
                {leccionActual.duracion}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">🎯</span>
                Lección {leccionActual.numero} de {todasLecciones.length}
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
              {leccionActual.descripcion}
            </p>
          </div>

          {/* Puntos Clave */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🎯</span>
              Puntos Clave
            </h2>
            <ul className="space-y-3">
              {leccionActual.puntosClave.map((punto, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{punto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🎬</span>
              Video de la Lección
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src={`https://www.youtube.com/embed/${leccionActual.videoId}`}
                title={leccionActual.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <a
                href={`https://www.youtube.com/watch?v=${leccionActual.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                Ver en YouTube ↗
              </a>
              <span>Duración: {leccionActual.duracion}</span>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div>
              {anterior ? (
                <Link
                  href={`/curso-legaliza-empresa/leccion/${anterior.slug}`}
                  className="group inline-flex items-center gap-3 text-sm hover:text-gray-900 transition-colors"
                >
                  <span className="text-2xl group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>
                  <div className="text-left">
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
                  href={`/curso-legaliza-empresa/leccion/${siguiente.slug}`}
                  className="group inline-flex items-center gap-3 text-sm hover:text-gray-900 transition-colors"
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Siguiente</div>
                    <div className="font-semibold">{siguiente.titulo}</div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ) : (
                <Link
                  href="/curso-legaliza-empresa"
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
          <CursoLegalizaSidebar currentSlug={slug} />
        </div>
      </div>
    </div>
  );
}
