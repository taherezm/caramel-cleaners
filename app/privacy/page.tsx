import type { Metadata } from "next";
import LegalPageShell from "../components/legal-page-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Caramel Cleaners LLC collects, uses, discloses, retains, and protects personal information.",
  alternates: {
    canonical: "/privacy/",
  },
};

const navigation = [
  { id: "scope", label: "Scope" },
  { id: "information", label: "Information we collect" },
  { id: "sources", label: "Sources" },
  { id: "uses", label: "How we use information" },
  { id: "disclosures", label: "How we disclose information" },
  { id: "payments", label: "Booking and payments" },
  { id: "advertising", label: "Advertising and cookies" },
  { id: "retention", label: "Retention" },
  { id: "rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children" },
  { id: "third-parties", label: "Third-party services" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPageShell
      current="privacy"
      description="This Policy explains what personal information we collect, why we use it, who receives it, and the choices available to you."
      navigation={navigation}
      title="Privacy Policy"
    >
      <div className="legal-notice" role="note">
        <strong>In short:</strong> We use personal information to quote, book,
        provide, improve, and market cleaning services. We do not sell personal
        information for money. We may disclose limited information to providers
        such as BookingKoala, Stripe, GitHub, GoDaddy, and Google as described
        below.
      </div>

      <section id="scope">
        <h2>1. Who we are and this Policy’s scope</h2>
        <p>
          Caramel Cleaners LLC (“Caramel Cleaners,” “we,” “us,” or “our”) is an
          Indiana cleaning company serving residential and commercial customers
          in Central Indiana. This Privacy Policy applies to information we
          handle through caramelcleaners.com, our BookingKoala booking and
          customer portal, communications, advertising, and cleaning services.
        </p>
        <p>
          This Policy does not replace the independent privacy notices of
          BookingKoala, Stripe, Google, or other third parties that process
          information for their own stated purposes.
        </p>
      </section>

      <section id="information">
        <h2>2. Information we collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>
            <strong>Identity and contact information:</strong> name, email
            address, telephone number, service address, billing address, and
            business or organization details.
          </li>
          <li>
            <strong>Booking and property information:</strong> service type,
            property size and condition, room or bathroom counts, selected
            extras, appointment details, recurring cadence, preferences, and
            notes about the requested work.
          </li>
          <li>
            <strong>Access and safety information:</strong> entry instructions,
            door or gate codes, alarm details, parking information, pet details,
            hazards, and other information needed to enter and work safely.
          </li>
          <li>
            <strong>Photos and communications:</strong> images you upload,
            emails, text messages, support requests, service feedback, and
            records of our communications.
          </li>
          <li>
            <strong>Transaction information:</strong> quoted and charged
            amounts, taxes, tips, refunds, payment status, payment method type,
            recurring-payment status, and limited processor records. Payment
            credentials are handled by BookingKoala and Stripe.
          </li>
          <li>
            <strong>Device, internet, and advertising information:</strong> IP
            address, browser and device information, referring pages, pages or
            buttons viewed, timestamps, cookie or similar identifiers, ad-click
            identifiers, and conversion or campaign information.
          </li>
        </ul>
      </section>

      <section id="sources">
        <h2>3. Where information comes from</h2>
        <p>
          We collect information directly from you, automatically from your
          browser or device, from another person or business booking on your
          behalf, from our employees and independent cleaning professionals, and
          from service providers and advertising partners such as BookingKoala,
          Stripe, and Google.
        </p>
      </section>

      <section id="uses">
        <h2>4. How we use information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>prepare quotes and create, schedule, modify, and fulfill bookings;</li>
          <li>process payments, recurring charges, tips, taxes, and refunds;</li>
          <li>
            provide property access information to the cleaning professional
            assigned to your appointment;
          </li>
          <li>
            communicate about appointments, access, payments, support, service
            quality, and our 24-hour satisfaction promise;
          </li>
          <li>
            personalize and improve our website, booking experience, services,
            pricing, and operations;
          </li>
          <li>
            measure advertising, understand conversions, create audiences, and
            send marketing where permitted;
          </li>
          <li>
            prevent fraud, maintain security, enforce our Terms, resolve
            disputes, and protect customers, workers, property, and our business;
          </li>
          <li>comply with accounting, tax, legal, and regulatory obligations.</li>
        </ul>
      </section>

      <section id="disclosures">
        <h2>5. How we disclose information</h2>
        <p>We may disclose information to:</p>
        <ul>
          <li>
            <strong>Employees and independent cleaning professionals</strong>{` `}
            who need appointment, property, access, and service details;
          </li>
          <li>
            <strong>Booking and payment providers,</strong> including
            BookingKoala and Stripe;
          </li>
          <li>
            <strong>Hosting, domain, security, and technical providers,</strong>{` `}
            including GitHub Pages and GoDaddy;
          </li>
          <li>
            <strong>Analytics, advertising, email, and messaging providers,</strong>{` `}
            including Google when the relevant tools are enabled;
          </li>
          <li>
            <strong>Professional advisers and authorities</strong> when
            reasonably necessary for accounting, insurance, legal advice,
            claims, safety, law enforcement, or compliance;
          </li>
          <li>
            <strong>A successor or transaction participant</strong> in a merger,
            financing, sale, reorganization, or transfer involving our business,
            subject to appropriate protections.
          </li>
        </ul>
        <p>
          We do not sell personal information for money. As explained below,
          disclosures to advertising providers may be considered “targeted
          advertising,” “sharing,” or a “sale” under some privacy laws even when
          no money is exchanged.
        </p>
      </section>

      <section id="payments">
        <h2>6. BookingKoala, Stripe, and payment information</h2>
        <p>
          BookingKoala is our booking and customer-management platform, and
          Stripe processes payments. They collect payment and booking
          information through the secure booking experience. We generally
          receive transaction status and limited payment metadata rather than
          your full card number. They may securely store payment credentials to
          support automatically charged recurring cleanings.
        </p>
        <p>
          Their handling of information is also governed by their own agreements
          and privacy notices. Do not send full payment-card information by
          ordinary email or text message.
        </p>
      </section>

      <section id="advertising">
        <h2>7. Analytics, advertising, cookies, and communications</h2>
        <p>
          Our website supports Google Ads, Google Analytics, and related Google
          tools. When enabled, these services may use cookies or similar
          technologies to collect device, browsing, ad-click, and conversion
          information. We may use that information to measure advertising,
          understand site use, show relevant ads, and create remarketing
          audiences.
        </p>
        <p>
          We may also use enhanced conversions or customer audience features.
          When we do, limited contact information such as an email address or
          telephone number may be normalized and hashed before being sent to
          Google for matching, measurement, or advertising. We obtain consent
          and send consent signals where required by law or Google policy.
        </p>
        <p>
          You can limit cookies through your browser, use any consent controls
          presented on our website, adjust choices through{` `}
          <a href="https://myadcenter.google.com/" rel="noreferrer">
            Google’s My Ad Center
          </a>
          , or email us to opt out of targeted advertising associated with your
          information. Blocking technologies may affect site or measurement
          functionality.
        </p>
        <p>
          Promotional emails include an unsubscribe method, and promotional
          texts may be stopped by replying STOP. We may still send necessary
          booking and service messages.
        </p>
      </section>

      <section id="retention">
        <h2>8. How long we retain information</h2>
        <p>
          We retain information only for as long as reasonably necessary for
          the purposes described in this Policy, including providing service,
          managing recurring relationships, maintaining transaction and consent
          records, accounting and tax obligations, security, fraud prevention,
          disputes, and legal compliance.
        </p>
        <ul>
          <li>
            For a one-time cleaning, we delete door codes and sensitive entry
            instructions after the job is completed, subject to a brief period
            needed to resolve an immediate access, safety, or service issue.
          </li>
          <li>
            For recurring cleaning, we retain access instructions while the
            recurring relationship is active and delete them after it ends,
            subject to the same limited exceptions.
          </li>
          <li>
            Booking, payment, consent, tax, and dispute records may be retained
            longer where reasonably necessary or legally required.
          </li>
          <li>
            Marketing information is retained until you opt out or request
            deletion, except that we may keep a limited suppression record to
            honor your opt-out.
          </li>
          <li>
            Advertising and analytics information follows our configured
            provider settings and applicable legal requirements.
          </li>
        </ul>
      </section>

      <section id="rights">
        <h2>9. Your privacy rights and choices</h2>
        <p>
          Depending on applicable law, you may have the right to confirm whether
          we process your personal information; access, correct, delete, or
          obtain a portable copy of it; and opt out of targeted advertising,
          certain sales, or qualifying profiling. Indiana’s{` `}
          <a
            href="https://www.in.gov/attorneygeneral/files/Consumer-Data-Bill-of-Rights.pdf"
            rel="noreferrer"
          >
            Consumer Data Bill of Rights
          </a>{` `}
          describes rights available under the Indiana Consumer Data Protection
          Act when that law applies.
        </p>
        <p>
          To make a request, email{` `}
          <a href="mailto:contact@caramelcleaners.com">
            contact@caramelcleaners.com
          </a>{` `}
          with “Privacy Request” in the subject line and describe your request.
          Our owners handle privacy requests. We may verify your identity and
          authority before acting. If we deny a request, you may appeal by
          replying with “Privacy Appeal.” We will respond within the period
          required by applicable law.
        </p>
        <p>
          You will not be discriminated against for exercising a privacy right.
          We may retain information that applicable law permits or requires us
          to keep, including transaction, security, legal, and opt-out records.
        </p>
      </section>

      <section id="security">
        <h2>10. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards appropriate to the information we handle. These include
          HTTPS booking and payment connections, limiting access to people who
          need information for their work, and using established booking and
          payment providers. No storage or transmission method can be guaranteed
          completely secure.
        </p>
        <p>
          Please use BookingKoala, rather than ordinary email or text, to send
          door codes or other sensitive access instructions. Contact us promptly
          if you believe your information or customer account has been
          compromised.
        </p>
      </section>

      <section id="children">
        <h2>11. Children</h2>
        <p>
          Our website and services are intended for adults. We do not accept
          bookings from anyone under 18 and do not knowingly collect personal
          information from children. Contact us if you believe a child provided
          information to us so we can review and delete it as appropriate.
        </p>
      </section>

      <section id="third-parties">
        <h2>12. Third-party sites and services</h2>
        <p>
          Our website may link to or embed third-party services. Their privacy
          practices are governed by their own notices. We encourage you to read
          those notices, particularly before submitting booking, payment, or
          access information.
        </p>
      </section>

      <section id="changes">
        <h2>13. Changes to this Policy</h2>
        <p>
          We may update this Policy to reflect changes in our services,
          providers, advertising, or legal obligations. We will post the revised
          version here and update its effective date. When appropriate, we may
          also provide additional notice.
        </p>
      </section>

      <section id="contact">
        <h2>14. Contact us</h2>
        <p>
          Send privacy questions or requests to Caramel Cleaners LLC at{` `}
          <a href="mailto:contact@caramelcleaners.com">
            contact@caramelcleaners.com
          </a>
          . You may also text us at{` `}
          <a href="sms:+14632244181">(463) 224-4181</a>, though email is the
          preferred method for a formal privacy request.
        </p>
      </section>
    </LegalPageShell>
  );
}
