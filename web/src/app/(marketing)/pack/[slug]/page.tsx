import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { PackWordList } from "@/components/PackWordList";
import { getPack, getRelatedPacks, packs } from "@/lib/packs";

type Props = {
  params: Promise<{ slug: string }>;
};

export const ensureStatic = "navigation";
export const instant = false;

export function generateStaticParams() {
  return packs.map((pack) => ({ slug: pack.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pack = getPack(slug);
  if (!pack) return {};
  return {
    title: `${pack.name} — Word pack`,
    description: pack.outcome,
  };
}

export default async function PackPage({ params }: Props) {
  const { slug } = await params;
  const pack = getPack(slug);
  if (!pack) notFound();

  const related = getRelatedPacks(pack.slug);

  return (
    <>
      <main id="main">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevron-right" />
            <Link href="/packs">Learn</Link>
            <Icon name="chevron-right" />
            <span aria-current="page">{pack.name}</span>
          </nav>

          <section className="pack-hero">
            <div className="pack-hero-copy">
              <p className="eyebrow">
                {pack.kind} · {pack.level}
              </p>
              <h1>{pack.name}</h1>
              <p className="lede">{pack.lede}</p>
              <div className="pack-meta-row">
                <span className="tag">
                  <Icon name="book" className="icon icon-sm" />
                  {pack.wordCount} words
                </span>
                <span className="tag">
                  <Icon name="clock" className="icon icon-sm" />
                  {pack.minutes} min a day
                </span>
                <span className="tag tag--forest">{pack.level}</span>
                <span className="tag">{pack.sessionCount} sessions</span>
              </div>
              <div className="pack-hero-actions">
                <Link className="btn btn--primary btn--lg" href={`/session?pack=${pack.slug}`}>
                  Study
                  <Icon name="arrow-right" className="icon icon--nudge" />
                </Link>
                <Link
                  className="btn btn--secondary"
                  href={`/session?pack=${pack.slug}&sample=true`}
                >
                  <Icon name="play" />
                  Try a free sample
                </Link>
              </div>
            </div>

            <div className="pack-cover" aria-label="Pack cover">
              <div className="pack-cover-top">
                <span className="tag">{pack.kind}</span>
                <span className="tag">{pack.cefr}</span>
              </div>
              <div className="pack-cover-count">
                <strong>{pack.wordCount}</strong>
                <span>
                  useful words
                  <br />
                  {pack.sessionCount} short sessions
                </span>
              </div>
              <ul className="pack-cover-words">
                {pack.words.slice(0, 5).map((item) => (
                  <li key={item.word}>
                    {item.word} <span>{item.pos}</span>
                  </li>
                ))}
              </ul>
              <div className="pack-cover-foot">
                <span>Updated Oct 2026</span>
                <span>WordStack · Work notebook</span>
              </div>
            </div>
          </section>

          <div className="pack-layout">
            <div className="pack-main">
              <section>
                <h2>What you’ll be able to do</h2>
                <ul className="outcome-list">
                  {pack.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <span className="check-dot">
                        <Icon name="check" />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Inside the pack</h2>
                <p className="text-small text-muted" style={{ marginTop: 8 }}>
                  All {pack.wordCount} words, with a plain-English meaning and
                  audio. Save the ones you want to review first.
                </p>
                <PackWordList
                  words={pack.words}
                  wordCount={pack.wordCount}
                  sessionCount={pack.sessionCount}
                  slug={pack.slug}
                />
              </section>

              <section>
                <h2>How a session works</h2>
                <div className="method-grid" style={{ marginTop: 22 }}>
                  <article className="method-step">
                    <span className="method-num">01</span>
                    <h3>Nine cards</h3>
                    <p>
                      A five-minute session made of words due today. No endless
                      deck.
                    </p>
                  </article>
                  <article className="method-step">
                    <span className="method-num">02</span>
                    <h3>Say it, then check</h3>
                    <p>
                      Recall the meaning first. Reveal the answer only when
                      you’re ready.
                    </p>
                  </article>
                  <article className="method-step">
                    <span className="method-num">03</span>
                    <h3>Review tomorrow</h3>
                    <p>
                      The words you found hard come back sooner. The easy ones
                      wait.
                    </p>
                  </article>
                </div>
              </section>
            </div>

            <aside className="pack-aside" aria-label="Start this pack">
              <div className="tcard tcard--forest aside-card" data-tab="Start here">
                <h2>Five minutes a day. That’s the plan.</h2>
                <p>
                  Start this pack with a two-minute level check. If it’s the
                  right fit, it becomes your plan — and your first session is
                  ready today.
                </p>
                <Link className="btn btn--light btn--block" href="/placement">
                  Take the 2-minute level check — free
                  <Icon name="arrow-right" className="icon icon--nudge" />
                </Link>
                <p className="aside-micro">
                  Free · No card · Works on your phone
                </p>
              </div>

              <div className="aside-note">
                <h3>{pack.aside.title}</h3>
                <p>{pack.aside.body}</p>
                <span className="mono-note">
                  {pack.wordCount} words · {pack.sessionCount} sessions ·{" "}
                  {pack.cefr}
                </span>
              </div>

              <div className="aside-note">
                <h3>Already learning?</h3>
                <p>
                  Your progress, due cards, and saved words live on the
                  dashboard.
                </p>
                <p style={{ marginTop: 12 }}>
                  <Link className="link-arrow" href="/dashboard">
                    Open dashboard <Icon name="arrow-right" />
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </div>

        <section className="section section--surface">
          <div className="wrap">
            <div className="section-head section-head--split">
              <div className="section-head-copy">
                <p className="eyebrow">Keep going</p>
                <h2 className="section-title">Words from the same situations.</h2>
              </div>
              <Link className="link-arrow" href="/packs">
                All packs <Icon name="arrow-right" />
              </Link>
            </div>
            <div className="card-grid card-grid--3">
              {related.map((item) => (
                <Link
                  className="tcard pack-card"
                  data-tab={item.tab}
                  href={`/pack/${item.slug}`}
                  key={item.slug}
                >
                  <h3>{item.name}</h3>
                  <p className="pack-outcome">{item.outcome}</p>
                  <div className="pack-meta">
                    <span>{item.wordCount} words</span>
                    <span>{item.level}</span>
                    <span>{item.minutes} min</span>
                  </div>
                  <div className="pack-foot">
                    Preview pack <Icon name="arrow-right" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-cta">
        <div className="mobile-cta-copy">
          <strong>{pack.name}</strong>
          {pack.wordCount} words · {pack.minutes} min a day
        </div>
        <Link className="btn btn--primary" href="/placement">
          Start free
        </Link>
      </div>
    </>
  );
}
