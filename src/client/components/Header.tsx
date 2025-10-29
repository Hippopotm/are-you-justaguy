import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  streak: number;
  lastDelta: number;
}

interface BestPlayer {
  user: string | null;
  score: number;
}

export default function Header({ streak, lastDelta }: HeaderProps) {
  const [bestPlayer, setBestPlayer] = useState<BestPlayer>({ user: null, score: 0 });

  // Fetch best player on mount
  useEffect(() => {
    fetch('/api/best')
      .then(r => r.json())
      .then(setBestPlayer)
      .catch(() => {});
  }, []);

  return (
    <header className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-gray-900">Are You Just a Guy?</h1>
        
        {/* Streak badge */}
        {streak > 0 && (
          <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
            🔥 Day {streak}
          </div>
        )}
        
        {/* XP toast */}
        <AnimatePresence>
          {lastDelta !== 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                lastDelta > 0 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {lastDelta > 0 ? '+' : ''}{lastDelta} XP
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Best player */}
      <div className="text-sm text-gray-600">
        {bestPlayer.user ? (
          <span>🏆 Best: {bestPlayer.user} ({Math.round(bestPlayer.score)}%)</span>
        ) : (
          <span>🏆 Be the first on the board</span>
        )}
      </div>
    </header>
  );
}
