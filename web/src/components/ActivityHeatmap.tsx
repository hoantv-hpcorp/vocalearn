"use client";

import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

type Cell = { level: number; label: string };

type HeatData = {
  cells: Cell[];
  active: number;
  longestGap: number;
};

const HEAT_TOTAL = 182;

function buildHeatData(): HeatData {
  const today = new Date();
  const levels = [0, 1, 2, 1, 3, 4, 2, 1, 0, 2, 3, 1, 4, 3, 2, 0, 1, 3, 2, 4];
  const cells: Cell[] = [];
  let active = 0;
  let gap = 0;
  let longestGap = 0;

  for (let i = 0; i < HEAT_TOTAL; i += 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - (HEAT_TOTAL - 1 - i));
    const weekday = day.getDay();
    let level = levels[(i * 3 + Math.floor(i / 7)) % levels.length];
    if ((weekday === 0 || weekday === 6) && level > 1) level -= 1;
    if (i >= HEAT_TOTAL - 12) level = Math.max(level, 2);
    if (i === HEAT_TOTAL - 1) level = 3;
    if (level > 0) {
      active += 1;
      gap = 0;
    } else {
      gap += 1;
      if (gap > longestGap) longestGap = gap;
    }
    const label =
      day.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) +
      " · " +
      (level === 0 ? "no review" : level * 5 + " words");
    cells.push({ level, label });
  }

  return { cells, active, longestGap };
}

export function ActivityHeatmap() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const data = useMemo(() => (isClient ? buildHeatData() : null), [isClient]);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    window.requestAnimationFrame(() => {
      if (wrap.scrollWidth > wrap.clientWidth) {
        wrap.scrollLeft = wrap.scrollWidth;
      }
    });
  }, [data]);

  const active = data?.active ?? 0;
  const longestGap = data?.longestGap ?? 0;
  const summary = data
    ? `Review activity over the last 26 weeks. ${active} of ${HEAT_TOTAL} days include a review. Darker squares mean more words reviewed.`
    : "";

  return (
    <section className="panel" aria-labelledby="activity-title">
      <div className="panel-head">
        <h2 id="activity-title">Review activity</h2>
        <span className="mono-note">26 weeks · 1 square = 1 day</span>
      </div>
      <div className="heat-wrap" ref={wrapRef}>
        <div className="heat-grid" id="activity-grid" aria-hidden="true">
          {data?.cells.map((cell, index) => (
            <span
              key={index}
              className={`heat-cell heat-${cell.level}`}
              title={cell.label}
            />
          ))}
        </div>
      </div>
      <p className="sr-only" id="heat-summary">
        {summary}
      </p>
      <div className="heat-legend" aria-hidden="true">
        <span>Less</span>
        <i className="heat-cell" />
        <i className="heat-cell heat-1" />
        <i className="heat-cell heat-2" />
        <i className="heat-cell heat-3" />
        <i className="heat-cell heat-4" />
        <span>More</span>
      </div>
      <div className="panel-foot">
        <span id="heat-active-days">
          {data ? `${active} active days` : "— active days"}
        </span>
        <span id="heat-longest-gap">
          {data
            ? `Longest gap: ${longestGap} ${longestGap === 1 ? "day" : "days"}`
            : "Longest gap: — days"}
        </span>
      </div>
    </section>
  );
}
