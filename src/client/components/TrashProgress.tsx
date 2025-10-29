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
    <div className="mb-6">
      {/* Progress Bar */}
      <div className="relative h-6 rounded-full overflow-hidden bg-gray-200">
        {/* Gradient fill */}
        <div 
          className="absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-green-600"
          style={{ width: `${safeAverage}%` }}
        />
        
        {/* Avatar above the bar - clearly visible */}
        <motion.div 
          className="absolute -top-6 z-20"
          style={{ left: avatarLeft, marginLeft: '-16px' }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 shadow-md flex items-center justify-center text-lg">
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
            className="absolute -top-3 z-10"
            style={{ left: `${clamp(roundScore, 2, 98)}%`, marginLeft: '-4px' }}
            initial={{ y: -2, opacity: 0 }}
            animate={{ 
              y: [-2, -12, -2], 
              opacity: 1
            }}
            transition={{ 
              duration: 0.7,
              ease: "easeOut",
              times: [0, 0.5, 1]
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" className="fill-gray-800">
              <polygon points="4,0 8,8 0,8" />
            </svg>
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
