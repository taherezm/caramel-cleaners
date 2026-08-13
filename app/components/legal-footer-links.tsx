type LegalFooterLinksProps = {
  current?: "privacy" | "terms";
  rootHref: "./" | "../";
};

export default function LegalFooterLinks({
  current,
  rootHref,
}: LegalFooterLinksProps) {
  return (
    <>
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
