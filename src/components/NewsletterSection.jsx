// components/NewsletterSection.jsx
'use client';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulación de envío (aquí integrarías con tu servicio de email)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-linear-to-br from-[#91AFAD] to-[#98947B]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Suscríbete a Nuestro Newsletter
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Recibe contenido exclusivo sobre salud mental, tips de bienestar y las últimas 
            novedades del blog directamente en tu correo. ¡Sin spam, solo valor!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                disabled={status === 'loading' || status === 'success'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 bg-white text-[#98947B] rounded-full font-semibold hover:bg-[#D2C1AD] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Suscrito!' : 'Suscribirme'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-white mt-4 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ¡Gracias por suscribirte! Revisa tu correo.
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-200 mt-4">
                Hubo un error. Por favor intenta nuevamente.
              </p>
            )}
          </form>

          <p className="text-white/70 text-sm mt-6">
            📧 Enviamos un newsletter mensual • Puedes cancelar cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;