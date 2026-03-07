'use client';

import { useState } from 'react';

interface StripeCheckoutProps {
  productId: string;
}

export default function StripeCheckout({ productId }: StripeCheckoutProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/stripe/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, productId }),
      });

      if (!response.ok) throw new Error('Failed to create checkout session');

      const data = await response.json();
      
      // Redirigir a Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creating checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Tu Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 placeholder:text-gray-400"
          />
          <p className="text-xs text-gray-600 mt-1">
            Introduce tu email para continuar al pago seguro con Stripe
          </p>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Procesando...' : 'Ir al Pago Seguro'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Serás redirigido a Stripe para pagar de forma segura
        </p>
      </form>
    </div>
  );
}
