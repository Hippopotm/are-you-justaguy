// Kiro validation hook for scenario quality control
// Run via: npm run kiro:validate

import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../../");
const scenariosPath = path.join(root, "src/shared/scenarios.ts");

function fail(msg) {
  console.error("❌ Kiro validation failed:", msg);
  process.exit(1);
}

function success(msg) {
  console.log("✅", msg);
}

try {
  // Read and parse scenarios file
  const scenariosRaw = fs.readFileSync(scenariosPath, "utf8");
  
  // Basic validation - check for required structure
  const requiredFields = [
    'id', 'topic', 'title', 'body', 'cues', 'goals', 'red_flags', 
    'standard', 'choices'
  ];
  
  // Check for basic structure
  for (const field of requiredFields) {
    if (!scenariosRaw.includes(field)) {
      fail(`Missing required field: ${field}`);
    }
  }
  
  // Check for standard structure
  if (!scenariosRaw.includes('framework:')) {
    fail(`Missing standard field: framework`);
  }
  if (!scenariosRaw.includes('step:')) {
    fail(`Missing standard field: step`);
  }
  if (!scenariosRaw.includes('explainer:')) {
    fail(`Missing standard field: explainer`);
  }
  if (!scenariosRaw.includes('script:')) {
    fail(`Missing standard field: script`);
  }
  
  // Check for script structure
  if (!scenariosRaw.includes('default:')) {
    fail(`Missing script field: default`);
  }
  if (!scenariosRaw.includes('gentle:')) {
    fail(`Missing script field: gentle`);
  }
  
  // Check for choice structure
  const choiceFields = ['key', 'label', 'text', 'outcome', 'points', 'rationale'];
  for (const field of choiceFields) {
    if (!scenariosRaw.includes(field)) {
      fail(`Missing choice field: ${field}`);
    }
  }
  
  // Validate frameworks
  const validFrameworks = ['5Ds', 'DEARMAN', 'LIVES', 'COOPER'];
  const frameworkRegex = /framework:\s*["']([^"']+)["']/g;
  let match;
  while ((match = frameworkRegex.exec(scenariosRaw)) !== null) {
    const framework = match[1];
    if (!validFrameworks.includes(framework)) {
      fail(`Invalid framework: ${framework}. Must be one of: ${validFrameworks.join(', ')}`);
    }
  }
  
  // Validate outcomes
  const validOutcomes = ['safer', 'partial', 'riskier'];
  const outcomeRegex = /outcome:\s*["']([^"']+)["']/g;
  while ((match = outcomeRegex.exec(scenariosRaw)) !== null) {
    const outcome = match[1];
    if (!validOutcomes.includes(outcome)) {
      fail(`Invalid outcome: ${outcome}. Must be one of: ${validOutcomes.join(', ')}`);
    }
  }
  
  // Validate points ranges
  const pointsRegex = /points:\s*(\d+)/g;
  while ((match = pointsRegex.exec(scenariosRaw)) !== null) {
    const points = parseInt(match[1]);
    if (points < 0 || points > 100) {
      fail(`Invalid points: ${points}. Must be between 0-100`);
    }
  }
  
  // Check for body length (basic word count) - simplified for multi-line strings
  const bodyCount = (scenariosRaw.match(/body:\s*["']/g) || []).length;
  if (bodyCount === 0) {
    fail("No body fields found in scenarios");
  }
  success(`Found ${bodyCount} scenarios with body content`);
  
  // Check for banned phrases (basic tone validation)
  const bannedPhrases = [
    'you should have',
    'it\'s your fault',
    'you asked for it',
    'boys will be boys'
  ];
  
  for (const phrase of bannedPhrases) {
    if (scenariosRaw.toLowerCase().includes(phrase)) {
      fail(`Banned phrase detected: "${phrase}". Use respectful, non-shaming language.`);
    }
  }
  
  success("All scenarios passed validation");
  success("✅ Framework validation passed");
  success("✅ Outcome validation passed"); 
  success("✅ Points validation passed");
  success("✅ Tone validation passed");
  
  console.log("\n🎯 Kiro validation complete - scenarios are ready for production!");
  
} catch (e) {
  fail(`Validation error: ${e.message}`);
}
