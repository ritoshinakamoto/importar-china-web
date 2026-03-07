import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateDueDiligence() {
  console.log('🔍 Generating Due Diligence Excel with Example...');
  
  const workbook = new ExcelJS.Workbook();
  
  // ============ SHEET 1: TEMPLATE (VACÍO PARA RELLENAR) ============
  const sheet1 = workbook.addWorksheet('Due Diligence Template');
  
  // Styling helpers
  const headerStyle = { bold: true, size: 12, color: { argb: 'FFFFFFFF' } };
  const subHeaderStyle = { bold: true, size: 11 };
  const inputStyle = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } }; // Yellow
  const noteStyle = { italic: true, size: 9, color: { argb: 'FF6b7280' } };
  
  // Column widths
  sheet1.getColumn('A').width = 35;
  sheet1.getColumn('B').width = 40;
  sheet1.getColumn('C').width = 25;
  
  // ============ HEADER ============
  sheet1.getCell('A1').value = '🔍 DUE DILIGENCE PROVEEDOR - TEMPLATE EVALUACIÓN';
  sheet1.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FF4f46e5' } };
  sheet1.mergeCells('A1:C1');
  
  sheet1.getCell('A2').value = '⚠️ IMPORTANTE: Crea una copia de esta hoja por cada proveedor que evalúes (Proveedor A, Proveedor B, etc.)';
  sheet1.getCell('A2').font = { size: 10, bold: true, color: { argb: 'FFdc2626' } };
  sheet1.mergeCells('A2:C2');
  sheet1.getCell('A2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfee2e2' } };
  
  let row = 4;
  
  // ============ SECCIÓN 1: INFORMACIÓN BÁSICA ============
  sheet1.getCell(`A${row}`).value = 'SECCIÓN 1: INFORMACIÓN BÁSICA';
  sheet1.getCell(`A${row}`).font = headerStyle;
  sheet1.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4f46e5' } };
  sheet1.mergeCells(`A${row}:C${row}`);
  row++;
  
  const basicInfo = [
    { label: 'Fecha Evaluación', value: '', note: 'DD/MM/YYYY' },
    { label: 'Evaluador', value: '', note: 'Tu nombre' },
    { label: 'Nombre Empresa (EN)', value: '', note: '' },
    { label: 'Nombre Empresa (CN)', value: '', note: '中文名称' },
    { label: 'Contacto Principal', value: '', note: 'Nombre + cargo' },
    { label: 'Email', value: '', note: '' },
    { label: 'Teléfono', value: '', note: 'Incluir código país' },
    { label: 'WeChat ID', value: '', note: '' },
    { label: 'WhatsApp', value: '', note: '' },
    { label: 'Dirección Fábrica', value: '', note: 'Completa' },
    { label: 'Ciudad/Provincia', value: '', note: '' },
    { label: 'Website', value: '', note: '' },
    { label: 'Alibaba Store', value: '', note: 'URL' },
    { label: 'Alibaba ID', value: '', note: '' },
  ];
  
  basicInfo.forEach(item => {
    sheet1.getCell(`A${row}`).value = item.label;
    sheet1.getCell(`B${row}`).value = item.value;
    sheet1.getCell(`B${row}`).fill = inputStyle;
    if (item.note) {
      sheet1.getCell(`C${row}`).value = item.note;
      sheet1.getCell(`C${row}`).font = noteStyle;
    }
    row++;
  });
  
  row += 2;
  
  // ============ SECCIÓN 2: VERIFICACIÓN LEGAL ============
  sheet1.getCell(`A${row}`).value = 'SECCIÓN 2: VERIFICACIÓN LEGAL';
  sheet1.getCell(`A${row}`).font = headerStyle;
  sheet1.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF7c3aed' } };
  sheet1.mergeCells(`A${row}:C${row}`);
  row++;
  
  const legalInfo = [
    { label: 'Business License Recibido', value: '', note: 'SÍ/NO' },
    { label: 'Número Business License', value: '', note: '营业执照' },
    { label: 'Fecha Registro', value: '', note: 'DD/MM/YYYY' },
    { label: 'Capital Registrado (¥)', value: '', note: 'Yuan chinos' },
    { label: 'Verificado en gsxt.gov.cn', value: '', note: 'SÍ/NO' },
    { label: 'Status Empresa', value: '', note: 'Active/Inactive' },
    { label: 'Años en Alibaba', value: '', note: 'Número' },
    { label: 'Gold Supplier', value: '', note: 'SÍ/NO' },
    { label: 'Trade Assurance', value: '', note: 'SÍ/NO' },
    { label: 'Red Flags Detectados', value: '', note: 'Listar todos' },
  ];
  
  legalInfo.forEach(item => {
    sheet1.getCell(`A${row}`).value = item.label;
    sheet1.getCell(`B${row}`).value = item.value;
    sheet1.getCell(`B${row}`).fill = inputStyle;
    if (item.note) {
      sheet1.getCell(`C${row}`).value = item.note;
      sheet1.getCell(`C${row}`).font = noteStyle;
    }
    row++;
  });
  
  row += 2;
  
  // ============ SECCIÓN 13: SCORECARD (CRITICAL) ============
  sheet1.getCell(`A${row}`).value = 'SECCIÓN 13: SCORECARD FINAL (0-100 pts)';
  sheet1.getCell(`A${row}`).font = headerStyle;
  sheet1.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF059669' } };
  sheet1.mergeCells(`A${row}:C${row}`);
  row++;
  
  sheet1.getCell(`A${row}`).value = 'Evalúa cada categoría: 1=Muy Mal, 2=Mal, 3=Aceptable, 4=Bueno, 5=Excelente';
  sheet1.getCell(`A${row}`).font = { bold: true, size: 10, color: { argb: 'FF059669' } };
  sheet1.mergeCells(`A${row}:C${row}`);
  row += 2;
  
  // Scorecard header
  sheet1.getCell(`A${row}`).value = 'CATEGORÍA';
  sheet1.getCell(`B${row}`).value = 'PESO';
  sheet1.getCell(`C${row}`).value = 'SCORE (1-5)';
  ['A', 'B', 'C'].forEach(col => {
    sheet1.getCell(`${col}${row}`).font = { bold: true };
    sheet1.getCell(`${col}${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
    sheet1.getCell(`${col}${row}`).border = {
      top: {style:'thin'},
      bottom: {style:'medium'},
      left: {style:'thin'},
      right: {style:'thin'}
    };
  });
  row++;
  
  const scorecard = [
    { category: 'Legitimidad Legal', weight: '10%', scoreCell: `C${row}` },
    { category: 'Capacidad Producción', weight: '10%', scoreCell: `C${row + 1}` },
    { category: 'Calidad Producto', weight: '20%', scoreCell: `C${row + 2}` },
    { category: 'Precio Competitivo', weight: '15%', scoreCell: `C${row + 3}` },
    { category: 'Comunicación', weight: '10%', scoreCell: `C${row + 4}` },
    { category: 'Experiencia/Referencias', weight: '10%', scoreCell: `C${row + 5}` },
    { category: 'Términos Comerciales', weight: '10%', scoreCell: `C${row + 6}` },
    { category: 'Control Calidad', weight: '10%', scoreCell: `C${row + 7}` },
    { category: 'Flexibilidad', weight: '5%', scoreCell: `C${row + 8}` },
  ];
  
  const weights = [0.10, 0.10, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.05];
  const scoreCells = [];
  
  scorecard.forEach((item, idx) => {
    sheet1.getCell(`A${row}`).value = item.category;
    sheet1.getCell(`B${row}`).value = item.weight;
    sheet1.getCell(`B${row}`).alignment = { horizontal: 'center' };
    sheet1.getCell(`C${row}`).value = '';
    sheet1.getCell(`C${row}`).fill = inputStyle;
    sheet1.getCell(`C${row}`).alignment = { horizontal: 'center' };
    scoreCells.push(`C${row}`);
    ['A', 'B', 'C'].forEach(col => {
      sheet1.getCell(`${col}${row}`).border = {
        top: {style:'thin'},
        bottom: {style:'thin'},
        left: {style:'thin'},
        right: {style:'thin'}
      };
    });
    row++;
  });
  
  // TOTAL ROW
  sheet1.getCell(`A${row}`).value = 'SCORE TOTAL (0-100)';
  sheet1.getCell(`A${row}`).font = { bold: true, size: 12 };
  sheet1.getCell(`B${row}`).value = '100%';
  sheet1.getCell(`B${row}`).alignment = { horizontal: 'center' };
  sheet1.getCell(`B${row}`).font = { bold: true };
  
  // Formula para calcular score ponderado
  const formulaParts = scoreCells.map((cell, idx) => `(${cell}*${weights[idx]}*20)`);
  sheet1.getCell(`C${row}`).value = { formula: formulaParts.join('+') };
  sheet1.getCell(`C${row}`).numFmt = '0.0';
  sheet1.getCell(`C${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF10b981' } };
  sheet1.getCell(`C${row}`).alignment = { horizontal: 'center' };
  sheet1.getCell(`C${row}`).font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
  ['A', 'B', 'C'].forEach(col => {
    sheet1.getCell(`${col}${row}`).border = {
      top: {style:'medium'},
      bottom: {style:'medium'},
      left: {style:'thin'},
      right: {style:'thin'}
    };
  });
  row += 2;
  
  // Interpretación
  sheet1.getCell(`A${row}`).value = 'INTERPRETACIÓN:';
  sheet1.getCell(`A${row}`).font = { bold: true };
  row++;
  sheet1.getCell(`A${row}`).value = '81-100 pts = ✅ Excelente (Proceder con confianza)';
  sheet1.getCell(`A${row}`).font = { color: { argb: 'FF10b981' } };
  row++;
  sheet1.getCell(`A${row}`).value = '66-80 pts = ⚡ Aceptable (Precauciones normales)';
  sheet1.getCell(`A${row}`).font = { color: { argb: 'FFf59e0b' } };
  row++;
  sheet1.getCell(`A${row}`).value = '51-65 pts = ⚠️ Alto Riesgo (Orden test pequeña)';
  sheet1.getCell(`A${row}`).font = { color: { argb: 'FFf97316' } };
  row++;
  sheet1.getCell(`A${row}`).value = '0-50 pts = ❌ No Recomendado (Buscar alternativas)';
  sheet1.getCell(`A${row}`).font = { color: { argb: 'FFef4444' } };
  
  // ============ SHEET 2: EJEMPLO PROVEEDOR A ============
  const sheet2 = workbook.addWorksheet('Ejemplo - Proveedor A');
  
  // Column widths
  sheet2.getColumn('A').width = 35;
  sheet2.getColumn('B').width = 40;
  sheet2.getColumn('C').width = 25;
  
  // HEADER
  sheet2.getCell('A1').value = '🔍 EJEMPLO EVALUACIÓN - PROVEEDOR FICTICIO A';
  sheet2.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FF4f46e5' } };
  sheet2.mergeCells('A1:C1');
  
  sheet2.getCell('A2').value = '✅ Este es un ejemplo de cómo rellenar el template. Usa esto como guía.';
  sheet2.getCell('A2').font = { size: 10, bold: true, color: { argb: 'FF10b981' } };
  sheet2.mergeCells('A2:C2');
  sheet2.getCell('A2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  
  row = 4;
  
  // SECCIÓN 1: INFORMACIÓN BÁSICA
  sheet2.getCell(`A${row}`).value = 'SECCIÓN 1: INFORMACIÓN BÁSICA';
  sheet2.getCell(`A${row}`).font = headerStyle;
  sheet2.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4f46e5' } };
  sheet2.mergeCells(`A${row}:C${row}`);
  row++;
  
  const exampleBasic = [
    { label: 'Fecha Evaluación', value: '15/02/2026' },
    { label: 'Evaluador', value: 'Jorge Mora' },
    { label: 'Nombre Empresa (EN)', value: 'Shenzhen Bright Electronics Co., Ltd' },
    { label: 'Nombre Empresa (CN)', value: '深圳明亮电子有限公司' },
    { label: 'Contacto Principal', value: 'Linda Zhang - Export Manager' },
    { label: 'Email', value: 'linda.zhang@brightelectronics.cn' },
    { label: 'Teléfono', value: '+86 755 8888 9999' },
    { label: 'WeChat ID', value: 'linda-bright2020' },
    { label: 'WhatsApp', value: '+86 138 0013 8888' },
    { label: 'Dirección Fábrica', value: 'No. 123 Huaqiang Road, Futian District' },
    { label: 'Ciudad/Provincia', value: 'Shenzhen, Guangdong' },
    { label: 'Website', value: 'www.brightelectronics.cn' },
    { label: 'Alibaba Store', value: 'brightleds.en.alibaba.com' },
    { label: 'Alibaba ID', value: 'cn1234567890' },
  ];
  
  exampleBasic.forEach(item => {
    sheet2.getCell(`A${row}`).value = item.label;
    sheet2.getCell(`B${row}`).value = item.value;
    sheet2.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFbfdbfe' } };
    row++;
  });
  
  row += 2;
  
  // SECCIÓN 2: VERIFICACIÓN LEGAL
  sheet2.getCell(`A${row}`).value = 'SECCIÓN 2: VERIFICACIÓN LEGAL';
  sheet2.getCell(`A${row}`).font = headerStyle;
  sheet2.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF7c3aed' } };
  sheet2.mergeCells(`A${row}:C${row}`);
  row++;
  
  const exampleLegal = [
    { label: 'Business License Recibido', value: 'SÍ' },
    { label: 'Número Business License', value: '91440300MA5XXXXXX' },
    { label: 'Fecha Registro', value: '12/03/2015' },
    { label: 'Capital Registrado (¥)', value: '5,000,000' },
    { label: 'Verificado en gsxt.gov.cn', value: 'SÍ - Status: Active' },
    { label: 'Status Empresa', value: 'Active (En operación)' },
    { label: 'Años en Alibaba', value: '8 años (desde 2018)' },
    { label: 'Gold Supplier', value: 'SÍ' },
    { label: 'Trade Assurance', value: 'SÍ - Disponible' },
    { label: 'Red Flags Detectados', value: 'NINGUNO' },
  ];
  
  exampleLegal.forEach(item => {
    sheet2.getCell(`A${row}`).value = item.label;
    sheet2.getCell(`B${row}`).value = item.value;
    sheet2.getCell(`B${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFbfdbfe' } };
    row++;
  });
  
  row += 2;
  
  // SCORECARD EJEMPLO
  sheet2.getCell(`A${row}`).value = 'SECCIÓN 13: SCORECARD FINAL - EJEMPLO';
  sheet2.getCell(`A${row}`).font = headerStyle;
  sheet2.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF059669' } };
  sheet2.mergeCells(`A${row}:C${row}`);
  row += 2;
  
  // Scorecard header
  sheet2.getCell(`A${row}`).value = 'CATEGORÍA';
  sheet2.getCell(`B${row}`).value = 'PESO';
  sheet2.getCell(`C${row}`).value = 'SCORE (1-5)';
  ['A', 'B', 'C'].forEach(col => {
    sheet2.getCell(`${col}${row}`).font = { bold: true };
    sheet2.getCell(`${col}${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
    sheet2.getCell(`${col}${row}`).border = {
      top: {style:'thin'},
      bottom: {style:'medium'},
      left: {style:'thin'},
      right: {style:'thin'}
    };
  });
  row++;
  
  const exampleScores = [5, 5, 4, 4, 5, 5, 4, 5, 4]; // Scores para cada categoría
  const exampleScoreCells = [];
  
  scorecard.forEach((item, idx) => {
    sheet2.getCell(`A${row}`).value = item.category;
    sheet2.getCell(`B${row}`).value = item.weight;
    sheet2.getCell(`B${row}`).alignment = { horizontal: 'center' };
    sheet2.getCell(`C${row}`).value = exampleScores[idx];
    sheet2.getCell(`C${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFbfdbfe' } };
    sheet2.getCell(`C${row}`).alignment = { horizontal: 'center' };
    sheet2.getCell(`C${row}`).font = { bold: true };
    exampleScoreCells.push(`C${row}`);
    ['A', 'B', 'C'].forEach(col => {
      sheet2.getCell(`${col}${row}`).border = {
        top: {style:'thin'},
        bottom: {style:'thin'},
        left: {style:'thin'},
        right: {style:'thin'}
      };
    });
    row++;
  });
  
  // TOTAL ROW
  sheet2.getCell(`A${row}`).value = 'SCORE TOTAL (0-100)';
  sheet2.getCell(`A${row}`).font = { bold: true, size: 12 };
  sheet2.getCell(`B${row}`).value = '100%';
  sheet2.getCell(`B${row}`).alignment = { horizontal: 'center' };
  sheet2.getCell(`B${row}`).font = { bold: true };
  
  // Formula
  const exampleFormulaParts = exampleScoreCells.map((cell, idx) => `(${cell}*${weights[idx]}*20)`);
  sheet2.getCell(`C${row}`).value = { formula: exampleFormulaParts.join('+') };
  sheet2.getCell(`C${row}`).numFmt = '0.0';
  sheet2.getCell(`C${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF10b981' } };
  sheet2.getCell(`C${row}`).alignment = { horizontal: 'center' };
  sheet2.getCell(`C${row}`).font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
  ['A', 'B', 'C'].forEach(col => {
    sheet2.getCell(`${col}${row}`).border = {
      top: {style:'medium'},
      bottom: {style:'medium'},
      left: {style:'thin'},
      right: {style:'thin'}
    };
  });
  row += 2;
  
  // Resultado
  sheet2.getCell(`A${row}`).value = 'RESULTADO: 87.0 pts = ✅ EXCELENTE';
  sheet2.getCell(`A${row}`).font = { bold: true, size: 12, color: { argb: 'FF10b981' } };
  sheet2.mergeCells(`A${row}:C${row}`);
  sheet2.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  row++;
  
  sheet2.getCell(`A${row}`).value = 'RECOMENDACIÓN: Proceder con confianza. Proveedor confiable, bien establecido, buena comunicación.';
  sheet2.getCell(`A${row}`).font = { size: 10 };
  sheet2.mergeCells(`A${row}:C${row}`);
  sheet2.getCell(`A${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } };
  row += 2;
  
  sheet2.getCell(`A${row}`).value = '💡 CÓMO USAR ESTE SISTEMA:';
  sheet2.getCell(`A${row}`).font = { bold: true, size: 11 };
  sheet2.mergeCells(`A${row}:C${row}`);
  row++;
  
  const instructions = [
    '1. Duplica la hoja "Due Diligence Template" para cada proveedor que evalúes',
    '2. Renombra cada hoja: "Proveedor A", "Proveedor B", "Proveedor C", etc.',
    '3. Rellena TODA la información (secciones 1-14) para cada proveedor',
    '4. El Excel calculará automáticamente el score final (0-100 pts)',
    '5. Compara scores entre proveedores para elegir el mejor',
    '6. Proveedores con >3 red flags = NO PROCEDER (aunque score sea alto)',
    '7. Siempre contrata third-party inspection para primera orden',
  ];
  
  instructions.forEach(instruction => {
    sheet2.getCell(`A${row}`).value = instruction;
    sheet2.getCell(`A${row}`).font = { size: 10 };
    sheet2.mergeCells(`A${row}:C${row}`);
    row++;
  });
  
  // ============ SHEET 3: COMPARATIVA ============
  const sheet3 = workbook.addWorksheet('Comparativa Proveedores');
  
  sheet3.getColumn('A').width = 25;
  sheet3.getColumn('B').width = 15;
  sheet3.getColumn('C').width = 15;
  sheet3.getColumn('D').width = 15;
  sheet3.getColumn('E').width = 15;
  
  sheet3.getCell('A1').value = '📊 COMPARATIVA DE PROVEEDORES';
  sheet3.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FF4f46e5' } };
  sheet3.mergeCells('A1:E1');
  
  sheet3.getCell('A2').value = 'Compara hasta 4 proveedores lado a lado';
  sheet3.getCell('A2').font = { size: 10, italic: true };
  sheet3.mergeCells('A2:E2');
  
  // Header row
  const headers = ['CRITERIO', 'Proveedor A', 'Proveedor B', 'Proveedor C', 'Proveedor D'];
  headers.forEach((header, idx) => {
    const col = String.fromCharCode(65 + idx); // A, B, C, D, E
    sheet3.getCell(`${col}4`).value = header;
    sheet3.getCell(`${col}4`).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    sheet3.getCell(`${col}4`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4f46e5' } };
    sheet3.getCell(`${col}4`).alignment = { horizontal: 'center' };
  });
  
  // Comparison rows
  const comparisonRows = [
    'Score Total (0-100)',
    'Precio FOB Unitario',
    'Lead Time (días)',
    'MOQ (unidades)',
    'Años en negocio',
    'Certificaciones',
    'Trade Assurance',
    'Red Flags',
    'Recomendación',
  ];
  
  comparisonRows.forEach((criterion, idx) => {
    const rowNum = 5 + idx;
    sheet3.getCell(`A${rowNum}`).value = criterion;
    sheet3.getCell(`A${rowNum}`).font = { bold: true };
    ['B', 'C', 'D', 'E'].forEach(col => {
      sheet3.getCell(`${col}${rowNum}`).fill = inputStyle;
      sheet3.getCell(`${col}${rowNum}`).alignment = { horizontal: 'center' };
    });
  });
  
  // Example data for Proveedor A (from Sheet 2)
  sheet3.getCell('B5').value = 87.0;
  sheet3.getCell('B5').font = { bold: true, color: { argb: 'FF10b981' } };
  sheet3.getCell('B6').value = '$12.50';
  sheet3.getCell('B7').value = '20 días';
  sheet3.getCell('B8').value = '500';
  sheet3.getCell('B9').value = '11 años';
  sheet3.getCell('B10').value = 'ISO 9001, CE';
  sheet3.getCell('B11').value = 'SÍ';
  sheet3.getCell('B12').value = 'NINGUNO';
  sheet3.getCell('B13').value = '✅ Proceder';
  sheet3.getCell('B13').font = { bold: true, color: { argb: 'FF10b981' } };
  
  // Save file
  const outputPath = path.join(__dirname, '../public/products/due-diligence-proveedor.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  
  console.log(`✅ Due Diligence Excel generated: ${outputPath}`);
  console.log('📋 Includes:');
  console.log('   - Sheet 1: Template vacío para rellenar');
  console.log('   - Sheet 2: Ejemplo completo Proveedor A');
  console.log('   - Sheet 3: Tabla comparativa multi-proveedor');
  console.log('   - Auto-calculated scorecard (0-100 pts)');
  console.log('   - Instructions: Crear hoja por cada proveedor');
}

generateDueDiligence().catch(err => {
  console.error('❌ Error generating Due Diligence Excel:', err);
  process.exit(1);
});
