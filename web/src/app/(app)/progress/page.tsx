import type { Metadata } from "next";
import Link from "next/link";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "Twelve weeks of review activity, your level, recall accuracy, and the packs you are working through.",
};

const savedWords = [
  ["leverage", "verb"],
  ["bandwidth", "noun"],
  ["circle back", "phrase"],
  ["stakeholder", "noun"],
  ["buy-in", "noun"],
  ["cadence", "noun"],
  ["scope", "noun"],
  ["pushback", "noun"],
];

const packs = [
  ["Office English Starter", "24 / 24", "100%"],
  ["Meetings & Pushback", "21 / 30", "70%"],
  ["Emails That Get Replies", "16 / 28", "57%"],
  ["Interview English", "0 / 30", "0%"],
];

const doneMilestones = [
  ["First session", "21 September"],
  ["7-day streak", "5 October"],
  ["100 words learned", "14 October"],
  ["12-day streak", "27 October"],
];

const lockedMilestones = [
  ["250 words learned", "36 words to go"],
  ["30-day streak", "18 days to go"],
];

export default function ProgressPage() {
  return (
    <main id="main" className="wrap app-main">
      <div className="progress-head">
        <div>
          <h1>Your progress.</h1>
          <p className="dash-sub">
            Small sessions, kept going. This is what six months of five-minute
            reviews looks like.
          </p>
        </div>
        <span className="progress-range">
          <Icon name="calendar" />
          Last 6 months
        </span>
      </div>

      <div className="stat-grid">
        <div className="big-stat">
          <span className="stat-label">Words learned</span>
          <strong>214</strong>
          <small>18 new this week</small>
        </div>
        <div className="big-stat">
          <span className="stat-label">Current streak</span>
          <strong>12 days</strong>
          <small>Personal best: 12</small>
        </div>
        <div className="big-stat">
          <span className="stat-label">Recall accuracy</span>
          <strong>87%</strong>
          <small>Last 30 days</small>
        </div>
        <div className="big-stat">
          <span className="stat-label">Time reviewed</span>
          <strong>4h 20m</strong>
          <small>About 3 min a session</small>
        </div>
      </div>

      <div className="progress-grid">
        <div className="progress-main">
          <ActivityHeatmap />

          <section className="level-panel" aria-labelledby="level-title">
            <span className="mono">Your level</span>
            <h2 id="level-title">Intermediate, moving up</h2>
            <div className="level-route">
              <strong>B1</strong>
              <Icon name="arrow-right" />
              <strong className="level-next">B2</strong>
            </div>
            <div
              className="meter meter--on-dark"
              role="progressbar"
              aria-label="Progress through B1"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={68}
            >
              <span style={{ width: "68%" }} />
            </div>
            <p>
              You’re 68% through B1. Keep reviewing and the next packs will move
              you toward upper intermediate.
            </p>
          </section>

          <section className="panel" aria-labelledby="accuracy-title">
            <div className="panel-head">
              <h2 id="accuracy-title">Recall accuracy</h2>
              <span className="tag tag--forest">+8 pts</span>
            </div>
            <div className="spark-head">
              <div>
                <strong>87%</strong>
                <span>Average over the last 30 days</span>
              </div>
              <span className="mono-note">Weeks 1–12</span>
            </div>
            <div className="spark-chart">
              <svg
                viewBox="0 0 680 64"
                preserveAspectRatio="none"
                role="img"
                aria-label="Recall accuracy rose from 79 percent in week one to 87 percent in week twelve."
              >
                <path
                  className="spark-area"
                  d="M0 46 L62 42 L124 45 L186 37 L248 39 L310 31 L372 33 L434 25 L496 27 L558 18 L620 20 L676 12 L676 64 L0 64 Z"
                />
                <path
                  className="spark-line"
                  vectorEffect="non-scaling-stroke"
                  d="M0 46 L62 42 L124 45 L186 37 L248 39 L310 31 L372 33 L434 25 L496 27 L558 18 L620 20 L676 12"
                />
              </svg>
            </div>
            <div className="spark-axis" aria-hidden="true">
              <span>Wk 1</span>
              <span>Wk 6</span>
              <span>Wk 12</span>
            </div>
          </section>

          <section className="panel" aria-labelledby="packs-title">
            <div className="panel-head">
              <h2 id="packs-title">Pack progress</h2>
              <Link className="link-arrow" href="/packs">
                Find a pack <Icon name="arrow-right" />
              </Link>
            </div>
            <div className="pack-progress-list">
              {packs.map(([name, count, width]) => (
                <div className="pack-progress-item" key={name}>
                  <div className="pack-progress-top">
                    <strong>{name}</strong>
                    <span>{count}</span>
                  </div>
                  <div className="meter">
                    <span style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside
          className="progress-rail"
          aria-label="Saved words and milestones"
        >
          <section className="panel" id="words" aria-labelledby="words-title">
            <div className="panel-head">
              <h2 id="words-title">My words</h2>
              <span className="mono-note">14 saved</span>
            </div>
            <div className="saved-words">
              {savedWords.map(([word, pos]) => (
                <Link className="saved-chip" href="/word" key={word}>
                  {word} <span>{pos}</span>
                </Link>
              ))}
            </div>
            <div className="panel-foot">
              <span>Saved words return in review automatically.</span>
            </div>
          </section>

          <section className="panel" aria-labelledby="milestones-title">
            <div className="panel-head">
              <h2 id="milestones-title">Milestones</h2>
              <span className="mono-note">4 of 6</span>
            </div>
            <div className="milestone-list">
              {doneMilestones.map(([title, date]) => (
                <div className="milestone" key={title}>
                  <span className="milestone-mark">
                    <Icon name="check" />
                  </span>
                  <div className="milestone-text">
                    <strong>{title}</strong>
                    <span>{date}</span>
                  </div>
                </div>
              ))}
              {lockedMilestones.map(([title, note]) => (
                <div className="milestone" key={title}>
                  <span className="milestone-mark milestone-mark--locked">
                    <Icon name="lock" />
                  </span>
                  <div className="milestone-text">
                    <strong>{title}</strong>
                    <span>{note}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="rail-quote">
            <Icon name="quote" />
            <p>“You don’t need a perfect week. You need the next five minutes.”</p>
            <span>From the method</span>
          </aside>
        </aside>
      </div>
    </main>
  );
}
