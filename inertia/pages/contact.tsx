import { motion } from 'framer-motion'
import { Head, useForm } from '@inertiajs/react'

export default function Contact() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    post('/contact', {
      onSuccess: () => {
        setData({ name: '', email: '', message: '' })
      },
    })
  }

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Prenez contact avec notre équipe pour toute demande d'information, devis ou support."
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl space-y-8"
        >
          <h1 className="text-4xl text-neutral-950 tracking-tight antialiased italic font-semibold">
            Envoyez-nous un message,
          </h1>
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block font-medium antialiased scale-y-95 text-neutral-950 mb-1">
                Nom
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-medium antialiased scale-y-95 text-neutral-950 mb-1">
                Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder=""
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-medium antialiased scale-y-95 text-neutral-950 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={processing}
              className="w-full py-3 bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-300"
            >
              Envoyer le message
            </button>
          </form>
        </motion.div>
      </div>
    </>
  )
}
