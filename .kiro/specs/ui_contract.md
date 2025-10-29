# UI Contract — "Are You Just a Guy?" v2

This document defines **non‑negotiable UI rules** for the single-player bystander training game.

## Core Requirements

### Header
- Title: **"Are You Just a Guy?"** (left side)
- Streak badge: **🔥 Day N** (show consecutive days played)
- XP toast animation: Shows **"+20 XP"**, **"+10 XP"**, or **"-5 XP"** for 1.2s
- Light theme: bg-white or bg-gray-50, NO black backgrounds

### Scoring System (EXACT)
- **0%**: Embarrassing 💀 (0 XP, -5 XP penalty)
- **60%**: Partial 🤷🏽 (+10 XP) 
- **100%**: Golden 🦸🏽 (+20 XP)

### Choices
- Three buttons labeled **A, B, C** (in exact order)
- **Content shuffled** but labels stay A/B/C
- **NO emojis inside choice buttons** - clean text only
- Disabled after submission: bg-gray-200 text-gray-500 cursor-not-allowed

### Trash Meter (CRITICAL)
- **SINGLE INSTANCE ONLY** - appears after submission
- **Avatar (🤖) ≥48×48px** rides the bar at overall average position
- **Bouncy arrow** at current round position **WITHOUT any text nearby**
- **NO "Your answer landed here"** or similar text
- Gradient: red → amber → green (left to right)
- Spring animation: stiffness: 260, damping: 24, mass: 0.9

### Tier Chips (EXACT COLORS)
- **Embarrassing**: bg-red-50 text-red-700 (never white-on-white)
- **Just a Guy**: bg-orange-50 text-orange-700
- **Recovering**: bg-amber-50 text-amber-700
- **Decent**: bg-blue-50 text-blue-700
- **Golden**: bg-green-50 text-green-700

### Verdict Section
- Short, witty one-liner (2 sentences max)
- NO learning moments or framework explanations
- Emoji + percentage + tier name only

## STRICTLY FORBIDDEN
❌ Community results or percentages
❌ "Your answer landed here" text
❌ Text near arrow markers
❌ Black backgrounds behind titles/results
❌ Emojis inside choice buttons
❌ Multiple trash meters
❌ Learning moments or educational content
❌ Scenario repeats for same user
❌ White text on white backgrounds

## Theme Requirements
- **Light theme only**
- Page: bg-gray-50
- Cards: bg-white rounded-2xl shadow-sm
- Text: text-gray-900 primary, text-gray-700 secondary
- Typography: Modern sans-serif, 16-18px body, 20-24px titles

## Files Allowed to Edit
- src/client/App.tsx
- src/client/components/TrashProgress.tsx
- src/client/components/Avatar.tsx
- src/shared/tiers.ts
- src/shared/theme.ts

## Success Criteria
✅ Single trash meter appears after submission with animation
✅ Avatar ≥48px visible on progress bar
✅ Bouncy arrow without text at round score position
✅ Choices lock after submit
✅ No scenario repeats per user
✅ Exact tier colors with proper contrast
✅ No community results anywhere
✅ Light theme throughout
