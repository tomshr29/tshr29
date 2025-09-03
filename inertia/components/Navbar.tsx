import { Link } from '@inertiajs/react'

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
