export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Prise de contact et écoute',
      description:
        'Nous échangeons pour comprendre votre activité, vos objectifs et vos attentes. Toutes vos idées sont prises en compte.',
    },
    {
      number: '2',
      title: 'Proposition et devis personnalisé',
      description:
        'Je vous propose un plan d’action clair, avec un devis détaillé et transparent. Vous savez exactement ce que vous allez obtenir et à quel prix.',
    },
    {
      number: '3',
      title: 'Conception et développement',
      description:
        'Je crée votre site sur-mesure, moderne et responsive. Vous pouvez suivre l’avancement et donner vos retours à chaque étape.',
    },
    {
      number: '4',
      title: 'Livraison et mise en ligne',
      description:
        'Une fois votre site validé, je le mets en ligne et m’assure qu’il fonctionne parfaitement sur tous les appareils.',
    },
    {
      number: '5',
      title: 'Support et maintenance',
      description:
        'Je reste disponible pour les mises à jour, les optimisations et toute question après la livraison.',
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Comment je travaille avec vous</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Chaque projet est unique, mais mon objectif reste le même : vous fournir un site web
          professionnel, efficace et adapté à vos besoins, en toute simplicité.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Ligne centrale verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {/* Étapes */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div className="md:w-1/2 px-4">
              <div className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition-shadow duration-300">
                {/* Cercle numéro */}
                <div className="absolute -left-6 top-6 md:-left-8 md:top-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
