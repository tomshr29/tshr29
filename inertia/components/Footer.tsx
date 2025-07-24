export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold">TonAgence</h2>
          <p className="text-sm mt-2">Construisons ensemble votre présence en ligne.</p>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-2">Liens</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-2">Suivez-nous</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} TonAgence. Tous droits réservés.
      </div>
    </footer>
  )
}
