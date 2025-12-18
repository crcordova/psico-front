
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { experiences } from "../data/experiences-data";
import { terapias } from "../data/terapia-data";

const Header = () => {
  const [experienciasOpen, setExperienciasOpen] = useState(false);
  const [terapiasOpen, setTerapiasOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú mobile al cambiar de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenir scroll cuando el menú mobile está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleExperiencias = () => {
    setExperienciasOpen(!experienciasOpen);
    setTerapiasOpen(false);
  };

  const toggleTerapias = () => {
    setTerapiasOpen(!terapiasOpen);
    setExperienciasOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExperienciasOpen(false);
    setTerapiasOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <div className="w-12 h-12 bg-[#91AFAD] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">PSI</span>
            </div>
            <span className="ml-3 text-[#98947B] font-semibold text-lg">
              {process.env.NEXT_PUBLIC_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium"
            >
              Acerca de Mí
            </Link>

            {/* Experiencias Dropdown Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setExperienciasOpen(true)}
              onMouseLeave={() => setExperienciasOpen(false)}
            >
              <button 
                type='button'
                className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium flex items-center"
              >
                Experiencias
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${experienciasOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`
                  absolute top-full left-0 mt-2 w-64
                  bg-white rounded-xl shadow-xl border border-gray-100
                  transition-all duration-200
                  ${experienciasOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                `}
              >
                {experiences.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    className="block px-5 py-3 text-[#98947B] hover:bg-[#D2C1AD]/20 transition-colors"
                  >
                    <div className="font-medium">{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Terapias Dropdown Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setTerapiasOpen(true)}
              onMouseLeave={() => setTerapiasOpen(false)}
            >
              <button 
                type='button'
                className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium flex items-center"
              >
                Terapias
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${terapiasOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`
                  absolute top-full left-0 mt-2 w-64
                  bg-white rounded-xl shadow-xl border border-gray-100
                  transition-all duration-200
                  ${terapiasOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                `}
              >
                {terapias.map((item) => (
                  <Link
                    key={item.title}
                    href={`/terapia/${item.slug}`}
                    className="block px-5 py-3 text-[#98947B] hover:bg-[#D2C1AD]/20 transition-colors"
                  >
                    <div className="font-medium">{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/blog" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            
            <Link 
              href="/contacto" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#98947B] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Icono de cerrar (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono de hamburguesa
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 top-20 bg-white z-40
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium py-2"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium py-2"
              onClick={closeMenu}
            >
              Acerca de Mí
            </Link>

            {/* Experiencias Accordion Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button 
                type='button'
                onClick={toggleExperiencias}
                className="w-full text-left text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium py-2 flex items-center justify-between"
              >
                Experiencias
                <svg 
                  className={`w-5 h-5 transition-transform ${experienciasOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${experienciasOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="pl-4 pt-2 space-y-2">
                  {experiences.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="block py-2 text-[#98947B] hover:text-[#91AFAD] transition-colors"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Terapias Accordion Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button 
                type='button'
                onClick={toggleTerapias}
                className="w-full text-left text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium py-2 flex items-center justify-between"
              >
                Terapias
                <svg 
                  className={`w-5 h-5 transition-transform ${terapiasOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${terapiasOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="pl-4 pt-2 space-y-2">
                  {terapias.map((item) => (
                    <Link
                      key={item.title}
                      href={`/terapia/${item.slug}`}
                      className="block py-2 text-[#98947B] hover:text-[#91AFAD] transition-colors"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/blog" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium py-2 border-t border-gray-200 pt-4"
              onClick={closeMenu}
            >
              Blog
            </Link>

            <Link 
              href="/contacto" 
              className="text-[#98947B] hover:text-[#91AFAD] transition-colors duration-200 font-medium py-2 border-t border-gray-200 pt-4"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay para cerrar el menú mobile */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;