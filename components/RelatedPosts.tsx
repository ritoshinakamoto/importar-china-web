import Link from 'next/link';
import { formatDate, type BlogPost } from '@/lib/blog-utils';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory?: string;
  allPosts: BlogPost[];
  maxPosts?: number;
}

export default function RelatedPosts({ 
  currentSlug, 
  currentCategory, 
  allPosts, 
  maxPosts = 3 
}: RelatedPostsProps) {
  // Filtrar posts relacionados (misma categoría, excluir post actual)
  const relatedPosts = allPosts
    .filter(post => 
      post.slug !== currentSlug && 
      (currentCategory ? post.mainCategory === currentCategory : true)
    )
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-20 py-16 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
          Más entradas del Blog
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map(post => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                {formatDate(post.date)}
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight line-clamp-2">
                {post.title}
              </h3>
              
              {post.excerpt && (
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
