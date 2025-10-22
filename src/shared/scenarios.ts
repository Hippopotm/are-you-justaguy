import type { Scenario } from './types';

export const scenarios: Scenario[] = [
  {
    id: "friends-consent-001",
    topic: "Friends · Consent Assumption",
    title: "AITA for calling out my friend when he assumed he could crash at this girl's place?",
    body:
      "So this happened last night and I'm still kinda pissed about it. I'm hanging out with my boys after game night, just chilling, when I see Dan start talking about how he's gonna 'crash' at Maya's place. They've hung out a few times in our group but like... there's no clear thing between them? They barely talk one-on-one. I hear Dan say 'She's chill, she wouldn't care if I crash at her place' and I see the whole room just go quiet. I look at Maya and her face is completely blank, like she's trying not to make it awkward but I can tell she's uncomfortable. I'm close enough to Dan that he'd actually listen if I said something, but I also don't want to embarrass him in front of everyone. I've been that dude who stayed quiet before and it always felt gross afterwards. I'm just a guy trying to figure out the right thing to do here. Should I have said something? How do you even handle this without making it weird?",
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
      "Okay so I'm at this bar last night with my boys, music's blasting, typical Saturday night vibes. I see this dude keeps putting his hand on this girl's arm and I watch her lean away but he's not getting the hint. I see her forcing a smile and nodding but I can tell she's looking around for an escape route. I'm standing there with my friends and I'm like... do I say something? If I make it obvious, this guy might get defensive and make it worse. But if I don't do anything, I see she's stuck dealing with this creep. I don't want to be that white knight dude but I also don't want to just watch this happen. I'm just a guy trying to figure out what the right move is here. What would you do? I've got maybe ten seconds before this gets more awkward.",
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
      "So this happened in our guys' group chat last night and I'm still kinda shook about it. Out of nowhere, someone posts a nude of a woman I don't even know. The chat just explodes with fire emojis and "damn" reactions. A couple of my boys are saying it's no big deal because "it's already online somewhere" and "she probably posted it herself." I'm sitting there feeling this instant urge to just mute the chat and keep scrolling, but I also know that if nobody says something clear, this becomes the new normal for our group. I don't want to be that dude who lectures everyone, but I also don't want to just let this slide. I'm just a guy trying to figure out how to reset the vibe without making it weird. What would you do?",
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
      "So it's Friday night at my boy's house party and I'm in the kitchen grabbing drinks when I notice this guy from my dorm who's been trying to talk to this girl all night. She's been polite but clearly not interested—I've seen her step back, look around for exits, and give short answers. Now he's cornered her near the fridge, leaning in way too close while she's trying to get a water bottle. She's holding her phone tight and keeps glancing toward the door. I know this guy—he's not a bad dude, but he's definitely not reading the room. The music's loud, people are dancing, and no one else seems to notice. I'm close enough that I could say something without making a scene, but I also don't want to embarrass him in front of everyone. Part of me wants to just grab another beer and let them figure it out, but I remember my sister telling me about times guys wouldn't leave her alone and how much it sucked when no one stepped in. I'm just a guy trying to figure out the right move here.",
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
    title: "Your coworker makes a 'joke' about the new intern's outfit.",
    body:
      "It's Monday morning in the break room. You're grabbing coffee when your coworker Jake starts talking about the new intern, Maya, who started last week. 'Did you see what she was wearing Friday?' he says to the group. 'That dress was... well, let's just say she's definitely trying to get ahead in this company.' A couple of guys laugh nervously. You know Maya—she's smart, professional, and always appropriately dressed. Jake's comment feels gross and completely off-base. The other guys are looking uncomfortable but not saying anything. You're the same level as Jake, so you could call it out without it being weird. But you also don't want to make the break room awkward for everyone. Part of you wants to just grab your coffee and leave, but you remember HR training about how these 'jokes' create a hostile environment. You also know Maya would probably hear about this eventually, and that's not fair to her.",
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
      "You're at the gym on a Tuesday evening, doing your usual routine. You notice this guy who's been there for about 30 minutes, but he's barely working out—mostly just standing around and staring at women on the cardio machines. It's making everyone uncomfortable. You've seen him do this before, and you know the staff has talked to him about it. The women are clearly aware of his staring and are trying to ignore it, but you can see them adjusting their positions and looking around for staff. You're finishing your workout and could easily just leave, but you also know this is a pattern and it's making the gym feel unsafe for women. You don't want to cause a scene, but you also don't want to just walk away and let it continue. The gym has a policy about this, but the staff isn't always around to enforce it.",
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
    title: "Your friend won't stop texting this girl who's clearly not interested.",
    body:
      "You're hanging out with your friend Marcus when his phone keeps buzzing. He's been texting this girl, Jessica, for a few days after matching on a dating app. At first it seemed normal, but now he's showing you the conversation and it's clear she's not interested—she's giving one-word responses, taking hours to reply, and even said 'I'm not really looking for anything right now.' But Marcus keeps texting her, saying things like 'I know you're busy but I just want to get to know you' and 'I'm not like other guys, I'm different.' You've seen this pattern before with him, and it's getting uncomfortable. He's asking you what to text next, and you can tell he's not picking up on her signals. You don't want to be harsh, but you also don't want to encourage behavior that's clearly making her uncomfortable. You know if the roles were reversed, you'd want someone to say something.",
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
      "So I'm in the break room yesterday and I see my coworker Jake making comments about our new intern Sarah's outfit. I hear him say stuff like 'That dress really shows off your figure' and 'You should wear that more often.' I can see Sarah is clearly uncomfortable - she's looking down, not making eye contact, and trying to change the subject. I'm just a guy who's been in this situation before and I know how awkward it is. I want to say something but Jake is technically my senior and I don't want to make things weird at work. I see Sarah is trying to leave but Jake keeps talking. I'm standing there thinking - do I step in? Do I report it? Do I just ignore it? I feel like I should do something but I'm not sure what the right move is here.",
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
      "I'm at the gym yesterday and I notice this guy keeps staring at women while they're working out. I see him literally following this one woman around with his eyes while she's doing squats. I can tell she's aware of it because she keeps adjusting her clothes and looking around nervously. I'm just a guy who goes to this gym regularly and I've seen this happen before. I want to say something but I don't want to cause a scene or make it worse for the women. I'm thinking maybe I should go talk to the staff, but I also feel like I should do something right now. I see the woman is clearly uncomfortable and I don't want to just stand there and watch. What would you do in this situation?",
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
