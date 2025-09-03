import ReactLenis from 'lenis/react'
import Footer from './Footer'
import { Navbar } from './Navbar'

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
