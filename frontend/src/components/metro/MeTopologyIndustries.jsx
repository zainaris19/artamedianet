import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "../dedicated/ui";
import { ME_ASSETS, TOPOLOGY_SPRITE as S } from "./assets";

const spriteStyle = (x0) => ({
  backgroundImage: `url(${ME_ASSETS.topology.src})`,
  backgroundSize: `${(S.width / S.w) * 100}% auto`,
  backgroundPosition: `${(x0 / (S.width - S.w)) * 100}% ${(S.y / (S.height - S.h)) * 100}%`,
  aspectRatio: `${S.w} / ${S.h}`,
});

function Heading({ eyebrow, title, body }) {
  return (
    <>
      <BbEyebrow>{eyebrow}</BbEyebrow>
      <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[30px] lg:text-[38px] leading-[1.15]">{title}</h2>
      <p className="mt-3 text-[15px] leading-[1.7] text-bb-text max-w-[620px]">{body}</p>
    </>
  );
}

export function MeTopology() {
  const { t } = useLang();
  const tp = t.metro.topology;
  return (
    <section data-testid="me-topology" className="bg-white pb-16 lg:pb-20">
      <div className={WRAP}>
        <Reveal>
          <Heading {...tp} />
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tp.items.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article data-testid={`me-topology-card-${i}`} className="h-full rounded-xl border border-slate-200/80 bg-[#F7FAFE] overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(11,29,69,0.35)]">
                <div role="img" aria-label={title} className="w-full bg-no-repeat" style={spriteStyle(S.x[i])} />
                <div className="px-6 pb-6 pt-2">
                  <h3 className="text-[16px] font-bold text-bb-navy">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-bb-text">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MeIndustries() {
  const { t } = useLang();
  const ind = t.metro.industries;
  return (
    <section data-testid="me-industries" className="bg-white pb-16 lg:pb-20">
      <div className={WRAP}>
        <Reveal>
          <Heading {...ind} />
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ind.items.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article data-testid={`me-industry-card-${i}`} className="h-full rounded-lg border border-slate-200/80 bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <DnImage asset={ME_ASSETS.industries[i]} className="aspect-[16/10] overflow-hidden !p-2" />
                <div className="p-4">
                  <h3 className="text-[14.5px] font-bold text-bb-navy">{title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-bb-text">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
