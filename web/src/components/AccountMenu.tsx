import Link from "next/link";
import { getCurrentUser, getUserDisplayName } from "@/lib/auth";

function getInitials(displayName: string) {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export async function AccountMenu() {
  const user = await getCurrentUser();
  if (!user) return null;

  const displayName = getUserDisplayName(user);

  return (
    <div className="app-account">
      <Link
        className="app-user"
        href="/progress"
        title={user.email ?? displayName}
        aria-label={`${displayName} — open progress`}
      >
        {getInitials(displayName)}
      </Link>
      <span className="app-account-name">{displayName}</span>
      <a className="app-signout" href="/auth/logout">
        Sign out
      </a>
    </div>
  );
}
