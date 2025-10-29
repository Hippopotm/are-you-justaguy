# Are You Just a Guy? 🎮

A Reddit-based single-player educational game that teaches men bystander intervention and respect standards through realistic, confessional scenarios. Built for the Reddit + Kiro Community Games Challenge.

## 🎯 What This Game Is

**"Are You Just a Guy?"** is an interactive social learning game that helps men practice being better allies through humor and real-world scenarios. Players read Reddit-style confessional stories about uncomfortable social situations and choose how they'd respond, learning evidence-based intervention techniques along the way.

### Core Gameplay
- **Read realistic scenarios** written in Reddit confessional style (r/AITA, r/TwoXChromosomes tone)
- **Choose your response** from 3 shuffled options (A/B/C) based on real intervention frameworks
- **Get precise scores** (0-100 points) based on the effectiveness of your intervention approach
- **Track your progress** on an animated "Trash Meter" from 💀 Embarrassing to 🦸🏽 Golden Retriever
- **Earn/lose XP** with immediate animated feedback (+20, +15, +10, 0, or -5 XP based on performance)
- **Build daily streaks** for consecutive play with fire emoji indicators
- **Watch your avatar** ride the progress bar as your overall average improves with smooth spring animations

## 🚀 What Makes This Game Innovative

### 1. **Reddit-Native Social Learning**
- Runs directly inside Reddit posts as a Devvit app with full-screen gameplay
- Uses familiar Reddit confessional tone that feels authentic to r/AITA and r/TwoXChromosomes
- Creates community discussions around real social issues through shared experiences
- Leverages Reddit's existing social dynamics for peer accountability and learning

### 2. **Evidence-Based Teaching Through Real Scenarios**
- Integrates proven frameworks: 5 D's (Direct, Distract, Delegate, Delay, Document), DEARMAN, LIVES, COOPER
- Provides practical micro-scripts players can actually use in real-life situations
- Focuses on bystander intervention and ally behavior, not just personal conduct
- Teaches through humor and relatability rather than preaching or lecturing

### 3. **Animated Progress Visualization**
- Interactive "Trash Meter" with smooth spring animations using Framer Motion
- Player avatar rides along the progress bar showing overall improvement with gentle floating animation
- Bouncy arrow indicators show current round performance without text clutter
- Gradient progress bar (red → amber → green) with clean milestone labels and emoji anchors
- Immediate XP feedback with animated toast notifications (+20, +15, +10, 0, -5 XP)

### 4. **Smart Content Shuffling & Hybrid Content System**
- Choice content is shuffled while maintaining A/B/C labels for consistency
- Prevents players from memorizing "correct" answers by position
- Hybrid content system: 50% static scenarios, 50% Kiro-generated scenarios for variety
- No scenario repeats per user (server-side tracking prevents duplicates)
- Single-player experience focused on personal growth and learning

## 📱 How to Play: Step-by-Step

### Getting Started
1. **Find the game** in a Reddit post (look for "Are You Just a Guy?" with a Play button)
2. **Click "Launch App"** to open the game in full screen mode
3. **See your header** - Shows your current streak (🔥 Day X) and overall average score
4. **Read the scenario** - A Reddit-style confessional story about a social situation

### During Gameplay
1. **Read the scenario** - First-person confessional stories (120-220 words) about realistic social situations like:
   - Bar interactions and consent boundaries
   - Workplace inappropriate comments
   - Campus party situations
   - Digital harassment in group chats
   - Gym creepy behavior
   - Dating app boundary crossing
   - Friend group dynamics and accountability

2. **Consider the context** - Look for social cues, power dynamics, and safety concerns mentioned in the scenario

3. **Pick your choice** - Click A, B, or C. Each represents a different approach with shuffled content:
   - **Safer choices** (85-100 points): Evidence-based interventions demonstrating best practices
   - **Partial choices** (55-75 points): Better than inaction but not optimal approaches
   - **Riskier choices** (0-40 points): Problematic, passive, or potentially harmful responses

4. **Submit your answer** - Click your choice to lock it in (choices are disabled after submission with gray styling)

### After Each Round
1. **See your exact score** - Get precise points based on your choice outcome:
   - **Safer choices** (85-100 points): +15-20 XP, "You're the adult child you needed."
   - **Partial choices** (55-75 points): +10 XP, "Keep trying, you got this."
   - **Riskier choices** (0-40 points): -5 XP penalty, "Bro… that was painful to watch."

2. **Watch the animations** - See your progress update with smooth spring animations:
   - **Bouncy arrow** appears at your round score position (no text, just visual indicator)
   - **Player avatar** smoothly moves along the Trash Meter to show overall progress
   - **XP toast** pops up showing your gain/loss with color coding
   - **Trash Progress component** shows your overall average with gradient progress bar

3. **Check your tier** - See where you land on the Trash Meter with witty feedback:
   - 💀 **Embarrassing** (0-20): "Bro… that was painful to watch." (-5 XP)
   - 🤷🏽 **Just a Guy** (21-40): "Mhhmmm." (0 XP)
   - 😤 **Recovering Guy** (41-70): "Keep trying, you got this." (+10 XP)
   - 😎 **Decent Human** (71-90): "You're learning and it shows." (+15 XP)
   - 🦸🏽 **Golden Retriever** (91-100): "You're the adult child you needed." (+20 XP)

4. **Learn from the framework** - Each scenario teaches a specific intervention technique:
   - **5 D's**: Direct, Distract, Delegate, Delay, Document
   - **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate
   - **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
   - **COOPER**: Awareness states (White, Yellow, Orange, Red)

5. **Try new scenarios** - Click "🎲 Try Another Scenario" to continue learning

### Building Your Profile
- **Track your average** - Your overall Trash Meter position shows long-term improvement
- **Earn/lose XP** - Immediate feedback with animated toast notifications
- **Maintain streaks** - Play daily to see 🔥 Day X indicators in the header
- **Learn practical scripts** - Each scenario provides real-world phrases you can actually use
- **Understand the "why"** - Rationales explain why each choice leads to better or worse outcomes

## 🏆 Hackathon Categories

### Community Play
- **Massively multiplayer voting** inside Reddit posts
- Friends and communities compare "Trash Meter" scores
- Sparks conversation and self-reflection through humor
- Teaches bystander intervention through peer accountability

### Best Kiro Developer Experience
- **Spec-driven development** with `.kiro/specs/scenario_schema.md`
- **Automated validation** via `.kiro/hooks/validate_scenarios.mjs`
- **Content generation** with `.kiro/steering/generator.prompt.md`
- **Quality gates** that prevent bad scenarios from being committed

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

### API Endpoints
The game uses these main endpoints:

- **GET /api/scenario** - Returns a random scenario (50% static library, 50% Kiro-generated)
- **POST /api/vote** - Records player choice, prevents duplicate votes, returns score and XP feedback
- **GET /api/reveal** - Returns community voting tallies for a specific scenario
- **GET /api/best** - Returns the current best player (highest XP)
- **GET /api/generate-scenario** - Generates new scenarios using Kiro AI (development endpoint)

## 🧠 How It Works

### Game Flow
1. **Scenario Load**: Player reads a confessional Reddit-style story (120-220 words) about realistic social situations
2. **Choice Shuffling**: Content is randomized while keeping A/B/C labels consistent to prevent memorization
3. **Choice Phase**: Player picks A/B/C response (no timer, encourages thoughtful consideration)
4. **Vote Recording**: Server records choice and returns score feedback
5. **Immediate Feedback**: Animated progress updates with bouncy arrows, smooth avatar movement, and XP toasts
6. **Progress Tracking**: Updates overall average score stored in localStorage and animates Trash Meter position changes
7. **Next Scenario**: Player can click "🎲 Try Another Scenario" to continue playing

### Trash Meter Animation System
The game features a sophisticated visual progress system with Framer Motion animations:

- **Progress Bar**: Gradient from red → yellow → green with emoji anchors at key positions
- **Player Avatar**: 48x48px image that smoothly rides along the bar at overall average position
- **Bouncy Arrow**: Appears at current round score with spring animation (no text clutter)
- **Spring Physics**: stiffness: 260, damping: 24, mass: 0.9 for natural movement
- **Float Animation**: Avatar gently floats up and down for visual appeal

### Dynamic Scoring & XP System

| Score Range | Tier | Emoji | Message | XP Change |
|-------------|------|-------|---------|-----------|
| 0-20 | Embarrassing | 💀 | "Bro… that was painful to watch." | -5 XP |
| 21-40 | Just a Guy | 🤷🏽 | "Mhhmmm." | 0 XP |
| 41-70 | Recovering Guy | 😤 | "Keep trying, you got this." | +10 XP |
| 71-90 | Decent Human | 😎 | "You're learning and it shows." | +15 XP |
| 91-100 | Golden Retriever | 🦸🏽 | "You're the adult child you needed." | +20 XP |

**Note**: The game uses dynamic scoring based on choice quality. Each scenario has 3 choices with different point values that reflect the effectiveness of the intervention approach.

### Choice Design Philosophy
- **Safer choices** (85-100 points): Evidence-based interventions that demonstrate best practices
- **Partial choices** (55-75 points): Better than inaction but not optimal approaches  
- **Riskier choices** (0-40 points): Problematic, passive, or potentially harmful responses

### Evidence-Based Learning Frameworks
Each scenario teaches specific intervention techniques:
- **5 D's**: Direct, Distract, Delegate, Delay, Document (bystander intervention)
- **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate (communication)
- **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support (support techniques)
- **COOPER**: White, Yellow, Orange, Red awareness states (situational awareness)

## 🛠️ Kiro Integration (For $10k Prize)

### Specs (`.kiro/specs/`)
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
│   ├── App.tsx                    # Main game UI with React hooks and state management
│   ├── main.tsx                   # React app entry point with StrictMode
│   ├── index.html                 # HTML template with mobile viewport settings
│   ├── index.css                  # Global Tailwind CSS styles
│   ├── components/
│   │   └── TrashProgress.tsx      # Animated progress bar with Framer Motion
│   ├── hooks/
│   │   └── useCounter.ts          # Custom React hooks for game state
│   └── global.ts                  # Global client-side utilities
├── server/
│   ├── index.ts                   # Express server with game API endpoints
│   └── core/
│       └── post.ts                # Reddit post creation and management
└── shared/
    ├── types.ts                   # TypeScript interfaces for scenarios and choices
    ├── scenarios.ts               # Static scenario content (9 scenarios)
    ├── tiers.ts                   # Scoring system and XP calculations
    └── types/
        └── api.ts                 # API request/response type definitions

.kiro/
├── specs/
│   ├── scenario_schema.md         # Content requirements and validation rules
│   └── ui_contract.md             # Complete UI specification and animation rules
├── hooks/
│   └── validate_scenarios.mjs     # Quality validation preventing bad commits
└── steering/
    ├── generator.prompt.md        # AI content generation template
    ├── ui_rules.prompt.md         # UI development and animation guidelines
    ├── tech.md                    # Technology stack documentation
    ├── structure.md               # Project architecture guidelines
    └── [other steering files]     # Additional development guidance
```

## 🎨 Current Game Features

### Interactive Progress Visualization
The **TrashProgress** component is the heart of the game's visual feedback system:

- **Animated Progress Bar**: 700px wide with smooth gradient (red → amber → green)
- **Player Avatar**: 48x48px image that rides the progress bar at overall average position with gentle floating animation
- **Bouncy Arrow**: Spring-animated indicator at current round score (no text clutter)
- **Responsive Labels**: Mobile-friendly tier labels with emojis below the progress bar
- **Leaderboard Support**: Small 24x24px avatars can show other players' positions (optional)
- **Spring Physics**: Smooth animations with stiffness: 260, damping: 24, mass: 0.9
- **Milestone Anchors**: Emoji markers at key positions (💀 Embarrassing, 🤷🏽 Just a Guy, 😤 Recovering, 😎 Decent, 🦸🏽 Golden)

### Game State Management
- **Local Storage**: Persistent profile with plays, total score, streaks, and last play date
- **Choice Shuffling**: Content randomized while keeping A/B/C labels consistent
- **Duplicate Prevention**: Server prevents multiple votes per user per scenario (90-day expiry)
- **XP System**: Server-side XP tracking with immediate feedback via animated toast notifications
- **Community Features**: Best player tracking and voting tallies stored in Redis
- **Hybrid Content**: 50% static scenarios, 50% Kiro-generated scenarios for variety

### Current Content Library
- **9 Static Scenarios**: Covering bars, campus, workplace, gym, digital spaces
- **Random Selection**: Each play loads a random scenario from the library
- **Evidence-Based**: Each scenario teaches specific intervention frameworks (5Ds, DEARMAN, LIVES, COOPER)
- **Reddit-Authentic**: Written in confessional style that feels native to the platform
- **Choice Shuffling**: Content is randomized while keeping A/B/C labels consistent

## 🎮 Adding New Scenarios

### Method 1: Manual Creation
1. Copy an existing scenario in `src/shared/scenarios.ts`
2. Edit the content following the schema (120-220 words, 3 choices, framework mapping)
3. Run `npm run kiro:validate` to check quality and consistency
4. Fix any validation errors (missing fields, wrong tone, invalid points)
5. Commit when validation passes ✅

### Method 2: Kiro AI Generation
1. Use the steering prompt in `.kiro/steering/generator.prompt.md`
2. Provide framework, step, setting, and context parameters
3. Generate scenario JSON with proper structure and scoring
4. Validate with `npm run kiro:validate` to ensure quality
5. Add to scenarios.ts and test in-game

## 🏅 Competition Strategy

### For Community Play Prize
- **Single-player focus**: Personal growth and learning through realistic scenarios
- **Social sharing**: Players can share their Trash Meter progress and discuss scenarios
- **Reddit-native**: Use confessional tone that feels like r/AITA or r/TwoXChromosomes

### For Kiro Prize
- **Demonstrate workflow**: Show specs → generation → validation → deployment
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
