"use client";

import { useState } from "react";

const services = [
  {
    id: "regular",
    number: "01",
    title: "Regular clean",
    description:
      "A dependable reset for kitchens, bathrooms, bedrooms, and shared spaces.",
  },
  {
    id: "deep",
    number: "02",
    title: "Deep clean",
    description:
      "A detailed top-to-bottom refresh for the places that need extra attention.",
    tag: "Most popular",
  },
  {
    id: "move",
    number: "03",
    title: "Move clean",
    description:
      "A thorough clean for the home you are leaving or the one you are entering.",
  },
] as const;

const frequencies = ["One time", "Every week", "Every 2 weeks"] as const;
const extras = ["Inside oven", "Inside fridge", "Interior windows"] as const;

type ServiceId = (typeof services)[number]["id"];
type Frequency = (typeof frequencies)[number];
type Extra = (typeof extras)[number];

export default function CleanBuilder() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceId>("deep");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [frequency, setFrequency] = useState<Frequency>("One time");
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);

  const selectedService = services.find((item) => item.id === service)!;

  function toggleExtra(extra: Extra) {
    setSelectedExtras((current) =>
      current.includes(extra)
        ? current.filter((item) => item !== extra)
        : [...current, extra],
    );
  }

  return (
    <div
      className="builder"
      data-booking-provider="bookingkoala"
      aria-label="Build your clean"
    >
      {/* Replace this builder body with the BookingKoala iframe when its account embed code is ready. */}
      <div className="builder-header">
        <div>
          <p>Build your clean</p>
          <h2>Start with what your home needs.</h2>
        </div>
        <span className="builder-progress">Step {step} of 3</span>
      </div>

      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      <div className="builder-body">
        {step === 1 ? (
          <div className="builder-step">
            <div className="builder-step-heading">
              <span>01</span>
              <div>
                <h3>Choose your clean</h3>
                <p>Select the best starting point. You can adjust details next.</p>
              </div>
            </div>

            <div className="builder-services">
              {services.map((item) => (
                <button
                  className={`builder-service${service === item.id ? " selected" : ""}`}
                  type="button"
                  aria-pressed={service === item.id}
                  onClick={() => setService(item.id)}
                  key={item.id}
                >
                  <span className="builder-service-topline">
                    <span>{item.number}</span>
                    {item.tag ? <span className="popular-tag">{item.tag}</span> : null}
                  </span>
                  <strong>{item.title}</strong>
                  <span className="builder-service-description">
                    {item.description}
                  </span>
                  <span className="selection-indicator" aria-hidden="true">
                    {service === item.id ? "✓" : ""}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="builder-step">
            <div className="builder-step-heading">
              <span>02</span>
              <div>
                <h3>Tell us about your home</h3>
                <p>A few details help shape the right amount of time and care.</p>
              </div>
            </div>

            <div className="home-controls">
              <div className="counter-card">
                <div>
                  <span>Bedrooms</span>
                  <strong>{bedrooms}</strong>
                </div>
                <div className="counter-actions">
                  <button
                    type="button"
                    aria-label="Remove a bedroom"
                    onClick={() => setBedrooms((value) => Math.max(0, value - 1))}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    aria-label="Add a bedroom"
                    onClick={() => setBedrooms((value) => Math.min(10, value + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="counter-card">
                <div>
                  <span>Bathrooms</span>
                  <strong>{bathrooms}</strong>
                </div>
                <div className="counter-actions">
                  <button
                    type="button"
                    aria-label="Remove a bathroom"
                    onClick={() => setBathrooms((value) => Math.max(1, value - 1))}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    aria-label="Add a bathroom"
                    onClick={() => setBathrooms((value) => Math.min(10, value + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <fieldset className="frequency-fieldset">
              <legend>How often?</legend>
              <div className="frequency-options">
                {frequencies.map((item) => (
                  <button
                    className={frequency === item ? "selected" : ""}
                    type="button"
                    aria-pressed={frequency === item}
                    onClick={() => setFrequency(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="builder-step">
            <div className="builder-step-heading">
              <span>03</span>
              <div>
                <h3>Add the finishing touches</h3>
                <p>Choose any extras, then review the clean you have built.</p>
              </div>
            </div>

            <div className="extras-grid">
              {extras.map((extra) => (
                <button
                  className={selectedExtras.includes(extra) ? "selected" : ""}
                  type="button"
                  aria-pressed={selectedExtras.includes(extra)}
                  onClick={() => toggleExtra(extra)}
                  key={extra}
                >
                  <span>{extra}</span>
                  <span aria-hidden="true">
                    {selectedExtras.includes(extra) ? "✓" : "+"}
                  </span>
                </button>
              ))}
            </div>

            <div className="clean-summary" aria-label="Your clean summary">
              <div>
                <span>Service</span>
                <strong>{selectedService.title}</strong>
              </div>
              <div>
                <span>Home</span>
                <strong>
                  {bedrooms} bed · {bathrooms} bath
                </strong>
              </div>
              <div>
                <span>Frequency</span>
                <strong>{frequency}</strong>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="builder-footer">
        {step > 1 ? (
          <button
            className="builder-back"
            type="button"
            onClick={() => setStep((value) => value - 1)}
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button
            className="builder-next"
            type="button"
            onClick={() => setStep((value) => value + 1)}
          >
            {step === 1 ? "Next: Your home" : "Next: Add details"}{" "}
            <span aria-hidden="true">→</span>
          </button>
        ) : (
          <button className="builder-next" type="button" disabled>
            Scheduling coming soon
          </button>
        )}
      </div>
    </div>
  );
}
