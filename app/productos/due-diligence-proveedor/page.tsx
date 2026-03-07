'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Search, AlertTriangle, Shield, Star, ChevronDown, ChevronUp, Download } from 'lucide-react';
import CheckoutModal from '@/components/CheckoutModal';
import { PRODUCTS } from '@/lib/products';

export default function DueDiligenceProveedorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const product = PRODUCTS['due-diligence-proveedor'];

  const benefits = [
    {
      icon: Search,
      title: "Evalúa Proveedores Objetivamente",
      description: "Sistema de puntuación con 60+ criterios. Compara múltiples proveedores y elige el mejor basado en datos, no en feeling."
    },
    {
      icon: AlertTriangle,
      title: "Detecta Red Flags Antes de Pagar",
      description: "El 70% de estafas en Alibaba se detectan con due diligence básico. Aprende qué verificar SIEMPRE antes del primer pedido."
    },
    {
      icon: Shield,
      title: "Verificación Legal Paso a Paso",
      description: "Guía completa de cómo verificar Business License, Export License, certificados y capacidad real de producción."
    },
    {
      icon: Check,
      title: "Compatible con Auditorías Profesionales",
      description: "Mismo formato que empresas de auditoría usan. Envíalo a tu inspector o úsalo como base para negociar."
    }
  ];

  const evaluationAreas = [
    {
      title: "Verificación Legal y Financiera",
      points: [
        "Business License (营业执照) - Cómo obtenerlo y qué verificar",
        "Búsqueda en China National Enterprise Credit",
        "Verificación en Alibaba (Gold Supplier, Trade Assurance)",
        "Capital registrado y años en el negocio",
        "Red flags: empresa suspendida, demandas, cambios recientes"
      ]
    },
    {
      title: "Capacidad de Producción e Infraestructura",
      points: [
        "Tipo real: Fabricante vs. Trading Company (cómo confirmarlo)",
        "Tamaño de planta y número de empleados",
        "Maquinaria y líneas de producción",
        "Capacidad mensual realista (con fórmula de validación)",
        "Control de calidad interno (procesos QC)"
      ]
    },
    {
      title: "Experiencia y Referencias",
      points: [
        "Clientes principales (pedir referencias verificables)",
        "Mercados de exportación (qué países)",
        "Productos similares fabricados previamente",
        "Certificaciones relevantes (CE, ISO, FDA, etc.)",
        "Presencia online y reputación"
      ]
    },
    {
      title: "Comunicación y Confianza",
      points: [
        "Calidad de respuestas (claridad, profesionalismo)",
        "Tiempo de respuesta promedio",
        "Transparencia (acepta visitas, inspecciones)",
        "Flexibilidad en negociación",
        "Red flags de comunicación (evasivas, cambios constantes)"
      ]
    }
  ];

  const features = [
    "Template de evaluación completo (60+ criterios)",
    "Sistema de puntuación objetivo (0-100 puntos)",
    "Checklist de verificación legal paso a paso",
    "Lista de red flags críticos (30+ señales de alerta)",
    "Plantillas de email para solicitar documentación",
    "Guía de cómo verificar empresa en registros chinos",
    "Formato Excel editable + PDF descargable",
    "Tabla comparativa para evaluar hasta 5 proveedores simultáneamente"
  ];

  const redFlags = [
    {
      flag: "Trading company que se hace pasar por fabricante",
      risk: "ALTO",
      why: "No tiene control sobre producción. Precios inflados."
    },
    {
      flag: "Pide 100% pago adelantado sin protección",
      risk: "CRÍTICO",
      why: "Riesgo de estafa. Siempre usar 30% adelanto + 70% antes del envío."
    },
    {
      flag: "No acepta inspección de calidad de terceros",
      risk: "ALTO",
      why: "Proveedor confiable no tiene problema con inspección externa."
    },
    {
      flag: "Precios 40%+ más bajos que competencia",
      risk: "MEDIO-ALTO",
      why: "Puede indicar materiales baratos, mano de obra no calificada."
    },
    {
      flag: "Empresa registrada hace <1 año",
      risk: "MEDIO",
      why: "Sin historial. Mayor riesgo de cierre o inexperiencia."
    },
    {
      flag: "No proporciona Business License verificable",
      risk: "CRÍTICO",
      why: "Podría no ser empresa legítima. No exportar sin verificar."
    }
  ];

  const faqs = [
    {
      question: "¿Puedo usar esto si no hablo chino?",
      answer: "Sí. El template está diseñado para trabajar en inglés. Incluimos enlaces a herramientas de verificación online en inglés (China National Enterprise Credit tiene versión en inglés). También incluimos plantillas de email en inglés para solicitar documentación."
    },
    {
      question: "¿Necesito viajar a China para hacer el due diligence?",
      answer: "No es obligatorio, especialmente para pedidos pequeños (<$10,000). El 80% de la verificación se hace online. Para pedidos grandes (>$20,000), recomendamos visita presencial o contratar inspector local. El template funciona para ambos escenarios."
    },
    {
      question: "¿Cómo verifico si una empresa es Trading Company o fabricante real?",
      answer: "El template incluye 8 métodos de verificación: revisar Business License (tipo de empresa), pedir fotos/videos de planta, verificar dirección en Google Maps, solicitar certificados de producción, preguntar sobre maquinaria específica, y más. Incluimos una tabla de señales que delatan a Trading Companies."
    },
    {
      question: "¿Qué hago si el proveedor no quiere proporcionar Business License?",
      answer: "Red flag inmediata. Proveedor legítimo lo proporciona sin problema (es documento público en China). El template incluye scripts de email para solicitar documentación de forma profesional. Si persiste la negativa, nuestro consejo: buscar otro proveedor."
    },
    {
      question: "¿Incluye verificación de certificados (CE, RoHS, FDA)?",
      answer: "Sí. Sección completa sobre cómo verificar autenticidad de certificados: dónde buscar número de certificado, qué webs oficiales usar, señales de certificados falsos. También incluimos lista de certificaciones comunes por tipo de producto."
    },
    {
      question: "¿Puedo compartir este template con mi equipo/socios?",
      answer: "Sí, sin problema. Una compra = uso ilimitado para tu empresa. No puedes revenderlo o distribuirlo públicamente, pero internamente úsalo con quien necesites."
    }
  ];

  return (
    <>
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} product={product} />
      <div className="min-h-screen bg-[#faf9f7]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🔥 Precio de Lanzamiento: €9 (Valor Real: €27)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
              Due Diligence de Proveedor<br />
              <span className="text-purple-600">Template de Evaluación Completo</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Evalúa proveedores como lo hacen importadores profesionales. 60+ criterios de verificación. Detecta estafas y elige el mejor proveedor basado en datos reales.
            </p>

            {/* Pain Points */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">¿Te suena familiar?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Elegiste proveedor por precio bajo y acabó siendo un desastre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">No sabías qué verificar antes del primer pedido y tuviste problemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">El "fabricante" resultó ser un trading company con sobreprecio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Tenías 5 opciones en Alibaba y no sabías cómo compararlas objetivamente</span>
                </li>
              </ul>
            </div>

            <a 
              href="#comprar" 
              className="inline-block bg-purple-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              Descargar Template - Solo €9
            </a>
            <p className="text-sm text-gray-500">
              ✅ Descarga instantánea • ✅ Garantía 30 días • ✅ Excel + PDF
            </p>

            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-purple-600" />
                <span><strong>60+ criterios</strong> de evaluación</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                <span><strong>30+ red flags</strong> documentados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              Por Qué Necesitas Este Template
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              El 70% de problemas en importación se evitan con una buena selección de proveedor. Este template te da el sistema.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              4 Áreas de Evaluación Completa
            </h2>
            <p className="text-center text-gray-600 mb-12">
              El template cubre TODOS los aspectos críticos. Nada queda al azar.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {evaluationAreas.map((area, idx) => (
                <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">{area.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <p className="text-sm text-gray-700 text-center">
                💡 <strong>Sistema de Puntuación:</strong> El template calcula automáticamente una puntuación 0-100 basada en tus respuestas. 
                Proveedor {'>'}80 puntos = Excelente. 60-80 = Aceptable con verificaciones extra. {'<'}60 = Alto riesgo, buscar alternativas.
              </p>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              Red Flags Críticos - Qué Evitar
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Estas señales aparecen en el 90% de estafas o proveedores problemáticos.
            </p>

            <div className="space-y-4">
              {redFlags.map((item, idx) => (
                <div key={idx} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <h4 className="font-bold text-gray-900">{item.flag}</h4>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">{item.why}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      item.risk === 'CRÍTICO' ? 'bg-red-600 text-white' : 
                      item.risk === 'ALTO' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.risk}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setCheckoutOpen(true)}
                className="inline-block bg-gray-900 text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Quiero el Template Completo - €9
              </button>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
              Qué Incluye el Template (Valor €27)
            </h2>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-gray-900 mb-2">
                ✅ Garantía de Satisfacción 30 Días
              </p>
              <p className="text-gray-700">
                Si el template no te ayuda a evaluar proveedores o evitar malas decisiones, te devolvemos el 100% sin preguntas.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="comprar" className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Elige Proveedores Confiables Hoy
            </h2>
            <p className="text-xl mb-8 text-purple-50">
              60+ criterios. Sistema de puntuación. Descarga instantánea. Garantía 30 días.
            </p>

            <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-2xl">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-2xl">€27</span>
                <span className="text-5xl font-bold text-purple-600">€9</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Precio de lanzamiento
              </p>

              <button 
                onClick={() => setCheckoutOpen(true)}
                className="w-full bg-purple-600 text-white text-xl font-bold py-5 rounded-xl hover:bg-purple-700 transition-colors mb-4 cursor-pointer"
              >
                Descargar Ahora
              </button>

              <div className="space-y-2 text-sm text-gray-600 text-left">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Descarga instantánea después del pago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Garantía 30 días sin preguntas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Pago seguro con Stripe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Excel editable + PDF</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-purple-100">
              🔒 Pago 100% seguro procesado por Stripe
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Garantía 100% Sin Riesgo</h3>
            <p className="text-gray-300">
              Si en los próximos 30 días el template no te ayuda a evaluar proveedores mejor, 
              te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
