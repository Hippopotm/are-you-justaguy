# Scenario Schema (Standards-Training)

## Required Fields

### Basic Info
- `id` (string) - unique identifier
- `topic` (string) - category like "Friends · Consent Assumption"
- `title` (string) - Reddit-style confessional headline
- `body` (string) - 120–220 words, first-person confessional tone

### Context Arrays
- `cues[]` (string[]) - subtle context signals the player should notice
- `goals[]` (string[]) - what "respectful outcome" looks like
- `red_flags[]` (string[]) - behaviors to avoid (no shaming)

### Standard Framework
- `standard.framework` (enum: "5Ds" | "DEARMAN" | "LIVES" | "COOPER")
- `standard.step` (string) - specific step from the framework
- `standard.explainer` (string) - 1–2 lines explaining why this standard works
- `standard.script.default` (string) - one-line micro-script for real use
- `standard.script.gentle` (string) - toned-down version for sensitive contexts

### Choices
- `choices[]` (array) - exactly 3–4 choices
  - `key` (enum: "A" | "B" | "C" | "D")
  - `label` (enum: "A" | "B" | "C" | "D")
  - `text` (string) - what the player would do/say
  - `outcome` (enum: "safer" | "partial" | "riskier")
  - `points` (number) - 0–100 for Trash Meter calculation
  - `rationale` (string) - 1 short line explaining why this outcome

## Quality Standards

### Body Length
- Minimum 120 words
- Maximum 220 words
- First-person or close-third confessional tone

### Points Distribution
- Safer choices: 90–100 points
- Partial choices: 55–75 points  
- Riskier choices: 0–40 points
- No duplicate point values within a scenario

### Tone Requirements
- Reddit-confessional style
- No graphic violence or trauma details
- No victim-blaming language
- No shaming of users
- Direct but respectful language

### Framework Validation
- Framework must be one of: 5Ds, DEARMAN, LIVES, COOPER
- Step must be valid for the chosen framework
- Scripts must be realistic and usable

## Example Valid Scenario

```json
{
  "id": "friends-consent-001",
  "topic": "Friends · Consent Assumption", 
  "title": "\"She's chill—she wouldn't care if I crash at her place.\"",
  "body": "It's 11:30pm after game night. Your friend Dan is half-laughing, half-serious about \"crashing\" at Maya's place...",
  "cues": ["Maya's neutral face / discomfort", "Dan assumes consent, hasn't asked Maya"],
  "goals": ["Center Maya's choice", "Slow down the assumption"],
  "red_flags": ["Speaking for Maya", "Pressuring with group approval"],
  "standard": {
    "framework": "5Ds",
    "step": "Direct", 
    "explainer": "Short, clear correction sets a boundary and centers consent without turning it into a fight.",
    "script": {
      "default": "Did Maya actually say yes? Let's ask her directly.",
      "gentle": "Maybe check with Maya first so it's her call."
    }
  },
  "choices": [
    {
      "key": "A",
      "label": "A", 
      "text": "Say, \"Did Maya say yes?\" and look to Maya to answer.",
      "outcome": "safer",
      "points": 90,
      "rationale": "Centers consent and opens space for Maya."
    }
  ]
}
```
