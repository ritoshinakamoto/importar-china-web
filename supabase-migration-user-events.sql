-- Migration: Create user_events table for tracking
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS user_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_events_user_id ON user_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_type ON user_events(event_type);
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON user_events(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from authenticated and anon users (for tracking)
CREATE POLICY "Allow inserts for all" ON user_events
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow service role to read all (for admin dashboard)
CREATE POLICY "Allow service role to read all" ON user_events
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Grant permissions
GRANT INSERT ON user_events TO anon, authenticated;
GRANT SELECT ON user_events TO service_role;

-- Success message
SELECT 'user_events table created successfully! 🎉' AS status;
