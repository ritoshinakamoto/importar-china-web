#!/usr/bin/env node
/**
 * GENERA TODOS LOS PRODUCTOS RESTANTES CON CONTENIDO COMPLETO
 * Ejecuta en paralelo para máxima velocidad
 */

import ExcelJS from 'exceljs';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CALCULADORA EXCEL COMPLETA
async function generateCalculadoraExcel() {
  console.log('📊 Calculadora Excel...');
  
  const wb = new ExcelJS.Workbook();
  
  // HOJA 1: CALCULADORA PRINCIPAL
  const calc = wb.addWorksheet('Calculadora Principal');
  
  // Título
  calc.mergeCells('A1:E1');
  calc.getCell('A1').value = '📊 CALCULADORA DE COSTOS - IMPORTACIÓN CHINA';
  calc.getCell('A1').font = { size: 18, bold: true, color: { argb: 'FF0d9488' } };
  calc.getCell('A1').alignment = { horizontal: 'center' };
  
  // SECCIÓN A: INFORMACIÓN BÁSICA
  calc.getCell('A3').value = 'INFORMACIÓN BÁSICA';
  calc.getCell('A3').font = { bold: true, size: 14 };
  calc.getCell('A3').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  const basicInfo = [
    ['Producto:', '[Nombre del producto]'],
    ['País Origen:', 'China'],
    ['Puerto Origen:', 'Shanghai'],
    ['País Destino:', 'España'],
    ['Puerto Destino:', 'Valencia'],
    ['Moneda:', 'USD'],
    ['Tipo Cambio USD/EUR:', 0.92]
  ];
  
  basicInfo.forEach(([label, value], i) => {
    calc.getCell(`A${5+i}`).value = label;
    calc.getCell(`B${5+i}`).value = value;
    calc.getCell(`B${5+i}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  });
  
  // SECCIÓN B: DATOS PRODUCTO
  calc.getCell('A13').value = 'DATOS DEL PRODUCTO';
  calc.getCell('A13').font = { bold: true, size: 14 };
  calc.getCell('A13').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  calc.getCell('A15').value = 'Precio FOB Unitario (USD):';
  calc.getCell('B15').value = 0;
  calc.getCell('B15').numFmt = '$#,##0.00';
  calc.getCell('B15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A16').value = 'Cantidad Unidades:';
  calc.getCell('B16').value = 1000;
  calc.getCell('B16').numFmt = '#,##0';
  calc.getCell('B16').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A17').value = 'Peso por Unidad (kg):';
  calc.getCell('B17').value = 0;
  calc.getCell('B17').numFmt = '0.00';
  calc.getCell('B17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A18').value = 'Peso Total (kg):';
  calc.getCell('B18').value = { formula: '=B16*B17' };
  calc.getCell('B18').numFmt = '#,##0.00';
  
  calc.getCell('A19').value = 'Volumen por Unidad (CBM):';
  calc.getCell('B19').value = 0;
  calc.getCell('B19').numFmt = '0.0000';
  calc.getCell('B19').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A20').value = 'Volumen Total (CBM):';
  calc.getCell('B20').value = { formula: '=B16*B19' };
  calc.getCell('B20').numFmt = '0.00';
  
  calc.getCell('A21').value = 'Valor FOB Total:';
  calc.getCell('A21').font = { bold: true };
  calc.getCell('B21').value = { formula: '=B15*B16' };
  calc.getCell('B21').numFmt = '$#,##0.00';
  calc.getCell('B21').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
  
  // SECCIÓN C: COSTOS TRANSPORTE
  calc.getCell('A23').value = 'COSTOS DE TRANSPORTE';
  calc.getCell('A23').font = { bold: true, size: 14 };
  calc.getCell('A23').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  calc.getCell('A25').value = 'Método Transporte:';
  calc.getCell('B25').value = 'LCL';
  calc.getCell('B25').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A26').value = 'Tarifa LCL ($/CBM):';
  calc.getCell('B26').value = 120;
  calc.getCell('B26').numFmt = '$#,##0.00';
  calc.getCell('B26').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A27').value = 'Costo Freight:';
  calc.getCell('B27').value = { formula: '=B20*B26' };
  calc.getCell('B27').numFmt = '$#,##0.00';
  
  calc.getCell('A28').value = 'THC Origen:';
  calc.getCell('B28').value = 100;
  calc.getCell('B28').numFmt = '$#,##0.00';
  calc.getCell('B28').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A29').value = 'Documentación Exportación:';
  calc.getCell('B29').value = 100;
  calc.getCell('B29').numFmt = '$#,##0.00';
  calc.getCell('B29').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A30').value = 'THC Destino:';
  calc.getCell('B30').value = 250;
  calc.getCell('B30').numFmt = '$#,##0.00';
  calc.getCell('B30').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A31').value = 'Gestión Aduanas:';
  calc.getCell('B31').value = 350;
  calc.getCell('B31').numFmt = '$#,##0.00';
  calc.getCell('B31').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A32').value = 'Transporte Interno:';
  calc.getCell('B32').value = 150;
  calc.getCell('B32').numFmt = '$#,##0.00';
  calc.getCell('B32').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A33').value = 'TOTAL SHIPPING:';
  calc.getCell('A33').font = { bold: true };
  calc.getCell('B33').value = { formula: '=B27+B28+B29+B30+B31+B32' };
  calc.getCell('B33').numFmt = '$#,##0.00';
  calc.getCell('B33').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
  
  // SECCIÓN D: ADUANAS
  calc.getCell('A35').value = 'COSTOS ADUANALES';
  calc.getCell('A35').font = { bold: true, size: 14 };
  calc.getCell('A35').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  calc.getCell('A37').value = 'Valor CIF:';
  calc.getCell('B37').value = { formula: '=B21+B33' };
  calc.getCell('B37').numFmt = '$#,##0.00';
  
  calc.getCell('A38').value = 'Seguro (0.5%):';
  calc.getCell('B38').value = { formula: '=B21*0.005' };
  calc.getCell('B38').numFmt = '$#,##0.00';
  
  calc.getCell('A39').value = 'Código TARIC:';
  calc.getCell('B39').value = '0000.0000';
  calc.getCell('B39').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A40').value = 'Tasa Arancelaria (%):';
  calc.getCell('B40').value = 0;
  calc.getCell('B40').numFmt = '0.0%';
  calc.getCell('B40').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A41').value = 'Arancel:';
  calc.getCell('B41').value = { formula: '=(B37+B38)*B40' };
  calc.getCell('B41').numFmt = '$#,##0.00';
  
  calc.getCell('A42').value = 'Tasa IVA (%):';
  calc.getCell('B42').value = 0.21;
  calc.getCell('B42').numFmt = '0.0%';
  calc.getCell('B42').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A43').value = 'IVA:';
  calc.getCell('B43').value = { formula: '=(B37+B38+B41)*B42' };
  calc.getCell('B43').numFmt = '$#,##0.00';
  
  calc.getCell('A44').value = 'TOTAL IMPUESTOS:';
  calc.getCell('A44').font = { bold: true };
  calc.getCell('B44').value = { formula: '=B41+B43' };
  calc.getCell('B44').numFmt = '$#,##0.00';
  calc.getCell('B44').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
  
  // SECCIÓN E: OTROS COSTOS
  calc.getCell('A46').value = 'OTROS COSTOS';
  calc.getCell('A46').font = { bold: true, size: 14 };
  calc.getCell('A46').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  calc.getCell('A48').value = 'Certificaciones:';
  calc.getCell('B48').value = 0;
  calc.getCell('B48').numFmt = '$#,##0.00';
  calc.getCell('B48').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A49').value = 'Inspección QC:';
  calc.getCell('B49').value = 0;
  calc.getCell('B49').numFmt = '$#,##0.00';
  calc.getCell('B49').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A50').value = 'Imprevistos (5%):';
  calc.getCell('B50').value = { formula: '=(B21+B33+B44)*0.05' };
  calc.getCell('B50').numFmt = '$#,##0.00';
  
  calc.getCell('A51').value = 'TOTAL OTROS:';
  calc.getCell('A51').font = { bold: true };
  calc.getCell('B51').value = { formula: '=B48+B49+B50' };
  calc.getCell('B51').numFmt = '$#,##0.00';
  calc.getCell('B51').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
  
  // RESUMEN FINAL
  calc.getCell('A53').value = '💰 RESUMEN FINAL';
  calc.getCell('A53').font = { bold: true, size: 16, color: { argb: 'FF0d9488' } };
  
  calc.getCell('A55').value = 'Valor FOB Total:';
  calc.getCell('B55').value = { formula: '=B21' };
  calc.getCell('B55').numFmt = '$#,##0.00';
  
  calc.getCell('A56').value = 'Shipping Total:';
  calc.getCell('B56').value = { formula: '=B33' };
  calc.getCell('B56').numFmt = '$#,##0.00';
  
  calc.getCell('A57').value = 'Impuestos Total:';
  calc.getCell('B57').value = { formula: '=B44' };
  calc.getCell('B57').numFmt = '$#,##0.00';
  
  calc.getCell('A58').value = 'Otros Costos:';
  calc.getCell('B58').value = { formula: '=B51' };
  calc.getCell('B58').numFmt = '$#,##0.00';
  
  calc.getCell('A60').value = 'COSTO TOTAL IMPORTACIÓN:';
  calc.getCell('A60').font = { bold: true, size: 14, color: { argb: 'FF0d9488' } };
  calc.getCell('B60').value = { formula: '=B55+B56+B57+B58' };
  calc.getCell('B60').numFmt = '$#,##0.00';
  calc.getCell('B60').font = { bold: true, size: 14 };
  calc.getCell('B60').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  calc.getCell('A61').value = 'Costo por Unidad (USD):';
  calc.getCell('B61').value = { formula: '=B60/B16' };
  calc.getCell('B61').numFmt = '$#,##0.00';
  
  calc.getCell('A62').value = 'Costo por Unidad (EUR):';
  calc.getCell('B62').value = { formula: '=B61*B11' };
  calc.getCell('B62').numFmt = '€#,##0.00';
  
  // ANÁLISIS MARGEN
  calc.getCell('A64').value = 'ANÁLISIS MARGEN';
  calc.getCell('A64').font = { bold: true, size: 14 };
  calc.getCell('A64').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef3c7' } };
  
  calc.getCell('A66').value = 'Precio Venta (EUR):';
  calc.getCell('B66').value = 0;
  calc.getCell('B66').numFmt = '€#,##0.00';
  calc.getCell('B66').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A67').value = 'Margen Bruto (EUR):';
  calc.getCell('B67').value = { formula: '=B66-B62' };
  calc.getCell('B67').numFmt = '€#,##0.00';
  
  calc.getCell('A68').value = '% Margen:';
  calc.getCell('B68').value = { formula: '=IF(B66>0,(B67/B66),0)' };
  calc.getCell('B68').numFmt = '0.0%';
  
  calc.getCell('A69').value = 'ROI:';
  calc.getCell('B69').value = { formula: '=IF(B62>0,(B67/B62),0)' };
  calc.getCell('B69').numFmt = '0.0%';
  
  calc.getColumn('A').width = 30;
  calc.getColumn('B').width = 20;
  
  // HOJA 2: BASE TARIC
  const taric = wb.addWorksheet('Base TARIC Común');
  taric.getCell('A1').value = 'BASE DE CÓDIGOS TARIC COMUNES';
  taric.getCell('A1').font = { size: 16, bold: true };
  
  const taricData = [
    ['CATEGORÍA', 'CÓDIGO TARIC', 'ARANCEL UE', 'EJEMPLO'],
    ['Electrónica Consumer', '8517.6200', '0%', 'Smartphones, tablets'],
    ['Textiles - Algodón', '6203.4200', '12%', 'Pantalones'],
    ['Juguetes Plástico', '9503.0030', '4.7%', 'Juguetes educativos'],
    ['Muebles Madera', '9403.6090', '0%', 'Mesas, sillas'],
    ['Calzado Deportivo', '6402.9100', '16.9%', 'Zapatillas'],
    ['Accesorios Móvil', '8517.7000', '0%', 'Fundas, cables'],
    ['Iluminación LED', '9405.4090', '3.7%', 'Bombillas, lámparas']
  ];
  
  taricData.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellRef = taric.getCell(i + 3, j + 1);
      cellRef.value = cell;
      if (i === 0) {
        cellRef.font = { bold: true };
        cellRef.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
      }
    });
  });
  
  taric.columns.forEach(col => col.width = 25);
  
  // HOJA 3: GUÍA DE USO
  const guia = wb.addWorksheet('Guía de Uso');
  guia.getCell('A1').value = 'GUÍA DE USO - CALCULADORA DE COSTOS';
  guia.getCell('A1').font = { size: 16, bold: true };
  
  const instructions = [
    '',
    'PASO 1: Información Básica',
    'Rellena los datos de tu producto y puertos de origen/destino',
    '',
    'PASO 2: Datos del Producto',
    'Ingresa precio FOB, cantidad, peso y volumen',
    '- Precio FOB: lo que te cotiza el proveedor (puerto China)',
    '- CBM = (Largo × Ancho × Alto en cm) / 1,000,000',
    '',
    'PASO 3: Método de Transporte',
    '- LCL: para volúmenes <15 CBM',
    '- FCL 20\': contenedor completo (~28 CBM)',
    '- FCL 40\': contenedor completo (~58 CBM)',
    '',
    'PASO 4: Aranceles',
    'Busca tu código TARIC en: https://ec.europa.eu/taxation_customs/dds2/taric',
    'España IVA: 21% | México: 16% | Argentina: 21%',
    '',
    'PASO 5: Análisis Margen',
    'Ingresa tu precio de venta estimado para ver:',
    '- Margen bruto en euros',
    '- % de margen sobre venta',
    '- ROI (retorno sobre inversión)',
    '',
    'IMPORTANTE:',
    '- Celdas AMARILLAS = input (rellenas tú)',
    '- Celdas AZULES = cálculos automáticos',
    '- Celdas VERDES = resultados finales',
    '',
    'Mínimo margen recomendado: 40-50%',
    'Óptimo: 60-100%',
    '',
    '¿Dudas? soporte@importardechina.com'
  ];
  
  instructions.forEach((text, i) => {
    guia.getCell(`A${i + 3}`).value = text;
    if (text.startsWith('PASO') || text === 'IMPORTANTE:') {
      guia.getCell(`A${i + 3}`).font = { bold: true, color: { argb: 'FF0d9488' } };
    }
  });
  
  guia.getColumn('A').width = 80;
  
  const xlsxPath = path.join(__dirname, '../public/products/calculadora-costos-importacion.xlsx');
  await wb.xlsx.writeFile(xlsxPath);
  
  const stats = await fs.stat(xlsxPath);
  console.log(`✅ Calculadora Excel: ${(stats.size / 1024).toFixed(1)}KB`);
}

// CHECKLIST QC PDF
async function generateChecklistQCPDF() {
  console.log('📋 Checklist QC PDF...');
  
  const mdPath = path.join(__dirname, '../content/file_99---ba39e718-98f1-43ed-bb6c-041b1545abf6.md');
  const mdContent = await fs.readFile(mdPath, 'utf-8');
  
  let html = mdContent
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$2</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/```([^`]+)```/gs, '<pre><code>$1</code></pre>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>');
  
  const CSS = `body{font-family:Georgia,serif;line-height:1.7;color:#2c3e50;max-width:900px;margin:0 auto;padding:40px;font-size:10pt}h1{color:#059669;font-size:24pt;margin-top:30px;page-break-before:always}h2{color:#047857;font-size:16pt;margin-top:20px}h3{color:#065f46;font-size:12pt}strong{color:#059669}li{margin:5px 0}`;
  
  const fullHTML = `<html><head><meta charset="UTF-8"><style>${CSS}</style></head><body><h1>✅ Checklist Control de Calidad</h1>${html}</body></html>`;
  
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, '../public/products/checklist-qc-importacion.pdf');
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
  await browser.close();
  
  const stats = await fs.stat(pdfPath);
  console.log(`✅ Checklist QC PDF: ${(stats.size / 1024).toFixed(1)}KB`);
}

// DUE DILIGENCE PDF
async function generateDueDiligencePDF() {
  console.log('🔍 Due Diligence PDF...');
  
  const mdPath = path.join(__dirname, '../content/file_100---1f3ccd42-3f2d-47df-bc93-f21f8b2887ad.md');
  const mdContent = await fs.readFile(mdPath, 'utf-8');
  
  let html = mdContent
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>');
  
  const CSS = `body{font-family:Georgia,serif;line-height:1.7;color:#2c3e50;max-width:900px;margin:0 auto;padding:40px;font-size:10pt}h1{color:#7c3aed;font-size:24pt;margin-top:30px}h2{color:#6d28d9;font-size:16pt}strong{color:#7c3aed}`;
  
  const fullHTML = `<html><head><meta charset="UTF-8"><style>${CSS}</style></head><body><h1>🔍 Due Diligence Proveedor</h1>${html}</body></html>`;
  
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, '../public/products/due-diligence-proveedor.pdf');
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
  await browser.close();
  
  const stats = await fs.stat(pdfPath);
  console.log(`✅ Due Diligence PDF: ${(stats.size / 1024).toFixed(1)}KB`);
}

// EJECUTAR TODO EN PARALELO
Promise.all([
  generateCalculadoraExcel(),
  generateChecklistQCPDF(),
  generateDueDiligencePDF()
]).then(() => {
  console.log('\n✅ TODOS LOS PRODUCTOS GENERADOS\n');
  fs.readdir(path.join(__dirname, '../public/products')).then(files => {
    console.log(`Total: ${files.length} archivos`);
  });
}).catch(console.error);
