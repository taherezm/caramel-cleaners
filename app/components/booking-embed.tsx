"use client";

import { useState } from "react";

type BookingEmbedProps = {
  embedUrl?: string;
};

export default function BookingEmbed({ embedUrl }: BookingEmbedProps) {
  const [isLoading, setIsLoading] = useState(Boolean(embedUrl));

  if (!embedUrl) {
    return (
      <div className="booking-unavailable" role="status">
        <span className="booking-unavailable-mark" aria-hidden="true">
          C
        </span>
        <div>
          <h2>Online booking is being connected.</h2>
          <p>
            The booking form will appear here as soon as the secure connection
            is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
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
        title="Customize and book your Caramel Cleaners appointment"
        allow="payment *"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setIsLoading(false)}
      />

      <p className="booking-fallback">
        Having trouble with the form?{" "}
        <a
          href={embedUrl}
          target="_blank"
          rel="noreferrer noopener"
          data-analytics-event="booking_fallback_click"
        >
          Open secure booking in a new window
        </a>
        .
      </p>
    </div>
  );
}
