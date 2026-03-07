'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Globe, Users, Ship, CheckCircle2, Package, DollarSign, MapPin } from 'lucide-react';
import allPostsData from '@/lib/all-posts.json';
import { getMainCategory, formatDate, mainCategories, type MainCategoryId, type BlogPost } from '@/lib/blog-utils';

const POSTS_PER_PAGE = 12;

const iconMap = {
  Globe,
  Users,
  Ship,
  CheckCircle2,
  Package,
  DollarSign,
  MapPin,
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<MainCategoryId>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Procesar posts: añadir mainCategory
  const allPosts: BlogPost[] = useMemo(() => {
    return allPostsData.map(post => ({
      ...post,
      mainCategory: getMainCategory(post.categories),
    }));
  }, []);

  // Filtrar posts por categoría
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return allPosts;
    return allPosts.filter(post => post.mainCategory === selectedCategory);
  }, [allPosts, selectedCategory]);

  // Paginación
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Cambiar categoría
  const handleCategoryChange = (categoryId: MainCategoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset a página 1
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight font-display">
          El Blog de Importar de China
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {filteredPosts.length} artículos sobre importación desde China
        </p>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap gap-3">
          {mainCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const isActive = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all
                  ${isActive 
                    ? 'bg-teal-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-teal-600 hover:text-teal-600'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => {
            const Icon = iconMap[
              mainCategories.find(c => c.id === post.mainCategory)?.icon as keyof typeof iconMap || 'Package'
            ];
            
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
                  {/* Categoría badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-teal-50 p-1.5 rounded-lg">
                      <Icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-xs font-semibold text-teal-600 uppercase">
                      {post.mainCategory}
                    </span>
                  </div>

                  {/* Título */}
                  <h2 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors font-display line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-sm text-teal-600 font-semibold group-hover:underline">
                      Leer más →
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              ← Anterior
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`
                      px-4 py-2 rounded-lg font-semibold
                      ${currentPage === pageNum
                        ? 'bg-teal-600 text-white'
                        : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              Siguiente →
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
    </div>
  );
}
