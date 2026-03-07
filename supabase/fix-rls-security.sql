-- Fix Security Vulnerabilities: Enable RLS on all tables
-- ImportarDeChina.com Email System
-- Created: 2026-02-24

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sends ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_stats ENABLE ROW LEVEL SECURITY;

-- ============================================
-- SUBSCRIBERS: Policies
-- ============================================

-- Allow anon users to INSERT (lead magnet sign-up)
CREATE POLICY "Allow anon to insert subscribers" ON subscribers
  FOR INSERT
  WITH CHECK (true);

-- Allow service_role to SELECT/UPDATE/DELETE (admin operations)
CREATE POLICY "Allow service_role full access to subscribers" ON subscribers
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- EMAIL_CAMPAIGNS: Policies
-- ============================================

-- Only service_role can read/write campaigns (admin-only config)
CREATE POLICY "Allow service_role full access to campaigns" ON email_campaigns
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- EMAIL_SENDS: Policies
-- ============================================

-- Only service_role can read/write sends (tracking data)
CREATE POLICY "Allow service_role full access to sends" ON email_sends
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- EMAIL_QUEUE: Policies
-- ============================================

-- Only service_role can manage queue
CREATE POLICY "Allow service_role full access to queue" ON email_queue
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- CAMPAIGN_STATS: Policies
-- ============================================

-- Only service_role can read/write stats
CREATE POLICY "Allow service_role full access to stats" ON campaign_stats
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- GRANT PERMISSIONS
-- ============================================

-- Subscribers: anon can insert
GRANT INSERT ON subscribers TO anon, authenticated;
GRANT ALL ON subscribers TO service_role;

-- All other tables: service_role only
GRANT ALL ON email_campaigns TO service_role;
GRANT ALL ON email_sends TO service_role;
GRANT ALL ON email_queue TO service_role;
GRANT ALL ON campaign_stats TO service_role;

-- ============================================
-- REVOKE PUBLIC ACCESS
-- ============================================

-- Explicitly revoke public/anon from sensitive tables
REVOKE ALL ON email_campaigns FROM anon, authenticated, public;
REVOKE ALL ON email_sends FROM anon, authenticated, public;
REVOKE ALL ON email_queue FROM anon, authenticated, public;
REVOKE ALL ON campaign_stats FROM anon, authenticated, public;

-- Success message
SELECT '✅ RLS enabled + policies created for 5 tables! Security fixed.' AS status;
