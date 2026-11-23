import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of sleep, filed deadpan: the complaint is read straight
// ("I give it eight hours a night") and the sting lands in the last few
// words ("wake up owing it more") — sleep as a debt that is never repaid.
// Deterministic single line, no randomness, no network, no dates.
const REVIEW =
  "Sleep: I give it eight hours a night and wake up owing it more. One star.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", REVIEW, "utf8");
