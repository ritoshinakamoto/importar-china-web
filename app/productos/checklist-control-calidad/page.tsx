'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ClipboardCheck, AlertTriangle, Shield, Star, ChevronDown, ChevronUp, Download } from 'lucide-react';
import CheckoutModal from '@/components/CheckoutModal';
import { PRODUCTS } from '@/lib/products';

export default function ChecklistQCPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const product = PRODUCTS['checklist-control-calidad'];

  const benefits = [
    {
      icon: ClipboardCheck,
      title: "Detecta Defectos ANTES del Envío",
      description: "Checklist de 80+ puntos de inspección. Encuentra problemas en fábrica, no cuando llegue el contenedor."
    },
    {
      icon: AlertTriangle,
      title: "Evita Pérdidas de €Miles",
      description: "El 80% de problemas de calidad se detectan en inspección pre-embarque. Prevenir cuesta $300. Corregir después: $miles."
    },
    {
      icon: ClipboardCheck,
      title: "4 Tipos de Inspección Cubiertos",
      description: "IPC (inicio), DUPRO (mitad), PSI (pre-embarque), CLC (carga contenedor). Sabes exactamente cuándo usar cada uno."
    },
    {
      icon: Shield,
      title: "Listo Para Imprimir",
      description: "Formato PDF + Excel. Llévalo a fábrica o envíalo a tu inspector. Compatible con SGS, Bureau Veritas, AsiaInspection."
    }
  ];

  const inspectionTypes = [
    {
      name: "PSI - Pre-Shipment Inspection",
      when: "100% producción lista, productos embalados",
      why: "Más crítica. Última oportunidad de corregir antes del envío.",
      recommended: "TODO pedido >$5,000",
      badge: "⭐ MÁS IMPORTANTE"
    },
    {
      name: "IPC - Initial Production Check",
      when: "10-20% producción completada",
      why: "Verificar materiales y primeras unidades correctas.",
      recommended: "Pedidos >$10,000 o productos críticos",
      badge: "INICIO"
    },
    {
      name: "DUPRO - During Production",
      when: "40-60% producción",
      why: "Asegurar calidad consistente durante el proceso.",
      recommended: "Pedidos >$20,000 o primer pedido con proveedor",
      badge: "MITAD"
    },
    {
      name: "CLC - Container Loading Check",
      when: "Durante carga del contenedor",
      why: "Verificar cantidad final y carga segura.",
      recommended: "FCL (contenedor completo)",
      badge: "CARGA"
    }
  ];

  const checklistSections = [
    "A. Información General y Documentación",
    "B. Verificación de Cantidades (con cálculo de muestra estadística)",
    "C. Inspección Visual del Producto (80+ puntos)",
    "D. Pruebas Funcionales (según tipo de producto)",
    "E. Embalaje y Etiquetado",
    "F. Verificación de Certificados (CE, RoHS, FDA, etc.)",
    "G. Fotografía de Evidencia (qué fotografiar)",
    "H. Reporte Final (cómo documentar hallazgos)"
  ];

  const features = [
    "Checklist completo PSI (Pre-Shipment Inspection) - 80+ puntos",
    "Checklists simplificados IPC, DUPRO y CLC",
    "Guía de cuándo usar cada tipo de inspección",
    "Tabla de muestreo estadístico (cuántas unidades revisar según tamaño lote)",
    "Plantilla de reporte de defectos con clasificación (crítico/mayor/menor)",
    "Lista de defectos comunes por categoría de producto",
    "Formato PDF para imprimir + Excel editable",
    "Compatible con estándares de empresas QC profesionales"
  ];

  const faqs = [
    {
      question: "¿Necesito contratar una empresa de inspección o puedo hacerlo yo?",
      answer: "Ambas opciones funcionan. Si es tu primer pedido o <$10,000, puedes usar el checklist tú mismo o enviar a un conocido en China. Para pedidos grandes (>$20,000), recomendamos empresa profesional (SGS, Bureau Veritas). Nuestro checklist funciona para ambos casos."
    },
    {
      question: "¿El checklist es específico para un tipo de producto?",
      answer: "No. Es universal y cubre las verificaciones comunes a cualquier producto (dimensiones, materiales, acabado, embalaje, etc.). Incluye secciones específicas para: electrónica, textiles, productos de hogar, juguetes, muebles."
    },
    {
      question: "¿Qué hago si encuentro defectos durante la inspección?",
      answer: "El checklist incluye una sección 'Criterios de Aceptación' con niveles AQL estándar (Acceptable Quality Level). Te dice cuántos defectos son tolerables según el tamaño del lote. También incluimos plantillas de email para negociar con el proveedor si hay problemas."
    },
    {
      question: "¿Cuánto cuesta una inspección profesional?",
      answer: "Típicamente: IPC $200-350, DUPRO $250-400, PSI $250-450, CLC $150-300. Varía según complejidad del producto y ubicación de la fábrica. El checklist te permite maximizar el valor de esa inspección o hacerla tú mismo si prefieres ahorrar."
    },
    {
      question: "¿Incluye fotos de ejemplo de defectos comunes?",
      answer: "Sí. Incluimos 30+ fotos reales de defectos típicos (rayones, manchas, ensamblaje incorrecto, embalaje deficiente, etc.) para que sepas exactamente qué buscar."
    },
    {
      question: "¿Funciona si mi producto es muy específico/técnico?",
      answer: "El 90% del checklist es universal (construcción, acabado, embalaje). Para aspectos técnicos específicos de tu producto, incluimos una sección editable donde puedes añadir tus propios criterios (por ejemplo: pruebas eléctricas específicas, certificaciones especiales, etc.)."
    }
  ];

  return (
    <>
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} product={product} />
      <div className="min-h-screen bg-[#faf9f7]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🔥 Precio de Lanzamiento: €9 (Valor Real: €27)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
              Checklist Control de Calidad<br />
              <span className="text-green-600">Para Inspecciones en China</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Detecta defectos ANTES del embarque. 80+ puntos de inspección profesional. Usa el mismo checklist que empresas como SGS y Bureau Veritas.
            </p>

            {/* Pain Points */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">¿Te ha pasado?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Recibiste producto con defectos que nadie revisó antes del envío</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Pagaste $400 a SGS pero el reporte fue superficial y dejó pasar errores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">No sabías qué criterios usar para aceptar o rechazar el lote</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Perdiste €miles porque era muy tarde para corregir problemas</span>
                </li>
              </ul>
            </div>

            <a 
              href="#comprar" 
              className="inline-block bg-green-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              Descargar Checklist - Solo €9
            </a>
            <p className="text-sm text-gray-500">
              ✅ Descarga instantánea • ✅ Garantía 30 días • ✅ PDF + Excel
            </p>

            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                <span><strong>80+ puntos</strong> de inspección</span>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-green-600" />
                <span><strong>4 tipos</strong> de inspección</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              Por Qué Necesitas Este Checklist
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              El 80% de problemas de importación son de calidad. Una buena inspección pre-embarque evita pérdidas de €miles.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              4 Tipos de Inspección - Cuándo Usar Cada Uno
            </h2>
            <p className="text-center text-gray-600 mb-12">
              No todas las inspecciones son iguales. Cada tipo tiene un momento y propósito específico.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {inspectionTypes.map((type, idx) => (
                <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{type.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                      type.badge === '⭐ MÁS IMPORTANTE' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {type.badge}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Cuándo:</span>
                      <span className="text-gray-600"> {type.when}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Por qué:</span>
                      <span className="text-gray-600"> {type.why}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="font-semibold text-gray-700">Recomendado:</span>
                      <span className="text-gray-600"> {type.recommended}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <p className="text-sm text-gray-700 text-center">
                💡 <strong>Tip:</strong> Para tu primer pedido con un proveedor nuevo, recomendamos mínimo PSI (pre-embarque). 
                Si el pedido es grande ({'>'}$20,000), combina IPC + PSI para máxima seguridad.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              Qué Incluye el Checklist PSI Completo
            </h2>
            <p className="text-center text-gray-600 mb-12">
              80+ puntos de inspección organizados en 8 secciones. Nada queda sin revisar.
            </p>

            <div className="space-y-4">
              {checklistSections.map((section, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-gray-800 font-medium pt-0.5">{section}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setCheckoutOpen(true)}
                className="inline-block bg-gray-900 text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Quiero el Checklist Completo - €9
              </button>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
              Qué Incluye el Pack (Valor €27)
            </h2>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-gray-900 mb-2">
                ✅ Garantía de Satisfacción 30 Días
              </p>
              <p className="text-gray-700">
                Si el checklist no te ayuda a detectar defectos o mejorar tu proceso de inspección, te devolvemos el 100% sin preguntas.
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
        <section id="comprar" className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Inspecciona Como un Profesional Hoy
            </h2>
            <p className="text-xl mb-8 text-green-50">
              80+ puntos de inspección. Descarga instantánea. Garantía 30 días.
            </p>

            <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-2xl">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-2xl">€27</span>
                <span className="text-5xl font-bold text-green-600">€9</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Precio de lanzamiento
              </p>

              <button 
                onClick={() => setCheckoutOpen(true)}
                className="w-full bg-green-600 text-white text-xl font-bold py-5 rounded-xl hover:bg-green-700 transition-colors mb-4 cursor-pointer"
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
                  <span>Formato PDF + Excel editable</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-green-100">
              🔒 Pago 100% seguro procesado por Stripe
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Garantía 100% Sin Riesgo</h3>
            <p className="text-gray-300">
              Si en los próximos 30 días el checklist no te ayuda a detectar problemas antes del envío, 
              te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
