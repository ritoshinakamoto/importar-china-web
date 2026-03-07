#!/usr/bin/env node
/**
 * Generar PDF del Checklist Gratis (30 pasos)
 */

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';

const HTML_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checklist: Tu Primera Importación desde China</title>
  <style>
    @page {
      size: A4;
      margin: 25mm 20mm;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 10pt;
      line-height: 1.6;
      color: #2a1f19;
    }
    
    .header {
      background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .header h1 {
      font-size: 22pt;
      margin-bottom: 8px;
    }
    
    .header p {
      font-size: 11pt;
      opacity: 0.95;
    }
    
    h2 {
      font-size: 16pt;
      color: #14b8a6;
      margin-top: 20px;
      margin-bottom: 12px;
      padding-bottom: 6px;
      border-bottom: 2px solid #14b8a6;
    }
    
    h3 {
      font-size: 12pt;
      color: #0d9488;
      margin-top: 14px;
      margin-bottom: 8px;
    }
    
    ul {
      margin-left: 20px;
      margin-bottom: 10px;
    }
    
    ul li {
      margin-bottom: 4px;
    }
    
    .checklist-item {
      background: #f0fdfa;
      padding: 8px;
      border-left: 3px solid #14b8a6;
      margin-bottom: 6px;
    }
    
    .phase {
      background: white;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 14px;
      margin-bottom: 16px;
      page-break-inside: avoid;
    }
    
    .phase-title {
      background: #14b8a6;
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 13pt;
      font-weight: bold;
      margin: -14px -14px 12px -14px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 9pt;
    }
    
    table th {
      background: #14b8a6;
      color: white;
      padding: 8px;
      text-align: left;
      font-weight: bold;
    }
    
    table td {
      border: 1px solid #d1d5db;
      padding: 6px 8px;
    }
    
    .warning {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 10px;
      margin: 12px 0;
      border-radius: 4px;
    }
    
    .success {
      background: #d1fae5;
      border-left: 4px solid #10b981;
      padding: 10px;
      margin: 12px 0;
      border-radius: 4px;
    }
    
    .footer {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 2px solid #14b8a6;
      text-align: center;
      font-size: 9pt;
      color: #6b5549;
    }
    
    .footer strong {
      color: #2a1f19;
      font-size: 10pt;
    }
    
    @media print {
      body {
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>✅ Checklist: Tu Primera Importación desde China en 30 Días</h1>
    <p><strong>Por Jorge Mora</strong> - ImportarDeChina.com</p>
    <p>15 años de experiencia | 200+ contenedores importados</p>
  </div>

  <div class="phase">
    <div class="phase-title">📦 FASE 1: INVESTIGACIÓN (Días 1-5)</div>
    
    <h3>☑️ Paso 1: Define tu producto</h3>
    <ul>
      <li>Producto específico elegido (nada de "ropa genérica")</li>
      <li>Público objetivo claro (quién lo comprará)</li>
      <li>Precio venta estimado en tu mercado</li>
    </ul>
    
    <h3>☑️ Paso 2: Investiga la demanda</h3>
    <ul>
      <li>Búsquedas mensuales en Google (usar Keywords Planner)</li>
      <li>Competencia en Amazon/marketplaces</li>
      <li>Tendencia: creciente, estable o decreciente</li>
    </ul>
    
    <h3>☑️ Paso 3: Calcula márgenes preliminares</h3>
    <ul>
      <li>Precio fabricante China (estimado)</li>
      <li>Costos envío + aduanas (25-35% del producto)</li>
      <li>Margen mínimo 3x (ej: costo $10 → venta $30+)</li>
    </ul>
    
    <h3>☑️ Paso 4: Verifica restricciones legales</h3>
    <ul>
      <li>Producto NO restringido (armas, medicinas, etc.)</li>
      <li>Certificaciones necesarias (CE, FDA, etc.) identificadas</li>
      <li>Aranceles aduaneros consultados (TARIC Europa)</li>
    </ul>
    
    <h3>☑️ Paso 5: Presupuesto inicial</h3>
    <ul>
      <li>Capital disponible: mínimo $2,000-5,000</li>
      <li>Reserva para imprevistos (20% extra)</li>
    </ul>
  </div>

  <div class="phase">
    <div class="phase-title">🔍 FASE 2: SOURCING PROVEEDORES (Días 6-10)</div>
    
    <h3>☑️ Paso 6: Busca proveedores en Alibaba</h3>
    <ul>
      <li>Mínimo 10 proveedores contactados</li>
      <li>Filtros aplicados: Trade Assurance, Verified Supplier</li>
    </ul>
    
    <h3>☑️ Paso 7: Solicita cotizaciones</h3>
    <ul>
      <li>Especificaciones técnicas claras enviadas</li>
      <li>Cantidades: 100, 500, 1000 unidades</li>
      <li>MOQ (cantidad mínima) aceptable</li>
    </ul>
    
    <h3>☑️ Paso 8: Compara ofertas</h3>
    <ul>
      <li>Precio por unidad</li>
      <li>Calidad materiales</li>
      <li>Tiempo producción</li>
      <li>Términos pago (30% anticipo, 70% antes envío)</li>
    </ul>
    
    <h3>☑️ Paso 9: Solicita muestras</h3>
    <ul>
      <li>2-3 proveedores seleccionados</li>
      <li>Muestras pagadas ($50-200 + envío)</li>
      <li>Enviadas por DHL/FedEx (5-7 días)</li>
    </ul>
    
    <h3>☑️ Paso 10: Evalúa muestras</h3>
    <ul>
      <li>Calidad coincide con expectativa</li>
      <li>Materiales correctos</li>
      <li>Funcionalidad 100%</li>
    </ul>
  </div>

  <div class="phase">
    <div class="phase-title">💰 FASE 3: NEGOCIACIÓN Y PEDIDO (Días 11-15)</div>
    
    <h3>☑️ Paso 11-15: Negociación y Pago</h3>
    <ul>
      <li>Negocia precio final y descuento por volumen</li>
      <li>Revisa Proforma Invoice (producto, cantidad, precio)</li>
      <li>Haz depósito 30% (transferencia o Trade Assurance)</li>
      <li>Confirma inicio producción con proveedor</li>
      <li>Prepara documentación (DNI, NIF, dirección entrega)</li>
    </ul>
  </div>

  <div class="phase">
    <div class="phase-title">✅ FASE 4: CONTROL DE CALIDAD (Días 16-22)</div>
    
    <h3>☑️ Paso 16-20: Inspección QC</h3>
    <ul>
      <li>Contrata empresa inspección (AsiaInspection, QIMA)</li>
      <li>Revisa reporte: 0 defectos críticos, <2.5% mayores, <4% menores</li>
      <li>Aprueba y paga balance 70% final</li>
      <li>Solicita documentos exportación (Packing List, Invoice, Certificados)</li>
    </ul>
  </div>

  <div class="phase">
    <div class="phase-title">🚢 FASE 5: LOGÍSTICA Y ENVÍO (Días 23-35+)</div>
    
    <h3>☑️ Paso 21-25: Envío y Aduanas</h3>
    <ul>
      <li>Elige método: Marítimo (25-40d), Aéreo (5-10d), Express (3-5d)</li>
      <li>Contrata transitario/freight forwarder</li>
      <li>Tracking del envío activo</li>
      <li>Prepara despacho aduanas con agente</li>
      <li>Paga IVA (21%) + Aranceles (0-20%) + Tasas (~$100-300)</li>
    </ul>
  </div>

  <div class="phase">
    <div class="phase-title">📦 FASE 6: RECEPCIÓN Y VENTA (Días 36+)</div>
    
    <h3>☑️ Paso 26-30: Recepción y Lanzamiento</h3>
    <ul>
      <li>Recibe mercancía e inspecciona visualmente</li>
      <li>Verifica contenido vs pedido</li>
      <li>Prepara para venta (fotos, listings)</li>
      <li>Lanza al mercado (Amazon, tu web, etc.)</li>
      <li>Analiza: margen real vs estimado, lecciones aprendidas</li>
    </ul>
  </div>

  <div style="page-break-before: always;"></div>

  <h2>📊 PLANTILLA: CÁLCULO DE COSTOS REALES</h2>
  <table>
    <thead>
      <tr>
        <th>CONCEPTO</th>
        <th>EJEMPLO</th>
        <th>TU IMPORTACIÓN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Precio unitario FOB</strong></td>
        <td>$5.00</td>
        <td>$______</td>
      </tr>
      <tr>
        <td><strong>Cantidad</strong></td>
        <td>1,000 uds</td>
        <td>______ uds</td>
      </tr>
      <tr>
        <td><strong>Subtotal producto</strong></td>
        <td>$5,000</td>
        <td>$______</td>
      </tr>
      <tr>
        <td><strong>Envío China → Puerto</strong></td>
        <td>$800</td>
        <td>$______</td>
      </tr>
      <tr>
        <td><strong>Despacho aduanas</strong></td>
        <td>$200</td>
        <td>$______</td>
      </tr>
      <tr>
        <td><strong>Transporte local</strong></td>
        <td>$150</td>
        <td>$______</td>
      </tr>
      <tr>
        <td><strong>Aranceles (ej: 5%)</strong></td>
        <td>$250</td>
        <td>$______</td>
      </tr>
      <tr>
        <td><strong>IVA (ej: 21%)</strong></td>
        <td>$1,155</td>
        <td>$______</td>
      </tr>
      <tr style="background: #f0fdfa;">
        <td><strong>TOTAL INVERTIDO</strong></td>
        <td><strong>$7,655</strong></td>
        <td><strong>$______</strong></td>
      </tr>
      <tr style="background: #f0fdfa;">
        <td><strong>Costo por unidad</strong></td>
        <td><strong>$7.66</strong></td>
        <td><strong>$______</strong></td>
      </tr>
      <tr>
        <td><strong>Precio venta estimado</strong></td>
        <td>$25</td>
        <td>$______</td>
      </tr>
      <tr style="background: #d1fae5;">
        <td><strong>Margen bruto</strong></td>
        <td><strong>$17.34 (3.3x)</strong></td>
        <td><strong>$______</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="success">
    <strong>💡 Regla de oro:</strong> Tu margen debe ser mínimo 3x el costo. Si vendes a $25, tu costo total no debe superar $8.30/unidad.
  </div>

  <h2>🚨 ERRORES COMUNES A EVITAR</h2>
  
  <div class="warning">
    <strong>❌ NO HAGAS ESTO:</strong>
    <ul>
      <li>Pagar 100% por adelantado → Paga siempre 30-70</li>
      <li>Saltar inspección QC → Ahorras $300, pierdes $3,000</li>
      <li>No verificar certificaciones → Aduanas retiene mercancía</li>
      <li>Elegir proveedor más barato → Barato sale caro</li>
      <li>Olvidar IVA/aranceles en cálculo → Margen real es 0</li>
    </ul>
  </div>

  <div class="success">
    <strong>✅ HAZ ESTO:</strong>
    <ul>
      <li>Empieza con pedido pequeño (100-500 uds) para probar</li>
      <li>Pide muestras SIEMPRE antes de pedido grande</li>
      <li>Usa Trade Assurance en Alibaba (protección)</li>
      <li>Documenta TODO (emails, contratos, fotos)</li>
      <li>Calcula costos reales ANTES de pedir</li>
    </ul>
  </div>

  <h2>💪 MENSAJE FINAL</h2>
  <p style="margin: 12px 0;">
    <strong>Importar de China NO es fácil, pero SÍ es rentable si lo haces bien.</strong>
  </p>
  <p style="margin: 12px 0;">
    Los 30 pasos de este checklist representan 15 años de experiencia y más de 200 contenedores importados. 
    No son teoría, son pasos reales que funcionan.
  </p>
  <p style="margin: 12px 0;">
    <strong>El secreto no es hacer todo perfecto desde el inicio. El secreto es empezar, aprender rápido, y mejorar cada vez.</strong>
  </p>

  <div class="footer">
    <p><strong>Jorge Mora</strong></p>
    <p>Fundador, ImportarDeChina.com</p>
    <p>15 años importando | 200+ contenedores | Viví en China</p>
    <p style="margin-top: 10px;">¿Necesitas ayuda? jorge@importardechina.com</p>
    <p style="margin-top: 10px;">© 2026 ImportarDeChina.com - Todos los derechos reservados</p>
  </div>
</body>
</html>
`;

async function generatePDF() {
  console.log('🎨 Generando PDF Checklist Gratis...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(HTML_TEMPLATE, { waitUntil: 'networkidle0' });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: {
      top: '25mm',
      right: '20mm',
      bottom: '25mm',
      left: '20mm'
    }
  });

  await browser.close();

  writeFileSync('public/checklist-gratis-30-pasos.pdf', pdfBuffer);
  console.log('✅ PDF generado: public/checklist-gratis-30-pasos.pdf');
  
  const stats = require('fs').statSync('public/checklist-gratis-30-pasos.pdf');
  console.log(`📊 Tamaño: ${(stats.size / 1024).toFixed(1)} KB`);
}

generatePDF().catch(console.error);
