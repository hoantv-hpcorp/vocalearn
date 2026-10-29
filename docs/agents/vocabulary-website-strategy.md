# Vocabulary Website Strategy Plan

**Working name:** WordStack (placeholder — swap freely)

---

## 1. The Strategy in One Line

> **A mobile-first vocabulary habit for busy Asian professionals: 5 minutes a day, the words you actually use at work, reviewed at the right time so they stick.**

Everything in the site structure below exists to serve that sentence. If a page doesn't help someone learn a word, review a word, or come back to the site the next day — it doesn't belong in v1.

### Who we're building for (two people, one site)

|                    | The Owner (you)                                       | The Learner (primary user)                                                                          |
| ------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Who**            | A student, beginner at web, low budget, limited time  | White-collar worker, 25–40, Asia (SG, HK, JP, KR, TW, MY, ID, PH, TH, IN)                           |
| **Goal**           | Build something useful, grow it slowly, keep it cheap | Get better English fast enough to matter for career: emails, meetings, interviews, promotions       |
| **Constraints**    | No dev team, needs to maintain it alone               | 5–10 min of free time, often on a phone, often on a commute, learning English as a 2nd/3rd language |
| **What they fear** | Wasted effort, no users                               | Wasted time, forgetting words, sounding unprofessional                                              |

### The 3 strategic bets

1. **Context beats word count.** A word list is a commodity. "The 60 words you need for a job interview in banking" is not. We sell _situations_, not dictionaries.
2. **The review loop is the product.** Anyone can show a word. Retention comes from coming back tomorrow. So the Dashboard / review-due page is the most important page on the site — not the homepage.
3. **Word pages are the growth engine.** Every word gets its own page, targeting a long-tail search ("what does leverage mean in business"). Free traffic → free users.

---

## 2. Essential Pages

Priority key: **P0** = launch with it. **P1** = within 60 days. **P2** = later, only if data asks for it.

### A. Acquisition & Trust

| #   | Page                                    | Purpose                                                                                                           | Priority |
| --- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| 1   | **Home**                                | One job: explain the promise in 5 seconds and push one button ("Start free")                                      | P0       |
| 2   | **How It Works / Our Method**           | Builds trust. Explains _why_ spaced repetition + context works. This is your credibility page for a solo creator. | P0       |
| 3   | **Word Dictionary (word detail pages)** | 300–500 individual pages, one per word. SEO engine. Also the on-site reference layer.                             | P0       |
| 4   | **Blog / Library**                      | Ranks for questions ("business English phrases for meetings"), funnels into packs                                 | P1       |
| 5   | **Free Resources**                      | Downloadable PDFs / cheat sheets — email capture without a paywall                                                | P1       |
| 6   | **About**                               | Who's behind it, why it exists. Human trust signal.                                                               | P0       |
| 7   | **Pricing**                             | Only if monetized. Free tier must exist.                                                                          | P1       |

### B. Core Learning (the actual product)

| #   | Page                                  | Purpose                                                                                         | Priority |
| --- | ------------------------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| 8   | **Start Here (2-min Placement Test)** | Personalises everything. 10 questions → recommends a level + starter pack. This is the on-ramp. | P0       |
| 9   | **Word Packs Hub**                    | Browse collections. Grouped by _situation_ and _industry_, not alphabetically.                  | P0       |
| 10  | **Word Pack Detail**                  | One pack = 40–60 words + what you'll be able to do. Shows progress if logged in.                | P0       |
| 11  | **Daily Session / Review**            | The habit engine. Flashcards due today. 5-minute timer. One button: Start.                      | P0       |
| 12  | **Practice**                          | Quiz, fill-in-the-blank, listening, typing, sentence-building. Same words, different muscle.    | P1       |
| 13  | **My Words**                          | Personal word bank — words saved from anywhere on the site. Feeling of ownership.               | P1       |
| 14  | **Progress**                          | Words learned, streak, review accuracy, level. Motivation + proof of value.                     | P0       |
| 15  | **Speaking / Listening Drills**       | Audio, shadowing, pronunciation. High value for Asian learners, heavier to build.               | P2       |

### C. Support & Legal

| #   | Page                                      | Priority |
| --- | ----------------------------------------- | -------- |
| 16  | **FAQ**                                   | P0       |
| 17  | **Contact**                               | P0       |
| 18  | **Privacy Policy** (PDPA/APPI/PIPL-aware) | P0       |
| 19  | **Terms of Use**                          | P0       |
| 20  | **Search** + **404**                      | P1       |

**Deliberately NOT in v1:** community forum, chat, leaderboards, native mobile app, badges economy. Each one is a full-time job and none of them make a word stick.

---

## 3. Site Hierarchy

Rule: **never more than 3 clicks from Home to any word.** Three levels, no deeper.

```
HOME
│
├── START HERE  ────────────► Placement Test (10 questions)
│                                 └──► Recommended Starter Pack
│
├── LEARN  (word packs)
│      ├── By Situation ──► Meetings / Emails / Interviews / Presentations / Small Talk
│      ├── By Industry ───► Finance / Tech / Consulting / Healthcare / Logistics / Sales
│      ├── By Level ──────► Beginner / Intermediate / Advanced
│      └── Pack Detail ───► Word List ──► WORD PAGE (atomic unit)
│                                              ├── Meaning (EN + L1 gloss)
│                                              ├── Audio + example sentence
│                                              ├── Collocations & related words
│                                              └── [+ Save to My Words]
│
├── REVIEW  (the daily loop)
│      └── Daily Session ──► Card ──► Card ──► Card ──► Summary
│
├── PRACTICE
│      ├── Quiz
│      ├── Listening
│      ├── Typing
│      └── Sentence Builder
│
├── PROGRESS
│      ├── Streak & Stats
│      └── My Words
│
├── BLOG / LIBRARY
│      └── Article ──► related Pack / related Word
│
├── RESOURCES (free downloads)
│
├── ABOUT / METHOD
├── PRICING
├── FAQ · CONTACT · PRIVACY · TERMS
```

---

## 4. Navigation System

Five separate navigation systems. Beginners usually build only the first one — that's the mistake.

### 1. Global top nav (5 items, max)

```
[WordStack]   Learn   Practice   Blog   Pricing        [Log in]  [Start free ▶]
```

The CTA button never changes position. It's the loudest thing on every page.

### 2. Logged-in nav (the product takes over)

```
[WordStack]  Dashboard  My Words  Review (7)  Progress  [Avatar]
                                    ↑ due-count badge = the single best retention trick on the site
```

### 3. Mobile bottom tab bar (this is your real nav — most traffic is mobile)

```
[ Learn ]   [ Review ● ]   [ Practice ]   [ Progress ]   [ Profile ]
                 ↑ badge shows due cards
```

Fixed to the bottom, thumb-reachable, exactly like a habit app. Don't hide learning behind a hamburger menu.

### 4. Contextual nav (inside a session, no distractions)

- `← Previous word` / `Next word →`
- Breadcrumb: `Home › Learn › Finance › Interview Pack › leverage`
- "Related words" and "This word also appears in..." at the bottom of each word page
- During a Daily Session: **nav is hidden**. One card, one button. Zero escape routes.

### 5. Footer (the SEO + trust layer)

Learn · Practice · Blog · Resources · About · Method · FAQ · Contact · Privacy · Terms · Social (LINE / WhatsApp / Instagram share)

---

## 5. User Journeys

Each journey = Trigger → Path → Success moment. The Success moment tells you what to measure.

### J1 — The Cold Visitor Who Needs English for Their Job _(highest value)_

**Trigger:** Frustrated at work, googles "business English vocabulary for work."
**Path:** Home → sees promise + "2-min level check" → Start Here → 10 questions → gets a level + a named starter pack ("Your 4-week Office English plan") → email capture → Day 1 session.
**Success moment:** They finish a session and see a date for tomorrow's review. That's the loop starting.
**Design rule:** the placement test must be _fun and short_. If it feels like an exam, they leave.

### J2 — The 5-Minute Commute Loop _(the retention engine — most important journey)_

**Trigger:** On the train/bus, bored, has a phone.
**Path:** Email or push reminder at 07:30 local → opens **Review** directly (deep link, not homepage) → 15 due cards → 4 minutes → summary screen → streak +1.
**Success moment:** The summary screen. Show the streak, words mastered, and tomorrow's due count. Close the app feeling _slightly_ ahead.
**Design rule:** the deep link must skip the homepage entirely. Every extra tap loses users.

### J3 — The SEO Seeker _(the growth engine)_

**Trigger:** Googles "what does leverage mean in business" or "email phrases for politely saying no."
**Path:** Lands on a **Word page** or a **Blog article** → reads the free answer (genuinely useful, no login wall) → sees "This word is in the Interview Pack" → clicks → tries a mini 5-card session inline → signs up to save progress.
**Success moment:** They get real value _before_ signing up, then hit a natural wall ("save your progress?").
**Design rule:** never block the answer. The unlock is _retention_, not access.

### J4 — The Returning User With a Streak _(the loyal core)_

**Trigger:** Doesn't want to break their streak. Habit is built.
**Path:** Opens site → Dashboard shows "12-day streak · 9 cards due" → Review → 3 minutes → sees level-up or a new pack unlocked → browses the next pack.
**Success moment:** Visible progress + something new to chase. Feed the streak, then give them the next challenge.

### J5 — The Word Saver _(lightweight engagement)_

**Trigger:** Reading a blog post or dictionary page and hits an unknown word.
**Path:** Taps **[+ Save to My Words]** → continues reading. Word enters tomorrow's review queue.
**Success moment:** The saved word shows up in a future review. The site remembered for them.
**Design rule:** saving must be one tap, from anywhere, with no page reload.

### J6 — The Mobile Commuter Who Bounces _(the risk to fix)_

**Trigger:** Opens on a phone during a commute on slow data.
**Path:** Heavy page loads too slowly → user leaves → never returns.
**Success moment (goal):** First meaningful word on screen in **under 2 seconds** on 4G. Text-first, no hero video, no heavy fonts.
**Design rule:** performance is a learning feature, not a nicety. Every kilobyte is a lost user.

---

## 6. How the Journeys Connect (the flywheel)

```
   SEO article / word page  →  J3  →  free value  →  sign up
            ▲                                          │
            │                                          ▼
   new content  ←  evidence of what users need  ←  J1 placement test
                                                       │
                                                       ▼
   J5 word saving  ←─────────  daily habit  ────────►  J2 / J4 review loop
                                    │
                                    ▼
                          Progress page → motivation → next pack → shares
```

The loop only closes if the **Daily Review** page is dead simple. Protect it above all else.

---

## 7. Launch Order (what a beginner should actually build first)

| Phase        | Build                                                            | Why                                   |
| ------------ | ---------------------------------------------------------------- | ------------------------------------- |
| **Week 1**   | Home, About, Method, Start Here (placement test), 1 starter pack | Prove the promise and the on-ramp.    |
| **Week 2**   | Daily Session + Progress + 10 word pages                         | The retention loop + first SEO pages. |
| **Week 3**   | Word Packs Hub + 5 packs + 40 word pages                         | Give them something to chew on.       |
| **Week 4**   | FAQ, Contact, Privacy, Terms, styled footer                      | Make it legitimate and safe.          |
| **Month 2**  | Blog (4 posts), Practice, My Words, Search                       | Growth engine + deeper engagement.    |
| **Month 3+** | Pricing, Free Resources, audio drills                            | Only once usage data justifies it.    |

---

## 8. Success Metrics (keep it to five)

1. **D1 / D7 / D30 retention** — the only real proof the loop works.
2. **% of new visitors who finish the placement test** — quality of the on-ramp.
3. **Average words reviewed per active day** — is the habit 5 minutes or 5 seconds?
4. **Organic search clicks to word pages** — is the growth engine spinning?
5. **Word-page → signup conversion** — does free value turn into users?

If a feature improves none of these five, postpone it.

---

_Strategy document — v1.0. Simple by design: three levels deep, one primary action per page, and the review loop at the centre._
