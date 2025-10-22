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
  const s = pickRandomScenario();
  res.json(s);
});

// GET /api/generate-scenario -> generate new scenario using Kiro
router.get('/api/generate-scenario', async (req, res) => {
  try {
    const { framework = '5Ds', step = 'Direct', setting = 'bar', context = 'social situation' } = req.query;
    
    // For now, return a template that can be filled by Kiro
    // In a real implementation, this would call Kiro's AI generation
    const template = {
      framework: framework as string,
      step: step as string,
      setting: setting as string,
      context: context as string,
      prompt: `Generate a Reddit-style confessional scenario for the "Are You Just a Guy?" game. Framework: ${framework}, Step: ${step}, Setting: ${setting}, Context: ${context}. Use first-person testimonial style with natural slang and realistic social situations.`
    };
    
    res.json({ 
      success: true, 
      template,
      message: "Use Kiro to generate the full scenario from this template"
    });
  } catch (e) {
    console.error('Generate scenario error', e);
    res.status(500).json({ error: 'Internal error generating scenario' });
  }
});

// POST /api/vote { scenarioId, choiceKey }
router.post('/api/vote', async (req, res) => {
  try {
    const { scenarioId, choiceKey } = req.body as { scenarioId?: string; choiceKey?: string };
    if (!scenarioId || !choiceKey) {
      res.status(400).json({ error: 'Missing scenarioId or choiceKey' });
      return;
    }

    const scenario = scenarios.find((x) => x.id === scenarioId);
    if (!scenario) {
      res.status(404).json({ error: 'Scenario not found' });
      return;
    }

    const choice = scenario.choices.find((c) => c.key === choiceKey);
    if (!choice) {
      res.status(400).json({ error: 'Invalid choiceKey' });
      return;
    }

    // increment Redis tally
    const key = `tally:${scenarioId}:${choiceKey}`;
    await redis.incrBy(key, 1);

    // return points so client updates Trash Meter average locally
    res.json({ ok: true, points: choice.points });
  } catch (e) {
    console.error('Vote error', e);
    res.status(500).json({ error: 'Internal error recording vote' });
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
