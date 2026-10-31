import { AccountMenu } from "@/components/AccountMenu";
import { AppHeader } from "@/components/AppHeader";
import { TabBar } from "@/components/TabBar";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="has-tabbar">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AppHeader account={<AccountMenu />} />
      {children}
      <TabBar />
    </div>
  );
}
