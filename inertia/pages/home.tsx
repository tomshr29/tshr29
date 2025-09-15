import { Head } from '@inertiajs/react'
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
