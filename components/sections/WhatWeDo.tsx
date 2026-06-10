const ArrowLink = ({ label }: { label: string }) => (
  <a
    href="#"
    className="group mt-6 inline-flex items-center gap-2 text-[0.875rem] font-medium
               text-ink underline underline-offset-4 decoration-ink/30
               transition-colors hover:text-ocean hover:decoration-ocean"
  >
    {label}
    <svg
      width="13" height="13" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.25"
      strokeLinecap="round" strokeLinejoin="round"
      className="transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </a>
);

export default function WhatWeDo() {
  return (
    <section className="overflow-hidden bg-paper">
      <div className="grid md:grid-cols-2">

        {/* Image — replace /images/residential-install.jpg with real install photo */}
        <div
          className="relative min-h-[280px] bg-ocean/25 sm:min-h-[360px] md:min-h-[520px] lg:min-h-[680px]"
          style={{
            backgroundImage: "url('/images/residential-install.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Residential solar installation"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, rgba(244,243,238,0.15) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Text panel — two equal blocks */}
        <div className="flex flex-col divide-y divide-sage/25 px-6 py-12 sm:px-8 md:px-10 lg:px-16 xl:px-20">

          {/* Residential */}
          <div className="flex flex-col pb-10 md:pb-12">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
              Residential
            </p>
            <h2
              className="mt-4 font-bold leading-snug text-ink"
              style={{ fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)" }}
            >
              No two homes are the same.
            </h2>
            <p className="mt-4 max-w-[460px] text-[0.9375rem] font-normal leading-relaxed text-ink/70">
              Every system is shaped to the property and the people in it. Solar panels,
              battery storage, and inverter control built for how you actually live, including
              EVs, heated pools, hot tubs, and future plans. Nothing off the shelf.
            </p>
            <ArrowLink label="Find out more" />
          </div>

          {/* Commercial */}
          <div className="flex flex-col pt-10 md:pt-12">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ocean">
              Commercial
            </p>
            <h2
              className="mt-4 font-bold leading-snug text-ink"
              style={{ fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)" }}
            >
              Every business runs differently.
            </h2>
            <p className="mt-4 max-w-[460px] text-[0.9375rem] font-normal leading-relaxed text-ink/70">
              Systems scoped to the site and the return, from bulk battery charging to
              warehouse plant. Designed against your actual demand and expected ROI, not a
              generic spec.
            </p>
            <ArrowLink label="Find out more" />
          </div>

        </div>
      </div>
    </section>
  );
}
