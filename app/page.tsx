import ArrowIcon from "./components/arrow-icon";
import LogoMark from "./components/logo-mark";
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
    number: "01",
    title: "Routine Clean",
    description:
      "A dependable reset for homes that receive regular professional care.",
    includes: [
      "Kitchen surfaces and appliance exteriors",
      "Bathroom fixtures and surfaces",
      "Dusting, floors, and a general room reset",
    ],
  },
  {
    number: "02",
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
    number: "03",
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
            <SectionLink targetId="standards">Our standards</SectionLink>
            <SectionLink targetId="services">Services</SectionLink>
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
              <h1 id="hero-heading">
                A cleaner home,
                <br />
                <span>without the guesswork.</span>
              </h1>
              <p className="hero-lede">
                Compare your options, customize the details, and book your
                clean online, all without waiting for a quote.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-caramel"
                  href="./book/"
                  data-analytics-event="book_now_click"
                >
                  Book now <ArrowIcon />
                </a>
                <SectionLink className="text-link" targetId="how-it-works">
                  See how it works <ArrowIcon direction="down" />
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

            <ol
              className="process-steps"
              id="how-it-works"
              tabIndex={-1}
            >
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
                    Liability coverage is maintained for added protection in
                    the unlikely event of accidental property damage during
                    your appointment.
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
              <h2 id="services-heading">Start with the clean you need.</h2>
              <p>
                Every home is different. Choose a starting point, then
                personalize the rooms and details that matter to you.
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
          <p>© 2026 Caramel Cleaners. All rights reserved.</p>
        </footer>
      </div>

      <aside className="mobile-book-dock" aria-label="Quick booking">
        <span>
          <strong>Ready for a reset?</strong>
          <small>See your price online.</small>
        </span>
        <a
          href="./book/"
          data-analytics-event="book_now_click"
          aria-label="Book your clean"
        >
          Book now <ArrowIcon />
        </a>
      </aside>
    </>
  );
}
