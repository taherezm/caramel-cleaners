"use client";

import { useState } from "react";

type BookingEmbedProps = {
  embedUrl: string;
};

export default function BookingEmbed({ embedUrl }: BookingEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const fallbackUrl = new URL(embedUrl);
  fallbackUrl.searchParams.delete("embed");

  return (
    <>
      <div
        className="booking-embed"
        data-booking-provider="bookingkoala"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <div className="booking-loading" role="status" aria-live="polite">
            <span className="loading-spinner" aria-hidden="true" />
            <p>Loading secure booking…</p>
          </div>
        ) : null}

        <iframe
          className={isLoading ? "booking-frame is-loading" : "booking-frame"}
          src={embedUrl}
          title="Book a cleaning service with Caramel Cleaners"
          width="100%"
          height="1000"
          loading="eager"
          scrolling="no"
          allow="payment *"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoading(false)}
        />

        <p className="booking-fallback">
          Having trouble with the form?{" "}
          <a
            href={fallbackUrl.toString()}
            target="_blank"
            rel="noreferrer noopener"
            data-analytics-event="booking_fallback_click"
          >
            Open the secure booking form
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
