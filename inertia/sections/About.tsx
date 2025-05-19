import Image from '../../resources/assets/tom.scherer.jpg'

export default function About() {
  return (
    <section className="px-6 py-14 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="shrink-0 flex items-center space-x-4 mb-10">
            <h2 className="text-neutral-900 text-6xl lg:text-7xl tracking-tighter">
              Qui suis-je ?
            </h2>
            <img
              src={Image}
              alt="Tom Scherer"
              className="w-14 h-14 object-cover rounded shadow-md"
            />
          </div>

          <div className="space-y-6 text-slate-700 text-lg sm:text-xl leading-relaxed tracking-tight">
            <p>
              Salut, moi c’est <span className="font-semibold">Tom</span> — développeur passionné
              par le web et amoureux des beaux pixels. J’imagine et je construis des interfaces
              modernes, claires et efficaces, pensées pour captiver les utilisateurs.
            </p>
            <p>
              Basé à Sarreguemines, je collabore à distance avec des clients partout en France pour
              créer des expériences digitales qui marquent les esprits.
            </p>
            <div className="pt-4">
              <div className="text-neutral-950 font-medium text-2xl">Tom Scherer</div>
              <div className="text-neutral-900 leading-6">CEO de Tshr29</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
