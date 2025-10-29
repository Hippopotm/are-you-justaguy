import { motion } from 'framer-motion';

interface SplashProps {
  onStart: () => void;
}

export default function Splash({ onStart }: SplashProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center"
      >
        {/* Mascot */}
        <div className="text-6xl mb-4">🤖</div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Are You Just a Guy?
        </h1>
        
        {/* Hook */}
        <p className="text-lg text-gray-600 mb-6">
          Test your bystander skills in awkward social situations
        </p>
        
        {/* Features */}
        <div className="space-y-2 mb-8 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <span>🎯</span>
            <span>Quick scenarios, real choices</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📊</span>
            <span>Track your progress</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🔥</span>
            <span>Build your streak</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          🎮 Tap to Start
        </motion.button>
      </motion.div>
    </div>
  );
}
