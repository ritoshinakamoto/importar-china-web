import Link from 'next/link';
import DueDiligenceExpandable from './DueDiligenceExpandable';

export default function DueDiligenceContent() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 animate-fade-in">
            <span className="text-lg">🔍</span>
            <span>Due Diligence</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-[0.95] tracking-tight animate-fade-in-delay-1">
            Framework<br/>
            Completo de<br/>
            <span className="text-indigo-100">Due Diligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-indigo-50 max-w-2xl leading-relaxed animate-fade-in-delay-2">
            Evalúa y verifica proveedores chinos antes de hacer negocios. 
            Reduce riesgos y asegura relaciones comerciales confiables.
          </p>
        </div>
      </div>

      {/* Download CTAs - Top */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-1">Descarga Instantánea</h2>
              <p className="text-gray-600 text-sm">Guía PDF + Scorecard Excel</p>
            </div>
            <div className="flex gap-3">
              <a
                href="/products/due-diligence-proveedor.pdf"
                download
                className="group relative bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">📄</span>
                  <span className="text-sm">PDF</span>
                </span>
              </a>
              <a
                href="/products/due-diligence-proveedor.xlsx"
                download
                className="group relative bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  <span className="text-sm">Excel</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Intro */}
        <div className="mb-12 p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
          <h3 className="font-bold text-gray-900 mb-2">¿Por qué Due Diligence es crítico?</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            El <strong>70% de los problemas</strong> en importación de China se pueden evitar con una buena selección de proveedor. 
            Este framework te ayuda a evaluar proveedores de forma sistemática, comparar múltiples opciones objetivamente, 
            y detectar red flags ANTES de hacer pedido.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Cuándo usar:</strong> Antes de enviar primer pedido a nuevo proveedor, al evaluar 3-5 proveedores para elegir el mejor, 
            antes de cambiar de proveedor actual, o cuando consideras aumentar volumen.
          </p>
        </div>

        {/* 14 Secciones Framework */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Framework de Evaluación (14 Secciones)</h2>
            <p className="text-gray-600">Sistema completo para evaluar y comparar proveedores objetivamente</p>
            <p className="text-sm text-indigo-600 font-semibold mt-2">👇 Click en cada sección para ver el contenido completo</p>
          </div>

          <DueDiligenceExpandable />

          <div className="px-6 py-4 bg-indigo-50 rounded-lg mt-6 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 ¿Cómo funciona el Scorecard?</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Cada sección tiene criterios específicos con puntajes. Al completar el framework, obtienes un <strong>score total de 0-100</strong>.
            </p>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              <div className="bg-red-100 border-2 border-red-300 rounded p-2 text-center">
                <div className="font-bold text-red-700">0-50 pts</div>
                <div className="text-xs text-red-600">❌ No Recomendado</div>
              </div>
              <div className="bg-orange-100 border-2 border-orange-300 rounded p-2 text-center">
                <div className="font-bold text-orange-700">51-65 pts</div>
                <div className="text-xs text-orange-600">⚠️ Alto Riesgo</div>
              </div>
              <div className="bg-yellow-100 border-2 border-yellow-300 rounded p-2 text-center">
                <div className="font-bold text-yellow-700">66-80 pts</div>
                <div className="text-xs text-yellow-600">⚡ Aceptable</div>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded p-2 text-center">
                <div className="font-bold text-green-700">81-100 pts</div>
                <div className="text-xs text-green-600">✅ Excelente</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido Excel Scorecard */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Scorecard Excel Interactivo</h2>
            <p className="text-gray-600">El Excel incluye fórmulas automáticas para calcular el score</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  Lo que incluye el Excel:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">✓</span>
                    <span><strong>Hoja 1: Due Diligence</strong> - 14 secciones completas con campos editables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">✓</span>
                    <span><strong>Hoja 2: Scorecard</strong> - Cálculo automático de puntuación total</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">✓</span>
                    <span><strong>Hoja 3: Comparativa</strong> - Tabla para evaluar múltiples proveedores lado a lado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">✓</span>
                    <span><strong>Celdas con validación</strong> - Listas desplegables para respuestas estándar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">✓</span>
                    <span><strong>Formato condicional</strong> - Colores automáticos según score (verde/amarillo/rojo)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  Beneficios del sistema:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">•</span>
                    <span>Decisiones objetivas basadas en datos, no en "feeling"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">•</span>
                    <span>Compara 3-5 proveedores con mismo criterio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">•</span>
                    <span>Documenta la evaluación (útil para reporting interno)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">•</span>
                    <span>Detecta red flags que podrías pasar por alto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 flex-shrink-0">•</span>
                    <span>Ahorra tiempo con campos pre-diseñados</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-indigo-300">
              <p className="text-sm text-gray-700 text-center">
                <strong className="text-gray-900">💡 Pro tip:</strong> Evalúa mínimo 3 proveedores antes de decidir. 
                El que ofrece el precio más bajo raramente es la mejor opción. Busca el mejor <strong>balance precio/calidad/confiabilidad</strong>.
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg mt-6 mb-10">
            <h4 className="font-bold mb-2 text-lg">⭐ Cómo usar el framework</h4>
            <p className="text-sm leading-relaxed mb-3 opacity-90">
              <strong>Paso 1:</strong> Solicita a cada proveedor los documentos listados en Sección 2 (Business License, certificados, etc.)<br/>
              <strong>Paso 2:</strong> Completa el Excel para cada proveedor candidato<br/>
              <strong>Paso 3:</strong> Compara scores en Hoja 3 (Comparativa)<br/>
              <strong>Paso 4:</strong> Elige el proveedor con mejor score + feeling personal
            </p>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-sm">
                <strong>Tiempo estimado:</strong> 1-2 horas por proveedor. Vale la pena - evitas meses de problemas futuros.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Download Section - Bottom */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-y border-indigo-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Descargar Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guía completa (PDF) + Scorecard interactivo (Excel)
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <a
              href="/products/due-diligence-proveedor.pdf"
              download
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-indigo-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📄
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-1">Due Diligence PDF</div>
                  <div className="text-gray-600">Guía completa • 236 KB</div>
                </div>
              </div>
              <div className="text-indigo-600 group-hover:text-indigo-700 font-bold text-lg group-hover:translate-x-1 transition-transform">
                Descargar →
              </div>
            </a>

            <a
              href="/products/due-diligence-proveedor.xlsx"
              download
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-indigo-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📊
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-1">Scorecard Excel</div>
                  <div className="text-gray-600">Evaluación automatizada • 6.8 KB</div>
                </div>
              </div>
              <div className="text-indigo-600 group-hover:text-indigo-700 font-bold text-lg group-hover:translate-x-1 transition-transform">
                Descargar →
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <Link
          href="/productos/due-diligence-proveedor/success"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-base group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver a tu compra
        </Link>
      </div>
    </div>
  );
}
