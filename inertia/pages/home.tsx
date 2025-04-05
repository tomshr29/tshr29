import { Link } from '@inertiajs/react'
import Header from '~/app/components/header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Section principale (Héros) */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-blue-500 to-blue-50 text-center w-screen">
        <div className="text-start max-w-3xl px-20">
          <h1 className="text-7xl font-medium scale-y-95 antialiased tracking-tighter mb-6">
            T29 Tech
          </h1>
          <p className="mt-4 text-lg tracking-tight">
            Votre solution tout-en-un pour tous vos besoins technologiques. Nous proposons une large
            gamme de services, y compris le développement web, le développement d'applications
            mobiles, et plus encore.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="#services"
              className="text-lg font-semibold py-3 px-4 rounded-2xl bg-black text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Section Développeur Web */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Développeur Web</h2>
          <p className="text-lg text-gray-700">
            Nous créons des sites web modernes et performants. Nos développeurs web utilisent les
            dernières technologies pour offrir une expérience utilisateur fluide et intuitive. Nos
            services sont accessibles partout dans le monde.
          </p>
          <div className="mt-8">
            <Link href="#services" className="text-lg font-semibold text-blue-600">
              Découvrez nos services
            </Link>
          </div>
        </div>
      </div>

      {/* Section Développeur d'App Mobile */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Développeur App Mobile</h2>
          <p className="text-lg text-white">
            Nous concevons des applications mobiles natives et hybrides pour iOS et Android. Que
            vous ayez besoin d'une application simple ou complexe, nous avons l'expertise pour la
            créer. Nos services sont disponibles pour des clients partout dans le monde.
          </p>
          <div className="mt-8">
            <Link href="#apps" className="text-lg font-semibold text-white underline">
              Découvrez nos applications
            </Link>
          </div>
        </div>
      </div>

      {/* Section Global Presence */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Présence mondiale</h2>
          <p className="text-lg text-gray-700 mb-6">
            Bien que nous soyons basés à Neufgrange, nos services sont disponibles à travers le
            monde. Nous collaborons avec des clients de toutes les régions et nous sommes prêts à
            répondre à vos besoins, où que vous soyez.
          </p>
        </div>
      </div>

      {/* Section Témoignages */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ce que disent nos clients</h2>
          <div className="flex justify-center gap-12">
            <div className="w-1/3">
              <p className="text-lg text-gray-700">
                "T29 Tech a transformé notre site web en une plateforme moderne et performante. Ils
                sont très réactifs et professionnels !"
              </p>
              <p className="font-semibold text-gray-800">Client 1</p>
            </div>
            <div className="w-1/3">
              <p className="text-lg text-gray-700">
                "L'équipe de T29 Tech a développé une application mobile qui répond parfaitement à
                nos besoins. Nous sommes très satisfaits de leur travail."
              </p>
              <p className="font-semibold text-gray-800">Client 2</p>
            </div>
            <div className="w-1/3">
              <p className="text-lg text-gray-700">
                "Une équipe talentueuse et passionnée, toujours à l'écoute de nos besoins. Ils ont
                transformé nos idées en réalité."
              </p>
              <p className="font-semibold text-gray-800">Client 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 T29 Tech. Tous droits réservés.</p>
          <p className="mt-4 text-sm">Développé avec passion et technologie.</p>
        </div>
      </footer>
    </div>
  )
}
