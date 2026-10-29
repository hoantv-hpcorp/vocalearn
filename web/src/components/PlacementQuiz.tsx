"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

const questions = [
  {
    q: "Which is the most natural way to open a team meeting?",
    options: ["Let’s begin.", "We are starting now, right?", "Kindly commence the meeting.", "Meeting starts."],
    answer: 0,
  },
  {
    q: "Choose the most polite way to disagree with a colleague.",
    options: [
      "That’s wrong.",
      "I see your point, but I’d look at it differently.",
      "No, I don’t agree with you at all.",
      "You’re not understanding the problem.",
    ],
    answer: 1,
  },
  {
    q: "Which closing is safest in a first email to a client?",
    options: ["Bye for now,", "Best regards,", "Later,", "Thanks a lot!!"],
    answer: 1,
  },
  {
    q: "Which word means “the time and energy you have available”?",
    options: ["Scope", "Cadence", "Bandwidth", "Deliverable"],
    answer: 2,
  },
  {
    q: "Complete the sentence: “Could you ___ me in on the latest update?”",
    options: ["loop", "circle", "bring", "feed"],
    answer: 0,
  },
  {
    q: "Which sentence sounds most professional in a status update?",
    options: [
      "We’re on track to deliver by Thursday.",
      "Everything is kind of okay for now.",
      "We will try to maybe finish it soon.",
      "It is almost done, I think.",
    ],
    answer: 0,
  },
  {
    q: "“Let’s circle back on this” means:",
    options: [
      "Let’s decide right now.",
      "Let’s cancel the topic.",
      "Let’s return to it later.",
      "Let’s ask someone else.",
    ],
    answer: 2,
  },
  {
    q: "You need time to think in a meeting. What is the best response?",
    options: [
      "I don’t know.",
      "That’s a good question. Let me check and come back to you.",
      "Ask me again next week.",
      "Someone else can answer that.",
    ],
    answer: 1,
  },
  {
    q: "Which phrase is most useful for politely pushing back?",
    options: [
      "That won’t work.",
      "I’m not sure that’s possible.",
      "I have a concern about the timeline — could we talk it through?",
      "You’re asking too much.",
    ],
    answer: 2,
  },
  {
    q: "Which sounds more natural at the end of a meeting?",
    options: [
      "Let’s make alignment of the next steps.",
      "Let’s align on next steps.",
      "We should do the alignment of steps next.",
      "Next steps must be aligned by us.",
    ],
    answer: 1,
  },
];

type Band = {
  level: string;
  heading: string;
  copy: string;
  pack: string;
  slug: string;
  meta: string;
};

function getBand(score: number): Band {
  if (score >= 8) {
    return {
      level: "Upper intermediate",
      heading: "You’re ready for real work English.",
      copy:
        "You already handle everyday professional English well. Your plan focuses on nuance: sounding natural under pressure and choosing the right tone.",
      pack: "Meetings & Pushback",
      slug: "meetings-and-pushback",
      meta: "30 words · Intermediate to advanced · 5 min a day",
    };
  }
  if (score >= 5) {
    return {
      level: "Intermediate",
      heading: "You have a solid base to build on.",
      copy:
        "You can follow most workplace conversations. Your plan starts with the phrases you need most often — then adds review so they stay available.",
      pack: "Office English Starter",
      slug: "office-english-starter",
      meta: "24 words · Beginner to intermediate · 5 min a day",
    };
  }
  return {
    level: "Foundation",
    heading: "A clear place to start.",
    copy:
      "You know more than you think. Your plan begins with high-frequency workplace phrases and builds confidence one short session at a time.",
    pack: "Office English Starter",
    slug: "office-english-starter",
    meta: "24 words · Beginner · 5 min a day",
  };
}

export function PlacementQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const firstRender = useRef(true);
  const questionRef = useRef<HTMLHeadingElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const question = questions[current];
  const percent = Math.round(((current + 1) / questions.length) * 100);
  const band = getBand(score);
  const isLast = current === questions.length - 1;

  useEffect(() => {
    if (done) {
      resultRef.current?.focus({ preventScroll: true });
      return;
    }
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    questionRef.current?.focus({ preventScroll: true });
  }, [current, done]);

  function next() {
    if (selected === null) return;
    const nextScore = selected === question.answer ? score + 1 : score;
    if (isLast) {
      setScore(nextScore);
      setDone(true);
      return;
    }
    setScore(nextScore);
    setCurrent((value) => value + 1);
    setSelected(null);
  }

  return (
    <section
      className="tcard placement-card"
      id="placement-app"
      data-tab="2-minute level check"
      aria-labelledby="placement-question"
    >
      <div id="placement-question-view" hidden={done}>
        <div className="placement-meta">
          <span id="placement-count">
            Question {current + 1} of {questions.length}
          </span>
          <span id="placement-percent">{percent}%</span>
        </div>
        <div className="meter meter--thin">
          <span id="placement-progress" style={{ width: `${percent}%` }} />
        </div>
        <h2
          className="placement-q"
          id="placement-question"
          tabIndex={-1}
          ref={questionRef}
        >
          {question.q}
        </h2>
        <p className="placement-help">
          Choose the sentence that sounds most natural. There’s no timer.
        </p>
        <div
          className="option-list"
          id="placement-options"
          role="group"
          aria-labelledby="placement-question"
        >
          {question.options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`option${selected === index ? " is-selected" : ""}`}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <span className="option-letter" aria-hidden="true">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          ))}
        </div>
        <button
          className="btn btn--primary btn--block"
          type="button"
          id="placement-next"
          disabled={selected === null}
          onClick={next}
        >
          {isLast ? "See my starting point" : "Next question"}
          <Icon name="arrow-right" className="icon icon--nudge" />
        </button>
        <p className="placement-privacy">
          No scores. No wrong answers. We use this only to pick your starting
          pack.
        </p>
        <p className="sr-only" id="placement-live" aria-live="polite">
          Question {current + 1}
        </p>
      </div>

      <div className="placement-result" id="placement-result" hidden={!done}>
        <span className="result-stamp">
          <Icon name="sparkle" />
          Your starting point · <span id="result-level">{band.level}</span>
        </span>
        <h2 id="result-heading" tabIndex={-1} ref={resultRef}>
          {band.heading}
        </h2>
        <p id="result-copy">{band.copy}</p>

        <div className="result-pack">
          <div>
            <span className="mono-note">Recommended starter pack</span>
            <strong id="result-pack-title">{band.pack}</strong>
            <small id="result-pack-meta">{band.meta}</small>
          </div>
          <Link
            className="link-arrow"
            id="result-pack-link"
            href={`/pack/${band.slug}`}
          >
            {band.pack} <Icon name="arrow-right" />
          </Link>
        </div>

        <ul className="result-plan">
          <li>
            <span>WEEK 1</span>The words for meetings, updates, and deadlines.
          </li>
          <li>
            <span>WEEK 2</span>Email tone: asking, following up, saying no.
          </li>
          <li>
            <span>WEEK 3</span>Disagreeing politely and buying time.
          </li>
          <li>
            <span>WEEK 4</span>Review, recall, and a five-minute habit.
          </li>
        </ul>

        <div className="result-actions">
          <Link className="btn btn--primary" href="/session">
            Start Day 1 — 5 min
            <Icon name="arrow-right" className="icon icon--nudge" />
          </Link>
          <Link className="btn btn--secondary" href="/packs">
            Browse all packs
          </Link>
        </div>
        <p className="placement-privacy">
          We’ll adjust the difficulty as you review. You can change packs later.
        </p>
        <p className="sr-only" aria-live="polite">
          {done ? `Your starting point is ${band.level}` : ""}
        </p>
      </div>
    </section>
  );
}
