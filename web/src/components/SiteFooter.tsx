import Link from "next/link";
import { FooterYear } from "./FooterYear";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="WordStack home">
              <span className="brand-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              WordStack
            </Link>
            <p className="footer-note">
              Workplace English for busy professionals. Five minutes a day,
              reviewed at the right time so it stays.
            </p>
          </div>
          <div className="footer-col">
            <h3>Learn</h3>
            <Link href="/packs">Word packs</Link>
            <Link href="/pack/meetings-and-pushback">
              Meetings &amp; Pushback
            </Link>
            <Link href="/word">Word of the day</Link>
            <Link href="/session">Daily review</Link>
          </div>
          <div className="footer-col">
            <h3>Product</h3>
            <Link href="/placement">Level check</Link>
            <Link href="/#method">Our method</Link>
            <Link href="/progress">Progress</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <Link href="/#faq">FAQ</Link>
            <a href="mailto:hello@wordstack.example">Contact</a>
            <Link href="/legal">Privacy</Link>
            <Link href="/legal#terms">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <FooterYear /> WordStack</span>
          <span className="footer-fine">
            Design exploration v2. Prices, testimonials, and integrations are
            intentionally absent from this prototype.
          </span>
        </div>
      </div>
    </footer>
  );
}
