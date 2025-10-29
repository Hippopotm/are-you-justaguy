# Are You Just a Guy? 🎮

A Reddit-based interactive game that teaches men bystander intervention and respect standards through realistic, confessional scenarios. Built for the Reddit + Kiro Community Games Challenge.

## 🎯 What This Game Is

**"Are You Just a Guy?"** is an educational social game that helps men practice being better allies through humor and real-world scenarios. Players read Reddit-style confessional stories about uncomfortable social situations and choose how they'd respond, learning evidence-based intervention techniques along the way.

### Core Gameplay
- **Read realistic scenarios** written in Reddit confessional style (r/AITA, r/TwoXChromosomes tone)
- **Choose your response** from 3 options (A/B/C) based on real intervention frameworks
- **Get scored** on a "Trash Meter" from 💀 Embarrassing to 🦸🏽 Golden Retriever
- **Track your progress** with XP gains/losses and overall average score
- **Compare with community** and see how other players voted
- **Build streaks** for consecutive daily play

## 🚀 What Makes This Game Innovative

### 1. **Reddit-Native Social Learning**
- Runs directly inside Reddit posts as a Devvit app
- Uses familiar Reddit confessional tone that feels authentic
- Creates community discussions around real social issues
- Leverages Reddit's existing social dynamics for peer accountability

### 2. **Evidence-Based Teaching**
- Integrates proven frameworks: 5 D's, DEARMAN, LIVES, COOPER
- Provides practical micro-scripts players can use in real life
- Focuses on bystander intervention, not just personal behavior
- Teaches through humor and relatability, not preaching

### 3. **Gamified Behavior Change**
- "Trash Meter" scoring system with memorable emoji rankings
- XP system with immediate feedback (+20, +5, -10 XP per choice)
- Community leaderboards showing top performers
- Immediate feedback on choices with community voting results

### 4. **Kiro-Powered Content Pipeline**
- Automated scenario validation prevents low-quality content
- AI-assisted content generation maintains consistent tone
- Quality gates ensure all scenarios meet educational standards
- Scalable content creation for ongoing engagement

## 📱 How to Play: Step-by-Step

### Getting Started
1. **Find the game** in a Reddit post (look for "Are You Just a Guy?" with a Play button)
2. **Click "Launch App"** to open the game in full screen
3. **Read the scenario** - a Reddit-style confessional story about a social situation
4. **Choose your response** by clicking A, B, or C

### During Gameplay
1. **Read the scenario** - First-person confessional stories about realistic social situations
2. **Consider the context** - Look for social cues, power dynamics, and safety concerns
3. **Pick your choice** - Each option represents a different approach (safer/partial/riskier)
4. **Submit your answer** - Click your choice to lock it in

### After Each Round
1. **See your score** - Get 0, 60, or 100 points based on your choice outcome:
   - **Safer choices** (90-100 points): +20 XP, demonstrates best practices
   - **Partial choices** (55-75 points): +5 XP, better than nothing but not ideal
   - **Riskier choices** (0-40 points): -10 XP, problematic or passive responses

2. **Check your ranking** - See where you land on the Trash Meter:
   - 💀 **Embarrassing** (0-20): "Bro… that was painful to watch."
   - 🤷🏽 **Just a Guy** (21-40): "Mhhmmm."
   - 😤 **Recovering Guy** (41-70): "Keep trying, you got this."
   - 😎 **Decent Human** (71-90): "You're learning and it shows."
   - 🦸🏽 **Golden Retriever** (91-100): "You're the adult child you needed."

3. **View community results** - See how other players voted on the same scenario
4. **Track your progress** - Watch your overall average improve over time
5. **Try new scenarios** - Click "🎲 Try Another Scenario" to keep playing

### Building Your Profile
- **Track your average** - Your overall Trash Meter score shows long-term progress
- **Earn/lose XP** - Immediate feedback with toast animations (+20 XP, +5 XP, -10 XP)
- **Maintain streaks** - Play daily to build your intervention skills
- **Compete with community** - See the current best player in the header
- **Learn from mistakes** - Lower scores help you understand better approaches

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

- **GET /api/scenario** - Returns a random scenario (static or Kiro-generated)
- **POST /api/vote** - Records player choice, returns score and XP change
- **GET /api/reveal** - Returns community voting results for a scenario
- **GET /api/best** - Returns current best player (username and XP)
- **GET /api/generate-scenario** - Generates new scenario using Kiro AI

## 🧠 How It Works

### Game Flow
1. **Scenario Load**: Player reads a confessional Reddit-style story (120-220 words)
2. **Choice Phase**: Player picks A/B/C response (no timer, thoughtful consideration encouraged)
3. **Vote Recording**: Server tracks choice, prevents duplicate votes, returns points and XP
4. **Immediate Feedback**: Shows player's score, tier ranking, and XP change
5. **Community Results**: Displays how all players voted with percentage bars
6. **Progress Tracking**: Updates overall average score and Trash Meter position

### Trash Meter System
The game uses a visual progress bar with a robot avatar (🤖) that moves along based on your overall average:

| Score Range | Tier | Emoji | Message | XP Change |
|-------------|------|-------|---------|-----------|
| 0-20 | Embarrassing | 💀 | "Bro… that was painful to watch." | -10 XP |
| 21-40 | Just a Guy | 🤷🏽 | "Mhhmmm." | -10 XP |
| 41-70 | Recovering Guy | 😤 | "Keep trying, you got this." | +5 XP |
| 71-90 | Decent Human | 😎 | "You're learning and it shows." | +5 XP |
| 91-100 | Golden Retriever | 🦸🏽 | "You're the adult child you needed." | +20 XP |

### Choice Scoring System
- **Safer choices** (90-100 points): Demonstrate best practices, earn +20 XP
- **Partial choices** (55-75 points): Better than nothing but not ideal, earn +5 XP  
- **Riskier choices** (0-40 points): Problematic or passive responses, lose -10 XP

### Learning Standards
- **5 D's**: Direct, Distract, Delegate, Delay, Document
- **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate  
- **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
- **COOPER**: White, Yellow, Orange, Red (awareness states)

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
│   ├── App.tsx                    # Main game UI (React)
│   ├── main.tsx                   # React app entry point
│   ├── index.html                 # HTML template
│   ├── index.css                  # Global styles
│   └── components/
│       └── TrashProgress.tsx      # Trash Meter visualization with robot avatar
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

### For Community Play Prize
- **Multiplayer focus**: Emphasize how friends can compare scores
- **Social accountability**: Show how Trash Meter creates peer pressure to improve
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
