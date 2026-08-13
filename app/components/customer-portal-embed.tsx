"use client";

import { useState } from "react";

type CustomerPortalEmbedProps = {
  embedUrl: string;
};

export default function CustomerPortalEmbed({
  embedUrl,
}: CustomerPortalEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const fallbackUrl = new URL(embedUrl);
  fallbackUrl.searchParams.delete("embed");

  return (
    <>
      <div
        className="booking-embed portal-embed"
        data-booking-provider="bookingkoala"
        data-portal-type="customer"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <div className="booking-loading" role="status" aria-live="polite">
            <span className="loading-spinner" aria-hidden="true" />
            <p>Loading secure client login…</p>
          </div>
        ) : null}

        <iframe
          className={
            isLoading
              ? "booking-frame portal-frame is-loading"
              : "booking-frame portal-frame"
          }
          src={embedUrl}
          title="Sign in to the Caramel Cleaners client portal"
          width="100%"
          height="800"
          loading="eager"
          scrolling="no"
          allow="payment *"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoading(false)}
        />

        <p className="booking-fallback">
          Having trouble signing in?{` `}
          <a
            href={fallbackUrl.toString()}
            target="_blank"
            rel="noreferrer noopener"
            data-analytics-event="client_portal_fallback_click"
          >
            Open the secure client portal
          </a>
          .
        </p>
      </div>

      <script
        src="https://caramelcleaners.bookingkoala.com/resources/embed.js"
        defer
      />
    </>
  );
}
