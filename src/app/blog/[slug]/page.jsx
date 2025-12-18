// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-data';
import NewsletterSection from '../../../components/NewsletterSection';

// Generar metadata dinámica
export async function generateMetadata({ params }) {
    
    const resolvedParams = await params;
    const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado - Tu Espacio Mental'
    };
  }

  return {
    title: `${post.title} - Blog Tu Espacio Mental`,
    description: post.excerpt,
  };
}

// Generar rutas estáticas
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Posts relacionados (excluyendo el actual)
  const relatedPosts = blogPosts.filter(p => p.slug !== resolvedParams.slug).slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))` 
            }}
          ></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Category badge */}
          <div 
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-6"
            style={{ backgroundColor: `#${post.categoryColor}` }}
          >
            {post.category}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex items-center justify-center text-white/90 text-sm flex-wrap gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-[#91AFAD] transition-colors">Inicio</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#91AFAD] transition-colors">Blog</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#98947B]">{post.title.substring(0, 50)}...</span>
          </nav>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-3xl font-bold text-[#98947B] mt-12 mb-6">${line.substring(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3 class="text-2xl font-bold text-[#98947B] mt-8 mb-4">${line.substring(4)}</h3>`;
                    } else if (line.startsWith('**') && line.endsWith('**')) {
                      return `<p class="font-bold text-[#98947B] mt-4 mb-2">${line.substring(2, line.length - 2)}</p>`;
                    } else if (line.startsWith('- ')) {
                      return `<li class="ml-6 mb-2">${line.substring(2)}</li>`;
                    } else if (line.trim() === '') {
                      return '<br />';
                    } else {
                      return `<p class="mb-4">${line}</p>`;
                    }
                  })
                  .join('')
              }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#98947B] mb-4">Etiquetas:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#D2C1AD]/20 text-[#98947B] rounded-full text-sm hover:bg-[#D2C1AD]/30 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share section */}
          <div className="mt-8 p-6 bg-linear-to-r from-[#91AFAD]/10 to-[#D2C1AD]/10 rounded-xl">
            <h3 className="text-lg font-semibold text-[#98947B] mb-3">
              ¿Te resultó útil este artículo?
            </h3>
            <p className="text-gray-600 mb-4">
              Compártelo con alguien que pueda beneficiarse de esta información.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#91AFAD] text-white rounded-lg hover:bg-[#98947B] transition-colors">
                Compartir
              </button>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Consulta sobre: ${post.title}`}
                className="px-4 py-2 bg-white border-2 border-[#91AFAD] text-[#91AFAD] rounded-lg hover:bg-[#91AFAD] hover:text-white transition-colors"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-[#98947B] mb-8 text-center">
            Artículos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Link key={index} href={`/blog/${relatedPost.slug}`}>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
                      style={{ backgroundColor: `#${relatedPost.categoryColor}` }}
                    >
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#98947B] mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}