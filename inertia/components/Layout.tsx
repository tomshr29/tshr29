import ReactLenis from 'lenis/react'
import Footer from './Footer'
import { Header } from './header'

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
