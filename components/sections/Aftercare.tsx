const items = [
  {
    n: "01",
    heading: "Free system monitoring for life",
    body: "We watch your system and flag chances to tune it as your needs change or technology improves.",
  },
  {
    n: "02",
    heading: "2-year workmanship guarantee",
    body: "Starts automatically at handover. No registration, no small print.",
  },
  {
    n: "03",
    heading: "Warranties up to 30 years",
    body: "On top-tier panels and inverters. The hardware backs up the quality of the build.",
  },
  {
    n: "04",
    heading: "Real support, for as long as you need it",
    body: "Technical questions answered years later, because that is when it actually matters.",
  },
  {
    n: "05",
    heading: "Optional extras handled too",
    body: "Panel cleaning arranged, bird protection from £750, whenever the system needs attention.",
  },
];

export default function Aftercare() {
  return (
    <section className="bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

        {/* Header */}
        <div className="grid md:grid-cols-2 md:gap-12 lg:gap-16 mb-16">
          <div>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ocean">
              Aftercare
            </p>
            <h2
              className="mt-4 font-bold leading-[1.1] text-ink"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
            >
              Most installers leave at handover. We don't.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 self-end text-[1rem] font-normal leading-relaxed text-ink/65 max-w-[460px]">
            The reviews that matter to us are the ones written two years after install,
            not two weeks. That is the standard we hold ourselves to.
          </p>
        </div>

        {/* Feature rows */}
        <div className="divide-y divide-sage/25">
          {items.map((item) => (
            <div
              key={item.n}
              className="flex items-start gap-x-6 py-7 md:gap-x-10"
            >
              {/* Number — fixed width so heading always starts at the same x */}
              <span
                className="w-16 shrink-0 tabular-nums text-[2.25rem] font-bold leading-none text-accent/25"
                aria-hidden="true"
              >
                {item.n}
              </span>

              {/* Heading + body — stacked on mobile, side-by-side on desktop */}
              <div className="flex-1 md:grid md:grid-cols-[1fr,1.6fr] md:gap-x-10 md:items-start">
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                  {item.heading}
                </h3>
                <p className="mt-2 text-[0.9375rem] font-normal leading-relaxed text-ink/60 md:mt-0">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
