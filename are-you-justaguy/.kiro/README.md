# Kiro Integration for "Are You Just a Guy?"

This project uses Kiro for AI-powered scenario generation and quality control.

## 🚀 Quick Start

### Generate New Scenarios
```bash
# Generate a single scenario
npm run kiro:generate

# Generate multiple scenarios
npm run kiro:generate -- --count 3

# Generate with specific parameters
npm run kiro:generate -- --framework 5Ds --step Distract --setting "coffee shop" --context "guy won't leave barista alone"
```

### Validate Scenarios
```bash
# Validate all scenarios
npm run kiro:validate
```

## 📝 Scenario Generation

### Available Frameworks
- **5Ds**: Direct, Distract, Delegate, Delay, Document
- **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate
- **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
- **COOPER**: White, Yellow, Orange, Red (awareness states)

### Available Steps
- **5Ds**: Direct, Distract, Delegate, Delay, Document
- **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate
- **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
- **COOPER**: White, Yellow, Orange, Red

### Common Settings
- Bar, Coffee shop, Campus, Workplace, Gym, Group chat, Dating app, Public transit

## 🎯 Quality Standards

### Content Requirements
- **First-person testimonial style** like r/AITA
- **Natural slang and casual language** - how people actually talk
- **120-220 words** of story context
- **Realistic social situations** men encounter
- **Clear stakes** - what happens if they don't act vs. if they do
- **Emotional nuance** - not black and white, but clear better/worse choices

### Choice Design
- **Exactly 3 choices** (A, B, C)
- **One safer choice** (90-100 points) that demonstrates the standard
- **One partial choice** (55-75 points) that's better than nothing but not ideal
- **One riskier choice** (0-40 points) that's problematic or passive
- **Realistic options** - things men would actually consider doing

### Tone Guidelines
- **Reddit confessional style**: "So this happened..." "I didn't know what to do..."
- **No graphic violence** or trauma details
- **No victim-blaming** or shaming language
- **Humor + learning** - serious topics made approachable
- **Self-deprecating humor** - "I've been that dude..."

## 🔧 Development Workflow

### 1. Generate Scenarios
```bash
npm run kiro:generate -- --framework 5Ds --step Distract --setting "bar" --context "guy won't leave woman alone"
```

### 2. Review Generated Content
- Check the generated scenario for quality
- Ensure it follows the tone and style guidelines
- Verify the choices are realistic and educational

### 3. Add to Codebase
- Copy the generated scenario to `src/shared/scenarios.ts`
- Ensure proper formatting and syntax

### 4. Validate
```bash
npm run kiro:validate
```

### 5. Test
- Run the app to ensure the new scenario works
- Check that all choices are properly formatted
- Verify the learning moment is clear

## 📚 Content Themes

### Consent Boundaries
- Respecting "no" and reading signals
- Understanding enthusiastic consent
- Recognizing when someone is uncomfortable

### Bystander Intervention
- Stepping in when others are uncomfortable
- Creating safe spaces for people to leave
- Supporting targets without escalating

### Professional Respect
- Workplace inappropriate behavior
- Power dynamics and harassment
- Creating inclusive environments

### Digital Boundaries
- Online harassment and consent
- Group chat inappropriate content
- Dating app respect and boundaries

### Social Accountability
- Calling out friends' problematic behavior
- Setting group norms
- Creating positive peer pressure

## 🎨 Writing Tips

### Making Scenarios Relatable
- **Draw from real experiences** (anonymized)
- **Include specific details** that make it feel authentic
- **Show the internal conflict** - why it's hard to act
- **Make the stakes clear** - what happens if they don't act

### Creating Compelling Choices
- **All options should feel realistic** - things men would actually consider
- **Show the consequences** of each choice
- **Avoid obvious "right" answers** - make it nuanced
- **Include the social pressure** - what friends might think

### Teaching Through Humor
- **Use self-deprecating humor** - "I've been that dude..."
- **Make it relatable** - common situations everyone recognizes
- **Avoid preachy tone** - let the humor carry the message
- **Show growth** - how to do better next time

## 🚨 Quality Control

### Validation Checklist
- [ ] Body is 120-220 words
- [ ] First-person confessional tone
- [ ] 3 realistic choices with clear outcomes
- [ ] Points: safer (90-100), partial (55-75), riskier (0-40)
- [ ] Micro-scripts are usable and realistic
- [ ] No victim-blaming language
- [ ] Clear teaching moment for the standard
- [ ] Relatable situation for men

### Banned Phrases
- "you should have"
- "it's your fault"
- "you asked for it"
- "boys will be boys"

## 🔄 Continuous Improvement

### Feedback Loop
1. **Generate scenarios** using Kiro
2. **Test with users** to see which scenarios are most effective
3. **Refine prompts** based on what works
4. **Update templates** for better generation
5. **Expand frameworks** as new standards emerge

### Scaling Content
- **Template-based generation** for common situations
- **Batch generation** for multiple scenarios
- **Cultural adaptation** for different regions
- **Difficulty levels** for progressive learning

---

**Remember**: Every scenario should help men practice being better allies and bystanders through humor, honesty, and real-world application.
