"use client";

import type { AnimationEvent, MouseEvent } from "react";

type LogoMarkProps = {
  src: string;
  className?: string;
  label?: string;
};

export default function LogoMark({
  src,
  className = "",
  label = "Play the Caramel Cleaners logo animation",
}: LogoMarkProps) {
  const playAnimation = (event: MouseEvent<HTMLButtonElement>) => {
    const logo = event.currentTarget;

    logo.classList.remove("is-animating");
    void logo.offsetWidth;
    logo.classList.add("is-animating");
  };

  const finishAnimation = (event: AnimationEvent<HTMLButtonElement>) => {
    if (event.animationName === "caramel-logo-spin") {
      event.currentTarget.classList.remove("is-animating");
    }
  };

  return (
    <button
      className={`logo-mark-button ${className}`.trim()}
      type="button"
      aria-label={label}
      onClick={playAnimation}
      onAnimationEnd={finishAnimation}
    >
      <span className="logo-mark-crop" aria-hidden="true">
        <img className="logo-mark-image" src={src} alt="" />
      </span>
      <span className="logo-spark logo-spark-one" aria-hidden="true" />
      <span className="logo-spark logo-spark-two" aria-hidden="true" />
      <span className="logo-spark logo-spark-three" aria-hidden="true" />
    </button>
  );
}
