import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, sessionId } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const success = await sendPdfEmail(email);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, email });
  } catch (error) {
    console.error('Send PDF Error:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}

async function sendPdfEmail(email: string) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Resend API key not configured');
      return false;
    }

    // Get PDF from our own endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const pdfResponse = await fetch(`${baseUrl}/api/downloads/checklist-pdf`, {
      method: 'GET',
    });

    if (!pdfResponse.ok) {
      console.error('Failed to fetch PDF:', pdfResponse.statusText);
      return false;
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

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
        subject: '✅ Tu Compra: 15 Plantillas de Email + Bonus Checklist',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0d9488; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
    .section { margin: 20px 0; }
    .section h3 { color: #0d9488; margin-top: 15px; }
    ul { padding-left: 20px; }
    li { margin: 8px 0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666; text-align: center; }
    .cta { display: inline-block; background: #0d9488; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ ¡Compra Confirmada!</h1>
      <p>Gracias por confiar en ImportarDeChina</p>
    </div>
    
    <div class="content">
      <p>Hola,</p>
      
      <p>Tu pago de <strong>€9</strong> ha sido procesado exitosamente. En los adjuntos encontrarás tu descarga.</p>

      <div class="section">
        <h3>📦 Tu Compra Incluye:</h3>
        <ul>
          <li>✅ 15 plantillas de email (PDF descargable)</li>
          <li>✅ Guía completa: cuándo usar cada plantilla</li>
          <li>✅ Ejemplos reales de negociaciones exitosas vs fallidas</li>
          <li>✅ <strong>BONUS: Checklist de 27 puntos para validar proveedores chinos</strong></li>
          <li>✅ Acceso a actualizaciones futuras (100% gratis)</li>
          <li>✅ Garantía 30 días: si no te sirve, devolvemos tu dinero</li>
        </ul>
      </div>

      <div class="section">
        <h3>🎯 Cómo Empezar:</h3>
        <ol>
          <li>Descarga los PDFs adjuntos a este email</li>
          <li>Abre el Checklist y guárdalo en tu móvil</li>
          <li>Usa las plantillas en tu primer email a un proveedor chino</li>
          <li>Verás la diferencia en la respuesta y velocidad</li>
        </ol>
      </div>

      <div class="section">
        <h3>💡 Próximo Paso Recomendado:</h3>
        <p>Después de usar las plantillas, prueba nuestra <strong>Calculadora de Costos Bundle</strong> (próximamente) para optimizar tus márgenes en la importación.</p>
      </div>

      <div class="section">
        <h3>❓ Preguntas?</h3>
        <p>Responde directamente a este email y te ayudaremos. Nuestro equipo responde en máximo 24 horas.</p>
      </div>

      <div class="footer">
        <p><strong>ImportarDeChina.com</strong></p>
        <p>15+ años de experiencia importando desde China al mejor costo</p>
        <p>© 2026 · Todos los derechos reservados</p>
      </div>
    </div>
  </div>
</body>
</html>
        `,
        attachments: [
          {
            filename: 'Checklist-Validacion-Proveedores.pdf',
            content: pdfBase64,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend API Error:', error);
      return false;
    }

    console.log('Email sent successfully to:', email);
    return true;
  } catch (error) {
    console.error('Send PDF Error:', error);
    return false;
  }
}
