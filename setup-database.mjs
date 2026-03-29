import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

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
