"use client";

import type { AnimationEvent, MouseEvent } from "react";

type LogoMarkProps = {
  src: string;
  className?: string;
  label?: string;
  href?: string;
  dataReveal?: string;
  dataRevealDelay?: number | string;
};

export default function LogoMark({
  src,
  className = "",
  label,
  href,
  dataReveal,
  dataRevealDelay,
}: LogoMarkProps) {
  const playAnimation = (event: MouseEvent<HTMLButtonElement>) => {
    const logo = event.currentTarget;

    logo.classList.remove("is-animating");
    void logo.offsetWidth;
    logo.classList.add("is-animating");

    // Pointer users should return immediately to the document scroll context.
    // Keyboard activation keeps focus so the control remains accessible.
    if (event.detail > 0) {
      logo.blur();
    }
  };

  const finishAnimation = (event: AnimationEvent<HTMLButtonElement>) => {
    if (event.animationName === "caramel-logo-spin") {
      event.currentTarget.classList.remove("is-animating");
    }
  };

  const artwork = (
    <>
      <span className="logo-mark-crop" aria-hidden="true">
        <img className="logo-mark-image" src={src} alt="" />
      </span>
      <span className="logo-spark logo-spark-one" aria-hidden="true" />
      <span className="logo-spark logo-spark-two" aria-hidden="true" />
      <span className="logo-spark logo-spark-three" aria-hidden="true" />
    </>
  );
  const classNames = `logo-mark-button ${className}`.trim();

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        aria-label={label ?? "Caramel Cleaners home"}
        data-reveal={dataReveal}
        data-reveal-delay={dataRevealDelay}
      >
        {artwork}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      type="button"
      aria-label={label ?? "Play the Caramel Cleaners logo animation"}
      onClick={playAnimation}
      onAnimationEnd={finishAnimation}
      data-reveal={dataReveal}
      data-reveal-delay={dataRevealDelay}
    >
      {artwork}
    </button>
  );
}
