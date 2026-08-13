import type { Metadata } from "next";
import CustomerPortalEmbed from "../components/customer-portal-embed";
import FooterLinks from "../components/footer-links";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

const BOOKINGKOALA_LOGIN_URL =
  "https://caramelcleaners.bookingkoala.com/login?embed=true";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Sign in to manage your Caramel Cleaners appointments, recurring service, and saved payment methods.",
  alternates: {
    canonical: "/account/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

function getCustomerPortalUrl() {
  const value = process.env.NEXT_PUBLIC_BOOKINGKOALA_LOGIN_URL?.trim();

  if (!value) {
    return BOOKINGKOALA_LOGIN_URL;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : BOOKINGKOALA_LOGIN_URL;
  } catch {
    return BOOKINGKOALA_LOGIN_URL;
  }
}

export default function AccountPage() {
  const customerPortalUrl = getCustomerPortalUrl();

  return (
    <>
      <a className="skip-link" href="#client-login">
        Skip to client login
      </a>

      <div className="site-shell portal-site-shell">
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
          <a className="text-link header-back-link" href="../">
            Back to Home
          </a>
        </header>

        <main className="booking-main portal-main" id="client-login">
          <section className="booking-intro portal-intro" aria-labelledby="portal-heading">
            <div className="booking-intro-heading">
              <div>
                <p className="section-kicker">For existing clients</p>
                <h1 id="portal-heading">
                  Manage your clean in one secure place.
                </h1>
              </div>
              <LogoMark
                src="../brand-mark.png"
                className="logo-mark-booking"
                label="Animate the Caramel Cleaners client portal logo"
              />
            </div>
            <p className="portal-intro-copy">
              Sign in with the email connected to your booking. Your BookingKoala
              dashboard gives you one place to manage upcoming appointments,
              recurring service, and saved payment methods.
            </p>
          </section>

          <div className="portal-benefits" aria-label="Client portal features">
            <article>
              <span>01</span>
              <h2>Upcoming cleans</h2>
              <p>Review appointment details and available schedule options.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Recurring service</h2>
              <p>Manage your recurring cleaning plan using enabled account options.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Payment methods</h2>
              <p>Securely add or update the cards connected to your account.</p>
            </article>
          </div>

          <p className="portal-security-note">
            First time signing in? Use the account-setup option in the secure
            form and enter the same email address used for your booking. Login,
            booking, and card information is handled by BookingKoala and Stripe.
          </p>

          <CustomerPortalEmbed embedUrl={customerPortalUrl} />
        </main>

        <footer className="site-footer booking-footer">
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
            <a href="../book/">Book a new clean</a>
            <a href="../checklist/">Cleaning checklist</a>
            <a href="../faq/">Frequently asked questions</a>
            <FooterLinks current="account" rootHref="../" />
            <p>© 2026 Caramel Cleaners LLC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
