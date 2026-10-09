import { DnHero, DnHighlights } from "../components/dedicated/DnHero";
import { DnOverview, DnSolutions } from "../components/dedicated/DnOverview";
import { DnCoverage, DnWhy } from "../components/dedicated/DnCoverageWhy";
import { DnIndustries, DnStart } from "../components/dedicated/DnIndustriesStart";

export default function DedicatedNetwork() {
  return (
    <main data-testid="dedicated-page" className="font-jakarta bg-white">
      <DnHero />
      <DnHighlights />
      <DnOverview />
      <DnSolutions />
      <DnCoverage />
      <DnWhy />
      <DnIndustries />
      <DnStart />
    </main>
  );
}
