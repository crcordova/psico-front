// app/experiencia-organizacional/page.js
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Experiencia Organizacional - Tu Espacio Mental',
  description: 'Retiros corporativos y talleres personalizados para fortalecer la cultura organizacional.',
};

export default function ExperienciaOrganizacionalPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#98947B]/90 to-[#D2C1AD]/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1920&q=80" 
            alt="Experiencia organizacional" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Experiencia Organizacional
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Retiros y talleres transformadores para tu equipo
          </p>
        </div>
      </section>

      {/* Descripción Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6">
                Retiros Corporativos Únicos
              </h2>
              <div className="w-20 h-1 bg-[#98947B] mb-8"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Diseño y facilito experiencias organizacionales inmersivas que van más allá 
                de los talleres tradicionales. Mis retiros corporativos son espacios diseñados 
                para fortalecer la cultura organizacional, mejorar la cohesión del equipo y 
                revitalizar la motivación de tus colaboradores.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Cada retiro es personalizado según las necesidades específicas de tu organización. 
                Combinamos actividades de team building, talleres de desarrollo personal y 
                profesional, mindfulness, y espacios de reflexión en entornos naturales y 
                relajantes.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Estos encuentros permiten a los equipos desconectarse de la rutina diaria, 
                reconectarse entre ellos y regresar al trabajo con energía renovada y una 
                perspectiva fresca.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#98947B]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" 
                alt="Retiro corporativo" 
                className="relative rounded-2xl shadow-2xl w-full h-125 object-cover"
              />
            </div>
          </div>

          {/* Tipos de Retiros */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              Experiencias Disponibles
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Retiro 1 */}
              <div className="bg-linear-to-br from-[#98947B]/10 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                    alt="Retiro de bienestar" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#98947B]/40"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#98947B] mb-4">
                    Retiro de Bienestar Integral
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Experiencia de 2-3 días enfocada en el autocuidado, manejo del estrés 
                    y equilibrio vida-trabajo. Incluye yoga, meditación, talleres de 
                    inteligencia emocional y actividades al aire libre.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#98947B]/20 text-[#98947B] rounded-full text-sm">2-3 días</span>
                    <span className="px-3 py-1 bg-[#98947B]/20 text-[#98947B] rounded-full text-sm">10-30 personas</span>
                  </div>
                </div>
              </div>

              {/* Retiro 2 */}
              <div className="bg-linear-to-br from-[#D2C1AD]/10 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80" 
                    alt="Retiro de liderazgo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#D2C1AD]/40"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#98947B] mb-4">
                    Retiro de Liderazgo Transformador
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Diseñado para líderes y equipos directivos. Desarrollo de habilidades 
                    de liderazgo consciente, toma de decisiones estratégicas y gestión 
                    emocional del equipo.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#D2C1AD]/20 text-[#98947B] rounded-full text-sm">2-4 días</span>
                    <span className="px-3 py-1 bg-[#D2C1AD]/20 text-[#98947B] rounded-full text-sm">8-20 personas</span>
                  </div>
                </div>
              </div>

              {/* Retiro 3 */}
              <div className="bg-linear-to-br from-[#91AFAD]/10 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" 
                    alt="Team building" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#91AFAD]/40"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#98947B] mb-4">
                    Team Building Intensivo
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Experiencia de 1-2 días centrada en fortalecer vínculos, mejorar la 
                    comunicación y construir confianza a través de actividades colaborativas 
                    y dinámicas de grupo.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#91AFAD]/20 text-[#91AFAD] rounded-full text-sm">1-2 días</span>
                    <span className="px-3 py-1 bg-[#91AFAD]/20 text-[#91AFAD] rounded-full text-sm">15-50 personas</span>
                  </div>
                </div>
              </div>

              {/* Retiro 4 */}
              <div className="bg-linear-to-br from-[#98947B]/10 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80" 
                    alt="Innovación creativa" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#98947B]/40"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#98947B] mb-4">
                    Innovación y Creatividad
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Retiro enfocado en estimular el pensamiento creativo, fomentar la 
                    innovación y desarrollar nuevas perspectivas para resolver desafíos 
                    organizacionales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#98947B]/20 text-[#98947B] rounded-full text-sm">2-3 días</span>
                    <span className="px-3 py-1 bg-[#98947B]/20 text-[#98947B] rounded-full text-sm">10-25 personas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Qué Incluyen */}
          <div className="bg-linear-to-br from-[#D2C1AD]/5 to-transparent rounded-2xl p-10 mb-16">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              ¿Qué Incluyen los Retiros?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-[#98947B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Diseño Personalizado</h4>
                  <p className="text-gray-600 text-sm">Programa adaptado a tus necesidades específicas</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-[#98947B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Facilitación Experta</h4>
                  <p className="text-gray-600 text-sm">Psicóloga especializada en organizaciones</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-[#98947B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Material de Apoyo</h4>
                  <p className="text-gray-600 text-sm">Recursos y herramientas para continuar después</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-[#98947B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Actividades Vivenciales</h4>
                  <p className="text-gray-600 text-sm">Dinámicas prácticas y experienciales</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-[#98947B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Seguimiento Post-Retiro</h4>
                  <p className="text-gray-600 text-sm">Acompañamiento para mantener los resultados</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-[#98947B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Espacios Inspiradores</h4>
                  <p className="text-gray-600 text-sm">Locaciones cuidadosamente seleccionadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Proceso */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              Cómo Organizamos tu Retiro
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#98947B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Diagnóstico</h4>
                <p className="text-gray-600 text-sm">
                  Reunión inicial para entender las necesidades y objetivos de tu organización.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#98947B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Diseño</h4>
                <p className="text-gray-600 text-sm">
                  Creación de un programa personalizado con actividades específicas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#98947B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Ejecución</h4>
                <p className="text-gray-600 text-sm">
                  Facilitación del retiro con todas las actividades planificadas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#98947B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  4
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Seguimiento</h4>
                <p className="text-gray-600 text-sm">
                  Acompañamiento posterior para asegurar la implementación de aprendizajes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="¿Listo para Transformar tu Equipo?"
        description="Creemos juntos una experiencia única que fortalezca la cultura de tu organización y revitalice a tus colaboradores. Solicita una propuesta personalizada."
      />
    </div>
  );
}