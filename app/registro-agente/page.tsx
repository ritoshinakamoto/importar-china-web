'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegistroAgentePage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nicho: '',
    presupuesto: '',
    pais: 'ES',
    experiencia: '',
    objetivo: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/registro-agente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (response.ok && result.url) {
        // Redirigir a Stripe Checkout
        window.location.href = result.url
      } else if (response.ok) {
        setSuccess(true)
      } else {
        alert(result.error || 'Error al procesar registro')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al procesar registro. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 bg-white border-2 border-green-200 rounded-lg">
          <div className="text-center">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Registro Completado!</h2>
            <p className="text-slate-600 mb-6">
              Recibirás un email con las instrucciones para conectar con tu agente IA en los próximos minutos.
            </p>
            <p className="text-sm text-slate-500">
              Revisa también tu carpeta de spam.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Activa Tu Agente IA
          </h1>
          <p className="text-lg text-slate-600">
            Cuéntanos sobre tu proyecto para personalizar tu agente
          </p>
        </div>

        <div className="bg-white border-2 border-blue-100 rounded-lg p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Información del Proyecto</h2>
            <p className="text-slate-600 text-sm">
              Estos datos nos ayudan a configurar tu agente con el contexto adecuado
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Datos personales */}
            <div className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-1">
                  Teléfono (para Telegram/WhatsApp) *
                </label>
                <input
                  id="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  placeholder="+34 600 000 000"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-slate-500 mt-1">
                  Tu agente se conectará via Telegram o WhatsApp
                </p>
              </div>
            </div>

            {/* Info proyecto */}
            <div className="border-t pt-6 space-y-4">
              <h3 className="font-semibold text-lg">Sobre tu negocio</h3>
              
              <div>
                <label htmlFor="nicho" className="block text-sm font-medium text-slate-700 mb-1">
                  ¿Qué tipo de productos te interesan? *
                </label>
                <input
                  id="nicho"
                  type="text"
                  required
                  value={formData.nicho}
                  onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                  placeholder="Ej: termos, joyería, gadgets tecnológicos, decoración..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="presupuesto" className="block text-sm font-medium text-slate-700 mb-1">
                  Presupuesto inicial para primera importación *
                </label>
                <select
                  id="presupuesto"
                  required
                  value={formData.presupuesto}
                  onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecciona rango</option>
                  <option value="1000-3000">€1,000 - €3,000</option>
                  <option value="3000-5000">€3,000 - €5,000</option>
                  <option value="5000-10000">€5,000 - €10,000</option>
                  <option value="10000+">€10,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="pais" className="block text-sm font-medium text-slate-700 mb-1">
                  País destino importación *
                </label>
                <select
                  id="pais"
                  required
                  value={formData.pais}
                  onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ES">España</option>
                  <option value="PT">Portugal</option>
                  <option value="FR">Francia</option>
                  <option value="IT">Italia</option>
                  <option value="DE">Alemania</option>
                  <option value="UK">Reino Unido</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="OTHER">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="experiencia" className="block text-sm font-medium text-slate-700 mb-1">
                  Experiencia previa importando
                </label>
                <select
                  id="experiencia"
                  value={formData.experiencia}
                  onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecciona</option>
                  <option value="ninguna">Ninguna (primera vez)</option>
                  <option value="dropshipping">Solo dropshipping</option>
                  <option value="1-2">1-2 importaciones</option>
                  <option value="3+">3+ importaciones</option>
                  <option value="experto">Experiencia avanzada</option>
                </select>
              </div>

              <div>
                <label htmlFor="objetivo" className="block text-sm font-medium text-slate-700 mb-1">
                  ¿Cuál es tu objetivo principal? *
                </label>
                <textarea
                  id="objetivo"
                  required
                  value={formData.objetivo}
                  onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                  placeholder="Ej: Quiero crear una marca propia de productos para el hogar y venderlos en Amazon FBA"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="border-t pt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="font-semibold text-blue-900 mb-2">💳 Pago seguro con Stripe</p>
                <p className="text-sm text-blue-800">
                  €49 primer mes (setup) · €99/mes después · Sin permanencia · Cancela cuando quieras
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 rounded-lg transition"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⏳</span>
                    Procesando...
                  </span>
                ) : (
                  <span>Continuar al pago →</span>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Al continuar, aceptas nuestros términos de servicio. 
                Garantía 30 días - reembolso completo si no estás satisfecho.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
