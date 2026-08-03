import ArrowIcon from "./components/arrow-icon";
import LogoMark from "./components/logo-mark";
import MobileBookDock from "./components/mobile-book-dock";
import SectionLink from "./components/section-link";

export const dynamic = "force-static";

const processSteps = [
  {
    number: "01",
    title: "Choose your clean",
    description: "Compare the three services and choose the right starting point.",
  },
  {
    number: "02",
    title: "Tell us about your home",
    description: "Share its size, bathrooms, condition, and any useful details.",
  },
  {
    number: "03",
    title: "See your price and book",
    description: "Choose a date, review the total, and confirm securely online.",
  },
];

const services = [
  {
    number: "1",
    title: "Routine Clean",
    description:
      "The ongoing upkeep visit for homes that already have a clean baseline.",
    includes: [
      "Kitchen surfaces and appliance exteriors",
      "Bathroom fixtures and surfaces",
      "Dusting, floors, and a general room reset",
    ],
  },
  {
    number: "2",
    title: "Detailed / First Clean",
    description:
      "A top-to-bottom refresh for first visits or spaces needing extra attention.",
    tag: "Most popular",
    includes: [
      "Everything included in a Routine Clean",
      "Baseboards, doors, trim, and detail areas",
      "Extra attention to buildup throughout the home",
    ],
  },
  {
    number: "3",
    title: "Move-In / Move-Out Clean",
    description:
      "A detailed clean designed for an empty home and a smoother transition.",
    includes: [
      "Detailed cleaning of an empty home",
      "Inside empty cabinets and drawers",
      "Kitchen, bathroom, floors, and baseboards",
    ],
  },
];

const recurringPlans = [
  {
    cadence: "Weekly",
    discount: "15%",
    label: "Best recurring rate",
    description:
      "For busy homes that feel best with a consistently clean baseline.",
  },
  {
    cadence: "Every two weeks",
    discount: "10%",
    label: "Most popular schedule",
    description:
      "The easiest balance of ongoing upkeep, value, and breathing room.",
    popular: true,
  },
  {
    cadence: "Every four weeks",
    discount: "5%",
    label: "Monthly rhythm",
    description:
      "A dependable monthly reset that still rewards a regular schedule.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell home-site-shell" id="top">
        <header className="site-header">
          <div className="brand">
            <LogoMark
              src="./brand-mark.png"
              className="logo-mark-header"
              href="./"
            />
            <SectionLink
              className="brand-name"
              targetId="top"
              ariaLabel="Caramel Cleaners home"
            >
              Caramel Cleaners
            </SectionLink>
          </div>

          <nav className="site-nav" aria-label="Primary navigation">
            <SectionLink targetId="how-it-works">How it works</SectionLink>
            <SectionLink targetId="services">Services</SectionLink>
            <SectionLink targetId="recurring">Recurring plans</SectionLink>
            <SectionLink targetId="contact">Contact</SectionLink>
          </nav>

          <a
            className="button button-small button-dark"
            href="./book/"
            data-analytics-event="book_now_click"
          >
            Book now <ArrowIcon />
          </a>
        </header>

        <main id="main-content">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="hero-location">
                Now cleaning homes in Carmel, Westfield, Zionsville,
                Noblesville, and Fishers, Indiana
              </p>
              <h1 id="hero-heading">
                A cleaner home,
                <br />
                <span>without the guesswork.</span>
              </h1>
              <p className="hero-lede">
                Book a one-time clean or choose a recurring schedule that saves
                you up to 15% on every visit.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-caramel"
                  href="./book/"
                  data-analytics-event="book_now_click"
                >
                  Book now <ArrowIcon />
                </a>
                <SectionLink className="text-link" targetId="recurring">
                  Explore recurring plans <ArrowIcon direction="down" />
                </SectionLink>
              </div>
            </div>

            <div className="hero-brand-art">
              <LogoMark
                src="./brand-mark.png"
                className="logo-mark-hero"
                label="Animate the large Caramel Cleaners logo"
              />
              <span className="hero-art-ring hero-art-ring-one" />
              <span className="hero-art-ring hero-art-ring-two" />
            </div>

            <ol className="process-steps" id="how-it-works" tabIndex={-1}>
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <div>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="trust-section"
            id="standards"
            aria-labelledby="trust-heading"
            tabIndex={-1}
          >
            <div className="trust-copy">
              <p className="trust-kicker">Trust is part of the service</p>
              <h2 id="trust-heading">
                The person entering your home matters.
              </h2>
              <p>
                A clean home should come with peace of mind. Every Caramel
                Cleaner is carefully vetted, extensively
                background-checked, and covered by liability insurance before
                they are trusted in a client’s home.
              </p>
              <a
                className="trust-link"
                href="./book/"
                data-analytics-event="book_now_click"
              >
                Book with confidence <ArrowIcon />
              </a>
            </div>

            <ol className="trust-standards" aria-label="Cleaner standards">
              <li>
                <span>01</span>
                <div>
                  <h3>Carefully vetted</h3>
                  <p>
                    Each cleaner is evaluated for professionalism, reliability,
                    clear communication, and respect for a client’s space
                    before joining our team.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Extensive background checks</h3>
                  <p>
                    Identity and criminal-history screening are completed
                    before a cleaner is approved to work inside a client’s
                    home.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Liability insured</h3>
                  <p>
                    Covered by a $1,000,000 general liability policy for added
                    protection in the unlikely event of accidental property
                    damage during your appointment.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section
            className="services-section"
            id="services"
            aria-labelledby="services-heading"
            tabIndex={-1}
          >
            <div className="section-heading">
              <h2 id="services-heading">Choose how your cleaning starts.</h2>
              <p>
                New recurring clients typically begin with a Detailed / First
                Clean, then move into Routine Clean on their preferred schedule.
                Move-In / Move-Out is available for one-time transitions.
              </p>
            </div>

            <div className="service-comparison">
              {services.map((service) => (
                <article
                  className={
                    service.tag ? "service-tier service-tier-featured" : "service-tier"
                  }
                  key={service.title}
                >
                  <div className="service-tier-top">
                    <span className="service-number">{service.number}</span>
                    {service.tag ? (
                      <span className="service-tag">{service.tag}</span>
                    ) : null}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <details>
                    <summary>
                      <span>What’s included</span>
                      <span
                        className="service-summary-action"
                        aria-hidden="true"
                      >
                        <span className="service-summary-action-closed">
                          View
                        </span>
                        <span className="service-summary-action-open">
                          Hide
                        </span>
                        <span className="service-summary-chevron" />
                      </span>
                    </summary>
                    <ul>
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                  <a
                    className="service-book-link"
                    href="./book/"
                    data-analytics-event="book_now_click"
                  >
                    Book now <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section
            className="recurring-section"
            id="recurring"
            aria-labelledby="recurring-heading"
            tabIndex={-1}
          >
            <div className="recurring-heading">
              <div>
                <p className="recurring-kicker">Recurring cleaning</p>
                <h2 id="recurring-heading">More consistency. Less per visit.</h2>
              </div>
              <div className="recurring-intro">
                <p>
                  Choose the rhythm that fits your home. Your recurring savings
                  are applied automatically when you select a frequency during
                  booking.
                </p>
              </div>
            </div>

            <div
              className="recurring-plans"
              aria-label="Recurring cleaning plan comparison"
            >
              {recurringPlans.map((plan) => (
                <article
                  className="recurring-plan"
                  key={plan.cadence}
                >
                  <div className="recurring-plan-label">
                    <span>{plan.label}</span>
                    {plan.popular ? (
                      <span className="recurring-popular">Popular</span>
                    ) : null}
                  </div>
                  <h3>{plan.cadence}</h3>
                  <p className="recurring-discount">
                    <strong>{plan.discount}</strong>
                    <span>off each visit</span>
                  </p>
                  <p className="recurring-description">{plan.description}</p>
                </article>
              ))}
            </div>

            <div className="recurring-bottom">
              <div>
                <p className="recurring-price">
                  <strong>
                    Routine Clean is $0.11 per square foot with a $149 minimum.
                  </strong>{" "}
                  Your discount is applied when you choose a recurring
                  frequency.
                </p>
                <p className="recurring-note">
                  Recurring service typically begins after a Detailed / First
                  Clean. Fixed extras are priced separately and are not
                  discounted.
                </p>
              </div>
              <a
                className="button button-caramel"
                href="./book/"
                data-analytics-event="book_now_click"
              >
                Start recurring service <ArrowIcon />
              </a>
            </div>
          </section>

          <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-heading"
            tabIndex={-1}
          >
            <div className="contact-heading">
              <p className="contact-kicker">Have something else in mind?</p>
              <h2 id="contact-heading">Let’s talk about the clean you need.</h2>
            </div>
            <div className="contact-details">
              <p>
                Planning an event, looking for a specific clean, or have a
                special request? Tell us what you’re working with and we’ll help
                you find the right approach.
              </p>
              <p>
                We also partner with realtors and companies on recurring,
                move-related, and larger-scale cleaning needs.
              </p>
              <p className="contact-methods-label">Email or text us at</p>
              <a
                className="contact-email"
                href="mailto:contact@caramelcleaners.com"
              >
                contact@caramelcleaners.com <ArrowIcon />
              </a>
              <p className="contact-text">
                <a href="sms:+14632244181">(463) 224-4181</a>
              </p>
              <p className="contact-response">
                P.S. We’re quick to respond!
              </p>
            </div>
          </section>

          <section className="closing-section">
            <LogoMark
              src="./brand-mark.png"
              className="logo-mark-closing"
              label="Animate the Caramel Cleaners closing logo"
            />
            <div>
              <p>Thoughtfully planned. Thoroughly cleaned.</p>
              <h2>Come home to a cleaner, calmer space.</h2>
            </div>
            <a
              className="button button-dark"
              href="./book/"
              data-analytics-event="book_now_click"
            >
              Book your clean <ArrowIcon />
            </a>
          </section>
        </main>

        <footer className="site-footer">
          <div className="brand footer-brand">
            <LogoMark src="./brand-mark.png" className="logo-mark-footer" />
            <SectionLink className="brand-name" targetId="top">
              Caramel Cleaners
            </SectionLink>
          </div>
          <div className="footer-meta">
            <a href="mailto:contact@caramelcleaners.com">
              contact@caramelcleaners.com
            </a>
            <a href="sms:+14632244181">Text: (463) 224-4181</a>
            <p>© 2026 Caramel Cleaners. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <MobileBookDock />
    </>
  );
}
