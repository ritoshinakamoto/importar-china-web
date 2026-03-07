import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const tests: Record<string, any> = {};

  // Test 1: Environment variables
  tests.env = {
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: !!process.env.SUPABASE_SERVICE_KEY,
    resendKey: !!process.env.RESEND_API_KEY,
  };

  // Test 2: Supabase connection
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || ''
    );
    
    const { data, error } = await supabase
      .from('subscribers')
      .select('count')
      .limit(1);
    
    tests.supabase = {
      connected: !error,
      error: error?.message
    };
  } catch (err) {
    tests.supabase = {
      connected: false,
      error: err instanceof Error ? err.message : 'Unknown error'
    };
  }

  // Test 3: Resend API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Jorge Mora - ImportarDeChina <jorge@importardechina.com>',
        to: ['test@test.com'],
        subject: 'Test',
        html: '<p>Test</p>'
      }),
    });

    const data = await response.json();
    tests.resend = {
      statusCode: response.status,
      ok: response.ok,
      response: data
    };
  } catch (err) {
    tests.resend = {
      error: err instanceof Error ? err.message : 'Unknown error'
    };
  }

  return NextResponse.json(tests);
}
