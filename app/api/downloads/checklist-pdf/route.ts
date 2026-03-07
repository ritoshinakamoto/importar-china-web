import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checklist de Validación de Proveedores</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px;
      background: #faf9f7;
    }
    header {
      text-align: center;
      margin-bottom: 40px;
      border-bottom: 3px solid #0d9488;
      padding-bottom: 20px;
    }
    h1 {
      color: #0d9488;
      font-size: 32px;
      margin: 0;
    }
    .subtitle {
      color: #666;
      font-size: 14px;
      margin-top: 5px;
    }
    .intro {
      background: #f0fdfa;
      border-left: 4px solid #0d9488;
      padding: 15px;
      margin-bottom: 30px;
      border-radius: 4px;
    }
    .section {
      margin-bottom: 30px;
      page-break-inside: avoid;
    }
    .section-title {
      background: #0d9488;
      color: white;
      padding: 12px 15px;
      margin: 0;
      border-radius: 4px 4px 0 0;
      font-size: 16px;
      font-weight: bold;
    }
    .section-items {
      background: white;
      border: 1px solid #e5e7eb;
      border-top: none;
      border-radius: 0 0 4px 4px;
      overflow: hidden;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 15px;
      border-bottom: 1px solid #f3f4f6;
    }
    .checklist-item:last-child {
      border-bottom: none;
    }
    .checkbox {
      width: 20px;
      height: 20px;
      min-width: 20px;
      border: 2px solid #0d9488;
      border-radius: 3px;
      margin-right: 12px;
      margin-top: 2px;
    }
    .item-text {
      flex: 1;
    }
    .item-title {
      font-weight: 600;
      color: #111;
      margin-bottom: 3px;
    }
    .item-desc {
      font-size: 12px;
      color: #666;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
    .pages-hint {
      text-align: center;
      color: #999;
      font-size: 11px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <header>
    <h1>✓ Checklist de Validación de Proveedores</h1>
    <p class="subtitle">27 Puntos Clave Antes de Hacer un Pedido a China</p>
  </header>

  <div class="intro">
    <strong>📌 Cómo Usar Este Checklist:</strong><br>
    Usa este documento ANTES de hacer tu primer pedido importante. Marca cada punto según el proveedor. Un proveedor confiable debe cumplir mínimo 24/27 puntos.
  </div>

  <div class="section">
    <h2 class="section-title">1️⃣ INFORMACIÓN BÁSICA</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Nombre Legal Registrado</div>
          <div class="item-desc">Verifica en cámara comercial china que el nombre coincide con documentos</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Años en Operación (3+)</div>
          <div class="item-desc">Preferiblemente que lleve más de 3 años en el mercado</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Ubicación Verificada</div>
          <div class="item-desc">Busca fotos de la fábrica/oficina. Si no hay, es red flag</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Teléfono & Email Oficial</div>
          <div class="item-desc">Email corporativo (no Gmail). Teléfono +86 verificado</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">2️⃣ REPUTACIÓN ONLINE</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Reviews en Alibaba (4.5+)</div>
          <div class="item-desc">Mínimo 4.5/5 con 100+ reviews. Leer comentarios negativos</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Verificación Gold Supplier</div>
          <div class="item-desc">Aliexpress/Alibaba debe marcar como "Verified Supplier"</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Antigüedad Perfil (2+ años)</div>
          <div class="item-desc">Perfil creado hace poco = posible estafa</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Respuesta Rápida (< 2h)</div>
          <div class="item-desc">Proveedores serios responden en máximo 2 horas</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">3️⃣ CAPACIDADES DE PRODUCCIÓN</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Pueden Hacer tu Producto</div>
          <div class="item-desc">Solicita portfolio de productos similares</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Mínimo Pedido Razonable (MOQ)</div>
          <div class="item-desc">No debería pedir MOQ > 1000 para productos estándar</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Capacidad de Producción Mensual</div>
          <div class="item-desc">Puede producir tus cantidades sin retraso extremo</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Cuentan con Certificaciones ISO</div>
          <div class="item-desc">ISO 9001, ISO 14001 u otra relevante al sector</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">4️⃣ MUESTRAS Y CALIDAD</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Dispuestos a Enviar Muestras</div>
          <div class="item-desc">Buen proveedor siempre acepta enviar muestras</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Tiempo Muestra Razonable (5-10 días)</div>
          <div class="item-desc">No debería tardar más de 10 días laborales</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Cobran Tarifa de Muestra Justa</div>
          <div class="item-desc">5-20 USD es normal. Más de 50 USD es sospechoso</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Reembolso Muestra en Pedido</div>
          <div class="item-desc">Deberían descontar costo muestra de pedido bulk</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">5️⃣ PAGOS Y LOGÍSTICA</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Acepta Depósito (30-50%)</div>
          <div class="item-desc">Solicita depósito pero no el 100% antes de producir</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Métodos Pago Seguros</div>
          <div class="item-desc">T/T, L/C, o Alibaba Trade Assurance (no Western Union)</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Experiencia Exportación</div>
          <div class="item-desc">Han hablado con otros importadores antes</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Manejo Aduanas Competente</div>
          <div class="item-desc">Saben crear invoices correctas y documentación</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">6️⃣ COMUNICACIÓN Y CONFIABILIDAD</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Hablan Inglés Claro</div>
          <div class="item-desc">Emails sin errores graves. Si no hablan inglés, es riesgo</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Respetan Plazos de Entrega</div>
          <div class="item-desc">Reviews mencionan entregas a tiempo</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Problema = Solución (No Excusas)</div>
          <div class="item-desc">Si hay defectos, ofrecen reemplazo sin drama</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Tienen Persona de Contacto Dedicada</div>
          <div class="item-desc">No cambiar de contacto constantemente</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">7️⃣ RED FLAGS - Si Hay Alguno, NO Compres</h2>
    <div class="section-items">
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Presionan a Comprar Rápido</div>
          <div class="item-desc">"Oferta especial solo hoy" = estafa común</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Precios Ridículamente Bajos</div>
          <div class="item-desc">Si es demasiado barato, es porque es malo</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Sin Dirección Física o Fake</div>
          <div class="item-desc">Googlea ubicación en Street View. Si no existe = estafa</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Quieren 100% Prepago</div>
          <div class="item-desc">Insisten en pago total antes de producir = peligro</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">Quejas en Reviews sobre Calidad</div>
          <div class="item-desc">Múltiples reviews diciendo "defectuoso" o "fake"</div>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-text">
          <div class="item-title">No Tienen Fotos Reales de Fábrica</div>
          <div class="item-desc">Solo fotos de catálogo = probablemente reseller</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <p><strong>Checklist de Importación desde China</strong></p>
    <p>Creado por ImportarDeChina.com | Basado en 15+ años de experiencia importando</p>
    <p>Versión 1.0 | 2026</p>
  </div>

  <div class="pages-hint">
    💡 Imprime este checklist en PDF y llévalo contigo. Complétalo mientras investigas cada proveedor.
  </div>
</body>
</html>
    `;

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      printBackground: true,
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Checklist-Validacion-Proveedores.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('PDF Generation Error:', error);
    return new NextResponse('Error generating PDF', { status: 500 });
  }
}
