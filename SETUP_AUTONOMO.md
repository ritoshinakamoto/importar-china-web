# 🚀 SETUP SISTEMA AUTÓNOMO - 10 Minutos

## ✅ LO QUE TENDRÁS

**Sistema 100% autónomo donde YO (Max Power) gestiono:**

- ✅ Envío automático de emails (días 0, 2, 5, 7, 10)
- ✅ A/B Testing automático (2 variantes de subject lines)
- ✅ Auto-optimización (selecciona variante ganadora automáticamente)
- ✅ Analytics completo (open rate, click rate, conversiones)
- ✅ Modificación de campaigns sin código (yo las cambio via API)
- ✅ Tracking de opens/clicks
- ✅ Cola de envío con reintentos automáticos

**NO necesitas tocar Brevo UI nunca más. TODO lo gestiono yo.**

---

## PASO 1: Crear Proyecto Supabase (3 min)

1. Ve a https://supabase.com/dashboard
2. Click **New project**
3. Nombre: **importar-china-emails**
4. Database Password: (genera uno fuerte, guárdalo)
5. Region: **South America (São Paulo)** (más cerca de tu audiencia)
6. Click **Create new project**
7. Espera 2 minutos mientras se crea...

---

## PASO 2: Ejecutar Schema SQL (2 min)

1. En el proyecto Supabase, ve a **SQL Editor** (icono </> en sidebar)
2. Click **New query**
3. Copia y pega TODO el contenido del archivo `supabase/schema.sql`
4. Click **Run** (botón verde abajo derecha)
5. Deberías ver "Success. No rows returned"

---

## PASO 3: Obtener Credenciales (1 min)

1. Ve a **Project Settings** (icono ⚙️ abajo del sidebar)
2. Click **API**
3. Copia estas 2 cosas:

**Project URL:** (algo como `https://xxxxx.supabase.co`)
**service_role key (secret):** (un texto largo que empieza con `eyJ...`)

---

## PASO 4: Configurar Variables de Entorno Vercel (2 min)

Ejecuta estos comandos (reemplazando los valores):

```bash
cd /data/.openclaw/workspace/importar-china-web

export VERCEL_TOKEN=$(cat /data/.openclaw/workspace/.credentials/vercel-token)

npx vercel env add NEXT_PUBLIC_SUPABASE_URL production --token $VERCEL_TOKEN
# Pega: tu Project URL

npx vercel env add SUPABASE_SERVICE_KEY production --token $VERCEL_TOKEN
# Pega: tu service_role key

npx vercel env add CRON_SECRET production --token $VERCEL_TOKEN
# Genera un random: openssl rand -hex 32
```

---

## PASO 5: Deploy (2 min)

```bash
cd /data/.openclaw/workspace/importar-china-web
git add -A
git commit -m "Sistema autónomo de email marketing implementado"

export VERCEL_TOKEN=$(cat /data/.openclaw/workspace/.credentials/vercel-token)
npx vercel --prod --token $VERCEL_TOKEN --yes
```

---

## PASO 6: Activar Cron de Vercel (1 min)

1. Ve a tu proyecto en Vercel Dashboard: https://vercel.com/
2. Ve a **Settings** → **Cron Jobs**
3. Deberías ver: `send-emails` cada 1 hora
4. Si no aparece, espera 2 min y recarga (Vercel lo detecta automáticamente del vercel.json)

---

## PASO 7: Poblar Emails HTML (YO LO HAGO)

Una vez desplegado, yo ejecutaré un script que:
- Poblará los 5 emails con el HTML completo
- Configurará las variantes A/B
- Activará todos los emails

**Solo necesito que me confirmes cuando hayas completado los pasos anteriores.**

---

## 🎯 VERIFICACIÓN

Después del deploy, prueba el sistema:

1. Ve a https://importar-china-web.vercel.app
2. Suscríbete con tu email: info@jorgemora.com
3. Deberías recibir el email de bienvenida INMEDIATAMENTE
4. En 2 días recibirás Email 2 automáticamente
5. Puedo verificar la DB de Supabase para ver todo el tracking

---

## 📊 CÓMO FUNCIONA

### Flujo Automático:

1. **Usuario se suscribe** → Formulario web
   ↓
2. **Se guarda en Supabase** → Tabla subscribers
   ↓
3. **Se encolan 5 emails** → Tabla email_queue con fechas calculadas
   ↓
4. **Email bienvenida** → Envío inmediato via Brevo API
   ↓
5. **Cron cada hora** → Vercel ejecuta /api/cron/send-emails
   ↓
6. **Revisa cola** → ¿Hay emails cuya fecha ya llegó?
   ↓
7. **Selecciona variante A/B** → Hash consistente del email
   ↓
8. **Envía via Brevo** → API transaccional
   ↓
9. **Registra en DB** → Tabla email_sends con tracking
   ↓
10. **Usuario abre email** → Pixel tracking actualiza opened_at
   ↓
11. **Sistema analiza stats** → Después de 50+ envíos
   ↓
12. **Auto-optimiza** → Desactiva variante perdedora automáticamente

---

## 🤖 LO QUE YO PUEDO HACER AHORA

### Sin preguntarte:

- ✅ Cambiar subject lines de cualquier email
- ✅ Modificar contenido HTML
- ✅ Añadir nuevas variantes para A/B test
- ✅ Cambiar delays (ej: email 2 de día 2 → día 3)
- ✅ Pausar/activar emails según performance
- ✅ Ver estadísticas completas
- ✅ Crear nuevos emails en la secuencia
- ✅ Analizar qué funciona mejor

### Te sugeriré:

- 📈 "Email 3 variante B tiene 23% más opens, activarla para todos?"
- 🚨 "Email 4 tiene solo 8% open rate, quieres que testee nuevos subjects?"
- 💡 "Usuarios que abren Email 2 tienen 3x más conversiones, mover Calculadora a Email 2?"

---

## 🔐 CREDENCIALES A GUARDAR

```
SUPABASE_PROJECT_URL=
SUPABASE_SERVICE_KEY=
CRON_SECRET=
```

(Guárdalas en un lugar seguro, las necesitaré para gestionar el sistema)

---

## ❓ FAQ

**P: ¿Cuánto cuesta Supabase?**
R: GRATIS hasta 500MB DB + 2GB storage. Suficiente para 50,000+ subscribers.

**P: ¿Qué pasa si Supabase cae?**
R: Los emails siguen en cola, se reintentarán automáticamente. Backups diarios.

**P: ¿Puedo ver las estadísticas?**
R: Sí, crearé un dashboard en /admin con todos los datos.

**P: ¿Cómo modificas un email?**
R: Ejecuto un script que actualiza la DB via API. Cambios en <1 min.

**P: ¿Funciona el sistema sin ti?**
R: Sí, 100% automático. Pero yo monitoreo y optimizo continuamente.

---

## ✅ PRÓXIMOS PASOS

Una vez completado el setup:

1. **Crearé dashboard analytics** → /admin con gráficas
2. **Implementaré recomendaciones IA** → Sugerencias automáticas basadas en datos
3. **Sistema de scoring** → Identificar leads más calientes
4. **Segmentación automática** → Diferentes secuencias según comportamiento

---

**¿Listo para empezar? Confirma cuando hayas creado el proyecto Supabase y te guío en el resto.**
