
export const metadata = {
  title: 'Contacto - Tu Espacio Mental',
  description: 'Conoce más sobre mi experiencia y enfoque terapéutico en psicología clínica.',
};

export default function ContactPage() {
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
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Contacto
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                        Estemos en Contacto
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* CTA Card - Ahora a la izquierda */}
                        <div className="order-1 lg:order-1">
                            <div className="relative bg-white rounded-2xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-12 h-12 bg-linear-to-br from-[#91AFAD] to-[#7fa3a0] rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mt-4 text-center">
                                    <h3 className="text-3xl font-bold text-[#98947B] mb-3">
                                        ¿Conversamos?
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        Escríbeme y coordinemos el mejor momento para ti
                                    </p>

                                    <div className="flex flex-col gap-4">
                                        {/* WhatsApp Button */}
                                        <a
                                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                                        >
                                            <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                            </svg>
                                            Contactar por WhatsApp
                                        </a>

                                        {/* Email Button */}
                                        <a
                                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                            className="group px-8 py-4 bg-white text-[#98947B] rounded-full font-semibold text-lg border-2 border-[#98947B] hover:bg-[#D2C1AD] hover:text-white hover:border-[#D2C1AD] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                                        >
                                            <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Enviar un Correo
                                        </a>
                                    </div>

                                    {/* Información adicional */}
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            Te responderé personalmente en menos de 24 horas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content - Ahora a la derecha */}
                        <div className="order-2 lg:order-2">
                            <div className="lg:pl-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#98947B] mb-6 leading-tight">
                                    Estoy aquí para escucharte
                                </h2>
                                <div className="w-20 h-1 bg-[#91AFAD] mb-8 rounded-full"></div>
                                
                                <div className="space-y-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Iniciar un proceso terapéutico es una decisión valiente. A veces surge desde una crisis,
                                        otras desde el deseo de comprenderte mejor o vivir con mayor bienestar emocional.
                                    </p>

                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Si sientes que es momento de conversar, aclarar dudas o agendar una primera sesión,
                                        puedes escribirme con total confianza. Te responderé personalmente.
                                    </p>

                                    {/* Info Cards */}
                                    <div className="mt-10 space-y-4">
                                        <div className="flex items-start space-x-4 p-4 bg-[#91AFAD]/10 rounded-xl">
                                            <div className="shrink-0">
                                                <div className="w-10 h-10 bg-[#91AFAD] rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#98947B] mb-1">Respuesta Rápida</h4>
                                                <p className="text-gray-600 text-sm">Contesto todos los mensajes en menos de 24 horas</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-[#D2C1AD]/10 rounded-xl">
                                            <div className="shrink-0">
                                                <div className="w-10 h-10 bg-[#D2C1AD] rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#98947B] mb-1">Confidencialidad</h4>
                                                <p className="text-gray-600 text-sm">Tu privacidad está protegida en todo momento</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}