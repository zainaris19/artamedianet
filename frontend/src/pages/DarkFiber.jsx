import { useEffect } from "react";
import { DfHero, DfHighlights, DfAbout } from "../components/darkfiber/DfHero";
import { DfBenefits, DfCoverage } from "../components/darkfiber/DfBenefitsCoverage";
import { DfUseCases, DfSpecs } from "../components/darkfiber/DfUseCasesSpecs";
import { DfProcess, DfCta, DfFaq } from "../components/darkfiber/DfProcessCtaFaq";

export default function DarkFiber() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Dark Fiber | Artamedia";
    return () => {
      document.title = prev;
    };
  }, []);
  return (
    <main data-testid="dark-fiber-page" className="font-jakarta bg-white">
      <DfHero />
      <DfHighlights />
      <DfAbout />
      <DfBenefits />
      <DfCoverage />
      <DfUseCases />
      <DfSpecs />
      <DfProcess />
      <DfCta />
      <DfFaq />
    </main>
  );
}
