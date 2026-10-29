import type { CSSProperties } from "react";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { Icon } from "@/components/Icon";
import { SampleCard } from "@/components/SampleCard";
import { SaveButton } from "@/components/SaveButton";
import { SpeakButton } from "@/components/SpeakButton";
import { getPack } from "@/lib/packs";

export default function HomePage() {
  const homePacks = [
    "office-english-starter",
    "meetings-and-pushback",
    "interview-english",
  ].flatMap((slug) => {
    const pack = getPack(slug);
    return pack ? [pack] : [];
  });
  const interview = getPack("interview-english");

  return (
    <main id="main">
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Workplace English · 5 minutes a day</p>
            <h1>
              The right English words—<em>ready when work needs them.</em>
            </h1>
            <p className="hero-sub">
              Build the English you need for meetings, emails, and interviews in
              five minutes a day. Start at your level, learn words in real
              situations, and review them at the right time so they stick.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--primary btn--lg" href="/placement">
                Start free — 2-min level check
                <Icon name="arrow-right" className="icon icon--nudge" />
              </Link>
              <a className="hero-secondary" href="#method">
                <span className="play-dot">
                  <Icon name="play" />
                </span>
                See how it works — 2 min
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Icon name="check" />
                Free to start
              </span>
              <span>
                <Icon name="check" />
                No app to install
              </span>
              <span>
                <Icon name="check" />
                Works on your phone
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="stack">
              <div className="stack-card stack-back" aria-hidden="true" />
              <div className="stack-card stack-mid" aria-hidden="true">
                <span className="stack-mid-label">
                  Interviews · {interview?.wordCount ?? 60} words
                </span>
              </div>
              <article className="stack-card stack-front" aria-label="Example word card">
                <div className="stack-stamp" aria-hidden="true">
                  <strong>12</strong>
                  <span>
                    Day
                    <br />
                    streak
                  </span>
                </div>
                <div className="stack-top">
                  <span className="stack-pack">Meetings &amp; pushback</span>
                  <SpeakButton text="leverage" label="Play pronunciation of leverage" />
                </div>
                <h2 className="stack-word">leverage</h2>
                <div className="stack-pron">
                  <span>/ˈlev.ər.ɪdʒ/</span>
                  <span className="pos">verb</span>
                </div>
                <div className="stack-def">
                  <span className="stack-label">Plain English</span>
                  <p>To use something you already have to get a better result.</p>
                </div>
                <p className="stack-example">
                  “We can leverage the data from last quarter.”
                </p>
                <div className="stack-foot">
                  <SaveButton
                    word="leverage"
                    guest
                    className="save-btn stack-save"
                    label="Save to My Words"
                  />
                  <span className="tag tag--forest">9 due today</span>
                </div>
              </article>
            </div>
            <p className="stack-caption">
              One card. Your whole session: five minutes.
            </p>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="wrap trust-inner">
          <div className="trust-item">
            <Icon name="pen" />
            Written by a language learner
          </div>
          <div className="trust-item">
            <Icon name="refresh" />
            Spaced repetition, explained
          </div>
          <div className="trust-item">
            <Icon name="lock" />
            Free to start, no card
          </div>
          <div className="trust-item">
            <Icon name="globe" />
            Built for professionals across Asia
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="problem-head">
            <div>
              <p className="eyebrow">The problem</p>
              <h2 className="section-title">
                You know the words.
                <br />
                <span className="serif-em">Then you lose them.</span>
              </h2>
            </div>
            <p className="problem-note">
              “I understand it in the meeting. I just can’t find it when it’s my
              turn.”
            </p>
          </div>
          <div className="problem-grid">
            <div className="problem-item">
              <span className="problem-num">01</span>
              <p>
                You recognise the word in a meeting, but it disappears when you
                need to speak.
              </p>
            </div>
            <div className="problem-item">
              <span className="problem-num">02</span>
              <p>Textbook English doesn’t sound like your Monday standup.</p>
            </div>
            <div className="problem-item">
              <span className="problem-num">03</span>
              <p>
                You’ve downloaded four vocabulary apps and abandoned all of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="method">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 className="section-title">A simple way to make words stick.</h2>
            <p className="section-lede">
              No endless word lists. A short loop that fits into the walk to your
              desk — or the train ride home.
            </p>
          </div>
          <div className="method-grid">
            <article className="method-step">
              <span className="method-num">01</span>
              <h3>Check your level</h3>
              <p>
                Answer 10 quick questions. Get a starting point and a named plan
                for your job.
              </p>
            </article>
            <article className="method-step">
              <span className="method-num">02</span>
              <h3>Learn in context</h3>
              <p>
                Words grouped by the moment you need them — meetings, emails,
                interviews — not A–Z.
              </p>
            </article>
            <article className="method-step">
              <span className="method-num">03</span>
              <h3>Review at the right time</h3>
              <p>
                Spaced repetition brings each word back just before you’d forget
                it.
              </p>
            </article>
          </div>
          <div className="method-foot">
            <p>The review loop is the product. We protect it.</p>
            <Link className="link-arrow" href="/placement">
              Take the 2-minute level check
              <Icon name="arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div className="section-head-copy">
              <p className="eyebrow">What changes</p>
              <h2 className="section-title">Sound more confident at work.</h2>
            </div>
            <p className="text-muted text-small">
              Not a bigger vocabulary. The right words, in the moments that
              matter.
            </p>
          </div>
          <div className="benefit-grid">
            <article className="benefit">
              <span className="benefit-icon">
                <Icon name="mic" />
              </span>
              <div>
                <h3>Speak up in meetings</h3>
                <p>
                  Find the words to share ideas, push back politely, and keep the
                  conversation moving.
                </p>
              </div>
            </article>
            <article className="benefit">
              <span className="benefit-icon">
                <Icon name="mail" />
              </span>
              <div>
                <h3>Write emails that get replies</h3>
                <p>
                  Use clear, professional phrasing without second-guessing your
                  tone.
                </p>
              </div>
            </article>
            <article className="benefit">
              <span className="benefit-icon">
                <Icon name="briefcase" />
              </span>
              <div>
                <h3>Walk into interviews ready</h3>
                <p>
                  Learn the words and expressions that help you talk about your
                  work with confidence.
                </p>
              </div>
            </article>
            <article className="benefit">
              <span className="benefit-icon">
                <Icon name="calendar" />
              </span>
              <div>
                <h3>Build a habit that survives</h3>
                <p>Five-minute sessions and a streak you won’t want to break.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--deep packs-section">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div className="section-head-copy">
              <p className="eyebrow">The packs</p>
              <h2 className="section-title">Find your next pack.</h2>
              <p className="section-lede">
                Start with the situations you face this week. Each pack is a
                small, finishable set — not a dictionary.
              </p>
            </div>
            <Link className="link-arrow" href="/packs">
              Browse all packs
              <Icon name="arrow-right" />
            </Link>
          </div>
          <div className="card-grid card-grid--3">
            {homePacks.map((pack) => {
              const featured = pack.slug === "meetings-and-pushback";
              return (
                <Link
                  key={pack.slug}
                  className={`tcard pack-card${
                    featured ? " tcard--forest pack-card--featured" : ""
                  }`}
                  data-tab={pack.tab}
                  href={`/pack/${pack.slug}`}
                >
                  <h3>{pack.name}</h3>
                  <p className="pack-outcome">{pack.outcome}</p>
                  <div className="pack-meta">
                    <span>
                      <Icon name="book" />
                      {pack.wordCount} words
                    </span>
                    <span>
                      <Icon name="chart" />
                      {pack.level}
                    </span>
                    <span>
                      <Icon name="clock" />
                      {pack.minutes} min
                    </span>
                  </div>
                  <div className="pack-words">
                    {pack.sampleWords.slice(0, 3).map((word) => (
                      <span key={word} className="tag">
                        {word}
                      </span>
                    ))}
                  </div>
                  <div className="pack-foot">
                    Preview pack <Icon name="arrow-right" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section sample-section on-dark">
        <div className="wrap sample-grid">
          <div className="sample-copy">
            <p className="eyebrow eyebrow--light">Try it before signing up</p>
            <h2 className="section-title">One card. No account.</h2>
            <p className="lede">
              This is a real card from the Meetings &amp; Pushback pack. Reveal
              the meaning, hear the word, save it if it’s useful.
            </p>
            <ul className="sample-list">
              <li>
                <span className="check-dot">
                  <Icon name="check" />
                </span>
                Real workplace example, not a textbook sentence
              </li>
              <li>
                <span className="check-dot">
                  <Icon name="check" />
                </span>
                Pronunciation you can play on the train
              </li>
              <li>
                <span className="check-dot">
                  <Icon name="check" />
                </span>
                One tap to save it for tomorrow’s review
              </li>
            </ul>
            <div className="sample-actions">
              <Link className="btn btn--light" href="/placement">
                Start free — 2-min level check
                <Icon name="arrow-right" className="icon icon--nudge" />
              </Link>
              <Link className="link-arrow link-arrow--light" href="/packs">
                Browse packs <Icon name="arrow-right" />
              </Link>
            </div>
            <p className="sample-note">
              This is one card. Your session today has nine.
            </p>
          </div>

          <SampleCard />
        </div>
      </section>

      <section className="section">
        <div className="wrap proof-grid">
          <div className="proof-copy">
            <p className="eyebrow">The reward</p>
            <h2 className="section-title">This is what momentum looks like.</h2>
            <p className="lede">
              Not a leaderboard. Not a badge economy. Just a small, visible
              record that the words are starting to stay.
            </p>
            <ul className="proof-points">
              <li>
                <Icon name="flame" />
                <span>
                  <strong>12-day streak.</strong> Five minutes on the train, most
                  mornings.
                </span>
              </li>
              <li>
                <Icon name="cards" />
                <span>
                  <strong>214 words learned.</strong> The ones your meetings
                  actually use.
                </span>
              </li>
              <li>
                <Icon name="target" />
                <span>
                  <strong>87% recall.</strong> Reviewed just before they would
                  slip away.
                </span>
              </li>
            </ul>
            <p style={{ marginTop: 26 }}>
              <Link className="link-arrow" href="/progress">
                See the progress screen <Icon name="arrow-right" />
              </Link>
            </p>
          </div>

          <div className="tcard mock" data-tab="Dashboard">
            <div className="mock-top">
              <div>
                <span className="mock-hello">Tuesday · 28 Oct</span>
                <p className="mock-name">Good morning, Minh.</p>
              </div>
              <span className="mock-streak">
                <Icon name="flame" />
                12 days
              </span>
            </div>
            <div className="mock-due">
              <strong>09</strong>
              <span>
                <b>cards due today</b>About 4 minutes
              </span>
            </div>
            <div className="mock-week" aria-hidden="true">
              <div className="mock-day">
                <span className="mock-bar" style={{ "--h": "30%" } as CSSProperties} />M
              </div>
              <div className="mock-day">
                <span className="mock-bar" style={{ "--h": "55%" } as CSSProperties} />T
              </div>
              <div className="mock-day">
                <span className="mock-bar" style={{ "--h": "18%" } as CSSProperties} />W
              </div>
              <div className="mock-day">
                <span className="mock-bar" style={{ "--h": "68%" } as CSSProperties} />T
              </div>
              <div className="mock-day">
                <span className="mock-bar" style={{ "--h": "44%" } as CSSProperties} />F
              </div>
              <div className="mock-day">
                <span className="mock-bar" style={{ "--h": "12%" } as CSSProperties} />S
              </div>
              <div className="mock-day is-today">
                <span className="mock-bar" style={{ "--h": "82%" } as CSSProperties} />S
              </div>
            </div>
            <div className="mock-stats">
              <div>
                <strong>214</strong>
                <span>words learned</span>
              </div>
              <div>
                <strong>87%</strong>
                <span>review accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="faq">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2 className="section-title">
              A few things you might be wondering.
            </h2>
          </div>
          <FaqList>
            <details>
              <summary>
                How much time does it really take?
                <Icon name="chevron-down" />
              </summary>
              <p className="faq-answer">
                Five minutes, by design. Sessions are timed and capped, so you
                always know where the end is. Some days you’ll do nine cards;
                some days three.
              </p>
            </details>
            <details>
              <summary>
                Is it really free?
                <Icon name="chevron-down" />
              </summary>
              <p className="faq-answer">
                Yes. The free tier is free forever and includes the level check,
                a starter pack, and daily review. Paid packs, if they come, add
                more situations — not access to your own progress.
              </p>
            </details>
            <details>
              <summary>
                Do I need to install an app?
                <Icon name="chevron-down" />
              </summary>
              <p className="faq-answer">
                No. WordStack works in your phone’s browser. Add it to your home
                screen if you want it to feel like an app, but there’s nothing to
                download.
              </p>
            </details>
            <details>
              <summary>
                Will it work for my level?
                <Icon name="chevron-down" />
              </summary>
              <p className="faq-answer">
                The two-minute check places you from foundation to upper
                intermediate and recommends a starting pack. The review schedule
                adjusts as you go.
              </p>
            </details>
            <details>
              <summary>
                What makes this different from a word list?
                <Icon name="chevron-down" />
              </summary>
              <p className="faq-answer">
                Context and timing. Words are grouped by the situation you need
                them in, and spaced repetition brings them back just before they
                would slip. A list gives you words; this gives you a loop.
              </p>
            </details>
            <details>
              <summary>
                Is my data safe?
                <Icon name="chevron-down" />
              </summary>
              <p className="faq-answer">
                We keep the minimum needed to remember your progress. The privacy
                policy is written to be read, and it follows PDPA/APPI/PIPL-aware
                practices for our region.{" "}
                <Link className="link" href="/legal">
                  Read the privacy policy
                </Link>
                .
              </p>
            </details>
          </FaqList>
        </div>
      </section>

      <section className="closing on-dark">
        <div className="wrap closing-inner">
          <p className="eyebrow eyebrow--light">Start with five minutes</p>
          <h2>Your next word is waiting.</h2>
          <p className="lede">
            Take the two-minute level check, get a starting point, and try your
            first session today. No credit card. No install.
          </p>
          <div className="closing-actions">
            <Link className="btn btn--light btn--lg" href="/placement">
              Start free — 2-min level check
              <Icon name="arrow-right" className="icon icon--nudge" />
            </Link>
          </div>
          <div className="closing-micro">
            <span>
              <Icon name="check" />
              Free forever to start
            </span>
            <span>
              <Icon name="check" />
              No credit card
            </span>
            <span>
              <Icon name="check" />
              Works on your phone
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
