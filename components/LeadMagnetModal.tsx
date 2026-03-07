'use client';

import { useState } from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setEmail('');
        setName('');
        
        // Cerrar modal después de 5 segundos
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 5000);
      } else {
        setError(data.error || 'Error al suscribirse. Intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Verifica tu internet.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!success ? (
          <>
            {/* Icon */}
            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Download className="w-8 h-8 text-teal-600" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center font-display">
              Descarga tu Checklist GRATIS
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Todo lo que necesitas para importar tu primer contenedor desde China
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">30 pasos validados con 200+ importaciones</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Plantillas Excel: Costos, Márgenes, ROI</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre (opcional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {loading ? 'Enviando...' : 'Descargar Checklist →'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Tus datos están protegidos. Sin spam.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
              ¡Todo listo!
            </h3>
            <p className="text-gray-600 mb-2">
              Revisa tu email. Te hemos enviado el Checklist y las plantillas.
            </p>
            <p className="text-sm text-gray-500 italic">
              No olvides revisar tu carpeta SPAM si no recibes el email en los próximos minutos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
