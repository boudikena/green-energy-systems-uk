const steps = [
  {
    n: 1,
    title: "We visit and listen",
    body: "Your usage, your plans, your property. The visit is the foundation for everything that follows.",
  },
  {
    n: 2,
    title: "We design the right system",
    body: "Most customers see two or three options. We go through them together until it fits.",
  },
  {
    n: 3,
    title: "We install",
    body: "Typically days, not weeks. Tidy, on schedule, with full handover including shutdown procedures.",
  },
  {
    n: 4,
    title: "We stay with you",
    body: "Monitoring, support, and tuning for the long run. Not a final visit and a wave.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-ocean py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 max-w-[560px]">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent/80">
            The Process
          </p>
          <h2
            className="mt-4 font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
          >
            Simple, personal, and thorough.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">

          {/*
            Desktop (lg): 4-col grid, circles centred in each column.
            Line runs from centre of col 1 (12.5%) to centre of col 4 (87.5%).
          */}
          <div
            className="absolute top-[27px] hidden h-px bg-white/20 lg:block"
            style={{ left: "calc(100% / 8)", right: "calc(100% / 8)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={step.n}
                /*
                  Mobile:  flex-row — circle column left, text column right
                  sm:      flex-col — stacked, left-aligned
                  lg:      flex-col — stacked, centred (so circles align with the horizontal line)
                */
                className="flex items-start gap-5 sm:flex-col sm:items-start sm:gap-0 lg:flex-col lg:items-center"
              >
                {/* Circle + vertical connector (mobile only) */}
                <div className="flex shrink-0 flex-col items-center sm:block">
                  <div
                    className="relative z-10 flex h-14 w-14 items-center justify-center
                                 rounded-full bg-accent text-[1.0625rem] font-bold text-ink
                                 sm:mb-6"
                  >
                    {step.n}
                  </div>

                  {/* Vertical line segment between this circle and the next — mobile only */}
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[3rem] bg-white/20 sm:hidden" />
                  )}
                </div>

                {/* Text */}
                <div className="pb-10 sm:pb-0 lg:text-center">
                  <h3 className="text-[1.0625rem] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] font-normal leading-relaxed text-white/60">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
