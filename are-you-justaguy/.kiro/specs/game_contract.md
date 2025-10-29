# Game Contract — "Are You Just a Guy?" v2

## Product Summary
Build a short-form, humorous, first-person bystander-training game on Devvit Web (Reddit). Players see a short scenario (≤5 sentences), pick one of 3 choices, submit, then instantly see:
- An animated Trash Meter result (their personal score impact, with a clear animated indicator)
- A one-line witty reaction (no lectures)

**NO community results, ever.** The game is strictly single-player feedback. Never show the same scenario twice to the same user.

## Core Loop (Per Round)
1. Load a short, first-person scenario (≤5 sentences, casual Reddit tone)
2. Show 3 shuffled choices (text only; no emojis in buttons)
3. On Submit:
   - Disable buttons (no re-edits on this round)
   - Immediately compute the round outcome (0% / 60% / 100%)
   - Play Trash Meter result animation
   - Show a short, witty one-liner reaction (2 sentences max, casual/fun)
   - Show Next Scenario button

## Scoring & Streaks
- **Round scoring**: Embarrassing=0%, Partial=60%, Golden=100%
- **XP**: Embarrassing → 0 XP and –5 XP penalty to total, Partial → +10 XP, Golden → +20 XP
- **Overall Trash Meter**: Player's running average across all answered scenarios
- **Streak**: Daily streak increments once per day on the first completed scenario

## Scenario Requirements
- First-person voice, ≤5 sentences
- A/B/C choices with score values: 100 | 60 | 0
- Short, casual tone; no lectures
- No frameworks/explainers (no "5Ds", no "learning moment" blocks)
- **Never repeat for a given user**: Keep per-user answeredScenarioIds set in Redis

## Trash Meter Specifications
- **When it appears**: Only after a player submits a choice
- **Single instance** (never duplicate)
- **Base**: Rounded bar with gradient red → amber → green (Left→Right)
- **Avatar**: Prominent player icon (≥48×48) "rides" the bar at overall average position
- **Animation**: Spring animation (stiffness: 260, damping: 24, mass: 0.9, duration cap: 0.6s)
- **Bouncy arrow**: Indicates current round's result position WITHOUT any text nearby
- **Arrow animation**: Bounce 2×, easeOut, delay 100ms, total ~700ms

## Tier System
- 0-20: Embarrassing 💀 (bg-red-50 text-red-700)
- 21-40: Just a Guy 🤷🏽 (bg-orange-50 text-orange-700)
- 41-70: Recovering Guy 😤 (bg-amber-50 text-amber-700)
- 71-90: Decent Human 😎 (bg-blue-50 text-blue-700)
- 91-100: Golden Retriever 🦸🏽 (bg-green-50 text-green-700)

## Hard DON'Ts
❌ No community reveal / percentages anywhere
❌ No "Your answer landed here" text or any text near the arrow marker
❌ No black/dark backgrounds around title/results
❌ No "Learning moment", no frameworks, no long explanations
❌ No emojis inside choice buttons
❌ No duplicate meters, no extra avatars floating elsewhere
❌ Never repeat a scenario for the same user

## API Endpoints
- `/api/scenario` → returns one scenario the user has not seen
- `/api/submit` → takes {scenarioId, choiceKey}, returns {roundScore, roundTier, overallAverage, xpDelta, streak}
- **NO** `/api/reveal` and no community percentages anywhere
