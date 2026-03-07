import Link from 'next/link';

export default function CursoNotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Lección No Encontrada
      </h1>
      <p className="text-gray-600 mb-8">
        La lección que buscas no existe o ha sido movida.
      </p>
      <Link 
        href="/curso-nicho-perfecto"
        className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        ← Volver al Curso
      </Link>
    </div>
  );
}
