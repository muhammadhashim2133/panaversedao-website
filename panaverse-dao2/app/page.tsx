import CoreTracks from "./components/widgets/CoreTracks";
import Hero from "./components/widgets/Hero";
import OutCome from "./components/widgets/OutCome";
import SpecilizedTrack from "./components/widgets/SpecilizedTrack";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreTracks />
      <SpecilizedTrack />
      <OutCome />
    </>
  );
}
