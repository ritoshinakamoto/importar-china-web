import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import allPostsData from '@/lib/all-posts.json';
import { formatDate, getMainCategory, type BlogPost } from '@/lib/blog-utils';
import RelatedPosts from '@/components/RelatedPosts';
import BlogSidebar from '@/components/BlogSidebar';
import BlogStickyBanner from '@/components/BlogStickyBanner';

export async function generateStaticParams() {
  return allPostsData.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): BlogPost | undefined {
  const post = allPostsData.find(p => p.slug === slug);
  if (!post) return undefined;
  
  return {
    ...post,
    mainCategory: getMainCategory(post.categories),
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }
  
  return {
    title: `${post.title} | ImportarDeChina`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Procesar todos los posts con mainCategory
  const allPosts: BlogPost[] = allPostsData.map(p => ({
    ...p,
    mainCategory: getMainCategory(p.categories),
  }));

  return (
    <>
      <div className="min-h-screen bg-[#faf9f7]">
        {/* Back to Blog */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold">
              ← Volver al blog
            </Link>
          </div>
        </div>

        {/* Article with Sidebar Layout */}
        <div className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-12">
              {/* Main Content */}
              <article className="flex-1 min-w-0">
                <div className="max-w-3xl">
                  {/* Article Header */}
                  <header className="mb-12">
                    {/* Categoría */}
                    {post.mainCategory && (
                      <div className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold uppercase px-3 py-1 rounded-full mb-4">
                        {post.mainCategory}
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-500 mb-4">
                      {formatDate(post.date)}
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
                      {post.title}
                    </h1>
                    
                    {post.excerpt && (
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </header>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* CTA */}
                  <div className="mt-16 bg-white rounded-xl border border-gray-200 p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">¿Listo para importar desde China?</h3>
                    <p className="text-gray-600 mb-6">
                      Te ayudamos a encontrar proveedores, negociar precios y gestionar toda la logística.
                    </p>
                    <Link 
                      href="/#contacto"
                      className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                    >
                      Empezar Ahora
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar (Desktop Only) */}
              <BlogSidebar />
            </div>
          </div>

          {/* Related Posts - Full Width */}
          <RelatedPosts 
            currentSlug={post.slug}
            currentCategory={post.mainCategory}
            allPosts={allPosts}
            maxPosts={3}
          />
        </div>
      </div>

      {/* Sticky Banner (Mobile + Desktop) */}
      <BlogStickyBanner />
    </>
  );
}
