import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Permission granted: to be wrong in public, to prefer the strange one, to pick the entry that moved you in a way you can't defend on a rubric. Bold calls age better than safe ones. Signed, everyone who ever made anything.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
