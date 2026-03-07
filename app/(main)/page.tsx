'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Calculator, BookOpen, GraduationCap, Search, CheckCircle2, Ship, Globe, DollarSign, Package, Sparkles } from 'lucide-react';
import LeadMagnetModal from '@/components/LeadMagnetModal';
import CheckoutModal from '@/components/CheckoutModal';
import { PRODUCTS } from '@/lib/products';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const bundleProduct = PRODUCTS['bundle-starter-kit'];
  return (
    <div className="min-h-screen bg-[#faf9f7]">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-display">
          Importa de China con la seguridad de un experto
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-3 md:mb-4 max-w-3xl leading-relaxed">
          Transformamos la complejidad de importar de China en un proceso simple y seguro. Tú pones la visión, nosotros ponemos la infraestructura y la experiencia de 15 años para que solo te preocupes de vender.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl leading-relaxed">
          <strong>Te ofrecemos un Checklist de tu negocio.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href="/checklist"
            className="bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all text-center"
          >
            Checklist GRATIS
          </Link>
          <a href="https://t.me/jane_importardechina_bot" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-gray-300 text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:border-gray-900 hover:bg-gray-50 transition-all text-center">
            Pregunta a un Agente
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-teal-600 text-2xl font-bold mb-2 font-display">Experiencia Real</h3>
          <p className="text-gray-600">15 años importando desde China, más de 200 contenedores gestionados</p>
        </div>
        <div>
          <h3 className="text-teal-600 text-2xl font-bold mb-2 font-display">Método Probado</h3>
          <p className="text-gray-600">Sistema paso a paso validado con cientos de importadores exitosos</p>
        </div>
        <div>
          <h3 className="text-teal-600 text-2xl font-bold mb-2 font-display">Soporte Continuo</h3>
          <p className="text-gray-600">Acceso a guías, plantillas y asesoría cuando lo necesites</p>
        </div>
      </section>

      {/* Productos Populares */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-display">Import Starter Kit</h2>
            <p className="text-gray-600">Herramientas digitales para empezar hoy mismo - Precio de Lanzamiento</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Templates */}
          <a href="/productos/email-templates" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900 font-display">Email Templates</h3>
              <div className="text-right">
                <div className="text-gray-400 line-through text-sm">€27</div>
                <div className="text-teal-600 font-bold">€9</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">15 plantillas para comunicación profesional con proveedores. Descarga instantánea.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>PDF + Instrucciones</span>
            </div>
          </a>

          {/* Calculadora de Costos */}
          <a href="/productos/calculadora-costos" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900 font-display">Calculadora Costos</h3>
              <div className="text-right">
                <div className="text-gray-400 line-through text-sm">€37</div>
                <div className="text-blue-600 font-bold">€12</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Calcula el costo real de tu producto: FOB, shipping, aranceles, IVA. Análisis de margen automático.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Excel + Google Sheets</span>
            </div>
          </a>

          {/* Checklist Control de Calidad */}
          <a href="/productos/checklist-control-calidad" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900 font-display">Checklist QC</h3>
              <div className="text-right">
                <div className="text-gray-400 line-through text-sm">€27</div>
                <div className="text-green-600 font-bold">€9</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">80+ puntos de inspección profesional. Detecta defectos antes del envío. 4 tipos de inspección cubiertos.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>PDF + Excel Editable</span>
            </div>
          </a>

          {/* Due Diligence Proveedor */}
          <a href="/productos/due-diligence-proveedor" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900 font-display">Due Diligence</h3>
              <div className="text-right">
                <div className="text-gray-400 line-through text-sm">€27</div>
                <div className="text-purple-600 font-bold">€9</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Template de evaluación con 60+ criterios. Sistema de puntuación. Detecta red flags antes de pagar.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>Excel + PDF + Guías</span>
            </div>
          </a>
        </div>

        <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">
            🎁 Bundle Completo: Ahorra €10
          </p>
          <p className="text-gray-700 mb-4">
            Compra los 4 productos juntos por <strong className="text-yellow-700">€29</strong> (valor individual: €39 • ahorro: €10)
          </p>
          <button 
            onClick={() => setCheckoutOpen(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Comprar Bundle
          </button>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-display">Servicios Profesionales</h2>
            <p className="text-gray-600">Delega y enfócate en tu negocio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sourcing Asistido */}
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Sourcing Asistido</h3>
              <p className="text-gray-600 mb-6">Te ayudamos a encontrar y negociar con los mejores proveedores para tu producto</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Búsqueda proveedores</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Análisis calidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Negociación precios</span>
                </li>
              </ul>
              <a href="/servicios/sourcing-asistido" className="block w-full text-center border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Solicitar información
              </a>
            </div>

            {/* Control Calidad */}
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Control Calidad Remoto</h3>
              <p className="text-gray-600 mb-6">Inspección profesional de tus productos antes del envío desde China</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Inspección pre-envío</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Reporte fotográfico</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Verificación specs</span>
                </li>
              </ul>
              <a href="/servicios/control-calidad" className="block w-full text-center border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Solicitar información
              </a>
            </div>

            {/* Gestión Completa */}
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <Ship className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Gestión Completa</h3>
              <p className="text-gray-600 mb-6">Nos encargamos de todo el proceso de importación de principio a fin</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Sourcing completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Logística integral</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Seguimiento 24/7</span>
                </li>
              </ul>
              <a href="/servicios/gestion-completa" className="block w-full text-center border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-display">El Blog de Importar de China</h2>
          <p className="text-gray-600">Aprende con nuestros artículos y tutoriales</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <a href="/blog/5-errores-fatales-calcular-costes-importacion">
            <article className="group cursor-pointer">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl h-48 mb-4 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800" 
                  alt="Calculadora y documentos" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calculator className="w-20 h-20 text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors font-display">
                5 Errores Fatales al Calcular Costes de Importación
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                El error #3 hace perder el 30% de rentabilidad a importadores novatos. Aprende a calcular el coste real...
              </p>
              <span className="text-sm text-gray-500">2 de Febrero, 2026</span>
            </article>
          </a>

          {/* Blog Post 2 */}
          <a href="/blog/ia-alibaba-chatgpt-busqueda-proveedores-2026">
            <article className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-48 mb-4 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800" 
                  alt="Fábrica moderna" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-20 h-20 text-blue-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors font-display">
                IA y Alibaba: Cómo ChatGPT Revoluciona la Búsqueda de Proveedores
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Reduce de 40 horas a 4 horas el proceso de encontrar y validar proveedores chinos usando IA...
              </p>
              <span className="text-sm text-gray-500">9 de Febrero, 2026</span>
            </article>
          </a>

          {/* Blog Post 3 */}
          <a href="/blog/tu-primer-pedido-china-2026-checklist-definitivo">
            <article className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl h-48 mb-4 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800" 
                  alt="Puerto contenedores" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="w-20 h-20 text-purple-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors font-display">
                Tu Primer Pedido a China en 2026: Checklist Definitivo
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Guía paso a paso para realizar tu primer pedido sin cometer los errores del 90% de novatos...
              </p>
              <span className="text-sm text-gray-500">16 de Febrero, 2026</span>
            </article>
          </a>
        </div>
      </section>

      {/* Modals */}
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} product={bundleProduct} />
      <LeadMagnetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
