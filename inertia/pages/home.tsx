import { Link } from '@inertiajs/react'
import Header from '~/app/components/header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 items-center justify-start bg-gradient-to-r from-blue-500 to-blue-50 text-center w-screen">
        <div className="text-start max-w-3xl px-10 sm:px-20">
          <h1 className="text-7xl font-medium scale-y-95 antialiased tracking-tighter mb-6">
            T29 Dévelopment
          </h1>
          <p className="mt-4 text-lg tracking-tight scale-y-95">
            Votre solution tout-en-un pour tous vos besoins technologiques. Nous proposons une large
            gamme de services, y compris le développement web, le développement d'applications
            mobiles, et plus encore.
          </p>
          <div className="mt-10 flex justify-start gap-6">
            <Link
              href="#services"
              className="text-lg font-semibold antialiased tracking-tight scale-y-90 py-3 px-4 rounded bg-black text-white uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
