import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function PoliticaDevolucionesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2 font-display">Política de Devoluciones</h1>
        <p className="text-gray-600 mb-8">Última actualización: 22 de Febrero, 2026</p>

        <div className="prose prose-gray max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Garantía 30 Días 100% Sin Riesgo</h2>
              <p className="text-gray-700">
                Todos nuestros productos (Email Templates, Calculadora, Checklists, Due Diligence) incluyen una garantía 
                de 30 días sin preguntas. Si no estás satisfecho con tu compra, te devolvemos el 100% de tu dinero.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Cómo Solicitar Una Devolución?</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Envía un email a <strong>soporte@importardechina.com</strong> con tu número de compra</li>
                <li>Explica brevemente por qué quieres devolver el producto</li>
                <li>Procesaremos tu devolución en máximo 48 horas</li>
                <li>Recibirás el reembolso en tu tarjeta/PayPal en 3-5 días hábiles</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Qué Pasa Con Los Servicios?</h2>
              <p className="text-gray-700">
                Para los servicios de Sourcing Asistido, Control de Calidad y Gestión Completa, la devolución depende 
                del estado del trabajo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                <li><strong>Antes de empezar:</strong> Devolución 100%</li>
                <li><strong>Trabajo en progreso (50%):</strong> Devolución 50%</li>
                <li><strong>Trabajo completado:</strong> Sin devolución, pero garantizamos satisfacción o continuamos sin coste adicional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Condiciones</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>La devolución debe solicitarse dentro de 30 días de la compra</li>
                <li>No hay preguntas ni justificación requerida</li>
                <li>Los productos digitales son accesibles inmediatamente, pero la garantía cubre si no cumple expectativas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Preguntas?</h2>
              <p className="text-gray-700">
                Contacta con nosotros en <a href="mailto:soporte@importardechina.com" className="text-teal-600 hover:underline">
                  soporte@importardechina.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
