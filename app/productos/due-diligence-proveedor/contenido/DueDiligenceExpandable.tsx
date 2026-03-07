'use client'

import { useState } from 'react';

interface Section {
  id: number;
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  hoverColor: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 1,
    title: 'Información Básica del Proveedor',
    icon: '📋',
    color: 'indigo',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    hoverColor: 'hover:border-indigo-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Datos de la Empresa</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Nombre empresa (inglés y chino)</li>
            <li>• Contacto principal, cargo, email, teléfono</li>
            <li>• WeChat ID, WhatsApp</li>
            <li>• Dirección fábrica completa (ciudad, provincia, código postal)</li>
            <li>• Website oficial, Alibaba Store, Alibaba ID</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>💡 Por qué es importante:</strong> Verificar que existe información de contacto completa y profesional. Red flag si solo tienen Gmail/Yahoo o datos incompletos.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Verificación Legal y Registros',
    icon: '⚖️',
    color: 'purple',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:border-purple-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Documentos Legales Requeridos</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>✓ Business License (营业执照) - documento fundamental</li>
            <li>✓ Export License (si requerido por producto)</li>
            <li>✓ Tax Registration (registro impuestos)</li>
            <li>✓ Bank Account Info (verificar cuenta bancaria)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Verificación Online</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Buscar empresa en <strong>China National Enterprise Credit Information</strong> (http://www.gsxt.gov.cn)</li>
            <li>• Verificar status: Active / Inactive / Suspended</li>
            <li>• Alibaba verification: Gold Supplier, años en plataforma, Trade Assurance</li>
            <li>• Buscar reviews en Baidu.com</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>⚠️ Red flags:</strong> No proporcionan Business License, empresa muy reciente (&lt;2 años), no aparecen en registros oficiales, Alibaba account nuevo (&lt;1 año).</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Capacidad de Producción e Infraestructura',
    icon: '🏭',
    color: 'blue',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:border-blue-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Tipo de Empresa</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li><strong>✅ Fabricante (Factory)</strong> - Preferido</li>
            <li><strong>⚠️ Trading Company</strong> - Revendedor (mayor riesgo)</li>
            <li><strong>⚡ Fabricante + Trading</strong> - Híbrido (verificar bien)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Instalaciones y Capacidad</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Tamaño fábrica (m²), número trabajadores, turnos</li>
            <li>• Departamentos: almacén, líneas producción, QC, oficinas</li>
            <li>• Maquinaria principal y edad del equipo</li>
            <li>• <strong>Capacidad mensual vs tu pedido</strong></li>
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>💡 Ideal:</strong> Tu pedido = 10-30% de su capacidad mensual. Red flag si es &lt;5% (muy pequeño para ellos) o &gt;50% (demasiado dependiente de ti).</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Certificaciones y Cumplimiento',
    icon: '🎓',
    color: 'teal',
    borderColor: 'border-teal-200',
    bgColor: 'bg-teal-50',
    hoverColor: 'hover:border-teal-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Certificaciones de Sistema</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• ISO 9001 (Quality Management)</li>
            <li>• ISO 14001 (Environmental)</li>
            <li>• BSCI (Social Compliance)</li>
            <li>• Sedex, SA8000, WRAP (según industria)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Certificaciones de Producto</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• CE (Europa), RoHS, REACH</li>
            <li>• FDA (USA - Food/Medical), FCC (Electronics), UL</li>
            <li>• CCC (China Compulsory)</li>
            <li>• Test reports: SGS, Bureau Veritas, Intertek</li>
          </ul>
        </div>
        <div className="bg-teal-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>✅ Compliance:</strong> Verificar contratos laborales, salarios legales, no trabajo infantil, condiciones seguridad, permisos ambientales.</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Experiencia e Historial',
    icon: '📊',
    color: 'indigo',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    hoverColor: 'hover:border-indigo-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Experiencia en la Industria</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Años en el negocio (idealmente &gt;5 años)</li>
            <li>• Años produciendo tu producto específico</li>
            <li>• Productos principales (top 3)</li>
            <li>• ¿Tu producto es su especialidad?</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Experiencia Exportación</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Años exportando y volumen anual</li>
            <li>• % ventas que son exportación</li>
            <li>• Principales mercados (USA, Europa, etc.)</li>
            <li>• ¿Conocen regulaciones de tu país?</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Referencias de Clientes</h4>
          <p className="text-sm text-gray-700 mb-2">Solicitar mínimo 3 referencias verificables:</p>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Nombre/empresa, país, contacto</li>
            <li>• Producto y años trabajando juntos</li>
            <li>• <strong>Contactar referencias personalmente</strong> (no confiar solo en cartas)</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>🔍 Verificación:</strong> Referencias que responden rápido y positivamente = buena señal. No proporcionan referencias o no responden = red flag.</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'Comunicación y Servicio',
    icon: '💬',
    color: 'purple',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:border-purple-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Calidad de Comunicación</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Idiomas: Inglés (nivel), español, otros</li>
            <li>• Medios: Alibaba, Email, WhatsApp, WeChat, Zoom</li>
            <li>• <strong>Tiempo respuesta:</strong> Primera cotización, preguntas, durante producción</li>
            <li>• Calidad respuestas: Completas / Básicas / Confusas / Evasivas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Proactividad</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>✅ Sugieren mejoras al producto</li>
            <li>✅ Anticipan problemas potenciales</li>
            <li>⚠️ Solo responden lo preguntado</li>
            <li>❌ Poco comunicativos o evasivos</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Servicio Post-Venta</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Política garantía (duración)</li>
            <li>• Reemplazo unidades defectuosas, refunds</li>
            <li>• Partes de repuesto, soporte técnico</li>
            <li>• Asistencia con reclamos clientes finales</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>💡 Test:</strong> Haz preguntas técnicas complejas. Respuestas rápidas y detalladas = buen equipo. Demoras o respuestas vagas = posible trading company sin conocimiento.</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: 'Precio y Términos Comerciales',
    icon: '💵',
    color: 'emerald',
    borderColor: 'border-emerald-200',
    bgColor: 'bg-emerald-50',
    hoverColor: 'hover:border-emerald-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Competitividad de Precio</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Comparar cotización con 3-5 proveedores</li>
            <li>• <strong>Ranking:</strong> Más barato / Medio / Más caro</li>
            <li>⚠️ El más barato puede ser red flag (calidad inferior, scam)</li>
            <li>✅ Rango medio = ideal (balance precio/calidad)</li>
            <li>• Más caro justificado por: certificaciones, calidad superior, servicio</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">MOQ (Minimum Order Quantity)</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• MOQ estándar vs MOQ negociado</li>
            <li>• ¿Es razonable para tu negocio?</li>
            <li>• ¿Flexibilidad para orden inicial pequeña?</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Términos de Pago</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• <strong>Estándar:</strong> 30% depósito + 70% antes de embarque</li>
            <li>✅ Trade Assurance (Alibaba) - protección compradores</li>
            <li>✅ Letter of Credit (L/C) - para órdenes grandes</li>
            <li>✅ Bank Transfer (T/T) - estándar industria</li>
            <li>⚠️ PayPal solo para muestras (fees altos)</li>
            <li>❌ Western Union para pedidos grandes = RED FLAG</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Plazos de Producción</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Muestras: típico 5-7 días</li>
            <li>• Primera orden: 15-30 días (según producto)</li>
            <li>• Órdenes repetidas: 10-20 días</li>
            <li>• Considerar temporada alta (más lento) vs baja</li>
          </ul>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>🎯 Balance ideal:</strong> Precio competitivo (no el más barato), MOQ razonable, términos protegidos (Trade Assurance), plazos realistas.</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: 'Control de Calidad',
    icon: '✅',
    color: 'blue',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:border-blue-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Sistema QC Interno</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• ¿Tienen departamento QC dedicado?</li>
            <li>• Número inspectores QC (ratio: 1 por cada 50-100 operarios)</li>
            <li>• <strong>Proceso QC completo:</strong></li>
            <li className="ml-4">✓ IQC - Inspección materias primas</li>
            <li className="ml-4">✓ IPQC - Inspección durante producción</li>
            <li className="ml-4">✓ FQC - Inspección producto final</li>
            <li className="ml-4">✓ OQC - Inspección pre-embarque</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Documentación QC</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• QC reports para cada lote producido</li>
            <li>• Test reports de laboratorio</li>
            <li>• Fotos producción (si solicitas)</li>
            <li>• Video producción en tiempo real</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">AQL (Acceptable Quality Level)</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• <strong>Críticos:</strong> 0% (defectos graves = inaceptable)</li>
            <li>• <strong>Mayores:</strong> &lt;2.5% (defectos funcionales)</li>
            <li>• <strong>Menores:</strong> &lt;4% (defectos estéticos)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Third-Party Inspection</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>✅ Permiten inspección externa (SGS, Bureau Veritas, Intertek)</li>
            <li>✅ Cooperan con inspectores</li>
            <li>❌ Se niegan a inspección = RED FLAG grave</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>🎯 Recomendación:</strong> SIEMPRE contrata third-party inspection para primera orden. Costo ~$200-300 previene problemas de $10,000+.</p>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: 'Customización y Flexibilidad',
    icon: '🎨',
    color: 'pink',
    borderColor: 'border-pink-200',
    bgColor: 'bg-pink-50',
    hoverColor: 'hover:border-pink-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Capacidad de Customización</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Logo (screen print, laser, embroidery)</li>
            <li>• Colores custom (Pantone)</li>
            <li>• Dimensiones modificadas</li>
            <li>• Materiales alternativos</li>
            <li>• Packaging custom (cajas, etiquetas)</li>
            <li>• Manuales en tu idioma</li>
            <li>• <strong>OEM</strong> (Private Label) - tu marca</li>
            <li>• <strong>ODM</strong> (Original Design) - diseño propio proveedor adaptado</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Costos Customización</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• MOQ para custom: típico 500-1000 unidades</li>
            <li>• Costo setup/tooling: $100-5000 (según complejidad)</li>
            <li>• Lead time adicional: 5-10 días</li>
            <li>• ¿Tooling es tuyo o del proveedor?</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Política de Muestras</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Costo: $20-100 por muestra (según producto)</li>
            <li>• Shipping: $30-80 (DHL/FedEx)</li>
            <li>• Lead time: 3-7 días</li>
            <li>• <strong>¿Refundable si haces pedido grande?</strong> (muchos sí)</li>
            <li>• Evaluar: calidad, coincide con descripción, listo para producción</li>
          </ul>
        </div>
        <div className="bg-pink-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>💡 Pro tip:</strong> SIEMPRE pide muestra antes de orden grande. Si se niegan o ponen excusas = red flag. Muestra debe ser idéntica a producción final.</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: 'Estabilidad Financiera',
    icon: '💼',
    color: 'yellow',
    borderColor: 'border-yellow-200',
    bgColor: 'bg-yellow-50',
    hoverColor: 'hover:border-yellow-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Indicadores Financieros</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Ventas anuales aproximadas</li>
            <li>• Tendencia últimos 3 años: Creciendo / Estable / Decreciendo</li>
            <li>• <strong>Inversiones recientes:</strong></li>
            <li className="ml-4">✓ Maquinaria nueva</li>
            <li className="ml-4">✓ Ampliación planta</li>
            <li className="ml-4">✓ Certificaciones nuevas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-red-700">⚠️ Red Flags Financieros CRÍTICOS</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>❌ Piden pago 100% adelantado (si no te conocen)</li>
            <li>❌ Insisten Western Union únicamente</li>
            <li>❌ <strong>Piden pagos a cuentas personales</strong> (SCAM probable)</li>
            <li>❌ Precios 30-40% más baratos que mercado (too good to be true)</li>
            <li>❌ Cambios frecuentes contacto bancario</li>
            <li>❌ Problemas con pagos previos reportados</li>
            <li>❌ Quejas online sobre scams</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg border-2 border-yellow-400">
          <p className="text-sm text-gray-900 font-semibold mb-1">🚨 NUNCA:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Pagar 100% adelantado a proveedor desconocido</li>
            <li>• Usar Western Union/MoneyGram para pedidos grandes</li>
            <li>• Pagar a cuentas personales (solo cuentas corporativas)</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2"><strong>Usa Trade Assurance (Alibaba)</strong> para protección si son nuevos.</p>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: 'Visita a Fábrica',
    icon: '🏭',
    color: 'indigo',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    hoverColor: 'hover:border-indigo-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Opciones de Verificación</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>✅ <strong>Visita personal</strong> (ideal) - ver operación real</li>
            <li>✅ <strong>Video tour en vivo</strong> (Zoom/WeChat) - segunda mejor opción</li>
            <li>✅ <strong>Third-party audit</strong> (SGS, BV, Alibaba) - verificación profesional</li>
            <li>⚠️ Fotos/videos enviados por proveedor (pueden ser fake)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Qué Observar en Visita</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li><strong>Primera impresión:</strong></li>
            <li>• Limpieza: instalaciones ordenadas y limpias</li>
            <li>• Organización: flujo producción lógico</li>
            <li>• Equipos: modernos y bien mantenidos</li>
            <li className="mt-2"><strong>Personal:</strong></li>
            <li>• Uniforms (profesionalismo)</li>
            <li>• Capacitación visible (procedimientos claros)</li>
            <li>• Moral empleados (ambiente trabajo)</li>
            <li>• Seguridad laboral (equipo protección, señalización)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Verificaciones Críticas</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>✓ ¿Coincide con fotos/descripciones?</li>
            <li>✓ ¿Están produciendo lo que dicen?</li>
            <li>✓ ¿Tamaño real = tamaño declarado?</li>
            <li>✓ ¿Número empleados = lo reportado?</li>
            <li>✓ ¿Maquinaria en operación?</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700"><strong>💡 Tip:</strong> Si visitas, llega sin avisar o con poco aviso (2-3 horas). Proveedores preparados pueden "maquillar" instalaciones si saben con semanas de anticipación.</p>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: 'Evaluación de Riesgos',
    icon: '⚠️',
    color: 'red',
    borderColor: 'border-red-200',
    bgColor: 'bg-red-50',
    hoverColor: 'hover:border-red-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-red-700">🚨 Red Flags Críticos</h4>
          <p className="text-sm text-gray-600 mb-3">Marca todos los que apliquen. <strong>&gt;3 red flags = alto riesgo.</strong></p>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>❌ Empresa reciente (&lt;2 años operando)</li>
            <li>❌ Sin business license verificable</li>
            <li>❌ Trading company haciéndose pasar por fabricante</li>
            <li>❌ Precio sospechosamente bajo (&gt;30% más barato)</li>
            <li>❌ Piden pago 100% adelantado</li>
            <li>❌ Solo aceptan Western Union / MoneyGram</li>
            <li>❌ Email personal (Gmail/Yahoo) en vez de corporativo</li>
            <li>❌ No permiten third-party inspection</li>
            <li>❌ No proporcionan referencias verificables</li>
            <li>❌ Comunicación mala o evasiva</li>
            <li>❌ Cambios frecuentes en términos acordados</li>
            <li>❌ Presionan para pagar rápido sin due diligence</li>
            <li>❌ No tienen muestras disponibles</li>
            <li>❌ Alibaba account nuevo (&lt;1 año)</li>
            <li>❌ Sin Trade Assurance disponible</li>
            <li>❌ Reviews negativas online</li>
            <li>❌ No responden preguntas técnicas</li>
            <li>❌ Prometen lo imposible (lead time irrealista)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">✅ Estrategias Mitigación Riesgo</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Usar Trade Assurance (Alibaba) - protección pago</li>
            <li>• Letter of Credit (L/C) - para órdenes grandes</li>
            <li>• Third-party inspection OBLIGATORIA</li>
            <li>• Empezar con orden test pequeña (20-30% capacidad)</li>
            <li>• Visitar fábrica antes de orden grande</li>
            <li>• Exigir muestras pre-producción</li>
            <li>• Referencias verificadas positivas</li>
            <li>• Contrato formal firmado (ambos idiomas)</li>
            <li>• Seguro de crédito exportación</li>
          </ul>
        </div>
        <div className="bg-red-50 p-3 rounded-lg border-2 border-red-300">
          <p className="text-sm text-gray-900"><strong>⚠️ Nivel de Riesgo:</strong></p>
          <ul className="text-sm text-gray-700 mt-2 space-y-1">
            <li>• <strong>0-2 red flags:</strong> Riesgo bajo (proceder con precauciones normales)</li>
            <li>• <strong>3-5 red flags:</strong> Riesgo medio (orden test pequeña obligatoria)</li>
            <li>• <strong>6+ red flags:</strong> Riesgo alto (❌ NO PROCEDER, buscar alternativas)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: 'Scorecard Final (0-100 pts)',
    icon: '📈',
    color: 'emerald',
    borderColor: 'border-emerald-200',
    bgColor: 'bg-emerald-50',
    hoverColor: 'hover:border-emerald-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Sistema de Puntuación</h4>
          <p className="text-sm text-gray-700 mb-3">Evalúa cada categoría con score 1-5 (1=Muy Mal, 5=Excelente). El Excel calcula automáticamente el score ponderado total.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-100">
                <th className="text-left p-2 font-bold">Categoría</th>
                <th className="text-center p-2 font-bold">Peso</th>
                <th className="text-center p-2 font-bold">Tu Score (1-5)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">Legitimidad Legal</td>
                <td className="text-center p-2">10%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Capacidad Producción</td>
                <td className="text-center p-2">10%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2"><strong>Calidad Producto</strong></td>
                <td className="text-center p-2"><strong>20%</strong></td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Precio Competitivo</td>
                <td className="text-center p-2">15%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Comunicación</td>
                <td className="text-center p-2">10%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Experiencia/Referencias</td>
                <td className="text-center p-2">10%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Términos Comerciales</td>
                <td className="text-center p-2">10%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Control Calidad</td>
                <td className="text-center p-2">10%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Flexibilidad</td>
                <td className="text-center p-2">5%</td>
                <td className="text-center p-2 bg-yellow-50">___</td>
              </tr>
              <tr className="border-t border-t-2 border-emerald-300 bg-emerald-50">
                <td className="p-2 font-bold">TOTAL</td>
                <td className="text-center p-2 font-bold">100%</td>
                <td className="text-center p-2 font-bold bg-emerald-100">__ / 100 pts</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Interpretación del Score</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-green-100 border-2 border-green-300 rounded">
              <span className="font-bold text-green-700">81-100 pts</span>
              <span className="text-sm text-green-700">✅ Excelente - Proceder con confianza</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-yellow-100 border-2 border-yellow-300 rounded">
              <span className="font-bold text-yellow-700">66-80 pts</span>
              <span className="text-sm text-yellow-700">⚡ Aceptable - Precauciones normales</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-orange-100 border-2 border-orange-300 rounded">
              <span className="font-bold text-orange-700">51-65 pts</span>
              <span className="text-sm text-orange-700">⚠️ Alto Riesgo - Orden test obligatoria</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-red-100 border-2 border-red-300 rounded">
              <span className="font-bold text-red-700">0-50 pts</span>
              <span className="text-sm text-red-700">❌ No Recomendado - Buscar alternativas</span>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg border-2 border-emerald-300">
          <p className="text-sm text-gray-900"><strong>💡 Nota importante:</strong> El score es una guía, no una decisión automática. Un proveedor con 75 pts pero excelente comunicación puede ser mejor que uno con 82 pts pero comunicación difícil. Usa el score + tu criterio personal.</p>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: 'Decisión Final y Plan de Acción',
    icon: '✅',
    color: 'indigo',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    hoverColor: 'hover:border-indigo-400',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Comparación Multi-Proveedor</h4>
          <p className="text-sm text-gray-700 mb-3">Si evaluaste múltiples proveedores, usa la hoja "Comparativa" del Excel para verlos lado a lado:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="p-2 text-left">Proveedor</th>
                  <th className="p-2 text-center">Score</th>
                  <th className="p-2 text-center">Precio</th>
                  <th className="p-2 text-center">Lead Time</th>
                  <th className="p-2 text-left">Top Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Proveedor A</td>
                  <td className="p-2 text-center bg-green-50">85</td>
                  <td className="p-2 text-center">$12.50</td>
                  <td className="p-2 text-center">20 días</td>
                  <td className="p-2 text-xs">Mejor calidad, certificaciones</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Proveedor B</td>
                  <td className="p-2 text-center bg-yellow-50">72</td>
                  <td className="p-2 text-center">$10.80</td>
                  <td className="p-2 text-center">25 días</td>
                  <td className="p-2 text-xs">Precio competitivo</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Proveedor C</td>
                  <td className="p-2 text-center bg-orange-50">58</td>
                  <td className="p-2 text-center">$9.20</td>
                  <td className="p-2 text-center">30 días</td>
                  <td className="p-2 text-xs">Más barato</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Recomendación Final</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2 p-3 bg-green-50 border-2 border-green-300 rounded">
              <span className="text-xl flex-shrink-0">✅</span>
              <div>
                <p className="font-bold text-green-700">PROCEDER</p>
                <p className="text-sm text-gray-700">Proveedor aprobado. Score &gt;80, sin red flags críticos, referencias positivas.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-yellow-50 border-2 border-yellow-300 rounded">
              <span className="text-xl flex-shrink-0">⚠️</span>
              <div>
                <p className="font-bold text-yellow-700">PROCEDER CON PRECAUCIÓN</p>
                <p className="text-sm text-gray-700">Score 66-80. Empezar con orden test pequeña (20-30% MOQ) + third-party inspection obligatoria.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-red-50 border-2 border-red-300 rounded">
              <span className="text-xl flex-shrink-0">❌</span>
              <div>
                <p className="font-bold text-red-700">NO PROCEDER</p>
                <p className="text-sm text-gray-700">Score &lt;66 o red flags críticos detectados. Buscar proveedores alternativos.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Plan de Acción (Si Procedes)</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li><strong>Paso 1:</strong> Solicitar muestra final (si no la tienes)</li>
            <li><strong>Paso 2:</strong> Firmar contrato formal (inglés + chino)</li>
            <li><strong>Paso 3:</strong> Orden inicial: 20-30% de su capacidad mensual</li>
            <li><strong>Paso 4:</strong> Pago: 30% depósito (Trade Assurance si posible)</li>
            <li><strong>Paso 5:</strong> Contratar third-party inspection pre-embarque</li>
            <li><strong>Paso 6:</strong> Balance 70% después inspección aprobada</li>
            <li><strong>Paso 7:</strong> Revisar experiencia antes de segunda orden</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg border-2 border-indigo-300">
          <p className="text-sm text-gray-900"><strong>🎯 Próxima revisión:</strong> Re-evaluar proveedor cada 6-12 meses o después de 3 órdenes. Monitorear: calidad consistente, plazos, comunicación, estabilidad precios.</p>
        </div>
      </div>
    )
  }
];

export default function DueDiligenceExpandable() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string, border: string }> = {
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-400' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-400' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-400' },
      teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-400' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-400' },
      pink: { bg: 'bg-pink-600', text: 'text-pink-600', border: 'border-pink-400' },
      yellow: { bg: 'bg-yellow-600', text: 'text-yellow-600', border: 'border-yellow-400' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-400' },
    };
    return colorMap[color] || colorMap.indigo;
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const isExpanded = expandedId === section.id;
        const colors = getColorClasses(section.color);

        return (
          <div
            key={section.id}
            className={`bg-white rounded-xl border-2 ${section.borderColor} ${section.hoverColor} transition-all ${
              isExpanded ? 'shadow-lg' : 'shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 ${colors.bg} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {section.id}
                </div>
                <span className="text-2xl flex-shrink-0">{section.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{section.title}</h3>
                  {!isExpanded && (
                    <p className="text-sm text-gray-500 mt-0.5">Click para ver detalles completos</p>
                  )}
                </div>
              </div>
              <div className={`text-2xl ${colors.text} transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 animate-fade-in">
                <div className={`border-t-2 ${section.borderColor} pt-4`}>
                  {section.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
