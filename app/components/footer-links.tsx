type FooterLinksProps = {
  current?: "account" | "privacy" | "terms";
  rootHref: "./" | "../";
};

export default function FooterLinks({ current, rootHref }: FooterLinksProps) {
  return (
    <>
      <a
        href={`${rootHref}account/`}
        aria-current={current === "account" ? "page" : undefined}
        data-analytics-event="client_portal_click"
      >
        Client login
      </a>
      <a
        href={`${rootHref}privacy/`}
        aria-current={current === "privacy" ? "page" : undefined}
      >
        Privacy Policy
      </a>
      <a
        href={`${rootHref}terms/`}
        aria-current={current === "terms" ? "page" : undefined}
      >
        Terms of Service
      </a>
    </>
  );
}
