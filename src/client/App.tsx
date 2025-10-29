import { useEffect, useState } from 'react';
import type { Scenario } from '../shared/types';
import TrashProgress from './components/TrashProgress';
import Header from './components/Header';
import { tierFrom, getXPDelta, getWittyFeedback } from '../shared/tiers';

const PROF_KEY = 'guy_profile_v2';

type LeaderboardPlayer = {
  username: string;
  score: number;
  iconUrl: string;
};

type Me = {
  username?: string | null;
  iconUrl?: string | null;
};

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
  const [submitted, setSubmitted] = useState(false);
  const [roundResult, setRoundResult] = useState<{ score: number; tier: any } | null>(null);
  const [lastDelta, setLastDelta] = useState<number>(0);
  const [profile, setProfile] = useState(loadProfile());
  const [shuffledChoices, setShuffledChoices] = useState<any[]>([]);
  const [me, setMe] = useState<Me>({});
  const [leaderboardAvatars, setLeaderboardAvatars] = useState<LeaderboardPlayer[]>([]);
  const [overallAverage, setOverallAverage] = useState<number>(0);
  const [roundScore, setRoundScore] = useState<number | undefined>(undefined);

  // Fetch me + leaderboard + scenario immediately on mount
  useEffect(() => {
    // Fetch user info
    fetch('/api/me')
      .then(r => r.json())
      .then(setMe)
      .catch(() => {});
    
    // Fetch leaderboard
    fetch('/api/best')
      .then(r => r.json())
      .then(setLeaderboardAvatars)
      .catch(() => {});

    // Load first scenario immediately
    fetchNextScenario();
    
    // Set initial profile
    setProfile(loadProfile());
    setOverallAverage(avgScore());
  }, []);

  // Shuffle choice content while keeping A, B, C labels in order
  const shuffleChoiceContent = (choices: any[]) => {
    if (!choices || choices.length === 0) return [];
    
    // Create array of choice content
    const content = choices.map(c => ({
      text: c.text,
      points: c.points,
    }));
    
    // Shuffle the content array using Fisher-Yates algorithm
    for (let i = content.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = content[i]!;
      content[i] = content[j]!;
      content[j] = temp;
    }
    
    // Return choices with shuffled content but original keys/labels
    return choices.map((choice, index) => {
      const contentItem = content[index];
      return {
        ...choice,
        text: contentItem ? contentItem.text : choice.text,
        points: contentItem ? contentItem.points : choice.points,
      };
    });
  };

  const fetchNextScenario = async () => {
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
      setRoundScore(undefined);
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
      const currentRoundScore = selectedChoice?.points || 0;
      
      // Call submit API to record the choice and update leaderboard
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenarioId: scenario.id, choiceKey }),
      });

      // Update local profile
      const updatedProfile = addPlay(currentRoundScore);
      setProfile(updatedProfile);
      
      // Update overall average and round score for meter animation
      const newAverage = avgScore();
      setOverallAverage(newAverage);
      setRoundScore(currentRoundScore);
      
      // Set round result for display
      const tier = tierFrom(currentRoundScore);
      setRoundResult({ score: currentRoundScore, tier });
      
      // Show XP toast
      const xpDelta = getXPDelta(currentRoundScore);
      setLastDelta(xpDelta);
      setTimeout(() => setLastDelta(0), 1200);

      // Refresh leaderboard after submit
      fetch('/api/best')
        .then(r => r.json())
        .then(setLeaderboardAvatars)
        .catch(() => {});
      
    } catch (e) {
      console.error('submit error', e);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      <div className="max-w-[760px] mx-auto p-4 space-y-4">
        
        {/* Header with leaderboard and streak */}
        <Header streak={profile.streak} lastDelta={lastDelta} />

        {/* Trash Meter - always visible with big avatars */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <TrashProgress 
            overallAverage={overallAverage} 
            {...(submitted && typeof roundScore === 'number' ? { roundScore } : {})}
            avatarUrl={me.iconUrl || null}
            leaderboard={leaderboardAvatars}
          />
        </div>

        {/* Main game card with hover affordance */}
        <main 
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-transform hover:shadow-lg hover:-translate-y-0.5"
          onPointerEnter={() => {
            // Optional: prefetch next scenario, preload assets, etc.
          }}
        >
          {!scenario && <div className="text-center text-gray-600">Loading scenario…</div>}
          
          {scenario && (
            <>
              {/* Scenario */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{scenario.title}</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800 leading-relaxed">{scenario.body}</p>
                </div>
              </div>

              {/* Choices */}
              <div className="space-y-3 mb-6">
                {shuffledChoices.map((choice) => (
                  <button
                    key={choice.key}
                    disabled={submitted}
                    className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-200 ${
                      selected === choice.key
                        ? 'bg-blue-100 border-2 border-blue-400' 
                        : submitted 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300'
                          : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 transform hover:scale-[0.98] active:scale-[0.98]'
                    }`}
                    onClick={() => handleSubmit(choice.key)}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                        selected === choice.key 
                          ? 'bg-blue-200 text-blue-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {choice.label}
                      </span>
                      <span className="text-gray-800 flex-1">{choice.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Results - shown after submission */}
              {submitted && roundResult && (
                <div className="mb-6">
                  {/* Verdict chip with proper contrast */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${roundResult.tier.chipClass}`}>
                      <span className="text-lg">{roundResult.tier.emoji}</span>
                      <span className="font-medium">
                        {roundResult.score}% {roundResult.tier.label}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2 text-sm">
                      {getWittyFeedback(roundResult.score)}
                    </p>
                  </div>
                </div>
              )}

              {/* Next Scenario Button */}
              {submitted && (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl font-medium transition-colors duration-200 hover:bg-gray-800 transform hover:scale-[0.98] active:scale-[0.98]"
                    onClick={fetchNextScenario}
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
