"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "./Icon";
import { SpeakButton } from "./SpeakButton";
import { useStreak } from "./StreakProvider";

const defaultCards: SessionCard[] = [
  {
    word: "leverage",
    phonetic: "/ˈlev.ər.ɪdʒ/",
    pos: "verb",
    definition: "To use something you already have to get a better result.",
    example: "We can leverage the data from last quarter.",
    collocations: ["leverage data", "leverage experience", "leverage a network"],
  },
  {
    word: "bandwidth",
    phonetic: "/ˈbænd.wɪdθ/",
    pos: "noun",
    definition: "The time and energy someone has available for work.",
    example: "I don’t have the bandwidth for a new project this month.",
    collocations: ["spare bandwidth", "limited bandwidth", "free up bandwidth"],
  },
  {
    word: "circle back",
    phonetic: "/ˌsɜː.kəl ˈbæk/",
    pos: "phrase",
    definition:
      "To return to a topic later, usually after getting more information.",
    example: "Let’s circle back on pricing after the client call.",
    collocations: ["circle back on", "circle back later", "circle back to"],
  },
  {
    word: "stakeholder",
    phonetic: "/ˈsteɪk.həʊl.dər/",
    pos: "noun",
    definition: "Anyone affected by or interested in a project or decision.",
    example: "We need sign-off from every stakeholder before the launch.",
    collocations: ["key stakeholder", "stakeholder feedback", "stakeholder buy-in"],
  },
  {
    word: "deliverable",
    phonetic: "/dɪˈlɪv.ər.ə.bəl/",
    pos: "noun",
    definition: "A concrete result you promise to produce for a project.",
    example: "The first deliverable is a one-page summary for the board.",
    collocations: ["project deliverable", "final deliverable", "deliver on time"],
  },
  {
    word: "buy-in",
    phonetic: "/ˈbaɪ.ɪn/",
    pos: "noun",
    definition: "Agreement and support from the people who will be affected.",
    example: "The plan works, but we still need buy-in from finance.",
    collocations: ["get buy-in", "secure buy-in", "team buy-in"],
  },
  {
    word: "scope",
    phonetic: "/skəʊp/",
    pos: "noun",
    definition:
      "The work included in a project, or the limits of what it covers.",
    example: "That request is outside the scope of this sprint.",
    collocations: ["in scope", "out of scope", "scope a project"],
  },
  {
    word: "cadence",
    phonetic: "/ˈkeɪ.dəns/",
    pos: "noun",
    definition: "The rhythm or frequency at which something happens.",
    example: "Let’s agree on a weekly cadence for updates.",
    collocations: ["meeting cadence", "weekly cadence", "set the cadence"],
  },
  {
    word: "pushback",
    phonetic: "/ˈpʊʃ.bæk/",
    pos: "noun",
    definition: "Disagreement or resistance to a plan or idea.",
    example: "We got some pushback on the new timeline.",
    collocations: ["receive pushback", "expect pushback", "handle pushback"],
  },
];

export type SessionCard = {
  word: string;
  phonetic?: string;
  pos: string;
  definition: string;
  example: string;
  collocations: string[];
};

type Props = {
  title?: string;
  cards?: SessionCard[];
  variant?: "sample" | "pack";
  userName?: string;
  signedIn?: boolean;
};

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function ReviewSession({
  title,
  cards: sampleCards,
  variant,
  userName,
  signedIn = false,
}: Props) {
  const cards = sampleCards ?? defaultCards;
  const isSample = variant === "sample";
  const router = useRouter();
  const { ready, current, recordSession } = useStreak();
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [sessionStreak, setSessionStreak] = useState<number | null>(null);
  const [grades, setGrades] = useState({ known: 0, review: 0 });
  const startedAt = useRef<number | null>(null);
  const firstRender = useRef(true);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLHeadingElement>(null);

  const card = cards[index];
  const progress = ((index + 1) / cards.length) * 100;
  const live = done
    ? `Session complete. ${cards.length} cards reviewed.`
    : revealed
      ? "Meaning shown. Mark it as known or review again."
      : `Card ${index + 1} of ${cards.length}. Mark it as known, or show the meaning if you need it.`;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (done) {
      summaryRef.current?.focus({ preventScroll: true });
      return;
    }
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    wordRef.current?.focus({ preventScroll: true });
  }, [index, done]);

  function exitSession() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/dashboard");
    }
  }

  function toggleAnswer() {
    setRevealed((value) => !value);
  }

  function grade(knewIt: boolean) {
    setGrades((value) => ({
      known: value.known + (knewIt ? 1 : 0),
      review: value.review + (knewIt ? 0 : 1),
    }));

    if (index + 1 >= cards.length) {
      const start = startedAt.current;
      if (start !== null) {
        const endedAt = Date.now();
        setDurationSeconds(Math.round((endedAt - start) / 1000));
        if (!isSample) {
          setSessionStreak(
            recordSession({
              reviews: cards.length,
              startedAt: start,
              endedAt,
            }),
          );
        }
      }
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setRevealed(false);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (done) return;
      if (event.key === " " || event.key === "Spacebar") {
        const target = event.target as HTMLElement | null;
        if (target?.closest("button, a, input, select, textarea")) return;
        event.preventDefault();
        toggleAnswer();
      } else if (event.key === "1") {
        event.preventDefault();
        grade(true);
      } else if (event.key === "2") {
        event.preventDefault();
        grade(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <main className="session-shell" id="session-app">
      <div className="session-top">
        <button
          className="session-exit"
          type="button"
          onClick={exitSession}
          aria-label="End session and return to the previous page"
        >
          <Icon name="close" />
        </button>
        <div className="session-title">
          <span className="mono">Daily review</span>
          <strong>{title ?? "Meetings & Pushback"}</strong>
        </div>
        <span className="session-count" id="session-counter">
          {index + 1} / {cards.length}
        </span>
      </div>

      <div
        className="meter meter--thin session-meter"
        id="session-meter"
        role="progressbar"
        aria-label="Session progress"
        aria-valuemin={0}
        aria-valuemax={cards.length}
        aria-valuenow={index + 1}
      >
        <span id="session-progress" style={{ width: `${progress}%` }} />
      </div>

      <div className="session-stage" id="session-stage" hidden={done}>
        <article
          className="flashcard"
          id="session-card"
          aria-labelledby="session-word"
        >
          <div className="flash-top">
            <span className="tag tag--forest" id="session-pos">
              {card.pos}
            </span>
            <SpeakButton
              text={card.word}
              label={`Play pronunciation of ${card.word}`}
            />
          </div>

          <h1 className="flash-word" id="session-word" tabIndex={-1} ref={wordRef}>
            {card.word}
          </h1>
          <div className="flash-meta">
            {card.phonetic ? (
              <>
                <span id="session-phonetic">{card.phonetic}</span>
                <span className="dot" aria-hidden="true">
                  ·
                </span>
              </>
            ) : null}
            {isSample ? (
              <span>Sample session</span>
            ) : variant === "pack" ? (
              <span>
                Word {index + 1} of {cards.length}
              </span>
            ) : (
              <>
                <span>Word 4 of 32</span>
                <span className="dot" aria-hidden="true">
                  ·
                </span>
                <span>Seen 4 times</span>
              </>
            )}
          </div>

          <div className="flash-reveal-row">
            <p className="flash-prompt" id="session-prompt" hidden={revealed}>
              Do you know this word?
            </p>
            <button
              className="flash-peek"
              type="button"
              id="session-reveal"
              aria-expanded={revealed}
              aria-controls="session-answer"
              onClick={toggleAnswer}
            >
              {revealed ? "Hide meaning" : "Show meaning"}
              <Icon name="chevron-down" />
            </button>
          </div>

          <div
            className="flash-answer"
            id="session-answer"
            data-open={revealed}
            aria-hidden={!revealed}
          >
            <div className="flash-answer-body">
              <div className="answer-block">
                <span className="mono-note">Plain English</span>
                <p className="answer-def" id="session-definition">
                  {card.definition}
                </p>
              </div>
              <div className="answer-block">
                <span className="mono-note">At work</span>
                <p className="answer-example" id="session-example">
                  “{card.example}”
                </p>
              </div>
              <div className="answer-block">
                <span className="mono-note">Collocations</span>
                <div className="answer-collocations" id="session-collocations">
                  {card.collocations.map((item) => (
                    <span key={item} className="tag tag--outline tag--phrase">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="grade-row"
            id="session-grades"
            role="group"
            aria-label="Did you know this word?"
          >
            <button
              className="grade-btn grade-btn--known"
              type="button"
              data-grade="known"
              onClick={() => grade(true)}
            >
              <Icon name="check" />
              <span className="grade-label">Knew it</span>
              <span className="grade-kbd" aria-hidden="true">
                1
              </span>
            </button>
            <button
              className="grade-btn grade-btn--review"
              type="button"
              data-grade="review"
              onClick={() => grade(false)}
            >
              <Icon name="refresh" />
              <span className="grade-label">Review again</span>
              <span className="grade-kbd" aria-hidden="true">
                2
              </span>
            </button>
          </div>
        </article>
      </div>

      <section className="session-summary" id="session-summary" hidden={!done}>
        <div className="summary-card">
          <span className="summary-stamp" aria-hidden="true">
            <Icon name="check" />
          </span>
          <h1 id="summary-title" tabIndex={-1} ref={summaryRef}>
            Nice work, {userName ?? "Visitor"}.
          </h1>
          <p>
            {cards.length} words in under five minutes.{" "}
            {isSample
              ? "A sample from this pack — start the full pack to keep going."
              : grades.review > 0
                ? `${grades.review} ${grades.review === 1 ? "card" : "cards"} will come back tomorrow; the rest are scheduled further out.`
                : "Every card is scheduled further out."}
          </p>
          <div className="summary-stats">
            <div>
              <strong>{cards.length}</strong>
              <span>cards reviewed</span>
            </div>
            <div>
              <strong>{formatDuration(durationSeconds)}</strong>
              <span>time</span>
            </div>
            <div>
              <strong>{sessionStreak ?? (ready ? current : "—")}</strong>
              <span>day streak</span>
            </div>
          </div>
          <div className="summary-actions">
            {signedIn ? (
              <>
                <Link className="btn btn--primary" href="/dashboard">
                  Back to today
                  <Icon name="arrow-right" className="icon icon--nudge" />
                </Link>
                <Link className="btn btn--secondary" href="/progress">
                  See progress
                </Link>
              </>
            ) : (
              <>
                <a
                  className="btn btn--primary"
                  href="/auth/login?screen_hint=signup&returnTo=/dashboard"
                >
                  Sign up
                  <Icon name="arrow-right" className="icon icon--nudge" />
                </a>
                <a
                  className="btn btn--secondary"
                  href="/auth/login?returnTo=/dashboard"
                >
                  Sign in
                </a>
              </>
            )}
          </div>
          {signedIn ? (
            !isSample && (
              <p className="summary-micro">
                Tomorrow’s review: 6 cards · about 3 minutes
              </p>
            )
          ) : (
            <p className="summary-micro">
              Sign in to keep track of your progress.
            </p>
          )}
        </div>
      </section>

      <p className="session-hint" id="session-hint" hidden={done}>
        <kbd>1</kbd> Knew it · <kbd>2</kbd> Review again · <kbd>Space</kbd>{" "}
        Show / hide meaning
      </p>
      <p className="sr-only" id="session-live" aria-live="polite">
        {live}
      </p>
    </main>
  );
}
