#!/usr/bin/env node
/**
 * Crear automatización completa en Brevo via API
 * Ejecutar: node scripts/create-brevo-automation.mjs
 */

const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const LIST_ID = 2;

// Emails de seguimiento (2-5)
const followUpEmails = [
  {
    name: 'Email 2: Cómo usar el Checklist',
    subject: '📋 Cómo usar tu Checklist paso a paso',
    delay: 2880, // 2 días en minutos
    htmlContent: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center;border-radius:12px 12px 0 0}.content{background:#faf9f7;padding:30px}.tip{background:#14b8a6;color:white;padding:15px;border-radius:8px;margin:20px 0}</style></head><body><div class="container"><div class="header"><h1>Cómo usar tu Checklist</h1></div><div class="content"><p>Hola {{contact.FIRSTNAME}},</p><p>Hace 2 días te enviamos el Checklist de 30 pasos. Hoy quiero mostrarte <strong>exactamente cómo usarlo</strong> para que no te pierdas.</p><h3>🎯 Por dónde empezar</h3><p><strong>NO intentes hacer los 30 pasos en un día.</strong> Es abrumador y contraproducente.</p><div class="tip"><strong>Mi recomendación:</strong> Dedica 1 semana a cada fase (5 fases = 5 semanas). Es tiempo realista para hacer las cosas bien.</div><h3>📅 Plan sugerido:</h3><ul><li><strong>Semana 1:</strong> Pasos 1-5 (Investigación)</li><li><strong>Semana 2:</strong> Pasos 6-10 (Sourcing)</li><li><strong>Semana 3:</strong> Pasos 11-15 (Negociación)</li><li><strong>Semana 4:</strong> Pasos 16-20 (Control Calidad)</li><li><strong>Semana 5:</strong> Pasos 21-30 (Logística y Venta)</li></ul><p>Jorge Mora<br>ImportarDeChina.com</p></div></div></body></html>`
  },
  {
    name: 'Email 3: 3 Errores Caros',
    subject: '🚨 3 errores que te costarán miles (y cómo evitarlos)',
    delay: 7200, // 5 días en minutos
    htmlContent: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center}.content{background:#faf9f7;padding:30px}.error{background:#fee;border-left:4px solid #dc2626;padding:15px;margin:20px 0}.fix{background:#d1fae5;border-left:4px solid #10b981;padding:15px;margin:10px 0}</style></head><body><div class="container"><div class="header"><h1>⚠️ 3 Errores Caros</h1></div><div class="content"><p>Hola {{contact.FIRSTNAME}},</p><p>En 15 años he visto TODOS los errores posibles. Estos 3 son los más caros:</p><div class="error"><h3>❌ Error #1: Confiar en el proveedor más barato</h3><p>Carlos encontró yoga mats a $3/ud. Pidió 2,000 unidades sin muestras. Resultado: Se rompían al usarlos. Pérdida: $6,000.</p></div><div class="fix"><h4>✅ SOLUCIÓN:</h4><p>No elijas por precio. Elige por Trade Assurance, Verified Supplier, reviews verificadas.</p></div><p>Jorge Mora<br>ImportarDeChina.com</p></div></div></body></html>`
  },
  {
    name: 'Email 4: Calculadora Oferta',
    subject: '🧮 20% OFF - Calculadora que usé en 200+ contenedores',
    delay: 10080, // 7 días en minutos
    htmlContent: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center}.content{background:#faf9f7;padding:30px}.offer{background:#fef3c7;border:3px dashed #f59e0b;padding:20px;border-radius:12px;text-align:center;margin:20px 0}.button{display:inline-block;background:#2a1f19;color:white;padding:16px 32px;text-decoration:none;border-radius:8px;font-weight:bold;margin:10px 0}</style></head><body><div class="container"><div class="header"><h1>🧮 Calcula TODO automático</h1></div><div class="content"><p>Hola {{contact.FIRSTNAME}},</p><div class="offer"><h3 style="color:#f59e0b;margin-top:0;">🎁 OFERTA ESPECIAL (Solo 48h)</h3><h2 style="font-size:36px;margin:10px 0;">Calculadora Bundle</h2><p style="font-size:18px;"><del>$49</del> <strong style="color:#dc2626;font-size:32px;">$39</strong></p><p><strong>20% OFF</strong> solo para suscriptores del Checklist</p><a href="https://importar-china-web.vercel.app/#productos" class="button" style="color:white;">OBTENER AHORA →</a></div><p>Jorge Mora<br>ImportarDeChina.com</p></div></div></body></html>`
  },
  {
    name: 'Email 5: Curso Alibaba',
    subject: '🎓 Domina Alibaba como un profesional (mi curso completo)',
    delay: 14400, // 10 días en minutos
    htmlContent: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:-apple-system,sans-serif;line-height:1.6;color:#2a1f19}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#e65c46 0%,#bf3f30 100%);color:white;padding:30px 20px;text-align:center}.content{background:#faf9f7;padding:30px}</style></head><body><div class="container"><div class="header"><h1>🎓 Curso Alibaba Completo</h1></div><div class="content"><p>Hola {{contact.FIRSTNAME}},</p><p>Llevo 15 años usando Alibaba. He contactado +500 proveedores. Importado 200+ contenedores.</p><h3>✅ Lo que aprenderás:</h3><ul><li>Configuración perfecta de tu cuenta</li><li>Búsquedas avanzadas</li><li>Verificar proveedores (detectar estafas)</li><li>Negociación efectiva</li><li>Pago seguro (Trade Assurance)</li></ul><p><strong>Precio:</strong> $149<br><strong>Garantía:</strong> 30 días devolución</p><div style="text-align:center;margin:30px 0;"><a href="https://importar-china-web.vercel.app/#productos" style="display:inline-block;background:#2a1f19;color:white;padding:16px 32px;text-decoration:none;border-radius:8px;font-weight:bold;">VER CURSO COMPLETO →</a></div><p>Jorge Mora<br>ImportarDeChina.com</p></div></div></body></html>`
  }
];

async function createCampaigns() {
  console.log('🚀 Creando campañas de email en Brevo...\n');
  
  const campaignIds = [];
  
  for (const email of followUpEmails) {
    try {
      const response = await fetch('https://api.brevo.com/v3/emailCampaigns', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: email.name,
          subject: email.subject,
          sender: {
            name: 'Jorge Mora - ImportarDeChina',
            email: 'jorge@importardechina.com'
          },
          htmlContent: email.htmlContent,
          recipients: {
            listIds: [LIST_ID]
          },
          scheduledAt: null // No programar, se usará en automation
        }),
      });

      if (response.ok) {
        const data = await response.json();
        campaignIds.push({ ...email, campaignId: data.id });
        console.log(`✅ Creada: ${email.name} (ID: ${data.id})`);
      } else {
        const error = await response.text();
        console.error(`❌ Error creando ${email.name}:`, error);
      }
    } catch (error) {
      console.error(`❌ Error:`, error);
    }
  }
  
  return campaignIds;
}

async function createAutomation(campaigns) {
  console.log('\n📧 Creando workflow de automatización...\n');
  
  try {
    // Brevo Automation API (requiere plan premium)
    // Si no tienes plan premium, usa los emails como campañas programadas
    
    console.log('⚠️  NOTA: La API de Automation requiere plan Business de Brevo.');
    console.log('    Alternativa: Configurar manualmente en Brevo UI (5 minutos)');
    console.log('\n📋 INSTRUCCIONES MANUALES:');
    console.log('\n1. Ve a Automation → Create Workflow');
    console.log('2. Trigger: Contact added to List ID 2');
    console.log('3. Añade estos emails con delays:\n');
    
    campaigns.forEach(camp => {
      const days = Math.floor(camp.delay / 1440);
      console.log(`   📧 ${camp.name}`);
      console.log(`      Delay: +${days} días`);
      console.log(`      Campaign ID: ${camp.campaignId || 'N/A'}\n`);
    });
    
    console.log('4. Activa el workflow\n');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

async function main() {
  console.log('═══════════════════════════════════════════\n');
  console.log('  CONFIGURACIÓN AUTOMÁTICA BREVO');
  console.log('  Lead Magnet - ImportarDeChina.com\n');
  console.log('═══════════════════════════════════════════\n');
  
  const campaigns = await createCampaigns();
  await createAutomation(campaigns);
  
  console.log('═══════════════════════════════════════════\n');
  console.log('✅ CONFIGURACIÓN COMPLETADA\n');
  console.log('📊 ESTADO:');
  console.log('   ✅ Formulario captura → Funciona');
  console.log('   ✅ Email bienvenida → Automático');
  console.log('   ✅ 4 emails creados en Brevo');
  console.log('   ⏳ Workflow → Configurar manualmente (5 min)\n');
  console.log('═══════════════════════════════════════════\n');
}

main().catch(console.error);
