// .kiro/hooks/enforce_ui_contract.mjs
// Fails the run if UI contract violations are detected.

import fs from 'fs';
import path from 'path';

const FILES = [
  'src/client/App.tsx',
  'src/client/components/TrashProgress.tsx',
  'src/client/components/Avatar.tsx',
  'src/shared/tiers.ts',
  'src/shared/theme.ts',
];

function readSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function fail(msg) {
  console.error('❌ UI contract violation:', msg);
  process.exit(1);
}

// 1) Banned strings / arrows
for (const f of FILES) {
  const s = readSafe(f);
  if (/your answer landed here/i.test(s)) fail(`Banned copy found in ${f}`);
  if (/[▼]/.test(s)) fail(`Arrow pointer found in ${f}`);
}

// 2) Emoji must not appear inside choices rendering
// Heuristic: if emojis are in the same file and "choices.map" is used, flag it.
for (const f of FILES) {
  const s = readSafe(f);
  const hasChoicesMap = /choices\s*\.\s*map/.test(s) || /scenario\.choices\s*\.\s*map/.test(s);
  const hasEmoji = /[\u{1F300}-\u{1FAFF}]/u.test(s); // wide emoji range
  if (hasChoicesMap && hasEmoji) {
    fail(`Emoji detected where choices are rendered in ${f}`);
  }
}

// 3) No white-on-white text
for (const f of FILES) {
  const s = readSafe(f);
  if (/text-white/.test(s) && /bg-white/.test(s)) {
    fail(`Found white text on white background in ${f}`);
  }
}

// 4) Embarrassing chip contrast rule
// We require both 'bg-red-50' and 'text-red-700' to be present somewhere in theme or meter.
const theme = readSafe('src/shared/theme.ts') + readSafe('src/client/components/TrashProgress.tsx');
if (!/bg-red-50/.test(theme) || !/text-red-700/.test(theme)) {
  fail('Embarrassing tier must use bg-red-50 with text-red-700');
}

// 5) Avatar present and sized
// Look for <img ... className="... w-12 h-12 ... rounded-full border"
const trash = readSafe('src/client/components/TrashProgress.tsx');
if (!/className=.*?(w-12|w-14).*?(h-12|h-14).*?rounded-full.*?border/s.test(trash)) {
  fail('Avatar with required size/shape not found in TrashProgress header');
}

console.log('✅ UI contract clean');
