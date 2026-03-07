'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, Download, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);

  useEffect(() => {
    // Track page view
    fetch('/api/track-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'page_view',
        event_data: { page: '/checklist-importacion' }
      })
    });
  }, []);

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const handleDownloadPDF = () => {
    // Track download click
    fetch('/api/track-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'button_click',
        event_data: { button: 'Descargar PDF', page: '/checklist-importacion' }
      })
    });

    setShowDownloadSuccess(true);
    setTimeout(() => setShowDownloadSuccess(false), 3000);

    // Trigger PDF download
    const link = document.createElement('a');
    link.href = '/checklist-gratis-30-pasos.pdf';
    link.download = 'checklist-gratis-30-pasos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const checklistData = [
    {
      phase: "FASE 1: INVESTIGACIÓN (Días 1-5)",
      items: [
        {
          id: "1.1",
          title: "Define tu producto",
          tasks: [
            "Producto específico elegido (nada de \"ropa genérica\")",
            "Público objetivo claro (quién lo comprará)",
            "Precio venta estimado en tu mercado"
          ]
        },
        {
          id: "1.2",
          title: "Investiga la demanda",
          tasks: [
            "Búsquedas mensuales en Google (usar Keywords Planner)",
            "Competencia en Amazon/marketplaces",
            "Tendencia: creciente, estable o decreciente"
          ]
        },
        {
          id: "1.3",
          title: "Calcula márgenes preliminares",
          tasks: [
            "Precio fabricante China (estimado)",
            "Costos envío + aduanas (25-35% del producto)",
            "Margen mínimo 3x (ej: coste $10 → venta $30+)"
          ]
        },
        {
          id: "1.4",
          title: "Verifica restricciones legales",
          tasks: [
            "Producto NO restringido (armas, medicinas, etc.)",
            "Certificaciones necesarias (CE, FDA, etc.) identificadas",
            "Aranceles aduaneros consultados (TARIC Europa)"
          ]
        },
        {
          id: "1.5",
          title: "Presupuesto inicial",
          tasks: [
            "Capital disponible: mínimo $2,000-5,000",
            "Reserva para imprevistos (20% extra)"
          ]
        }
      ]
    },
    {
      phase: "FASE 2: SOURCING PROVEEDORES (Días 6-10)",
      items: [
        {
          id: "2.1",
          title: "Busca proveedores en Alibaba",
          tasks: [
            "Mínimo 10 proveedores contactados",
            "Filtros aplicados: Trade Assurance, Verified Supplier",
            "Años experiencia: mínimo 3 años"
          ]
        },
        {
          id: "2.2",
          title: "Solicita cotizaciones",
          tasks: [
            "Especificaciones técnicas claras enviadas",
            "Cantidades: 100, 500, 1000 unidades",
            "MOQ (cantidad mínima) aceptable"
          ]
        },
        {
          id: "2.3",
          title: "Compara ofertas",
          tasks: [
            "Precio por unidad",
            "Calidad materiales",
            "Tiempo producción",
            "Términos pago (30% anticipo, 70% antes envío)"
          ]
        },
        {
          id: "2.4",
          title: "Solicita muestras",
          tasks: [
            "2-3 proveedores seleccionados",
            "Muestras recibidas en 7-10 días",
            "Calidad verificada físicamente"
          ]
        }
      ]
    },
    {
      phase: "FASE 3: NEGOCIACIÓN Y CONTRATO (Días 11-15)",
      items: [
        {
          id: "3.1",
          title: "Negocia términos",
          tasks: [
            "Precio final acordado",
            "Incoterm definido (FOB recomendado para novatos)",
            "Penalización por retraso negociada",
            "Inspección calidad pre-envío incluida"
          ]
        },
        {
          id: "3.2",
          title: "Contrato por escrito",
          tasks: [
            "Especificaciones técnicas detalladas",
            "Muestras aprobadas como referencia",
            "Plazos con fechas concretas",
            "Términos devolución si hay defectos"
          ]
        },
        {
          id: "3.3",
          title: "Método pago seguro",
          tasks: [
            "Trade Assurance (Alibaba) o Carta Crédito",
            "NUNCA Western Union o cuenta personal",
            "30% anticipo + 70% antes envío (estándar)"
          ]
        }
      ]
    },
    {
      phase: "FASE 4: PRODUCCIÓN Y CONTROL (Días 16-45)",
      items: [
        {
          id: "4.1",
          title: "Seguimiento producción",
          tasks: [
            "Fotos proceso cada semana solicitadas",
            "Videollamada mid-production realizada",
            "Pre-shipment sample recibido (muestra antes envío todo)"
          ]
        },
        {
          id: "4.2",
          title: "Inspección calidad",
          tasks: [
            "Empresa inspección contratada (SGS, Bureau Veritas)",
            "Inspección pre-envío realizada",
            "Reporte aprobado antes pago final"
          ]
        },
        {
          id: "4.3",
          title: "Documentación preparada",
          tasks: [
            "Factura comercial",
            "Packing list",
            "Certificados origen (si aplica)",
            "Documentos específicos producto"
          ]
        }
      ]
    },
    {
      phase: "FASE 5: ENVÍO Y LOGÍSTICA (Días 46-75)",
      items: [
        {
          id: "5.1",
          title: "Contrata freight forwarder",
          tasks: [
            "3 cotizaciones transporte comparadas",
            "Marítimo vs aéreo decidido (coste vs velocidad)",
            "Seguro carga contratado (2% valor, obligatorio)"
          ]
        },
        {
          id: "5.2",
          title: "Tracking envío",
          tasks: [
            "Número tracking obtenido",
            "Seguimiento semanal hasta llegada",
            "ETA (fecha estimada) conocida"
          ]
        }
      ]
    },
    {
      phase: "FASE 6: ADUANAS Y RECEPCIÓN (Días 76-90)",
      items: [
        {
          id: "6.1",
          title: "Desaduanamiento",
          tasks: [
            "Agente aduanas contratado (si primer pedido)",
            "DUA (Documento Único Administrativo) presentado",
            "Aranceles + IVA pagados",
            "Justificante pago (Modelo 031) recibido"
          ]
        },
        {
          id: "6.2",
          title: "Recepción mercancía",
          tasks: [
            "Inspección visual al recibir (ANTES firmar)",
            "Fotos tomadas si hay daños",
            "Cantidad verificada vs pedido",
            "Calidad checked vs muestras aprobadas"
          ]
        },
        {
          id: "6.3",
          title: "Documentación guardada",
          tasks: [
            "Factura proveedor",
            "DUA importación",
            "Factura freight forwarder",
            "Justificante pago aranceles (Modelo 031)",
            "Reporte inspección calidad"
          ]
        }
      ]
    }
  ];

  const totalItems = checklistData.reduce((acc, phase) => 
    acc + phase.items.reduce((sum, item) => sum + item.tasks.length, 0), 0
  );
  const completedItems = checkedItems.size;
  const progress = (completedItems / totalItems) * 100;

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Checklist: Tu Primera Importación desde China en 30 Días
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            ⚡️ Por Jorge Mora – ImportarDeChina.com<br />
            ✅ 15 años de experiencia | 200+ contenedores importados
          </p>

          {/* Progress Bar */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Tu Progreso: {completedItems} / {totalItems} pasos completados
              </span>
              <span className="text-sm font-bold text-teal-600">
                {progress.toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-teal-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* CTA Contacto - Antes de Fase 1 */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-3 font-display">
              ¿Necesitas Ayuda Personalizada?
            </h3>
            <p className="text-teal-50 mb-6 text-lg">
              Completa este Checklist y ponte en contacto con uno de nuestros agentes para explicarle en qué situación estás y cómo te podemos ayudar
            </p>
            <a
              href="https://t.me/jane_importardechina_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Contactar con un Agente →
            </a>
          </div>

          <div className="space-y-8">
            {checklistData.map((phase, phaseIdx) => (
              <>
                <div key={phaseIdx} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display flex items-center gap-3">
                    <span className="bg-teal-100 text-teal-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                      {phaseIdx + 1}
                    </span>
                    {phase.phase}
                  </h2>

                  <div className="space-y-6">
                    {phase.items.map((item) => (
                      <div key={item.id} className="border-l-4 border-teal-500 pl-6">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                          ✅ {item.title}
                        </h3>
                        <div className="space-y-2">
                          {item.tasks.map((task, taskIdx) => {
                            const taskId = `${item.id}-${taskIdx}`;
                            const isChecked = checkedItems.has(taskId);
                            
                            return (
                              <label
                                key={taskId}
                                className="flex items-start gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="relative flex-shrink-0 mt-0.5">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleItem(taskId)}
                                    className="w-5 h-5 rounded border-2 border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                  />
                                </div>
                                <span className={`text-gray-700 ${isChecked ? 'line-through text-gray-400' : ''}`}>
                                  {task}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA entre Fase 2 y 3 */}
                {phaseIdx === 1 && (
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 font-display">
                      ¿Tienes Dudas en esta Fase?
                    </h3>
                    <p className="text-teal-50 mb-6 text-lg">
                      Completa este Checklist y ponte en contacto con uno de nuestros agentes para explicarle en qué situación estás y cómo te podemos ayudar
                    </p>
                    <a
                      href="https://t.me/jane_importardechina_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                      Contactar con un Agente →
                    </a>
                  </div>
                )}

                {/* CTA entre Fase 5 y 6 */}
                {phaseIdx === 4 && (
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 font-display">
                      ¿Necesitas Apoyo con Logística o Aduanas?
                    </h3>
                    <p className="text-teal-50 mb-6 text-lg">
                      Completa este Checklist y ponte en contacto con uno de nuestros agentes para explicarle en qué situación estás y cómo te podemos ayudar
                    </p>
                    <a
                      href="https://t.me/jane_importardechina_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                      Contactar con un Agente →
                    </a>
                  </div>
                )}
              </>
            ))}
          </div>

          {/* CTA Final - Al final del todo */}
          <div className="mt-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3 font-display">
              ¿Completaste el Checklist?
            </h3>
            <p className="text-teal-50 mb-6 text-lg">
              Felicidades por llegar hasta aquí. Ponte en contacto con uno de nuestros agentes para explicarle en qué situación estás y cómo te podemos ayudar a dar el siguiente paso
            </p>
            <a
              href="https://t.me/jane_importardechina_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Contactar con un Agente →
            </a>
          </div>

          {/* CTA Download PDF */}
          <div className="mt-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white shadow-xl">
            <Download className="w-16 h-16 mx-auto mb-4 text-teal-100" />
            <h2 className="text-3xl font-bold mb-3 font-display">
              ¿Quieres el Checklist en PDF?
            </h2>
            <p className="text-teal-50 mb-6 text-lg">
              Descarga la versión imprimible para tenerla siempre a mano
            </p>
            <button
              onClick={handleDownloadPDF}
              className="bg-white text-teal-600 text-xl font-bold px-12 py-5 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Descargar PDF Gratis →
            </button>

            {showDownloadSuccess && (
              <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                ¡Descarga iniciada!
              </div>
            )}
          </div>

          {/* Next Steps CTA */}
          <div className="mt-12 bg-white rounded-xl border-2 border-gray-200 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
              ¿Necesitas Ayuda Personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Si tienes dudas específicas sobre tu producto o proveedor, ofrecemos consultoría 1:1
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Reservar Consultoría Gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2026 ImportarDeChina.com - Todos los derechos reservados
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/blog" className="hover:text-white transition-colors text-sm">Blog</Link>
            <Link href="/#productos" className="hover:text-white transition-colors text-sm">Productos</Link>
            <Link href="/#contacto" className="hover:text-white transition-colors text-sm">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
