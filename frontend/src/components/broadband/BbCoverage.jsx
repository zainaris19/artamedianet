import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "./ui";

export default function BbCoverage() {
  const { t } = useLang();
  const c = t.broadband.coverage;
  return (
    <section data-testid="bb-coverage" className="relative bg-bb-deep overflow-hidden">
      <div className="lg:absolute inset-y-0 right-0 lg:w-[58%] relative aspect-[1956/804] lg:aspect-auto">
        <img data-testid="bb-coverage-map" src="/broadband/map.png" alt="Artamedia network map of Indonesia" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-bb-deep via-bb-deep/20 to-transparent" />
      </div>
      <div className={`${WRAP} relative py-14 lg:py-20`}>
        <Reveal className="lg:max-w-[50%]">
          <BbEyebrow dark>{c.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-white text-[32px] lg:text-[40px] leading-tight">{c.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-300 max-w-[520px]">{c.body}</p>
          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {c.stats.map(([value, label], i) => (
              <div key={value} data-testid={`bb-coverage-stat-${i}`}>
                <div className="text-[19px] font-extrabold text-white leading-tight">{value}</div>
                <div className="mt-1 text-[12px] leading-snug text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
