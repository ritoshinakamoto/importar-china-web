# El Nicho Perfecto - Sistema de Lecciones

## Estructura

```
curso-nicho-perfecto/
├── layout.tsx              # Layout con Header/Footer
├── page.tsx                # Índice del curso
├── not-found.tsx           # 404 personalizado
├── leccion/
│   └── [slug]/
│       └── page.tsx        # Página individual de lección
└── README.md               # Esta documentación
```

## Datos del Curso

Todos los datos están centralizados en:
- `lib/curso-data.ts` - Lecciones, módulos, metadata

## Protección de Acceso

### Estado Actual
- ✅ Estructura completa implementada
- ✅ No visible en menú público (no está en Header)
- ⚠️ Accesible sin autenticación (pendiente integración)

### TODO: Integrar con Stripe

1. **Crear producto en Stripe**
   ```bash
   # Dashboard Stripe → Products → Add Product
   # Nombre: "Curso El Nicho Perfecto"
   # Precio: TBD
   ```

2. **Middleware de protección**
   Crear `middleware.ts` o hook en layout:
   ```typescript
   // Verificar:
   // - Usuario autenticado (Supabase Auth)
   // - Tiene acceso al curso (payment_status en DB)
   // - Si no: redirect a /productos/curso-nicho-perfecto
   ```

3. **Página de venta**
   Crear `app/productos/curso-nicho-perfecto/page.tsx`:
   - Descripción del curso
   - Precio y CTA
   - Checkout con Stripe
   - Tras pago: marcar acceso en DB

4. **Base de datos**
   ```sql
   CREATE TABLE curso_access (
     user_id UUID REFERENCES auth.users,
     curso_slug TEXT,
     payment_status TEXT,
     stripe_payment_id TEXT,
     purchased_at TIMESTAMP
   );
   ```

## Características Implementadas

- ✅ 25 lecciones en 9 módulos
- ✅ Videos YouTube embebidos
- ✅ Navegación lateral con progreso
- ✅ Navegación prev/next entre lecciones
- ✅ Página índice con objetivos
- ✅ Responsive design
- ✅ Diseño siguiendo patterns de importardechina.com

## URLs

- Índice: `/curso-nicho-perfecto`
- Lecciones: `/curso-nicho-perfecto/leccion/[slug]`
- Ejemplo: `/curso-nicho-perfecto/leccion/intro-curso`

## Deployment

```bash
# Build local
npm run build

# Deploy a Vercel
vercel --prod
```

## Pendientes

- [ ] Crear página de venta del curso
- [ ] Integrar autenticación Supabase
- [ ] Integrar Stripe checkout
- [ ] Middleware de protección
- [ ] Sistema de tracking de progreso (opcional)
- [ ] Certificado de finalización (opcional)
