import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Jane Inbox Processor - Cron Endpoint (Resend)
 * 
 * Called 3x daily (6:00, 14:00, 22:00 MST)
 * - Process emails from *@importardechina.com
 * - Detect spam
 * - Notify Jane about valid inquiries
 * 
 * Auth: Vercel Cron Secret
 */
export async function GET(request: Request) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('[JANE-CRON] Processing Resend inbox...');

    // Execute Jane's Resend inbox processor
    const scriptPath = '/data/.openclaw/workspace-jane/scripts/process-resend-inbox.mjs';
    const { stdout, stderr } = await execAsync(`cd /data/.openclaw/workspace-jane && node ${scriptPath}`);

    console.log('[JANE-CRON] Output:', stdout);
    if (stderr) console.error('[JANE-CRON] Errors:', stderr);

    // Parse summary
    const processedMatch = stdout.match(/Total processed: (\d+)/);
    const spamMatch = stdout.match(/Spam: (\d+)/);
    const validMatch = stdout.match(/Valid inquiries: (\d+)/);

    const summary = {
      timestamp: new Date().toISOString(),
      totalProcessed: processedMatch ? parseInt(processedMatch[1]) : 0,
      spam: spamMatch ? parseInt(spamMatch[1]) : 0,
      validInquiries: validMatch ? parseInt(validMatch[1]) : 0,
      success: true
    };

    console.log('[JANE-CRON] Summary:', summary);

    // Notify Jane if valid inquiries found
    if (summary.validInquiries > 0) {
      try {
        const openclaw_gateway = process.env.OPENCLAW_GATEWAY_URL || 'http://localhost:60641';
        const openclaw_token = process.env.OPENCLAW_TOKEN;
        
        if (openclaw_gateway && openclaw_token) {
          await fetch(`${openclaw_gateway}/api/sessions/send`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${openclaw_token}`
            },
            body: JSON.stringify({
              label: 'jane',
              message: `📬 ${summary.validInquiries} nuevos emails válidos detectados. Review pending-inquiries-resend.json y responde.`
            })
          });
        }
      } catch (notifyError) {
        console.error('[JANE-CRON] Error notifying Jane:', notifyError);
      }
    }

    return NextResponse.json(summary);
  } catch (error) {
    console.error('[JANE-CRON] Error:', error);
    return NextResponse.json(
      { 
        error: 'Cron job failed', 
        details: error instanceof Error ? error.message : 'Unknown',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// Allow POST for manual testing
export async function POST(request: Request) {
  return GET(request);
}
