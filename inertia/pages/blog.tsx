import { motion } from 'framer-motion'
export default function Blog() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-slate-300 max-w-3xl"
      >
        <h1 className="text-5xl font-medium tracking-tight scale-y-95 text-white mb-2">
          Articles [0]
        </h1>
        <p className="text-neutral-300 text-lg scale-y-95 tracking-tight">
          Our blog is brewing in the background. Fresh content on tech, design, and development will
          be published here soon. Stay tuned!
        </p>
      </motion.div>
    </div>
  )
}
