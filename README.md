# Are You Just a Guy? 🤖

A single-player Reddit-based bystander intervention training game that teaches men to be better allies through realistic, confessional scenarios. Built for the Reddit + Kiro Community Games Challenge.

## 🎯 What This Game Is

**"Are You Just a Guy?"** is an interactive educational game that helps men practice bystander intervention skills through humor and real-world scenarios. Players read Reddit-style confessional stories (like r/AITA posts) about uncomfortable social situations and choose how they'd respond, learning evidence-based intervention techniques along the way.

The game features a unique "Trash Meter" progress system where your real Reddit avatar (40×40px) bounces continuously above a horizontal progress bar, positioned at your overall average score. Other players' avatars (26×26px) appear along the bar at their exact score percentages, creating social motivation without pressure. The meter uses a gradient background from green to red with tier emoji anchors (💀🤷🏽😤😎🦸🏽) and descriptive labels below.

### Core Gameplay Features
- **Immediate start** - Game loads instantly with first scenario visible, fetching user data, leaderboard, and scenario simultaneously
- **Read realistic scenarios** written in Reddit confessional style (r/AITA, r/TwoXChromosomes tone) covering bars, workplaces, campus parties, digital spaces, and gym environments
- **Choose your response** from 3 shuffled options (A/B/C) based on real intervention frameworks (5Ds, DEARMAN, LIVES, COOPER)
- **Get exact scores** - Points range from 0-100 based on choice quality with 5 distinct tiers and immediate tier chip feedback
- **Track your progress** on a single "Trash Meter" with your real Reddit avatar (40×40px) that bounces continuously and moves to your overall average position
- **See leaderboard players** with their real Reddit avatars (26×26px) positioned at their exact score percentages along the progress bar with username tooltips
- **Earn/lose XP** with immediate animated toast feedback: Golden Retriever (+20 XP), Decent Human (+15 XP), Recovering Guy (+10 XP), Just a Guy (0 XP), Embarrassing (-5 XP penalty)
- **Build daily streaks** with fire emoji badges (🔥 Day N) for consecutive play days, encouraging habit formation
- **Learn micro-scripts** - Get actual phrases you can use in similar real-world situations (default and gentle versions)

### Recent Major Updates (Complete Inline Experience)
- **Streamlined progress visualization** - Single horizontal progress bar with gradient background (green to red)
- **Real Reddit avatar integration** - Your profile picture (40×40px) bounces above the progress bar at your overall average position
- **Leaderboard avatars** - Other players' avatars (26×26px) positioned along the progress bar at their exact score percentages
- **Tier emoji anchors** - Visual markers (💀🤷🏽😤😎🦸🏽) with labels below the progress bar for context
- **Hover affordance** - Main game card has subtle hover lift effect for professional polish
- **Immediate meter visibility** - Trash meter always mounted at top, shows current progress with smooth animations
- **Streamlined UX** - Choices lock immediately after submission, instant visual feedback, leaderboard updates automatically

## 🚀 What Makes This Game Innovative

### 1. **Unique Visual Progress System**
- **Bouncing avatar meter** - Your real Reddit avatar (40×40px) bounces continuously above a horizontal progress bar, positioned at your overall average score
- **Live leaderboard integration** - Other players' real Reddit avatars (26×26px) positioned precisely along the bar at their exact score percentages with username tooltips
- **Gradient progress visualization** - Green to red gradient background with tier emoji anchors (💀🤷🏽😤😎🦸🏽) and descriptive labels below
- **Smooth animations** - Avatar moves fluidly to reflect cumulative performance with spring physics (stiffness: 260, damping: 24, mass: 0.9)

### 2. **Reddit-Native Educational Gaming**
- **Authentic confessional scenarios** - Stories written in genuine r/AITA and r/TwoXChromosomes style that feel like real Reddit posts
- **Evidence-based learning** - Integrates proven intervention frameworks (5Ds, DEARMAN, LIVES, COOPER) with practical micro-scripts you can actually use
- **Real-world applicability** - Covers diverse situations: bars, workplaces, campus parties, digital spaces, gym environments, friend groups
- **Personal development focus** - Individual skill building through realistic scenario practice with immediate feedback

### 3. **Immediate Feedback & Engagement**
- **Instant visual feedback** - Choices lock immediately on click with clear disabled styling, no confusion about submission state
- **Animated XP toasts** - Immediate feedback in header with green/red backgrounds, smooth fade transitions, 1.2-second duration
- **Exact scoring system** - 5 distinct tiers with specific point ranges and XP rewards/penalties, not gradual percentages
- **Daily streak tracking** - Fire emoji badges (🔥 Day N) encourage consistent practice and habit formation

### 4. **Streamlined User Experience**
- **No barriers to entry** - Game loads immediately with first scenario visible, fetching all data simultaneously for instant gameplay
- **Content shuffling intelligence** - Choice content randomized while A/B/C labels stay consistent for familiarity, no emojis inside buttons
- **Professional polish** - Light theme throughout, hover effects on main card, smooth transitions, rounded corners with subtle shadows
- **Mobile-optimized** - Clean interface perfect for Reddit mobile users with responsive design

### 5. **Social Motivation Without Pressure**
- **Leaderboard context** - See other players' progress for motivation without direct comparison pressure
- **Avatar positioning** - Visual representation of where you stand relative to others without explicit rankings
- **Community building** - Shared experience of learning intervention skills through humor and realistic scenarios
- **Streak competition** - Friendly competition through daily play streaks rather than just scores

### 6. **Kiro-Powered Development Excellence**
- **Complete specification enforcement** - `.kiro/specs/game_contract.md` and `.kiro/specs/ui_contract.md` define exact game behavior and UI requirements
- **Automated quality gates** - `.kiro/hooks/validate_scenarios.mjs` prevents low-quality content from reaching users
- **AI-assisted content generation** - `.kiro/steering/generator.prompt.md` enables scalable scenario creation while maintaining quality standards
- **Strict UI compliance** - `.kiro/steering/ui_rules.prompt.md` ensures consistent implementation of v2 single-player specification

## 📱 How to Play: Step-by-Step

### Getting Started
1. **Find the game** in a Reddit post (look for "Are You Just a Guy?" with a Launch App button)
2. **Click "Launch App"** to open the game inline within the Reddit post
3. **Game starts immediately** - No splash screen, first scenario loads instantly while fetching your user data, leaderboard, and scenario simultaneously
4. **Check the header** - Shows game title "Are You Just a Guy?", your streak badge (🔥 Day N if you have one), current leaderboard leader (🏆 Best: username), and space for animated XP toasts
5. **See your Trash Meter** - Always visible at top with your real Reddit avatar (40×40px) bouncing continuously above the horizontal progress bar at your overall average position
6. **View leaderboard avatars** - Other players' real Reddit avatars (26×26px) positioned precisely along the progress bar at their exact score percentages with username tooltips on hover
7. **Notice the tier anchors** - Emoji indicators (💀🤷🏽😤😎🦸🏽) with descriptive labels below the progress bar (Embarrassing, Just a Guy, Recovering Guy, Decent Human, Golden Retriever) show the scoring tiers

### During Gameplay
1. **Read the scenario** - First-person confessional stories about realistic social situations
   - Examples: Bar bystander situations, workplace harassment, digital consent, campus parties, gym environments
   - Written in authentic Reddit confessional tone (like r/AITA or r/TwoXChromosomes posts)
   - Situations include context about social cues, power dynamics, safety concerns, and intervention opportunities
   - Each scenario is 120-220 words with realistic detail and emotional nuance

2. **Consider your options** - Three choices (A, B, C) with shuffled content but consistent labels
   - Content is randomized but A/B/C labels stay in exact order for consistency
   - Each choice represents a different intervention approach based on evidence-based frameworks
   - Options range from safer interventions (85-100 points) to partial responses (55-75 points) to riskier/passive choices (0-40 points)
   - No emojis inside choice buttons - clean text only for professional appearance

3. **Submit your answer** - Click your choice to lock it in immediately
   - Choices become disabled after submission with gray styling and disabled cursor
   - Your selection is highlighted with blue styling (blue background and border)
   - No confirmation required - submission happens instantly on click

### After Each Round
1. **See your exact score** - Get points based on your choice quality with 5-tier scoring system:
   - **Golden Retriever** (91-100 points): +20 XP, demonstrates best practices with evidence-based frameworks
   - **Decent Human** (71-90 points): +15 XP, good intervention with room for improvement  
   - **Recovering Guy** (41-70 points): +10 XP, better than nothing but not ideal
   - **Just a Guy** (21-40 points): 0 XP, minimal effort or impact
   - **Embarrassing** (0-20 points): -5 XP penalty, problematic or passive responses

2. **Check your tier chip** - Colored badge shows where you land with exact tier colors:
   - 💀 **Embarrassing** (0-20): "Bro… that was painful to watch." (red background)
   - 🤷🏽 **Just a Guy** (21-40): "Mhhmmm." (orange background)
   - 😤 **Recovering Guy** (41-70): "Keep trying, you got this." (amber background)
   - 😎 **Decent Human** (71-90): "You're learning and it shows." (blue background)
   - 🦸🏽 **Golden Retriever** (91-100): "You're the adult child you needed." (green background)

3. **Watch the Trash Meter animate** - Single horizontal progress bar with smooth animations:
   - **Your Reddit avatar** (40×40px) with white border and shadow, bounces continuously and moves to your new overall average position
   - **Leaderboard avatars** (26×26px) positioned at their exact score percentages with username tooltips
   - **Gradient background** from green → yellow → red (left to right) with tier emoji anchors and labels below
   - **Smooth positioning** - Avatar moves fluidly to reflect your cumulative performance

4. **Get XP feedback** - Animated toast notification shows your XP change in the header
   - Green background for positive XP, red background for penalties
   - Appears for 1.2 seconds with smooth fade animation
   - Shows exact XP change: +20, +15, +10, 0, or -5

5. **Try new scenarios** - Click "🎲 Try Another Scenario" to continue
   - Mix of curated scenarios and AI-generated content for variety
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
- **Dynamic content** - Experience both curated scenarios and AI-generated situations for endless variety
- **Compare with leaderboard** - See other players' avatars and scores for motivation without pressure

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

### API Endpoints
The game uses these main endpoints:

- **GET /api/scenario** - Returns a random scenario (mix of curated and AI-generated content)
- **POST /api/vote** - Records player choice, updates leaderboard, returns exact score and XP change
- **GET /api/me** - Returns user's Reddit username and avatar URL for progress bar display
- **GET /api/best** - Returns leaderboard array with usernames, scores, and avatar URLs for progress bar positioning
- **GET /api/generate-scenario** - Generates new scenario using AI (development tool)
- **GET /api/reveal** - Returns community voting data for scenarios (optional feature)

### Current Scenario Content
The game includes 9+ realistic scenarios covering:
- **Bar/Social situations** - Bystander intervention in nightlife settings ("Bar · Bystander Ally")
- **Workplace harassment** - Professional boundary setting and ally behavior ("Workplace · Inappropriate Comments", "Workplace · Sexual Harassment")
- **Digital consent** - Online harassment and image sharing ("Digital · Consent", "Digital · Dating Boundaries")
- **Campus parties** - College social dynamics and safety ("Campus · Party Boundaries")
- **Gym environments** - Addressing unwanted attention and staring ("Gym · Unwanted Attention")
- **Friend group dynamics** - Calling out problematic behavior among peers ("Friends · Consent Assumption")
- **AI-generated scenarios** - Dynamic content generation for endless variety and fresh situations

## 🧠 How It Works

### Game Flow
1. **Immediate Start**: Game loads directly inline within Reddit post, fetches user data, leaderboard, and first scenario simultaneously
2. **Header Display**: Shows game title, streak badge (🔥 Day N), leaderboard leader (🏆 Best: username), and space for animated XP toasts
3. **Avatar Integration**: Displays your real Reddit profile picture (40×40px) bouncing above progress bar and leaderboard players' avatars (26×26px) along the bar
4. **Trash Meter**: Always mounted at top with gradient background (green → yellow → red) and tier emoji anchors with labels below
5. **Scenario Display**: Player reads confessional Reddit-style story with hover affordance on main card
6. **Choice Phase**: Player picks A/B/C response (content shuffled, labels stay in order, no emojis in buttons)
7. **Instant Submission**: Choice locks immediately on click, all buttons become disabled with gray styling
8. **Server Processing**: `/api/vote` records choice, updates leaderboard, returns exact score and XP change
9. **Immediate Feedback**: Shows exact score, tier chip with proper contrast colors, animated XP toast in header
10. **Trash Meter Animation**: Avatar bounces continuously and moves to new average position reflecting overall performance
11. **Leaderboard Refresh**: Updates leaderboard data and repositions avatars after each submission
12. **Continue Playing**: "🎲 Try Another Scenario" button loads next scenario (curated or AI-generated)

### Trash Meter System
The game uses a single visual progress bar with your real Reddit avatar that moves based on your overall average:

**Visual Components:**
- **Your avatar** (40×40px) with white border and shadow, bounces continuously above the bar at your overall average position
- **Leaderboard avatars** (26×26px) positioned along the bar at their exact score percentages with username tooltips
- **Gradient background** from green → yellow → red (left to right)
- **Tier emoji anchors** below the bar: 💀🤷🏽😤😎🦸🏽 with descriptive labels (Embarrassing, Just a Guy, Recovering Guy, Decent Human, Golden Retriever)
- **Smooth animations** - Avatar moves fluidly to reflect your cumulative performance across all scenarios

**Scoring Tiers:**

| Score Range | Tier | Emoji | Message | Chip Colors |
|-------------|------|-------|---------|-------------|
| 0-20 | Embarrassing | 💀 | "Bro… that was painful to watch." | bg-red-50 text-red-700 |
| 21-40 | Just a Guy | 🤷🏽 | "Mhhmmm." | bg-orange-50 text-orange-700 |
| 41-70 | Recovering Guy | 😤 | "Keep trying, you got this." | bg-amber-50 text-amber-700 |
| 71-90 | Decent Human | 😎 | "You're learning and it shows." | bg-blue-50 text-blue-700 |
| 91-100 | Golden Retriever | 🦸🏽 | "You're the adult child you needed." | bg-green-50 text-green-700 |

### Scoring System
**Point-based scoring with 5 distinct tiers:**
- **Golden Retriever** (91-100 points): Demonstrate best practices with evidence-based frameworks, earn +20 XP
- **Decent Human** (71-90 points): Good intervention with room for improvement, earn +15 XP  
- **Recovering Guy** (41-70 points): Better than nothing but not ideal, earn +10 XP
- **Just a Guy** (21-40 points): Minimal effort or impact, earn 0 XP
- **Embarrassing** (0-20 points): Problematic or passive responses, lose -5 XP penalty

**XP System:**
- Immediate animated toast feedback in header
- Green background for positive XP, red for penalties
- Builds long-term progression and habit formation

### Visual Features
- **Complete inline experience** - No splash screens, immediate gameplay start with hover affordance on main card
- **Single horizontal progress bar** always mounted at top with smooth animations
- **Clear avatars** - Your Reddit avatar (40×40px) bounces above progress bar, leaderboard avatars (26×26px) along the bar
- **White borders and shadows** on all avatars for clear visibility against gradient background
- **Continuous bouncing animation** - Your avatar bounces up and down while positioned at your overall average
- **Tier emoji anchors with labels** below progress bar: 💀🤷🏽😤😎🦸🏽 (Embarrassing, Just a Guy, Recovering Guy, Decent Human, Golden Retriever)
- **Choice shuffling** with A, B, C labels staying in exact order, content randomized, no emojis inside buttons
- **Light theme** throughout: gray background page, white cards with rounded corners and subtle shadows
- **Tier chip colors** with proper contrast for accessibility
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

### For Community Play Prize
- **Personal development focus**: Emphasize individual skill building and progress tracking
- **Habit formation**: Show how daily streaks and XP system encourage consistent practice
- **Reddit-native**: Use confessional tone that feels like r/AITA or r/TwoXChromosomes
- **Mobile-optimized**: Clean, light interface perfect for Reddit mobile users
- **Social elements**: Leaderboard integration provides motivation without pressure

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
