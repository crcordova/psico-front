// app/blog/page.js
import BlogCard from '../../components/BlogCard';
import NewsletterSection from '../../components/NewsletterSection';
import { blogPosts } from '../../data/blog-data';

export const metadata = {
  title: 'Blog de Psicología y Bienestar - Tu Espacio Mental',
  description: 'Artículos sobre salud mental, bienestar emocional y desarrollo personal escritos por profesionales.',
};

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-100 flex items-center justify-center overflow-hidden bg-linear-to-br from-[#D2C1AD] to-[#91AFAD]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Blog de Psicología y Bienestar
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Contenido profesional sobre salud mental, relaciones, autocuidado y crecimiento personal
          </p>
        </div>
      </section>

      {/* Introducción y Descripción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#98947B] mb-6">
            Tu Espacio de Aprendizaje y Crecimiento
          </h2>
          <div className="w-20 h-1 bg-[#91AFAD] mx-auto mb-8"></div>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Bienvenido a nuestro blog de psicología, un espacio dedicado a compartir conocimiento 
            basado en evidencia científica sobre salud mental y bienestar emocional. Aquí encontrarás 
            artículos escritos desde mi experiencia como psicóloga clínica, con un enfoque práctico 
            y accesible para todos.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Cada artículo está diseñado para ofrecerte herramientas concretas que puedas aplicar 
            en tu vida diaria. Ya sea que estés buscando manejar mejor el estrés, mejorar tus 
            relaciones o simplemente entender mejor tu mundo emocional, aquí encontrarás contenido 
            valioso para tu camino de crecimiento personal.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-[#91AFAD]/10 rounded-lg">
              <div className="text-3xl font-bold text-[#91AFAD] mb-1">{blogPosts.length}+</div>
              <div className="text-sm text-gray-600">Artículos</div>
            </div>
            <div className="text-center p-4 bg-[#D2C1AD]/10 rounded-lg">
              <div className="text-3xl font-bold text-[#D2C1AD] mb-1">4</div>
              <div className="text-sm text-gray-600">Categorías</div>
            </div>
            <div className="text-center p-4 bg-[#98947B]/10 rounded-lg">
              <div className="text-3xl font-bold text-[#98947B] mb-1">1x</div>
              <div className="text-sm text-gray-600">Mes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Blog Posts Grid */}
      <section className="py-20 bg-linear-to-b from-white to-[#D2C1AD]/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#98947B] mb-4">
              Últimos Artículos
            </h2>
            <p className="text-gray-600 text-lg">
              Explora nuestro contenido más reciente sobre salud mental y bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          {/* CTA for more content */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              ¿Buscas algo específico? Contáctame si tienes sugerencias de temas que te gustaría ver en el blog.
            </p>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="inline-flex items-center px-6 py-3 bg-[#91AFAD] text-white rounded-lg font-semibold hover:bg-[#98947B] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Sugerir un Tema
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}