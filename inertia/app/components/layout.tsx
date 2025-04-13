import ReactLenis from 'lenis/react'
import Header from './header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <ReactLenis root>
      <Header />
      <>{children}</>
      <Footer />
    </ReactLenis>
  )
}
