export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      company: "Tech Solutions SAC",
      role: "Gerente General",
      image: "💼",
      content: "Llevamos más de 2 años confiando en PrintWear Pro para nuestros uniformes corporativos. La consistencia en calidad y su enfoque en el servicio al cliente han sido fundamentales para nuestra partnership.",
      rating: 5,
      project: "200+ Uniformes Corporativos"
    },
    {
      name: "María González",
      company: "Colegio Santa María",
      role: "Directora Académica",
      image: "👩‍🏫",
      content: "Los polos para nuestro personal docente mantienen su color y forma incluso después de 50+ lavados. La durabilidad del estampado ha superado todas nuestras expectativas.",
      rating: 5,
      project: "150 Polos Institucionales"
    },
    {
      name: "Roberto Silva",
      company: "Club Deportivo Victoria",
      role: "Presidente",
      image: "⚽",
      content: "Las chompas para nuestro equipo profesional combinan perfectamente estilo y funcionalidad. Su capacidad para cumplir plazos ajustados nos ha permitido concentrarnos en la competencia.",
      rating: 5,
      project: "85 Chompas Deportivas"
    },
    {
      name: "Ana Martínez",
      company: "Global Consulting Group",
      role: "Directora de Marketing",
      image: "🌟",
      content: "El nivel de detalle en el bordado corporativo y la asesoría en diseño han elevado nuestra identidad de marca. Una inversión que realmente ha impactado nuestra imagen.",
      rating: 5,
      project: "300 Polos Ejecutivos"
    }
  ];

  const industries = [
    { name: "Tecnología", count: "18", icon: "💻" },
    { name: "Educación", count: "22", icon: "🎓" },
    { name: "Deportes", count: "15", icon: "🏆" },
    { name: "Consultoría", count: "12", icon: "📊" },
    { name: "Salud", count: "8", icon: "⚕️" },
    { name: "Retail", count: "10", icon: "🛍️" }
  ];

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-blue-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            CASOS DE ÉXITO VERIFICADOS
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            La Voz de Nuestra
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comunidad
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubre por más de 75 empresas líderes confían en nuestra experiencia 
            para proyectos textiles que marcan la diferencia
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover-lift border border-gray-100 transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">Excelente</span>
              </div>
              
              {/* Content */}
              <div className="relative mb-8">
                <div className="text-6xl absolute -top-4 -left-2 text-blue-100 opacity-50">"</div>
                <p className="text-gray-700 text-lg leading-relaxed relative z-10 pl-6">
                  {testimonial.content}
                </p>
              </div>

              {/* Project Info */}
              <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                <div className="text-sm text-blue-700 font-semibold">Proyecto Entregado</div>
                <div className="text-blue-900 font-bold">{testimonial.project}</div>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-600 font-medium">{testimonial.role}</div>
                  <div className="text-blue-600 font-semibold">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-white m-0.5 h-[calc(100%-4px)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Líderes de Industria que Confían en Nosotros
            </h3>
            <p className="text-xl text-gray-600">
              Más de 75 empresas transformando su identidad textil con nuestras soluciones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="text-center group hover-lift transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">{industry.count}</div>
                <div className="text-gray-600 font-medium text-sm">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-16 text-white relative overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-6">
                ¿Listo para Unirte a Nuestra Comunidad?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Descubre por qué empresas líderes eligen PrintWear Pro para sus proyectos textiles más importantes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#cotizar" 
                  className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-bold text-lg hover-lift transition-all duration-300 shadow-2xl hover:shadow-3xl min-w-[280px] text-center group"
                >
                  <span className="flex items-center justify-center gap-3">
                    💼 Iniciar Proyecto
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                
                <a 
                  href="#casos-exito" 
                  className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover-lift hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-w-[280px] text-center group"
                >
                  <span className="flex items-center justify-center gap-3">
                    📚 Ver Casos de Éxito
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">98%</div>
                  <div className="text-blue-100 text-sm">Tasa de Retención</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">4.9/5</div>
                  <div className="text-blue-100 text-sm">Rating Promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">75+</div>
                  <div className="text-blue-100 text-sm">Clientes Activos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}