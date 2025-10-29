import { motion, useSpring, useTransform } from 'framer-motion';

const levels = [
  { emoji: '💀', label: 'Embarrassing', range: [0, 20] as const },
  { emoji: '🤷🏽', label: 'Just a Guy', range: [21, 40] as const },
  { emoji: '😤', label: 'Recovering', range: [41, 70] as const },
  { emoji: '😎', label: 'Decent', range: [71, 90] as const },
  { emoji: '🦸🏽', label: 'Golden', range: [91, 100] as const },
];

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));

export default function TrashProgress({
  score,
  arrowAt,
}: {
  score: number;        // overall avg 0–100
  arrowAt?: number;     // this round points. if present, show bouncy arrow
}) {
  const safe = clamp(score);
  const spring = useSpring(safe, { stiffness: 120, damping: 20, mass: 0.6 });
  const left = useTransform(spring, (v) => `${v}%`);
  
  // Find current tier based on score
  const currentTier = levels.find(level => {
    const [min, max] = level.range;
    return safe >= min && safe <= max;
  }) || levels[0];

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

        {/* bouncy arrow for this round */}
        {typeof arrowAt === 'number' && (
          <motion.div
            className="absolute -top-3"
            style={{ left: `${clamp(arrowAt, 2, 98)}%` }}
            initial={{ y: -8, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10, bounce: 0.6 }}
          >
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-800 mx-auto" />
          </motion.div>
        )}
      </div>

      {/* milestone tiers with proper contrast */}
      <div className="flex justify-between text-[10px] mt-1">
        {levels.map((lvl) => (
          <div key={lvl.label} className={`flex flex-col items-center ${
            lvl.label === 'Embarrassing' 
              ? 'bg-red-50 text-red-700 px-1 rounded' 
              : currentTier?.label === lvl.label 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-400'
          }`}>
            <div className="text-lg mb-1">{lvl.emoji}</div>
            <div className="text-[8px]">{lvl.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
