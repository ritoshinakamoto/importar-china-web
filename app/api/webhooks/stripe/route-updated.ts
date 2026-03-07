import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// Product mapping
const PRODUCTS = {
  'email-templates': {
    name: '15 Plantillas de Email',
    files: [
      'email-templates-importacion-china.pdf',
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
      'checklist-qc-importacion.pdf',
      'checklist-qc-importacion.xlsx',
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
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const event = body;

    console.log('Stripe Event:', event.type);

    // Handle checkout.session.completed
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
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

    // Prepare attachments
    const attachments = [];
    
    // Get checklist PDF from API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const checklistResponse = await fetch(`${baseUrl}/api/downloads/checklist-pdf`);
    if (checklistResponse.ok) {
      const checklistBuffer = await checklistResponse.arrayBuffer();
      attachments.push({
        filename: 'Checklist-Validacion-Proveedores.pdf',
        content: Buffer.from(checklistBuffer).toString('base64'),
      });
    }
    
    // Get product files from /public/products/
    const productsDir = path.join(process.cwd(), 'public', 'products');
    
    for (const filename of product.files) {
      if (filename === 'Checklist-Validacion-Proveedores.pdf') continue; // Already added
      
      try {
        const filePath = path.join(productsDir, filename);
        const fileBuffer = await fs.readFile(filePath);
        attachments.push({
          filename: filename,
          content: fileBuffer.toString('base64'),
        });
      } catch (error) {
        console.error(`Failed to read ${filename}:`, error);
      }
    }

    // Send via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ImportarDeChina <soporte@importardechina.com>',
        to: email,
        subject: product.subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0d9488; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">✅ ¡Compra Confirmada!</h1>
              <p style="margin: 10px 0 0 0;">Gracias por confiar en ImportarDeChina</p>
            </div>
            
            <div style="padding: 30px; background: #f9fafb; border-radius: 0 0 8px 8px;">
              <p>Hola,</p>
              
              <p>Tu pago ha sido procesado exitosamente. <strong>En los ${attachments.length} archivos adjuntos</strong> encontrarás tu descarga.</p>

              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0d9488; margin-top: 0;">📦 Tu Compra Incluye:</h3>
                <ul style="line-height: 1.8;">
                  <li>✅ <strong>${product.name}</strong> (${product.files.length} archivos)</li>
                  <li>✅ Bonus: Checklist de 27 puntos para validar proveedores</li>
                  <li>✅ Acceso a actualizaciones futuras (100% gratis)</li>
                  <li>✅ Garantía 30 días: si no te sirve, devolvemos tu dinero</li>
                </ul>
              </div>

              <div style="margin: 20px 0;">
                <h3 style="color: #0d9488;">🎯 Cómo Empezar:</h3>
                <ol style="line-height: 1.8;">
                  <li>Descarga TODOS los archivos adjuntos</li>
                  <li>Guárdalos en una carpeta segura</li>
                  <li>Empieza a usarlos inmediatamente</li>
                </ol>
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
        attachments: attachments,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend Error:', error);
      return false;
    }

    console.log(`Email sent successfully to ${email} with ${attachments.length} attachments`);
    return true;
  } catch (error) {
    console.error('Send Product Email Error:', error);
    return false;
  }
}
