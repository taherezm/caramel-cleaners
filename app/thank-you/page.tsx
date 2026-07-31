import type { Metadata } from "next";
import ArrowIcon from "../components/arrow-icon";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Booking Received",
  description: "Your Caramel Cleaners booking has been received.",
};

export default function ThankYouPage() {
  return (
    <div className="site-shell confirmation-shell">
      <header
        className="site-header compact-header"
        data-reveal="down"
      >
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
          dataReveal="scale"
        />
        <p className="section-kicker" data-reveal="up">
          You’re all set
        </p>
        <h1 data-reveal="up" data-reveal-delay="60">
          We received your booking.
        </h1>
        <p data-reveal="up" data-reveal-delay="120">
          Look for a confirmation with your appointment details. We look
          forward to making your home feel lighter.
        </p>
        <a
          className="button button-dark"
          href="../"
          data-reveal="up"
          data-reveal-delay="180"
        >
          Return home <ArrowIcon />
        </a>
      </main>
    </div>
  );
}
