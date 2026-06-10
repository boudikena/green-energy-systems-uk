export default function FinalCTA() {
  return (
    <section className="bg-paper py-24 sm:py-36">
      <div className="mx-auto max-w-[640px] px-4 sm:px-6 text-center">

        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ocean">
          Get Started
        </p>
        <h2
          className="mt-5 font-bold leading-[1.1] text-ink"
          style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)" }}
        >
          Ready to see what your roof could do?
        </h2>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-accent px-8 py-3.5 text-[0.9375rem] font-medium
                       text-ink transition-all hover:-translate-y-0.5 hover:brightness-90"
          >
            Start your solar journey
          </a>
          <a
            href="tel:03301337831"
            className="text-[0.9375rem] font-medium text-ocean transition-colors hover:text-ink"
          >
            03301 337 831
          </a>
        </div>

      </div>
    </section>
  );
}
