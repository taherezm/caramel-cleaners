export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell" id="top">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Caramel Cleaners home">
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span className="brand-name">Caramel Cleaners</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
          </nav>

          <a className="button button-small button-outline" href="#plan">
            Plan a clean
          </a>
        </header>

        <main id="main-content">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="eyebrow">
                <span aria-hidden="true">✦</span> Cleaning, thoughtfully planned
              </p>
              <h1 id="hero-heading">
                Come home
                <br />
                to <em>clean.</em>
              </h1>
              <p className="hero-lede">
                Build a clean around your home, your priorities, and your
                schedule. Caramel Cleaners makes every detail feel simple.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#plan">
                  Build your clean <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#how-it-works">
                  See how it works <span aria-hidden="true">↓</span>
                </a>
              </div>

              <ul className="hero-details" aria-label="Booking benefits">
                <li>
                  <span className="detail-dot" aria-hidden="true" />
                  Personalized plan
                </li>
                <li>
                  <span className="detail-dot" aria-hidden="true" />
                  Clear before you book
                </li>
                <li>
                  <span className="detail-dot" aria-hidden="true" />
                  Easy to adjust
                </li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Preview of a custom clean">
              <div className="sun-disc" aria-hidden="true" />
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <span className="sparkle sparkle-one" aria-hidden="true">
                ✦
              </span>
              <span className="sparkle sparkle-two" aria-hidden="true">
                ✦
              </span>

              <div className="clean-card">
                <div className="clean-card-header">
                  <div>
                    <p>Your clean</p>
                    <h2>Made for home</h2>
                  </div>
                  <span className="clean-card-step">01</span>
                </div>

                <div className="clean-card-body">
                  <p className="field-label">Choose a starting point</p>
                  <div className="service-options">
                    <span className="service-option selected">
                      <span aria-hidden="true">✦</span> Regular
                    </span>
                    <span className="service-option">Deep</span>
                    <span className="service-option">Move</span>
                  </div>

                  <div className="home-summary">
                    <div>
                      <span className="summary-label">Your home</span>
                      <strong>Tailored room by room</strong>
                    </div>
                    <span className="summary-icon" aria-hidden="true">
                      +
                    </span>
                  </div>

                  <div className="clean-note">
                    <span className="note-icon" aria-hidden="true">
                      ✓
                    </span>
                    <p>
                      Your estimate updates as you personalize every detail.
                    </p>
                  </div>
                </div>

                <div className="clean-card-footer">
                  <span>Continue</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </section>

          <div className="promise-strip" aria-label="Our approach">
            <span>Simple to plan</span>
            <span aria-hidden="true">✦</span>
            <span>Easy to personalize</span>
            <span aria-hidden="true">✦</span>
            <span>A better way to clean</span>
          </div>

          <section className="section services-section" id="services">
            <div className="section-heading">
              <p className="eyebrow">Choose your starting point</p>
              <h2>A clean for every kind of day.</h2>
              <p>
                Start with the service that fits, then make it yours with the
                rooms and details that matter most.
              </p>
            </div>

            <div className="service-grid">
              <article className="service-card service-card-featured">
                <div className="service-card-top">
                  <span className="service-number">01</span>
                  <span className="service-tag">Most popular</span>
                </div>
                <div>
                  <h3>Regular clean</h3>
                  <p>
                    A dependable reset for the spaces you live in every day.
                  </p>
                </div>
                <a href="#plan" aria-label="Plan a regular clean">
                  Plan this clean <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="service-card">
                <div className="service-card-top">
                  <span className="service-number">02</span>
                </div>
                <div>
                  <h3>Deep clean</h3>
                  <p>
                    Extra attention for the details that need a thorough
                    refresh.
                  </p>
                </div>
                <a href="#plan" aria-label="Plan a deep clean">
                  Plan this clean <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="service-card">
                <div className="service-card-top">
                  <span className="service-number">03</span>
                </div>
                <div>
                  <h3>Move clean</h3>
                  <p>
                    A fresh beginning for the home you are leaving or entering.
                  </p>
                </div>
                <a href="#plan" aria-label="Plan a move clean">
                  Plan this clean <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </section>

          <section className="section how-section" id="how-it-works">
            <div className="how-intro">
              <p className="eyebrow eyebrow-light">A simpler clean</p>
              <h2>From your to-do list to done.</h2>
              <p>
                Tell us what your home needs. We turn your choices into one
                clear plan.
              </p>
            </div>

            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Choose your clean</h3>
                  <p>Pick the service that best matches your home right now.</p>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Make it yours</h3>
                  <p>
                    Add the rooms, details, and extras you want us to focus on.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Pick your time</h3>
                  <p>
                    Choose a date that works and confirm everything in one
                    place.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section className="plan-section" id="plan">
            <div className="plan-art" aria-hidden="true">
              <span className="plan-ring plan-ring-one" />
              <span className="plan-ring plan-ring-two" />
              <span className="plan-sparkle">✦</span>
            </div>
            <div className="plan-copy">
              <p className="eyebrow">Your home. Your clean.</p>
              <h2>Ready for a little more room to breathe?</h2>
              <p>
                Online planning and booking are coming next. Soon, you will be
                able to shape every detail of your clean right here.
              </p>
              <button className="button button-primary" type="button" disabled>
                Online booking coming soon
              </button>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span className="brand-name">Caramel Cleaners</span>
          </a>
          <p>A thoughtful clean, made simple.</p>
          <p>© 2026 Caramel Cleaners</p>
        </footer>
      </div>
    </>
  );
}
