#!/usr/bin/env node
/**
 * GENERADOR COMPLETO DE PRODUCTOS
 * Convierte los 4 archivos MD a PDFs/Excel profesionales
 * 
 * Ejecutar: node scripts/generate-all-products.mjs
 */

import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

console.log('🚀 Iniciando generación de productos...\n');

const PRODUCTS = [
  { id: 1, name: 'Email Templates PDF', script: './generate-email-templates-pdf.mjs' },
  { id: 2, name: 'Calculadora Excel', script: './generate-calculadora-excel.mjs' },
  { id: 3, name: 'Checklist QC PDF', script: './generate-checklist-qc-pdf.mjs' },
  { id: 4, name: 'Checklist QC Excel', script: './generate-checklist-qc-excel.mjs' },
  { id: 5, name: 'Due Diligence Excel', script: './generate-due-diligence-excel.mjs' },
  { id: 6, name: 'Due Diligence PDF', script: './generate-due-diligence-pdf.mjs' },
];

async function runScript(script, name) {
  return new Promise((resolve, reject) => {
    console.log(`\n📦 [${new Date().toLocaleTimeString()}] Generando: ${name}...`);
    
    const process = spawn('node', [script], {
      cwd: path.dirname(new URL(import.meta.url).pathname),
      stdio: 'inherit'
    });
    
    process.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ [${new Date().toLocaleTimeString()}] ${name} completado`);
        resolve();
      } else {
        console.error(`❌ [${new Date().toLocaleTimeString()}] ${name} falló con código ${code}`);
        reject(new Error(`${name} failed`));
      }
    });
  });
}

async function main() {
  const startTime = Date.now();
  
  try {
    // Verificar que existen los archivos fuente
    const contentDir = path.join(process.cwd(), 'content');
    const files = await fs.readdir(contentDir);
    console.log(`\n✅ Archivos fuente encontrados: ${files.length}`);
    
    // Crear directorio productos si no existe
    const productsDir = path.join(process.cwd(), 'public', 'products');
    await fs.mkdir(productsDir, { recursive: true });
    console.log(`✅ Directorio productos: ${productsDir}\n`);
    
    // Generar productos uno por uno
    for (const product of PRODUCTS) {
      try {
        await runScript(product.script, product.name);
      } catch (error) {
        console.error(`⚠️  Continuando con siguiente producto...`);
      }
    }
    
    // Verificar resultados
    const generatedFiles = await fs.readdir(productsDir);
    console.log(`\n\n📊 RESUMEN FINAL:`);
    console.log(`   Productos generados: ${generatedFiles.length}`);
    console.log(`   Tiempo total: ${Math.round((Date.now() - startTime) / 1000)}s`);
    console.log(`\n📁 Archivos generados:`);
    
    for (const file of generatedFiles) {
      const filePath = path.join(productsDir, file);
      const stats = await fs.stat(filePath);
      console.log(`   - ${file} (${Math.round(stats.size / 1024)}KB)`);
    }
    
    console.log('\n✅ GENERACIÓN COMPLETA\n');
    
  } catch (error) {
    console.error('\n❌ ERROR FATAL:', error.message);
    process.exit(1);
  }
}

main();
