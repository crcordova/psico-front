
import Link from 'next/link';
import ExperienceCard from '../components/ExperienceCard';
import CTASection from "../components/CTASection";
import { experiences } from '../data/experiences-data';

export default function Home() {


  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/GIF with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#98947B]/90 to-[#91AFAD]/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&q=80" 
            alt="Terapia psicológica" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tu Bienestar Mental
            <span className="block text-[#D2C1AD]">Comienza Aquí</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Acompañamiento profesional y empático para que encuentres tu mejor versión. 
            Terapia psicológica online en todo Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Agendar Sesión
            </a>
            <Link
              href="/contacto"
              className="px-8 py-4 bg-white text-[#98947B] rounded-full font-semibold text-lg hover:bg-[#D2C1AD] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Acerca de Mí Section */}
      <section className="py-20 bg-linear-to-b from-white to-[#D2C1AD]/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#91AFAD]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Psicóloga profesional" 
                className="relative rounded-2xl shadow-2xl w-full h-125 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6">
                Sobre Mí
              </h2>
              <div className="w-20 h-1 bg-[#91AFAD] mb-8"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Soy psicóloga clínica con más de 10 años de experiencia ayudando a personas 
                a superar sus desafíos emocionales y alcanzar una vida más plena y significativa.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Mi enfoque terapéutico se centra en crear un espacio seguro, confidencial y libre 
                de juicios, donde puedas explorar tus pensamientos y emociones con total confianza.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Creo firmemente que cada persona tiene la capacidad de sanar y crecer. 
                Mi rol es acompañarte en ese proceso, brindándote las herramientas y el apoyo 
                necesario para que logres tus objetivos.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-[#91AFAD] text-white rounded-lg font-semibold hover:bg-[#98947B] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Conocer más sobre mí
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencias Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-4">
              Experiencias Psicologicas
            </h2>
            <div className="w-20 h-1 bg-[#91AFAD] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ofrezco servicios especializados en diferentes áreas de la psicología 
              para atender tus necesidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                image={exp.image}
                title={exp.title}
                description={exp.description}
                color={exp.color}
                link={exp.link}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title='¿Listo para Comenzar tu Proceso?'
        description='Da el primer paso hacia una vida más equilibrada y feliz. Agenda tu primera sesión hoy mismo.'
      />
      
    </div>
  );
}