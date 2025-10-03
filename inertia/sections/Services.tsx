import { useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    id: 1,
    title: 'Développement Web',
    color: 'bg-blue-500',
    textColor: 'text-white',
    description:
      'Conception et développement de sites web vitrines, e-commerce, et d’applications sur mesure.',
    services: [
      'Sites vitrines & e-commerce',
      'Applications web & mobiles',
      'Landing pages performantes',
    ],
  },
  {
    id: 2,
    title: 'WordPress',
    color: 'bg-white',
    textColor: 'text-black',
    description: 'Création d’expériences utilisateur fluides, esthétiques et intuitives.',
    services: [
      'Wireframes & prototypes',
      'Design systems cohérents',
      'Interfaces responsives et modernes',
    ],
  },
  {
    id: 3,
    title: 'SEO Optimization',
    color: 'bg-black',
    textColor: 'text-white',
    description: 'Développement d’une image de marque forte et cohérente sur tous les supports.',
    services: ['Création de logos', 'Charte graphique complète', 'Supports print & digitaux'],
  },
  {
    id: 4,
    title: 'Hébergement',
    color: 'bg-blue-500',
    textColor: 'text-white',
    description:
      'Optimisation technique et stratégique pour une meilleure visibilité sur les moteurs de recherche.',
    services: ['SEO technique & sémantique', 'Stratégie de contenu', 'Suivi & rapports mensuels'],
  },
]

export default function ServicesScroll() {
  const container = useRef<HTMLDivElement>(null)

  return (
    <div ref={container} className="w-full">
      <div className="bg-white p-10 sticky top-0 z-40">
        <h2 className="text-5xl scale-y-95">Nos services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {sections.map(({ id, title, color, textColor, description, services }) => (
          <div
            key={id}
            className={`flex flex-col justify-end gap-4 h-60 rounded-lg ${color} shadow-sm p-4`}
          >
            <h2 className={`text-2xl md:text-3xl font-medium ${textColor}`}>{title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
