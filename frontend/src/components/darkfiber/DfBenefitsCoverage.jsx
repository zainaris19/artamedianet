import { ChartColumnBig, Activity, ShieldCheck, Receipt, Settings2, Headset } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "../dedicated/ui";
import { DF_ASSETS } from "./assets";
import { DfTitle } from "./DfHero";

const BENEFIT_ICONS = [ChartColumnBig, Activity, ShieldCheck, Receipt, Settings2, Headset];
const EDGE = "lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]";

export function DfBenefits() {
  const { t } = useLang();
  const b = t.darkFiber.benefits;
  return (
    <section data-testid="df-benefits" className="bg-white py-16 lg:py-20 grid lg:grid-cols-[1fr_36%] gap-10 items-stretch">
      <Reveal className={`px-6 sm:px-10 lg:pr-0 ${EDGE}`}>
        <BbEyebrow>{b.eyebrow}</BbEyebrow>
        <DfTitle>{b.title}</DfTitle>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {b.items.map(([title, body], i) => {
            const Icon = BENEFIT_ICONS[i];
            return (
              <div key={title} data-testid={`df-benefit-${i}`} className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_30px_-22px_rgba(11,29,69,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <Icon className="w-8 h-8 text-bb-blue" strokeWidth={1.6} />
                <h3 className="mt-4 text-[14.5px] font-bold text-bb-navy">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-bb-text">{body}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
      <Reveal delay={0.1} className="px-6 sm:px-10 lg:px-0">
        <DnImage asset={DF_ASSETS.benefits} className="h-[320px] sm:h-[420px] lg:h-full rounded-xl lg:rounded-r-none lg:rounded-l-[18px] overflow-hidden" />
      </Reveal>
    </section>
  );
}

export function DfCoverage() {
  const { t } = useLang();
  const c = t.darkFiber.coverage;
  const hasMap = Boolean(DF_ASSETS.map.src);
  return (
    <section data-testid="df-coverage" className="relative bg-[#13284D] overflow-hidden">
      <div className={`${WRAP} relative z-10 pt-16 pb-4 lg:py-20`}>
        <Reveal className="max-w-[540px]">
          <BbEyebrow dark>{c.eyebrow}</BbEyebrow>
          <DfTitle dark>
            {c.title1}
            <br />
            {c.title2}
          </DfTitle>
          <p className="mt-5 text-[15px] leading-[1.75] text-slate-300">{c.body}</p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {c.stats.map(([value, label], i) => (
              <div key={value} data-testid={`df-coverage-stat-${i}`}>
                <div className="text-[19px] sm:text-[20px] font-extrabold text-white">{value}</div>
                <div className="mt-1 text-[12px] leading-snug text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div data-testid="df-coverage-map" className={`relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[56%] ${hasMap ? "" : "p-6 lg:p-8"}`}>
        <DnImage asset={DF_ASSETS.map} dark className={`w-full h-[240px] sm:h-[320px] lg:h-full ${hasMap ? "" : "rounded-xl"}`} imgClass="object-[35%_center]" />
        {hasMap && <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#13284D_0%,rgba(19,40,77,0)_25%)] lg:bg-[linear-gradient(90deg,#13284D_0%,rgba(19,40,77,0.6)_18%,rgba(19,40,77,0)_42%)]" />}
      </div>
    </section>
  );
}
