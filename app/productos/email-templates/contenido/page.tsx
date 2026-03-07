import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import TemplatesExpandable from './TemplatesExpandable';

export default async function EmailTemplatesContent() {
  const contentPath = path.join(process.cwd(), 'content', 'file_97---0feb503a-c244-451d-a4be-6e29c545ca58.md');
  const rawContent = fs.readFileSync(contentPath, 'utf-8');
  
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 animate-fade-in">
            <span className="text-lg">📧</span>
            <span>Email Templates</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-[0.95] tracking-tight animate-fade-in-delay-1">
            15 Plantillas<br/>
            de Email<br/>
            <span className="text-teal-100">Profesionales</span>
          </h1>
          
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl leading-relaxed animate-fade-in-delay-2">
            Comunicación efectiva con proveedores chinos. Plantillas listas para usar en cotizaciones, 
            negociaciones y seguimiento de pedidos.
          </p>
        </div>
      </div>

      {/* Download CTA - Top */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-1">Descarga Instantánea</h2>
              <p className="text-gray-600 text-sm">PDF con 15 templates listos para usar</p>
            </div>
            <a
              href="/products/email-templates-proveedores-china.pdf"
              download
              className="group relative bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <span>
                  <div className="text-left">
                    <div className="text-sm">Descargar PDF</div>
                    <div className="text-xs text-teal-100 font-normal">322 KB</div>
                  </div>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Intro */}
        <div className="mb-12 p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Parte del Import Starter Kit</strong> — 
            15 plantillas profesionales para cada etapa del proceso de importación. 
            Desde el primer contacto hasta el seguimiento post-venta.
          </p>
        </div>

        {/* Reglas de Oro */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Reglas de Oro: Comunicación con Proveedores</h2>
            <p className="text-gray-600">Antes de usar los templates, ten en cuenta estas reglas</p>
          </div>

          <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 px-6 py-4 border-b border-teal-200">
              <h3 className="text-lg font-bold text-gray-900">✅ 5 Principios Fundamentales</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Sé profesional</h4>
                    <p className="text-sm text-gray-700">No parezcas novato. Los proveedores detectan inexperiencia y ajustan precios.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Usa ficha de producto</h4>
                    <p className="text-sm text-gray-700">Centraliza toda la info técnica en un documento adjunto (specs, dimensiones, materiales).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Mantén un canal</h4>
                    <p className="text-sm text-gray-700">No disperses: Alibaba → Email → WhatsApp. Elige uno y mantén historial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Pide todo por escrito</h4>
                    <p className="text-sm text-gray-700">Confirmaciones escritas SIEMPRE. "Verbal no existe" en negocios internacionales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">No negocies todo</h4>
                    <p className="text-sm text-gray-700">Enfócate en: precio, plazo, forma pago, MOQ, calidad. El resto es ruido.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-teal-50 rounded-lg mt-4 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 ¿Por qué estas reglas?</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Los proveedores chinos gestionan cientos de clientes. Si demuestras <strong>profesionalismo y claridad</strong>, te toman en serio 
              y priorizan tus pedidos. Un email bien estructurado ahorra 10 idas y vueltas y acelera la producción.
              La regla #4 (todo por escrito) te salva si hay problemas - es tu respaldo legal.
            </p>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">15 Templates Profesionales</h2>
            <p className="text-gray-600">Click en cada template para ver el contenido completo</p>
          </div>

          <TemplatesExpandable />

          <div className="px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg mt-4 mb-10">
            <h4 className="font-bold mb-2 text-lg">⭐ Cómo usar estos templates</h4>
            <p className="text-sm leading-relaxed mb-3 opacity-90">
              Estos NO son emails para copiar-pegar. Son <strong>estructuras probadas</strong> que puedes personalizar.
              Reemplaza [TU NOMBRE], [PRODUCTO], [CANTIDAD], etc. con tus datos reales.
            </p>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-sm space-y-2">
                <div><strong>Tip 1:</strong> Adapta el tono según tu industria (B2B formal vs. consumer products más casual)</div>
                <div><strong>Tip 2:</strong> Adjunta siempre product spec sheet (PDF con fotos + dimensiones + materiales)</div>
                <div><strong>Tip 3:</strong> Los proveedores responden mejor a emails cortos y específicos que a novelas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido Completo */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Contenido Completo en el PDF</h2>
            <p className="text-gray-600">Descarga el PDF para acceder al texto completo de cada template</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-xl border-2 border-teal-200 p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">📝</span>
                  Lo que incluye cada template:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">✓</span>
                    <span><strong>Asunto</strong> optimizado para tasa de apertura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">✓</span>
                    <span><strong>Estructura completa</strong> del email en inglés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">✓</span>
                    <span><strong>Campos personalizables</strong> marcados [ENTRE CORCHETES]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">✓</span>
                    <span><strong>Notas de uso</strong> con consejos pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">✓</span>
                    <span><strong>Variantes</strong> según contexto (con/sin empresa, B2B/B2C)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  Beneficios de usar templates:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Ahorra 2-3 horas por email (no empiezas desde cero)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Tono profesional desde el primer contacto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>No olvidas datos críticos (MOQ, payment terms, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Acelera respuestas (proveedores tienen todo claro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0">•</span>
                    <span>Reduce idas y vueltas innecesarias</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-teal-300">
              <p className="text-sm text-gray-700 text-center">
                <strong className="text-gray-900">💡 Pro tip:</strong> Guarda los templates en tu email como "Borradores" 
                para acceso rápido. Personaliza y envía en &lt;5 minutos.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Download Section - Bottom */}
      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 border-y border-teal-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Descargar Templates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PDF con los 15 templates completos listos para personalizar y usar
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <a
              href="/products/email-templates-proveedores-china.pdf"
              download
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-teal-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📄
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-1">Email Templates PDF</div>
                  <div className="text-gray-600">15 plantillas profesionales • 322 KB</div>
                </div>
              </div>
              <div className="text-teal-600 group-hover:text-teal-700 font-bold text-lg group-hover:translate-x-1 transition-transform">
                Descargar →
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <Link
          href="/productos/email-templates/success"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-base group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver a tu compra
        </Link>
      </div>
    </div>
  );
}
