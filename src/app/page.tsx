import { HeroSection, LogosSection, StatsSection } from "@/components/home";
import { TRUSTED_COMPANIES } from "@/constants/logos";
import { SEAT_MAP_STATS } from "@/constants/stats";


export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <StatsSection
          stats={SEAT_MAP_STATS}
          title="Seats.io in numbers"
        />
        <LogosSection
          logos={TRUSTED_COMPANIES}
          title="They trust us."
          animationSpeed="normal"
        />
      </div>
    </>
  );
}
