import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Mail, Calculator, Search, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compra Confirmada - Import Starter Kit | Importar de China',
  description: 'Accede a tus 4 herramientas digitales descargables',
};

export default function BundleSuccessPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Success Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center border border-gray-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3 font-display">
            ¡Compra Confirmada! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Tu <strong>Import Starter Kit</strong> está listo
          </p>
          <p className="text-sm text-gray-500">
            Recibirás un email con esta información en los próximos minutos
          </p>
        </div>

        {/* Products Access */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">
            Accede a tus productos
          </h2>
          <p className="text-gray-600 mb-8">
            Haz clic en cada producto para acceder a la página de contenido y descargar los archivos:
          </p>

          <div className="space-y-4">
            {/* Email Templates */}
            <Link
              href="/productos/email-templates/contenido"
              className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                  15 Email Templates
                </h3>
                <p className="text-sm text-gray-600">
                  Plantillas profesionales para comunicación con proveedores
                </p>
              </div>
              <div className="text-teal-600 font-semibold self-center">
                Ver →
              </div>
            </Link>

            {/* Calculadora Costos */}
            <Link
              href="/productos/calculadora-costos/contenido"
              className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Calculadora de Costos
                </h3>
                <p className="text-sm text-gray-600">
                  Excel completo con análisis de margen automático
                </p>
              </div>
              <div className="text-blue-600 font-semibold self-center">
                Ver →
              </div>
            </Link>

            {/* Checklist QC */}
            <Link
              href="/productos/checklist-control-calidad/contenido"
              className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  Checklist Control de Calidad
                </h3>
                <p className="text-sm text-gray-600">
                  80+ puntos de inspección profesional
                </p>
              </div>
              <div className="text-green-600 font-semibold self-center">
                Ver →
              </div>
            </Link>

            {/* Due Diligence */}
            <Link
              href="/productos/due-diligence-proveedor/contenido"
              className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  Due Diligence de Proveedores
                </h3>
                <p className="text-sm text-gray-600">
                  Sistema de evaluación con 60+ criterios
                </p>
              </div>
              <div className="text-purple-600 font-semibold self-center">
                Ver →
              </div>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              💡 <strong>Tip:</strong> Guarda esta página en favoritos para acceder fácilmente a tus productos
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>¿Problemas con la descarga?</p>
          <p>
            Contacta: <a href="mailto:soporte@importardechina.com" className="text-teal-600 hover:underline">soporte@importardechina.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
