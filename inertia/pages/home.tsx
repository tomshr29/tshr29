import { Head, Link } from '@inertiajs/react'
import Cta from '~/sections/Cta'
import FaqGrid from '~/sections/Faqs'
import HowItWorks from '~/sections/HowItWorks'
import ServicesScroll from '~/sections/Services'
import Testimonials from '~/sections/Testimonials'

const projets = [
  {
    color: 'bg-red-50',
  },
  {
    color: 'bg-blue-50',
  },
]

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

      <div className="relative isolate px-6 pb-14 pt-32 lg:px-8 h-screen flex items-center bg-black">
        <div className="text-start max-w-7xl mx-auto">
          <h1 className="text-6xl scale-y-95 fontme tracking-tight text-balance text-white sm:text-8xl">
            Agence digitale - sites web, design & communication.
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Nous aidons les entreprises à se démarquer en ligne grâce à des solutions web sur
            mesure, un design innovant et des stratégies de communication efficaces.
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="#"
              className="rounded-xs bg-neutral-800 px-5 py-2.5 font-medium text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lancer mon projet
            </a>
          </div>
        </div>
      </div>

      <ServicesScroll />

      <div className="p-12 bg-gray-50">
        <h2 className="text-5xl scale-y-95 antialiased mb-6 text-start">Réalisations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {projets.map((projet, index) => (
            <div key={index} className="aspect-[16/9] p-6 flex items-end shadow-lg"></div>
          ))}
        </div>
      </div>

      <Testimonials />
      <FaqGrid />
      <Cta />
    </>
  )
}
