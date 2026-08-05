import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/", import.meta.url);
const source = new URL("../app/", import.meta.url);

test("delays the mobile booking dock on each fresh visit", async () => {
  const component = await readFile(
    new URL("components/mobile-book-dock.tsx", source),
    "utf8",
  );
  const styles = await readFile(new URL("globals.css", source), "utf8");

  assert.match(component, /MOBILE_BOOK_DOCK_DELAY_MS = 3 \* 60 \* 1000/);
  assert.match(component, /window\.setTimeout/);
  assert.match(component, /aria-hidden=\{!isVisible\}/);
  assert.match(component, /tabIndex=\{isVisible \? 0 : -1\}/);
  assert.match(styles, /\.mobile-book-dock\.mobile-book-dock-visible/);
  assert.match(styles, /pointer-events: none/);
});

test("renders a focused Caramel Cleaners homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(
    html,
    /<title>Caramel Cleaners \| Home Cleaning Made Simple<\/title>/i,
  );
  assert.match(html, /without the guesswork/);
  assert.match(
    html,
    /Now cleaning homes in Carmel, Westfield, Zionsville, Noblesville, and Fishers, Indiana/,
  );
  assert.match(html, /© 2026 Caramel Cleaners\. All rights reserved\./);
  assert.doesNotMatch(html, /id="service-area"/);
  assert.doesNotMatch(html, /Home cleaning built around our local communities/);
  assert.match(html, /Routine Clean/);
  assert.match(html, /Deep Clean/);
  assert.match(html, /Move-In \/ Move-Out Clean/);
  assert.match(html, /Most popular/);
  assert.match(html, /Recommended first visit/);
  assert.match(
    html,
    /New clients typically start with a Deep Clean, then move to Routine Clean on a recurring schedule/,
  );
  assert.match(html, /Kitchen counters, sink, stovetop, and appliance exteriors/);
  assert.match(html, /Baseboards, doors, and trim hand-washed, not just dusted/);
  assert.match(html, /Inside all cabinets, drawers, closets, and the pantry/);
  assert.match(
    html,
    /See the full checklist: what(?:'|&#x27;)s included and what isn(?:'|&#x27;)t/,
  );
  assert.doesNotMatch(html, /—/);
  assert.ok((html.match(/href="\.\/checklist\/"/g) ?? []).length >= 3);
  assert.ok((html.match(/href="\.\/faq\/"/g) ?? []).length >= 2);
  assert.equal((html.match(/class="service-number">[123]<\/span>/g) ?? []).length, 3);
  assert.doesNotMatch(html, /class="service-number">0[123]<\/span>/);
  assert.match(html, /id="standards"/);
  assert.match(html, /The person entering your home matters/);
  assert.match(html, /Every Caramel Cleaner is carefully vetted/);
  assert.doesNotMatch(html, /Every Caramel Cleaners professional/);
  assert.match(html, /carefully vetted/);
  assert.match(html, /extensively background-checked/);
  assert.match(html, /covered by liability insurance/);
  assert.match(html, /Liability insured/);
  assert.match(html, /Covered by a \$1,000,000 general liability policy/);
  assert.match(html, /clear communication/);
  assert.match(html, /Identity and criminal-history screening/);
  assert.match(html, /accidental property damage/);
  assert.match(html, /href="\.\/book\/"/);
  assert.match(html, /Play the Caramel Cleaners logo animation/);
  assert.doesNotMatch(html, /Animate the .* Clean logo/);
  assert.match(html, /one-time clean or choose a recurring schedule/);
  assert.match(html, /id="recurring"/);
  assert.ok(
    html.indexOf('id="services"') < html.indexOf('id="recurring"'),
    "recurring plans should appear after the initial cleaning tiers",
  );
  assert.match(html, /More consistency\. Less per visit\./);
  assert.match(html, /Weekly/);
  assert.match(html, /Every two weeks/);
  assert.match(html, /Every four weeks/);
  assert.match(html, /<strong>15%<\/strong>/);
  assert.match(html, /<strong>10%<\/strong>/);
  assert.match(html, /<strong>5%<\/strong>/);
  assert.match(html, /Routine Clean is \$0\.11 per square foot with a \$149 minimum/);
  assert.match(html, /Recurring service typically begins after a Deep Clean/);
  assert.match(html, /Animate the Caramel Cleaners closing logo/);
  assert.match(html, /Come home to a cleaner, calmer space/);
  assert.doesNotMatch(html, /Come home to more room to breathe/);
  assert.match(html, /ui-arrow ui-arrow-up-right/);
  assert.match(html, /ui-arrow ui-arrow-down/);
  assert.doesNotMatch(html, /[↗↘↙↖→←↑↓]/);
  assert.equal((html.match(/<details>/g) ?? []).length, 3);
  assert.match(html, /service-summary-action-closed/);
  assert.match(html, /service-summary-action-open/);
  assert.match(html, /service-summary-chevron/);
  assert.match(html, /class="brand-name"[^>]*>Caramel Cleaners</);
  assert.doesNotMatch(html, /brand-descriptor|>Housecleaning</);
  assert.match(html, /class="mobile-book-dock"/);
  assert.match(html, /Save with recurring care/);
  assert.match(html, /Up to 15% off each visit/);
  assert.match(html, /id="contact"/);
  assert.match(html, /Planning an event/);
  assert.match(html, /partner with realtors and companies/);
  assert.match(html, /Email or text us at/);
  assert.doesNotMatch(
    html,
    /For any of these needs—or just a question—email or text us/,
  );
  assert.match(html, /P\.S\. We’re quick to respond!/);
  assert.match(html, /\(463\) 224-4181/);
  assert.doesNotMatch(html, /\(463\)-224-4181/);
  assert.doesNotMatch(html, /class="contact-text">\s*Text/);
  assert.ok((html.match(/sms:\+14632244181/g) ?? []).length >= 2);
  assert.ok(
    (html.match(/mailto:contact@caramelcleaners\.com/g) ?? []).length >= 2,
  );
  assert.match(
    html,
    /class="logo-mark-button logo-mark-header" href="\.\/" aria-label="Caramel Cleaners home"/,
  );
  assert.doesNotMatch(html, /brand-wordmark\.png/);
  assert.match(html, /site\.webmanifest/);
  assert.match(html, /favicon\.ico\?v=circular-20260731/);
  assert.match(html, /favicon\.png\?v=circular-20260731/);
  assert.match(html, /apple-touch-icon\.png\?v=circular-20260731/);
  assert.match(html, /apple-mobile-web-app-capable/);
  assert.match(html, /theme-color/);
  assert.match(html, /og\.png\?v=wordmark-20260801/);
  assert.match(html, /property="og:image:width" content="1774"/);
  assert.match(html, /property="og:image:height" content="887"/);
  assert.match(html, /property="og:image:alt" content="Caramel Cleaners"/);
  assert.doesNotMatch(html, /Come home to clean/);
  assert.doesNotMatch(html, /data-booking-provider="bookingkoala"/);
  assert.doesNotMatch(html, /Bedrooms|Next: Your home/);
});

test("renders the complete cleaning checklist", async () => {
  const html = await readFile(new URL("checklist/index.html", output), "utf8");
  const css = await readFile(new URL("globals.css", source), "utf8");

  assert.match(
    html,
    /<title>What(?:'|&#x27;)s Included: Cleaning Checklist \| Caramel Cleaners<\/title>/i,
  );
  assert.match(
    html,
    /Exactly what(?:'|&#x27;)s included in a Routine, Deep, and Move-In\/Move-Out clean from Caramel Cleaners/,
  );
  assert.doesNotMatch(html, /Last updated:|August 5, 2026/);
  assert.doesNotMatch(html, /—/);

  for (const anchor of [
    "quick-comparison",
    "routine-clean",
    "deep-clean",
    "move-in-move-out",
    "not-included",
    "before-we-arrive",
  ]) {
    assert.match(html, new RegExp(`id="${anchor}"`));
    assert.match(html, new RegExp(`href="#${anchor}"`));
  }

  const scopeHeadings = [...html.matchAll(/<h[23]([^>]*)>/g)];
  assert.ok(scopeHeadings.length >= 16);
  assert.ok(
    scopeHeadings.every((heading) => /(?:^|\s)id="[^"]+"/.test(heading[1])),
    "every checklist H2 and H3 should have a stable id",
  );

  assert.match(html, /Every tier below is cumulative/);
  assert.match(html, /Dust reachable surfaces: furniture tops and fronts/);
  assert.match(html, /Baseboards hand-washed full length in every room/);
  assert.match(html, /Inside the oven, oven door glass, broiler drawer, and racks/);
  assert.match(html, /Not included in a Deep Clean:/);
  assert.match(html, /Not included in any clean/);
  assert.match(html, /Clear counters and floors of personal items/);
  assert.match(html, /aria-label="Included"/);
  assert.match(html, /aria-label="Not included"/);
  assert.match(html, /role="region"/);
  assert.match(html, /class="comparison-scroll"/);
  assert.match(html, /href="\.\.\/book\/"/);
  assert.match(html, /href="\.\.\/"[^>]*aria-label="Caramel Cleaners home"/);
  assert.doesNotMatch(html, /<details>/);
  assert.doesNotMatch(html, /\$0\.11|\$149|per square foot|% off each visit/);
  assert.doesNotMatch(html, />Add-ons<|>Extras</);

  assert.match(css, /\.comparison-scroll\s*\{[^}]*overflow-x:\s*auto/);
  assert.match(css, /@media print\s*\{/);
  assert.match(
    css,
    /@media print[\s\S]*?\.checklist-site-shell \.site-header,[\s\S]*?display:\s*none !important/,
  );
  assert.match(
    css,
    /@media print[\s\S]*?\.checklist-main details:not\(\[open\]\)/,
  );
});

test("renders the frequently asked questions page", async () => {
  const html = await readFile(new URL("faq/index.html", output), "utf8");
  const css = await readFile(new URL("globals.css", source), "utf8");

  assert.match(
    html,
    /<title>Frequently Asked Questions \| Caramel Cleaners<\/title>/i,
  );
  assert.match(html, /Frequently asked questions/);
  assert.match(html, /Services and pricing/);
  assert.match(html, /Your appointment/);
  assert.match(html, /Trust and satisfaction/);

  for (const question of [
    "What services do you offer?",
    "Do you provide cleaning supplies?",
    "How much will it cost to clean my home?",
    "Are your cleaners insured?",
    "Do I need to be present during the cleaning?",
    "How long will the cleaning take?",
    "Can I schedule a cleaning on weekends or evenings?",
    "Do you offer recurring cleaning services?",
    "What if I",
  ]) {
    assert.match(html, new RegExp(question.replace(/[?]/g, "\\?")));
  }

  assert.equal((html.match(/<details/g) ?? []).length, 9);
  assert.match(html, /<details class="faq-item" open=""/);
  assert.doesNotMatch(html, /bonded|COVID-19|social distancing/);
  assert.match(html, /within 24 hours/);
  assert.match(html, /contact@caramelcleaners\.com/);
  assert.match(html, /aria-current="page">FAQ/);
  assert.match(css, /\.faq-section\s*\{/);
  assert.match(css, /\.faq-item\[open\] \.faq-toggle/);
  assert.match(css, /\.faq-contact\s*\{/);
});

test("renders a dedicated booking page with a safe missing-config state", async () => {
  const html = await readFile(new URL("book/index.html", output), "utf8");

  assert.match(html, /<title>Book Your Clean \| Caramel Cleaners<\/title>/i);
  assert.match(
    html,
    /Customize your clean, see your price, and book online/,
  );
  assert.doesNotMatch(html, /Customize your cleaning/);
  assert.match(html, /href="\.\.\/"[^>]*>Back to Home/);
  assert.doesNotMatch(html, /Compare services/);
  assert.doesNotMatch(html, /Why homeowners choose Caramel Cleaners/);
  assert.doesNotMatch(html, /More time for what matters/);
  assert.doesNotMatch(html, /Detail-focused cleaning/);
  assert.doesNotMatch(html, /Scheduling that fits your life/);
  assert.doesNotMatch(html, /Locally serving/);
  assert.doesNotMatch(html, /Tell us about your home as accurately as you can/);
  assert.match(html, /© 2026 Caramel Cleaners\. All rights reserved\./);
  assert.doesNotMatch(html, /brand-descriptor|>Housecleaning</);
  assert.match(html, /Questions, event cleans, special requests, partnerships/);
  assert.match(html, /class="booking-contact-copy"/);
  assert.equal(
    (html.match(/class="booking-contact-method"/g) ?? []).length,
    2,
  );
  assert.match(html, /class="booking-contact-response"/);
  assert.match(html, /\(463\) 224-4181/);
  assert.doesNotMatch(html, /\(463\)-224-4181/);
  assert.match(html, /\(We\s*respond fast\.\)/);
  assert.doesNotMatch(html, /P\.S\.\s*We’re quick to respond!/);
  assert.ok((html.match(/sms:\+14632244181/g) ?? []).length >= 2);
  assert.ok(
    (html.match(/mailto:contact@caramelcleaners\.com/g) ?? []).length >= 2,
  );
  assert.doesNotMatch(html, /Cleaner standards/);
  assert.match(html, /Animate the Caramel Cleaners booking logo/);
  assert.match(
    html,
    /class="logo-mark-button logo-mark-header" href="\.\.\/" aria-label="Caramel Cleaners home"/,
  );
  assert.match(html, /Online booking is being connected/);
  assert.match(html, /ui-arrow ui-arrow-down-left/);
  assert.doesNotMatch(html, /[↗↘↙↖→←↑↓]/);
  assert.doesNotMatch(html, /https:\/\/example\.com|fake|placeholder/i);
});

test("renders the post-booking confirmation route", async () => {
  const html = await readFile(new URL("thank-you/index.html", output), "utf8");

  assert.match(
    html,
    /<title>Booking Received \| Caramel Cleaners<\/title>/i,
  );
  assert.match(html, /We received your booking/);
  assert.match(html, /confirmation with your appointment details/);
  assert.match(html, /ui-arrow ui-arrow-up-right/);
  assert.doesNotMatch(html, /[↗↘↙↖→←↑↓]/);
});

test("keeps native document scrolling available around interactive logos", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const logoComponent = await readFile(
    new URL("../app/components/logo-mark.tsx", import.meta.url),
    "utf8",
  );

  assert.match(css, /touch-action:\s*manipulation/);
  assert.doesNotMatch(css, /scroll-behavior:\s*smooth/);
  assert.doesNotMatch(css, /overscroll-behavior-y/);
  assert.doesNotMatch(css, /overflow-y:\s*auto/);
  assert.match(css, /caramel-logo-spin 1100ms/);
  assert.match(css, /rotate\(720deg\)/);
  assert.doesNotMatch(css, /\n\s*52%\s*\{/);
  assert.match(logoComponent, /event\.detail > 0/);
  assert.match(logoComponent, /logo\.blur\(\)/);
});

test("stacks the how-it-works flow within the mobile viewport", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /overflow-x:\s*clip/);
  assert.match(
    css,
    /@media \(max-width: 760px\)[\s\S]*?\.process-steps\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/,
  );
  assert.match(
    css,
    /\.hero-actions \.text-link\s*\{[^}]*width:\s*100%/,
  );
  assert.match(css, /\.hero\s*\{[^}]*padding:\s*56px 0 0/);
  assert.match(
    css,
    /@media \(max-width: 760px\)[\s\S]*?\.hero\s*\{[^}]*padding-top:\s*34px/,
  );
});

test("styles service details as clear collapsible dropdowns", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /summary::\-webkit-details-marker/);
  assert.match(css, /\.service-tier details\[open\] summary/);
  assert.doesNotMatch(css, /\.service-tag::before/);
  assert.doesNotMatch(css, /\.contact-response::before/);
  assert.match(
    css,
    /\.recurring-popular\s*\{[^}]*font-size:\s*16px[^}]*font-weight:\s*800/,
  );
  assert.match(
    css,
    /\.service-tier details\[open\] \.service-summary-chevron/,
  );
});

test("gives cleaner safety standards a premium, prominent section", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    css,
    /\.trust-section\s*\{[^}]*grid-template-columns:[^;]*minmax\(360px,\s*0\.95fr\)/,
  );
  assert.match(css, /\.trust-section\s*\{[^}]*background:\s*var\(--ink\)/);
  assert.match(css, /\.trust-standards li\s*\{[^}]*display:\s*grid/);
  assert.doesNotMatch(css, /\.recurring-popular::before/);
  assert.doesNotMatch(
    css,
    /\.trust-kicker\s*\{[^}]*text-transform:\s*uppercase/,
  );
});

test("keeps bordered booking links to a single underline", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    css,
    /\.trust-link,\s*\.service-book-link\s*\{[^}]*text-decoration:\s*none/,
  );
  assert.match(
    css,
    /\.trust-link:hover,[\s\S]*?\.service-book-link:focus-visible\s*\{[^}]*text-decoration:\s*none/,
  );
  assert.doesNotMatch(
    css,
    /\.service-book-link:hover,[^}]*text-decoration:\s*underline/,
  );
});

test("uses liquid glass selectively without flattening key brand surfaces", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /--glass-fill:/);
  assert.match(css, /--glass-shadow:/);
  assert.match(
    css,
    /\.site-header\s*\{[^}]*backdrop-filter:\s*blur\(24px\)/,
  );
  assert.match(
    css,
    /\.service-tier:not\(\.service-tier-featured\)\s*\{[^}]*backdrop-filter:\s*blur\(24px\)/,
  );
  assert.match(
    css,
    /\.closing-section\s*\{[^}]*backdrop-filter:\s*blur\(28px\)/,
  );
  assert.match(
    css,
    /\.service-tier-featured\s*\{[^}]*background:\s*var\(--caramel\)/,
  );
  assert.match(css, /\.trust-section\s*\{[^}]*background:\s*var\(--ink\)/);
});

test("keeps page content still while preserving intentional interactions", async () => {
  const homeHtml = await readFile(new URL("index.html", output), "utf8");
  const bookingHtml = await readFile(
    new URL("book/index.html", output),
    "utf8",
  );
  const confirmationHtml = await readFile(
    new URL("thank-you/index.html", output),
    "utf8",
  );
  assert.doesNotMatch(homeHtml, /data-reveal/);
  assert.doesNotMatch(bookingHtml, /data-reveal/);
  assert.doesNotMatch(confirmationHtml, /data-reveal/);
  assert.match(homeHtml, /Play the Caramel Cleaners logo animation/);
});

test("section links do not leave the document locked to a hash target", async () => {
  const sectionLink = await readFile(
    new URL("../app/components/section-link.tsx", import.meta.url),
    "utf8",
  );

  assert.match(sectionLink, /scrollIntoView/);
  assert.match(sectionLink, /focus\(\{ preventScroll: true \}\)/);
  assert.match(sectionLink, /history\.replaceState/);
  assert.match(sectionLink, /location\.pathname/);
});

test("ships an installable mobile web app manifest", async () => {
  const manifest = JSON.parse(
    await readFile(
      new URL("../public/site.webmanifest", import.meta.url),
      "utf8",
    ),
  );

  assert.equal(manifest.name, "Caramel Cleaners");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.icons[0].src, "icon-192.png");
  assert.equal(manifest.icons[0].sizes, "192x192");
  assert.equal(manifest.icons[0].purpose, "any");
  assert.equal(manifest.icons[1].src, "icon-512.png");
  assert.equal(manifest.icons[1].sizes, "512x512");
});

test("ships circular favicon artwork with transparent corners", async () => {
  const favicon = await readFile(
    new URL("../public/favicon.png", import.meta.url),
  );
  const appleIcon = await readFile(
    new URL("../public/apple-touch-icon.png", import.meta.url),
  );
  const ico = await readFile(
    new URL("../public/favicon.ico", import.meta.url),
  );

  assert.deepEqual(
    Array.from(favicon.subarray(0, 8)),
    [137, 80, 78, 71, 13, 10, 26, 10],
  );
  assert.equal(favicon.readUInt32BE(16), 512);
  assert.equal(favicon.readUInt32BE(20), 512);
  assert.equal(favicon[25], 6);
  assert.equal(appleIcon.readUInt32BE(16), 180);
  assert.equal(appleIcon.readUInt32BE(20), 180);
  assert.deepEqual(Array.from(ico.subarray(0, 4)), [0, 0, 1, 0]);
});
