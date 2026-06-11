import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Solar Installation | Green Energy Systems",
  description:
    "MCS-certified solar panel installation across Hampshire. Systems designed around your home, built to last, and supported for years.",
};

// ─── Icons ───────────────────────────────────────────────────────────────────

const IconPanel = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="12" y1="3" x2="12" y2="17" />
  </svg>
);

const IconBolt = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconBattery = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="18" height="10" rx="2" />
    <line x1="22" y1="11" x2="22" y2="13" strokeWidth="2.5" />
    <line x1="7" y1="12" x2="13" y2="12" />
  </svg>
);

const IconWifi = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
);

const IconHome = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconCar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
    <rect x="7" y="14" width="10" height="6" rx="1" />
    <path d="M7 9l2-5h6l2 5" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolarInstallationPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-ocean">
          {/* Placeholder — replace with real install aerial photo */}
          <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
            {/* Breadcrumb */}
            <p className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent/70">
              Our Services
            </p>

            <h1
              className="max-w-[640px] font-bold leading-[1.08] text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Solar designed to perform, and built to last.
            </h1>
            <p className="mt-5 max-w-[480px] text-[1rem] font-normal leading-relaxed text-white/65">
              MCS-certified installations across Hampshire. Every system is designed around
              your property, your usage, and your plans.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5
                           text-[0.9375rem] font-medium text-ink transition-all
                           hover:-translate-y-0.5 hover:brightness-90"
              >
                Get a free survey
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/25
                           px-7 py-3.5 text-[0.9375rem] font-medium text-white/80
                           transition-colors hover:border-white/50 hover:text-white"
              >
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT'S INCLUDED ────────────────────────────────────────── */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

            <div className="max-w-[560px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                What's Included
              </p>
              <h2
                className="mt-4 font-bold leading-[1.1] text-ink"
                style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
              >
                Everything in one system, not one product.
              </h2>
              <p className="mt-5 text-[1rem] font-normal leading-relaxed text-ink/65">
                A GES solar install covers everything from survey to handover. No
                subcontractors, no gaps in responsibility.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <IconPanel />,
                  title: "Solar Panels",
                  body: "High-efficiency panels specified to your roof orientation, pitch, and shading. Only top-tier manufacturers.",
                },
                {
                  icon: <IconBolt />,
                  title: "Inverter",
                  body: "Converts DC output to usable AC power. Sized to your system and compatible with battery add-ons from day one.",
                },
                {
                  icon: <IconBattery />,
                  title: "Battery Storage",
                  body: "Stores surplus generation for use at night or on cloudy days. Recommended for most homes — we'll model the payback.",
                },
                {
                  icon: <IconWifi />,
                  title: "Live Monitoring",
                  body: "Real-time output data via app, with alerts and remote tuning included. We watch it too.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-sage/20 bg-bone p-7"
                >
                  <span className="text-accent">{icon}</span>
                  <h3 className="mt-5 text-[1.0625rem] font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. STATS STRIP ────────────────────────────────────────────── */}
        <section className="bg-ocean py-14 sm:py-16">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { figure: "10+",    label: "Years installing across Hampshire" },
                { figure: "30yr",   label: "Panel warranties on top-tier hardware" },
                { figure: "MCS",    label: "Certified installer — required for export payments" },
                { figure: "100%",   label: "In-house installs, no subcontractors" },
              ].map(({ figure, label }) => (
                <div key={label}>
                  <p className="text-[2.25rem] font-bold leading-none text-accent">{figure}</p>
                  <p className="mt-2 text-[0.875rem] font-normal leading-snug text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SYSTEM OPTIONS ─────────────────────────────────────────── */}
        <section className="bg-bone py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

            <div className="max-w-[560px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ocean">
                System Options
              </p>
              <h2
                className="mt-4 font-bold leading-[1.1] text-ink"
                style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
              >
                Solar alone, or solar with storage.
              </h2>
              <p className="mt-5 text-[1rem] font-normal leading-relaxed text-ink/65">
                Both are good. The right choice depends on your usage pattern, your
                overnight draw, and what you're trying to optimise for.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {/* Solar only */}
              <div className="flex flex-col rounded-3xl border border-sage/25 bg-paper p-8 lg:p-10">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                  Option 01
                </p>
                <h3 className="mt-4 text-[1.375rem] font-bold leading-snug text-ink">
                  Solar panels only
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/60">
                  Generates electricity during daylight hours and offsets grid usage in real
                  time. Surplus is exported to the grid under the Smart Export Guarantee.
                  Lower upfront cost, strong return if your daytime consumption is high.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Reduces daytime grid draw immediately",
                    "SEG export payments on surplus",
                    "Battery-ready inverter fitted as standard",
                    "Lowest upfront cost",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[0.9rem] text-ink/70">
                      <span className="mt-1 text-accent">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solar + battery */}
              <div className="flex flex-col rounded-3xl bg-ink p-8 lg:p-10">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                  Option 02
                </p>
                <h3 className="mt-4 text-[1.375rem] font-bold leading-snug text-white">
                  Solar with battery storage
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/60">
                  Stores surplus generation for use in the evening, overnight, and on
                  cloudy days. Most customers see the biggest bill reductions with this
                  combination. Recommended if you're home in the evenings or charging an EV.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Use your own energy around the clock",
                    "Greater independence from the grid",
                    "Pairs with EV chargers and heat pumps",
                    "Best long-term return for most households",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[0.9rem] text-white/70">
                      <span className="mt-1 text-accent">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROCESS ────────────────────────────────────────────────── */}
        <section id="how-it-works" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

            <div className="grid gap-16 lg:grid-cols-[1fr,1.4fr] lg:gap-24">

              {/* Left — header + placeholder photo */}
              <div>
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                  The Process
                </p>
                <h2
                  className="mt-4 font-bold leading-[1.1] text-ink"
                  style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
                >
                  From first conversation to working system.
                </h2>
                <p className="mt-5 text-[1rem] leading-relaxed text-ink/65">
                  Most installations are complete within a week of design sign-off. The
                  survey and design stage usually takes longer than the install itself.
                </p>
                {/* Photo placeholder */}
                <div
                  className="mt-10 min-h-[280px] rounded-3xl bg-ocean/20 sm:min-h-[340px]"
                  aria-label="Install photo placeholder"
                />
              </div>

              {/* Right — steps */}
              <div className="flex flex-col divide-y divide-sage/25">
                {[
                  {
                    n: "01",
                    title: "Free site survey",
                    body: "We visit, look at the roof, check the electrics, and talk through your usage. No commitment required.",
                  },
                  {
                    n: "02",
                    title: "System design",
                    body: "We produce two or three options at different price points. You choose, we refine, nothing is rushed.",
                  },
                  {
                    n: "03",
                    title: "Scaffolding and install",
                    body: "Typically one to three days on site. Our own team throughout — no subcontracted trades.",
                  },
                  {
                    n: "04",
                    title: "DNO notification and sign-off",
                    body: "We handle all grid connection paperwork and MCS certification on your behalf.",
                  },
                  {
                    n: "05",
                    title: "Handover and monitoring setup",
                    body: "Full walkthrough of the system, app setup, and shutdown procedures before we leave.",
                  },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-6 py-7">
                    <span className="w-10 shrink-0 tabular-nums text-[1.375rem] font-bold leading-none text-accent/30">
                      {n}
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] font-semibold text-ink">{title}</h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/60">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. WHO IT'S FOR ───────────────────────────────────────────── */}
        <section className="bg-ocean py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

            <div className="max-w-[560px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent/80">
                Who It's For
              </p>
              <h2
                className="mt-4 font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
              >
                Solar works harder for some homes than others.
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-white/60">
                We'll be honest with you during the survey. These are the homes where we
                typically see the strongest returns.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: <IconHome />,
                  title: "Owner-occupiers",
                  body: "High daytime consumption, south or west-facing roof, planning to stay long-term. Solar typically pays back in 6 to 9 years.",
                },
                {
                  icon: <IconCar />,
                  title: "EV drivers",
                  body: "Charging an EV at home significantly increases your electricity use. Solar and battery together can cover most overnight charges.",
                },
                {
                  icon: <IconBriefcase />,
                  title: "Home workers",
                  body: "If you're at home during the day, you consume more during peak solar generation hours. The bill reduction is immediate.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md"
                >
                  <span className="text-accent">{icon}</span>
                  <h3 className="mt-5 text-[1.0625rem] font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-white/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ────────────────────────────────────────────────────── */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

            <div className="grid gap-16 lg:grid-cols-[1fr,1.6fr]">

              <div>
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                  Common Questions
                </p>
                <h2
                  className="mt-4 font-bold leading-[1.1] text-ink"
                  style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
                >
                  Things worth knowing before you commit.
                </h2>
              </div>

              <div className="divide-y divide-sage/25">
                {[
                  {
                    q: "How much roof space do I need?",
                    a: "A typical 4kW system requires around 20 to 25 square metres of usable roof. We assess shading, orientation, and pitch during the survey and give you an honest output estimate.",
                  },
                  {
                    q: "Does it work on cloudy days?",
                    a: "Yes, though output is reduced. Modern panels still generate at 10 to 25% capacity on overcast days. Battery storage helps bridge the gap.",
                  },
                  {
                    q: "What happens to surplus electricity?",
                    a: "If you have a battery, surplus charges it first. Anything remaining is exported to the grid under the Smart Export Guarantee, which pays you a per-unit rate.",
                  },
                  {
                    q: "How long does the installation take?",
                    a: "Most residential installs take one to two days on site. The survey and design stage usually adds a week or two before that.",
                  },
                  {
                    q: "What does MCS certification mean for me?",
                    a: "It means the installer and the installation meet the government's quality standard. It's also a requirement to claim export payments under the Smart Export Guarantee.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="py-7">
                    <h3 className="text-[1.0625rem] font-semibold text-ink">{q}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/60">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. CTA ────────────────────────────────────────────────────── */}
        <section className="bg-ink py-24 sm:py-36">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6 text-center">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent/80">
              Get Started
            </p>
            <h2
              className="mt-5 font-bold leading-[1.1] text-white"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)" }}
            >
              Find out what your roof could generate.
            </h2>
            <p className="mx-auto mt-5 max-w-[420px] text-[1rem] leading-relaxed text-white/55">
              Free survey, no obligation. We'll tell you honestly whether solar makes sense
              for your property.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-accent px-8 py-3.5 text-[0.9375rem] font-medium
                           text-ink transition-all hover:-translate-y-0.5 hover:brightness-90"
              >
                Book a free survey
              </a>
              <a
                href="tel:03301337831"
                className="text-[0.9375rem] font-medium text-white/50 transition-colors hover:text-white"
              >
                03301 337 831
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
