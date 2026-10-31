import "server-only";
import { cache } from "react";
import { auth0 } from "./auth0";

export type AppUser = {
  name?: string;
  email?: string;
  picture?: string;
};

export const getCurrentUser = cache(async (): Promise<AppUser | null> => {
  const session = await auth0.getSession();
  if (!session?.user) {
    return null;
  }

  return {
    name: session.user.name,
    email: session.user.email,
    picture: session.user.picture,
  };
});

function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getUserDisplayName(user: AppUser): string {
  const name = user.name?.trim();
  if (name && !name.includes("@")) {
    return name;
  }

  const emailLocal = user.email?.split("@")[0]?.split(/[._-]/)[0]?.trim();
  return emailLocal ? titleCase(emailLocal) : "Visitor";
}

export function getUserFirstName(user: AppUser): string {
  return titleCase(getUserDisplayName(user).split(/\s+/)[0]);
}
