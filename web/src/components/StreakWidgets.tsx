"use client";

import { Icon } from "./Icon";
import { useStreak } from "./StreakProvider";

function formatDays(count: number) {
  return `${count} ${count === 1 ? "day" : "days"}`;
}

export function StreakStatTile() {
  const { ready, current } = useStreak();

  return (
    <div className="stat-tile">
      <span className="stat-icon stat-icon--marigold">
        <Icon name="flame" />
      </span>
      <strong>{ready ? current : "—"}</strong>
      <span>day streak</span>
    </div>
  );
}

export function StreakPanelNote() {
  const { ready, current } = useStreak();

  return <span className="mono-note">{ready ? formatDays(current) : "—"}</span>;
}

export function StreakBigStat() {
  const { ready, current, best } = useStreak();

  return (
    <div className="big-stat">
      <span className="stat-label">Current streak</span>
      <strong>{ready ? formatDays(current) : "—"}</strong>
      <small>{ready ? `Personal best: ${best}` : "Personal best: —"}</small>
    </div>
  );
}
