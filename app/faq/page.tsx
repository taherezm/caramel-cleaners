import type { Metadata } from "next";
import ArrowIcon from "../components/arrow-icon";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Caramel Cleaners services, pricing, supplies, scheduling, insurance, recurring cleaning, and our satisfaction promise.",
  alternates: {
    canonical: "/faq/",
  },
};

const faqSections = [
  {
    number: "01",
    title: "Services and pricing",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a wide range of cleaning services, including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, and more.",
      },
      {
        question: "How much will it cost to clean my home?",
        answer:
          "The cost depends on factors such as the size of your home, the type of cleaning required, and any additional services you may need. We offer customized quotes based on your specific needs.",
      },
      {
        question: "Do you offer recurring cleaning services?",
        answer:
          "Yes, we offer weekly, bi-weekly, and monthly cleaning services to help your home remain consistently clean.",
      },
    ],
  },
  {
    number: "02",
    title: "Your appointment",
    items: [
      {
        question: "Do you provide cleaning supplies?",
        answer:
          "Yes, we bring our own eco-friendly cleaning supplies and equipment. If you have specific products you prefer, we're happy to accommodate.",
      },
      {
        question: "Do I need to be present during the cleaning?",
        answer:
          "It's completely up to you. Many of our clients provide us with access to their homes, while others prefer to be present.",
      },
      {
        question: "How long will the cleaning take?",
        answer:
          "The duration depends on the size of your home and the extent of cleaning required. We can provide an estimated timeframe based on your specific needs.",
      },
      {
        question: "Can I schedule a cleaning on weekends or evenings?",
        answer:
          "Yes, we offer flexible scheduling options, including weekends and evenings, to accommodate your busy schedule.",
      },
    ],
  },
  {
    number: "03",
    title: "Trust and satisfaction",
    items: [
      {
        question: "Are your cleaners insured?",
        answer:
          "Yes, all our cleaners are fully insured for your peace of mind.",
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer:
          "Your satisfaction is our priority. If you're not happy with the cleaning, please let us know within 24 hours, and we'll gladly re-clean the areas in question at no extra cost.",
      },
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <a className="skip-link" href="#faq-main">
        Skip to questions
      </a>

      <div className="site-shell faq-site-shell" id="top">
        <header className="site-header">
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

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="../#how-it-works">How it works</a>
            <a href="../#services">Services</a>
            <a href="../#recurring">Recurring plans</a>
            <a href="../checklist/">Checklist</a>
            <a href="./" aria-current="page">
              FAQ
            </a>
            <a href="../#contact">Contact</a>
          </nav>

          <a
            className="button button-small button-dark"
            href="../book/"
            data-analytics-event="book_now_click"
          >
            Book now <ArrowIcon />
          </a>
        </header>

        <main className="faq-main" id="faq-main">
          <section className="faq-hero" aria-labelledby="faq-heading">
            <p className="section-kicker">Answers before you book</p>
            <h1 id="faq-heading">Frequently asked questions</h1>
            <div className="faq-hero-bottom">
              <p>
                From supplies and scheduling to pricing and our satisfaction
                promise, here&apos;s what to know before your cleaning.
              </p>
              <a
                className="button button-caramel"
                href="../book/"
                data-analytics-event="book_now_click"
              >
                Book your clean <ArrowIcon />
              </a>
            </div>
          </section>

          <div className="faq-sections">
            {faqSections.map((section, sectionIndex) => (
              <section
                className="faq-section"
                key={section.title}
                aria-labelledby={`faq-section-${sectionIndex + 1}`}
              >
                <div className="faq-section-heading">
                  <span>{section.number}</span>
                  <h2 id={`faq-section-${sectionIndex + 1}`}>
                    {section.title}
                  </h2>
                </div>
                <div className="faq-list">
                  {section.items.map((item, itemIndex) => (
                    <details
                      className="faq-item"
                      key={item.question}
                      open={sectionIndex === 0 && itemIndex === 0}
                    >
                      <summary>
                        <span>{item.question}</span>
                        <span className="faq-toggle" aria-hidden="true" />
                      </summary>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="faq-contact" aria-labelledby="faq-contact-heading">
            <div>
              <p>Still have a question?</p>
              <h2 id="faq-contact-heading">We&apos;re happy to help.</h2>
            </div>
            <div className="faq-contact-actions">
              <a href="mailto:contact@caramelcleaners.com">
                contact@caramelcleaners.com
              </a>
              <a href="sms:+14632244181">Text (463) 224-4181</a>
            </div>
          </section>
        </main>

        <footer className="site-footer faq-footer">
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
            <a href="../checklist/">Cleaning checklist</a>
            <a href="./" aria-current="page">
              Frequently asked questions
            </a>
            <p>© 2026 Caramel Cleaners. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
