import { Suspense } from "react";
import { AccountMenu } from "@/components/AccountMenu";
import { AppHeader } from "@/components/AppHeader";
import { TabBar } from "@/components/TabBar";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="has-tabbar">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AppHeader
        account={
          <Suspense
            fallback={
              <span className="app-user app-user--loading" aria-hidden="true" />
            }
          >
            <AccountMenu />
          </Suspense>
        }
      />
      {children}
      <TabBar />
    </div>
  );
}
