#!/usr/bin/env node
/**
 * Actualizar campaigns de email en Supabase
 * 
 * Corrige:
 * 1. URLs antiguas de Vercel → producción
 * 2. Precios específicos → links a páginas producto
 * 3. Descuentos ficticios → ofertas genéricas
 * 4. Moneda $ → €
 * 5. From jorge@importardechina.com configurado
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const baseUrl = 'https://importardechina.com';

// Templates actualizados con correcciones
const campaigns = [
  {
    email_type: 'follow_up_2',
    subject_line_a: '📋 Cómo usar tu Checklist paso a paso',
    content_html_a: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center;border-radius:12px 12px 0 0}.content{background:#faf9f7;padding:30px}.tip{background:#14b8a6;color:white;padding:15px;border-radius:8px;margin:20px 0}</style></head>
<body><div class="container"><div class="header"><h1>Cómo usar tu Checklist</h1></div><div class="content">
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
<li><strong>Inversión:</strong> 3.500€ (500 unidades)</li>
<li><strong>Costo unitario:</strong> 7€</li>
<li><strong>Precio venta:</strong> 24.90€</li>
<li><strong>Ganancia primera importación:</strong> 8.950€</li>
</ul>
<p><em>"El checklist me salvó de pagar 100% por adelantado. El proveedor insistía, pero seguí tus pasos (30-70) y al final aceptó." - María G.</em></p>

<h3>🚨 Error #1 que veo TODO EL TIEMPO</h3>
<p><strong>Saltar el Paso 9 (pedir muestras).</strong></p>
<p>"Es que las muestras cuestan 100€..." - Sí, pero un pedido de 1,000 unidades MALAS cuesta 5.000€.</p>
<p>Las muestras NO son gasto, son SEGURO.</p>

<p><strong>Próximo email (en 3 días):</strong> Te cuento los 3 errores más caros que cometen los nuevos importadores (y cómo evitarlos).</p>

<p>¿Dudas sobre algún paso del checklist? Responde este email.</p>

<p>Jorge Mora<br>ImportarDeChina.com</p>
</div></div></body></html>
    `
  },
  {
    email_type: 'follow_up_3',
    subject_line_a: '🚨 3 errores que te costarán miles (y cómo evitarlos)',
    content_html_a: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center}.content{background:#faf9f7;padding:30px}.error{background:#fee;border-left:4px solid #dc2626;padding:15px;margin:20px 0}.fix{background:#d1fae5;border-left:4px solid #10b981;padding:15px;margin:10px 0}.button{display:inline-block;background:#2a1f19;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;margin:10px 0}</style></head>
<body><div class="container"><div class="header"><h1>⚠️ 3 Errores Caros</h1></div><div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>
<p>En 15 años he visto TODOS los errores posibles. Estos 3 son los más caros:</p>

<div class="error">
<h3>❌ Error #1: Confiar en el proveedor más barato</h3>
<p><strong>Ejemplo real:</strong> Carlos encontró yoga mats a 3€/ud (competencia: 5€/ud).</p>
<p>"¡Qué ganga!" pensó. Pidió 2,000 unidades sin muestras.</p>
<p><strong>Resultado:</strong> Mats se rompían al usarlos. No pudo vender ninguno. Pérdida: 6.000€.</p>
</div>

<div class="fix">
<h4>✅ SOLUCIÓN:</h4>
<p>No elijas por precio. Elige por:</p>
<ul>
<li>Trade Assurance activo</li>
<li>Verified Supplier</li>
<li>Mínimo 2 años en Alibaba</li>
<li>Reviews verificadas</li>
<li>Responde rápido (24h)</li>
</ul>
<p><strong>Regla:</strong> El 2º proveedor más barato suele ser el mejor.</p>
</div>

<div class="error">
<h3>❌ Error #2: Saltar la inspección QC (300€)</h3>
<p><strong>Ejemplo real:</strong> Ana importó 1,000 power banks.</p>
<p>"La inspección cuesta 300€, mejor me lo ahorro."</p>
<p><strong>Resultado:</strong> 40% llegaron con defectos. Pérdida: 2.400€.</p>
</div>

<div class="fix">
<h4>✅ SOLUCIÓN:</h4>
<p>SIEMPRE inspecciona pedidos >3.000€. Usa:</p>
<ul>
<li>AsiaInspection.com (250-350€)</li>
<li>QIMA.com</li>
<li>V-Trust.com</li>
</ul>
<p>No pagues el 70% final hasta aprobar inspección.</p>
</div>

<div class="error">
<h3>❌ Error #3: Olvidar calcular IVA + aranceles</h3>
<p><strong>Ejemplo real:</strong> Luis calculó:</p>
<ul>
<li>Producto: 5€/ud</li>
<li>Envío: 1€/ud</li>
<li>Total: 6€/ud ✓</li>
</ul>
<p>Vendía a 15€/ud → "Gano 9€/ud, ¡genial!"</p>
<p><strong>ERROR:</strong> Olvidó IVA 21% + Aranceles 12% = 2€/ud más.</p>
<p><strong>Costo REAL:</strong> 8€/ud → Margen real: 7€/ud (no 9€)</p>
</div>

<div class="fix">
<h4>✅ SOLUCIÓN:</h4>
<p>Usa esta fórmula SIEMPRE:</p>
<p><strong>Costo Real = Producto + Envío + (Producto × 1.33)</strong></p>
<p>El 1.33 cubre IVA + aranceles + extras.</p>
<p><strong>¿Quieres calcularlo automático?</strong> Tengo una Calculadora Excel que lo hace por ti.</p>
<a href="${baseUrl}/productos/calculadora-costos" class="button" style="color: white;">Ver Calculadora →</a>
</div>

<p>Próximo email: Te cuento cómo dominar Alibaba como un profesional.</p>

<p>Jorge Mora<br>ImportarDeChina.com</p>
<p><em>PD: ¿Ya cometiste alguno de estos errores? Responde y te ayudo a solucionarlo.</em></p>
</div></div></body></html>
    `
  },
  {
    email_type: 'follow_up_4',
    subject_line_a: '🧮 La Calculadora que usé en 200+ contenedores',
    content_html_a: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center}.content{background:#faf9f7;padding:30px}.offer{background:#fef3c7;border:3px dashed #f59e0b;padding:20px;border-radius:12px;text-align:center;margin:20px 0}.button{display:inline-block;background:#2a1f19;color:white;padding:16px 32px;text-decoration:none;border-radius:8px;font-weight:bold;margin:10px 0}</style></head>
<body><div class="container"><div class="header"><h1>🧮 Calcula TODO automático</h1></div><div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>
<p>Te voy a ser honesto: <strong>calcular costos de importación ES UN DOLOR.</strong></p>
<p>Tienes que sumar:</p>
<ul>
<li>Precio producto</li>
<li>Envío China → tu país</li>
<li>Aranceles (varía por producto)</li>
<li>IVA (21% en España)</li>
<li>Tasas aduanas</li>
<li>Transporte local</li>
<li>Seguro (opcional pero recomendado)</li>
</ul>
<p><strong>Y si te equivocas en UNO, tu margen desaparece.</strong></p>

<h3>📊 Caso real: Pedro</h3>
<p>Pedro calculó "a ojo" sus costos de importación de bicicletas eléctricas.</p>
<ul>
<li><strong>Estimó:</strong> 300€/ud costo total</li>
<li><strong>Costo REAL:</strong> 385€/ud (olvidó aranceles 12% + extras)</li>
<li><strong>Vendía a:</strong> 450€/ud</li>
<li><strong>Margen estimado:</strong> 150€/ud ❌</li>
<li><strong>Margen real:</strong> 65€/ud ✓</li>
</ul>
<p>"Pensé que ganaría 30.000€. Al final gané 13.000€. Casi no cubro gastos operativos." - Pedro M.</p>

<div class="offer">
<h3 style="color:#f59e0b;margin-top:0;">🎁 OFERTA ESPECIAL</h3>
<h2 style="font-size:36px;margin:10px 0;">Calculadora de Costos</h2>
<p style="font-size:18px;"><strong>Precio exclusivo para suscriptores del Checklist</strong></p>
<a href="${baseUrl}/productos/calculadora-costos" class="button" style="color:white;">VER OFERTA →</a>
<p style="font-size:14px;color:#6b5549;margin-top:15px;">⚡ Oferta válida por tiempo limitado</p>
</div>

<h3>✅ Lo que incluye:</h3>
<ul>
<li><strong>Calculadora Costos Completa</strong> - Ingresa datos, calcula TODO automático</li>
<li><strong>Análisis Márgenes por Volumen</strong> - ¿Cuánto gano con 100, 500, 1000 uds?</li>
<li><strong>ROI Real vs Estimado</strong> - Compara proyección vs realidad</li>
<li><strong>Punto de Equilibrio</strong> - ¿Cuántas unidades debo vender?</li>
<li><strong>Comparador de Proveedores</strong> - Compara hasta 5 proveedores</li>
<li><strong>Plantilla Pedido</strong> - Genera Purchase Order profesional</li>
</ul>

<h3>💬 Lo que dicen quienes la usan:</h3>
<p><em>"Esta calculadora me ahorró 2.400€ en mi segundo pedido. Detecté que el proveedor me estaba cobrando envío de más."</em> - Laura T.</p>
<p><em>"Antes usaba Excel básico. Esto es otro nivel. Calcula TODO, hasta cosas que ni sabía que existían."</em> - Miguel R.</p>

<h3>🎯 ¿Para quién es?</h3>
<ul>
<li>✅ Importadores nuevos (te evita errores caros)</li>
<li>✅ Importadores experimentados (optimiza márgenes)</li>
<li>✅ Revendedores Amazon FBA</li>
<li>✅ Dueños tiendas online</li>
</ul>

<div style="text-align:center;margin:30px 0;">
<a href="${baseUrl}/productos/calculadora-costos" class="button" style="color:white;">VER CALCULADORA →</a>
</div>

<p>Próximo email: Te cuento cómo dominar Alibaba (la plataforma que uso desde hace 15 años).</p>

<p>Jorge Mora<br>ImportarDeChina.com</p>
<p><em>PD: Si tienes dudas sobre la Calculadora, responde este email. Te contesto personalmente.</em></p>
</div></div></body></html>
    `
  },
  {
    email_type: 'follow_up_5',
    subject_line_a: '🎓 Domina Alibaba como un profesional (mi curso completo)',
    content_html_a: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center}.content{background:#faf9f7;padding:30px}.testimonial{background:white;padding:20px;border-radius:8px;border-left:4px solid #14b8a6;margin:20px 0;font-style:italic}.button{display:inline-block;background:#2a1f19;color:white;padding:16px 32px;text-decoration:none;border-radius:8px;font-weight:bold;margin:10px 0}</style></head>
<body><div class="container"><div class="header"><h1>🎓 Curso Alibaba Completo</h1></div><div class="content">
<p>Hola {{contact.FIRSTNAME}},</p>
<p>Llevo 15 años usando Alibaba. He contactado +500 proveedores. Importado 200+ contenedores.</p>
<p><strong>Y todavía sigo aprendiendo cosas nuevas.</strong></p>

<p>Alibaba es ENORME. Puedes perder semanas buscando proveedores y NUNCA encontrar el correcto.</p>

<h3>❌ Los 5 errores que veo TODO EL TIEMPO:</h3>
<ol>
<li><strong>Buscar solo por precio</strong> (el más barato suele ser estafa)</li>
<li><strong>No verificar certificaciones</strong> (Trade Assurance, Verified Supplier)</li>
<li><strong>Contactar solo 1-2 proveedores</strong> (necesitas 10+ para comparar)</li>
<li><strong>No pedir muestras</strong> (las fotos mienten)</li>
<li><strong>Pagar por Alibaba Messages</strong> (innecesario, usa el gratis)</li>
</ol>

<h3>✅ Lo que aprenderás en el Curso Alibaba:</h3>
<ul>
<li><strong>Módulo 1:</strong> Configuración perfecta de tu cuenta (15 min)</li>
<li><strong>Módulo 2:</strong> Búsquedas avanzadas (encontrar proveedores ocultos)</li>
<li><strong>Módulo 3:</strong> Verificar proveedores (detectar estafas)</li>
<li><strong>Módulo 4:</strong> Negociación efectiva (templates incluidos)</li>
<li><strong>Módulo 5:</strong> Pago seguro (Trade Assurance paso a paso)</li>
<li><strong>Módulo 6:</strong> Gestionar pedido (seguimiento, QC, envío)</li>
<li><strong>BONUS:</strong> Lista negra de proveedores (estafadores conocidos)</li>
<li><strong>BONUS:</strong> Directorio categorías (dónde buscar cada producto)</li>
</ul>

<div class="testimonial">
<p>"Antes tardaba 2 semanas en encontrar un proveedor decente. Con este curso, ahora lo hago en 2 días."</p>
<p><strong>- Ana R., importadora textiles</strong></p>
</div>

<div class="testimonial">
<p>"El módulo de negociación solo me ahorró 3.200€ en mi primer pedido. El curso se pagó solo."</p>
<p><strong>- Carlos M., Amazon FBA seller</strong></p>
</div>

<h3>🎯 ¿Para quién es este curso?</h3>
<ul>
<li>✅ Importadores nuevos (evita errores de principiante)</li>
<li>✅ Importadores que ya usan Alibaba (optimiza tu proceso)</li>
<li>✅ Sellers Amazon FBA buscando proveedores</li>
<li>✅ Emprendedores lanzando productos propios</li>
</ul>

<div style="text-align:center;margin:30px 0;">
<a href="${baseUrl}/#productos" class="button" style="color:white;">VER TODOS LOS PRODUCTOS →</a>
</div>

<h3>🤔 "¿No puedo aprender esto en YouTube gratis?"</h3>
<p><strong>Puedes.</strong> Si tienes 6 meses para probar, fallar, perder dinero, aprender.</p>
<p>Yo tardé 3 años en dominar Alibaba (y perdí miles en el camino).</p>
<p><strong>Este curso te ahorra años de ensayo-error.</strong></p>

<h3>📧 ¿Tienes dudas?</h3>
<p>Responde este email con tus preguntas. Leo y respondo todo personalmente.</p>

<p>¡Éxito en tus importaciones!</p>

<p>Jorge Mora<br>ImportarDeChina.com</p>
<p><em>PD: Si compraste la Calculadora, este curso es complemento perfecto. Juntos cubren TODO el proceso de importación.</em></p>
</div></div></body></html>
    `
  }
];

async function updateCampaigns() {
  console.log('🔄 Actualizando campaigns de email...\n');

  for (const campaign of campaigns) {
    const { error } = await supabase
      .from('email_campaigns')
      .update({
        content_html_a: campaign.content_html_a,
        subject_line_a: campaign.subject_line_a,
        updated_at: new Date().toISOString()
      })
      .eq('email_type', campaign.email_type);

    if (error) {
      console.error(`❌ Error updating ${campaign.email_type}:`, error);
    } else {
      console.log(`✅ Updated: ${campaign.email_type}`);
    }
  }

  console.log('\n✅ Todas las campaigns actualizadas');
  console.log('\n📋 Cambios aplicados:');
  console.log('  - URLs: importardechina.com (no Vercel preview)');
  console.log('  - Precios: Quitados, solo links a páginas');
  console.log('  - Descuentos: Genéricos, sin % específico');
  console.log('  - Moneda: € (no $)');
  console.log('  - From: jorge@importardechina.com en lib/email-system.ts');
}

updateCampaigns().catch(console.error);
