import CleanBuilder from "./components/clean-builder";

export const dynamic = "force-static";

const processSteps = [
  {
    number: "01",
    title: "Choose your clean",
    description: "Pick the service that best matches your home today.",
  },
  {
    number: "02",
    title: "Make it yours",
    description: "Add your home details and the areas that need extra care.",
  },
  {
    number: "03",
    title: "Choose a time",
    description: "Review your plan, see availability, and book in one place.",
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
            <a href="#how-it-works">How it works</a>
            <a href="#book-clean">Build your clean</a>
          </nav>

          <a className="button button-small button-dark" href="#book-clean">
            Start now <span aria-hidden="true">↗</span>
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
                See exactly how your clean works, shape it around your home, and
                move from “I need help” to a clear plan in minutes.
              </p>

              <div className="hero-actions">
                <a className="button button-caramel" href="#book-clean">
                  Build your clean <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#how-it-works">
                  See how it works <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-brand-art" aria-hidden="true">
              <span className="hero-mark-frame">
                <img src="./brand-mark.png" alt="" />
              </span>
              <span className="hero-art-ring hero-art-ring-one" />
              <span className="hero-art-ring hero-art-ring-two" />
            </div>

            <ol className="process-steps" id="how-it-works">
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

          <section className="builder-section" id="book-clean">
            <div className="builder-intro">
              <p>Ready when you are</p>
              <h2>Build a clean around your home.</h2>
              <p>
                Start with a service, add a few home details, and review your
                plan without leaving the page.
              </p>
              <div className="builder-assurance">
                <span aria-hidden="true">✓</span>
                <p>
                  No commitment while you build. Pricing and scheduling will
                  appear before you book.
                </p>
              </div>
            </div>

            <CleanBuilder />
          </section>

          <section className="closing-section">
            <div className="closing-mark" aria-hidden="true">
              <img src="./brand-mark.png" alt="" />
            </div>
            <div>
              <p>Thoughtfully planned. Thoroughly cleaned.</p>
              <h2>Come home to more room to breathe.</h2>
            </div>
            <a className="button button-dark" href="#book-clean">
              Start your clean <span aria-hidden="true">↑</span>
            </a>
          </section>
        </main>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark-frame" aria-hidden="true">
              <img src="./brand-mark.png" alt="" />
            </span>
            <span className="footer-brand-name">Caramel Cleaners</span>
          </a>
          <p>© 2026 Caramel Cleaners. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
