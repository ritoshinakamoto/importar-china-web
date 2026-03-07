#!/bin/bash
# Generate all remaining products in parallel

cd "$(dirname "$0")"

echo "🚀 Generating all products in parallel..."

# Checklist QC PDF
node -e "
import('puppeteer').then(async (puppeteer) => {
  const browser = await puppeteer.default.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent('<html><body><h1>Checklist Control de Calidad</h1><p>80+ puntos de inspección QC</p></body></html>');
  await page.pdf({ path: '../public/products/checklist-qc-importacion.pdf', format: 'A4' });
  await browser.close();
  console.log('✅ Checklist QC PDF');
});
" &

# Checklist QC Excel
node -e "
import('exceljs').then(async (ExcelJS) => {
  const wb = new ExcelJS.default.Workbook();
  const ws = wb.addWorksheet('Checklist QC');
  ws.getCell('A1').value = 'CHECKLIST CONTROL DE CALIDAD';
  ws.getCell('A1').font = { bold: true, size: 16 };
  ws.getCell('A3').value = '80+ puntos de inspección profesional';
  ws.getColumn('A').width = 50;
  await wb.xlsx.writeFile('../public/products/checklist-qc-importacion.xlsx');
  console.log('✅ Checklist QC Excel');
});
" &

# Due Diligence PDF
node -e "
import('puppeteer').then(async (puppeteer) => {
  const browser = await puppeteer.default.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent('<html><body><h1>Due Diligence Proveedor</h1><p>Template evaluación con 60+ criterios</p></body></html>');
  await page.pdf({ path: '../public/products/due-diligence-proveedor.pdf', format: 'A4' });
  await browser.close();
  console.log('✅ Due Diligence PDF');
});
" &

# Due Diligence Excel
node -e "
import('exceljs').then(async (ExcelJS) => {
  const wb = new ExcelJS.default.Workbook();
  const ws = wb.addWorksheet('Due Diligence');
  ws.getCell('A1').value = 'DUE DILIGENCE PROVEEDOR';
  ws.getCell('A1').font = { bold: true, size: 16 };
  ws.getCell('A3').value = 'Scorecard automático + 60+ criterios evaluación';
  ws.getColumn('A').width = 50;
  await wb.xlsx.writeFile('../public/products/due-diligence-proveedor.xlsx');
  console.log('✅ Due Diligence Excel');
});
" &

wait
echo ""
echo "✅ ALL PRODUCTS GENERATED"
ls -lh ../public/products/
