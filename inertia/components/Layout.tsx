import ReactLenis from 'lenis/react'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <ReactLenis root>
      <main>{children}</main>
      <Footer />
    </ReactLenis>
  )
}
