import type { Scenario } from './types';

export const scenarios: Scenario[] = [
  {
    id: "friends-consent-001",
    topic: "Friends · Consent Assumption",
    title: "AITA for calling out my friend when he assumed he could crash at this girl's place?",
    body:
      "Last night after game night, Dan says he's gonna 'crash' at Maya's place. They barely know each other. I see Maya's face go blank - she's uncomfortable but trying not to make it awkward. Dan assumes she's cool with it without asking. I could say something but don't want to embarrass him. What's the right move here?",
    cues: [
      "Maya’s neutral face / discomfort",
      "Dan assumes consent, hasn’t asked Maya",
      "Late-night + social pressure"
    ],
    goals: [
      "Center Maya’s choice",
      "Slow down the assumption",
      "Keep things low-drama while clear"
    ],
    red_flags: [
      "Speaking for Maya",
      "Pressuring with group approval",
      "Framing sleepover as “already agreed”"
    ],
    standard: {
      framework: "5Ds",
      step: "Direct",
      explainer:
        "Short, clear correction sets a boundary and centers consent without turning it into a fight.",
      script: {
        default: "Did Maya actually say yes? Let’s ask her directly.",
        gentle: "Maybe check with Maya first so it’s her call."
      }
    },
    choices: [
      { key:"A", label:"A", text:"Say, “Did Maya say yes?” and look to Maya to answer.", outcome:"safer", points:90, rationale:"Centers consent and opens space for Maya." },
      { key:"B", label:"B", text:"Text Dan later that it felt off and he should ask next time.", outcome:"partial", points:65, rationale:"Late feedback helps, but misses the moment." },
      { key:"C", label:"C", text:"Laugh it off and change the subject to avoid awkwardness.", outcome:"riskier", points:25, rationale:"Silence normalizes assuming consent." }
    ]
  },
  {
    id: "bar-bystander-ally-001",
    topic: "Bar · Bystander Ally",
    title: "WIBTA if I stepped in when this guy wouldn't stop touching a girl at the bar?",
    body:
      "At the bar, this guy keeps touching a girl's arm. She's leaning away but he's not getting the hint. She's forcing a smile but looking around for an exit. Do I say something? If I make it obvious, he might get defensive. But if I don't, she's stuck with this creep. What's the right move?",
    cues: [
      "She leans away; forced smile",
      "Repeated touch without invite",
      "Crowded space = exits + allies matter"
    ],
    goals: [
      "Reduce isolation and pressure",
      "Offer an exit with low confrontation",
      "Keep her agency intact"
    ],
    red_flags: [
      "Confrontation that escalates risk",
      "Centering yourself as the hero",
      "Ignoring and hoping someone else steps in"
    ],
    standard: {
      framework: "5Ds",
      step: "Distract",
      explainer: "‘Distract’ interrupts the moment without calling anyone out. It gives room to leave.",
      script: {
        default: "Yo—trivia’s starting. You two joining our team?",
        gentle: "Hey—sorry to interrupt, quick question for you both?"
      }
    },
    choices: [
      { key:"A", label:"A", text:"Invite both to join you + friends for trivia at the other end of the bar.", outcome:"safer", points:92, rationale:"Creates exit + witnesses; lowers pressure." },
      { key:"B", label:"B", text:"Wait and check on her in the bathroom line later.", outcome:"partial", points:60, rationale:"‘Delay’ can help, but she’s stuck now." },
      { key:"C", label:"C", text:"Not your business—stay out of it.", outcome:"riskier", points:15, rationale:"Inaction leaves her isolated." }
    ]
  },
  {
    id: "groupchat-nsfw-001",
    topic: "Digital · Consent",
    title: "AITA for calling out my boys when someone dropped a nude in the group chat?",
    body:
      "Someone posted a nude of a woman I don't know in our group chat. The chat explodes with fire emojis. My boys say 'it's no big deal' and 'she probably posted it herself.' I want to mute the chat, but if nobody says something, this becomes normal. How do I reset the vibe without being preachy?",
    cues: [
      "Non-consensual image sharing",
      "Rationalizing with ‘it’s online’",
      "Peer pressure to laugh/react"
    ],
    goals: [
      "Stop circulation",
      "Set a clear group norm",
      "Do it in one short line"
    ],
    red_flags: [
      "Forwarding or saving",
      "Silence as approval",
      "Shaming someone instead of the behavior"
    ],
    standard: {
      framework: "5Ds",
      step: "Direct",
      explainer: "Short, firm correction stops harm and sets a visible norm for the group.",
      script: {
        default: "Delete that—she didn’t consent. Let’s not share it.",
        gentle: "Let’s not share that—no consent."
      }
    },
    choices: [
      { key:"A", label:"A", text:"Say, “Delete that—she didn’t consent.”", outcome:"safer", points:95, rationale:"Stops harm; sets the norm." },
      { key:"B", label:"B", text:"React with a neutral emoji to avoid conflict.", outcome:"riskier", points:20, rationale:"Reads as approval or indifference." },
      { key:"C", label:"C", text:"Forward it privately to ask what others think.", outcome:"riskier", points:5, rationale:"Spreads the harm." }
    ]
  },
  {
    id: "campus-party-boundary-001",
    topic: "Campus · Party Boundaries",
    title: "AITA for stepping in when this dude wouldn't leave a girl alone at the party?",
    body:
      "At a party, this guy from my dorm has been trying to talk to a girl all night. She's been polite but clearly not interested - stepping back, looking for exits. Now he's cornered her by the fridge, leaning in too close. She's holding her phone tight, glancing at the door. I could say something but don't want to embarrass him. What's the right move?",
    cues: [
      "She's stepped back multiple times",
      "Looking around for exits",
      "Holding phone tight (safety signal)",
      "Short, polite answers",
      "He's not reading her body language"
    ],
    goals: [
      "Give her an easy way out",
      "Don't embarrass him publicly",
      "Create space without confrontation"
    ],
    red_flags: [
      "Ignoring clear signals",
      "Making it about you being the hero",
      "Confrontation that escalates tension"
    ],
    standard: {
      framework: "5Ds",
      step: "Distract",
      explainer: "Creating a distraction gives her an exit while avoiding direct confrontation that could escalate.",
      script: {
        default: "Hey, Sarah—the pizza just got here! Want to grab some before it's gone?",
        gentle: "Sorry to interrupt—quick question for you both about the music?"
      }
    },
    choices: [
      { key:"A", label:"A", text:"Create a distraction by announcing food or music, giving her an excuse to leave.", outcome:"safer", points:88, rationale:"Gives her an easy exit without calling him out." },
      { key:"B", label:"B", text:"Wait until she's alone later and ask if she's okay.", outcome:"partial", points:62, rationale:"Shows you noticed, but she's stuck in the moment." },
      { key:"C", label:"C", text:"Mind your business and let them work it out.", outcome:"riskier", points:18, rationale:"Ignores clear distress signals and normalizes the behavior." }
    ]
  },
  {
    id: "workplace-comment-001", 
    topic: "Workplace · Inappropriate Comments",
    title: "AITA for calling out my coworker's 'joke' about the new intern's outfit?",
    body:
      "In the break room, Jake makes a comment about our new intern Maya's outfit: 'That dress was... well, she's definitely trying to get ahead in this company.' The other guys laugh nervously. Maya's smart and professional. Jake's comment feels gross. I could call it out but don't want to make it awkward. What should I do?",
    cues: [
      "Sexualizing professional clothing",
      "Other guys laughing nervously",
      "Creating hostile work environment",
      "Targeting the only woman in the group"
    ],
    goals: [
      "Stop the inappropriate comment",
      "Set a clear boundary",
      "Don't make it awkward for others"
    ],
    red_flags: [
      "Laughing along with the 'joke'",
      "Staying silent and normalizing it",
      "Making it about Maya instead of the behavior"
    ],
    standard: {
      framework: "5Ds",
      step: "Direct",
      explainer: "Clear, direct correction stops the behavior and sets a boundary without escalating.",
      script: {
        default: "That's not cool, Jake. Maya's professional and that comment was inappropriate.",
        gentle: "Hey, let's keep it professional, man."
      }
    },
    choices: [
      { key:"A", label:"A", text:"Say directly that the comment was inappropriate and unprofessional.", outcome:"safer", points:92, rationale:"Stops the behavior and sets a clear boundary." },
      { key:"B", label:"B", text:"Change the subject to work topics to redirect the conversation.", outcome:"partial", points:58, rationale:"Avoids the issue but doesn't address the problem." },
      { key:"C", label:"C", text:"Laugh nervously and grab your coffee to leave quickly.", outcome:"riskier", points:12, rationale:"Normalizes the behavior and leaves Maya vulnerable." }
    ]
  },
  {
    id: "gym-creepy-staring-001",
    topic: "Gym · Unwanted Attention", 
    title: "This guy won't stop staring at women working out.",
    body:
      "At the gym, this guy's been staring at women on cardio machines for 30 minutes. He's barely working out. The women are adjusting their positions, looking for staff. I've seen him do this before. The gym has a policy but staff isn't always around. I could leave, but this makes the gym feel unsafe. What should I do?",
    cues: [
      "Staring instead of working out",
      "Women adjusting positions",
      "Looking around for staff",
      "Pattern of behavior"
    ],
    goals: [
      "Make the gym safer for women",
      "Address the behavior without escalation",
      "Support the gym's policies"
    ],
    red_flags: [
      "Ignoring clear harassment",
      "Confrontation that could escalate",
      "Making it about you being the hero"
    ],
    standard: {
      framework: "5Ds", 
      step: "Delegate",
      explainer: "Getting staff involved uses proper channels and avoids direct confrontation.",
      script: {
        default: "Hey, I think the staff should know about this situation.",
        gentle: "Maybe we should let the front desk know what's happening."
      }
    },
    choices: [
      { key:"A", label:"A", text:"Go to the front desk and report the behavior to staff.", outcome:"safer", points:85, rationale:"Uses proper channels and supports gym policies." },
      { key:"B", label:"B", text:"Stand nearby and make it clear you're watching, hoping he'll stop.", outcome:"partial", points:55, rationale:"Shows support but doesn't address the root issue." },
      { key:"C", label:"C", text:"Just finish your workout and leave—not your problem.", outcome:"riskier", points:8, rationale:"Abandons women to harassment and normalizes the behavior." }
    ]
  },
  {
    id: "dating-app-boundaries-001",
    topic: "Digital · Dating Boundaries",
    title: "AITA for telling my friend to stop texting this girl who's clearly not interested?",
    body:
      "Marcus is texting Jessica from a dating app. She's giving one-word responses, taking hours to reply, even said 'I'm not really looking for anything right now.' But Marcus keeps texting: 'I know you're busy but I just want to get to know you' and 'I'm not like other guys.' He's asking me what to text next. She's clearly not interested. What should I say?",
    cues: [
      "One-word responses",
      "Long delays in replies", 
      "Clear disinterest signals",
      "Not respecting boundaries"
    ],
    goals: [
      "Help him read the signals",
      "Respect her boundaries",
      "Don't encourage harassment"
    ],
    red_flags: [
      "Encouraging more texts",
      "Making excuses for his behavior",
      "Ignoring clear signals"
    ],
    standard: {
      framework: "DEARMAN",
      step: "Express",
      explainer: "Expressing concern helps him understand the impact without being judgmental.",
      script: {
        default: "Dude, I think she's trying to let you down gently. Maybe give her some space.",
        gentle: "It seems like she might be busy or not interested. What do you think?"
      }
    },
    choices: [
      { key:"A", label:"A", text:"Gently point out that her responses suggest she's not interested and suggest backing off.", outcome:"safer", points:90, rationale:"Helps him read signals and respects her boundaries." },
      { key:"B", label:"B", text:"Suggest he wait a few days before texting again to give her space.", outcome:"partial", points:65, rationale:"Gives her space but doesn't address the core issue." },
      { key:"C", label:"C", text:"Help him brainstorm what to text next to 'win her over.'", outcome:"riskier", points:15, rationale:"Encourages harassment and ignores clear signals." }
    ]
  },
  {
    id: "workplace-harassment-001",
    topic: "Workplace · Sexual Harassment",
    title: "AITA for calling out my coworker's inappropriate comments about our intern?",
    body:
      "Jake's making comments about our intern Sarah's outfit: 'That dress really shows off your figure' and 'You should wear that more often.' Sarah's clearly uncomfortable - looking down, avoiding eye contact, trying to change the subject. Jake's my senior. Sarah's trying to leave but Jake keeps talking. What should I do?",
    cues: [
      "Sarah's body language shows discomfort",
      "Jake's comments are sexual in nature",
      "Power dynamic - Jake is senior"
    ],
    goals: [
      "Create safe space for Sarah",
      "Address inappropriate behavior",
      "Maintain professional environment"
    ],
    red_flags: [
      "Sexualizing clothing",
      "Ignoring social cues",
      "Power imbalance"
    ],
    standard: {
      framework: "5Ds",
      step: "Direct",
      explainer: "Direct intervention stops the behavior immediately and shows support for the target.",
      script: { 
        default: "Hey Jake, that's not appropriate workplace conversation.", 
        gentle: "Jake, maybe we should keep the focus on work topics." 
      }
    },
    choices: [
      { key:"A", label:"A", text:"Say 'Jake, that's not appropriate workplace conversation' and redirect to work topics.", outcome:"safer", points:95, rationale:"Directly addresses the behavior and creates accountability." },
      { key:"B", label:"B", text:"Pull Jake aside later and tell him his comments made you uncomfortable.", outcome:"partial", points:70, rationale:"Addresses the issue but doesn't help Sarah in the moment." },
      { key:"C", label:"C", text:"Ignore it and hope Sarah handles it herself.", outcome:"riskier", points:20, rationale:"Leaves Sarah to deal with harassment alone." }
    ]
  },
  {
    id: "gym-creep-001", 
    topic: "Gym · Unwanted Attention",
    title: "WIBTA if I told this guy at the gym to stop staring at women?",
    body:
      "At the gym, this guy keeps staring at women working out. He's literally following one woman with his eyes while she's doing squats. She's adjusting her clothes, looking around nervously. I've seen this before. I want to say something but don't want to cause a scene. Should I talk to staff or do something now?",
    cues: [
      "Following women with eyes",
      "Women adjusting clothes nervously", 
      "Repeated pattern of behavior"
    ],
    goals: [
      "Stop the staring behavior",
      "Make gym feel safe for women",
      "Address without escalating"
    ],
    red_flags: [
      "Following women around",
      "Ignoring social boundaries",
      "Making women uncomfortable"
    ],
    standard: {
      framework: "5Ds",
      step: "Delegate",
      explainer: "Gym staff are trained to handle these situations and can take appropriate action.",
      script: { 
        default: "I'm going to let the staff know about this behavior.", 
        gentle: "Let me get a staff member to help with this situation." 
      }
    },
    choices: [
      { key:"A", label:"A", text:"Go tell the gym staff about the behavior immediately.", outcome:"safer", points:90, rationale:"Gets trained staff involved who can handle it properly." },
      { key:"B", label:"B", text:"Walk over and ask the guy to stop staring.", outcome:"partial", points:65, rationale:"Direct but might escalate or make women more uncomfortable." },
      { key:"C", label:"C", text:"Ignore it and hope the women handle it themselves.", outcome:"riskier", points:25, rationale:"Leaves women to deal with harassment alone." }
    ]
  }
];
