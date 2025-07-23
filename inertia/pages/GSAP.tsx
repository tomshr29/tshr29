import { gsap } from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { useRef } from 'react'
import ServicesSection from '~/sections/Services'
import TestimonialsSection from '~/sections/Testimonial'
import About from '~/sections/About'
import Cta from '~/sections/Cta'
import { Link } from '@inertiajs/react'

gsap.registerPlugin(ScrollTrigger)

export default function GSAP() {
  const text = useRef<HTMLDivElement>(null)
  const text2 = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    let split = SplitText.create(text.current, {
      type: 'words',
    })

    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: 'start',
      },
    })

    let split2 = SplitText.create(text2.current, {
      type: 'chars',
    })

    gsap.fromTo(
      split2.chars,
      {
        color: '#1a1a1a',
      },
      {
        color: 'white',
        stagger: 0.02,
        scrollTrigger: {
          trigger: text2.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false,
          toggleActions: 'play play reverse reverse',
        },
      }
    )
  }, [])

  return (
    <>
      <main className="flex items-center justify-center min-h-screen relative overflow-hidden bg-neutral-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>

        <div className="relative w-[90vw] flex flex-col items-start justify-evenly">
          <div
            ref={text}
            className="text-white text-start text-3xl sm:text-5xl md:text-7xl lg:text-8xl px-4 leading-tight tracking-tight"
          >
            Start build your websites dream with
            <span className="text-blue-500">Tshr29 Studio</span>
          </div>
          <Link href="/contact" className="mt-20">
            <button className="w-full bg-neutral-200 text-neutral-900 font-medium rounded text-base px-5 py-2.5">
              Lancer mon projet
            </button>
          </Link>
        </div>
      </main>
      <ServicesSection />
      <div className="relative w-full min-h-screen bg-neutral-950 flex flex-col items-center justify-evenly">
        <div className="p-20">
          <p className="text-4xl text-center tracking-tighter text-white" ref={text2}>
            Pourquoi choisir Tshr29 Studio ? Nous sommes une équipe de professionnels passionnés par
            le design et le développement web. Nous croyons en la puissance de la simplicité et de
            l'innovation. Avec une attention particulière portée à chaque projet, nous créons des
            expériences uniques et personnalisées, adaptées aux besoins spécifiques de nos clients.
            <br />
            Nous nous engageons à offrir des sites web performants, esthétiques et optimisés pour
            offrir une expérience utilisateur fluide, durable et mémorable. Faites confiance à
            Tshr29 Studio pour transformer vos idées en réalité.
          </p>
        </div>
      </div>
      <TestimonialsSection />
      <About />
      <Cta />
    </>
  )
}
