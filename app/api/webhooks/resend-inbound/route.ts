import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    
    // Verificar firma del webhook
    const svixId = request.headers.get('svix-id');
    const svixTimestamp = request.headers.get('svix-timestamp');
    const svixSignature = request.headers.get('svix-signature');
    
    if (!svixId || !svixTimestamp || !svixSignature) {
      return NextResponse.json(
        { error: 'Missing webhook headers' },
        { status: 401 }
      );
    }

    const verified = resend.webhooks.verify({
      payload: body,
      headers: {
        id: svixId,
        timestamp: svixTimestamp,
        signature: svixSignature,
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET!,
    });

    const event = verified;

    // Verificar que es un evento de email recibido
    if (event.type !== 'email.received') {
      return NextResponse.json({ received: true });
    }

    const emailData = event.data;
    
    // Notificar a Max (quien notificará a Jane)
    const openclaw_gateway = process.env.OPENCLAW_GATEWAY_URL || 'http://localhost:60641';
    const openclaw_token = process.env.OPENCLAW_TOKEN;
    
    if (openclaw_gateway && openclaw_token) {
      await fetch(`${openclaw_gateway}/api/sessions/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openclaw_token}`
        },
        body: JSON.stringify({
          label: 'jane',
          message: `📧 NUEVO EMAIL RECIBIDO\n\nFrom: ${emailData.from}\nTo: ${emailData.to?.join(', ')}\nSubject: ${emailData.subject}\nEmail ID: ${emailData.email_id}\n\nProcesar inbox y responder si necesario.`
        })
      }).catch(err => {
        console.error('Error notificando OpenClaw:', err);
      });
    }

    return NextResponse.json({ 
      received: true,
      email_id: emailData.email_id 
    });
    
  } catch (error) {
    console.error('Error procesando webhook Resend:', error);
    return NextResponse.json(
      { error: 'Error procesando webhook' },
      { status: 401 }
    );
  }
}
