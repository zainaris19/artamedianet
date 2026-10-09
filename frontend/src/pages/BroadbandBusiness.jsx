import { BbHero, BbHighlights } from "../components/broadband/BbHero";
import BbAbout from "../components/broadband/BbAbout";
import BbPackages from "../components/broadband/BbPackages";
import BbWhy from "../components/broadband/BbWhy";
import BbIndustries from "../components/broadband/BbIndustries";
import BbCoverage from "../components/broadband/BbCoverage";
import { BbStories, BbCta } from "../components/broadband/BbStoriesCta";
import BbFaq from "../components/broadband/BbFaq";

export default function BroadbandBusiness() {
  return (
    <main data-testid="broadband-page" className="font-jakarta bg-white">
      <BbHero />
      <BbHighlights />
      <BbAbout />
      <BbPackages />
      <BbWhy />
      <BbIndustries />
      <BbCoverage />
      <BbStories />
      <BbCta />
      <BbFaq />
    </main>
  );
}
