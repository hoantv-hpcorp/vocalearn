import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PlacementHeader } from "@/components/PlacementHeader";
import { PlacementQuiz } from "@/components/PlacementQuiz";

export const metadata: Metadata = {
  title: "2-minute level check",
  description:
    "Ten quick questions to find your starting point in workplace English. No scores, no wrong answers — just a starter pack that fits.",
};

export default function PlacementPage() {
  return (
    <div className="placement-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PlacementHeader />
      <main id="main" className="wrap placement-shell">
        <aside className="placement-intro">
          <p className="eyebrow">Start here</p>
          <h1>Find your starting point in two minutes.</h1>
          <p className="lede">
            Ten quick questions about the English you use at work. No scores, no
            wrong answers — just a starting pack that fits.
          </p>
          <ul className="placement-gifts">
            <li>
              <span className="check-dot">
                <Icon name="check" />
              </span>
              A level from foundation to upper intermediate
            </li>
            <li>
              <span className="check-dot">
                <Icon name="check" />
              </span>
              A named starter pack for your job
            </li>
            <li>
              <span className="check-dot">
                <Icon name="check" />
              </span>
              A first five-minute session, ready today
            </li>
          </ul>
          <span className="placement-stamp">
            <Icon name="clock" />
            10 questions · 2 minutes · no timer
          </span>
        </aside>

        <PlacementQuiz />
      </main>
    </div>
  );
}
