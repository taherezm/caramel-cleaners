import type { Metadata } from "next";
import ArrowIcon from "../components/arrow-icon";
import BookingEmbed from "../components/booking-embed";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Book Your Clean",
  description:
    "Customize your Caramel Cleaners service, see your price, and book online.",
};

function getBookingEmbedUrl() {
  const value = process.env.NEXT_PUBLIC_BOOKINGKOALA_EMBED_URL?.trim();

  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export default function BookingPage() {
  const bookingEmbedUrl = getBookingEmbedUrl();

  return (
    <>
      <a className="skip-link" href="#booking-form">
        Skip to booking
      </a>

      <div className="site-shell booking-site-shell">
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
          <a className="text-link header-back-link" href="../#services">
            Compare services <ArrowIcon direction="down-left" />
          </a>
        </header>

        <main className="booking-main" id="booking-form">
          <section className="booking-intro" aria-labelledby="booking-heading">
            <div className="booking-intro-heading">
              <div>
                <p className="section-kicker">Book your clean</p>
                <h1 id="booking-heading">
                  Customize your cleaning, see your price, and book online.
                </h1>
              </div>
              <LogoMark
                src="../brand-mark.png"
                className="logo-mark-booking"
                label="Animate the Caramel Cleaners booking logo"
              />
            </div>
            <ul className="booking-trust" aria-label="Booking benefits">
              <li>Upfront pricing</li>
              <li>Flexible scheduling</li>
              <li>Secure online booking</li>
            </ul>
            <p className="booking-note">
              Tell us about your home as accurately as you can. If its size or
              condition differs materially from the booking details, we will
              review any pricing adjustment with you before additional work
              begins.
            </p>
          </section>

          <BookingEmbed embedUrl={bookingEmbedUrl} />
        </main>

        <footer className="site-footer booking-footer">
          <div className="brand footer-brand">
            <LogoMark src="../brand-mark.png" className="logo-mark-footer" />
            <a className="brand-name" href="../">
              Caramel Cleaners
            </a>
          </div>
          <p>© 2026 Caramel Cleaners. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
