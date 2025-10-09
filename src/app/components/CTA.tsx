'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z.string().min(9, 'El teléfono debe tener al menos 9 dígitos'),
  product: z.string().min(1, 'Selecciona un producto'),
  quantity: z.string().min(1, 'Selecciona una cantidad'),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function CTA() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulario enviado:', data);
      alert('¡Gracias! Te contactaremos dentro de 2 horas.');
      reset();
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    }
  };

  return (
    <section id="cotizar" className="section-padding bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content - Mejorado */}
            <div className="text-white">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                COTIZACIÓN EXPRESS
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Transforma Tu
                <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Proyecto Textil
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Recibe una propuesta personalizada con precios competitivos y soluciones 
                adaptadas a tus necesidades específicas en menos de 2 horas
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Cotización detallada en 2 horas",
                  "Asesoría técnica especializada",
                  "Muestras físicas sin costo",
                  "Planes flexibles por volumen"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-blue-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info - Mejorado */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-yellow-300 mb-4 text-lg">📞 Contacto Directo</h3>
                <div className="space-y-2">
                  <p className="text-blue-100 font-medium">+51 999 888 777</p>
                  <p className="text-blue-100 font-medium">ventas@printwearpro.com</p>
                  <p className="text-blue-100/80 text-sm">Lun - Vie: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Form - Mejorado con React Hook Form + Zod */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Name & Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Empresa/Institución *
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.company ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Nombre de tu organización"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Teléfono *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="+51 999 888 777"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Product & Quantity */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Producto de Interés *
                    </label>
                    <select
                      {...register('product')}
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.product ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Seleccionar producto</option>
                      <option value="polos">Polos Corporativos</option>
                      <option value="chompas">Chompas Deportivas</option>
                      <option value="polo">Polos Polo Ejecutivos</option>
                      <option value="hoodies">Hoodies & Sudaderas</option>
                    </select>
                    {errors.product && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.product.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Cantidad Aproximada *
                    </label>
                    <select
                      {...register('quantity')}
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.quantity ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Seleccionar cantidad</option>
                      <option value="12-24">12 - 24 unidades</option>
                      <option value="25-49">25 - 49 unidades</option>
                      <option value="50-99">50 - 99 unidades</option>
                      <option value="100-249">100 - 249 unidades</option>
                      <option value="250+">250+ unidades</option>
                    </select>
                    {errors.quantity && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.quantity.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">
                    Mensaje o Requerimientos Especiales
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300 resize-none"
                    placeholder="Describe tu proyecto, incluye detalles de diseño, colores, logos, fechas importantes, etc."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl font-bold text-lg hover-lift transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Procesando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      🚀 Solicitar Cotización Gratuita
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-center text-sm text-gray-500 font-medium">
                  🔒 Tus datos están seguros. Te contactaremos en menos de 2 horas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}