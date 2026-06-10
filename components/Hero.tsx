function TrustCard({ compact = false }: { compact?: boolean }) {
  return (
    /* Glow wrapper — overflow-hidden clips the conic-gradient to rounded rect */
    <div className="relative rounded-3xl">
      {/* Rotating glow layer */}
      <div className="card-glow-border absolute inset-0 rounded-3xl" />
      {/* Card content */}
      <div className="relative m-px rounded-[23px] bg-white/10 backdrop-blur-md border border-white/15 p-5">
        <p className="text-[0.625rem] font-medium uppercase tracking-widest text-accent">
          Ten years across Hampshire
        </p>
        <p className="mt-2 text-[0.9375rem] font-semibold leading-snug text-white">
          Solar that pays for itself, fitted properly
        </p>
        {!compact && (
          <div
            className="mt-3 h-24 w-full rounded-xl bg-white/10 border border-white/10"
            aria-label="Install photo placeholder"
          />
        )}
        <p className="mt-3 text-[0.8125rem] font-normal leading-relaxed text-white/70">
          Tidy installs, honest advice, and customers who still hear from us years later.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-ocean"
        style={{
          backgroundImage: "url('/images/hero-placeholder.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,42,46,0.55) 0%, rgba(11,42,46,0.35) 45%, rgba(11,42,46,0.05) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content shell */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1
                   flex-col justify-end px-4 pb-20
                   sm:px-6
                   lg:flex-row lg:items-end lg:justify-start lg:pb-0"
      >

        {/* LEFT — text + mobile trust card */}
        <div className="lg:flex-1 lg:pb-20">
          <div className="w-full max-w-[580px]">
            <h1
              className="animate-fade-up delay-0 font-bold leading-[1.1] text-white
                         text-[1.875rem] sm:text-[2.375rem] lg:text-[2.875rem]"
              style={{ textShadow: "0 2px 24px rgba(11,42,46,0.45)" }}
            >
              Lower bills, cleaner power, built around your home.
            </h1>

            <div className="animate-fade-up delay-150 relative mt-7 inline-flex rounded-full">
              <div className="card-glow-border absolute inset-0 rounded-full" />
              <a
                href="/contact"
                className="relative m-px inline-flex items-center rounded-full bg-accent
                           px-7 py-3.5 font-medium text-ink text-[0.9375rem]
                           transition-all hover:-translate-y-0.5 hover:brightness-90"
              >
                Start your solar journey
              </a>
            </div>
          </div>

          {/* Mobile / tablet trust card */}
          <div className="mt-8 w-full max-w-[400px] lg:hidden">
            <TrustCard compact />
          </div>
        </div>

        {/* RIGHT — desktop trust card */}
        <div className="hidden lg:block lg:pb-20 lg:pl-10">
          <div className="w-[260px]">
            <TrustCard />
          </div>
        </div>

      </div>
    </section>
  );
}
