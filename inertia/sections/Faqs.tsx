import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Quels types de services propose votre agence web ?',
    answer:
      'Nous proposons la création de sites vitrine, e-commerce, le développement sur-mesure, le design UI/UX, ainsi que des services de SEO et de maintenance.',
  },
  {
    question: 'Est-ce que vous créez des sites optimisés pour le mobile ?',
    answer:
      'Oui, tous nos sites sont responsive, c’est-à-dire qu’ils s’adaptent parfaitement à tous les écrans : mobile, tablette et desktop.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site internet ?',
    answer:
      'Tout dépend du projet, mais un site vitrine simple peut être livré en 2 à 4 semaines. Pour un projet plus complexe, le délai est défini ensemble dès le départ.',
  },
  {
    question: 'Est-ce que vous vous occupez aussi du référencement (SEO) ?',
    answer:
      'Oui, nous proposons des prestations SEO pour améliorer la visibilité de votre site sur Google, incluant l’optimisation technique, le contenu et la stratégie de mots-clés.',
  },
  {
    question: 'Peut-on modifier le site nous-mêmes après la livraison ?',
    answer:
      'Oui, nous utilisons des CMS comme WordPress ou des back-offices sur mesure pour que vous puissiez gérer facilement vos contenus.',
  },
  {
    question: 'Proposez-vous des abonnements de maintenance ?',
    answer:
      'Absolument. Nous proposons plusieurs formules de maintenance pour garantir la sécurité, les mises à jour et l’assistance technique de votre site.',
  },
  {
    question: 'Est-ce que vous travaillez avec des clients à distance ?',
    answer:
      'Oui, nous collaborons avec des entreprises partout en France (et à l’international) grâce à des outils de communication fluides et efficaces.',
  },
]

export default function FaqGrid() {
  return (
    <section className="px-6 py-28 bg-neutral-950 min-h-screen">
      <div className="max-w-6xl mx-auto flex gap-20 flex-col lg:flex-row">
        <div className="flex-1">
          <label className="uppercase text-white">FAQs</label>
          <h1 className="text-white text-5xl tracking-tight mb-4">Réponses à vos questions</h1>
          <span className="text-neutral-500 text-lg">
            Trouvez rapidement des réponses aux questions les plus fréquentes sur notre agence et
            nos services.
          </span>
        </div>

        <div className="flex-1 divide-y divide-neutral-800">
          {faqs.map((faq, index) => (
            <Disclosure key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <div className="py-6">
                  <DisclosureButton className="group flex w-full items-center justify-between text-left cursor-pointer">
                    <h3 className="text-base sm:text-lg scale-y-95 text-white tracking-tight font-medium">
                      {faq.question}
                    </h3>
                    <div className="text-white">
                      {open ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </DisclosureButton>
                  {faq.answer && (
                    <DisclosurePanel className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  )}
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
