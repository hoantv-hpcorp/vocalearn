"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useToast } from "./ToastProvider";

type SaveContextValue = {
  isSaved: (word: string) => boolean;
  toggle: (word: string, guest: boolean) => void;
};

const SaveContext = createContext<SaveContextValue | null>(null);

export function useSavedWords() {
  const context = useContext(SaveContext);
  if (!context) {
    throw new Error("useSavedWords must be used inside SaveProvider");
  }
  return context;
}

export function SaveProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const toggle = useCallback(
    (word: string, guest: boolean) => {
      const wasSaved = saved.has(word);
      const next = new Set(saved);
      if (wasSaved) {
        next.delete(word);
      } else {
        next.add(word);
      }
      setSaved(next);
      if (wasSaved) {
        toast("Removed from My Words.");
      } else {
        toast(
          guest
            ? "Saved for this visit. Sign up to keep it after this week."
            : "Saved to My Words. It will come back in tomorrow’s review.",
        );
      }
    },
    [saved, toast],
  );

  const isSaved = useCallback((word: string) => saved.has(word), [saved]);

  return (
    <SaveContext.Provider value={{ isSaved, toggle }}>
      {children}
    </SaveContext.Provider>
  );
}
