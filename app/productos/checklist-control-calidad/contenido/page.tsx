import Link from 'next/link';
import ChecklistExpandable from './ChecklistExpandable';

export default function ChecklistContent() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 animate-fade-in">
            <span className="text-lg">✅</span>
            <span>Checklist QC</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-[0.95] tracking-tight animate-fade-in-delay-1">
            Checklist<br/>
            Profesional<br/>
            <span className="text-emerald-100">de Calidad</span>
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl leading-relaxed animate-fade-in-delay-2">
            Protocolo completo de inspección para asegurar la calidad de tus productos 
            antes del envío. Reduce defectos y reclamaciones.
          </p>
        </div>
      </div>

      {/* Download CTAs - Top */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-1">Descarga Instantánea</h2>
              <p className="text-gray-600 text-sm">PDF imprimible + Excel editable</p>
            </div>
            <div className="flex gap-3">
              <a
                href="/products/checklist-control-calidad.pdf"
                download
                className="group relative bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">📄</span>
                  <span className="text-sm">PDF</span>
                </span>
              </a>
              <a
                href="/products/checklist-control-calidad.xlsx"
                download
                className="group relative bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
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
        <div className="mb-12 p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
          <h3 className="font-bold text-gray-900 mb-2">¿Por qué necesitas Control de Calidad?</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            El <strong>80% de los problemas</strong> en importación de China están relacionados con la calidad del producto. 
            Los proveedores pueden cambiar materiales sin avisar, usar mano de obra menos calificada, o apurar la producción.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Tu objetivo:</strong> Detectar problemas ANTES del embarque. Corregir en origen cuesta $0. 
            Corregir después de enviar cuesta miles de dólares.
          </p>
        </div>

        {/* 4 Tipos de Inspección */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">4 Tipos de Inspección QC</h2>
            <p className="text-gray-600">Según etapa de producción y presupuesto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-xl">1️⃣</span>
                  IPC - Initial Production Check
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Cuándo:</strong> 10-20% del pedido producido</div>
                  <div><strong>Objetivo:</strong> Verificar materiales, setup, primeras unidades</div>
                  <div><strong>Costo:</strong> $200-350</div>
                  <div className="pt-2 border-t border-gray-200">
                    <strong className="text-emerald-600">Recomendado:</strong> Pedidos &gt;$10,000 o productos críticos
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-4 border-b border-purple-200">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-xl">2️⃣</span>
                  DUPRO - During Production
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Cuándo:</strong> 40-60% producción completada</div>
                  <div><strong>Objetivo:</strong> Verificar proceso, calidad consistente</div>
                  <div><strong>Costo:</strong> $250-400</div>
                  <div className="pt-2 border-t border-gray-200">
                    <strong className="text-emerald-600">Recomendado:</strong> Pedidos &gt;$20,000 o primer pedido
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-emerald-400 overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 border-b border-emerald-600 text-white">
                <h3 className="font-bold flex items-center gap-2">
                  <span className="text-xl">3️⃣</span>
                  PSI - Pre-Shipment Inspection ⭐
                </h3>
              </div>
              <div className="p-6 bg-emerald-50">
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Cuándo:</strong> 100% producción lista, productos embalados</div>
                  <div><strong>Objetivo:</strong> Inspección completa antes de enviar</div>
                  <div><strong>Costo:</strong> $250-450</div>
                  <div className="pt-2 border-t border-emerald-300">
                    <strong className="text-emerald-700 text-base">✅ MÁS IMPORTANTE - Recomendado:</strong> TODO pedido &gt;$5,000
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-orange-400 hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 border-b border-orange-200">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-xl">4️⃣</span>
                  CLC - Container Loading Check
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Cuándo:</strong> Durante carga del contenedor</div>
                  <div><strong>Objetivo:</strong> Verificar cantidad, embalaje, carga segura</div>
                  <div><strong>Costo:</strong> $150-300</div>
                  <div className="pt-2 border-t border-gray-200">
                    <strong className="text-emerald-600">Recomendado:</strong> FCL (contenedor completo)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-emerald-50 rounded-lg mt-6 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 ¿Cuál elegir?</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>PSI (Pre-Shipment)</strong> es el mínimo indispensable. Es tu última oportunidad de detectar problemas antes del envío.
              Si el presupuesto lo permite, combina <strong>IPC + PSI</strong> para primer pedido con nuevo proveedor - detectas errores temprano 
              y validas el resultado final. DUPRO y CLC son opcionales para pedidos grandes o productos complejos.
            </p>
          </div>
        </section>

        {/* Checklist PSI */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Checklist PSI Completo (13 Partes)</h2>
            <p className="text-gray-600">Click en cada sección para ver el checklist completo</p>
          </div>

          <ChecklistExpandable />

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200 p-6 mt-6">
            <div className="bg-white p-6 rounded-lg border-2 border-emerald-300 mb-0">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-xl">📥</span>
                Contenido Completo en los Archivos
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                El <strong>PDF</strong> incluye el checklist completo con las 13 partes listas para imprimir y usar en inspección.
                El <strong>Excel</strong> es editable - puedes añadir tus propios puntos de control específicos para tu producto.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded">
                  <span className="text-2xl flex-shrink-0">📄</span>
                  <div className="text-sm">
                    <strong className="text-gray-900">PDF:</strong> Para imprimir y llevar a fábrica. Formato imprimible con casillas de verificación.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded">
                  <span className="text-2xl flex-shrink-0">📊</span>
                  <div className="text-sm">
                    <strong className="text-gray-900">Excel:</strong> Para personalizar. Añade criterios específicos de tu industria/producto.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg mt-6 mb-10">
            <h4 className="font-bold mb-2 text-lg">⭐ Cómo usar el checklist</h4>
            <p className="text-sm leading-relaxed mb-3 opacity-90">
              Este checklist sigue el <strong>estándar AQL (Acceptable Quality Limit)</strong> usado por empresas QC profesionales como GloryQC, SGS, Bureau Veritas, y AsiaInspection.
              Puedes usarlo tú mismo si visitas la fábrica, o dárselo a tu inspector QC como guía.
            </p>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-sm space-y-2">
                <div><strong>Tip 1:</strong> Lleva muestra aprobada + specs técnicas para comparar</div>
                <div><strong>Tip 2:</strong> Toma MUCHAS fotos (mínimo 30-50) como evidencia</div>
                <div><strong>Tip 3:</strong> Si encuentras defectos &gt;2.5% AQL, NO liberes pago final hasta corrección</div>
              </div>
            </div>
          </div>
        </section>

        {/* Empresas QC */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Empresas de Inspección QC</h2>
            <p className="text-gray-600">Si prefieres contratar profesionales</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'GloryQC', web: 'gloryqc.com', price: '$$', note: 'Especializada en control de calidad en China, excelente relación calidad/precio' },
              { name: 'SGS', web: 'sgs.com', price: '$$$', note: 'Líder global, más caro pero muy confiable' },
              { name: 'Bureau Veritas', web: 'bureauveritas.com', price: '$$$', note: 'Gran reputación, presencia global' },
              { name: 'AsiaInspection', web: 'asiainspection.com', price: '$$', note: 'Online, precio medio, rápido' },
            ].map((company) => (
              <div key={company.name} className="bg-white rounded-lg border-2 border-gray-200 p-5 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900 text-lg">{company.name}</h4>
                  <span className="text-emerald-600 font-bold">{company.price}</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{company.web}</div>
                <p className="text-sm text-gray-700">{company.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Download Section - Bottom */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 border-y border-emerald-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Descargar Checklist
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Checklist completo en PDF (para imprimir) y Excel (para editar)
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <a
              href="/products/checklist-control-calidad.pdf"
              download
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-emerald-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📄
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-1">Checklist PDF</div>
                  <div className="text-gray-600">Formato imprimible • 211 KB</div>
                </div>
              </div>
              <div className="text-emerald-600 group-hover:text-emerald-700 font-bold text-lg group-hover:translate-x-1 transition-transform">
                Descargar →
              </div>
            </a>

            <a
              href="/products/checklist-control-calidad.xlsx"
              download
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-emerald-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📊
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-1">Checklist Excel</div>
                  <div className="text-gray-600">Editable y personalizable • 6.7 KB</div>
                </div>
              </div>
              <div className="text-emerald-600 group-hover:text-emerald-700 font-bold text-lg group-hover:translate-x-1 transition-transform">
                Descargar →
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <Link
          href="/productos/checklist-control-calidad/success"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-base group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver a tu compra
        </Link>
      </div>
    </div>
  );
}
