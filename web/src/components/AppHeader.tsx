"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

export function AppHeader({ account }: { account?: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Today", href: "/dashboard" },
    { label: "Learn", href: "/packs" },
    { label: "Review", href: "/session", badge: "9" },
    { label: "Progress", href: "/progress" },
  ];

  return (
    <header className={`app-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link className="brand" href="/dashboard" aria-label="WordStack home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          WordStack
        </Link>
        <nav className="app-nav" aria-label="Product">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
              {item.badge ? <span className="dot-badge">{item.badge}</span> : null}
            </Link>
          ))}
        </nav>
        <div className="app-tools">
          <Link className="streak-pill" href="/progress">
            <Icon name="flame" />
            12-day
          </Link>
          {account}
        </div>
      </div>
    </header>
  );
}
