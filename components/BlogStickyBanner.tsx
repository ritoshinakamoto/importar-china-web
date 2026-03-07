'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogCTAConfig } from '@/lib/blog-cta-config';

export default function BlogStickyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const config = blogCTAConfig.stickyBanner;

  useEffect(() => {
    // Mostrar banner después de 3 segundos de scroll
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      }
    };

    // Check if user previously dismissed (session storage)
    const dismissed = sessionStorage.getItem('stickyBannerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem('stickyBannerDismissed', 'true');
  };

  if (!config.enabled || isDismissed || !isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${config.bgColor} ${config.textColor} shadow-2xl z-50 transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-base sm:text-lg">{config.title}</h3>
              <p className="text-sm opacity-90 hidden sm:block">{config.description}</p>
            </div>
            
            {/* CTA Button */}
            <Link
              href={config.buttonUrl}
              className={`${config.buttonBg} ${config.buttonTextColor} px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base`}
            >
              {config.buttonText}
            </Link>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="text-white hover:opacity-75 transition-opacity ml-2"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
