/**
 * Sistema Autónomo de Email Marketing
 * 
 * Gestiona subscribers, campaigns, A/B testing y analytics
 * completamente independiente de Brevo UI.
 */

import { createClient } from '@supabase/supabase-js';

// Lazy getter to avoid build-time initialization
export function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  return createClient(supabaseUrl, supabaseKey);
}

// For backward compatibility: lazy-initialized Proxy (avoids build-time evaluation)
let _supabaseInstance: ReturnType<typeof createClient> | null = null;
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(target, prop) {
    if (!_supabaseInstance) {
      _supabaseInstance = getSupabase();
    }
    return _supabaseInstance[prop as keyof typeof _supabaseInstance];
  }
});

// Tipos
export interface Subscriber {
  id: string;
  email: string;
  name?: string;
  source: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed' | 'bounced';
}

export interface EmailCampaign {
  id: string;
  name: string;
  email_type: string;
  delay_days: number;
  subject_line_a: string;
  subject_line_b?: string;
  content_html_a: string;
  content_html_b?: string;
  active: boolean;
  ab_test_enabled: boolean;
  ab_split_ratio: number;
}

export interface EmailSend {
  id: string;
  subscriber_id: string;
  campaign_id: string;
  variant: 'A' | 'B';
  subject_line: string;
  sent_at: string;
  opened_at?: string;
  clicked_at?: string;
  status: string;
}

/**
 * Añadir nuevo subscriber
 */
export async function addSubscriber(email: string, name?: string) {
  const { data, error } = await supabase
    .from('subscribers')
    .insert({
      email,
      name,
      source: 'Lead Magnet - Website',
      status: 'active'
    })
    .select()
    .single();

  if (error) {
    // Si ya existe, actualizar
    if (error.code === '23505') {
      const { data: existing } = await supabase
        .from('subscribers')
        .update({ name, updated_at: new Date().toISOString() })
        .eq('email', email)
        .select()
        .single();
      return existing;
    }
    throw error;
  }

  return data;
}

/**
 * Encolar emails para un nuevo subscriber
 */
export async function queueEmailsForSubscriber(subscriberId: string) {
  // Obtener campaigns activas EXCEPTO welcome (delay 0)
  // El welcome se envía inmediatamente desde route.ts
  const { data: campaigns } = await supabase
    .from('email_campaigns')
    .select('*')
    .eq('active', true)
    .gt('delay_days', 0) // Solo emails con delay > 0
    .order('delay_days');

  if (!campaigns) return;

  // Calcular fecha de envío para cada campaign
  const now = new Date();
  const queueItems = campaigns.map(campaign => ({
    subscriber_id: subscriberId,
    campaign_id: campaign.id,
    scheduled_for: new Date(now.getTime() + campaign.delay_days * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending'
  }));

  await supabase.from('email_queue').insert(queueItems);
}

/**
 * Obtener emails pendientes de envío
 */
export async function getPendingEmails() {
  const { data } = await supabase
    .from('email_queue')
    .select(`
      *,
      subscriber:subscribers(*),
      campaign:email_campaigns(*)
    `)
    .eq('status', 'pending')
    .lte('scheduled_for', new Date().toISOString())
    .order('scheduled_for');

  return data || [];
}

/**
 * Seleccionar variante A/B para un subscriber
 */
export function selectVariant(campaign: EmailCampaign, subscriberEmail: string): 'A' | 'B' {
  if (!campaign.ab_test_enabled || !campaign.subject_line_b) {
    return 'A';
  }

  // Hash del email para distribuir consistentemente
  const hash = subscriberEmail.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  return Math.abs(hash) % 100 < (campaign.ab_split_ratio * 100) ? 'A' : 'B';
}

/**
 * Enviar email via Resend
 */
export async function sendEmail(
  email: string,
  name: string,
  subject: string,
  htmlContent: string,
  campaignId: string,
  variant: 'A' | 'B'
) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Jorge Mora - ImportarDeChina <jorge@importardechina.com>',
      to: [email],
      bcc: ['jorgemorabeneyto@gmail.com'], // Copia oculta a Jorge
      reply_to: ['jorgemorabeneyto@gmail.com'], // Respuestas van a Gmail
      subject,
      html: htmlContent,
      tags: [
        { name: 'campaign_id', value: campaignId },
        { name: 'variant', value: variant }
      ]
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${errorText}`);
  }

  const data = await response.json();
  return data.id; // Resend usa 'id' en lugar de 'messageId'
}

/**
 * Procesar cola de emails (llamado por cron)
 */
export async function processEmailQueue() {
  const pending = await getPendingEmails();
  const results = [];

  for (const item of pending) {
    try {
      const campaign = item.campaign as unknown as EmailCampaign;
      const subscriber = item.subscriber as unknown as Subscriber;
      
      // Seleccionar variante
      const variant = selectVariant(campaign, subscriber.email);
      const subjectLine = variant === 'A' ? campaign.subject_line_a : campaign.subject_line_b!;
      const htmlContent = variant === 'A' ? campaign.content_html_a : campaign.content_html_b!;

      // Reemplazar placeholders - más robusto
      let personalizedHtml = htmlContent
        .replace(/{{contact\.FIRSTNAME}}/gi, subscriber.name || 'amigo')
        .replace(/{{contact\.EMAIL}}/gi, subscriber.email)
        .replace(/{{contact\.NAME}}/gi, subscriber.name || 'amigo')
        .replace(/PLACEHOLDER/g, subscriber.name || 'estimado importador');
      
      // Si el HTML está vacío o solo tiene espacios, usar fallback
      if (!personalizedHtml || personalizedHtml.trim() === '') {
        personalizedHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Hola ${subscriber.name || 'amigo'},</h2>
            <p>Gracias por suscribirte a ImportarDeChina.com</p>
            <p>Pronto recibirás contenido de valor sobre importación desde China.</p>
            <p>Saludos,<br>Jorge Mora</p>
          </div>
        `;
      }

      // Enviar via Brevo
      const messageId = await sendEmail(
        subscriber.email,
        subscriber.name || '',
        subjectLine,
        personalizedHtml,
        campaign.id,
        variant
      );

      // Registrar envío
      await supabase.from('email_sends').insert({
        subscriber_id: subscriber.id,
        campaign_id: campaign.id,
        variant,
        subject_line: subjectLine,
        sent_at: new Date().toISOString(),
        resend_message_id: messageId,
        status: 'sent'
      });

      // Marcar como enviado
      await supabase
        .from('email_queue')
        .update({ status: 'sent' })
        .eq('id', item.id);

      results.push({ success: true, email: subscriber.email });
    } catch (error) {
      console.error(`Error sending email to ${item.subscriber.email}:`, error);
      
      // Incrementar attempts
      await supabase
        .from('email_queue')
        .update({
          attempts: item.attempts + 1,
          last_attempt_at: new Date().toISOString(),
          error_message: error instanceof Error ? error.message : 'Unknown error',
          status: item.attempts >= 2 ? 'failed' : 'pending' // 3 intentos max
        })
        .eq('id', item.id);

      results.push({ success: false, email: item.subscriber?.email, error });
    }
  }

  return results;
}

/**
 * Obtener estadísticas de campaign
 */
export async function getCampaignStats(campaignId: string) {
  const { data } = await supabase
    .from('campaign_stats')
    .select('*')
    .eq('campaign_id', campaignId)
    .order('period_start', { ascending: false });

  return data || [];
}

/**
 * Determinar variante ganadora automáticamente
 */
export async function determineWinner(campaignId: string) {
  const { data: sends } = await supabase
    .from('email_sends')
    .select('variant, opened_at, clicked_at')
    .eq('campaign_id', campaignId);

  if (!sends || sends.length < 50) {
    return null; // Necesitamos al menos 50 envíos para decidir
  }

  const statsA = {
    total: sends.filter(s => s.variant === 'A').length,
    opens: sends.filter(s => s.variant === 'A' && s.opened_at).length,
    clicks: sends.filter(s => s.variant === 'A' && s.clicked_at).length
  };

  const statsB = {
    total: sends.filter(s => s.variant === 'B').length,
    opens: sends.filter(s => s.variant === 'B' && s.opened_at).length,
    clicks: sends.filter(s => s.variant === 'B' && s.clicked_at).length
  };

  const openRateA = statsA.opens / statsA.total;
  const openRateB = statsB.opens / statsB.total;
  const clickRateA = statsA.clicks / statsA.total;
  const clickRateB = statsB.clicks / statsB.total;

  // Ponderación: clicks valen 2x más que opens
  const scoreA = openRateA + (clickRateA * 2);
  const scoreB = openRateB + (clickRateB * 2);

  return {
    winner: scoreA > scoreB ? 'A' : 'B',
    statsA,
    statsB,
    openRateA,
    openRateB,
    clickRateA,
    clickRateB,
    confidenceLevel: Math.abs(scoreA - scoreB) > 0.1 ? 'high' : 'low'
  };
}
