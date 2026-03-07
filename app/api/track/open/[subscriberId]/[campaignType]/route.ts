import { NextResponse } from 'next/server';
import { supabase } from '@/lib/email-system';

/**
 * Track email opens via pixel
 * URL: /api/track/open/{subscriberId}/{campaignType}
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ subscriberId: string; campaignType: string }> }
) {
  const { subscriberId, campaignType } = await params;

  try {
    // Actualizar opened_at en email_sends
    await supabase
      .from('email_sends')
      .update({ 
        opened_at: new Date().toISOString(),
        status: 'opened'
      })
      .eq('subscriber_id', subscriberId)
      .eq('campaign_id', campaignType)
      .is('opened_at', null);

    // Retornar pixel 1x1 transparente
    const pixel = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
      'base64'
    );

    return new NextResponse(pixel, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Track open error:', error);
    // Aún así retornar pixel para no romper email
    const pixel = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
      'base64'
    );
    return new NextResponse(pixel, {
      headers: { 'Content-Type': 'image/png' }
    });
  }
}
