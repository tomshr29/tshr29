import ReactLenis from 'lenis/react'
import { Navbar } from '~/pages/home'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <ReactLenis root>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ReactLenis>
  )
}
