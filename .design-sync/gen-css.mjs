#!/usr/bin/env node
// Regenerates the design-system stylesheet consumed by the Claude Design sync
// (cfg.cssEntry -> .design-sync/.cache/ds-styles.css).
//
// It prepends the brand webfont @import (Outfit + Lora, loaded from Google
// Fonts at runtime — exactly as the app's index.html does) to the app's
// Tailwind entry (src/index.css), then compiles it with the dedicated config
// (.design-sync/tailwind.ds.cjs). The @import stays the first rule, so it is a
// valid stylesheet wherever the converter splices it.
//
// Re-run this before every package-build / preview-rebuild so the shipped CSS
// covers whatever utility classes the latest previews use.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FONT =
  "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');\n";

const cacheDir = resolve(root, ".design-sync/.cache");
mkdirSync(cacheDir, { recursive: true });
const input = resolve(cacheDir, "ds-input.css");
const output = resolve(cacheDir, "ds-styles.css");

writeFileSync(input, FONT + readFileSync(resolve(root, "src/index.css"), "utf8"));

const bin = resolve(
  root,
  "node_modules/.bin",
  process.platform === "win32" ? "tailwindcss.cmd" : "tailwindcss",
);
execFileSync(
  bin,
  ["-c", ".design-sync/tailwind.ds.cjs", "-i", input, "-o", output],
  { cwd: root, stdio: "inherit", shell: process.platform === "win32" },
);
console.log("design-sync: wrote " + output);
