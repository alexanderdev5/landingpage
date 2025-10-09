export default function Products() {
  const products = [
    {
      name: "Polos Corporativos",
      description: "Algodón premium de alta densidad para una presencia profesional impecable",
      price: "Desde S/. 15",
      minOrder: "Mínimo 12 unidades",
      image: "👔",
      features: ["Algodón 100% peinado", "Costuras reforzadas", "Tallas S-XXL", "Estampado HD"],
      popular: true
    },
    {
      name: "Chompas Deportivas",
      description: "Tecnología dry-fit para máximo rendimiento y comodidad en movimiento",
      price: "Desde S/. 25",
      minOrder: "Mínimo 12 unidades",
      image: "⚽",
      features: ["Poliéster técnico", "Respirabilidad superior", "Secado rápido", "Estampado sublimado"],
      popular: false
    },
    {
      name: "Polos Polo Ejecutivos",
      description: "Elegancia y durabilidad para directivos y personal de atención al cliente",
      price: "Desde S/. 20",
      minOrder: "Mínimo 12 unidades",
      image: "🎯",
      features: ["Cuello piqué reforzado", "Botonadura premium", "Corte moderno", "Telas anti-arrugas"],
      popular: true
    },
    {
      name: "Hoodies & Sudaderas",
      description: "Confort premium para equipos, eventos corporativos y promociones",
      price: "Desde S/. 35",
      minOrder: "Mínimo 12 unidades",
      image: "🧥",
      features: ["Forro polar de calidad", "Capucha ajustable", "Bolsillo canguro", "Ribetes en puños"],
      popular: false
    }
  ];

  return (
    <section id="productos" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            COLECCIÓN PREMIUM
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Línea Textil
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Diseñamos prendas que combinan innovación, confort y durabilidad para 
            proyectos corporativos, institucionales y deportivos de alto nivel
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-sm hover-lift border border-gray-100 overflow-hidden transition-all duration-500"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              {/* Product Image Section */}
              <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 p-12 text-center overflow-hidden">
                <div className="relative z-10 text-7xl transform group-hover:scale-110 transition-transform duration-500">
                  {product.image}
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Order Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="text-2xl font-black text-blue-600">{product.price}</div>
                    <div className="text-xs text-gray-500 font-medium">por unidad</div>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{product.minOrder}</div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 rounded-xl font-bold text-lg hover-lift transition-all duration-300 group/btn">
                  <span className="flex items-center justify-center gap-3">
                    Cotizar Producto
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-white m-0.5 h-[calc(100%-4px)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-16 text-white max-w-6xl mx-auto relative overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-6">
                ¿Necesitas una Solución Personalizada?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Desarrollamos prendas específicas para tu industria con materiales especializados 
                y técnicas de estampado avanzadas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#cotizar" 
                  className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-bold text-lg hover-lift transition-all duration-300 shadow-2xl hover:shadow-3xl min-w-[280px] text-center"
                >
                  <span className="flex items-center justify-center gap-3">
                    📋 Solicitar Catálogo Completo
                  </span>
                </a>
                
                <a 
                  href="#contacto" 
                  className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover-lift hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-w-[280px] text-center"
                >
                  <span className="flex items-center justify-center gap-3">
                    👨‍💼 Consultoría Especializada
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}