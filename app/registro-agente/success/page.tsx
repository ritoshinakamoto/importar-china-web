'use client'

import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import Link from 'next/link'

function SuccessContent() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Simular validación de sesión Stripe
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Procesando tu pago...</h2>
          <p className="text-slate-600">Por favor espera mientras validamos tu transacción</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white border-2 border-green-200 rounded-lg p-8 text-center shadow-lg">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">¡Pago Confirmado!</h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
            <p className="text-lg font-semibold text-green-900 mb-2">Tu Agente IA está activándose</p>
            <p className="text-sm text-green-800">
              En los próximos minutos recibirás un email con instrucciones para conectar con tu agente via Telegram o WhatsApp.
            </p>
          </div>

          <div className="space-y-3 my-6 text-left text-sm">
            <div className="flex items-start gap-3">
              <span className="text-green-600 flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Email de bienvenida</p>
                <p className="text-slate-600">Con instrucciones de conexión</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Agente personal dedicado</p>
                <p className="text-slate-600">Disponible 24/7 para ti</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Análisis de nicho gratuito</p>
                <p className="text-slate-600">Tu agente comienza análisis inmediatamente</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <p className="font-medium text-blue-900 mb-1">💡 Tip</p>
            <p className="text-sm text-blue-800">
              Si no recibes email en 5 minutos, revisa tu carpeta de spam.
            </p>
          </div>

          <Link 
            href="/" 
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Volver al inicio →
          </Link>

          <p className="text-xs text-slate-500 mt-6">
            Recibirás confirmación en tu email en minutos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
