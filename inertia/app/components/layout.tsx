import ReactLenis from 'lenis/react'
import Header from './header'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <ReactLenis root>
      <Header />
      <div className="">{children}</div>
    </ReactLenis>
  )
}
