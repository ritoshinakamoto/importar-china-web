import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

export async function POST(request: Request) {
  try {
    const { event_type, event_data } = await request.json();
    
    // Get user from cookie or IP (for anonymous tracking)
    const cookieStore = await cookies();
    let userId = cookieStore.get('user_id')?.value;
    
    if (!userId) {
      // Create anonymous user ID from IP + timestamp
      const forwarded = request.headers.get('x-forwarded-for');
      const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
      userId = `anon_${ip}_${Date.now()}`;
      
      // Set cookie for future tracking
      // Note: cookies().set() needs to be in a Server Action or Route Handler
      // For now, we'll just use the generated ID
    }

    // Store event in Supabase
    const { error } = await supabase
      .from('user_events')
      .insert({
        user_id: userId,
        event_type,
        event_data,
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error storing event:', error);
      return NextResponse.json({ error: 'Failed to store event' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in track-event:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
