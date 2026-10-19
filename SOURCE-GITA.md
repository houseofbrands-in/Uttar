# UTTAR Gita corpus — provenance and review notes

Source: [Adiyogi Arts Bhagavad Gita JSON](https://github.com/AdiyogiArts/gita-json), used pursuant to its MIT license (see `GITA-DATA-LICENSE.txt`).

## Import method

`node scripts/sync-gita.mjs` retrieves `base.json`, `en.json`, and `hi.json` directly from the source repository (with jsDelivr fallback), then validates all 700 rows and writes `data/gita-corpus.json`. The downloaded corpus is deliberately `.gitignore`d, and generated locally or during Vercel `prebuild`. `node scripts/verify-gita.mjs` asserts consecutive canonical IDs, no duplicates, and nonempty Sanskrit/English/Hindi content. A failed download or missing translation **fails the build** instead of publishing invented/partial verses.

### Source edition difference: 701 → 700

The upstream `base.json` has **701** entries and **35** entries in chapter 13. The introductory `13-1` is an additional dialogue/question from Arjuna:

> अर्जुन उवाच | प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च ...

The common 700-verse recension has **34 verses in chapter 13**, beginning:

> श्रीभगवानुवाच | इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते ...

For UTTAR's standard 700-verse numbering, the source key `13-1` is excluded and upstream `13-2` through `13-35` are renumbered `13.1` through `13.34`, **with their original Sanskrit/translation text otherwise unchanged**. The generated `originalKey` retains traceability.

## Translators and editorial limitations

- The Sanskrit verses are traditional source text, not AI-generated.
- English and Hindi translations are supplied by Adiyogi Arts and **not** claimed as original UTTAR translations. Some upstream explanations and word glosses appear compiled from other commentary; UTTAR **does not import those**.
- The repo labels its bundle MIT, but its attribution to historical and recent translators should receive legal/editorial review before commercial monetization.
- Chapter titles are from the source. For some traditions spellings and verse segmentation differ; this package implements the explicitly documented 700-verse numbering, not a claim that all editions agree.
- A programmatic content check is *not* a line-by-line scholarly proofread. Sample source texts against IIT Kanpur Gita Supersite/Gita Press before describing the whole collection as independently authenticated.

## URLs

- `/gita` original two-verse personal reflection feature (unchanged)
- `/gita/library` complete browse + search experience
- `/gita/verse/2/47` one of 700 canonical, SEO-friendly individual verse pages

## Dependency / release

The corpus is generated in the `prebuild` and `predev` scripts. This requires network access from Vercel build agents or your local machine. If the upstream service is down, builds will fail safely and the previous live deployment stays in place. For long-term production reliability, review and vendor a frozen corpus into your repository after source-rights and editorial checks.
