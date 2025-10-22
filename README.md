# Are You Just a Guy? 🎮

A Reddit-based interactive simulation that trains men in bystander intervention and respect standards through realistic, confessional scenarios. Built for the Reddit + Kiro Community Games Challenge.

## 🎯 What It Does

**"Are You Just a Guy?"** is a social experiment disguised as a game where players:

- Read Reddit-style confessional scenarios about real social situations
- Choose how they'd respond (A/B/C options)
- See their "Trash Meter" score and rank (💀 Embarrassing → 🦸🏽 Golden Retriever)
- Learn evidence-based standards like the 5 D's, DEARMAN, and LIVES frameworks
- Practice micro-scripts they can actually use in real life

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
# Run the game locally
npm run dev

# Validate scenario quality
npm run kiro:validate

# Deploy to Reddit
npm run deploy
```

## 🧠 How It Works

### Game Flow
1. **Scenario Load**: Player reads a confessional Reddit-style story
2. **Choice Phase**: Player picks A/B/C response (30-60s timer)
3. **Vote Recording**: Server tracks choice + returns points for Trash Meter
4. **Reveal Phase**: Shows community percentages + correct standard + micro-script
5. **Rank Update**: Player's Trash Meter score updates based on choice

### Trash Meter Ranks
| Score | Rank | Message |
|-------|------|---------|
| 0-20 | 💀 Embarrassing | "Bro… that was painful to watch." |
| 21-40 | 🤷🏽 Just a Guy | "Mhhmmm." |
| 41-70 | 😤 Recovering Guy | "Keep trying, you got this." |
| 71-90 | 😎 Decent (sort of enough) Human | "You're learning and it shows." |
| 91-100 | 🦸🏽 Golden Retriever | "You're the adult child you needed." |

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
│   └── App.tsx              # Game UI (React)
├── server/
│   └── index.ts             # API endpoints (/api/scenario, /api/vote, /api/reveal)
└── shared/
    ├── types.ts             # TypeScript interfaces
    └── scenarios.ts         # Scenario content

.kiro/
├── specs/
│   └── scenario_schema.md   # Content requirements
├── hooks/
│   └── validate_scenarios.mjs  # Quality validation
└── steering/
    └── generator.prompt.md  # Content generation template
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
