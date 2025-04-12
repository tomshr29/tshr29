import { Link } from '@inertiajs/react'
import logo from '../../../resources/assets/T29.png'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Dialog, DialogPanel } from '@headlessui/react'
import Menu2 from './Menu'

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
      <Menu2 />
    </header>
  )
}
