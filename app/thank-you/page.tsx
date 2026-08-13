import type { Metadata } from "next";
import ArrowIcon from "../components/arrow-icon";
import LegalFooterLinks from "../components/legal-footer-links";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Booking Received",
  description: "Your Caramel Cleaners booking has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="site-shell confirmation-shell">
      <header className="site-header compact-header">
        <div className="brand">
          <LogoMark
            src="../brand-mark.png"
            className="logo-mark-header"
            href="../"
          />
          <a
            className="brand-name"
            href="../"
            aria-label="Caramel Cleaners home"
          >
            Caramel Cleaners
          </a>
        </div>
      </header>

      <main className="confirmation-main">
        <LogoMark
          src="../brand-mark.png"
          className="logo-mark-confirmation"
          label="Animate the Caramel Cleaners confirmation logo"
        />
        <p className="section-kicker">You’re all set</p>
        <h1>We received your booking.</h1>
        <p>
          Look for a confirmation with your appointment details. We look
          forward to making your home feel lighter.
        </p>
        <a
          className="button button-dark"
          href="../"
        >
          Return home <ArrowIcon />
        </a>
      </main>

      <footer className="site-footer confirmation-footer">
        <div className="brand footer-brand">
          <LogoMark src="../brand-mark.png" className="logo-mark-footer" />
          <a className="brand-name" href="../">
            Caramel Cleaners
          </a>
        </div>
        <div className="footer-meta">
          <a href="mailto:contact@caramelcleaners.com">
            contact@caramelcleaners.com
          </a>
          <LegalFooterLinks rootHref="../" />
          <p>© 2026 Caramel Cleaners LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
