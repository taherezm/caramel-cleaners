import type { Metadata } from "next";
import ArrowIcon from "../components/arrow-icon";
import BookingEmbed from "../components/booking-embed";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Book Your Clean",
  description:
    "Book one-time or recurring home cleaning in Carmel, Westfield, Zionsville, Noblesville, or Fishers with Caramel Cleaners.",
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
          <a className="text-link header-back-link" href="../">
            Back to Home <ArrowIcon direction="down-left" />
          </a>
        </header>

        <main className="booking-main" id="booking-form">
          <section className="booking-intro" aria-labelledby="booking-heading">
            <div className="booking-intro-heading" data-reveal="up">
              <div>
                <p className="section-kicker">Book your clean</p>
                <h1 id="booking-heading">
                  Customize your clean, see your price, and book online.
                </h1>
              </div>
              <LogoMark
                src="../brand-mark.png"
                className="logo-mark-booking"
                label="Animate the Caramel Cleaners booking logo"
              />
            </div>
            <p
              className="booking-contact-note"
              data-reveal="up"
              data-reveal-delay="60"
            >
              Questions, event cleans, special requests, partnerships, or
              larger recurring needs? Email{" "}
              <a href="mailto:contact@caramelcleaners.com">
                contact@caramelcleaners.com
              </a>{" "}
              or text <a href="sms:+14632244181">(463) 224-4181</a>. (We
              respond fast.)
            </p>
          </section>

          <div data-reveal="up">
            <BookingEmbed embedUrl={bookingEmbedUrl} />
          </div>
        </main>

        <footer className="site-footer booking-footer" data-reveal="up">
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
            <a href="sms:+14632244181">Text: (463) 224-4181</a>
            <p>© 2026 Caramel Cleaners LLC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
