"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const links = [
  { label: "Learn", href: "/packs" },
  { label: "Method", href: "/#method" },
  { label: "Word of the day", href: "/word" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader({
  account,
  mobileAccount,
}: {
  account?: ReactNode;
  mobileAccount?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="WordStack home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          WordStack
        </Link>
        <nav className="main-nav" aria-label="Primary">
          {links.map((link) => {
            const active =
              (link.href === "/packs" && pathname.startsWith("/pack")) ||
              (link.href === "/word" && pathname === "/word");
            return (
              <Link
                key={link.href}
                className="nav-link"
                href={link.href}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          {account}
          <Link className="btn btn--primary btn--sm" href="/placement">
            Start free
            <Icon name="arrow-right" className="icon icon--nudge" />
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-panel"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <div className={`mobile-panel${open ? " is-open" : ""}`} id="mobile-panel">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label} <Icon name="chevron-right" className="icon icon-sm" />
          </Link>
        ))}
        {mobileAccount}
      </div>
    </header>
  );
}
