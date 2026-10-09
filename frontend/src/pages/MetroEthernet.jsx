import { useEffect } from "react";
import { MeHero, MeHighlights, MeOverview } from "../components/metro/MeHero";
import { MeHow, MeCoverage } from "../components/metro/MeHowCoverage";
import { MeTopology, MeIndustries } from "../components/metro/MeTopologyIndustries";
import { MeWhy, MeStories } from "../components/metro/MeWhyStories";
import { MeCta, MeFaq } from "../components/metro/MeCtaFaq";

export default function MetroEthernet() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Metro Ethernet | Artamedia";
    return () => {
      document.title = prev;
    };
  }, []);
  return (
    <main data-testid="metro-ethernet-page" className="font-jakarta bg-white">
      <MeHero />
      <MeHighlights />
      <MeOverview />
      <MeHow />
      <MeCoverage />
      <MeTopology />
      <MeIndustries />
      <MeWhy />
      <MeStories />
      <MeCta />
      <MeFaq />
    </main>
  );
}
