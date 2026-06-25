#!/usr/bin/env node
// Runs a command with a temporary `node_modules/<pkg>` directory junction
// pointing at the repo root. The design-sync converter expects
// PKG_DIR = node_modules/<cfg.pkg>; this app isn't installed there, so the
// junction lets synth-entry mode resolve the app's own src/ (and the
// repo-relative cssEntry/tsconfig). The junction is ALWAYS removed afterward
// (including on failure) and is removed link-only — the repo it points at is
// never touched.
//
// Usage: node .design-sync/with-junction.mjs <command> [args...]
import { spawnSync } from "node:child_process";
import { existsSync, lstatSync, rmdirSync, symlinkSync } from "node:fs";
import { resolve } from "node:path";

const PKG = "goodvibrations";
const root = process.cwd();
const link = resolve(root, "node_modules", PKG);

function removeJunction() {
  try {
    if (existsSync(link) || safeLstat()) rmdirSync(link); // link-only: removes the reparse point, not the target
  } catch (e) {
    console.error("with-junction: failed to remove junction:", e.message);
  }
}
function safeLstat() {
  try { return lstatSync(link).isSymbolicLink(); } catch { return false; }
}

removeJunction();
symlinkSync(root, link, "junction");

let code = 1;
try {
  const [cmd, ...args] = process.argv.slice(2);
  if (!cmd) { console.error("with-junction: no command given"); process.exit(2); }
  const r = spawnSync(cmd, args, { stdio: "inherit", shell: process.platform === "win32" });
  code = r.status ?? 1;
} finally {
  removeJunction();
}
process.exit(code);
