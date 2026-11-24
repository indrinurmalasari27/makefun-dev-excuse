// Entry for make.fun bounty "Make the AI Judge Laugh: Developer Excuses".
// Writes one funny single-line developer excuse for code breaking in
// production to /output/entry.txt (1-200 characters).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SETUP = "It worked on my machine, ";
const PUNCHLINE =
  "so I have promoted my machine to production and demoted production to a cautionary tale we tell new hires during onboarding.";

const LINE = SETUP + PUNCHLINE;
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
console.log(LINE);
