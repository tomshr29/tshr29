import { Link } from '@inertiajs/react'
import image from '../../resources/assets/SCHERER.T.png'

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img alt="Tom Scherer" src={image} className="w-40 h-40 object-cover shadow-lg" />
          <div className="mt-4 text-center md:text-left">
            <div className="text-lg font-medium text-gray-900">Scherer T.</div>
            <div className="text-gray-600 font-medium">CEO</div>
          </div>
        </div>
        <blockquote className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <p>
            “Je suis Tom Scherer, développeur web à Sarreguemines. Depuis plus de 3 années,
            j’accompagne les entreprises et professionnels locaux dans la création de sites web
            performants, modernes et sur-mesure. Mon objectif est de transformer vos idées en
            solutions digitales concrètes, efficaces et adaptées à vos besoins."{' '}
            <Link href="/a-propos">
              <span className="underline">En savoir plus</span>
            </Link>
            .
          </p>
        </blockquote>
      </div>
    </section>
  )
}
