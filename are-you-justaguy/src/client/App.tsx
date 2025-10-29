import { useEffect, useState } from 'react';
import type { Scenario } from '../shared/types';
import TrashProgress from './components/TrashProgress';
import { motion, AnimatePresence } from 'framer-motion';
import { tierFrom, getXPDelta, getWittyFeedback } from '../shared/tiers';

const PROF_KEY = 'guy_profile_v2';

// Profile helpers for streak and average
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
  const [selected, setSelected] = useState<string | null>(null);
  const [me, setMe] = useState<{ username: string; iconUrl: string } | null>(null);
  const [leaderboard, setLeaderboard] = useState<{ username: string; score: number; iconUrl: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [roundResult, setRoundResult] = useState<{ score: number; tier: any } | null>(null);
  const [lastDelta, setLastDelta] = useState<number>(0);
  const [profile, setProfile] = useState(loadProfile());
  const [shuffledChoices, setShuffledChoices] = useState<any[]>([]);

  // Shuffle choice content while keeping A, B, C labels in order
  const shuffleChoiceContent = (choices: any[]) => {
    if (!choices || choices.length === 0) return [];
    
    // Create array of choice content
    const content = choices.map(c => ({
      text: c.text,
      points: c.points,
    }));
    
    // Shuffle the content array
    for (let i = content.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = content[i];
      if (temp && content[j]) {
        content[i] = content[j];
        content[j] = temp;
      }
    }
    
    // Return choices with shuffled content but original keys/labels
    return choices.map((choice, index) => {
      const shuffledContent = content[index];
      if (!shuffledContent) return choice;
      
      return {
        ...choice,
        text: shuffledContent.text,
        points: shuffledContent.points,
      };
    });
  };

  // Load scenario on mount
  useEffect(() => {
    loadNewScenario();
    setProfile(loadProfile());
    loadUserData();
    loadLeaderboard();
  }, []);

  const loadUserData = async () => {
    try {
      const response = await fetch('/api/me');
      if (response.ok) {
        const userData = await response.json();
        setMe(userData);
      }
    } catch (e) {
      console.error('Failed to load user data:', e);
    }
  };

  const loadLeaderboard = async () => {
    try {
      const response = await fetch('/api/best');
      if (response.ok) {
        const leaderboardData = await response.json();
        setLeaderboard(leaderboardData);
      }
    } catch (e) {
      console.error('Failed to load leaderboard:', e);
    }
  };

  const loadNewScenario = async () => {
    try {
      const data = await fetch('/api/scenario').then((r) => r.json());
      setScenario(data);
      if (data && data.choices) {
        setShuffledChoices(shuffleChoiceContent(data.choices));
      }
      // Reset states
      setSelected(null);
      setSubmitted(false);
      setRoundResult(null);
      setLastDelta(0);
    } catch (e) {
      console.error('scenario error', e);
    }
  };

  const handleSubmit = async (choiceKey: string) => {
    if (submitted || !scenario) return;
    
    setSelected(choiceKey);
    setSubmitted(true);

    try {
      // Get the points from the shuffled choice
      const selectedChoice = shuffledChoices.find(choice => choice.key === choiceKey);
      const roundScore = selectedChoice?.points || 0;
      
      // Call vote API to record the choice
      await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenarioId: scenario.id, choiceKey }),
      });

      // Update local profile
      const updatedProfile = addPlay(roundScore);
      setProfile(updatedProfile);
      
      // Set round result for display
      const tier = tierFrom(roundScore);
      setRoundResult({ score: roundScore, tier });
      
      // Show XP toast
      const xpDelta = getXPDelta(roundScore);
      setLastDelta(xpDelta);
      setTimeout(() => setLastDelta(0), 1200);
      
    } catch (e) {
      console.error('submit error', e);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      <div className="max-w-[760px] mx-auto p-4 space-y-3">
        
        {/* Header with streak and XP toast */}
        <header className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900">Are You Just a Guy?</h1>
            {profile.streak > 0 && (
              <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                🔥 Day {profile.streak}
              </div>
            )}
            {/* XP toast */}
            <AnimatePresence>
              {lastDelta !== 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    lastDelta > 0 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {lastDelta > 0 ? '+' : ''}{lastDelta} XP
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="text-sm text-gray-600">
            Avg: {avgScore()}%
          </div>
        </header>

        {/* Main card */}
        <main className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          {!scenario && <div className="text-center text-gray-600">Loading scenario…</div>}
          
          {scenario && (
            <>
              {/* Scenario */}
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-3 text-gray-900">{scenario.title}</h2>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-800 leading-relaxed">{scenario.body}</p>
                </div>
              </div>

              {/* Choices */}
              <div className="space-y-2 mb-4">
                {shuffledChoices.map((choice) => (
                  <button
                    key={choice.key}
                    disabled={submitted}
                    className={`w-full text-left rounded-lg px-3 py-2 transition-all duration-200 ${
                      selected === choice.key
                        ? 'bg-blue-100 border-2 border-blue-400' 
                        : submitted 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300'
                          : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 transform hover:scale-[0.98] active:scale-[0.98]'
                    }`}
                    onClick={() => handleSubmit(choice.key)}
                  >
                    <div className="flex items-start gap-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        selected === choice.key 
                          ? 'bg-blue-200 text-blue-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {choice.label}
                      </span>
                      <span className="text-sm text-gray-800 flex-1">{choice.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Results - shown after submission */}
              {submitted && roundResult && (
                <>
                  {/* Verdict chip */}
                  <div className="mb-3">
                    <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-lg ${roundResult.tier.chipClass}`}>
                      <span className="text-sm">{roundResult.tier.emoji}</span>
                      <span className="font-medium text-sm">
                        {roundResult.score}% {roundResult.tier.label}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2 text-xs">
                      {getWittyFeedback(roundResult.score)}
                    </p>
                  </div>

                  {/* Trash Meter */}
                  <TrashProgress 
                    overallAverage={avgScore()} 
                    roundScore={roundResult.score}
                    avatarUrl={me?.iconUrl || null}
                    leaderboard={leaderboard}
                  />
                </>
              )}

              {/* Next Scenario Button */}
              {submitted && (
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <button
                    className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-gray-800 transform hover:scale-[0.98] active:scale-[0.98]"
                    onClick={loadNewScenario}
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
