"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function MarketingShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageClass =
    pathname === "/word"
      ? "word-page has-mobile-cta"
      : pathname === "/pack"
        ? "pack-page has-mobile-cta"
        : undefined;

  return <div className={pageClass}>{children}</div>;
}
