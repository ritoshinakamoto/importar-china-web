import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Product mapping
const PRODUCTS = {
  'email-templates': {
    name: '15 Plantillas de Email',
    files: [
      'email-templates-proveedores-china.pdf',
      'Checklist-Validacion-Proveedores.pdf'
    ],
    subject: '✅ Tu Compra: 15 Plantillas de Email Profesionales',
  },
  'calculadora-costos': {
    name: 'Calculadora de Costos',
    files: [
      'calculadora-costos-importacion.xlsx',
      'Checklist-Validacion-Proveedores.pdf'
    ],
    subject: '✅ Tu Compra: Calculadora de Costos Excel',
  },
  'checklist-control-calidad': {
    name: 'Checklist Control de Calidad',
    files: [
      'checklist-control-calidad.pdf',
      'checklist-control-calidad.xlsx',
      'Checklist-Validacion-Proveedores.pdf'
    ],
    subject: '✅ Tu Compra: Checklist QC Profesional',
  },
  'due-diligence-proveedor': {
    name: 'Due Diligence Proveedor',
    files: [
      'due-diligence-proveedor.pdf',
      'due-diligence-proveedor.xlsx',
      'Checklist-Validacion-Proveedores.pdf'
    ],
    subject: '✅ Tu Compra: Due Diligence Template',
  },
  'bundle-starter-kit': {
    name: 'Import Starter Kit - Bundle Completo',
    files: [], // Bundle no tiene archivos directos, redirige a página
    subject: '✅ Tu Compra: Import Starter Kit Completo (4 Productos)',
  },
};

async function notifyJaneSale(productId: string, customerEmail: string, amount: number) {
  try {
    const product = PRODUCTS[productId as keyof typeof PRODUCTS] || PRODUCTS['email-templates'];
    
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Stripe Notifications <stripe@importardechina.com>',
        to: 'jane.importardechina@agentmail.to',
        subject: `💰 Nueva venta: ${product.name} - €${amount}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>🎉 Nueva venta registrada</h2>
            <p><strong>Producto:</strong> ${product.name}</p>
            <p><strong>Precio:</strong> €${amount}</p>
            <p><strong>Cliente:</strong> ${customerEmail}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          </div>
        `,
      }),
    });
  } catch (error) {
    console.error('Error notifying Jane:', error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature');

    if (!sig) {
      console.error('No stripe signature');
      return NextResponse.json({ error: 'No signature' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    console.log('Stripe Event:', event.type);

    // Handle checkout.session.completed
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_email;
      const productId = session.metadata?.product || 'email-templates';

      if (!customerEmail) {
        return NextResponse.json({ error: 'No customer email' }, { status: 400 });
      }

      // Send product via email
      const success = await sendProductEmail(customerEmail, productId);

      if (!success) {
        console.error('Failed to send email to', customerEmail);
        return NextResponse.json({ error: 'Email send failed' }, { status: 500 });
      }

      console.log(`Product ${productId} sent to`, customerEmail);
      
      // Notificar a Jane sobre la venta
      await notifyJaneSale(productId, customerEmail, (session.amount_total || 0) / 100);
      
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 });
  }
}

async function sendProductEmail(email: string, productId: string) {
  const product = PRODUCTS[productId as keyof typeof PRODUCTS] || PRODUCTS['email-templates'];
  
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Resend API key not configured');
      return false;
    }

    // Build content page URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://importardechina.com';
    const contentUrl = productId === 'bundle-starter-kit' 
      ? `${baseUrl}/compra/bundle-starter-kit`
      : `${baseUrl}/productos/${productId}/contenido`;

    // Send via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Jorge Mora - ImportarDeChina <jorge@importardechina.com>',
        to: email,
        bcc: ['jorgemorabeneyto@gmail.com'], // Copia oculta a Jorge
        subject: product.subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0d9488; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">✅ ¡Compra Confirmada!</h1>
              <p style="margin: 10px 0 0 0;">Gracias por confiar en ImportarDeChina</p>
            </div>
            
            <div style="padding: 30px; background: #f9fafb; border-radius: 0 0 8px 8px;">
              <p>Hola,</p>
              
              <p>Tu pago ha sido procesado exitosamente. <strong>Accede a tu contenido ahora mismo:</strong></p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${contentUrl}" style="display: inline-block; background: #0d9488; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">
                  🎯 ACCEDER A MI COMPRA
                </a>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0d9488; margin-top: 0;">📦 Tu Compra Incluye:</h3>
                ${productId === 'bundle-starter-kit' ? `
                <ul style="line-height: 1.8;">
                  <li>✅ <strong>15 Email Templates Profesionales</strong></li>
                  <li>✅ <strong>Calculadora de Costos Excel</strong></li>
                  <li>✅ <strong>Checklist Control de Calidad (80+ puntos)</strong></li>
                  <li>✅ <strong>Due Diligence Template (60+ criterios)</strong></li>
                  <li>✅ Bonus: Checklist de 27 puntos para validar proveedores</li>
                  <li>✅ Acceso ilimitado a los 4 productos</li>
                  <li>✅ Actualizaciones futuras incluidas</li>
                  <li>✅ Garantía 30 días: si no te sirve, devolvemos tu dinero</li>
                </ul>
                ` : `
                <ul style="line-height: 1.8;">
                  <li>✅ <strong>${product.name}</strong></li>
                  <li>✅ Bonus: Checklist de 27 puntos para validar proveedores</li>
                  <li>✅ Acceso ilimitado (100% gratis para siempre)</li>
                  <li>✅ Actualizaciones futuras incluidas</li>
                  <li>✅ Garantía 30 días: si no te sirve, devolvemos tu dinero</li>
                </ul>
                `}
              </div>

              <div style="margin: 20px 0;">
                <h3 style="color: #0d9488;">🎯 Cómo Empezar:</h3>
                <ol style="line-height: 1.8;">
                  <li>Haz clic en el botón verde de arriba</li>
                  <li>Descarga todos los archivos desde la página</li>
                  <li>Guárdalos en una carpeta segura</li>
                  <li>Empieza a usarlos inmediatamente</li>
                </ol>
              </div>

              <div style="margin: 20px 0;">
                <p><strong>🔗 Link directo de acceso:</strong><br>
                <a href="${contentUrl}" style="color: #0d9488; word-break: break-all;">${contentUrl}</a></p>
              </div>

              <div style="margin: 20px 0;">
                <h3 style="color: #0d9488;">❓ Preguntas?</h3>
                <p>Responde directamente a este email y te ayudaremos en máximo 24 horas.</p>
              </div>

              <div style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; text-align: center; font-size: 12px; color: #6b7280;">
                <p><strong>ImportarDeChina.com</strong></p>
                <p>15+ años de experiencia importando desde China</p>
                <p>© 2026 · Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend Error:', error);
      return false;
    }

    console.log(`Email sent successfully to ${email} with content link: ${contentUrl}`);
    return true;
  } catch (error) {
    console.error('Send Product Email Error:', error);
    return false;
  }
}
