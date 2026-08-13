"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, string>>;
};

function emitSiteEvent(event: string) {
  const analyticsWindow = window as AnalyticsWindow;

  analyticsWindow.dataLayer?.push({ event });
  window.dispatchEvent(
    new CustomEvent("caramel:analytics", {
      detail: { event },
    }),
  );
}

export default function AnalyticsBridge() {
  useEffect(() => {
    const normalizedPath = window.location.pathname.replace(/\/+$/, "");

    if (normalizedPath.endsWith("/book")) {
      emitSiteEvent("booking_page_view");
    }

    if (normalizedPath.endsWith("/thank-you")) {
      emitSiteEvent("completed_booking_page_view");
    }

    if (normalizedPath.endsWith("/account")) {
      emitSiteEvent("client_portal_page_view");
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const trackedElement = target?.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      const eventName = trackedElement?.dataset.analyticsEvent;

      if (eventName) {
        emitSiteEvent(eventName);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
