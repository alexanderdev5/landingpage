'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#productos', label: 'Productos' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#testimonios', label: 'Testimonios' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo - Mejorado */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-black text-lg">PW</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-gray-900 leading-tight">PrintWear Pro</h1>
              <p className="text-xs text-gray-500 font-medium">Manufactura Textil Premium</p>
            </div>
          </a>

          {/* Desktop Navigation - Mejorado */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 group/nav"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover/nav:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Corregido y Centrado */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#cotizar" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover-lift transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[140px] text-center"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile Menu Button - Mejorado */}
          <button 
            className="lg:hidden w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-gray-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></span>
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-gray-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-gray-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Mejorado */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-4 border-t border-gray-200 pt-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-semibold text-lg py-3 px-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#cotizar" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-bold text-lg text-center hover-lift transition-all duration-300 mt-2 mx-auto w-full max-w-[200px]"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300"
           style={{ 
             transform: `scaleX(${isScrolled ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0})` 
           }}>
      </div>
    </header>
  );
}