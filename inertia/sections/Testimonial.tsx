import { motion } from 'framer-motion'
import FiverrLogo from '../../resources/assets/Fiverr.png'

const testimonials = [
  {
    name: 'epakompri',
    comment: "Merci pour ton travail ! Je n'hésiterai pas à recommander tes services.",
    role: 'Client Fiverr',
    logo: FiverrLogo,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-start">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-neutral-900 text-6xl lg:text-7xl tracking-tighter mb-10"
        >
          Ils nous font confiance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-8 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-600 text-lg italic mb-4">“{testimonial.comment}”</p>
              <div className="flex items-center justify-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <img
                    src={testimonial.logo}
                    alt="Client Logo"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
