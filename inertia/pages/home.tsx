import { Link } from '@inertiajs/react'
import Footer from '~/components/partials/Footer'
import Testimonials from '~/components/Testimonials'
import Cta from '~/sections/Cta'
import FaqGrid from '~/sections/Faqs'
import ServicesScroll from '~/sections/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-black flex flex-col justify-center px-8 pt-20">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tighter tracking-tight max-w-5xl">
          Transformez vos envies digitales en réalité.
        </h1>
        <button
          className="mt-8 px-10 py-3 bg-white text-black font-semibold max-w-max 
                     hover:bg-gray-200 hover:scale-105 hover:shadow-lg 
                     transition transform duration-300 ease-in-out"
          onClick={() => alert('Contactez-moi !')}
        >
          Me contacter
        </button>
      </div>
      <ServicesScroll />
      <Testimonials />
      <FaqGrid />
      <Cta />
      <Footer />
    </>
  )
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 px-8 py-6 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* Titre */}
        <div className="flex flex-col items-start">
          <h1 className="text-white font-bold text-xl mb-2 text-left">tshr29 Studio</h1>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start">
          <h2 className="uppercase text-gray-400 tracking-widest mb-2 font-semibold text-xs text-left">
            Services
          </h2>
          <ul className="space-y-1 text-left">
            <li>Création de sites web</li>
            <li>Design UI/UX</li>
            <li>Développement React & Tailwind</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <h2 className="uppercase text-gray-400 tracking-widest mb-2 font-semibold text-xs text-left">
            Contact
          </h2>
          <address className="not-italic space-y-1 text-left">
            <p>123 Rue Exemple, Paris</p>
            <Link href="/contact" className="underline hover:text-white">
              Page Contact
            </Link>
          </address>
        </div>
      </div>
    </nav>
  )
}
