import { Head } from '@inertiajs/react'
import Header from '~/app/components/header'

export default function Home() {
  return (
    <>
      <Head title="Tom Scherer" />

      <Header />
      <h1 className="text-3xl font-bold underline">This is HomePage</h1>
    </>
  )
}
