import { NextResponse } from 'next/server';
import { addSubscriber, queueEmailsForSubscriber, sendEmail, supabase } from '@/lib/email-system';

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      );
    }

    // 1. Añadir subscriber a Supabase
    const subscriber = await addSubscriber(email, name);

    // 2. Check si ya se envió welcome email (prevenir duplicados)
    const { data: existingSend } = await supabase
      .from('email_sends')
      .select('id')
      .eq('subscriber_id', subscriber.id)
      .eq('subject_line', '✅ Tu Checklist está listo - Importar desde China en 30 Días')
      .single();

    if (existingSend) {
      console.log(`[DEDUP] Welcome email already sent to ${email}`);
      return NextResponse.json({ 
        success: true, 
        message: '¡Ya estás suscrito! Revisa tu email.' 
      });
    }

    // 3. Encolar emails de seguimiento (días 2, 5, 7, 10)
    await queueEmailsForSubscriber(subscriber.id);

    // 3. Enviar email de bienvenida inmediatamente
    const baseUrl = 'https://importardechina.com';

    const welcomeHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2a1f19; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #e65c46 0%, #bf3f30 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0; }
    .content { background: #faf9f7; padding: 30px; border-radius: 0 0 12px 12px; }
    .button { display: inline-block; background: #2a1f19; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
    .checklist { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #14b8a6; }
    .footer { text-align: center; padding: 20px; color: #6b5549; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 32px;">¡Bienvenido! 🎉</h1>
      <p style="margin: 10px 0 0 0; font-size: 18px;">Tu checklist ya está disponible</p>
    </div>
    
    <div class="content">
      <p>Hola${name ? ' ' + name : ''},</p>
      
      <p>Soy Jorge Mora, y después de 15 años importando desde China y gestionar más de 200 contenedores, he creado este checklist con los 30 pasos exactos que necesitas para tu primera importación.</p>
      
      <div class="checklist">
        <h3 style="color: #14b8a6; margin-top: 0;">📦 Lo que incluye tu Checklist:</h3>
        <ul style="margin: 0; padding-left: 20px;">
          <li>30 pasos validados (de la investigación hasta la venta)</li>
          <li>Plantilla de cálculo de costos reales</li>
        </ul>
      </div>
      
      <div style="text-align: center;">
        <a href="${baseUrl}/checklist-importacion" class="button" style="color: white;">
          📥 VER CHECKLIST
        </a>
      </div>
      
      <p><strong>Próximos días:</strong> Te enviaré emails con:</p>
      <ul>
        <li>📧 Cómo usar el checklist paso a paso</li>
        <li>🚨 Los 3 errores que te costarán miles</li>
        <li>🧮 Herramientas que te ahorrarán tiempo</li>
        <li>📚 Acceso a cursos con descuento exclusivo</li>
      </ul>
      
      <p>¿Tienes preguntas? Responde este email.</p>
      
      <p>¡Éxito con tu primera importación!<br><br>
      <strong>Jorge Mora</strong><br>
      <em>Fundador, ImportarDeChina.com</em></p>
    </div>
    
    <div class="footer">
      <p>ImportarDeChina.com | 15 años de experiencia | 200+ contenedores</p>
      <p style="font-size: 12px; color: #999;">
        Recibiste este email porque te suscribiste en ImportarDeChina.com<br>
        Si no quieres recibir más emails, <a href="${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #999;">cancela tu suscripción aquí</a>
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // 4. Enviar email de bienvenida via Resend
    const subjectLine = '✅ Tu Checklist está listo - Importar desde China en 30 Días';
    let resendMessageId = null;
    
    try {
      console.log(`[SEND] Sending welcome email to ${email} (subscriber: ${subscriber.id})`);
      
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Jorge Mora - ImportarDeChina <jorge@importardechina.com>',
          to: [email],
          bcc: ['jorgemorabeneyto@gmail.com'],
          reply_to: ['jorgemorabeneyto@gmail.com'],
          subject: subjectLine,
          html: welcomeHtml,
          tags: [
            { name: 'campaign_id', value: 'welcome' },
            { name: 'variant', value: 'A' }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend API error: ${await response.text()}`);
      }

      const resendData = await response.json();
      resendMessageId = resendData.id;
      console.log(`[SENT] Welcome email sent: ${resendMessageId}`);

      // 5. Registrar envío en email_sends
      await supabase.from('email_sends').insert({
        subscriber_id: subscriber.id,
        campaign_id: 'welcome',
        variant: 'A',
        subject_line: subjectLine,
        sent_at: new Date().toISOString(),
        resend_message_id: resendMessageId,
        status: 'sent'
      });

    } catch (emailError) {
      console.error('[ERROR] Email send failed:', emailError);
      // No fallar la suscripción si falla el email
    }

    return NextResponse.json({ 
      success: true, 
      message: '¡Suscripción exitosa! Revisa tu email.' 
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Error al suscribirse. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
