export type UserIdentity = {
  name?: string | null;
  email?: string | null;
};

function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getUserDisplayName(user: UserIdentity): string {
  const name = user.name?.trim();
  if (name && !name.includes("@")) {
    return name;
  }

  const emailLocal = user.email?.split("@")[0]?.split(/[._-]/)[0]?.trim();
  return emailLocal ? titleCase(emailLocal) : "Visitor";
}

export function getUserFirstName(user: UserIdentity): string {
  return titleCase(getUserDisplayName(user).split(/\s+/)[0]);
}
