'use client';

import Link from 'next/link';
import { Search, Check, TrendingUp, DollarSign, Clock, Shield, Users } from 'lucide-react';

export default function SourcingAsistidoPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-teal-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Sourcing Asistido<br />
            <span className="text-teal-600">Encontramos los Mejores Proveedores Para Ti</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Deja de perder semanas buscando proveedores en Alibaba. Te encontramos, evaluamos y 
            negociamos con los 3 mejores fabricantes para tu producto específico.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-teal-600 text-white text-xl font-bold px-12 py-5 rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Presupuesto Gratis
          </Link>

          <p className="text-sm text-gray-500 mt-4">
            ⏱️ Respuesta en 24h • 📊 Sin compromiso • 🔒 Confidencialidad garantizada
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">El Problema del Sourcing Por Tu Cuenta:</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Pasas semanas filtrando cientos de proveedores sin saber cuál es confiable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Muchos "fabricantes" son solo traders que revenden sin capacidad real</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">No sabes negociar precios sin perder calidad ni credibilidad</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">❌</span>
              <span className="text-gray-700">Barrera del idioma y diferencia cultural complican la comunicación</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 font-display">
            Cómo Funciona el Sourcing Asistido
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nuestro equipo en China hace todo el trabajo duro por ti
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Briefing de Producto</h3>
              <p className="text-gray-600 text-sm">
                Nos cuentas qué producto necesitas, specs técnicas, volumen objetivo y presupuesto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Búsqueda + Due Diligence</h3>
              <p className="text-gray-600 text-sm">
                Identificamos 10-15 fabricantes, verificamos licencias, capacidad productiva y calidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Reporte + Negociación</h3>
              <p className="text-gray-600 text-sm">
                Te entregamos top 3 con precios negociados, muestras organizadas y recomendación final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
          Qué Incluye el Servicio
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              <Search className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Búsqueda Exhaustiva</h3>
                <p className="text-sm text-gray-600">
                  Identificamos todos los fabricantes relevantes en tu industria (Alibaba, 1688, ferias, contactos directos)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Verificación Completa</h3>
                <p className="text-sm text-gray-600">
                  Validamos licencias, certificados, capacidad productiva, clientes existentes y reputación
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              <DollarSign className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Negociación de Precio</h3>
                <p className="text-sm text-gray-600">
                  Conseguimos los mejores precios sin sacrificar calidad (típicamente 15-30% mejor que precio inicial)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              <Users className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Gestión de Muestras</h3>
                <p className="text-sm text-gray-600">
                  Coordinamos envío de muestras de los 3 finalistas para que puedas evaluar calidad directamente
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Timeline: 7-14 Días</h3>
                <p className="text-sm text-gray-600">
                  Proceso completo en 2 semanas vs 2-3 meses por tu cuenta
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              <TrendingUp className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Reporte Detallado</h3>
                <p className="text-sm text-gray-600">
                  Documento con análisis de cada proveedor, pros/cons, matriz de decisión y recomendación
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Inversión
          </h2>
          <p className="text-gray-600 mb-8">
            El precio varía según complejidad del producto y volumen objetivo
          </p>

          <div className="bg-white rounded-2xl border-2 border-teal-200 p-8 max-w-md mx-auto">
            <p className="text-5xl font-bold text-teal-600 mb-2">Desde €490</p>
            <p className="text-gray-600 mb-6">Por proyecto de sourcing completo</p>

            <Link
              href="/contacto"
              className="block w-full bg-teal-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-teal-700 transition-colors mb-4"
            >
              Solicitar Presupuesto Personalizado
            </Link>

            <p className="text-xs text-gray-500">
              Proyectos simples: €490-990 • Proyectos complejos: €990-1,990
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            ¿Listo Para Encontrar Tu Proveedor Ideal?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Cuéntanos tu proyecto y te enviamos una propuesta en 24h
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-white text-teal-600 text-xl font-bold px-12 py-5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Empezar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
