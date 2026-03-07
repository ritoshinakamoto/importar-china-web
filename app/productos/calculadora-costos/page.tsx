'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Calculator, TrendingUp, AlertCircle, Shield, Star, ChevronDown, ChevronUp, Download } from 'lucide-react';
import CheckoutModal from '@/components/CheckoutModal';
import { PRODUCTS } from '@/lib/products';

export default function CalculadoraCostosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const product = PRODUCTS['calculadora-costos'];

  const benefits = [
    {
      icon: Calculator,
      title: "Cálculo Exacto en 5 Minutos",
      description: "Introduce los datos de tu producto y obtén el costo real incluyendo TODO: shipping, aranceles, IVA, imprevistos."
    },
    {
      icon: TrendingUp,
      title: "Analiza Tu Margen Real",
      description: "Descubre si tu producto es viable ANTES de hacer el pedido. Evita sorpresas de costos ocultos."
    },
    {
      icon: AlertCircle,
      title: "Evita Errores de €Miles",
      description: "El 70% de importadores novatos olvidan costos críticos. Esta calculadora lo incluye todo automáticamente."
    },
    {
      icon: Shield,
      title: "Base de Aranceles Incluida",
      description: "Tabla con códigos TARIC y tasas arancelarias de productos comunes. No necesitas buscar en webs oficiales."
    }
  ];

  const features = [
    "Calculadora Excel completa y pre-configurada",
    "Secciones para: FOB, Shipping (LCL/FCL/Aéreo), Aranceles, IVA",
    "Análisis automático de margen y ROI",
    "Base de datos con 50+ códigos TARIC comunes",
    "Guía paso a paso con ejemplos reales",
    "Fórmulas validadas con +200 importaciones reales",
    "Compatible con Excel y Google Sheets",
    "Actualizable con tus propios datos"
  ];

  const faqs = [
    {
      question: "¿Necesito conocimientos avanzados de Excel?",
      answer: "No. Solo debes rellenar las celdas verdes con los datos de tu producto (precio, cantidad, peso). Las fórmulas calculan todo automáticamente. Incluye guía paso a paso con capturas."
    },
    {
      question: "¿Funciona para cualquier país de destino?",
      answer: "Sí. Está optimizada para España, México, Argentina y Chile, pero puedes adaptarla fácilmente a cualquier país cambiando las tasas de IVA y aranceles en tu caso específico."
    },
    {
      question: "¿Cómo sé qué código TARIC tiene mi producto?",
      answer: "Incluimos una hoja con 50+ códigos TARIC de productos comunes (electrónica, textiles, hogar, etc.). También te enseñamos cómo buscar el tuyo en la web oficial de la UE."
    },
    {
      question: "¿Qué formato es? ¿Excel o Google Sheets?",
      answer: "Archivo .xlsx (Excel). También funciona perfectamente en Google Sheets si lo subes ahí. Incluye instrucciones para ambas plataformas."
    },
    {
      question: "¿Incluye costos de certificaciones (CE, FDA, etc.)?",
      answer: "Sí, hay una sección 'Otros Costos' donde puedes añadir certificaciones, inspecciones QC, fotografía de producto, etc. Todo se suma automáticamente al costo final."
    },
    {
      question: "¿Hay actualizaciones cuando cambien los aranceles?",
      answer: "Sí. Te notificamos por email cuando haya cambios importantes en regulaciones o aranceles (típico 1-2 veces al año). La actualización es gratuita."
    }
  ];

  const exampleCalculation = {
    product: "Lámpara LED de Escritorio",
    fob: "8.50",
    quantity: "1,000",
    shipping: "2,400",
    customs: "2,788",
    total: "15,926",
    unitCost: "15.93",
    unitCostEur: "14.66",
    sellPrice: "39.90",
    margin: "63%",
    roi: "172%"
  };

  return (
    <>
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} product={product} />
      <div className="min-h-screen bg-[#faf9f7]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🔥 Precio de Lanzamiento: €12 (Valor Real: €37)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
              Calculadora de Costos<br />
              <span className="text-blue-600">Para Importar Desde China</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubre el costo REAL de tu producto antes de hacer el pedido. Incluye FOB, shipping, aranceles, IVA, imprevistos y análisis de margen automático.
            </p>

            {/* Pain Points */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">¿Te ha pasado esto?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Pediste producto a $5/unidad pero acabó costándote $18 con todos los gastos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Olvidaste contar el IVA o los aranceles y tu margen desapareció</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">No sabías si era mejor envío aéreo, LCL o contenedor completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Pensaste que tenías 60% de margen pero acabaste con solo 20%</span>
                </li>
              </ul>
            </div>

            <a 
              href="#comprar" 
              className="inline-block bg-blue-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              Descargar Calculadora - Solo €12
            </a>
            <p className="text-sm text-gray-500">
              ✅ Descarga instantánea • ✅ Garantía 30 días • ✅ Excel + Google Sheets
            </p>

            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" />
                <span><strong>15 años</strong> de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <span><strong>+200 importaciones</strong> validadas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              Por Qué Necesitas Esta Calculadora
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              No es una hoja de Excel genérica. Son 15 años de experiencia importando 200+ contenedores convertidos en fórmulas automáticas.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
              Ejemplo Real: Importar 1,000 Lámparas LED
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Así se ve la calculadora en acción con un producto real. Todo calculado automáticamente.
            </p>

            <div className="bg-white rounded-xl border-2 border-blue-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-4">📥 Datos de Entrada</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Producto:</span>
                      <span className="font-semibold">{exampleCalculation.product}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Precio FOB:</span>
                      <span className="font-semibold">${exampleCalculation.fob}/unidad</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Cantidad:</span>
                      <span className="font-semibold">{exampleCalculation.quantity} unidades</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Transporte:</span>
                      <span className="font-semibold">LCL (15 m³)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Resultados Automáticos</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Shipping total:</span>
                      <span className="font-semibold">${exampleCalculation.shipping}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Aranceles + IVA:</span>
                      <span className="font-semibold">${exampleCalculation.customs}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b bg-blue-50">
                      <span className="text-gray-900 font-bold">Costo por unidad:</span>
                      <span className="font-bold text-blue-600">€{exampleCalculation.unitCostEur}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b bg-green-50">
                      <span className="text-gray-900 font-bold">Margen si vendes a €{exampleCalculation.sellPrice}:</span>
                      <span className="font-bold text-green-600">{exampleCalculation.margin} • ROI {exampleCalculation.roi}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <p className="text-lg font-bold text-gray-900">
                  ✅ PRODUCTO VIABLE - Margen excelente ({'>'}60%)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  La calculadora te muestra esto en 2 minutos. Sin errores. Sin sorpresas.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => setCheckoutOpen(true)}
                className="inline-block bg-gray-900 text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Quiero Calcular Mis Costos - €12
              </button>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
              Qué Incluye la Calculadora (Valor €37)
            </h2>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-lg p-4">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-gray-900 mb-2">
                ✅ Garantía de Satisfacción 30 Días
              </p>
              <p className="text-gray-700">
                Si la calculadora no te ayuda a optimizar costos o encontrar tu margen real, te devolvemos el 100% sin preguntas.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
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
        <section id="comprar" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Calcula el Costo Real de Tu Producto Hoy
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Descarga instantánea. Garantía 30 días. Compatible Excel + Google Sheets.
            </p>

            <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-2xl">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-2xl">€37</span>
                <span className="text-5xl font-bold text-blue-600">€12</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Precio de lanzamiento
              </p>

              <button 
                onClick={() => setCheckoutOpen(true)}
                className="w-full bg-blue-600 text-white text-xl font-bold py-5 rounded-xl hover:bg-blue-700 transition-colors mb-4 cursor-pointer"
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
                  <span>Actualiz aciones futuras gratis</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-blue-100">
              🔒 Pago 100% seguro procesado por Stripe
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Garantía 100% Sin Riesgo</h3>
            <p className="text-gray-300">
              Si en los próximos 30 días la calculadora no te ayuda a entender tus costos reales, 
              te devolvemos el 100% de tu dinero. Sin preguntas. Sin complicaciones.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
