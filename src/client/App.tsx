import { useEffect, useState } from 'react';
import type { Scenario } from '../shared/types';

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
function rank(score: number) {
  if (score <= 20)
    return { emoji: '💀', title: 'Embarrassing', msg: 'Bro… that was painful to watch.' };
  if (score <= 40) return { emoji: '🤷🏽', title: 'Just a Guy', msg: 'Mhhmmm.' };
  if (score <= 70)
    return { emoji: '😤', title: 'Recovering Guy', msg: 'Keep trying, you got this.' };
  if (score <= 90)
    return {
      emoji: '😎',
      title: 'Decent (sort of enough) Human',
      msg: 'You\'re learning and it shows.',
    };
  return { emoji: '🦸🏽', title: 'Golden Retriever', msg: 'You\'re the adult child you needed.' };
}

export const App = () => {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [voted, setVoted] = useState<string | null>(null);
  const [showScoreAnimation, setShowScoreAnimation] = useState(false);
  const [profile, setProfile] = useState(loadProfile());

  // Load one scenario from the server when the app mounts
  useEffect(() => {
    fetch('/api/scenario')
      .then((r) => r.json())
      .then(setScenario)
      .catch((e) => console.error('load scenario error', e));
    setProfile(loadProfile());
  }, []);

  const score = avgScore();
  const r = rank(score);
  const hasPlayed = profile.plays > 0;

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      <div className="max-w-[760px] mx-auto p-4 space-y-3">
        {/* Header with streak + Visual Trash Meter */}
        <header className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="font-bold text-xl text-gray-900">Are You Just a Guy?</div>
            <div className="text-sm text-gray-600">
              {profile.streak ? <>🔥 {profile.streak}-day streak</> : "Start your streak"}
            </div>
          </div>
          
          {/* Show welcome message or trash meter based on whether user has played */}
          {!hasPlayed ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🤔</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">ARE YOU JUST A GUY?</div>
              <div className="text-gray-600">Let's find out... 😏</div>
            </div>
          ) : (
            /* Animated Trash Meter Progress Bar */
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-gray-600">
                <span>💀 Embarrassing</span>
                <span>🤷🏽 Just a Guy</span>
                <span>😤 Recovering Guy</span>
                <span>😎 Decent Human</span>
                <span>🦸🏽 Golden Retriever</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 h-4 rounded-full transition-all duration-1000 ease-out ${showScoreAnimation ? 'animate-pulse' : ''}`}
                  style={{ width: `${score}%` }}
                ></div>
                {/* Animated indicator showing current position */}
                <div 
                  className={`absolute top-0 w-1 h-4 bg-white shadow-lg rounded-full transition-all duration-1000 ease-out ${showScoreAnimation ? 'animate-bounce' : ''}`}
                  style={{ left: `calc(${score}% - 2px)` }}
                ></div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                  <span className="text-2xl animate-bounce">{r.emoji}</span>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{score}%, {r.title}</div>
                    <div className="text-sm text-gray-600">{r.msg}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main card */}
        <main className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          {!scenario && <div className="text-center text-gray-600">Loading…</div>}
          {scenario && (
            <>
              {/* Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  {scenario.topic}
                </span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                  {scenario.standard.framework} → {scenario.standard.step}
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
                  Men · Bystander
                </span>
              </div>

              {/* Text */}
              <h1 className="text-2xl font-bold mb-4 text-gray-900">{scenario.title}</h1>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-800 leading-relaxed mb-3">{scenario.body}</p>
                <div className="text-sm text-gray-600">
                  <p><strong>What to notice:</strong> {scenario.cues.join(' • ')}</p>
                  <p><strong>What you want:</strong> {scenario.goals.join(' • ')}</p>
                </div>
              </div>

              {/* Choices */}
              <div className="space-y-3 mb-6">
                {scenario.choices.map((c) => (
                  <button
                    key={c.key}
                    className={`w-full text-left rounded-xl px-4 py-4 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-[1.02] ${
                      voted === c.key 
                        ? 'bg-green-100 border-2 border-green-400 shadow-green-200' 
                        : 'bg-white hover:bg-blue-50 border border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={async () => {
                      // Allow changing answers - if same choice clicked, do nothing
                      if (voted === c.key) return;
                      
                      try {
                        const res = await fetch('/api/vote', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ scenarioId: scenario.id, choiceKey: c.key }),
                        }).then((r) => r.json());
                        setVoted(c.key);
                        setShowScoreAnimation(true);
                        setProfile(addPlay(res.points || 0)); // update local Trash Meter
                        // Reset animation after it completes
                        setTimeout(() => setShowScoreAnimation(false), 2000);
                      } catch (e) {
                        console.error('vote error', e);
                      }
                    }}
                  >
                    <div className="flex items-start">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full mr-3 mt-1 ${
                        voted === c.key 
                          ? 'bg-green-200 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {c.label}
                      </span>
                      <span className="text-gray-800 flex-1">{c.text}</span>
                      {voted === c.key ? (
                        <span className="ml-2 text-green-600 font-bold text-xl animate-bounce">🎯</span>
                      ) : null}
                    </div>
                  </button>
                ))}
              </div>

              {/* Show results immediately after voting */}
              {voted && (
                <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="text-center mb-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-lg font-bold text-green-800">Nice choice, dude!</div>
                    <div className="text-sm text-green-600">Here's how you did... 👀</div>
                  </div>
                  
                  {/* Bottom Trash Meter with Arrow */}
                  <div className="bg-white rounded-lg p-4 border border-green-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Your Trash Meter</span>
                      <span className="text-xs text-gray-500">↓ Your answer landed you here, bro</span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${score}%` }}
                      ></div>
                      {/* Arrow indicator */}
                      <div 
                        className="absolute -top-1 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-500 transition-all duration-1000 ease-out"
                        style={{ left: `calc(${score}% - 4px)` }}
                      ></div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="inline-flex items-center space-x-2">
                        <span className="text-xl">{r.emoji}</span>
                        <div>
                          <div className="text-sm font-bold text-gray-900">{score}%, {r.title}</div>
                          <div className="text-xs text-gray-600">{r.msg}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reveal Community Results */}
              <div className="mt-4">
                <button
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200 transform hover:scale-[1.02]"
                  onClick={async () => {
                    if (reveal) return;
                    try {
                      const data = await fetch(
                        '/api/reveal?scenarioId=' + encodeURIComponent(scenario.id)
                      ).then((r) => r.json());
                      setReveal(data);
                    } catch (e) {
                      console.error('reveal error', e);
                    }
                  }}
                >
                  🔍 Reveal Community Results
                </button>
                {reveal && (
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
              </div>

              {/* Next Scenario Button */}
              {reveal && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h3 className="font-bold text-gray-900 mb-2">Learning Moment</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Why this standard?</strong> {scenario.standard.explainer}
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Micro-script:</strong> "{scenario.standard.script.default}"
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Gentle: "{scenario.standard.script.gentle}"
                      </p>
                    </div>
                  </div>
                  
                  <button
                    className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200 transform hover:scale-[1.02]"
                    onClick={async () => {
                      try {
                        const data = await fetch('/api/scenario').then((r) => r.json());
                        setScenario(data);
                        setVoted(null);
                        setReveal(null);
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
