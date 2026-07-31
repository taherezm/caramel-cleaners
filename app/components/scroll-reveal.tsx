"use client";

import { useEffect } from "react";

const revealTransforms: Record<string, string> = {
  up: "translate3d(0, 22px, 0) scale(0.99)",
  down: "translate3d(0, -18px, 0) scale(0.99)",
  left: "translate3d(-24px, 0, 0) scale(0.99)",
  right: "translate3d(24px, 0, 0) scale(0.99)",
  scale: "translate3d(0, 10px, 0) scale(0.965)",
};

export default function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window) ||
      typeof Element.prototype.animate !== "function"
    ) {
      return;
    }

    const observedElements = new WeakSet<Element>();
    const activeAnimations = new Set<Animation>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const direction = element.dataset.reveal ?? "up";
          const delay = Math.min(
            Math.max(Number(element.dataset.revealDelay) || 0, 0),
            240,
          );
          const animation = element.animate(
            [
              {
                opacity: 0,
                transform: revealTransforms[direction] ?? revealTransforms.up,
              },
              {
                opacity: 1,
                transform: "translate3d(0, 0, 0) scale(1)",
              },
            ],
            {
              duration: 720,
              delay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "both",
            },
          );

          element.dataset.revealState = "visible";
          activeAnimations.add(animation);
          animation.finished
            .catch(() => undefined)
            .finally(() => activeAnimations.delete(animation));
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const observeNewElements = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (
          observedElements.has(element) ||
          element.dataset.revealState === "visible"
        ) {
          return;
        }

        observedElements.add(element);
        observer.observe(element);
      });
    };

    observeNewElements(document);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node.matches("[data-reveal]")) {
            observeNewElements(node.parentNode ?? document);
            return;
          }

          observeNewElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      activeAnimations.forEach((animation) => animation.cancel());
    };
  }, []);

  return null;
}
