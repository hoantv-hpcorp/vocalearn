"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getUserDisplayName, getUserFirstName } from "@/lib/user-name";

function getInitials(displayName: string) {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function AccountMenu() {
  const { user, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!accountRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (isLoading) {
    return <span className="app-user app-user--loading" aria-hidden="true" />;
  }

  if (!user) return null;

  const displayName = getUserDisplayName(user);

  return (
    <div className="app-account" ref={accountRef}>
      <button
        ref={buttonRef}
        type="button"
        className="app-user"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${displayName} — account menu`}
        title={user.email ?? displayName}
        onClick={() => setOpen((value) => !value)}
      >
        {getInitials(displayName)}
      </button>
      {open ? (
        <div className="app-account-menu" role="menu">
          <p className="app-account-greeting">Hi {getUserFirstName(user)}</p>
          <a
            className="app-account-signout"
            href="/auth/logout"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Sign out
          </a>
        </div>
      ) : null}
    </div>
  );
}
