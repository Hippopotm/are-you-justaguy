import { motion } from 'framer-motion';

type LB = { username: string; score: number; iconUrl: string };

export default function TrashProgress({
  overallAverage,
  roundScore,
  avatarUrl,
  leaderboard = [],
}: {
  overallAverage: number; // your cumulative 0–100
  roundScore?: number; // last answer 0–100 (optional)
  avatarUrl?: string | null; // your Snoovatar
  leaderboard?: LB[]; // top players for the bar
}) {
  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  return (
    <div className="w-full p-3">
      <div className="relative w-full h-12 rounded-full overflow-visible bg-gradient-to-r from-red-500 via-amber-400 to-green-600">
        {/* Tier emojis like Hot&Cold */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-2 text-2xl select-none">
          <span title="Embarrassing">💀</span>
          <span title="Just a Guy">🙈</span>
          <span title="Recovering Guy">😬</span>
          <span title="Decent Human">😎</span>
          <span title="Golden Retriever">🦸‍♂️</span>
        </div>

        {/* Top players lined along the bar */}
        {leaderboard.slice(0, 10).map((p) => (
          <div
            key={p.username}
            className="absolute -bottom-11"
            style={{ left: `${clamp(p.score)}%`, transform: 'translateX(-50%)' }}
            title={`${p.username} • ${Math.round(p.score)}%`}
          >
            <img
              src={p.iconUrl}
              alt={p.username}
              className="w-9 h-9 rounded-full border-2 border-white shadow"
            />
          </div>
        ))}

        {/* Your avatar — bigger & animated */}
        {avatarUrl && (
          <motion.div
            className="absolute -top-14 z-20"
            animate={{ left: `${clamp(overallAverage)}%` }}
            style={{ transform: 'translateX(-50%)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.9 }}
          >
            <img
              src={avatarUrl}
              alt="You"
              className="w-14 h-14 rounded-full border-2 border-white shadow-lg"
            />
          </motion.div>
        )}

        {/* Arrow marking THIS answer (no text) */}
        {typeof roundScore === 'number' && (
          <motion.div
            className="absolute -top-3 z-10 text-gray-900"
            animate={{ left: `${clamp(roundScore)}%`, y: [-2, -12, -2] }}
            style={{ transform: 'translateX(-50%)' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            aria-hidden
          >
            <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor">
              <path d="M6 0 L12 10 H0 Z" />
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
}
