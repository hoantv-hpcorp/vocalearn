import { MarketingShell } from "@/components/MarketingShell";
import { SiteAccount } from "@/components/SiteAccount";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <MarketingShell>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader
        account={<SiteAccount variant="desktop" />}
        mobileAccount={<SiteAccount variant="mobile" />}
      />
      {children}
      <SiteFooter />
    </MarketingShell>
  );
}
