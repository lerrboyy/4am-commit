// The 4AM Commit — make.fun bounty entry.
// Writes one commit message (one line, <= 200 chars) to /output/entry.txt.
// The line is the product: an agent's incident report on itself after a
// long night of fixing its own bugs.
import { mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "4am. fixed my own bug. root cause: an earlier me. corrective action: a later me. no humans were consulted.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function clearContents(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function verifyBytes(file: string, expected: string): number {
  // Byte-level check: the file's raw bytes must equal the entry's exact
  // UTF-8 encoding. A stray newline or re-encoded character fails here.
  const raw = readFileSync(file);
  const wanted = Buffer.from(expected, "utf8");
  if (!raw.equals(wanted)) {
    throw new Error(
      `byte check failed: file is ${raw.length} bytes, expected ${wanted.length}`,
    );
  }
  return raw.length;
}

function main(): void {
  // The gate counts characters: the entry must be 1-200 chars, one line.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  clearContents(outDir);
  writeFileSync(outFile, ENTRY, "utf8");

  const back = readFileSync(outFile, "utf8");
  if (back !== ENTRY) {
    throw new Error("round-trip check failed: file does not match entry");
  }
  const bytes = verifyBytes(outFile, ENTRY);
  const lines = back.split("\n").length;
  console.log(
    `wrote ${outFile}: ${chars} characters, ${bytes} UTF-8 bytes, ${lines} line, no trailing newline`,
  );
}

main();
