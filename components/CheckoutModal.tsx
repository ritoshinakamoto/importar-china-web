'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import StripeCheckout from './StripeCheckout';
import { Product, formatPrice } from '@/lib/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold text-gray-900">Finalizar Compra</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Price Box */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 text-center border border-teal-200">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-gray-500 line-through text-lg">{formatPrice(product.originalPrice)}</span>
              <span className="text-4xl font-bold text-teal-600">{formatPrice(product.price)}</span>
            </div>
            <p className="text-sm text-gray-700">
              Precio de lanzamiento
            </p>
          </div>

          {/* What's Included */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-900">Incluye:</p>
            <ul className="space-y-2 text-gray-700">
              {product.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
          </div>

          {/* Checkout Form */}
          <StripeCheckout productId={product.id} />

          {/* Guarantee */}
          <p className="text-xs text-center text-gray-500 border-t border-gray-200 pt-4">
            🔒 Garantía 30 días • Pago seguro con Stripe • Devolución 100% si no te gusta
          </p>
        </div>
      </div>
    </div>
  );
}
