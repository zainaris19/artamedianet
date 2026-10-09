import { Building, FileCheck2, UsersRound, Headset } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "./ui";
import { DN_ASSETS } from "./assets";

const WHY_ICONS = [Building, FileCheck2, UsersRound, Headset];

export function DnCoverage() {
  const { t } = useLang();
  const c = t.dedicated.coverage;
  return (
    <section data-testid="dn-coverage" className="relative bg-[#13284D] overflow-hidden">
      <div className={`${WRAP} relative z-10 pt-16 pb-4 lg:py-24`}>
        <Reveal className="max-w-[520px]">
          <BbEyebrow dark>{c.eyebrow}</BbEyebrow>
          <h2 className="mt-4 text-[32px] lg:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
            {c.title1}
            <br />
            {c.title2}
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.75] text-slate-300">{c.body}</p>
          <div className="mt-10 flex flex-wrap sm:flex-nowrap gap-y-6">
            {c.stats.map(([value, label], i) => (
              <div key={value} data-testid={`dn-coverage-stat-${i}`} className={`shrink-0 pr-6 ${i ? "pl-6 border-l border-white/15" : ""}`}>
                <div className="whitespace-nowrap text-[20px] font-extrabold text-white">{value}</div>
                <div className="mt-1.5 text-[12px] leading-snug text-slate-400 max-w-[120px]">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] p-6 lg:p-8">
        <DnImage asset={DN_ASSETS.map} dark className="w-full h-[260px] lg:h-full rounded-xl" />
      </div>
    </section>
  );
}

export function DnWhy() {
  const { t } = useLang();
  const w = t.dedicated.why;
  return (
    <section data-testid="dn-why" className="bg-white py-20 lg:py-24">
      <div className={`${WRAP} grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center`}>
        <Reveal>
          <BbEyebrow>{w.eyebrow}</BbEyebrow>
          <h2 className="mt-4 text-[32px] lg:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] text-bb-navy">
            {w.title1}
            <br />
            {w.title2}
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.75] text-bb-text max-w-[470px]">{w.body}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-y-10">
          {w.items.map(([title, body], i) => {
            const Icon = WHY_ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.07}>
                <div data-testid={`dn-why-item-${i}`} className={`flex gap-5 ${i % 2 ? "sm:pl-10 sm:border-l border-slate-200" : "sm:pr-8"}`}>
                  <Icon className="w-9 h-9 shrink-0 text-bb-blue" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-[15px] font-bold text-bb-navy">{title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-bb-text">{body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
