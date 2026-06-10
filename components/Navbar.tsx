const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="flex w-full max-w-[1240px] items-center gap-2">

        {/* Main nav pill — glass */}
        <nav
          className="flex flex-1 items-center justify-between rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     px-5 py-3"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a href="/" className="shrink-0" aria-label="Green Energy Systems — home">
            <img
              src="/images/logo.png"
              alt="Green Energy Systems"
              className="h-auto w-[80px]"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[0.875rem] font-medium text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className="h-[2px] w-5 rounded bg-white" />
            <span className="h-[2px] w-5 rounded bg-white" />
            <span className="h-[2px] w-3.5 self-start rounded bg-white" />
          </button>
        </nav>

        {/* Contact CTA — solid accent, stands out against glass */}
        <a
          href="/contact"
          className="hidden shrink-0 rounded-full bg-accent px-5 py-3 text-[0.875rem]
                     font-medium text-ink transition-all hover:-translate-y-px
                     hover:brightness-90 md:block"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
