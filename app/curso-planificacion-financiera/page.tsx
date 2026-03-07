import Link from "next/link";
import { modulos } from "@/lib/planificacion-data";

export default function CursoPlanificacionPage() {
  const todasLecciones = modulos.flatMap(m => m.lecciones);
  const primeraLeccion = todasLecciones[0].slug;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
          Planificación Financiera para Importación
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Herramientas y metodologías para <strong>planificar la tesorería, liquidez y rentabilidad</strong> de un negocio de importación desde China. Incluye gestión de stock, cálculo de gastos fijos, proyección de cash flow y cuenta de resultados.
        </p>
      </div>

      {/* Objetivos del Curso */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
          🎯 Objetivos del Curso
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
              📊
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Gestionar stock eficientemente</h3>
              <p className="text-gray-600 text-sm">Calcular stock disponible mes a mes, saber cuándo pedir al proveedor, evitar rupturas de stock y exceso de inventario</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
              💰
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Calcular liquidez necesaria</h3>
              <p className="text-gray-600 text-sm">Identificar todos los gastos de importación, proyectar cash flow mensual acumulado, calcular IVA y saber cuánto dinero necesitas</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
              📝
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Controlar gastos fijos</h3>
              <p className="text-gray-600 text-sm">Listar gastos recurrentes mensuales/anuales, diferenciar inversión vs gastos, calcular IVA soportado e integrar en tesorería</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
              📈
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Proyectar rentabilidad</h3>
              <p className="text-gray-600 text-sm">Crear cuenta de resultados mensual, saber cuándo lograrás liquidez positiva, optimizar compras y tomar decisiones basadas en proyecciones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resultado Final */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 mb-16 text-white">
        <h2 className="text-2xl font-bold mb-4">🏆 Al Terminar el Curso</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Dominarás <strong>Excel para planificación financiera</strong> con fórmulas automáticas de ventas, compras, stock, liquidez e IVA trimestral</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Sabrás <strong>cuánto dinero necesitas</strong> exactamente para iniciar tu negocio de importación (pico de liquidez: €12,000 ejemplo real)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Crearás tu <strong>cuenta de resultados</strong> para saber qué beneficio mensual y anual generarás con proyecciones realistas</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>Implementarás un <strong>sistema de seguimiento</strong> presupuesto vs real para detectar desviaciones y ajustar estrategia mes a mes</span>
          </li>
        </ul>
      </div>

      {/* Módulos y Lecciones */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          📚 Contenido del Curso
        </h2>
        <div className="space-y-6">
          {modulos.map((modulo, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  Módulo {idx + 1}: {modulo.titulo}
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.slug}
                    href={`/curso-planificacion-financiera/leccion/${leccion.slug}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {leccion.numero}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {leccion.titulo}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                        {leccion.descripcion}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500 flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{leccion.duracion}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center">
        <Link
          href={`/curso-planificacion-financiera/leccion/${primeraLeccion}`}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
        >
          Empezar Curso
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
