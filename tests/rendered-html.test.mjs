import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/", import.meta.url);

test("renders a focused Caramel Cleaners homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(
    html,
    /<title>Caramel Cleaners \| Home Cleaning Made Simple<\/title>/i,
  );
  assert.match(html, /without the guesswork/);
  assert.match(html, /Routine Clean/);
  assert.match(html, /Detailed \/ First Clean/);
  assert.match(html, /Move-In \/ Move-Out Clean/);
  assert.match(html, /Most popular/);
  assert.match(html, /id="standards"/);
  assert.match(html, /The person entering your home matters/);
  assert.match(html, /Every Caramel Cleaner is carefully vetted/);
  assert.doesNotMatch(html, /Every Caramel Cleaners professional/);
  assert.match(html, /carefully vetted/);
  assert.match(html, /extensively background-checked/);
  assert.match(html, /covered by liability insurance/);
  assert.match(html, /Liability insured/);
  assert.match(html, /clear communication/);
  assert.match(html, /Identity and criminal-history screening/);
  assert.match(html, /accidental property damage/);
  assert.match(html, /href="\.\/book\/"/);
  assert.match(html, /Play the Caramel Cleaners logo animation/);
  assert.doesNotMatch(html, /Animate the .* Clean logo/);
  assert.match(
    html,
    /clean online, all without waiting for a quote\./,
  );
  assert.match(html, /Animate the Caramel Cleaners closing logo/);
  assert.match(html, /ui-arrow ui-arrow-up-right/);
  assert.match(html, /ui-arrow ui-arrow-down/);
  assert.doesNotMatch(html, /[↗↘↙↖→←↑↓]/);
  assert.equal((html.match(/<details>/g) ?? []).length, 3);
  assert.match(html, /service-summary-action-closed/);
  assert.match(html, /service-summary-action-open/);
  assert.match(html, /service-summary-chevron/);
  assert.match(html, /class="brand-name"[^>]*>Caramel Cleaners</);
  assert.match(html, /class="mobile-book-dock"/);
  assert.match(html, /Ready for a reset/);
  assert.match(
    html,
    /class="logo-mark-button logo-mark-header" href="\.\/" aria-label="Caramel Cleaners home"/,
  );
  assert.doesNotMatch(html, /brand-wordmark\.png/);
  assert.match(html, /site\.webmanifest/);
  assert.match(html, /apple-mobile-web-app-capable/);
  assert.match(html, /theme-color/);
  assert.match(html, /og\.png\?v=text-only-20260728/);
  assert.match(html, /property="og:image:alt" content="Caramel Cleaners"/);
  assert.doesNotMatch(html, /Come home to clean/);
  assert.doesNotMatch(html, /data-booking-provider="bookingkoala"/);
  assert.doesNotMatch(html, /Bedrooms|Next: Your home/);
});

test("renders a dedicated booking page with a safe missing-config state", async () => {
  const html = await readFile(new URL("book/index.html", output), "utf8");

  assert.match(html, /<title>Book Your Clean \| Caramel Cleaners<\/title>/i);
  assert.match(
    html,
    /Customize your cleaning, see your price, and book online/,
  );
  assert.match(
    html,
    /aria-label="Why homeowners choose Caramel Cleaners"/,
  );
  assert.match(html, /More time for what matters/);
  assert.match(html, /Detail-focused cleaning/);
  assert.match(html, /Scheduling that fits your life/);
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
});

test("styles service details as clear collapsible dropdowns", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /summary::\-webkit-details-marker/);
  assert.match(css, /\.service-tier details\[open\] summary/);
  assert.match(
    css,
    /\.service-tier details\[open\] \.service-summary-chevron/,
  );
});

test("presents booking benefits as a large open checklist", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    css,
    /\.booking-trust\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/,
  );
  assert.match(
    css,
    /\.booking-trust li\s*\{[^}]*font-size:\s*17px/,
  );
  assert.doesNotMatch(
    css,
    /\.booking-trust li\s*\{[^}]*border-radius/,
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
  assert.equal(manifest.icons[0].purpose, "any maskable");
});
