#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CSS_STYLES = `
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    line-height: 1.8;
    color: #2c3e50;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 60px;
    font-size: 11pt;
  }
  h1 {
    color: #0d9488;
    font-size: 28pt;
    margin-top: 40px;
    page-break-before: always;
    border-bottom: 3px solid #0d9488;
    padding-bottom: 10px;
  }
  h1:first-of-type {
    page-break-before: auto;
  }
  h2 {
    color: #059669;
    font-size: 18pt;
    margin-top: 30px;
    border-bottom: 2px solid #d1fae5;
    padding-bottom: 8px;
  }
  h3 {
    color: #047857;
    font-size: 14pt;
    margin-top: 20px;
  }
  pre, code {
    background: #f3f4f6;
    border-left: 4px solid #0d9488;
    padding: 15px;
    margin: 15px 0;
    font-family: 'Courier New', monospace;
    font-size: 9pt;
    line-height: 1.6;
    white-space: pre-wrap;
    page-break-inside: avoid;
  }
  code {
    padding: 2px 6px;
    border-left: none;
    background: #e5e7eb;
  }
  ul, ol {
    margin: 12px 0;
    padding-left: 30px;
  }
  li {
    margin: 8px 0;
  }
  strong {
    color: #0d9488;
    font-weight: 600;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    page-break-inside: avoid;
    font-size: 9pt;
  }
  table th {
    background: #0d9488;
    color: white;
    padding: 10px;
    text-align: left;
    font-weight: 600;
  }
  table td {
    border: 1px solid #e5e7eb;
    padding: 8px;
  }
  table tr:nth-child(even) {
    background: #f9fafb;
  }
  .cover-page {
    text-align: center;
    padding: 150px 0;
    page-break-after: always;
  }
  .cover-page h1 {
    font-size: 48pt;
    border: none;
    page-break-before: auto;
    margin-bottom: 30px;
  }
  .cover-page .subtitle {
    font-size: 20pt;
    color: #6b7280;
    margin: 20px 0;
  }
  .cover-page .author {
    font-size: 16pt;
    color: #374151;
    margin-top: 80px;
  }
  .footer {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 8pt;
    color: #6b7280;
  }
  @page {
    margin: 20mm 15mm;
  }
`;

async function generateEmailTemplatesPDF() {
  console.log('📧 Generating Email Templates PDF...');
  
  const mdPath = path.join(__dirname, '../content/file_97---0feb503a-c244-451d-a4be-6e29c545ca58.md');
  const mdContent = await fs.readFile(mdPath, 'utf-8');
  
  // Simple MD to HTML conversion
  let html = mdContent
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/```([^`]+)```/gs, '<pre><code>$1</code></pre>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^([0-9]+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^([^<].+)$/gm, '<p>$1</p>');
  
  const fullHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>${CSS_STYLES}</style>
    </head>
    <body>
      <div class="cover-page">
        <h1>📧 Email Templates Pack</h1>
        <div class="subtitle">15 Plantillas Profesionales<br/>Importación desde China</div>
        <div class="author">
          <p><strong>Por Jorge Mora</strong></p>
          <p>ImportarDeChina.com</p>
          <p>15+ años de experiencia | 200+ contenedores</p>
        </div>
      </div>
      ${html}
      <div class="footer">ImportarDeChina.com | © 2026 Jorge Mora</div>
    </body>
    </html>
  `;
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, '../public/products/email-templates-importacion-china.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' }
  });
  
  await browser.close();
  
  const stats = await fs.stat(pdfPath);
  console.log(`✅ Email Templates PDF: ${(stats.size / 1024).toFixed(1)}KB`);
  return pdfPath;
}

// Execute
generateEmailTemplatesPDF().catch(console.error);
