export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Consultoría Inicial",
      description: "Analizamos tus necesidades específicas y desarrollamos una propuesta estratégica personalizada",
      icon: "🎯",
      duration: "2-4 horas"
    },
    {
      step: "02",
      description: "Presentamos muestras físicas de telas y técnicas de estampado para validar calidad y acabados",
      title: "Validación de Materiales",
      icon: "🔍",
      duration: "24 horas"
    },
    {
      step: "03",
      title: "Producción Avanzada",
      description: "Ejecutamos el proceso con tecnología de punta y supervisión de calidad en cada etapa",
      icon: "⚙️",
      duration: "3-5 días"
    },
    {
      step: "04",
      title: "Entrega Premium",
      description: "Coordinamos logística especializada con seguimiento en tiempo real y protocolos de entrega",
      icon: "🚀",
      duration: "1-2 días"
    }
  ];

  return (
    <section id="proceso" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            PROCESO GARANTIZADO
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Experiencia
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sin Complicaciones
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Flujo de trabajo optimizado que garantiza resultados excepcionales 
            desde la conceptualización hasta la entrega final
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-200 to-purple-200 z-0 rounded-full">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-full animate-pulse-slow"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-8 shadow-sm hover-lift border border-gray-100 transition-all duration-500 h-full">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg">
                    {step.step}
                  </div>

                  {/* Step Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {step.description}
                    </p>
                    
                    {/* Duration */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className="rounded-3xl bg-white m-0.5 h-[calc(100%-4px)]"></div>
                  </div>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full">
                      <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Assurance Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              GARANTÍA DE SATISFACCIÓN
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              ¿Listo para Transformar tu Proyecto Textil?
            </h3>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Iniciamos con una consultoría gratuita donde definimos objetivos, 
              materiales y cronograma para garantizar el éxito de tu inversión
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#cotizar" 
                className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-bold text-lg hover-lift transition-all duration-300 shadow-2xl hover:shadow-3xl min-w-[280px] text-center group"
              >
                <span className="flex items-center justify-center gap-3">
                  🚀 Iniciar Proyecto
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#contacto" 
                className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover-lift hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-w-[280px] text-center group"
              >
                <span className="flex items-center justify-center gap-3">
                  📞 Agenda Llamada
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-white/20">
              {[
                "✅ Calidad Certificada",
                "⚡ Respuesta en 2h",
                "💰 Precios Directos de Fábrica",
                "🚚 Envío a Nivel Nacional"
              ].map((badge, index) => (
                <div key={index} className="text-white/80 text-sm font-medium">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}