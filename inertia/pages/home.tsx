import { Head, Link } from '@inertiajs/react'
import Footer from '~/components/Footer'
import Testimonials from '~/sections/Testimonials'
import Cta from '~/sections/Cta'
import FaqGrid from '~/sections/Faqs'
import ServicesScroll from '~/sections/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Création de sites internet à Sarreguemines | tshr29 Studio</title>
        <meta
          name="description"
          content="Agence web à Sarreguemines spécialisée dans la création de sites internet, design UX/UI et communication digitale. Donnez vie à vos projets avec tshr29 Studio."
        />
      </Head>

      <div className="h-screen bg-black flex flex-col justify-center px-8 pt-20">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tighter tracking-tight max-w-7xl">
          Agence digitale à Sarreguemines — sites web, design et communication.
        </h1>
        <p className="text-white text-xl mt-4">
          Nous aidons les entreprises locales à développer leur présence en ligne avec des solutions
          modernes et personnalisées.
        </p>
        <button
          className="mt-8 px-10 py-3 bg-white text-black font-semibold max-w-max hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition transform duration-300 ease-in-out"
          onClick={() => alert('Contactez-moi !')}
        >
          Me contacter
        </button>
      </div>
      <ServicesScroll />
      <FaqGrid />
      <Testimonials />
      <Cta />
    </>
  )
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent bg-opacity-90 backdrop-blur-sm z-50 px-8 py-6 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* Titre */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <div className="text-white font-bold text-xl mb-2 text-left">Tshr29</div>
          </Link>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="uppercase text-gray-400 tracking-widest mb-2 font-semibold text-xs text-left">
            Services
          </h2>
          <ul className="space-y-1 text-left">
            <li>Développement web</li>
            <li>Design graphique</li>
            <li>Communication digitale</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <h2 className="uppercase text-gray-400 tracking-widest mb-2 font-semibold text-xs text-left">
            Contact
          </h2>
          <address className="not-italic space-y-1 text-left">
            <p>Sarreguemines, 57200, France</p>
            <Link href="/contact" className="underline hover:text-white">
              Parlons de votre projet !
            </Link>
          </address>
        </div>
      </div>
    </nav>
  )
}
