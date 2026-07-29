import type { Metadata } from "next";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Booking Received",
  description: "Your Caramel Cleaners booking has been received.",
};

export default function ThankYouPage() {
  return (
    <div className="site-shell confirmation-shell">
      <header className="site-header compact-header">
        <div className="brand">
          <LogoMark src="../brand-mark.png" className="logo-mark-header" />
          <a
            className="brand-wordmark-frame"
            href="../"
            aria-label="Caramel Cleaners home"
          >
            <img src="../brand-wordmark.png" alt="Caramel Cleaners" />
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
        <a className="button button-dark" href="../">
          Return home <span aria-hidden="true">↗</span>
        </a>
      </main>
    </div>
  );
}
