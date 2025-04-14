import { Disclosure } from '@headlessui/react'
import { ChevronUp } from 'lucide-react'
import Tag from '~/app/components/Tag'

const faqs = [
  {
    question: 'Combien coûte un site vitrine ?',
    answer:
      'Nos sites vitrines débutent à partir de 1200€, selon les fonctionnalités et le design souhaité. Chaque projet étant unique, un devis personnalisé est proposé après un brief initial.',
  },
  {
    question: 'Proposez-vous du design sur mesure ?',
    answer:
      'Oui, tous nos designs sont 100% personnalisés. On travaille main dans la main avec vous pour créer une identité visuelle qui reflète parfaitement votre marque.',
  },
  {
    question: 'Est-ce que le site sera responsive ?',
    answer:
      'Bien sûr ! Tous nos sites sont pensés mobile-first, optimisés pour un affichage fluide sur tous les supports (desktop, tablette, smartphone).',
  },
  {
    question: 'Est-ce que je peux modifier mon site moi-même ?',
    answer:
      'Absolument. On intègre des systèmes de gestion de contenu (CMS) simples à utiliser pour que vous soyez autonome après la livraison.',
  },
  {
    question: 'En combien de temps livrez-vous un site ?',
    answer:
      'Le délai moyen est de 3 à 6 semaines selon la complexité du projet. Un rétroplanning est défini dès le départ pour garantir transparence et efficacité.',
  },
  {
    question: 'Faites-vous du SEO ?',
    answer:
      "Oui, l'optimisation pour les moteurs de recherche (SEO) est intégrée dès la conception. On vous livre un site performant techniquement et prêt à grimper dans Google.",
  },
  {
    question: 'Puis-je vous contacter après la livraison ?',
    answer:
      'Évidemment. Un accompagnement post-livraison est proposé, que ce soit pour des évolutions, du support ou simplement des conseils stratégiques.',
  },
]

export default function Faqs() {
  return (
    <section className="px-6 py-20 bg-white border-b border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 mb-8 tracking-tight">
          Questions ? <span className="italic text-blue-500">On a les réponses.</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="border border-slate-200 rounded-xl p-4">
                  <Disclosure.Button className="flex justify-between w-full text-left text-slate-900 font-medium text-lg">
                    <span>{faq.question}</span>
                    <ChevronUp
                      className={`w-5 h-5 transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-slate-700 text-sm leading-relaxed">
                    {faq.answer}
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
