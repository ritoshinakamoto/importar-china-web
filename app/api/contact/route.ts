import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar email a Jane con BCC a Jorge
    const { data, error } = await resend.emails.send({
      from: 'Formulario Web <contacto@importardechina.com>',
      to: ['jane.importardechina@agentmail.to'],
      bcc: ['jomorben@proton.me'], // Copia oculta a Jorge
      replyTo: email, // Responder directo al cliente
      subject: `📬 Nuevo contacto: ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde ImportarDeChina.com</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
        <hr/>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Error al enviar email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
