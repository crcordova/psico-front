// app/terapia/page.js
import CTASection from '../../components/CTASection';
import TerapiaCard from '../../components/TerapiaCard';
import { terapias } from '../../data/terapia-data';

export const metadata = {
  title: 'Terapia Tradicional - Tu Espacio Mental',
  description: 'Terapia individual, de pareja y familiar con enfoque cognitivo-conductual.',
};

export default function TerapiaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#91AFAD]/90 to-[#98947B]/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&q=80" 
            alt="Terapia tradicional" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Terapia Tradicional
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Un espacio seguro para tu crecimiento emocional y bienestar personal
          </p>
        </div>
      </section>

      {/* Descripción Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6">
                ¿Qué es la Terapia Tradicional?
              </h2>
              <div className="w-20 h-1 bg-[#91AFAD] mb-8"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                La terapia tradicional es el enfoque clásico de la psicología, donde trabajamos 
                juntos en un espacio confidencial y seguro para abordar tus desafíos emocionales, 
                mejorar tus relaciones y alcanzar tus metas personales.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Utilizo principalmente el enfoque cognitivo-conductual (TCC), que ha demostrado 
                ser altamente efectivo para tratar una amplia variedad de problemas psicológicos. 
                Este método se centra en identificar y modificar patrones de pensamiento y 
                comportamiento que están afectando tu bienestar.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Ya sea que estés lidiando con ansiedad, depresión, problemas de pareja o 
                simplemente buscando crecer como persona, estoy aquí para acompañarte en 
                cada paso del camino.
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Sesión de terapia" 
                className="rounded-2xl shadow-2xl w-full h-125 object-cover"
              />
            </div>
          </div>

          {/* Modalidades */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              Modalidades de Terapia
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {terapias.map((terapia, index) => (
                <TerapiaCard key={index} terapia={terapia} />
              ))}
            </div>
          </div>

          {/* Proceso Terapéutico */}
          <div className="bg-linear-to-br from-[#91AFAD]/5 to-transparent rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-[#98947B] mb-10 text-center">
              ¿Cómo Funciona el Proceso?
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#91AFAD] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Primera Sesión</h4>
                <p className="text-gray-600 text-sm">
                  Nos conocemos, evalúo tu situación y definimos objetivos terapéuticos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#91AFAD] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Plan de Trabajo</h4>
                <p className="text-gray-600 text-sm">
                  Creamos un plan personalizado con estrategias específicas para ti.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#91AFAD] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Sesiones Regulares</h4>
                <p className="text-gray-600 text-sm">
                  Trabajamos juntos aplicando técnicas y herramientas terapéuticas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#91AFAD] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  4
                </div>
                <h4 className="font-semibold text-[#98947B] mb-2">Evaluación</h4>
                <p className="text-gray-600 text-sm">
                  Monitoreamos tu progreso y ajustamos el plan según sea necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="¿Listo para Comenzar tu Terapia?"
        description="Agenda tu primera sesión y comienza tu camino hacia el bienestar emocional. Estoy aquí para acompañarte en cada paso."
      />
    </div>
  );
}