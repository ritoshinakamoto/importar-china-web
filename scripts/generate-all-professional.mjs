#!/usr/bin/env node
/**
 * GENERADOR COMPLETO - PRODUCTOS PROFESIONALES
 * Genera los 4 productos con diseño consistente y profesional
 */

import ExcelJS from 'exceljs';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, '../templates/pdf');
const PUBLIC_DIR = path.join(__dirname, '../public/products');
const CONTENT_DIR = path.join(__dirname, '../content');

// LOAD TEMPLATE SYSTEM
async function loadBaseTemplate() {
  const baseHTML = await fs.readFile(path.join(TEMPLATES_DIR, 'base.html'), 'utf-8');
  const styles = await fs.readFile(path.join(TEMPLATES_DIR, 'styles/base.css'), 'utf-8');
  return { baseHTML, styles };
}

// RENDER PDF FROM HTML
async function renderPDF(html, outputPath) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: {
      top: '25mm',
      right: '20mm',
      bottom: '25mm',
      left: '20mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="width: 100%; font-size: 9px; padding: 0 20mm; display: flex; justify-content: space-between; color: #64748b;">
        <div style="font-weight: 700; color: #0d9488;">ImportarDeChina.com</div>
        <div></div>
      </div>
    `,
    footerTemplate: `
      <div style="width: 100%; font-size: 9px; padding: 0 20mm; display: flex; justify-content: space-between; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 8px;">
        <div style="font-weight: 600;">Jorge Mora</div>
        <div style="color: #0d9488;">ImportarDeChina.com</div>
        <div>Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>
      </div>
    `
  });
  
  await browser.close();
}

// 1. EMAIL TEMPLATES PDF
async function generateEmailTemplatesPDF() {
  console.log('📧 Generating Email Templates PDF...');
  
  const contentPath = path.join(CONTENT_DIR, 'file_97---0feb503a-c244-451d-a4be-6e29c545ca58.md');
  const content = await fs.readFile(contentPath, 'utf-8');
  
  // Parse markdown to HTML (simple conversion)
  let html = content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
  
  html = `<p>${html}</p>`;
  
  const { baseHTML, styles } = await loadBaseTemplate();
  
  const finalHTML = baseHTML
    .replace('{{TITLE}}', 'Email Templates - Comunicación con Proveedores Chinos')
    .replace('{{PRODUCT_NAME}}', 'Email Templates')
    .replace('{{STYLES}}', styles)
    .replace('{{CONTENT}}', `
      <div class="intro">
        <h1>📧 Email Templates para Proveedores Chinos</h1>
        <p>Plantillas profesionales para comunicación efectiva con fabricantes y proveedores en China. Optimizadas para negociaciones, cotizaciones y seguimiento de pedidos.</p>
      </div>
      ${html}
    `);
  
  await renderPDF(finalHTML, path.join(PUBLIC_DIR, 'email-templates-proveedores-china.pdf'));
  console.log('✅ Email Templates PDF created');
}

// 2. CALCULADORA EXCEL
async function generateCalculadoraExcel() {
  console.log('📊 Generating Calculadora Excel...');
  
  const wb = new ExcelJS.Workbook();
  const calc = wb.addWorksheet('Calculadora Principal');
  
  // TÍTULO
  calc.mergeCells('A1:E1');
  calc.getCell('A1').value = '📊 CALCULADORA DE COSTOS - IMPORTACIÓN CHINA';
  calc.getCell('A1').font = { size: 18, bold: true, color: { argb: 'FF0d9488' } };
  calc.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  calc.getRow(1).height = 30;
  
  // INFORMACIÓN BÁSICA
  calc.getCell('A3').value = 'INFORMACIÓN BÁSICA';
  calc.getCell('A3').font = { bold: true, size: 14 };
  calc.getCell('A3').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  const basicRows = [
    ['Producto:', '[Nombre del producto]', 5],
    ['País Origen:', 'China', 6],
    ['Puerto Origen:', 'Shanghai', 7],
    ['País Destino:', 'España', 8],
    ['Puerto Destino:', 'Valencia', 9],
    ['Moneda:', 'USD', 10],
    ['Tipo Cambio USD/EUR:', 0.92, 11]
  ];
  
  basicRows.forEach(([label, value, row]) => {
    calc.getCell(`A${row}`).value = label;
    calc.getCell(`B${row}`).value = value;
    calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  });
  
  // DATOS DEL PRODUCTO
  calc.getCell('A13').value = 'DATOS DEL PRODUCTO';
  calc.getCell('A13').font = { bold: true, size: 14 };
  calc.getCell('A13').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  calc.getRow(13).height = 25;
  
  const productData = [
    { row: 15, label: 'Precio FOB Unitario (USD):', value: 5.00, editable: true, format: '$#,##0.00' },
    { row: 16, label: 'Cantidad Unidades:', value: 1000, editable: true, format: '#,##0' },
    { row: 17, label: 'Peso por Unidad (kg):', value: 1.00, editable: true, format: '0.00' },
    { row: 18, label: 'Peso Total (kg):', formula: 'B16*B17', editable: false, format: '#,##0.00' },
    { row: 19, label: 'Volumen por Unidad (CBM):', value: 0.0050, editable: true, format: '0.0000' },
    { row: 20, label: 'Volumen Total (CBM):', formula: 'B16*B19', editable: false, format: '0.00' },
    { row: 21, label: 'Valor FOB Total:', formula: 'B15*B16', editable: false, format: '$#,##0.00', highlight: true }
  ];
  
  productData.forEach(({ row, label, value, formula, editable, format, highlight }) => {
    calc.getCell(`A${row}`).value = label;
    calc.getCell(`A${row}`).font = highlight ? { bold: true } : {};
    
    if (formula) {
      calc.getCell(`B${row}`).value = { formula };
    } else {
      calc.getCell(`B${row}`).value = value;
    }
    
    calc.getCell(`B${row}`).numFmt = format;
    
    if (editable) {
      calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
    }
    
    if (highlight) {
      calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
      calc.getCell(`B${row}`).font = { bold: true };
    }
  });
  
  // COSTOS DE TRANSPORTE
  calc.getCell('A23').value = 'COSTOS DE TRANSPORTE';
  calc.getCell('A23').font = { bold: true, size: 14 };
  calc.getCell('A23').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  calc.getRow(23).height = 25;
  
  const transportData = [
    { row: 25, label: 'Método Transporte:', value: 'LCL', editable: true },
    { row: 26, label: 'Tarifa LCL ($/CBM):', value: 120, editable: true, format: '$#,##0.00' },
    { row: 27, label: 'Costo Transporte Marítimo:', formula: 'B20*B26', format: '$#,##0.00' },
    { row: 28, label: 'Seguro (2% FOB):', formula: 'B21*0.02', format: '$#,##0.00' },
    { row: 29, label: 'Certificaciones:', value: 500, editable: true, format: '$#,##0.00' },
    { row: 30, label: 'Total Transporte:', formula: 'B27+B28+B29', format: '$#,##0.00', highlight: true }
  ];
  
  transportData.forEach(({ row, label, value, formula, editable, format, highlight }) => {
    calc.getCell(`A${row}`).value = label;
    calc.getCell(`A${row}`).font = highlight ? { bold: true } : {};
    
    if (formula) {
      calc.getCell(`B${row}`).value = { formula };
    } else {
      calc.getCell(`B${row}`).value = value;
    }
    
    if (format) calc.getCell(`B${row}`).numFmt = format;
    
    if (editable) {
      calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
    }
    
    if (highlight) {
      calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
      calc.getCell(`B${row}`).font = { bold: true };
    }
  });
  
  // RESUMEN FINAL
  calc.getCell('A32').value = '💰 RESUMEN FINAL';
  calc.getCell('A32').font = { bold: true, size: 16, color: { argb: 'FF0d9488' } };
  calc.getCell('A32').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFccfbf1' } };
  calc.getRow(32).height = 30;
  
  const summaryData = [
    { row: 34, label: 'Costo Total Producto:', formula: 'B21+B30', format: '$#,##0.00' },
    { row: 35, label: 'Costo Unitario Final:', formula: 'B34/B16', format: '$#,##0.00' },
    { row: 36, label: 'En Euros (costo total):', formula: 'B34*B11', format: '€#,##0.00' },
    { row: 37, label: 'En Euros (por unidad):', formula: 'B35*B11', format: '€#,##0.00' }
  ];
  
  summaryData.forEach(({ row, label, formula, format }) => {
    calc.getCell(`A${row}`).value = label;
    calc.getCell(`A${row}`).font = { bold: true };
    calc.getCell(`B${row}`).value = { formula };
    calc.getCell(`B${row}`).numFmt = format;
    calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFbfdbfe' } };
    calc.getCell(`B${row}`).font = { bold: true, size: 12 };
  });
  
  // Column widths
  calc.getColumn('A').width = 35;
  calc.getColumn('B').width = 20;
  
  await wb.xlsx.writeFile(path.join(PUBLIC_DIR, 'calculadora-costos-importacion.xlsx'));
  console.log('✅ Calculadora Excel created');
}

// 3. CHECKLIST QC PDF + EXCEL
async function generateChecklistQC() {
  console.log('✅ Generating Checklist QC (PDF + Excel)...');
  
  // PDF
  const contentPath = path.join(CONTENT_DIR, 'file_99---ba39e718-98f1-43ed-bb6c-041b1545abf6.md');
  const content = await fs.readFile(contentPath, 'utf-8');
  
  let html = content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
  
  html = `<p>${html}</p>`;
  
  const { baseHTML, styles } = await loadBaseTemplate();
  
  const finalHTML = baseHTML
    .replace('{{TITLE}}', 'Checklist Control de Calidad')
    .replace('{{PRODUCT_NAME}}', 'Checklist QC')
    .replace('{{STYLES}}', styles)
    .replace('{{CONTENT}}', `
      <div class="intro">
        <h1>✅ Checklist Control de Calidad</h1>
        <p>Protocolo completo de inspección para productos importados de China. Asegura calidad y cumplimiento de estándares antes del envío.</p>
      </div>
      ${html}
    `);
  
  await renderPDF(finalHTML, path.join(PUBLIC_DIR, 'checklist-control-calidad.pdf'));
  
  // Excel editable
  const wb = new ExcelJS.Workbook();
  const sheet = wb.addWorksheet('Checklist QC');
  
  sheet.getCell('A1').value = '✅ CHECKLIST CONTROL DE CALIDAD';
  sheet.getCell('A1').font = { size: 16, bold: true, color: { argb: 'FF0d9488' } };
  
  const checklistItems = [
    'Inspección visual del producto',
    'Verificación de medidas y dimensiones',
    'Control de materiales y acabados',
    'Prueba de funcionamiento (si aplica)',
    'Verificación de empaque',
    'Etiquetado correcto',
    'Certificaciones requeridas',
    'Cantidad correcta'
  ];
  
  checklistItems.forEach((item, i) => {
    const row = 3 + i;
    sheet.getCell(`A${row}`).value = '☐';
    sheet.getCell(`B${row}`).value = item;
  });
  
  sheet.getColumn('A').width = 5;
  sheet.getColumn('B').width = 50;
  
  await wb.xlsx.writeFile(path.join(PUBLIC_DIR, 'checklist-control-calidad.xlsx'));
  console.log('✅ Checklist QC created (PDF + Excel)');
}

// 4. DUE DILIGENCE PDF + EXCEL
async function generateDueDiligence() {
  console.log('🔍 Generating Due Diligence (PDF + Excel)...');
  
  // PDF
  const contentPath = path.join(CONTENT_DIR, 'file_100---1f3ccd42-3f2d-47df-bc93-f21f8b2887ad.md');
  const content = await fs.readFile(contentPath, 'utf-8');
  
  let html = content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
  
  html = `<p>${html}</p>`;
  
  const { baseHTML, styles } = await loadBaseTemplate();
  
  const finalHTML = baseHTML
    .replace('{{TITLE}}', 'Due Diligence Proveedores China')
    .replace('{{PRODUCT_NAME}}', 'Due Diligence')
    .replace('{{STYLES}}', styles)
    .replace('{{CONTENT}}', `
      <div class="intro">
        <h1>🔍 Due Diligence de Proveedores</h1>
        <p>Framework completo para evaluar y verificar proveedores chinos. Reduce riesgos y asegura relaciones comerciales confiables.</p>
      </div>
      ${html}
    `);
  
  await renderPDF(finalHTML, path.join(PUBLIC_DIR, 'due-diligence-proveedor.pdf'));
  
  // Excel scorecard
  const wb = new ExcelJS.Workbook();
  const sheet = wb.addWorksheet('Due Diligence');
  
  sheet.getCell('A1').value = '🔍 DUE DILIGENCE PROVEEDOR';
  sheet.getCell('A1').font = { size: 16, bold: true, color: { argb: 'FF0d9488' } };
  
  const categories = [
    { cat: 'Información Básica', items: ['Nombre empresa', 'Licencia comercial', 'Años operando'] },
    { cat: 'Capacidad Producción', items: ['Tamaño fábrica', 'Número empleados', 'Volumen producción'] },
    { cat: 'Calidad', items: ['Certificaciones ISO', 'Control calidad', 'Historial defectos'] }
  ];
  
  let row = 3;
  categories.forEach(({ cat, items }) => {
    sheet.getCell(`A${row}`).value = cat;
    sheet.getCell(`A${row}`).font = { bold: true };
    row++;
    
    items.forEach(item => {
      sheet.getCell(`A${row}`).value = item;
      sheet.getCell(`B${row}`).value = '';
      sheet.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
      row++;
    });
    
    row++;
  });
  
  sheet.getColumn('A').width = 40;
  sheet.getColumn('B').width = 50;
  
  await wb.xlsx.writeFile(path.join(PUBLIC_DIR, 'due-diligence-proveedor.xlsx'));
  console.log('✅ Due Diligence created (PDF + Excel)');
}

// MAIN
async function main() {
  await fs.mkdir(PUBLIC_DIR, { recursive: true });
  
  console.log('🚀 Generating all professional products...\n');
  
  try {
    await generateEmailTemplatesPDF();
    await generateCalculadoraExcel();
    await generateChecklistQC();
    await generateDueDiligence();
    
    console.log('\n✅ ALL PRODUCTS GENERATED SUCCESSFULLY!');
    console.log(`\nOutput directory: ${PUBLIC_DIR}`);
    
    const files = await fs.readdir(PUBLIC_DIR);
    console.log('\nGenerated files:');
    files.forEach(f => console.log(`  - ${f}`));
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();
