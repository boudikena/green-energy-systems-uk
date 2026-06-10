import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeliefStatement from "@/components/sections/BeliefStatement";
import DreamOutcome from "@/components/sections/DreamOutcome";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Proof from "@/components/sections/Proof";
import Aftercare from "@/components/sections/Aftercare";
import HowItWorks from "@/components/sections/HowItWorks";
import EnvironmentalLine from "@/components/sections/EnvironmentalLine";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeliefStatement />
        <DreamOutcome />
        <WhatWeDo />
        <Proof />
        <Aftercare />
        <HowItWorks />
        <EnvironmentalLine />
        <FinalCTA />
      </main>
    </>
  );
}
