/**
 * AI-assisted semantic candidate expansion. No claim of a vector/embedding index:
 * the interpreter supplies likely references, and this module checks each
 * suggestion against the real 700-verse corpus before merging with lexical hits.
 * The final answer model MUST validate source evidence and may reject all hits.
 */
import type { Verse } from './gita';
import type { Match } from './gita-match';

export function mergeCandidates(lexical: Match[], refs: readonly string[], corpus: Verse[], limit = 32): Match[] {
  const byRef = new Map(corpus.map(v => [`${v.chapter}.${v.verse}`, v]));
  const merged = new Map<string, Match>();
  // Try both types: model-suggested references first for recall, keyword matches
  // for robustness. Neither source is a citation or proof of relevance.
  for (const ref of refs.slice(0, 12)) {
    const verse = byRef.get(ref);
    if (verse && !merged.has(ref)) merged.set(ref, { verse, score: 12, reasons: ['unverified semantic suggestion'] });
  }
  for (const hit of lexical) {
    const id = `${hit.verse.chapter}.${hit.verse.verse}`;
    if (!merged.has(id)) merged.set(id, hit);
  }
  return Array.from(merged.values()).slice(0, limit);
}
