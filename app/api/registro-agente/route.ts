import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validación básica
    if (!data.nombre || !data.email || !data.telefono || !data.nicho || !data.objetivo) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const origin = request.headers.get('origin') || 'https://importardechina.com'

    // Crear Stripe Checkout Session (pago one-time €49)
    // TODO: Después del pago exitoso, webhook crea subscription €99/mes
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Agente IA Importación - Setup + Primer Mes',
            description: `Nicho: ${data.nicho} | País: ${data.pais}`,
          },
          unit_amount: 4900, // €49.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${origin}/registro-agente/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/registro-agente?canceled=true`,
      metadata: {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        nicho: data.nicho,
        presupuesto: data.presupuesto,
        pais: data.pais,
        experiencia: data.experiencia,
        objetivo: data.objetivo,
        tipo: 'agente-ia-setup'
      }
    })

    console.log('Stripe session creada:', session.id, 'para cliente:', data.email)
    
    return NextResponse.json({ 
      success: true,
      sessionId: session.id,
      url: session.url,
      message: 'Redirigiendo a pago...'
    })
    
  } catch (error) {
    console.error('Error registro agente:', error)
    return NextResponse.json(
      { error: 'Error al procesar registro. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
