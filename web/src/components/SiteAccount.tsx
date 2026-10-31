"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Icon } from "@/components/Icon";

type Props = {
  variant: "desktop" | "mobile";
};

export function SiteAccount({ variant }: Props) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return null;
  }

  if (variant === "desktop") {
    if (!user) {
      return (
        <a className="header-login" href="/auth/login?returnTo=/dashboard">
          Log in
        </a>
      );
    }

    return (
      <>
        <a className="header-login" href="/dashboard">
          Dashboard
        </a>
        <a className="header-login" href="/auth/logout">
          Sign out
        </a>
      </>
    );
  }

  if (!user) {
    return (
      <a href="/auth/login?returnTo=/dashboard">
        Log in <Icon name="chevron-right" className="icon icon-sm" />
      </a>
    );
  }

  return (
    <>
      <a href="/dashboard">
        Dashboard <Icon name="chevron-right" className="icon icon-sm" />
      </a>
      <a href="/auth/logout">
        Sign out <Icon name="chevron-right" className="icon icon-sm" />
      </a>
    </>
  );
}
