import { Suspense } from "react";
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
        account={
          <Suspense fallback={null}>
            <SiteAccount variant="desktop" />
          </Suspense>
        }
        mobileAccount={
          <Suspense fallback={null}>
            <SiteAccount variant="mobile" />
          </Suspense>
        }
      />
      {children}
      <SiteFooter />
    </MarketingShell>
  );
}
