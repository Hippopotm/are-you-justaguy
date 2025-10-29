import { useEffect, useState } from 'react';
import type { Scenario } from '../shared/types';
import TrashProgress from './components/TrashProgress';
import { motion, AnimatePresence } from 'framer-motion';

type Reveal = { counts: Record<string, number>; total: number };

const PROF_KEY = 'guy_profile_v1';

// ---- simple local profile helpers (streak + average Trash Meter) ----
function loadProfile() {
  try {
    return JSON.parse(
      localStorage.getItem(PROF_KEY) || '{"plays":0,"total":0,"last":"","streak":0}'
    );
  } catch {
    return { plays: 0, total: 0, last: '', streak: 0 };
  }
}
function saveProfile(p: any) {
  localStorage.setItem(PROF_KEY, JSON.stringify(p));
}
function today() {
  return new Date().toISOString().slice(0, 10);
}
function addPlay(points: number) {
  const p = loadProfile();
  const t = today();
  if (p.last !== t) {
    const y = new Date();
    y.setDate(y.getDate() - 1);
    p.streak = p.last === y.toISOString().slice(0, 10) ? p.streak + 1 : 1;
    p.last = t;
  }
  p.plays += 1;
  p.total += points;
  saveProfile(p);
  return p;
}
function avgScore() {
  const p = loadProfile();
  return p.plays ? Math.round(p.total / p.plays) : 0;
}


export const App = () => {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [voted, setVoted] = useState<string | null>(null);
  const [, setProfile] = useState(loadProfile());
  const [, setCurrentAnswerScore] = useState<number | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [picked, setPicked] = useState<{ points: number } | null>(null); // roundScore (0,60,100)
  const [lastDelta, setLastDelta] = useState<number>(0);                 // XP gain/loss for toast
  const [best, setBest] = useState<{ username: string|null; xp: number|null }>({ username: null, xp: null });

  // Load one scenario from the server when the app mounts
  useEffect(() => {
    fetch('/api/scenario')
      .then((r) => r.json())
      .then(setScenario)
      .catch((e) => console.error('load scenario error', e));
    setProfile(loadProfile());
  }, []);

  // Load best player on mount
  useEffect(() => {
    fetch('/api/best').then(r=>r.json()).then(setBest).catch(()=>{});
  }, []);


  // Use original choices without shuffling to prevent movement
  const choices = scenario ? scenario.choices : [];

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      <div className="max-w-[760px] mx-auto p-4 space-y-3">
        {/* Header with XP toast and best player */}
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 border border-blue-300 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-white">Are You Just a Guy?</div>
            {/* XP toast */}
            <AnimatePresence>{lastDelta !== 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className={`px-2 py-1 rounded-lg text-sm ${lastDelta > 0 ? 'bg-emerald-500/20 text-emerald-200' : 'bg-red-500/20 text-red-200'}`}
              >
                {lastDelta > 0 ? '+' : ''}{lastDelta} XP
              </motion.div>
            )}</AnimatePresence>
          </div>
          <div className="text-xs text-gray-400">
            {best.username ? <>🏆 Best: u/{best.username} · {best.xp} XP</> : <>🏆 Be the first on the board</>}
          </div>
        </header>

        {/* Main card */}
        <main className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          {!scenario && <div className="text-center text-gray-600">Loading…</div>}
          {scenario && (
            <>

              {/* Text */}
              <h1 className="text-2xl font-bold mb-4 text-gray-900">{scenario.title}</h1>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-800 leading-relaxed">{scenario.body}</p>
              </div>

              {/* Choices */}
              <div className="space-y-3 mb-6">
                {choices.map((c) => (
                  <button
                    key={c.key}
                    disabled={submitted}
                    className={`w-full text-left rounded-xl px-4 py-4 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-[1.02] ${
                      selected === c.key
                        ? 'bg-blue-100 border-2 border-blue-400 shadow-blue-200' 
                        : submitted 
                          ? 'bg-gray-100 border border-gray-300 cursor-not-allowed'
                          : 'bg-white hover:bg-blue-50 border border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={async () => {
                      if (submitted) return;
                      setSelected(c.key);
                      setSubmitted(true);

                      const res = await fetch('/api/vote', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ scenarioId: scenario.id, choiceKey: c.key }),
                      }).then(r => r.json());

                      if (!res.alreadyVoted) {
                        // roundScore: 0/60/100 affects the overall average
                        setPicked({ points: res.roundScore });
                        setProfile(addPlay(res.roundScore)); // updates overall average
                        setLastDelta(res.xpDelta || 0);      // +XP / -XP toast
                        setTimeout(() => setLastDelta(0), 1200);
                      } else {
                        setPicked(null); // they had already voted — don't re-count
                      }

                      // reveal after submit
                      const data = await fetch('/api/reveal?scenarioId='+encodeURIComponent(scenario.id)).then(r=>r.json());
                      setReveal(data);

                      // refresh best player
                      fetch('/api/best').then(r=>r.json()).then(setBest).catch(()=>{});
                    }}
                  >
                    <div className="flex items-start">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full mr-3 mt-1 ${
                        selected === c.key 
                          ? 'bg-blue-200 text-blue-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {c.label}
                      </span>
                      <span className="text-gray-800 flex-1">{c.text}</span>
                      {selected === c.key && !submitted ? (
                        <span className="ml-2 text-blue-600 font-bold text-xl animate-bounce">👆</span>
                      ) : null}
                    </div>
                  </button>
                ))}
              </div>


              {/* Verdict text only (no learning moment) */}
              {submitted && picked && (
                <>
                  {/* verdict text */}
                  <div className="mt-4 p-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
                    {picked.points === 0   && <div className="text-2xl">💀</div>}
                    {picked.points === 60  && <div className="text-2xl">😤</div>}
                    {picked.points === 100 && <div className="text-2xl">🦸🏽</div>}

                    <div className="text-xl font-bold mt-1 text-gray-800">
                      {picked.points}% {picked.points===0 ? 'Embarrassing' : picked.points===60 ? 'Recovering Guy' : 'Golden Retriever'}
                    </div>
                    <div className="text-gray-600 mt-1">
                      {picked.points===0 ? 'Bro… that was painful to watch.' :
                       picked.points===60 ? 'Keep trying, you got this.' :
                       'Unproblematic king energy.'}
                    </div>
                  </div>

                  {/* ONE trash meter at the bottom */}
                  <TrashProgress score={avgScore()} arrowAt={picked.points} />
                </>
              )}

              {/* Community Results - shown immediately after voting */}
              {submitted && reveal && (
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Community Results</h3>
                  <p className="text-sm text-gray-600 mb-2">Total votes: {reveal.total}</p>
                  <div className="space-y-2">
                    {scenario.choices.map((c) => {
                      const count = reveal.counts[c.key] || 0;
                      const percentage = reveal.total > 0 ? Math.round((count / reveal.total) * 100) : 0;
                      return (
                        <div key={c.key} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            {c.label}: {c.text}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12 text-right">{percentage}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Next Scenario Button */}
              {reveal && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200 transform hover:scale-[1.02]"
                    onClick={async () => {
                      try {
                        const data = await fetch('/api/scenario').then((r) => r.json());
                        setScenario(data);
                        // Reset all states for new scenario
                        setReveal(null);
                        setCurrentAnswerScore(null);
                        setSelected(null);
                        setSubmitted(false);
                        setPicked(null);
                        setLastDelta(0);
                      } catch (e) {
                        console.error('scenario error', e);
                      }
                    }}
                  >
                    🎲 Try Another Scenario
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};
