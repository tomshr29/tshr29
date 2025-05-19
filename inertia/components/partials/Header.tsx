import { Dialog } from '@headlessui/react'
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import logo from '../../../resources/assets/Tshr29.svg'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-screen h-20 bg-black/25 backdrop-blur px-5 flex items-center border-b border-white/5 justify-between z-90 lg:px-10">
      <Link href="/">
        <img src={logo} alt="Logo" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-neutral-100 space-x-10 text-lg">
        <Link href="/" className="">
          Accueil
        </Link>
        <Link href="#">À propos</Link>
        <Link href="/faq">FAQs</Link>
      </nav>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center text-white">
        <Link href="/contact">
          <button className="bg-neutral-200 text-neutral-900 font-medium rounded text-sm px-5 py-2.5 cursor-pointer">
            Lancer mon projet
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <Plus size={32} />
      </button>

      {/* Mobile Side Drawer */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="relative z-40 md:hidden"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        {/* Drawer Panel */}
        <div className="fixed right-0 top-0 min-h-3/4 w-full bg-neutral-900 text-white z-20 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-semibold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Fermer le menu">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-xl">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                À propos
              </Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                FAQs
              </Link>
            </div>
          </div>

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-neutral-200 text-neutral-900 font-medium rounded text-base px-5 py-2.5">
              Lancer mon projet
            </button>
          </Link>
        </div>
      </Dialog>
    </header>
  )
}
