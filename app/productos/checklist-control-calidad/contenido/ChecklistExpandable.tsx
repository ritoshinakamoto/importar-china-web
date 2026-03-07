'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ChecklistPart {
  letter: string;
  title: string;
  icon: string;
  content: string;
}

const checklistParts: ChecklistPart[] = [
  {
    letter: 'A',
    title: 'Información General',
    icon: '📋',
    content: `**Inspector:** ______________________
**Fecha inspección:** ___/___/______
**Hora inicio:** ___:___ | **Hora fin:** ___:___
**Ubicación:** ______________________

**Orden de compra:** PO#____________
**Proveedor:** ______________________
**Producto:** ______________________
**Cantidad total:** _______ unidades
**Cantidad inspeccionada:** _______ unidades (típico: 100% visual + 10-20% funcional)

**Persona contacto fábrica:** ______________________
**Teléfono:** ______________________`
  },
  {
    letter: 'B',
    title: 'Verificación Documentación',
    icon: '📄',
    content: `Antes de empezar inspección física, verifica:

☐ Proforma Invoice coincide con PO
☐ Packing List completa y correcta
☐ Especificaciones técnicas disponibles
☐ Muestra aprobada disponible para comparación
☐ Ficha técnica producto disponible
☐ Certificados (CE, RoHS, test reports, etc.) listos

**Notas documentación:**
_______________________________________________________________`
  },
  {
    letter: 'C',
    title: 'Verificación Cantidades',
    icon: '🔢',
    content: `**Tabla de verificación:**

CONCEPTO | ESPERADO | REAL | ✓/✗ | NOTAS
---------|----------|------|-----|-------
Total cajas/cartones | | | |
Unidades por caja | | | |
Total unidades | | | |
Unidades extras (overproduction) | | | |
Unidades defectuosas separadas | | | |

**Verificación aleatoria:** Abrir ______ cajas al azar (mínimo 5-10%) y contar unidades reales.

**Discrepancias encontradas:**
_______________________________________________________________`
  },
  {
    letter: 'D',
    title: 'Inspección Visual Producto',
    icon: '👁️',
    content: `**D1: Comparación con Muestra Aprobada**
☐ Producto coincide 100% con muestra aprobada
☐ Materiales son idénticos
☐ Colores son idénticos (usar muestra como referencia)
☐ Dimensiones son idénticas
☐ Peso es similar

**D2: Aspecto General**

Acabado superficial:
☐ Sin rayones ☐ Sin marcas ☐ Sin manchas ☐ Sin decoloración
☐ Brillo/mate según spec

Construcción/Ensamblaje:
☐ Todas las piezas presentes ☐ Ensamblaje firme (sin partes sueltas)
☐ Uniones bien hechas ☐ Tornillos/cierres seguros
☐ Sin bordes afilados

Materiales:
☐ Material correcto (plástico/metal/tela según spec)
☐ Grosor adecuado ☐ Calidad material conforme ☐ Sin impurezas visibles

**Defectos comunes:**
• Rayones/arañazos: _____ unidades (_____%)
• Manchas: _____ unidades (_____%)
• Piezas faltantes: _____ unidades (_____%)
• Ensamblaje defectuoso: _____ unidades (_____%)
• Color incorrecto: _____ unidades (_____%)

**Fotos tomadas:** _____ (adjuntar al reporte)`
  },
  {
    letter: 'E',
    title: 'Mediciones y Dimensiones',
    icon: '📏',
    content: `**Herramientas usadas:**
☐ Cinta métrica ☐ Calibrador/Vernier ☐ Balanza ☐ Goniómetro (ángulos)

**Tabla de mediciones (comparar vs. especificación):**

DIMENSIÓN | ESPECIFICADO | MEDIDO | TOLERANCIA | ✓/✗
----------|--------------|--------|------------|-----
Largo (mm) | | | ±__mm |
Ancho (mm) | | | ±__mm |
Alto (mm) | | | ±__mm |
Diámetro (mm) | | | ±__mm |
Peso (g) | | | ±__g |
Grosor (mm) | | | ±__mm |

**Muestras medidas:** _____ unidades (mínimo 10 unidades aleatorias)

**Desviaciones encontradas:**
_______________________________________________________________`
  },
  {
    letter: 'F',
    title: 'Pruebas Funcionales',
    icon: '⚙️',
    content: `**F1: Funcionalidad Básica**

FUNCIÓN | DESCRIPCIÓN TEST | RESULTADO | ✓/✗
--------|------------------|-----------|-----
Función 1 | | Funciona correctamente |
Función 2 | | Funciona correctamente |
Función 3 | | Funciona correctamente |
Función 4 | | Funciona correctamente |

**Unidades testeadas:** _____ (típico: 10-20% del lote)

**F2: Tests Específicos (según producto)**

Electrónica:
☐ Enciende correctamente ☐ Todas las funciones operan
☐ Botones responden ☐ Pantalla funciona
☐ Conectividad (USB, Bluetooth, WiFi) ☐ Duración batería
☐ Carga correctamente ☐ Voltaje correcto

Textiles/Ropa:
☐ Costuras bien hechas ☐ Sin hilos sueltos
☐ Talla correcta ☐ Etiquetas correctas
☐ Color uniforme ☐ Estampado/bordado OK

Muebles:
☐ Todas las piezas incluidas ☐ Herrajes suficientes
☐ Instrucciones montaje ☐ Ensamblaje posible
☐ Estabilidad ☐ Acabado correcto

**Fallas funcionales encontradas:**
_______________________________________________________________`
  },
  {
    letter: 'G',
    title: 'Embalaje y Packaging',
    icon: '📦',
    content: `**G1: Embalaje Individual**
☐ Producto protegido adecuadamente
☐ Material protección suficiente (burbuja, foam, etc.)
☐ Bolsa plástico (si aplica) ☐ Caja individual (si aplica)
☐ Manual/instrucciones incluido ☐ Accesorios incluidos (todos)
☐ Etiquetas correctas ☐ Código barras legible
☐ Información producto correcta

**Diseño caja individual:**
☐ Coincide con diseño aprobado ☐ Calidad impresión buena
☐ Colores correctos ☐ Textos correctos (idioma, info)
☐ Logo en posición correcta ☐ Código barras presente

**G2: Embalaje Master (Caja Cartón)**
☐ Cartón resistente (grosor adecuado) ☐ Cajas sin daños
☐ Cantidad unidades por caja correcta
☐ Relleno suficiente (no se mueven productos)
☐ Cinta sellado reforzado ☐ Etiqueta shipping correcta
☐ Marca "este lado arriba" (si aplica) ☐ Marca frágil (si aplica)

**Test resistencia caja:**
☐ Drop test 1 metro (dejar caer caja) - sin daños internos
☐ Presión superior (apilar 3-4 cajas) - no se aplasta

**Dimensiones caja master:**
Largo: _____ cm | Ancho: _____ cm | Alto: _____ cm | Peso: _____ kg

**Marcas shipping:**
☐ Nombre destinatario correcto ☐ Puerto destino correcto
☐ "Made in China" visible`
  },
  {
    letter: 'H',
    title: 'Etiquetado y Certificaciones',
    icon: '🏷️',
    content: `**H1: Etiquetas Producto**
☐ Etiqueta CE (si aplica Europa)
☐ Etiqueta importador/distribuidor
☐ Código barras (EAN/UPC)
☐ Información producto (nombre, modelo)
☐ Advertencias seguridad
☐ Instrucciones uso
☐ Idioma correcto
☐ Tamaño letra legible

**Verificar texto etiquetas:**
☐ Sin errores ortográficos
☐ Traducción correcta
☐ Información técnica correcta

**H2: Certificaciones y Documentos**
☐ Certificado CE (si aplica)
☐ Test report RoHS
☐ Test report REACH
☐ FDA (si aplica USA/alimentos)
☐ NOM (si aplica México)
☐ Test reports seguridad producto
☐ Garantía incluida (si aplica)

**Documentos faltantes o incorrectos:**
_______________________________________________________________`
  },
  {
    letter: 'I',
    title: 'Muestreo y Nivel Inspección',
    icon: '🎯',
    content: `**Tamaño lote:** _______ unidades

**Nivel inspección:** (usar tabla AQL estándar)
☐ Nivel I - General
☐ Nivel II - Estricto
☐ Nivel III - Reducido

**Tamaño muestra:**
• Visual (100%): _______ unidades
• Mediciones: _______ unidades
• Funcional: _______ unidades

**AQL (Acceptable Quality Limit):**
• Defectos críticos: 0% (ninguno aceptable)
• Defectos mayores: ___% (típico 2.5%)
• Defectos menores: ___% (típico 4.0%)

**Definiciones:**
• CRÍTICO: Producto no funcional, peligroso, no vendible
• MAYOR: Producto funciona pero calidad visiblemente inferior
• MENOR: Defecto cosmético pequeño, no afecta venta`
  },
  {
    letter: 'J',
    title: 'Resumen Defectos',
    icon: '⚠️',
    content: `**Tabla de defectos encontrados:**

TIPO DEFECTO | CANTIDAD | % DEL LOTE | CRÍTICO/MAYOR/MENOR
-------------|----------|------------|---------------------
             |          |            |
             |          |            |
             |          |            |
             |          |            |

**Defectos críticos encontrados:** _____ (CUALQUIER defecto crítico = FAIL)
**Tasa defectos totales:** _____%

**Fotos de defectos:** _____ fotos adjuntas

**Descripción defectos principales:**
_______________________________________________________________
_______________________________________________________________`
  },
  {
    letter: 'K',
    title: 'Resultado Inspección',
    icon: '✅',
    content: `**VEREDICTO FINAL:**

☐ ✅ PASS - Productos aprobados, OK para embarcar
☐ ⚠️ PENDING - Defectos menores, requiere corrección antes embarque
☐ ❌ FAIL - Defectos mayores/críticos, NO embarcar

**Si FAIL o PENDING, acciones correctivas requeridas:**
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

**Deadline correcciones:** ___/___/______
**Re-inspección necesaria:** SÍ / NO
**Fecha re-inspección:** ___/___/______

**Liberación pago 70% balance:** SÍ / NO / PENDIENTE CORRECCIONES`
  },
  {
    letter: 'L',
    title: 'Recomendaciones',
    icon: '💬',
    content: `**Puntos fuertes de este lote:**
_______________________________________________________________
_______________________________________________________________

**Áreas de mejora proveedor:**
_______________________________________________________________
_______________________________________________________________

**Recomendaciones para futuras órdenes:**
_______________________________________________________________
_______________________________________________________________

**Otros comentarios:**
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________`
  },
  {
    letter: 'M',
    title: 'Fotos y Evidencias',
    icon: '📸',
    content: `**Fotos adjuntas al reporte:**
1. Vista general productos
2. Detalle defectos (si hay)
3. Embalaje individual
4. Embalaje master
5. Etiquetas
6. Certificados
7. Test funcional
8. Mediciones
9. Comparación con muestra
10. Otras: _______________

**Total fotos:** _____ (mínimo 20-30 fotos)

**Videos (si aplica):** _____ videos

**FIRMAS:**

Inspector:
Nombre: ______________________ Firma: ______________________ Fecha: ___/___/______

Representante fábrica:
Nombre: ______________________ Firma: ______________________ Fecha: ___/___/______

Importador (si presente):
Nombre: ______________________ Firma: ______________________ Fecha: ___/___/______`
  }
];

interface PartCardProps {
  part: ChecklistPart;
  isExpanded: boolean;
  onToggle: () => void;
}

function PartCard({ part, isExpanded, onToggle }: PartCardProps) {
  return (
    <div className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
      isExpanded ? 'border-emerald-500 shadow-lg' : 'border-emerald-200 hover:border-emerald-400 hover:shadow-md'
    }`}>
      <button
        onClick={onToggle}
        className={`w-full p-5 text-left transition-all ${
          isExpanded ? 'bg-emerald-50' : 'hover:bg-emerald-50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {part.letter}
            </div>
            <span className="text-2xl">{part.icon}</span>
            <div>
              <h4 className="font-bold text-gray-900">{part.title}</h4>
              {!isExpanded && (
                <p className="text-xs text-gray-500 mt-1">Click para ver checklist completo</p>
              )}
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="p-6 bg-white border-t-2 border-emerald-200">
          <div className="px-4 py-4 bg-gray-50 rounded border border-gray-200">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
              {part.content}
            </pre>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(part.content);
              }}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              📋 Copiar Sección
            </button>
            <button
              onClick={onToggle}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChecklistExpandable() {
  const [expandedLetter, setExpandedLetter] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {checklistParts.map(part => (
        <PartCard
          key={part.letter}
          part={part}
          isExpanded={expandedLetter === part.letter}
          onToggle={() => setExpandedLetter(expandedLetter === part.letter ? null : part.letter)}
        />
      ))}
    </div>
  );
}
