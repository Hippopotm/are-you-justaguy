export type ChoiceOutcome = 'safer' | 'partial' | 'riskier';

export interface Scenario {
  id: string;
  topic: string;
  title: string;
  body: string;            // 120–220 words; confessional
  cues: string[];
  goals: string[];
  red_flags: string[];
  standard: {
    framework: '5Ds' | 'DEARMAN' | 'LIVES' | 'COOPER';
    step: string;
    explainer: string;
    script: { default: string; gentle: string };
  };
  choices: Array<{
    key: 'A' | 'B' | 'C' | 'D';
    label: 'A' | 'B' | 'C' | 'D';
    text: string;
    outcome: ChoiceOutcome;
    points: number;        // 0–100 used for Trash Meter
    rationale: string;
  }>;
}
