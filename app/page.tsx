export const dynamic = "force-static";

const services = [
  {
    number: "01",
    title: "Regular clean",
    description:
      "A dependable reset for kitchens, bathrooms, bedrooms, and shared spaces.",
    tag: "Most popular",
  },
  {
    number: "02",
    title: "Deep clean",
    description:
      "A detailed top-to-bottom refresh for the places that need extra attention.",
  },
  {
    number: "03",
    title: "Move clean",
    description:
      "A thorough clean for the home you are leaving or the one you are entering.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your clean",
    description: "Start with the service that best matches your home today.",
  },
  {
    number: "02",
    title: "Make it yours",
    description: "Add the rooms, details, and priorities you want us to focus on.",
  },
  {
    number: "03",
    title: "Pick your time",
    description: "Choose a date that works and review your clean in one place.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell" id="top">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Caramel Cleaners home">
            <span className="brand-mark-frame" aria-hidden="true">
              <img src="./brand-mark.png" alt="" />
            </span>
            <span className="brand-wordmark-frame">
              <img src="./brand-wordmark.png" alt="Caramel Cleaners" />
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
          </nav>

          <a className="button button-small button-dark" href="#plan">
            Plan a clean <span aria-hidden="true">↗</span>
          </a>
        </header>

        <main id="main-content">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <h1 id="hero-heading">
                Clean spaces.
                <br />
                <span>Clear head.</span>
              </h1>
              <p className="hero-lede">
                Build a clean around your home, your priorities, and your
                schedule. Caramel Cleaners keeps every step simple.
              </p>

              <div className="hero-actions">
                <a className="button button-caramel" href="#plan">
                  Build your clean <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#services">
                  Explore services <span aria-hidden="true">↓</span>
                </a>
              </div>

            </div>

            <div className="booking-preview">
              <div className="preview-brand" aria-hidden="true">
                <span className="preview-mark-frame">
                  <img src="./brand-mark.png" alt="" />
                </span>
              </div>

              <div className="preview-copy">
                <p>Start your plan</p>
                <h2>A clean that fits your home.</h2>
              </div>

              <div className="preview-field">
                <span className="field-number">01</span>
                <div>
                  <span className="field-label">Choose a service</span>
                  <div className="service-options" aria-label="Service preview">
                    <span className="service-option selected">Regular</span>
                    <span className="service-option">Deep</span>
                    <span className="service-option">Move</span>
                  </div>
                </div>
              </div>

              <div className="preview-field">
                <span className="field-number">02</span>
                <div className="home-row">
                  <div>
                    <span className="field-label">Tell us about your home</span>
                    <strong>Rooms &amp; priorities</strong>
                  </div>
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </div>
              </div>

              <a className="preview-action" href="#plan">
                Continue your plan <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          <div className="promise-strip" aria-label="Our approach">
            <span>Easy to plan</span>
            <span className="strip-mark" aria-hidden="true">
              C
            </span>
            <span>Thoughtfully detailed</span>
            <span className="strip-mark" aria-hidden="true">
              C
            </span>
            <span>Made for your home</span>
          </div>

          <section className="section services-section" id="services">
            <div className="section-heading">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Our services
              </p>
              <h2>Start with the clean you need.</h2>
              <p>
                Every home is different. Choose a starting point, then
                personalize the rooms and details that matter to you.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article
                  className={`service-card${service.tag ? " service-card-featured" : ""}`}
                  key={service.number}
                >
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    {service.tag ? (
                      <span className="service-tag">{service.tag}</span>
                    ) : null}
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <a href="#plan" aria-label={`Plan a ${service.title}`}>
                    Plan this clean <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="section how-section" id="how-it-works">
            <div className="how-intro">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-line" aria-hidden="true" />
                How it works
              </p>
              <h2>From your list to done.</h2>
              <p>
                Tell us what your home needs. We turn your choices into one
                clear plan.
              </p>
            </div>

            <ol className="steps">
              {steps.map((step) => (
                <li key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="plan-section" id="plan">
            <div className="plan-mark" aria-hidden="true">
              <img src="./brand-mark.png" alt="" />
            </div>
            <div className="plan-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Your home. Your clean.
              </p>
              <h2>More room to breathe is on the way.</h2>
              <p>
                Online planning and booking are coming next. Soon you will be
                able to shape every detail of your clean right here.
              </p>
              <button className="button button-dark" type="button" disabled>
                Online booking coming soon
              </button>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark-frame" aria-hidden="true">
              <img src="./brand-mark.png" alt="" />
            </span>
            <span className="footer-brand-name">Caramel Cleaners</span>
          </a>
          <p>A better way to come home to clean.</p>
          <a href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </>
  );
}
