# UTTAR — Ram Shalaka Release

Next.js App Router project for UTTAR. This package preserves the existing homepage and `/gita` experience and adds `/ram-shalaka`.

## Install / run

```sh
npm install
npm run dev
```

## Features

- `app/ram-shalaka`: fully interactive 15×15 Shri Ram Shalaka grid (225 aksharas), every-ninth-cell trace, nine traditional results, Hindi/English switch, original text + full source chaupai, context, a reflection question, next step, copy and reset.
- `app/gita`: original Gita feature retained.
- `app/page.tsx`: both scripture cards now navigate to the functional pages.
- No database or API key required.

## Sources / editorial notes

- Grid transcription: https://vedprashnavali.com/hi/prash
- Grid and modulo-9 mapping cross-check: https://kundlipoint.com/ram-shalaka and https://shriramshalaka.com/prashnavali-chart
- 8 complete source chaupais behind the nine Shalaka lines: https://shriramshalaka.com/chaupaiyan
- Note: grid letter spelling and segmentation vary slightly by published recension. The line output is presented in a normalized readable form; we do not render the raw concatenation of grid cells as exact canonical scripture.
- English / Hindi interpretation, questions and next steps are editorial content written for UTTAR, not scripture translations or predictions.
- The selection is deterministic: cell index `% 9` selects one of nine lines; `traceSelection()` confirms the 25 positions every 9 steps in the 225-cell grid.

## Deployment

Unzip and copy all files to repository root (preserving folder structure). Commit and push; Vercel can build this as a normal Next.js app. The website route is `/ram-shalaka`.
