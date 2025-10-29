# UI Contract — Are You Just a Guy
Version: 1.0

This document defines **non‑negotiable UI rules** that Kiro MUST follow when generating or editing client code.

## 0) Scope
These rules apply to React components in:
- `src/client/App.tsx`
- `src/client/components/TrashProgress.tsx`
- `src/client/components/Avatar.tsx`
- `src/shared/tiers.ts`
- `src/shared/theme.ts`

## 1) Avatar visibility (competition cue)
- An **avatar image** MUST be visible **at all times** inside the **Trash Meter header**.
- Location: first row of `TrashProgress` container (left side).
- Minimum size: **48×48 px** (`w-12 h-12`) and `rounded-full` with `border`.
- Prop path: `<TrashProgress avatarUrl={string} …/>` (do not create alternate avatar elements elsewhere).

## 2) Banned strings & patterns
- **Disallow** any copy equal or similar to: **“Your answer landed here”**.
- **Disallow** any decorative **arrow pointer** near the meter verdict (e.g., “▼” or components named “Arrow/Pointer”).

## 3) Choices must NOT contain emojis
- Emoji are **allowed only** in **tier verdict** labels (summary after submit), not within choice buttons.
- Choice rendering MUST be **plain text**: `{choice.text}` only.

## 4) Single meter instance
- There MUST be **only one** Trash Meter visible on screen at a time.
- The meter is rendered **at the top before submit**, then **slides/animates to the bottom** after submit. Do not duplicate.

## 5) Tiering (canonical labels & emoji)
Use **exactly** this mapping in `src/shared/tiers.ts`:
- 0–20 → key `embarr`, label **“Embarrassing”**, emoji `💀`
- 21–40 → key `just`, label **“Just a Guy”**, emoji `🤷🏽`
- 41–70 → key `recover`, label **“Recovering Guy”**, emoji `😤`
- 71–90 → key `decent`, label **“Decent (sort of enough) Human”**, emoji `😎`
- 91–100 → key `golden`, label **“Golden Retriever”**, emoji `🦸🏽`

## 6) Colors / contrast (light theme only)
- Global theme uses **light backgrounds** (e.g., `bg-white`, `bg-gray-50`) and **dark text** (e.g., `text-gray-800/900`).
- The **Embarrassing** tier MUST render with **readable contrast**:
  - Chip/background: `bg-red-50`
  - Text: `text-red-700`
- **Never** render **white text on white background** anywhere (`text-white` + `bg-white` is forbidden).

## 7) Scenario length & POV (for on-screen card)
- Scenario body must be **first‑person** (“I…”) and **≤ 5 sentences**.
- Keep the copy **short & casual** (Reddit tone), avoid lectures.

## 8) Files Kiro is permitted to edit for UI
- `src/client/components/TrashProgress.tsx`
- `src/client/components/Avatar.tsx`
- `src/shared/tiers.ts`
- `src/shared/theme.ts`
- `src/client/App.tsx` (UI wiring only, no business logic changes)

## 9) Files Kiro must NOT create
- No additional avatar components or meters.
- No “helper arrows”, “landing markers”, or banners above the title.

## 10) Acceptance criteria (must pass hook)
- No banned strings (Section 2).
- No emoji in choices (Section 3).
- Contrast rule satisfied for Embarrassing (Section 6).
- Avatar present at required size and location (Section 1).
