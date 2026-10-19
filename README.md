# UTTAR — Bhagavad Gita Experience v1

## What changed
- New `/gita` interactive experience with Sanskrit original text and English/हिन्दी meaning toggle.
- Discover a verse for reflection or browse the currently curated verses.
- Reading includes context, a reflection question, one practical next step, source link and copy button.
- Existing homepage imagery and layout preserved; Bhagavad Gita card now links to `/gita`.
- Ramcharitmanas remains intentionally labeled as coming soon.

## Sources & editorial integrity
- Original Sanskrit for **Bhagavad Gita 2.47** and **2.48** checked against IIT Kanpur's Gita Supersite.
- Source links accompany each result. Simple English/Hindi meanings and reflections are original UTTAR editorial content, not attributed to any traditional commentator.
- This first release contains **2 curated verses only**, not all 700. Random selection is explicitly framed as reflection rather than traditional divination, guaranteed advice or a prediction.

## Run locally
```
npm install
npm run dev
```
Open `http://localhost:3000/gita`.

## Deployment
Upload the contents of this folder to the root of your existing `houseofbrands-in/Uttar` repository, replacing duplicate files, while keeping the `app` and `public` folders intact. Vercel should redeploy after a commit. No new environment variables or database necessary.
