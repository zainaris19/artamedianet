import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, useContact } from "../context/LanguageContext";
import { INDUSTRY_IMAGES } from "../content";

export default function Industries() {
  const { t } = useLang();
  const { openContact } = useContact();
  return (
    <section id="industries" data-testid="industries-section" className="bg-[#EEF3F8] border-t border-slate-300 py-24 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        <Reveal className="lg:col-span-4 min-w-0">
          <div className="flex items-start gap-2.5">
            <span className="h-px w-7 bg-brand-green mt-[6px] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-ink uppercase leading-[1.55]">
              {t.industries.eyebrow}
            </span>
          </div>
          <h2 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[34px] lg:text-[42px] leading-[1.1] uppercase">
            {t.industries.title1[0]}
            <br />
            <span className="text-[#1B72E8]">{t.industries.title1[1]}</span>
            <br />
            {t.industries.title2}
          </h2>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-slate-500">{t.industries.body}</p>
          <button
            data-testid="industries-explore-btn"
            onClick={openContact}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-sm font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,166,81,0.4)]"
          >
            {t.industries.cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="lg:col-span-8 min-w-0">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5">
            {t.industries.cards.map((name, i) => (
              <Reveal key={name} delay={i * 0.05}>
                <button
                  data-testid={`industry-card-${i}`}
                  onClick={openContact}
                  className="group relative block w-full overflow-hidden rounded-xl aspect-[675/553] border border-slate-200/70"
                >
                  <img
                    src={INDUSTRY_IMAGES[i]}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/15 transition-colors duration-500" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
