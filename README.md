# UTTAR — Scripture Experiences

**Ancient Wisdom. Clearer Answers.** | getuttar.com

Mobile-first Next.js 15 website with existing homepage, Bhagavad Gita reflection tool, traditional Ram Shalaka, and a new complete Bhagavad Gita browser.

## Deploy and run

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run verify:gita
npm run verify:shalaka
```

The first `npm run dev` or `npm run build` automatically downloads the MIT-licensed Gita JSON source through `scripts/sync-gita.mjs`, checks all 700 entries, and creates `data/gita-corpus.json` before Next.js starts. Internet access is required for this build-time download. This generated file is intentionally not committed. `prebuild` is supported by Vercel's standard npm build process.

## Pages

- `/` — existing UTTAR homepage
- `/gita` — original curated verse reflection tool
- `/gita/library` — all 18 chapters, search, language switch, and verse browser
- `/gita/verse/2/47` — individual Sanskrit + translation page (700 static routes)
- `/ram-shalaka` — existing 225-cell Shalaka grid and nine results, unchanged

## Sources, licensing, and limitations

Read `SOURCE-GITA.md`, `GITA-DATA-LICENSE.txt`, and `SOURCE-AUDIT.md` before release. In particular, **Chapter 13 requires a documented renumbering** from one source's 701-verse convention to the 700-verse convention. Translations are supplied by the dataset and must not be labeled as UTTAR's own. External translations and their rights should receive an editorial/legal review before ad-based monetization.

The Gita library code is packaged and structurally checked, but this environment cannot complete an npm install or full Next.js production build because dependency registry access is unavailable. **Deploy first to Vercel preview and check the build logs before updating production.**
