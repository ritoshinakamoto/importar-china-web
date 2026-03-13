- # ChinaRadar — Modelo de Negocio Completo
  id:: chinaradar-modelo-negocio
  tags:: #ChinaRadar #modelo-negocio #MVP #importación #china
  fecha:: [[2026-03-12]]
  estado:: 🟡 En desarrollo
	- ## Visión
		- **Una frase:** "Abre la app, descubre qué importar de China esta semana para ganar dinero, sin investigar nada."
		- **Misión:** Eliminar la parálisis por análisis del importador. Convertir semanas de investigación en una decisión de 5 minutos respaldada por datos.
		- **Posicionamiento:** ChinaRadar no es un curso, no es un PDF, no es un directorio. Es un **radar de oportunidades de importación** que trabaja para ti mientras duermes.
	- ## Problema que resolvemos
		- El importador (novato o experimentado) pierde **entre 10 y 40 horas** investigando qué producto importar.
		- La mayoría no tiene acceso a datos fiables de demanda, competencia y márgenes en un solo lugar.
		- El miedo a elegir mal paraliza la acción: **el 70% de los que quieren importar nunca hacen su primer pedido**.
		- Las herramientas existentes (Jungle Scout, Helium 10) están pensadas para sellers de Amazon, no para importadores. No cubren el lado del proveedor chino.
	- ## Propuesta de valor
		- **Ahorro de tiempo:** Lo que lleva horas de research se reduce a minutos.
		- **Reducción de riesgo:** Datos reales de demanda, competencia y márgenes ANTES de invertir un euro.
		- **Ventaja competitiva:** Acceso a oportunidades que otros todavía no ven.
		- **Diferenciador clave vs Jungle Scout / Helium 10:** ChinaRadar cubre AMBOS lados — demanda en destino Y oferta en origen (precio proveedor, MOQ, fiabilidad).
	- ## Cliente objetivo
		- ### Perfil 1: El emprendedor novato
			- Quiere empezar a importar pero no sabe qué producto elegir.
			- Busca **seguridad y guía**.
			- Presupuesto de inversión: 1.000€ - 5.000€.
			- Dolor principal: "No quiero perder mi dinero eligiendo mal."
			- Disposición a pagar: 29-49€/mes si le das confianza.
		- ### Perfil 2: El vendedor de marketplace
			- Ya vende en Amazon/Miravia/Shopify y busca su siguiente producto ganador.
			- Busca **velocidad y datos**.
			- Presupuesto de inversión: 5.000€ - 30.000€.
			- Dolor principal: "Pierdo demasiado tiempo investigando y mis competidores se me adelantan."
			- Disposición a pagar: 49-99€/mes por información que le dé ventaja.
		- ### Perfil 3: El importador experimentado
			- Ya importa pero quiere diversificar o detectar tendencias antes que la competencia.
			- Busca **inteligencia de mercado exclusiva**.
			- Presupuesto de inversión: 30.000€+.
			- Dolor principal: "Necesito un equipo de research sin contratar a nadie."
			- Disposición a pagar: 149-299€/mes por exclusividad y asesoría.
	- ## Motor de ChinaRadar — Cómo funciona
		- ### Fuentes de datos (lado demanda)
			- Volumen de búsquedas en Amazon (por marketplace: ES, MX, US, DE...)
			- Google Trends (tendencias de búsqueda por país)
			- Tendencias en TikTok / Instagram / Pinterest (productos virales)
			- Datos de ventas estimadas en marketplaces
		- ### Fuentes de datos (lado oferta)
			- Precio medio en Alibaba y 1688
			- MOQ (cantidad mínima de pedido)
			- Número de proveedores disponibles
			- Valoración media de proveedores
			- Tiempo de producción estimado
		- ### Fuentes de datos (competencia)
			- Número de sellers en Amazon/marketplaces para ese producto
			- Reseñas del líder de categoría
			- Nivel de saturación (ratio oferta/demanda)
			- Precio medio de venta en destino
		- ### Score de oportunidad (algoritmo)
			- **Demanda** (peso 30%): Volumen búsquedas + tendencia creciente
			- **Margen** (peso 30%): (Precio venta destino - Coste total importación) / Precio venta
			- **Competencia** (peso 20%): Inverso del número de sellers + calidad de listings existentes
			- **Facilidad** (peso 20%): MOQ bajo + proveedor fiable + sin barreras regulatorias fuertes
			- Resultado: Score de 0-100 → clasificado como 🔴 Evitar / 🟡 Potencial / 🟢 Oportunidad / 🔥 Oportunidad caliente
	- ## Producto — Qué ve el usuario
		- ### Ranking semanal
			- Lista de 20-30 productos ordenados por score de oportunidad.
			- Cada producto tiene una **ficha de oportunidad** con:
				- Nombre y categoría del producto
				- Score de oportunidad (0-100) con desglose visual
				- Precio estimado en origen (Alibaba/1688)
				- Precio medio de venta en destino
				- Margen bruto estimado (%)
				- MOQ medio
				- Inversión mínima estimada (producto + envío + aranceles)
				- Nivel de competencia (bajo/medio/alto)
				- Tendencia (↗ creciente / → estable / ↘ decreciente)
				- Proveedores sugeridos (solo Pro/Enterprise)
				- Enlace directo a proveedores verificados (solo Enterprise)
		- ### Calculadora de márgenes integrada
			- El usuario ajusta: cantidad de unidades, país de destino, tipo de envío
			- La calculadora devuelve: coste unitario total (producto + envío + aranceles + IVA), margen bruto y neto estimado, inversión total, punto de equilibrio en unidades vendidas
		- ### Alertas personalizadas (Pro+)
			- El usuario configura filtros: categoría, margen mínimo, inversión máxima, país de destino
			- Recibe email/notificación cuando aparece un producto que cumple sus criterios
		- ### Informe mensual personalizado (Enterprise)
			- Análisis detallado de 3-5 productos seleccionados para el perfil específico del cliente
			- Incluye recomendación de proveedor + estrategia de entrada
			- Elaborado por el equipo de ImportarDeChina.com
	- ## Pricing
		- ### Plan Free — El Gancho (0€/mes)
			- Top 5 productos trending de la semana
			- Datos limitados: nombre, categoría, score general, tendencia
			- SIN proveedores, SIN márgenes detallados, SIN calculadora
			- **Objetivo:** Demostrar valor, capturar email, convertir a Pro
		- ### Plan Pro — El Motor (39€/mes | 348€/año — ahorro 2 meses)
			- Ranking completo semanal (20-30 productos)
			- Fichas detalladas con proveedores sugeridos
			- Calculadora de márgenes integrada
			- Alertas personalizadas por nicho (hasta 3 alertas)
			- Filtros avanzados (categoría, margen, inversión, país)
			- Acceso al historial de rankings anteriores
			- **Objetivo:** Tier principal de ingresos recurrentes
		- ### Plan Enterprise — La Ventaja (199€/mes | 1.788€/año — ahorro 2 meses)
			- Todo lo de Pro
			- Productos exclusivos con ventana de 2 semanas antes de publicarse en Pro
			- Informe mensual personalizado (3-5 productos recomendados para ti)
			- Acceso directo a proveedores verificados por el equipo
			- Enlace prioritario a servicio de negociación con proveedores
			- 1 llamada mensual de 30 min de estrategia con el equipo
			- **Objetivo:** Conectar con servicios premium de asesoría, máximo LTV
		- ### Proyección de ingresos (escenario conservador a 12 meses)
			- | Métrica | Mes 1-3 | Mes 4-6 | Mes 7-12 |
			  |---|---|---|---|
			  | Usuarios Free | 200 | 800 | 2.000 |
			  | Suscriptores Pro | 10 | 40 | 120 |
			  | Suscriptores Enterprise | 1 | 5 | 15 |
			  | MRR (ingresos recurrentes) | 589€ | 2.555€ | 7.665€ |
			  | ARR estimado | 7.068€ | 30.660€ | 91.980€ |
	- ## MVP v1 — "El Curador" (semi-manual)
		- ### Filosofía del MVP
			- **NO automatizar nada hasta validar que la gente paga.**
			- El research lo hace Jorge + equipo + IA (Claude/GPT) semanalmente.
			- La app solo necesita mostrar los productos y gestionar suscripciones.
			- Si 50 personas pagan Pro en los primeros 3 meses → invertir en automatización.
		- ### Stack técnico
			- **Frontend:** Next.js (ya existente en importardechina.com)
			- **Base de datos:** Supabase (ya en uso)
			- **Pagos:** Stripe (ya configurado)
			- **Email:** Resend.com (ya en uso)
			- **Hosting:** Vercel (ya en uso)
			- **Coste adicional de infraestructura:** ~0€ (todo ya existe)
		- ### Funcionalidades del MVP
			- TODO Página principal con ranking semanal
			- TODO Sistema de registro/login (Supabase Auth)
			- TODO Tres niveles de acceso (Free / Pro / Enterprise)
			- TODO Ficha de producto con datos clave
			- TODO Calculadora de márgenes básica
			- TODO Integración con Stripe para suscripciones
			- TODO Email semanal automático a suscriptores con el ranking
			- TODO Panel admin para cargar productos semanalmente
		- ### Lo que NO incluye el MVP
			- ❌ Scraping automático de Alibaba/1688
			- ❌ IA generando scores automáticamente
			- ❌ Integraciones con APIs de Amazon
			- ❌ App móvil nativa
			- ❌ Sistema de alertas personalizadas
		- ### Timeline estimado del MVP
			- | Fase | Duración | Entregable |
			  |---|---|---|
			  | Diseño UI/UX | 1 semana | Prototipo navegable |
			  | Desarrollo frontend | 2 semanas | App funcional |
			  | Backend + Stripe | 1 semana | Suscripciones activas |
			  | Carga de datos inicial | 1 semana | 20 productos con fichas |
			  | Testing + lanzamiento | 1 semana | ChinaRadar live |
			  | **Total** | **~6 semanas** | **MVP en producción** |
	- ## Estrategia de lanzamiento
		- ### Fase 1: Pre-lanzamiento (2 semanas antes)
			- Crear landing page con waitlist
			- Email a toda la base de importardechina.com
			- Publicar 3-5 artículos en el blog sobre "productos trending para importar en 2026"
			- Posts en redes sociales con teasers del ranking
			- TODO Crear landing page de ChinaRadar
			- TODO Preparar secuencia de emails de lanzamiento
			- TODO Escribir artículos de blog como funnel
		- ### Fase 2: Lanzamiento (semana 1)
			- Abrir acceso Free a toda la waitlist
			- Ofrecer Pro con descuento de lanzamiento (29€/mes los primeros 100)
			- Publicar el primer ranking semanal con bombo
			- TODO Activar campañas de email
			- TODO Publicar en redes sociales
			- TODO Contactar influencers del nicho de importación
		- ### Fase 3: Crecimiento (mes 1-3)
			- Contenido semanal en blog/redes con "el producto de la semana"
			- Casos de éxito de usuarios que importaron productos del ranking
			- Webinars gratuitos mostrando cómo usar ChinaRadar
			- Programa de referidos (1 mes gratis por cada referido Pro)
			- TODO Crear programa de referidos
			- TODO Documentar primeros casos de éxito
			- TODO Planificar webinars mensuales
	- ## Métricas clave (KPIs)
		- | Métrica | Objetivo | Frecuencia de revisión |
		  |---|---|---|
		  | Registros Free | 200/mes | Semanal |
		  | Conversión Free → Pro | >5% | Mensual |
		  | Conversión Pro → Enterprise | >3% | Mensual |
		  | Churn mensual Pro | <10% | Mensual |
		  | MRR | Crecimiento >20% mes a mes | Mensual |
		  | NPS (satisfacción) | >40 | Trimestral |
		  | Tiempo medio en plataforma | >5 min/sesión | Semanal |
		  | Usuarios que solicitan asesoría | >10% Enterprise | Mensual |
	- ## Riesgos y mitigación
		- | Riesgo | Probabilidad | Impacto | Mitigación |
		  |---|---|---|---|
		  | Datos de demanda poco fiables | 🟡 Media | 🔴 Alto | Cruzar múltiples fuentes, validar manualmente al inicio |
		  | Baja conversión Free → Pro | 🟡 Media | 🟡 Medio | A/B testing de paywall, mejorar el gancho del Free |
		  | Usuarios copian y no renuevan | 🟡 Media | 🟡 Medio | Datos cambian cada semana, el valor es continuo |
		  | Competidor copia el modelo | 🟢 Baja | 🟡 Medio | Tu expertise de 15 años es incopiable, velocidad de ejecución |
		  | Alibaba/1688 bloquea acceso a datos | 🟡 Media | 🔴 Alto | Diversificar fuentes, datos manuales como backup |
	- ## Roadmap post-MVP
		- ### v2 — Automatización parcial (mes 3-6)
			- Scraping semi-automático de Alibaba/1688
			- Score de oportunidad calculado por IA
			- Sistema de alertas personalizadas
		- ### v3 — Inteligencia avanzada (mes 6-9)
			- Integración con APIs de Amazon (datos de ventas reales)
			- Predicción de tendencias con ML
			- Comparador de proveedores integrado
		- ### v4 — Ecosistema conectado (mes 9-12)
			- Integración con NegociaBot (del radar al pedido en 1 clic)
			- Integración con ImportDashboard (tracking post-compra)
			- App móvil nativa
		- ### v5 — Marketplace (año 2)
			- Marketplace interno de productos exclusivos
			- Proveedores verificados publican directamente
			- ChinaRadar se convierte en la plataforma de referencia
	- ## Conexión con el ecosistema ImportarDeChina.com
		- ChinaRadar **no es un producto aislado**, es la **puerta de entrada** al ecosistema:
		- ```
		  ChinaRadar (qué importar)
		       ↓
		  NegociaBot (negociar con proveedor)
		       ↓
		  LabelReady (cumplir normativa)
		       ↓
		  ImportDashboard (seguir el envío)
		       ↓
		  MiMarca China (crear tu marca)
		  ```
		- Cada herramienta alimenta a la siguiente. El cliente que entra por ChinaRadar puede acabar usando todo el ecosistema.
