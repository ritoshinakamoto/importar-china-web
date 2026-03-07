import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default async function CalculadoraContent() {
  const contentPath = path.join(process.cwd(), 'content', 'file_98---a6dfe157-6e91-4282-846e-7ccaddbc65c1.md');
  const rawContent = fs.readFileSync(contentPath, 'utf-8');
  
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 animate-fade-in">
            <span className="text-lg">📊</span>
            <span>Calculadora de Costos</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-[0.95] tracking-tight animate-fade-in-delay-1">
            Calculadora<br/>
            Completa de<br/>
            <span className="text-blue-100">Costos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl leading-relaxed animate-fade-in-delay-2">
            Calcula con precisión todos los costos de tu importación desde China. 
            Incluye FOB, transporte, aranceles, IVA y márgenes.
          </p>
        </div>
      </div>

      {/* Download CTA - Top */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-1">Descarga Instantánea</h2>
              <p className="text-gray-600 text-sm">Fórmulas Excel automatizadas</p>
            </div>
            <a
              href="/products/calculadora-costos-importacion.xlsx"
              download
              className="group relative bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">📊</span>
                <span>
                  <div className="text-left">
                    <div className="text-sm">Descargar Excel</div>
                    <div className="text-xs text-blue-100 font-normal">7.6 KB</div>
                  </div>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Intro */}
        <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Parte del Import Starter Kit</strong> — 
            Este documento contiene las instrucciones para construir la calculadora en Excel/Google Sheets.
            También puedes solicitar el archivo <code className="px-2 py-1 bg-white rounded text-sm">.xlsx</code> pre-construido.
          </p>
        </div>

        {/* HOJA 1: CALCULADORA PRINCIPAL */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Hoja 1: Calculadora Principal</h2>
            <p className="text-gray-600">Estructura completa del archivo Excel con todas las secciones y fórmulas</p>
          </div>

          {/* SECCIÓN A */}
          <div className="mb-10 bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 px-6 py-4 border-b border-teal-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-xl">🔹</span>
                Sección A: Información Básica
                <span className="text-sm font-normal text-gray-600 ml-2">(Celdas A1-B10)</span>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Campo</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Celda</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Producto</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B2</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Texto</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Nombre del producto</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">País Origen</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B3</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lista</td>
                    <td className="px-6 py-4 text-sm text-gray-600">China (default)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Puerto Origen</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B4</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lista</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Shanghai, Shenzhen, Ningbo, Qingdao</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">País Destino</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B5</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lista</td>
                    <td className="px-6 py-4 text-sm text-gray-600">España, México, Argentina, etc.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Puerto Destino</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B6</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lista</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Valencia, Barcelona, Algeciras, etc.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Moneda</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B7</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lista</td>
                    <td className="px-6 py-4 text-sm text-gray-600">USD, EUR</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tipo de Cambio USD/EUR</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B8</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Número</td>
                    <td className="px-6 py-4 text-sm text-gray-600">0.92 (actualizar según tipo cambio actual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4 bg-teal-50 rounded-lg mt-4 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 ¿Por qué estos datos?</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              La información básica define el <strong>contexto de tu importación</strong>. El tipo de cambio es crítico si vendes en EUR pero compras en USD - 
              una variación del 5% puede destruir tu margen. Actualiza B8 semanalmente usando <a href="https://www.xe.com" target="_blank" rel="noopener" className="text-teal-600 underline">XE.com</a>.
              Los puertos determinan las rutas logísticas: Shanghai → Valencia es la más eficiente para Europa.
            </p>
          </div>

          {/* SECCIÓN B */}
          <div className="mb-10 bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-xl">🔹</span>
                Sección B: Datos del Producto
                <span className="text-sm font-normal text-gray-600 ml-2">(Celdas A12-E20)</span>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Campo</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Celda</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Valor/Fórmula</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Unidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Precio FOB Unitario</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B13</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">USD</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cantidad Unidades</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B14</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">unidades</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Peso por Unidad</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B15</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">kg</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Peso Total</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-100">B16</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">=B14*B15</td>
                    <td className="px-6 py-4 text-sm text-gray-600">kg</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Volumen por Unidad (CBM)</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-50">B17</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">m³</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Volumen Total (CBM)</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-100">B18</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">=B14*B17</td>
                    <td className="px-6 py-4 text-sm text-gray-600">m³</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Valor FOB Total</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono bg-yellow-100">B19</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">=B13*B14</td>
                    <td className="px-6 py-4 text-sm text-gray-600">USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Nota CBM:</strong> Volumen en metros cúbicos = (Largo × Ancho × Alto) / 1,000,000<br/>
                <span className="text-xs text-gray-500">Ejemplo: caja 40×30×25 cm = (40×30×25)/1,000,000 = 0.03 m³</span>
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-blue-50 rounded-lg mt-4 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 ¿Por qué calculamos esto?</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              El <strong>volumen CBM</strong> (metros cúbicos) y el <strong>peso total</strong> son los dos factores que determinan el costo de shipping.
              Las navieras cobran por el MAYOR entre peso volumétrico y peso real. Por eso necesitas ambos datos.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Ejemplo:</strong> Si tu producto es ligero pero voluminoso (ej: almohadas), pagarás por CBM. Si es pesado y compacto (ej: baterías), pagarás por kg.
              La celda B19 (Valor FOB Total) es la base para calcular aranceles e IVA más adelante.
            </p>
          </div>

          {/* SECCIÓN C - Costos Transporte */}
          <div className="mb-10 bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-xl">🚢</span>
                Sección C: Costos de Transporte
                <span className="text-sm font-normal text-gray-600 ml-2">(Celdas A22-E36)</span>
              </h3>
            </div>
            
            {/* C1: LCL */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">C1: Transporte Marítimo LCL (Menos de Contenedor Completo)</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Campo</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Celda</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Valor/Fórmula</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Notas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Método Transporte</td>
                      <td className="px-4 py-3 font-mono bg-yellow-50">B23</td>
                      <td className="px-4 py-3 text-blue-600 font-mono">[LISTA]</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">LCL / FCL 20' / FCL 40' / Aéreo</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Tarifa LCL por CBM</td>
                      <td className="px-4 py-3 font-mono bg-yellow-50">B24</td>
                      <td className="px-4 py-3 text-blue-600 font-mono">[INPUT]</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">USD/m³ (típico: $80-150)</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Costo Freight LCL</td>
                      <td className="px-4 py-3 font-mono bg-yellow-100">B25</td>
                      <td className="px-4 py-3 text-gray-700 font-mono text-xs">=SI(B23="LCL", B18*B24, 0)</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* C2: FCL */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">C2: Transporte Marítimo FCL (Contenedor Completo)</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Campo</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Celda</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Valor/Fórmula</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Capacidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Tarifa Contenedor 20'</td>
                      <td className="px-4 py-3 font-mono bg-yellow-50">B26</td>
                      <td className="px-4 py-3 text-blue-600 font-mono">[INPUT]</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">USD (típico: $1,500-3,000)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Tarifa Contenedor 40'</td>
                      <td className="px-4 py-3 font-mono bg-yellow-50">B27</td>
                      <td className="px-4 py-3 text-blue-600 font-mono">[INPUT]</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">USD (típico: $2,000-4,500)</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Costo Freight FCL</td>
                      <td className="px-4 py-3 font-mono bg-yellow-100">B28</td>
                      <td className="px-4 py-3 text-gray-700 font-mono text-xs">=SI(B23="FCL 20'", B26, SI(...))</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 p-3 bg-green-50 rounded text-xs text-gray-700">
                <strong>Capacidades estándar:</strong> 20' → ~28 m³ / ~22,000 kg • 40' → ~58 m³ / ~27,000 kg
              </div>
            </div>

            {/* C3: Aéreo + C4: Otros */}
            <div className="px-6 py-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">C3: Transporte Aéreo</h4>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-700">Tarifa por kg</span>
                      <span className="font-mono bg-yellow-50 px-2">B29</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-700">Costo Aéreo</span>
                      <span className="font-mono bg-yellow-100 px-2">B30</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">C4: Otros Costos Logística</h4>
                  <div className="text-sm space-y-1 text-xs">
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">THC Origen</span>
                      <span className="font-mono">B31</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Documentación</span>
                      <span className="font-mono">B32</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">THC Destino</span>
                      <span className="font-mono">B33</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Gestión Aduanas</span>
                      <span className="font-mono">B34</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Transporte Interno</span>
                      <span className="font-mono">B35</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">C5: TOTAL SHIPPING</span>
                  <span className="font-mono text-lg bg-white px-4 py-1 rounded font-bold text-blue-600">B36 = Suma(B25:B35)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-green-50 rounded-lg mt-4 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 ¿Por qué tantos costos logísticos?</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              El shipping NO es solo el flete marítimo. Los <strong>costos ocultos</strong> (THC, documentación, gestión aduanas) pueden sumar $500-1,200 adicionales.
              Muchos novatos solo cuentan el freight y luego se sorprenden con la factura final.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong className="text-gray-900">THC (Terminal Handling Charge):</strong> Costo de cargar/descargar contenedor en el puerto.
              </div>
              <div>
                <strong className="text-gray-900">Gestión Aduanas:</strong> Tu agente aduanal procesa la documentación. NO es opcional.
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-3">
              <strong>Tip pro:</strong> Pide cotizaciones "door to door" (puerta a puerta) para evitar sorpresas.
            </p>
          </div>

          {/* SECCIÓN D - Aduanas */}
          <div className="mb-10 bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-4 border-b border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-xl">📋</span>
                Sección D: Costos Aduanales
                <span className="text-sm font-normal text-gray-600 ml-2">(Celdas A38-E48)</span>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Campo</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Celda</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Fórmula/Valor</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Explicación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Valor CIF</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-100">B39</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">=B19+B36</td>
                    <td className="px-6 py-4 text-sm text-gray-600">FOB + Freight + Insurance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Seguro (típico 0.5%)</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-50">B40</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">=B19*0.005</td>
                    <td className="px-6 py-4 text-sm text-gray-600">0.5% del valor FOB</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Valor CIF Ajustado</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-100">B41</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">=B39+B40</td>
                    <td className="px-6 py-4 text-sm text-gray-600">CIF + Seguro</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-100">
                    <td colSpan={4} className="px-6 py-2"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Código Arancelario (TARIC)</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-50">B42</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">8 dígitos (ej: 9403.6090)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tasa Arancelaria</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-50">B43</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">% (ej: 0%, 4%, 12%)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Arancel (Duty)</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-100">B44</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">=B41*B43</td>
                    <td className="px-6 py-4 text-sm text-gray-600">USD</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-100">
                    <td colSpan={4} className="px-6 py-2"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tasa IVA</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-50">B45</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-mono">[INPUT]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">España: 21%, México: 16%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Base IVA</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-100">B46</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">=B41+B44</td>
                    <td className="px-6 py-4 text-sm text-gray-600">CIF + Arancel</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">IVA</td>
                    <td className="px-6 py-4 text-sm font-mono bg-yellow-100">B47</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">=B46*B45</td>
                    <td className="px-6 py-4 text-sm text-gray-600">USD</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-100">
                    <td colSpan={4} className="px-6 py-2"></td>
                  </tr>
                  <tr className="bg-purple-100">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">TOTAL IMPUESTOS</td>
                    <td className="px-6 py-4 text-sm font-mono font-bold bg-purple-200">B48</td>
                    <td className="px-6 py-4 text-sm font-mono font-bold text-gray-900">=B44+B47</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">Arancel + IVA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-purple-50 border-t border-purple-200">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Importante TARIC (Europa):</strong> Buscar código en 
                <a href="https://ec.europa.eu/taxation_customs/dds2/taric" target="_blank" className="text-blue-600 hover:underline ml-1">
                  https://ec.europa.eu/taxation_customs/dds2/taric
                </a>
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-purple-50 rounded-lg mt-4 mb-10">
            <h4 className="font-bold text-gray-900 mb-2">💡 Aranceles e IVA: el golpe final</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Los impuestos se calculan sobre el <strong>valor CIF</strong> (costo + seguro + flete), NO solo sobre el precio del producto.
              El IVA se aplica DESPUÉS del arancel, así que pagas "impuesto sobre impuesto".
            </p>
            <div className="bg-white p-4 rounded border border-purple-200 mb-3">
              <div className="text-sm text-gray-700 space-y-2">
                <div><strong>CIF:</strong> $10,000 (FOB) + $2,000 (shipping) = $12,000</div>
                <div><strong>Arancel 5%:</strong> $12,000 × 5% = $600</div>
                <div><strong>Base IVA:</strong> $12,000 + $600 = $12,600</div>
                <div className="text-red-600 font-bold"><strong>IVA 21%:</strong> $12,600 × 21% = $2,646</div>
                <div className="border-t pt-2 font-bold text-gray-900">Total impuestos: $3,246 (32% del FOB!)</div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Clave:</strong> El código TARIC correcto puede ahorrarte miles. Algunos productos tienen arancel 0%, otros 16.9%. 
              Verifica en <a href="https://ec.europa.eu/taxation_customs/dds2/taric" target="_blank" rel="noopener" className="text-purple-600 underline">TARIC Europa</a>.
            </p>
          </div>

          {/* SECCIÓN E + F en grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* SECCIÓN E */}
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-3 border-b border-orange-200">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  Sección E: Otros Costos
                </h3>
              </div>
              <div className="p-4">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-700">Certificaciones (CE, FDA)</span>
                    <span className="font-mono bg-yellow-50 px-2 text-xs">B51</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-700">Inspección QC (SGS, BV)</span>
                    <span className="font-mono bg-yellow-50 px-2 text-xs">B52</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-700">Fotografía de Producto</span>
                    <span className="font-mono bg-yellow-50 px-2 text-xs">B53</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-700">Packaging Customizado</span>
                    <span className="font-mono bg-yellow-50 px-2 text-xs">B54</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 bg-blue-50">
                    <span className="text-gray-700">Imprevistos (5%)</span>
                    <span className="font-mono bg-yellow-100 px-2 text-xs">B55</span>
                  </div>
                  <div className="flex justify-between py-3 bg-orange-100 rounded px-3 font-bold mt-3">
                    <span className="text-gray-900">TOTAL OTROS COSTOS</span>
                    <span className="font-mono text-orange-700">B56</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN F */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl border-2 border-blue-700 overflow-hidden text-white">
              <div className="px-6 py-3 border-b border-blue-500">
                <h3 className="text-base font-bold flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  Sección F: Resumen Final
                </h3>
              </div>
              <div className="p-4">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between py-2 border-b border-blue-400/30">
                    <span>Valor FOB Total</span>
                    <span className="font-mono bg-blue-500/50 px-2 text-xs rounded">B59</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-400/30">
                    <span>Shipping Total</span>
                    <span className="font-mono bg-blue-500/50 px-2 text-xs rounded">B60</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-400/30">
                    <span>Impuestos Total</span>
                    <span className="font-mono bg-blue-500/50 px-2 text-xs rounded">B61</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-400/30">
                    <span>Otros Costos</span>
                    <span className="font-mono bg-blue-500/50 px-2 text-xs rounded">B62</span>
                  </div>
                  <div className="flex justify-between py-3 bg-white/20 rounded px-3 font-bold mt-2">
                    <span>COSTO TOTAL IMPORTACIÓN</span>
                    <span className="font-mono text-yellow-300 text-base">B63</span>
                  </div>
                  <div className="flex justify-between py-3 bg-white/20 rounded px-3 font-bold">
                    <span>COSTO POR UNIDAD</span>
                    <span className="font-mono text-yellow-300 text-base">B64</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-blue-400 mt-3">
                    <span>Costo por Unidad (EUR)</span>
                    <span className="font-mono bg-blue-500/50 px-2 text-xs rounded">B65</span>
                  </div>
                  <div className="border-t border-blue-400 pt-3 mt-3">
                    <div className="text-center font-bold mb-2 text-yellow-200">━━━ ANÁLISIS MARGEN ━━━</div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2">
                        <span>Precio Venta (tu input)</span>
                        <span className="font-mono bg-yellow-200 text-blue-900 px-2 text-xs rounded">B67</span>
                      </div>
                      <div className="flex justify-between py-2 bg-green-500/30 rounded px-2">
                        <span>Margen Bruto</span>
                        <span className="font-mono font-bold">B68</span>
                      </div>
                      <div className="flex justify-between py-2 bg-green-500/30 rounded px-2">
                        <span>% Margen</span>
                        <span className="font-mono font-bold">B69</span>
                      </div>
                      <div className="flex justify-between py-2 bg-green-500/30 rounded px-2">
                        <span>ROI</span>
                        <span className="font-mono font-bold">B71</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg mt-4 mb-10">
              <h4 className="font-bold mb-2 text-lg">⭐ El momento de la verdad: ¿es viable?</h4>
              <p className="text-sm leading-relaxed mb-3 opacity-90">
                La celda B64 (Costo por Unidad) es TU COSTO REAL. Todo lo anterior era preparación para llegar aquí.
                Ahora compáralo con tu precio de venta objetivo en B68.
              </p>
              <div className="bg-white/20 p-4 rounded-lg mb-3">
                <div className="text-sm space-y-2">
                  <div><strong>Margen &lt;40%:</strong> ❌ NO viable (a menos que sea volumen masivo)</div>
                  <div><strong>Margen 40-60%:</strong> ⚠️ Aceptable, pero ajustado</div>
                  <div><strong>Margen 60-100%:</strong> ✅ Óptimo, espacio para marketing</div>
                  <div><strong>Margen &gt;100%:</strong> 🚀 Excelente, producto premium</div>
                </div>
              </div>
              <p className="text-sm font-semibold">
                Si tu margen es &lt;40%, STOP. No sigas. Busca otro producto, negocia mejor precio FOB, o aumenta tu PVP.
                El error #1 de importadores novatos es lanzar productos con margen insuficiente.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Reference Sections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">Referencias Rápidas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Formato y Colores */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🎨</span> Formato y Colores
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-200 rounded border-2 border-green-400"></div>
                  <span className="text-gray-700"><strong>Verde claro:</strong> Celdas INPUT (usuario ingresa datos)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded border-2 border-yellow-400"></div>
                  <span className="text-gray-700"><strong>Amarillo:</strong> Celdas con fórmulas automáticas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded border-2 border-blue-400"></div>
                  <span className="text-gray-700"><strong>Azul:</strong> Resultados finales (Sección F)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded border-2 border-gray-400"></div>
                  <span className="text-gray-700"><strong>Gris:</strong> Etiquetas de campos</span>
                </div>
              </div>
            </div>

            {/* Validación */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>✓</span> Validación de Datos
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div><strong>B3:</strong> Lista → China, Vietnam, India, Tailandia</div>
                <div><strong>B4:</strong> Lista → Shanghai, Shenzhen, Ningbo, Guangzhou...</div>
                <div><strong>B5:</strong> Lista → España, México, Argentina...</div>
                <div><strong>B23:</strong> Lista → LCL, FCL 20', FCL 40', Aéreo</div>
                <div><strong>B45:</strong> Lista → 21% (España), 16% (México), 19% (Argentina)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ejemplo Práctico */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 font-display">Ejemplo Práctico: Importar Lámparas LED</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-teal-100">Datos Entrada</h4>
                <ul className="text-sm space-y-1">
                  <li>Precio FOB: $8.50/unidad</li>
                  <li>Cantidad: 1,000 unidades</li>
                  <li>Peso: 0.8 kg/unidad</li>
                  <li>Volumen: 0.015 m³/unidad</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-teal-100">Costos</h4>
                <ul className="text-sm space-y-1">
                  <li>FOB: $8,500</li>
                  <li>Shipping: $2,400</li>
                  <li>Impuestos: $2,788</li>
                  <li>Otros: $1,738</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-teal-100">Resultado</h4>
                <div className="text-sm space-y-1">
                  <div className="font-bold text-yellow-300 text-lg">Costo: €14.66/unidad</div>
                  <div>Venta: €39.90</div>
                  <div className="font-bold text-green-300">Margen: 63% ✅</div>
                  <div className="text-xs mt-2 opacity-90">PRODUCTO VIABLE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">Recursos Útiles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://ec.europa.eu/taxation_customs/dds2/taric" target="_blank" 
               className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-600">Códigos TARIC (Europa)</div>
                  <div className="text-sm text-gray-600">ec.europa.eu/taxation_customs...</div>
                </div>
                <span className="text-2xl">🇪🇺</span>
              </div>
            </a>
            <a href="https://www.freightos.com" target="_blank" 
               className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-600">Freightos</div>
                  <div className="text-sm text-gray-600">Cotizaciones de shipping online</div>
                </div>
                <span className="text-2xl">🚢</span>
              </div>
            </a>
            <a href="https://www.xe.com" target="_blank" 
               className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-600">XE.com</div>
                  <div className="text-sm text-gray-600">Tipo de cambio actualizado</div>
                </div>
                <span className="text-2xl">💱</span>
              </div>
            </a>
            <a href="https://www.sgs.com" target="_blank" 
               className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-600">SGS</div>
                  <div className="text-sm text-gray-600">Inspección de calidad</div>
                </div>
                <span className="text-2xl">✅</span>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* Download Section - Bottom */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Descargar Calculadora
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descarga la calculadora Excel con todas las fórmulas automatizadas
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <a
              href="/products/calculadora-costos-importacion.xlsx"
              download
              className="group flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📊
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-1">Calculadora Excel</div>
                  <div className="text-gray-600">Fórmulas automatizadas • 7.6 KB</div>
                </div>
              </div>
              <div className="text-blue-600 group-hover:text-blue-700 font-bold text-lg group-hover:translate-x-1 transition-transform">
                Descargar →
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <Link
          href="/productos/calculadora-costos/success"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-base group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver a tu compra
        </Link>
      </div>
    </div>
  );
}
