'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="ImportarDeChina" 
            width={350} 
            height={108}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#productos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Productos
          </Link>
          <Link href="/#servicios" className="text-gray-600 hover:text-gray-900 transition-colors">
            Servicios
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link href="/contacto" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link 
              href="/#productos" 
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link 
              href="/#servicios" 
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contacto" 
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
