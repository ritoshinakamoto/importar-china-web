'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Mail, MousePointerClick, Download, Eye, Lock } from 'lucide-react';

interface Subscriber {
  id: string;
  email: string;
  name?: string;
  created_at: string;
  last_active?: string;
  score: number;
  events_count: number;
  status: 'hot' | 'warm' | 'cold';
}

export default function AdminLeadsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    hot: 0,
    warm: 0,
    cold: 0,
    totalEvents: 0
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        setAuthenticated(true);
        localStorage.setItem('admin_auth', 'true');
        loadDashboardData();
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const loadDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/leads');
      const data = await response.json();
      
      setSubscribers(data.subscribers || []);
      setStats(data.stats || {});
    } catch (err) {
      console.error('Error loading dashboard:', err);
    }
  };

  useEffect(() => {
    // Check if already authenticated
    if (localStorage.getItem('admin_auth') === 'true') {
      setAuthenticated(true);
      loadDashboardData();
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-teal-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Panel de Gestión de Leads
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Verificando...' : 'Acceder'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard de Leads
            </h1>
            <button
              onClick={() => {
                setAuthenticated(false);
                localStorage.removeItem('admin_auth');
              }}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm font-medium">Total Leads</span>
              <TrendingUp className="w-5 h-5 text-teal-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm font-medium">Leads Calientes</span>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-3xl font-bold text-red-600">{stats.hot}</p>
            <p className="text-xs text-gray-500 mt-1">Score {'>'} 70</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm font-medium">Leads Tibios</span>
              <span className="text-2xl">👀</span>
            </div>
            <p className="text-3xl font-bold text-yellow-600">{stats.warm}</p>
            <p className="text-xs text-gray-500 mt-1">Score 40-70</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm font-medium">Leads Fríos</span>
              <TrendingDown className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-3xl font-bold text-gray-400">{stats.cold}</p>
            <p className="text-xs text-gray-500 mt-1">Score {'<'} 40</p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              Lista de Leads ({subscribers.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Eventos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Última Actividad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subscribers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No hay leads registrados todavía
                    </td>
                  </tr>
                ) : (
                  subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {sub.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {sub.name || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                sub.score >= 70 ? 'bg-red-500' :
                                sub.score >= 40 ? 'bg-yellow-500' :
                                'bg-gray-400'
                              }`}
                              style={{ width: `${sub.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            {sub.score}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          sub.status === 'hot' ? 'bg-red-100 text-red-700' :
                          sub.status === 'warm' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {sub.status === 'hot' && '🔥'}
                          {sub.status === 'warm' && '👀'}
                          {sub.status === 'cold' && '❄️'}
                          {' '}
                          {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {sub.events_count} eventos
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {sub.last_active ? new Date(sub.last_active).toLocaleDateString('es-ES') : 'Nunca'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            📊 Cómo se calcula el Score:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Email abierto: +20 puntos</li>
            <li>• Link clickeado: +15 puntos</li>
            <li>• Página visitada: +10 puntos</li>
            <li>• PDF descargado: +25 puntos</li>
            <li>• Actividad {'<'} 24h: +10 puntos bonus</li>
            <li>• Sin actividad 7+ días: -30 puntos</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
