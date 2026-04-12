import Hero from "@/components/sections/Hero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import HybridAttendance from "@/components/sections/HybridAttendance";
import Dashboard from "@/components/sections/Dashboard";
import EarlyAdopters from "@/components/sections/EarlyAdopters";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <HowItWorks />
      <Features />
      <HybridAttendance />
      <Dashboard />
      <EarlyAdopters />
      <Pricing />
      <FinalCTA />
    </>
  );
}
