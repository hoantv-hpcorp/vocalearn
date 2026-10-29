import type { Metadata } from "next";
import { PackExplorer } from "@/components/PackExplorer";
import { getPackSummaries } from "@/lib/packs";

export const metadata: Metadata = {
  title: "Word packs",
  description:
    "Browse workplace English word packs by situation and industry. Meetings, emails, interviews, finance, tech, and more — each a small, finishable set.",
};

export default function PacksPage() {
  return (
    <main id="main">
      <PackExplorer packs={getPackSummaries()} />
    </main>
  );
}
