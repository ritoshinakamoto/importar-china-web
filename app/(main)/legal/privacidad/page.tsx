import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2 font-display">Política de Privacidad</h1>
        <p className="text-gray-600 mb-8">Última actualización: 22 de Febrero, 2026</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Qué Datos Recopilamos?</h2>
            <p className="text-gray-700 mb-3">
              Cuando compras un producto o te suscribes a nuestra lista de emails, recopilamos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Email</li>
              <li>Nombre (opcional)</li>
              <li>Información de compra (Stripe maneja pagos)</li>
              <li>Datos de navegación (Google Analytics anónimo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Cómo Usamos Tus Datos?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Entregar productos:</strong> Enviamos descarga links y acceso a tu compra</li>
              <li><strong>Emails:</strong> Actualizaciones sobre productos, ofertas y contenido educativo</li>
              <li><strong>Soporte:</strong> Para responder a tus preguntas</li>
              <li><strong>Analytics:</strong> Para mejorar el sitio (anónimo, no identificable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Compartimos Tus Datos?</h2>
            <p className="text-gray-700 mb-3">
              <strong>No vendemos ni compartimos tus datos.</strong> Solo usamos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Stripe:</strong> Para procesar pagos (encriptado, no vemos detalles de tarjeta)</li>
              <li><strong>Resend:</strong> Para enviar emails (email + nombre solo)</li>
              <li><strong>Supabase:</strong> Para almacenar datos de suscriptores (encriptado)</li>
              <li><strong>Google Analytics:</strong> Datos anónimos de tráfico del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cancelar Suscripción</h2>
            <p className="text-gray-700">
              Todos nuestros emails incluyen un link "Unsubscribe". Haz clic ahí o envía un email a 
              <a href="mailto:soporte@importardechina.com" className="text-teal-600 hover:underline"> soporte@importardechina.com</a> 
              y te eliminaremos de la lista inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Seguridad</h2>
            <p className="text-gray-700">
              Usamos encriptación SSL (HTTPS) en todo el sitio. Los pagos se procesan vía Stripe, 
              que cumple con PCI DSS (estándar de seguridad de datos de pago). No almacenamos 
              números de tarjeta ni información sensible en nuestros servidores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">GDPR / Derechos de Datos</h2>
            <p className="text-gray-700">
              Si eres residente de la UE, tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Ver qué datos tenemos sobre ti</li>
              <li>Descargar tus datos en formato portable</li>
              <li>Solicitar eliminación de tus datos</li>
              <li>Corregir datos incorrectos</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Envía estas solicitudes a <a href="mailto:soporte@importardechina.com" className="text-teal-600 hover:underline">
                soporte@importardechina.com
              </a> y responderemos en 30 días.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p className="text-gray-700">
              Este sitio usa cookies mínimas: solo para sesión y Google Analytics (anónimo). 
              Puedes desactivar cookies en tu navegador si prefieres.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cambios en Esta Política</h2>
            <p className="text-gray-700">
              Actualizaremos esta política si es necesario. Los cambios entran en vigor cuando 
              se publican aquí.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contacto</h2>
            <p className="text-gray-700">
              Preguntas sobre privacidad: <a href="mailto:soporte@importardechina.com" className="text-teal-600 hover:underline">
                soporte@importardechina.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
