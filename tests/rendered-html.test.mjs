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
  assert.match(html, /href="\.\/book\/"/);
  assert.match(html, /Play the Caramel Cleaners logo animation/);
  assert.match(html, /Animate the Detailed \/ First Clean logo/);
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
  assert.match(html, /Upfront pricing/);
  assert.match(html, /Flexible scheduling/);
  assert.match(html, /Secure online booking/);
  assert.match(html, /Animate the Caramel Cleaners booking logo/);
  assert.match(
    html,
    /class="logo-mark-button logo-mark-header" href="\.\.\/" aria-label="Caramel Cleaners home"/,
  );
  assert.match(html, /Online booking is being connected/);
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
