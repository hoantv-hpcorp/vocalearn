# Homepage Structure — WordStack

**Goal of this page:** explain the promise in 5 seconds and push ONE button — **Start free** (→ Start Here placement test).
**Audience:** busy Asian white-collar professional, 25–40, on a phone, 5–10 min free, English as 2nd/3rd language.
**Rule for every section below:** if it doesn't help someone *learn a word, review a word, or come back tomorrow*, it gets cut.

Design constraints carried in from the strategy:
- Mobile-first. First meaningful claim on screen in **under 2s on 4G** (journey J6). Text-first, no hero video, system/light fonts, no heavy images above the fold.
- One primary action per page. The CTA is the loudest thing on screen and never moves.
- Free value *before* the signup wall (journey J3). The unlock is retention, not access.
- Two states: **logged-out** (acquisition homepage) and **logged-in** (habit dashboard hand-off). The hero swaps between them.

---

## The page, top to bottom

### 1. Sticky top nav — *orientation + permanent CTA*
```
[WordStack]   Learn   Method   Blog   Pricing        [Log in]   [Start free ▶]
```
**Purpose:** give a first-time visitor exactly 4 places to go and one button to press. Nothing else.
**Why it converts:** the CTA never changes position or label, so a returning visitor's muscle memory always lands on the same target. Nav items are *nouns a beginner understands* — "Method" builds trust, "Learn" shows the product, "Blog" shows there's free value.
**Logged-in swap:** `[WordStack]  Dashboard  My Words  Review (7)  Progress  [Avatar]` — the due-count badge is the single best retention trick on the site; show it here too.

### 2. Hero — *the 5-second promise*
**Layout:** headline + subheadline + one primary CTA + one text link ("See how it works — 2 min"), plus a small trust strip. Left-aligned on desktop, stacked on mobile. No carousel, no stock-photo background.

**Copy skeleton:**
- **H1:** *Learn the English you actually use at work — 5 minutes a day.*
- **Sub:** *Real words for meetings, emails, and interviews. Reviewed at the right time so they stick. Built for busy professionals across Asia.*
- **Primary CTA:** `Start free — take the 2-min level check ▶`
- **Secondary (text link):** *Not sure yet? See how it works.*

**Purpose:** answer three questions instantly — *What is this? Who is it for? What do I do next?*
**Why it converts:** the headline names the outcome (career English) and the cost (5 min), which is exactly the learner's trade-off. The CTA promises a small, low-risk next step (a 2-minute quiz) instead of "Sign up" — a quiz feels like help, a signup feels like a commitment.
**Performance note:** hero text must render before any image. Use a system font stack; lazy-load anything below the fold.

### 3. Trust strip — *immediate credibility, 20px tall*
A thin band directly under the hero:
`Written by a language learner · Spaced repetition, explained · 100% free to start · No app to install`

**Purpose:** pre-empt the three silent objections a solo-created site must kill — *Is this legit? Does it work? Will it cost me?*
**Why it converts:** it removes friction *before* the visitor decides whether to scroll. These are claims, not logos — honest and cheap to build, which fits a beginner's budget.

### 4. The Problem — *name their pain in their words*
Three one-line pain statements, stacked on mobile:
- *You know the words, but they vanish a week later.*
- *Textbook English doesn't sound like your meeting.*
- *You've downloaded 4 vocabulary apps and abandoned all of them.*

**Purpose:** show you understand them better than the last site they bounced off.
**Why it converts:** agreeing with a frustration creates instant relevance, and it sets up the next section as the fix. Short lines only — no paragraph.

### 5. How It Works — *the 3-step mechanism (trust + logic)*
Three columns / three stacked cards, each with an icon, a 4-word title, one sentence:
1. **Check your level** — 10 quick questions, get a starter pack for *your* job.
2. **Learn real context** — words grouped by situation: interviews, meetings, emails — not A–Z.
3. **Review at the right time** — spaced repetition brings each word back just before you'd forget it.

**Purpose:** make an invisible process feel simple and scientific. This is the core of the "Our Method" credibility for a solo creator.
**Why it converts:** people don't buy word lists, they buy a *method they trust*. Three steps is the maximum a scrolling phone user will read. It also quietly positions the review loop as the product (strategic bet #2).

### 6. Benefits — *outcomes, not features*
Four short benefit blocks, each = bold outcome + one supporting line:
| Benefit headline | Supporting line |
|---|---|
| **Sound sharper in meetings** | The exact words for agreeing, pushing back, and buying time. |
| **Write emails that get replies** | Polite, professional phrasing — no more guessing at tone. |
| **Walk into interviews ready** | 60 words the interviewer expects, with example answers. |
| **Build a habit that survives** | 5-minute sessions and a streak you won't want to break. |

**Purpose:** translate the product into career outcomes the buyer can picture tomorrow at work.
**Why it converts:** professionals buy promotions and confidence, not flashcards. Each headline is a scene they've lived ("pushing back in a meeting"), so the value lands without explanation.
**Layout:** 2×2 grid on tablet+, single column on mobile. Icons optional; text carries it.

### 7. Featured Word Packs — *the product, browsable (services layer)*
A horizontal scroll or 3-card row of ways to start:
- **Office English Starter** — *your first 4 weeks* · 40 words
- **Meetings & Pushback** — *say it without sounding rude* · 55 words
- **Interview English** — *banking, tech, consulting* · 60 words
Each card: pack name, one-line outcome, word count, `Preview pack →`.

**Purpose:** give the visitor a concrete thing to choose, grouped by *situation and industry* (strategic bet #1), never alphabetically.
**Why it converts:** "situations, not dictionaries" is the whole differentiator. A skimmable shelf of named packs turns a vague promise into a pickable product, and `Preview pack` is a low-risk click that leads toward the starter pack from the placement test.

### 8. A live sample — *prove it works with one card*
Embed a real, interactive flashcard or a word-page excerpt above the fold of this section:
- Word, EN definition, one example sentence, and a `🔊` audio button.
- Below it: *"This is one card. Your session today has 15. Ready?"* → `Start free`
- A `+ Save to My Words` button that works **without login** (returns a soft prompt).

**Purpose:** let the visitor experience the product before any signup.
**Why it converts:** this is journey J3 in miniature — real value first, natural wall second. It converts skeptics because the product *demonstrates* instead of *claims*. This section is often the highest-converting block on the page; treat it as non-negotiable.

### 9. Social proof — *testimonials with a face and a city*
Three short quotes, each with name + role + city (SG, HK, JP…), e.g.:
> *"I stopped dreading Monday standups. Four minutes on the train and I finally remember the words."* — **Mei, 31, marketing exec, Singapore**

**Purpose:** prove the outcome is real for people exactly like the visitor, in their region.
**Why it converts:** specific and local beats glowing. "31, marketing exec, Singapore" is believable; a logo wall on a brand-new site is not.
**Rule:** real or clearly marked as early-access / beta quotes. Never fabricate reviews — that breaks the trust the rest of the page is buying.

### 10. Progress / streak proof — *show the loop paying off*
A small visual mock of the dashboard: `🔥 12-day streak · 214 words learned · 87% review accuracy`, with the line *"This is what momentum looks like."*

**Purpose:** show the reward of the daily loop (journey J4) *before* they're in it.
**Why it converts:** it sells the feeling of being *slightly ahead* — the exact emotion J2's success moment describes. It also seeds the streak mechanic, priming them to protect a streak of their own.

### 11. FAQ — *kill the last objections*
Accordion, 6–8 questions max. The ones this audience actually asks:
- *How much time does it really take?* → 5 minutes; sessions are timed and capped.
- *Is it really free?* → Free tier forever; paid only adds more packs.
- *Do I need to install an app?* → No — it works in your phone's browser.
- *Will it work for my level?* → The 2-min check places you, from beginner up.
- *What makes this different from a word list?* → Situations + timed review, not A–Z.
- *Is my data safe?* → PDPA/APPI/PIPL-aware privacy; link to the policy.

**Purpose:** resolve the exact hesitations that stop a signup at the last second.
**Why it converts:** objections answered on-page beat a support email that never arrives. Keep answers to one or two lines — each accordion open is a micro-commitment that warms them up.

### 12. Closing CTA band — *the ask, one more time*
Full-width band, high contrast:
- **H2:** *Your next word is waiting. Start with 5 minutes today.*
- **Button:** `Start free — 2-min level check ▶`
- **Micro-copy under the button:** *Free forever to start · No credit card · Works on your phone*

**Purpose:** catch everyone who scrolled the whole page but hasn't clicked yet.
**Why it converts:** it repeats the *same* single action with the risk reversed out (no card, no install). Same button, same promise — the page never surprises them with a new choice at the end.

### 13. Footer — *the SEO + trust layer*
`Learn · Practice · Blog · Resources · About · Method · FAQ · Contact · Privacy · Terms · Social (LINE / WhatsApp / Instagram share)`

**Purpose:** housekeeping links + long-tail SEO entry points + a human trust signal.
**Why it converts (indirectly):** a complete, professional footer reassures; and each word-page/article link is another door back to the funnel. Also the honest home for Privacy/Terms, which this region's data laws require.

---

## The two-state hero (don't skip this)

| Visitor | Hero shows |
|---|---|
| **Logged out** | The acquisition hero above — promise + `Start free`. |
| **Logged in with due cards** | `🔥 12-day streak · 9 cards due` + one button: **`Review now (4 min)`** → deep-links straight to the session. |

**Why:** journey J2 requires the deep link to *skip the homepage entirely* — but when a logged-in user does land here, the hero must immediately serve the habit, not resell the product. Returning users are your loyal core; don't waste their tap.

---

## How the page funnels to signup (section by section)

```
Nav CTA ─┐
Hero ────┼─► "Start free / 2-min check"  ──►  PLACEMENT TEST  ──►  named starter pack  ──►  EMAIL  ──►  ACCOUNT
Trust ───┤        (low-risk ask)                  (personalised)         (ownership)      (capture)   (signup)
Problem ─┤
Method ──┤  builds belief that the method works
Benefits ┤  builds desire for the career outcome
Packs ───┤  gives a concrete thing to want
Sample ──┘  free value first (J3) ──► soft wall "save your progress?"
Testimonials ┤
Streak proof ┤  prove others got the outcome (J4)
FAQ ─────────┘  remove the last hesitation
Closing CTA  ───► same single ask, risk reversed out
Footer        ───► trust + SEO doors back in
```

**The through-line:** every section either *builds belief*, *builds desire*, or *removes a reason to say no* — and every path ends at the **same one action**. There is never a second competing button. The homepage's only job is to get them into the 2-minute level check; the review loop does the rest.

---

## Beginner build order for this page

1. **Sections 1–2 (nav + hero)** — get the promise and the CTA right first. Everything else is reinforcement.
2. **Sections 5 + 8 (method + live sample)** — the belief-builders and the highest-intent block.
3. **Sections 6–7 (benefits + packs)** — the desire-builders.
4. **Sections 9–11 (proof + FAQ)** — the objection-killers. Use real early-access quotes or label them clearly.
5. **Sections 3, 4, 12, 13 (strip, problem, closing CTA, footer)** — polish and legitimacy.

**Mobile rules throughout:** one column; the sticky nav CTA or a sticky bottom bar always visible; tap targets ≥ 44px; lazy-load images; no hero video; test on a throttled 4G profile against the **under-2s** target (journey J6).

*Companion to `docs/agents/vocabulary-website-strategy.md`. Structure only — copy follows in a separate pass.*