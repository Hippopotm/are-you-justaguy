import { motion, useSpring, useTransform } from 'framer-motion';

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));

interface TrashProgressProps {
  overallAverage: number;    // Player's running average 0-100
  roundScore?: number;       // Current round score (0, 60, or 100) - shows bouncy arrow
  avatarUrl?: string;        // Optional avatar URL
}

export default function TrashProgress({ overallAverage, roundScore, avatarUrl }: TrashProgressProps) {
  const safeAverage = clamp(overallAverage);
  const spring = useSpring(safeAverage, { 
    stiffness: 260, 
    damping: 24, 
    mass: 0.9 
  });
  const avatarLeft = useTransform(spring, (v) => `${v}%`);

  return (
    <div className="mt-4">
      {/* Progress Bar */}
      <div className="relative h-4 rounded-full overflow-hidden bg-gray-200">
        {/* Gradient fill */}
        <div 
          className="absolute left-0 top-0 bottom-0 rounded-full"
          style={{ 
            width: `${safeAverage}%`,
            background: 'linear-gradient(90deg, #ef4444 0%, #f59e0b 50%, #22c55e 100%)'
          }}
        />
        
        {/* Avatar riding the bar */}
        <motion.div 
          className="absolute -top-4 -ml-6"
          style={{ left: avatarLeft }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg bg-blue-500 flex items-center justify-center text-xl">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
            ) : (
              '🤖'
            )}
          </div>
        </motion.div>

        {/* Bouncy arrow for current round (NO TEXT) */}
        {typeof roundScore === 'number' && (
          <motion.div
            className="absolute -top-2 -ml-1"
            style={{ left: `${clamp(roundScore, 2, 98)}%` }}
            initial={{ y: -10, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: [0, -4, 0, -2, 0], 
              opacity: 1, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
              times: [0, 0.3, 0.5, 0.7, 1]
            }}
          >
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-800" />
          </motion.div>
        )}
      </div>

      {/* Scale markers */}
      <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
