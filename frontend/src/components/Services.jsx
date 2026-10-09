import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, useContact } from "../context/LanguageContext";
import { IMAGES } from "../content";

const GLOWS = [
  "rgba(30, 99, 233, 0.55)",
  "rgba(15, 180, 196, 0.5)",
  "rgba(10, 158, 86, 0.5)",
  "rgba(124, 58, 237, 0.55)",
  "rgba(43, 184, 212, 0.5)",
  "rgba(240, 122, 26, 0.55)",
];

export default function Services() {
  const { t } = useLang();
  const { openContact } = useContact();
  return (
    <section id="services" data-testid="services-section" className="bg-navy-950 py-24 lg:py-28 grain">
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8 lg:flex lg:items-center lg:gap-10">
        <div className="lg:w-[280px] xl:w-[310px] shrink-0">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-green2" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.28em] uppercase text-white">
                {t.services.eyebrow}
              </span>
            </div>
            <h2 className="mt-5 font-display font-extrabold tracking-tight text-white text-3xl lg:text-[34px] leading-[1.15]">
              {t.services.title.map((line, i) => (
                <span key={i} className={`block ${i === t.services.title.length - 1 ? "text-brand-green2" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 text-[13.5px] leading-relaxed text-slate-400 max-w-[260px]">{t.services.body}</p>
            <button
              data-testid="services-view-all-btn"
              onClick={openContact}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/40 hover:border-brand-green2 text-white text-[13px] font-semibold px-6 py-3 transition-all duration-300 hover:bg-brand-green/10"
            >
              {t.services.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <div className="flex-1 mt-12 lg:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {t.services.cards.map((title, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <button
                data-testid={`service-card-${String(i + 1).padStart(2, "0")}`}
                onClick={openContact}
                style={{ "--glow": GLOWS[i] }}
                className="service-card group relative block w-full text-left rounded-xl overflow-hidden h-[300px] xl:h-[370px] border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/40"
              >
                <img
                  src={IMAGES.services[i]}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
