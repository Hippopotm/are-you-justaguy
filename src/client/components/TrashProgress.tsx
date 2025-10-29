import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const levels = [
  { emoji: '💀', label: 'Embarrassing' },
  { emoji: '🤷🏽', label: 'Just a Guy' },
  { emoji: '😤', label: 'Recovering' },
  { emoji: '😎', label: 'Decent' },
  { emoji: '🦸🏽', label: 'Golden' },
];

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));

export default function TrashProgress({
  score,
  arrowAt,
}: {
  score: number;        // overall avg 0–100
  arrowAt?: number;     // this round (0,60,100). if present, show bouncy arrow
}) {
  const safe = clamp(score);
  const spring = useSpring(safe, { stiffness: 120, damping: 20, mass: 0.6 });
  const left = useTransform(spring, (v) => `${v}%`);
  const idx = Math.min(levels.length - 1, Math.floor(safe / 20));

  return (
    <div className="mt-3">
      <div className="relative h-3 rounded-full overflow-hidden bg-[#202028]">
        {/* gradient fill to your current avg */}
        <motion.div
          className="absolute left-0 top-0 bottom-0"
          style={{ width: left, background: 'linear-gradient(90deg,#ef4444,#f59e0b,#4ade80)' }}
        />
        {/* your avatar riding the line */}
        <motion.div className="absolute -top-4" style={{ left }}>
          <div className="text-xl select-none">🤖</div>
        </motion.div>

        {/* arrow for this round */}
        {typeof arrowAt === 'number' && (
          <motion.div
            className="absolute -top-3"
            style={{ left: `${clamp(arrowAt, 2, 98)}%` }}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-white mx-auto" />
          </motion.div>
        )}
      </div>

      {/* milestone avatars */}
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        {levels.map((lvl, i) => (
          <div key={lvl.label} className={`flex flex-col items-center ${i === idx ? 'text-white' : ''}`}>
            <div className="text-lg mb-1">{lvl.emoji}</div>
            <div className="text-[8px]">{lvl.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
