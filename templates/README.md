# 🎨 PDF Template System - ImportarDeChina.com

## Overview

Sistema profesional de templates para generar PDFs consistentes con diseño de marca.

**Problema resuelto:**
- ❌ ANTES: PDFs sin diseño, texto sobre footer, sin iconos
- ✅ AHORA: Diseño profesional, márgenes correctos, iconos SVG, colores marca

---

## 📁 Estructura

```
templates/pdf/
├── base.html           ← Layout HTML base (header/footer)
├── styles/
│   └── base.css        ← Estilos profesionales (A4 optimizado)
└── assets/
    └── icons.js        ← Iconos SVG inline (sin dependencias)
```

---

## 🎨 Diseño

### Colores Marca
- **Primary:** `#0d9488` (teal-600)
- **Background:** `#f0fdfa` / `#ccfbf1`
- **Highlights:** `#fef9c3` (yellow-100)
- **Accents:** `#dbeafe` (blue-100)

### Tipografía
- **Font:** System UI / Inter / Segoe UI
- **Sizes:** 11pt base, 18pt h2, 24pt h1
- **Line height:** 1.6

### Layout
- **Formato:** A4 (210mm x 297mm)
- **Márgenes:** 25mm top/bottom, 20mm left/right
- **Header:** Logo + Product name
- **Footer:** "Jorge Mora | ImportarDeChina.com | Page X of Y"

---

## 🚀 Uso

### Generar todos los productos

```bash
node scripts/generate-all-professional.mjs
```

**Output:**
- `public/products/email-templates-proveedores-china.pdf`
- `public/products/calculadora-costos-importacion.xlsx`
- `public/products/checklist-control-calidad.pdf + .xlsx`
- `public/products/due-diligence-proveedor.pdf + .xlsx`

### Crear nuevo producto PDF

```javascript
import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function generatePDF() {
  const { baseHTML, styles } = await loadBaseTemplate();
  
  const finalHTML = baseHTML
    .replace('{{TITLE}}', 'Mi Producto')
    .replace('{{PRODUCT_NAME}}', 'Mi Producto')
    .replace('{{STYLES}}', styles)
    .replace('{{CONTENT}}', `
      <div class="intro">
        <h1>🎯 Mi Producto</h1>
        <p>Descripción profesional del producto.</p>
      </div>
      
      <h2>${icons.lightbulb} Sección Principal</h2>
      <p>Contenido...</p>
    `);
  
  await renderPDF(finalHTML, 'output.pdf');
}
```

---

## 🔧 Excel con Fórmulas

**Problema:** ExcelJS escribía `==` en vez de `=`

**Solución:** Usar `{ formula: 'B16*B17' }` directamente

```javascript
// ❌ INCORRECTO (generaba ==)
calc.getCell('B18').value = { formula: '=B16*B17' };

// ✅ CORRECTO
calc.getCell('B18').value = { formula: 'B16*B17' };
```

---

## 📦 Componentes Reutilizables

### Callouts

```html
<div class="callout">
  <div class="callout-title">
    ${icons.info} Importante
  </div>
  <p>Mensaje destacado</p>
</div>

<div class="callout warning">
  <div class="callout-title">
    ${icons.alert} Advertencia
  </div>
  <p>Mensaje de alerta</p>
</div>
```

### Checklist Items

```html
<div class="checklist-item">
  <div class="checklist-checkbox"></div>
  <div class="checklist-text">
    <div class="checklist-label">Item principal</div>
    <div class="checklist-desc">Descripción detallada</div>
  </div>
</div>
```

### Tablas

```html
<table>
  <thead>
    <tr>
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
</table>
```

---

## 🎯 Iconos Disponibles

Todos inline SVG (sin dependencias externas):

- `email` 📧
- `calculator` 🧮
- `checklist` ✅
- `search` 🔍
- `alert` ⚠️
- `info` ℹ️
- `lightbulb` 💡
- `chart` 📊
- `box` 📦
- `document` 📄
- `truck` 🚚
- `dollar` 💰
- `checkCircle` ✓
- `star` ⭐

**Uso:**

```javascript
import { icons } from './templates/pdf/assets/icons.js';

const html = `<h2>${icons.calculator} Calculadora</h2>`;
```

---

## 🔄 Workflow

1. **Content:** Crear markdown en `/content/`
2. **Generate:** Run `node scripts/generate-all-professional.mjs`
3. **Verify:** Check `public/products/`
4. **Deploy:** Commit + Vercel deploy

---

## ✅ Quality Checklist

- [ ] Footer NO se superpone al contenido
- [ ] Iconos visibles y correctos
- [ ] Márgenes consistentes (25mm/20mm)
- [ ] Colores de marca (#0d9488)
- [ ] Typography legible (11pt+)
- [ ] Header en cada página
- [ ] Numeración de páginas funcional
- [ ] Fórmulas Excel correctas (sin `==`)

---

## 📝 Changelog

### 2026-02-23 - Initial Release
- Created PDF template system
- Fixed Excel formula bug (`==` → `=`)
- Professional layout with header/footer
- SVG icons inline
- A4 optimized margins
- Consistent brand colors

---

**Creado:** 2026-02-23  
**Autor:** Max Power ⚡️  
**Status:** ✅ Production Ready
