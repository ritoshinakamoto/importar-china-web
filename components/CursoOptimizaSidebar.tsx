'use client';

import Link from 'next/link';
import { leccionesOptimiza, modulosOptimiza } from '@/lib/optimiza-data';

interface CursoOptimizaSidebarProps {
  currentLeccionId: string;
}

export default function CursoOptimizaSidebar({ currentLeccionId }: CursoOptimizaSidebarProps) {
  const leccionesPorModulo = modulosOptimiza.map(modulo => ({
    ...modulo,
    lecciones: leccionesOptimiza.filter(l => l.modulo === modulo.nombre)
  }));

  const currentIndex = leccionesOptimiza.findIndex(l => l.id === currentLeccionId);
  const progress = Math.round(((currentIndex + 1) / leccionesOptimiza.length) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">Progreso del Curso</span>
          <span className="text-sm font-bold text-blue-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Lección {currentIndex + 1} de {leccionesOptimiza.length}
        </p>
      </div>

      {/* Lessons List */}
      <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
        {leccionesPorModulo.map((modulo) => (
          <div key={modulo.id}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
              {modulo.nombre}
            </h3>
            <div className="space-y-1">
              {modulo.lecciones.map((leccion) => {
                const isCurrent = leccion.id === currentLeccionId;
                const isPast = leccionesOptimiza.findIndex(l => l.id === leccion.id) < currentIndex;
                
                return (
                  <Link
                    key={leccion.id}
                    href={`/curso-optimiza-compras/leccion/${leccion.id}`}
                    className={`
                      block px-3 py-2 rounded-lg text-sm transition-colors
                      ${isCurrent 
                        ? 'bg-blue-100 text-blue-900 font-semibold' 
                        : isPast
                        ? 'text-gray-600 hover:bg-gray-50'
                        : 'text-gray-500 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`
                        flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                        ${isCurrent 
                          ? 'bg-blue-600 text-white' 
                          : isPast
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                        }
                      `}>
                        {isPast && !isCurrent ? '✓' : leccion.numero}
                      </span>
                      <span className="line-clamp-2 flex-1">
                        {leccion.titulo}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Back to Index */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <Link 
          href="/curso-optimiza-compras"
          className="block text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Volver al índice
        </Link>
      </div>
    </div>
  );
}
