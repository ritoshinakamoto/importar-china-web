import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const emailTemplatesContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>15 Email Templates - Importación China</title>
  <style>
    body {
      font-family: 'Georgia', serif;
      line-height: 1.7;
      color: #2c3e50;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px;
      background: white;
    }
    .cover {
      text-align: center;
      page-break-after: always;
      padding: 100px 0;
    }
    .cover h1 {
      font-size: 48px;
      color: #0d9488;
      margin-bottom: 20px;
    }
    .cover .subtitle {
      font-size: 24px;
      color: #6b7280;
      margin-bottom: 40px;
    }
    .cover .author {
      font-size: 18px;
      color: #374151;
      margin-top: 60px;
    }
    h1 {
      color: #0d9488;
      font-size: 32px;
      margin-top: 40px;
      page-break-before: always;
    }
    h2 {
      color: #059669;
      font-size: 24px;
      margin-top: 30px;
      border-bottom: 2px solid #d1fae5;
      padding-bottom: 10px;
    }
    h3 {
      color: #047857;
      font-size: 20px;
      margin-top: 20px;
    }
    pre {
      background: #f3f4f6;
      border-left: 4px solid #0d9488;
      padding: 20px;
      margin: 20px 0;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      line-height: 1.6;
      white-space: pre-wrap;
      page-break-inside: avoid;
    }
    .intro {
      background: #ecfdf5;
      border-left: 4px solid #059669;
      padding: 20px;
      margin: 20px 0;
      page-break-inside: avoid;
    }
    .warning {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 15px;
      margin: 15px 0;
      page-break-inside: avoid;
    }
    .tip {
      background: #dbeafe;
      border-left: 4px solid #3b82f6;
      padding: 15px;
      margin: 15px 0;
      page-break-inside: avoid;
    }
    ul, ol {
      margin: 15px 0;
      padding-left: 30px;
    }
    li {
      margin: 8px 0;
    }
    .toc {
      page-break-after: always;
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
    }
    .toc h2 {
      color: #0d9488;
      border: none;
    }
    .toc ul {
      list-style: none;
      padding-left: 0;
    }
    .toc li {
      margin: 10px 0;
      padding-left: 20px;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      page-break-inside: avoid;
    }
    table th {
      background: #0d9488;
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: bold;
    }
    table td {
      border: 1px solid #e5e7eb;
      padding: 10px;
    }
    table tr:nth-child(even) {
      background: #f9fafb;
    }
    strong {
      color: #0d9488;
    }
  </style>
</head>
<body>
  <!-- COVER PAGE -->
  <div class="cover">
    <h1>📧 Email Templates Pack</h1>
    <div class="subtitle">15 Plantillas Profesionales para Importar desde China</div>
    <div class="author">
      <p><strong>Por Jorge Mora</strong></p>
      <p>ImportarDeChina.com</p>
      <p>15+ años de experiencia | 200+ contenedores importados</p>
    </div>
  </div>

  <!-- TABLE OF CONTENTS -->
  <div class="toc">
    <h2>📋 Tabla de Contenidos</h2>
    <ul>
      <li><strong>INSTRUCCIONES DE USO</strong></li>
      <li><strong>TEMPLATE 1:</strong> Primer Contacto - Solicitud Cotización</li>
      <li><strong>TEMPLATE 2:</strong> Solicitud de Muestras</li>
      <li><strong>TEMPLATE 3:</strong> Negociación Precio</li>
      <li><strong>TEMPLATE 4:</strong> Confirmación Orden</li>
      <li><strong>TEMPLATE 5:</strong> Seguimiento Producción</li>
      <li><strong>TEMPLATE 6:</strong> Solicitud Inspección Pre-Embarque</li>
      <li><strong>TEMPLATE 7:</strong> Aprobación Pago Final</li>
      <li><strong>TEMPLATE 8:</strong> Manejo Defectos/Problemas</li>
      <li><strong>TEMPLATE 9:</strong> Solicitud Descuento Pedido Repetido</li>
      <li><strong>TEMPLATE 10:</strong> Solicitud Customización</li>
      <li><strong>TEMPLATE 11:</strong> Cambio Forma de Pago</li>
      <li><strong>TEMPLATE 12:</strong> Solicitar Referencias/Certificados</li>
      <li><strong>TEMPLATE 13:</strong> Agradecer y Cerrar Relación</li>
      <li><strong>TEMPLATE 14:</strong> Felicitaciones Año Nuevo Chino</li>
      <li><strong>TEMPLATE 15:</strong> Recordatorio Pago Amistoso</li>
      <li><strong>ANEXOS:</strong> Errores Comunes, Frases Útiles, Cronograma, Checklist</li>
    </ul>
  </div>

  <h1>📧 Email Templates Pack - Importación China</h1>

  <div class="intro">
    <h3>🎯 Qué Incluye Este Pack</h3>
    <ul>
      <li><strong>15 plantillas de email</strong> listas para usar en inglés</li>
      <li><strong>Guías detalladas</strong> de cuándo usar cada template</li>
      <li><strong>Ejemplos personalizables</strong> según tu producto y situación</li>
      <li><strong>Consejos expertos</strong> para evitar errores culturales</li>
      <li><strong>Frases profesionales</strong> que generan confianza</li>
    </ul>
  </div>

  <h2>INSTRUCCIONES DE USO</h2>

  <h3>Reglas de Oro Comunicación con Proveedores:</h3>
  <ol>
    <li><strong>Sé profesional</strong> - No parezcas novato (los proveedores tienen radar)</li>
    <li><strong>Usa ficha de producto</strong> - Centraliza toda la info técnica en un documento</li>
    <li><strong>Mantén un canal</strong> - No disperses conversación (Alibaba → Email → WhatsApp)</li>
    <li><strong>Pide todo por escrito</strong> - Confirmaciones escritas siempre</li>
    <li><strong>No negocies todo</strong> - Enfócate en: precio, plazo, forma pago, MOQ, calidad</li>
  </ol>

  <h3>Personalización:</h3>
  <ul>
    <li>Reemplaza <code>[TU NOMBRE]</code>, <code>[TU EMPRESA]</code>, <code>[PRODUCTO]</code>, etc.</li>
    <li>Ajusta cantidades y specs según tu caso</li>
    <li>Mantén tono profesional pero directo</li>
  </ul>

  <div class="footer">
    <p><strong>ImportarDeChina.com</strong> | Email Templates Pack v1.0</p>
    <p>© 2026 Jorge Mora - Todos los derechos reservados</p>
  </div>
</body>
</html>`;

// Generate PDF
async function generatePDF() {
  console.log('🚀 Generating Email Templates PDF...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(emailTemplatesContent, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, '../public/products/email-templates-importacion-china.pdf');
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
    printBackground: true,
  });
  
  await browser.close();
  
  console.log(`✅ PDF generated: ${pdfPath}`);
  console.log(`📊 File size: ${(await fs.stat(pdfPath)).size / 1024} KB`);
}

generatePDF().catch(console.error);
