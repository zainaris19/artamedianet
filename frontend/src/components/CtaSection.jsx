import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, useContact } from "../context/LanguageContext";
import { IMAGES } from "../content";

export default function CtaSection() {
  const { t } = useLang();
  const { openContact } = useContact();
  return (
    <section id="contact" data-testid="cta-section" className="relative overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={IMAGES.cta} alt="Aerial highway through forest" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#032B1B]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02180F]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8 py-28 lg:py-36">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-emerald-300" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.28em] uppercase text-emerald-300">
              {t.cta.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold tracking-tight text-white text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
            {t.cta.title1}
            <br />
            <span className="text-emerald-300 drop-shadow-[0_0_30px_rgba(110,231,183,0.35)]">{t.cta.title2}</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-emerald-50/80 max-w-md">{t.cta.body}</p>
          <button
            data-testid="cta-banner-btn"
            onClick={openContact}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-white text-navy-950 text-sm font-bold px-8 py-4 transition-all duration-300 hover:bg-emerald-200 hover:shadow-[0_0_40px_rgba(110,231,183,0.4)]"
          >
            {t.cta.btn}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
