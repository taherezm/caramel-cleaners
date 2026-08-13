import type { Metadata } from "next";
import LegalPageShell from "../components/legal-page-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing Caramel Cleaners LLC bookings, payments, cancellations, recurring service, and cleaning appointments.",
  alternates: {
    canonical: "/terms/",
  },
};

const navigation = [
  { id: "agreement", label: "Agreement" },
  { id: "eligibility", label: "Eligibility" },
  { id: "booking", label: "Booking and pricing" },
  { id: "payment", label: "Payment" },
  { id: "recurring", label: "Recurring service" },
  { id: "cancellations", label: "Cancellations" },
  { id: "service", label: "Service conditions" },
  { id: "access", label: "Access, pets, and safety" },
  { id: "satisfaction", label: "Satisfaction promise" },
  { id: "property", label: "Property and valuables" },
  { id: "cleaners", label: "Cleaning professionals" },
  { id: "communications", label: "Communications" },
  { id: "third-parties", label: "Third-party services" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "disputes", label: "Disputes" },
  { id: "general", label: "General terms" },
  { id: "contact", label: "Contact" },
] as const;

export default function TermsPage() {
  return (
    <LegalPageShell
      current="terms"
      description="These Terms explain the rules that apply when you use our website, book a cleaning, or receive services from us."
      navigation={navigation}
      title="Terms of Service"
    >
      <div className="legal-notice" role="note">
        <strong>Please read these Terms before booking.</strong> They include a
        class-action waiver and require most disputes to be brought individually
        in Indiana courts.
      </div>

      <section id="agreement">
        <h2>1. Agreement to these Terms</h2>
        <p>
          These Terms of Service (the “Terms”) are a binding agreement between
          you and Caramel Cleaners LLC, an Indiana limited liability company
          (“Caramel Cleaners,” “we,” “us,” or “our”). They govern your use of
          caramelcleaners.com, the BookingKoala booking experience, and the
          residential or commercial cleaning services you purchase from us.
        </p>
        <p>
          By submitting a booking, creating or using a customer account, or
          accepting a cleaning service, you agree to these Terms and our{` `}
          <a href="../privacy/">Privacy Policy</a>. If you do not agree, do not
          book or use the services.
        </p>
      </section>

      <section id="eligibility">
        <h2>2. Eligibility and authority</h2>
        <p>
          You must be at least 18 years old and legally able to enter a contract.
          Our services are offered only for properties in Indiana within our
          Central Indiana service area. We may decline a property outside that
          area.
        </p>
        <p>
          If you book for a business, property owner, tenant, employer, or other
          person, you represent that you have authority to accept these Terms
          and authorize access to the property on their behalf.
        </p>
      </section>

      <section id="booking">
        <h2>3. Booking, service scope, and customized pricing</h2>
        <p>
          Prices are customized using the information you provide, including
          property size, service type, condition, frequency, and selected
          extras. The minimum booking price is $149. The price shown at checkout
          is based on the booking details you submit and may include taxes,
          fees, or separately selected extras.
        </p>
        <p>
          You must provide complete and accurate information. The applicable
          service scope is described in our{` `}
          <a href="../checklist/">Cleaning Checklist</a>. If the property’s
          size, condition, access needs, or requested work differs materially
          from the booking details, we may decline the work, reschedule it, or
          propose a revised price. We will review any additional service and
          price with you before performing or charging for it.
        </p>
      </section>

      <section id="payment">
        <h2>4. Payment authorization</h2>
        <p>
          The full booking price is charged when you book. You authorize
          BookingKoala and Stripe to process that charge using your selected
          payment method. Taxes, voluntary tips, and customer-approved added
          services may result in additional charges. Any post-booking charge
          for added cleaning will be reviewed with and authorized by you before
          the work is performed or the charge is processed.
        </p>
        <p>
          You are responsible for keeping your payment information current. If
          you believe a charge is incorrect, contact us promptly so we can
          investigate. Nothing in these Terms limits rights you may have with
          your card issuer or under applicable law.
        </p>
      </section>

      <section id="recurring">
        <h2>5. Recurring service and stored payment methods</h2>
        <p>
          When you select recurring service, you authorize the secure storage
          of your payment credentials by our payment providers and automatic
          charging of the price for each scheduled cleaning. The price and any
          recurring discount depend on the selected cadence and services and may
          change if you change them.
        </p>
        <p>
          You may pause or terminate recurring service through the BookingKoala
          customer portal. A pause or termination applies to future services
          once processed and does not reverse charges already incurred. We may
          change or discontinue a recurring arrangement by providing reasonable
          notice when practical.
        </p>
      </section>

      <section id="cancellations">
        <h2>6. Cancellations, rescheduling, and refunds</h2>
        <ul>
          <li>
            If you cancel more than three hours before the scheduled appointment
            time, we will refund the full booking charge.
          </li>
          <li>
            If you cancel three hours or less before the scheduled appointment
            time, we will retain a $25 cancellation fee and refund the remaining
            prepaid amount.
          </li>
          <li>
            You may reschedule without a rescheduling fee or advance deadline,
            subject to availability.
          </li>
        </ul>
        <p>
          Bank and payment-provider processing times may affect when a refund
          appears. Completed services are not automatically refundable. Our
          satisfaction promise below is the usual remedy for a service-quality
          concern, except where applicable law requires otherwise.
        </p>
      </section>

      <section id="service">
        <h2>7. Service conditions and our right to decline work</h2>
        <p>
          We may decline, stop, or reschedule work that is outside our Central
          Indiana service area, outside the booked Cleaning Checklist, materially
          different from the condition described, unsafe, illegal, impractical
          to complete, or unsuitable for standard cleaning. This includes active
          pests, biohazards, hoarding or excessive clutter, hazardous materials,
          construction conditions, or other specialized work we did not approve
          in advance.
        </p>
        <p>
          You must provide working utilities and a reasonably safe workspace and
          disclose conditions that may affect safety, access, timing, or service
          quality. We do not guarantee removal of every stain, odor, buildup, or
          condition, especially where permanent damage, age, or material
          limitations are involved.
        </p>
      </section>

      <section id="access">
        <h2>8. Property access, pets, and safety</h2>
        <p>
          You must ensure timely, lawful access to the property. Door codes and
          entry instructions should be submitted securely through BookingKoala.
          Pets must be safely secured away from cleaning professionals and work
          areas throughout the appointment. If access is unavailable or
          conditions are unsafe, we may treat the appointment as a late
          cancellation under Section 6.
        </p>
        <p>
          Do not leave weapons, illegal substances, needles, biohazards, or
          dangerous materials accessible. You are responsible for identifying
          fragile surfaces, damaged fixtures, specialty finishes, and items that
          require special handling before work begins.
        </p>
      </section>

      <section id="satisfaction">
        <h2>9. Twenty-four-hour satisfaction promise</h2>
        <p>
          If you are dissatisfied with a specific aspect of a completed clean,
          notify us within 24 hours and identify the area at issue. When the
          concern relates to work included in the booked scope, we will arrange
          for a cleaning professional to return and re-clean that area at no
          additional charge. You must provide reasonable access for the return
          visit.
        </p>
        <p>
          The promise does not cover work outside the booked scope, conditions
          that cannot reasonably be corrected through cleaning, or areas altered
          after the appointment. It does not limit rights that cannot be waived
          under applicable law.
        </p>
      </section>

      <section id="property">
        <h2>10. Property damage, missing items, and valuables</h2>
        <p>
          Secure cash, jewelry, medications, documents, firearms, collectibles,
          and other valuable or irreplaceable property before the appointment.
          To the fullest extent permitted by law, Caramel Cleaners is not
          responsible for loss of valuables left unsecured or not disclosed to
          us before service.
        </p>
        <p>
          Report visible property damage, loss, or a related concern within 24
          hours after the appointment and preserve relevant photos or other
          information. Prompt notice allows us to investigate and, where
          appropriate, coordinate with the assigned cleaning professional and
          that professional’s insurer. This notice request does not eliminate a
          right that cannot legally be limited.
        </p>
      </section>

      <section id="cleaners">
        <h2>11. Employees and independent cleaning professionals</h2>
        <p>
          Services may be performed by Caramel Cleaners employees or independent
          contractors. Each cleaning professional is required to maintain their
          own liability insurance. Coverage is governed by the individual
          policy, and we do not promise that a particular coverage amount or
          claim outcome applies.
        </p>
      </section>

      <section id="communications">
        <h2>12. Email and text communications</h2>
        <p>
          You agree that we and our service providers may send transactional
          email or text messages about bookings, payments, access, schedule
          changes, and customer support. Message and data rates may apply.
        </p>
        <p>
          We send promotional email or text messages only with the consent
          required by applicable law. You may opt out of promotional email by
          using its unsubscribe link and promotional texts by replying STOP.
          Opting out of marketing does not prevent necessary service messages.
        </p>
      </section>

      <section id="third-parties">
        <h2>13. Privacy and third-party services</h2>
        <p>
          Our <a href="../privacy/">Privacy Policy</a> explains how we handle
          personal information. BookingKoala, Stripe, and other third-party
          services may also apply their own terms and privacy notices. We are
          not responsible for a third party’s independent systems, availability,
          or conduct, but this does not excuse obligations that applicable law
          places on Caramel Cleaners.
        </p>
      </section>

      <section id="disclaimers">
        <h2>14. Disclaimers</h2>
        <p>
          To the fullest extent permitted by law, the website and services are
          provided “as is” and “as available.” We disclaim implied warranties of
          merchantability, fitness for a particular purpose, and noninfringement
          to the extent those warranties may be disclaimed. We are not
          responsible for delays or failures caused by events outside our
          reasonable control.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability or consumer rights
          that cannot lawfully be excluded or limited. These Terms do not state
          a fixed monetary liability cap.
        </p>
      </section>

      <section id="disputes">
        <h2>15. Indiana law, venue, and class-action waiver</h2>
        <p>
          Indiana law governs these Terms and any dispute arising from the
          website, a booking, or our services, without regard to conflict-of-law
          rules. Before filing a claim, please contact us and give us a
          reasonable opportunity to address the issue informally.
        </p>
        <p>
          Any lawsuit must be filed in a state court located in Hamilton County,
          Indiana, or, when federal jurisdiction is proper, in the United States
          District Court for the Southern District of Indiana. You and Caramel
          Cleaners consent to those courts’ personal jurisdiction.
        </p>
        <p className="legal-uppercase">
          To the fullest extent permitted by law, you and Caramel Cleaners agree
          that each may bring claims against the other only in an individual
          capacity and not as a plaintiff or class member in any purported class,
          collective, consolidated, or representative proceeding.
        </p>
      </section>

      <section id="general">
        <h2>16. Changes, severability, and entire agreement</h2>
        <p>
          We may update these Terms by posting a revised version and changing
          the effective date. Material changes apply prospectively unless law
          permits otherwise. Terms presented and accepted for a booking govern
          that booking to the extent they conflict with a later version.
        </p>
        <p>
          If a provision is unenforceable, it will be enforced to the maximum
          lawful extent and the remaining provisions will continue. Our failure
          to enforce a provision is not a waiver. These Terms, the booked service
          details, the Cleaning Checklist, and incorporated policies form the
          agreement regarding the services.
        </p>
      </section>

      <section id="contact">
        <h2>17. Contact us</h2>
        <p>
          Questions or notices about these Terms may be sent to Caramel Cleaners
          LLC at{` `}
          <a href="mailto:contact@caramelcleaners.com">
            contact@caramelcleaners.com
          </a>
          {` `}or by text at <a href="sms:+14632244181">(463) 224-4181</a>.
        </p>
      </section>
    </LegalPageShell>
  );
}
