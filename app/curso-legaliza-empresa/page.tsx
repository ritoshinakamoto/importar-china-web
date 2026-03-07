import Link from "next/link";
import { modulos } from "@/lib/legaliza-data";

export default function CursoLegalizaPage() {
  // Calcular primera lección
  const primeraLeccion = modulos[0].lecciones[0].slug;
  const totalLecciones = modulos.reduce((acc, mod) => acc + mod.lecciones.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          Legaliza Tu Empresa
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Guía completa para <strong>legalizar tu negocio de importación</strong> desde China. Explora opciones para constituir empresa en tu país, Europa (e-Residency) o Estados Unidos (Stripe Atlas), incluyendo <strong>requisitos, costos y procesos paso a paso</strong>.
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
              ⚖️
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Entender la Importancia de Legalizar</h3>
              <p className="text-gray-600 text-sm">Saber por qué necesitas una empresa para importar, las consecuencias de operar sin empresa (multas, destrucción de mercancía), y cuándo es obligatorio constituir.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              🌍
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Evaluar Opciones de Constitución</h3>
              <p className="text-gray-600 text-sm">Comparar país local vs Europa (e-Residency) vs Estados Unidos (Stripe Atlas). Calcular costos, plazos y ventajas de cada jurisdicción.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              💻
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Constituir Empresa Remota</h3>
              <p className="text-gray-600 text-sm">Usar e-Residency para empresa europea o Stripe Atlas para empresa USA. Completar proceso 100% online sin desplazarse.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              ✅
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Tomar Decisión Informada</h3>
              <p className="text-gray-600 text-sm">Elegir la mejor opción para tu caso específico, planificar próximos pasos post-constitución, y evitar errores comunes de principiantes.</p>
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
            <span>Entenderás <strong>por qué es obligatorio legalizar</strong> tu negocio de importación y las consecuencias de no hacerlo</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Conocerás las <strong>3 opciones principales</strong>: país local, e-Residency (Europa) y Stripe Atlas (USA)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Podrás <strong>constituir empresa 100% online</strong> en Europa o Estados Unidos sin salir de casa</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Tendrás una <strong>matriz de decisión clara</strong> (costos, tiempos, ventajas) para elegir la mejor opción según tu caso</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Sabrás los <strong>próximos pasos post-constitución</strong>: registro EORI/Importer ID, cuenta bancaria, Stripe/Amazon FBA</span>
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
                    href={`/curso-legaliza-empresa/leccion/${leccion.slug}`}
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
          href={`/curso-legaliza-empresa/leccion/${primeraLeccion}`}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          {totalLecciones} lecciones · ~45 minutos
        </p>
      </div>
    </div>
  );
}
