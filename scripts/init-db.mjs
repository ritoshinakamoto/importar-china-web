import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rhkizawlmwjwrgkamhce.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoa2l6YXdsbXdqd3Jna2FtaGNlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTcwNDE0MCwiZXhwIjoyMDg3MjgwMTQwfQ.FHQI69N0svg8N_hCkKtWl50t13kuvakMP027f4MaLYw';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false }
});

console.log('🚀 Inicializando base de datos...\n');

// Test conexión insertando un subscriber de prueba
try {
  const { data, error } = await supabase
    .from('subscribers')
    .insert({
      email: 'test@test.com',
      name: 'Test User',
      source: 'Test',
      status: 'active'
    })
    .select();

  if (error) {
    console.log('❌ Tablas no existen aún. Deben crearse manualmente en Supabase SQL Editor.');
    console.log('\n📋 Instrucciones:');
    console.log('1. Ve a: https://supabase.com/dashboard/project/rhkizawlmwjwrgkamhce/editor/sql');
    console.log('2. Abre el archivo: /data/.openclaw/workspace/importar-china-web/supabase/schema.sql');
    console.log('3. Copia todo el contenido');
    console.log('4. Pégalo en SQL Editor');
    console.log('5. Click "Run"');
    console.log('\n⏳ Esperando que completes estos pasos...');
    process.exit(1);
  }

  console.log('✅ Tablas ya existen. Test subscriber creado:', data);
  
  // Limpiar test
  await supabase.from('subscribers').delete().eq('email', 'test@test.com');
  
  console.log('\n✅ Base de datos lista para producción');
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
