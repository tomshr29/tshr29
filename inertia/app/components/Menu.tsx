import { Link } from '@inertiajs/react'
import { useState, useRef, useEffect } from 'react'

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/lab', label: 'Lab' },
]

const Menu = () => {
  const container = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Add/remove overflow-hidden on body when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden' // Disable body scroll
    } else {
      document.body.style.overflow = 'auto' // Enable body scroll
    }
  }, [isMenuOpen])

  return (
    <div className="menu-container relative">
      {/* Menu Bar: Visible when the menu is closed */}
      <div className="menu-bar fixed top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <div className="menu-logo text-xl font-bold">
          <Link href="/">T29</Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
          <p className="text-xl">Menu</p>
        </div>
      </div>

      {/* Menu Overlay: Only visible when the menu is open */}
      <div
        className={`menu-overlay fixed top-0 left-0 w-full h-screen bg-[#c5fb45] p-9 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="menu-overlay-bar w-full flex justify-between items-center mb-10">
          <div className="menu-logo text-xl font-bold">
            <Link href="/">T29</Link>
          </div>
          <div className="menu-close cursor-pointer" onClick={toggleMenu}>
            <p className="text-xl">Close</p>
          </div>
        </div>

        {/* Close Icon */}
        <div className="menu-close-icon flex justify-center mb-10">
          <p className="text-6xl cursor-pointer" onClick={toggleMenu}>
            &#x2715;
          </p>
        </div>

        {/* Menu Links */}
        <div className="menu-links flex flex-col items-start space-y-6 mb-10">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <Link href={link.path} className="text-2xl hover:text-[#f39c12]" onClick={toggleMenu}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="menu-info flex justify-between w-full mt-8">
          <div className="menu-info-col space-y-2">
            <a href="#" className="text-lg hover:text-[#f39c12]">
              X &#8599;
            </a>
            <a href="#" className="text-lg hover:text-[#f39c12]">
              Instagram &#8599;
            </a>
            <a href="#" className="text-lg hover:text-[#f39c12]">
              LinkedIn &#8599;
            </a>
            <a href="#" className="text-lg hover:text-[#f39c12]">
              Behance &#8599;
            </a>
            <a href="#" className="text-lg hover:text-[#f39c12]">
              Dribbble &#8599;
            </a>
          </div>
          <div className="menu-info-col space-y-2">
            <p className="text-lg">info@t29.com</p>
            <p className="text-lg">07 82 58 74 36</p>
          </div>
        </div>

        {/* Showreel Preview */}
        <div className="menu-preview mt-10 text-lg cursor-pointer hover:text-[#f39c12]">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
