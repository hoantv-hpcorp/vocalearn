"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Icon } from "./Icon";
import { guestNavLinks, userNavLinks, type NavLink } from "./nav";

function isActive(link: NavLink, pathname: string) {
  if (link.href.startsWith("/#")) return false;
  if (link.href === "/packs") return pathname.startsWith("/pack");
  return pathname === link.href;
}

export function SiteHeader({ account }: { account?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();
  const signedIn = Boolean(user);
  const links = signedIn ? userNavLinks : guestNavLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${signedIn ? " site-header--app" : ""}${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="wrap header-inner">
        <Link
          className="brand"
          href={signedIn ? "/dashboard" : "/"}
          aria-label="WordStack home"
        >
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          WordStack
        </Link>
        <nav className="main-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              className="nav-link"
              href={link.href}
              aria-current={isActive(link, pathname) ? "page" : undefined}
            >
              {link.label}
              {link.badge ? <span className="dot-badge">{link.badge}</span> : null}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          {signedIn ? (
            <>
              <Link className="streak-pill" href="/progress">
                <Icon name="flame" />
                12-day
              </Link>
              {account}
            </>
          ) : (
            <>
              <a className="header-login" href="/auth/login?returnTo=/dashboard">
                Log in
              </a>
              <Link className="btn btn--primary btn--sm" href="/placement">
                Start free
                <Icon name="arrow-right" className="icon icon--nudge" />
              </Link>
            </>
          )}
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
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <span className="mobile-panel-label">
              {link.label}
              {link.badge ? <span className="dot-badge">{link.badge}</span> : null}
            </span>
            <Icon name="chevron-right" className="icon icon-sm" />
          </Link>
        ))}
        {signedIn ? (
          <a href="/auth/logout" onClick={() => setOpen(false)}>
            Sign out <Icon name="chevron-right" className="icon icon-sm" />
          </a>
        ) : (
          <a
            href="/auth/login?returnTo=/dashboard"
            onClick={() => setOpen(false)}
          >
            Log in <Icon name="chevron-right" className="icon icon-sm" />
          </a>
        )}
      </div>
    </header>
  );
}
