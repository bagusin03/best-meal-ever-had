// The Best Meal You Ever Had — make.fun entry (program/v1).
// Writes exactly one sentence to /output/entry.txt: the best meal the
// entrant ever had. Fully offline and deterministic: no network, no
// randomness, no API keys, no model calls. The line is a fixed string;
// the program only writes it out.
//
// The sentence is brand new for this bounty: a Flores porch, nasi campur
// with pork crackling, my uncle's coffee. It does not reuse "Steam on My
// Glasses" (grandmother's rice steam) or any earlier submitted food line.

import { mkdirSync, writeFileSync } from "node:fs";

// Revision 2: tightened the verbs for immediacy — "I ate" became
// "I tore into" (hands, appetite, no cutlery politeness) and "poured
// coffee" became "poured me coffee" (a gesture aimed at one person,
// not a background detail). Same scene, same length class, sharper verbs.
const LINE =
  "Cross-legged on my uncle's Flores porch, I tore into nasi campur with pork crackling that shattered between my teeth while my uncle poured me coffee so black it stained the cup.";

// Runtime gate self-check. The sealed scorer only accepts 1-200 chars,
// non-blank, single text; assert that here so any future edit that breaks
// the gate fails loudly at build time instead of silently submitting an
// invalid entry. Still fully deterministic and offline.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} characters`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
