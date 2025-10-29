import { motion, useSpring, useTransform } from 'framer-motion';

type LB = { username: string; score: number; iconUrl: string };

const ANCHORS = [
  { at: 0,   emoji: '💀', label: 'Embarrassing' },
  { at: 25,  emoji: '🤷🏽', label: 'Just a Guy' },
  { at: 50,  emoji: '😤', label: 'Recovering Guy' },
  { at: 75,  emoji: '😎', label: 'Decent Human' },
  { at: 100, emoji: '🦸🏽', label: 'Golden Retriever' },
];

export default function TrashProgress({
  overallAverage,
  roundScore,
  avatarUrl,
  leaderboard = [],
}: {
  overallAverage: number;          // 0–100 - player's cumulative progress
  roundScore?: number;             // 0–100 (for current scenario)
  avatarUrl?: string | null;       // player's Snoovatar
  leaderboard?: LB[];              // small avatars along the rail
}) {
  const clamp = (v: number) => Math.max(0, Math.min(100, v));
  const safeAverage = clamp(overallAverage);
  
  // Smooth spring animation for avatar advancement
  const spring = useSpring(safeAverage, { 
    stiffness: 260, 
    damping: 24, 
    mass: 0.9 
  });
  const avatarLeft = useTransform(spring, (v) => `${v}%`);
  const progressWidth = useTransform(spring, (v) => `${v}%`);

  return (
    <div className="w-full">
      {/* METER: Progress bar with avatar advancement */}
      <div className="relative w-full max-w-[700px] mx-auto h-16 overflow-visible">
        {/* Background rail */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 rounded-full bg-gray-200" />
        
        {/* Progress fill - advances with avatar */}
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 h-4 rounded-full"
          style={{ 
            width: progressWidth,
            background: 'linear-gradient(90deg, #ef4444 0%, #f97316 20%, #eab308 40%, #84cc16 60%, #22c55e 80%, #16a34a 100%)'
          }}
        />



        {/* Small leaderboard avatars with directional flipping */}
        {leaderboard.map((m) => {
          const position = clamp(m.score);
          const shouldFlip = position > 50; // Flip avatars on the right side of the meter
          
          return (
            <div
              key={`${m.username}-${m.score}`}
              className="absolute z-10"
              style={{ left: `${position}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
              title={`u/${m.username} • ${position}%`}
            >
              <img
                src={m.iconUrl}
                width={24}
                height={24}
                className={`rounded-full border border-white bg-white shadow-sm transition-transform duration-200 ${
                  shouldFlip ? 'scale-x-[-1]' : ''
                }`}
                alt=""
              />
            </div>
          );
        })}

        {/* PLAYER AVATAR - Advances along the meter showing progress */}
        {avatarUrl && (
          <motion.div
            className="absolute z-20"
            style={{ left: avatarLeft, top: '-6px', transform: 'translateX(-50%)' }}
            // Gentle float animation
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={avatarUrl}
              width={48}
              height={48}
              className={`rounded-full border-3 border-white bg-white shadow-lg transition-transform duration-200 ${
                safeAverage > 50 ? 'scale-x-[-1]' : ''
              }`}
              alt="Your progress"
            />
          </motion.div>
        )}


      </div>

      {/* Labels row with emojis (responsive, won't collide on mobile) */}
      <div className="relative mt-2 w-full max-w-[760px] mx-auto">
        <div className="flex justify-between gap-2 flex-wrap sm:flex-nowrap text-black font-medium">
          {ANCHORS.map((a) => (
            <div key={`label-${a.at}`} className="text-[10px] text-center grow basis-[20%] flex flex-col items-center">
              <span className="text-sm mb-1">{a.emoji}</span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
