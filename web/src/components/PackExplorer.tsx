"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { PackSummary } from "@/lib/packs";

const filters = [
  { id: "all", label: "All packs" },
  { id: "situation", label: "Situations" },
  { id: "industry", label: "Industry" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

function PackMeta({ pack }: { pack: PackSummary }) {
  return (
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
  );
}

export function PackExplorer({ packs }: { packs: PackSummary[] }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return packs.filter((pack) => {
      const matchesFilter =
        filter === "all" || pack.categories.includes(filter);
      const haystack = [
        pack.name,
        pack.outcome,
        pack.tab,
        `${pack.wordCount} words`,
        pack.level,
        `${pack.minutes} min`,
        ...pack.sampleWords,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      return matchesFilter && matchesQuery;
    });
  }, [packs, filter, query]);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Learn · Word packs</p>
          <h1>Words for the moments that matter at work.</h1>
          <p className="lede">
            Browse by the situation you’re walking into — a Monday standup, a
            difficult email, an interview — or by the industry you work in. Every
            pack is small enough to finish.
          </p>

          <div className="pack-toolbar">
            <div className="search-field">
              <Icon name="search" />
              <label className="sr-only" htmlFor="pack-search">
                Search packs
              </label>
              <input
                id="pack-search"
                type="search"
                placeholder="Search by situation, industry, or word…"
                autoComplete="off"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="filter-row" role="group" aria-label="Filter packs">
              {filters.map((item) => (
                <button
                  key={item.id}
                  className="filter-chip"
                  type="button"
                  data-filter={item.id}
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pack-results-meta">
            <span id="pack-count" aria-live="polite">
              {visible.length} {visible.length === 1 ? "pack" : "packs"}
            </span>
            <span>Grouped by situation, never A–Z.</span>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pack-grid" id="pack-grid">
            {visible.map((pack) =>
              pack.featured ? (
                <Link
                  key={pack.slug}
                  className="tcard tcard--forest pack-card pack-card--featured"
                  data-tab={pack.tab}
                  data-categories={pack.categories.join(" ")}
                  href={`/pack/${pack.slug}`}
                >
                  <div className="pack-featured-body">
                    <div>
                      <h2>{pack.name}</h2>
                      <p className="pack-outcome">{pack.outcome}</p>
                      <PackMeta pack={pack} />
                    </div>
                    <div className="pack-featured-side">
                      <span className="mono">Starts with</span>
                      <div className="pack-words">
                        {pack.sampleWords.map((word) => (
                          <span key={word} className="tag">
                            {word}
                          </span>
                        ))}
                      </div>
                      <div className="pack-foot">
                        Preview the pack <Icon name="arrow-right" />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  key={pack.slug}
                  className="tcard pack-card"
                  data-tab={pack.tab}
                  data-categories={pack.categories.join(" ")}
                  href={`/pack/${pack.slug}`}
                >
                  <h3>{pack.name}</h3>
                  <p className="pack-outcome">{pack.outcome}</p>
                  <PackMeta pack={pack} />
                  <div className="pack-words">
                    {pack.sampleWords.map((word) => (
                      <span key={word} className="tag">
                        {word}
                      </span>
                    ))}
                  </div>
                  <div className="pack-foot">
                    Preview pack <Icon name="arrow-right" />
                  </div>
                </Link>
              ),
            )}
          </div>

          <div className="pack-empty" id="pack-empty" hidden={visible.length !== 0}>
            <h2>No packs match that search.</h2>
            <p>
              Try a broader word like “meetings”, “finance”, or “beginner”.
            </p>
          </div>

          <div className="pack-footer-note">
            <p>Not sure where to start? The two-minute check picks one for you.</p>
            <Link className="btn btn--primary" href="/placement">
              Take the level check
              <Icon name="arrow-right" className="icon icon--nudge" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
