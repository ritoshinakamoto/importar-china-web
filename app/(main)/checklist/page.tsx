'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, FileText, Target, TrendingUp, Shield } from 'lucide-react';
import LeadMagnetModal from '@/components/LeadMagnetModal';

export default function ChecklistLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Checklist Gratuito: Tu Primera Importación desde China
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre exactamente dónde estás en tu camino hacia la importación y qué pasos seguir para tener éxito
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-900 text-white px-12 py-5 rounded-lg text-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Descarga tu Checklist GRATIS
          </button>
        </div>
      </section>

      {/* Qué es el Checklist */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900 font-display">
                ¿Qué es este Checklist?
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Es una <strong>guía paso a paso</strong> de 30 días que te acompaña desde la investigación inicial hasta recibir tu primera importación desde China. Basado en <strong>15 años de experiencia</strong> y más de <strong>200 contenedores importados</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No es teoría abstracta. Son los <strong>pasos exactos</strong> que han seguido cientos de importadores exitosos, organizados en <strong>6 fases</strong> con tareas específicas y verificables.
            </p>
          </div>
        </div>
      </section>

      {/* Ventajas / Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
            ¿Qué Ventajas Obtendrás?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ventaja 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  Claridad Total
                </h3>
                <p className="text-gray-600">
                  Sabrás exactamente en qué fase estás, qué has completado y cuáles son tus próximos pasos. Sin dudas, sin improvisación.
                </p>
              </div>
            </div>

            {/* Ventaja 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  Evita Errores Costosos
                </h3>
                <p className="text-gray-600">
                  Los errores más comunes (pago inseguro, proveedor no verificado, costos ocultos) están marcados explícitamente para que no caigas en ellos.
                </p>
              </div>
            </div>

            {/* Ventaja 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  Ahorra Tiempo
                </h3>
                <p className="text-gray-600">
                  En lugar de buscar información dispersa en blogs y foros, tienes una ruta optimizada que condensa 15 años de experiencia.
                </p>
              </div>
            </div>

            {/* Ventaja 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  Progreso Visible
                </h3>
                <p className="text-gray-600">
                  Cada tarea completada te acerca al objetivo. El checklist te muestra tu progreso en tiempo real y te motiva a seguir avanzando.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Empieza Hoy tu Primera Importación
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Introduce tu nombre y email para recibir el checklist completo y empezar a validar tu idea de negocio en menos de 30 días
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-teal-600 text-xl font-bold px-12 py-5 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Descarga tu Checklist GRATIS →
            </button>
            <p className="mt-6 text-sm text-teal-100">
              ✅ Sin tarjeta de crédito • ✅ Descarga instantánea • ✅ Basado en 15 años de experiencia
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
