import Link from "next/link";
import { modulos } from "@/lib/distribucion-data";

export default function CursoDistribucionPage() {
  // Calcular primera lección
  const primeraLeccion = modulos[0].lecciones[0].slug;
  const totalLecciones = modulos.reduce((acc, mod) => acc + mod.lecciones.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          Canales de Distribución
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aprende los <strong>diferentes canales de distribución</strong> para importadores desde China: mayoristas, minoristas, Amazon FBA y e-commerce propio. Descubre por qué una <strong>estrategia multi-canal</strong> es clave para maximizar ventas y no depender de un solo marketplace.
        </p>
      </div>

      {/* Objetivos */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
          🎯 Objetivos del Curso
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
              📊
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Conocer los 3 Canales Principales</h3>
              <p className="text-gray-600 text-sm">Entender el canal tradicional (mayoristas), canal corto (minoristas) y canal directo (cliente final). Aprender cuándo usar cada uno según producto y capital disponible.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              🔄
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Estrategia Multi-Canal</h3>
              <p className="text-gray-600 text-sm">Descubrir por qué depender solo de Amazon FBA (5% del retail) te hace perder 95% de clientes potenciales. Aprender a diversificar canales de venta.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              📦
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Dominar Amazon FBA</h3>
              <p className="text-gray-600 text-sm">Crear cuenta Seller Central, diseñar packing FBA, gestionar envíos China → Amazon, y comparar Amazon USA vs Europa (Pan-European FBA).</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              💰
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Calcular Márgenes por Canal</h3>
              <p className="text-gray-600 text-sm">Entender márgenes reales: mayoristas (20-30%), minoristas (40-50%), Amazon FBA (30-40%), e-commerce propio (60-70%). Elegir según objetivos de negocio.</p>
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
            <span>Comprenderás <strong>los 3 canales principales</strong> y cuándo usar cada uno (tradicional, corto, directo)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Sabrás <strong>crear cuenta Amazon Seller Central</strong> y configurar tu primer producto FBA correctamente</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Conocerás <strong>requisitos de empaquetado FBA</strong> (FNSKU, cajas, paletización) para evitar rechazos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Dominarás la <strong>logística China → Amazon</strong> (marítimo/aéreo, prep centers, customs clearance)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Podrás <strong>elegir entre Amazon USA o Europa</strong> según tu producto (Pan-European FBA, idiomas, regulaciones)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Tendrás una <strong>estrategia multi-canal</strong> (mayoristas + Amazon + e-commerce) para maximizar ventas</span>
          </li>
        </ul>
      </div>

      {/* Contenido del Curso */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          📚 Contenido del Curso
        </h2>
        <div className="space-y-6">
          {modulos.map((modulo, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  {modulo.titulo}
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.slug}
                    href={`/curso-distribucion/leccion/${leccion.slug}`}
                    className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                        {leccion.numero}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {leccion.titulo}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {leccion.descripcion}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <span>⏱️</span>
                            {leccion.duracion}
                          </span>
                          <span className="flex items-center gap-1">
                            <span>🎬</span>
                            Video
                          </span>
                        </div>
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
          href={`/curso-distribucion/leccion/${primeraLeccion}`}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          {totalLecciones} lecciones · ~36 minutos
        </p>
      </div>
    </div>
  );
}
