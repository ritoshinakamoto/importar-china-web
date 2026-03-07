'use client';

import Link from 'next/link';
import { Ship, Check, Search, PackageCheck, Truck, FileText, Globe, Clock } from 'lucide-react';

export default function GestionCompletaPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Ship className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Gestión Completa de Importación<br />
            <span className="text-blue-600">De la Fábrica a Tu Almacén</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nos encargamos de TODO el proceso de importación. Tú solo decides qué importar y nosotros 
            gestionamos sourcing, calidad, logística y aduanas. Tú recibes el producto listo para vender.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-blue-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Consulta Gratuita
          </Link>

          <p className="text-sm text-gray-500 mt-4">
            🌍 De fábrica en China a tu puerta • ⏱️ Seguimiento 24/7 • 🔒 Sin sorpresas
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">¿Por Qué Delegar la Gestión Completa?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Gestionar una importación requiere 100+ horas de trabajo si es tu primer pedido</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Coordinar proveedor, transitario, agente aduanas, transporte final es un caos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Un error en documentación aduanera puede costarte semanas de retraso + multas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Tu tiempo vale más vendiéndolo que persiguiendo proveedores</span>
            </li>
          </ul>
          <p className="text-center mt-6 text-lg font-bold text-blue-700">
            💡 Solución: Delega todo y enfócate en vender
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
            El Proceso Completo Gestionado Por Nosotros
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            8 fases críticas que manejamos de principio a fin
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Sourcing</h3>
              <p className="text-sm text-gray-600">
                Encontramos los mejores fabricantes, negociamos precio y organizamos muestras
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <PackageCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Producción</h3>
              <p className="text-sm text-gray-600">
                Supervisamos la fabricación y realizamos inspección de calidad pre-envío
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Ship className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Logística</h3>
              <p className="text-sm text-gray-600">
                Organizamos transporte marítimo/aéreo al mejor precio y gestionamos documentación
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">4. Aduanas</h3>
              <p className="text-sm text-gray-600">
                Tramitamos despacho aduanero, aranceles, IVA y entrega final en tu almacén
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">
              ✅ Tú solo aproebas cada fase. Nosotros ejecutamos todo.
            </p>
            <p className="text-gray-700">
              Recibes actualizaciones semanales con estado del pedido, fotos de producción y tracking de envío.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
          Todo Incluido en el Servicio
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Check className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Sourcing + Negociación</h3>
            <p className="text-sm text-gray-600">
              Identificamos top 3 proveedores, negociamos precio (15-30% descuento típico) y gestionamos muestras
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Check className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Control de Calidad</h3>
            <p className="text-sm text-gray-600">
              Inspección pre-envío con reporte fotográfico completo. Rechazamos producto defectuoso antes de pagar
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Check className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Coordinación Logística</h3>
            <p className="text-sm text-gray-600">
              Booking con transitarios, gestión documental, seguro de mercancía opcional, tracking 24/7
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Check className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Despacho Aduanero</h3>
            <p className="text-sm text-gray-600">
              Tramitación completa en aduana, pago de aranceles + IVA (te pasamos factura), entrega en tu almacén
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Check className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Seguimiento Proactivo</h3>
            <p className="text-sm text-gray-600">
              Updates semanales por email/WhatsApp. Resolvemos problemas antes de que afecten tu timeline
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Check className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Soporte Post-Importación</h3>
            <p className="text-sm text-gray-600">
              Ayuda con reclamos a proveedor, pedidos futuros, optimización de costos para siguientes importaciones
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
            ¿Para Quién Es Este Servicio?
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Emprendedores que lanzan su primer producto</h3>
                <p className="text-sm text-gray-600">
                  No quieres aprender todo el proceso. Prefieres delegarlo y enfocarte en marketing + ventas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Empresas que escalan rápido</h3>
                <p className="text-sm text-gray-600">
                  Ya importas pero no tienes equipo interno para gestionar más proveedores/productos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Inversores / Marcas que externalizan operaciones</h3>
                <p className="text-sm text-gray-600">
                  Tu core es producto + marca. Quieres un partner de confianza que maneje logística.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
          Estructura de Precios
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Inversión según valor del pedido
        </p>

        <div className="bg-white rounded-2xl border-2 border-blue-200 p-8">
          <div className="text-center mb-6">
            <p className="text-5xl font-bold text-blue-600 mb-2">8-15%</p>
            <p className="text-gray-600">Del valor FOB del pedido</p>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Pedidos &lt;€10k: 15% fee</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Pedidos €10k-50k: 12% fee</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Pedidos &gt;€50k: 8% fee (negociable)</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              💡 Mínimo proyecto: €5,000 FOB • Consulta sin compromiso: Gratis
            </p>
          </div>

          <Link
            href="/contacto"
            className="block w-full mt-6 bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors text-center"
          >
            Solicitar Propuesta Personalizada
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            ¿Listo Para Importar Sin Dolores de Cabeza?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Cuéntanos tu proyecto y te enviamos una propuesta detallada en 48h
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-white text-blue-600 text-xl font-bold px-12 py-5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Empezar Ahora
          </Link>

          <p className="text-sm text-blue-100 mt-6">
            📞 También disponible: Llamada de consulta gratuita (30 min) para evaluar viabilidad de tu proyecto
          </p>
        </div>
      </section>
    </div>
  );
}
