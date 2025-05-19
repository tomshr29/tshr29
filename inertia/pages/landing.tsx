import { Head } from '@inertiajs/react'
import About from '~/sections/About'
import Cta from '~/sections/Cta'
import Hero from '~/sections/Hero'
import ServicesSection from '~/sections/Services'
import TestimonialsSection from '~/sections/Testimonial'

export default function Home() {
  return (
    <section>
      <Head>
        <title>Accueil</title>
        <meta
          name="description"
          content="Bienvenude sur notre site. Découvrez nos services, notre expertise, et prenez contact facilement."
        />
      </Head>
      <Hero />
      <ServicesSection />
      <About />
      <TestimonialsSection />
      <Cta />
    </section>
  )
}
