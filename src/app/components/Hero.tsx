import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mt-20">
      {/* Background Image Optimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Fábrica de prendas estampadas - PrintWear Pro"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
        />
        {/* Overlay profesional */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-900/70 to-purple-900/80"></div>
        {/* Textura sutil */}
        <div className="absolute inset-0 bg-noise-pattern opacity-[0.02]"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge de Élite */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 mb-12 animate-fade-in">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
              <span className="text-white font-medium text-sm">
                Proveedor Oficial de +75 Empresas Líderes
              </span>
            </div>

            {/* Título Principal - Profesional */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                <span className="block">Identidad Textil</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  que Inspira
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                Desarrollamos <span className="text-yellow-400 font-semibold">colecciones exclusivas</span> de uniformes 
                corporativos que fortalecen tu marca y unen a tu equipo
              </p>
            </div>

            {/* Métricas de Impacto */}
            <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
              {[
                { number: "98%", label: "Clientes Satisfechos" },
                { number: "24h", label: "Cotización Inmediata" },
                { number: "15K+", label: "Prendas Mensuales" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {metric.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section - Profesional */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="#cotizar" 
                className="group relative bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 px-12 py-5 rounded-2xl font-bold text-lg hover-lift transition-all duration-300 shadow-2xl hover:shadow-3xl min-w-[280px] text-center"
              >
                <span className="flex items-center justify-center gap-3">
                  Iniciar Proyecto
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#productos" 
                className="group relative bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover-lift hover:bg-white/5 transition-all duration-300 backdrop-blur-sm min-w-[280px] text-center"
              >
                <span className="flex items-center justify-center gap-3">
                  Explorar Colección
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Beneficios Corporativos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
              {[
                { icon: "🏭", text: "Fabricación Directa" },
                { icon: "🎨", text: "Diseño Premium" },
                { icon: "⚡", text: "Producción Ágil" },
                { icon: "💰", text: "Precios Corporativos" }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <div className="text-white/70 text-sm font-medium">{benefit.text}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-white/20 pt-12">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-8">
                Confiado por líderes de industria
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
                {["Empresas", "Instituciones", "Clubes", "Organizaciones"].map((industry, index) => (
                  <div key={index} className="text-white/50 text-lg font-light">
                    {industry}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator Sutil */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-slow">
          <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}