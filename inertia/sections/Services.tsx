import { useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    id: 1,
    title: 'Développement Web & Mobile',
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
    title: 'UI/UX Design',
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
    title: 'Identité Visuelle',
    color: 'bg-black',
    textColor: 'text-white',
    description: 'Développement d’une image de marque forte et cohérente sur tous les supports.',
    services: ['Création de logos', 'Charte graphique complète', 'Supports print & digitaux'],
  },
  {
    id: 4,
    title: 'Référencement SEO',
    color: 'bg-blue-500',
    textColor: 'text-white',
    description:
      'Optimisation technique et stratégique pour une meilleure visibilité sur les moteurs de recherche.',
    services: ['SEO technique & sémantique', 'Stratégie de contenu', 'Suivi & rapports mensuels'],
  },
]

export default function ServicesScroll() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const elements = gsap.utils.toArray('.section')

      elements.forEach((section, index) => {
        const isLast = index === elements.length - 1

        ScrollTrigger.create({
          trigger: section as Element,
          start: 'top+=80 top',
          end: isLast ? 'bottom bottom' : 'bottom top',
          pin: true,
          pinSpacing: isLast ? true : false,
          scrub: true,
        })
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} className="w-full">
      <div className="bg-black p-10 sticky top-0 z-50">
        <h2 className="text-5xl tracking-tighter text-white">Nos services</h2>
      </div>
      {sections.map(({ id, title, color, textColor, description, services }) => (
        <section
          key={id}
          className={`section h-96 ${color} flex flex-col justify-center items-start relative z-20 p-10 gap-2`}
        >
          <h2 className={`text-4xl md:text-6xl tracking-tighter ${textColor}`}>{title}</h2>
          <p className={`text-base md:text-lg max-w-2xl ${textColor}`}>{description}</p>
          <ul className={`text-sm md:text-base font-light ${textColor} list-disc list-inside`}>
            {services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
