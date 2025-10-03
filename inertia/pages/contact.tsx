import { ArrowRight, Mail } from 'lucide-react'
import { Head, useForm, usePage } from '@inertiajs/react'
import { motion } from 'framer-motion'

export default function Contact() {
  const { success } = usePage<any>().props
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/contact', {
      onSuccess: () => setData({ name: '', email: '', message: '' }),
    })
  }

  return (
    <>
      <Head>
        <title>Contactez tshr29 Studio à Sarreguemines | Agence Web</title>
        <meta
          name="description"
          content="Contactez tshr29 Studio, agence web à Sarreguemines. Pour toute demande de création de site internet, design UX/UI ou communication digitale, envoyez-nous un message."
        />
      </Head>

      <main className="min-h-screen bg-white flex items-center justify-center relative px-6 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Infos */}
          <div className="text-black font-medium space-y-10">
            <h1 className="text-4xl md:text-5xl scale-y-95 mt-4">Let's get in touch</h1>
            <p className="text-neutral-400 max-w-xl tracking-tight text-lg">
              Dont' be afraid to say hello with us!
            </p>

            {/* Email uniquement */}
            <div className="rounded-2xl p-5 flex items-center justify-between hover:bg-neutral-950 transition">
              <div>
                <p className="text-black">Email</p>
                <p className="text-lg">tom.scherer@tshr29.com</p>
              </div>
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400"
              >
                {success}
              </motion.div>
            )}
          </div>

          <form
            onSubmit={submit}
            className="backdrop-blur border border-neutral-900 rounded p-4 space-y-6"
          >
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Prénom et nom"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="w-full px-4 py-3  border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <input
                type="email"
                placeholder="Votre e-mail"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <textarea
                placeholder="Votre message"
                rows={5}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-neutral-200 transition disabled:opacity-50"
            >
              {processing ? 'Envoi en cours...' : 'Send to us'}
            </button>
          </form>
        </motion.div>
      </main>
    </>
  )
}
