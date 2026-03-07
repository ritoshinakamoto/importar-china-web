# Plan de Generación de Productos Descargables

## FASE 1: Crear PDFs/Excel (PRIORIDAD MÁXIMA)

### 1. Email Templates (PDF)
- Usar contenido de file_97
- Formato: PDF profesional con tabla de contenidos
- Tamaño estimado: 30-40 páginas
- Herramienta: Puppeteer (ya instalado)
- Output: `/public/products/email-templates-importacion-china.pdf`

### 2. Calculadora Costos (Excel .xlsx)
- Usar instrucciones de file_98
- Crear Excel funcional con:
  * Hoja 1: Calculadora (fórmulas automáticas)
  * Hoja 2: Base TARIC
  * Hoja 3: Guía de uso
- Herramienta: exceljs (instalar)
- Output: `/public/products/calculadora-costos-importacion.xlsx`

### 3. Checklist QC (PDF + Excel)
- Usar contenido de file_99
- PDF: Checklist imprimible
- Excel: Checklist editable (rellenable)
- Output:
  * `/public/products/checklist-qc-importacion.pdf`
  * `/public/products/checklist-qc-importacion.xlsx`

### 4. Due Diligence (Excel + PDF)
- Usar contenido de file_100
- Excel: Template evaluación (scorecard automático)
- PDF: Guía completa
- Output:
  * `/public/products/due-diligence-proveedor.xlsx`
  * `/public/products/due-diligence-proveedor.pdf`

## FASE 2: Implementar Delivery

### Modificar webhook Stripe:
```typescript
// /api/webhooks/stripe/route.ts
// Detectar productId del metadata
// Enviar email con productos correctos
```

### Mapping productos:
- email-templates → email-templates-importacion-china.pdf
- calculadora-costos → calculadora-costos-importacion.xlsx
- checklist-control-calidad → checklist-qc-importacion.pdf + .xlsx
- due-diligence-proveedor → due-diligence-proveedor.xlsx + .pdf

## FASE 3: Automatización Post-Compra

### Supabase: Nueva tabla `purchases`
```sql
CREATE TABLE purchases (
  id uuid PRIMARY KEY,
  email text NOT NULL,
  product_id text NOT NULL,
  stripe_session_id text UNIQUE,
  amount_cents integer,
  purchased_at timestamp DEFAULT now(),
  follow_up_day_3_sent boolean DEFAULT false,
  follow_up_day_7_sent boolean DEFAULT false
);
```

### Cron job follow-up:
- Día 3: "¿Cómo te está yendo con [producto]?"
- Día 7: Upsell producto complementario

## ESTADO: EN PROGRESO
Iniciando generación productos...
