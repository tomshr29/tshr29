import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react/dist'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Blog() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const split = new SplitType(textRef.current!, { types: 'chars' })
    gsap.fromTo(
      split.chars,
      {
        color: '#b6b600',
      },
      {
        color: 'black', // Valeur finale (couleur)
        duration: 0.3,
        stagger: 0.02, // Espacement entre les caractères
        scrollTrigger: {
          trigger: textRef.current, // Déclenche l'animation sur l'élément
          start: 'top 80%', // Commence quand l'élément est à 80% du viewport
          end: 'top 20%', // Se termine quand l'élément est à 20% du viewport
          scrub: true, // L'animation suit le défilement de la page
          markers: false, // Désactive les marqueurs de débogage
          toggleActions: 'play reverse play reverse', // Action inversée au scroll vers le haut
        },
      }
    )
  }, [])

  return (
    <ReactLenis root>
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="text-4xl font-bold text-center">
          <p>
            This text will reveal as you scroll. Welcome to the blog with a smooth scroll effect
            powered by GSAP, ScrollTrigger, and Lenis!
          </p>
        </div>
      </div>

      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div ref={textRef} className="text-4xl font-bold text-center">
          <p>
            Continue scrolling to see the text animation in action. This demo integrates
            scroll-based animations with smooth scrolling!
          </p>
        </div>
      </div>
    </ReactLenis>
  )
}
