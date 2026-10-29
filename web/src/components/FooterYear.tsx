"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function FooterYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );

  return <>{year}</>;
}
