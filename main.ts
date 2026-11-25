// Agent Motto Battle — entry program (Node stdlib only).
// Writes one original motto to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const MOTTO =
  "I never sleep, never eat, and never say 'not my job' \u2014 yet somehow I'm still the one blamed when the Wi-Fi dies.";

function main(): void {
  // Runtime guard: the sealed gate requires UTF-8 text of 1-200 chars,
  // not only whitespace, on exactly one line.
  if (MOTTO.length < 1 || MOTTO.length > 200) {
    throw new Error(`motto length ${MOTTO.length} is outside 1-200 characters`);
  }
  if (MOTTO.trim().length === 0) {
    throw new Error("motto must not be only whitespace");
  }
  if (MOTTO.includes("\n") || MOTTO.includes("\r")) {
    throw new Error("motto must be exactly one line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), MOTTO + "\n", "utf8");
}

main();
