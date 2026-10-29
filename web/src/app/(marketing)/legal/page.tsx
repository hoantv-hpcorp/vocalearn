import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & terms",
  description:
    "How WordStack handles your data, written in plain language, plus the terms for using the site.",
};

export default function LegalPage() {
  return (
    <main id="main" className="legal-shell">
      <p className="eyebrow">Legal · plain language</p>
      <h1>Privacy and terms.</h1>
      <p className="legal-meta">Last updated 28 October 2026</p>

      <div className="legal-callout">
        <p>
          <strong>About this document.</strong> This is a prototype draft written
          to be read, not skimmed. It follows the spirit of PDPA (Singapore),
          APPI (Japan), and PIPL (China): collect little, explain why, and let
          people delete what they shared.
        </p>
      </div>

      <h2 id="privacy">Privacy policy</h2>
      <p>
        WordStack exists to help you learn words. To do that, it needs to
        remember a small amount about your progress — and almost nothing else.
      </p>

      <h3>What we store</h3>
      <ul>
        <li>Your email address, so you can sign in and recover your account.</li>
        <li>Your level check result and the packs you have started.</li>
        <li>
          Your review history: which words you saw, when, and how you graded
          them.
        </li>
        <li>
          Words you save to My Words, and your first-language preference for
          glosses.
        </li>
        <li>
          An approximate region, such as “Singapore”, from your browser settings
          — not your precise location.
        </li>
      </ul>

      <h3>Why we store it</h3>
      <p>
        Your review history is the product. Spaced repetition only works if the
        site knows when a word is due. Saved words and pack progress let you pick
        up where you left off. We do not build advertising profiles or sell data
        to third parties.
      </p>

      <h3>What we do not do</h3>
      <ul>
        <li>We do not sell personal data.</li>
        <li>We do not use third-party advertising trackers.</li>
        <li>We do not ask for your phone number, address, or employer.</li>
        <li>We do not send marketing email unless you opt in separately.</li>
      </ul>

      <h3>Your choices</h3>
      <p>
        You can export your saved words and review history from the Progress
        page, and you can delete your account at any time. Deleting an account
        removes its learning data within 30 days; encrypted backups may take up
        to 90 days to expire. You can use the free starter pack without creating
        an account.
      </p>

      <h3>Retention and security</h3>
      <p>
        Active accounts keep their data until deletion. Data is transmitted over
        HTTPS and stored on servers in Singapore. Access is limited to the people
        who run the service, and we keep an audit log of account access.
      </p>

      <h3>Contact</h3>
      <p>
        Questions about privacy:{" "}
        <a className="link" href="mailto:privacy@wordstack.example">
          privacy@wordstack.example
        </a>
        . If your local law gives you a specific right — access, correction,
        portability, or objection — say so in the message and we will respond
        within 30 days.
      </p>

      <h2 id="terms">Terms of use</h2>
      <p>
        By using WordStack, you agree to these terms. They are written to be
        understood, not to hide anything in the footnotes.
      </p>

      <h3>The service</h3>
      <p>
        WordStack offers a free tier with the level check, one starter pack,
        daily review, and progress tracking. Paid packs, if introduced, add more
        situations and words. Prices shown during the prototype are illustrative
        and will be confirmed before any charge.
      </p>

      <h3>Your account</h3>
      <p>
        Keep one account per person and keep your sign-in details safe. Tell us
        promptly if you think someone else has access. You are responsible for
        activity under your account.
      </p>

      <h3>Content and use</h3>
      <p>
        Word packs, explanations, and example sentences are for your personal
        learning. Do not resell them, publish them as your own, or scrape the site
        to build a competing product. Short quotations for teaching or review are
        fine.
      </p>

      <h3>Availability and results</h3>
      <p>
        We aim to keep the site available and your progress safe, but we cannot
        promise uninterrupted service. WordStack is a learning tool, not a
        guarantee of a test score, a job offer, or a promotion.
      </p>

      <h3>Changes</h3>
      <p>
        If these terms change in a meaningful way, we will show a notice in the
        product before the change takes effect. Continuing to use WordStack after
        that means you accept the updated terms.
      </p>

      <h3>Contact and governing law</h3>
      <p>
        Questions about these terms:{" "}
        <a className="link" href="mailto:hello@wordstack.example">
          hello@wordstack.example
        </a>
        . These terms are governed by the laws of Singapore, without regard to
        conflict-of-law rules.
      </p>
    </main>
  );
}
