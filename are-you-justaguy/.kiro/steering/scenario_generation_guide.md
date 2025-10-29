# How to Generate New Scenarios for "Are You Just a Guy?"

## 🎯 Quick Start

### Method 1: Use Kiro Steering (Recommended)
1. **Open the steering prompt**: `.kiro/steering/generator.prompt.md`
2. **Provide input**:
   ```
   Framework: 5Ds
   Step: Distract
   Setting: Coffee shop
   Context: Guy won't leave barista alone, she's clearly uncomfortable
   ```
3. **Generate scenario** using the prompt template
4. **Validate**: `npm run kiro:validate`
5. **Add to scenarios.ts** if validation passes

### Method 2: Manual Creation
1. **Copy existing scenario** in `src/shared/scenarios.ts`
2. **Edit all fields** following the schema
3. **Run validation**: `npm run kiro:validate`
4. **Fix any errors** and re-validate
5. **Commit when green** ✅

## 📝 Scenario Requirements

### **Body Content (120-220 words)**
- **Reddit confessional tone**: "So this happened..." "I didn't know what to do..."
- **First-person perspective** or close-third
- **Realistic social situations** men encounter
- **Clear stakes** - what happens if they don't act vs. if they do
- **Emotional nuance** - not black and white, but clear better/worse choices

### **Context Arrays**
- **cues[]**: What to notice (body language, social signals)
- **goals[]**: What respectful outcome looks like
- **red_flags[]**: Behaviors to avoid (no shaming)

### **Standard Framework**
- **framework**: 5Ds, DEARMAN, LIVES, or COOPER
- **step**: Specific step from that framework
- **explainer**: 1-2 lines why this standard works
- **script.default**: One-line micro-script for real use
- **script.gentle**: Toned-down version for sensitive contexts

### **Choices (Exactly 3)**
- **A**: Safer choice (90-100 points) - demonstrates the standard
- **B**: Partial choice (55-75 points) - better than nothing but not ideal
- **C**: Riskier choice (0-40 points) - problematic or passive
- **rationale**: Why this outcome is better/worse

## 🎨 Content Guidelines

### **Tone & Voice**
- **Reddit-native**: Feels like r/AITA or r/TwoXChromosomes
- **Casual, relatable language** - how people actually talk
- **No graphic violence** or trauma details
- **No victim-blaming** or shaming language
- **Humor + learning** - serious topics made approachable

### **Realistic Situations**
- **Campus**: Parties, dorms, study groups
- **Workplace**: Break room, meetings, professional settings
- **Social**: Bars, gyms, friend groups
- **Digital**: Group chats, dating apps, social media
- **Public**: Transit, coffee shops, events

### **Learning Standards**
- **5 D's**: Direct, Distract, Delegate, Delay, Document
- **DEARMAN**: Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate
- **LIVES**: Listen, Inquire, Validate, Enhance Safety, Support
- **COOPER**: White, Yellow, Orange, Red (awareness states)

## 🔧 Quality Control

### **Validation Checklist**
- [ ] Body is 120-220 words
- [ ] First-person confessional tone
- [ ] 3 realistic choices with clear outcomes
- [ ] Points: safer (90-100), partial (55-75), riskier (0-40)
- [ ] Micro-scripts are usable and realistic
- [ ] No victim-blaming language
- [ ] Clear teaching moment for the standard
- [ ] Relatable situation for men

### **Run Validation**
```bash
npm run kiro:validate
```

**If validation fails:**
- Fix the specific error mentioned
- Re-run validation
- Only commit when it passes ✅

## 📈 Scaling Content

### **Template-Based Generation**
Use the steering prompt to generate scenarios from templates:

```
Template: bystander_distract_bar_v1
Setting: [bar, house party, music venue, wedding reception]
Relationship: [stranger, classmate, coworker's friend]
Time: [Saturday 11:30pm, Thursday 9pm]
Pressure: [crowded + loud, low-staffed, dimly lit]
```

### **Batch Generation**
1. **Create scenario templates** for common situations
2. **Use Kiro steering** to fill in slots
3. **Validate each scenario** individually
4. **Tone pass** - review for voice consistency
5. **Add to scenarios.ts** when ready

### **Content Themes**
- **Consent boundaries** - respecting "no" and reading signals
- **Bystander intervention** - stepping in when others are uncomfortable
- **Professional respect** - workplace inappropriate behavior
- **Digital boundaries** - online harassment and consent
- **Social accountability** - calling out friends' problematic behavior

## 🚀 Future Expansion

### **Adding New Frameworks**
1. **Research evidence-based standards** for the new framework
2. **Update validation script** to include new framework
3. **Create example scenarios** using the new framework
4. **Update documentation** and steering prompts

### **Localization**
- **Cultural contexts** - different social norms by region
- **Language variants** - slang and expressions by demographic
- **Setting diversity** - rural vs urban, different age groups

### **Difficulty Levels**
- **Intro**: Basic awareness and simple interventions
- **Intermediate**: Complex social dynamics and group situations
- **Advanced**: Systemic issues and institutional responses

## 💡 Pro Tips

### **Writing Realistic Scenarios**
- **Draw from real experiences** (anonymized)
- **Include specific details** that make it feel authentic
- **Show the internal conflict** - why it's hard to act
- **Make the stakes clear** - what happens if they don't act

### **Making Choices Compelling**
- **All options should feel realistic** - things men would actually consider
- **Show the consequences** of each choice
- **Avoid obvious "right" answers** - make it nuanced
- **Include the social pressure** - what friends might think

### **Teaching Through Humor**
- **Use self-deprecating humor** - "I've been that dude..."
- **Make it relatable** - common situations everyone recognizes
- **Avoid preachy tone** - let the humor carry the message
- **Show growth** - how to do better next time

---

**Remember**: Every scenario should help men practice being better allies and bystanders through humor, honesty, and real-world application.
