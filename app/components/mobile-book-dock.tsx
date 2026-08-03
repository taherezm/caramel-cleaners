"use client";

import { useEffect, useState } from "react";
import ArrowIcon from "./arrow-icon";

export const MOBILE_BOOK_DOCK_DELAY_MS = 3 * 60 * 1000;

export default function MobileBookDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, MOBILE_BOOK_DOCK_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <aside
      className={`mobile-book-dock${isVisible ? " mobile-book-dock-visible" : ""}`}
      aria-label="Quick booking"
      aria-hidden={!isVisible}
    >
      <span>
        <strong>Save with recurring care.</strong>
        <small>Up to 15% off each visit.</small>
      </span>
      <a
        href="./book/"
        data-analytics-event="book_now_click"
        aria-label="Book your clean"
        tabIndex={isVisible ? 0 : -1}
      >
        Book now <ArrowIcon />
      </a>
    </aside>
  );
}
