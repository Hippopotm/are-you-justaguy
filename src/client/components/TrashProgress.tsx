import { motion } from 'framer-motion';

type LB = { username: string; score: number; iconUrl: string };

const ANCHORS = [
  { at: 0, emoji: '💀', label: 'Embarrassing' },
  { at: 25, emoji: '🤷🏽', label: 'Just a Guy' },
  { at: 50, emoji: '😤', label: 'Recovering Guy' },
  { at: 75, emoji: '😎', label: 'Decent Human' },
  { at: 100, emoji: '🦸🏽', label: 'Golden Retriever' },
];

export default function TrashProgress({
  overallAverage,
  roundScore,
  avatarUrl,
  leaderboard = [],
}: {
  overallAverage: number; // your cumulative 0–100
  roundScore?: number; // last answer 0–100 (optional)
  avatarUrl?: string | null; // your Snoovatar
  leaderboard?: LB[]; // avatars along the rail
}) {
  const clamp = (v: number) => Math.max(0, Math.min(100, v));
  const youAt = clamp(typeof roundScore === 'number' ? roundScore : overallAverage);

  return (
    <div className="w-full">
      {/* rail */}
      <div className="relative w-full h-14">
        {/* gradient track - flipped so green is at 100% (Golden Retriever) */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400" />

        {/* anchor emojis along the rail */}
        {ANCHORS.map((a) => (
          <div
            key={a.at}
            className="absolute top-1/2 -translate-y-1/2 text-center"
            style={{ left: `${a.at}%`, transform: 'translate(-50%, -50%)' }}
            aria-hidden
          >
            <div className="text-xl select-none leading-none">{a.emoji}</div>
          </div>
        ))}

        {/* small leaderboard avatars */}
        {leaderboard.map((m) => (
          <div
            key={`${m.username}-${m.score}`}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${clamp(m.score)}%`, transform: 'translate(-50%, -50%)' }}
            title={`u/${m.username} • ${clamp(m.score)}%`}
          >
            <img
              src={m.iconUrl}
              width={26}
              height={26}
              className="rounded-full border border-white shadow-sm bg-white"
              alt=""
            />
          </div>
        ))}

        {/* YOUR avatar (no arrow) */}
        {avatarUrl && (
          <motion.div
            className="absolute z-10"
            style={{ left: `${youAt}%`, top: '-8px', transform: 'translateX(-50%)' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={avatarUrl}
              width={40}
              height={40}
              className="rounded-full border-2 border-white shadow bg-white"
              alt="Your avatar"
            />
          </motion.div>
        )}
      </div>

      {/* emoji labels (black for visibility) */}
      <div className="relative mt-2 h-5">
        {ANCHORS.map((a) => (
          <div
            key={`label-${a.at}`}
            className="absolute text-[11px] text-black font-medium text-center w-max"
            style={{ left: `${a.at}%`, transform: 'translateX(-50%)' }}
          >
            {a.label}
          </div>
        ))}
      </div>
    </div>
  );
}
