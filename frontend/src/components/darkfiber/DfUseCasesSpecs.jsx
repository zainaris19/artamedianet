import { CircleDot, Waypoints, Gauge, Route } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "../dedicated/ui";
import { DF_ASSETS, USECASE_SPRITE as S } from "./assets";
import { DfTitle } from "./DfHero";

const sprite = (x0) => ({
  backgroundImage: `url(${DF_ASSETS.useCasesSprite})`,
  backgroundSize: `${(S.width / S.w) * 100}% auto`,
  backgroundPosition: `${(x0 / (S.width - S.w)) * 100}% ${(S.y / (S.height - S.h)) * 100}%`,
  aspectRatio: `${S.w} / ${S.h}`,
});

export function DfUseCases() {
  const { t } = useLang();
  const u = t.darkFiber.useCases;
  return (
    <section data-testid="df-usecases" className="bg-[#F7FAFE] py-16 lg:py-20">
      <div className={WRAP}>
        <Reveal>
          <BbEyebrow>{u.eyebrow}</BbEyebrow>
          <DfTitle>{u.title}</DfTitle>
          <p className="mt-3 text-[15px] leading-[1.7] text-bb-text">{u.body}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {u.items.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article data-testid={`df-usecase-card-${i}`} className="h-full rounded-lg border border-slate-200/80 bg-white overflow-hidden shadow-[0_12px_30px_-24px_rgba(11,29,69,0.4)] transition-transform duration-300 hover:-translate-y-1">
                <div role="img" aria-label={title} data-testid={`df-usecase-img-${i}`} className="w-full bg-no-repeat" style={sprite(S.x[i])} />
                <div className="p-5">
                  <h3 className="text-[14.5px] font-bold text-bb-navy">{title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-bb-text">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SPEC_ICONS = [CircleDot, Waypoints, Gauge, Route];

export function DfSpecs() {
  const { t } = useLang();
  const s = t.darkFiber.specs;
  const hasImg = Boolean(DF_ASSETS.specs.src);
  return (
    <section data-testid="df-specs" className="relative bg-bb-navy overflow-hidden">
      <div className={`${WRAP} relative z-10 py-16 lg:py-20`}>
        <Reveal className="lg:max-w-[56%]">
          <BbEyebrow dark>{s.eyebrow}</BbEyebrow>
          <DfTitle dark>{s.title}</DfTitle>
          <p className="mt-4 text-[15px] leading-[1.75] text-slate-300 max-w-[520px]">{s.body}</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {s.items.map((label, i) => {
              const Icon = SPEC_ICONS[i];
              return (
                <div key={label} data-testid={`df-spec-${i}`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <p className="mt-4 text-[13px] font-semibold leading-snug text-white">{label}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
      <div data-testid="df-specs-image" className={`relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[40%] ${hasImg ? "" : "p-6 lg:p-8"}`}>
        <DnImage asset={DF_ASSETS.specs} dark className={`w-full h-[260px] sm:h-[340px] lg:h-full ${hasImg ? "" : "rounded-xl"}`} />
        {hasImg && <div className="absolute inset-0 pointer-events-none hidden lg:block bg-[linear-gradient(90deg,#0B1D45_0%,rgba(11,29,69,0)_30%)]" />}
      </div>
    </section>
  );
}
