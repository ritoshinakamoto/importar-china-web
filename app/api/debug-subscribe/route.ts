import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  const logs: string[] = [];
  
  try {
    const { email, name } = await request.json();
    logs.push(`✅ Request parsed: ${email}, ${name}`);

    // Test Supabase connection
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || ''
    );
    logs.push('✅ Supabase client created');

    // Try to add subscriber
    const { data: subscriber, error: subError } = await supabase
      .from('subscribers')
      .insert({
        email,
        name,
        source: 'Lead Magnet - Website',
        status: 'active'
      })
      .select()
      .single();

    if (subError) {
      // Si ya existe, actualizar
      if (subError.code === '23505') {
        logs.push('⚠️ Subscriber already exists, updating...');
        const { data: existing, error: updateError } = await supabase
          .from('subscribers')
          .update({ name, updated_at: new Date().toISOString() })
          .eq('email', email)
          .select()
          .single();
        
        if (updateError) {
          logs.push(`❌ Update error: ${updateError.message}`);
          throw updateError;
        }
        logs.push(`✅ Subscriber updated: ${existing.id}`);
      } else {
        logs.push(`❌ Insert error: ${subError.message}`);
        throw subError;
      }
    } else {
      logs.push(`✅ Subscriber created: ${subscriber.id}`);
    }

    // Check campaigns
    const { data: campaigns, error: campaignError } = await supabase
      .from('email_campaigns')
      .select('*')
      .eq('active', true);
    
    if (campaignError) {
      logs.push(`❌ Campaign fetch error: ${campaignError.message}`);
      throw campaignError;
    }
    
    logs.push(`✅ Found ${campaigns?.length || 0} campaigns`);

    // Try to send email
    logs.push('📧 Attempting to send email via Resend...');
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Jorge Mora - ImportarDeChina <jorge@importardechina.com>',
        to: [email],
        subject: 'Test from ImportarDeChina',
        html: '<p>Test email</p>'
      }),
    });

    const emailData = await emailResponse.json();
    
    if (!emailResponse.ok) {
      logs.push(`❌ Resend error: ${JSON.stringify(emailData)}`);
    } else {
      logs.push(`✅ Email sent: ${emailData.id}`);
    }

    return NextResponse.json({ 
      success: true,
      logs 
    });
  } catch (error) {
    logs.push(`❌ Fatal error: ${error instanceof Error ? error.message : 'Unknown'}`);
    return NextResponse.json(
      { error: 'Error', logs },
      { status: 500 }
    );
  }
}
