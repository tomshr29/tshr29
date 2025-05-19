import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Link } from '@inertiajs/react'

export default function Hero() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: { perView: 'auto', spacing: 20 },
  })

  return (
    <div>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="grid gap-24 pb-24 text-white sm:gap-40 px-10">
        <div className="space-y-9">
          <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-7xl  lg:text-8xl">
            Commencez à créer des sites que l’on retient.
          </h1>

          <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-400 max-sm:px-4">
            Chaque projet est une nouvelle opportunité de fusionner design, fonctionnalité et
            technologie pour concevoir un site à la fois esthétiquement remarquable et techniquement
            irréprochable.
          </p>

          <div className="space-x-2">
            <Link href="/contact">
              <button className="bg-neutral-200 text-neutral-900 font-medium rounded text-sm px-5 py-2.5 cursor-pointer">
                Travaillons ensemble
              </button>
            </Link>
            <Link href="#">
              <button className="bg-white/5 text-neutral-200 font-medium rounded text-sm px-5 py-2.5 cursor-pointer">
                À propos de nous
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden">
          <div ref={sliderRef} className="keen-slider border-t border-neutral-900 mt-6 py-6">
            {['max-w-96', 'max-w-[32rem]', 'max-w-80', 'max-w-[32rem]', 'max-w-80'].map((w, i) => (
              <div
                key={i}
                className={`keen-slider__slide ${w} h-80 shrink-0 overflow-hidden bg-neutral-800 relative`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
