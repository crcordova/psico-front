import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Acerca de Mí - Tu Espacio Mental',
  description: 'Conoce más sobre mi experiencia y enfoque terapéutico en psicología clínica.',
};

export default function AcercaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden bg-linear-to-br from-[#D2C1AD] to-[#98947B]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Conoce mi Historia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Dedicada a tu bienestar emocional con más de 10 años de experiencia 
            en psicología clínica y terapia cognitivo-conductual
          </p>
        </div>
      </section>

      {/* Acerca de Mí - Section 1 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6">
                Hola, soy Consuelo
              </h2>
              <div className="w-20 h-1 bg-[#91AFAD] mb-8"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Creo profundamente que la terapia es uno de los proyectos más importantes de la vida, porque es la mejor 
                inversión que podemos hacer: invertir en nosotros mismos. Es el espacio para reiniciar, reenfocar y 
                volver a comenzar todas las veces que sea necesario.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Acompañar un proceso terapéutico es similar a cuidar un entorno natural: a veces es necesario detenerse, 
                observar, remover lo que ya no nutre y dar tiempo para que algo nuevo pueda crecer. El bienestar no 
                siempre es inmediato, pero cuando se construye con dedicación, se vuelve genuino y sostenible.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Cuento con experiencia clínica acompañando más de 200 historias reales, cada una única, 
                valiente y profundamente humana. Además, he trabajado en el sector público, lo que me ha 
                permitido conocer y manejar el sistema, integrando una mirada amplia, contextual y 
                comprometida con la realidad de cada persona.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Mi objetivo en terapia es acompañarte a alcanzar tus propios objetivos, promoviendo un 
                espacio seguro donde puedas sentirte bien contigo misma/o, conectar con tus recursos y 
                fortalecer tu bienestar emocional.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Porque nada verdaderamente importante se construye dedicándole solo el tiempo que sobra. La terapia es un acto de compromiso contigo.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4 bg-[#D2C1AD]/10 rounded-lg">
                  <div className="text-4xl font-bold text-[#91AFAD] mb-2">5+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-[#D2C1AD]/10 rounded-lg">
                  <div className="text-4xl font-bold text-[#91AFAD] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                </div>
                <div className="text-center p-4 bg-[#D2C1AD]/10 rounded-lg">
                  <div className="text-4xl font-bold text-[#91AFAD] mb-2">95%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-[#91AFAD]/20 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" 
                alt="Psicóloga profesional" 
                className="relative rounded-2xl shadow-2xl w-full h-150 object-cover"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-[#98947B] font-semibold mb-2">Mi Misión</p>
                <p className="text-gray-600 text-sm">
                  Crear un espacio seguro donde cada persona pueda encontrar su mejor versión
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que me Gusta - Section 2 */}
      <section className="py-20 bg-linear-to-b from-[#D2C1AD]/10 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-4">
              Mi Enfoque y Servicios
            </h2>
            <div className="w-20 h-1 bg-[#91AFAD] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ser psicóloga, para mí, es acompañar procesos de transformación, respetando los ritmos de cada persona. 
              No se trata de forzar cambios, sino de crear las condiciones necesarias para que el bienestar pueda 
              emerger de manera auténtica, como lo hace un paisaje cuando es cuidado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#91AFAD]">
              <div className="w-16 h-16 bg-[#91AFAD]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-[#98947B] mb-4">
                Enfoque Personalizado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cada persona es única, por eso adapto mi enfoque terapéutico a tus necesidades 
                específicas. No existen recetas universales, sino caminos personalizados hacia 
                el bienestar.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#D2C1AD]">
              <div className="w-16 h-16 bg-[#D2C1AD]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-[#98947B] mb-4">
                Basado en Evidencia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizo técnicas y métodos respaldados por la investigación científica. 
                La terapia cognitivo-conductual ha demostrado ser altamente efectiva para 
                diversos problemas emocionales.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#98947B]">
              <div className="w-16 h-16 bg-[#98947B]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-[#98947B] mb-4">
                Empatía y Calidez
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Más allá de las técnicas, ofrezco un espacio cálido y empático donde puedes 
                sentirte seguro para expresar tus emociones sin juicio ni presión.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#91AFAD]">
              <div className="w-16 h-16 bg-[#91AFAD]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-[#98947B] mb-4">
                Terapia Online
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La flexibilidad de la terapia online te permite acceder a sesiones desde 
                cualquier lugar de Chile, en horarios que se adapten a tu rutina.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#D2C1AD]">
              <div className="w-16 h-16 bg-[#D2C1AD]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-[#98947B] mb-4">
                Crecimiento Personal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No solo trabajo con problemas, también te acompaño en tu proceso de 
                crecimiento personal, ayudándote a descubrir tu potencial y fortalezas.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#98947B]">
              <div className="w-16 h-16 bg-[#98947B]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-[#98947B] mb-4">
                Confidencialidad Total
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tu privacidad es sagrada. Todo lo que compartimos en sesión se mantiene en 
                estricta confidencialidad, siguiendo los códigos éticos profesionales.
              </p>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-[#98947B] mb-8 text-center">
              Formación y Certificaciones
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#91AFAD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Psicóloga Clínica</h4>
                  <p className="text-gray-600 text-sm">Universidad de Chile, 2020</p>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#91AFAD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#98947B] mb-1">Registro Nacional</h4>
                  <p className="text-gray-600 text-sm">Colegio de Psicólogos de Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="¿Listo/a para comenzar? "
        description="Hablemos… aquí estoy escríbeme y cuéntame el motivo de tu consulta…"
      />
    </div>
  );
}