export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          
          {/* Company Info - Mejorado */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">PW</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">PrintWear Pro</h3>
                <p className="text-gray-300 text-sm font-medium">Manufactura Textil Premium</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6 text-lg">
              Especialistas en soluciones textiles corporativas que combinan innovación, 
              calidad y servicio excepcional para empresas líderes.
            </p>
            <div className="flex gap-3">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ), 
                  label: "Facebook", 
                  href: "#",
                  color: "hover:bg-blue-600"
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 12.014 0 12.017 0 12.017 0z"/>
                    </svg>
                  ), 
                  label: "Instagram", 
                  href: "#",
                  color: "hover:bg-pink-600"
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                    </svg>
                  ), 
                  label: "WhatsApp", 
                  href: "#",
                  color: "hover:bg-green-600"
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ), 
                  label: "LinkedIn", 
                  href: "#",
                  color: "hover:bg-blue-500"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info - Mejorado */}
          <div>
            <h4 className="text-xl font-black mb-6 text-white">Contacto Directo</h4>
            <div className="space-y-4">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ), 
                  text: "+51 999 888 777", 
                  subtext: "Línea Principal" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ), 
                  text: "ventas@printwearpro.com", 
                  subtext: "Email Corporativo" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ), 
                  text: "Lima, Perú", 
                  subtext: "Oficina Central" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  ), 
                  text: "Lun - Vie: 8:00 AM - 6:00 PM", 
                  subtext: "Horario de Atención" 
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gray-700 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{contact.text}</div>
                    <div className="text-gray-400 text-sm">{contact.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - Mejorado */}
          <div>
            <h4 className="text-xl font-black mb-6 text-white">Navegación</h4>
            <div className="space-y-3">
              {[
                { href: "#beneficios", label: "Beneficios Premium" },
                { href: "#productos", label: "Colección" },
                { href: "#proceso", label: "Proceso" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#cotizar", label: "Cotización" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Mejorada */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 font-medium">
                &copy; 2025 PrintWear Pro. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Innovando en soluciones textiles desde 2018
              </p>
            </div>

            {/* Legal Links - Mejorados */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { href: "#", label: "Política de Privacidad" },
                { href: "#", label: "Términos de Servicio" },
                { href: "#", label: "Política de Cookies" },
                { href: "#", label: "Aviso Legal" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Sitio 100% Seguro</span>
            </div>
          </div>
        </div>

      </div>

      {/* Gradient Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
    </footer>
  );
}