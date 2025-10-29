# Are You Just a Guy? 🤖

A single-player Reddit-based bystander intervention training game that teaches men to be better allies through realistic, confessional scenarios. Built for the Reddit + Kiro Community Games Challenge.

## 🎯 What This Game Is

**"Are You Just a Guy?"** is an inline educational game that helps men practice bystander intervention skills through humor and real-world scenarios. Players read Reddit-style confessional stories (like r/AITA posts) about uncomfortable social situations and choose how they'd respond, learning evidence-based intervention techniques along the way.

The game runs completely inline within Reddit posts with no splash screens or barriers to entry - it loads immediately with the first scenario visible. Players track their progress on a visual "Trash Meter" featuring their real Reddit avatar and see other players' avatars positioned at their score percentages along the progress bar.

### Core Gameplay (v2 Single-Player)
- **Immediate start** - Game loads instantly on mount with first scenario visible, no splash screens
- **Read realistic scenarios** written in Reddit confessional style (r/AITA, r/TwoXChromosomes tone)
- **Choose your response** from 3 shuffled options (A/B/C) based on real intervention frameworks
- **Get exact scores** - 0%, 60%, or 100% based on choice quality (no gradual percentages)
- **Track your progress** on a single "Trash Meter" with your real Reddit avatar (48×48px) riding at your overall average
- **See leaderboard players** with their real Reddit avatars (36×36px) positioned at their exact score percentages
- **Earn/lose XP** with immediate animated feedback: Golden (+20 XP), Decent (+15 XP), Recovering (+10 XP), Just a Guy (0 XP), Embarrassing (-5 XP)
- **Build daily streaks** with fire emoji badges (🔥 Day N) for consecutive play
- **No scenario repeats** - server-side tracking ensures unique scenarios per user

### Recent Major Updates (Complete Inline Experience)
- **Removed all splash screen logic** - Game loads immediately on mount with first scenario visible
- **Real Reddit avatar integration** - Your profile picture (48×48px) and leaderboard players' avatars (36×36px) display on progress bar
- **Big, clear avatars** - User avatar prominently positioned above progress bar, leaderboard avatars along the bar
- **Enhanced trash meter** - Tier emoji anchors (💀🙈😬😎🦸‍♂️) below the progress bar for context
- **Hover affordance** - Main game card has subtle hover lift effect for professional polish
- **Immediate meter visibility** - Trash meter always mounted at top, shows 0% for new players, animates to current average
- **Streamlined UX** - Choices lock immediately after submission, meter animates instantly, leaderboard refreshes after each submission

## 🚀 What Makes This Game Innovative

### 1. **Complete Inline Experience**
- **No barriers to entry** - Game loads immediately on mount with first scenario visible, no splash screens or "Tap to Start"
- **Truly inline gameplay** - Runs directly inside Reddit posts as native content, not in popups or external windows
- **Immediate data loading** - Fetches user data, leaderboard, and scenario simultaneously on load for instant gameplay
- **Professional polish** - Smooth transitions, hover effects, and bouncy animations create a premium feel

### 2. **Big, Clear Reddit Avatar Integration**
- **Your avatar prominently displayed** - Real Reddit profile picture (48×48px) rides above the progress bar at your overall average
- **Leaderboard avatars positioned precisely** - Other players' avatars (36×36px) positioned along the bar at their exact score percentages
- **White borders and shadows** - Clear visibility against the gradient background for professional appearance
- **Tier emoji anchors** - 💀🙈😬😎🦸‍♂️ below the bar provide context and visual interest

### 3. **Immediate Visual Feedback**
- **Trash meter always visible** - Mounted at top of screen, shows 0% for new players, animates to current average
- **Real-time updates** - Meter updates immediately after each answer submission with spring animations
- **Bouncy arrow marker** - Appears at round score position with 2-bounce animation (strictly no text near arrow)
- **Animated XP toasts** - Immediate feedback in header with green/red backgrounds and smooth fade transitions

### 4. **Single-Player Focus with Social Elements**
- **Personal development core** - No community results or peer pressure, purely individual skill building
- **Social leaderboard context** - See other players' progress without comparison pressure
- **Reddit-authentic tone** - Scenarios written like r/AITA confessionals that feel genuine and relatable
- **Evidence-based learning** - Integrates proven frameworks (5 D's, DEARMAN, LIVES, COOPER) with practical micro-scripts

### 5. **Streamlined User Experience**
- **Choices lock immediately** - No confusion about submission state, clear visual feedback
- **Meter animates instantly** - No extra clicks required, smooth spring animations (stiffness: 260, damping: 24, mass: 0.9)
- **Leaderboard refreshes automatically** - Updates after each submission to show current standings
- **Daily streak tracking** - Fire emoji badges (🔥 Day N) encourage consistent practice and habit formation

### 6. **Kiro-Powered Development Excellence**
- **Complete specification enforcement** - `.kiro/specs/` files define exact game behavior and UI requirements
- **Automated quality gates** - Scenario validation prevents low-quality content from reaching users
- **AI-assisted content generation** - Steering prompts maintain consistent tone and educational standards
- **Scalable content pipeline** - Quality automation enables rapid scenario creation while maintaining standards

## 📱 How to Play: Step-by-Step

### Getting Started
1. **Find the game** in a Reddit post (look for "Are You Just a Guy?" with a Play button)
2. **Click "Launch App"** to open the game inline within the Reddit post
3. **Game starts immediately** - No splash screen, first scenario loads instantly with all data
4. **Check the header** - Shows game title, your streak badge (🔥 Day N), and current leaderboard leader (🏆 Best: username)
5. **See your Trash Meter** - Always visible at top with your real Reddit avatar (48×48px) showing your overall average
6. **View leaderboard avatars** - Other players' real Reddit avatars (36×36px) positioned along the progress bar at their score percentages
7. **Notice the tier anchors** - Emoji indicators (💀🙈😬😎🦸‍♂️) below the progress bar show the scoring tiers

### During Gameplay
1. **Read the scenario** - First-person confessional stories about realistic social situations (120-220 words)
   - Examples: Bar bystander situations, workplace harassment, digital consent, campus parties, gym environments
   - Written in authentic Reddit confessional tone (like r/AITA or r/TwoXChromosomes posts)
   - Situations include context about social cues, power dynamics, safety concerns, and intervention opportunities

2. **Consider your options** - Three choices (A, B, C) with shuffled content but consistent labels
   - Content is randomized but A/B/C labels stay in exact order for consistency
   - Each choice represents a different intervention approach based on evidence-based frameworks
   - Options range from safer interventions (90-100 points) to partial responses (55-75 points) to riskier/passive choices (0-40 points)
   - No emojis inside choice buttons - clean text only for professional appearance

3. **Submit your answer** - Click your choice to lock it in immediately
   - Choices become disabled after submission (bg-gray-200 text-gray-500 cursor-not-allowed)
   - Your selection is highlighted with blue styling (bg-blue-100 border-2 border-blue-400)
   - No confirmation required - submission happens instantly on click

### After Each Round
1. **See your exact score** - Get points based on your choice quality (exact scoring, no gradual percentages):
   - **Golden choices** (91-100 points): +20 XP, demonstrates best practices with evidence-based frameworks
   - **Decent choices** (71-90 points): +15 XP, good intervention with room for improvement  
   - **Recovering choices** (41-70 points): +10 XP, better than nothing but not ideal
   - **Just a Guy choices** (21-40 points): 0 XP, minimal effort or impact
   - **Embarrassing choices** (0-20 points): -5 XP penalty, problematic or passive responses

2. **Check your tier chip** - Colored badge shows where you land with exact tier colors:
   - 💀 **Embarrassing** (0-20): "Bro… that was painful to watch." (bg-red-50 text-red-700)
   - 🤷🏽 **Just a Guy** (21-40): "Mhhmmm." (bg-orange-50 text-orange-700)
   - 😤 **Recovering Guy** (41-70): "Keep trying, you got this." (bg-amber-50 text-amber-700)
   - 😎 **Decent Human** (71-90): "You're learning and it shows." (bg-blue-50 text-blue-700)
   - 🦸🏽 **Golden Retriever** (91-100): "You're the adult child you needed." (bg-green-50 text-green-700)

3. **Watch the Trash Meter animate** - Single progress bar with smooth spring animations:
   - **Your Reddit avatar** (48×48px) with white border and shadow, animates to your new overall average position
   - **Leaderboard avatars** (36×36px) positioned at their exact score percentages with username tooltips
   - **Bouncy arrow** appears at your current round score with 2-bounce animation (duration: 0.7s, ease: "easeOut")
   - **Strictly no text near arrow** - visual marker only for clean design
   - **Spring animation** with exact specs (stiffness: 260, damping: 24, mass: 0.9)
   - **Color gradient** from red → amber → green (left to right) with tier emoji anchors (💀🙈😬😎🦸‍♂️) below

4. **Get XP feedback** - Animated toast notification shows your XP change in the header
   - Green background (bg-green-100 text-green-700) for positive XP
   - Red background (bg-red-100 text-red-700) for penalties
   - Appears for 1.2 seconds with smooth fade animation (opacity: 0 → 1 → 0)
   - Shows exact XP change: +20, +15, +10, 0, or -5

5. **Try new scenarios** - Click "🎲 Try Another Scenario" to continue
   - Server prevents scenario repeats per user with server-side tracking
   - Each scenario teaches different intervention frameworks (5Ds, DEARMAN, LIVES, COOPER)
   - Leaderboard refreshes automatically after each submission

### Building Your Profile
- **Track your overall average** - Your Trash Meter position shows cumulative progress across all scenarios
- **Earn/lose XP** - Immediate feedback with animated toast notifications in the header
- **Maintain daily streaks** - Play consecutive days to build intervention skills, shown as fire emoji badges (🔥 Day N)
- **Learn evidence-based frameworks** - Each scenario teaches proven intervention techniques:
  - **5 D's**: Direct, Distract, Delegate, Delay, Document
  - **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate
  - **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
  - **COOPER**: White, Yellow, Orange, Red (awareness states)
- **Practice real micro-scripts** - Get actual phrases you can use in similar situations (default and gentle versions)
- **No scenario repeats** - Server-side tracking ensures you see unique scenarios, preventing repetition
- **Compare with leaderboard** - See other players' avatars and scores without pressure or community results

## 🏆 Hackathon Categories

### Community Play (v2 Single-Player Focus)
- **Personal growth tracking** inside Reddit posts
- Individual skill building with "Trash Meter" progress
- Sparks self-reflection and behavior change through humor
- Teaches bystander intervention through personal practice and streaks

### Best Kiro Developer Experience
- **Complete spec-driven development** with `.kiro/specs/game_contract.md` and `.kiro/specs/ui_contract.md`
- **Automated validation** via `.kiro/hooks/validate_scenarios.mjs`
- **Content generation** with `.kiro/steering/generator.prompt.md`
- **Quality gates** that prevent bad scenarios from being committed
- **UI rules enforcement** with `.kiro/steering/ui_rules.prompt.md`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Devvit CLI installed
- Reddit account with developer access

### Installation
```bash
# Clone and install
cd are-you-justaguy
npm install

# Validate scenarios with Kiro
npm run kiro:validate

# Start development server
npm run dev
```

### Development
```bash
# Run the game locally (starts client, server, and Devvit playtest)
npm run dev

# Validate scenario quality
npm run kiro:validate

# Build for production
npm run build

# Deploy to Reddit
npm run deploy
```

### API Endpoints (v2 Single-Player)
The game uses these main endpoints:

- **GET /api/scenario** - Returns a random scenario (server prevents repeats per user)
- **POST /api/submit** - Records player choice, updates leaderboard, returns exact score and XP change
- **GET /api/me** - Returns user's Reddit username and avatar URL for progress bar display
- **GET /api/best** - Returns leaderboard array with usernames, scores, and avatar URLs for progress bar positioning
- **GET /api/generate-scenario** - Generates new scenario using Kiro AI (development tool)

**Removed in v2**: `/api/reveal` (no community results in single-player mode)

### Current Scenario Content
The game includes 9 realistic scenarios covering:
- **Bar/Social situations** - Bystander intervention in nightlife settings ("Bar · Bystander Ally")
- **Workplace harassment** - Professional boundary setting and ally behavior ("Workplace · Inappropriate Comments", "Workplace · Sexual Harassment")
- **Digital consent** - Online harassment and image sharing ("Digital · Consent", "Digital · Dating Boundaries")
- **Campus parties** - College social dynamics and safety ("Campus · Party Boundaries")
- **Gym environments** - Addressing unwanted attention and staring ("Gym · Unwanted Attention")
- **Friend group dynamics** - Calling out problematic behavior among peers ("Friends · Consent Assumption")

## 🧠 How It Works

### Game Flow (v2 Single-Player)
1. **Immediate Start**: Game loads directly inline within Reddit post, fetches user data, leaderboard, and first scenario simultaneously
2. **Header Display**: Shows game title, streak badge (🔥 Day N), leaderboard leader (🏆 Best: username), and space for animated XP toasts
3. **Avatar Integration**: Displays your real Reddit profile picture (48×48px) and leaderboard players' avatars (36×36px) on progress bar
4. **Trash Meter**: Always mounted at top with gradient background (red → amber → green) and tier emoji anchors below
5. **Scenario Display**: Player reads confessional Reddit-style story (120-220 words) with hover affordance on main card
6. **Choice Phase**: Player picks A/B/C response (content shuffled, labels stay in order, no emojis in buttons)
7. **Instant Submission**: Choice locks immediately on click, all buttons become disabled with gray styling
8. **Server Processing**: `/api/submit` records choice, updates leaderboard, returns exact score and XP change
9. **Immediate Feedback**: Shows exact score, tier chip with proper contrast colors, animated XP toast in header
10. **Trash Meter Animation**: Bouncy arrow appears at round score (no text), avatar animates to new average with spring physics
11. **Leaderboard Refresh**: Updates leaderboard data and repositions avatars after each submission
12. **Continue Playing**: "🎲 Try Another Scenario" button loads next unique scenario

### Trash Meter System (v2 Single-Player)
The game uses a single visual progress bar with your real Reddit avatar that rides along based on your overall average:

**Visual Components:**
- **Your avatar** (48×48px) with white border and shadow, positioned above the bar at your overall average
- **Leaderboard avatars** (36×36px) positioned along the bar at their exact score percentages with username tooltips
- **Gradient background** from red → amber → green (left to right)
- **Tier emoji anchors** below the bar: 💀🙈😬😎🦸‍♂️
- **Bouncy arrow** appears at round score position with 2-bounce animation (strictly no text)

**Scoring Tiers:**

| Score Range | Tier | Emoji | Message | Chip Colors |
|-------------|------|-------|---------|-------------|
| 0-20 | Embarrassing | 💀 | "Bro… that was painful to watch." | bg-red-50 text-red-700 |
| 21-40 | Just a Guy | 🤷🏽 | "Mhhmmm." | bg-orange-50 text-orange-700 |
| 41-70 | Recovering Guy | 😤 | "Keep trying, you got this." | bg-amber-50 text-amber-700 |
| 71-90 | Decent Human | 😎 | "You're learning and it shows." | bg-blue-50 text-blue-700 |
| 91-100 | Golden Retriever | 🦸🏽 | "You're the adult child you needed." | bg-green-50 text-green-700 |

### Exact Scoring System (v2)
**No gradual percentages - exact point values only:**
- **Golden choices** (91-100 points): Demonstrate best practices with evidence-based frameworks, earn +20 XP
- **Decent choices** (71-90 points): Good intervention with room for improvement, earn +15 XP  
- **Recovering choices** (41-70 points): Better than nothing but not ideal, earn +10 XP
- **Just a Guy choices** (21-40 points): Minimal effort or impact, earn 0 XP
- **Embarrassing choices** (0-20 points): Problematic or passive responses, lose -5 XP penalty

**XP System:**
- Immediate animated toast feedback in header
- Green background for positive XP, red for penalties
- Builds long-term progression and habit formation

### Visual Features
- **Complete inline experience** - No splash screens, immediate gameplay start with hover affordance on main card
- **Single trash meter** always mounted at top with spring animation (stiffness: 260, damping: 24, mass: 0.9)
- **Big, clear avatars** - Your Reddit avatar (48×48px) above progress bar, leaderboard avatars (36×36px) along the bar
- **White borders and shadows** on all avatars for clear visibility against gradient background
- **Bouncy arrow marker** shows current round score with 2-bounce animation (duration: 0.7s, ease: "easeOut", strictly no text)
- **Tier emoji anchors** below progress bar: 💀🙈😬😎🦸‍♂️ for visual context
- **Choice shuffling** with A, B, C labels staying in exact order, content randomized, no emojis inside buttons
- **Light theme** throughout: bg-gray-50 page, bg-white cards with rounded-2xl corners and subtle shadows
- **Exact tier chip colors** with proper contrast (bg-red-50 text-red-700, bg-orange-50 text-orange-700, etc.)
- **Animated XP toasts** in header with green/red backgrounds, smooth fade transitions, 1.2-second duration
- **Streak badges** with fire emoji (🔥 Day N) showing consecutive days played
- **Leaderboard integration** showing real Reddit usernames and avatars positioned at exact score percentages
- **Professional polish** with smooth transitions, hover effects, and immediate visual feedback

### Learning Standards
- **5 D's**: Direct, Distract, Delegate, Delay, Document
- **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate  
- **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
- **COOPER**: White, Yellow, Orange, Red (awareness states)

## 🛠️ Kiro Integration (For $10k Prize)

### Specs (`.kiro/specs/`)
- **game_contract.md**: Defines complete v2 game specification and requirements
- **ui_contract.md**: Non-negotiable UI rules for single-player experience
- **scenario_schema.md**: Defines required fields, tone, and quality standards
- Ensures every scenario has proper framework mapping and micro-scripts

### Hooks (`.kiro/hooks/`)
- **validate_scenarios.mjs**: Blocks commits with missing fields or bad tone
- Validates frameworks, outcomes, points ranges, and banned phrases
- Run with: `npm run kiro:validate`

### Steering (`.kiro/steering/`)
- **generator.prompt.md**: Template for generating new scenarios
- Helps create consistent, Reddit-style confessional content
- Maintains tone and standards across all scenarios

### Kiro Workflow
1. **Generate**: Use steering prompt to draft new scenarios
2. **Validate**: Run `npm run kiro:validate` to check quality
3. **Iterate**: Fix any validation errors
4. **Commit**: Only commit when validation passes ✅

## 📁 Project Structure

```
src/
├── client/
│   ├── App.tsx                    # Main game UI (React)
│   ├── main.tsx                   # React app entry point
│   ├── index.html                 # HTML template
│   ├── index.css                  # Global styles
│   └── components/
│       ├── TrashProgress.tsx      # Trash Meter visualization with real Reddit avatars
│       ├── Header.tsx             # Header with leaderboard, streak, and XP toasts
│       └── Splash.tsx             # Splash component (available but not currently used)
├── server/
│   ├── index.ts                   # API endpoints and game logic
│   └── core/
│       └── post.ts                # Reddit post creation
└── shared/
    ├── types.ts                   # TypeScript interfaces
    ├── scenarios.ts               # Static scenario content
    └── types/
        └── api.ts                 # API response types

.kiro/
├── specs/
│   ├── scenario_schema.md         # Content requirements and validation rules
│   └── ui_contract.md             # Complete UI specification and rules
├── hooks/
│   └── validate_scenarios.mjs     # Quality validation hook
└── steering/
    ├── generator.prompt.md        # Content generation template
    ├── ui_rules.prompt.md         # UI development rules
    └── [other steering files]     # Additional development guidance
```

## 🎮 Adding New Scenarios

### Method 1: Manual Creation
1. Copy an existing scenario in `src/shared/scenarios.ts`
2. Edit the content following the schema
3. Run `npm run kiro:validate` to check quality
4. Fix any validation errors
5. Commit when validation passes

### Method 2: Kiro Generation
1. Use the steering prompt in `.kiro/steering/generator.prompt.md`
2. Provide framework, step, setting, and context
3. Generate scenario JSON
4. Validate with `npm run kiro:validate`
5. Add to scenarios.ts

## 🏅 Competition Strategy

### For Community Play Prize (v2 Single-Player)
- **Personal development focus**: Emphasize individual skill building and progress tracking
- **Habit formation**: Show how daily streaks and XP system encourage consistent practice
- **Reddit-native**: Use confessional tone that feels like r/AITA or r/TwoXChromosomes
- **Mobile-optimized**: Clean, light interface perfect for Reddit mobile users

### For Kiro Prize
- **Complete spec enforcement**: Show how `.kiro/specs/` files define exact game behavior
- **UI contract compliance**: Demonstrate strict adherence to `.kiro/specs/ui_contract.md`
- **Quality automation**: Prove how Kiro prevents bad content from reaching users
- **Scalable content**: Show how steering helps generate many scenarios quickly
- **Video submission**: Record 3-minute demo of Kiro improving your DX

## 🚀 Deployment

### To Reddit
```bash
# Build and deploy
npm run build
npm run deploy

# Publish to Reddit
npm run launch
```

### Demo Post
1. Create a post in your test subreddit
2. Use the Devvit app to embed the game
3. Share the post link for judging
4. Make sure it's self-explanatory for new users

## 🎯 Success Metrics

- **Engagement**: High replay rate and streak maintenance
- **Learning**: Players improve Trash Meter scores over time
- **Community**: Shared screenshots and discussions
- **Standards**: Consistent application of behavioral frameworks

## 📝 Submission Checklist

- [ ] App published on developer.reddit.com
- [ ] Demo post with working game
- [ ] Public repo with OSI license
- [ ] `.kiro` directory committed (for Kiro prize)
- [ ] 3-minute video showing Kiro DX (for Kiro prize)
- [ ] README explaining the project
- [ ] All scenarios pass `npm run kiro:validate`

## 🤝 Contributing

1. Fork the repo
2. Add new scenarios following the schema
3. Run `npm run kiro:validate`
4. Submit PR with validation passing

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for the Reddit + Kiro Community Games Challenge**

*Teaching men to be better allies, one scenario at a time.*
