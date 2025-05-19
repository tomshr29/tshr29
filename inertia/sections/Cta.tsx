import { Link } from '@inertiajs/react'

export default function Cta() {
  return (
    <section className="py-14 px-6 text-center bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto bg-neutral-100 px-20 py-10 rounded">
        <h2 className="text-neutral-900 text-7xl tracking-tighter mb-12">
          Commencez à créer des sites qu’on ne peut pas ignorer.
        </h2>

        <Link href="/contact">
          <button className="bg-neutral-900 text-neutral-100 font-medium rounded text-sm px-5 py-2.5 cursor-pointer">
            Lancer mon projet
          </button>
        </Link>
      </div>
    </section>
  )
}
