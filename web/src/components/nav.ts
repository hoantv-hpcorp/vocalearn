export type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

export const guestNavLinks: NavLink[] = [
  { label: "Method", href: "/#method" },
  { label: "FAQ", href: "/#faq" },
  { label: "All packs", href: "/packs" },
];

export const userNavLinks: NavLink[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Progress", href: "/progress" },
  { label: "Review", href: "/session", badge: "9" },
  { label: "All packs", href: "/packs" },
];
