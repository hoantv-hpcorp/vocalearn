import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./styles/base.css";
import "./styles/marketing.css";
import "./styles/app.css";
import { IconSprite } from "@/components/IconSprite";
import { ToastProvider } from "@/components/ToastProvider";
import { SaveProvider } from "@/components/SaveProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: {
    default: "WordStack — the English you use at work, 5 minutes a day",
    template: "%s — WordStack",
  },
  description:
    "Build the English you need for meetings, emails, and interviews in five minutes a day. Start at your level, learn words in real situations, and review them at the right time.",
};

export const viewport: Viewport = {
  themeColor: "#f5f0e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <IconSprite />
        <ToastProvider>
          <SaveProvider>{children}</SaveProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
