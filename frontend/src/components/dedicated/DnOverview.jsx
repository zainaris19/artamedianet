import { ChartColumnBig, LockKeyhole, Settings, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang, scrollToSection } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "./ui";
import { DN_ASSETS, SOLUTION_SPRITE as S } from "./assets";

const ICONS = [ChartColumnBig, LockKeyhole, Settings];

export function DnOverview() {
  const { t } = useLang();
  const o = t.dedicated.overview;
  return (
    <section data-testid="dn-overview" className="bg-[#F4F7FC]">
      <div className="grid lg:grid-cols-[49%_51%] items-center">
        <Reveal>
          <DnImage asset={DN_ASSETS.overview} className="h-[300px] sm:h-[420px] lg:h-[540px] overflow-hidden lg:rounded-br-[22px]" imgClass="object-[30%_center]" />
        </Reveal>
        <Reveal delay={0.1} className="px-6 py-14 lg:py-16 lg:pl-16 lg:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
          <BbEyebrow>{o.eyebrow}</BbEyebrow>
          <h2 className="mt-4 text-[32px] lg:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] text-bb-navy">
            {o.title1}
            <br />
            {o.title2}
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.75] text-bb-text max-w-[600px]">{o.body}</p>
          <div className="mt-10 grid sm:grid-cols-3 gap-8">
            {o.features.map(([title, body], i) => {
              const Icon = ICONS[i];
              return (
                <div key={title} data-testid={`dn-overview-feature-${i}`}>
                  <Icon className="w-9 h-9 text-bb-blue" strokeWidth={1.5} />
                  <h3 className="mt-4 text-[14.5px] font-bold text-bb-navy">{title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-bb-text">{body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SolutionPhoto({ i }) {
  const style = {
    backgroundImage: `url(${DN_ASSETS.solutions.src})`,
    backgroundSize: `${(S.width / S.w) * 100}% auto`,
    backgroundPosition: `${(S.x[i] / (S.width - S.w)) * 100}% ${(S.y / (S.height - S.h)) * 100}%`,
    aspectRatio: `${S.w} / ${S.h}`,
  };
  return <div role="img" aria-label="" className="w-full bg-no-repeat transition-transform duration-700 group-hover:scale-[1.04]" style={style} />;
}

export function DnSolutions() {
  const { t } = useLang();
  const s = t.dedicated.solutions;
  return (
    <section data-testid="dn-solutions" className="bg-white py-20 lg:py-24">
      <div className={WRAP}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal>
            <BbEyebrow>{s.eyebrow}</BbEyebrow>
            <h2 className="mt-4 text-[32px] lg:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] text-bb-navy">
              {s.title1}
              <br />
              {s.title2}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-bb-text max-w-[420px]">{s.body}</p>
          </Reveal>
          <button
            data-testid="dn-view-all-solutions"
            onClick={() => scrollToSection("#services")}
            className="group inline-flex items-center gap-3 text-[14px] font-bold text-bb-blue self-start lg:self-end lg:mb-8"
          >
            {s.viewAll}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.items.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article data-testid={`dn-solution-card-${i}`} className="group h-full bg-white rounded-lg overflow-hidden border border-slate-100 shadow-[0_14px_36px_-20px_rgba(11,29,69,0.28)] hover:-translate-y-1 transition-transform duration-500">
                <div className="overflow-hidden">
                  <SolutionPhoto i={i} />
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-[15.5px] font-bold text-bb-navy">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-bb-text">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
