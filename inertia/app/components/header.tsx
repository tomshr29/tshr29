import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { Link } from '@inertiajs/react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10">
        <div className="flex lg:flex-1">
          <Link href="/">
            <h1 className="text-white">
              <Logo />
            </h1>
          </Link>
        </div>
        <button onClick={() => setIsOpen(true)} className="text-black">
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Overlay */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-blue-600 flex flex-col">
          {/* Close */}
          <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)}>
              <X className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow flex items-center justify-center -mt-14">
            <DialogPanel className="text-white text-center space-y-6">
              <nav className="flex flex-col text-lg -space-y-20">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-[15vw] font-bold tracking-tighter scale-y-95"
                >
                  Accueil
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-[15vw] font-bold tracking-tighter scale-y-95"
                >
                  Contact
                </Link>
              </nav>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

function Logo() {
  return <div className="size-10 bg-black rounded"></div>
}
