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
      <Head title="Contact" />
      <main className="min-h-screen bg-neutral-950 flex items-center justify-center relative px-6 py-20 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Infos */}
          <div className="text-white space-y-10">
            <span className="py-1.5 uppercase font-medium border-neutral-700 rounded-full text-sm text-white/60">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl tracking-tighter mt-4">Prendre contact</h1>
            <p className="text-neutral-400 max-w-xl tracking-tight text-lg">
              Vous pouvez me contacter directement par e-mail ou via le formulaire ci-dessous. Je
              répondrai dès que possible.
            </p>

            {/* Email uniquement */}
            <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-5 flex items-center justify-between hover:bg-neutral-950 transition">
              <div className="flex items-center gap-3 text-white">
                <Mail className="text-white/70" />
                <div>
                  <p className="text-neutral-400">Adresse e-mail</p>
                  <p className="text-lg">tom.scherer@tshr29.com</p>
                </div>
              </div>
              <a
                href="mailto:tom.scherer@tshr29.com"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
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
            className="bg-neutral-950/90 backdrop-blur border border-neutral-900 rounded p-4 space-y-6"
          >
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Prénom et nom"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <input
                type="email"
                placeholder="Votre e-mail"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <textarea
                placeholder="Votre message"
                rows={5}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition disabled:opacity-50"
            >
              {processing ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </motion.div>
      </main>
    </>
  )
}
