export const TIERS = [
  { key: 'embarr', min: 0, max: 20, label: 'Embarrassing', emoji: '💀', chipClass: 'bg-red-50 text-red-700' },
  { key: 'just', min: 21, max: 40, label: 'Just a Guy', emoji: '🤷🏽', chipClass: 'bg-orange-50 text-orange-700' },
  { key: 'recover', min: 41, max: 70, label: 'Recovering Guy', emoji: '😤', chipClass: 'bg-amber-50 text-amber-700' },
  { key: 'decent', min: 71, max: 90, label: 'Decent Human', emoji: '😎', chipClass: 'bg-blue-50 text-blue-700' },
  { key: 'golden', min: 91, max: 100, label: 'Golden Retriever', emoji: '🦸🏽', chipClass: 'bg-green-50 text-green-700' },
];

export function tierFrom(score: number) {
  return TIERS.find(tier => score >= tier.min && score <= tier.max) || TIERS[0];
}

export function getXPDelta(score: number): number {
  if (score >= 91) return 20;      // Golden Retriever (+20 XP)
  if (score >= 71) return 15;      // Decent Human (+15 XP)
  if (score >= 41) return 10;      // Recovering Guy (+10 XP)
  if (score >= 21) return 0;       // Just a Guy (0 XP)
  return -5;                       // Embarrassing (-5 XP penalty)
}

export function getWittyFeedback(score: number): string {
  if (score >= 91) return "You're the adult child you needed.";
  if (score >= 71) return "You're learning and it shows.";
  if (score >= 41) return "Keep trying, you got this.";
  if (score >= 21) return "Mhhmmm.";
  return "Bro… that was painful to watch.";
}
