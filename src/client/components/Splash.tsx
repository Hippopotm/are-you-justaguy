import { motion } from 'framer-motion';

export default function Splash({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md p-8 text-gray-900">
      {/* soft bar background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="relative flex flex-col items-center text-center gap-3">
        <motion.div
          animate={{ rotate: [0, 1.5, -1.5, 0] }}
          transition={{ repeat: Infinity, duration: 3.2 }}
          className="text-6xl"
        >
          🍻
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold">Are You Just a Guy?</h1>
        <p className="text-gray-600">Short stories. Quick choices. Big truths.</p>

        <button
          onClick={onStart}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow-lg transition-transform hover:scale-105"
        >
          Tap to Start
        </button>
      </div>
    </div>
  );
}
