import { Link } from '@inertiajs/react'
import logo from '../../../resources/assets/T29.png'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Dialog, DialogPanel } from '@headlessui/react'

const navigation = [
  { name: 'Documentation', href: '#' },
  { name: 'Composants', href: '#' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-screen h-20 bg-black/25 backdrop-blur px-5 flex items-center border-b border-white/10 justify-between z-10 lg:px-10 text-white">
      <Link href="/">
        <img src={logo} alt="T29" loading="lazy" />
      </Link>
      <div>
        <nav className="lg:flex items-center gap-5 lg:gap-10 hidden">
          <ul className="flex items-end gap-10 flex-col w-full lg:flex-row lg:items-center h-full">
            <li>
              <Link href="/blog" className="font-bold transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-bold transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src={logo} alt="T29" loading="lazy" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-neutral-200"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-200 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  )
}
