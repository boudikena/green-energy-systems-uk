const SunIcon = () => (
  <svg
    width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.25"
    strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
);

export default function BeliefStatement() {
  return (
    <section className="bg-ink overflow-hidden pt-20 pb-20 sm:pt-28 lg:pt-36">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-accent">
            <SunIcon />
          </span>

          <div className="mt-4 inline-flex items-center rounded-full border border-white/20 px-4 py-1.5">
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/50">
              Why We Exist
            </span>
          </div>

          <h2
            className="mt-8 max-w-[760px] font-bold leading-[1.06] text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            We believe every home can power itself.
          </h2>
        </div>

        {/* Staggered image placeholders — replace bg-ocean/40 with real install photos */}
        <div className="mt-14 flex items-stretch gap-3 sm:mt-20 sm:gap-5">

          {[
            { label: "Solar Panels",    bg: "bg-ocean/40" },
            { label: "Battery Storage", bg: "bg-ocean/40" },
            { label: "EV Chargers",     bg: "bg-ocean/40" },
          ].map(({ label, bg }) => (
            <div
              key={label}
              className={`relative flex-1 overflow-hidden rounded-2xl sm:rounded-3xl
                          min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] ${bg}`}
            >
              {/* Gradient scrim so text reads against any photo */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(11,42,46,0.7) 0%, transparent 100%)" }}
                aria-hidden="true"
              />
              {/* Label row */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-5">
                <span className="text-[0.6875rem] font-medium text-white sm:text-[0.875rem]">{label}</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
