import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        console.log('✅ Pago exitoso:', session.id)
        console.log('Cliente:', session.customer_details?.email)

        // Extraer metadata del cliente
        const metadata = session.metadata || {}
        const clienteEmail = session.customer_details?.email || metadata.email
        const clienteNombre = metadata.nombre || 'Cliente'
        const clienteNicho = metadata.nicho || 'Desconocido'
        const clienteTelefono = metadata.telefono || ''

        if (!clienteEmail || !clienteNicho) {
          console.warn('Metadata incompleta:', { clienteEmail, clienteNicho })
          return NextResponse.json({ ok: true }) // No fallar, solo log
        }

        // Auto-spawn agente IA dedicado para cliente
        console.log('🤖 Spawning agente IA para:', clienteNombre)
        
        // TODO: Descomentar cuando OpenClaw Gateway tenga endpoint spawn
        // Esta función requiere llamar a OpenClaw Gateway API
        // Por ahora, solo loggear y preparar estructura
        
        const spawnPayload = {
          task: `Eres un agente de importación dedicado a ${clienteNombre}.
                 
Lee estos archivos primero:
1. /data/.openclaw/workspace/agentes-clientes/SOUL.md
2. /data/.openclaw/workspace/agentes-clientes/KNOWLEDGE-BASE.md

Tu cliente quiere importar productos de tipo: ${clienteNicho}
País destino: ${metadata.pais}
Presupuesto: ${metadata.presupuesto}
Experiencia: ${metadata.experiencia}
Objetivo: ${metadata.objetivo}

Empieza presentándote y ofreciendo análisis de viabilidad del nicho.`,
          label: `Cliente: ${clienteNombre} (${clienteNicho})`,
          agentId: 'importacion-client',
          cleanup: 'keep'
        }
        
        console.log('Spawn payload:', JSON.stringify(spawnPayload, null, 2))

        // TODO: Enviar email bienvenida
        // const emailResult = await sendEmail({
        //   to: clienteEmail,
        //   subject: `¡Bienvenido! Tu Agente IA está listo - ${clienteNombre}`,
        //   template: 'welcome-agente-ia',
        //   data: {
        //     nombre: clienteNombre,
        //     nicho: clienteNicho,
        //     telegramLink: 'https://t.me/importardechina_bot?start=...'
        //   }
        // })

        // TODO: Guardar en DB para billing + tracking
        // await db.clientes.create({
        //   email: clienteEmail,
        //   nombre: clienteNombre,
        //   nicho: clienteNicho,
        //   telefono: clienteTelefono,
        //   stripeSessionId: session.id,
        //   stripeCustomerId: session.customer,
        //   status: 'ACTIVO',
        //   fechaCreacion: new Date(),
        //   limiteConsultas: 500
        // })

        console.log('Webhook procesado para cliente:', {
          email: clienteEmail,
          nombre: clienteNombre,
          nicho: clienteNicho,
          sessionId: session.id
        })

        break
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        // TODO: Actualizar status cliente en DB
        console.log('Subscription event:', event.type)
        break
      }

      default:
        console.log('Unhandled event type:', event.type)
    }

    return NextResponse.json({ ok: true })

  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
