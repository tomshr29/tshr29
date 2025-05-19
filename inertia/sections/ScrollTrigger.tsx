import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Card = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.to(container.current, { rotation: '-=360', duration: 3 })
    },
    { scope: container }
  )

  return (
    <div
      ref={container}
      className="box w-40 h-40 bg-indigo-500 text-white flex items-center justify-center rounded-lg shadow-lg"
    >
      Carte
    </div>
  )
}

export default function SimpleScrollCards() {
  return (
    <div className="app">
      <section className="hero w-screen h-screen p-8 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Bienvenue sur mon site !</h1>
      </section>
      <section className="intro w-screen p-8 bg-white">
        <h1 className="text-4xl font-semibold mb-12">Découvrez nos cartes animées au scroll</h1>
        <Card />
      </section>
      <section className="outro w-screen h-screen p-8 bg-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Merci de votre visite !</h1>
      </section>
    </div>
  )
}
