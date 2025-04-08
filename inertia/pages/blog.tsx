import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-slate-300 max-w-md"
      >
        <div className="flex justify-center mb-6">
          <FileText size={64} className="text-cyan-500" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Coming Soon</h1>
        <p className="text-slate-400 text-sm">
          Our blog is brewing in the background ☕. Fresh content on tech, design, and development
          will be published here soon. Stay tuned!
        </p>
      </motion.div>
    </div>
  )
}
