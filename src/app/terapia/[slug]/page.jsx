// app/terapia/[slug]/page.js
import { notFound } from 'next/navigation';
import CTASection from '../../../components/CTASection';
import { terapias } from '../../../data/terapia-data';

// Generar metadata dinámica
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
  const terapia = terapias.find(t => t.slug === resolvedParams.slug);
  
  if (!terapia) {
    return {
      title: 'Terapia no encontrada - Tu Espacio Mental'
    };
  }

  return {
    title: `${terapia.title} - Tu Espacio Mental`,
    description: terapia.shortDescription,
  };
}

// Generar rutas estáticas
export async function generateStaticParams() {
  return terapias.map((terapia) => ({
    slug: terapia.slug,
  }));
}

export default async function TerapiaDetailPage({ params }) {
    const resolvedParams = await params;
  const terapia = terapias.find(t => t.slug === resolvedParams.slug);

  if (!terapia) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-10 opacity-80"
            style={{ 
              background: `linear-gradient(to right, #${terapia.color}CC, #${terapia.color}99)` 
            }}
          ></div>
          <img 
            src={terapia.heroImage} 
            alt={terapia.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
            style={{ backgroundColor: `#${terapia.color}` }}
          >
            <span className="text-5xl">{terapia.icon}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {terapia.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            {terapia.shortDescription}
          </p>
        </div>
      </section>

      {/* Descripción Completa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6">
                ¿Qué es la {terapia.title}?
              </h2>
              <div 
                className="w-20 h-1 mb-8"
                style={{ backgroundColor: `#${terapia.color}` }}
              ></div>
              
              {terapia.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              {/* Áreas de trabajo */}
              <div 
                className="rounded-2xl p-8 shadow-lg"
                style={{ backgroundColor: `#${terapia.color}15` }}
              >
                <h3 className="text-2xl font-bold text-[#98947B] mb-6">
                  Áreas de Trabajo
                </h3>
                <ul className="space-y-3">
                  {terapia.areas.map((area, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="w-6 h-6 mr-3 shrink-0 mt-0.5"
                        style={{ color: `#${terapia.color}` }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 text-lg">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info rápida */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: `#${terapia.color}` }}>
                <h4 className="font-semibold text-[#98947B] mb-4 text-lg">
                  Información de Sesiones
                </h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: `#${terapia.color}` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Duración: 50-60 minutos</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: `#${terapia.color}` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Modalidad: Online o presencial</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: `#${terapia.color}` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Frecuencia: Semanal o quincenal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              Beneficios de la {terapia.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {terapia.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4"
                  style={{ borderColor: `#${terapia.color}` }}
                >
                  <h4 className="text-xl font-bold text-[#98947B] mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso */}
          <div 
            className="rounded-2xl p-10"
            style={{ backgroundColor: `#${terapia.color}08` }}
          >
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              Proceso Terapéutico
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {terapia.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto"
                    style={{ backgroundColor: `#${terapia.color}` }}
                  >
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-[#98947B] mb-2">
                    {step.step}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title={`¿Listo para Comenzar tu ${terapia.title}?`}
        description="Agenda tu primera sesión y comienza tu camino hacia el bienestar. Estoy aquí para acompañarte en cada paso del proceso."
      />
    </div>
  );
}