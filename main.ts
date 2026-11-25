// One Line, One Laugh — entry program.
// Writes the one funny line from entry.txt to /output/entry.txt.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
