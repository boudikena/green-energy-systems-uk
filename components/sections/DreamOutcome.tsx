import type { ReactNode } from "react";

type Card = { icon: ReactNode; headline: string; body: string };

const IconBolt = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconHouse = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconReturn = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const cards: Card[] = [
  {
    icon: <IconBolt />,
    headline: "Lower bills from day one",
    body: "Generate your own electricity and watch your grid usage drop the moment the system goes live.",
  },
  {
    icon: <IconHouse />,
    headline: "Rising prices stop being your problem",
    body: "Your roof becomes your power station, so price hikes no longer dictate what you pay.",
  },
  {
    icon: <IconReturn />,
    headline: "A home that pays you back",
    body: "Spare energy charges your battery, tops up your EV, or earns you export payments.",
  },
];

export default function DreamOutcome() {
  return (
    <section className="bg-ocean py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="max-w-[560px]">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
            What Changes
          </p>
          <h2
            className="mt-4 font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)" }}
          >
            The difference starts the day it is switched on.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-3xl border border-white/[0.10] bg-white/[0.06]
                         p-7 backdrop-blur-md${i === 2 ? " sm:col-span-2 md:col-span-1" : ""}`}
            >
              <span className="text-accent">{card.icon}</span>
              <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug text-white">
                {card.headline}
              </h3>
              <p className="mt-3 text-[0.9rem] font-normal leading-relaxed text-white/60">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
