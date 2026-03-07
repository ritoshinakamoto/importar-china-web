import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

function calculateLeadScore(subscriber: any, events: any[]): number {
  let score = 0;
  
  // Base score: 10 points just for subscribing
  score += 10;
  
  // Recent activity bonus
  const now = new Date();
  const lastActive = events.length > 0 
    ? new Date(Math.max(...events.map(e => new Date(e.created_at).getTime())))
    : new Date(subscriber.subscribed_at);
  
  const hoursSinceActive = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60);
  
  if (hoursSinceActive < 24) {
    score += 20; // Very recent activity
  } else if (hoursSinceActive < 72) {
    score += 10; // Active in last 3 days
  }
  
  // Event-based scoring
  events.forEach(event => {
    switch (event.event_type) {
      case 'email_open':
        score += 15;
        break;
      case 'link_click':
      case 'button_click':
        score += 20;
        break;
      case 'page_view':
        score += 10;
        break;
      case 'download':
        score += 25;
        break;
    }
  });
  
  // Penalty for inactivity
  if (hoursSinceActive > 168) { // 7 days
    score -= 30;
  }
  
  // Cap score at 100
  return Math.min(100, Math.max(0, score));
}

function getLeadStatus(score: number): 'hot' | 'warm' | 'cold' {
  if (score >= 70) return 'hot';
  if (score >= 40) return 'warm';
  return 'cold';
}

export async function GET() {
  try {
    // Get all subscribers
    const { data: subscribers, error: subError } = await supabase
      .from('subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (subError) {
      console.error('Error fetching subscribers:', subError);
      return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
    }

    // Get all events
    const { data: allEvents, error: eventsError } = await supabase
      .from('user_events')
      .select('*')
      .order('created_at', { ascending: false });

    if (eventsError) {
      console.error('Error fetching events:', eventsError);
      // Continue without events data
    }

    // Calculate scores for each subscriber
    const enrichedSubscribers = (subscribers || []).map(sub => {
      const userEvents = (allEvents || []).filter(e => 
        e.user_id === sub.id || e.user_id?.includes(sub.email)
      );
      
      const score = calculateLeadScore(sub, userEvents);
      const status = getLeadStatus(score);
      const lastActive = userEvents.length > 0 
        ? userEvents[0].created_at 
        : sub.subscribed_at;

      return {
        id: sub.id,
        email: sub.email,
        name: sub.name,
        created_at: sub.subscribed_at,
        last_active: lastActive,
        score,
        events_count: userEvents.length,
        status
      };
    });

    // Sort by score (hottest first)
    enrichedSubscribers.sort((a, b) => b.score - a.score);

    // Calculate stats
    const stats = {
      total: enrichedSubscribers.length,
      hot: enrichedSubscribers.filter(s => s.status === 'hot').length,
      warm: enrichedSubscribers.filter(s => s.status === 'warm').length,
      cold: enrichedSubscribers.filter(s => s.status === 'cold').length,
      totalEvents: allEvents?.length || 0
    };

    return NextResponse.json({
      subscribers: enrichedSubscribers,
      stats
    });
  } catch (error) {
    console.error('Error in admin/leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
