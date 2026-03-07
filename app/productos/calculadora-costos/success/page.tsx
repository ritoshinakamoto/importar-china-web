'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, Download, Mail } from 'lucide-react';

export default function SuccessPage({ searchParams }: { searchParams: { session_id?: string; email?: string } }) {
  const [sessionId] = useState(searchParams.session_id);
  const [email] = useState(searchParams.email);
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email && sessionId) {
      sendPdfEmail();
    } else {
      setLoading(false);
    }
  }, []);

  const sendPdfEmail = async () => {
    try {
      const response = await fetch('/api/webhooks/stripe/send-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sessionId }),
      });

      if (response.ok) {
        setEmailSent(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <Check className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">¡Pago Completado!</h1>
          <p className="text-gray-600">Gracias por tu compra</p>
        </div>

        {/* Main Message */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Revisa tu email</p>
              <p className="text-sm text-gray-700">
                Dentro de los próximos 5 minutos recibirás un email con:
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-gray-700 ml-8">
            <li>📊 Calculadora Excel completa</li>
            <li>📖 Guía paso a paso</li>
            <li>💡 Base de datos TARIC (50+ códigos)</li>
            <li>🔄 Acceso a actualizaciones futuras</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Qué hacer ahora:</h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <span>Busca el email de "ImportarDeChina.com"</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <span>Si no está en bandeja entrada, revisa spam</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <span>Descarga el archivo Excel y empieza a calcular</span>
            </li>
          </ol>
        </div>

        {/* CTA */}
        <Link
          href="/productos/calculadora-costos/contenido"
          className="block w-full bg-blue-600 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mb-3"
        >
          📖 Ver Contenido en HTML
        </Link>
        
        <Link
          href="/"
          className="block w-full bg-blue-600 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
        >
          Volver al Inicio
        </Link>

        {/* Support Info */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-4">
          <p className="mb-2">¿Problemas? Si no recibes el email en 15 minutos:</p>
          <a href="mailto:soporte@importardechina.com" className="text-blue-600 hover:underline">
            soporte@importardechina.com
          </a>
        </div>
      </div>
    </div>
  );
}
