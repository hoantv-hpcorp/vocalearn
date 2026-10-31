"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  addSession,
  bestStreak,
  currentStreak,
  identityKey,
  parseStore,
  readStore,
  storageKey,
  writeStore,
  type SessionRecord,
} from "@/lib/streak";

type StreakContextValue = {
  ready: boolean;
  current: number;
  best: number;
  recordSession: (session: SessionRecord) => number | null;
};

const StreakContext = createContext<StreakContextValue | null>(null);

export function useStreak() {
  const context = useContext(StreakContext);
  if (!context) {
    throw new Error("useStreak must be used inside StreakProvider");
  }
  return context;
}

export function StreakProvider({ children }: { children: ReactNode }) {
  const { user, isLoading } = useUser();
  const identity = isLoading ? null : identityKey(user);
  const subscribers = useRef(new Set<() => void>());

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (identity === null) return () => {};

      subscribers.current.add(onStoreChange);
      const key = storageKey(identity);
      const onStorage = (event: StorageEvent) => {
        if (event.key === key || event.key === null) onStoreChange();
      };
      window.addEventListener("storage", onStorage);

      return () => {
        subscribers.current.delete(onStoreChange);
        window.removeEventListener("storage", onStorage);
      };
    },
    [identity],
  );

  // undefined while Auth0 is still resolving, so we never flash the guest store
  // to a signed-in user.
  const getSnapshot = useCallback(() => {
    if (identity === null) return undefined;
    try {
      return window.localStorage.getItem(storageKey(identity));
    } catch {
      return null;
    }
  }, [identity]);

  const raw = useSyncExternalStore(subscribe, getSnapshot, () => undefined);
  const store = useMemo(
    () => (raw === undefined ? null : parseStore(raw)),
    [raw],
  );

  const recordSession = useCallback(
    (session: SessionRecord) => {
      if (identity === null) return null;
      const next = addSession(readStore(identity), session);
      writeStore(identity, next);
      for (const notify of subscribers.current) notify();
      return currentStreak(next.days);
    },
    [identity],
  );

  const value = useMemo<StreakContextValue>(() => {
    // store is null during prerender; skip currentStreak so we never read the
    // clock on the server (Next.js flags `new Date()` in prerendered components).
    if (store === null) {
      return { ready: false, current: 0, best: 0, recordSession };
    }
    return {
      ready: true,
      current: currentStreak(store.days),
      best: bestStreak(store.days),
      recordSession,
    };
  }, [store, recordSession]);

  return (
    <StreakContext.Provider value={value}>{children}</StreakContext.Provider>
  );
}
