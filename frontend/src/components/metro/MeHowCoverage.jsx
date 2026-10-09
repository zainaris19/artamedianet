import { CircleCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "../dedicated/ui";
import { ME_ASSETS } from "./assets";

export function MeHow() {
  const { t } = useLang();
  const h = t.metro.how;
  return (
    <section data-testid="me-how" className="bg-white py-16 lg:py-20">
      <div className={`${WRAP} grid lg:grid-cols-12 gap-10 items-center`}>
        <Reveal className="lg:col-span-9 min-w-0">
          <BbEyebrow>{h.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[30px] lg:text-[38px] leading-[1.15]">{h.title}</h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-bb-text">{h.body}</p>
          <div className="mt-6 -mx-2 overflow-x-auto" data-testid="me-diagram">
            <DnImage
              asset={{ ...ME_ASSETS.diagram, alt: h.alt }}
              className="min-w-[640px] aspect-[2000/400] overflow-hidden"
              imgClass="object-[50%_52%]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <ul data-testid="me-how-checklist" className="rounded-xl border border-slate-200 bg-[#F6F9FE] p-6 space-y-4">
            {h.checks.map((c, i) => (
              <li key={c} data-testid={`me-how-check-${i}`} className="flex items-center gap-3 text-[13.5px] font-medium text-bb-navy">
                <CircleCheck className="w-5 h-5 text-bb-blue shrink-0" strokeWidth={2} />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function MeCoverage() {
  const { t } = useLang();
  const c = t.metro.coverage;
  const hasMap = Boolean(ME_ASSETS.map.src);
  return (
    <section data-testid="me-coverage" className="relative bg-[#13284D] overflow-hidden">
      <div className={`${WRAP} relative z-10 pt-16 pb-4 lg:py-20`}>
        <Reveal className="max-w-[560px]">
          <BbEyebrow dark>{c.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-white text-[30px] lg:text-[38px] leading-[1.15]">{c.title}</h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-slate-300">{c.body}</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {c.stats.map(([value, label], i) => (
              <div key={value} data-testid={`me-coverage-stat-${i}`}>
                <div className="text-[20px] font-extrabold text-white whitespace-nowrap">{value}</div>
                <div className="mt-1 text-[12px] leading-snug text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div data-testid="me-coverage-map" className={`relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%] ${hasMap ? "" : "p-6 lg:p-8"}`}>
        <DnImage asset={ME_ASSETS.map} dark className={`w-full h-[240px] sm:h-[320px] lg:h-full ${hasMap ? "" : "rounded-xl"}`} imgClass="object-[35%_center]" />
        {hasMap && <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#13284D_0%,rgba(19,40,77,0)_25%)] lg:bg-[linear-gradient(90deg,#13284D_0%,rgba(19,40,77,0.6)_18%,rgba(19,40,77,0)_42%)]" />}
        {hasMap && (
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 flex gap-4 lg:gap-8 text-[11px] lg:text-[12px] text-slate-300">
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-bb-blue" />{c.legend[0]}</span>
            <span className="flex items-center gap-2"><span className="w-6 h-[2px] bg-bb-blue" />{c.legend[1]}</span>
          </div>
        )}
      </div>
    </section>
  );
}
