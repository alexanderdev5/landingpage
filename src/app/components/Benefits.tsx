export default function Benefits() {
  const benefits = [
    {
      icon: "🎨",
      title: "Diseño Exclusivo",
      description: "Desarrollamos identidades visuales únicas que reflejan la esencia de tu marca y conectan con tu audiencia"
    },
    {
      icon: "🏭",
      title: "Manufactura Integral",
      description: "Controlamos cada etapa del proceso, desde la selección de telas hasta el estampado final con estándares premium"
    },
    {
      icon: "⚡",
      title: "Logística Express",
      description: "Sistema de producción optimizado que garantiza entregas urgentes en 24-48 horas sin comprometer la calidad"
    },
    {
      icon: "💎",
      title: "Calidad Certificada",
      description: "Materiales premium y técnicas de estampado que aseguran durabilidad y resistencia a múltiples lavados"
    },
    {
      icon: "📊",
      title: "Soluciones Escalables",
      description: "Planes flexibles que se adaptan a proyectos de 12 a 10,000+ unidades con eficiencia en costos"
    },
    {
      icon: "🤝",
      title: "Asesoría Especializada",
      description: "Equipo de consultores que guía cada proyecto desde la conceptualización hasta la implementación final"
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            VENTAJAS COMPETITIVAS
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Excelencia en Cada
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Detalle
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Integramos innovación, calidad y servicio para ofrecer soluciones textiles 
            que superan expectativas y potencian tu identidad corporativa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-sm hover-lift border border-gray-100 transition-all duration-500"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-white m-0.5 h-[calc(100%-4px)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              ¿Listo para Transformar tu Identidad Textil?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo podemos elevar la presencia de tu marca
            </p>
            <a 
              href="#cotizar" 
              className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover-lift transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Agendar Consultoría
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}