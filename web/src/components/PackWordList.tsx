"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { SaveButton } from "./SaveButton";
import { SpeakButton } from "./SpeakButton";
import type { PackWord } from "@/lib/packs";

const INITIAL_COUNT = 5;

function onScrollSettled(callback: () => void) {
  const startedAt = performance.now();
  let lastY = window.scrollY;
  let stillFor = 0;

  function step() {
    const elapsed = performance.now() - startedAt;
    const y = window.scrollY;
    if (Math.abs(y - lastY) < 1) {
      stillFor += 16;
    } else {
      stillFor = 0;
      lastY = y;
    }
    if ((elapsed > 150 && stillFor >= 100) || elapsed > 1500) {
      callback();
      return;
    }
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

type PackWordListProps = {
  words: PackWord[];
  wordCount: number;
  sessionCount: number;
  slug: string;
};

function WordRow({ item }: { item: PackWord }) {
  return (
    <div className="word-row">
      <div className="word-row-main">
        <div className="word-row-title">
          <h3>{item.word}</h3>
          <span className="pos">{item.pos}</span>
        </div>
        <p>{item.definition}</p>
      </div>
      <div className="word-row-actions">
        <SpeakButton
          text={item.word}
          label={`Play pronunciation of ${item.word}`}
          className="audio-btn audio-btn--sm"
          iconClassName="icon icon-sm"
        />
        <SaveButton
          word={item.word}
          guest
          ariaLabel={`Save ${item.word} to My Words`}
        />
      </div>
    </div>
  );
}

export function PackWordList({
  words,
  wordCount,
  sessionCount,
  slug,
}: PackWordListProps) {
  const [expanded, setExpanded] = useState(false);
  const [busy, setBusy] = useState(false);
  const moreId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const visible = words.slice(0, INITIAL_COUNT);
  const rest = words.slice(INITIAL_COUNT);
  const canCollapse = rest.length > 0;

  function toggle() {
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (busy) return;

    const section = listRef.current?.closest("section");
    if (!section) {
      setExpanded(false);
      return;
    }

    const scrollPadding =
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) ||
      0;
    const offset = section.getBoundingClientRect().top - scrollPadding;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || Math.abs(offset) < 2) {
      if (Math.abs(offset) >= 2) {
        section.scrollIntoView({ behavior: "auto", block: "start" });
      }
      setExpanded(false);
      return;
    }

    setBusy(true);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    onScrollSettled(() => {
      setBusy(false);
      setExpanded(false);
    });
  }

  return (
    <>
      <div className="word-list" ref={listRef}>
        {visible.map((item) => (
          <WordRow key={item.word} item={item} />
        ))}
        {canCollapse && (
          <div
            id={moreId}
            className="word-list-more"
            data-open={expanded}
            inert={!expanded}
            aria-hidden={!expanded}
          >
            <div className="word-list-more-inner">
              {rest.map((item) => (
                <WordRow key={item.word} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>

      {canCollapse && (
        <button
          type="button"
          className="word-list-toggle"
          aria-expanded={expanded}
          aria-controls={moreId}
          disabled={busy}
          onClick={toggle}
        >
          {expanded ? "Show fewer words" : `Show all ${wordCount} words`}
          <Icon name="chevron-down" />
        </button>
      )}

      <div className="word-list-foot">
        <span>
          {wordCount} words · {sessionCount} sessions
        </span>
        <Link className="link" href={`/session?pack=${slug}`}>
          Study the pack
        </Link>
      </div>
    </>
  );
}
