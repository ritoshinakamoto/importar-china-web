import { NextResponse } from 'next/server';
import { processEmailQueue, determineWinner, getSupabase } from '@/lib/email-system';

/**
 * Cron job para envío automático de emails
 * 
 * Llamado cada hora por Vercel Cron o sistema externo
 * Endpoint: /api/cron/send-emails
 * 
 * Vercel Cron config (vercel.json):
 * {
 *   "crons": [{
 *     "path": "/api/cron/send-emails",
 *     "schedule": "0 * * * *"
 *   }]
 * }
 */
export async function GET(request: Request) {
  try {
    // Verificar auth (opcional pero recomendado)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('[CRON] Processing email queue...');
    
    // Procesar cola de emails
    const results = await processEmailQueue();

    // Auto-optimización: determinar ganadores A/B test
    const supabase = getSupabase();
    const { data: campaigns } = await supabase
      .from('email_campaigns')
      .select('*')
      .eq('ab_test_enabled', true)
      .eq('active', true);

    const winners = [];
    if (campaigns) {
      for (const campaign of campaigns) {
        const analysis = await determineWinner(campaign.id);
        if (analysis && analysis.confidenceLevel === 'high') {
          winners.push({
            campaign: campaign.name,
            winner: analysis.winner,
            stats: analysis
          });

          // Auto-aplicar ganador (desactivar variante perdedora)
          if (analysis.winner === 'A') {
            await supabase
              .from('email_campaigns')
              .update({ 
                subject_line_b: null,
                content_html_b: null,
                ab_test_enabled: false
              })
              .eq('id', campaign.id);
            
            console.log(`[AUTO-OPTIMIZE] Campaign ${campaign.name}: Variante A wins! Desactivando B.`);
          } else {
            // Mover B a A (la ganadora)
            await supabase
              .from('email_campaigns')
              .update({ 
                subject_line_a: campaign.subject_line_b,
                content_html_a: campaign.content_html_b,
                subject_line_b: null,
                content_html_b: null,
                ab_test_enabled: false
              })
              .eq('id', campaign.id);
            
            console.log(`[AUTO-OPTIMIZE] Campaign ${campaign.name}: Variante B wins! Promoviendo a A.`);
          }
        }
      }
    }

    const summary = {
      timestamp: new Date().toISOString(),
      totalProcessed: results.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      winners: winners
    };

    console.log('[CRON] Completed:', summary);

    return NextResponse.json({
      success: true,
      ...summary
    });
  } catch (error) {
    console.error('[CRON] Error:', error);
    return NextResponse.json(
      { error: 'Cron job failed', details: error instanceof Error ? error.message : 'Unknown' },
      { status: 500 }
    );
  }
}

// También permitir POST para testing manual
export async function POST(request: Request) {
  return GET(request);
}
