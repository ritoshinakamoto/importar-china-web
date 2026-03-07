import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLeccionProveedorBySlug, getNextLeccionProveedor, getPrevLeccionProveedor, leccionesProveedor } from '@/lib/proveedor-data';
import CursoProveedorSidebar from '@/components/CursoProveedorSidebar';

export async function generateStaticParams() {
  return leccionesProveedor.map((leccion) => ({
    slug: leccion.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leccion = getLeccionProveedorBySlug(slug);
  
  if (!leccion) {
    return {
      title: 'Lección no encontrada',
    };
  }

  return {
    title: `${leccion.titulo} - El Proveedor Perfecto`,
    description: leccion.descripcion,
  };
}

export default async function LeccionProveedorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leccion = getLeccionProveedorBySlug(slug);

  if (!leccion) {
    notFound();
  }

  const nextLeccion = getNextLeccionProveedor(leccion.id);
  const prevLeccion = getPrevLeccionProveedor(leccion.id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <Link href="/curso-proveedor-perfecto" className="hover:text-gray-900">
                El Proveedor Perfecto
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
                {leccion.modulo}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">⏱️</span>
                {leccion.duracion}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">🎯</span>
                Lección {leccion.numero} de {leccionesProveedor.length}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">📝</span>
              Descripción de la Lección
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {leccion.descripcion}
            </p>
          </div>

          {/* Archivos Descargables (solo en lección 5) */}
          {leccion.archivosDescarga && leccion.archivosDescarga.length > 0 && (
            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📥</span>
                Archivos Descargables
              </h2>
              <div className="space-y-3">
                {leccion.archivosDescarga.map((archivo, idx) => (
                  <a
                    key={idx}
                    href={archivo.url}
                    download
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-green-200 hover:border-green-400 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-green-200 transition-colors">
                      📄
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        {archivo.nombre}
                      </h3>
                      <p className="text-sm text-gray-600">{archivo.descripcion}</p>
                    </div>
                    <div className="flex-shrink-0 text-green-600 group-hover:text-green-700">
                      ↓
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

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

          {/* Video */}
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
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <span>Ver en YouTube</span>
                <span>↗</span>
              </a>
              <span>Duración: {leccion.duracion}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div>
              {prevLeccion ? (
                <Link
                  href={`/curso-proveedor-perfecto/leccion/${prevLeccion.id}`}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Anterior</div>
                    <div className="font-semibold">{prevLeccion.titulo}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            <div>
              {nextLeccion ? (
                <Link
                  href={`/curso-proveedor-perfecto/leccion/${nextLeccion.id}`}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Siguiente</div>
                    <div className="font-semibold">{nextLeccion.titulo}</div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : (
                <Link
                  href="/curso-proveedor-perfecto"
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
          <CursoProveedorSidebar currentLeccionId={leccion.id} />
        </div>
      </div>
    </div>
  );
}
