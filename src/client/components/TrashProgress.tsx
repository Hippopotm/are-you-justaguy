import { motion } from 'framer-motion';

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
  overallAverage: number;          // 0–100
  roundScore?: number;             // 0–100 (for current scenario)
  avatarUrl?: string | null;       // player's Snoovatar
  leaderboard?: LB[];              // small avatars along the rail
}) {
  const clamp = (v: number) => Math.max(0, Math.min(100, v));
  // 👇 THE avatar position: prefer the live round score; fallback to overall average
  const youAt = clamp(typeof roundScore === 'number' ? roundScore : overallAverage);

  return (
    <div className="w-full">
      {/* METER: keep overflow visible so the avatar can float without being clipped */}
      <div className="relative w-full max-w-[700px] mx-auto h-16 overflow-visible">
        {/* rail (color: red -> yellow -> green so 0 is "bad", 100 is "good") */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400" />

        {/* anchor emojis placed ON the rail */}
        {ANCHORS.map((a) => (
          <div
            key={`emoji-${a.at}`}
            className="absolute text-xl leading-none select-none"
            style={{ left: `${a.at}%`, top: '44%', transform: 'translate(-50%, -50%)' }}
            aria-hidden
          >
            {a.emoji}
          </div>
        ))}

        {/* small avatars for markers/leaderboard */}
        {leaderboard.map((m) => (
          <div
            key={`${m.username}-${m.score}`}
            className="absolute"
            style={{ left: `${clamp(m.score)}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
            title={`u/${m.username} • ${clamp(m.score)}%`}
          >
            <img
              src={m.iconUrl}
              width={24}
              height={24}
              className="rounded-full border border-white bg-white shadow-sm"
              alt=""
            />
          </div>
        ))}

        {/* YOUR AVATAR = THE POSITION INDICATOR (no arrow, always visible) */}
        {avatarUrl && (
          <motion.div
            className="absolute z-20"
            style={{ left: `${youAt}%`, top: '-6px', transform: 'translateX(-50%)' }}
            // gentle float so it feels "alive" on both mobile/desktop
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={avatarUrl}
              width={40}
              height={40}
              className="rounded-full border-2 border-white bg-white shadow"
              alt="Your avatar (current level)"
            />
          </motion.div>
        )}
      </div>

      {/* labels row (black, responsive, won't collide on mobile) */}
      <div className="relative mt-2 w-full max-w-[760px] mx-auto">
        <div className="flex justify-between gap-2 flex-wrap sm:flex-nowrap text-black font-medium">
          {ANCHORS.map((a) => (
            <div key={`label-${a.at}`} className="text-[11px] text-center grow basis-[20%]">
              {a.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
