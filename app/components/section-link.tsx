"use client";

import type { MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  targetId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export default function SectionLink({
  targetId,
  className,
  ariaLabel,
  children,
}: SectionLinkProps) {
  const moveToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ block: "start", behavior: "auto" });
    target.focus({ preventScroll: true });

    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  };

  return (
    <a
      className={className}
      href={`#${targetId}`}
      aria-label={ariaLabel}
      data-section-link={targetId}
      onClick={moveToSection}
    >
      {children}
    </a>
  );
}
