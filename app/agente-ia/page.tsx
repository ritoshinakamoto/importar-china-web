import Link from 'next/link'

export default function AgenteIAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-6">
          <span>✨</span>
          <span>Nuevo: Agente IA Personal de Importación</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Tu Agente IA Personal<br />
          <span className="text-blue-600">Que Gestiona Tu Negocio</span><br />
          de Importación
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Olvídate de cursos de 10 horas. Tu agente IA localiza productos virales, 
          negocia con proveedores chinos, calcula costes reales y te guía paso a paso.
        </p>
        
        <p className="text-2xl font-semibold text-slate-700 mb-10">
          Tú solo decides qué importar. <span className="text-blue-600">Tu agente hace el resto.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#pricing" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            Habla con tu agente ahora
            <span className="ml-2">→</span>
          </Link>
          <div className="text-sm text-slate-600">
            €49 primer mes · Sin permanencia
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl max-w-2xl mx-auto">
          <p className="text-sm font-medium text-blue-900 mb-2">💬 Cliente Beta</p>
          <p className="text-slate-700 italic">
            "Mi agente encontró 12 proveedores verificados en 5 minutos. 
            Con el curso me hubiera llevado semanas."
          </p>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Importar de China Es Complejo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Localizar proveedores fiables lleva días', desc: 'Buscar en Alibaba manualmente, uno por uno' },
              { title: 'Calcular costes reales da errores', desc: 'Aranceles, transporte, IVA... fácil equivocarse' },
              { title: 'No sabes si será rentable', desc: 'Hasta que inviertes miles de euros' },
              { title: 'Los cursos enseñan teoría', desc: 'Pero TÚ haces todo el trabajo' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-2 border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl flex-shrink-0">✕</span>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solución */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Tu Agente IA Lo Hace Por Ti
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Todo vía Telegram/WhatsApp. Como hablar con un socio experto.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '📈', title: 'Análisis de Nicho Automático', desc: 'Analiza 100+ productos/hora: tendencias, márgenes, competencia. Top 5 productos recomendados con viabilidad.' },
              { icon: '📦', title: 'Búsqueda Proveedores 24/7', desc: 'Escanea Alibaba/1688 automáticamente. Evalúa años operando, certificados, reviews. Genera emails listas para enviar.' },
              { icon: '💰', title: 'Cálculo Costes Reales', desc: 'Incoterms, transporte, aranceles, IVA. Excel con cubicaje contenedor. Coste total por unidad incluyendo TODO.' },
              { icon: '📊', title: 'Métricas en Tiempo Real', desc: 'Tracking ROI por producto. Alertas margen. Proyección ventas. Dashboard actualizado automáticamente.' },
              { icon: '💡', title: 'Planificación Financiera', desc: 'Proyección tesorería 3 meses. Cálculo IVA trimestral. Gestión stock con alertas MOQ proveedor.' },
              { icon: '🏪', title: 'Estrategia Distribución', desc: 'Análisis multi-canal: Amazon FBA, web propia, tradicional. Cálculo márgenes por canal. Checklist Seller Central.' }
            ].map((item, i) => (
              <div key={i} className="p-6 border-2 border-blue-100 hover:border-blue-300 rounded-lg transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Curso Tradicional vs Tu Agente IA
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-700 mb-4">❌ Curso Tradicional</h3>
              {[
                '10 horas video → días de estudio',
                'Tú buscas proveedores 1 por 1',
                'Excel manual (propenso a errores)',
                'Dudas sin resolver',
                'Info desactualizada'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-slate-400">⏱️</span>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600 mb-4">✅ Tu Agente IA</h3>
              {[
                '5 minutos → respuestas concretas',
                'Escanea 100+ proveedores automáticamente',
                'Cálculos automáticos actualizados en vivo',
                'Pregunta 24/7 a tu agente',
                'Datos real-time (2026)'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-blue-600">✓</span>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Cómo Funciona
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { num: '1', title: 'Dinos tu nicho', desc: 'Termos, joyería, gadgets, productos para el hogar...' },
              { num: '2', title: 'Tu agente analiza viabilidad', desc: 'Demanda, competencia, márgenes, y busca proveedores verificados' },
              { num: '3', title: 'Recibes análisis completo', desc: 'Lista proveedores, plantillas email, cálculos Excel listos para usar' },
              { num: '4', title: 'Preguntas lo que necesites 24/7', desc: 'Tu agente está siempre disponible via Telegram/WhatsApp' }
            ].map((item, i) => (
              <div key={i} className="p-6 border-l-4 border-l-blue-600 bg-white rounded-lg shadow-sm">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-lg font-semibold text-slate-900">
              Primera importación exitosa en 30 días o te devolvemos el dinero.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Empieza Ahora
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Sin permanencia · Cancela cuando quieras
          </p>
          
          <div className="max-w-md mx-auto border-2 border-blue-200 shadow-xl rounded-lg overflow-hidden bg-white">
            <div className="text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8">
              <div className="mb-2">
                <span className="text-5xl font-bold">€49</span>
                <span className="text-xl"> / primer mes</span>
              </div>
              <p className="text-blue-100">Setup + onboarding completo</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-slate-900">€99<span className="text-lg font-normal text-slate-600">/mes</span></p>
                <p className="text-sm text-slate-600">desde el segundo mes</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  'Agente IA dedicado 24/7',
                  'Análisis ilimitados de productos',
                  'Plantillas Excel + email',
                  'Acceso 8 cursos completos (bonus)',
                  '500 consultas/mes',
                  'Garantía 30 días'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 flex-shrink-0">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/registro-agente" className="block w-full text-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                Empezar ahora →
              </Link>
              
              <p className="text-center text-sm text-slate-600 mt-4">
                Sin permanencia · Cancela en cualquier momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Preguntas Frecuentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: '¿Es realmente IA o un humano?', a: '100% IA. Por eso funciona 24/7 y cuesta €99/mes en lugar de €3,000+ de un consultor humano.' },
              { q: '¿Necesito experiencia previa importando?', a: 'No. El agente te guía desde cero, paso a paso. Está diseñado para principiantes.' },
              { q: '¿Funciona para cualquier tipo de producto?', a: 'Sí, pero funciona mejor para productos físicos <30kg (electrónica, hogar, moda, gadgets, decoración).' },
              { q: '¿Y si el agente se equivoca en algo?', a: 'Garantía 30 días. Si no encuentras proveedores viables o el agente no cumple lo prometido, reembolso completo sin preguntas.' },
              { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí, sin permanencia. Cancela cuando quieras desde tu panel de control.' },
              { q: '¿Qué pasa si supero 500 consultas/mes?', a: 'El agente te avisará cuando estés cerca del límite. Puedes upgradar a un plan premium (€299/mes) con consultas ilimitadas.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Tu Competencia Ya Está Importando
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            (Algunos con agentes IA, otros perdiendo tiempo en cursos)
          </p>
          
          <Link href="/registro-agente" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition">
            Habla con tu agente ahora →
          </Link>
          
          <p className="mt-6 text-blue-100">
            €49 primer mes · Sin permanencia · Garantía 30 días
          </p>
        </div>
      </section>
    </div>
  )
}
