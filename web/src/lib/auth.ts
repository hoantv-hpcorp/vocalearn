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
