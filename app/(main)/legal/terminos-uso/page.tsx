import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function TerminosUsoPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2 font-display">Términos de Uso</h1>
        <p className="text-gray-600 mb-8">Última actualización: 22 de Febrero, 2026</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Aceptación de Términos</h2>
            <p className="text-gray-700">
              Al acceder y utilizar importardechina.com, aceptas estar vinculado por estos términos. 
              Si no estás de acuerdo, no uses este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Licencia de Uso</h2>
            <p className="text-gray-700">
              Se te concede una licencia limitada, no exclusiva y revocable para usar los productos digitales 
              que compres en este sitio únicamente para propósitos personales o comerciales en tu negocio.
              No puedes revender, distribuir o compartir públicamente los productos sin permiso escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Propiedad Intelectual</h2>
            <p className="text-gray-700">
              Todo el contenido en este sitio (plantillas, guías, checklists, diseños) es propiedad de ImportarDeChina.com.
              No puedes copiar, modificar o reproducir sin permiso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Disclaimer</h2>
            <p className="text-gray-700">
              Nuestros productos y servicios se proporcionan "tal como están". Aunque nos esforzamos por ser precisos,
              no garantizamos que toda la información sea 100% correcta ni que aplicable a tu situación específica.
              Consulta con profesionales (abogados, contadores, agentes aduanales) para asuntos críticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitación de Responsabilidad</h2>
            <p className="text-gray-700">
              ImportarDeChina.com no se responsabiliza por daños indirectos, pérdidas de ganancias o 
              consecuencias de usar nuestros productos/servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cambios en Términos</h2>
            <p className="text-gray-700">
              Nos reservamos el derecho de cambiar estos términos en cualquier momento. 
              Los cambios entran en vigor cuando se publican en este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contacto</h2>
            <p className="text-gray-700">
              Para preguntas sobre estos términos: <a href="mailto:soporte@importardechina.com" className="text-teal-600 hover:underline">
                soporte@importardechina.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
