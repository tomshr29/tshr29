import { motion } from 'framer-motion'
import { useForm } from '@inertiajs/react'
import { GoogleReCaptchaProvider, GoogleReCaptchaCheckbox } from '@google-recaptcha/react'
import { useState } from 'react'

export default function Contact() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const [captchaStatus, setCaptchaStatus] = useState(false)
  const [key, setKey] = useState('')
  const onChange = (key: any) => {
    setKey(key)
    setCaptchaStatus(true)
  }

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
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl space-y-8"
        >
          <h1 className="text-4xl text-white tracking-tight antialiased italic font-medium">
            Envoyez-nous un message,
          </h1>
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block font-medium antialiased scale-y-95 text-white mb-1">
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
              <label className="block font-medium antialiased scale-y-95 text-white mb-1">
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
              <label className="block font-medium antialiased scale-y-95 text-white mb-1">
                Message
              </label>
              <textarea
                rows={4}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <GoogleReCaptchaProvider
              type="v2-checkbox"
              siteKey="6LdEVxQrAAAAAK0tgXgI9Nednm9_S2ev0k-8D12A"
            >
              <GoogleReCaptchaCheckbox onChange={onChange} />
            </GoogleReCaptchaProvider>

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
