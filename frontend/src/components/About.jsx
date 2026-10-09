import { ArrowRight, Share2, RefreshCw, Globe2, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, scrollToSection } from "../context/LanguageContext";

const FEATURE_ICONS = [Share2, RefreshCw, Globe2, BarChart3];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" data-testid="about-section" className="relative overflow-hidden bg-gradient-to-r from-white via-[#F6FAFD] to-[#E3EFF9]">
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[56%]"
        data-testid="about-image"
      >
        <img
          src="/about-engineer.jpg"
          alt="Artamedia network engineer overlooking the bay"
          className="w-full h-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 28%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 28%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-y-12 gap-x-6 items-center py-20 lg:py-24 lg:min-h-[560px]">
        <Reveal className="lg:col-span-4">
          <div className="flex items-start gap-2.5">
            <span className="h-px w-7 bg-brand-green mt-[6px] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-ink uppercase leading-[1.55]">
              {t.about.eyebrow.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </span>
          </div>
          <h2 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[34px] lg:text-[46px] leading-[1.12]">
            {t.about.title.map((line, i) => (
              <span key={i} className={`block ${i === t.about.title.length - 1 ? "text-[#1B72E8]" : ""}`}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-xs text-[13.5px] lg:text-sm leading-relaxed text-slate-500">{t.about.body}</p>
          <button
            data-testid="about-learn-more-btn"
            onClick={() => scrollToSection("#network")}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-sm font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,166,81,0.4)]"
          >
            {t.about.cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="lg:col-span-3 lg:col-start-6 order-3 lg:order-2">
          {t.about.features.map(([a, b], i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <Reveal key={b} delay={i * 0.08}>
                <div
                  data-testid={`about-feature-${i}`}
                  className={`flex items-center gap-5 py-4 ${i !== t.about.features.length - 1 ? "border-b border-slate-200" : ""}`}
                >
                  <Icon className="w-9 h-9 text-brand-green shrink-0" strokeWidth={1.4} />
                  <div className="leading-snug">
                    <div className="font-display font-bold text-ink text-[15px]">{a}</div>
                    <div className="text-slate-500 text-[13.5px] mt-0.5">{b}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="lg:hidden order-2 -mx-5">
          <img
            src="/about-engineer.jpg"
            alt="Artamedia network engineer overlooking the bay"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
