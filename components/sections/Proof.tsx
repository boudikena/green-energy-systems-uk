"use client";

import { useState } from "react";

// Replace with verbatim Google review text before launch.
// Quotes are constructed from review themes documented in GES_WEBSITE_PROJECT.md §12.
const reviews = [
  {
    quote:
      "Generating 20% more power than expected, and every previous customer I spoke to said the same thing: GES kept supporting them long after the job was done.",
    name: "Stephen Hemmings",
    location: "Hampshire",
    tag: "Solar PV",
  },
  {
    quote:
      "The install was completed in three days and the team left everything immaculate. Chris walked us through two different designs before we settled on the right one.",
    name: "Attila",
    location: "Hampshire",
    tag: "Solar PV",
  },
  {
    quote:
      "Neat, tidy workmanship throughout our workshop installation. You can see the care that goes into every detail of the job.",
    name: "P G",
    location: "Hampshire",
    tag: "Commercial solar",
  },
  {
    quote:
      "We had a complicated EV charger install that other companies had avoided. GES found a clean solution and kept us informed at every step.",
    name: "Mike D",
    location: "Hampshire",
    tag: "EV charging",
  },
  {
    quote:
      "The quality was obvious from the very first conversation. Personal, thorough, and nothing like the high-pressure approach you get elsewhere.",
    name: "Bronwen",
    location: "Hampshire",
    tag: "Solar PV",
  },
];

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Proof() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setActive((i) => (i + 1) % reviews.length);

  const current = reviews[active];

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-12 max-w-[560px]">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
            Customer Reviews
          </p>
          <h2
            className="mt-4 font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
          >
            Real savings, real support.
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="overflow-hidden rounded-3xl border border-white/[0.10]">

          {/* Quote panel */}
          <div className="bg-white/[0.06] p-6 backdrop-blur-md sm:p-8 md:p-10 lg:p-12">

            {/* Stars */}
            <div className="flex gap-0.5" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[1.125rem] text-accent">★</span>
              ))}
            </div>

            {/* Quote — key forces remount so fade-up runs on each change */}
            <blockquote
              key={active}
              className="animate-fade-up delay-0 mt-6 text-[1.125rem] font-normal leading-relaxed text-white sm:text-[1.25rem]"
              aria-live="polite"
            >
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <p
              key={`attr-${active}`}
              className="animate-fade-up delay-150 mt-6 text-[0.875rem] font-medium text-white/50"
            >
              {current.name} &mdash; {current.location}
              <span className="ml-3 rounded-full border border-white/15 px-2.5 py-0.5 text-[0.75rem] font-normal text-white/40">
                {current.tag}
              </span>
            </p>

            {/* Navigation */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20
                           text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20
                           text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <ChevronRight />
              </button>
              <span className="ml-1 text-[0.8125rem] text-white/35">
                {active + 1} / {reviews.length}
              </span>
            </div>

          </div>
        </div>

        {/* Google rating strip */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-accent text-sm">★</span>
            ))}
          </div>
          <p className="text-[0.8125rem] font-medium uppercase tracking-[0.15em] text-white/40">
            Excellent, based on Google reviews
          </p>
        </div>

      </div>
    </section>
  );
}
