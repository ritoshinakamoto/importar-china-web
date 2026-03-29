import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

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
    console.log('1. Conéctate al servidor: ssh root@178.104.97.73');
    console.log('2. Ejecuta: docker cp supabase/schema.sql supabase-db-o11wgfe1c5hz70vqjp7ujvl2:/tmp/schema.sql');
    console.log('3. Ejecuta: docker exec supabase-db-o11wgfe1c5hz70vqjp7ujvl2 psql -U postgres -d postgres -f /tmp/schema.sql');
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
