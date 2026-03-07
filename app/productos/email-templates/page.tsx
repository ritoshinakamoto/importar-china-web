'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Mail, Clock, TrendingUp, Shield, Star, ChevronDown, ChevronUp, Download } from 'lucide-react';
import CheckoutModal from '@/components/CheckoutModal';
import { PRODUCTS } from '@/lib/products';

export default function EmailTemplatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const product = PRODUCTS['email-templates'];

  const benefits = [
    {
      icon: Clock,
      title: "Ahorra 30+ Horas al Mes",
      description: "Deja de perder tiempo redactando emails desde cero. Copia, personaliza y envía en 2 minutos."
    },
    {
      icon: TrendingUp,
      title: "Respuestas en <24 Horas",
      description: "Emails profesionales que generan confianza. Proveedores responden rápido cuando te toman en serio."
    },
    {
      icon: Mail,
      title: "15 Plantillas Listas Para Usar",
      description: "Desde primer contacto hasta negociación final. Cada situación cubierta con el tono correcto."
    },
    {
      icon: Shield,
      title: "Sin Errores Culturales",
      description: "Fórmulas probadas con proveedores chinos reales. Evita malentendidos que arruinan negociaciones."
    }
  ];

  const templates = [
    {
      name: "Primer Contacto con Proveedor",
      preview: "Subject: Inquiry about [Product] - Potential Long-term Partnership\n\nDear [Supplier Name],\n\nI came across your company on Alibaba and I'm impressed by your [specific product/capability]...",
      usage: "Cuando encuentras un proveedor potencial en Alibaba o ferias"
    },
    {
      name: "Solicitud de Muestras",
      preview: "Subject: Sample Request - [Product Name]\n\nHi [Name],\n\nFollowing our previous conversation, I'd like to request samples to evaluate quality before placing a bulk order...",
      usage: "Después del primer contacto positivo, para pedir muestras"
    },
    {
      name: "Negociación de Precio (Avanzada)",
      preview: "Subject: Pricing Discussion - Volume Order\n\nDear [Name],\n\nThank you for the quote. After reviewing, I'd like to discuss pricing optimization for our projected volumes...",
      usage: "Cuando necesitas negociar sin parecer amateur ni agresivo"
    }
  ];

  const faqs = [
    {
      question: "¿Las plantillas están en español o inglés?",
      answer: "Todas las plantillas están en inglés, que es el idioma estándar para comunicarse con proveedores chinos. Incluimos notas en español explicando cuándo usar cada una y qué personalizar."
    },
    {
      question: "¿Funcionan con cualquier tipo de producto?",
      answer: "Sí. Las plantillas son universales y funcionan para cualquier producto industrial o de consumo. Solo necesitas personalizar el nombre del producto y detalles específicos."
    },
    {
      question: "¿Incluye soporte si tengo dudas?",
      answer: "Las plantillas incluyen instrucciones detalladas para cada situación. Si necesitas ayuda personalizada, ofrecemos consultoría 1:1 como producto separado."
    },
    {
      question: "¿Qué formato tienen las plantillas?",
      answer: "PDF descargable con las 15 plantillas + guía de uso. Puedes copiar y pegar directamente en tu email o adaptarlas a tu estilo."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "Sí, 30 días de garantía sin preguntas. Si no te funcionan, devolvemos el 100% de tu dinero."
    },
    {
      question: "¿Las plantillas se actualizan?",
      answer: "Sí. Cuando agregamos nuevas plantillas basadas en situaciones reales de clientes, te las enviamos gratis a tu email."
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      company: "Importador de Electrónica",
      text: "Llevaba meses escribiendo emails que nunca respondían. Con estas plantillas conseguí 3 proveedores serios en 2 semanas. La plantilla de negociación me ahorró literalmente €2,000 en mi primer pedido.",
      rating: 5
    },
    {
      name: "Laura R.",
      company: "E-commerce Textil",
      text: "Lo mejor es que vienen con notas en español explicando exactamente qué cambiar. Las uso tal cual y los proveedores me responden súper rápido. Ya no pierdo horas redactando.",
      rating: 5
    }
  ];

  return (
    <>
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} product={product} />
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Urgency Badge */}
          <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🔥 Precio de Lanzamiento: €9 (Valor Real: €27) - Solo Esta Semana
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
            15 Plantillas de Email<br />
            <span className="text-teal-600">Que Cierran Deals con Proveedores Chinos</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Deja de perder 2 horas redactando cada email con miedo a ofender o parecer amateur. 
            Usa las mismas plantillas que importadores profesionales usan para negociar con China.
          </p>

          {/* Pain Points */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">¿Te suena familiar?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">❌</span>
                <span className="text-gray-700">Pasas horas redactando un email y el proveedor no responde</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">❌</span>
                <span className="text-gray-700">No sabes cómo negociar precio sin sonar agresivo ni desesperado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">❌</span>
                <span className="text-gray-700">Temes cometer errores culturales que arruinen la relación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">❌</span>
                <span className="text-gray-700">Tus emails parecen poco profesionales comparados con la competencia</span>
              </li>
            </ul>
          </div>

          {/* CTA Principal */}
          <a 
            href="#comprar" 
            className="inline-block bg-teal-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl mb-4"
          >
            Descargar Plantillas Ahora - Solo €9
          </a>
          <p className="text-sm text-gray-500">
            ✅ Descarga instantánea • ✅ Garantía 30 días • ✅ Actualizaciones gratis
          </p>

          {/* Social Proof - Removed placeholder stats */}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
            Por Qué Funcionan Estas Plantillas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            No son emails genéricos copiados de internet. Son fórmulas probadas con +200 negociaciones reales con proveedores chinos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
            Vista Previa: 3 de las 15 Plantillas
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Cada plantilla incluye cuándo usarla, qué personalizar y errores comunes a evitar.
          </p>

          <div className="space-y-6">
            {templates.map((template, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{template.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Cuándo usar: {template.usage}</p>
                  </div>
                  <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Plantilla #{idx + 1}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 whitespace-pre-line border-l-4 border-teal-500">
                  {template.preview}
                  <span className="text-gray-400 italic">... [resto del email]</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  💡 La plantilla completa incluye: asunto optimizado, cuerpo completo, firma profesional y variantes según contexto.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              <strong>+ 12 plantillas más</strong> para: seguimiento, reclamaciones, inspección de calidad, cambios en pedido, y más.
            </p>
            <button 
              onClick={() => setCheckoutOpen(true)}
              className="inline-block bg-gray-900 text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Quiero las 15 Plantillas - €9
            </button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
            Qué Incluye el Pack (Valor €27)
          </h2>

          <div className="space-y-4">
            {[
              "15 plantillas de email en inglés (formato profesional)",
              "Guía de uso: cuándo usar cada plantilla y qué personalizar",
              "Ejemplos reales de emails exitosos vs fallidos",
              "Lista de frases que NUNCA debes usar con proveedores chinos",
              "Plantilla de checklist pre-envío (para copiar al email)",
              "Bonus: 5 respuestas automáticas para preguntas frecuentes de proveedores",
              "Actualizaciones gratuitas cuando agreguemos nuevas plantillas"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-teal-50 rounded-lg p-4">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">
              🎁 Compra Hoy y Recibe Bonus Exclusivo
            </p>
            <p className="text-gray-700">
              <strong>"Checklist de Validación de Proveedores"</strong> (Valor €15) - Lista de 27 puntos para verificar si un proveedor es confiable antes de hacer pedido.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
            Qué Dicen Quienes Ya Las Usan
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            💬 ¿Ya usaste las plantillas? Déjanos tu opinión y recibe <strong>20% descuento</strong> en tu próxima compra.
          </p>
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
      <section id="comprar" className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Empieza a Negociar Como un Profesional Hoy
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            15 plantillas probadas. Descarga instantánea. Garantía 30 días.
          </p>

          {/* Pricing Box */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-2xl">
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-gray-400 line-through text-2xl">€27</span>
              <span className="text-5xl font-bold text-teal-600">€9</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Precio de lanzamiento • Solo primeras 25 ventas
            </p>

            <button 
              onClick={() => setCheckoutOpen(true)}
              className="w-full bg-teal-600 text-white text-xl font-bold py-5 rounded-xl hover:bg-teal-700 transition-colors mb-4 cursor-pointer"
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
                <span>Actualizaciones futuras gratis</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-teal-100">
            🔒 Pago 100% seguro procesado por Stripe • No guardamos datos de tarjeta
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 text-teal-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Garantía 100% Sin Riesgo</h3>
          <p className="text-gray-300">
            Si en los próximos 30 días las plantillas no te ayudan a comunicarte mejor con proveedores chinos, 
            envíanos un email y te devolvemos el 100% de tu dinero. Sin preguntas. Sin complicaciones.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-white text-xl font-bold mb-4 font-display">ImportarDeChina</div>
              <p className="text-sm">
                15 años de experiencia importando desde China. Herramientas y conocimiento para tu éxito.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/productos/email-templates" className="hover:text-white transition-colors">Email Templates</Link></li>
                <li><Link href="/productos/calculadora-costos" className="hover:text-white transition-colors">Calculadora de Costos</Link></li>
                <li><Link href="/productos/checklist-control-calidad" className="hover:text-white transition-colors">Checklist QC</Link></li>
                <li><Link href="/productos/due-diligence-proveedor" className="hover:text-white transition-colors">Due Diligence</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                <li><Link href="/checklist-importacion" className="hover:text-white transition-colors">Checklist Lead Magnet</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal/politica-devoluciones" className="hover:text-white transition-colors">Política Devoluciones</Link></li>
                <li><Link href="/legal/terminos-uso" className="hover:text-white transition-colors">Términos de Uso</Link></li>
                <li><Link href="/legal/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2026 ImportarDeChina.com - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
