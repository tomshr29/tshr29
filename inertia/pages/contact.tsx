import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [budget, setBudget] = useState(1000)

  return (
    <>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl  space-y-8"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">Get in Touch</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <textarea
                placeholder="Your message..."
                rows="4"
                className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Budget: <span className="text-cyan-400 font-mono">${budget.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="updates" className="accent-cyan-500" />
              <label htmlFor="updates" className="text-sm text-slate-400">
                Send me occasional updates
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </>
  )
}
