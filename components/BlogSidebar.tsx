import Link from 'next/link';
import { blogCTAConfig } from '@/lib/blog-cta-config';

export default function BlogSidebar() {
  const config = blogCTAConfig.sidebar;

  if (!config.enabled) return null;

  return (
    <aside className="hidden lg:block lg:w-80 flex-shrink-0">
      <div className="sticky top-24">
        {/* CTA Card */}
        <div className={`${config.bgColor} rounded-xl border border-gray-200 p-6 shadow-sm`}>
          <h3 className="text-xl font-bold mb-3 text-gray-900 font-display">
            {config.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {config.description}
          </p>

          {/* Bullets */}
          <ul className="space-y-2 mb-6">
            {config.bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href={config.buttonUrl}
            className={`block w-full text-center ${config.buttonBg} ${config.buttonTextColor} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
          >
            {config.buttonText}
          </Link>
        </div>

        {/* Social Proof (opcional, se puede activar después) */}
        {/* <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 italic">
            "Este checklist me ahorró miles de euros en mi primera importación"
          </p>
          <p className="text-xs text-gray-500 mt-2">- Cliente verificado</p>
        </div> */}
      </div>
    </aside>
  );
}
