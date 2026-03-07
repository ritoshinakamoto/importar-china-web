# 🚀 CONFIGURAR WORKFLOW BREVO - 5 MINUTOS

## Paso 1: Login
- URL: https://app.brevo.com/
- Email: jomorben@proton.me
- Password: (la tuya)

## Paso 2: Crear Automation
1. Menú lateral → **Automation**
2. Click **Create an automation**
3. Nombre: **Lead Magnet - ImportarDeChina**
4. Trigger: **Contact added to a list** → Selecciona **Lista ID 2**

## Paso 3: Añadir 4 Emails

### EMAIL 2 - Día +2

**Delay:** 2 días (48 horas)  
**Subject:** 📋 Cómo usar tu Checklist paso a paso  
**From:** Jorge Mora - ImportarDeChina <jorge@importardechina.com>

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2a1f19; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
.header { background: linear-gradient(135deg, #e65c46 0%, #bf3f30 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0; }
.content { background: #faf9f7; padding: 30px; border-radius: 0 0 12px 12px; }
.tip { background: #14b8a6; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
</style>
</head>
<body>
<div class="container">
<div class="header"><h1>Cómo usar tu Checklist</h1></div>
<div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>

<p>Hace 2 días te enviamos el Checklist de 30 pasos. Hoy quiero mostrarte <strong>exactamente cómo usarlo</strong> para que no te pierdas.</p>

<h3>🎯 Por dónde empezar</h3>
<p><strong>NO intentes hacer los 30 pasos en un día.</strong> Es abrumador y contraproducente.</p>

<div class="tip">
<strong>Mi recomendación:</strong> Dedica 1 semana a cada fase (5 fases = 5 semanas). Es tiempo realista para hacer las cosas bien.
</div>

<h3>📅 Plan sugerido:</h3>
<ul>
<li><strong>Semana 1:</strong> Pasos 1-5 (Investigación) - Define producto, calcula márgenes</li>
<li><strong>Semana 2:</strong> Pasos 6-10 (Sourcing) - Contacta proveedores, pide muestras</li>
<li><strong>Semana 3:</strong> Pasos 11-15 (Negociación) - Negocia, haz depósito</li>
<li><strong>Semana 4:</strong> Pasos 16-20 (Control Calidad) - Inspección QC</li>
<li><strong>Semana 5:</strong> Pasos 21-30 (Logística y Venta) - Envío, recepción, venta</li>
</ul>

<h3>✅ Caso real: María (mi alumna)</h3>
<p>María importó yoga mats desde China. Siguió el checklist religiosamente:</p>
<ul>
<li><strong>Inversión:</strong> $3,500 (500 unidades)</li>
<li><strong>Costo unitario:</strong> $7</li>
<li><strong>Precio venta:</strong> $24.90</li>
<li><strong>Ganancia primera importación:</strong> $8,950</li>
</ul>

<p><em>"El checklist me salvó de pagar 100% por adelantado. El proveedor insistía, pero seguí tus pasos (30-70) y al final aceptó."</em> - María G.</p>

<p><strong>Próximo email (en 3 días):</strong> Te cuento los 3 errores más caros que cometen los nuevos importadores.</p>

<p>Jorge Mora<br>ImportarDeChina.com</p>
</div>
</div>
</body>
</html>
```

---

### EMAIL 3 - Día +5

**Delay:** 3 días más (72 horas desde Email 2)  
**Subject:** 🚨 3 errores que te costarán miles (y cómo evitarlos)  
**From:** Jorge Mora - ImportarDeChina <jorge@importardechina.com>

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2a1f19; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
.header { background: linear-gradient(135deg, #e65c46 0%, #bf3f30 100%); color: white; padding: 30px 20px; text-align: center; }
.content { background: #faf9f7; padding: 30px; }
.error { background: #fee; border-left: 4px solid #dc2626; padding: 15px; margin: 20px 0; }
.fix { background: #d1fae5; border-left: 4px solid #10b981; padding: 15px; margin: 10px 0; }
</style>
</head>
<body>
<div class="container">
<div class="header"><h1>⚠️ 3 Errores Caros</h1></div>
<div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>

<p>En 15 años he visto TODOS los errores posibles. Estos 3 son los más caros:</p>

<div class="error">
<h3>❌ Error #1: Confiar en el proveedor más barato</h3>
<p><strong>Ejemplo real:</strong> Carlos encontró yoga mats a $3/ud (competencia: $5/ud).</p>
<p>"¡Qué ganga!" pensó. Pidió 2,000 unidades sin muestras.</p>
<p><strong>Resultado:</strong> Mats se rompían al usarlos. No pudo vender ninguno. Pérdida: $6,000.</p>
</div>

<div class="fix">
<h4>✅ SOLUCIÓN:</h4>
<p>No elijas por precio. Elige por:</p>
<ul>
<li>Trade Assurance activo</li>
<li>Verified Supplier</li>
<li>Mínimo 2 años en Alibaba</li>
<li>Reviews verificadas</li>
</ul>
<p><strong>Regla:</strong> El 2º proveedor más barato suele ser el mejor.</p>
</div>

<div class="error">
<h3>❌ Error #2: Saltar la inspección QC ($300)</h3>
<p><strong>Ejemplo real:</strong> Ana importó 1,000 power banks.</p>
<p>"La inspección cuesta $300, mejor me lo ahorro."</p>
<p><strong>Resultado:</strong> 40% llegaron con defectos. Pérdida: $2,400.</p>
</div>

<div class="fix">
<h4>✅ SOLUCIÓN:</h4>
<p>SIEMPRE inspecciona pedidos >$3,000. No pagues el 70% final hasta aprobar inspección.</p>
</div>

<p>Jorge Mora<br>ImportarDeChina.com</p>
</div>
</div>
</body>
</html>
```

---

### EMAIL 4 - Día +7

**Delay:** 2 días más (48 horas desde Email 3)  
**Subject:** 🧮 20% OFF - Calculadora que usé en 200+ contenedores  
**From:** Jorge Mora - ImportarDeChina <jorge@importardechina.com>

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2a1f19; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
.header { background: linear-gradient(135deg, #e65c46 0%, #bf3f30 100%); color: white; padding: 30px 20px; text-align: center; }
.content { background: #faf9f7; padding: 30px; }
.offer { background: #fef3c7; border: 3px dashed #f59e0b; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; }
.button { display: inline-block; background: #2a1f19; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 0; }
</style>
</head>
<body>
<div class="container">
<div class="header"><h1>🧮 Calcula TODO automático</h1></div>
<div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>

<p>Te voy a ser honesto: <strong>calcular costos de importación ES UN DOLOR.</strong></p>

<div class="offer">
<h3 style="color:#f59e0b;margin-top:0;">🎁 OFERTA ESPECIAL (Solo 48h)</h3>
<h2 style="font-size:36px;margin:10px 0;">Calculadora Bundle</h2>
<p style="font-size:18px;"><del>$49</del> <strong style="color:#dc2626;font-size:32px;">$39</strong></p>
<p><strong>20% OFF</strong> solo para suscriptores del Checklist</p>
<a href="https://importar-china-web.vercel.app/#productos" class="button" style="color:white;">OBTENER AHORA →</a>
</div>

<h3>✅ Lo que incluye:</h3>
<ul>
<li><strong>Calculadora Costos Completa</strong> - Ingresa datos, calcula TODO automático</li>
<li><strong>Análisis Márgenes por Volumen</strong> - ¿Cuánto gano con 100, 500, 1000 uds?</li>
<li><strong>ROI Real vs Estimado</strong></li>
<li><strong>Punto de Equilibrio</strong></li>
</ul>

<p>Jorge Mora<br>ImportarDeChina.com</p>
</div>
</div>
</body>
</html>
```

---

### EMAIL 5 - Día +10

**Delay:** 3 días más (72 horas desde Email 4)  
**Subject:** 🎓 Domina Alibaba como un profesional (mi curso completo)  
**From:** Jorge Mora - ImportarDeChina <jorge@importardechina.com>

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2a1f19; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
.header { background: linear-gradient(135deg, #e65c46 0%, #bf3f30 100%); color: white; padding: 30px 20px; text-align: center; }
.content { background: #faf9f7; padding: 30px; }
</style>
</head>
<body>
<div class="container">
<div class="header"><h1>🎓 Curso Alibaba Completo</h1></div>
<div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>

<p>Llevo 15 años usando Alibaba. He contactado +500 proveedores. Importado 200+ contenedores.</p>

<h3>✅ Lo que aprenderás en el Curso Alibaba:</h3>
<ul>
<li><strong>Módulo 1:</strong> Configuración perfecta de tu cuenta</li>
<li><strong>Módulo 2:</strong> Búsquedas avanzadas (encontrar proveedores ocultos)</li>
<li><strong>Módulo 3:</strong> Verificar proveedores (detectar estafas)</li>
<li><strong>Módulo 4:</strong> Negociación efectiva (templates incluidos)</li>
<li><strong>Módulo 5:</strong> Pago seguro (Trade Assurance paso a paso)</li>
<li><strong>Módulo 6:</strong> Gestionar pedido (seguimiento, QC, envío)</li>
</ul>

<h3>💰 Inversión:</h3>
<p><strong>Precio:</strong> $149 (pago único, acceso de por vida)</p>
<p><strong>Garantía:</strong> 30 días. Si no te sirve, devuelvo 100% tu dinero.</p>

<div style="text-align:center;margin:30px 0;">
<a href="https://importar-china-web.vercel.app/#productos" style="display:inline-block;background:#2a1f19;color:white;padding:16px 32px;text-decoration:none;border-radius:8px;font-weight:bold;">VER CURSO COMPLETO →</a>
</div>

<p>Jorge Mora<br>ImportarDeChina.com</p>
</div>
</div>
</body>
</html>
```

---

## Paso 4: Activar Workflow

1. Revisa que todos los emails estén configurados
2. Click **Activate**
3. ¡Listo! 🎉

**Tiempo total:** 5-7 minutos

---

✅ **Después de configurar:**
- El sistema capturará leads automáticamente
- Email de bienvenida se envía al instante
- 4 emails de seguimiento se envían automáticamente en días 2, 5, 7, 10
