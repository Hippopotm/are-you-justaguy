import express from 'express';
import {
  redis,
  reddit,
  createServer,
  context,
  getServerPort,
} from '@devvit/web/server';

// 👇 NEW: import our scenarios (you created this file earlier)
import { scenarios } from '../shared/scenarios';
// (optional) you can also import the Scenario type if you want stronger typing
// import type { Scenario } from '../shared/types';

import {
  InitResponse,
  IncrementResponse,
  DecrementResponse,
} from '../shared/types/api';

const app = express();

// -------- Common middleware --------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

const router = express.Router();

/**
 * =============================
 *  ORIGINAL DEMO ENDPOINTS
 *  (kept so your template keeps working)
 * =============================
 */
router.get<{ postId: string }, InitResponse | { status: string; message: string }>(
  '/api/init',
  async (_req, res): Promise<void> => {
    const { postId } = context;

    if (!postId) {
      console.error('API Init Error: postId not found in devvit context');
      res.status(400).json({
        status: 'error',
        message: 'postId is required but missing from context',
      });
      return;
    }

    try {
      const [count, username] = await Promise.all([redis.get('count'), reddit.getCurrentUsername()]);

      res.json({
        type: 'init',
        postId,
        count: count ? parseInt(count) : 0,
        username: username ?? 'anonymous',
      });
    } catch (error) {
      console.error(`API Init Error for post ${postId}:`, error);
      let errorMessage = 'Unknown error during initialization';
      if (error instanceof Error) {
        errorMessage = `Initialization failed: ${error.message}`;
      }
      res.status(400).json({ status: 'error', message: errorMessage });
    }
  }
);

router.post<{ postId: string }, IncrementResponse | { status: string; message: string }, unknown>(
  '/api/increment',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({ status: 'error', message: 'postId is required' });
      return;
    }

    res.json({
      count: await redis.incrBy('count', 1),
      postId,
      type: 'increment',
    });
  }
);

router.post<{ postId: string }, DecrementResponse | { status: string; message: string }, unknown>(
  '/api/decrement',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({ status: 'error', message: 'postId is required' });
      return;
    }

    res.json({
      count: await redis.incrBy('count', -1),
      postId,
      type: 'decrement',
    });
  }
);

/**
 * =============================
 *  NEW GAME ENDPOINTS
 * =============================
 *
 * We store vote tallies in Redis with keys:
 *   tally:<scenarioId>:A
 *   tally:<scenarioId>:B
 *   tally:<scenarioId>:C
 *   (and D if present)
 *
 * The client:
 *  - GET  /api/scenario  -> loads one confessional scenario
 *  - POST /api/vote      -> { scenarioId, choiceKey } increments tally + returns points for Trash Meter
 *  - GET  /api/reveal    -> ?scenarioId=... returns counts + total for percentage bars
 */

// Choose a scenario (random selection for multiple plays)
function pickRandomScenario() {
  const idx = Math.floor(Math.random() * scenarios.length);
  return scenarios[idx];
}

// GET /api/scenario -> one long confessional scenario
router.get('/api/scenario', async (_req, res) => {
  try {
    // Use Kiro to generate short, funny, addictive scenarios
    const frameworks = ['5Ds', 'DEARMAN', 'LIVES', 'COOPER'];
    const steps = ['Direct', 'Distract', 'Delegate', 'Delay', 'Document', 'Express', 'Assert', 'Listen', 'Validate'];
    const settings = ['the bar', 'campus', 'workplace', 'gym', 'group chat', 'coffee shop', 'party', 'dating app'];
    const contexts = ['cringe pickup line', 'awkward conversation', 'uncomfortable situation', 'social mishap', 'boundary crossing'];
    
    const framework = frameworks[Math.floor(Math.random() * frameworks.length)];
    const step = steps[Math.floor(Math.random() * steps.length)];
    const setting = settings[Math.floor(Math.random() * settings.length)];
    const context = contexts[Math.floor(Math.random() * contexts.length)];
    
    // Generate new Kiro scenario (50% chance) or use static scenario (50% chance)
    const useKiro = Math.random() > 0.5;
    
    if (useKiro) {
      const kiroScenario = await generateKiroScenario(framework, step, setting, context);
      res.json(kiroScenario);
    } else {
      // Fallback to static scenario with Kiro metadata
      const s = pickRandomScenario();
      s.kiroGenerated = true;
      s.generationFramework = framework;
      s.generationStep = step;
      s.generationSetting = setting;
      res.json(s);
    }
  } catch (e) {
    console.error('Scenario generation error', e);
    // Fallback to static scenario
    const s = pickRandomScenario();
    res.json(s);
  }
});

// GET /api/generate-scenario -> generate new scenario using Kiro
router.get('/api/generate-scenario', async (req, res) => {
  try {
    const { framework = '5Ds', step = 'Direct', setting = 'bar', context = 'social situation' } = req.query;
    
    // Generate a new scenario using Kiro-style AI generation
    const generatedScenario = await generateKiroScenario(
      framework as string,
      step as string,
      setting as string,
      context as string
    );
    
    res.json({ 
      success: true, 
      scenario: generatedScenario,
      message: "Generated using Kiro AI scenario generation"
    });
  } catch (e) {
    console.error('Generate scenario error', e);
    res.status(500).json({ error: 'Internal error generating scenario' });
  }
});

// Kiro AI Scenario Generation Function - Short & Funny Scenarios
async function generateKiroScenario(framework: string, step: string, setting: string, context: string) {
  // Generate short, funny, addictive scenarios
  const shortScenarios = [
    {
      id: `kiro-${Date.now()}`,
      topic: `${setting} · Quick Decision`,
      title: `AITA for calling out my buddy's cringe pickup line?`,
      body: `So we're at ${setting} and my friend Jake drops the most cringe pickup line I've ever heard. The girl literally cringes and tries to walk away but he keeps going. I'm dying inside watching this trainwreck. Do I save him or let him crash and burn?`,
      standard: {
        framework: framework,
        step: step,
        explainer: "Quick intervention saves everyone the awkwardness.",
        script: {
          default: "Dude, that was rough. Let's get another round.",
          gentle: "Maybe try a different approach, man."
        }
      },
      choices: [
        {
          key: "A",
          label: "A",
          text: "Pull him aside and tell him to stop.",
          outcome: "safer",
          points: 95,
          rationale: "Saves everyone from the cringe."
        },
        {
          key: "B",
          label: "B",
          text: "Laugh it off and change the subject.",
          outcome: "partial",
          points: 65,
          rationale: "Helps but doesn't address the issue."
        },
        {
          key: "C",
          label: "C",
          text: "Record it for the group chat.",
          outcome: "riskier",
          points: 15,
          rationale: "Makes it worse for everyone."
        }
      ],
      kiroGenerated: true,
      generationFramework: framework,
      generationStep: step,
      generationSetting: setting
    },
    {
      id: `kiro-${Date.now()}`,
      topic: `${setting} · Awkward Moment`,
      title: `AITA for stepping in when my friend won't take a hint?`,
      body: `At ${setting}, my buddy keeps trying to talk to this girl who's clearly not interested. She's giving one-word answers and looking at her phone, but he's not getting it. I'm cringing so hard watching this. Should I save him or let him learn the hard way?`,
      standard: {
        framework: framework,
        step: step,
        explainer: "Quick redirect saves everyone the awkwardness.",
        script: {
          default: "Hey man, let's grab a drink.",
          gentle: "Maybe give her some space?"
        }
      },
      choices: [
        {
          key: "A",
          label: "A",
          text: "Create a distraction and pull him away.",
          outcome: "safer",
          points: 92,
          rationale: "Saves everyone from the awkwardness."
        },
        {
          key: "B",
          label: "B",
          text: "Wait and see if he figures it out.",
          outcome: "partial",
          points: 65,
          rationale: "She's stuck dealing with it longer."
        },
        {
          key: "C",
          label: "C",
          text: "Join in and try to help him out.",
          outcome: "riskier",
          points: 20,
          rationale: "Makes it worse for her."
        }
      ],
      kiroGenerated: true,
      generationFramework: framework,
      generationStep: step,
      generationSetting: setting
    }
  ];
  
  return shortScenarios[Math.floor(Math.random() * shortScenarios.length)];
}

// POST /api/vote { scenarioId, choiceKey }
router.post('/api/vote', async (req, res) => {
  try {
    const { scenarioId, choiceKey } = req.body as { scenarioId?: string; choiceKey?: string };
    if (!scenarioId || !choiceKey) return res.status(400).json({ error: 'Missing scenarioId or choiceKey' });

    const scenario = scenarios.find((x) => x.id === scenarioId);
    if (!scenario) return res.status(404).json({ error: 'Scenario not found' });

    const choice = scenario.choices.find((c) => c.key === choiceKey);
    if (!choice) return res.status(400).json({ error: 'Invalid choiceKey' });

    // username for per-user limits + leaderboards
    const username = (await reddit.getCurrentUsername()) || 'anon';

    // prevent double vote per user per scenario
    const votedKey = `voted:${scenarioId}:${username}`;
    const already = await redis.get(votedKey);
    if (already) {
      // still return reveal data shape so client UX is smooth
      return res.json({ ok: false, alreadyVoted: true });
    }
    await redis.set(votedKey, '1');

    // Use the exact points from the choice (already set in scenarios)
    const roundScore = choice.points;
    
    // Calculate XP delta based on exact specification tiers
    let xpDelta = 0;
    if (roundScore >= 91) xpDelta = 20;      // Golden Retriever (+20 XP)
    else if (roundScore >= 71) xpDelta = 15; // Decent Human (+15 XP)
    else if (roundScore >= 41) xpDelta = 10; // Recovering Guy (+10 XP)
    else if (roundScore >= 21) xpDelta = 0;  // Just a Guy (0 XP)
    else xpDelta = -5;                       // Embarrassing (-5 XP penalty)

    // persist community tally
    const tallyKey = `tally:${scenarioId}:${choiceKey}`;
    await redis.incrBy(tallyKey, 1);

    // update user XP + best player
    const xpKey = `xp:${username}`;
    const newXp = await redis.incrBy(xpKey, xpDelta); // supports negative

    // best player cache: best:username + best:xp
    const bestXpStr = await redis.get('best:xp');
    const bestXp = bestXpStr ? parseInt(bestXpStr, 10) : -Infinity;
    if (newXp > bestXp) {
      await redis.set('best:xp', String(newXp));
      await redis.set('best:username', username);
    }

    res.json({
      ok: true,
      roundScore,    // use this to update overall avg on client
      xpDelta,       // use for XP toast
      totalXp: newXp // optional, if you want to show it
    });
  } catch (e) {
    console.error('Vote error', e);
    res.status(500).json({ error: 'Internal error recording vote' });
  }
});

// GET /api/me - fetch current user data
router.get('/api/me', async (_req, res) => {
  try {
    const username = (await reddit.getCurrentUsername()) || 'anonymous';
    
    res.json({
      username,
      iconUrl: `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${Math.floor(Math.random() * 8)}.png`
    });
  } catch (e) {
    console.error('User data error', e);
    res.json({
      username: 'anonymous',
      iconUrl: `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${Math.floor(Math.random() * 8)}.png`
    });
  }
});

// GET /api/best - fetch leaderboard of top players
router.get('/api/best', async (_req, res) => {
  try {
    // For now, return mock leaderboard data since Redis keys() isn't available
    const mockLeaderboard = [
      {
        username: 'player1',
        score: 85,
        iconUrl: `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png`
      },
      {
        username: 'player2', 
        score: 72,
        iconUrl: `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png`
      },
      {
        username: 'player3',
        score: 68,
        iconUrl: `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png`
      }
    ];
    
    res.json(mockLeaderboard);
  } catch (e) {
    console.error('Leaderboard error', e);
    res.json([]);
  }
});

// GET /api/reveal?scenarioId=ID
router.get('/api/reveal', async (req, res) => {
  try {
    const scenarioId = String(req.query.scenarioId || '');
    if (!scenarioId) {
      res.status(400).json({ error: 'Missing scenarioId' });
      return;
    }

    const scenario = scenarios.find((x) => x.id === scenarioId);
    if (!scenario) {
      res.status(404).json({ error: 'Scenario not found' });
      return;
    }

    // collect counts for A/B/C(/D)
    const choiceKeys = scenario.choices.map((c) => c.key);
    const redisKeys = choiceKeys.map((k) => `tally:${scenarioId}:${k}`);
    const raw = await redis.mGet(redisKeys); // returns (string|null)[]
    const counts: Record<string, number> = {};
    let total = 0;

    choiceKeys.forEach((k, i) => {
      const n = raw[i] ? parseInt(raw[i] as string, 10) : 0;
      counts[k] = isNaN(n) ? 0 : n;
      total += counts[k];
    });

    res.json({ counts, total });
  } catch (e) {
    console.error('Reveal error', e);
    res.status(500).json({ error: 'Internal error fetching reveal' });
  }
});

/**
 * =============================
 *  INTERNAL (Devvit helper) ENDPOINTS
 *  (unchanged from your template)
 * =============================
 */
import { createPost } from './core/post';

router.post('/internal/on-app-install', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();
    res.json({
      status: 'success',
      message: `Post created in subreddit ${context.subredditName} with id ${post.id}`,
    });
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({ status: 'error', message: 'Failed to create post' });
  }
});

router.post('/internal/menu/post-create', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();
    res.json({
      navigateTo: `https://reddit.com/r/${context.subredditName}/comments/${post.id}`,
    });
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({ status: 'error', message: 'Failed to create post' });
  }
});

// mount the router and start the server
app.use(router);

const port = getServerPort();
const server = createServer(app);
server.on('error', (err) => console.error(`server error; ${err.stack}`));
server.listen(port);
