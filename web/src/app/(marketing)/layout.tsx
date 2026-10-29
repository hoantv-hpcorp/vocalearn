import { MarketingShell } from "@/components/MarketingShell";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <MarketingShell>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </MarketingShell>
  );
}
