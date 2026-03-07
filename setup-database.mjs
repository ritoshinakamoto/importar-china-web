import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://rhkizawlmwjwrgkamhce.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoa2l6YXdsbXdqd3Jna2FtaGNlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTcwNDE0MCwiZXhwIjoyMDg3MjgwMTQwfQ.FHQI69N0svg8N_hCkKtWl50t13kuvakMP027f4MaLYw';

const supabase = createClient(supabaseUrl, supabaseKey);

// Leer schema
const schema = fs.readFileSync('./supabase/schema.sql', 'utf-8');

// Ejecutar vía RPC (Supabase expone función para ejecutar SQL raw)
console.log('Ejecutando schema.sql en Supabase...');

try {
  // Split por statement (cada comando SQL)
  const statements = schema
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  for (const statement of statements) {
    console.log(`Ejecutando: ${statement.substring(0, 50)}...`);
    const { error } = await supabase.rpc('exec_sql', { sql: statement + ';' });
    if (error) {
      console.error('Error:', error);
    }
  }

  console.log('✅ Base de datos configurada correctamente');
} catch (error) {
  console.error('❌ Error configurando base de datos:', error);
  process.exit(1);
}
