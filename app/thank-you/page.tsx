import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Booking Received",
  description: "Your Caramel Cleaners booking has been received.",
};

export default function ThankYouPage() {
  return (
    <div className="site-shell confirmation-shell">
      <header className="site-header compact-header">
        <a className="brand" href="../" aria-label="Caramel Cleaners home">
          <span className="brand-mark-frame" aria-hidden="true">
            <img src="../brand-mark.png" alt="" />
          </span>
          <span className="brand-wordmark-frame">
            <img src="../brand-wordmark.png" alt="Caramel Cleaners" />
          </span>
        </a>
      </header>

      <main className="confirmation-main">
        <div className="confirmation-mark" aria-hidden="true">
          <img src="../brand-mark.png" alt="" />
        </div>
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
