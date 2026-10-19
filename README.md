# UTTAR — Two Ways to Seek Guidance (Gita v3)

This package preserves the existing homepage, complete Bhagavad Gita library, individual verse pages, and Ram Shalaka. It upgrades **`/gita`** to support two distinct experiences:

1. **Think your question** — no question is typed or transmitted. A verse is chosen randomly from all **700** in the existing corpus, with original Sanskrit and a source-attributed English/Hindi translation. This is *not* question matching, prophecy, or a traditional Gita divination practice.
2. **Write your question** — the question is sent to a UTTAR server route. With `OPENAI_API_KEY`, the route selects a relevant passage from a grounded candidate set using an AI model, with an optional supporting verse and a modest rationale. Without the key, it makes **explicitly labeled topical/keyword suggestions**, and does not falsely present these as AI-selected.

Both modes link to `/gita/library` and `/gita/verse/{chapter}/{verse}`. The existing Ram Shalaka is unchanged.

## Local deployment (VS Code / PowerShell)

Extract this ZIP **into your existing UTTAR project folder**, replacing the matching files and retaining `.git`:

```powershell
npm install
npm run build
npm run verify:gita
npm run verify:shalaka
```

If these commands succeed:

```powershell
git add .
git commit -m "Add private and AI-assisted Bhagavad Gita question modes"
git push origin main
```

Do not use `git push --force`. Vercel redeploys after the push.

## Optional: activate actual AI matching

The question mode works without an API key as a keyword/topic matching feature, clearly labeled as such. For true AI-assisted matching:

1. In Vercel open **UTTAR → Settings → Environment Variables**.
2. Add `OPENAI_API_KEY` as a **server-side** environment variable; never prefix it with `NEXT_PUBLIC_` or commit it.
3. Redeploy the project; `/api/gita-guidance` will then call the Chat Completions API using `gpt-4.1-mini` by default. You can override the model using `UTTAR_AI_MODEL`.
4. Verify the AI response shows the AI-assisted label; a model/API failure will explicitly revert to keyword suggestions.

**Privacy:** Thinking a question sends nothing; writing sends the question to the UTTAR server. If AI is enabled, it additionally goes to the AI provider. Do not enter sensitive information. The code does not intentionally store questions, but hosting/API providers may have their own logs and retention policies. Review their current settings and disclose the privacy policy before public launch.

**Abuse/cost:** The route has a best-effort per-instance request limit, an input-length limit, and an AI timeout. This is *not* enough for a paid public API: configure a durable rate limit and budgets/alerts before enabling a paid AI key on a public site. Never put the API key in client code.

**Accuracy:** AI only chooses from scripture references supplied by the verified corpus and is instructed not to invent scripture. English/Hindi translations come from the MIT-licensed Adiyogi Arts Gita dataset; see `GITA-DATA-LICENSE.txt` and `SOURCE-GITA.md`. Relevance and modern rationale are editorial/AI-assisted and may be imperfect. Review outputs before broad launch. The optional AI key is not required for builds.

**Build-time dependency:** The existing `prebuild`/`predev` scripts download and validate the source corpus. A network connection is required on your PC/Vercel for the first build. This ZIP does not include a generated `data/gita-corpus.json`.

## Testing checklist

- `/gita` loads; English/Hindi switch changes result translations.
- **Think your question** reveals different verses from 700; clicking again changes the verse. No question text requested.
- **Write your question** with `Should I change jobs?` provides a verse and shows `Topic/keyword-based matching · AI not enabled` if there is no key.
- With a valid key, the written question identifies an AI-assisted suggestion or honestly falls back.
- Open the full verse source link; visit `/gita/library` and `/ram-shalaka` to confirm existing pages remain functional.
- Test mobile layout and input errors, no-match state, and copy button.

**Build status:** The archive was structurally checked, but `npm install` could not reach the npm registry in this environment, so a full local production build was not possible here. Run the commands above before pushing.
