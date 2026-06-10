export default function EnvironmentalLine() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">

      {/* Background — replace /images/hampshire-landscape.jpg with real golden-hour install or landscape photo */}
      <div
        className="absolute inset-0 bg-ocean"
        style={{
          backgroundImage: "url('/images/hampshire-landscape.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(11,42,46,0.68)" }}
        aria-hidden="true"
      />

      {/* Statement */}
      <div className="relative z-10 mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-28 text-center">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent/80">
          The Bigger Picture
        </p>
        <h2
          className="mt-5 font-bold leading-[1.15] text-white"
          style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
        >
          Every system we install takes a home off fossil fuels for decades.
          That is the work. The savings are how it pays for itself.
        </h2>
      </div>

    </section>
  );
}
