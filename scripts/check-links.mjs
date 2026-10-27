// Fails if any ClickBank link in the source differs from your exact hoplink.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const EXACT = "https://50c1fevyudyrjrbczmpbqml94x.hop.clickbank.net/";
const files = [];
const walk = (d) => {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    statSync(p).isDirectory() ? walk(p) : /\.(tsx?|mjs)$/.test(n) && files.push(p);
  }
};
["app", "components", "lib"].forEach(walk);

let ok = 0, bad = 0;
for (const f of files) {
  const text = readFileSync(f, "utf8");
  for (const m of text.match(/https?:\/\/[^\s"'`)]*clickbank[^\s"'`)]*/gi) ?? []) {
    if (m === EXACT) ok++; else { bad++; console.error(`MISMATCH in ${f}: ${m}`); }
  }
}
// Every CTA must use the AFFILIATE_URL constant:
const uses = files.reduce((n, f) => n + (readFileSync(f, "utf8").match(/href=\{AFFILIATE_URL\}/g)?.length ?? 0), 0);
console.log(`Exact hoplink literals: ${ok}; CTAs using AFFILIATE_URL: ${uses}; mismatches: ${bad}`);
process.exit(bad ? 1 : 0);
