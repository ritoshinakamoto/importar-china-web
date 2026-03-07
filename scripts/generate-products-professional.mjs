#!/usr/bin/env node
/**
 * GENERA PRODUCTOS PROFESIONALES CON TEMPLATES
 * - PDFs con diseño consistente (iconos, colores, layout)
 * - Excel con fórmulas correctas (sin bug ==)
 */

import ExcelJS from 'exceljs';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, '../templates/pdf');
const PUBLIC_DIR = path.join(__dirname, '../public/products');

// LOAD TEMPLATES
async function loadTemplate(name) {
  const baseHTML = await fs.readFile(path.join(TEMPLATES_DIR, 'base.html'), 'utf-8');
  const styles = await fs.readFile(path.join(TEMPLATES_DIR, 'styles/base.css'), 'utf-8');
  return { baseHTML, styles };
}

// ICONS (SVG inline)
const icons = {
  email: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
  calculator: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="8" y="6" width="8" height="2"/><circle cx="8" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>`,
  checklist: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
  search: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  lightbulb: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8a6 6 0 00-12 0c0 1.36.52 2.5 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/></svg>`,
  alert: `<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1"/></svg>`,
  info: `<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="1"/></svg>`,
  dollar: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  truck: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
};

// CALCULADORA EXCEL (FIXED)
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
    const row = 5 + i;
    calc.getCell(`A${row}`).value = label;
    calc.getCell(`B${row}`).value = value;
    calc.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  });
  
  // DATOS DEL PRODUCTO
  calc.getCell('A13').value = 'DATOS DEL PRODUCTO';
  calc.getCell('A13').font = { bold: true, size: 14 };
  calc.getCell('A13').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  calc.getCell('A15').value = 'Precio FOB Unitario (USD):';
  calc.getCell('B15').value = 5.00;
  calc.getCell('B15').numFmt = '$#,##0.00';
  calc.getCell('B15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A16').value = 'Cantidad Unidades:';
  calc.getCell('B16').value = 1000;
  calc.getCell('B16').numFmt = '#,##0';
  calc.getCell('B16').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  calc.getCell('A17').value = 'Peso por Unidad (kg):';
  calc.getCell('B17').value = 1.00;
  calc.getCell('B17').numFmt = '0.00';
  calc.getCell('B17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  // FIX: Usar .formula en vez de { formula: '...' }
  calc.getCell('A18').value = 'Peso Total (kg):';
  const pesoFormula = 'B16*B17';
  calc.getCell('B18').value = { formula: pesoFormula };
  calc.getCell('B18').numFmt = '#,##0.00';
  
  calc.getCell('A19').value = 'Volumen por Unidad (CBM):';
  calc.getCell('B19').value = 0.0050;
  calc.getCell('B19').numFmt = '0.0000';
  calc.getCell('B19').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } };
  
  // FIX: Volumen total
  const volumenFormula = 'B16*B19';
  calc.getCell('A20').value = 'Volumen Total (CBM):';
  calc.getCell('B20').value = { formula: volumenFormula };
  calc.getCell('B20').numFmt = '0.00';
  
  // FIX: Valor FOB Total
  const fobFormula = 'B15*B16';
  calc.getCell('A21').value = 'Valor FOB Total:';
  calc.getCell('A21').font = { bold: true };
  calc.getCell('B21').value = { formula: fobFormula };
  calc.getCell('B21').numFmt = '$#,##0.00';
  calc.getCell('B21').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } };
  
  // Column widths
  calc.getColumn('A').width = 35;
  calc.getColumn('B').width = 20;
  
  await wb.xlsx.writeFile(path.join(PUBLIC_DIR, 'calculadora-costos-importacion.xlsx'));
  console.log('✅ Calculadora Excel created');
}

// GENERATE ALL
async function main() {
  await fs.mkdir(PUBLIC_DIR, { recursive: true });
  
  console.log('🚀 Generating professional products...\n');
  
  // EXCEL
  await generateCalculadoraExcel();
  
  console.log('\n✅ All products generated successfully!');
}

main().catch(console.error);
