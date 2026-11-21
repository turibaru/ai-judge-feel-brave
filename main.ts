// Contract: writes a fixed, deterministic text (no randomness) as UTF-8
// to entry.txt under MAKEFUN_OUTPUT_DIR (default /output), with no
// trailing newline.
//
// The text is a calm, concrete scene (round 2): a rowboat on a dock.
// It relaxes first and lets courage arrive as a side effect — the
// barnacles' small hold, the boat not leaving — instead of telling
// the reader to be brave. 226 Unicode code points, within 1-280.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The rowboat leans on the dock all afternoon, rope going slack, then taut, then slack. Barnacles keep their small hold on the wood. By evening the tide has moved the boat a hand's width, and nothing about it looks like leaving.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
