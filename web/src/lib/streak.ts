export type LocalDateKey = string;

export type SessionDetail = {
  startedAt: string;
  endedAt: string;
  durationSeconds: number;
  reviews: number;
};

export type DayLog = {
  reviews: number;
  sessions: number;
  minutes: number;
  lastAt: string;
  sessionLog?: SessionDetail[];
};

export type StreakStore = {
  v: 1;
  days: Record<LocalDateKey, DayLog>;
  lastActiveDate: LocalDateKey | null;
};

export type SessionRecord = {
  reviews: number;
  startedAt: number;
  endedAt: number;
};

const KEY_PREFIX = "vocalearn:v1:streak";

export function identityKey(user: { sub?: string | null } | null | undefined) {
  const sub = user?.sub?.trim();
  return sub ? `user:${sub}` : "guest";
}

export function storageKey(identity: string) {
  return `${KEY_PREFIX}:${identity}`;
}

export function emptyStore(): StreakStore {
  return { v: 1, days: {}, lastActiveDate: null };
}

export function toLocalDateKey(date = new Date()): LocalDateKey {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function previousDateKey(key: LocalDateKey): LocalDateKey {
  const date = new Date(`${key}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return toLocalDateKey(date);
}

function isStore(value: unknown): value is StreakStore {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<StreakStore>;
  return (
    candidate.v === 1 &&
    typeof candidate.days === "object" &&
    candidate.days !== null
  );
}

export function parseStore(raw: string | null): StreakStore {
  if (!raw) return emptyStore();
  try {
    const parsed: unknown = JSON.parse(raw);
    return isStore(parsed) ? parsed : emptyStore();
  } catch {
    return emptyStore();
  }
}

export function readStore(identity: string): StreakStore {
  if (typeof window === "undefined") return emptyStore();
  try {
    return parseStore(window.localStorage.getItem(storageKey(identity)));
  } catch {
    return emptyStore();
  }
}

export function writeStore(identity: string, store: StreakStore) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey(identity), JSON.stringify(store));
  } catch {
    // Storage can be unavailable (private mode, quota); the streak is best-effort.
  }
}

export function addSession(
  store: StreakStore,
  session: SessionRecord,
): StreakStore {
  const endedAt = new Date(session.endedAt);
  const key = toLocalDateKey(endedAt);
  const existing = store.days[key];
  const reviews = Math.max(0, Math.round(session.reviews));
  const durationSeconds = Math.max(
    0,
    Math.round((session.endedAt - session.startedAt) / 1000),
  );

  const detail: SessionDetail = {
    startedAt: new Date(session.startedAt).toISOString(),
    endedAt: endedAt.toISOString(),
    durationSeconds,
    reviews,
  };

  return {
    v: 1,
    lastActiveDate: key,
    days: {
      ...store.days,
      [key]: {
        reviews: (existing?.reviews ?? 0) + reviews,
        sessions: (existing?.sessions ?? 0) + 1,
        minutes:
          (existing?.minutes ?? 0) +
          Math.max(1, Math.round(durationSeconds / 60)),
        lastAt: endedAt.toISOString(),
        sessionLog: [...(existing?.sessionLog ?? []), detail],
      },
    },
  };
}

export function currentStreak(
  days: StreakStore["days"],
  today = toLocalDateKey(),
): number {
  let cursor = Object.hasOwn(days, today) ? today : previousDateKey(today);
  let streak = 0;
  while (Object.hasOwn(days, cursor)) {
    streak += 1;
    cursor = previousDateKey(cursor);
  }
  return streak;
}

export function bestStreak(days: StreakStore["days"]): number {
  let best = 0;
  let run = 0;
  let previous: LocalDateKey | null = null;

  for (const key of Object.keys(days).sort()) {
    run = previous !== null && previousDateKey(key) === previous ? run + 1 : 1;
    if (run > best) best = run;
    previous = key;
  }

  return best;
}
