-- Sistema Autónomo de Email Marketing
-- ImportarDeChina.com

-- Tabla de Subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  source VARCHAR(100) DEFAULT 'Lead Magnet',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active', -- active, unsubscribed, bounced
  brevo_synced BOOLEAN DEFAULT false,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Email Campaigns (mis emails configurables)
CREATE TABLE IF NOT EXISTS email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email_type VARCHAR(50) NOT NULL, -- welcome, follow_up_2, follow_up_3, etc.
  delay_days INTEGER NOT NULL, -- días después de suscripción
  subject_line_a TEXT NOT NULL, -- variante A para A/B test
  subject_line_b TEXT, -- variante B (opcional)
  content_html_a TEXT NOT NULL, -- contenido A
  content_html_b TEXT, -- contenido B (opcional)
  active BOOLEAN DEFAULT true,
  ab_test_enabled BOOLEAN DEFAULT false,
  ab_split_ratio DECIMAL DEFAULT 0.5, -- 50/50 split
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Emails Enviados (tracking)
CREATE TABLE IF NOT EXISTS email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id) ON DELETE CASCADE,
  campaign_id UUID REFERENCES email_campaigns(id),
  variant VARCHAR(1), -- 'A' o 'B'
  subject_line TEXT,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  converted_at TIMESTAMP WITH TIME ZONE,
  brevo_message_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'sent', -- sent, delivered, opened, clicked, bounced, failed
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Email Queue (cola de envío)
CREATE TABLE IF NOT EXISTS email_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id) ON DELETE CASCADE,
  campaign_id UUID REFERENCES email_campaigns(id),
  scheduled_for TIMESTAMP WITH TIME ZONE NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, sent, failed, cancelled
  attempts INTEGER DEFAULT 0,
  last_attempt_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Campaign Stats (estadísticas agregadas)
CREATE TABLE IF NOT EXISTS campaign_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES email_campaigns(id),
  variant VARCHAR(1),
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  total_sent INTEGER DEFAULT 0,
  total_delivered INTEGER DEFAULT 0,
  total_opened INTEGER DEFAULT 0,
  total_clicked INTEGER DEFAULT 0,
  total_converted INTEGER DEFAULT 0,
  open_rate DECIMAL,
  click_rate DECIMAL,
  conversion_rate DECIMAL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(campaign_id, variant, period_start, period_end)
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_status ON subscribers(status);
CREATE INDEX IF NOT EXISTS idx_email_sends_subscriber ON email_sends(subscriber_id);
CREATE INDEX IF NOT EXISTS idx_email_sends_campaign ON email_sends(campaign_id);
CREATE INDEX IF NOT EXISTS idx_email_queue_scheduled ON email_queue(scheduled_for) WHERE status = 'pending';
CREATE INDEX IF NOT EXISTS idx_email_queue_status ON email_queue(status);

-- Function para calcular stats automáticamente
CREATE OR REPLACE FUNCTION update_campaign_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Actualizar stats cuando se abre/clica un email
  INSERT INTO campaign_stats (
    campaign_id,
    variant,
    period_start,
    period_end,
    total_sent,
    total_delivered,
    total_opened,
    total_clicked,
    open_rate,
    click_rate
  )
  SELECT 
    NEW.campaign_id,
    NEW.variant,
    DATE_TRUNC('day', NEW.sent_at)::DATE,
    DATE_TRUNC('day', NEW.sent_at)::DATE,
    COUNT(*),
    COUNT(*) FILTER (WHERE status IN ('delivered', 'opened', 'clicked')),
    COUNT(*) FILTER (WHERE opened_at IS NOT NULL),
    COUNT(*) FILTER (WHERE clicked_at IS NOT NULL),
    ROUND(COUNT(*) FILTER (WHERE opened_at IS NOT NULL)::DECIMAL / NULLIF(COUNT(*), 0) * 100, 2),
    ROUND(COUNT(*) FILTER (WHERE clicked_at IS NOT NULL)::DECIMAL / NULLIF(COUNT(*), 0) * 100, 2)
  FROM email_sends
  WHERE campaign_id = NEW.campaign_id AND variant = NEW.variant
  GROUP BY campaign_id, variant, DATE_TRUNC('day', sent_at)
  ON CONFLICT (campaign_id, variant, period_start, period_end)
  DO UPDATE SET
    total_sent = EXCLUDED.total_sent,
    total_delivered = EXCLUDED.total_delivered,
    total_opened = EXCLUDED.total_opened,
    total_clicked = EXCLUDED.total_clicked,
    open_rate = EXCLUDED.open_rate,
    click_rate = EXCLUDED.click_rate,
    updated_at = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar stats
CREATE TRIGGER trigger_update_campaign_stats
AFTER INSERT OR UPDATE ON email_sends
FOR EACH ROW
EXECUTE FUNCTION update_campaign_stats();

-- Insertar campaigns iniciales (los 5 emails)
INSERT INTO email_campaigns (name, email_type, delay_days, subject_line_a, subject_line_b, content_html_a, active, ab_test_enabled) VALUES
(
  'Email 1: Bienvenida',
  'welcome',
  0,
  '✅ Tu Checklist está listo - Importar desde China en 30 Días',
  NULL,
  'PLACEHOLDER',
  true,
  false
),
(
  'Email 2: Cómo usar el Checklist',
  'follow_up_2',
  2,
  '📋 Cómo usar tu Checklist paso a paso',
  '🎯 3 secretos para usar el Checklist como un PRO',
  'PLACEHOLDER',
  true,
  true
),
(
  'Email 3: 3 Errores Caros',
  'follow_up_3',
  5,
  '🚨 3 errores que te costarán miles (y cómo evitarlos)',
  '💰 Evita perder $6,000 en tu primera importación',
  'PLACEHOLDER',
  true,
  true
),
(
  'Email 4: Calculadora Oferta',
  'follow_up_4',
  7,
  '🧮 20% OFF - Calculadora que usé en 200+ contenedores',
  '🎁 REGALO: Calculadora de costos ($39 → GRATIS hoy)',
  'PLACEHOLDER',
  true,
  true
),
(
  'Email 5: Curso Alibaba',
  'follow_up_5',
  10,
  '🎓 Domina Alibaba como un profesional (mi curso completo)',
  '🔥 El curso de Alibaba que me hizo ganar $500k',
  'PLACEHOLDER',
  true,
  true
);

-- Comentarios
COMMENT ON TABLE subscribers IS 'Todos los suscriptores del lead magnet';
COMMENT ON TABLE email_campaigns IS 'Campaigns configurables (yo las modifico)';
COMMENT ON TABLE email_sends IS 'Log de todos los emails enviados con tracking';
COMMENT ON TABLE email_queue IS 'Cola de emails pendientes de envío';
COMMENT ON TABLE campaign_stats IS 'Estadísticas agregadas para análisis y A/B testing';
