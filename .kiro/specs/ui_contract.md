# UI Contract — Are You Just a Guy
Version: 2.0 - Complete Game Specification

This document defines **non‑negotiable UI rules** that Kiro MUST follow when generating or editing client code based on the complete game specification.

## 0) Scope
These rules apply to React components in:
- `src/client/App.tsx`
- `src/client/components/TrashProgress.tsx`
- `src/client/components/Avatar.tsx`
- `src/shared/tiers.ts`
- `src/shared/theme.ts`

## 1) Header Requirements
- Title: **"Are You Just a Guy?"** (left side, white text)
- XP toast animation: Shows **"+20 XP"**, **"+10 XP"**, or **"-5 XP"** for 1.2s (left side, next to title)
- Best player display: **"🏆 Best: u/username · XP"** or **"🏆 Be the first on the board"** (right side)
- Background: **Blue to purple gradient** (`bg-gradient-to-r from-blue-500 to-purple-600`)
- Streak count integration (consecutive days played)

## 2) Scoring System & XP Logic (EXACT SPECIFICATION)
- **0-20**: Embarrassing 💀 **"Bro… that was painful to watch."** (0 XP, -5 XP penalty)
- **21-40**: Just a Guy 🤷🏽 **"Mhhmmm."** (0 XP)
- **41-70**: Recovering Guy 😤 **"Keep trying, you got this."** (+10 XP)
- **71-90**: Decent Human 😎 **"You're learning and it shows."** (+15 XP)
- **91-100**: Golden Retriever 🦸🏽 **"You're the adult child you needed."** (+20 XP)

## 3) Choice Shuffling Rules (CRITICAL)
- Choice **content** is shuffled each round so the best answer is not always A, B, or C
- Choice **labels** A, B, C must ALWAYS appear in that exact order
- **NO emojis inside choice buttons** - clean text only
- Buttons: full width, hover effects (`hover:scale-[1.02]`), proper spacing

## 4) Trash Meter Component (SINGLE INSTANCE)
- **ONLY ONE** Trash Meter visible at any time
- Shows **overall player average** (not current round score)
- Gradient fill: `linear-gradient(90deg,#ef4444,#f59e0b,#4ade80)` (red → yellow → green)
- Avatar **🤖** rides along the progress bar at current average position
- When round finishes: **bouncy arrow** appears at current round's position
- Background: `bg-[#202028]` for unfilled portion
- Height: `h-3 rounded-full`
- **Embarrassing tier**: `bg-red-50 text-red-700` for readable contrast

## 5) Verdict Section (NO LEARNING MOMENTS)
- Background: `bg-gradient-to-r from-blue-50 to-purple-50`
- Border: `border-blue-200`
- Shows: emoji + percentage + title + feedback line
- **FORBIDDEN**: Learning moments, framework explanations, "5Ds" references
- Keep it **fast and funny**, not educational

## 6) Community Results
- Shows **immediately after voting** (`submitted && reveal`)
- Total vote count display
- Percentage bars for each choice with animation (`transition-all duration-500`)
- Background: `bg-gray-50 rounded-lg`
- **Do not count same player more than once per question**

## 7) Scenario Requirements
- **First-person** casual Reddit tone
- **Maximum 5 sentences**
- Written like confessional or "Am I the A-hole" posts
- Must sound authentic, diverse, and modern
- Display in `bg-gray-50 rounded-lg` container

## 8) Next Scenario Button
- Text: **"🎲 Try Another Scenario"**
- Background: `bg-green-600 hover:bg-green-700`
- Full width, `rounded-xl`
- Appears only after `reveal` is available

## 9) Theme Requirements (LIGHT ONLY)
- **Light theme only** - no dark mode
- Page background: `bg-gray-50`
- Card background: `bg-white`
- Primary text: `text-gray-900`
- Secondary text: `text-gray-600` or `text-gray-800`
- **Readable contrast throughout** (minimum AA compliance)
- Must fit on standard laptop screen **without scrolling**

## 10) STRICTLY FORBIDDEN ELEMENTS
- ❌ **"Your answer landed here"** text or any directional text
- ❌ Helper arrows with text labels
- ❌ Black backgrounds behind titles/results
- ❌ White text on white backgrounds
- ❌ Emojis inside choice buttons
- ❌ Multiple trash meters or avatars
- ❌ Learning moments, framework explanations, or educational content
- ❌ Duplicate components
- ❌ Requiring scroll to see feedback or score

## 11) Avatar Requirements
- Avatar **🤖** MUST be visible at all times inside the Trash Meter
- Minimum size: **48×48 px** with `rounded-full` and `border`
- Rides along the progress bar showing current average position
- **NO additional avatars** floating around

## 12) Files Kiro is permitted to edit
- `src/client/components/TrashProgress.tsx`
- `src/client/components/Avatar.tsx`
- `src/shared/tiers.ts`
- `src/shared/theme.ts`
- `src/client/App.tsx` (UI wiring only)

## 13) Technical Requirements
- Framer Motion for animations
- Tailwind CSS for styling
- TypeScript for type safety
- 30-second API timeout compatibility
- Mobile-first responsive design consideration

## 14) Success Criteria Checklist
✅ Trash Meter visible at launch
✅ Smooth XP animation on score gain/loss
✅ Immediate community results after submission
✅ Shuffled choice content but A/B/C order maintained
✅ One avatar riding along progress bar
✅ First-person tone, short prompts, high replayability
✅ No scroll needed to see feedback or score
✅ Streak + leaderboard encourage return play
✅ No banned strings or elements
✅ Proper contrast for all tiers including Embarrassing
