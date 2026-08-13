# BookingKoala setup for Caramel Cleaners

The website side of the booking experience is connected. `/book/` provides the
branded introduction, loading state, responsive BookingKoala iframe, and
external-form fallback. `/thank-you/` is ready to receive completed bookings.

No BookingKoala account settings were changed from this repository. The steps
below must be completed by an authorized BookingKoala administrator.

## Information still needed

Before publishing a live form, confirm:

- the final BookingKoala HTTPS embed URL;
- prices for oven, refrigerator, kitchen cabinets, interior windows, changing
  linens, and trash-bin cleaning;
- whether photo upload is enabled in the account;
- the internal destination and response process for manual reviews;
- whether customers may buy more than one Flex Cleaning unit per booking.

Prices that have not been supplied are marked **PRICE TO CONFIRM** below. Do not
publish those extras at a guessed price.

## 1. Create the form

Use **Form 4**, which supports unit-based pricing and a variable such as square
footage.

1. Create one pricing category based on the home's square footage.
2. Add the three service categories below.
3. Set the order exactly as shown so it matches the website.
4. Set a **$149 minimum booking price** for every service.
5. Review estimated labor time separately from customer-facing price.

| Service | Base rate |
| --- | ---: |
| Routine Clean | $0.11 per square foot |
| Deep Clean | $0.17 per square foot |
| Move-In / Move-Out Clean | $0.21 per square foot |

The Deep Clean should be described as the recommended starting
point for first-time customers. Do not create another price calculator on the
Caramel Cleaners website; BookingKoala must remain the source of live pricing.

## 2. Bathroom pricing

The base price includes up to **two full bathrooms**.

- Full bathrooms 1–2: included
- Each additional full bathroom: **$25**
- Each half bathroom: **$12**

Configure the full-bathroom quantity so charges begin only with bathroom three.
If the account cannot express an included quantity directly, use a dependency
or a separate “additional full bathrooms” quantity field with clear helper
text. Test zero, one, two, three, and four full bathrooms before launch.

## 3. Frequency

Create these frequency options:

| Frequency | Discount |
| --- | ---: |
| Weekly | 15% |
| Every two weeks | 10% |
| Every four weeks | 5% |
| One time | 0% |

Recurring service should begin only after a Deep Clean unless an
authorized team member approves another starting condition. Express that rule
in the form and use dependencies where the account supports them.

BookingKoala documents extras as fixed charges added after the frequency
discount in its example. Configure fixed extras so they are **not discounted**,
then verify the calculation in this specific account before going live.

## 4. Flex Cleaning

Create a quantity-based custom section:

- Name: **Flex Cleaning — 30 Minutes**
- Price: **$45 per unit**
- Quantity: allow more than one only after confirming the operating policy
- Required follow-up: “What would you like us to focus on during this time?”

Show this scope note beside the option:

> Flex Cleaning adds focused cleaning time but does not guarantee completion of
> an entire room or project. It does not include hazardous materials, pest or
> biohazard cleanup, exterior work, high-access work, or tasks outside the
> Caramel Cleaners service policy.

## 5. Extras

Create each as a fixed-price extra and show it in the booking summary:

| Extra | Price |
| --- | ---: |
| Inside oven | **PRICE TO CONFIRM** |
| Inside refrigerator | **PRICE TO CONFIRM** |
| Inside kitchen cabinets | **PRICE TO CONFIRM** |
| Interior windows | **PRICE TO CONFIRM** |
| Change bed linens | **PRICE TO CONFIRM** |
| Trash-bin cleaning | **PRICE TO CONFIRM** |

Use dependencies where an extra needs a quantity or supporting detail. Do not
activate an extra until its price, expected labor time, and scope are confirmed.

## 6. Home condition and manual review

Add required fields for:

- approximate square footage;
- full- and half-bathroom count;
- occupied or empty home;
- last professional cleaning;
- pets in the home;
- areas requiring extra attention;
- parking or access instructions;
- preferred contact method;
- an unchecked, required acceptance checkbox linking to
  `https://caramelcleaners.com/terms/` and acknowledging
  `https://caramelcleaners.com/privacy/`;
- a separate, clear recurring-payment authorization when a recurring frequency
  is selected.

Use this condition question:

> Is there heavy buildup, excessive clutter, pest activity, smoke residue,
> construction dust, biohazard material, or any condition that may require
> specialized work?

If the customer answers yes, require a description and photo upload when the
account supports it. Route the booking for manual review before confirming
price or arrival time.

Also route for manual review when:

- the home is larger than 5,000 square feet;
- the customer reports active pests, biohazards, hoarding conditions, or
  hazardous materials;
- the requested work falls outside the listed service scope;
- access or timing requirements cannot be met by a standard team.

Use this customer-facing pricing language:

> Please describe your home accurately. If its size or condition differs
> materially from the booking details, Caramel Cleaners will review any pricing
> adjustment with you before additional work begins.

## 7. Summary, brand, and payment

Make the final summary show:

- selected service and square footage;
- bathroom quantities;
- frequency and discount;
- every extra and Flex Cleaning unit;
- subtotal, discount, taxes or fees, and final total;
- selected date and arrival window.

Match the existing site with:

- background: `#f7f2eb`
- primary text: `#211e1b`
- accent and primary actions: `#bd6e2f`
- font: Arial or Helvetica

Style the form inside BookingKoala's theme editor. Parent-page CSS cannot
reliably style a cross-origin iframe.

Enable the account's secure online payment flow and display the confirmed
payment and cancellation terms before the final booking action:

- the full customized price is charged when the customer books;
- cancellation more than three hours before the scheduled appointment receives
  a full refund;
- cancellation three hours or less before the scheduled appointment retains a
  $25 fee and refunds the remaining prepaid amount;
- rescheduling has no fee or advance deadline and is subject to availability;
- recurring selections authorize automatic charges and may be paused or ended
  through the customer portal;
- customer-approved additional cleaning, taxes, and tips may result in
  additional charges.

Do not describe a company-wide insurance policy. Each cleaning professional is
required to maintain their own liability coverage, and no fixed coverage amount
has been represented.

### Data-retention operations

The public Privacy Policy must match the account's actual handling:

- after a one-time job, delete door codes and sensitive entry instructions once
  any immediate access, safety, or service issue is resolved;
- for recurring service, retain those instructions only while the relationship
  remains active and delete them after it ends;
- retain booking, payment, consent, tax, and dispute records only as reasonably
  necessary for the stated business and legal purposes;
- keep a record of each Terms, recurring-payment, and marketing consent version
  with its acceptance time;
- route access, correction, deletion, targeted-advertising opt-out, and appeal
  requests sent to `contact@caramelcleaners.com` to an owner.

## 8. Confirmation and attribution

Set the post-booking redirect to:

`https://caramelcleaners.com/thank-you/`

The site emits vendor-neutral browser events without reading the iframe or
collecting customer details:

- `book_now_click`
- `booking_page_view`
- `booking_fallback_click`
- `completed_booking_page_view`

Each event is dispatched as `caramel:analytics` and is also pushed to
`window.dataLayer` if a future analytics installation provides one. No
analytics vendor was added.

## 9. Booking embed

The production site uses:

`https://caramelcleaners.bookingkoala.com/booknow?embed=true`

The BookingKoala resize helper is loaded from the same account domain.

For local development:

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_BOOKINGKOALA_EMBED_URL` to the HTTPS URL you want to test.
3. Restart the local development server.

The environment variable remains optional for testing another form. A missing
or invalid value falls back to the production URL above.

The repository currently has no Content Security Policy. If one is added
later, its `frame-src` directive must allow the exact BookingKoala form origin.
Also confirm that the BookingKoala URL is permitted to render in an iframe on
the GitHub Pages domain.

## 10. Launch QA

Complete these checks on desktop and mobile:

- each homepage Book Now link opens `/book/`;
- each tier expands and its inclusions are legible;
- the form loads without horizontal scrolling;
- the external fallback opens the same secure form;
- all three square-foot rates and the $149 minimum calculate correctly;
- two full bathrooms add $0 and the third adds $25;
- half bathrooms add $12 each;
- frequency discounts match the table;
- fixed extras are not frequency-discounted;
- multiple Flex Cleaning units calculate correctly if enabled;
- manual-review answers take the expected path;
- unavailable dates cannot be selected;
- payment succeeds in the provider's test mode;
- a completed test redirects to `/thank-you/`;
- confirmation email or SMS contains the expected booking details;
- the Terms acceptance is unchecked by default, required, linked, and recorded
  with the policy version and acceptance time;
- recurring bookings display and record the automatic-payment authorization;
- no iframe interaction or customer information is read by site analytics.
