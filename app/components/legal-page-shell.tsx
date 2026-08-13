import type { ReactNode } from "react";
import LegalFooterLinks from "./legal-footer-links";
import LogoMark from "./logo-mark";

type LegalPageShellProps = {
  children: ReactNode;
  current: "privacy" | "terms";
  description: string;
  navigation: ReadonlyArray<{
    id: string;
    label: string;
  }>;
  title: string;
};

export default function LegalPageShell({
  children,
  current,
  description,
  navigation,
  title,
}: LegalPageShellProps) {
  return (
    <>
      <a className="skip-link" href="#legal-content">
        Skip to policy
      </a>

      <div className="site-shell legal-site-shell">
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

        <main className="legal-main" id="legal-content">
          <header className="legal-hero">
            <p className="section-kicker">Caramel Cleaners LLC</p>
            <h1>{title}</h1>
            <p className="legal-description">{description}</p>
            <p className="legal-effective-date">
              Effective and last updated August 13, 2026
            </p>
          </header>

          <div className="legal-layout">
            <nav className="legal-navigation" aria-label={`${title} sections`}>
              <p>On this page</p>
              <ol>
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="legal-article">{children}</article>
          </div>
        </main>

        <footer className="site-footer legal-footer">
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
            <a href="../faq/">Frequently asked questions</a>
            <LegalFooterLinks current={current} rootHref="../" />
            <p>© 2026 Caramel Cleaners LLC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
