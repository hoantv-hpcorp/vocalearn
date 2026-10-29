"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

export function TabBar() {
  const pathname = usePathname();
  const current = (href: string) =>
    pathname === href ? ("page" as const) : undefined;

  return (
    <nav className="tabbar" aria-label="Product">
      <Link href="/dashboard" aria-current={current("/dashboard")}>
        <Icon name="home" />
        Today
      </Link>
      <Link href="/packs" aria-current={current("/packs")}>
        <Icon name="book" />
        Learn
      </Link>
      <Link href="/session" aria-current={current("/session")}>
        <span className="tabbar-due" aria-hidden="true">
          9
        </span>
        <Icon name="cards" />
        Review<span className="sr-only">, 9 cards due</span>
      </Link>
      <Link href="/progress" aria-current={current("/progress")}>
        <Icon name="chart" />
        Progress
      </Link>
      <Link href="/word" aria-current={current("/word")}>
        <Icon name="bookmark" />
        Word
      </Link>
    </nav>
  );
}
