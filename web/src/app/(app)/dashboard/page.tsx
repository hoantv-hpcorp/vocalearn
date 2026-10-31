import { Suspense, type CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SpeakButton } from "@/components/SpeakButton";
import { StreakPanelNote, StreakStatTile } from "@/components/StreakWidgets";
import { getCurrentUser } from "@/lib/auth";
import { getUserFirstName } from "@/lib/user-name";

export const metadata: Metadata = {
  title: "Today",
  description:
    "Your daily WordStack review: nine cards due, a five-minute session, and the words you are keeping.",
};

async function GreetingName() {
  const user = await getCurrentUser();
  return <>{user ? getUserFirstName(user) : "there"}</>;
}

export default function DashboardPage() {
  return (
    <main id="main" className="wrap app-main">
      <div className="dash-head">
        <div>
          <span className="dash-date">Wednesday · 28 October</span>
          <h1>
            Good morning,{" "}
            <Suspense fallback="there">
              <GreetingName />
            </Suspense>
            .
          </h1>
          <p className="dash-sub">
            One short session today. Nine words are ready to come back — about
            four minutes.
          </p>
        </div>
        <div className="dash-head-actions">
          <Link className="btn btn--secondary btn--sm" href="/packs">
            <Icon name="book" />
            Browse packs
          </Link>
        </div>
      </div>

      <div className="dash-grid">
        <div className="dash-main">
          <section className="review-hero" aria-label="Today’s review">
            <div className="review-hero-copy">
              <span className="review-eyebrow">Today’s review</span>
              <div className="review-count">
                <strong>9</strong>
                <span>
                  <b>cards due</b>about 4 minutes
                </span>
              </div>
              <p className="review-message">
                Three of these came back early. Reviewing now keeps them
                available when a meeting starts.
              </p>
            </div>
            <div className="review-hero-actions">
              <Link className="btn btn--light" href="/session">
                Review now
                <Icon name="arrow-right" className="icon icon--nudge" />
              </Link>
              <span className="review-micro">Streak safe until 21:00</span>
            </div>
          </section>

          <div className="stat-row">
            <StreakStatTile />
            <div className="stat-tile">
              <span className="stat-icon">
                <Icon name="book" />
              </span>
              <strong>214</strong>
              <span>words learned</span>
            </div>
            <div className="stat-tile">
              <span className="stat-icon">
                <Icon name="target" />
              </span>
              <strong>87%</strong>
              <span>review accuracy</span>
            </div>
          </div>

          <section className="panel">
            <div className="panel-head">
              <h2>Last 7 days</h2>
              <Link className="link-arrow" href="/progress">
                12-week view <Icon name="arrow-right" />
              </Link>
            </div>
            <div
              className="week-chart"
              role="img"
              aria-label="Words reviewed over the last seven days: Thursday 12, Friday 15, Saturday 6, Sunday 0, Monday 18, Tuesday 14, and 9 so far today, Wednesday."
            >
              {[
                ["12", "60%", "Thu"],
                ["15", "75%", "Fri"],
                ["6", "30%", "Sat"],
                ["0", "4%", "Sun"],
                ["18", "90%", "Mon"],
                ["14", "70%", "Tue"],
              ].map(([value, height, label]) => (
                <div className="week-col" aria-hidden="true" key={label}>
                  <span className="week-value">{value}</span>
                  <span className="week-track">
                    <span
                      className="week-bar"
                      style={{ "--h": height } as CSSProperties}
                    />
                  </span>
                  <span className="week-label">{label}</span>
                </div>
              ))}
              <div className="week-col is-today" aria-hidden="true">
                <span className="week-value">9</span>
                <span className="week-track">
                  <span
                    className="week-bar"
                    style={{ "--h": "45%" } as CSSProperties}
                  />
                </span>
                <span className="week-label">Wed</span>
              </div>
            </div>
            <div className="panel-foot">
              <span>74 words reviewed in 7 days</span>
              <span>Best day: Monday, 18</span>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <h2>Continue learning</h2>
              <Link className="link-arrow" href="/packs">
                All packs <Icon name="arrow-right" />
              </Link>
            </div>
            <div className="continue-list">
              <Link className="continue-item" href="/pack/office-english-starter">
                <span className="continue-mark" aria-hidden="true">
                  O
                </span>
                <div>
                  <h3>Office English Starter</h3>
                  <p>24 of 30 words · 6 left</p>
                  <div className="meter">
                    <span style={{ width: "80%" }} />
                  </div>
                </div>
                <Icon name="chevron-right" />
              </Link>
              <Link className="continue-item" href="/pack/meetings-and-pushback">
                <span
                  className="continue-mark continue-mark--marigold"
                  aria-hidden="true"
                >
                  M
                </span>
                <div>
                  <h3>Meetings &amp; Pushback</h3>
                  <p>21 of 30 words · started last week</p>
                  <div className="meter">
                    <span style={{ width: "70%" }} />
                  </div>
                </div>
                <Icon name="chevron-right" />
              </Link>
              <Link className="continue-item" href="/pack/interview-english">
                <span className="continue-mark" aria-hidden="true">
                  I
                </span>
                <div>
                  <h3>Interview English</h3>
                  <p>Not started · 30 words</p>
                  <div className="meter">
                    <span style={{ width: "0%" }} />
                  </div>
                </div>
                <Icon name="chevron-right" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="dash-rail" aria-label="Today at a glance">
          <section className="panel">
            <div className="panel-head">
              <h2>Today’s plan</h2>
              <span className="tag">1 of 3</span>
            </div>
            <div className="plan-list">
              <div className="plan-item is-done">
                <span className="plan-check">
                  <Icon name="check" />
                </span>
                <div className="plan-item-text">
                  <h3>Morning warm-up</h3>
                  <p>3 cards · 2 min</p>
                </div>
                <span className="tag tag--forest">Done</span>
              </div>
              <div className="plan-item">
                <span className="plan-check" aria-hidden="true" />
                <div className="plan-item-text">
                  <h3>Review 9 due cards</h3>
                  <p>About 4 minutes</p>
                </div>
                <span className="tag tag--marigold">Next</span>
              </div>
              <div className="plan-item">
                <span className="plan-check" aria-hidden="true" />
                <div className="plan-item-text">
                  <h3>Save 1 word for tomorrow</h3>
                  <p>From any word page</p>
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <h2>Streak</h2>
              <StreakPanelNote />
            </div>
            <div className="week-dots" role="list">
              <span
                className="day-dot is-done"
                role="listitem"
                aria-label="Monday, reviewed"
              >
                <i aria-hidden="true">
                  <Icon name="check" />
                </i>
                Mon
              </span>
              <span
                className="day-dot is-done"
                role="listitem"
                aria-label="Tuesday, reviewed"
              >
                <i aria-hidden="true">
                  <Icon name="check" />
                </i>
                Tue
              </span>
              <span
                className="day-dot is-today"
                role="listitem"
                aria-label="Wednesday, today — 9 cards due"
              >
                <i aria-hidden="true" />
                Wed
              </span>
              <span
                className="day-dot"
                role="listitem"
                aria-label="Thursday, not yet"
              >
                <i aria-hidden="true" />
                Thu
              </span>
              <span className="day-dot" role="listitem" aria-label="Friday, not yet">
                <i aria-hidden="true" />
                Fri
              </span>
              <span
                className="day-dot"
                role="listitem"
                aria-label="Saturday, not yet"
              >
                <i aria-hidden="true" />
                Sat
              </span>
              <span className="day-dot" role="listitem" aria-label="Sunday, not yet">
                <i aria-hidden="true" />
                Sun
              </span>
            </div>
          </section>

          <section className="panel word-day">
            <span className="word-day-label">Word of the day · 04</span>
            <h2>leverage</h2>
            <span className="mono-note">verb · /ˈlev.ər.ɪdʒ/</span>
            <p>To use something you already have to get a better result.</p>
            <div className="word-day-foot">
              <SpeakButton
                text="leverage"
                label="Play pronunciation of leverage"
              />
              <Link className="link-arrow" href="/word">
                Full entry <Icon name="arrow-right" />
              </Link>
            </div>
          </section>

          <aside className="rail-quote">
            <Icon name="quote" />
            <p>“A word you use once is a word you keep.”</p>
            <span>Note to self · week 12</span>
          </aside>
        </aside>
      </div>
    </main>
  );
}
