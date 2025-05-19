import ReactLenis from 'lenis/react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <ReactLenis root>
      <Header />
      <main>{children}</main>
      <Footer />
    </ReactLenis>
  )
}
