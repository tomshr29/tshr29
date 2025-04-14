import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const services = [
  {
    title: 'Web & Mobile Development',
    description:
      'Développement sur mesure de sites web et d’applications mobiles performantes, modernes, et adaptées à vos besoins.',
  },
  {
    title: 'UX/UI Design',
    description:
      'Création d’interfaces intuitives et élégantes avec un focus sur l’expérience utilisateur et l’ergonomie.',
  },
  {
    title: 'SEO (Référencement naturel)',
    description:
      'Optimisation de votre site pour les moteurs de recherche afin d’améliorer votre visibilité et attirer plus de trafic.',
  },
  {
    title: 'Branding & Identity',
    description:
      'Création d’identités visuelles uniques (logos, couleurs, typographies) pour renforcer votre image de marque.',
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full py-24 px-6 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-neutral-900 text-4xl mb-10 tracking-tighter italic scale-y-90 font-medium sm:text-5xl">
          Nous créons des applications web et applications mobiles,
        </h1>

        <div className="space-y-4">
          {services.map((service, index) => (
            <Disclosure key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <div className="rounded-xl bg-black/5 p-6 transition-all duration-300">
                  <Disclosure.Button className="flex w-full justify-between items-center text-left">
                    <span className="text-xl tracking-tight scale-y-95 antialiased">
                      {service.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5  transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-3 text-white/70 text-sm leading-relaxed">
                    {service.description}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
