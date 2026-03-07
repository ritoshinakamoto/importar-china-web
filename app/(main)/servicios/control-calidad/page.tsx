'use client';

import Link from 'next/link';
import { CheckCircle2, Check, Camera, FileText, AlertTriangle, Shield, PackageCheck } from 'lucide-react';

export default function ControlCalidadPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Control de Calidad Remoto<br />
            <span className="text-green-600">Inspecciona Antes de Enviar</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nuestro equipo en China inspecciona tus productos en la fábrica antes del envío. 
            Detecta defectos, verifica specs y asegura que recibes exactamente lo que pagaste.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-green-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Inspección
          </Link>

          <p className="text-sm text-gray-500 mt-4">
            📸 Reporte con fotos • ⚠️ Detecta problemas antes de envío • 💰 Evita pérdidas
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">¿Qué Pasa Si No Inspeccionas?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Recibes productos con defectos o calidad inferior a la muestra</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Color, material o tamaño diferente a lo acordado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Embalaje incorrecto que daña el producto en tránsito</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Solo lo descubres cuando ya es tarde: el contenedor está en tu almacén</span>
            </li>
          </ul>
          <p className="text-center mt-6 text-lg font-bold text-red-700">
            💸 Coste de NO inspeccionar: €3,000-15,000 en producto perdido
          </p>
        </div>
      </section>

      {/* Types of Inspection */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
            Tipos de Inspección
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pre-Producción</h3>
              <p className="text-sm text-gray-600 mb-4">
                Antes de empezar fabricación. Verificamos materias primas, moldes y muestras iniciales.
              </p>
              <p className="text-xs text-gray-500">Ideal para: Pedidos grandes (&gt;€10k)</p>
            </div>

            <div className="border-2 border-green-500 rounded-xl p-6 bg-green-50">
              <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                MÁS POPULAR
              </span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pre-Envío (DUPRO)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Cuando la producción está 80-100% completa. Inspección exhaustiva antes de enviar.
              </p>
              <p className="text-xs text-gray-500">Ideal para: Todos los pedidos</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Durante Producción</h3>
              <p className="text-sm text-gray-600 mb-4">
                En mitad del proceso. Detecta problemas temprano para corregir a tiempo.
              </p>
              <p className="text-xs text-gray-500">Ideal para: Productos técnicos complejos</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
          Qué Revisamos en una Inspección Pre-Envío
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <PackageCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cantidad y Embalaje</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Conteo de unidades vs pedido</li>
                  <li>• Etiquetado correcto</li>
                  <li>• Embalaje adecuado para transporte</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <Camera className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Aspecto Visual</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Color vs muestra aprobada</li>
                  <li>• Acabados y detalles</li>
                  <li>• Defectos superficiales</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Funcionalidad</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tests de funcionamiento</li>
                  <li>• Dimensiones y peso</li>
                  <li>• Materiales vs especificaciones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Documentación</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Certificados requeridos</li>
                  <li>• Manuales e instrucciones</li>
                  <li>• Packing list vs realidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">
            📊 Reporte Completo en 24 Horas
          </p>
          <p className="text-gray-700">
            Recibes un reporte PDF con fotos, mediciones, checklist completo y recomendación (aprobar envío, corregir o rechazar)
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Precios Transparentes
          </h2>
          <p className="text-gray-600 mb-8">
            Inspección estándar para la mayoría de productos
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-2xl font-bold text-green-600 mb-2">€290</p>
              <p className="text-sm text-gray-600 mb-4">Inspección básica</p>
              <ul className="text-xs text-gray-600 space-y-2 text-left">
                <li>✓ Hasta 500 unidades</li>
                <li>✓ Reporte fotográfico</li>
                <li>✓ 24h turnaround</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                MÁS COMÚN
              </span>
              <p className="text-2xl font-bold text-green-600 mb-2">€490</p>
              <p className="text-sm text-gray-600 mb-4">Inspección completa</p>
              <ul className="text-xs text-gray-600 space-y-2 text-left">
                <li>✓ Hasta 2,000 unidades</li>
                <li>✓ Tests funcionales</li>
                <li>✓ Reporte detallado</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-2xl font-bold text-green-600 mb-2">€790+</p>
              <p className="text-sm text-gray-600 mb-4">Inspección técnica</p>
              <ul className="text-xs text-gray-600 space-y-2 text-left">
                <li>✓ Productos complejos</li>
                <li>✓ Tests específicos</li>
                <li>✓ Múltiples visitas</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contacto"
            className="inline-block mt-8 bg-green-600 text-white text-lg font-bold px-12 py-4 rounded-xl hover:bg-green-700 transition-colors"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>

      {/* ROI */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            €490 de Inspección vs €8,000 de Producto Defectuoso
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            La inspección se paga sola con evitar un solo problema grave
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-green-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-green-700 transition-colors"
          >
            Proteger Mi Pedido Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
