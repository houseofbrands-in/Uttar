# Ram Shalaka source audit — Gita Press edition

**Primary source:** User-provided *Shri Ramcharitmanas* PDF (1054 PDF pages), PDF pp. **1052–1054** (printed pp. **1053–1055**). The first page has the 15×15 grid; the next two explain counting and give one example plus eight numbered outcomes. The text in the PDF has broken font extraction, so the grid was transcribed from the page **image**.

## Traditional method

From a chosen cell, visit the cell, then every ninth cell, wrapping after the 225th. This visits 25 positions and yields one line. All 225 choices have been tested; phase is `selectedIndex % 9` with zero-based indexing.

## Nine source outcomes

| Zero-based phase | Printed line beginning | Traditional फल (summary, from book) | PDF page |
|---|---|---|---|
| 0 | सुनु सिय सत्य असीस हमारी | Question favorable; work succeeds | 1053 |
| 1 | प्रबिसि नगर कीजे सब काजा | Begin with remembrance of God; success | 1054 |
| 2 | उघरहिं अंत न होइ निबाहू | Unfavorable; success doubtful | 1054 |
| 3 | बिधि बस सुजन कुसंगत परहीं | Leave harmful company; completion doubtful | 1054 |
| 4 | होइहि सोइ जो राम रचि राखा | Doubtful; leave it to God's will | 1053 |
| 5 | मुद मंगलमय संत समाजू | Favorable; success | 1054 |
| 6 | गरल सुधा रिपु करहिं मिताई | Very favorable; success | 1054 |
| 7 | बरुन कुबेर सुरेस समीरा | Completion doubtful | 1054 |
| 8 | सुफल मनोरथ होहुँ तुम्हारे | Very favorable; success | 1054 |

These are the book's traditional outcomes, **not real-world guarantees**. Modern guidance is labeled separately in the UI.

## Differences within the printed source

The literal grid traversal from the supplied edition differs in some spelling/letter forms from the typeset verse on pp. 1053–1054:

- Phase 0 grid: `सुनुसियसुत्य...पूजिहिं...` whereas the answer heading reads `सुनु सिय सत्य...पूजिहि...`.
- Phase 4 grid: `...कोकरितर्केबढ़ावै...` while the typeset answer gives `...को करि तर्क बढ़ावै...`.
- Phase 7 grid: `...रनसन्मुखथरिकाहुँ...` while the typeset answer gives `...रन सन्मुख धरि काहुँ...`.

Other six outputs agree with displayed answer text once spaces, punctuation and typesetting word breaks are removed. We have **not** silently rewritten source grid cells. Instead, the UI displays the separately printed answer passage, and we explicitly flag the textual variation. If a publisher-confirmed errata page or another scan of this edition becomes available, reconcile these three differences deliberately.

## Testing

Run `npm run verify:shalaka` (no external test libraries) to check all 225 selections, 25-cell paths, nine phase mappings, and transcribed expected sequences.

## Scope

This corrects the grid and distinguishes the printed *फल* from UTTAR's modern explanations; does **not** rewrite the Bhagavad Gita feature or claim theological certification of editorial interpretations.
