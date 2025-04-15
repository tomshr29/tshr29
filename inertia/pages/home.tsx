import Image from '../../resources/assets/tom.scherer.jpg'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react/dist'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Services from '../app/components/Services'
import { Head, Link } from '@inertiajs/react'
import Faqs from '~/sections/Faqs'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  return <Hero />
}

function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const split = new SplitType(textRef.current!, { types: 'chars' })
    gsap.fromTo(
      split.chars,
      {
        color: '#ddd', // Couleur initiale (gris clair)
      },
      {
        color: '#4BC6F7', // Transition vers un bleu doux
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false,
          toggleActions: 'play reverse play reverse',
        },
      }
    )
  }, [])

  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta
          name="description"
          content="Bienvenude sur notre site. Découvrez nos services, notre expertise, et prenez contact facilement."
        />
      </Head>

      <div className="h-screen border-b border-neutral-100 bg-white flex flex-col items-center justify-center overflow-hidden text-center px-6">
        <h1 className="text-slate-900 whitespace-nowrap text-[30vw] font-bold tracking-tighter scale-y-95 italic leading-none">
          Tshr29
        </h1>

        <div className="max-w-xl">
          <p className="mt-6 text-slate-700 text-lg antialiased tracking-tighter scale-y-95">
            L'agence digitale créative spécialisée dans le design et le développement d’expériences
            web percutantes.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <Link href="/contact">
            <button className="relative inline-block px-12 py-6 text-white font-bold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/40 skew-x-[-12deg] hover:scale-110 hover:rotate-6 transform transition-all duration-300 tracking-wider rounded-xl">
              <h1 className="inline-block skew-x-[12deg] text-white text-lg tracking-tighter italic scale-y-90 font-medium sm:text-5xl">
                Contactez-moi
              </h1>
            </button>
          </Link>
        </div>
      </div>

      <Services />
      <Faqs />
      <section className="text-center px-8 py-20 border-b border-neutral-100">
        <h2 className="text-neutral-900 text-4xl tracking-tighter italic scale-y-90 font-medium sm:text-5xl">
          Qui suis-je ?
        </h2>
        <figure>
          <blockquote>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-700 scale-y-90 tracking-tight">
              Je suis Tom, développeur web et web mobile. Passionné par le design, obsédé par
              l’expérience utilisateur, je crée des interfaces sur-mesure, performantes et
              élégantes. Bref, je transforme les idées en expériences digitales, depuis
              Sarreguemines.
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left z-20">
            <img src={Image} alt="" className="size-20 rounded-full" />
            <div>
              <div className="text-slate-700 font-semibold text-xl">Tom Scherer</div>
              <div className="mt-0.5 leading-6 text-slate-900">Fondateur de T29</div>
            </div>
          </figcaption>
        </figure>
      </section>
      <footer className="py-16 text-sm leading-6  text-center">
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-neutral-900 text-4xl mb-10 tracking-tighter italic scale-y-90 font-medium sm:text-5xl">
            Intéressé à travailler ensemble ou simplement à en savoir plus ?
          </h1>
          <div className="mt-10 sm:mt-12">
            <Link href="/contact">
              <button className="relative inline-block px-12 py-6 text-white font-bold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/40 skew-x-[-12deg] hover:scale-110 hover:rotate-6 transform transition-all duration-300 tracking-wider rounded-xl">
                <h1 className="inline-block skew-x-[12deg] text-white text-lg tracking-tighter italic scale-y-90 font-medium sm:text-5xl">
                  Contactez-moi
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
