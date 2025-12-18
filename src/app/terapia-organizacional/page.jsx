// app/terapia-organizacional/page.js
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Terapia Organizacional - Tu Espacio Mental',
  description: 'Apoyo psicológico y motivacional para equipos de trabajo y organizaciones.',
};

export default function TerapiaOrganizacionalPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#D2C1AD]/90 to-[#91AFAD]/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80" 
            alt="Terapia organizacional" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Terapia Organizacional
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Potencia el bienestar y el rendimiento de tus equipos de trabajo
          </p>
        </div>
      </section>

      {/* Descripción Section */}
      <section className="py-20 bg-linear-to-b from-white to-[#D2C1AD]/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Equipo de trabajo motivado" 
                className="rounded-2xl shadow-2xl w-full h-125 object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6">
                Bienestar Organizacional
              </h2>
              <div className="w-20 h-1 bg-[#D2C1AD] mb-8"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                La salud mental de tus colaboradores es fundamental para el éxito de tu 
                organización. Ofrezco servicios especializados de apoyo psicológico y 
                motivacional para equipos de trabajo, ayudando a crear ambientes laborales 
                más saludables y productivos.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A través de sesiones grupales e individuales, trabajo con equipos para mejorar 
                la comunicación, gestionar el estrés laboral, fortalecer la cohesión del grupo 
                y aumentar la motivación y el compromiso organizacional.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Mi enfoque combina la psicología organizacional con técnicas de coaching 
                motivacional, adaptándome a las necesidades específicas de cada equipo y 
                organización.
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              Servicios para tu Organización
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Servicio 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#D2C1AD]">
                <div className="w-16 h-16 bg-[#D2C1AD]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-[#98947B] mb-4">
                  Coaching Motivacional
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Sesiones diseñadas para aumentar la motivación, el compromiso y el sentido 
                  de propósito de tus colaboradores.
                </p>
              </div>

              {/* Servicio 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#91AFAD]">
                <div className="w-16 h-16 bg-[#91AFAD]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🧘</span>
                </div>
                <h4 className="text-xl font-bold text-[#98947B] mb-4">
                  Manejo de Estrés Laboral
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Herramientas y técnicas para identificar, prevenir y gestionar el estrés 
                  en el ambiente de trabajo.
                </p>
              </div>

              {/* Servicio 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#98947B]">
                <div className="w-16 h-16 bg-[#98947B]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-[#98947B] mb-4">
                  Cohesión de Equipos
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Fortalecimiento de relaciones interpersonales y trabajo colaborativo 
                  para equipos más unidos y efectivos.
                </p>
              </div>

              {/* Servicio 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#D2C1AD]">
                <div className="w-16 h-16 bg-[#D2C1AD]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h4 className="text-xl font-bold text-[#98947B] mb-4">
                  Comunicación Efectiva
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Talleres para mejorar la comunicación interna, reducir conflictos y 
                  fomentar un ambiente de trabajo positivo.
                </p>
              </div>

              {/* Servicio 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#91AFAD]">
                <div className="w-16 h-16 bg-[#91AFAD]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🌟</span>
                </div>
                <h4 className="text-xl font-bold text-[#98947B] mb-4">
                  Liderazgo Consciente
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Desarrollo de habilidades de liderazgo empático y efectivo para 
                  jefes y supervisores.
                </p>
              </div>

              {/* Servicio 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#98947B]">
                <div className="w-16 h-16 bg-[#98947B]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🔄</span>
                </div>
                <h4 className="text-xl font-bold text-[#98947B] mb-4">
                  Gestión del Cambio
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Apoyo psicológico durante procesos de cambio organizacional para 
                  facilitar la adaptación.
                </p>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-[#98947B] mb-8 text-center">
              Beneficios para tu Organización
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#D2C1AD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Reducción del Ausentismo</h4>
                  <p className="text-gray-600 text-sm">Mejora la salud mental y reduce las ausencias por estrés laboral.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#D2C1AD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Mayor Productividad</h4>
                  <p className="text-gray-600 text-sm">Equipos motivados trabajan de manera más eficiente y efectiva.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#D2C1AD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Mejor Clima Laboral</h4>
                  <p className="text-gray-600 text-sm">Crea ambientes de trabajo más positivos y saludables.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#D2C1AD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Retención de Talento</h4>
                  <p className="text-gray-600 text-sm">Colaboradores satisfechos se quedan más tiempo en la empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="¿Quieres Mejorar el Bienestar de tu Equipo?"
        description="Invierte en la salud mental de tus colaboradores y transforma tu organización. Contáctame para crear un programa personalizado."
      />
    </div>
  );
}