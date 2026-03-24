# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Dependencias primero (caché de Docker)
COPY package*.json ./
RUN npm ci

# Build args — variables que Next.js necesita en BUILD TIME
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ARG DATABASE_URL
ARG STRIPE_SECRET_KEY
ARG RESEND_API_KEY

# Convertir build args a env vars para el build
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

# Copiar código y hacer build
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copiar solo lo necesario del build
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Variables de runtime (las que NO son NEXT_PUBLIC_ se necesitan aquí también)
ENV DATABASE_URL=$DATABASE_URL
ENV STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

EXPOSE 3000

CMD ["node", "server.js"]
