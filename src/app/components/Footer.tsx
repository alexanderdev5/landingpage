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
            <div className="flex gap-4">
              {[
                { icon: "📘", label: "Facebook", href: "#" },
                { icon: "📷", label: "Instagram", href: "#" },
                { icon: "💬", label: "WhatsApp", href: "#" },
                { icon: "💼", label: "LinkedIn", href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
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
                { icon: "📞", text: "+51 999 888 777", subtext: "Línea Principal" },
                { icon: "✉️", text: "ventas@printwearpro.com", subtext: "Email Corporativo" },
                { icon: "🏢", text: "Lima, Perú", subtext: "Oficina Central" },
                { icon: "🕐", text: "Lun - Vie: 8:00 AM - 6:00 PM", subtext: "Horario de Atención" }
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gray-700 group-hover:bg-blue-600 rounded-lg flex items-center justify-center text-lg transition-all duration-300 flex-shrink-0">
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