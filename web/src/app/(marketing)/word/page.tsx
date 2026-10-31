import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { GlossSelect } from "@/components/GlossSelect";
import { Icon } from "@/components/Icon";
import { SaveButton } from "@/components/SaveButton";
import { SpeakButton } from "@/components/SpeakButton";

export const metadata: Metadata = {
  title: "Leverage — meaning in business English",
  description:
    "What does leverage mean in business? A plain-English definition, two workplace examples, collocations, and the word family — with audio and a first-language gloss.",
};

export default function WordPage() {
  return (
    <>
      <main id="main">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevron-right" />
            <Link href="/packs">Learn</Link>
            <Icon name="chevron-right" />
            <Link href="/pack/meetings-and-pushback">
              Meetings &amp; Pushback
            </Link>
            <Icon name="chevron-right" />
            <span aria-current="page">leverage</span>
          </nav>

          <div className="word-layout">
            <div className="word-main">
              <section
                className="tcard word-head-card"
                data-tab="Business English · Word 04"
              >
                <div className="word-head-top">
                  <span className="tag tag--forest">B1 · Intermediate</span>
                  <SaveButton word="leverage" guest label="Save to My Words" />
                </div>
                <h1 className="word-title">leverage</h1>
                <div className="word-pron">
                  <span>/ˈlev.ər.ɪdʒ/</span>
                  <span className="pos">verb</span>
                  <SpeakButton
                    text="leverage"
                    label="Play pronunciation of leverage"
                    className="audio-btn audio-btn--sm"
                    iconClassName="icon icon-sm"
                  />
                </div>
                <div className="word-hero-actions">
                  <Link className="btn btn--primary" href="/session">
                    Practice this word
                    <Icon name="arrow-right" className="icon icon--nudge" />
                  </Link>
                  <span className="text-small text-muted">
                    3 cards · about 2 minutes
                  </span>
                </div>

                <GlossSelect />
              </section>

              <section className="word-section">
                <h2>What it means</h2>
                <p className="definition-lg">
                  To use something you already have — time, data, a relationship
                  — to get a better result.
                </p>
                <p className="definition-note">
                  In workplace English, <em>leverage</em> usually means making
                  the most of an existing resource. It is close to “use”, but it
                  adds a sense of advantage: you are using what you have to get
                  further.
                </p>
                <div className="usage-note">
                  <Icon name="info" />
                  <span>
                    In finance, <strong>leverage</strong> is also a noun meaning
                    borrowed money. This page covers the verb you’ll hear in
                    meetings and emails.
                  </span>
                </div>
              </section>

              <section className="word-section">
                <h2>At work</h2>
                <div className="example-list">
                  <div className="example-item">
                    <span className="tag tag--forest">Meeting</span>
                    <p>
                      “If we <mark>leverage</mark> the research we already have,
                      we can skip two weeks of discovery.”{" "}
                      <SpeakButton
                        text="If we leverage the research we already have, we can skip two weeks of discovery."
                        label="Play the example sentence"
                        className="audio-btn audio-btn--sm"
                        iconClassName="icon icon-sm"
                      />
                    </p>
                  </div>
                  <div className="example-item">
                    <span className="tag tag--marigold">Email</span>
                    <p>
                      “Could we <mark>leverage</mark> the client’s existing
                      dashboard instead of building a new one?”{" "}
                      <SpeakButton
                        text="Could we leverage the client's existing dashboard instead of building a new one?"
                        label="Play the example sentence"
                        className="audio-btn audio-btn--sm"
                        iconClassName="icon icon-sm"
                      />
                    </p>
                  </div>
                </div>
              </section>

              <section className="word-section">
                <h2>Words that travel with it</h2>
                <p className="definition-note">
                  Natural English comes in chunks. Learn these together and the
                  word arrives faster when you need it.
                </p>
                <ul className="collo-list">
                  <li>
                    leverage data{" "}
                    <span>use existing data to get more value</span>
                  </li>
                  <li>
                    leverage your experience{" "}
                    <span>use what you’ve learned in a new situation</span>
                  </li>
                  <li>
                    leverage a network{" "}
                    <span>use your contacts to open a door</span>
                  </li>
                  <li>
                    leverage an asset{" "}
                    <span>get more value from something you already own</span>
                  </li>
                </ul>
                <div className="collocations">
                  <span className="tag tag--phrase">leverage data</span>
                  <span className="tag tag--phrase">leverage experience</span>
                  <span className="tag tag--phrase">leverage a network</span>
                  <span className="tag tag--phrase">leverage an asset</span>
                </div>
              </section>

              <section className="word-section">
                <h2>Word family</h2>
                <ul className="word-family">
                  <li>
                    <strong>leverage</strong>
                    <span>verb · noun</span>
                  </li>
                  <li>
                    <strong>leveraged</strong>
                    <span>adjective</span>
                  </li>
                  <li>
                    <strong>leveraging</strong>
                    <span>verb · -ing form</span>
                  </li>
                </ul>
              </section>

              <section className="word-section">
                <h2>Why this word matters at work</h2>
                <div className="prose">
                  <p>
                    “Leverage” is a meeting word. It signals that you can see a
                    resource — a dataset, a relationship, an existing process —
                    and find a way to get more from it. Used well, it makes you
                    sound resourceful. Used too often, it starts to sound like
                    jargon, so keep it for moments when you really are making
                    the most of something you already have.
                  </p>
                  <p>
                    If you are learning English for work, it is worth
                    recognising even if you rarely say it. It shows up in
                    strategy conversations, project reviews, and client emails —
                    often in the phrase “leverage what we already have”.
                  </p>
                </div>
                <FaqList style={{ marginTop: 28 }}>
                  <details>
                    <summary>
                      Is leverage a verb or a noun?
                      <Icon name="chevron-down" />
                    </summary>
                    <p className="faq-answer">
                      Both. As a verb, it means to use something to get a better
                      result: “We can leverage the data.” As a noun in finance,
                      it means borrowed money or the amount of debt used to
                      invest.
                    </p>
                  </details>
                  <details>
                    <summary>
                      How is leverage different from “use”?
                      <Icon name="chevron-down" />
                    </summary>
                    <p className="faq-answer">
                      “Use” is neutral. “Leverage” adds the idea of advantage —
                      you are using something you already have to get further,
                      faster, or at lower cost.
                    </p>
                  </details>
                  <details>
                    <summary>
                      Is leverage too formal for email?
                      <Icon name="chevron-down" />
                    </summary>
                    <p className="faq-answer">
                      It is common in professional email, especially in strategy,
                      consulting, and tech. In a very friendly message, “use” may
                      sound more natural.
                    </p>
                  </details>
                </FaqList>
              </section>
            </div>

            <aside className="word-aside" aria-label="Related learning">
              <div
                className="tcard tcard--forest pack-invite"
                data-tab="In this pack"
              >
                <h2>This word lives in Meetings &amp; Pushback.</h2>
                <p className="invite-meta">30 words · 5 sessions · B1–B2</p>
                <div className="invite-words">
                  <span className="tag">pushback</span>
                  <span className="tag">align</span>
                  <span className="tag">circle back</span>
                  <span className="tag">bandwidth</span>
                </div>
                <Link className="btn btn--light btn--block" href="/session">
                  Try 3 cards from this pack
                  <Icon name="arrow-right" className="icon icon--nudge" />
                </Link>
              </div>

              <div className="aside-note">
                <h3>Save it for tomorrow.</h3>
                <p>
                  Saved words enter your next review automatically. No folder to
                  organise, no list to maintain.
                </p>
                <SaveButton
                  word="leverage"
                  guest
                  className="btn btn--secondary btn--block"
                  label="Save to My Words"
                  style={{ marginTop: 14 }}
                />
              </div>

              <div className="aside-note">
                <h3>Related words</h3>
                <p>Close in meaning, different in tone.</p>
                <div className="related-words">
                  <span className="tag">utilise</span>
                  <span className="tag">harness</span>
                  <span className="tag">capitalise on</span>
                  <span className="tag">make the most of</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <div className="mobile-cta">
        <div className="mobile-cta-copy">
          <strong>leverage</strong>
          Meetings &amp; Pushback · 3 cards
        </div>
        <Link className="btn btn--primary" href="/session">
          Practice
        </Link>
      </div>
    </>
  );
}
