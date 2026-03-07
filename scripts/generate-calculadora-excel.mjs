import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateCalculadora() {
  console.log('📊 Generating Calculadora Excel Completa...');
  
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Calculadora');
  
  // Styling helpers
  const inputStyle = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFfef9c3' } }; // Yellow
  const calcStyle = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFdbeafe' } }; // Blue
  const resultStyle = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1fae5' } }; // Green
  const headerStyle = { bold: true, size: 12 };
  
  // ============ SECCIÓN A: INFORMACIÓN BÁSICA (A1-B10) ============
  sheet.getCell('A1').value = '📊 CALCULADORA DE COSTOS - IMPORTACIÓN DESDE CHINA';
  sheet.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FF0d9488' } };
  sheet.mergeCells('A1:B1');
  
  sheet.getCell('A2').value = 'SECCIÓN A: INFORMACIÓN BÁSICA';
  sheet.getCell('A2').font = headerStyle;
  sheet.getCell('A2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF14b8a6' } };
  sheet.mergeCells('A2:B2');
  
  sheet.getCell('A3').value = 'Producto';
  sheet.getCell('B2').value = 'Lámpara LED Escritorio';
  sheet.getCell('B2').fill = inputStyle;
  
  sheet.getCell('A3').value = 'País Origen';
  sheet.getCell('B3').value = 'China';
  sheet.getCell('B3').fill = inputStyle;
  
  sheet.getCell('A4').value = 'Puerto Origen';
  sheet.getCell('B4').value = 'Shanghai';
  sheet.getCell('B4').fill = inputStyle;
  
  sheet.getCell('A5').value = 'País Destino';
  sheet.getCell('B5').value = 'España';
  sheet.getCell('B5').fill = inputStyle;
  
  sheet.getCell('A6').value = 'Puerto Destino';
  sheet.getCell('B6').value = 'Valencia';
  sheet.getCell('B6').fill = inputStyle;
  
  sheet.getCell('A7').value = 'Moneda';
  sheet.getCell('B7').value = 'USD';
  sheet.getCell('B7').fill = inputStyle;
  
  sheet.getCell('A8').value = 'Tipo de Cambio USD/EUR';
  sheet.getCell('B8').value = 0.92;
  sheet.getCell('B8').numFmt = '0.00';
  sheet.getCell('B8').fill = inputStyle;
  
  // ============ SECCIÓN B: DATOS DEL PRODUCTO (A12-E20) ============
  sheet.getCell('A12').value = 'SECCIÓN B: DATOS DEL PRODUCTO';
  sheet.getCell('A12').font = headerStyle;
  sheet.getCell('A12').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF3b82f6' } };
  sheet.mergeCells('A12:B12');
  
  sheet.getCell('A13').value = 'Precio FOB Unitario';
  sheet.getCell('B13').value = 8.50;
  sheet.getCell('B13').numFmt = '$#,##0.00';
  sheet.getCell('B13').fill = inputStyle;
  
  sheet.getCell('A14').value = 'Cantidad Unidades';
  sheet.getCell('B14').value = 1000;
  sheet.getCell('B14').numFmt = '#,##0';
  sheet.getCell('B14').fill = inputStyle;
  
  sheet.getCell('A15').value = 'Peso por Unidad (kg)';
  sheet.getCell('B15').value = 0.8;
  sheet.getCell('B15').numFmt = '0.00';
  sheet.getCell('B15').fill = inputStyle;
  
  sheet.getCell('A16').value = 'Peso Total (kg)';
  sheet.getCell('B16').value = { formula: 'B14*B15' };
  sheet.getCell('B16').numFmt = '#,##0.00';
  sheet.getCell('B16').fill = calcStyle;
  
  sheet.getCell('A17').value = 'Volumen por Unidad (CBM)';
  sheet.getCell('B17').value = 0.015;
  sheet.getCell('B17').numFmt = '0.000';
  sheet.getCell('B17').fill = inputStyle;
  sheet.getCell('C17').value = 'CBM = (largo×ancho×alto cm)/1,000,000';
  sheet.getCell('C17').font = { italic: true, size: 9, color: { argb: 'FF6b7280' } };
  
  sheet.getCell('A18').value = 'Volumen Total (CBM)';
  sheet.getCell('B18').value = { formula: 'B14*B17' };
  sheet.getCell('B18').numFmt = '0.00';
  sheet.getCell('B18').fill = calcStyle;
  
  sheet.getCell('A19').value = 'Valor FOB Total';
  sheet.getCell('B19').value = { formula: 'B13*B14' };
  sheet.getCell('B19').numFmt = '$#,##0.00';
  sheet.getCell('B19').fill = calcStyle;
  sheet.getCell('B19').font = { bold: true };
  
  // ============ SECCIÓN C: COSTOS DE TRANSPORTE (A22-E36) ============
  sheet.getCell('A22').value = 'SECCIÓN C: COSTOS DE TRANSPORTE';
  sheet.getCell('A22').font = headerStyle;
  sheet.getCell('A22').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF10b981' } };
  sheet.mergeCells('A22:B22');
  
  sheet.getCell('A23').value = 'Método Transporte';
  sheet.getCell('B23').value = 'LCL';
  sheet.getCell('B23').fill = inputStyle;
  sheet.getCell('C23').value = 'LCL / FCL 20\' / FCL 40\' / Aéreo';
  sheet.getCell('C23').font = { italic: true, size: 9 };
  
  sheet.getCell('A24').value = 'Tarifa LCL por CBM';
  sheet.getCell('B24').value = 120;
  sheet.getCell('B24').numFmt = '$#,##0';
  sheet.getCell('B24').fill = inputStyle;
  sheet.getCell('C24').value = 'Típico: $80-150/m³';
  sheet.getCell('C24').font = { italic: true, size: 9 };
  
  sheet.getCell('A25').value = 'Costo Freight LCL';
  sheet.getCell('B25').value = { formula: 'IF(B23="LCL", B18*B24, 0)' };
  sheet.getCell('B25').numFmt = '$#,##0.00';
  sheet.getCell('B25').fill = calcStyle;
  
  sheet.getCell('A26').value = 'Tarifa Contenedor 20\'';
  sheet.getCell('B26').value = 2200;
  sheet.getCell('B26').numFmt = '$#,##0';
  sheet.getCell('B26').fill = inputStyle;
  
  sheet.getCell('A27').value = 'Tarifa Contenedor 40\'';
  sheet.getCell('B27').value = 3500;
  sheet.getCell('B27').numFmt = '$#,##0';
  sheet.getCell('B27').fill = inputStyle;
  
  sheet.getCell('A28').value = 'Costo Freight FCL';
  sheet.getCell('B28').value = { formula: 'IF(B23="FCL 20\'", B26, IF(B23="FCL 40\'", B27, 0))' };
  sheet.getCell('B28').numFmt = '$#,##0.00';
  sheet.getCell('B28').fill = calcStyle;
  
  sheet.getCell('A29').value = 'Tarifa Aéreo por kg';
  sheet.getCell('B29').value = 5;
  sheet.getCell('B29').numFmt = '$#,##0.00';
  sheet.getCell('B29').fill = inputStyle;
  
  sheet.getCell('A30').value = 'Costo Freight Aéreo';
  sheet.getCell('B30').value = { formula: 'IF(B23="Aéreo", B16*B29, 0)' };
  sheet.getCell('B30').numFmt = '$#,##0.00';
  sheet.getCell('B30').fill = calcStyle;
  
  sheet.getCell('A31').value = 'THC Origen';
  sheet.getCell('B31').value = 150;
  sheet.getCell('B31').numFmt = '$#,##0';
  sheet.getCell('B31').fill = inputStyle;
  
  sheet.getCell('A32').value = 'Documentación Exportación';
  sheet.getCell('B32').value = 100;
  sheet.getCell('B32').numFmt = '$#,##0';
  sheet.getCell('B32').fill = inputStyle;
  
  sheet.getCell('A33').value = 'THC Destino';
  sheet.getCell('B33').value = 300;
  sheet.getCell('B33').numFmt = '$#,##0';
  sheet.getCell('B33').fill = inputStyle;
  
  sheet.getCell('A34').value = 'Gestión Aduanas';
  sheet.getCell('B34').value = 400;
  sheet.getCell('B34').numFmt = '$#,##0';
  sheet.getCell('B34').fill = inputStyle;
  
  sheet.getCell('A35').value = 'Transporte Interno (Destino)';
  sheet.getCell('B35').value = 200;
  sheet.getCell('B35').numFmt = '$#,##0';
  sheet.getCell('B35').fill = inputStyle;
  
  sheet.getCell('A36').value = 'TOTAL SHIPPING';
  sheet.getCell('B36').value = { formula: 'B25+B28+B30+B31+B32+B33+B34+B35' };
  sheet.getCell('B36').numFmt = '$#,##0.00';
  sheet.getCell('B36').fill = resultStyle;
  sheet.getCell('B36').font = { bold: true };
  
  // ============ SECCIÓN D: COSTOS ADUANALES (A38-E48) ============
  sheet.getCell('A38').value = 'SECCIÓN D: COSTOS ADUANALES';
  sheet.getCell('A38').font = headerStyle;
  sheet.getCell('A38').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF8b5cf6' } };
  sheet.mergeCells('A38:B38');
  
  sheet.getCell('A39').value = 'Valor CIF';
  sheet.getCell('B39').value = { formula: 'B19+B36' };
  sheet.getCell('B39').numFmt = '$#,##0.00';
  sheet.getCell('B39').fill = calcStyle;
  sheet.getCell('C39').value = 'FOB + Freight';
  sheet.getCell('C39').font = { italic: true, size: 9 };
  
  sheet.getCell('A40').value = 'Seguro (0.5%)';
  sheet.getCell('B40').value = { formula: 'B19*0.005' };
  sheet.getCell('B40').numFmt = '$#,##0.00';
  sheet.getCell('B40').fill = calcStyle;
  
  sheet.getCell('A41').value = 'Valor CIF Ajustado';
  sheet.getCell('B41').value = { formula: 'B39+B40' };
  sheet.getCell('B41').numFmt = '$#,##0.00';
  sheet.getCell('B41').fill = calcStyle;
  sheet.getCell('B41').font = { bold: true };
  
  sheet.getCell('A42').value = 'Código Arancelario (TARIC)';
  sheet.getCell('B42').value = '9405.4090';
  sheet.getCell('B42').fill = inputStyle;
  
  sheet.getCell('A43').value = 'Tasa Arancelaria';
  sheet.getCell('B43').value = 0.037;
  sheet.getCell('B43').numFmt = '0.0%';
  sheet.getCell('B43').fill = inputStyle;
  sheet.getCell('C43').value = 'Buscar en ec.europa.eu/taxation_customs';
  sheet.getCell('C43').font = { italic: true, size: 9 };
  
  sheet.getCell('A44').value = 'Arancel (Duty)';
  sheet.getCell('B44').value = { formula: 'B41*B43' };
  sheet.getCell('B44').numFmt = '$#,##0.00';
  sheet.getCell('B44').fill = calcStyle;
  sheet.getCell('B44').font = { bold: true };
  
  sheet.getCell('A45').value = 'Tasa IVA';
  sheet.getCell('B45').value = 0.21;
  sheet.getCell('B45').numFmt = '0.0%';
  sheet.getCell('B45').fill = inputStyle;
  sheet.getCell('C45').value = 'España: 21%, México: 16%';
  sheet.getCell('C45').font = { italic: true, size: 9 };
  
  sheet.getCell('A46').value = 'Base IVA';
  sheet.getCell('B46').value = { formula: 'B41+B44' };
  sheet.getCell('B46').numFmt = '$#,##0.00';
  sheet.getCell('B46').fill = calcStyle;
  
  sheet.getCell('A47').value = 'IVA';
  sheet.getCell('B47').value = { formula: 'B46*B45' };
  sheet.getCell('B47').numFmt = '$#,##0.00';
  sheet.getCell('B47').fill = calcStyle;
  sheet.getCell('B47').font = { bold: true };
  
  sheet.getCell('A48').value = 'TOTAL IMPUESTOS';
  sheet.getCell('B48').value = { formula: 'B44+B47' };
  sheet.getCell('B48').numFmt = '$#,##0.00';
  sheet.getCell('B48').fill = resultStyle;
  sheet.getCell('B48').font = { bold: true };
  
  // ============ SECCIÓN E: OTROS COSTOS (A50-E56) ============
  sheet.getCell('A50').value = 'SECCIÓN E: OTROS COSTOS';
  sheet.getCell('A50').font = headerStyle;
  sheet.getCell('A50').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFf59e0b' } };
  sheet.mergeCells('A50:B50');
  
  sheet.getCell('A51').value = 'Certificaciones (CE, FDA)';
  sheet.getCell('B51').value = 800;
  sheet.getCell('B51').numFmt = '$#,##0';
  sheet.getCell('B51').fill = inputStyle;
  
  sheet.getCell('A52').value = 'Inspección QC (SGS, BV)';
  sheet.getCell('B52').value = 300;
  sheet.getCell('B52').numFmt = '$#,##0';
  sheet.getCell('B52').fill = inputStyle;
  
  sheet.getCell('A53').value = 'Fotografía de Producto';
  sheet.getCell('B53').value = 200;
  sheet.getCell('B53').numFmt = '$#,##0';
  sheet.getCell('B53').fill = inputStyle;
  
  sheet.getCell('A54').value = 'Packaging Customizado';
  sheet.getCell('B54').value = 0;
  sheet.getCell('B54').numFmt = '$#,##0';
  sheet.getCell('B54').fill = inputStyle;
  
  sheet.getCell('A55').value = 'Imprevistos (5%)';
  sheet.getCell('B55').value = { formula: '(B19+B36+B48)*0.05' };
  sheet.getCell('B55').numFmt = '$#,##0.00';
  sheet.getCell('B55').fill = calcStyle;
  
  sheet.getCell('A56').value = 'TOTAL OTROS COSTOS';
  sheet.getCell('B56').value = { formula: 'B51+B52+B53+B54+B55' };
  sheet.getCell('B56').numFmt = '$#,##0.00';
  sheet.getCell('B56').fill = resultStyle;
  sheet.getCell('B56').font = { bold: true };
  
  // ============ SECCIÓN F: RESUMEN FINAL (A58-E70) ============
  sheet.getCell('A58').value = 'SECCIÓN F: RESUMEN FINAL ⭐';
  sheet.getCell('A58').font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
  sheet.getCell('A58').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0d9488' } };
  sheet.mergeCells('A58:B58');
  
  sheet.getCell('A59').value = 'Valor FOB Total';
  sheet.getCell('B59').value = { formula: 'B19' };
  sheet.getCell('B59').numFmt = '$#,##0.00';
  
  sheet.getCell('A60').value = 'Shipping Total';
  sheet.getCell('B60').value = { formula: 'B36' };
  sheet.getCell('B60').numFmt = '$#,##0.00';
  
  sheet.getCell('A61').value = 'Impuestos Total';
  sheet.getCell('B61').value = { formula: 'B48' };
  sheet.getCell('B61').numFmt = '$#,##0.00';
  
  sheet.getCell('A62').value = 'Otros Costos';
  sheet.getCell('B62').value = { formula: 'B56' };
  sheet.getCell('B62').numFmt = '$#,##0.00';
  
  sheet.getCell('A63').value = '💰 COSTO TOTAL IMPORTACIÓN';
  sheet.getCell('B63').value = { formula: 'B59+B60+B61+B62' };
  sheet.getCell('B63').numFmt = '$#,##0.00';
  sheet.getCell('B63').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF10b981' } };
  sheet.getCell('B63').font = { bold: true, size: 14 };
  
  sheet.getCell('A64').value = 'COSTO POR UNIDAD';
  sheet.getCell('B64').value = { formula: 'B63/B14' };
  sheet.getCell('B64').numFmt = '$#,##0.00';
  sheet.getCell('B64').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF10b981' } };
  sheet.getCell('B64').font = { bold: true, size: 14 };
  
  sheet.getCell('A65').value = 'Costo por Unidad (EUR)';
  sheet.getCell('B65').value = { formula: 'B64*B8' };
  sheet.getCell('B65').numFmt = '€#,##0.00';
  sheet.getCell('B65').fill = calcStyle;
  
  sheet.getCell('A67').value = '━━━ ANÁLISIS MARGEN ━━━';
  sheet.getCell('A67').font = { bold: true, size: 12 };
  sheet.mergeCells('A67:B67');
  
  sheet.getCell('A68').value = 'Precio Venta (tu input)';
  sheet.getCell('B68').value = 39.90;
  sheet.getCell('B68').numFmt = '€#,##0.00';
  sheet.getCell('B68').fill = inputStyle;
  
  sheet.getCell('A69').value = 'Margen Bruto';
  sheet.getCell('B69').value = { formula: 'B68-B65' };
  sheet.getCell('B69').numFmt = '€#,##0.00';
  sheet.getCell('B69').fill = calcStyle;
  
  sheet.getCell('A70').value = '% Margen';
  sheet.getCell('B70').value = { formula: '(B69/B68)*100' };
  sheet.getCell('B70').numFmt = '0.0"%"';
  sheet.getCell('B70').fill = calcStyle;
  sheet.getCell('B70').font = { bold: true };
  
  sheet.getCell('A71').value = 'ROI';
  sheet.getCell('B71').value = { formula: '(B69/B65)*100' };
  sheet.getCell('B71').numFmt = '0.0"%"';
  sheet.getCell('B71').fill = calcStyle;
  sheet.getCell('B71').font = { bold: true };
  
  // Column widths
  sheet.getColumn('A').width = 35;
  sheet.getColumn('B').width = 20;
  sheet.getColumn('C').width = 40;
  
  // Hoja 2: Aranceles Comunes
  const aranceles = workbook.addWorksheet('Aranceles Comunes');
  aranceles.getCell('A1').value = 'HOJA 2: BASE ARANCELES COMUNES (Referencia)';
  aranceles.getCell('A1').font = { size: 14, bold: true };
  aranceles.mergeCells('A1:E1');
  
  const headerRow = aranceles.getRow(3);
  headerRow.values = ['Categoría Producto', 'Código TARIC', 'Arancel UE', 'Arancel MX', 'Ejemplo'];
  headerRow.font = { bold: true };
  headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFd1d5db' } };
  
  const arancelesData = [
    ['Electrónica Consumer', '8517.6200', '0%', '0-5%', 'Smartphones, tablets'],
    ['Textiles - Algodón', '6203.4200', '12%', '10%', 'Pantalones'],
    ['Juguetes Plástico', '9503.0030', '4.7%', '0-15%', 'Juguetes educativos'],
    ['Muebles Madera', '9403.6090', '0%', '10-15%', 'Mesas, sillas'],
    ['Calzado Deportivo', '6402.9100', '16.9%', '25%', 'Zapatillas'],
    ['Accesorios Móvil', '8517.7000', '0%', '0%', 'Fundas, cables'],
    ['Iluminación LED', '9405.4090', '3.7%', '5-10%', 'Bombillas, lámparas'],
    ['Herramientas Mano', '8205.5900', '2.7%', '5%', 'Destornilladores'],
    ['Productos Hogar', '3924.1000', '6.5%', '10-15%', 'Utensilios cocina'],
    ['Cosméticos', '3304.9900', '0%', '10%', 'Maquillaje'],
  ];
  
  arancelesData.forEach((row, idx) => {
    const excelRow = aranceles.getRow(4 + idx);
    excelRow.values = row;
  });
  
  aranceles.getColumn('A').width = 25;
  aranceles.getColumn('B').width = 15;
  aranceles.getColumn('C').width = 12;
  aranceles.getColumn('D').width = 12;
  aranceles.getColumn('E').width = 30;
  
  // Hoja 3: Guía de Uso
  const guia = workbook.addWorksheet('Guía de Uso');
  guia.getCell('A1').value = 'HOJA 3: GUÍA DE USO';
  guia.getCell('A1').font = { size: 14, bold: true };
  
  const instrucciones = [
    '',
    'PASO 1: Información Básica',
    '1. Rellena nombre producto (B2)',
    '2. Selecciona puertos origen/destino (B3-B6)',
    '3. Actualiza tipo cambio si usas EUR (B8) - ver: https://www.xe.com',
    '',
    'PASO 2: Datos Producto',
    '1. Ingresa precio FOB que te cotizó proveedor (B13)',
    '2. Cantidad unidades que vas a pedir (B14)',
    '3. Peso unitario en kg (B15) - pregunta al proveedor',
    '4. Volumen unitario CBM (B17) - calcula: (largo×ancho×alto cm)/1,000,000',
    '',
    'PASO 3: Método Transporte',
    '1. Selecciona método (B23): LCL (poco volumen), FCL (contenedor completo), o Aéreo',
    '2. Ingresa tarifas según método',
    '',
    'PASO 4: Costos Logística',
    'Ingresa costos (B31-B35): THC, documentación, gestión aduanas, transporte interno',
    '',
    'PASO 5: Aranceles e IVA',
    '1. Busca código TARIC: https://ec.europa.eu/taxation_customs/dds2/taric',
    '2. Ingresa código (B42) y % arancel (B43)',
    '3. Ingresa % IVA (B45) - España: 21%, México: 16%',
    '',
    'PASO 6: Otros Costos (Opcionales)',
    'Certificación CE, inspección QC, fotos, packaging custom',
    '',
    'PASO 7: Análisis Margen',
    '1. Ingresa precio venta estimado (B68)',
    '2. Calculadora muestra margen bruto, % margen, y ROI',
    '',
    'REGLAS DE ORO MARGEN:',
    '- Mínimo aceptable: 40-50%',
    '- Óptimo: 60-100%',
    '- Premium: >100%',
    '',
    'Si margen <40% → producto NO es viable (a menos que sea alto volumen)',
  ];
  
  instrucciones.forEach((text, idx) => {
    guia.getCell(`A${idx + 3}`).value = text;
    if (text.startsWith('PASO') || text.startsWith('REGLAS')) {
      guia.getCell(`A${idx + 3}`).font = { bold: true };
    }
  });
  
  guia.getColumn('A').width = 80;
  
  const filePath = path.join(__dirname, '../public/products/calculadora-costos-importacion.xlsx');
  await workbook.xlsx.writeFile(filePath);
  
  console.log(`✅ Excel completo generado: ${filePath}`);
  console.log('📊 Incluye: Calculadora Principal (A-F), Aranceles Comunes, Guía de Uso');
}

generateCalculadora().catch(console.error);
