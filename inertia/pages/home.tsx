import { Link } from '@inertiajs/react'

export default function Home() {
  return (
    <div className="grid place-items-center items-center h-screen">
      <div className="mx-auto text-center max-w-xl">
        <h1 className="text-7xl font-medium antialiased scale-y-95 tracking-tighter">T29 Tech</h1>
        <p className="mt-4 text-pretty text-lg tracking-tight scale-y-95">
          Your one-stop solution for all your tech needs. We provide a wide range of services,
          including web development, mobile app development, and more.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <Link
            href="#"
            className="text-lg font-semibold py-3 px-4 rounded-2xl antialiased bg-black text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
